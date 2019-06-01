export const validOrderFixture = [
    {
        priceOffered: '2000000',
        carId: '2'
    }
];

export const invalidOrderFixture = [
    {
        priceOffered: '',
        carId: 1
    },
    {
        priceOffered: '333000.@',
        carId: 1
    }
];