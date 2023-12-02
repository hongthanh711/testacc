import ControllerDesign from '@/components/Custom/controllerDesign'
import ObjectDesign from '@/components/Custom/objectDesign'

export default function Custom() {
    return (
        <main>
            <div className="bg-purple-100">
                <h1 className="text-center">Case Custom</h1>
                <div className="container mx-auto">
                    <div className="flex gap-20">
                        <div className="w-2/3">
                            <ObjectDesign />
                        </div>
                        <div className="w-1/3">
                            <ControllerDesign />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
