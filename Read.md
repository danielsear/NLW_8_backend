> npm i typescript @types/node ts-node-dev -D

> npx tsc --init

> npm i express
> npm i @types/express

banco de dados>

> npm i prisma -D //ORM
> npm i @prisma/client
> npx prisma init

para criar a tabela, manipulando o schema.prisma

> npx prisma migrate dev

para ver interface do prisma que mostra as tabelas, ir navegador > http://localhost:5555

> npx prisma studio

biblioteca para receber email

> npm i nodemailer
> npm i @types/nodemailer

////////////////////////////////////////////////////////////////////////////////////////////
fazer cadastro no site https://mailtrap.io/ , para controle de envio de emails

Principios SOLID
1- Single responsibility principe
2- open/closed principe
3-liskov substitution principe
4-interface segregation principe
5-dependency inversion principe

1 *cada classe tem uma responsabilidade única;
2 *as classes da nossa apicação devem ser abertas para extensão mas fechadas para modificações;
3 *nós devemos poder substituir uma classe pai por herança dela e tudo continuar funcionando;
4 ...
5 *uma forma de inverter as dependências de uma classe

/////////////////////////////////////////////////////////////////////////////////////////////////////////
