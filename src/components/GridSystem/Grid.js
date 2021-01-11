import React from 'react';
import propTypes from 'prop-types';
import { Grid as Grids } from 'carbon-components-react';
export const Grid = (props) => {
    console.log(props.condensed);
    return(
        <Grids fullWidth = {props.fullWidth} condensed = {props.condensed} narrow = {props.narrow}>{props.children}</Grids>
    )
}
Grid.propTypes = {
    type : propTypes.string,
}
Grid.defaultProps = {
    type : null,
}
export default Grid;