import clsx from 'clsx'
import React, { ReactNode } from 'react'

type Props = {
    text?: string
    variant?: 'black' | 'white'
    icon?: ReactNode
    className?: string | null
    onClick?: () => void
}

const VARIENT_MAP = {
    black: 'bg-black text-white hover:bg-[#e97700]',
    white: 'bg-white text-grey-text hover:bg-[#404040] hover:text-white',
}

export default function Button({
    text = '',
    variant = 'black',
    icon = null,
    className = null,
    onClick,
}: Props) {
    return (
        <button
            className={clsx(
                'py-2 px-4 font-semibold rounded-md text-center text-sm transition-all',
                VARIENT_MAP[variant],
                className
            )}
            onClick={onClick}
        >
            <div className="flex justify-center items-center gap-2">
                {icon && <div className="w-4 h-4">{icon}</div>}
                {text && <p>{text}</p>}
            </div>
        </button>
    )
}
