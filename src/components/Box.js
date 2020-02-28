import React from 'react';
import { string, oneOfType, arrayOf, node } from 'prop-types';
import { css } from '../tools/styles';

const Box = ({
    color,
    width,
    height,
    radius,
    margin,
    padding,
    children,
    direction,
}) => {
    const className = css`
        flex: 1;
        width: ${width};
        height: ${height};
        margin: ${margin};
        padding: ${padding};
        display: flex;
        box-sizing: border-box;
        border-radius: ${radius};
        flex-direction: ${direction};
        justify-content: center;
        background-color: ${color};
    `;

    return <div className={className}>{children}</div>;
};

Box.propTypes = {
    color: string,
    width: string,
    height: string,
    radius: string,
    margin: string,
    padding: string,
    children: oneOfType([arrayOf(node), node]).isRequired,
    direction: string,
};

Box.defaultProps = {
    color: 'transparent',
    width: 'auto',
    height: 'auto',
    radius: '0',
    margin: '0',
    padding: '0',
    direction: 'row',
};

export default Box;
