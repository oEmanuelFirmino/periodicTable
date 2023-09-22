import { Label } from "@radix-ui/react-label"

export function ElementContainer(props : any){
    return ( 
        <div className="bg-slate-200
        w-full
        h-40
        pl-4
        pt-2
        font-bold
        mt-16
        rounded-2xl
        "
        >
            <Label htmlFor="123" className="">{props.text}</Label>

        </div>
    )
} 