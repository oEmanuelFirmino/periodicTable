import ElementButton from "../ElementButton"

export function SemiMetalsGroup(){
    return (
        <div className="">
        <ElementButton dialogTitle="Boro" elementName="B" elementNumber="5"/>
        <ElementButton dialogTitle="Silício" elementName="Si" elementNumber="14"/>
        <ElementButton dialogTitle="Germânio" elementName="Ge" elementNumber="32"/>
        <ElementButton dialogTitle="Arsênio" elementName="As" elementNumber="33"/>
        <ElementButton dialogTitle="Antimônio" elementName="Sb" elementNumber="51"/>
        <ElementButton dialogTitle="Telúrio" elementName="Te" elementNumber="52"/>
        </div>
    )
}