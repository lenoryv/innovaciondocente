import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDemX_yG-2ZDJCwvpcY-H2MaovvOY1TiXg",
    authDomain: "innovaciondocente-utpl.firebaseapp.com",
    databaseURL: "https://innovaciondocente-utpl.firebaseio.com",
    projectId: "innovaciondocente-utpl",
    storageBucket: "innovaciondocente-utpl.appspot.com",
    messagingSenderId: "1011505668181"
  })
}

firebase.firestore().settings({
  timestampsInSnapshots: true
})

const AFirestore = firebase.firestore();

// programa-formacion
const ProgramaFormacionDocument = AFirestore
  .collection("formacion-docente")
  .doc("programa-formacion");
const CursosCollection = ProgramaFormacionDocument.collection('cursos')
  .orderBy('date', 'desc')
  .orderBy('postulation.date', 'desc');
// cafe-cientifico
const CafeCientificoDocument = AFirestore
  .collection("formacion-docente")
  .doc("cafe-cientifico");
const EncuentrosCollection = CafeCientificoDocument
  .collection("encuentros").orderBy("date", "desc");
export {
  AFirestore,
  ProgramaFormacionDocument,
  CursosCollection,
  CafeCientificoDocument,
  EncuentrosCollection
}
