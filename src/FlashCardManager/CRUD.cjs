
const mysql = require('mysql2');
const {read} = require("node:fs"); // required to make requests

/** connection to DDB mysql*/
const connection = mysql.createConnection({
    host: 'localhost',
    user: '', // put the user of your DDB
    password: '', // if you hava a password you can
    database: 'learn', // My database's name is "learn" but you can choose another database,
    // make sure you changed in notions.sql too.
})
connection.connect((err) => {
    if (err) {
        console.error("failed"+ err);
        return;
    }
    console.log("Connected to DDB" + connection.threadId);
})

// This section will create a new flashcard in DDB.
const createQuery = "INSERT INTO flashcards (topic, title, description) VALUES(?,?,?)"

function Create(topic, title, description) {
    connection.execute(createQuery, [topic, title, description], (err) => {
        if (err){
            console.error("failed to create new flashcards"+ err)
        }else {
            console.log("Successfully created flashcards");
        }
    });
}

// this section will read ALL flashcard in DDB.
const readQuery = "SELECT * FROM flashcards";
function Read(specificData){
    connection.execute(readQuery, [readQuery], (err, result) => {
        if (err){
            console.error("read (ALL) rows DDB : fail" + err);
        }else {
            if (specificData!=null){
                try {
                    for(let row of result){
                        if (row.id === specificData) {
                            console.log(row);
                        }else{
                            console.log("there is no data for id : " + specificData);
                        }
                    }
                }catch (e) {
                    console.error(e);
                }
            }else{
                console.log("read (ALL) rows DDB : success");
                try {
                    for(let row of result){
                        console.log(row);
                    }
                }catch (e) {
                    console.error(e);
                }

            }
        }
    });
}


// section bellow update a data.
const updateQuery = "UPDATE flashcards SET topic = ?, title = ?, description = ? WHERE id = ?  ";
function Update(id, topic, title, description) {
    if (id){
        connection.execute(updateQuery, [topic, title, description], (err, result) => {
            if (err){
                console.error("update row: fail" + err);
            }else {
                console.log("update row : success" + result);
            }
        })
    }else{
        console.log("data ?");
    }
}

// section bellow delete a data.
const deleteQuery = "DELETE FROM flashcards WHERE id = ?";
function Delete(id){
    connection.execute(deleteQuery, [id], (err) => {
        if (err){
            console.error("delete row: fail");
        }else {
            console.log("delete row : success");
        }
    })
}

module.exports = {Create,Read,Update,Delete};