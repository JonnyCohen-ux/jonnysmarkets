import { UserLoginData, UserRegister } from "./../modles/User";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  userStatus = new Subject<UserLoginData>();
  userLoginData: UserLoginData;

  // authUser() {
  //   return this.http
  //     .get<{ isLog: boolean; isAdmin: boolean }>(
  //       `$http://localhost:8080/users/auth/user`,
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .pipe(
  //       tap((result) => {
  //         console.log(result);
  //         this.isLoggedIn = result;
  //         this.userStatus.next(this.isLoggedIn);
  //       }),
  //       catchError((error) => {
  //         return throwError(error);
  //       })
  //     );
  // }

  getIsLog(): boolean {
    // const authData = JSON.parse(localStorage.getItem("user")) || null;
    const authData = JSON.parse(localStorage.getItem("user") || null);
    console.log(authData);

    if (!authData) {
      return;
    }

    return authData.isLog;
  }

  createUser(user: UserRegister): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      "http://localhost:8080/users/create/user",
      user
    );
  }
  login(user: UserLoginData): Observable<string> {
    return this.http
      .post<{ message: string; user: UserLoginData }>(
        "http://localhost:8080/users/login",
        user,
        {
          withCredentials: true,
        }
      )
      .pipe(
        map((results) => {
          this.userLoginData = results["userLogInData"];
          this.userStatus.next(this.userLoginData);
          console.log(results);
          localStorage.setItem(
            "user",
            JSON.stringify(results["userLogInData"])
          );
          // this.router.navigate(["/"]);
          return results.message;
        })
      );
  }
  logout(): Observable<{ message: string; isLog: boolean }> {
    return this.http
      .get<{ message: string; isLog: boolean }>(
        "http://localhost:8080/users/logout"
      )
      .pipe(
        tap((results) => {
          this.userLoginData = null;
          this.userStatus.next(this.userLoginData);
          localStorage.removeItem("user");
        })
      );
  }

  logged(): Observable<{}> {
    return this.userStatus.asObservable();
  }
}
