import ElementButton from "../ElementButton"

export function AlkalineEarthMetalsGroup(){
    return (
        <div className="flex justify-center gap-8 overflow-auto">
        <ElementButton dialogTitle="Berílio" elementName="Be" elementNumber="4"/>
        <ElementButton dialogTitle="Magnésio" elementName="Mg" elementNumber="12"/>
        <ElementButton dialogTitle="Calcio" elementName="Ca" elementNumber="20"/>
        <ElementButton dialogTitle="Estrôncio" elementName="Sr" elementNumber="38"/>
        </div>
    )
}