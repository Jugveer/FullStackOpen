import React from 'react';

const Footer = () => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return(
        <p>Number of exercises {exercises1 + exercises2 + exercises3} </p>
    )
}
export default Footer;