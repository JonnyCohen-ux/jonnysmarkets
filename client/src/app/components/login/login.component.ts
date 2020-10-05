import { AuthService } from "./../../services/auth.service";
// import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  wrongUser: string;
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }
  login() {
    // this.authService.login(this.form.value).subscribe((results) => {
    //   this.wrongUser = results;
    //   console.log(results);
    // });
    // this.authService.login(this.form.value).subscribe((results) => {
    //   this.authService.isLoggedIn = results["isLog"];
    //   this.authService.userStatus.next(this.authService.isLoggedIn);
    //   this.wrongUser = results["message"];
    //   console.log(results);
    // });
  }
  clear() {
    this.wrongUser = "";
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
}
