//ex1
function ShowDate() {
	document.getElementById('sd').innerHTML = Date();
}
//ex2
function replaceText() {
	document.getElementById('rt').innerHTML = Date();
}
//ex3
function replaceText2() {
	document.getElementById('rt2').innerHTML ="Sheikh Ahad"
}
//ex4
function bOn() {
	document.getElementById('bulb').src = "images/bulb2.gif"
}
function bOff() {
	document.getElementById('bulb').src = "images/bulb1.gif"
}
//ex5
function bShow() {
	document.getElementById('bulb3').style.display = "block";
}
function bHide() {
	document.getElementById('bulb3').style.display = "none";
}	
//ex6
function myFunction() {
	document.write("Result");
}
//ex7
function info() {
	let f_name ="Sheikh Ahad";

	let age = 26;

    document.getElementById('h3').innerHTML ="Her name is "+f_name+".";
}
//ex8
function result() {
	let num1 = 5;

	let num2 = 10;

	let result = num1 + num2;

    document.getElementById('h4').innerHTML =
    "Output is"+" "+result;
}
//ex9
function result1() {
	let num;

	num = 5;

	num = 10;

	num = num + num;

    document.getElementById('h5').innerHTML =
    "Output is"+" "+num;
 }
//ex10
        function example10() {
            let a = 10;
            let b = 20;

            document.getElementById("output10").innerHTML = a + b;
        }
 //ex11
        function example11() {
            let a = 30;
            let b = 10;

            document.getElementById("output11").innerHTML = a - b;
        }
 //ex12
        function example12() {
            let a = 5;
            let b = 4;

            document.getElementById("output12").innerHTML = a * b;
        }
//ex13
        function example13() {
            let a = 20;
            let b = 5;

            document.getElementById("output13").innerHTML = a / b;
        }
//ex14
        function example14() {
            let a = 17;
            let b = 5;

            document.getElementById("output14").innerHTML = a % b;
        }
 //ex15
        function example15() {
            let num = 10;

            if (num % 2 === 0) {
                document.getElementById("output15").innerHTML = "Even";
            } else {
                document.getElementById("output15").innerHTML = "Odd";
            }
        }
//ex16
        function example16() {
            let num = -5;

            if (num > 0) {
                document.getElementById("output16").innerHTML = "Positive";
            } else if (num < 0) {
                document.getElementById("output16").innerHTML = "Negative";
            } else {
                document.getElementById("output16").innerHTML = "Zero";
            }
        }
 //ex17
        function example17() {
            let a = 25;
            let b = 40;

            document.getElementById("output17").innerHTML = Math.max(a, b);
        }
//ex18
        function example18() {
            let a = 10;
            let b = 25;
            let c = 15;

            document.getElementById("output18").innerHTML = Math.max(a, b, c);
        }
//ex19
        function example19() {
            let age = 20;

            if (age >= 18) {
                document.getElementById("output19").innerHTML = "Eligible to vote";
            } else {
                document.getElementById("output19").innerHTML = "Not eligible";
            }
        }
//ex20
        function example20() {
            let marks = 65;

            if (marks >= 40) {
                document.getElementById("output20").innerHTML = "Pass";
            } else {
                document.getElementById("output20").innerHTML = "Fail";
            }
        }
//ex21
        function example21() {
            let marks = 85;
            let grade;

            if (marks >= 80) {
                grade = "A+";
            } else if (marks >= 70) {
                grade = "A";
            } else if (marks >= 60) {
                grade = "B";
            } else if (marks >= 50) {
                grade = "C";
            } else {
                grade = "Fail";
            }

            document.getElementById("output21").innerHTML = grade;
        }
// 22
        function example22() {
            let result = "";

            for (let i = 1; i <= 10; i++) {
                result += i + " ";
            }

            document.getElementById("output22").innerHTML = result;
        }
 // 23
        function example23() {
            let result = "";

            for (let i = 2; i <= 20; i += 2) {
                result += i + " ";
            }

            document.getElementById("output23").innerHTML = result;
        }
//24
        function example24() {
            let result = "";

            for (let i = 1; i <= 20; i += 2) {
                result += i + " ";
            }

            document.getElementById("output24").innerHTML = result;
        }
//25
        function example25() {
            let sum = 0;

            for (let i = 1; i <= 10; i++) {
                sum += i;
            }

            document.getElementById("output25").innerHTML = sum;
        }
//26
        function example26() {
            let num = 5;
            let result = "";

            for (let i = 1; i <= 10; i++) {
                result += num + " × " + i + " = " + (num * i) + "<br>";
            }

            document.getElementById("output26").innerHTML = result;
        }
 // 27
        function example27() {
            let result = "";

            for (let i = 10; i >= 1; i--) {
                result += i + " ";
            }

            document.getElementById("output27").innerHTML = result;
        }
// 28
        function example28() {
            let i = 1;
            let result = "";

            while (i <= 5) {
                result += i + " ";
                i++;
            }

            document.getElementById("output28").innerHTML = result;
        }
 // 29
        function example29() {
            let i = 1;
            let result = "";

            do {
                result += i + " ";
                i++;
            } while (i <= 5);

            document.getElementById("output29").innerHTML = result;
        }
// 30
        function example30() {

            function add(a, b) {
                return a + b;
            }

            document.getElementById("output30").innerHTML = add(10, 20);
        }
 // 31
        function example31() {

            function subtract(a, b) {
                return a - b;
            }

            document.getElementById("output31").innerHTML = subtract(20, 5);
        }
 // 32
        function example32() {

            const square = (num) => {
                return num * num;
            };

            document.getElementById("output32").innerHTML = square(5);
        }
// 33
        function example33() {
            let num = 6;

            document.getElementById("output33").innerHTML = num ** 2;
        }
// 34
        function example34() {
            let num = 4;

            document.getElementById("output34").innerHTML = num ** 3;
        }
 // 25
        function example35() {

            let num = 5;
            let factorial = 1;

            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }

            document.getElementById("output35").innerHTML = factorial;
        }
// 36
        function example36() {

            let text = "JavaScript";

            document.getElementById("output36").innerHTML = text.length;
        }
// 37
        function example37() {

            let text = "hello world";

            document.getElementById("output37").innerHTML =
                text.toUpperCase();
        }
// 38
        function example38() {

            let text = "HELLO WORLD";

            document.getElementById("output38").innerHTML =
                text.toLowerCase();
        }
// 39
        function example39() {

            let fruits = ["Apple", "Banana", "Mango"];

            document.getElementById("output39").innerHTML =
                fruits.join(", ");
         }
// 40
        function example40() {

            let student = {
                name: "Sheikh Ahad",
                age: 26,
                department: "Political Science"
            };

            document.getElementById("output40").innerHTML =
                "Name: " + student.name +
                ", Department: " + student.department;
        }