import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-smile-desktop",
  templateUrl: "./fit-smile-desktop.component.html",
  styleUrls: ["./fit-smile-desktop.component.css"],
})
export class FitSmileDesktopComponent implements OnInit {
  fitCardData = {
    number: 3,
    strokeHead: "Fit",
    mainHead: "Smile",
    image: "./../assets/carousel/BannerImage3.png",
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
    const fitsmiledesktop = document.querySelector(".fitsmiledesktop");
    const isContentActive = isInViewport(fitsmiledesktop) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
