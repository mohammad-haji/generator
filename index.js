#!/usr/bin/env node
const fs = require('fs');
const CURR_DIR = process.cwd();
const inquirer = require('inquirer');
// app
const projectGenQuestions = require('./app/config/project-gen-questions.const');
// AngularJS
const {buildAngularjsProject} = require("./app/modules/angularjs/index");
// Angular
const {buildAngularProject} = require('./app/modules/angular/index');

var Func = {
    promptTogetProject: function () {
        fs.mkdirSync(`${CURR_DIR}/dist`);
        inquirer.prompt(projectGenQuestions)
            .then(answers => {
                const projectChoice = answers['project-choice'];
                const projectName = answers['project-name'];
                const templatePath = `${__dirname}/templates/${projectChoice}`;
                switch (projectChoice) {
                    case "angularjs":
                        buildAngularjsProject(projectName, templatePath);
                        break;
                    case "angular":
                        buildAngularProject(projectName, templatePath);
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