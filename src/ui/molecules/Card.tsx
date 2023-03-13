import styled, { keyframes } from 'styled-components'
import Text from './Text'
const SCard = styled.div`
    width: 100%;
    height: 75px;
    // background:blue;

`
type CardProps = {
    title: string,
    description?: string,
    image?: any,
    color?: any,
    size?: any,
    animation?: any
}
const fadeIn = keyframes`
  from {
    opacity: 0;
    // height: 0%;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardContainer = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
//   background-color: #fff;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
  padding: 10px;
  height: ${({ size }) => size};
  transition: all 1.1s ease-out;
//   overflow: hidden;
  width: 90%;
  ${({ animation }) => animation ? `
  &:hover {
    background:#E7D5D5;
    transform: scale(1.001);
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
height: 20vh;

  }` : ''}
`;


function Card({ onClick, title, description, children, size, animation, direction }: CardProps) {
    return (
        <CardContainer direction={direction} animation={animation} size={size} onClick={onClick}>
            <Text type='title'>{title}</Text>

            <Text type='paragraph'>{description}</Text>
            {children}
        </CardContainer>
    )
}

export default Card