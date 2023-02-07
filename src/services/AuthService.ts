import { Auth } from 'aws-amplify';

type Profile = "doctor" | "patient";

interface UserAuthData {
  email: string;
  password: string;
  profile: Profile;
}

interface UserConfirmData {
  email: string;
  code: string;
}

export class AuthService {
  static async signUp ({ email, password, profile }: UserAuthData) {
    const data = await Auth.signUp({
      username: email,
      password,
      attributes: {
        profile
      },
      autoSignIn: {
        enabled: true,
      }
    });
    return data;
  }

  static async confirmSignUp ({ email, code }: UserConfirmData) {
    await Auth.confirmSignUp(email, code);
  }

  static async getUser () {
    return Auth.currentUserInfo();
  }
}
