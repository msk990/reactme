import { InputGroup, Form, Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ingredientSearch, updateIngredientSearch } from "../ingredientSearchSlice"

export const IngredientSearch = () => {
    const dispatch = useAppDispatch()
    const {term,tag, page} = useAppSelector(ingredientSearch)


    function handleSearchChange(e: any ){
        console.log("search value is"+e.target.value)
        dispatch(updateIngredientSearch({term: e.target.value, tag:tag, page: 0}))
    }

    return (
        <>
             <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search ingredient"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleSearchChange}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
        </>
    )
}