import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { LoginService } from '../../services/auth/login.service';
import { LoginBody } from '../../models/auth';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule,CheckboxModule, PasswordModule, FloatLabelModule, ButtonModule, ToastModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
loginForm!: FormGroup
constructor(private loginService: LoginService, private messageService: MessageService, private router: Router){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  if(localStorage.getItem('token')){
    this.router.navigateByUrl('home')
  }
  this.loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })
}


onSubmit(){
// Controllo accesso e accesso garantito se coincide
console.log('submit')
const body: LoginBody = {email: this.loginForm.get('email')?.value, password: this.loginForm.get('password')?.value}
this.loginService.logIn(body).subscribe({
  next: (res)=>{
    console.log(res)
    localStorage.setItem('token', res.token)
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sei riuscito ad eseguire il Log In' });
    this.router.navigateByUrl('/home')
  },
  error:(e) => {
    console.log(e)
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Log in fallito, riprova più tardi' });

  }
})
}
}
