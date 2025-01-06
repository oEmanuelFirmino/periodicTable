# 3D Periodic Table Explorer

An interactive 3D periodic table built with **React TypeScript** and powered by **Spline** for rendering the 3D model. Users can click on elements to view detailed information about their discovery, characteristics, and usage.

---

## Features

- **3D Interaction:** Leverage Spline to render a fully interactive periodic table.
- **Element Details:** View element properties such as discovery year, electronic configuration, abundance, and more.
- **Modern UI:** Sleek dialog interface for displaying detailed information using `@radix-ui/react-dialog`.

---

## Code Example

```tsx
import Spline from "@splinetool/react-spline";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { ElementProps } from "@/interfaces/ElementProps";

export function PeriodicTable(props: ElementProps) {
  const [mouseEventValue, setMouseEventValue] = useState(null);

  const handleMouseDown = (e: any) => {
    console.log(e);
    setMouseEventValue(e.target.name);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Spline
          scene="https://prod.spline.design/SnPDzo71xIErGBDB/scene.splinecode"
          onMouseDown={handleMouseDown}
        />
      </DialogTrigger>
      <DialogContent className="fixed bg-slate-100 w-5/6 h-5/6 z-50 p-3 left-8 right-8 top-24 rounded-2xl border-2 border-black divide-y divide-slate-700 divide-dotted shadow-2xl shadow-slate-950">
        <DialogTitle className="font-bold text-2xl text-black bg-transparent">
          {mouseEventValue}
        </DialogTitle>
        <DialogDescription className="whitespace-pre-line flex-column overflow-auto bg-transparent">
          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Descoberto por:
            </label>
            <p>{props.discoveredBy}</p>
          </div>

          <div className="flex gap-2 my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Ano:
            </label>
            <p>{props.discoveredIn}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Principais Características:
            </label>
            <p>{props.mainFeatures}</p>
          </div>

          <div className="flex gap-2 my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Configuração Eletrônica:
            </label>
            <p>{props.eletronicConfig}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como é encontrado:
            </label>
            <p>{props.howIsItFound}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como é extraído:
            </label>
            <p>{props.howIsItExtracted}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Há em abundância?
            </label>
            <p>{props.isThereAbundance}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como deve ser manejado:
            </label>
            <p>{props.howShouldItBeManaged}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como é usado:
            </label>
            <p>{props.howIsItUse}</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Technologies Used

- **React TypeScript**: For building the core UI.
- **Spline**: For 3D rendering and interaction.
- **Radix UI Dialog**: For the element detail modal system.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/3d-periodic-table.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` to view the project.

---

## Customization

To customize the element details or 3D model:

- Replace the `scene` URL in the `Spline` component with your own Spline design.
- Update the `ElementProps` interface and corresponding data to include additional or modified information.

---

## License

This project is open-source under the [MIT License](LICENSE).
