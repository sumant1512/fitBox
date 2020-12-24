import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-box-solving-problems",
  templateUrl: "./fit-box-solving-problems.component.html",
  styleUrls: ["./fit-box-solving-problems.component.css"],
})
export class FitBoxSolvingProblemsComponent implements OnInit {
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const solvingproblems = document.querySelector(".solvingproblems");
    const isContentActive = isInViewport(solvingproblems) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
