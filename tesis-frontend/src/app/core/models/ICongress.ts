
export interface ICongress{
  nombre: string;
  sede: string;
  simposios: number[];
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
