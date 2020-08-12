import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
    
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  var array = (course);
  
    return (
      <div>

        {/* <Header />
        <Content />
        <Footer /> */}

        <Header course={course[0]} />
        <Content parts={course[1]} />
        <Footer parts={course[2]} />

      </div>
    )
  }

  export default App;