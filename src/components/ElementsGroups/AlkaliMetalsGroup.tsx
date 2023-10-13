import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import alkaliMetalsData from "../../json/alkaliMetalsData.json";

export function AlkaliMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {alkaliMetalsData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[1].className}
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
