import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBAgSO6jR39D1_GFoA9Pc9niI_KHwFgpe0",
  authDomain: "loginsystem-task.firebaseapp.com",
  projectId: "loginsystem-task",
  storageBucket: "loginsystem-task.appspot.com",
  messagingSenderId: "460323788937",
  appId: "1:460323788937:web:4ecb014339c49cdc25ce58",
  measurementId: "G-1B3X6MQJ5S"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };