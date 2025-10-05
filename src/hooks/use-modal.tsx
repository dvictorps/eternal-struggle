import { useState, useCallback, type ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

interface ModalOptions {
    title?: string
    description?: string
    content?: ReactNode
    showCloseButton?: boolean
    onClose?: () => void
}

interface ModalState extends ModalOptions {
    isOpen: boolean
}

export function useModal() {
    const [state, setState] = useState<ModalState>({
        isOpen: false,
        title: '',
        description: '',
        content: null,
        showCloseButton: true,
    })

    const openModal = useCallback((options: ModalOptions) => {
        setState({
            isOpen: true,
            title: options.title,
            description: options.description,
            content: options.content,
            showCloseButton: options.showCloseButton ?? true,
            onClose: options.onClose,
        })
    }, [])

    const closeModal = useCallback(() => {
        state.onClose?.()
        setState((prev) => ({ ...prev, isOpen: false }))
    }, [state.onClose])

    const Modal = useCallback(() => {
        return (
            <Dialog open={state.isOpen} onOpenChange={(open) => {
                if (!open) {
                    closeModal()
                }
            }}>
                <DialogContent showCloseButton={state.showCloseButton}>
                    {(state.title || state.description) && (
                        <DialogHeader>
                            {state.title && <DialogTitle>{state.title}</DialogTitle>}
                            {state.description && <DialogDescription>{state.description}</DialogDescription>}
                        </DialogHeader>
                    )}
                    {state.content}
                </DialogContent>
            </Dialog>
        )
    }, [state, closeModal])

    return {
        openModal,
        closeModal,
        Modal,
        isOpen: state.isOpen,
    }
}

