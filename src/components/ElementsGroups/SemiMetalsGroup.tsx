import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import semiMetalsData from "../../json/semiMetalsData.json";

export function SemiMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {semiMetalsData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[3].className}
          dialogTitle={element.dialogTitle}
          elementName={element.elementName}
          elementNumber={element.elementNumber}
          elementDescription={element.elementDescription}
          elementImage={element.elementImage}
          elementAltText={element.elementAltText}
        />
      ))}
    </div>
  );
}
