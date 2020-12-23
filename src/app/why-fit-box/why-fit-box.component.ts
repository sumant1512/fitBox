import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { LABELS } from "../labels.constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-why-fit-box",
  templateUrl: "./why-fit-box.component.html",
  styleUrls: ["./why-fit-box.component.css"],
})
export class WhyFitBoxComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  labels = LABELS;
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const whyfitbox = document.querySelector(".whyfitbox");
    const isContentActive = isInViewport(whyfitbox) ? true : false;
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
