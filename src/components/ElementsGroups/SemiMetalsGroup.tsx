import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";

export function SemiMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      <ElementButton
        attributes={attribute[3].className}
        dialogTitle="Boro"
        elementName="B"
        elementNumber="5"
      />
      <ElementButton
        attributes={attribute[3].className}
        dialogTitle="Silício"
        elementName="Si"
        elementNumber="14"
      />
      <ElementButton
        attributes={attribute[3].className}
        dialogTitle="Germânio"
        elementName="Ge"
        elementNumber="32"
      />
      <ElementButton
        attributes={attribute[3].className}
        dialogTitle="Arsênio"
        elementName="As"
        elementNumber="33"
      />
      <ElementButton
        attributes={attribute[3].className}
        dialogTitle="Antimônio"
        elementName="Sb"
        elementNumber="51"
      />
      <ElementButton
        attributes={attribute[3].className}
        dialogTitle="Telúrio"
        elementName="Te"
        elementNumber="52"
      />
    </div>
  );
}
