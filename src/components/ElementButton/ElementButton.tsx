import { Dialog, DialogTitle } from "@radix-ui/react-dialog"

export function ElementButton(props: any ) {
   

    return (

        <Dialog>
            <div className="inline-flex items-center flex-col">

                <div className={props.atribbutes}>
                        
                    <div className="text-end text-xs">
                        {props.elementNumber}
                    </div>

                    <div className="text-m">
                        {props.elementName}
                    </div>

                </div>

                <DialogTitle >{props.dialogTitle}</DialogTitle>

            </div>

        </Dialog>

    )
}