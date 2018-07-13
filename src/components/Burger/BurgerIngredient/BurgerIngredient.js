import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
      let ingrideint = null;

      switch (this.props.type) {
        case ('bread-bottom'):
            ingrideint = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
          ingrideint = (
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1}></div>
              <div className={classes.Seeds2}></div>
            </div>
          );
          break;
        case ('meat'):
          ingrideint = <div className={classes.Meat}></div>;
          break;
        case ('cheese'):
          ingrideint = <div className={classes.Cheese}></div>;
          break;
        case ('salad'):
          ingrideint = <div className={classes.Salad}></div>;
          break;
        case ('bacon'):
          ingrideint = <div className={classes.Bacon}></div>;
          break;
        default:
          ingrideint = null;
      }

      return ingrideint;
    };
}

BurgerIngredient.prototypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
