var buttonAdd = document.getElementById('addEmployee')
buttonAdd.onclick = openForm;

var hideButton = document.getElementsByClassName('hideButton');
hideButton[0].onclick = closeForm;

document.getElementById('addButton').addEventListener('click', function(event){
    event.preventDefault()
});

var addButton = document.getElementById('addButton');
addButton.onclick = addEmployee;

// var limitEmployees = document.getElementsByClassName('limitinput')[0];
// limitEmployees.onclick = function limitEmployees(){
// 	limit = Number(limitEmployees.value);
// 	console.log(limit);
// }

function openForm(){
    document.getElementById('addEmployee').style.backgroundColor = "#7aafc1"
    var form = document.getElementsByClassName('addform');
    form[0].classList.add('visible');
    var hideButton = document.getElementsByClassName('hideButton');
    hideButton[0].classList.add('visible');
}

function closeForm(){
    document.getElementById('addEmployee').style.backgroundColor = "#084459"
    var form = document.getElementsByClassName('addform');
    form[0].classList.remove('visible');
    var hideButton = document.getElementsByClassName('hideButton');
    hideButton[0].classList.remove('visible');
}

function addEmployee(){
	var inputs = document.getElementsByClassName('forminput');
	var list = document.getElementById('employeeList');
	var listItem = document.createElement('li');
	var avSalary = Number(document.getElementsByClassName('averageSalary')[0].innerHTML);
    
    var defaultLimit = 10;
    var limit = document.getElementsByClassName('limitinput')[0].value;
    if (Number(limit) <= 0 && limit){
    	alert('The limit of employees is not valid');
        var stopAdd = true;}
    	else if (!limit){
    		defaultLimit = 10;
    		// alert('The limit of empldsfdgfsfgdoyees is not valid')
    	}
    	else{
    		defaultLimit = limit;
    	}
    
    if (avSalary >= 2000){
    	alert('Sorry but you can\'t add the new employee cause the average salary has already reached $2000')
    }
    else if (stopAdd){
    	alert("Please, enter the correct number to limit the list of employees")
    }
    else if (document.getElementsByClassName('employeeFirstName').length > defaultLimit-1) {
        alert('Sorry, the number of employees is limited by '+ defaultLimit)
    }
    else if (inputs[0].value.length < 1){
    	alert('Please, enter the correct first name')
    }
    else if (inputs[1].value.length < 1){
    	alert('Please, enter the correct last name')
    }
    // else if (for(var j = 0; j < firstName.length; j++){
    // 	firstName[j].innerHTML == inputs[0] && lastName[j].innerHTML == inputs[1]}){
    // 		alert(inputs[0] + ' ' + inputs[1] + ' is already in the list. Add another one.')
    // 	}
    else if (!isFinite(inputs[2].value) || Number(inputs[2].value)<0 || inputs[2].value.length < 1 || inputs[2].value.match(' ')){
    	alert('Please, enter the correct salary')
    }
    else if (inputs[3].value.length < 1){
    	alert('Please, enter the correct position')
    }
    else if (dublicator()){
    	alert(inputs[0].value + ' ' + inputs[1].value + ' is already in the list. Add another one.')
    }
    else{

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

function dublicator(){
	var firstName = document.getElementsByClassName('employeeFirstName');
	var lastName = document.getElementsByClassName('employeeLastName');
	var inputs = document.getElementsByClassName('forminput');
	for(var j = 0; j < firstName.length; j++){
    	if(firstName[j].innerHTML.toLowerCase() == inputs[0].value.toLowerCase() && lastName[j].innerHTML.toLowerCase() == inputs[1].value.toLowerCase()){
    		return true 
    	}
    }

}