import React, { useMemo } from 'react';
import { string, oneOfType, arrayOf, node } from 'prop-types';

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
    const styles = useMemo(() => {
        return {
            container: {
                flex: 1,
                width,
                height,
                margin,
                padding,
                display: 'flex',
                boxSizing: 'border-box',
                borderRadius: `${radius}`,
                flexDirection: `${direction}`,
                justifyContent: 'center',
                backgroundColor: `${color}`,
            },
        };
    }, []);

    return <div style={styles.container}>{children}</div>;
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
