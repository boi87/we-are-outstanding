import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initForm();
    this.loading = false;
  }

  private initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(300)
      ])
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.loading = true;

    setTimeout(() => {
      Swal.fire({
        title: `Your message has been submitted!`,
        type: 'success'
      });

      this.loading = false;
      this.contactForm.reset();
      this.contactForm.markAsUntouched();
      this.contactForm.markAsPristine();

    }, 500);
  }
}
