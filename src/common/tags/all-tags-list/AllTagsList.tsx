import { useGetTagsQuery } from "../../../api/tagEndpoints"
import { TagDiv } from "../tag-div/TagDiv"

export const AllTagsList = (props:any) => {
    const handleTagClick = props.handleTagClick
    const itemTags = props.itemTags
    const setItemTags = props.setItemTags
    const { data, error, isFetching, isLoading } = useGetTagsQuery()
    return(
        <>
        <section className="d-inline">

        {error ? (<>Oh no, there was an error</>) :
        isLoading ? (<>Loading...</>) :
        data ? (<>
        {
            data.map((tag:any, index:number) =>(
               <TagDiv tag={tag} key={tag.id} handleTagClick={handleTagClick}/>
            ))
        }
        </>) 
        
        : null}

        </section>
        </>
    )
}