import React from 'react';
import { Row as Rows } from 'carbon-components-react';
export const Row = (props) => {
    return(
        <Rows>{props.children}</Rows>
    )
}
Row.propTypes = {
}
Row.defaultProps = {
}
export default Row;