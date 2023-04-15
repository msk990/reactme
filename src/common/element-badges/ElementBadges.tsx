import { Badge } from "react-bootstrap"

export const ElementBadges = (props:any) => {
    const badges = props.badges
    // console.log("badges are")
    // console.log(badges)
    return (
        <>
        <section className="mb-3">
          
        {
            badges.map((badge:any, index:any) => (
                <Badge className="me-2" key={index} bg={badge.color}>
                {badge.tag}
              </Badge>
            ))
        }
        </section>
        </>
    )
}