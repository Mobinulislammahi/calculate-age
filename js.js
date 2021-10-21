function agecalculator(){
  var userinput = document.getElementById("date").value;
  var dob = new Date(userinput);
  if(userinput == null || userinput == ""){
    document.getElementById("message").innerHTML = "**please choose your date of birth**"
    return false;
  }
  else{
    var month_dff  = Date.now() - dob.getTime();
    var age_dt 	   = new Date(month_dff)
    var year   	   = age_dt.getUTCFullYear();
    var age    	   = Math.abs(year - 1970);
    
    return document.getElementById("result").innerHTML = "Age is "+ age +" years";
  }
  }
function reset(){
  $("#date").val('00-00-0000');

}
