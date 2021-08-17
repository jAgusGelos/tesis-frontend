export interface ICongress{
  id?: string;
  nombre: string;
  sede: string;
  chairPrincipal: string;
  coordLocal: string;
  ano: number;
}

export interface ICongressComplete{
  nombre: string;
  sede: string;
  chairPrincipal: string;
  coordLocal: string;
  ano: number;
  fechaInCongreso: string;
  fechaFinCongreso: string;
  fechaLimPapers: string;
  fechaProrrogaPapers: string;
  fechaFinEvaluacion: string;
  fechaFinReEv: string;
  fechaFinInsTemprana: string;
  fechaFinInsTardia: string;
  modalidad: string;
  is_active: boolean;
}
