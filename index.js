function myEach(collection,cb){
    if(Array.isArray(collection)){
        for (let element of collection){
            cb(element)
        }
        return collection
    }else if(typeof(collection === 'object')){
        for (let element in collection){
            cb(collection[element])
        }
        return collection
    }else{
        return 'not an array or object'
    }
}

function myMap(collection,cb){
    let tempArr = []
    if(Array.isArray(collection)){
        for (let element of collection){
            tempArr.push(cb(element))
        }
        return tempArr
    }else if(typeof(collection === 'object')){
        for (let element in collection){
            tempArr.push(cb(collection[element]))
        }
        return tempArr
    }else{
        return 'not an array or object'
    }
};

function myReduce(collection,cb,init){
    let tempResult;
    if(Array.isArray(collection)){
        tempResult = init || collection[0];
        let startIndex = init ? 0 : 1;
        
        for (let i = startIndex; i < collection.length; i++) {
            tempResult = cb(tempResult, collection[i], collection);
        }
    }else if(typeof(collection === 'object')){
        let keys = Object.keys(collection);
        tempResult = init || collection[keys[0]];
        let startIndex = init ? 0 : 1;

        for (let i = startIndex; i < keys.length; i++) {
            let key = keys[i];
            tempResult = cb(tempResult, collection[key], collection);
        }
    }else{
        return 'not an array or object'
    }
    return tempResult;
};

function myFind(collection, predicate){
    if(Array.isArray(collection)){
        for (let element of collection){
            if(predicate(element)){
                return element
            }
        }
        
    }else if(typeof(collection === 'object')){
        for (let element in collection){
            if(predicate(collection[element])){
                return collection[element]
            }
        }
    }else{
        return 'not an array or object'
    }
    return undefined
};

function myFilter(collection, predicate){
    let tempArr=[];
    if(Array.isArray(collection)){
        for (let element of collection){
            if(predicate(element)){
                tempArr.push(element)
            }
        }
        
    }else if(typeof(collection === 'object')){
        for (let element in collection){
            if(predicate(collection[element])){
                tempArr.push(collection[element])
            }
        }
    }else{
        return 'not an array or object'
    }
    return tempArr
};
function mySize(collection){
    let tempLength=0;
    if(Array.isArray(collection)){
        for (let element of collection){
            tempLength += 1
        }
    }else if(typeof(collection === 'object')){
        for (let element in collection){
            tempLength += 1
        }
    }else{
        return 'not an array or object'
    }
    return tempLength
};

function myFirst(collection, index){
    let tempArr = []
    if(Array.isArray(collection)){
        if(!index){
            return collection[0]
        }
        for (let i = 0; i <= index - 1 ; i++){
            myPush(tempArr,collection[i])
        }
    }else{
        return 'not an array'
    }
    return tempArr
};
function myLast(collection, index){
    let tempArr = []
    if(Array.isArray(collection)){
        if(!index){
            return collection[mySize(collection)-1]
        }
        for (let i = mySize(collection) - index ; i < mySize(collection); i++) {
            myPush(tempArr,collection[i])
        }
    }else{
        return 'not an array'
    }
    return tempArr
};

function myKeys(obj) {
    let keysArr = [];
    
    for (let key in obj) {
        myPush(keysArr, key);
    };
    return keysArr;
};

function myValues(obj) {
    let valuesArr = [];

    for (let key in obj) {
        myPush(valuesArr, obj[key]);
    }

    return valuesArr;
};

function myPush(arr, element){
    arr[mySize(arr)] = element
}
function myReverse(arr) {
    let reversedArr = [];
    for (let i = mySize(arr) - 1; i >= 0; i--) {
        // reversedArr.push(arr[i]);
        myPush(reversedArr,arr[i])
    }
    return reversedArr;
}