# Doatap

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<!-- We used ReactJS Framework for the front-end and NodeJS (using the ExpressJS framework) connected with a mongoDB Database for the back-end. Users can create applications (temporary saved, and final submission), they can see the list of their applications. For each application they can see a status and maybe some comments from the admins. The application can be edited by the user at any time, and the admin can see only the applications that are in final submission -->

### :hammer_and_wrench: Installation & Setup

---

#### Necessary dependencies:

> - Node.js
>   [Download for Windows](https://nodejs.org/dist/v16.13.2/node-v16.13.2-x86.msi) | [Website for Download](https://nodejs.org/en/download/)

> - MongoDB Community Server
>   [Download for Windows](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.5-signed.msi) | [Website for Download](https://www.mongodb.com/try/download/community)
>   After installing the MongoDB Community Server, you must add to the **Path** Environment Variable the bin folder path. (From default should be in the **C:\Program Files\MongoDB\Tools\\{current-version}\bin**)

> - MongoDB Database Tools
>   [Download for Windows](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.5.1.msi) | [Website for Download](https://www.mongodb.com/try/download/database-tools)
>   After installing the MongoDB Database Tools, you must add to the **Path** Environment Variable the bin folder path. (From default should be in the **C:\Program Files\MongoDB\Server\\{current-version}\bin**)

---

After Installing the dependencies above you must follow the steps below:
1. Open a terminal  to the project folder.

2. Restore the Database by running the following command:

```[bash]
mongorestore --db doatap ./DoatapDB
```

This command wiil take all the collections and schemas from the **DoatapDB** folder and create a new database called **doatap**.

2. Build the project by running the following command:

```[bash]
npm run build
```

This can take a while, so be patient.

3. Run the project by running the following command:

```[bash]
npm run start
```

Now both the front-end, the back-end and the database are running on your local machine!

4. Go to the [http://localhost:3000/](http://localhost:3000/) in order to visit the website. Admin panel is available at [http://localhost:3000/admin](http://localhost:3000/admin/) but keep it a secret ;).

### :package: Packages, Services and Frameworks

The web app was created using the MERN stack with the following technologies:

**Backend:**

- MongoDB as the main database for storing most of the user-created content because of the scalability it provides in collections and mongoose because the straight forward ODM for storing user data.
- NodeJS & ExpressJS
- JsonWebTokens (JWT) for user authentication
- Bcrypt for hashing user passwords before storing them in the database
- Multer for uploading media files(mainly images)

**Frontend**:

- ReactJS
- Chakra as a UI Framework
- Redux for state management
- Axios as api client

### General Information

We focused making the application flow as functional as possible. We have fully working application creation, editing, and the admin panel is fully functional. Admin can **view**, **approve**, **reject** and **add comments** to an appilication.
