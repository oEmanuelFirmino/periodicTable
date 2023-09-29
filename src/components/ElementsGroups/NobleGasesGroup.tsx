import ElementButton from "../ElementButton"

export function NobleGasesGroup(){
    return (
        <div className="flex">
        <ElementButton dialogTitle="Hélio" elementName="He" elementNumber="2"/>
        <ElementButton dialogTitle="Neônio" elementName="Ne" elementNumber="10"/>
        <ElementButton dialogTitle="Argõnio" elementName="Ar" elementNumber="18"/>
        <ElementButton dialogTitle="Criptônio" elementName="Kr" elementNumber="36"/>
        <ElementButton dialogTitle="Xenônio" elementName="Xe" elementNumber="54"/>
        <ElementButton dialogTitle="Radônio" elementName="Rn" elementNumber="86"/>
        <ElementButton dialogTitle="Oganessônio" elementName="Og" elementNumber="118"/>
        </div>
    )
}