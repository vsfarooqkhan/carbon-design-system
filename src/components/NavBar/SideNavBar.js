import { SideNav,Icon, SideNavItems, SideNavMenuItem, SideNavMenu,SideNavLink } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Fade16,Home32, Bullhorn32, SettingsAdjust32,Calendar32 } from '@carbon/icons-react';
import './NavBar.css';
import {SubMenu} from './SubMenu';
export const SideNavBar = ({ className , btnType,onClick, width, height, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <SideNav
      className = {className}
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation">
        <SideNavItems>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <Home32  className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> Home</label>
          </SubMenu>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <Bullhorn32  className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> Campaigns</label>
          </SubMenu>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <SettingsAdjust32 className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> </label>
          </SubMenu>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <Calendar32 className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> Orchestration</label>
          </SubMenu>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <Calendar32 className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> Communication</label>
          </SubMenu>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <Calendar32 className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> Communication</label>
          </SubMenu>
          <SubMenu link = "javascript:void(0)" className = "navLink">
            <Calendar32 className="icon-class" />
            <br/> 
            <label style = {{textAlign:'center', fontSize: '10px'}}> Communication</label>
          </SubMenu>
        </SideNavItems>
        </SideNav>
    </>
  );
};

SideNavBar.propTypes = {
  backgroundColor: propTypes.string,
  className : propTypes.string,
};

SideNavBar.defaultProps = {
  backgroundColor: '#75BF42',
  className : 'SideNavBar'
};
export default SideNavBar;
