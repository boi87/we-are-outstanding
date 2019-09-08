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
  addReviewForm: FormGroup;
  editMode = false;
  data: { name: string; address: string; postcode: string }[];
  filtered: { name: string; address: string; postcode: string }[];

  constructor(
    private http: HttpClient,
    private addReviewService: AddReviewService
  ) {}

  ngOnInit() {
    this.initForm();
    this.filtered = [];
  }

  onSubmit() {
    const value = this.addReviewForm.value;
    console.log(value);
    const newReview = new Review(
      value.schoolName,
      value.location,
      value.generalDescription,
      value.management,
      value.pupilsBehaviour,
      value.type,
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
    const schoolName = '';
    const location = '';
    const generalDescription = '';
    const management = '';
    const pupilsBehaviour = '';
    const type = '';
    const workload = '';
    const workingHours = '';
    const pressure = '';
    const staff = '';
    const infrastructures = '';
    const policies = '';

    this.addReviewForm = new FormGroup({
      schoolName: new FormControl(schoolName, Validators.required),
      location: new FormControl(location, Validators.required),
      generalDescription: new FormControl(
        generalDescription,
        Validators.required
      ),
      management: new FormControl(management, Validators.required),
      pupilsBehaviour: new FormControl(pupilsBehaviour, Validators.required),
      type: new FormControl(type, Validators.required),
      workload: new FormControl(workload, Validators.required),
      workingHours: new FormControl(workingHours, Validators.required),
      pressure: new FormControl(pressure, Validators.required),
      staff: new FormControl(staff, Validators.required),
      infrastructures: new FormControl(infrastructures, Validators.required),
      policies: new FormControl(policies, Validators.required)
    });
  }

  onFilterNames(event) {
    const filterValue = event.target.value.toLowerCase();
    if (filterValue.length > 3) {
      console.log(filterValue);

      this.http
        .get('https://weareoutstanding-6c621.firebaseio.com/schools.json')
        .subscribe(data => {
          Object.values(data).filter(school => {
            if (school.name.toLowerCase().includes(filterValue)) {
              this.filtered.push(school.name);
            }
          });
        });
    }

    console.log(this.filtered);
  }
}
