export interface Package {
  name: String;
  price: String;
  benefits: Benefit[];
}

export interface Benefit {
  included: Boolean;
  benefit: String;
}
