import { Button, Col, Container, Row } from "react-bootstrap"
import { useAppDispatch } from "../../app/hooks"
import { AllTagsList } from "../../common/tags/all-tags-list/AllTagsList"
import { Tag } from "../../interfaces/Tag"
import { IngredientSearch } from "./ingredient-search/IngredientSearch"
import { IngredientsList } from "./ingredients-list/IngredientsList"
import { updateIngredientSearch } from "./ingredientSearchSlice"

export const Ingredients = () => {
    const dispatch = useAppDispatch()
    const handleTagClick = ( tag:Tag) => {
        dispatch(updateIngredientSearch({term: "", tag:tag, page: 0}))
    }
    return (
        <>
       <div className="mt-2 p-3">
        <h5 className="mb-2 position-relative">Ingredients
        
        </h5>
            <Row>
            <Col xs={{span: 12}}  lg={{span: 4}} >
               <IngredientSearch />
               <AllTagsList handleTagClick={handleTagClick}/>
            </Col>
            <Col xs={{span: 12}}  lg={{span: 8}} >
                <IngredientsList />
            </Col>
            </Row>
        </div>
        </>
    )
}