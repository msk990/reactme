import { Button } from "react-bootstrap"
import { PaginationControl } from "react-bootstrap-pagination-control"
import { useGetItemsQuery } from "../../../api/itemEndpoints"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ingredientSearch, resetAll, updateIngredientSearch } from "../../ingredients/ingredientSearchSlice"
import { SelectIngredientCard } from "../select-ingredient-card/SelectIngredientCard"

export const SelectIngredientList = (props:any) => {
    const {term,tag, page} = useAppSelector(ingredientSearch)
    // const [page, setPage] = useState(0);
   // const {term, page} = useAppSelector()
   const addIt = props.addIt
   const setAddIt = props.setAddIt
     const { data, error, isFetching, isLoading } = useGetItemsQuery({page:page, term:term, tag:tag.id })
     
     const dispatch = useAppDispatch()
    return (
        <>
        <section className="w-100">
            <div className="mb-2">
            {tag.id ? (
            <Button 
            variant={tag.color}
            onClick = {() =>{dispatch(resetAll())}}
            >{tag.tag}  x</Button>)
            
            : null}

            <Button 
            variant="success"
            className="float-end me-4">
                New ingredient</Button>
            </div>
                <div className="clearfix"></div>
        {error ? (<>Oh no, there was an error</>) :
        isLoading ? (<>Loading...</>) :
        data ? (
            <>
   <div className="w-100 d-inline">
      {  data.content.map((item:any, index:number) => (
       
           <SelectIngredientCard
           addIt={addIt} setAddIt={setAddIt} 
        key={index} details={item}/>
        )
        
        )}
        </div>
        <div className="clearfix"></div>
        <div className="mt-2">
        <PaginationControl
    page={page+1}
    between={2}
    total={data.totalPages}
    limit={5}
    changePage={(page) => {
     // setPage(page-1); 
     // console.log(page)
     dispatch(updateIngredientSearch({term: term, tag:tag, page: page-1}))
    }}
    ellipsis={1}
  />
        </div>
        </>   ) :
        null
    }
        </section>
        </>
    )
}