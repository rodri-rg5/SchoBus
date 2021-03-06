/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        username: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: true
        },
        password: {
            type: 'string',
            password: true,
            required: true
        },
        foto: {
            type: 'string'
        },
        direccion: {
            type: 'json'
        },
        user: {
            model: 'user',
            unique: true
        }
    }
};