import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest, UserRegister } from 'src/app/api/model/user.model';
import { UserService } from 'src/app/api/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder, 
    private route: Router,) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required,Validators.minLength(6)],
      email: ['',Validators.required],
    })
  }


  ngOnInit() {
  }

  login(): void {
    let username = this.loginForm.controls['userName'].value;
    let password = this.loginForm.controls['password'].value;

    if(this.loginForm.valid){
      this.userService.login(new LoginRequest(username, password))
        .subscribe(response => {
          this.userService.setJWT(response.content.jwt ,response.content.displayName);
          this.route.navigate(['dashboard/default']);
        });
    }
  }

  register(): void {
    let username = this.registerForm.controls['userName'].value;
    let password = this.registerForm.controls['password'].value;
    let confirmPassword = this.registerForm.controls['confirmPassword'].value;
    let email = this.registerForm.controls['email'].value;
    if(this.registerForm.valid && this.checkPasswordsMatch(password, confirmPassword)){
      this.userService.createUser(new UserRegister(username, password, email))
        .subscribe(response => {
          this.route.navigate(['login']);
        });
    }

}
 checkPasswordsMatch(password: string, repeatPassword: string): boolean {
  return password === repeatPassword;
}
}