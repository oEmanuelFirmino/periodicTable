import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";

export function NonMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Hidrogênio"
        elementName="H"
        elementNumber="1"
      />
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Carbono"
        elementName="C"
        elementNumber="6"
      />
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Nitrogênio"
        elementName="N"
        elementNumber="7"
      />
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Oxigênio"
        elementName="O"
        elementNumber="8"
      />
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Fósforo"
        elementName="P"
        elementNumber="15"
      />
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Enxofre"
        elementName="S"
        elementNumber="16"
      />
      <ElementButton
        attributes={attribute[4].className}
        dialogTitle="Selênio"
        elementName="Se"
        elementNumber="34"
      />
    </div>
  );
}
