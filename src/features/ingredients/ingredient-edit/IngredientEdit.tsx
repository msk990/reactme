import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { Row, Col, Table, Modal, Button } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { useUpdateItemMutation } from "../../../api/itemEndpoints"
import { ElementBadges } from "../../../common/element-badges/ElementBadges"
import { ElementTags } from "../../../common/element-tags/ElementTags"
import { MacroNutrients } from "../../../common/macro-nutrients/MacroNutrients"
import { Minerals } from "../../../common/minerals/Minerals"
import { AllTagsList } from "../../../common/tags/all-tags-list/AllTagsList"
import { Vitamins } from "../../../common/vitamins/Vitamins"
import { Tag } from "../../../interfaces/Tag"
import { yupSchema } from "../../new-ingredient/yupSchema"
import { useNavigate } from "react-router-dom"

export const IngredientEdit = (props:any) => {

    const [updateItem, { error: cordaError, isLoading }] = useUpdateItemMutation()
const dets = props.details

const editIt = props.editIt
const setEditIt = props.setEditIt
    const schema = yupSchema

    const [tagIt, setTagIt] = useState(false)

    const [itemTags, setItemTags] = useState<Tag[]>(dets.tag)

    const navigate = useNavigate();
  



    const onSubmit = async (data: any) => {  
       // console.log(data)
       // console.log(itemTags)

        data.tag = itemTags

       // console.log(data)

        updateItem(data)
        .unwrap()
        .then((payload) =>{ 
      
            console.log('fulfilled', payload)
            setEditIt(false)
          })
        .catch((error) => console.error('rejected', error))  
    }

    const handleTagClick = (tag:Tag) => {
        console.log('tagClick')
        
        
      setItemTags([...itemTags, tag])
      console.log(itemTags)
    }

    const methods= useForm({
    defaultValues: dets,
    // resetOptions: {
    //   keepDirtyValues: true
    // }
    resolver: yupResolver(schema)

}) 
    return(
        <>
        <FormProvider {...methods}>
        <form  onSubmit={methods.handleSubmit(onSubmit)}>
        <Row>
            <Col xs={{span: 12}}  lg={{span: 4}} >
            <div className="form-group mt-2 mb-1">
                    <label >Product name English</label>
                    <input {...methods.register('itemName')} type="text" className="form-control" id="name"  placeholder="Enter item name" />
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.itemName?.message}</></small>
                </div>
                <div className="form-group mt-2 mb-1">
                    <label >Product name Slovenian</label>
                    <input {...methods.register('itemNameSl')} type="text" className="form-control" id="name"  placeholder="Enter item name" />
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.itemNameSl?.message}</></small>
                </div>

                <div className="form-group mt-2 mb-1">
                    <label >Processing</label>
                    <select defaultValue="default"
                     {...methods.register('processing')} className="form-select" aria-label="Default select example">
                        <option value="default" disabled>select processing</option>
                        <option value="raw">raw</option>
                        <option value="light">lightly processed</option>
                        <option value="processed">processed</option>
                        <option value="home">home cooked</option>
                        </select>
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.itemNameSl?.message}</></small>
                </div>

       <MacroNutrients per="100g" />
            </Col>

            <Col xs={{span: 12}}  lg={{span: 4}} >
            <Vitamins per="100g"/>

            </Col>

            <Col xs={{span: 12}}  lg={{span: 4}} >
            <h5 className="mt-4 mb-3">Tags</h5>

            <ElementBadges badges={itemTags}/>

            <Button 
                   onClick={()=>{
                  
                    setTagIt(true)
                }}
                variant="warning">Change Tags</Button>

            <Minerals per="100g" />
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </Col>
        </Row>
        </form>
        </FormProvider>


        <Modal  show={tagIt} onHide={() => setTagIt(false)}>
        <Modal.Header closeButton>
       <ElementTags itemTags={itemTags} setItemTags={setItemTags}  />
        </Modal.Header>
        <Modal.Body>
        <AllTagsList itemTags={itemTags} setItemTags={setItemTags} handleTagClick={handleTagClick}/>
         
        
          
          </Modal.Body>

      </Modal>
        </>
    )
}