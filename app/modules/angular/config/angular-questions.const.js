const angularTypes = require('./angular-types.const');
module.exports = [
    {
        name: "type-choice",
        type: "checkbox",
        message: 'What Angular template would you like to generate?',
        choices: angularTypes.map((types) => types.key)
    },{
        name: 'entity-name',
        type: 'input',
        message: 'Entity name:',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Entity name may only include letters, numbers, underscores and hashes.';
        }
    }
];