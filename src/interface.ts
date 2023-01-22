import React from "react";

// For Todo interface
export interface TodoInterface {
    id: number;
    name: string;
    isCompleted: boolean;
}

// For Todo form interface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}

//For Todo list interface
export interface TodoListInterface{
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleTodoRemove: (id: number) => void;
    handleTodoComplete: (id: number) => void;
    todos: TodoInterface[]
}

//For Todo item interface
export interface TodoItemInterface{
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleTodoRemove: (id: number) => void;
    handleTodoComplete: (id: number) => void;
    todo: TodoInterface;
}

