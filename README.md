# hacktivpress
A simple CMS blog using express as a backend, mongoose as ODM and vue as front end framework.

### Installation
1. Go to server folder and type `npm install`
2. Go to client folder and type `npm install`
3. In server folder type `npm start`
4. In client folder type `npm run dev`

### REST API
List of user routes:

|Route|HTTP|Description|
|-----|----|----------|
|/api/user/signup|POST|sign up a new user|
|/api/user/signin|POST|sign in a user|

List of article routes:

|Route|HTTP|Description|
|-----|----|----------|
|/api/article|GET|get all article|
|/api/article/:articleId|GET|get one article|
|/api/article/create|POST|create new article|
|/api/article/edit/:articleId|PUT|update one article|
|/api/article/:userId|GET|get one article based on its author|
|/api/article/findByCategory/:categoryName|GET|get all article based on its category|
|/api/article/findByAuthor/:userId|GET|get all article based on its author (user)|
|/api/article/delete/:articleId|DELETE|delete one article|

