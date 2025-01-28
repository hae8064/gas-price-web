import { NextResponse } from 'next/server';

export async function GET() {
    const OPINET_API_KEY = process.env.NEXT_PUBLIC_OPINET_API_KEY;

    try {
        const response = await fetch(`http://www.opinet.co.kr/api/avgAllPrice.do?code=${OPINET_API_KEY}&out=json`, {
            next: { revalidate: 3600 } // 1시간마다 재검증
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch average fuel price:', error);
        return NextResponse.json({ error: '평균 유가 정보를 가져오는데 실패했습니다.' }, { status: 500 });
    }
}
