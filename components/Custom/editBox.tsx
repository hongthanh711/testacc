import Button from '@/components/button'
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CompressIcon,
    EditIcon,
    ExchangeIcon,
    ExpandIcon,
    RotateIcon,
} from '@/public/assets/icons'
import { ColorPicker, Select } from 'antd'

export default function EditBox() {
    return (
        // <div className="flex flex-col gap-2 bg-[#f1f3f3] p-6">
        //     <div>
        //         <Button
        //             icon={<EditIcon />}
        //             className="w-full"
        //             variant="white"
        //             text="Change Image"
        //         />
        //     </div>
        //     <div className="flex justify-between gap-5">
        //         <div className="basis-1/2">
        //             <Button icon={<ExpandIcon />} className="w-full" variant="white" text="Fill" />
        //         </div>
        //         <div className="basis-1/2">
        //             <Button icon={<CompressIcon />} className="w-full" variant="white" text="Fit" />
        //         </div>
        //     </div>
        //     <div className="flex justify-between gap-5">
        //         <Button icon={<ExchangeIcon />} className="w-full" variant="white" text="Flip" />
        //         <Button icon={<RotateIcon />} className="w-full" variant="white" text="Rotate" />
        //     </div>
        // </div>
        <div className="flex flex-col gap-4 bg-[#f1f3f3] p-6">
            <Button className="w-full" icon={<EditIcon />} variant="white" text="Edit" />
            <div>
                <Select
                    className="w-full bg-white rounded-lg text-center"
                    defaultValue="font"
                    bordered={false}
                    // style={{ width: 120 }}
                    // onChange={handleChange}
                    options={[
                        { value: 'font', label: 'font' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                    ]}
                />
            </div>
            <div className="flex justify-center gap-5">
                <div className="flex flex-col items-center">
                    <Button variant="white" icon={<RotateIcon />} />
                    <p>Rotote</p>
                </div>
                <div className="flex flex-col items-center">
                    <ColorPicker />
                    <p>Color</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex gap-1">
                        <div className="w-8 h-8 border border-black cursor-pointer">
                            <ArrowDownIcon />
                        </div>
                        <div className="w-8 h-8 border border-black cursor-pointer">
                            <ArrowUpIcon />
                        </div>
                    </div>
                    <p>Size</p>
                </div>
            </div>
        </div>
    )
}
