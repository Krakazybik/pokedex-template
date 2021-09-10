# PokedeX

### Этап 1

#### Задача 0
- Форкаем данный репозиторий.
- Внимание! <b>В проекте используется `yarn`</b> Устанавливаем все зависимости. `yarn` или `yarn install`.
- Настраиваем `ESLint` на автоматическое исправление с использованием конфига `.eslintrc.json`.
- Каждый этап выполняется в отдельной ветке с префиксом `feature-`. Пример: `feature-pokeapi`. Для переключения на другую ветку используем `git checkout -b feature-pokeapi`. <br>
:page_with_curl: [GIT](https://marklodato.github.io/visual-git-guide/index-ru.html) <br>

#### Задача 1
- Создаём файл /src/api/pokeapi.ts в котором описываем объект PokeAPI.
- Работу с `REST API` осуществляем с помощью библиотеки `axios`.
- Созадём `async` метод
  `getPokemonsWithLimit(limit = 20)`.
  возвращающией объект с пачкой покемоенов и сохраняем offset из строки с ссылкой на следующий поиск в свойство `nextOffset`
- При повторном вызове метода `getPokemonsWithLimit()` возвращает пачку со смещением на `offset`.
- Описываем все необходимые типы, ипользование `any` не допускается. <br>
:page_with_curl: [PokeAPI](https://pokeapi.co/docs/v2) <br>
:page_with_curl: [REST API](https://habr.com/ru/post/351890/) <br>
:page_with_curl: [axios](https://www.digitalocean.com/community/tutorials/react-axios-react-ru) <br>
:page_with_curl: [RegExp](https://learn.javascript.ru/regular-expressions) <br>

#### Задача 2
- Описываем метод `getDreamWorldSprite` получающий изображение покемона на основе ссылок полученных из предыдущей задачи. Подсказка: `sprites.other.dream_world.front_default`.
- Создаём компонент `Image`, отрисовывающий прелоадер во время загрзки изоборажения. <br>
:page_with_curl: [CssLoading](https://loading.io/css/) <br>
:page_with_curl: [Classnames](https://www.npmjs.com/package/classnames) <br>
:page_with_curl: [Handlig Events](https://ru.reactjs.org/docs/handling-events.html) <br>
:page_with_curl: [Images Events](https://ru.reactjs.org/docs/events.html#image-events) <br>

#### Задача 3
- Создаём компонент `Pokemon`, получающий изображение, и отрисовывающий имя покемона и его изображение с помощью компонента `Image`.
- Создаём компонент `PokemonsList`, получающий список покемонов и отображающий их с помощью компонента `Pokemon`.
- При открытии главной страницы отображаем покемонов. <br>
:page_with_curl: [useState](https://learn-reactjs.ru/core/hooks/state-hook) <br>
:page_with_curl: [useEffect](https://learn-reactjs.ru/core/hooks/effect-hook) <br>


#### Задача 4
- Пишем юнит тест на компонент `PokemonsList`. Перехватываем API средствами `MSW`. Проверяем наличие покемново на странице после получения данных с сервера.
- Описываем хендлеры для `*/pokemon` и `*/pokemon/:id`.
- Настраиваем `setupTests.ts` для работы с `MSW`. <br>
:page_with_curl: [MSW React Example](https://github.com/mswjs/examples/tree/master/examples/rest-react) <br>
:page_with_curl: [MSW Mocking REST API](https://mswjs.io/docs/getting-started/mocks/rest-api) <br>
:page_with_curl: [RTL](https://testing-library.com/docs/react-testing-library/intro/) <br>


### Этап 2

#### Задача 1
- Подключаем `Redux`, средствами `@reduxjs/toolkit` создаём стор и слайс для хранения данных покемонов.
- Создаём асинхронную thunk функцию, получающу покемонов с помощью апи и сохраняющую их в стрей. <br>
:page_with_curl: [RTK](https://redux-toolkit.js.org/tutorials/quick-start) <br>
:page_with_curl: [RTK createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) <br>


#### Задача 2
- Подключаем компонент `PokemonList` к `Redux`, к созданному ранее стейту, работу с апи осуществляем средствами `Redux`.
- При достижении скроллом конца экрана, подгружаем следующую пачку покемонов. <br>
:page_with_curl: [React SyntheticEvent](https://ru.react.js.org/docs/events.html) <br>


#### Задача 3
- Создаём компонент `VirtualScroll` который получаем список покемонов в виде потомков.
- Всю логикы работу со скроллом переносим в `VirtualScroll`.
- Реализуем работу виртуального скроллинга. <br>
:page_with_curl: [Virtual Scrolling](https://blog.logrocket.com/virtual-scrolling-core-principles-and-basic-implementation-in-react/) <br>
:page_with_curl: [useRef](https://reactjs.org/docs/hooks-reference.html#useref) <br>