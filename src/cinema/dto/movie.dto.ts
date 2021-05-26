export interface MovieDto {
  title: string;
  director: string;
  actor: string;
  duration: Number;
  ageRating: Agerating;
  category: "ACTION" | "COMEDY" | "SUSPENSE" | "TERROR";
}
enum Agerating {
  FREE,
  TWELVE,
  FOURTEEN,
  SIXTEEN,
  EIGHTEEN,
  TWENTY,
}
