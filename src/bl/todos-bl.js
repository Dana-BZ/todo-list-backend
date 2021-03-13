const db = require('../dal/postgres-dal/db');

const getTodos = () => {
    return db.select('*').from('todo');
};

const addTodo = (text) => {
    return db.insert({ text, completed: false }).into('todo').returning('*');
};

const setTodoCompleted = (id, completed) => {
    return db('todo')
        .where({ id })
        .update({ completed }).returning('*');
};

const deleteTodo = (id) => {
    return db('todo').where({ id }).delete().returning('*');
};

module.exports = {
    getTodos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
};