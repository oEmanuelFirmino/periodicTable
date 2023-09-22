import { Label } from "@radix-ui/react-label"
import ElementButton from "../ElementButton"
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
        flex-row
        space-y-2
        "
        >
            <Label htmlFor="123" className="">{props.text}</Label>
            <div className="flex justify-center gap-4 overflow-auto">
            <ElementButton dialogTitle="Hélio" elementName="H" elementNumber="2"/>
            <ElementButton dialogTitle="Neônio" elementName="Ne" elementNumber="10"/>
            <ElementButton dialogTitle="Argõnio" elementName="Ar" elementNumber="18"/>
            <ElementButton dialogTitle="Criptônio" elementName="Kr" elementNumber="36"/>
            <ElementButton dialogTitle="Criptônio" elementName="Kr" elementNumber="36"/>
            </div>
        </div>
    )
} 