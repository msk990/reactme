import { Col, Container, Row } from "react-bootstrap"
import { PageHeader } from "../../common/PageHeader"
import { ChildrenNumber } from "./children-number/ChildrenNumber"
import { DailyMenu } from "./daily-menu/DailyMenu"
import { DashboardDeliveries } from "./dashboard-deliveries/DashboardDeliveries"

export const Dashboard = () => {
    return (
        <>
     
        <Container className="mt-2">
        

        <Row>
            <Col xs={{span: 12}}  lg={{span: 6}} >
                <ChildrenNumber />
                <DailyMenu />
            </Col>

            <Col xs={{span: 12}}  lg={{span: 1}} >

</Col>
            <Col xs={{span: 12}}  lg={{span: 5}} >
                <DashboardDeliveries />
            </Col>
        </Row>
        
        </Container>
        </>
    )
}