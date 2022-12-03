

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
    // push new object/employee into employees array then render
    employees.push(newEmployee);
    render();
}

// deleteEmployee will remove that employee from the table
// I put the delete button on the employee ID because 
// there should be no two employees with the same ID

function deleteEmployee(){
    console.log('clicked a delete button!');
    let deleteButtonClicked = $(this);
    let idSpan = deleteButtonClicked.siblings();
    let employeeText = idSpan.text();
    console.log(employeeText);
    // create a new array for employees not to delete
    let keepers = [];
    // push all employees we want to keep to 'keepers' array
    for (let employee of employees) {
        if (Number(employeeText) !== employee.id){
            
            keepers.push(employee);
        }
    }
    // set 'employees' array to equal 'keepers' then render
    employees = keepers;
    render();
}

// calculateMonthy will calculate the total monthy cost of all employees

function calculateMonthly(){
    console.log('running calculateMonthly');
    let monthlyCosts = 0;
    let totalSalary = 0;
    for(let i=0; i<employees.length; i++){
        totalSalary += employees[i].annualSalary
    }
    monthlyCosts = (totalSalary/30);
    if (monthlyCosts > 20000){
        console.log('Monthly Costs have exceeded 20,000!', monthlyCosts);
        // change css here to make background red
        $('#output').empty();
        $('#output').append(`
        <h2 id="output">
            <div id="red">
            Monthly Cost: ${monthlyCosts}
            </div>
        </h2>
        `);
        
    } else {
    $('#output').empty();
    $('#output').append(`
        <h2 id="output">
            <div id="normal">
            Monthly Cost: ${monthlyCosts}
            </div>
        </h2>
    `)
    }
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
        <td>ID ✂️</td>
        <td>Job Title</td>
        <td>Annual Salary</td>
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
        // to do: clear input fields
    }
    calculateMonthly();
}