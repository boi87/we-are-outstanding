import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { AddReviewService } from "./addReview.service";

@Component({
  selector: "app-add-review",
  templateUrl: "./add-review.component.html",
  styleUrls: ["./add-review.component.css"]
})
export class AddReviewComponent implements OnInit {
  id: number;
  addReviewForm: FormGroup;
  editMode = false;

  constructor(private reviewService: AddReviewService) {}

  ngOnInit() {}

  onSubmit() {
    this.addReviewForm;
  }
  private initForm() {
    this.addReviewForm = new FormGroup({});
  }
}
