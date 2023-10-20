import Spline from "@splinetool/react-spline";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { useState } from "react";

export function PeriodicTable() { 

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
        <DialogDescription className="whitespace-pre-line">
        </DialogDescription>
      </DialogContent>
    </Dialog>

  );
}
