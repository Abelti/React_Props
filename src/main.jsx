import React from 'react'
import ReactDOM from 'react-dom/client'

function Cars (props) {
  return <h1>This is a {props.brand} {props.year} car!</h1>;// This is a Pagani 2023 Car
  <h1> this {}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cars brand="Toyota" year="2023"/>);


//data passing methods
//variable, from other components, object
function Car(props) {
  return <h2>I am a { props.brand } {props.plate}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang", plate: "C08651" };//object
  const carName = "Toyota";//variable
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo.model} plate={carInfo.plate} />
    </>
  );
}

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(<Garage />);