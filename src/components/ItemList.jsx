import Item from "./Item";

const ItemList = ({tours}) => {
    return (
        <div className='listGroup'>
            {tours.map(tour => <Item key={tour.id} {...tour} />)}            
        </div>
    )
}

export default ItemList