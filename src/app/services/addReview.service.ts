import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewReview, Review } from '../shared/review.model';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable()
export class AddReviewService {
  constructor(private http: HttpClient, private router: Router) {}

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
      if (reportData) {
        Swal.fire({
          title: `Your review for ${reviewValues.schoolName} has been saved!`,
          type: 'success'
        }).then((result) => {
          console.log(result);
          if (result) {
            console.log(result);
          } else {
            console.log(result);
          }
        });
      } else {
        // throw new Error('We could not save your review this time');
        Swal.fire({
          title: 'We could not save your review this time',
          type: 'error'
        });
      }
    });
  }
}
