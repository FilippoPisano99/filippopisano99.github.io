var haveOp = false;
var textArea = document.getElementById("textarea");

function scrivi(x,isOper) 
{
    if(!isOper)//Numeri
    {
        
        write(x);
        console.info("Have Opration: " + haveOp + "\nString: "+x);
        //haveOp = true;
    }
    
    if(isOper && !haveOp)//Operazioni
    {

        haveOp = true;
        write(x);
        console.info("Have Opration: " + haveOp + "\nString: "+x);
    }
}
        
function cons(x)
{
    console.info(x);
}

function cls()
{
    textArea = document.getElementById("textarea");
    textArea.value = "";
    haveOp = false;
    cons("cleared");
}

function write(x)
{
    textArea = document.getElementById("textarea");
    textArea.value += x;
}


//MATH OPERATION START 

    function somma(a,b)
    {
        return a+b;
    }

    function sottr(a,b)
    {
        return a-b;
    }

    function molt(a,b)
    {
        return a*b;
    }

    function div(a,b)
    {
        return a/b;
    }

//MATH OPERATION END 



function calcola()
{
    var dato1;
    var dato2;
    var op;
    var fulltext;
    
    fulltext = document.getElementById("textarea").value;
    //alert (fulltext);
    //cons("full : " + fulltext);
    var index = 0;
    var opFound= false;
    /*
    for(var i = 0; i<fulltext.length && !opFound; i++)
    {
        if(fulltext.charAt(i) == ('+') || fulltext.charAt(i) == ('-') || fulltext.charAt(i) ==('*')||fulltext.charAt(i)  == '/')
            {
                opFound= true;
                index = i;
            }
    }
    */
    
    var operazione = null;
    idx = fulltext.indexOf('+')
    if (idx > -1) 
    {
        index = idx;
        operazione = somma;
    }
    idx = fulltext.indexOf('-')
    if (idx > -1) 
    {
        index = idx;
        operazione = sottr;
    }
    idx = fulltext.indexOf('*')
    if (idx > -1) 
    {
        index = idx;
        operazione = molt;
    }
    idx = fulltext.indexOf('\\')
    if (idx > -1) 
    {
        index = idx;
        operazione = div;
    }
    /**/
    
    
    dato1 = fulltext.substring(0,index);
    dato2 = fulltext.substring(index+1,fulltext.length);
    //op = fulltext.charAt(idx);

    if (dato1 == "") 
    {
        cons("dato1 = 0 [valore messo come default]");
        dato1 = 0;
    }
    if (dato2 == "") 
    {
        cons("dato2 = 0 [valore messo come default]");
        dato2 = 0;
    }
    
    cons(dato1);
    //cons(op);
    cons(dato2);
    
    dato1 = parseFloat(dato1);
    dato2 = parseFloat(dato2);
    var risultato = operazione(dato1,dato2);
    /*
    switch(op)
    {
        case '+':
            risultato = somma(dato1,dato2);
            break;
        
        case '-':
            risultato = sottr(dato1,dato2);
            break;
        
        case '*':
            risultato = molt(dato1,dato2);
            break;
        
        case '/':
            risultato = div(dato1,dato2);
            break;
        
    }
    */
    cons("= "+risultato);
    //alert(textArea.value);
    //textArea.setAttribute("value",""+risultato);
    document.getElementById('textarea').value = ''+risultato;
    haveOp = false;
    
    
    /*
    
    var operazione = null;
    var idx = 0
    idx = fullstring.indexOf('+')
    if (idx > -1) 
    {
        operazione = Math.add
    }
    idx = fullstring.indexOf('-')
    if (idx > -1) 
    {
        operazione = Math.sub
    }
    
    var res = operazione(a, b);
    
    */
    
    
    
}

