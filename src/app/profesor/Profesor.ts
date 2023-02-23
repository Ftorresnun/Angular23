export interface Iprofesor {

}

export class profesor implements Iprofesor{

  constructor(
    public nombre: string,
    public apellidos: string,
    public titulacion: string,
    public fechaIng: Date,){
  }

}
