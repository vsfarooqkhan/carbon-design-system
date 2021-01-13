import  {SideNavLink} from 'carbon-components-react';
import propTypes from 'prop-types';
export const SubMenu = ( props ) => {
    return(
        <>
            <SideNavLink href={props.link} className = {props.className}>{props.children}</SideNavLink>
        </>

    )
}
SubMenu.propTypes = {
    link : propTypes.string,
    onClick: propTypes.func,
  };
  
SubMenu.defaultProps = {
  link : '#', 
  onClick: undefined,
};
  
export default SubMenu;