import config from "@/config";
import axios from "axios";
import { cookies } from "next/headers";

export default async function useisLogin(): Promise<boolean> {
    try {
        const token = await cookies().get("access-token")
        // console.log(token.value)
        const response = await axios.get(`${config.baseUrl}/auth/islogin`, {
            token : token,
            headers: {
                Authorization: token.value
            }
        });
        const data = response.data;
        if(!data){
            return false
        }
        console.log(data)
        if (data.status === "PASS") {
            return true;
        }
        return false

    } catch (error) {
        console.error('Error fetching login status:', error);
        return false;
    }
}
