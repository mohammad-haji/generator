#!/usr/bin/env node
const inquirer = require('inquirer');
// app
const projectGenQuestions = require('./app/config/project-gen-questions.const');
// angularjs
const {buildAngularjsProject} = require("./app/modules/angularjs/index");

var Func = {
    promptTogetProject: function () {
        inquirer.prompt(projectGenQuestions)
            .then(answers => {
                const projectChoice = answers['project-choice'];
                const projectName = answers['project-name'];
                const templatePath = `${__dirname}/templates/${projectChoice}`;
                switch (projectChoice) {
                    case "angularjs":
                        buildAngularjsProject(projectName, templatePath);
                        break;
                    default:
                        break;
                }
            });
    }
};

var init = function () {
    Func.promptTogetProject();
};

init();