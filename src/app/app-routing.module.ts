import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddReviewComponent } from "./add-review/add-review.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { ReviewDetailComponent } from "./reviews/review-detail/review-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/new-review", pathMatch: "full" },
  { path: "new-review", component: AddReviewComponent },
  {
    path: "reviews",
    component: ReviewsComponent,
    children: [{ path: ":schoolName", component: ReviewDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
