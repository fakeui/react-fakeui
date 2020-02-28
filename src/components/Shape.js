import React from 'react';
import { string, oneOf } from 'prop-types';
import { css, keyframes } from '../tools/styles';

const Shape = ({ align, color, width, height, margin, radius, animation }) => {
    const cssMap = {
        auto: 'auto',
        left: 'flex-start',
        right: 'flex-end',
        center: 'center',
    };

    const fadeAnimation = keyframes`
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    `;

    const className = css`
        width: ${width};
        height: ${height};
        margin: ${margin};
        animation: ${fadeAnimation} linear 1500ms infinite;
        align-self: ${cssMap[align]};
        flex-shrink: 0;
        border-radius: ${radius};
        background-color: ${color};
    `;

    return <div className={className} />;
};

Shape.propTypes = {
    align: string,
    color: string,
    width: string,
    height: string.isRequired,
    margin: string,
    radius: string,
    animation: oneOf(['fade']),
};

Shape.defaultProps = {
    align: 'auto',
    color: 'rgba(0,0,0,0.05)',
    width: 'auto',
    margin: '0',
    radius: '0',
    animation: 'fade',
};

export default Shape;
