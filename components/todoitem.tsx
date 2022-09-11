import React, { useRef, useState, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Status, Todo } from '../models/todo'

interface Props {
  hasDoneIcon?: boolean
  index: number
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ hasDoneIcon = true, index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editName, setEditName] = useState<string>(todo.name)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleEdit = () => {
    if (todo.status !== Status.Done && !edit) {
      setEdit(true)
    }
  }

  const handleEditNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value)
  }

  const handleEditNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos(todos.map((item) => item.id === todo.id ? { ...item, name: editName } : item))
    setEdit(false)
  }

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  const handleDone = () => {
    //setTodos(todos.map((item) => {
    //  if (item.id == todo.id) {
    //    item.isDone = !item.isDone
    //    return item 
    //  }
    //  return item 
    //}))
    // or
    setTodos(todos.map((item) => item.id === todo.id ? { ...item, isDone: !item.isDone } : item))
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
      {
        (draggableProvided, draggableSnapshot) => (
          <form
            className='flex rounded-md bg-yellow-300  w-full p-[20px] mt-[15px] transition hover:scale-105 hover:shadow-md'
            onSubmit={handleEditNameSubmit}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
          >
            {todo.isDone ?
              <s className='flex-1'>{todo.name}</s>
              :
              edit ?
                <input
                  autoFocus
                  className='text-black px-1 py-2 flex-1 outline-none rounded-md'
                  type='text'
                  ref={inputRef}
                  value={editName}
                  onChange={handleEditNameChange} />
                :
                <span className='flex-1'>{todo.name}</span>
            }
            <div className='flex gap-1'>
              <span className='ml-[10px] text-[25px] cursor-pointer' onClick={handleEdit}>
                <AiFillEdit />
              </span>
              <span className='ml-[10px] text-[25px] cursor-pointer' onClick={handleDelete}>
                <AiFillDelete />
              </span>
              {hasDoneIcon &&
                <span className='ml-[10px] text-[25px] cursor-pointer' onClick={handleDone}>
                  <MdDone />
                </span>
              }
            </div>
          </form>
        )
      }
    </Draggable>
  )
}

export default TodoItem
