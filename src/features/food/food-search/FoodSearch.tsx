import { Button, Form, InputGroup } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { foodSearch, updateFoodSearch } from "../foodSearchSlice"

export const FoodSearch = () => {
    const dispatch = useAppDispatch()
    const {term,tag, page} = useAppSelector(foodSearch)


    function handleSearchChange(e: any ){
        console.log("search value is"+e.target.value)
        dispatch(updateFoodSearch({term: e.target.value, tag:tag, page: 0}))
    }

    return (
        <>
             <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search food"
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