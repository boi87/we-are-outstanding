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
import schoolData from '../../../schools-data/school-data.json';

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
  length: number;

  constructor(private addReviewService: AddReviewService) {}

  ngOnInit() {
    this.initForm();
    this.data = schoolData;
    length = 0;
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

  onFilterNames(event) {
    const filterValue = event.target.value.toLowerCase();
    console.log(
      this.data.filter(x => x.name.toLowerCase().includes(filterValue))
    );
    this.length = this.data.length;
    return this.data.filter(x => x.name.toLowerCase().includes(filterValue));

    console.log(this.data);
  }
}
