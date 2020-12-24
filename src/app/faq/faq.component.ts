import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"],
})
export class FaqComponent implements OnInit {
  faqList = [
    {
      question: "Tour Video",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    {
      question: "Pay-Per-Workout",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    {
      question: "Fit-Switch",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    {
      question: "Fit-Transfer",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    {
      question: "Fit-Friends",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    {
      question: "Fit-Family",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    { question: "Fit-Focus", mp4Video: "mov_bbb.mp4", oggVideo: "mov_bbb.ogg" },
    { question: "Fit-Happy", mp4Video: "mov_bbb.mp4", oggVideo: "mov_bbb.ogg" },
    { question: "Fit-Train", mp4Video: "mov_bbb.mp4", oggVideo: "mov_bbb.ogg" },
    {
      question: "Fit-GroupX",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    {
      question: "Fit-Welcome",
      mp4Video: "mov_bbb.mp4",
      oggVideo: "mov_bbb.ogg",
    },
    { question: "Fit-Test", mp4Video: "mov_bbb.mp4", oggVideo: "mov_bbb.ogg" },
  ];

  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const faq = document.querySelector(".faq");
    const isContentActive = isInViewport(faq) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
