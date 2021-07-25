var itemsArray = [
    {name: "juice",price: 50,quantity: 3}, 
    {name: "cookie",price: 30,quantity: 9}, 
    {name: "shirt",price: 880,quantity: 1 }, 
    {name: "pen", price: 100,quantity: 2}];

var juice = itemsArray[0].price * itemsArray[0].quantity;
document.writeln(itemsArray[0].name, itemsArray[0].price, "*", itemsArray[0].quantity, "", "=", juice+"<br/>");

var cookie = itemsArray[1].price * itemsArray[1].quantity;
document.write(itemsArray[1].name, itemsArray[1].price, "*", itemsArray[1].quantity, "", "=", cookie+"<br/>");

var shirt = itemsArray[2].price * itemsArray[2].quantity;
document.write(itemsArray[2].name, itemsArray[2].price, "*", itemsArray[2].quantity, "", "=", shirt+"<br/>");

var pen = itemsArray[3].price * itemsArray[3].quantity;
document.write(itemsArray[3].name, itemsArray[3].price, "*", itemsArray[3].quantity, "", "=", pen+"<br/>");

document.write("Total Price", " ", juice + cookie + shirt + pen);