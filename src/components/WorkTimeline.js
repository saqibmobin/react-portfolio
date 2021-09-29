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
        titleColor: 'rgb(76 20 90)',
        subtitleColor: 'rgb(88 70 97)',
        textColor: 'rgb(26 30 35)',
    };

    return (
        <Timeline theme={customTheme} dateFormat='ll'>
            <Container>
                <YearContent startDate='2019/08/19' currentYear />
                <BodyContent>
                    <Section title='MapMyIndia'>
                        <Description
                            variant='subtitle'
                            text='Advanced Maps Engineering'
                        />
                        <Description
                            variant='subtitle'
                            text='Working on developing HD Map for Indian context by leveraging deep learning for computer vision.'
                        />
                        <Description text=' ‣ Developed workflow for object detection and segmentation of road assets like traffic light, signage, etc. to extract map components for HD Map from terrestrial imagery.' />
                        <Description text=' ‣ Developed workflow for road network segmentation and building footprint detection/segmentation from satellite imagery.' />
                        <Description text=' ‣ Developed end-to-end  Image Seggregator based on multilabel image classification for filtering survey images having POI for further annotation, reducing the processing time exponentially.' />
                        <Description text=' ‣ Developed OCR workflow for text detection and recognition in natural scenes.' />
                        <Description text=' ‣ Designed and implemented a multi model deployment backend, increasing production throughput by ~40%.' />
                        <Description text=' ‣ Maintained and extended internal end-to-end workflow for training deep learning models and deploying in production.' />
                        <Description text=' ‣ Continuous exploration of deep learning research papers and extending publicly available code repos for executing POC to find feasible solutions for complex problems.' />
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
