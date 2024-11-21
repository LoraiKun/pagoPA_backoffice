import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';
import { LoginBody } from '../../../models/auth';
import { LoginService } from '../../../services/auth/login.service';
@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    CheckboxModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css',
  providers: [MessageService]
})
export class RecoverPasswordComponent {
  loginForm!: FormGroup;
  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    // Controllo accesso e accesso garantito se coincide
    console.log('submit');
    this.loginService.getPassword(this.loginForm.get('email')!.value).subscribe({
      next: (res)=>{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'La tua password è: ' + res });

      },
      error:(e)=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Non è stata trovata la tua mail. Riprova' });

      }
    })
  }

  returnToLogin(){
    this.router.navigateByUrl('/')
  }
}
