$(document).ready(function(){

      $.validator.setDefaults({
    		submitHandler: function() {
    			alert("Submitted sucessfully.");
          return true;
    		}
    	});

      $("#form").validate({
  			rules: {
  				email: {
  					required: true,
  					email: true
  				},
  				password: "required",
  				password: {
  					required: true,
  					minlength: 6
  				},
  				confirm_password: {
  					required: true,
  					// minlength: 6,
  					equalTo: "#password"
  				},
  				checkbox: "required"
  			},
  			messages: {
  				password: {
  					required: "Please provide a password",
  					minlength: "Your password must be at least 6 characters long"
  				},
  				confirm_password: {
  					required: "Please provide a password",
  					// minlength: "Your password must be at least 5 characters long",
  					equalTo: "Please enter the same password as above"
  				},
  				email: "Please enter a valid email address",
  				checkbox: "Please accept our policy",
  			}
  		});

    });
