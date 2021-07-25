function Obj(name, gender, address, prof) {
  
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.profe =prof;
};


function user() {

    var name1 = document.getElementById("name").value;
    var gender1 = document.getElementById("gender").value;
    var address1 = document.getElementById("address").value;
    var prof1= document.getElementById("prof").value;
    console.log(name1, gender1, address1, prof1);
    var obj1 = new Obj(name1, gender1, address1, prof1);

    console.log(obj1);

};


