import config from "@/config";

export default async function useisLogin(): Promise<boolean> {
    try {
        const response = await fetch(`${config.baseUrl}/api/islogin`);

        if (!response.ok) {
            console.error("Error fetching login status: ", response.statusText);
            return false;
        }
        const data = await response.json();

        if (typeof data.access === 'boolean') {
            return data.access;
        } else {
            console.error('Invalid response format:', data);
            return false;
        }

    } catch (error) {
        console.error('Error fetching login status:', error);
        return false;
    }
}
