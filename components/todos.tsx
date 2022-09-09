import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Status, Todo } from '../models/todo'
import TodoItem from './todoitem'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todos: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) =>
  <div className='grid grid-cols-1 w-full gap-6 mt-4 lg:grid-cols-3'>
    <Droppable droppableId={'BacklogTodos'}>
      {
        (droppableProvided, droppableSnapshot) => (
          <div className='bg-gray-400 px-5 py-3 rounded-md'
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            <span className='text-white text-2xl font-semibold'>
              Backlog
            </span>
            {todos.map((todo, index) =>
              <TodoItem index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            )}
          </div>
        )}
    </Droppable>
    <Droppable droppableId={'activeTodos'}>
      {
        (droppableProvided, droppableSnapshot) => (
          <div className='bg-blue-400 px-5 py-3 rounded-md'
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            <span className='text-white text-2xl font-semibold'>
              Active
            </span>
            {todos.map((todo, index) =>
              <TodoItem
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            )}
            {droppableProvided.placeholder}
          </div>
        )}
    </Droppable>
    <Droppable droppableId={'CompletedTodos'}>
      {
        (droppableProvided, droppableSnapshot) => (
          <div className='bg-red-400 px-5 py-3 rounded-md'
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            <span className='text-white text-2xl font-semibold'>
              Completed
            </span>
            {completedTodos.map((todo, index) =>
              <TodoItem
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            )}
            {droppableProvided.placeholder}
          </div>
        )}
    </Droppable>
  </div>

export default Todos
