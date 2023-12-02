'use client'

import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('./canvas.tsx'), {
    ssr: false,
})

export default function DesignPlace() {
    return <Canvas />
}
