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
  constructor() {}

  ngOnInit(): void {}
  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
