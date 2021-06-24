//This variable keeps track of whose turn it is.
let activePlayer='X';
//This array stores an array of moves. We use this to determine win conditions
let selectedSquares=[];

//This function is for placing an x or o in square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been slected already.
    //The .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if(!selectedSquares.some(element =>element.includes(squareNumber))) {
        //This variable retrieves the html element id that was slicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if(activePlayer==='X') {
            //if activePlayer =X, the x.png is placed in HTML.
            select.style.backgroundImage='url("images/x.png")';
            
        }   
        else{
            //if activePlayer -= to O, the O.png is placed
            select.style.backgroundImage='url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions 
        
        //This function parses the selectedSquares array to search for win conditions.
        checkWinConditions()
        //drawWinLine function is called to draw line if condition is met
        
        
        //this function utilizes html canvas to draw win lines.
           

        //This condition is for changing active player.
        if(activePlayer==="X"){
            //if active players is X change to O
            activePlayer="O";
        //if active player is anything over than X    
        }
        else{
            //changethe activePlayer to X
            activePlayer='X';
        }
        //This function plays sound
        audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if(activePlayer==='O'){
            //this function disables clicking for computer choice;
            disableClick(); 
            //this function waits 1 second before computer places image and enables click. 
        
            
            setTimeout(function() { computersTurn();},1000)
        }
        
            //Returning true is needed for our computersTurn() function to work
        return true;            
    }     

    
    //This function results in a random square being selected.
    function computersTurn() {

        //this is boolean needed for our while loop.
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while(!success){
            //a radom number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random()*9));

            //if the random number evaluated returns true, the square hasn't been selected yet
        
        if(placeXOrO(pickASquare)){
            //this line calls the function
            placeXOrO(pickASquare);
            //This changes our boolean and ends the loop
            success = true;
            };
        }
    }
}
function  checkWinConditions() {
    //X 0,1,2 condition
     if (arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100)}
    //X 3,4,5 condition
    else if (arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304)}
  //X 3,4,5 condition
    else if (arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,508)}
     //X 0,3,6 condition
    else if (arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558)} 
    //X 1,4,7 condition
    else if (arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558)}
      //X 2,5,8 condition
    else if (arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558)} 
      //X 6,4,2 condition
    else if (arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90)}
      //X 0,4,8 condition
    else if (arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520)}
      // 3,4,5 condition
    //Os
      //O 0,1,2 condition
    else if (arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100)}
    //o 3,4,5 condition
    else if (arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304)}
    //o 3,4,5 condition
    else if (arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,508)}
    //o 0,3,6 condition
    else if (arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558)} 
    //o 1,4,7 condition
    else if (arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558)}
    //o 2,5,8 condition
    else if (arrayIncludes('2O','5O','8O')){drawWinLine(508,50,508,558)} 
    //o 6,4,2 condition
    else if (arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90)}
    //o 0,4,8 condition
    else if (arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520)}
    
     else if (selectedSquares.length>=9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called
        setTimeout(function(){resetGame(); }, 1000);
        
     }
    //this function checks if an array includes 3 strings. It is used to check for 
    //each win condition.
   function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b= selectedSquares.includes(squareB)
        const c= selectedSquares.includes(squareC)
        //if the 3 variables we pass are all included in our array true is
        // returned and our else if condition executes the drawWinLine function
       if (a===true && b===true && c===true){return true}
    }                          
}

    function disableClick() {

        //this makes body unclickable
        body.style.pointerEvents='none';
        // this makes our body clickable again after 1 second.
        setTimeout(function(){body.style.pointerEvents = 'auto';},1000);
    }
    function audio(audioURL) {
        //we create a new audio object and we pass the path as a parameter.
        let audio = new Audio(audioURL);
        //play method plays our audio sound
        audio.play();
        }

    
        function drawWinLine(coordX1, coordY1,coordX2, coordY2){
            //This line accesses our html canvas element.
            const canvas = document.getElementById('win-lines')
            //this line gives us access to methods and properties to use on canvas.
            const c = canvas.getContext('2d');
            //This line indicates where the start of a alines x axis is.
            let x1 = coordX1,
                //this line indicates where the start of lines y is.
                y1 =coordY1,
                //this line indicates where the end of lines x is.
                x2=coordX2,
                //this line indicates where the end of a lines y is.
                y2=coordY2,
                //this variable stores temporary x axis data we update in our animation loop.
                x=x1,
                //this variable stores temporary y axis data we update in our animation loop.
                y=y1;
        
                //this function interacts with the canvas
            function animateLineDrawing(){
                //this variable creates a loop.
                const  animationLoop = requestAnimationFrame(animateLineDrawing);
                //this method cealrs content from last loop iteration
                c.clearRect(0,0,608,608)
                //this method starts a new path
                c.beginPath();
                //this method moves up to a starting point for our line
                c.moveTo(x1,y1)
                //this mehod indicates the endo point in our line.
                c.lineTo(x,y)
                //this method sets width of line
                c.lineWidth=10; 
                //this method sets the color of our line.
                c.strokeStyle ='rgba(70,255,33,.8)';
                //this method draws everything we laid out
                c.stroke();
                //This condition checks if we've reached the endpoint.
                if(x1 <= x2 && y1 <= y2){
                    //This condition adds 10 to the previous end x point.
                    if(x<x2){x+=10;}
                    //this condition adds 10 tp the previous end y point.
                    if(y<y2){y+=10;}
                    //this condition cancels our animation loop
                    //if we've reach the end points. 
                    if(x>=x2 && y>=y2) {cancelAnimationFrame(animationLoop); }    
                }
                //this conditon is similar to the one above
                //this is necessary for the 6,4,2 win condition
                if(x1<=x2 && y1>=y2){
                    if (x<x2){x +=10;}
                    if (y>y2){y-=10;}
                    if(x>=x2 && y<= y2){cancelAnimationFrame(animationLoop);}
                }     
            }
            //this function clears our canvas after our win line is drawn
            function clear() {
                //this line starts our animation loop.
                const animationLoop= requestAnimationFrame(clear);
                //this line clears our canvas
                c.clearRect(0,0,608,608);
                //this line stops our animation loop
                cancelAnimationFrame(animationLoop);              
            }
        //this line disallwos clicking while the win sound is playing
        disableClick();
        //this line plays the win sound
        audio('./media/winGame.mp3');
        //this line clals our main animation loop
        animateLineDrawing();
        //This line waits 1 second. then clears canvas, resets game, and allows clicking again. 
        setTimeout(function (){clear(); resetGame();},1000);
        
        
    }

    function resetGame(){
        //This for loop iterates through each HTML square element
        for (let i=0;i<9;i++) {
        //this variable gets the html element of i.
        let square = document.getElementById(String(i))
        
        //this removes our elements backgroundimage.
        square.style.backgroundImage=""
        }
        //this resets our array so it is empty and we can start over
        selectedSquares = [];
    }

