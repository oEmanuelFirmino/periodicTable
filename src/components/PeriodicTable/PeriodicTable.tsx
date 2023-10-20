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


  const handleMouseDown = (e:any) => {
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
        <DialogDescription className="whitespace-pre-line flex-column overflow-auto">
        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Descoberto por: 
        </label>
          <p>
          {props.discoveredBy}
          </p>
        </div>

        <div className="flex gap-2 my-3">
        <label htmlFor="" className="font-bold">
        Ano: 
        </label>
          <p>
          {props.discoveredIn}
          </p>
        </div>

        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Principais Características:
        </label>
          <p>
          {props.mainFeatures}
          </p>
        </div>

        <div className="flex gap-2 my-3">
        <label htmlFor="" className="font-bold">
        Configuração Eletrônica:
        </label>
          <p>
          {props.eletronicConfig}
          </p>
        </div>

        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Como é encontrado:
        </label>
          <p>
          {props.howIsItFound}
          </p>
        </div>

        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Como é extraído:
        </label>
          <p>
          {props.howIsItExtracted}
          </p>
        </div>
        
        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Há em abundância?
        </label>
          <p>
          {props.isThereAbundance}
          </p>
        </div>
        
        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Como deve ser manejado:
        </label>
          <p>
          {props.howShouldItBeManaged}
          </p>
        </div>
        
        <div className="my-3">
        <label htmlFor="" className="font-bold">
        Como é usado:
        </label>
          <p>
          {props.howIsItUse}
          </p>
        </div>

        </DialogDescription>
      </DialogContent>
    </Dialog>

  );
}
