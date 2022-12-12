function checkLine (lineNumbers) {

    for (var i=0; i<lineNumbers.length; i++) {
        dato = Number(lineNumbers[i]);
        console.log(dato);
        if (isNaN(dato)) {
            return false;
        }
        for (var j=0; j<lineNumbers.length; j++) {
            if (lineNumbers[i] == lineNumbers[j] && i != j) {
                return false;
            }
        }
    }
    i=0;
    j=0;
    return true;
}
