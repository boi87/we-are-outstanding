import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewReview, Review } from '../shared/review.model';
import Swal from 'sweetalert2';

@Injectable()
export class AddReviewService {
  constructor(private http: HttpClient) {}
  private reviews: Review[] = [
    new Review(
      'Big blue strict school',
      'Management sucks',
      'Pupils behaviour is bad',
      'Workload is huge',
      'From 6 to 18',
      'Lots of pressure',
      'Staff is amazing',
      'Good structure and IT',
      'Very strict policies'
    ),
    new Review(
      'Small school',
      'Management great',
      'Pupils behaviour is good',
      'Workload is average',
      'From 8 to 15',
      'Not much pressure',
      'Staff is boring',
      'Awful structure and IT',
      'Very liberal policies'
    )
  ];

  getReviews() {
    return this.reviews.slice();
  }

  addNewReview(reviewValues: NewReview) {
    const school = reviewValues.schoolName;
    const newReview = reviewValues.newReview;
    const url = `https://weareoutstanding-6c621.firebaseio.com/names/${school.replace(
      /\s/g,
      '%20'
    )}/reviews.json`;

    console.log(url);

    this.http.post(url, newReview).subscribe(reportData => {
      console.log(reportData);
    });

    // Swal.fire(
    //   'Your review has been saved!',
    //   `${review.schoolName} is in our system.`,
    //   'success'
    // );
  }
}
