import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import alkalineEarthMetalsData from "../../json/alkalineEarthMetalsData.json";

export function AlkalineEarthMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {alkalineEarthMetalsData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[2].className}
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
