const angularJsTypes = require('./angularjs-types.const');
module.exports = [
    {
        name: "type-choice",
        type: "checkbox",
        message: 'What Angularjs template would you like to generate?',
        choices: angularJsTypes.map((types) => types.key),
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Type may only include letters, numbers, underscores and hashes.';
        }
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