import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex } from '@chakra-ui/layout';
import '../style/header.css';

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <div class='container'>
            <div class='chevron'></div>
            <div class='chevron'></div>
            <div class='chevron'></div>
            <span class='text'>Scroll down</span>
            <a class='text' href='https://naegele.it'>
                See it in action
            </a>
        </div>
    );
}

export default Profile;
