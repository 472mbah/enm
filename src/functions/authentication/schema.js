var mongo = require('mongodb');

export const student_schema = (email, password, timestamp, first_name, last_name) => ({
    _id: new mongo.ObjectID(),
    email,
    password,
    timestamp,
    first_name,
    last_name,
    tutor_ids: [],
    month_of_birth: undefined,
    year_of_birth: undefined,
});

export const parent_schema = (email, password, timestamp, first_name, last_name) => ({
    _id: new mongo.ObjectID(),
    children_ids: [],
    email,
    password,
    timestamp,
    first_name,
    last_name,
});

export const tutor_schema = (email, password, timestamp, first_name, last_name) => ({
    _id: new mongo.ObjectID(),
    subject_id: undefined,
    email,
    password,
    timestamp,
    first_name,
    last_name,
});