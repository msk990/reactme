import { Button } from "react-bootstrap"
import { useUpdateItemMutation } from "../../../api/itemEndpoints"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ingredientSearch, updateIngredientSearch } from "../../../features/ingredients/ingredientSearchSlice"
import { lang } from "../../languageSlice"

export const TagDiv = (props:any) => {
    const handleTagClick = props.handleTagClick
    const tagie = props.tag
    const dispatch = useAppDispatch()

    const lng = useAppSelector(lang)
    
    const {term,tag, page} = useAppSelector(ingredientSearch)
    return (<>
    <Button 
    className={"m-2 px-3 py-2 float-start"}
    variant={tagie.color}
    onClick = {() => {
       // dispatch(updateIngredientSearch({term: "", tag:tagie, page: 0}))
        handleTagClick(tagie)
    }}
    >
       {lng=='sl'? tagie.tagSl : tagie.tag} 
       
    
    </Button>
    </>)
}