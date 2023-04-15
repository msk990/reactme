import { Row, Col, Card } from "react-bootstrap"
import { DailyMenuCard } from "../daily-menu-card/DailyMenuCard"

const dailyMenu = [
    {
        meal: "ZAJTRK",
        menu: ["Šipkov čaj", "graham kruh", "kuhan pršut (S)", "kislo zelje"]
    },
    {
        meal: "DOPOLDANSKA MALICA",
        menu: ["Sadna košarica"]
    },
    {
        meal: "KOSILO",
        menu: ["Brokolijeva juha", "puranja rižota", "zelena solata s koruzo", "voda"]
    },
    {
        meal: "POPOLDANSKA MALICA",
        menu: ["Navadni jogurt*", "hruška"]
    },
]

export const DailyMenu = () => {
    return (
        <>
        <Row>
            {
                dailyMenu.map((item, index) => 
                    <Col xs={{span: 12}}  lg={{span: 6}} key={index} className="mb-3" >
                        <DailyMenuCard dets={item}/>
            </Col>
                )
            }
    
            
        </Row>
        </>
    )
}