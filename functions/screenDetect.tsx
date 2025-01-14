import Desktop from "../pages/PeriodicTable-desktop";
import Mobile from "../pages/PeriodicTable-mobile";

export function screenDetect() {
  return Number(screen.width) <= 1000 ? <Mobile /> : <Desktop />;
}
