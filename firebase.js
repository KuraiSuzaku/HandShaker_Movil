import firebase from '@react-native-firebase/app';
console.log('+++++++++ firebase app config +++++++++');
const config = {
    apiKey: "AIzaSyBIIxDRwdoU46RVwEJyw_OJJ50_tNIUFvY",
    projectId: "handshaker-cb383",
    appId: "495618189191:android:45d1c815cb54243ea25522",
    storageBucket: "gs://handshaker-cb383.appspot.com",
    databaseURL: "",
    messagingSenderId: ""
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();