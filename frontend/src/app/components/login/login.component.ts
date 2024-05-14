import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { TaskService } from 'src/app/service/task.service';
import { UserService, LoginRequest } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private taskService: TaskService

  ) {
    this.userService.authenticatedUser$.subscribe({
      next: (user: User | null) => {
        if (user !== null) {
          this.router.navigate(['/']);
        }
      },
    })
  }

  loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }, { updateOn: 'blur' });

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  login() {

    const loginData: LoginRequest = {
      email: this.email!.value,
      password: this.password!.value
    }

    this.userService.login(loginData).subscribe({
      next: () => {
        this.taskService.getDeadlineTasks().subscribe({
          next: (tasks) => {
            if(tasks){
              let alertText = "Hamarosan lejáró feladatok:";
              [...tasks].forEach(task => {
                alertText+=`\n${task.name}`
              });
              alert(alertText);
            }
          }
        })
        this.router.navigate(['/'])
      },
    });
  }
}
