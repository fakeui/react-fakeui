import React from 'react';

import Box from './components/Box';
import Shape from './components/Shape';

const Message = () => {
    return (
        <Box width="200px">
            <Shape
                width="42px"
                height="42px"
                radius="50%"
                margin="0 10px 0 0"
            />
            <Box direction="column">
                <Shape width="60%" height="10px" margin="0 0 5px 0" />
                <Shape width="100%" height="10px" />
            </Box>
        </Box>
    );
};

const Video = () => {
    return (
        <Box width="200px" margin="10px 0 0 0" direction="column">
            <Shape width="100%" height="120px" />
            <Shape width="100%" height="12px" margin="5px 0 0 0" />
            <Shape width="60%" height="12px" margin="5px 0 0 0" />
        </Box>
    );
};

const Post = () => {
    return (
        <Box
            width="350px"
            color="rgba(0,0,0,0.05)"
            radius="4px"
            margin="20px 0 0 0"
            padding="15px"
            direction="column"
        >
            <Box margin="0 0 15px 0">
                <Shape
                    width="42px"
                    height="42px"
                    radius="50%"
                    margin="0 10px 0 0"
                />
                <Box direction="column">
                    <Shape width="80%" height="8px" margin="0 0 8px 0" />
                    <Shape width="40%" height="8px" />
                </Box>
            </Box>
            <Shape height="190px" margin="0 -15px" />
            <Shape height="8px" margin="20px 0 8px 0" />
            <Shape width="80%" height="8px" align="center" />
        </Box>
    );
};

export default function App() {
    return (
        <>
            <Message />
            <Video />
            <Post />
        </>
    );
}
