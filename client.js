

$(document).ready(readyNow);

function readyNow(){
    console.log('***jquery loaded***');
    $('#submit').on('click', addNewEmployee)
}


// addNewEmployee will take the information from the inputs
// and create a new object and push that object into employees array

let employees = [];

function addNewEmployee(){
    console.log('submit has been clicked');
    // get info from input fields
    let newFirstName = $('#firstNameIn').val();
    let newLastName = $('#lastNameIn').val();
    let newId = $('#idIn').val();
    let newJobTitle = $('#jobTitleIn').val();
    let newAnnualSalary = $('#annualSalaryIn').val();
    // create new object
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: Number(newId),
        jobTitle: newJobTitle,
        annualSalary: Number(newAnnualSalary)
    }
    // push new object/employee into employees array
    employees.push(newEmployee);

    render();
}

// render will print our array on the DOM

function render(){
    console.log(employees);
    // clear all table data
    $('#table').empty();
    // create a loop that displays all employees
    for(let i=0; i<employees.length; i++){
        $('table').append(`
        <tr>
        <td>${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td>${employees[i].id}</td>
        <td>${employees[i].jobTitle}</td>
        <td>${employees[i].annualSalary}</td>
        </tr>
        `)
    }
}