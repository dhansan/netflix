import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCTFCA6DMAZhEBwljJN2XxfCRY-4LypKBA',
  authDomain: 'netflix-be71a.firebaseapp.com',
  databaseURL: 'https://netflix-be71a.firebaseio.com',
  projectId: 'netflix-be71a',
  storageBucket: 'netflix-be71a.appspot.com',
  messagingSenderId: '916330402435',
  appId: '1:916330402435:web:c30399d7962486dbd781b6',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
