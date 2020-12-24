import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-freedom",
  templateUrl: "./fit-freedom.component.html",
  styleUrls: ["./fit-freedom.component.css"],
})
export class FitFreedomComponent implements OnInit {
  isAnimationActiveReasons = false;
  isLineActiveReasons = false;
  isAnimationActiveFitFreedom = false;
  isLineActiveFitFreedom = false;
  constructor(public el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const reasons = document.querySelector(".reasons");
    const isContentActiveReasons = isInViewport(reasons) ? true : false;
    if (isContentActiveReasons) {
      this.isAnimationActiveReasons = true;
      setTimeout(() => {
        this.isLineActiveReasons = true;
      }, 300);
    }
    const fitfreedom = document.querySelector(".fitfreedom");
    const isContentActiveFitFreedom = isInViewport(fitfreedom) ? true : false;
    if (isContentActiveFitFreedom) {
      this.isAnimationActiveFitFreedom = true;
      setTimeout(() => {
        this.isLineActiveFitFreedom = true;
      }, 300);
    }
  }
}
