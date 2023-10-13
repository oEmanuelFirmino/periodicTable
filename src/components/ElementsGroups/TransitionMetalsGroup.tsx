import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import transitionMetalsData from "../../json/transitionMetalsData.json";

export function TransitionMetalsGroups() {
  return (
    <div className="flex gap-3 mt-10 p scroll-pl-6 snap-x">
      {transitionMetalsData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[0].className}
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
