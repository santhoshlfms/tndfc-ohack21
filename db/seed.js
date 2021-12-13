let admin = require("./connection")
let DEFUALT_USERS = require("../next.config.js").env?.USERS;

setTimeout(function(){
  DEFUALT_USERS.map(u => {
    seedUsers(u)
  });
}, 2000)


const seedUsers = async (u) => {
  try {
    const user = await admin.auth()
      .createUser({ email: u.email, password: u.password, emailVerified: u.emailVerified, displayName: u.displayName, disabled: u.disabled }).then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
        const user = admin.auth().setCustomUserClaims(userRecord.uid, {"ROLE":"ADMIN_TNDFC"}).then(() => {
          console.log(user)
         })

      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });
    //console.log("USER created", u)

  } catch (err) {
    console.log(err)
  }
}
