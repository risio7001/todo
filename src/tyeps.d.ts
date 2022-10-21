type Todo = {
    no:number,
    name: stirng,
    title: string,
    check: boolean,
}

type CheckHandle = (CheckHandle:Todo)=>void
type DeleteHandle = (DeleteHandle:Todo)=>void
type AddTodo = (AddTodo:Todo) => void
type onModify = (onModify:Todo) => void
type ModalToggle = (ModalToggle:Todo) => viod

type Toggle = {
    toggle:string
}
// type typeT = {
//     type:string
// }