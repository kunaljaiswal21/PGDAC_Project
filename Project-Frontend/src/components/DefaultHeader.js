import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
//import logo from '../assets/img/brand/wiselapComplete.png'
//import sygnet from '../assets/img/brand/wiselap.png'
import '../css/wiseDaily.css'
import { Col } from 'reactstrap';
import profile from '../assets/img/logo/profileLogo.jpg'
import bellLogo from '../assets/img/logo/bellLogo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
    super(props)
    const authData = {
    };
    
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    
    return (
      <React.Fragment>
         <Col style={{background:"white", paddingLeft:'200px'}}>
            <Col className="wiseDailyHeader"><Link to="/EditProfile" style={{color:"white"}} data-toggle="tooltip" data-placement="top" title = "Click to edit shop details" >{this.props.shop.shopName}</Link></Col>
            {/* <Col>
                <AppNavbarBrand style={{float:"right"}} full={{ src: profile, width: 25, height: 30, alt: 'Profile' }}/>
                <AppNavbarBrand full={{ src: bellLogo, width: 25, height: 30, alt: 'Notification' }}/>
            </Col> */}
         </Col>  
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
