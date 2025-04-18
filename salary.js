let basicSalary = 40000
let DA ;
let HRA ;
let PF;


if (basicSalary <= 10000) {
    DA = 25
    HRA = 30
    PF =  8
    let totalSalary = basicSalary + DA /100 * basicSalary + HRA /100 * basicSalary - PF /100 * basicSalary
    console.log(`your total salary is : ${totalSalary}`);
} else if (basicSalary > 10000 && basicSalary < 20000) {
    DA = 20
    HRA = 25
    PF =  6
    let totalSalary = basicSalary + DA /100 * basicSalary + HRA /100 * basicSalary - PF /100 * basicSalary
    console.log(`your total salary is : ${totalSalary}`);
} else if (basicSalary >= 30000) {
    DA = 10
    HRA = 15
    PF =  2
    let totalSalary = basicSalary + DA /100 * basicSalary + HRA /100 * basicSalary - PF /100 * basicSalary
    console.log(`your total salary is : ${totalSalary}`);
} 

