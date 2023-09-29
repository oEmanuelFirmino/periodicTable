import ElementButton from "../ElementButton"
import { attribute } from "../../assets/attributes"

export function AlkalineEarthMetalsGroup(){
    return (
        <div className="flex gap-3 mt-10">
        <ElementButton atribbutes={attribute[2].className} dialogTitle="Berílio" elementName="Be" elementNumber="4"/>
        <ElementButton atribbutes={attribute[2].className} dialogTitle="Magnésio" elementName="Mg" elementNumber="12"/>
        <ElementButton atribbutes={attribute[2].className} dialogTitle="Calcio" elementName="Ca" elementNumber="20"/>
        <ElementButton atribbutes={attribute[2].className} dialogTitle="Estrôncio" elementName="Sr" elementNumber="38"/>
        <ElementButton atribbutes={attribute[2].className} dialogTitle="Bário" elementName="Ba" elementNumber="56"/>
        <ElementButton atribbutes={attribute[2].className} dialogTitle="Rádio" elementName="Ra" elementNumber="88"/>
        </div>
    )
}