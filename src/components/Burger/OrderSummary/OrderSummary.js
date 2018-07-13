import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import Checkout from '../../../containers/Checkout/Checkout';

class OrderSumarry extends Component {
  // Can be a functional component

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).
      map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransformes: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      });
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout</p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceld}>CANCEL</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinuied}>CONTINUE</Button>
    </React.Fragment>
    );
  }
};

export default OrderSumarry;
