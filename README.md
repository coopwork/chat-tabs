# Test task Chat on React + TypeScript + Vite

Вариантов исполнить тестовое задание достаточно, выбрал наиболее простой способ так как нюанс с сохранением сообщений в чатах подразумевает один из таких способов хранения а так же использования данных.
Можно было реализовать через React portal либо BroadcastChannel API но в любом случае понадобился бы какой то storage для сохранения и последующей загрузки сообщений.

Тестовое задание:  
симулятор чата, (без бэка, только в браузере) при открытии приложения должен появится выбор пользователя(заранее прописанных), при выборе открывается чат, если открыть приложение в разных вкладках браузера можно будет войти как разные пользователи, в списке доступных чатов должны быть остальные пользователи, если открыть чат в разных вкладках браузера сообщения отправленные из одной владки пользователю из другой должны появляться в чате, внешний вид примерно как у телеграма(не обязательно, можно на свое усмотрение), плюсом будет если написать пользователю сообщения, и только потом открыть вкладку с этим пользователем появатся ранее написанные сообщения
PS: Тестовое задание выполнено менее чем за полдня.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
