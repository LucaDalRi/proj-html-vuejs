import { reactive } from 'vue';

export const store = reactive({
    imgCarosello: [
        {
            img: "src/assets/slider-autocar-5.jpg",
        },
        {
            img: 'src/assets/slider-autocar-6.jpg',
        },
        {
            img: 'src/assets/slider-autocar-7.jpg',
        },
        {
            img: 'src/assets/slider-autocar-8.jpg',
        }
    ],

    cars: [
        {
            nome: 'BMW M9',
            categoria: 'Cabrio',
            brand: 'BMW',
            alimentazione: 'Eletric',
            costo: '64,000$',
            immagine: 'src/assets/bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg'
        },
        {
            nome: 'BMW M8',
            categoria: 'Cabrio',
            brand: 'BMW',
            alimentazione: 'Diesel',
            costo: '45,000$',
            immagine: 'src/assets/bmw88-400x300.jpg'
        },
        {
            nome: 'BMW 4',
            categoria: 'Cabrio',
            brand: 'BMW',
            alimentazione: 'Gasoline',
            costo: '35,000$',
            immagine: 'src/assets/bmw442-400x300.jpg'
        },
        {
            nome: 'Seat Ibiza',
            categoria: 'Hatchback',
            brand: 'Seat',
            alimentazione: 'Eletric',
            costo: '23,000$',
            immagine: 'src/assets/yeni-ibiza-2-400x300.jpg'
        },
        {
            nome: 'Sear Arona',
            categoria: 'SUV',
            brand: 'Seat',
            alimentazione: 'Gasoline',
            costo: '37,500$',
            immagine: 'src/assets/makyajli-2022-seat-arona-1-400x300.jpg'
        },
        {
            nome: 'Volkswagen Taigo',
            categoria: 'SUV',
            brand: 'Volkswagen',
            alimentazione: 'Eletric',
            costo: '50,000$',
            immagine: 'src/assets/vw-taigo3832-400x300.jpg'
        },
        {
            nome: 'Volkswagen T-Cross',
            categoria: 'SUV',
            brand: 'Volkswagen',
            alimentazione: 'Diesel',
            costo: '27,000$',
            immagine: 'src/assets/2019-vw-t-cross-400x300.jpg'
        },
        {
            nome: 'Volkswagen Passat',
            categoria: 'Sedan',
            brand: 'Volkswagen',
            alimentazione: 'Diesel',
            costo: '42,500$',
            immagine: 'src/assets/volkswagen-passat-1280x720-1-400x300.jpg'
        }
    ]

});