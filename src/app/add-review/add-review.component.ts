import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddReviewService } from './addReview.service';
import { Review } from '../shared/review.model';
import { HttpClient } from '@angular/common/http';
import { default as mockSchoolsNames } from '../../../mockData/mockSchoolsNames.json';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id: number;

  schoolDataForm: FormGroup;
  addReviewForm: FormGroup;

  searchingForSchoolMode: boolean;
  reviewAddingMode: boolean;

  selectedSchool: string;

  loading: boolean;

  filtered: string[];

  constructor(
    private http: HttpClient,
    private addReviewService: AddReviewService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.filtered = [];

    this.searchingForSchoolMode = true;
    this.reviewAddingMode = false;

    this.initForm();
  }

  onFilterNames(event) {
    const filterValue = event.target.value.toLowerCase();
    if (filterValue.length >= 3) {
      console.log(filterValue);

      // old code (for safety reason)
      // const arr = [];
      // this.http
      //   .get('https://weareoutstanding-6c621.firebaseio.com/schools-names.json')
      //   .subscribe(data => {
      //     // console.log(data.map(e => arr.push(e)));
      //     arr.push(
      //       Object.values(data)
      //     );
      //
      //     this.filtered = arr.map(words =>
      //       words.filter(word => word.toLowerCase().includes(filterValue))
      //     );
      //     console.log(typeof this.filtered);
      // });

      // possible final working call
      // this.http
      //   .get('https://weareoutstanding-6c621.firebaseio.com/schools-names.json')
      //   .subscribe(data => {
      //     // console.log(data.map(e => arr.push(e)));
      //
      //     this.filtered = Object.keys(data).filter(schoolNames =>
      //         schoolNames.toLowerCase().includes(filterValue)
      //       );
      //     console.log(typeof this.filtered);
      // });

      // this works with mockdata
      this.filtered = Object.keys(mockSchoolsNames).filter(schoolNames =>
        schoolNames.toLowerCase().includes(filterValue)
      );
      // console.log(this.filtered);
    }

  }

  onSelectSchool() {
    this.searchingForSchoolMode = false;
    this.reviewAddingMode = true;

    this.selectedSchool = this.schoolDataForm.value;

    this.initForm();
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

    console.log(this.searchingForSchoolMode);

    this.schoolDataForm = new FormGroup({
      schoolName: new FormControl(
        { value: null, disabled: !this.searchingForSchoolMode },
        [Validators.required]
      )
      // location: new FormControl(null, [Validators.required]),
      // type: new FormControl(null, [Validators.required])
    });

    this.addReviewForm = new FormGroup({
      generalDescription: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      management: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      pupilsBehaviour: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      workload: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      workingHours: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      pressure: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      staff: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      infrastructures: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      ),
      policies: new FormControl(
        { value: null, disabled: !this.reviewAddingMode },
        Validators.required
      )
    });
  }
}
