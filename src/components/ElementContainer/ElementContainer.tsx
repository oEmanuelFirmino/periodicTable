import { Label } from "@radix-ui/react-label"

export function ElementContainer(props : any){
    return ( 

       <div className="bg-slate-300 w-auto h-40 rounded-2xl justify-evenly scroll-ml-6 p-4 overflow-x-auto mt-2 mb-10 shadow-md">
  
        <Label className="absolute font-bold">{props.GroupName}</Label>
        {props.ElementsGroup}
    
       </div>
    )
}