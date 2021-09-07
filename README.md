# PokedeX

### Этап 1

#### Задача 0
- Форкаем `git@github.com:Krakazybik/pokedex.git`.
- Внимание! <b>В проекте используется `yarn`</b> Устанавливаем все зависимости. `yarn` или `yarn install`.
- Настраиваем `ESLint` на автоматическое исправление с использованием конфига `.eslintrc.json`.
- Каждый этап выполняется в отдельной ветке с префиксом `feature-`. Пример: `feature-pokeapi`. Для переключения на другую ветку используем `git checkout -b feature-pokeapi`.
:page_with_curl: [GIT](https://marklodato.github.io/visual-git-guide/index-ru.html) <br>

#### Задача 1
- Создаём файл /src/api/pokeapi.ts в котором описываем объект PokeAPI.
- Работу с `REST API` осуществляем с помощью библиотеки `axios`.
- Созадём `async` метод
  `getPokemonsWithLimit(limit = 20)`.
  возвращающией объект с пачкой покемоенов и сохраняем offset из строки с ссылкой на следующий поиск в свойство `nextOffset`
- При повторном вызове метода `getPokemonsWithLimit()` возвращает пачку со смещением на `offset`.
- Описываем все необходимые типы, ипользование `any` не допускается.
:page_with_curl: [PokeAPI](https://pokeapi.co/docs/v2) <br>
:page_with_curl: [REST API](https://habr.com/ru/post/351890/) <br>
:page_with_curl: [axios](https://www.digitalocean.com/community/tutorials/react-axios-react-ru) <br>
:page_with_curl: [RegExp](https://learn.javascript.ru/regular-expressions) <br>

#### Задача 2
- Описываем метод `getDreamWorldSprite` получающий изображение покемона на основе ссылок полученных из предыдущей задачи. Подсказка: `sprites.other.dream_world.front_default`.
- Создаём компонент `Image`, отрисовывающий прелоадер во время загрзки изоборажения.
:page_with_curl: [CssLoading](https://loading.io/css/) <br>
:page_with_curl: [Classnames](https://www.npmjs.com/package/classnames) <br>
:page_with_curl: [Handlig Events](https://ru.reactjs.org/docs/handling-events.html) <br>
:page_with_curl: [Images Events](https://ru.reactjs.org/docs/events.html#image-events) <br>

#### Задача 3
- Создаём компонент `Pokemon`, получающий изображение, и отрисовывающий имя покемона и его изображение с помощью компонента `Image`.
- Создаём компонент `PokemonsList`, получающий список покемонов и отображающий их с помощью компонента `Pokemon`.
- При открытии главной страницы отображаем покемонов.
:page_with_curl: [useState](https://learn-reactjs.ru/core/hooks/state-hook) <br>
:page_with_curl: [useEffect](https://learn-reactjs.ru/core/hooks/effect-hook) <br>


#### Задача 4
- Пишем юнит тесты на компонент `PokemonsList`.
- Описываем хендлеры для `*/pokemon` и `*/pokemon/:id`.
- Настраиваем `setupTests.ts` для работы с `MSW`.
:page_with_curl: [MSW React Example](https://github.com/mswjs/examples/tree/master/examples/rest-react) <br>
:page_with_curl: [MSW Mocking REST API](https://mswjs.io/docs/getting-started/mocks/rest-api) <br>
:page_with_curl: [RTL](https://testing-library.com/docs/react-testing-library/intro/) <br>