import ElementButton from "../ElementButton"

export function AlkaliMetalsGroup(){
    return (
        <div className="flex justify-center gap-10 overflow-auto">
        <ElementButton dialogTitle="Lítio" elementName="Li" elementNumber="3"/>
        <ElementButton dialogTitle="Sódio" elementName="Na" elementNumber="11"/>
        <ElementButton dialogTitle="Potássio" elementName="K" elementNumber="19"/>
        <ElementButton dialogTitle="Rubídio" elementName="Rb" elementNumber="37"/>
        </div>
    )
}