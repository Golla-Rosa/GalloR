import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo, { getRandomInt } from '../molecules/Logo'
const SNavbar = styled.div`
    height: 15vh;
    display: flex;
    justify-content:center;

`
function Navbar({ openedPost }) {
    const [logoColor, setLogoColor] = useState([getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255), 0.08]);
    const [sizeDivider, setSizeDiver] = useState(getRandomInt(0.9, 5.5))
    const [initialSize, setInitialSize] = useState(getRandomInt(1, 60))
    const [speed, setSpeed] = useState(getRandomInt(0.015, 0.59))
    const [distance, setDistance] = useState(getRandomInt(0.15, 5.99))
    const [circleNumber, setCircleNumber] = useState(getRandomInt(2, 30))
    useEffect(() => {
        setLogoColor([getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255), 0.08])
        setSizeDiver(getRandomInt(0.95, 3.5))
        setInitialSize(getRandomInt(1, 30))
        setDistance(getRandomInt(0.015, 1))
        setSpeed(getRandomInt(0.015, 0.59))
        setCircleNumber(getRandomInt(2, 30))
    }, [openedPost])
    return (
        <SNavbar >
            <Logo circleNumber={circleNumber} color={logoColor} sizeDivider={sizeDivider} initialSize={initialSize} speed={speed} distance={distance} />
            <div>
                <h1>Golla</h1>

            </div>
        </SNavbar>
    )
}

export default Navbar