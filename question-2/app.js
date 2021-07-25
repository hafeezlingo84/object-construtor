var obj = {
    firstName: "Muhammad",
    lastName: 'Hafeez',
    email: "hafeez@gmail.com",
    password: "123",
    age: 56,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};

if(obj.age === 56 && obj.country==="Pakistan" && obj.firstName==="Muhammad" && obj.lastName==='Hafeez' ){

    console.log(obj.age);
    console.log(obj.country);
    console.log(obj.firstName);
    console.log(obj.lastName)
}

else{
    
    console.log('not exist');
}

