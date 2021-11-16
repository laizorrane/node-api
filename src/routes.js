import { Router } from "express";
import { createTable, insertPerson, updatePerson, selectPerson, selectPeople, deletePerson } from './Controler/Person.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "It's Alive!"
    })
})

router.get('/people', selectPeople);
router.get('/person', selectPerson);
router.post('/person', insertPerson);
router.put('/person', updatePerson);
router.delete('/person', deletePerson);

export default router;