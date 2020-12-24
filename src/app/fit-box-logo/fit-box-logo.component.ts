import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-box-logo",
  templateUrl: "./fit-box-logo.component.html",
  styleUrls: ["./fit-box-logo.component.css"],
})
export class FitBoxLogoComponent implements OnInit {
  @Output() next = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitlogo = document.querySelector(".fitlogo");
    const isContentActive = isInViewport(fitlogo) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }

  cardOne() {
    this.next.emit("cardOne");
  }
}
