import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Status, Todo, TodosStatus, TodosView, WeekDay, WeekDayTodos } from '../models/todo'
import TodoItem from './todoitem'

interface Props {
  view: TodosView
  backlogTodos: Todo[]
  setBacklogTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  activeTodos: Todo[]
  setActiveTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  monTodos: Todo[]
  setMonTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  tueTodos: Todo[]
  setTueTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  wedTodos: Todo[]
  setWedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  thuTodos: Todo[]
  setThuTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  friTodos: Todo[]
  setFriTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  satTodos: Todo[]
  setSatTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  sunTodos: Todo[]
  setSunTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todos: React.FC<Props> = ({
  view,
  backlogTodos,
  setBacklogTodos,
  activeTodos,
  setActiveTodos,
  completedTodos,
  setCompletedTodos,
  monTodos,
  setMonTodos,
  tueTodos,
  setTueTodos,
  wedTodos,
  setWedTodos,
  thuTodos,
  setThuTodos,
  friTodos,
  setFriTodos,
  satTodos,
  setSatTodos,
  sunTodos,
  setSunTodos
}) => (
  view === TodosView.KanbanView ?
    <div className='grid grid-cols-1 w-full gap-6 mt-4 lg:grid-cols-3'>
      <Droppable droppableId={TodosStatus.BacklogTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                Backlog
              </span>
              {backlogTodos?.map((todo, index) =>
                <TodoItem
                  hasDoneIcon={false}
                  index={index}
                  key={todo?.id}
                  todo={todo}
                  todos={backlogTodos}
                  setTodos={setBacklogTodos} />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={TodosStatus.ActiveTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className={`bg-blue-400 px-5 py-3 rounded-md ${droppableSnapshot.isDraggingOver ? 'opacity-80' : ''}`}
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                Active
              </span>
              {activeTodos?.map((todo, index) =>
                <TodoItem
                  hasDoneIcon={false}
                  index={index}
                  key={todo?.id}
                  todo={todo}
                  todos={activeTodos}
                  setTodos={setActiveTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={TodosStatus.CompletedTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-red-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                Completed
              </span>
              {completedTodos?.map((todo, index) =>
                <TodoItem
                  hasDoneIcon={false}
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
    </div>
    :
    <div className='grid grid-cols-1 w-full gap-2 mt-4 lg:grid-cols-5'>
      <Droppable droppableId={WeekDayTodos.MonTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Monday}
              </span>
              {monTodos?.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo?.id}
                  todo={todo}
                  todos={monTodos}
                  setTodos={setMonTodos} />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={WeekDayTodos.TueTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className={`bg-gray-400 px-5 py-3 rounded-md ${droppableSnapshot.isDraggingOver ? 'opacity-80' : ''}`}
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Tuesday}
              </span>
              {tueTodos.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo?.id}
                  todo={todo}
                  todos={tueTodos}
                  setTodos={setTueTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={WeekDayTodos.WedTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Wednesday}
              </span>
              {wedTodos.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={wedTodos}
                  setTodos={setWedTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={WeekDayTodos.ThuTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Thursday}
              </span>
              {thuTodos.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={thuTodos}
                  setTodos={setThuTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={WeekDayTodos.FriTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Friday}
              </span>
              {friTodos.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={friTodos}
                  setTodos={setFriTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={WeekDayTodos.SatTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Satuday}
              </span>
              {satTodos.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={satTodos}
                  setTodos={setSatTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId={WeekDayTodos.SunTodos}>
        {
          (droppableProvided, droppableSnapshot) => (
            <div className='bg-gray-400 px-5 py-3 rounded-md'
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              <span className='text-white text-2xl font-semibold'>
                {WeekDay.Sunday}
              </span>
              {sunTodos.map((todo, index) =>
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={sunTodos}
                  setTodos={setSunTodos}
                />
              )}
              {droppableProvided.placeholder}
            </div>
          )}
      </Droppable>
    </div>
)

export default Todos
