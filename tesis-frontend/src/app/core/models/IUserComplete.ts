export interface IUserComplete {
  id?: string;
  dni: number;
  tipoDni: string;
  apellido: string;
  nombre: string;
  fechaNacimiento: string;
  nacionalidad: string;
  provincia: string;
  localidad: string;
  calle: string;
  nroCalle: number;
  piso?: string;
  dpto?: string;
  celular?: number;
  email: string;
  password?: string;
}
