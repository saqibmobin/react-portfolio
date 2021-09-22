import { Box, Stack, Spacer, StackDivider, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Text } from '@chakra-ui/layout';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <Box
            as='footer'
            role='contentinfo'
            // mx='auto'
            // maxW='7xl'
            py='4'
            px={{
                base: '4',
                md: '8',
            }}
        >
            <Stack
                direction={{
                    base: 'column-reverse',
                    md: 'row',
                }}
                justifyContent='space-between'
                alignItems='center'
            >
                <Flex>
                    <Text
                        alignSelf={{
                            base: 'center',
                            sm: 'start',
                        }}
                        fontSize='sm'
                    >
                        &copy; {new Date().getFullYear()} Shaikh Saqib Mobin.
                        All rights reserved.
                    </Text>
                </Flex>
                <Stack spacing='4' align='center' justify='space-between'>
                    <ButtonGroup variant='ghost' color='gray.600'>
                        <IconButton
                            as='a'
                            target='_blank'
                            href='https://www.linkedin.com/in/saqib96mobin/'
                            aria-label='LinkedIn'
                            icon={<FaLinkedin fontSize='20px' />}
                        />
                        <IconButton
                            as='a'
                            target='_blank'
                            href='https://github.com/saqibmobin'
                            aria-label='GitHub'
                            icon={<FaGithub fontSize='20px' />}
                        />
                        <IconButton
                            as='a'
                            target='_blank'
                            href='https://twitter.com/saqimb'
                            aria-label='Twitter'
                            icon={<FaTwitter fontSize='20px' />}
                        />
                    </ButtonGroup>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Footer;
