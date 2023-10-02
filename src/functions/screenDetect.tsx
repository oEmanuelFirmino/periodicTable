import Desktop from "../pages/PeriodicTable-desktop";
import Mobile from "../pages/PeriodicTable-mobile";

export function screenDetect() {
  if (Number(screen.width) <= 1000) {
    return <Mobile />;
  } else if (Number(screen.width) > 1000) {
    return <Desktop />;
  }
}