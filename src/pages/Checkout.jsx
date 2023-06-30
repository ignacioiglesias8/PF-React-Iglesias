import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext';
import {collection, getDocs, query, where, Timestamp, documentId, writeBatch, addDoc, getFirestore} from "firebase/firestore";
import CheckoutForm from '../components/CheckoutForm';

const Checkout=() => {
    const [loading, setloading] =useState(false);
    const [orderId, setOrderId] = useState('')

    const db = getFirestore()

    const {cart, total, clearCart} = useContext(CartContext)
    
    const createOrder = async ({name, phone, email}) => {
        setloading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db,'products')
            const productAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const {docs} = productAddedFromFirestore
            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart =cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                if (stockDb >= prodQuantity){
                    batch.update(doc.ref,{stock:stockDb - prodQuantity})
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('no hay más lugar para este tour')
            }

        } catch(error){
            console.log(error)
        }finally {
            setloading(false)
        }
    }

    if (loading) {
        return <div className="checkoutFormPage"><h1>Se esta generando su orden...</h1></div>
    }

    if(orderId) {
        return <div className="checkoutFormPage"><h1>El id de su orden es: {orderId}</h1></div>
    }

    return (
        <div className="checkoutFormPage">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
        
    )
}

export default Checkout;