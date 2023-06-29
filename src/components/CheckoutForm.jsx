import { useState } from "react";

const CheckoutForm =({onConfirm}) =>{
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleConfirm} className="form">
            <label className="label">Nombre</label>
                <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />
            <label className="label">Teléfono</label>
                <input
                    className="input"
                    type="text"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                />
            <label className="label">Email</label>
                <input
                    className="input"
                    type="text"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
            <div className="formFooter">
                <button type='submit' className="button + cartItemClass + cartButton">Crear Orden</button>
            </div>
            </form>  
        </div>
    )
}

export default CheckoutForm;