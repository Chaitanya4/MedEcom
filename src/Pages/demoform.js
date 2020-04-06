
import React from 'react'

class MyForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      let postData ={
          brandname :data.get('brandname'),
          branddescription : data.get('branddescription') 
      }
      console.log(postData);
      console.log( data.get('branddescription') );
  if(data.get('brandname')==""||data.get('brandescription')=="")
  {
      alert("data is empty");
  }
  else{
      alert("brandname: "+ data.get('brandname') + ","+  "branddescription: "+ data.get('branddescription'));
      
  }
      fetch('http://192.168.1.205:5052/api/brand', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(postData) ,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="brandname" ></label>
          <input id="brandname" name="brandname" type="text" placeholder="Enter Brandname"/>
  
          <label htmlFor="branddescription" ></label>
          <input id="branddescription" name="branddescription" placeholder="Enter Brand Description" type="text" />
  
          
  
          <button>Send data!</button>
        </form>
      );
    }
  }
  export default MyForm;