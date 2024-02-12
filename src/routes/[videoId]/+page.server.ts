// import { getRelatedContent, getVideoComments, getVideoDetails } from '$lib/service';

// export const load = async ({ params }) => {
// 	const { videoId } = params;

// 	return {
// 		details: getVideoDetails(videoId),

// 		streamed: {
// 			comments: getVideoComments(videoId),
// 			relatedContent: getRelatedContent(videoId)
// 		}
// 	};
// };

import { getRelatedContent, getVideoComments, getVideoDetails } from '$lib/service';

export const load = async ({ params }) => {
    const { videoId } = params;

    try {
        const details = await getVideoDetails(videoId);

        const comments = await getVideoComments(videoId);
        const relatedContent = await getRelatedContent(videoId);

        return {
            details,
            streamed: {
                comments,
                relatedContent
            }
        };
    } catch (error: any) {
        console.error('Error:', error.message);
        // Handle the error appropriately, e.g., return an error page
        throw error;
    }
};
