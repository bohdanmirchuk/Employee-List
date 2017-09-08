var buttonAdd = document.getElementById('addEmployee')
buttonAdd.onclick = openForm;

var hideButton = document.getElementsByClassName('hideButton');
hideButton[0].onclick = closeForm;

document.getElementById('addButton').addEventListener('click', function(event){
    event.preventDefault()
});

var addButton = document.getElementById('addButton');
addButton.onclick = addEmployee;

function openForm(){
    var form = document.getElementsByClassName('addform');
    form[0].classList.add('visible');
    var hideButton = document.getElementsByClassName('hideButton');
    hideButton[0].classList.add('visible');
}

function closeForm(){
    var form = document.getElementsByClassName('addform');
    form[0].classList.remove('visible');
    var hideButton = document.getElementsByClassName('hideButton');
    hideButton[0].classList.remove('visible');
}

function addEmployee(){
	var inputs = document.getElementsByTagName('input');
	var list = document.getElementById('employeeList');
	var listItem = document.createElement('li');
	
    if (document.getElementsByClassName('employeeFirstName').length > 9) {
        alert('Sorry, the number of employees is limited by 10')
    }
    else if (inputs[0].value.length < 1){
    	alert('Please, enter the correct first name')
    }
    else if (inputs[1].value.length < 1){
    	alert('Please, enter the correct last name')
    }
    else if (!isFinite(inputs[2].value) || Number(inputs[2].value)<0 || inputs[2].value.length < 1 || inputs[2].value.match(' ')){
    	alert('Please, enter the correct salary')
    }
    else if (inputs[3].value.length < 1){
    	alert('Please, enter the correct position')
    }
    else {

	span1 = document.createElement('span');
	span1.className = 'employeeFirstName';
	span1Text = document.createTextNode(inputs[0].value);
	span1.appendChild(span1Text);
	listItem.appendChild(span1);

    span2 = document.createElement('span');
	span2.className = 'employeeLastName';
	span2Text = document.createTextNode(inputs[1].value);
	span2.appendChild(span2Text);
	listItem.appendChild(span2);
    
    span3 = document.createElement('span');
	span3.className = 'employeeSalary';
	span3Text = document.createTextNode("$ " + inputs[2].value);
	span3.appendChild(span3Text);
	listItem.appendChild(span3);

	span4 = document.createElement('span');
	span4.className = 'employeePosition';
	span4Text = document.createTextNode(inputs[3].value);
	span4.appendChild(span4Text);
	listItem.appendChild(span4);

    list.appendChild(listItem);
    closeForm();
    NumberAndAvSalary();
    for (var i = 0; i < 4; i++){
    	inputs[i].value = '';
    }
  }
}
// Total Number of Employees and Average Salary
function NumberAndAvSalary (){
	var employeeSalary = document.getElementsByClassName('employeeSalary');
	totalNumber = employeeSalary.length;
	document.getElementsByClassName('numberEmployees')[0].innerHTML = totalNumber;
	var totalSalary = 0;
	for (var k = 0; k < totalNumber; k++){
		totalSalary += Number(employeeSalary[k].textContent.slice(2));
	}
	var avSalary = totalSalary / totalNumber;
	document.getElementsByClassName('averageSalary')[0].innerHTML = avSalary.toFixed(2);
}