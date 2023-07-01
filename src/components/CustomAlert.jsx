import Swal from 'sweetalert2';

const CustomAlert = () => {
    return (
        Swal.fire({
        icon: 'error',
        title: 'Este tour ya fue agregado',
        text: 'Por favor revisa el carrito',
    })
    );
};

export default CustomAlert;