import { Row, Col } from "react-bootstrap"
import { useAppDispatch } from "../../../app/hooks"
import { AllTagsList } from "../../../common/tags/all-tags-list/AllTagsList"
import { Tag } from "../../../interfaces/Tag"
import { IngredientSearch } from "../../ingredients/ingredient-search/IngredientSearch"
import { IngredientsList } from "../../ingredients/ingredients-list/IngredientsList"
import { updateIngredientSearch } from "../../ingredients/ingredientSearchSlice"
import { SelectIngredientList } from "../select-ingredient-list/SelectIngredientList"

export const IngredientSelector = (props:any) => {

    const addIt = props.addIt
    const setAddIt = props.setAddIt
    const dispatch = useAppDispatch()
    const handleTagClick = ( tag:Tag) => {
        dispatch(updateIngredientSearch({term: "", tag:tag, page: 0}))
    }

    return(
        <>
           <Row>
            <Col xs={{span: 12}}  lg={{span: 4}} >
               <IngredientSearch />
               <AllTagsList handleTagClick={handleTagClick}/>
            </Col>
            <Col xs={{span: 12}}  lg={{span: 8}} >
                <SelectIngredientList addIt={addIt} setAddIt={setAddIt} />
            </Col>
            </Row>
        </>
    )
}