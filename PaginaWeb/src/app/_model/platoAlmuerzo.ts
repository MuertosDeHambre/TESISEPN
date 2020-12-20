export class PlatoAlmuerzo {
    id?: string;
    estado?: string;
    tipoAlmuerzo: string;
    entradaAlmuerzo: string;
    segundoAlmuerzo: string;
    jugoAlmuerzo: string;
    precioAlmuerzo: string
    userUID: string; // id del usuario logueado (el que crea el plato, es decir el ID del Restaurante)
}