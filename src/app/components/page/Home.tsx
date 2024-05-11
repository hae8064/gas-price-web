'use client';
import React, { useEffect, useState } from 'react';
import { HomeContainer } from './HomeStyle';
import { HorizontalStyle } from '@/GlobalStyle';
import axios from 'axios';
import { OilAvgPriceType } from '@/type/type';

export default function Home() {
    const [gasolinePrice, setGasolinePrice] = useState(0);
    const [dieselPrice, setDieselPrice] = useState(0);

    const getAvgPrice = async () => {
        try {
            const avgPriceRes: OilAvgPriceType[] = (await axios.get('http://localhost:5000/oil/avg-price')).data.RESULT
                .OIL;
            avgPriceRes.forEach((oil: OilAvgPriceType) => {
                if (oil.PRODNM === '휘발유') {
                    setGasolinePrice(Math.round(Number(oil.PRICE)));
                } else if (oil.PRODNM === '자동차용경유') {
                    setDieselPrice(Math.round(Number(oil.PRICE)));
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAvgPrice();
    }, []);

    return (
        <HomeContainer>
            <header>
                <h2>나만의 주유소</h2>
                <p>평균 기름값</p>
                <HorizontalStyle>
                    <div className="gasoline">
                        <i>휘발유</i>
                        <span>{gasolinePrice}원</span>
                    </div>
                    <div className="diesel">
                        <i>경유</i>
                        <span>{dieselPrice}원</span>
                    </div>
                </HorizontalStyle>
            </header>
        </HomeContainer>
    );
}
