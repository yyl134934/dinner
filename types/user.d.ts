declare namespace UserGlobal {
  import { ObjectId } from 'mongodb';

  interface Profile {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  interface UserState {
    profile: Profile | null;
    isLoading: boolean;
    errors: Errors;
  }

  interface User {
    _id: ObjectId;
    name: string;
    username: string;
    password: string;
    role: number;
    remark: string;
  }
}
