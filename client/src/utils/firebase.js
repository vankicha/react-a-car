import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';
import { FIREBASE_CONFIG } from '../config';

firebase.initializeApp(FIREBASE_CONFIG);
firebase.analytics();

export default firebase;
export const storage = firebase.storage();
export const auth = firebase.auth();
