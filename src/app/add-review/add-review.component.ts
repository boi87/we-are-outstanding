import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddReviewService } from '../services/addReview.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  schoolDataForm: FormGroup;
  addReviewForm: FormGroup;

  searchingForSchoolMode: boolean;
  reviewAddingMode: boolean;

  selectedSchool: string;
  filterValue: string;
  noSchoolError: boolean;

  loading: boolean;

  filtered: string[];

  constructor(
    private http: HttpClient,
    private addReviewService: AddReviewService
  ) {}

  ngOnInit() {
    this.noSchoolError = true;
    this.loading = false;
    this.filtered = [];

    this.searchingForSchoolMode = true;
    this.reviewAddingMode = false;

    this.initForm();
  }

  onFilterNames(event) {
    this.filterValue = event.target.value.toLowerCase();
    if (this.filterValue.length >= 3) {
      // working final working query
      this.http
        .get('https://weareoutstanding-6c621.firebaseio.com/names.json')
        .subscribe(data => {
          this.filtered = Object.keys(data).filter(schoolNames =>
            schoolNames.toLowerCase().includes(this.filterValue)
          );
        });
      this.noSchoolError = !this.filtered.length;

      this.checkValidity();
    }
  }

  checkValidity() {
    this.filtered.map(e =>
      e.toLowerCase() !==
      this.schoolDataForm.get('schoolName').value.toLowerCase()
        ? (this.noSchoolError = true)
        : (this.noSchoolError = false)
    );
  }

  onSelectSchool() {
    this.searchingForSchoolMode = false;
    this.reviewAddingMode = true;

    // call FB with name of the school, retrieve ID, address, etc.

    this.selectedSchool = this.schoolDataForm.value.schoolName;

    this.initForm();
  }

  onEditSelectedSchool() {
    this.searchingForSchoolMode = true;
    this.reviewAddingMode = false;
    this.selectedSchool = null;

    this.initForm();
  }

  onSubmitReview() {
    const newReview = {
      schoolName: this.selectedSchool,
      review: this.addReviewForm.value
    };
    this.loading = true;
    this.addReviewService.addNewReview(newReview).subscribe(
      response => {
        if (response) {
          Swal.fire({
            title: `Your review for ${this.selectedSchool} has been saved!`,
            type: 'success'
          });
          this.loading = false;
        }
        this.addReviewForm.reset();
        this.reviewAddingMode = false;
        this.searchingForSchoolMode = true;
        this.ngOnInit();
      },
      error => {
        Swal.fire({
          title: `We couldn\'t save your review this time!`,
          text: error,
          type: 'error'
        });
        this.loading = false;
        this.addReviewForm.patchValue(newReview.review);
      }
    );
  }

  onDiscardAndClear() {
    this.ngOnInit();
  }

  private initForm() {
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
