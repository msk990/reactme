import { Card } from "react-bootstrap"

export const DailyMenuCard = (props:any) => {

    const dets = props.dets
    return (
        <>
           <Card className="mb-2 mt-4" style={{'height':'100%'}}>
           <Card.Header>{dets.meal}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>{dets.meal}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                    <ul>
                       {dets.menu.map((item:string, index:any) => 
                       <li key={index}>{item}</li>)}
                    </ul>
                    </Card.Text>
                 
                </Card.Body>
            </Card>
        </>
    )
}