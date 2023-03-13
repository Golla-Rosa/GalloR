import React from 'react'

type TextProps = {
    type: "title" | "paragraph" | "heading_1",
    children: any,
}
const findTerm = (type, searchString) => {
    if (type.includes(searchString)) {
       return type;
    }
}
function Text({ children, type }: TextProps) {
    const getType = () => {
        switch (type) {
            case "paragraph":
                return <p style={{ fontSize: "0.7rem" }}>{children}</p>;
            case findTerm(type, 'heading'):
                return <h5 style={{ margin: "0px", textAlign: "left", fontSize: "0.9rem", fontStyle: "italic" }}>{children}</h5>

            case "title":
                return <h3 style={{ margin: "0px", textAlign: "left", fontSize: "1.5rem", fontStyle: "italic" }}>{children}</h3>
        }

    }
    return (
        getType()
    )
}

export default Text