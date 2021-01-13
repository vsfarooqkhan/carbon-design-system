import { Button } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Email32 } from '@carbon/icons-react';
import '../styles/Button.css';
/**
 * Button component for user interaction
 */
export const CatoBtn = ({ btnType, width, height, backgroundColor, size, label, ...props }) => {
  return (
    <Button
      className='commonBtn' kind = {btnType} width = {width} height = {height}>
        <Email32 aria-label="Add" className="my-custom-class" />
      <label style = {{paddingLeft : '30px'}}>{label}</label>
    </Button>
  );
};

CatoBtn.propTypes = {
  backgroundColor: propTypes.string,
  btnType : 'secondary',
  size: propTypes.oneOf(['small', 'medium', 'large']),
  label: propTypes.string.isRequired,
  icon : propTypes.string,
  height : propTypes.string,
  width : propTypes.string,
  onClick: propTypes.func,
};

CatoBtn.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  label : 'Register',
  icon : null,
  onClick: undefined,
};
export default CatoBtn;
