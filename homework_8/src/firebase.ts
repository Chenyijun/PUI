import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const config = {
  apiKey: "AIzaSyDvMqjCDp5Wu2YZF3Z77DUCq4mCwcF1E9Q",
  authDomain: "css-adventure.firebaseapp.com",
  projectId: "css-adventure",
  storageBucket: "css-adventure.appspot.com",
  messagingSenderId: "814377337953",
  appId: "1:814377337953:web:3763c609d122a300ff1620",
  measurementId: "G-HLS32TPS2V"
}

const app = initializeApp(config)

const database = getDatabase(app)

export const levelsRef = ref(database, "levels")
export default database;