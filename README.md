# Personal Project 3 — Функції для роботи зі строками

Цей проєкт демонструє та практикує написання та тестування різних функцій, які оперують рядками (напр., обтинання, перевертання, пошук, повторення тощо), з використанням Jest.

---

## 🎯 Мета

- Реалізувати набір корисних функцій для роботи зі строками: `trim`, `reverse`, `repeat` тощо.
- Покрити ці функції тестами, враховуючи граничні випадки, некоректні вхідні дані та різні сценарії.
- Поглибити навички роботи з Jest: матчери, перевірки помилок, покриття коду.

---

## 📂 Структура репозиторію

```
/
├── src/
│   └── (файли з реалізацією функцій для роботи зі строками)
├── tests/
│   └── (Jest‑тести для цих функцій)
├── package.json
└── package-lock.json
```

- `src/` — вихідний код функцій  
- `tests/` — тести  
- `package.json` — залежності та скрипти  

---

## 🛠 Встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/OleksiyZaluzhnyi/PP3-Functions-for-working-with-strings.git
   cd PP3-Functions-for-working-with-strings
   ```

2. Встановіть залежності:

   ```bash
   npm install
   ```

---

## ✅ Запуск тестів та покриття

- Щоб запустити всі тести:

  ```bash
  npm test
  ```

- Щоб запустити тести з показом покриття:

  ```bash
  npm test -- --coverage
  ```

Після цього отримаєте висновок з відсотками покриття за рядками, гілками, функціями тощо. Також можна переглянути HTML‑звіт: `coverage/lcov-report/index.html`.

---

## 📊 Покриття (Coverage)

Рекомендовано:

- Перевіряти всі функції на стандартні та граничні випадки.  
- Тестувати неправильні аргументи (не строки).  
- Покривати різні гілки (if/else) всередині функцій.

Можна також встановити мінімальні пороги покриття в `package.json`:

```json
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  }
}
```

---

## 🧪 Тестування помилок

- Якщо функція кидає помилку (throw):

```js
expect(() => fn()).toThrow();
```

- Якщо функція повертає об’єкт `Error`:

```js
expect(result).toBeInstanceOf(Error);
expect(result.message).toBe("Очікуване повідомлення про помилку");
```

---

## 📌 Приклад використання функцій

```js
const { reverseString, repeatString, trimString } = require('./src/stringUtils');

console.log(reverseString("hello"));   // "olleh"
console.log(repeatString("ab", 3));    // "ababab"
console.log(trimString("  hi  "));     // "hi"
```
