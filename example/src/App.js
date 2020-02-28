import React from 'react';

import { Box, Shape } from '@fakeui/react';

const App = () => {
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

export default App;
