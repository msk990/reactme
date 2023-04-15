import { InputGroup, Dropdown, Form } from "react-bootstrap"
import { Search } from "react-bootstrap-icons"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateSearchTerm } from "../searchSlice";



export const SearchComponent = () => {
    const dispatch = useAppDispatch()


    function handleSearchChange(e: any ){
        console.log("search value is"+e.target.value)
        dispatch(updateSearchTerm(e.target.value))
    }
    return(
        <>
        <InputGroup>          
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">drink</Dropdown.Item>
        <Dropdown.Item href="#/action-2">bread</Dropdown.Item>
        <Dropdown.Item href="#/action-3">main</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
   
         
          <Form.Control
            type="text"
            placeholder="Search"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
            onChange={handleSearchChange}
          /> 
          <InputGroup.Text id="btnGroupAddon2">
          <Search  />
          </InputGroup.Text>
        </InputGroup>
        </>
    )
}