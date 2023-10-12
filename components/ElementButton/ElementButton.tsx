import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@radix-ui/react-dialog";

interface ElementButtonProps {
  attributes: string;
  elementNumber: string;
  elementName: string;
  dialogTitle: string;
  elementDescription: string;
  elementImage: string;
  elementAltText: string;
}
export function ElementButton(props: ElementButtonProps) {
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

      <DialogContent className="fixed bg-slate-100 w-5/6 h-5/6 z-50 p-3 left-8 right-8 top-24 rounded-2xl border-2 border-black divide-y divide-slate-700 divide-dotted shadow-2xl shadow-slate-950">
        <DialogTitle className="font-bold text-2xl">
          {props.dialogTitle}
        </DialogTitle>
        <DialogDescription className="whitespace-pre-line">
          {props.elementDescription}
        </DialogDescription>
        <img
          className="w-5/6 mx-auto"
          src={props.elementImage}
          alt={props.elementAltText}
        />
      </DialogContent>
    </Dialog>
  );
}
