function F31 () {
    var lineCheck = Array ();
    var table = document.getElementById("to_check");
    var fila = table.getElementsByTagName('tr');
    var cont=0;
    var ok =true;
    //Row
    for (var i=0;i<9;i++) {
        var dato = fila[cont].getElementsByTagName('td');
        cont++;
        for (var j=0;j<dato.length;j++) {
            console.log(dato[j]);
            lineCheck.push(dato[j].innerHTML);
        }
        console.log(lineCheck);
        if (!checkLine(lineCheck)) {
            document.write('Line '+ cont+ ' incorrect - ' +  lineCheck+'<br>');
            ok = false;
        }
        lineCheck = [];
    }


    if (ok) {
        document.write('<br><br>The table is correct');
    }
    
}

function F32 () {
    var lineCheck = Array ();
    var table = document.getElementById("to_check");
    var fila = table.getElementsByTagName('tr');
    var col = table.getElementsByTagName('td');
    var ok =true;
    //Col
    for (var i=0;i<9;i++) {
        var dato = fila[i].getElementsByTagName('td');
        for (var j=0;j<9;j++) {
            lineCheck.push(document.getElementById(j+''+i).innerHTML);
        }
        if (!checkLine(lineCheck)) {
            document.write('Column '+ i+ ' incorrect - ' +  lineCheck+'<br>');
            ok = false;
        }
        lineCheck = [];
    }

    if (ok) {
        document.write('<br><br>The table is correct');
    }
    
}

function F33 () {
    var lineCheck1 = Array ();
    var lineCheck2 = Array ();
    var lineCheck3 = Array ();
    var lineCheck4 = Array ();
    var lineCheck5 = Array ();
    var lineCheck6 = Array ();
    var lineCheck7 = Array ();
    var lineCheck8 = Array ();
    var lineCheck9 = Array ();
    var table = document.getElementById("to_check");
    var fila = table.getElementsByTagName('tr');
    var col = table.getElementsByTagName('td');
    var ok =true;
    //Region
    for (var i=0;i<9;i++) {
        var dato = fila[i].getElementsByTagName('td');
        for (var j=0;j<9;j++) {
            switch (i) {
                case 0:
                    lineCheck1.push(document.getElementById(j+''+i).innerHTML);
                  break;
                case 1:
                    lineCheck2.push(document.getElementById(j+''+i).innerHTML);
                  break;
                case 2:
                    lineCheck3.push(document.getElementById(j+''+i).innerHTML);
                  break;
                case 3:
                    lineCheck4.push(document.getElementById(j+''+i).innerHTML);;
                  break;
                case 4:
                    lineCheck5.push(document.getElementById(j+''+i).innerHTML);
                    break;
                case 5:
                    lineCheck6.push(document.getElementById(j+''+i).innerHTML);
                  break;
                case 6:
                    lineCheck7.push(document.getElementById(j+''+i).innerHTML);
                    break;
                case 7:
                    lineCheck8.push(document.getElementById(j+''+i).innerHTML);
                    break;
                case 8:
                    lineCheck9.push(document.getElementById(j+''+i).innerHTML);
                    break;
                default:
                  console.log('error');
            }
        }
    }
    var reg1 = new Array;
    reg1.push(lineCheck1[0]); reg1.push(lineCheck1[1]); reg1.push(lineCheck1[2]);
    reg1.push(lineCheck2[0]); reg1.push(lineCheck2[1]); reg1.push(lineCheck2[2]);
    reg1.push(lineCheck3[0]); reg1.push(lineCheck3[1]); reg1.push(lineCheck3[2]);
    if (!checkLine(reg1)) {
        document.write('Region 1 incorrect - ' +  reg1);
        ok = false;
    }

    var reg2 = new Array;
    reg2.push(lineCheck4[0]); reg2.push(lineCheck4[1]); reg2.push(lineCheck4[2]);
    reg2.push(lineCheck5[0]); reg2.push(lineCheck5[1]); reg2.push(lineCheck5[2]);
    reg2.push(lineCheck6[0]); reg2.push(lineCheck6[1]); reg2.push(lineCheck6[2]);
    if (!checkLine(reg2)) {
        document.write('Region 2 incorrect - ' +  reg2);
        ok = false;
    }

    var reg3 = new Array;
    reg3.push(lineCheck7[0]); reg3.push(lineCheck7[1]); reg3.push(lineCheck7[2]);
    reg3.push(lineCheck8[0]); reg3.push(lineCheck8[1]); reg3.push(lineCheck8[2]);
    reg3.push(lineCheck9[0]); reg3.push(lineCheck9[1]); reg3.push(lineCheck9[2]);
    if (!checkLine(reg3)) {
        document.write('Region 3 incorrect - ' +  reg3);
        ok = false;
    }

    var reg4 = new Array;
    reg4.push(lineCheck1[3]); reg4.push(lineCheck1[4]); reg4.push(lineCheck1[5]);
    reg4.push(lineCheck2[3]); reg4.push(lineCheck2[4]); reg4.push(lineCheck2[5]);
    reg4.push(lineCheck3[3]); reg4.push(lineCheck3[4]); reg4.push(lineCheck3[5]);
    if (!checkLine(reg4)) {
        document.write('Region 4 incorrect - ' +  reg4);
        ok = false;
    }

    var reg5 = new Array;
    reg5.push(lineCheck4[3]); reg5.push(lineCheck4[4]); reg5.push(lineCheck4[5]);
    reg5.push(lineCheck5[3]); reg5.push(lineCheck5[4]); reg5.push(lineCheck5[5]);
    reg5.push(lineCheck6[3]); reg5.push(lineCheck6[4]); reg5.push(lineCheck6[5]);
    if (!checkLine(reg5)) {
        document.write('Region 5 incorrect - ' +  reg5);
        ok = false;
    }

    var reg6 = new Array;
    reg6.push(lineCheck7[3]); reg6.push(lineCheck7[4]); reg6.push(lineCheck7[5]);
    reg6.push(lineCheck8[3]); reg6.push(lineCheck8[4]); reg6.push(lineCheck8[5]);
    reg6.push(lineCheck9[3]); reg6.push(lineCheck9[4]); reg6.push(lineCheck9[5]);
    if (!checkLine(reg6)) {
        document.write('Region 6 incorrect - ' +  reg6);
        ok = false;
    }
    //gdgg
    var reg7 = new Array;
    reg7.push(lineCheck1[6]); reg7.push(lineCheck1[7]); reg7.push(lineCheck1[8]);
    reg7.push(lineCheck2[6]); reg7.push(lineCheck2[7]); reg7.push(lineCheck2[8]);
    reg7.push(lineCheck3[6]); reg7.push(lineCheck3[7]); reg7.push(lineCheck3[8]);
    if (!checkLine(reg7)) {
        document.write('Region 7 incorrect - ' +  reg7);
        ok = false;
    }

    var reg8 = new Array;
    reg8.push(lineCheck4[6]); reg8.push(lineCheck4[7]); reg8.push(lineCheck4[8]);
    reg8.push(lineCheck5[6]); reg8.push(lineCheck5[7]); reg8.push(lineCheck5[8]);
    reg8.push(lineCheck6[6]); reg8.push(lineCheck6[7]); reg8.push(lineCheck6[8]);
    if (!checkLine(reg8)) {
        document.write('Region 8 incorrect - ' +  reg8);
        ok = false;
    }

    var reg9 = new Array;
    reg9.push(lineCheck7[6]); reg9.push(lineCheck7[7]); reg9.push(lineCheck7[8]);
    reg9.push(lineCheck8[6]); reg9.push(lineCheck8[7]); reg9.push(lineCheck8[8]);
    reg9.push(lineCheck9[6]); reg9.push(lineCheck9[7]); reg9.push(lineCheck9[8]);
    if (!checkLine(reg9)) {
        document.write('Region 9 incorrect - ' +  reg9);
        ok = false;
    }

    if (ok) {
        document.write('<br><br>The table is correct');
    }
    
}



