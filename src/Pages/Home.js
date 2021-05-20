import React from 'react';
import { NavigationBar } from '../Components/Home_Components/NavigationBar';
import { HeroCarousel } from '../Components/Home_Components/HeroCarousel'
import { Layout } from '../Components/Home_Components/Layout';
import { Cards } from '../Components/Home_Components/Cards';
import { Cards2 } from '../Components/Home_Components/Cards2';
import { Cards3 } from '../Components/Home_Components/Cards3';
import { FirstSection } from '../Components/Home_Components/FirstSection';
import { SecondSection } from '../Components/Home_Components/SecondSection';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';

export const Home = () => {
    return (
        <React.Fragment>
            <Layout>
                <NavigationBar />
            </Layout>
            <HeroCarousel />
            <Layout>
                <Cards>
                </Cards>
                <Cards2>
                </Cards2>
                <Cards3>
                </Cards3>
            </Layout>
            <FirstSection>
            </FirstSection>
            <SecondSection>
            </SecondSection>
            <FooterSection>
                <Layout>
                    <FooterContent>
                    </FooterContent>
                </Layout>
            </FooterSection>
        </React.Fragment>
    );
}

export default Home;