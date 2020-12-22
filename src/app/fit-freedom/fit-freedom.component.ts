import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-fit-freedom",
  templateUrl: "./fit-freedom.component.html",
  styleUrls: ["./fit-freedom.component.css"],
})
export class FitFreedomComponent implements OnInit {
  activeCss: boolean = false;
  lineCss: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.scrollY);
    if (window.scrollY >= 1638) {
      this.activeCss = true;
      setTimeout(() => {
        this.lineCss = true;
      }, 1000);
    }
  }
}
