'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [
     {
       name: 'Joe',
       email: 'joe@example.com',
       score: 0,
       password: await bcrypt.hash('123', 10),
     }
   ])

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Музыка'
      },
      {
        name: 'Спорт'
      },
      {
        name: 'Наука'
      },
      {
        name: 'Реакт'
      },
      {
        name: 'Джаваскрипт'
      }
    ])

    await queryInterface.bulkInsert('Questions', [
      {
        question: 'Сколько существует нот?',
        answers: '7, 5, 8',
        correctAnswer: '7',
        score: 200,
        categoryId: 1
      },
      {
        question: "Какой инструмент считается струнным?",
        answers: "Труба, Гитара, Ударные",
        correctAnswer: "Гитара",
        score: 400,
        categoryId: 1
      },
      {
        question: "Кто написал 'Лунную сонату'?",
        answers: "Бах, Бетховен, Моцарт",
        correctAnswer: "Бетховен",
        score: 600,
        categoryId: 1
      },
      {
        question: "Какой стиль музыки возник в 20-х годах 20 века?",
        answers: "Рок, Джаз, Классическая",
        correctAnswer: "Джаз",
        score: 800,
        categoryId: 1
      },
      {
        question: "Сколько октав в стандартной клавиатуре пианино?",
        answers: "5, 7, 8",
        correctAnswer: "7",
        score: 1000,
        categoryId: 1
      },
      {
        question: "Какой вид спорта считается королем спорта?",
        answers: "Футбол, Баскетбол, Теннис",
        correctAnswer: "Футбол",
        score: 200,
        categoryId: 2
      },
      {
        question: "Сколько игроков в команде по волейболу?",
        answers: "6, 5, 7",
        correctAnswer: "6",
        score: 400,
        categoryId: 2
      },
      {
        question: "Кто выиграл чемпионат мира по футболу в 2018 году?",
        answers: "Бразилия, Германия, Франция",
        correctAnswer: "Франция",
        score: 600,
        categoryId: 2
      },
      {
        question: "Какой вид спорта включает в себя элементы акробатики и танца?",
        answers: "Фигурное катание, Лыжи, Плавание",
        correctAnswer: "Фигурное катание",
        score: 800,
        categoryId: 2
      },
      {
        question: "Какой спорт считается самым популярным в США?",
        answers: "Американский футбол, Бейсбол, Баскетбол",
        correctAnswer: "Американский футбол",
        score: 1000,
        categoryId: 2
      },

      {
        question: "Какой элемент имеет химический символ 'H'?",
        answers: "Гелий, Водород, Азот",
        correctAnswer: "Водород",
        score: 200,
        categoryId: 3
      },
      {
        question: "Кто разработал теорию относительности?",
        answers: "Ньютон, Эйнштейн, Коперник",
        correctAnswer: "Эйнштейн",
        score: 400,
        categoryId: 3
      },
      {
        question: "Как называется процесс, при котором растения производят кислород?",
        answers: "Фотосинтез, Дыхание, Испарение",
        correctAnswer: "Фотосинтез",
        score: 600,
        categoryId: 3
      },
      {
        question: "Что изучает астрономия?",
        answers: "Землю, Звезды, Животных",
        correctAnswer: "Звезды",
        score: 800,
        categoryId: 3
      },
      {
        question: "Какой закон гласит, что энергия не может быть создана или уничтожена?",
        answers: "Закон сохранения массы, Закон сохранения энергии, Закон термодинамики",
        correctAnswer: "Закон сохранения энергии",
        score: 1000,
        categoryId: 3
      },

      {
        question: "Что такое JSX в React?",
        answers: "JavaScript XML, JavaScript Xtreme, JavaScript Extension",
        correctAnswer: "JavaScript XML",
        score: 200,
        categoryId: 4
      },
      {
        question: "Какой метод используется для обновления состояния компонента?",
        answers: "setState, updateState, changeState",
        correctAnswer: "setState",
        score: 400,
        categoryId: 4
      },
      {
        question: "Что такое props в React?",
        answers: "Состояние компонента, Свойства компонента, События компонента",
        correctAnswer: "Свойства компонента",
        score: 600,
        categoryId: 4
      },
      {
        question: "Какой хук используется для управления состоянием в функциональных компонентах?",
        answers: "useEffect, useState, useContext",
        correctAnswer: "useState",
        score: 800,
        categoryId: 4
      },
      {
        question: "Какой метод жизненного цикла вызывается сразу после монтирования компонента?",
        answers: "componentDidMount, componentWillMount, componentDidUpdate",
        correctAnswer: "componentDidMount",
        score: 1000,
        categoryId: 4
      },

      {
        question: "Какой оператор используется для присваивания значений?",
        answers: "==, =, ===",
        correctAnswer: "=",
        score: 200,
        categoryId: 5
      },
      {
        question: "Что такое замыкание в JavaScript?",
        answers: "Функция, которая возвращает значение, Функция, которая запоминает контекст, Функция, которая не имеет параметров",
        correctAnswer: "Функция, которая запоминает контекст",
        score: 400,
        categoryId: 5
      },
      {
        question: "Какой метод массива используется для добавления элемента в конец?",
        answers: "push, pop, shift",
        correctAnswer: "push",
        score: 600,
        categoryId: 5
      },
      {
        question: "Какой метод используется для преобразования строки в число?",
        answers: "parseInt, toString, Number",
        correctAnswer: "parseInt",
        score: 800,
        categoryId: 5
      },
      {
        question: "Какой оператор используется для сравнения значений и типов?",
        answers: "==, ===, =",
        correctAnswer: "===",
        score: 1000,
        categoryId: 5
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
