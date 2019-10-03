export class Review {
  public generalDescription: string;
  public management: string;
  public pupilsBehaviour: string;
  public workload: string;
  public workingHours: string;
  public pressure: string;
  public staff: string;
  public infrastructures: string;
  public policies: string;

  constructor(
    generalDescription: string,
    management: string,
    pupilsBehaviour: string,
    workload: string,
    workingHours: string,
    pressure: string,
    staff: string,
    infrastructures: string,
    policies: string
  ) {
    this.generalDescription = generalDescription;
    this.management = management;
    this.pupilsBehaviour = pupilsBehaviour;
    this.workload = workload;
    this.workingHours = workingHours;
    this.pressure = pressure;
    this.staff = staff;
    this.infrastructures = infrastructures;
    this.policies = policies;
  }
}

export class NewReview {
  public schoolName: string;
  public newReview: Review;

  constructor(
    schoolName: string,
    newReview: Review
  ) {
    this.schoolName = schoolName;
    this.newReview = newReview;
  }
}
