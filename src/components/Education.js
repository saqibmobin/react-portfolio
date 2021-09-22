import {
    useMediaQuery,
    Image,
    Box,
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react';
import React from 'react';
import svg_img_2 from '../static/undraw_education_f8ru.svg';
import '../style/education.css';

function Education() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:1024px)');

    return (
        <Flex
            direction='column'
            height={isNotSmallerScreen ? '100vh' : 'none'}
            // justifyContent='space-evenly'
            className='flex-education'
        >
            <Box
                width={isNotSmallerScreen ? '1024px' : 'none'}
                className='gradient-underline-ed'
                mt={isNotSmallerScreen ? 'none' : 10}
            >
                <Heading color='#312e92'>Education</Heading>
            </Box>
            <Flex
                direction={isNotSmallerScreen ? 'row' : 'column-reverse'}
                justifyContent='center'
                alignItems='center'
                mb={isNotSmallerScreen ? '250px' : '0px'}
                p={5}
                mt={isNotSmallerScreen ? 'none' : 10}
            >
                <Box width={isNotSmallerScreen ? '512px' : 'none'}>
                    <Box
                        className='ui-card'
                        borderWidth='2px'
                        p={10}
                        // mr={10}
                        mb={5}
                    >
                        <Heading fontSize='md'>
                            Kalinga Institute of Industrial Technology,
                            Bhubaneshwar
                        </Heading>
                        <Text fontSize='sm'>
                            B.Tech in Information Technology | 2015-2019
                        </Text>
                    </Box>
                    <Box
                        className='ui-card'
                        borderWidth='2px'
                        p={10}
                        // mr={10}
                        mb={5}
                    >
                        <Heading fontSize='md'>
                            ODM Public School, Bhubaneshwar
                        </Heading>
                        <Text fontSize='sm'>
                            Higher Secondary Education | 2012-2014
                        </Text>
                    </Box>
                    <Box className='ui-card' borderWidth='2px' p={10}>
                        <Heading fontSize='md'>DPS Vidyapeet, Bhadrak</Heading>
                        <Text fontSize='sm'>
                            Senior Secondary Education | 2000-2012
                        </Text>
                    </Box>
                </Box>
                <Box align='right'>
                    <Image
                        boxSize={isNotSmallerScreen ? '500px' : '300px'}
                        src={svg_img_2}
                    />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Education;
