// let section=document.getElementById("section");

// let container=document.createElement("div");
// section.appendChild(container);
// container.setAttribute("class","container");

// let row=document.createElement("div");
// container.appendChild(row);
// row.setAttribute("class","row");

// let table=document.createElement("div");
// row.appendChild(table);
// table.setAttribute("class","table");
// table.innerText="";

// let table1=document.createElement("div");
// row.appendChild(table1);
// table1.setAttribute("class","table");

// let table2=document.createElement("div");
// row.appendChild(table2);
// table2.setAttribute("class","table");

// let table3=document.createElement("div");
// row.appendChild(table3);
// table3.setAttribute("class","table");

// let table4=document.createElement("div");
// row.appendChild(table4);
// table4.setAttribute("class","table");

// let table5=document.createElement("div");
// row.appendChild(table5);
// table5.setAttribute("class","table");

// let table6=document.createElement("div");
// row.appendChild(table6);
// table6.setAttribute("class","table");
// table6.innerText="hi";


// let table7=document.createElement("div");
// row.appendChild(table7);
// table7.setAttribute("class","table");

// let table8=document.createElement("div");
// row.appendChild(table8);
// table8.setAttribute("class","table");


// let table9=document.createElement("div");
// row.appendChild(table9);
// table9.setAttribute("class","table");
	


// for(let i=1;i<=15;i++){
		// function table11(a,b){
		// let sum="";
		// for(let j=1;j<=15;j++){
		// sum+=(a+"*"+j+"="+(a*j)+"\n");
		// }
		// table9.innerText=sum;
	// };
// }
// table11(1,15);
// console.log(emp);
// console.log(number());




	let section = document.getElementById("section");
for(let i =1;i<=10;i++){
	
	let table= document.createElement("div");
	table.id="table"+i;
	section.appendChild(table);
	

	for(let k=1;k<=15;k++){
		let para=document.createElement("p");
		para.setAttribute("class","number");
		table.appendChild(para);
		
		let tableNum=document.createElement("span");
		para.appendChild(tableNum);
		tableNum.setAttribute("class","table_num");
		tableNum.innerHTML=k;
		
		let star=document.createElement("span");
		para.appendChild(star);
		star.setAttribute("class","star");
		star.innerHTML="*";
		
		
		let num=document.createElement("span");
		para.appendChild(num);
		num.setAttribute("class","num");
		num.innerHTML=i;
		
		let equal=document.createElement("span");
		para.appendChild(equal);
		equal.setAttribute("class","equal");
		equal.innerHTML="=";
		
		let ans=document.createElement("span");
		para.appendChild(ans);
		ans.setAttribute("class","ans");
		ans.innerHTML=i*k;
	}
}	
