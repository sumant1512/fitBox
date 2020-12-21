import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FitBoxLogoComponent } from "./fit-box-logo/fit-box-logo.component";
import { WhyFitBoxComponent } from "./why-fit-box/why-fit-box.component";
import { FitFreedomComponent } from './fit-freedom/fit-freedom.component';
import { FitFlowComponent } from './fit-flow/fit-flow.component';
import { FitSmileComponent } from './fit-smile/fit-smile.component';
import { FitTouchComponent } from './fit-touch/fit-touch.component';
import { FitBoxSolvingProblemsComponent } from './fit-box-solving-problems/fit-box-solving-problems.component';
import { FitBoxCovidReadyComponent } from './fit-box-covid-ready/fit-box-covid-ready.component';
import { FitMenuComponent } from './fit-menu/fit-menu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FitBoxPlayStoreComponent } from './fit-box-play-store/fit-box-play-store.component';
import { FaqComponent } from './faq/faq.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PricingComponent,
    FitBoxLogoComponent,
    WhyFitBoxComponent,
    FitFreedomComponent,
    FitFlowComponent,
    FitSmileComponent,
    FitTouchComponent,
    FitBoxSolvingProblemsComponent,
    FitBoxCovidReadyComponent,
    FitMenuComponent,
    TestimonialsComponent,
    FitBoxPlayStoreComponent,
    FaqComponent,
    ContactInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
