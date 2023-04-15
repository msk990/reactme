import { Row, Col } from "react-bootstrap"
import { AllTagsList } from "../../../common/tags/all-tags-list/AllTagsList"
import { FoodList } from "../../food/food-list/FoodList"
import { FoodSearch } from "../../food/food-search/FoodSearch"
import { useAppDispatch } from "../../../app/hooks"
import { updateFoodSearch } from "../../food/foodSearchSlice"
import { Tag } from "../../../interfaces/Tag"
import { MenuFoodList } from "../menu-food-list/MenuFoodList"

export const MenuFoodSelctor = (props:any) => {
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
                <MenuFoodList />
            </Col>
            </Row>
        </div>
        </>
    )
}