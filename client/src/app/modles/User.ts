export interface UserLoginData {
  name: string;
  email: string;
  isLog: boolean;
}

export interface UserRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}
