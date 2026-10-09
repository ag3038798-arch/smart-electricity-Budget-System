//alert("Connected");
let saveBtn =
document.getElementById("saveBtn");
if(saveBtn){
saveBtn.addEventListener("click",function(){
    alert("Button Clicked");
    let expense=document.getElementById("expenseName").value;
    let category=document.getElementById("category").value;
    let amount=document.getElementById("amount").value;
    let date=document.getElementById("date").value;
    let expenseData = {
      expense:expense,
      category:category,
      amount:amount,
      date:date
    };
    let allExpenses =
    JSON.parse(localStorage.getItem("expenses"))||[];
    allExpenses.push(expenseData);
    localStorage.setItem("expenses",
        JSON.stringify(allExpenses));
        console.log(allExpenses);
        console.log(localStorage.getItem("expenses"));
    alert("Expense Saved Successfully!");
    window.location.href="history.html";
        
    
});
}
//history table
let table = 
document.getElementById("historyTable");
if(table){

    let expenses= 
    JSON.parse(localStorage.getItem("expenses"))||[];
    for(let i=0;i<expenses.length;i++){
        let row = table.insertRow();
        row.insertCell(0).innerHTML = 
         expenses[i].expense;
        row.insertCell(1).innerHTML =
         expenses[i].category; 
        row.insertCell(2).innerHTML = 
        expenses[i].amount; 
        row.insertCell(3).innerHTML = 
        expenses[i].date; 
        row.insertCell(4).innerHTML = 
        '<button>Delete</button>'; 
        row.insertCell(5).innerHTML = 
        '<button onclick="editExpense(${i})">Edit</button>'; 

  }
}