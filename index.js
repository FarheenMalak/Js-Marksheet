var student1="Ali";
var student2="Sara";
var sub1 = "English";
var sub2 = "Urdu";
var sub3 = "Maths";
var marks1= 98;
var marks2=78;
var marks3=89;
var total1= marks1 + marks2 + marks3;
var per1=total1*100/300;
var marks4= 67;
var marks5=87;
var marks6=91;
var total2= marks4 + marks5 + marks6;
var per2=total2*100/300;

document.write("<table border='1'>"+
"<tr>"+"<th>"+"Name"+"</th>"
+"<th>"+sub1+"</th>"
+"<th>"+sub2+"</th>"+"<th>"+sub3+"</th>"+"<th>"+"Total"+"</th>"+"<th>"+"Percentage"+"</th>"
+"</tr>"+
"<tr>"+"<td>"+student1+"</td>"
+"<td>"+marks1+"</td>"
+"<td>"+marks2+"</td>"+"<td>"+marks3+"</td>"+"<td>"+total1+"</td>"+"<td>"+per1+"</td>"
+"</tr>"+
"<tr>"+"<td>"+student2+"</td>"
+"<td>"+marks4+"</td>"
+"<td>"+marks5+"</td>"+"<td>"+marks6+"</td>"+"<td>"+total2+"</td>"+"<td>"+per2+"</td>"
+"</tr>"+
+"</table>")
