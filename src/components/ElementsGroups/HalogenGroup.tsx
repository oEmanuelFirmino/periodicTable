import ElementButton from "../ElementButton"
import { attribute } from "../../assets/attributes"

export function HalogenGroup(){
    return (
        <div className="flex gap-3 mt-10">
        <ElementButton atribbutes={attribute[7].className} dialogTitle="Flúor" elementName="F" elementNumber="9"/>
        <ElementButton atribbutes={attribute[7].className} dialogTitle="Cloro" elementName="Cl" elementNumber="17"/>
        <ElementButton atribbutes={attribute[7].className} dialogTitle="Bromo" elementName="Br" elementNumber="35"/>
        <ElementButton atribbutes={attribute[7].className} dialogTitle="Iodo" elementName="I" elementNumber="53"/>
        <ElementButton atribbutes={attribute[7].className} dialogTitle="Ástato" elementName="At" elementNumber="85"/>
        <ElementButton atribbutes={attribute[7].className} dialogTitle="Tenessino" elementName="Ts" elementNumber="117"/>
        </div>
    )
}