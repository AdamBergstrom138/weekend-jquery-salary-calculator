

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
    console.log('delete employee');
    let employeeToDelete = $(this).data().emplid;
    let keepers = [];

    for (let employee of employees) {
        if (employee.id !== employeeToDelete) {
          keepers.push(employee);
        }
      }
    
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
    monthlyCosts = (totalSalary/12);
    if (monthlyCosts > 20000){
        console.log('Monthly Costs have exceeded 20,000!', monthlyCosts);
        // change css here to make background red
        $('#output').empty();
        $('#output').append(`
        <h2 id="output">r
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
    // clear tableBody
    $('#tableBody').empty();

    // create a loop that displays all employees
    for(let i=0; i<employees.length; i++){
        $('#tableBody').append(`
        <tr>
        <td>${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td><span class="idSpan">${employees[i].id}</span></td>
        <td>${employees[i].jobTitle}</td>
        <td>${employees[i].annualSalary}</td>
        <td><button class="deleteEmployeeButton"data-emplid=${employees[i].id}>✂️</button></td>
        </tr>
        `)
        // to do: clear input fields
    }
 
    // run calculateMonthly
    calculateMonthly();
    clearInputFields();
}
    // clearInputFields clears the input fields
function clearInputFields(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}