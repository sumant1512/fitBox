import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { LABELS } from "../labels.constants";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  labels = LABELS;

  constructor() {}

  ngOnInit(): void {}

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
