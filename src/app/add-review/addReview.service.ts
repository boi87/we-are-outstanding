import { Review } from "../shared/review.model";

export class AddReviewService {
  private reviews: Review[] = [
    new Review(
      "London",
      "Mossbourne Community Academy",
      "Big blue strict school",
      "Management sucks",
      "Pupils' behaviour is bad",
      "Public",
      "Workload is huge",
      "From 6 to 18",
      "Lots of pressure",
      "Staff is amazing",
      "Good structure and IT",
      "Very strict policies"
    ),
    new Review(
      "Manchester",
      "St. James School",
      "Small school",
      "Management great",
      "Pupils' behaviour is good",
      "Private",
      "Workload is average",
      "From 8 to 15",
      "Not much pressure",
      "Staff is boring",
      "Awful structure and IT",
      "Very liberal policies"
    )
  ];

  getReviews() {
    return this.reviews.slice();
  }

  addNewReview(review: Review) {
    console.log("this is the review", review);
    this.reviews.push(review);
    console.log(this.reviews);
  }
}
