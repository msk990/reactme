import { ReactChild, ReactFragment, ReactPortal } from "react"

interface PageHeader{ 
    name: string
}

export const PageHeader = (props: PageHeader) => {
return (
    <div className="border-bottom mt-4 mb-3">
    <h4 className="mt-3 mb-3">{props.name}</h4>
  </div>
)
}