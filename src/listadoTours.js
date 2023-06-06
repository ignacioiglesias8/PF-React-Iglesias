/*imagenes*/
import sanSalvador from "./assets/img/sansalvador.jpg";
import elCarmen from "./assets/img/elcarmen.jpg";
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
import lasescaleras from "./assets/img/lasescaleras.jpg";
import ocloyas from "./assets/img/ocloyas.jpg";
import sanpedro from "./assets/img/sanpedro.jpg";
import calilegua from "./assets/img/calilegua.jpg";
import sanfrancisco from "./assets/img/sanfrancisco.jpg";
import santaana from "./assets/img/santaana.jpg";
import sanpedroatacama from "./assets/img/sanpedroatacama.jpg";
import tupiza from "./assets/img/tupiza.jpg";
import bermejo from "./assets/img/bermejo.jpg";

/*los resumenes deben tener entre 25 y 48 carácteres*/


const tours = [
    {
        id: '1',
        nombre: 'San Salvador',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1000,
        stock: 10,
        imagen: sanSalvador,
        descripcion: <p>
        En este tour visitaremos los lugares turísticos más destacados de <b>San Salvador de 
            Jujuy</b>:<br></br>
        <br></br>
        <ul>Nos encontraremos a las 8am en la <b>Plaza Belgrano</b>, corazón de la ciudad, para 
            conocer importantes edificios históricos como la casa de Gobierno, el Cabildo 
            de Jujuy y el monumento al General Manuel Belgrano.</ul>
        <ul>Luego nos dirigiremos a la <b>Catedral de Jujuy</b>, uno de los íconos arquitectónicos 
            más destacados de la ciudad, la cual cuenta con una hermosa fachada barroca y un 
            interior decorado con frescos y esculturas.</ul>
        <ul>Continuaremos el tour con la visita a dos importantes museos de la ciudad: el <b>Museo
            Lavalle</b> y el <b>Museo Arquelógico Provincial</b>. Durante el tour, también iremos
            viendo cada uno de las obras de la artista salteña Lola Mora.</ul>
        <ul>Antes de almorzar, visitaremos dos barrios residenciales que permiten unas increíbles 
            vistas panorámicas. El primero será <b>Ciudad Nievas</b>, enclavado en el centro de 
            la ciudad, y el segundo es <b>Alto La Viña</b>, que nos permitirá ver la cordillera 
            de los Andes de fondo.</ul>
        <ul>Para cerrar este tour, disfrutaremos de un menú tipicamente regional en <b>Viracocha</b>,
            un emblema gastronómico de la ciudad.</ul>
            </p>,
        resumen: 'Capital con una cultura y naturaleza vibrante',
    },
    {
        id: '2',
        nombre: 'El Carmen',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1300,
        stock: 10,
        imagen: elCarmen,
        descripcion: <p>
        Viajeramos al sur de la provincia para conocer los paisajes que rodean <b>El Carmen</b>:<br></br>
        <br></br>
        <ul>Nos encontraremos a las 9am en la Plaza Belgrano para comenzar el viaje. Nuestra 
            primer parada será el <b>Dique Las Maderas</b> donde realizaremos un trekking hasta
            llegar al pequeño puerto. Allí saldremos el bote a recorrer rincones increíbles del dique.</ul>
        <ul>Luego nos dirigiremos al <b>Dique Las Ciénagas</b>, donde contaremos con un tiempo libre
            para que practiques deportes acuáticos, recorras los alrededores o simplemente descanses 
            en la naturaleza.</ul>
        <ul>Al mediodía almorzaremos un clásico restaurant para deleitarnos con los platos típicos 
            del sur jujeño.</ul>
        <ul>Al finalizar, retomaremos el viaje hacia <b>San Antonio</b>, un pequeño pueblo que se destaca
            por su entorno verde junto al Río Perico. Además de realizar un trekking por el lecho del
            río, podremos recorrer el centro del pueblo y su mercado de artesanías.</ul>
        <ul>Por último, iremos a la ciudad de <b>El Carmen</b> para recorrer su pequeña plaza y finalizar el 
            día en el buñuelódromo. Nadie puede volverse de este tour sin probar los bueñuelos con miel
            de caña, un clásico de la provincia.
        </ul>
            </p>,
        resumen: 'Ríos cristalinos y cerros verdes en el corazón del valle',
    },
    {
        id: '3',
        nombre: 'Yala',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: yala,
        descripcion: <p>
        A poco kilomentros de la capital, el tour al <b>Parque Provincial Potrero de Yala</b> consiste 
        en lo siguiente:
        <br></br>:
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. La 
            primera parada será en la <b>Plaza Central de Yala</b> donde nos acercaremos al 
            encuentro del Río Grande y el Río Yala para observar una increíble vista panorámica.</ul>
        <ul>Luego nos dirigiremos al Parque Pronvincial, donde realizaremos una parada para 
            conocer los <b>Paredones de Yala</b>, una pequeña quebrada natural formada por el cause
            del Río Yala. Además de un trekking podremos observar parte de la fauna del lugar.</ul>
        <ul>Continuaremos montaña arriba para llegar a las lagunas <b>Desaguadero</b> y <b>Rodeo</b>. 
            En esta última realizaremos un trekking por el sendero Miraflores.
            En el descenso, almorzaremos en <b>Restaurant La Turuca</b> para degustar la gastronomía
            típica de la zona.</ul>
        <ul>Seguiremos unos kilometros, pasaremos por la laguna <b>Comedero</b> y llegaremos a la
            posta para realizar la excursión a caballo hacia la cáscada <b>La Horqueta</b>.</ul>
        <ul>Para finalizar, retomaremos la vuelta hacia San Salvador pero antes, pasaremos por <b>Los 
            Nogales</b> para merienda típica jujeña: Api con buñuelos.
        </ul>
            </p>,
        resumen: 'Las Lagunas de Yala, recorrido obligatorio si visitas Jujuy',
    },
    {
        id: '4',
        nombre: 'Reyes',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1700,
        stock: 10,
        imagen: reyes,
        descripcion: <p>
        Las <b>Termas de Reyes</b> se han convertido en un destino turístico popular de Jujuy en el cual:
        <br></br>:
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. La 
            primera parada será en <b>Villa Jardín de Reyes</b> donde nos caminaremos el centro
            del pueblo para conocer su historia.</ul>
        <ul>Luego nos dirigiremos al <b>Hotel Termas de Reyes</b>, para concoer el emblático
            destino turístico que le ha dado vida a esta zona. Ahí mismo nos deleitaremos con 
            bocados tradicionales de la carta del Hotel.</ul>
        <ul>Continuaremos montaña arriba para observar el <b>Mirador de Termas de Reyes</b> y 
            nos adentraremos a las montañas para llegar la <b>Cascáda Ñieri</b>, también conocida como la
            cascada escondida.</ul>
        <ul>Volveremos hacia la zona de las termas para almorzar un asado bien jujeño en el <b>Salón
            Comunitario</b>. En caso de requerir un menú vegetariano, se solicita notificar apenas comienza
            el tour.</ul>
        <ul>Unas vez que realicemos la correcta digestión, tendremos tiempo cumplir nuestro objetivo:
            Relajarnos en las aguas termales de Reyes. Para ello tendremos tiempo hasta el retorno en
            el <b>Complejo Qubrada Termal</b>, el cual cuenta con servicio de barra y cafatería (no incluido).
        </ul>
            </p>,
        resumen: 'Relax con aguas termales curativas y entorno natural',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '19',
        nombre: 'Las Escaleras',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 1300,
        stock: 10,
        imagen: lasescaleras,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '20',
        nombre: 'Ocloyas',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 1500,
        stock: 10,
        imagen: ocloyas,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '21',
        nombre: 'San Pedro',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 1500,
        stock: 10,
        imagen: sanpedro,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '22',
        nombre: 'Calilegua',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 2000,
        stock: 10,
        imagen: calilegua,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '23',
        nombre: 'San Francisco',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 3000,
        stock: 10,
        imagen: sanfrancisco,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '24',
        nombre: 'Santa Ana',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 3500,
        stock: 10,
        imagen: santaana,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '25',
        nombre: 'San Pedro de Atacama',
        categoria: 'Exterior',
        subcategoria: 'Chile',
        precio: 5000,
        stock: 10,
        imagen: sanpedroatacama,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '26',
        nombre: 'Tupiza',
        categoria: 'Exterior',
        subcategoria: 'Bolivia',
        precio: 5000,
        stock: 10,
        imagen: tupiza,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '27',
        nombre: 'Bermejo',
        categoria: 'Exterior',
        subcategoria: '<Bolivia>',
        precio: 5000,
        stock: 10,
        imagen: bermejo,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
]

export const getTours = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours)
        }, 2000)
    })
}

export const getTourById = (tourId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours.find(tour => tour.id === tourId))
        }, 1000)
    })
}

export const getTourBySubCategory = (tourSubcategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours.find(tour => tour.subcategoria === tourSubcategory))
        }, 1000)
    })
}