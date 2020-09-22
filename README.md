# Navedex 🚀

### Web app para visualização e criação dos navers, possuindo informações como:   
Nomes, idades, cargos, tempo de empresa e projetos que participou.

------------------------------------------------------------

<p align="center">
   <img src=".github/image1.png" width="300"/>
   <img src=".github/image2.png" width="300"/>
   <img src=".github/image3.png" width="300"/> 
</p>

<p align="center">
   <img src=".github/image4.png" width="300"/>
   <img src=".github/image5.png" width="300"/>
   <img src=".github/image6.png" width="300"/> 
</p>

<p align="center">
   <img src=".github/image7.png" width="300"/>
   <img src=".github/image8.png" width="300"/>
   <img src=".github/image9.png" width="300"/> 
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/maicon-boer-35210797/">
      <img alt="Maicon Boer" src="https://img.shields.io/badge/-MaiconBoer-2F55CC?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-2F55CC">
  <a href="https://github.com/maiconboer/navedex/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/maiconboer/bossabox-userful-tools?color=2F55CC&logo=github">
  </a>
</p>


# Especificações

* [Tecnologias](#computer-tecnologias)
* [Funcionalidades](#rocket-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)

# :computer: Tecnologias
Utiliza as seguintes tecnologias:

**Front-end: Web**
<ul>
  <li>ReactJS</li>
  <li>Styled-Components</li>
  <li>Axios</li>
</ul>

**Back-end**
<ul>
  <li>API fornecida pela Nave.rs</li>
</ul>

# :rocket: Funcionalidades

### Login
A web app deverá possui um fluxo de autenticação, onde o usuário só pode acessar as telas internas do sistema (listagem, formulários) passando pela tela de login com as credenciais criadas previamente.

### Listagem
A página inicial da aplicação (home) lista os navers cadastrados.

### Visualização
Ao clicar em algum naver da listagem, o usuário tem uma visualização completa das informações do mesmo.

### Criação/edição
O usuário criar um novo naver ou editar um já existente.

### Detalhes   

O title de cada página muda de acordo com as rotas.

Possui validação de e-mail no login.
No cadastro Naver, possui validação em 3 campos:

- ```name``` (Necessário ao menos 3 caracteres).
- ```job_role``` (Necessário ao menos 3 caracteres).  
- ```url``` (Necessário ao menos 5 caracteres).

**Se estes campos não possuirem estas quantidades mínimas de caracteres, não realiza o post, retorna erro.**  

# :construction_worker: Como rodar
```bash
# Clone o Repositorio
$ git clone https://github.com/maiconboer/navedex.git
```
### 🚀 Rode a aplicação

```bash
# Acesse a pasta principal do projeto (navedex).
$ cd navedex
# Instale as depedencias
$ yarn install
# Inicie a aplicação
$ yarn start
```
Aplicação rodando no endereço: http://localhost:3000

**Para efetuar login, é necessário criar o usuário, fazendo um post na rota ```{{apiUrl}}/users/signup``` enviando e-mail e senha no corpo da requisição.**


