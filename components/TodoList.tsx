"use client"; // Ensures the component runs on the client-side

import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtom'; // Adjust path accordingly
import { useState, useEffect } from 'react';
import styles from '../styles/TodoList.module.css'; 

const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoListState);
    const [newTask, setNewTask] = useState(''); 
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const [editIndex, setEditIndex] = useState<number | null>(null); // Track the task being edited
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    // Load todos from localStorage on initial render
    useEffect(() => {
        const storedTodos = localStorage.getItem('todo-list');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [setTodos]);

    // Save todos to localStorage when they change
    useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (newTask.trim() === '') {
            setErrorMessage('Task cannot be empty');
            return;
        }
        if (!date) {
            setErrorMessage('Please select a date');
            return;
        }

        // Check if we're editing an existing task
        if (editIndex !== null) {
            // Update the task at the edit index
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = {
                task: newTask,
                description,
                date,
                priority,
                completed: todos[editIndex].completed, // Preserve the completed status
            };
            setTodos(updatedTodos);
            setEditIndex(null); // Exit edit mode
        } else {
            // Add a new task
            setTodos((prevTodos) => [
                ...prevTodos,
                { task: newTask, description, date, priority, completed: false },
            ]);
        }

        // Clear inputs and error message
        setNewTask('');
        setDescription('');
        setDate('');
        setPriority('');
        setErrorMessage('');
    };

    const markAsCompleted = (index: number) => {
        setTodos((prevTodos) => {
            const newTodos = [...prevTodos];
            newTodos[index] = {
              ...newTodos[index],
              completed: !newTodos[index].completed
            };
            return newTodos;
        });
    };

    const editTask = (index: number) => {
        const task = todos[index];
        setNewTask(task.task);
        setDescription(task.description);
        setDate(task.date);
        setPriority(task.priority);
        setEditIndex(index); // Set the index to be edited
    };

    const deleteTask = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
        if (editIndex === index) {
            // If the task being edited is deleted, reset the edit state
            setEditIndex(null);
        }
    };

    return (
        <div className={styles.todoContainer}>
            <h1 className={styles.title}>Todo List</h1>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>} {/* Display error message */}
            <div className={styles.form}>
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    placeholder="Enter new task"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    className={styles.inputField}
                />
                <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={styles.inputField}
                />
                <select   
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className={styles.inputField}
                >
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button id={styles.addtask} onClick={addTodo} disabled={!newTask || !date}>
                    {editIndex !== null ? 'Update Task' : 'Add Task'}
                    
                </button> {/* Change button text based on edit mode */}
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? styles.completed : ''}>
                        <div>
                            <strong>Task:</strong> {todo.task}
                        </div>
                        <div>
                            <strong>Description:</strong> {todo.description}
                        </div>
                        <div>
                            <strong>Date:</strong> {todo.date}
                        </div>
                        <div>
                            <strong>Priority:</strong> {todo.priority}
                        </div>
                        <button className={styles.completeButton} onClick={() => markAsCompleted(index)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button className={styles.completeButton} onClick={() => deleteTask(index)}>Delete</button>
                        <button className={styles.completeButton} onClick={() => editTask(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
