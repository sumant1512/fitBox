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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
