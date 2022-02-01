"use strict"

var turno = 1;
var tabellone = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
];


var ciccio = [ 
    0,
    0,
    0,
    0,
    0,
    0,
    0
];

a = ciccio[2] // 0
b = tabellone[2] // [0,0,0,0,0,0,0]
tabellone[2][5]

var array1 = [0,0,0,0,0,0,0];
var array2 = [0,0,0,0,0,0,0];
var array3 = [0,0,0,0,0,0,0];
var array4 = [0,0,0,0,0,0,0];
var array5 = [0,0,0,0,0,0,0];
var array6 = [0,0,0,0,0,0,0]; 

function gioco (num) 
{
    var element = document.getElementsByClassName("cella")[num];

    if(turno == 1)
    {
        for(int = 0; i < 6; i++)
        {
            if(array1[num] == 0)
            {
                array1[num] == 1;
                colora(array1, num, turno,)
                turno = 2;
            }if(array2[num] == 0)
            {
                array2[num] == 1;
                colora(array2, num, turno)
                turno = 2;
            }if(array3[num] == 0)
            {
                array3[num] == 1;
                colora(array3, num, turno)
                turno = 2;
            }if(array4[num] == 0)
            {
                array4[num] == 1;
                colora(array4, num, turno)
                turno = 2;
            }if(array5[num] == 0)
            {
                array5[num] == 1;
                colora(array5, num, turno)
                turno = 2;
            }if(array6[num] == 0)
            {
                array6[num] == 1;
                colora(array6, num, turno)
                turno = 2;
            }
        }
    }if(turno == 2)
    {
        for(int = 0; i < 6; i++)
        {
            if(array1[num] == 0)
            {
                array1[num] == 2;
                colora(array1, num, turno)
                turno = 1;
            }if(array2[num] == 0)
            {
                array2[num] == 2;
                colora(array2, num, turno)
                turno = 1;
            }if(array3[num] == 0)
            {
                array3[num] == 2;
                colora(array3, num, turno)
                turno = 1;
            }if(array4[num] == 0)
            {
                array4[num] == 2;
                colora(array4, num, turno)
                turno = 1;
            }if(array5[num] == 0)
            {
                array5[num] == 2;
                colora(array5, num, turno)
                turno = 1;
            }if(array6[num] == 0)
            {
                array6[num] == 2;
                colora(array6, num, turno)
                turno = 1;
            }
        }
    }
}

function colora (a, n, colonna, turn)
{
    element = document.getElementsByClassName("cella")[num];
    var num = 0;

    for(var i = 0; i < 6; i++)
    {
        for(var j = 0; j < 6; j++)
        {
            num++;
            if(i==n && j==colonna)
            {
                element[num].classList.add("bg-warning")
                break;
            }
        }
    }
    if(turn = 1)
    {


    }if(turn = 2){

    }
}

