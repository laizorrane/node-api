import { openDB } from "../configDB.js";

export async function createTable(){
    openDB().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Person ( id INTEGER PRIMARY KEY, name TEXT, email TEXT)')
    })
}

export async function insertPerson(req, res){
    let person = req.body;
    openDB()
    .then(db=>{
        db.run('INSERT INTO person (name, email) VALUES (?,?)', [person.name, person.email]);
    })
    res.json({
        "statusCode": 200
    })
}

export async function updatePerson(req, res){
    let person = req.body;
    openDB()
    .then(db=>{
        db.run('UPDATE Person SET name=?, email=? WHERE id=?', [person.name, person.email, person.id]);
    })
    res.json({
        "statusCode": 200
    })
}

export async function selectPeople(req, res){
   openDB().then(db=>{
       db.all('SELECT * FROM Person').then(people=> res.json(people))
    })
}

export async function selectPerson(req, res){
    let id = req.body.id;
    openDB().then(db=>{
        db.get('SELECT * FROM Person WHERE id=?', [id]).then(person=> res.json(person));
     })
}

export async function deletePerson(req, res){
    let id = req.body.id;
    openDB().then(db=>{
        db.get('DELETE FROM Person WHERE id=?', [id]).then(res=>res)
     })
     res.json({
        "statusCode": 200
    })
}
