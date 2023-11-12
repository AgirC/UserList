export interface User {
  name: Name;
  email: string;
  phone: string;
  nat: 'AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IN' | 'IR' | 'MX' | 'NL' | 'NO' | 'NZ' | 'RS' | 'TR' | 'UA' | 'US';
  picture: Picture;
  dob: UserDate;
}

interface UserDate {
  age: number;
  date: Date;
}

interface Name {
  title: 'Mr' | 'Mrs' | 'Ms' | 'Miss';
  first: string;
  last: string;
};

interface Picture {
  large: string;
  thumbnail: string;
}

export default User;