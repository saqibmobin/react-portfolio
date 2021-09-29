import { useMediaQuery, Image, Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Timeline_ from './WorkTimeline.js';
import svg_img from '../static/undraw_programming_2svr.svg';
import '../style/experience.css';

function Experience() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:1024px)');

    return (
        <Flex
            direction='column'
            // bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            // bgGradient='linear(to-r, #c2e59c, #64b3f4)'
            // alignItems='center'
            height={isNotSmallerScreen ? '100vh' : 'none'}
            className='flex-experience'
            // justifyContent='space-evenly'
            padding={isNotSmallerScreen ? 0 : 5}
        >
            <Box
                width={isNotSmallerScreen ? '1024px' : 'none'}
                align='flex-start'
                className='gradient-underline'
                mt={isNotSmallerScreen ? 'none' : 10}
            >
                <Heading color='#312e92'>Work Experience</Heading>
            </Box>
            <Flex
                direction={isNotSmallerScreen ? 'row' : 'column'}
                justifyContent='center'
                alignItems='center'
                mb={isNotSmallerScreen ? '10px' : '0px'}
                p={5}
                mt={isNotSmallerScreen ? 'none' : 10}
            >
                <Box align='center'>
                    <Image
                        boxSize={isNotSmallerScreen ? '500px' : '300px'}
                        src={svg_img}
                    />
                </Box>
                <Box width={isNotSmallerScreen ? '512px' : 'none'}>
                    <Timeline_ />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Experience;
