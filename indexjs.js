//variables globales para jalar valores en cada funcion
var flag = 1; 

//una funcion para cargar al inicio del juego y ella llamar initialize
window.onload = function() {
    initialize();
    ganar();
  };
//llamar a la funcion que activa el primer move de b3
function initialize() {
    console.log("Inicializando");    
    //simulateMove("b3");
    //console.log(document.getElementById("b3").value);
    //asessGame();
}
//Funcion que detona el movimiento de la maquina
function simulateMove(buttonId) {
    console.log("Simulando", buttonId);
    document.getElementById(buttonId).click()
}
function ganar(b1, b2, b3, b4, b5, b6, b7, b8, b9){
        console.log('ganar')
        var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
        b1 = document.getElementById("b1").value; 
        b2 = document.getElementById("b2").value; 
        b3 = document.getElementById("b3").value; 
        b4 = document.getElementById("b4").value; 
        b5 = document.getElementById("b5").value; 
        b6 = document.getElementById("b6").value; 
        b7 = document.getElementById("b7").value; 
        b8 = document.getElementById("b8").value; 
        b9 = document.getElementById("b9").value; 
    

        var b1btn, b2btn, b3btn, b4btn, b5btn,  
        b6btn, b7btn, b8btn, b9btn; 
        
        b1btn = document.getElementById("b1"); 
        b2btn = document.getElementById("b2"); 
        b3btn = document.getElementById("b3"); 
        b4btn = document.getElementById("b4"); 
        b5btn = document.getElementById("b5"); 
        b6btn = document.getElementById("b6"); 
        b7btn = document.getElementById("b7"); 
        b8btn = document.getElementById("b8"); 
        b9btn = document.getElementById("b9"); 


        if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
        
    } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        return
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        return
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        return
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "X"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return

        } else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
        b2 == '0') && (b3 == '0' || b3 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
        b4 == '0') && (b7 == '0' || b7 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
        b8 == '0') && (b9 == '0' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        return
    } 
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
        b6 == '0') && (b9 == '0' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        return
    } 
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
        b5 == '0') && (b9 == '0' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        return
    } 
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
        b5 == '0') && (b7 == '0' || b7 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
        b5 == '0') && (b8 == '0' || b8 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "0"; 
        b1btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
        return
    } 
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
        b5 == '0') && (b6 == '0' || b6 == '0')) { 
        goToPage();
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
        return
        }
}
//funcion que detona el boton de reset
function reset() { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
    flag = 1;
    turn = 0;
} 
//funcion que recibe los valores por boton pushado
function handleUserInput(buttonId) { 
    console.log("El boton es el " + buttonId);
    if (document.getElementById(buttonId).disabled == true) { 
        return
    }
    if (flag == 1) {
        document.getElementById(buttonId).value = "X"; 
        document.getElementById(buttonId).disabled = true; 
        flag = 0;
   } 
    else { 
        document.getElementById(buttonId).value = "0"; 
        document.getElementById(buttonId).disabled = true; 
        flag = 1;
        
    } 
    ganar();
} 
function goToPage() {
    console.log('entra');
    // Code to redirect to another HTML page
    window.location.href = "desin/hello.html";
    document.getElementById('print') 
}
