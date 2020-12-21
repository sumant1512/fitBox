import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-fit-touch",
  templateUrl: "./fit-touch.component.html",
  styleUrls: ["./fit-touch.component.css"],
})
export class FitTouchComponent {
  @Output() scrollPage = new EventEmitter<string>();

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
