import config from "@/config";
import axios from "axios";
import { cookies } from "next/headers";

export default async function useisLogin(): Promise<boolean> {
    try {
        const token = await cookies();
        const to = await token.get("access-token")
        const response = await axios.get(`${config.baseUrl}/auth/islogin`, {
            headers: {
                Authorization: to?.value
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
