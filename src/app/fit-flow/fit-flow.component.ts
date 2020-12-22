import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-fit-flow",
  templateUrl: "./fit-flow.component.html",
  styleUrls: ["./fit-flow.component.css"],
})
export class FitFlowComponent {
  @Output() scrollPage = new EventEmitter<string>();

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
