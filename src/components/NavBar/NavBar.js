import { SideNav,Icon, SideNavItems, SideNavMenuItem, SideNavMenu,SideNavLink } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Fade16 } from '@carbon/icons-react';
import './NavBar.css';
import {NavMenu} from './NavMenu';
export const NavBar = ({ btnType,onClick, width, height, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <SideNav
      className = "navBar"
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
            <SideNavLink href="javascript:void(0)">
            <Fade16  className="icon-class" />
            <br/> <p style = {{textAlign:'center'}}> Link 1</p>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
            <Fade16  className="icon-class" />
            <br/> <p style = {{textAlign:'center'}}> Link 2</p>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
            <Fade16  className="icon-class" />
            <br/> <p style = {{textAlign:'center'}}> Link 3</p>
            </SideNavLink>
        </SideNavItems>
        </SideNav>
    </>
  );
};

NavBar.propTypes = {
  backgroundColor: propTypes.string,
  
};

NavBar.defaultProps = {
  backgroundColor: '#75BF42',
};
export default NavBar;
