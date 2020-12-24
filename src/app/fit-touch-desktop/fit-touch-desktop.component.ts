import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-touch-desktop",
  templateUrl: "./fit-touch-desktop.component.html",
  styleUrls: ["./fit-touch-desktop.component.css"],
})
export class FitTouchDesktopComponent implements OnInit {
  fitCardData = {
    number: 4,
    strokeHead: "Fit",
    mainHead: "Touch",
    image: "./../assets/carousel/BannerImage4.png",
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
    const fittouchdesktop = document.querySelector(".fittouchdesktop");
    const isContentActive = isInViewport(fittouchdesktop) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
