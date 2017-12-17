const fs = require('fs');
const CURR_DIR = process.cwd() + `/dist`;
const inquirer = require('inquirer');
const angularQuestions = require('./config/angular-questions.const');
const printMessage = require('print-message');

const buildAngularProject = (projectName, templatePath) => {
    inquirer.prompt(angularQuestions)
        .then(answers => {
            const entityName = answers['entity-name'];
            const typeChoices = answers['type-choice'];
            fs.mkdirSync(`${CURR_DIR}/${projectName}`);
            typeChoices.forEach(chiose => {
                //TODO @mohammad-haji mkdir in one shut
                fs.mkdirSync(`${CURR_DIR}/${projectName}/${chiose}`);
                createDirectoryContents(templatePath, chiose, projectName, entityName, 'angular');
            });
            printMessage(["Success", `Your ${projectName} project is ready in dist folder`], {color: 'green'});
        });
};

const createDirectoryContents = (templatePath, selectedProjectType, newProjectPath, entityName, projectType) => {
    const filesToCreate = fs.readdirSync(templatePath + `/${selectedProjectType}`);

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${selectedProjectType}/${file}`;

        // get stats about the current file
        const stats = fs.statSync(origFilePath);

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');
            // Rename
            if (file === '.npmignore') file = '.gitignore';
            const writePath = `${CURR_DIR}/${newProjectPath}/${selectedProjectType}/${file.replace(projectType, entityName)}`;
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${selectedProjectType}/${file}`);

            // recursive call
            createDirectoryContents(`${templatePath}/${file}`, selectedProjectType, `${newProjectPath}/${file}`,
                entityName, projectType);
        }
    });
};

module.exports = {
    buildAngularProject,
};