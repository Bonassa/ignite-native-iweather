<p align="center">
  <img src="https://xesque.rocketseat.dev/platform/1659122823166.svg" alt="React Native">
</p>

# iWeather
Projeto utilizado para aprendizado de testes no React Native

## Testes Unitários
São testes que avaliam a menor parte do software, verificando seu funcionamento isoladamente.
Para a implementação de testes unitários foi utilizado o [Jest](https://jestjs.io/pt-BR/)

### Jest
- Instalação:
```bash
  npx expo install jest-expo jest

  npm i --save-dev @types/jest
```

- Criar arquivo de configuração *jest.config.json*

## Testes de Componentes
Assim como os testes unitários, esses testes visam validar as unidades que compõem a interface da aplicação.
Para esse teste foi utilizado o [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

### React Native Testing Library
- Instalação:
```bash
  npm install --save-dev @testing-library/react-native

  npm install --save-dev @testing-library/jest-native
```

- Atualizar o arquivo *jest.config.json*

## Testando Nativo
Como estamos realizando testes no react-native, e ele roda em um hardware diferente do ambiente onde desenvolvemos, precisamos realizar algumas configurações a mais para poder testar cada biblioteca que utiliza código nativo.

- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/advanced/jest)
- [Svg](https://www.npmjs.com/package/jest-transformer-svg)