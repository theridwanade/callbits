import * as functionsV1 from 'firebase-functions/v1';
import * as admin from 'firebase-admin';
admin.initializeApp();


export const CreateNewUser = functionsV1.auth.user().onCreate(async (user, context) => {
  try {
    const { uid, email, displayName, photoURL } = user;

    const result = await admin.firestore().collection("users").doc(uid).set({
      email,
      displayName,
      photoURL,
      createdAt: context.timestamp,
      updatedAt: context.timestamp,
    })

    console.log('New user created:', uid, email, displayName);
  } catch (error) {
    console.error('Error creating new user:', error);
  }
})