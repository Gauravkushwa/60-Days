
// let emailId = "kingkantshiva@gmail.com";

// // Solution 1

// function protectEmail(email) {
//   let secureEmail = "";
//   let arr = email.split("@");
//   secureEmail = arr[0].substring(0, arr[0].length / 2) + "...@" + arr[1];

//   return secureEmail;
// }

// const protectedEmail = protectEmail(emailId);
// console.log(protectedEmail);

// let emailId = "kingkantshiva@gmail.com";

// function protectEmail(email){
//     let secureEmail = "";
//     let arr = email.split('@');
//     console.log(arr);
//     secureEmail = arr[0].substring(0,arr[0].length/2) + "...@" + arr[1];
//     console.log(secureEmail);
// }
// protectEmail(emailId);

// ///  geeks --> iggmt

// let str = "geeks";
// let str1 = str.charCodeAt(4)+2;
// console.log(str1);
// let str2 = str1.charAt(4);
// console.log(str2);


// const nums = [1,2,3,4,5];
// let multiThree = nums.map((num)=>{
//     return num*3;
// })
// console.log(multiThree);

// PolyFill for Map()

// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }

// const nums = [1,2,3,4,5];
// let multiThree = nums.myMap((num)=>{
//     return num*5;
// })
// console.log(multiThree);


// Filter

// const nums = [1,2,3,4,5];

// let greaterTwo = nums.filter((num)=>{
//     return num > 2;
// })

// console.log(greaterTwo);

// PolyFill for Filter...

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// const nums = [1,2,3,4,5];

// let greaterTwo = nums.myFilter((num)=>{
//     return num > 3;
// })

// console.log(greaterTwo);

// Reduce...

// const nums = [1,2,3,4,5,6];
// const sum = nums.reduce((acc,curr,i,arr)=>{
//     return acc+curr ;
// })
// console.log(sum);

//  PolyFill for Reduce....

// Array.prototype.myReduce = function(cb,initialValue){
//     let accumulator = initialValue;

//     for(let i=0; i<this.length; i++){
//         accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
//     }
//     return accumulator;
// }

// const nums = [1,2,3,4,5,6];
// const sum = nums.myReduce((acc,curr,i,arr)=>{
//     return acc*curr ;
// })
// console.log(sum);


// Qs.

// let students = [
//     {name:"Jason", rollNum:7, marks:89},
//     {name:'Shiva', rollNum:10, marks:90},
//     {name:'salim', rollNum:12, marks:98},
//     {name:'suraj', rollNum:34, marks:100},
//     {name:'prakash', rollNum:44, marks:55},
//     {name:'sanaya', rollNum:55, marks:45},
//     {name:'Arbaz', rollNum:43, marks:56},
// ];

// // Return only name with capital

// console.log("Return only name with capital:")

// let student = students.map(data =>{
//     return data.name.toUpperCase();
// })
// console.log(student);

// // Return details who score more than 60..

// console.log("Return who score more than 60 marks:");

// let moreMarks = students.filter(student=>{
//     return student.marks > 60;
// })
// console.log(moreMarks);


// // Sum of Marks of all students..

// console.log("Sum of Marks of All Students:");

// let sumOfAllMarks = students.reduce((pre, curr)=>{
//     return pre + curr.marks;
// },0);

// console.log(`Sum is : ${sumOfAllMarks}`);

// // Only students who scored more than 60

// console.log("Only students who score more than 60 :");

// let moreThan = students.filter((val)=> val.marks > 60).map(data => data.name);

// console.log(moreThan);

// // Who has less than 60 marks add 20 marks..

// console.log("Added 20 marks ...");

// let addMarks = students.filter((val)=> val.marks < 60).map(add => add.marks + 20);

// console.log(addMarks);


// function speakButton() {
//     var state = document.getElementById('text');
//     // If state is currently true, set it to false; otherwise, set it to true
//     state.textContent = state.textContent === 'true' ? 'false' : 'true';
// }


// const getData = async (searchValue) =>{
//     let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
//     let jsonData = await data.json();
//     console.log(jsonData);
// }
// getData("test");

// let Proto1 = {
//     collage : "Bist",
//     hod : "manish"
// }

// let obj1 = {
//     name:"vivek",
//     age : 20,
//     __proto__:Proto1

// }
// console.log(obj1.collage);
// let obj2 = {
//     name:"suraj",
//     age :22,
//     __proto__:Proto1

// }
// console.log(obj2.collage);

// let obj3 = {
//     name:"salim",
//     age : 21,
//     __proto__:Proto1
// }
// console.log(obj3);


// Polyfills of forEach

// Array.prototype.myForEach = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// }

// let arr = [1,2,3,4,5,6];
// arr.myForEach((ele,index,arr1)=>{
//     console.log(ele,index);
// })

// arr.forEach((ele,index)=>{
//     console.log(ele,index);
// })

// reduce(accu,curr,initi)

// Array.prototype.myReduce = function(cb,initialValue){
//     var accumulator = initialValue;

//     for(let i=0; i<this.length; i++){
//         accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
//     }
//     return accumulator;
// }
// let arr = [1,2,3,4,5,6,7];
// let myVal = arr.myReduce((pre,curr)=>{
//     return pre + curr;
// })
// console.log(myVal);

// let val = arr.reduce((pre,curr)=>{
//     return pre + curr;
// })
// console.log(val);


// reduce(accumulator,current,i,arr)=>{,initial}

// Array.prototype.myReduce = function(cb,initialValue){
//     let accumulator = initialValue;

//     for(let i=0; i<this.length; i++){
//         accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
//     }
//     return accumulator;
// }

// let arr = [1,2,3,4,5,6,7];
// let myVal = arr.myReduce((pre,curr)=>{
//     return pre + curr;
// })
// console.log(myVal);

// let datas = [
//     {name:"india", value:"in", city:"delhi"},
//     {name:"pak", value:"pk", city:"lahore"},
//     {name:"nepal", value:"np", city:"kathmandu"}
// ];

// let countryDrop = document.createElement("select");
// document.body.appendChild(countryDrop);
// datas.forEach((data)=>{
//     let option = document.createElement("option");
//     option.text = data.name;
//     option.value = data.value;

//     countryDrop.appendChild(option);
// })

// let cityDrop = document.createElement("select");
// document.body.appendChild(cityDrop);

// let updateCity = ()=>{
//     let countryData = countryDrop.value;
//     console.log(countryData);
//     let ctrData = datas.filter((val) => val.value === countryData);
//     console.log(ctrData);
    
// cityDrop.innerHTML = "";
//     ctrData.forEach((cityData)=>{
//         let option1 = document.createElement("option");
//         option1.text = cityData.department;

//         cityDrop.appendChild(option1);
//     })
// }

// countryDrop.addEventListener("click",updateCity);
// updateCity();


// function countStrings(inputString, delimiter) {
//     // Split the input string by the delimiter and return the count of resulting strings
//     let str =  inputString.split(delimiter).length;
//     if(str > 1){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// // Example usage:
// const input = "ramesh suresh mahesh";
// const delimiter = " ";
// console.log(countStrings(input, delimiter)); // Output: 3


// let drop1 = document.createElement('select');
// document.body.appendChild(drop1);

// let fetchUrl = async () =>{
//     let url = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
//     let res = await url.json();
//     // console.log(res);
//     let datas =  res.data;
//     // console.log(datas);

//     let setData = datas.map(({ department }) => department === 'engineering');
//     console.log(setData);
// }

//     datas.forEach(depa =>{
//         let name = document.querySelector("#name");
//         let gender = document.querySelector("#gender");
//         let salary = document.querySelector("#salary");
//         // console.log(depa);
//         let option = document.createElement('option');
//         option.text = depa.department;
//         option.value = depa.id;
//         // console.log(option);

//         drop1.appendChild(option);
//         console.log(depa.department);
        

//         drop1.addEventListener('change', ()=>{

          

//             if(depa.department === 'engineering'){
//                  name.innerHTML = depa.name;
//                  gender.innerHTML = depa.gender;
//                  salary.innerHTML = depa.salary;
//             }
//             if(depa.department === 'operations'){
//                 name.innerHTML = depa.name;
//                 gender.innerHTML = depa.gender;
//                 salary.innerHTML = depa.salary;
//            }
//            if(depa.department === 'finance'){
//             name.innerHTML = depa.name;
//             gender.innerHTML = depa.gender;
//             salary.innerHTML = depa.salary;
//        }

//         })

//     })

  
// }

// fetchUrl();

// let getDataValue = async () =>{
    //         let url = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
    //         let res = await url.json();
    //         // console.log(res);
    //         let datas =  res.data;
    //         // console.log(datas);
    //         let option = document.querySelector("#option");
    //          option.textContent = datas.department;
    //          option.value = datas.value;
    //          selectData.appendChild(option);
    //     }
    
    // fetchUrl();


    // let selectData = document.querySelector("#selectData");

    // let getData = async ()=>{
    //     let data = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
    //     let res = await data.json();
    //     // console.log(res);
    //     let getRes = res.data;
    //     // console.log(getRes);

    //     getRes.forEach((key,val)=>{
    //         console.log(val);
    //         let option = document.querySelector("#option");
    //         option = key.department;
    //         option.textContent = val.department;
    //         // option.value  = val.id;

    //         console.log(option);

    //         // selectData.appendChild(option);
    //         // selectData.innerHTML = option;
    //     })
    // }

    // getData();

//    let getData = async () =>{
//       fetch("http://localhost:5000/search").then(res => res.json()).then(data =>{
//           console.log(data[0].country);
//       })
//    }

//    getData();

// let selectData = document.querySelector("#selectData");

// let getData = async ()=>{
//         let data = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
//         let res = await data.json();
//         //  console.log(res);
//         let getRes = res.data;
//         getRes.forEach((el)=>{
//             // console.log(el.department);
//             let option = document.createElement("option");
//             option.text = el.department;
//             option.id = el.id;

//             selectData.appendChild(option);
//         })
//         //  console.log(getRes);
// }

// getData();


// let selectData = document.querySelector("#selectData");
// let employeeTable = document.querySelector("#employeeTable tbody");
// let selectSalary  = document.querySelector("#selectSalary");

// let getData = async () => {
//     let data = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
//     let res = await data.json();
//     let getRes = res.data;

//     let departmentsSet = new Set();

//     getRes.forEach((el) => {

//         if (!departmentsSet.has(el.department)) {
//             departmentsSet.add(el.department);
//             let option = document.createElement("option");
//             option.text = el.department;
//             option.value = el.department;
//             selectData.appendChild(option);
//         }
//     });

     
//     selectData.addEventListener('change', () => {
//         // let selectedDepartment = event.target.value;
//         displayEmployeeData(selectData.value, getRes);
//     });

//     selectSalary.addEventListener('change', () => {
//         displayEmployeeData(selectData.value, getRes);
//     });
// }

// let displayEmployeeData = (department, data) => {
//     employeeTable.innerHTML = ""; 

//     let filteredData = data.filter(el => el.department === department);
//     filteredData.forEach(el => {
//         let row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${el.name}</td>
//             <td>${el.gender}</td>
//             <td><img src="${el.image}" alt="${el.name}" width="50" height="50"></td>
//             <td>${el.salary}</td>
//             <td>${el.department}</td>
//         `;
//         employeeTable.appendChild(row);
//     });

//     if(selectSalary.value === 'lowtohigh'){
//         filteredData.sort((a, b) => b.salary - a.salary);
//     }
//     else if(selectSalary.value === 'hightolow'){
//         filteredData.sort((a, b) => a.salary - b.salary);
//     }
// }

// getData();

let selectData = document.querySelector("#selectData");
let employeeTable = document.querySelector("#employeeTable tbody");
let selectSalary = document.querySelector("#selectSalary");

let getData = async () => {
    let data = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
    let res = await data.json();
    let getRes = res.data;

    let departmentsSet = new Set();

    
    getRes.forEach((el) => {
        if (!departmentsSet.has(el.department)) {
            departmentsSet.add(el.department);
            let option = document.createElement("option");
            option.text = el.department;
            option.value = el.department;
            selectData.appendChild(option);
        }
    });

    
    displayEmployeeData(getRes);

    
    selectData.addEventListener('change', () => {
        displayEmployeeData(getRes);
    });

    selectSalary.addEventListener('change', () => {
        displayEmployeeData(getRes);
    });
};

let displayEmployeeData = (data) => {
    employeeTable.innerHTML = "";

    let filteredData = data;

    
    if (selectData.value !== "") {
        filteredData = filteredData.filter(el => el.department === selectData.value);
    }

    
    if (selectSalary.value === 'lowToHigh') {
        filteredData.sort((a, b) => a.salary - b.salary);
    } else if (selectSalary.value === 'highToLow') {
        filteredData.sort((a, b) => b.salary - a.salary);
    }

   
    filteredData.forEach(el => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.gender}</td>
            <td>${el.salary}</td>
            <td>${el.department}</td>
        `;
        employeeTable.appendChild(row);
    });
};

getData();
