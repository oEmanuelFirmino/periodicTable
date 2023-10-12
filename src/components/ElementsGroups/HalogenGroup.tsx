import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import halogenGroupData from "../../json/halogenData.json";

export function HalogenGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {halogenGroupData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[7].className}
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
