

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

function render(){
    console.log(employees);

    
}