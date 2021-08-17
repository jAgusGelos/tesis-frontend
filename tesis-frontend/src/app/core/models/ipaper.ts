export interface IPaper {
  id: string;
  simposio: string;
  archivo: File;
  responsable: number | string;
  autores: string[];
  nombre: string;
  estado: string;
}

export interface IPaperGet {
  id: string;
  nombre: string;
  idSimposio: number;
  idCongreso: number;
  responsable: string;
  url: string;
  autores: string[];
  esta_correcto: boolean;
  enviado_corregir: boolean;
}
