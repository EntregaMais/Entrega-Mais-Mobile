# Entrega-Mais-Mobile

### Instruções de instalação
1. Clone o projeto
2. Abra o diretório raiz do projeto
3. Abra o terminal e rode `npm start`

### Docs API
https://documenter.getpostman.com/view/22927633/2s8YmSsftk

### Environments

```
npm start
```

- Inicia o projeto normalmente, 
- Utiliza ultimo cache que foi feito o build

```
npm start:dev:john
```

- Copia os arquivos de `.env.dev.john` para `.env`
- Remove cache de build do expo, forçando build

```
npm start:dev:diego
```

- Copia os arquivos de `.env.dev.diego` para `.env`
- Remove cache de build do expo, forçando build

```
npm start:prod
```

- Copia os arquivos de `.env.prod` para `.env`
- Aponta para instância do Azure