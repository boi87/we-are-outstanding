import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReviewService } from './add-review/addReview.service';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReviewComponent,
    ReviewsComponent,
    ReviewDetailComponent
    // BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [AddReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
