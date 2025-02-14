import React from 'react';
import styles from './ModalQuestion.module.css'
import {Bounce, toast, ToastContainer} from "react-toastify";
import {setSelected} from "../../../entities/category/model/redux/categorySlice.ts";
import {useAppDispatch, useAppSelector} from "../../../shared/api/lib/hook.ts";


export default function ModalQuestion(): React.JSX.Element {

    const chosenQuestion = useAppSelector(store => store.category.chosenQuestion)

    const notify = () => toast('Ответ неверный, попробуй еще раз');
    const notify2 = () => toast('Верно!');

    const dispatch = useAppDispatch()

    console.log(chosenQuestion)
    const submit = (e) => {
        e.preventDefault();
        if (e.target.value === chosenQuestion.correctAnswer) {
            dispatch(setSelected(null))
            alert('Верный ответ')
        } else {
            notify()
        }
    }

    return (
        <div>
            {chosenQuestion && (
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <h1 className={styles.title}>{chosenQuestion.question}</h1>
                        <form onChange={(e) => submit(e)}>
                            <div className={styles.inputs}>
                                <div className={styles.inputDiv}>
                                    <h1>1.</h1>
                                    <div>
                                        <input type="radio" name="question"
                                               value={chosenQuestion.answers.split(', ')[0]}
                                               id={chosenQuestion.answers.split(', ')[0]}
                                               className={styles.input}
                                        /><label
                                        htmlFor={chosenQuestion.answers.split(', ')[0]}
                                        className={styles.label}>{chosenQuestion.answers.split(', ')[0]}</label>
                                    </div>
                                </div>
                                <div className={styles.inputDiv}>
                                    <h1>2.</h1>
                                    <div>
                                        <input type="radio" name="question"
                                               value={chosenQuestion.answers.split(', ')[1]}
                                               id={chosenQuestion.answers.split(', ')[1]}
                                               className={styles.input}

                                        /><label
                                        htmlFor={chosenQuestion.answers.split(', ')[1]}
                                        className={styles.label}>{chosenQuestion.answers.split(', ')[1]}</label>
                                    </div>
                                </div>
                                <div className={styles.inputDiv}>
                                    <h1>3.</h1>
                                    <div>
                                        <input type="radio" name="question"
                                               value={chosenQuestion.answers.split(', ')[2]}
                                               id={chosenQuestion.answers.split(', ')[2]}
                                               className={styles.input}

                                        /><label
                                        htmlFor={chosenQuestion.answers.split(', ')[2]}
                                        className={styles.label}>{chosenQuestion.answers.split(', ')[2]}</label>
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
                        <button onClick={() => dispatch(setSelected(null))} className={styles.closedBtn}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
