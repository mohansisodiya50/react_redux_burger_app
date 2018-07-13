import React from 'react';

import classes from './SideDrawer.css';

import Backdrop from '../../UI/Backdrop/Backdrop';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.close];
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
