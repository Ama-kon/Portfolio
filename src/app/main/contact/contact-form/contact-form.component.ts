import { Component, inject, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
    TranslateModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public translateService: TranslateService
  ) {}
  window = window;

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.emailValidator()],
      ],
      message: ['', [Validators.required, Validators.minLength(3)]],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailPattern.test(control.value);
      return valid ? null : { invalidEmail: { value: control.value } };
    };
  }

  http = inject(HttpClient);

  post = {
    endPoint: 'https://amalia-konstantinidou.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const formData = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value,
        checkbox: this.contactForm.get('checkbox')?.value,
      };

      this.http.post(this.post.endPoint, this.post.body(formData)).subscribe({
        next: (response) => {
          this.resetFormWithoutValidation();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => this.showSucessMessage(),
      });
    }
  }

  resetFormWithoutValidation() {
    this.contactForm.reset();

    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.setErrors(null);
      control?.markAsUntouched();
      control?.markAsPristine();
    });
    this.submitted = false;
  }

  showSucessMessage() {
    let successMessage = document.querySelector('.success') as HTMLElement;
    let blurContainer = document.querySelector(
      '.blur-container'
    ) as HTMLElement;

    successMessage.style.display = 'flex';
    blurContainer.style.display = 'flex';
    successMessage.style.animation = 'fadeIn 0.7s ease-out';
    blurContainer.style.animation = 'fadeIn 0.7s ease-out';

    setTimeout(() => {
      successMessage.style.animation = 'fadeOut 0.7s ease-in';
      blurContainer.style.animation = 'fadeOut 0.7s ease-in';

      setTimeout(() => {
        successMessage.style.display = 'none';
        blurContainer.style.display = 'none';
      }, 700);
    }, 1800);
  }
}
