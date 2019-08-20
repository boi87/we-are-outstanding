import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../shared/review.model';
import Swal from 'sweetalert2';

@Injectable()
export class AddReviewService {
  constructor(private http: HttpClient) {}
  private reviews: Review[] = [
    new Review(
      'MossbourneCommunityAcademy',
      'London',
      'Big blue strict school',
      'Management sucks',
      "Pupils' behaviour is bad",
      'Public',
      'Workload is huge',
      'From 6 to 18',
      'Lots of pressure',
      'Staff is amazing',
      'Good structure and IT',
      'Very strict policies'
    ),
    new Review(
      'St. James School',
      'Manchester',
      'Small school',
      'Management great',
      "Pupils' behaviour is good",
      'Private',
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

  addNewReview(review: Review) {
    console.log('this is the review', review);
    this.reviews.push(review);
    console.log(this.reviews);
    // this.http
    //   .post(
    //     'https://weareoutstanding-6c621.firebaseio.com/posts.json'
    //     , review)
    //   .subscribe(reportData => {
    //     console.log(reportData);
    //   });

    Swal.fire(
      'Your review has been saved!',
      `${review.schoolName} is in our system.`,
      'success'
    );
  }
}
