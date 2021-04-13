export interface TodoItem {
    description: string
}

export class TodoItem implements TodoItem {
    constructor(description: string) {
        this.description = description;
    }
}