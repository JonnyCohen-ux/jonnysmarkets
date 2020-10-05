import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLoggedIn: any;

  ngOnInit() {
    // console.log(this.authService.getIsLog());
    // this.isLoggedIn = this.authService.getIsLog();
    // console.log(this.isLoggedIn);
    // this.authService.logged().subscribe((results) => {
    //   console.log(results);
    //   this.isLoggedIn = results;
    // });
  }
  logout() {
    // this.authService.logout().subscribe();
    // this.authService.logged().subscribe((results) => {
    //   this.isLoggedIn = results["isLog"];
    // });
  }
}
