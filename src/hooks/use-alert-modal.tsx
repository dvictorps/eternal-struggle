import { useState, useCallback } from 'react'
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

export function useAlertModal() {
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

    const AlertModal = useCallback(() => {
        return (
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
        )
    }, [state, handleConfirm, handleCancel])

    return {
        openAlertModal,
        closeAlertModal,
        AlertModal,
        isOpen: state.isOpen,
        isLoading: state.isLoading,
    }
}

