import elCarmen from "./assets/img/elcarmen.jpg";
import sanSalvador from "./assets/img/sansalvador.jpg";
import yala from "./assets/img/yala.jpg";
import reyes from "./assets/img/reyes.jpg";
import tiraxi from "./assets/img/tiraxi.jpg";
import purmamarca from "./assets/img/purmamarca.jpg";

const tours = [
    {
        id: '1',
        nombre: 'San Salvador',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1000,
        stock: 10,
        imagen: sanSalvador,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '2',
        nombre: 'El Carmen',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1200,
        stock: 10,
        imagen: elCarmen,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '3',
        nombre: 'Yala',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1300,
        stock: 10,
        imagen: yala,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '4',
        nombre: 'Reyes',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: reyes,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '5',
        nombre: 'Tiraxi',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1200,
        stock: 10,
        imagen: tiraxi,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '6',
        nombre: 'Purmamarca',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 1500,
        stock: 10,
        imagen: purmamarca,
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