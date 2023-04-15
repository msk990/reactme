import { Button } from "react-bootstrap"
import { Tag } from "../../interfaces/Tag"

export const ElementTags = (props:any) => {

 
            const itemTags = props.itemTags
            const setItemTags = props.setItemTags
            const handleRemoveTagClick = (tag:Tag) => {
                setItemTags(itemTags.filter((item: Tag) => item.id !== tag.id));
            }
    
    return (
        <>
        <section className="mb-3">
         
        {
            itemTags.map((tag:any, index:any) => (
                <Button 
                key={index}
                className={"m-2 px-3 py-2 float-start"}
                variant={tag.color}
                onClick = {() => {
                   // dispatch(updateIngredientSearch({term: "", tag:tagie, page: 0}))
                    handleRemoveTagClick(tag)
                }}
                >
                    {tag.tag}  x
                </Button>
            ))
        }
        </section>
        </>
    )
       
}