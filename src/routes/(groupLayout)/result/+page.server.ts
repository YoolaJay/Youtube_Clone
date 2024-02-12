import { getSearch } from '$lib/service';

export const load = async ({url}) => {
  const query = (url.searchParams.get('q') || '' ).replace(/\s+/g,'')
  const filters = (url.searchParams.get('filters') || '' ).replace(/\s+/g,'')

//   return{
//     contents: getSearch({
//         query, filters
//     })
//   }

    try {
        const contents = await getSearch({
            query, filters
        });

        return {
            contents
        };
    } catch (error:any) {
        console.error('Error:', error.message);
        // Handle the error appropriately, e.g., return an error page
        throw error;
    }

};