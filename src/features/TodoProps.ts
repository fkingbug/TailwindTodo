export interface TodoProps {
  _id: string
  title: string
  isCompleted: boolean
  // changeTodo : (e: React.MouseEvent) => TodoProps[]
  changeTodo: any
  removeTodo: any
}
