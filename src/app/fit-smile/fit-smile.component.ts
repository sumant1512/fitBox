import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-fit-smile",
  templateUrl: "./fit-smile.component.html",
  styleUrls: ["./fit-smile.component.css"],
})
export class FitSmileComponent {
  @Output() scrollPage = new EventEmitter<string>();

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
