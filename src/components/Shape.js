import React, { useMemo } from 'react';
import { string, oneOf } from 'prop-types';
import keyframes from '../tools/keyframes';

const createKeyframes = animation => {
    if (animation === 'fade') {
        return keyframes('fakeui-fade-animation-keyframes')`
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
    }

    if (animation === 'wave') {
        return keyframes('fakeui-wave-animation-keyframes')`
            0% {
                transform: translateX(-100%);
            }
            100% {
               transform: translateX(100%);
            }
        `;
    }

    return null;
};

const cssMap = {
    auto: 'auto',
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
};

const Shape = ({ align, color, width, height, margin, radius, animation }) => {
    const styles = useMemo(() => {
        const keyframesName = createKeyframes(animation);

        return {
            container: {
                width,
                height,
                margin,
                position: 'relative',
                overflow: 'hidden',
                alignSelf: `${cssMap[align]}`,
                flexShrink: 0,
                borderRadius: `${radius}`,
                backgroundColor: `${color}`,

                ...(animation === 'fade' && {
                    animation: `${keyframesName} linear 1500ms infinite`,
                }),
            },
            wave: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: 'absolute',
                transform: 'translateX(-100%)',
                background:
                    'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 250, 0.5) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 100%)',

                ...(animation === 'wave' && {
                    animation: `${keyframesName} linear 1500ms infinite`,
                }),
            },
        };
    }, [align, color, width, height, margin, radius, animation]);

    return (
        <div style={styles.container}>
            {animation === 'wave' && <div style={styles.wave} />}
        </div>
    );
};

Shape.propTypes = {
    align: string,
    color: string,
    width: string,
    height: string.isRequired,
    margin: string,
    radius: string,
    animation: oneOf(['fade', 'wave']),
};

Shape.defaultProps = {
    align: 'auto',
    color: 'rgba(0, 0, 0, 0.05)',
    width: 'auto',
    margin: '0',
    radius: '0',
    animation: 'wave',
};

export default Shape;
