import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service'; // Asegúrate de ajustar la ruta

@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss']
})
export class MultistepFormComponent implements OnInit {
  currentStep: number = 1;
  userForm!: FormGroup;
  credentialsForm!: FormGroup;
  confirmationForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dob: ['', Validators.required]
    });

    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.confirmationForm = this.fb.group({
      terms: [false, Validators.requiredTrue]
    });
  }

  nextStep() {
    if (this.currentStep === 1 && this.userForm.valid) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.credentialsForm.valid) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submit() {
    if (this.confirmationForm.valid) {
      const userData = {
        ...this.userForm.value,
        ...this.credentialsForm.value
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      window.alert('Su cuenta ha sido creada! / ahora vayase que se rompe el pre entregable 1, nah mentira hjsdsdsj');

      this.userForm.reset();
      this.credentialsForm.reset();
      this.confirmationForm.reset();
      this.currentStep = 1;
    }
  }
}
