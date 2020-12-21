import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FitBoxLogoComponent } from "./fit-box-logo/fit-box-logo.component";
import { WhyFitBoxComponent } from "./why-fit-box/why-fit-box.component";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PricingComponent,
    FitBoxLogoComponent,
    WhyFitBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
