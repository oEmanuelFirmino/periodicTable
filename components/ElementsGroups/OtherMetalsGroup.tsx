import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import otherMetalsData from "../../json/otherMetalsData.json";

export function OtherMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {otherMetalsData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[6].className}
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
