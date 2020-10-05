import { ValidationsService } from "./services/validations.service";
import { AuthService } from "./services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SocialMediaComponent } from "./components/social-media/social-media.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { AdsComponent } from "./components/ads/ads.component";
import { AdComponent } from "./components/ad/ad.component";
import { RegisterComponent } from "./components/register/register.component";
import { NewAdComponent } from "./components/new-ad/new-ad.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SocialMediaComponent,
    SearchBarComponent,
    AdsComponent,
    AdComponent,
    RegisterComponent,
    NewAdComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, ValidationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
