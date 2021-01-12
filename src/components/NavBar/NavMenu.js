import { Row, Column as Col, SideNav,Icon, SideNavItems, SideNavMenuItem, SideNavMenu,SideNavLink } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Fade16,Home32, Bullhorn32, SettingsAdjust32,Calendar32 } from '@carbon/icons-react';
import './NavBar.css';
import {NavBar} from './NavBar';

export const NavMenu = ({ label,icon, ...props }) => {
    return(
        <>
        <Row>
          <Col lg ={1}>
          <NavBar/>
          </Col>
          <Col lg = {3}>
            <Row>
              <NavBar className = "sideNavBar" />
            </Row>
          </Col>
          <Col lg= {5}>
          Additional content that will display after the sidebar and the side nav bar . 
          </Col>
        </Row>
        </>

    )
}
NavMenu.propTypes = {
    label: propTypes.string,
    icon : propTypes.string,
    onClick: propTypes.func,
  };
  
NavMenu.defaultProps = {
  label : 'Register',
  icon : null,
  onClick: undefined,
};
export default NavMenu;