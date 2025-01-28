export async function getAveragePrice() {
    const response = await fetch('/api/avgPrice');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}
