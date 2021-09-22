import React from 'react';
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';

const Timeline_ = () => {
    const customTheme = {
        yearColor: '#405b73',
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: '#631977',
        subtitleColor: '#bf9765',
        textColor: '#e7f0fa',
    };

    return (
        <Timeline theme={customTheme} dateFormat='ll'>
            <Container>
                <YearContent startDate='2019/08/19' currentYear />
                <BodyContent>
                    <Section title='MapMyIndia'>
                        <Description variant='subtitle' text='HD Maps R&D' />
                        <Description
                            variant='subtitle'
                            text='Working on developing HD Maps for Indian roads by leveraging deep learning for computer vision.'
                        />
                        <Description text=' ‣ Developed instance segmentation and object detection deep learning models for extracting features from satellite and terrestrial imagery.' />
                        <Description text=' ‣ Maintained and extended internal end-to-end  training to production workflow for developing deep learning models and deploying in production.' />
                        <Description text=' ‣ Designed and implemented a multi model deployment backend, increasing production throughput by ~50%.' />
                        <Description text=' ‣ Continuous exploration of deep learning research papers and extended publicly available code repos for solving problem statements.' />
                    </Section>
                    <Section title=''>
                        <Description variant='subtitle' text='' />
                        <Description text='' />
                    </Section>
                </BodyContent>
            </Container>
        </Timeline>
    );
};

export default Timeline_;
