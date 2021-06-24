//creates an object to keep track of values.  

const Calculator = {
    //this displays 0 on the screen
    Display_Value:'0',
    //this will hold the first operand for any expressioins, we set it to null for now
    First_Operand: null,
    //this checks wheter or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set to null for now
    operator:null,
};

//this modifies values each time a button is clicked

function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand} = Calculator;
    //we are checking to see if wait_second operand is true and set
    //display value to the key that was clicked.
    if(Wait_Second_Operand===true){
        Calculator.Display_Value=digit;
        Calculator.Wait_Second_Operand=false;       
    } else {
        //this overwrites Display Value if the current value is 0
        //otherwise it adds onto it
        Calculator.Display_Value=Display_Value==='0'?digit:Display_Value + digit;
    }
}
//this section handles decimal points
function Input_Decimal(dot) { 
    //this ensures that accidental clicking of the decimal point
    //doesn't cause bug in your operation
    if(Calculator.Wait_Second_Operand===true)return;
    if(!Calculator.Display_Value.includes(dot)){
        //we are saying that if the Display)Value does not contain a decimal point
        //we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}
//this section handel operators

function Handle_Operator(Next_Operator){
    const {First_Operand, Display_Value, operator} = Calculator
    //when an operator key is pressed, we convert the current number 
    //displayed on the screen to a number an then store the result in
    //Calculator.First_Operand if it doesn't already exist
    const Value_of_Input =parseFloat(Display_Value);
    //check if an operator already exist and if Wait_Second_Operand is true,
    //then updates the  operator and exits from the function
    if(operator && Calculator.Wait_Second_Operand){
        Calculator.operator=Next_Operator;
        return;
    }
    if(First_Operand==null){
        Calculator.First_Operand=Value_of_Input;
    } else if (operator){//checks if an operator alrady exists
        const Value_Now =First_Operand ||0;
        //if operator exists,property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //opoerator is executed
        let result = Perform_Calculation[operator](Value_Now,Value_of_Input);
        //here we add a fixed amount of number after the deicmal
        result = Number(result).toFixed(9)
        //this will remove any trailing 0's
        result = (result*1).toString()
        Calculator.Display_Value=parseFloat(result);
        Calculator.First_Operand=parseFloat(result);
    }
    Calculator.Wait_Second_Operand=true;
    Calculator.operator=Next_Operator;
}

const Perform_Calculation = {

    '/': (First_Operand, Second_Operand) => First_Operand/Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) =>Second_Operand
};

function Calculator_Reset(){
    Calculator.Display_Value='0';
    Calculator.First_Operand=null;
    Calculator.Wait_Second_Operand=false;
    Calculator.operator=null;
}

//this function updates the screen with the contents of Display Value

function Update_Display() { 

    const display = document.querySelector('.calcuator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
    const keys = document.querySelector('calculator-keys');
    keys.addEventListener('click',(event)=>{
//the target variable is an object that represents the element
//taht was clicked
    const {target}=event;
    //if the element was clicked on is not a button,exit the function
    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Diplay();
        return;
    }
    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that AC clears the numbers from the Calculator
    if(target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();

})