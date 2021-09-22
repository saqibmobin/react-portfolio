import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Footer from './components/Footer.js';
import './style/app.css';

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <div>
            <container>
                <Header />
                <Experience />
                <Education />
                <Expertise />
                <Footer />
            </container>
        </div>
    );
}

export default App;
