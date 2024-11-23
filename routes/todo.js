router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,  
        task: req.body.task,  
        completed: false  
    };
    todos.push(newTodo);  
    res.status(201).json(newTodo); 
});