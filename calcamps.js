 function calccamp1(){
	
	var p1 = parseInt(document.getElementById('p1').value);
	var p2 = parseInt(document.getElementById('p2').value);
	var ex = parseInt(document.getElementById('e_1').value);
	document.getElementById('m_1').value = (p1 + p2 + ex)/3;  
  }

 function calccamp2(){
	
	var p12 = parseInt(document.getElementById('p12').value);
	var p22 = parseInt(document.getElementById('p22').value);
	var ex2 = parseInt(document.getElementById('e_12').value);
	document.getElementById('m_12').value = (p12 + p22 + ex2)/3;  
  }


 function calccamp3(){
	
	var p13 = parseInt(document.getElementById('p13').value);
	var p23 = parseInt(document.getElementById('p23').value);
	var ex3 = parseInt(document.getElementById('e_13').value);
	document.getElementById('m_13').value = (p13 + p23 + ex3)/3;  
  }
