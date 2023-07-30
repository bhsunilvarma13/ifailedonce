import { ID, account } from "./config";

class AppwriteAuth {
  async createUserAccount({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: any) {
      throw error;
    }
  }

  async createGoogleSession() {
    try {
      return account.createOAuth2Session("google", "http://localhost:3000/");
    } catch (error: any) {
      throw error;
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error: any) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}

    return false;
  }

  getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log("getcurrentUser error: " + error);
    }

    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error: " + error);
    }
  }
}

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;
