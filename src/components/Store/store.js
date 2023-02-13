import { reactive } from 'vue';

export const store = reactive({
    imgCarosello: [
        {
            img: "src/assets/slider-autocar-5.jpg",
        },
        {
            img: 'src/assets/slider-autocar-6.jpg',
        },
    ],

    cars: [
        'bmwM9' [
            {
                nome: 'BMW M9',
                categoria: 'Cabrio',
                brand: 'BMW',
                alimentazione: 'Eletric',
                costo: '64,000$'
            }
        ],
        'bmwM8' [
            {
                nome: 'BMW M8',
                categoria: 'Cabrio',
                brand: 'BMW',
                alimentazione: 'Diesel',
                costo: '45,000$'
            }
        ],
        'bmw4' [
            {
                nome: 'BMW 4',
                categoria: 'Cabrio',
                brand: 'BMW',
                alimentazione: 'Gasoline',
                costo: '35,000$'
            }
        ],
        'seatIbiza' [
            {
                nome: 'Seat Ibiza',
                categoria: 'Hatchback',
                brand: 'Seat',
                alimentazione: 'Eletric',
                costo: '23,000$'
            }
        ],
        'seatArona' [
            {
                nome: 'Sear Arona',
                categoria: 'SUV',
                brand: 'Seat',
                alimentazione: 'Gasoline',
                costo: '37,500$'
            }
        ],
        'volkswagenTaigo' [
            {
                nome: 'Volkswagen Taigo',
                categoria: 'SUV',
                brand: 'Volkswagen',
                alimentazione: 'Eletric',
                costo: '50,000$'
            }
        ],
        'volkswagenTCross' [
            {
                nome: 'Volkswagen T-Cross',
                categoria: 'SUV',
                brand: 'Volkswagen',
                alimentazione: 'Diesel',
            }
        ],
        'volkswagenPassat' [
            {
                nome:'Volkswagen Passat',
                categoria: 'Sedan',
                brand: 'Volkswagen',
                alimentazione: 'Diesel',
                costo: '42,500$'
            }
        ],
    ]

});