import ItemCount from './ItemCount';

const SideBar = ({ greeting }) => {
    return (
        <div className="sideBar">
        <h1>{greeting}</h1>
        <div className='contador'>
            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
        </div>
        </div>
    );
};

export default SideBar;