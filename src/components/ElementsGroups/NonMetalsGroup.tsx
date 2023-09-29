import ElementButton from "../ElementButton"

export function NonMetalsGroups(){
    return (
        <div className="flex">
        <ElementButton dialogTitle="Hidrogênio" elementName="H" elementNumber="1"/>
        <ElementButton dialogTitle="Carbono" elementName="C" elementNumber="6"/>
        <ElementButton dialogTitle="Nitrogênio" elementName="N" elementNumber="7"/>
        <ElementButton dialogTitle="Oxigênio" elementName="O" elementNumber="8"/>
        <ElementButton dialogTitle="Fósforo" elementName="P" elementNumber="15"/>
        <ElementButton dialogTitle="Enxofre" elementName="S" elementNumber="16"/>
        <ElementButton dialogTitle="Selênio" elementName="Se" elementNumber="34"/>
        </div>
    )
}