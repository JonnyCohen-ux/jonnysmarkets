import { AuthService } from "./../../services/auth.service";
import { FormGroup } from "@angular/forms";
import { ValidationsService } from "./../../services/validations.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(5)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(5)]],
      },
      {
        validators: ValidationsService.MustMatch("password", "confirmPassword"),
      }
    );
  }
  addUser() {
    if (this.form.valid) {
      this.authService.createUser(this.form.value).subscribe();
    } else {
      console.log("Invalid form");
    }
  }

  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  // ,
  //     {
  //       validators: ValidationsService.MustMatch("password", "confirmPassword"),
  //     }
}
