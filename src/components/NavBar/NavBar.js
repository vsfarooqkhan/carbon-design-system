import { SideNav,Icon, SideNavItems, SideNavMenuItem, SideNavMenu,SideNavLink } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Fade16,Home32, Bullhorn32, SettingsAdjust32,Calendar32 } from '@carbon/icons-react';
import './NavBar.css';
import {NavMenu} from './NavMenu';
export const NavBar = ({ className , btnType,onClick, width, height, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <SideNav
      className = {className}
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation">
        <SideNavItems>
            {/* <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            </SideNavMenu>
            <NavMenu/> */}
            <SideNavLink href="javascript:void(0)" className = "navLink">
              <Home32  className="icon-class" />
              <br/> 
              <label style = {{textAlign:'center', fontSize: '10px'}}> Home</label>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)" className = "navLink">
            <Bullhorn32  className="icon-class" />
              <br/> 
              <label style = {{textAlign:'center', fontSize: '10px'}}> Campaigns</label>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)" className = "navLink">
              <SettingsAdjust32 className="icon-class" />
              <br/> 
              <label style = {{textAlign:'center', fontSize: '10px'}}> 
              Segmentation</label>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)" className = "navLink">
              <Calendar32 className="icon-class" />
              <br/> 
              <label style = {{textAlign:'center', fontSize: '10px'}}> Orchestration</label>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)" className = "navLink">
              <Calendar32 className="icon-class" />
              <br/> 
              <label style = {{textAlign:'center', fontSize: '10px'}}> Communication</label>
            </SideNavLink>
        </SideNavItems>
        </SideNav>
    </>
  );
};

NavBar.propTypes = {
  backgroundColor: propTypes.string,
  className : propTypes.string,
};

NavBar.defaultProps = {
  backgroundColor: '#75BF42',
  className : 'navBar'
};
export default NavBar;
