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
  static types = ['slider', 'status'];
  static possibleStatus = ['Sin comenzar', 'En progreso', 'Terminada'];
  constructor(
    public type = "slider",
    public slider = {
    currentValue: 0,
    maxValue: 10,
    alarmValue: 5
},
    public progress = {
    currentValue: 0,
    maxValue: 100,
},
    public status = {
    currentStatus: ""
}
  ) {
    }

}

