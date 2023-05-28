import elCarmen from "./assets/img/elcarmen.jpg";
import sanSalvador from "./assets/img/sansalvador.jpg";
import yala from "./assets/img/yala.jpg";
import reyes from "./assets/img/reyes.jpg";
import tiraxi from "./assets/img/tiraxi.jpg";
import purmamarca from "./assets/img/purmamarca.jpg";
import maimara from "./assets/img/maimara.jpg";
import tilcara from "./assets/img/tilcara.jpg";
import uquia from "./assets/img/uquia.jpg";
import humahuaca from "./assets/img/humahuaca.jpg";
import trescruces from "./assets/img/trescruces.jpg";
import abrapampa from "./assets/img/abrapampa.jpg";
import casabindo from "./assets/img/casabindo.jpg";
import cochinoca from "./assets/img/cochinoca.jpg";
import rinconada from "./assets/img/rinconada.jpg";
import cusicusi from "./assets/img/cusicusi.jpg";
import abdon from "./assets/img/abdon.jpg";
import yavi from "./assets/img/yavi.jpg";

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
        precio: 1300,
        stock: 10,
        imagen: elCarmen,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '3',
        nombre: 'Yala',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: yala,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '4',
        nombre: 'Reyes',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1700,
        stock: 10,
        imagen: reyes,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '5',
        nombre: 'Tiraxi',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: tiraxi,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '6',
        nombre: 'Purmamarca',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2300,
        stock: 10,
        imagen: purmamarca,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '7',
        nombre: 'Maimará',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2300,
        stock: 10,
        imagen: maimara,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '8',
        nombre: 'Tilcara',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2500,
        stock: 10,
        imagen: tilcara,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '9',
        nombre: 'Uquía',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2500,
        stock: 10,
        imagen: uquia,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '10',
        nombre: 'Humahuaca',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2800,
        stock: 10,
        imagen: humahuaca,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '11',
        nombre: 'Tres Cruces',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2500,
        stock: 10,
        imagen: trescruces,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '12',
        nombre: 'Abra Pampa',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 2500,
        stock: 10,
        imagen: abrapampa,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '13',
        nombre: 'Casabindo',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 2800,
        stock: 10,
        imagen: casabindo,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '14',
        nombre: 'Cochinoca',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 2800,
        stock: 10,
        imagen: cochinoca,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '15',
        nombre: 'Rinconada',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3000,
        stock: 10,
        imagen: rinconada,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '16',
        nombre: 'Abdon Castro Tolay',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3000,
        stock: 10,
        imagen: abdon,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '17',
        nombre: 'Cusi Cusi',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3500,
        stock: 10,
        imagen: cusicusi,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '18',
        nombre: 'Yavi',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3500,
        stock: 10,
        imagen: yavi,
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