import { Row, Col } from "react-bootstrap"
import { useAppDispatch } from "../../app/hooks"
import { AllTagsList } from "../../common/tags/all-tags-list/AllTagsList"
import { Tag } from "../../interfaces/Tag"
import { updateIngredientSearch } from "../ingredients/ingredientSearchSlice"
import { FoodList } from "./food-list/FoodList"
import { FoodSearch } from "./food-search/FoodSearch"
import { updateFoodSearch } from "./foodSearchSlice"

export const Food = () => {

    const dispatch = useAppDispatch()
    const handleTagClick = ( tag:Tag) => {
        dispatch(updateFoodSearch({term: "", tag:tag, page: 0}))
    }   
    

    return(
        <>
        <div className="mt-2 p-3">
        <h5 className="mb-2 position-relative">Food
        
        </h5>
            <Row>
            <Col xs={{span: 12}}  lg={{span: 4}} >
                <FoodSearch /> 
               <AllTagsList handleTagClick={handleTagClick}/>
            </Col>
            <Col xs={{span: 12}}  lg={{span: 8}} >
                <FoodList />
            </Col>
            </Row>
        </div>
        </>
    )
}


