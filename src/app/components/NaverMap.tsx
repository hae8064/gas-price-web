'use client';
import React, { useEffect } from 'react';

export default function NaverMap() {
    useEffect(() => {
        if (typeof naver === 'undefined') {
            console.error('Naver Maps script not loaded');
            return;
        }

        // 지도를 표시할 DOM Element 생성
        const mapElement = document.getElementById('map');
        const mapOptions = {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        };

        // 지도 객체 생성
        const map = new naver.maps.Map(mapElement!, mapOptions);

        // 사용자의 현재 위치 가져오기
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map.setCenter(currentLocation); // 지도 중심을 현재 위치로 변경
                    new naver.maps.Marker({
                        position: currentLocation,
                        map: map,
                        title: '현재 위치'
                    });
                },
                (err) => {
                    console.error(err);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, []);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}
