import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";

export function NobleGasesGroup() {
  return (
    <div className="flex gap-3 mt-10">
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Hélio"
        elementName="He"
        elementNumber="2"
      />
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Neônio"
        elementName="Ne"
        elementNumber="10"
      />
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Argõnio"
        elementName="Ar"
        elementNumber="18"
      />
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Criptônio"
        elementName="Kr"
        elementNumber="36"
      />
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Xenônio"
        elementName="Xe"
        elementNumber="54"
      />
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Radônio"
        elementName="Rn"
        elementNumber="86"
      />
      <ElementButton
        attributes={attribute[5].className}
        dialogTitle="Oganessônio"
        elementName="Og"
        elementNumber="118"
      />
    </div>
  );
}
