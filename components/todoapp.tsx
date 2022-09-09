import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { Status, Todo, WeekDay } from '../models/todo'
import InputField from './inputfield'
import Todos from './todos'

const TodoApp: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

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
      setTodos([...todos, newTodo])
      setName('')
    }
  }

  const onDragEndHandler = (result: any) => {
    const { destination, source } = result
  }

  return (
    <div className='flex flex-col items-center  min-h-screen pt-10'>
      <h2 className='text-4xl font-bold'>Taskify</h2>
      <InputField
        name={name}
        setName={setName}
        addNewTodo={addNewTodo}
      />
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Todos
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </DragDropContext>
    </div>)
}

export default TodoApp
