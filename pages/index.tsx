import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { FaCalendarWeek } from 'react-icons/fa'
import { BsFillKanbanFill } from 'react-icons/bs'

import { DragDropContext, Draggable, Droppable, DropResult, resetServerContext } from 'react-beautiful-dnd'
import Column from '../components/column'

import InputField from '../components/inputfield'
import TodoApp from '../components/todoapp'
import Todos from '../components/todos'

import { Status, Todo, TodosStatus, TodosView, WeekDay, WeekDayTodos } from '../models/todo'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [view, setView] = useState<TodosView>(TodosView.KanbanView)
  const [backlogTodos, setBacklogTodos] = useState<Todo[]>([])
  const [activeTodos, setActiveTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  const [monTodos, setMonTodos] = useState<Todo[]>([])
  const [tueTodos, setTueTodos] = useState<Todo[]>([])
  const [wedTodos, setWedTodos] = useState<Todo[]>([])
  const [thuTodos, setThuTodos] = useState<Todo[]>([])
  const [friTodos, setFriTodos] = useState<Todo[]>([])
  const [satTodos, setSatTodos] = useState<Todo[]>([])
  const [sunTodos, setSunTodos] = useState<Todo[]>([])

  //  type Actions = 
  //    { type: 'add', payload: string }
  //  | { type: 'remove', payload: number }
  //  | { type: 'done', payload: number }
  //
  //  const TodoReducer = (state: Todo[], action: Actions) => {
  //    switch (action.type) {
  //      case 'add':
  //        return [
  //          ...state,
  //          {id: Date.now(), name: action.payload, isDone: false}
  //        ]
  //      case 'remove':
  //        return state.filter((item) => item.id !== action.payload)
  //      case 'done':
  //        return state.map((item) => item.id === action.payload ? {...item, isDone: !item.isDone} : item)
  //    }
  //  }
  //  const [state, dispatch] = useReducer(TodoReducer, [])
  //


  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (name) {
      const newTodo = {
        id: Date.now(),
        name,
        doDay: WeekDay.Monday,
        status: Status.Backlog,
        isDone: false
      }
      setBacklogTodos([...backlogTodos, newTodo])
      setMonTodos([...monTodos, newTodo])
      setName('')
    }
  }



  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result

    if (!destination || (destination.droppableId === source.droppableId
      && destination.index === source.index)) return

    let add,
      backlog = backlogTodos,
      active = activeTodos,
      complete = completedTodos,
      mon = monTodos,
      tue = tueTodos,
      wed = wedTodos,
      thu = thuTodos,
      fri = friTodos,
      sat = satTodos,
      sun = sunTodos

    switch (source.droppableId) {
      case TodosStatus.BacklogTodos:
        add = backlogTodos[source.index]
        backlog.splice(source.index, 1)
        break
      case TodosStatus.ActiveTodos:
        add = active[source.index]
        active.splice(source.index, 1)
        break
      case TodosStatus.CompletedTodos:
        add = complete[source.index]
        complete.splice(source.index, 1)
        break

      case WeekDayTodos.MonTodos:
        add = mon[source.index]
        mon.splice(source.index, 1)
        break
      case WeekDayTodos.TueTodos:
        add = tue[source.index]
        tue.splice(source.index, 1)
        break
      case WeekDayTodos.WedTodos:
        add = wed[source.index]
        wed.splice(source.index, 1)
        break
      case WeekDayTodos.ThuTodos:
        add = thu[source.index]
        thu.splice(source.index, 1)
        break
      case WeekDayTodos.FriTodos:
        add = fri[source.index]
        fri.splice(source.index, 1)
        break
      case WeekDayTodos.SatTodos:
        add = sat[source.index]
        sat.splice(source.index, 1)
        break
      case WeekDayTodos.SunTodos:
        add = sun[source.index]
        sun.splice(source.index, 1)
        break
    }



    if (add) {
      switch (destination.droppableId) {
        case TodosStatus.BacklogTodos:
          backlog.splice(destination.index, 0, add)
          break
        case TodosStatus.ActiveTodos:
          active.splice(destination.index, 0, add)
          break
        case TodosStatus.CompletedTodos:
          complete.splice(destination.index, 0, add)
          break

        case WeekDayTodos.MonTodos:
          monTodos.splice(destination.index, 0, add)
          break
        case WeekDayTodos.TueTodos:
          tueTodos.splice(destination.index, 0, add)
          break
        case WeekDayTodos.WedTodos:
          wedTodos.splice(destination.index, 0, add)
          break
        case WeekDayTodos.ThuTodos:
          thuTodos.splice(destination.index, 0, add)
          break
        case WeekDayTodos.FriTodos:
          friTodos.splice(destination.index, 0, add)
          break
        case WeekDayTodos.SatTodos:
          satTodos.splice(destination.index, 0, add)
          break
        case WeekDayTodos.SunTodos:
          sunTodos.splice(destination.index, 0, add)
          break
      }
    }

    setBacklogTodos(backlog)
    setActiveTodos(active)
    setCompletedTodos(complete)
  }


  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div className={styles.container}>
        <Head>
          <title>Drag-Drop-Animated-Todo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex flex-col items-center  min-h-screen pt-10'>
          <h2 className='text-4xl font-bold'>Taskify</h2>
          <div className='flex gap-3'>
            <span
              onClick={() => setView(TodosView.KanbanView)}
              className={`text-3xl text-gray-300 cursor-pointer ${view === TodosView.KanbanView ? 'text-gray-900' : ''}`}>
              <BsFillKanbanFill />
            </span>
            <span
              onClick={() => setView(TodosView.WeeklyView)}
              className={`text-3xl text-gray-300 cursor-pointer ${view === TodosView.WeeklyView ? 'text-gray-900' : ''}`}>
              <FaCalendarWeek />
            </span>
          </div>
          <InputField
            name={name}
            setName={setName}
            addNewTodo={addNewTodo}
          />
          <Todos
            view={view}
            backlogTodos={backlogTodos}
            setBacklogTodos={setBacklogTodos}
            activeTodos={activeTodos}
            setActiveTodos={setActiveTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            monTodos={monTodos}
            setMonTodos={setMonTodos}
            tueTodos={tueTodos}
            setTueTodos={setTueTodos}
            wedTodos={wedTodos}
            setWedTodos={setWedTodos}
            thuTodos={thuTodos}
            setThuTodos={setThuTodos}
            friTodos={friTodos}
            setFriTodos={setFriTodos}
            satTodos={satTodos}
            setSatTodos={setSatTodos}
            sunTodos={sunTodos}
            setSunTodos={setSunTodos}
          />
        </div>
      </div>
    </DragDropContext>
  )
}

export default Home

//const initialData = {
//  tasks: {
//
//  },
//  columns: [
//    {
//      id: 'BacklogTasks',
//      title: 'Backlog',
//    },
//    {
//      id: 'ActiveTasks',
//      title: 'In progress',
//    },
//    {
//      id: 'ActiveTasks',
//      title: 'In progress',
//    },
//    {
//      id: 'CompletedTasks',
//      title: 'Done',
//    }
//  ]
//}
