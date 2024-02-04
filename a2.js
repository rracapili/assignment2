/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ronald Aldrin Capili Student ID: radcapili Date: 2024/02/02
*
********************************************************************************/ 


const Data = require('./modules/collegeData');

Data.initialize()
    .then((dataCollection) => {
        //console.log("Initialization successful!");
        // You can now use dataCollection and other functions to test your module
        return Promise.all([
            Data.getAllStudents(dataCollection),
            Data.getCourses(dataCollection),
            Data.getTAs(dataCollection)
        ]);
    })
    .then(([students,courses,tas]) => {
        const numOfStudents = students.length
        const numOfCourses = courses.length
        const numOfTAs = tas.length

        console.log(`Successfully retrieved ${numOfStudents} students`);
        console.log(`Successfully retrieved ${numOfCourses} courses`);
        console.log(`Successfully retrieved ${numOfTAs} TAs`);
    })
    /*.then((students) => {
        console.log("Sample Student: ",students[0])
    })
    */
    .catch((error) => {
        console.error("Initialization failed:", error);
    });