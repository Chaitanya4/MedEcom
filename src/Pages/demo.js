//api integration in react js

import React from 'react'


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        brand: []
      };

      this.getBrands = this.getBrands.bind(this);
    }

  
    componentDidMount() {
        this.getBrands();
      
   
    }
    getBrands() {
        fetch("http://192.168.1.205:5052/api/brand")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              brand: result.Brand
            // brand:result
            });
           
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          
        )
    }
  
    render() {
        console.log(this.state.brand);
   
      const { error, isLoaded, brand } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <ul>
            {brand.map((brands) => (
            <li key={brands.id}>
            <h1>{brands.brandname}</h1>
            <p>{brands.branddescription}</p> 
            </li>
            ))}
            </ul>
            
        );
      }
    }
  }

//http://192.168.1.205:5052/api/brand

export default MyComponent;