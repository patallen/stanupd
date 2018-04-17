const functions = require("firebase-functions");
const admin = require("firebase-admin");


admin.initializeApp();


exports.addDeal = functions.https.onRequest((request, response) => {
  const firestore = admin.firestore();
  const query = request.query;
  console.log("Query:", query);
  return firestore
    .collection("deals")
    .add(query)
    .then(snapshot => {
      return response.redirect(303, snapshot.ref.toString());
    });
});
