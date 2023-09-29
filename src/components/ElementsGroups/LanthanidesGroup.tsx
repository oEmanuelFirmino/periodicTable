import ElementButton from "../ElementButton"
import { attribute } from "../../assets/attributes"

export function LathanidesGroup(){
    return (
        <div className="flex gap-3 mt-10">
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Latânio" elementName="La" elementNumber="57"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Cério" elementName="Ce" elementNumber="58"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Praseodímio" elementName="Pr" elementNumber="59"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Neodímo" elementName="Nd" elementNumber="60"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Promécio" elementName="Pm" elementNumber="61"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Samário" elementName="Sm" elementNumber="62"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Európio" elementName="Eu" elementNumber="63"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Gadolínio" elementName="Gd" elementNumber="64"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Térbio" elementName="Tb" elementNumber="65"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Disprósio" elementName="Dy" elementNumber="66"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Hólmo" elementName="Ho" elementNumber="67"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Érbio" elementName="Er" elementNumber="68"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Túlio" elementName="Tm" elementNumber="69"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Itérbio" elementName="Yb" elementNumber="70"/>
        <ElementButton atribbutes={attribute[8].className} dialogTitle="Lutécio" elementName="Lu" elementNumber="71"/>
        </div>
    )
}