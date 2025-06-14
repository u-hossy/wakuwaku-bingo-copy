import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./config";

export const getUID = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      return uid;
    } else {
      return null;
    }
  });
};
