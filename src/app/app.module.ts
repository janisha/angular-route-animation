import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScienceComponent } from "./science/science.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CustomResolver } from "./custom-resolver";
import { RouteReuseStrategy } from "@angular/router";
import { CustomRouteReuseStategy } from "./reuse-strategy";

@NgModule({
  declarations: [AppComponent, ScienceComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    CustomResolver,
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
