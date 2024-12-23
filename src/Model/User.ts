export interface IUser {
    token: string;
    isAuthenticated: () => boolean;
  }
  
  export class UserModel implements IUser {
    token: string;
  
    constructor(token: string) {
      this.token = token;
    }
  
    isAuthenticated(): boolean {
      return !!this.token;
    }
  }