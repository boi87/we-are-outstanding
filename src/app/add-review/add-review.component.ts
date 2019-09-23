import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddReviewService } from './addReview.service';
import { Review } from '../shared/review.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id: number;

  schoolDataForm: FormGroup;
  addReviewForm: FormGroup;

  editMode = false;

  loading: boolean;

  data: { name: string; address: string; postcode: string }[];
  filtered: { name: string; address: string; postcode: string }[];

  constructor(
    private http: HttpClient,
    private addReviewService: AddReviewService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.initForm();
    this.filtered = [];
  }

  onFilterNames(event) {
    const filterValue = event.target.value.toLowerCase();
    if (filterValue.length > 3) {
      console.log(filterValue);

      this.http
        .get('https://weareoutstanding-6c621.firebaseio.com/schools-names.json')
        .subscribe(data => {
          // console.log(Object.keys(data).filter(filterValue));
          // Object.keys(data).filter(filterValue);
        });
    }

    // console.log(this.filtered);
  }

  onSelectSchool() {
    // console.log('dio sporco');
    console.log(this.schoolDataForm.value);
  }

  onSubmitReview() {
    const value = this.addReviewForm.value;
    console.log(value);
    const newReview = new Review(
      value.generalDescription,
      value.management,
      value.pupilsBehaviour,
      value.workload,
      value.workingHours,
      value.pressure,
      value.staff,
      value.infrastructures,
      value.policies
    );
    this.addReviewService.addNewReview(newReview);
    console.log(value);
  }

  private initForm() {
    this.schoolDataForm = new FormGroup({
      schoolName: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    });

    this.addReviewForm = new FormGroup({
      generalDescription: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      management: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      pupilsBehaviour: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      workload: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      workingHours: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      pressure: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      staff: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      infrastructures: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      ),
      policies: new FormControl(
        { value: null, disabled: !this.schoolDataForm.valid },
        Validators.required
      )
    });
  }
}
