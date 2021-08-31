export interface IPaper {
  id: string;
  nombre: string;
  autores: string[];
  responsable: string;
  simposio: string;
  archivo: File;
  estado: string;
}
