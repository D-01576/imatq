import config from "@/config";
import axios from "axios";
import { cookies } from "next/headers";

type IsLoginResult =
  | { isLoggedIn: true; user: {
    profile: string,
    name : string
  } }
  | { isLoggedIn: false };

export default async function useisLogin(): Promise<IsLoginResult> {
  try {
    const token = await cookies();
    const accessToken = await token.get("access-token");
    
    if (!accessToken?.value) {
      return { isLoggedIn: false }; // No token means not logged in
    }

    const response = await axios.get(`${config.baseUrl}/auth/islogin`, {
      headers: {
        Authorization: accessToken.value,
      },
    });

    const data = response.data;

    if (data.status === "PASS" && data.user) {
      return { isLoggedIn: true, user: { profile: data.user.profile , name : data.user.name} };
    }

    return { isLoggedIn: false }; // Invalid or missing user data
  } catch (error) {
    console.error("Error fetching login status:", error);
    return { isLoggedIn: false }; // Handle errors gracefully
  }
}
