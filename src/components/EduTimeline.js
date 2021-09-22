import React from 'react';
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';

const EduTimeline = () => {
    const customTheme = {
        yearColor: '#405b73',
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: '#631977',
        subtitleColor: '#bf9765',
        textColor: '#262626',
    };

    return (
        <Timeline theme={customTheme} dateFormat='ll'>
            <Container>
                <YearContent startDate='2015' endDate='2019' />
                <BodyContent>
                    <Section title='Kalinga Institute of Industrial Technology, Bhubaneshwar'>
                        <Description
                            variant='subtitle'
                            text='B.Tech in Information Technology'
                        />
                        <Description text='.' />
                        <Description text='.' />
                    </Section>
                </BodyContent>
            </Container>
            <Container>
                <YearContent startDate='2012' endDate='2014' />
                <BodyContent>
                    <Section title='ODM Public School, Bhubaneshwar'>
                        <Description
                            variant='subtitle'
                            text='Higher Secondary Education'
                        />
                        <Description text='.' />
                        <Description text='.' />
                    </Section>
                </BodyContent>
            </Container>
            <Container>
                <YearContent startDate='2000' endDate='2012' />
                <BodyContent>
                    <Section title='DPS Vidyapeet, Bhadrak'>
                        <Description
                            variant='subtitle'
                            text='Senior Secondary Education'
                        />
                    </Section>
                </BodyContent>
            </Container>
        </Timeline>
    );
};

export default EduTimeline;
