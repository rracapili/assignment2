/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ronald Aldrin Capili Student ID: radcapili Date: 2024/02/02
*
********************************************************************************/ 


class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

var dataCollection = null


const fs = require('fs');

function initialize() {
    return new Promise((resolve, reject) => {
        // Read students.json
        fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
            if (err) {
                reject("Unable to read students.json");
                return;
            }
            // Read courses.json
            fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
                if (err) {
                    reject("Unable to read courses.json");
                    return;
                }
                try {
                    // Parse JSON data from files
                    const students = JSON.parse(studentDataFromFile);
                    const courses = JSON.parse(courseDataFromFile);

                    // Create Data instance
                    const dataCollection = new Data(students, courses);

                    // Resolve the promise with the Data instance
                    resolve(dataCollection);
                } catch (parseError) {
                    // If JSON parsing fails, reject the promise
                    reject("Error parsing JSON data");
                }
            });
        });
    });
}


function getAllStudents(dataCollection) {
    return new Promise((resolve, reject) => {
        const students = dataCollection.students;

        if (students.length === 0) {
            reject("No results returned");
        }
        else {
            resolve(students);
        }
    });
}

function getTAs(dataCollection) {
    return new Promise((resolve, reject) => {
        const students = dataCollection.students;
        const tas = students.filter((student) => student.TA === true);

        if (tas.length === 0) {
            reject("No results returned");
        }
        else {
            resolve(tas);
        }
    });
}

function getCourses(dataCollection) {
    return new Promise((resolve, reject) => {
        const courses = dataCollection.courses;

        if (courses.length === 0) {
            reject("No results returned");
        }
        else {
            resolve(courses);
        }
    });
}


module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
    // Other functions...
};