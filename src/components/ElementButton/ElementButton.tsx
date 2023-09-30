import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@radix-ui/react-dialog";

export function ElementButton(props: any) {
  return (
    <Dialog>
      <div className="inline-flex items-center flex-col">
        <DialogTrigger asChild>
          <div className={props.attributes}>
            <div className="text-end text-xs">{props.elementNumber}</div>

            <div className="text-m">{props.elementName}</div>
          </div>
        </DialogTrigger>

        <DialogTitle>{props.dialogTitle}</DialogTitle>
      </div>

      <DialogContent className="fixed bg-slate-200 w-5/6 h-screen z-50 mx-auto p-3 ml-5 -mt-90 rounded-2xl ">
        <DialogTitle>{props.dialogContentTitle}</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
