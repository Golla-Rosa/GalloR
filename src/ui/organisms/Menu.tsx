import React, { useEffect, useState } from 'react'
import Container from '../molecules/Container';
type MenuHeader = {
    name: string;
    action: any;
}
type MenuProps = {
    headers: MenuHeader[]
}
function Menu({ headers }: MenuProps) {
    const [stateHeaders, setStateHeaders] = useState(headers)

    useEffect(() => {
        setStateHeaders(headers)
    }, [headers])
    return (
        <Container display="flex" size={"5vh"} direction="row" >{stateHeaders.map(header => {
            return <div style={{ width: "10em", height: "23px", borderRadius: "30%",  display: "flex", justifyContent: "center" }}>{header.name}</div>
        })}</Container>
    )
}

export default Menu