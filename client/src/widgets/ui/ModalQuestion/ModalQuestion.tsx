import React from 'react';
import styles from './ModalQuestion.module.css'
import {Bounce, toast, ToastContainer} from "react-toastify";

// Моковые данные, удалить и вставить данные с бд
const mockQuestion = {
    question: "Кто написал 'Лунную сонату'?",
    answers: "Бах, Бетховен, Моцарт",
    correctAnswer: "Бетховен",
    score: 600,
}

// Переделать полностью компонент, вставить данные с бд
export default function ModalQuestion(): React.JSX.Element {

    const notify = () => toast('Ответ неверный, попробуй еще раз');


    const submit = (e) => {
        e.preventDefault();
        if (e.target.value === mockQuestion.correctAnswer) {
            alert('Правильно')
        } else {
            notify()
        }
    }

    return (
        <div>
            <button className={styles.modalBtn}>{mockQuestion.score}</button>
            {mockQuestion && ( //Снять заглушку
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <h1 className={styles.title}>{mockQuestion.question}</h1>
                        <form onChange={(e) => submit(e)}>
                            <div className={styles.inputs}>
                                <div className={styles.inputDiv}>
                                    <h1>1.</h1>
                                    <div>
                                        <input type="radio" name="question"
                                               value={mockQuestion.answers.split(', ')[0]}
                                               id={mockQuestion.answers.split(', ')[0]}
                                               className={styles.input}
                                        /><label
                                        htmlFor={mockQuestion.answers.split(', ')[0]}
                                        className={styles.label}>{mockQuestion.answers.split(', ')[0]}</label>
                                    </div>
                                </div>
                                <div className={styles.inputDiv}>
                                    <h1>2.</h1>
                                    <div>
                                        <input type="radio" name="question"
                                               value={mockQuestion.answers.split(', ')[1]}
                                               id={mockQuestion.answers.split(', ')[1]}
                                               className={styles.input}

                                        /><label
                                        htmlFor={mockQuestion.answers.split(', ')[1]}
                                        className={styles.label}>{mockQuestion.answers.split(', ')[1]}</label>
                                    </div>
                                </div>
                                <div className={styles.inputDiv}>
                                    <h1>3.</h1>
                                    <div>
                                        <input type="radio" name="question"
                                               value={mockQuestion.answers.split(', ')[2]}
                                               id={mockQuestion.answers.split(', ')[2]}
                                               className={styles.input}

                                        /><label
                                        htmlFor={mockQuestion.answers.split(', ')[2]}
                                        className={styles.label}>{mockQuestion.answers.split(', ')[2]}</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={true}
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable
                            pauseOnHover={false}
                            theme="light"
                            transition={Bounce}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
