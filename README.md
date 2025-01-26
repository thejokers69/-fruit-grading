# **Fruit Grading Admin Dashboard**

This project is a web application designed to visualize and manage the historical data of fruit samples analyzed by a grading analyzer. The admin dashboard provides tools for managing users, visualizing data through interactive charts and tables, and viewing the geographic distribution of samples.

---

## **Features**

- **User Management:**  
  Create, edit, delete, and manage user roles (Admin, User).  
- **Data Visualization:**  
  Interactive charts (bar, line, and pie) to display key metrics like acidity, Brix (sugar content), and fruit quality trends.  
- **Geographic Mapping:**  
  Integration of maps to visualize the location of fruit samples.
- **Sample Management:**  
  Secure storage and retrieval of fruit sample data with filtering and searching functionality.
- **Real-Time Updates:**  
  Dynamic data updates using WebSockets for seamless user experience.  
- **Reports and Statistics:**  
  Generate downloadable reports in various formats (e.g., PDF, Excel).  
- **Role-Based Access Control (RBAC):**  
  Secure access with role-specific permissions.  

---

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed on your machine:
- **Node.js** (>=16.0.0)
- **npm** (Node Package Manager, included with Node.js)
- A **MySQL** database instance

### **Installation**

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/thejokers69/fruit-grading.git
    cd fruit-grading
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Set Up the Database:**
    - Create a new MySQL database.  
    - Import the provided SQL schema from the `/Database_exports/` folder into your database.  
    - Configure the database connection in `src/config.js`:
      ```javascript
      module.exports = {
        database: {
          host: 'localhost',
          user: 'your_user',
          password: 'your_password',
          database: 'fruit_grading_db',
        },
      };
      ```

---

### **Running the Application**

#### **Backend**

1. Navigate to the backend directory:
    ```bash
    cd fruit-grading-loopback
    ```

2. Start the backend server:
    ```bash
    npm start
    ```
    The backend server will run at `http://localhost:3000`.

#### **Frontend**

1. Navigate to the root directory:
    ```bash
    cd ..
    ```

2. Start the frontend application:
    ```bash
    npm start
    ```
    The frontend application will run at `http://localhost:3001`.

---

## **Deployment**

### **Production Setup**

1. Build the frontend for production:
    ```bash
    npm run build
    ```

2. Serve the production build:
    Use a static file server (e.g., **Nginx**, **Apache**) to serve the contents of the `build/` folder.  

3. Deploy the backend on a production server:
    - Use **Docker** to containerize the application for easy deployment:
      ```bash
      docker build -t fruit-grading .
      docker run -p 3000:3000 fruit-grading
      ```
    - Alternatively, deploy on cloud platforms like **AWS**, **Azure**, or **Google Cloud**.

4. Configure CI/CD with **GitHub Actions** to automate deployments and testing.

---

## **Technologies Used**

- **Frontend:** React.js, Chart.js, Leaflet (for maps)  
- **Backend:** Node.js, Loopback 4  
- **Database:** MySQL  
- **Deployment Tools:** Docker, GitHub Actions  
- **Version Control:** Git and GitHub  

---

## **Future Enhancements**

The following features are planned for future releases:
1. **Mobile Application:** Develop a React Native app for better accessibility on mobile devices.  
2. **Advanced Security:** Add multi-factor authentication (MFA) and access monitoring.  
3. **Scalability Improvements:** Optimize the backend for handling large datasets and high traffic.  
4. **Predictive Analytics:** Integrate AI models for predicting fruit quality trends based on historical data.  
5. **Localization:** Support multiple languages (English, French, Arabic).  

---

## **Contributors**

- **Mohamed Lakssir** – Web Development and Integration  
- **Nouhaila Benzakour** – Supervisor, MAScIR  

---

Feel free to suggest improvements or contribute to the project by submitting a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
