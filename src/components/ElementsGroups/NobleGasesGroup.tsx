import ElementButton from "../ElementButton"

export function NobleGasesGroup(){
    return (
        <div className="flex justify-center gap-5 overflow-auto">
        <ElementButton dialogTitle="Hélio" elementName="H" elementNumber="2"/>
        <ElementButton dialogTitle="Neônio" elementName="Ne" elementNumber="10"/>
        <ElementButton dialogTitle="Argõnio" elementName="Ar" elementNumber="18"/>
        <ElementButton dialogTitle="Criptônio" elementName="Kr" elementNumber="36"/>
        <ElementButton dialogTitle="Criptônio" elementName="Kr" elementNumber="36"/>
        <ElementButton dialogTitle="Criptônio" elementName="Kr" elementNumber="36"/>
        </div>
    )
}