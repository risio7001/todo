type Todo = {
    name: stirng,
    title: string,
    check: boolean,
}

type CheckHandle = (CheckHandle:Todo)=>void
type DeleteHandle = (DeleteHandle:Todo)=>void
type AddTodo = (AddTodo:Todo) => void

type Toggle = {
    toggle:string
}