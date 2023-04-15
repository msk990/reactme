import { Button } from "react-bootstrap"
import { PaginationControl } from "react-bootstrap-pagination-control"
import { useNavigate } from "react-router-dom"
import { useGetFoodListQuery } from "../../../api/foodEndpoints"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"

import { foodSearch, resetFoodSearch, updateFoodSearch } from "../../food/foodSearchSlice"
import { MenuFoodCard } from "../menu-food-card/MenuFoodCard"

export const MenuFoodList = () => {
    const {term,tag, page} = useAppSelector(foodSearch)
 
     const { data, error, isFetching, isLoading } = useGetFoodListQuery({page:page, term:term, tag:tag.id })
     
     const dispatch = useAppDispatch()
     const navigate = useNavigate();
    return(
        <>
              <section className="w-100">
            <div className="mb-2">
            {tag.id ? (
            <Button 
            variant={tag.color}
            onClick = {() =>{dispatch(resetFoodSearch())}}
            >{tag.tag}  x</Button>)
            
            : null}

            {/* <Button 
            variant="success"
            className="float-end me-4"
            onClick = {() =>{navigate('/new-food')}}
            > 
                New food item</Button>*/}
            </div>
                <div className="clearfix"></div>
        {error ? (<>Oh no, there was an error</>) :
        isLoading ? (<>Loading...</>) :
        data ? (
            <>
   <div className="w-100 d-inline">
      {  data.content.map((food:any, index:number) => (
       
           <MenuFoodCard key={index} details={food}/>
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
                dispatch(updateFoodSearch({term: term, tag:tag, page: page-1}))
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


