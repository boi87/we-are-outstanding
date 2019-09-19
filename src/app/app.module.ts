import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReviewService } from './add-review/addReview.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReviewComponent,
    ReviewsComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AddReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
