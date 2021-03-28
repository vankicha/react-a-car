import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { FIREBASE_CONFIG } from '../config';

firebase.initializeApp(FIREBASE_CONFIG);

export default firebase;
export const storage = firebase.storage();
export const auth = firebase.auth();
