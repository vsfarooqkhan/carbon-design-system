import { Button } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Email32 } from '@carbon/icons-react';
import '../styles/Button.css';
/**
 * Button component for user interaction
 * This is Doc
 */
export const PrimaryBtn = ({ btnType,onClick, width, height, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <button type = "button" onClick = {onClick} style={{backgroundColor : `${backgroundColor}`, width : `${width}`, height : `${height}` }}
        className='catoBtn catoBtnPrimary'value = {label}>
          <Email32 aria-label="Add" className="my-custom-class" /><br/>
          <label>{label}</label>
        </button>
      </>
  );
};

PrimaryBtn.propTypes = {
  backgroundColor: propTypes.string,
  btnType : 'secondary',
  size: propTypes.oneOf(['small', 'medium', 'large']),
  label: propTypes.string.isRequired,
  icon : propTypes.string,
  onClick: propTypes.func,
};

PrimaryBtn.defaultProps = {
  backgroundColor: '#75BF42',
  primary: false,
  size: 'medium',
  label : 'Register',
  icon : null,
  width : '150px',
  height : '110px',
  onClick: undefined,
};
export default PrimaryBtn;
