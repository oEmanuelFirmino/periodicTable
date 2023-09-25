import { Dialog, DialogTitle } from "@radix-ui/react-dialog"

export function ElementButton(props: any){
    return (    
        
        <Dialog>
            <div className="flex-row justify-center items-center text-center">
                <div className="bg-blue-500 w-12 h-12 rounded-2xl text-white align-self-center">
                    <div className="text-end mr-2 mt-2 text-xs">
                    {props.elementNumber}
                    </div>

                    <div className="text-2xl text-center">
                    {props.elementName}
                    </div>

                 </div>
            <DialogTitle className="text-center justify-center flex items-center w-full">{props.dialogTitle}</DialogTitle>
            </div>
            
        </Dialog>
       
    )
}