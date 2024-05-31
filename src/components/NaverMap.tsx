'use client';
import React, { useEffect, useState } from 'react';

export default function NaverMap() {
    const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number }>({
        latitude: 37.5665, // 기본값: 서울
        longitude: 126.978 // 기본값: 서울
    });
    const [map, setMap] = useState<naver.maps.Map | null>(null);

    useEffect(() => {
        if (typeof naver === 'undefined') {
            console.error('Naver Maps script not loaded');
            return;
        }

        // 지도 객체 생성
        const mapElement = document.getElementById('map');
        const mapOptions = {
            center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
            zoom: 15
        };
        const newMap = new naver.maps.Map(mapElement!, mapOptions);
        if (!newMap) return;
        setMap(newMap);

        // 사용자의 현재 위치 가져오기
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const currentLocation = new naver.maps.LatLng(latitude, longitude);
                    setMyLocation({ latitude, longitude });

                    // 지도 중심을 현재 위치로 변경
                    newMap.setCenter(currentLocation);

                    // 현재 위치에 마커 추가
                    new naver.maps.Marker({
                        position: currentLocation,
                        map: newMap,
                        title: '현재 위치'
                    });
                },
                (err) => {
                    console.error('Error getting location:', err);
                },
                { enableHighAccuracy: true }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
}
