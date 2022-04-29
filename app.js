	//The JS code below will demonstrate the Try
	//Throw, Catch, and Finally statements in the 
	//validation form in the Contact page

	function validateFirstName(event) {
		event.preventDefault();
		var formInvalid = false;
		try {
			var firstName = document.getElementById ("firstName").value;
			if (firstName === "") {
				throw "You must enter a valid First Name in the field"
			}
		}
		catch (err) {
			console.log(err);
			formInvalid = true;
			document.getElementById("fNameErr").innerHTML = err;
			document.getElementById("fNameErr").style.display = "block";
			return false;
		}
		finally { 
			if (formInvalid) {
				console.log("Please fix all the form errors")
			}
		}
		return true;
		}

		function createEventListeners() {
			var submitBtn = document.getElementById("btnSubmit");
			submitBtn.addEventListener("click", validateFirstName, false);
		}

		window.addEventListener("load", createEventListeners, false);

		//The use of Try, Catch, Throw and Finally will be
		//used here to validate that the form needs to be
		//filled out and that they need a certain level of exp.

		// 1) I attached the ID of the Artistic Experience Level field
		//into the get element by ID in order to target it.
		// 2) The if statement then checks to see if the field is "" empty, 
		//if so then it catches it as an error and throws the throw statement 
		//then goes down to the catch statements.
		// 3) The catch statements then displays the errMsg inside the form on
		//the HTML document.
		// 4) The finally statement then displays a message in the console to 
		//fix the errors inside the form.
		// 5) The function then returns a value of true if there is no error.

		function validateArtExp() {
			var formInvalid = false;
			try {
				var artExp = document.getElementById("artExp").value;
				if (artExp === "") {
					throw "You must enter a valid Experience Level in the field"
				}
			}
			catch (errAlert) {
				console.log(errAlert);
				formInvalid = true;
				document.getElementById("artExpErr").innerHTML = errAlert;
				document.getElementById("artExpErr").style.display = "block";
				return false;
			}
			finally { 
				if (formInvalid) {
					console.log("Please fix all the form errors")
				}
			}
			return true;
			}

			function createEventListeners() {
				var submitBtn = document.getElementById("btnSubmit");
				submitBtn.addEventListener("click", validateArtExp, false);
			}

			window.addEventListener("load", createEventListeners, false);