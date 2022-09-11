
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
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Satuday = 'Satuday',
  Sunday = 'Sunday'
}
export enum WeekDayTodos {
  MonTodos = 'MonTodos',
  TueTodos = 'TueTodos',
  WedTodos = 'WedTodos',
  ThuTodos = 'ThuTodos',
  FriTodos = 'FriTodos',
  SatTodos = 'SatTodos',
  SunTodos = 'SunTodos'
}

export enum TodosStatus {
  BacklogTodos = 'BacklogTodos',
  ActiveTodos = 'ActiveTodos',
  CompletedTodos = 'CompletedTodos'
}

export enum TodosView {
  KanbanView = 'KanbanView',
  WeeklyView = 'WeeklyView'
}
