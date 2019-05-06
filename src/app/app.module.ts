import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AddReviewComponent } from "./add-review/add-review.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { AddReviewService } from "./add-review/addReview.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReviewComponent,
    ReviewsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AddReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
