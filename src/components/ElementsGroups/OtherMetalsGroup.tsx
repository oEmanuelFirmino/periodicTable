import ElementButton from "../ElementButton"
import { attribute } from "../../assets/attributes"

export function OtherMetalsGroup(){
    return (
        <div className="flex gap-3 mt-10">
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Alumínio" elementName="Al" elementNumber="13"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Gálio" elementName="Ga" elementNumber="31"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Índio" elementName="In" elementNumber="49"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Estanho" elementName="Sn" elementNumber="50"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Tálio" elementName="Tl" elementNumber="82"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Chumbo" elementName="Pb" elementNumber="83"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Bismuto" elementName="Bi" elementNumber="113"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Nihônio" elementName="Nh" elementNumber="114"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Flevório" elementName="Fl" elementNumber="115"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Moscóvio" elementName="Mc" elementNumber="116"/>
        <ElementButton atribbutes={attribute[6].className} dialogTitle="Livermório" elementName="Lv" elementNumber="116"/>
        </div>
    )
}