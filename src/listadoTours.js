import elCarmen from "./assets/img/elcarmen.jpg";
import sanSalvador from "./assets/img/sansalvador.jpg";
import yalaReyes from "./assets/img/yalaReyes.jpg";
import tiraxiLozano from "./assets/img/tiraxiLozano.jpg";

const tours = [
    {
        id: '1',
        nombre: 'San Salvador',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1000,
        stock: 10,
        imagen: {sanSalvador},
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '2',
        nombre: 'El Carmen',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1200,
        stock: 10,
        imagen: {elCarmen},
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '3',
        nombre: 'Yala-Reyes',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: {yalaReyes},
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '4',
        nombre: 'Tiraxi-Lozano',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1200,
        stock: 10,
        imagen: {tiraxiLozano},
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
]

export const getTours = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours)
        }, 3000)
    })
}