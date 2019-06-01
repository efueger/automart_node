export const validCarFixtures = [
    {
        state: 'new',
        //status: 'unsold',
        price: '10000000',
        manufacturer: 'Kia',
        model: 'Dehydra',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    {
        state: 'used',
        //status: 'unsold',
        price: '10000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    }
];

export const invalidCarFixtures = [
    //state 0
    {
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    {
        state: 'usedd',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    //price
    {
        state: 'used',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    {
        state: 'usedd',
        price: '3000ert.',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    //manufacturer
    {
        state: 'used',
        price: '30000000',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota4',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    //model
    {
        state: 'new',
        price: '30000000',
        manufacturer: 'Toyota',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    {
        state: 'new',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon.34',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    //bodytype
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'ca.r',
        imageurl: 'https://www.cloudinary.com/photo/yellow-sports-car-during-day-time-39855/'
    },
    //imageurl
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car'
    }
];