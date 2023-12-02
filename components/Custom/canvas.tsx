import { useAppSelector } from '@/store/hook'
import { Stage, Layer } from 'react-konva'
import ImageCanvas from './imageCanvas'
import { useState } from 'react'
import { KonvaEventObject } from 'konva/lib/Node'

function Canvas() {
    const imgs = useAppSelector((state) => state.item.img)
    const [selectedId, selectShape] = useState<number | null>(1)
    const onSelect = (id: number) => {
        selectShape(id)
        console.log(id)
        // console.log(id)
    }

    const checkDeselect = (e: KonvaEventObject<MouseEvent> | KonvaEventObject<TouchEvent>) => {
        const clickedOnEmpty = e.target === e.target.getStage()
        if (clickedOnEmpty) {
            selectShape(null)
        }
    }

    return (
        <Stage
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            drawBorder
            width={700}
            height={500}
            className="bg-white"
        >
            <Layer>
                {imgs.map((img) => {
                    return (
                        <ImageCanvas
                            isSelected={selectedId === img.id}
                            onSelect={() => onSelect(img.id)}
                            key={img.id}
                            img={img}
                        />
                    )
                })}
            </Layer>
        </Stage>
    )
}

export default Canvas
