export class Task {

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public avance: number,
    public importante?: number,
    public due?: Date
  ) {  }

}
