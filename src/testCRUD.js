const {Create, Read, Update, Delete }  = require('./FlashCardManager/CRUD.cjs');



// function that create a data for the DDB /!\ -----------------------------//
/*console.log("function create run")
Create("topic1", "title1", "description1");
console.log("function create done")*/

// function read all the data of DDB -----------------------------//
/*console.log("function read run");
Read();
console.log("function read done");*/

console.log("function update run")
Update(8, 'newTopic', 'newTitle', 'newDescription');
console.log("function update done");

/*console.log("function delete run")
Delete(1);
console.log("function delete done");*/
