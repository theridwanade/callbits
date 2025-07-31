import * as functionsV1 from 'firebase-functions/v1';
export const CreateNewUser = functionsV1.auth.user().onCreate(async (user, context) => {
  try {
    const { uid, email, displayName, photoURL } = user;
    // Log the user creation event
    console.log('New user created:', {
      uid,
      email,
      displayName,
      photoURL,
      timestamp: context.timestamp,
    });


  } catch (error) {
    console.error('Error creating new user:', error);
  }
})