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
  selector: "app-fit-touch",
  templateUrl: "./fit-touch.component.html",
  styleUrls: ["./fit-touch.component.css"],
})
export class FitTouchComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fittouchmobile = document.querySelector(".fittouchmobile");
    const isContentActive = isInViewport(fittouchmobile) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
