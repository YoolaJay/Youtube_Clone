import { getHomepage } from "$lib/service";
import { fail, redirect } from "@sveltejs/kit";
// import { fail } from "assert";

// export const load = async () => {
//     return {
//         content: getHomepage()
//     }
// };

export const load = async () => {
    try {
        const content = await getHomepage();
        return {
            content
        };
    } catch (error) {
        // console.error('Error:', error.message);
        // You might want to handle the error appropriately, e.g., returning an error page
        throw error;
    }
};

export const actions = {
    search: async({request}) => {
        const data = await request.formData()
        const query = data.get('q')
        if (!query){
            return fail(400, {error: 'Empty search bar'})
        }
        throw redirect(301, `/result?q=${query}`)
    }
};