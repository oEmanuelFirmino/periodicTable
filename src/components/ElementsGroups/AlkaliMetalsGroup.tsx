import ElementButton from "../ElementButton"
import { attribute } from "../../assets/attributes"

export function AlkaliMetalsGroup(){
    return (
        <div className="flex gap-3 mt-10">
        <ElementButton atribbutes={attribute[1].className} dialogTitle="Lítio" elementName="Li" elementNumber="3"/>
        <ElementButton atribbutes={attribute[1].className} dialogTitle="Sódio" elementName="Na" elementNumber="11"/>
        <ElementButton atribbutes={attribute[1].className} dialogTitle="Potássio" elementName="K" elementNumber="19"/>
        <ElementButton atribbutes={attribute[1].className} dialogTitle="Rubídio" elementName="Rb" elementNumber="37"/>
        <ElementButton atribbutes={attribute[1].className} dialogTitle="Césio" elementName="Cs" elementNumber="55"/>
        <ElementButton atribbutes={attribute[1].className} dialogTitle="Frâncio" elementName="Fr" elementNumber="87"/>
        </div>
    )
}