import { Dialog, DialogTitle } from "@radix-ui/react-dialog"

export function ElementButton(props: any) {
    return (

        <Dialog>
            <div className="inline-flex items-center flex-col">

                <div className="bg-blue-500 w-12 h-12 rounded-2xl text-white p-2">

                    <div className="text-end text-xs">
                        {props.elementNumber}
                    </div>

                    <div className="text-m">
                        {props.elementName}
                    </div>

                </div>

                <DialogTitle className="">{props.dialogTitle}</DialogTitle>

            </div>

        </Dialog>

    )
}