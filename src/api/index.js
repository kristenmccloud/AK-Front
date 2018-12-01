const BASE = 'http://localhost:3000'

let getApartments = function() {
  return fetch(BASE + '/apartments')
  .then((resp) => {
    let json = resp.json();
    return json;
  })
}

let getApartment = function(id) {
  return fetch(BASE + '/apartments/'+id)
  .then((resp) => {
    let json = resp.json();
    return json;
  })
}

let createApartment = function(apt) {
  return fetch(BASE + '/apartments', {
    body: JSON.stringify(apt),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

let deleteApartment = function(id) {
  return fetch(BASE + '/apartments/' + id, {
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE"
  })
    .then((resp) => {
      let json = resp
      console.log(json);
      return json
    })
}

let getUserApartments = function(user_id) {
  return fetch(BASE + `/users/apartments/${user_id}`)
    .then((resp) => {
      let json = resp.json();
      console.log("getUserApartments json: "+json);
      return json;
  })
}

let editApartment = function(apt){
  let id = apt.id
  console.log(apt);
  return fetch(BASE + '/apartments/'+id, {
    body: JSON.stringify(apt),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PATCH"
  })
  .then(resp => {
    let json = resp.json()
    return json
  })
}

export { getApartments, getApartment, createApartment, deleteApartment, getUserApartments, editApartment }
