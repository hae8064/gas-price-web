'use client';
import { HorizontalStyle } from '@/GlobalStyle';
import { OilAvgPriceType } from '@/type/type';
import { getCurrentDate } from '@/utils/currentDate';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Header() {
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
        <header>
            <h2>나만의 주유소</h2>
            <p>
                평균 기름값 <i>( {getCurrentDate()} )</i>
            </p>
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
    );
}
