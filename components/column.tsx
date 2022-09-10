import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Todo } from '../models/todo'
import TodoItem from './todoitem'

type Props = {
  droppableId: string
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Column: React.FC<Props> = ({ droppableId, todos, setTodos }) => (
  <Droppable droppableId={droppableId}>
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
)

export default Column
