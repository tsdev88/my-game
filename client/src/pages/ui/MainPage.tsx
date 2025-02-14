import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../shared/api/lib/hook';
import {
    getCategories,
    getJavascript,
    getMusic,
    getReact,
    getScience,
    getSport
} from '../../entities/category/model/redux/categoryThunks';
import styles from './MainPage.module.css'
import ModalQuestion from "../../widgets/ui/ModalQuestion/ModalQuestion.tsx";
import {setSelected} from "../../entities/category/model/redux/categorySlice.ts";

export default function MainPage(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const {categories, music, sport, react, javascript, science} = useAppSelector((state) => state.category);

    useEffect(() => {
        void dispatch(getCategories())
        void dispatch(getMusic())
        void dispatch(getSport())
        void dispatch(getReact())
        void dispatch(getJavascript())
        void dispatch(getScience())
    }, []);


    console.log({music})
    return (
        <div className={styles.container}>
            <div className={styles.categories}>
                {categories.map((category) => (
                    <h1 key={category.id}>{category.name}</h1>
                ))}
            </div>
            <div className={styles.buttons}>
                <div className={styles.music}>
                    {music.map((question) => (
                        <>
                            <button className={styles.btnActive}
                                    onClick={() => dispatch(setSelected(question))}>{question.score}</button>
                            <ModalQuestion key={question.id}/>
                        </>
                    ))}
                </div>
                <div className={styles.music}>
                    {sport.map((question) => (
                        <>
                            <button className={styles.btnActive}
                                    onClick={() => dispatch(setSelected(question))}>{question.score}</button>
                            <ModalQuestion key={question.id}/>
                        </>
                    ))}
                </div>
                <div className={styles.music}>
                    {science.map((question) => (
                        <>
                            <button className={styles.btnActive}
                                    onClick={() => dispatch(setSelected(question))}>{question.score}</button>
                            <ModalQuestion key={question.id}/>
                        </>
                    ))}
                </div>
                <div className={styles.music}>
                    {react.map((question) => (
                        <>
                            <button className={styles.btnActive}
                                    onClick={() => dispatch(setSelected(question))}>{question.score}</button>
                            <ModalQuestion key={question.id}/>
                        </>
                    ))}
                </div>
                <div className={styles.music}>
                    {javascript.map((question) => (
                        <>
                            <button className={styles.btnActive}
                                    onClick={() => dispatch(setSelected(question))}>{question.score}</button>
                            <ModalQuestion key={question.id}/>
                        </>
                    ))}
                </div>

            </div>
        </div>
    );
}

