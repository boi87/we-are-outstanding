import { Component, OnInit } from "@angular/core";
import { AddReviewService } from "../add-review/addReview.service";
import { Review } from "../shared/review.model";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.css"]
})
export class ReviewsComponent implements OnInit {
  index: number;
  reviews: Review[];

  constructor(private addReviewService: AddReviewService) {}

  ngOnInit() {
    this.reviews = this.addReviewService.getReviews();
    console.log(this.reviews);
  }
}
