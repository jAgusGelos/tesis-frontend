export interface ITarifa {
    id?: string;
    idCongreso?: string;
    nombre: string;
    precio: number;
    fechaDesde: Date;
    fechaHasta: Date;
}
