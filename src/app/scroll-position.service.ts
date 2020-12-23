import { HostListener, Injectable } from "@angular/core";
import { isInViewport } from "./view-port-check";

@Injectable({
  providedIn: "root",
})
export class ScrollPositionService {
  constructor() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll(id) {
    const fitflow = document.querySelector(id);
    const isContentActive = isInViewport(fitflow) ? true : false;
    if (isContentActive) {
      return true;
      // this.isAnimationActive = true;
      // setTimeout(() => {
      //   this.isLineActive = true;
      // }, 700);
    }
  }
}
