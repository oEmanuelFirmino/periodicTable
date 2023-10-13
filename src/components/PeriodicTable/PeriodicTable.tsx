import Spline from "@splinetool/react-spline";

export function PeriodicTable() {
  return (
    <Spline
      scene="https://prod.spline.design/SnPDzo71xIErGBDB/scene.splinecode"
      onMouseDown={(e) => {
        console.log(e.target.name);
      }}
    />
  );
}
