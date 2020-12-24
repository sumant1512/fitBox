import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { LABELS } from "../labels.constants";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  labels = LABELS;
  lineOne = false;
  lineTwo = false;
  lineThree = false;
  lineFour = false;
  isMobile: boolean;
  sideNavOpen: boolean = false;
  navList = [
    { navName: "Mission", navRoute: "mission" },
    { navName: "Vision", navRoute: "vision" },
    { navName: "Goals", navRoute: "goals" },
    { navName: "Fit Founder", navRoute: "fitFounder" },
    { navName: "Careers", navRoute: "careers" },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sideNavOpen = true;
    this.animation();
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }

  animation() {
    this.lineOne = true;
    setTimeout(() => {
      this.lineTwo = true;
    }, 300);
    setTimeout(() => {
      this.lineThree = true;
    }, 600);
    setTimeout(() => {
      this.lineFour = true;
    }, 900);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }

  navToggle(selectedPage?: string) {
    this.sideNavOpen = !this.sideNavOpen;
    if (this.sideNavOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  openNav() {
    document.getElementById("sideBar").style.width = this.isMobile
      ? "100%"
      : "30%";
  }

  closeNav() {
    document.getElementById("sideBar").style.width = "0";
  }

  navigateToAbout() {
    this.router.navigateByUrl("/about");
  }
}
