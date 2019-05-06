export class Review {
  public schoolName: string;
  public location: string;
  public generalDescription: string;
  public management: string;
  public pupilsBehaviour: string;
  public type: string;
  public workload: string;
  public workingHours: string;
  public pressure: string;
  public staff: string;
  public infrastructures: string;
  public policies: string;

  constructor(
    schoolName: string,
    location: string,
    generalDescription: string,
    management: string,
    pupilsBehaviour: string,
    type: string,
    workload: string,
    workingHours: string,
    pressure: string,
    staff: string,
    infrastructures: string,
    policies: string
  ) {
    this.schoolName = schoolName;
    this.location = location;
    this.generalDescription = generalDescription;
    this.management = management;
    this.pupilsBehaviour = pupilsBehaviour;
    this.type = type;
    this.workload = workload;
    this.workingHours = workingHours;
    this.pressure = pressure;
    this.staff = staff;
    this.infrastructures = infrastructures;
    this.policies = policies;
  }
}
