import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-flow-desktop",
  templateUrl: "./fit-flow-desktop.component.html",
  styleUrls: ["./fit-flow-desktop.component.css"],
})
export class FitFlowDesktopComponent implements OnInit {
  fitCardData = {
    number: 2,
    strokeHead: "Fit",
    mainHead: "Flow",
    image: "./../assets/carousel/BannerImage2.png",
    fitList: [
      {
        data: "Wallet that BeneFITS both.",
      },
      {
        data: "Just not share your fitness goals, Share your wallet too.",
      },
      {
        data: "Add members to your wallet with Just Rs 500/-",
      },
      {
        data: "Recharge your Fit Pay, and share it with your companion.",
      },
    ],
  };
  isAnimationActive = false;
  isLineActive = false;

  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitflowdesktop = document.querySelector(".fitflowdesktop");
    const isContentActive = isInViewport(fitflowdesktop) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
