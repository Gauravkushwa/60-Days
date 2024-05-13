// let container = document.querySelector('.container');
// let tbody = document.querySelector('#tbody');
// let departmentSellect = document.querySelector('#department');

// let sortChange = false;
// // console.log(departmentSellect);

// function getData(URL){
//     fetch(URL)
//     .then(function(res){
//         res = res.json()
//         return res
//     })
//     .then(function(res){
//         console.log(res);
//         showData(res)
//     })
// };

// function showData(element){
//        tbody.innerHTML = null
//         element.data.forEach(function (ele, i){
//         let row = document.createElement('tr');
//         let inp1 = document.createElement('td');
//         let inp2 = document.createElement('td');
//         let inp3 =  document.createElement('td');
//         let inp4 = document.createElement('td');
//         let inp5 = document.createElement('td');

//         inp1.innerHTML = ele.id;
//         inp2.innerHTML = ele.name;
//         inp3.innerHTML = ele.gender;
//         inp4.innerHTML = ele.department;
//         inp5.innerHTML = ele.salary;
        
        
//         row.append(inp1, inp2, inp3, inp4, inp5);
//         tbody.append(row);
//     })
// };

// let sortLogic = (order, data) => {

//     if(order == "asc"){
//         data.sort((a, b) => a.salary - b.salary);
//         renderData(data)
//     }
//     else if(order == "desc"){
//         data.sort((a, b) => b.salary - a.salary);
//         renderData(data)
//     }
//     return data;
// }

// let handerSortAndFilter = async () => {
//     fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
//     .then((res) => res.json())
//     .then((data) =>{

//         if(sortChange){
//             sortLogic(document.getElementById("level").value, data);
//             console.log(sortLogic);
//         }
//     })
// }

// getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees");

// let sort_population = document.querySelector("#level");
// sort_population.addEventListener("change", function(){
//     sortChange = true;
//     handerSortAndFilter();
// })




let data = [];
let filterChange = false;
let sortChange = false;
let fetchDepartments = async () =>{

    try {
        let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees");
        const data = await res.json();
        // console.log(data);
        renderData(data);
    } catch (error) {
        return error;
    }
    return data;
};


let renderData = (data) => {
    let container = document.getElementById("tbody");
    data.data.forEach(function(ele){
        let cardDiv = document.createElement('tr');
        let inp1 = document.createElement('td');
        let inp2 = document.createElement('td');
        let inp3 =  document.createElement('td');
        let inp4 = document.createElement('td');
        let inp5 = document.createElement('td');
    
        inp1.innerHTML = ele.id;
        inp2.innerHTML = ele.name;
        inp3.innerHTML = ele.gender;
        inp4.innerHTML = ele.department;
        inp5.innerHTML = ele.salary;
        
        
        cardDiv.append(inp1, inp2, inp3, inp4, inp5);
        container.append(cardDiv);
    })

    return container;
};

let sortLogic = (order, data) =>{
   
    if(order == "asc"){
        data.sort((a,b) => a.salary - b.salary);
        renderData(data)
    }
    else if(order == "desc"){
       data.sort((a,b) => b.salary - a.salary);
       renderData(data)
    }

    return data;
};

let filterByDepartmentLogic = (departmentName, data) =>{


};

let handleSortAndFilter = async() =>{
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    .then((res) => res.json())
    .then((data) =>{

        if(sortChange){
            sortLogic(document.querySelector("#level").value, data);
        }
        else if(filterChange){
           filterByDepartmentLogic(document.querySelector("#department").value, data);
        }
    });
};

window.onload = function (){

fetchDepartments();

let sort_population = document.getElementById("level");
sort_population.addEventListener("change",()=>{
   sortChange = true;
   handleSortAndFilter();
});

let filer_region = document.querySelector("#department");
filer_region.addEventListener("change",()=>{
    filterChange = true;
    handleSortAndFilter();
})
};

if(typeof exports !== "undefined"){
    module.exports = {
        renderData,
        handleSortAndFilter,
        sortLogic
    }
}