export interface ISchedule {
  Id: number;
  fechaInCongreso: Date;
  fechaFinCongreso: Date;
  fechaInInscrip: Date;
  fechaFinInscrip: Date;
  fechaFinInscripTardia: Date;
  fechaLimPapers: Date;
  fechaProrrogaPapers: Date;
  fechaFinEvaluacion: Date;
  fechaFinReEv: Date;
  simposios: number[];
  aulas: number[];
  modalidad: string;
}
