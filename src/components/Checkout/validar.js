
export const validar = (values) => {
    if (values.nombre.length < 5) {
        alert("Nombre muy corto")
        return false
    }
    if (values.email.length < 7) {
        alert("Correo inválido")
        return false
    }
    if (values.tel.length < 8) {
        alert("Número de teléfono inválido")
        return false
    }

    return true
}