const router = require('express').Router()
 const todoSchema = require('../models/todoSchema')



router.post('/todos', async(req, res) => {
    try {
    let data = req.body
    var Todo = new todoSchema(data)
    await Todo.save()
    res.json({
        message: "Course Created"
   })
}catch (err) {
       res.status(400).json({
           message: err.message
       })
}});

router.get('/todos',async(req, res) => {
    try {
    let todos = await todoSchema.find({});
    res.json({
        todos
   })
}catch (err){
    res.status(400).json({
        message: err.message
    })
}
        
 });


 module.exports = router;
