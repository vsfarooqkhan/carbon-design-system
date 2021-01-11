import  {SideNavMenu, SideNavMenuItem} from 'carbon-components-react';
import {propTypes} from 'prop-types';
import {SubMenu} from './SubMenu';
import { Fade16 } from '@carbon/icons-react';
export const NavMenu = ({ label,icon, ...props }) => {
    return(
        <>
            <SideNavMenuItem renderIcon={Fade16} title={label}>
                
            </SideNavMenuItem>
            
        </>

    )
}
SubMenu.propTypes = {
    label: propTypes.string.isRequired,
    icon : propTypes.string,
    onClick: propTypes.func,
  };
  
SubMenu.defaultProps = {
  label : 'Register',
  icon : null,
  onClick: undefined,
};
export default NavMenu;