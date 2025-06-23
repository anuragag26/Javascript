const accountId = 144553
let accountEmail = "anuragagrawal26@lpu.in"
var accountPassword = "12345"
accountCity = "Raigarh"
let accountState;

//accountId = 2 // not allowed

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hchc@lpu.in"
accountPassword = "45678"
accountCity = "Raipur"

console.table([accountId, accountEmail, accountPassword , accountCity, accountState])
