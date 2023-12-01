'use strict'

exports.getEnumValues = (frozeEnum) => {
    var keysArray = new Array();

    for (var key in frozeEnum) {
        keysArray.push(frozeEnum[key]);
    }
    
    return keysArray;
};