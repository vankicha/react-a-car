import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_CONFIG } from '../config';

firebase.initializeApp(FIREBASE_CONFIG);

export default firebase;
export const auth = firebase.auth();
