import { Component, OnInit } from "@angular/core";
import { AddReviewService } from "../add-review/addReview.service";
import { Review } from "../shared/review.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  index: number;
  reviews: Review[];

  constructor(private addReviewService: AddReviewService) {}

  ngOnInit() {
    this.reviews = this.addReviewService.getReviews();
  }
}
