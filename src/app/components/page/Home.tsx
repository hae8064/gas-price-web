'use client';
import React from 'react';
import { HomeContainer } from './HomeStyle';
import NaverMap from '../NaverMap';
import Header from '../Header';

export default function Home() {
    return (
        <HomeContainer>
            <Header />
            <NaverMap />
        </HomeContainer>
    );
}
