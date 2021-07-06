
export interface Congress{
  nombre: string;
  sede: string;
  tematicas: number[];
  chairPrincipal: string;
  coordLocal: string;
  fechaInCongreso: Date;
  fechaFinCongreso: Date;
  fechaLimPapers: Date;
  fechaProrrogaPapers: Date;
  fechaFinEvaluacion: Date;
  fechaFinReEv: Date;
  aulas: number[];
  modalidad: string;
}
