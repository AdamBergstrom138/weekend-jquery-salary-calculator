

$(document).ready(readyNow);

function readyNow(){
    console.log('***jquery loaded***');
    $('#submit').on('click', addNewEmployee);
    $('body').on('click', '.deleteEmployeeButton', deleteEmployee);
}

//   $('body').on('click', '.deleteCarButton', deleteCar);
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

// deleteEmployee will remove that employee from the table
/*
  for (let car of garage) {

      if (Number(carText) !== car.year) {
        carsWeDoNotWantToDelete.push(car);
        console.log(car);
      }
    }

    garage = carsWeDoNotWantToDelete;
    render();
  
*/
function deleteEmployee(){
    console.log('clicked a delete button!');
    let deleteButtonClicked = $(this);
    let idSpan = deleteButtonClicked.siblings();
    let employeeText = idSpan.text();
    console.log(employeeText);
    // create a new array for employees not to delete
    let keepers = [];

    for (let employee of employees) {
        if (Number(employeeText) !== employee.id){
            
            keepers.push(employee);
        }
    }


    employees = keepers;
    render();
}

// render will print our array on the DOM

function render(){
    console.log(employees);
    // clear all table data
    $('#table').empty();
    // this is a little 'hacky' but it works to keep
    // the category names after I empty the table
    $('table').append(`
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>ID Number</td>
        <td>Job Title</td>
        <td>Annual Salary</td>
        <td>✂️</td>
    </tr>
    `)
    // create a loop that displays all employees
    for(let i=0; i<employees.length; i++){
        $('table').append(`
        <tr>
        <td>${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td><span class="idSpan">${employees[i].id}</span><button class="deleteEmployeeButton">✂️</button></td>
        <td>${employees[i].jobTitle}</td>
        <td>${employees[i].annualSalary}</td>
        </tr>
        `)
        // <span class="yearSpan">${garage[i].year}</span>
        // to do: clear input fields
    }
}