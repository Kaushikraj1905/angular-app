export interface StudentI {
  firstName: string;
  lastName: string;
  age: number;
  isInternationalStudent: boolean;
  studentAddress: AddressI;
  localGuardianAddress: AddressI;
}

export interface AddressI {
  street: string;
  apt: string;
  state: string;
  city: string;
  zip: string;
}
