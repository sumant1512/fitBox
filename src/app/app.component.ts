import { ViewportScroller } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";
import { LABELS } from "./labels.constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "fitBox";
  labels = LABELS;
  pages = [
    "carousel",
    "whyfitbox",
    "fitfreedom",
    "fitfflow",
    "fitsmile",
    "fittouch",
    "fitboxlogo",
    "fitboxsolvingproblems",
    "fitboxcovidready",
    "fitmenu",
  ];
  selectedIndex = 0;
  selectedPage = this.pages[this.selectedIndex];
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit() {}

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
      if (deltaTime < 2000) {
        if (Math.abs(deltaY)) {
          // delta y is at least 60 pixels
          if (deltaY > 0) {
            if (this.selectedIndex !== 0) {
              this.selectedIndex = this.selectedIndex - 1;
              this.selectedPage = this.pages[this.selectedIndex];
              this.scrollToPage(this.selectedPage);
            }
          } else {
            if (this.selectedIndex < 9) {
              this.selectedIndex = this.selectedIndex + 1;
              this.selectedPage = this.pages[this.selectedIndex];
              this.scrollToPage(this.selectedPage);
            }
          }
        }
      }
    }
  }

  scrollToPage(selectedPage: string) {
    this.viewPortScroller.scrollToAnchor(selectedPage);
  }
}
