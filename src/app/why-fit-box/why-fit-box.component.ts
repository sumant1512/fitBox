import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { LABELS } from "../labels.constants";

@Component({
  selector: "app-why-fit-box",
  templateUrl: "./why-fit-box.component.html",
  styleUrls: ["./why-fit-box.component.css"],
})
export class WhyFitBoxComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  labels = LABELS;
  activeCss: boolean = false;
  lineCss: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.scrollY);
    if (window.scrollY >= 819) {
      this.activeCss = true;
      setTimeout(() => {
        this.lineCss = true;
      }, 1000);
    }
  }

  scrollToPage(selectedPage: string) {
    console.log(selectedPage);
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
