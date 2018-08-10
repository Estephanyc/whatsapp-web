window.model = {}
window.model.getUser = (uid) => {
    return firebase.database().ref(`users/${uid}`)
        .once('value')
        .then((user) => {
            return user
        })
        .catch((error) => {
            console.log("Database error > " + JSON.stringify(error));
        });
}
window.model.getUserList = () => {
    return firebase.database().ref(`users/`)
        .once('value')
        .then((user) => {
            return user
        })
        .catch((error) => {
            console.log("Database error > " + JSON.stringify(error));
        });
}
