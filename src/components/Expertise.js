import React from 'react';
import {
    useMediaQuery,
    Image,
    Box,
    Flex,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react';
import fastapi_svg from '../static/fastapi-1.svg';
import bash_svg from '../static/gnu_bash-official.svg';
import gunicorn_svg from '../static/gunicorn-ar21.svg';
import linux_svg from '../static/linux-ar21.svg';
import mongodb_svg from '../static/mongodb-ar21.svg';
import flask_svg from '../static/pocoo_flask-ar21.svg';
import python_svg from '../static/python-logo-inkscape.svg';
import pytorch_svg from '../static/pytorch-ar21.svg';
import react_svg from '../static/reactjs-ar21.svg';
import tf_svg from '../static/tensorflow-ar21.svg';
import nginx_svg from '../static/nginx-ar21.svg';
import opencv_svg from '../static/opencv-ar21.svg';
import javascript_svg from '../static/javascript-vertical.svg';

import '../style/expertise.css';

function Expertise() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:1024px)');
    const width_per = '100%';
    const width_fs = '100px';

    return (
        <Flex
            height={isNotSmallerScreen ? '100vh' : 'none'}
            className='flex-experience'
            direction='column'
        >
            <Box
                width={isNotSmallerScreen ? '1024px' : 'none'}
                align='flex-start'
                className='gradient-underline'
                mt={isNotSmallerScreen ? 'none' : 10}
            >
                <Heading color='#312e92'>Expertise</Heading>
            </Box>
            <Box
                className='ui-card'
                borderWidth='2px'
                width={isNotSmallerScreen ? '1024px' : '300px'}
                mt={isNotSmallerScreen ? 'none' : 10}
                mb={isNotSmallerScreen ? 'none' : 10}
            >
                <SimpleGrid
                    // minChildWidth='200px'
                    columns={[2, null, 4]}
                    spacing='40px'
                    padding={10}
                >
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={python_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={pytorch_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={tf_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={opencv_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={mongodb_svg}
                        />
                    </Box>
                    {/* <Box>
                        <Image src={fastapi_svg} />
                    </Box> */}
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={gunicorn_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={flask_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={nginx_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={linux_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={bash_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            width={isNotSmallerScreen ? width_per : 'none'}
                            src={react_svg}
                        />
                    </Box>
                    <Box>
                        <Image
                            boxSize={isNotSmallerScreen ? width_fs : 'none'}
                            // width={isNotSmallerScreen ? width_per : 'none'}
                            src={javascript_svg}
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </Flex>
    );
}

export default Expertise;
