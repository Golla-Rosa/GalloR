import React from 'react'
import Card from '../molecules/Card'
import { TPost } from './Posts'

type PostType = {
    disposition: "full" | "half",
    onClick: () => {}
} & TPost
function ListPost({ onClick, disposition, title, description }: PostType) {
    return (
        <Card size={"20vh"} animation={true} onClick={onClick} title={title} description={description}></Card>
    )
}

export default ListPost