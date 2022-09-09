
export interface Todo {
  id: number
  name: string
  status: Status
  doDay: WeekDay
  isDone: boolean
}

export enum Status {
  Backlog,
  Active,
  Done
}

export enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Satuday,
  Sunday
}
