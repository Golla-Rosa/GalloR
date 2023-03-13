import React from 'react'
import styled from 'styled-components'
const SContainer = styled.div`
    display:${({ display }) => display};
    flex-direction: ${({ direction }) => direction};
    gap: 1rem;
    flex-grow:${({ grow }) => grow};
    overflow: scroll;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: center;
    height: ${({ size }) => size};
    width: 100%;
`
function Container({ justifyContent, children, direction, size, grow, display }: any) {
    return (
        <SContainer justifyContent={justifyContent} display={display} grow={grow} size={size} direction={direction}>{children}</SContainer>
    )
}

export default Container