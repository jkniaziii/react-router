import axios from 'axios';
import React, { Fragment } from 'react'

const ApiComponent = () => {

  const getData = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        a: 10,
        b: 20,
      }),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }


    const getAxiosData = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'

        axios
            .post(url)
            .then(({ data }) => {
                console.log(data);
            });
    }

  return (
    <Fragment>
    <div>ApiComponent</div>
    <button onClick={getData}>GET DATA FETCH</button>
    <button onClick={getAxiosData}>GET DATA AXIOS</button>
    </Fragment>
  )
}

export default ApiComponent;