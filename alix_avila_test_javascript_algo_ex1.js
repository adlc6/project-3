var code='<table id="to_check">';

function readTable () { 
    for (var i=0;i<9;i++) {
        let contC = 0;
        code += '<tr">';
        var array_pos = array_number[i].split(" ");
        for (var j=0;j<9;j++) {
            code += '<td id="'+i+contC+'">'+ array_pos[j] + '</td>';
            contC++;
        }
        contC=0;
        code += '</tr>';
    }
    code += '</table>';
}

function displayTable () {
    document.write(code);
}