'use client'
import Button from '@/components/button'
import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    MinusIcon,
    PictureIcon,
    PlusIcon,
    TargetIcon,
    TexIcon,
    UploadIcon,
} from '@/public/assets/icons'
import EditBox from './editBox'
import { ChangeEvent, useRef, useState } from 'react'
import { Input, Modal } from 'antd'
import { useAppDispatch } from '@/store/hook'
import { addImg } from '@/store/itemSlice'

type Props = {}

export default function ControllerDesign({}: Props) {
    const [isModalOpenText, setIsModalOpenText] = useState(false)
    const [isModalOpenImg, setIsModalOpenImg] = useState(false)
    const [srcImg, setSrcImg] = useState<string>(
        'https://anime.atsit.in/l/wp-content/uploads/2023/03/nhung-cau-noi-hay-nhat-ve-roronoa-zoro-trong-one-piece-about-life-badass-ones.jpg'
    )
    const [text, setText] = useState<string>('test')

    const inputImgRef = useRef(null)

    const dispath = useAppDispatch()

    // Handle Img
    const showModalImg = () => {
        setIsModalOpenImg(true)
    }

    const handleCancelImg = () => {
        setIsModalOpenImg(false)
    }

    const handleInputImgClick = () => {
        inputImgRef.current.click()
    }

    const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]
        setSrcImg(URL.createObjectURL(file))
        const img = {
            id: Date.now(),
            x: 300,
            y: 300,
            width: 200,
            height: 200,
            src: URL.createObjectURL(file),
        }
        dispath(addImg(img))
        setIsModalOpenImg(false)
    }

    // Handle Text
    const showModalText = () => {
        setIsModalOpenText(true)
    }

    const handleCancelText = () => {
        setIsModalOpenText(false)
    }

    const handleClickOkText = () => {}
    return (
        <div className="flex flex-col gap-5">
            {/* <img src={srcImg} alt="" /> */}
            <div className="flex gap-3">
                <Button
                    icon={<PictureIcon />}
                    className="w-full"
                    text="Add image"
                    onClick={showModalImg}
                />
                <Button
                    onClick={showModalText}
                    icon={<TexIcon />}
                    className="w-full"
                    text="Add text"
                />
            </div>
            <div className="bg-[#f1f3f3] flex items-center p-6 text-center">
                <div className="basis-1/2 flex flex-col items-center">
                    <div className="w-8 h-8 svg-hover">
                        <ArrowUpIcon />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-8 svg-hover">
                            <ArrowLeftIcon />
                        </div>
                        <div className="w-4 h-4 svg-hover">
                            <TargetIcon />
                        </div>
                        <div className="w-8 h-8 svg-hover">
                            <ArrowRightIcon />
                        </div>
                    </div>
                    <div className="w-8 h-8 svg-hover">
                        <ArrowDownIcon />
                    </div>
                </div>
                <div className="basis-1/2">
                    <p className="text-xs font-semibold">Scale</p>
                    <div className="flex justify-center gap-3 text-[40px]">
                        <div className="w-10 h-10 svg-hover">
                            <PlusIcon />
                        </div>
                        <div className="w-10 h-10 svg-hover">
                            <MinusIcon />
                        </div>
                    </div>
                </div>
            </div>
            <EditBox />
            <div className="text-right">
                <Button className="bg-green-500 hover:bg-green-700" text="Done" />
            </div>
            <Modal
                title="Add text"
                open={isModalOpenText}
                onCancel={handleCancelText}
                footer={null}
            >
                <Input
                    placeholder="Basic usage"
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <div className="text-center mt-5">
                    <Button text="Ok" onClick={handleClickOkText} />
                </div>
            </Modal>
            <Modal open={isModalOpenImg} onCancel={handleCancelImg} footer={null}>
                <div className="px-10 container">
                    <input
                        type="file"
                        onChange={handleImgChange}
                        className=""
                        ref={inputImgRef}
                        hidden
                    />
                    <div
                        className="mt-8 mb-10 p-10 border-2 border-grey-700 hover:border-black  border-dashed rounded-lg flex flex-col items-center cursor-pointer"
                        onClick={handleInputImgClick}
                    >
                        <div className="w-14 h-14">
                            <UploadIcon />
                        </div>
                        <p>Drop files here or click to upload</p>
                    </div>

                    <div className="flex gap-4">
                        <p>card</p>
                        <p>card</p>
                    </div>

                    <div className="mt-8">
                        <p className="text-xs font-semibold">Image Guidelines:</p>
                        <ul className="text-xs list-disc">
                            <li>
                                We recommend using an image greater than 1 MB, and for best results
                                a 1200 X 600px or higher resolution photo shot in portrait mode
                            </li>
                            <li>
                                We currently support a maximum file size of 8 MB in .jpg, .jpeg,
                                .png or .gif format
                            </li>
                        </ul>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
