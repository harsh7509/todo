// pages/page.tsx
import TodoList from '../components/TodoList';
import styles from '../styles/TodoList.module.css'; // Import your styles

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Todo List App</h1>
            <div className={styles.todoContainer}>
                <TodoList />
            </div>
        </div>
    );
}
