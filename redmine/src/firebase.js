import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from './config';


// Firebase inicializálása
firebase.initializeApp(firebaseConfig);

// Firebase Realtime Database referencia
const database = firebase.database();

// Managerhez hozzáadása az adatbázishoz
export const addManagerToDatabase = (name, email, password) => {
  // Új egyedi azonosító generálása
  const managerId = database.ref('/managers').push().key;

  // Manager objektum létrehozása
  const managerData = {
    id: managerId,
    name: name,
    email: email,
    password: password
    // További adatok hozzáadása szükség szerint
  };

  // Manager hozzáadása az adatbázishoz
  database.ref('/managers/' + managerId).set(managerData)
    .then(() => {
      console.log('Manager successfully added to database');
    })
    .catch((error) => {
      console.error('Error adding manager to database:', error);
    });
};

// Developerhez hozzáadása az adatbázishoz
export const addDeveloperToDatabase = (name, email) => {
  // Új egyedi azonosító generálása
  const developerId = database.ref('/developers').push().key;

  // Developer objektum létrehozása
  const developerData = {
    id: developerId,
    name: name,
    email: email
    // További adatok hozzáadása szükség szerint
  };

  // Developer hozzáadása az adatbázishoz
  database.ref('/developers/' + developerId).set(developerData)
    .then(() => {
      console.log('Developer successfully added to database');
    })
    .catch((error) => {
      console.error('Error adding developer to database:', error);
    });
};
