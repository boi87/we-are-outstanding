import { Component, OnInit } from '@angular/core';
import { AddReviewService } from '../services/addReview.service';
import { Review } from '../shared/review.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  index: number;
  reviews: Review[];
  schoolDataForm: FormGroup;
  noSchoolError: boolean;
  filtered: string[];
  filterValue: string;
  selectedSchool: string;
  searchingForSchoolMode: boolean;
  loading: boolean;

  constructor(
    private addReviewService: AddReviewService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.noSchoolError = true;
    this.reviews = this.addReviewService.getReviews();
    this.filtered = [];
    this.searchingForSchoolMode = true;

    this.loading = false;

    this.initForm();
  }

  onFilterNames(event) {
    this.filterValue = event.target.value.toLowerCase();
    if (this.filterValue.length && this.filterValue.length >= 3) {
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

  private initForm() {
    this.schoolDataForm = new FormGroup({
      schoolName: new FormControl(null, [Validators.required])
      // location: new FormControl(null, [Validators.required]),
      // type: new FormControl(null, [Validators.required])
    });
  }

  onSelectSchool() {
    this.searchingForSchoolMode = false;
    this.selectedSchool = this.schoolDataForm.value.schoolName;
    // call FB with name of the school, retrieve ID, address, etc.
    console.log(this.selectedSchool);
    this.initForm();
  }

  onEditSelectedSchool() {
    this.searchingForSchoolMode = true;
    this.selectedSchool = null;

    this.initForm();
  }
}
