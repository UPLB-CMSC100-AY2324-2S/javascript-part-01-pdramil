function validatePassword(password1, password2) {
	//check if the two passwords match
	if(password1 != password2) {
		return false;
	}
	
	//check if the passwords has at least 8 characters
	if(password1.length < 8 || password2.length < 8) {
		return false;
	}
	
	let hasNumber = false;
	let hasUppercase = false;
	let hasLowercase = false;
	
	//check if the password has at least 1 number, 1 uppercase char, and 1 lowercase char
	for(let i=0; i<password1.length; i++) {
		if(!isNaN(password1[i])) {
			hasNumber = true;
		}else if(password1[i].toLowerCase() != password1[i]) {
			hasUppercase = true;
		}else if(password1[i].toUpperCase() != password1[i]) {
			hasLowercase = true;
		}
	}
	//console.log(hasNumber, hasUppercase, hasLowercase);
	return hasNumber && hasUppercase && hasLowercase;
}

//test cases
// console.log(validatePassword('helloworld', 'hello'));
// console.log(validatePassword('hello', 'hello'));
// console.log(validatePassword('hello1234', 'hello1234'));
// console.log(validatePassword('Hello1234', 'Hello1234'));
// console.log(validatePassword('HELLO1234', 'HELLO1234'));

//function to reverse the password
function reversePassword(password) {
	let reversedPassword = '';
	for(let i=password.length-1; i>=0; i--) {
		reversedPassword += password[i];
	}
	return reversedPassword;
}

//console.log(reversePassword("Pass1234"));

//function that returns the username and new password
function stoT1FakerrePassword(name, password1, password2) {
	let newPassword = '';		//will store the new password

	/* check if the password is valid. if not, set password1 as the new password
	otherwise, set the reverse of the password as the new password.*/
	if(!validatePassword(password1, password2)) {
		newPassword = password1;
	}else {
		newPassword = reversePassword(password1);
	}

	//user object
	const user = {
		name: name,
		newpassword: newPassword
	}
	console.log('name:', user.name, '\nnewpassword:', user.newpassword);
}

//final test cases
console.log('Test Case 1');
storePassword('John', 'Pass1234', 'Pass1234');					//true; passwords validated
console.log('\nTest Case 2');
storePassword('John', 'Pass123', 'Pass12345');					//false; passwords do not match
console.log('\nTest Case 3');					
storePassword('Precious', 'Precious1004', 'Precious1004');		//true; passwords validated
console.log('\nTest Case 4');
storePassword('Faker', 'T1Faker', 'T1Faker');					//false; passwords do not have 8 char
