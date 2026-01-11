export interface User {
  createUser(data: {
    publicID: string;
    username: string;
    email: string;
    contact_no: string;
    password: string;
  }): Promise<any>;

  getUserByEmail(email: string): Promise<any | null>;
  getUserByContact(contact: string): Promise<any | null>;
}
