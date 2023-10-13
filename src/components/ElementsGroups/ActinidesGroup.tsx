import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import actinidesData from "../../json/actinidesData.json";

export function ActinidesGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {actinidesData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[9].className}
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
