import React from 'react';
import propTypes from 'prop-types';
import { Column } from 'carbon-components-react';
export const Col = (props) => {
    console.log(typeof(props.md))
    return(
        <Column md = {props.md} sm = {props.sm} lg = {props.lg}>{props.children}</Column>
    )
}
Col.propTypes = {
    md : propTypes.number,
    sm : propTypes.number,
    lg : propTypes.number,
}
Col.defaultProps = {
    md : 6,
    sm : 6,
    lg : 6,
}
export default Col;