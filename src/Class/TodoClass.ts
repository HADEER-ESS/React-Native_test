import { TodoItem } from "../Types/TodoItem";


export default class Todo {
    private static instance: Todo
    private taskArr: TodoItem[] = [];

    // title: string, description: string
    private constructor() { }

    static getInstance() {
        if (!Todo.instance) {
            Todo.instance = new Todo()
        }
        return Todo.instance
    }

    taskCount(): number {
        return this.taskArr.length
    }

    // title: string, desc: string
    pushToArray(task: TodoItem) {
        // Todo.id += 1
        // this.taskArr.push({id: Todo.id , title: title , description: desc});
        this.taskArr = [...this.taskArr, task]

    }

    getTodoItem() {
        return this.taskArr
    }

    removeFromTodo(id: number) {
        this.taskArr.splice(id - 1, 1);
    }
}