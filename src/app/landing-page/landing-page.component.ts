import { ViewportScroller } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";
import { LABELS } from "../labels.constants";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  labels = LABELS;
  pages = [
    "carousel",
    "whyfitbox",
    "fitfreedom",
    "fitfflow",
    "fitsmile",
    "fittouch",
    "fitboxlogo",
  ];
  selectedIndex = 0;
  selectedPage = this.pages[this.selectedIndex];
  isTouchActive = true;
  isMobile: boolean;
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }
  // this is for one tap scroll
  defaultTouch = { x: 0, y: 0, time: 0 };

  @HostListener("touchstart", ["$event"])
  @HostListener("touchend", ["$event"])
  @HostListener("touchcancel", ["$event"])
  handleTouch(event) {
    let touch = event.touches[0] || event.changedTouches[0];

    // check the events
    if (event.type === "touchstart") {
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === "touchend") {
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      // simulte a swipe -> less than 500 ms and more than 60 px
      if (deltaTime < 2000 && this.isTouchActive) {
        if (Math.abs(deltaY)) {
          // delta y is at least 60 pixels
          if (deltaY > 0) {
            if (this.selectedIndex !== 0) {
              this.selectedIndex = this.selectedIndex - 1;
              this.selectedPage = this.pages[this.selectedIndex];
              // this.scrollToPage(this.selectedPage);
            }
          } else {
            if (this.selectedIndex < 6) {
              this.selectedIndex = this.selectedIndex + 1;
              this.selectedPage = this.pages[this.selectedIndex];
              // this.scrollToPage(this.selectedPage);
            }
          }
        }
      }
    }
  }
  // this is for one tap scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 3800) {
      this.isTouchActive = false;
    } else {
      this.isTouchActive = true;
    }
    //we'll do some stuff here when the window is scrolled
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.isMobile = true;
    }
  }
  // this is for one tap scroll
  scrollToPage(selectedPage: string) {
    this.viewPortScroller.scrollToAnchor(selectedPage);
  }

  // for swiping next card
  swipeCard(nextCard) {
    document.getElementById("logo").classList.add("swipe-next-card");
  }
}
