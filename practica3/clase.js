class Persona {
    constructor(nombre, apellidos, poblacion, edad, estudios, carnetDeConducir) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.poblacion = poblacion;
        this.edad = this.validarEdad(edad);
        this.estudios = this.validarEstudios(estudios);
        this.carnetDeConducir = carnetDeConducir;
    }

 
    getEdad() {
        return this.edad;
    }

    setEdad(nuevaEdad) {
        this.edad = this.validarEdad(nuevaEdad);
    }

    getEstudios() {
        return this.estudios;
    }

    setEstudios(nuevosEstudios) {
        this.estudios = this.validarEstudios(nuevosEstudios);
    }

    validarEdad(edad) {
        if (typeof edad === 'number' && edad >= 0) {
            return edad;
        } else {
            console.warn("La edad debe ser un número positivo.");
            return "Error";
        }
    }

    validarEstudios(estudios) {
        if (typeof estudios === 'string') {
            return estudios;
        } else {
            console.warn("Los estudios deben ser una cadena no vacía.");
            return "Error";
        }
    }
}