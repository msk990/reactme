import { springApi } from "./emptySpringApi";

export const tagApi = springApi.injectEndpoints({
    endpoints: (builder) => ({
        getTags: builder.query<any, void> ({
            query: () => ({
                url: `/tags`
            })
        })
    })
})
export const { useGetTagsQuery } = tagApi