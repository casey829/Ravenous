import React from "react";
import './Business.css';


const Business1 = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

class Business extends React.Component{
    render() {
    return  <div className={this.Business}>
    <div className="image-container">
      <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    </div>
    <h2>MarginOtto Pizzeria</h2>
    <div className={this.Business-information}>
      <div className={this.Business-address}>
        <p>1010 Paddington Way</p>
        <p>Bordertown</p>
        <p>NY 10101</p>
      </div>
      <div className={Business.thisBusiness-reviews}>
        <h3>ITALIAN</h3>
        <h3 className="rating">4.5 stars</h3>
        <p>90 reviews</p>
      </div>
    </div>
  </div>
    }
}


export default Business;