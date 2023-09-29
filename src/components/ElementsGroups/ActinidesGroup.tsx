import ElementButton from "../ElementButton"
import { attribute } from "../../assets/attributes"

export function ActinidesGroup(){
    return (
        <div className="flex gap-3 mt-10">
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Actínio" elementName="Ac" elementNumber="89"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Tório" elementName="Th" elementNumber="90"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Protactínio" elementName="Pa" elementNumber="91"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Urânio" elementName="U" elementNumber="92"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Neutúnio" elementName="Np" elementNumber="93"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Plutônio" elementName="Pu" elementNumber="94"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Amerício" elementName="Am" elementNumber="95"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Cúrio" elementName="Cm" elementNumber="96"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Berquélio" elementName="Bk" elementNumber="97"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Califórnio" elementName="Cf" elementNumber="98"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Einsténio" elementName="Es" elementNumber="99"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Férmio" elementName="Fm" elementNumber="100"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Mandelévio" elementName="Md" elementNumber="101"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Nobélio" elementName="No" elementNumber="102"/>
        <ElementButton atribbutes={attribute[9].className} dialogTitle="Laurêncio" elementName="Lr" elementNumber="103"/>
        </div>
    )
}