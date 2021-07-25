export class Task {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public avance: number,
    public importante?: number,
    public due?: Date
  ) {  }

}
