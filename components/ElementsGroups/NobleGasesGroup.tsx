import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import nobleGasesData from "../../json/nobleGasesData.json";

export function NobleGasesGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {nobleGasesData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[5].className}
          dialogTitle={element.dialogTitle}
          elementName={element.elementName}
          elementNumber={element.elementNumber}
          elementDescription="This is a description of Hydrogen."
          elementImage="hydrogen-image-url.jpg"
          elementAltText="Hydrogen Atom"
        />
      ))}
    </div>
  );
}
