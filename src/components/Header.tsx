'use client';
import { HorizontalStyle } from '@/GlobalStyle';
import { OilAvgPriceType } from '@/type/type';
import { getCurrentDate } from '@/utils/currentDate';
import { formatPrice } from '@/utils/formatPrice';
import React, { useEffect, useState } from 'react';
import { useAveragePrice } from '@/hooks/queries/useAveragePrice';

export default function Header() {
    const [gasolinePrice, setGasolinePrice] = useState(0);
    const [dieselPrice, setDieselPrice] = useState(0);

    const { data: avgPriceRes } = useAveragePrice();

    useEffect(() => {
        if (!avgPriceRes) return;

        const oilResults = avgPriceRes.RESULT.OIL;
        oilResults.forEach((oil: OilAvgPriceType) => {
            if (oil.PRODNM === '휘발유') {
                setGasolinePrice(Math.round(Number(oil.PRICE)));
            } else if (oil.PRODNM === '자동차용경유') {
                setDieselPrice(Math.round(Number(oil.PRICE)));
            }
        });
    }, [avgPriceRes]);

    return (
        <header>
            <h2>나만의 주유소</h2>
            <p>
                전국 평균 기름값 <i>( {getCurrentDate()} )</i>
            </p>
            <HorizontalStyle>
                <div className="gasoline">
                    <i>휘발유</i>
                    <span>{formatPrice(gasolinePrice)}원</span>
                </div>
                <div className="diesel">
                    <i>경유</i>
                    <span>{formatPrice(dieselPrice)}원</span>
                </div>
            </HorizontalStyle>
        </header>
    );
}
