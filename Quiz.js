/**
 * Created by Sierra on 10/31/2016.
 */

/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */
// the above is a multi-line comment block
"use strict";
const PROMPT = require('readline-sync');
let a;
let continueResponse;
let currentMonth, currentGrade, currentClassroom, upperTuition;
const MAX_GRADE = 8,
    MAX_MONTH = 9,
    MAX_CLASSROOM = 3,
    KDG_TUITION = 80;//the = sign is the assignment operator
//the above lines are declaring global variables and initnalizing constants
function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse === 1) {//this is a form of looping, so long as within the () is false the part within the curly braces will keep running
        setCurrentMonth();
        setCurrentGrade();
        setCurrentClassroom();
        processPaymentCoupons();
        setContinueResponse();
        for (let i = 0; i < MAX_CLASSROOM; i++) {//  the i++ is auto incrementing
            printGoodbye();
        }
    }
}
//the above section is known as the dispatcher

main();

//this is the mutator method. for every global variable there must be a mutator method

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));// this is string testing, and is waiting for a selection by the user
        }
    } else {
        continueResponse = 1;
    }
}

function setCurrentMonth() {//this is a signature line
    if (currentMonth != null && currentMonth <= MAX_MONTH) {
        currentMonth++;
    } else {
        currentMonth = 1;
    }
}

function setCurrentGrade() {
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) {  //http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
        currentGrade++;
    } else {
        currentGrade = 0;
    }
}

function setCurrentClassroom() {
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) {
        currentClassroom++;
    } else {
        currentClassroom = 1;
    }
}

function setUpperTuition() {
    const BASE_TUITION = 60;
    upperTuition = BASE_TUITION * currentGrade;
}

function processPaymentCoupons() {
    while (currentGrade <= MAX_GRADE) {
        while (currentClassroom <= MAX_CLASSROOM) {// this is numeric testing
            while (currentMonth <= MAX_MONTH) {
                if (currentGrade == 0) {
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`);
                } else {
                    setUpperTuition();
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`);//this also has concatenation
                }
                setCurrentMonth();
            }
            setCurrentClassroom();
            setCurrentMonth();
        }
        setCurrentGrade();
        setCurrentClassroom();
    }
}

function printGoodbye() {
    console.log(`\tGoodbye.`);
}
//there is no array in this program, arrays are similar to tables
//a program is cohesive if each mutator method matches one global variable. we do not want to add multiple items to a single mutator method