import { ImgItemType } from '@/types/Img.type'
import { useEffect, useRef } from 'react'
import { Image, Transformer } from 'react-konva'
import useImage from 'use-image'

type Props = {
    img: ImgItemType
    onSelect: () => void
    isSelected?: boolean
}

function ImageCanvas({ img, onSelect, isSelected = false }: Props) {
    const [image, status] = useImage(img.src)
    const shapeRef = useRef(null)
    const trRef = useRef(null)

    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current])
            trRef.current.getLayer().batchDraw()
        }
    }, [isSelected])

    // let imageWidth = 300
    // let imageHeight = 0

    // if (image) {
    //     imageHeight = (imageWidth * image.naturalHeight) / image.naturalWidth
    // }

    return (
        <>
            <Image
                ref={shapeRef}
                onClick={onSelect}
                onTap={onSelect}
                key={img.id}
                width={img.width}
                x={img.x}
                y={img.y}
                height={img.height}
                alt="img"
                image={image}
                draggable
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox
                        }
                        return newBox
                    }}
                />
            )}
        </>
    )
}

export default ImageCanvas
