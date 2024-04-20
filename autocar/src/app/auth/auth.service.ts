
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { localUser } from 'src/types/Users';
import { Error } from 'src/types/Error';
import { errorHandler } from 'src/utils/errorHandler';
// import { ErrorMsgService } from '../core/errorMsg/error-msg.service';
// import { ToastService } from '../shared/toast/toast.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userInfo$$: any = new BehaviorSubject(null)
  public userInfo$ = this.userInfo$$.asObservable()

  get checkIsLogged(): boolean {
    return !!localStorage.getItem("auth")
  }

  get user(): localUser {
    const auth = localStorage.getItem("auth") as string
    return JSON.parse(auth);
  }

  constructor(private router: Router, private http: HttpClient) { }

  registerHandler(registerForm: NgForm): void {
    console.log(registerForm)
    if (registerForm.invalid) {
      // this.errorMsgService.showError(errorHandler(registerForm)) 
      alert("error!")
      return
    }

    this.http.post<localUser>("http://localhost:1337/user/register", registerForm.value, {}).subscribe((data) => {
      if (data) {
        localStorage.setItem("auth", JSON.stringify(data))
        this.router.navigate(['']);
        // this.toastService.showToast("Successfully registered!")
        alert("success")


      } else {
        // this.errorMsgService.showError({ field: "Server", message: "Invalid email or password" })
        alert("error")
      }
    });
  }

  logoutHandler(): void {
    localStorage.clear()
    this.router.navigate(['']);
    alert("success")
    // this.toastService.showToast("Successfully logout!")

  }

  loginHandler(loginForm: NgForm) {
    if (loginForm.invalid) {
      // this.errorMsgService.showError(errorHandler(loginForm))
      alert("error from  form")
      return
    }

    this.http.post<localUser>("http://localhost:1337/user/login", loginForm.value, {}).subscribe((data) => {
      if (data) {
        localStorage.setItem("auth", JSON.stringify(data))
        this.router.navigate(['']);
        // this.toastService.showToast("Successfully logged in!")
        alert("success")

      } else {
        // this.errorMsgService.showError({ field: "Server", message: "Invalid email or password" })
        alert("error")
      }
    });
  }
}
