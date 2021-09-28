import {
    Box,
    Button,
    Spacer,
    Flex,
    Image,
    Text,
    useMediaQuery,
    IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import '../style/header.css';

function Header() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:1024px)');

    return (
        <Flex
            direction='column'
            className='header'
            height={isNotSmallerScreen ? '100vh' : 'none'}
            width={isNotSmallerScreen ? '1024px' : 'none'}
            // justifyContent='space-evenly'
            padding={isNotSmallerScreen ? 10 : 10}
            margin='auto'
        >
            <Flex className='profile-buttons' height='10vh'>
                <Spacer></Spacer>
                <Button
                    ml={4}
                    variant='solid'
                    colorScheme='gray'
                    as='a'
                    aria-label='Github'
                    target='_blank'
                    href='https://drive.google.com/file/d/1_nUJqvsdYOOH9k7gc-u0hdl3PBMpCrYV/view?usp=sharing'
                    rightIcon={<FaFileDownload />}
                >
                    Resume
                </Button>
                <IconButton
                    ml={8}
                    as='a'
                    aria-label='Github'
                    target='_blank'
                    href='https://github.com/saqibmobin'
                    icon={<FaGithub />}
                    isRound='true'
                ></IconButton>
                <IconButton
                    ml={2}
                    // mr={5}
                    as='a'
                    aria-label='LinkedIn'
                    target='_blank'
                    href='https://www.linkedin.com/in/saqib96mobin/'
                    icon={<FaLinkedin />}
                    isRound='true'
                ></IconButton>
            </Flex>
            <Flex
                direction={isNotSmallerScreen ? 'row' : 'column'}
                alignItems='center'
                justifyContent='center'
                height='50vh'
                mt={5}
            >
                <Box>
                    <Text
                        fontSize={isNotSmallerScreen ? '5xl' : '2xl'}
                        fontWeight='semibold'
                    >
                        Hi, I am
                    </Text>
                    <Text
                        fontSize={isNotSmallerScreen ? '7xl' : '3xl'}
                        fontWeight='bold'
                        bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
                        bgClip='text'
                    >
                        Shaikh Saqib Mobin
                    </Text>
                    <Text color={'gray.500'}>
                        Deep Learning Engineer, working on developing HD Maps
                        for India at MapMyIndia.
                    </Text>
                </Box>
                <Box>
                    <Image
                        alignSelf='center'
                        mt={isNotSmallerScreen ? '0' : '10'}
                        mb={isNotSmallerScreen ? '0' : '0'}
                        ml={isNotSmallerScreen ? '12' : '0'}
                        borderRadius='full'
                        // backgroundColor='transparent'
                        boxShadow='lg'
                        boxSize={isNotSmallerScreen ? '300px' : '200px'}
                        src='https://github.com/saqibmobin.png'
                    />
                </Box>
            </Flex>
            <Flex mb='50px' height='20vh'>
                <div class='mouse_scroll'>
                    <div class='mouse'>
                        <div class='wheel'></div>
                    </div>
                    <div>
                        <span class='m_scroll_arrows unu'></span>
                        <span class='m_scroll_arrows doi'></span>
                        <span class='m_scroll_arrows trei'></span>
                    </div>
                </div>
            </Flex>
        </Flex>
    );
}

export default Header;
