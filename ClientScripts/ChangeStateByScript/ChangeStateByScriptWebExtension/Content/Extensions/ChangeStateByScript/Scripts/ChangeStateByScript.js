﻿function changeStateByScript(sender, args) {

    var layout = sender.layout;
    if (layout.editOperations.available('b8a6119c-4d06-4401-b1af-0310615c72f6')) {  //Operation Start approving for Документ УД\Исходящий
        layout.changeState('b8a6119c-4d06-4401-b1af-0310615c72f6');
        alert('State changed');
    }
    else {
        alert('Operation not available');
    }
}