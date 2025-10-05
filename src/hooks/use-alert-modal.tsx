import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface AlertModalOptions {
    title?: string
    description?: string
    confirmText?: string
    cancelText?: string
    variant?: 'default' | 'destructive'
    onConfirm?: () => void | Promise<void>
    onCancel?: () => void
}

interface AlertModalState extends AlertModalOptions {
    isOpen: boolean
    isLoading: boolean
}

interface AlertModalContextValue {
    openAlertModal: (options: AlertModalOptions) => void
    closeAlertModal: () => void
    isOpen: boolean
    isLoading: boolean
}

const AlertModalContext = createContext<AlertModalContextValue | undefined>(undefined)

export function AlertModalProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AlertModalState>({
        isOpen: false,
        isLoading: false,
        title: '',
        description: '',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        variant: 'default',
    })

    const openAlertModal = useCallback((options: AlertModalOptions) => {
        setState({
            isOpen: true,
            isLoading: false,
            title: options.title,
            description: options.description,
            confirmText: options.confirmText ?? 'Confirm',
            cancelText: options.cancelText ?? 'Cancel',
            variant: options.variant ?? 'default',
            onConfirm: options.onConfirm,
            onCancel: options.onCancel,
        })
    }, [])

    const closeAlertModal = useCallback(() => {
        setState((prev) => ({ ...prev, isOpen: false, isLoading: false }))
    }, [])

    const handleConfirm = useCallback(async () => {
        if (!state.onConfirm) {
            closeAlertModal()
            return
        }

        setState((prev) => ({ ...prev, isLoading: true }))

        try {
            await state.onConfirm()
            closeAlertModal()
        } catch (error) {
            setState((prev) => ({ ...prev, isLoading: false }))
            throw error
        }
    }, [state.onConfirm, closeAlertModal])

    const handleCancel = useCallback(() => {
        state.onCancel?.()
        closeAlertModal()
    }, [state.onCancel, closeAlertModal])

    return (
        <AlertModalContext.Provider
            value={{
                openAlertModal,
                closeAlertModal,
                isOpen: state.isOpen,
                isLoading: state.isLoading,
            }}
        >
            {children}
            <Dialog open={state.isOpen} onOpenChange={(open) => {
                if (!open && !state.isLoading) {
                    handleCancel()
                }
            }}>
                <DialogContent showCloseButton={!state.isLoading}>
                    <DialogHeader>
                        {state.title && <DialogTitle>{state.title}</DialogTitle>}
                        {state.description && <DialogDescription>{state.description}</DialogDescription>}
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={handleCancel}
                            disabled={state.isLoading}
                        >
                            {state.cancelText}
                        </Button>
                        <Button
                            variant={state.variant}
                            onClick={handleConfirm}
                            disabled={state.isLoading}
                        >
                            {state.isLoading ? 'Loading...' : state.confirmText}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AlertModalContext.Provider>
    )
}

export function useAlertModal() {
    const context = useContext(AlertModalContext)
    if (!context) {
        throw new Error('useAlertModal must be used within an AlertModalProvider')
    }
    return context
}
