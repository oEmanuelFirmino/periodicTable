import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
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

      <DialogContent className="fixed bg-slate-100 w-5/6 h-5/6 z-50 p-3 left-8 right-8 top-24 rounded-2xl border-2 border-black divide-y divide-slate-700 	divide-dotted shadow-2xl shadow-slate-950">
        <DialogTitle className="font-bold text-2xl">
          Hélio{props.dialogContentTitle}
        </DialogTitle>
        <DialogDescription className="whitespace-pre-line">
          Make changes to your profile here. Click save when you're done.
          {props.elementDescription}
        </DialogDescription>
        <img
          className="w-5/6 mx-auto"
          src="https://c8.alamy.com/compes/bktnj6/helio-colorcode-nucleo-atomico-rojo-proton-neutron-electron-blanco-blue-shell-electron-bktnj6.jpg"
          //   src={props.elementImage}
          alt={props.elementAltText}
        />
        <div></div>
      </DialogContent>
    </Dialog>
  );
}
