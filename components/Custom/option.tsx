import { BackwardIcon, ForwardIcon, RefeshIcon, TrashIcon } from '@/public/assets/icons'

type Props = {}

const Options = [
    {
        id: 1,
        icon: <RefeshIcon />,
        text: 'Reset',
    },
    {
        id: 2,
        icon: <TrashIcon />,
        text: 'Delete',
    },
    {
        id: 3,
        icon: <ForwardIcon />,
        text: 'Forward',
    },
    {
        id: 4,
        icon: <BackwardIcon />,
        text: 'Backward',
    },
]

export default function Option({}: Props) {
    return (
        <div className="flex gap-4 justify-center">
            {Options.map((option) => {
                return (
                    <div key={option.id} className="flex flex-col items-center cursor-pointer">
                        <div className="w-8 h-8 svg-hover">{option.icon}</div>
                        <p>{option.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
