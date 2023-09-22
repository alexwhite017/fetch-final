export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export interface Location {
  zip_code: string;
  latitude: number;
  longitute: number;
  city: string;
  state: string;
  county: string;
}

export interface BreedsApiResponse {
  breeds: string[];
}

export interface DogsApiResponse {
  next: string;
  resultIds: string[];
  total: number;
  prev: string;
}

export interface DogRequestData {
  breed: string;
  minAge: number;
  maxAge: number;
  location: string;
}

export interface Match {
  match: Dog;
}
