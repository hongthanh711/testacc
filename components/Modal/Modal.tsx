import React, { useState } from 'react'

interface Props {
    isOpen: boolean
    onClose?: any
    children: React.ReactNode
    className?: string
    closeClickOverlay?: boolean
}

const Modal: React.FC<Props> = ({
    isOpen,
    onClose,
    children,
    className = '',
    closeClickOverlay = true,
}) => {
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        if (!closeClickOverlay) return
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, 300)
    }

    return (
        <>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 h-full bg-gray-700 bg-opacity-75 transition-opacity z-50"
                    onClick={handleClose}
                >
                    <div
                        className={`fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl top-1/2 shadow-lg p-8 transition-all max-h-[85%] overflow-y-scroll md:max-h-full md:overflow-y-auto  ${
                            isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                        } ${className}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
