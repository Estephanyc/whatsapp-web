window.addMsn = (remitente, destino, msn) =>{
    let union = remitente + destino
    let orderUnion = union.split('').sort().join('')
    let key = firebase.database().ref().child(`post/${orderUnion}`).push().key; 
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let time = hours + ':' + minutes
    firebase.database().ref(`post/${orderUnion}`).set({ members:  { user1: remitente, user2: destino  }});
    return firebase.database().ref(`post/${orderUnion}/${key}`).update({ message: msn , time: time, remitent: remitente, destino: destino});
}
window.getMsn = (destino, remitente) =>{
    let union = remitente + destino
    let orderUnion = union.split('').sort().join('')
    return firebase.database().ref(`post/${orderUnion}`)
}