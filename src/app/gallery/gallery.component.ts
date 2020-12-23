import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  images = [
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
      description: "Image 1",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      description: "Image 2",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
      description: "Image 3",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg",
      description: "Image 4",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg",
      description: "Image 5",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg",
      description: "Image 6",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg",
      description: "Image 7",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg",
      description: "Image 8",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg",
      description: "Image 9",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
      description: "Image 1",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      description: "Image 2",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
      description: "Image 3",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg",
      description: "Image 4",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg",
      description: "Image 5",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg",
      description: "Image 6",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg",
      description: "Image 7",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg",
      description: "Image 8",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg",
      description: "Image 9",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
      description: "Image 1",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      description: "Image 2",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
      description: "Image 3",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg",
      description: "Image 4",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg",
      description: "Image 5",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg",
      description: "Image 6",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg",
      description: "Image 7",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg",
      description: "Image 8",
    },
    {
      img:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg",
      thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg",
      description: "Image 9",
    },
  ];
  userImg: any;
  userImgShow: any;
  isCloseActive: boolean;

  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const gallery = document.querySelector(".gallery");
    const isContentActive = isInViewport(gallery) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }

  getImg(value) {
    this.userImg = value;
    this.userImgShow = null;
    this.userImgShow = this.userImg.img;
    setTimeout(() => {
      this.isCloseActive = true;
    }, 500);
  }
}
