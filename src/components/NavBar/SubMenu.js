import  {SideNavMenuItem} from 'carbon-components-react';
import propTypes from 'prop-types';
export const SubMenu = ({ link,label,icon, ...props }) => {
    return(
        <>
            <SideNavMenuItem href={link}>{label}</SideNavMenuItem>
        </>

    )
}
SubMenu.propTypes = {
    link : propTypes.string,
    label: propTypes.string.isRequired,
    icon : propTypes.string,
    onClick: propTypes.func,
  };
  
SubMenu.defaultProps = {
  link : '#', 
  label : 'Register',
  icon : null,
  onClick: undefined,
};
  
export default SubMenu;