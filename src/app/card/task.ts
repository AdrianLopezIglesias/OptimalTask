export class Task {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public avance: Avance,
    public father: string,
    public level: number,
    public family: [],
    public importante?: number,
    public due?: Date
  ) {  }

}

export class Avance {
  constructor(
    public type: string,
    public sliderValue: any,
    public sliderMax: BigInteger,
    public sliderDanger: BigInteger,
    public progressCurrent: string,
    public progressOptions: [],

  ) {}
}
