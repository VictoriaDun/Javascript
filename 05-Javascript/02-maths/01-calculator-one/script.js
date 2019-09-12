/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let opun, opdeux, somme; 
        operandeun = document.getElementById('op-one').value;
        operandedeux = document.getElementById('op-two').value;
        somme = parseInt(operandeun) + parseInt(operandedeux);
        document.getElementById('addition').value= somme;
        alert('result='+ somme)
     

        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let opun, opdeux, substr; 
        operandeun = document.getElementById('op-one').value;
        operandedeux = document.getElementById('op-two').value;
        substr = parseInt(operandeun) - parseInt(operandedeux);
        document.getElementById('substraction').value= substr;
        alert('result='+ substr)// perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let opun, opdeux, mult; 
        operandeun = document.getElementById('op-one').value;
        operandedeux = document.getElementById('op-two').value;
        mult = parseInt(operandeun) * parseInt(operandedeux);
        document.getElementById('multiplication').value= mult;
        alert('result='+ mult)/// perform an multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        let opun, opdeux, div; 
        operandeun = document.getElementById('op-one').value;
        operandedeux = document.getElementById('op-two').value;
        div = parseInt(operandeun) / parseInt(operandedeux);
        document.getElementById('division').value= div;
        alert('result='+ div)// perform an division
    });
})();
