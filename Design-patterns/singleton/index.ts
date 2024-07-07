import DatabaseConnection from "./DBConnection";
  // Usage
  const db1 = DatabaseConnection.getInstance();
  const db2 = DatabaseConnection.getInstance();
  
  console.log(db1.query('SELECT * FROM users')); // Executed query: SELECT * FROM users
  console.log(db1 === db2); // true
  