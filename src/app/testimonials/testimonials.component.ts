import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"],
})
export class TestimonialsComponent implements OnInit {
  isAnimationActive = false;
  isLineActive = false;
  isLineActiveBtm = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const testimonials = document.querySelector(".testimonials");
    const isContentActive = isInViewport(testimonials) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
    const testimonialsbtm = document.querySelector(".testimonialsbtm");
    const isContentActiveBtm = isInViewport(testimonialsbtm) ? true : false;
    if (isContentActiveBtm) {
      setTimeout(() => {
        this.isLineActiveBtm = true;
      }, 300);
    }
  }
}
