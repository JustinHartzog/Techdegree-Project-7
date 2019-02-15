import React from 'react';
import Search from './Search'
import {withRouter} from 'react-router-dom';

const Header = (props) => {
  return (
         <header>
         <h2>Search And Be Amazed!</h2>
         <Search onSearch={props.onSearch} history={props.history}/> 
         </header>
     )
 };

export default withRouter(Header);
