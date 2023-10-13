import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import lathanidesData from "../../json/lanthanidesData.json";

export function LathanidesGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {lathanidesData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[8].className}
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
