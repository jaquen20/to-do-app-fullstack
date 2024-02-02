
## Tech Stack

 ### Backend:
 - **Java:**
  - Spring Boot
  - Spring Data JPA
  - Spring Security
  - MySQL Database

### Frontend 
- **JavaScript:**
  - React
  - Axios (for API communication)
  - Bootstrap

  ### Project Setup and Local Run Guide
- **Prerequisites:**
  - Java installed
  - Node.js installed
  - Spring Security
  - MySQL installed and running

-**Backend(Spring Boot)**

 - Step 1: Clone the Repository
   - git clone https://your-repo-url.git
    - cd your-project-directory
    
- Step 2: Set Up MySQL Database

    - Create a MySQL database with the name your_database_name.

    - Open src/main/resources/application.properties and update the database connection properties:
     - spring.datasource.url=jdbc:mysql:/ /localhost:3306/your_database_name 
     - spring.datasource.username=your_mysql_username
     - spring.datasource.password=your_mysql_password

- Step 3: Run Spring Boot Application
     - Open the project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).
     - Build and run the TodoApp class.  
     - The Spring Boot backend should now be running at http://localhost:8080.  

- **Frontend (React)**
  - Step 1: Navigate to Frontend Directory    
      - cd your-project-directory/frontend
  - Step 2: Install Dependencies    
      -npm install
  - Step 3: Start React Application
      -npm start
      - The React frontend should now be running at http://localhost:3000.

-**Accessing the Application**

- Open your web browser and go to http://localhost:3000 to access the React frontend.
- Use Postman or your preferred API testing tool to interact with the Spring Boot backend API at http://localhost:8080


