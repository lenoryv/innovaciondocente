import * as firebase from 'firebase/app'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyDemX_yG-2ZDJCwvpcY-H2MaovvOY1TiXg",
    authDomain: "innovaciondocente-utpl.firebaseapp.com",
    databaseURL: "https://innovaciondocente-utpl.firebaseio.com",
    projectId: "innovaciondocente-utpl",
    storageBucket: "innovaciondocente-utpl.appspot.com",
    messagingSenderId: "1011505668181"
};

!firebase.apps.length ? firebase.initializeApp(config) : '';

export const db = firebase.database()
export default firebase