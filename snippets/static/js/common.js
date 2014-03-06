$(document).ready(function() {

	$("#link1").click(function() {
		$("#smstable").hide();
	});

	$("#link2").click(function() {
		$("#smstable").show();
	});

	$("#link3").click(function() {
		$("#mmstable").hide();
	});

	$("#link4").click(function() {
		$("#mmstable").show();
	});

	$("#link5").click(function() {
		$("#ssstable").hide();
	});

	$("#link6").click(function() {
		$("#ssstable").show();
	});

	$("#link7").click(function() {
		$("#voicecalltable").hide();
	});

	$("#link8").click(function() {
		$("#voicecalltable").show();
	});

});

function displayResult() {
	var x = document.getElementById("pwd").value;
	alert(x);
}

function validateForm() {
	var x = document.forms["myForm"]["username"].value;
	var y = document.forms["myForm"]["Password"].value;

	if (x == null || x == "") {
		if (y == null || y == "") {
			alert("Username and Password must be filled out");
			return false;
		} else {

			alert("User name must be filled out");
			return false;
		}
	} else if (y == null || y == "") {
		alert("Password must be filled out");
		return false;
	}

}
function unhide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		item.className = (item.className == 'hidden') ? 'unhidden' : 'hidden';
	}
}

$(selector).click(function () {
  //for close, opened dropdown.
  if ($("navbar").hasClass("in")) {
    $('[data-toggle="collapse"]').click();
  }
});