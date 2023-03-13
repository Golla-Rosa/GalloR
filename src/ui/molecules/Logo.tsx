import React, { useEffect } from 'react'
import Sketch from 'react-p5/'
import styled from 'styled-components';

const SSketch = styled(Sketch)`
    position: absolute;
    z-index:-1;
    width: 100vw;
    height:100vh;
    justify-content: center;
    display:flex;
`
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function Logo({ color, sizeDivider, initialSize, speed, distance, circleNumber }: { color: any[], sizeDivider: number }) {
    var angle = 0;
    var randomness: number;
    var stokeColor;
    useEffect(() => {

    }, [])
    const setup = (p5, canvasParentRef) => {
        console.log("setting up")
        p5.createCanvas(100, 100).parent(canvasParentRef)
        p5.clear()
        randomness = getRandomInt(1, 2.2)
        angle = randomness * 0.2;
    }

    const draw = p5 => {
        p5.background("#F1F1F1")
        const centerX = p5.width / 2;
        const centerY = p5.height / 2;
        const largeRadius = 20;

        recursiveCircles(centerX + getRandomInt(0.1, 2) + p5.cos(angle) * angle * 0.2, centerY + getRandomInt(0.1, 2) + p5.cos(angle) * angle * 0.2, initialSize * 2, angle + 2, 0, p5)
        angle += 0.002;
        console.log("🚀 ~ file: Logo.tsx:41 ~ draw ~ speed:", speed)

    }

    const recursiveCircles = (centerX, centerY, radius, angle, circleNb, p5) => {
        p5.fill(`rgba(${color})`)
        p5.stroke("#F1F1F1")
        p5.circle(centerX, centerY, radius);


        // Draw the small circle rotated around the large circle
        const x = centerX + getRandomInt(0.01, 2) + p5.cos(angle) * angle * distance;
        const y = centerY + getRandomInt(0.01, 2) + p5.sin(angle) * angle * distance;
        p5.push();
        p5.translate(x, y);
        p5.rotate(angle);
        if (circleNb < circleNumber)
            recursiveCircles(0, 0, radius / sizeDivider, angle + 2, circleNb + 1, p5);
        p5.pop();
    }
    return <SSketch setup={setup} draw={draw} />
}

export default Logo