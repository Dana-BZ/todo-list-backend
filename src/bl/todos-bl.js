const db = require('../dal/postgres-dal/db');
const getBackupDb = require('../dal/mongo-dal/db');

const getTodos = () => {
    return db.select('*').from('todo');
};

const addTodo = async (text) => {
    const newTodo = { text, completed: false };

    const insertedTodo = (await db.insert(newTodo).into('todo').returning('*'))[0];

    // insert to backup db
    const backupDb = await getBackupDb();
    const todosCollection = backupDb.collection('todos');
    await todosCollection.insertOne(insertedTodo);

    return insertedTodo;
};

const setTodoCompleted = async (id, completed) => {
    const updatedTodo = (await db('todo')
        .where({ id })
        .update({ completed }).returning('*'))[0];

    // update backup db
    const backupDb = await getBackupDb();
    const todosCollection = backupDb.collection('todos');
    await todosCollection.updateOne({ id: parseInt(id) }, { $set: { completed } });

    return updatedTodo;
};

const deleteTodo = async (id) => {
    const deletedTodo = (await db('todo').where({ id }).delete().returning('*'))[0];

    // delete from backup db
    const backupDb = await getBackupDb();
    const todosCollection = backupDb.collection('todos');
    await todosCollection.deleteOne({ id: parseInt(id) });

    return deletedTodo;
};

module.exports = {
    getTodos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
};