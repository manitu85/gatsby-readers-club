import firebaseConfig from "./config";
// import axios from 'axios';

class Firebase {
  constructor(app) {
    if (!firebaseInstance) {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }

  getUserProfile({ userId }) {
    return this.db.collection('publicProfiles')
      .where('userId', '==', userId)
      .get()
    // .limit(1)
    // .onSnapshot(onSnapshot)
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut()
  }

  async register({ email, password, username }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
    return this.db.collection('publicProfiles').doc(username).set({
      userId: newUser.user.uid
    })
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app);
    return firebaseInstance;
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null;
  }
}

export default getFirebaseInstance;
