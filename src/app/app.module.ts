import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FitBoxLogoComponent } from "./fit-box-logo/fit-box-logo.component";
import { WhyFitBoxComponent } from "./why-fit-box/why-fit-box.component";
import { FitFreedomComponent } from "./fit-freedom/fit-freedom.component";
import { FitFlowComponent } from "./fit-flow/fit-flow.component";
import { FitSmileComponent } from "./fit-smile/fit-smile.component";
import { FitTouchComponent } from "./fit-touch/fit-touch.component";
import { FitBoxSolvingProblemsComponent } from "./fit-box-solving-problems/fit-box-solving-problems.component";
import { FitBoxCovidReadyComponent } from "./fit-box-covid-ready/fit-box-covid-ready.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { FitBoxPlayStoreComponent } from "./fit-box-play-store/fit-box-play-store.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { FitMenuComponent } from "./fit-menu/fit-menu.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GalleryComponent } from "./gallery/gallery.component";
import { CommonModule } from "@angular/common";
import { FitTouchDesktopComponent } from "./fit-touch-desktop/fit-touch-desktop.component";
import { FitSmileDesktopComponent } from "./fit-smile-desktop/fit-smile-desktop.component";
import { FitFlowDesktopComponent } from './fit-flow-desktop/fit-flow-desktop.component';
import { FitFreedomDesktopComponent } from './fit-freedom-desktop/fit-freedom-desktop.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FitFounderComponent } from './fit-founder/fit-founder.component';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FitBoxLogoComponent,
    WhyFitBoxComponent,
    FitFreedomComponent,
    FitFlowComponent,
    FitSmileComponent,
    FitTouchComponent,
    FitBoxSolvingProblemsComponent,
    FitBoxCovidReadyComponent,
    TestimonialsComponent,
    FitBoxPlayStoreComponent,
    FaqComponent,
    ContactInfoComponent,
    FitMenuComponent,
    GalleryComponent,
    FitTouchDesktopComponent,
    FitSmileDesktopComponent,
    FitFlowDesktopComponent,
    FitFreedomDesktopComponent,
    LandingPageComponent,
    AboutComponent,
    HeaderComponent,
    FitFounderComponent,
    CareersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
