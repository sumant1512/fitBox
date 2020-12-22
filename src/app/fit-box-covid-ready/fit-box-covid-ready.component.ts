import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-fit-box-covid-ready",
  templateUrl: "./fit-box-covid-ready.component.html",
  styleUrls: ["./fit-box-covid-ready.component.css"],
})
export class FitBoxCovidReadyComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
