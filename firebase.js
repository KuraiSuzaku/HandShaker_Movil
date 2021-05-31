import firebase from '@react-native-firebase/app';

const config = {
    apiKey: "AIzaSyBIIxDRwdoU46RVwEJyw_OJJ50_tNIUFvY",
    projectId: "handshaker-cb383",
    appId: "1:495618189191:android:45d1c815cb54243ea25522",
    storageBucket: "gs://handshaker-cb383.appspot.com",
    databaseURL: "",
    messagingSenderId: ""
};

if(!firebase.apps.length)
    firebase.initializeApp(config);

export default firebase.app();