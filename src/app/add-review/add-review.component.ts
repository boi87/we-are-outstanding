import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  NgForm
} from '@angular/forms';
import { AddReviewService } from './addReview.service';
import { Review } from '../shared/review.model';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id: number;
  addReviewForm: FormGroup;
  editMode = false;

  constructor(private reviewService: AddReviewService) {}

  ngOnInit() {
    this.initForm();
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
    this.reviewService.addNewReview(newReview);
    console.log(value);
  }

  private initForm() {
    let schoolName = '';
    let location = '';
    let generalDescription = '';
    let management = '';
    let pupilsBehaviour = '';
    let type = '';
    let workload = '';
    let workingHours = '';
    let pressure = '';
    let staff = '';
    let infrastructures = '';
    let policies = '';

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
}
