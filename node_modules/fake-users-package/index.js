var users = [{
  name:"Carlo",
  surname: "Leonardi",
  id: 1
},
{
  name:"Mario",
  surname: "Merola",
  id: 2
},{
  name:"Pippo",
  surname: "Baudo",
  id: 3
},
{
  name:"Mark",
  surname: "Zuckemberg",
  id: 4
},
{
  name:"Ugo",
  surname: "Fantozzi",
  id: 5
}]

var backup = JSON.parse(JSON.stringify(users));

exports.all = function(){
  return users;
}

exports.getById = function(id){
  for (var index in users) {
    var user = users[index];
    if (user.id === id) {
      return user;
    }
  }
  return null;
}

exports.delete = function(id){
  for (var index in users) {
    var user = users[index];
    if (user.id === id) {
      return users.splice(index, 1);
    }
  }
  return null;
}

exports.update = function(id, newUser) {
  for (var index in users) {
    var user = users[index];
    if (user.id === id) {
      user.name = newUser.name;
      user.surname = newUser.surname;
      return user;
    }
  }
  return null;
}

exports.reset = function() {
    users = JSON.parse(JSON.stringify(backup));
}

exports.add = function(newUser) {
    var lastUserId = users[users.length - 1].id;
    users.push({
      name: newUser.name,
      surname: newUser.surname,
      id: lastUserId+1
    })
}
