// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.


// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old
let jumpstop = [];
let chatten = [];
let polar = [];

const createFunk = (name, age) => {
    return {
        "Funk Name": name,
        "Age": age
    }


}

const createRap = (name, age) => {
    return {
        "Rap Name": name,
        "Age": age
    }
    
}

const createCountry = (name, age) => {
    return {
        "Country Name": name,
        "Age": age
    }
    
}

const createBluegrass = (name, age) => {
    return {
        "Bluegrass Name": name,
        "Age": age
    }
    
}

const createPop = (name, age) => {
    return {
        "Pop Name": name,
        "Age": age
    }
    
}

jumpstop.push(createFunk("Dre Funkz", 25), createRap("Dusta Grimes", 21), createRap("Loyonce Branis", 27))
console.log(jumpstop)

chatten.push(createCountry("Bruce Atikins", 23), createBluegrass("Bartholomew Danielson", 23), createCountry("Avilee Dallas", 19))
console.log(chatten)

polar.push(createPop("Jensen Brown", 20), createPop("Austin Kinkaid", 22))
console.log(polar)
// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.


// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old