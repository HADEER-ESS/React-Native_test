import { TodoItem } from "../Types/TodoItem";


export default class Todo {
    private static id: number = 0;
    private title: string;
    private desc: string;
    private taskArr: TodoItem[] = [];


    constructor(title: string, description: string) {
        Todo.id = 1;
        this.title = title;
        this.desc = description;
    }

    taskCount() {
        return Todo.id;
    }

    pushToArray(title: string, desc: string) {
        Todo.id += 1
        // this.taskArr.push({id: Todo.id , title: title , description: desc});
        this.taskArr = [...this.taskArr, { id: Todo.id, title: title, description: desc }]
        return { id: Todo.id, title: title, description: desc }

    }

    getTodoItem() {
        return { id: Todo.id, title: this.title, description: this.desc }
    }

    removeFromTodo(id: number) {
        this.taskArr.splice(id - 1, 1);
        Todo.id -= 1;
    }
}