const checkSequenceCount = (arr, num) => {
    let result = 0;
    let sum = 0;
    for(let i = 0; i<arr.length-1; i++){
        if (typeof arr[i] !== 'number' || typeof arr[i+1] !== 'number') throw new Error(`Not a number`)
        sum = arr[i];
        for(let x = i+1; x<arr.length; x++){
            // The sum will be equal or not equal to num only after addition so it guaranties that there are 2 numbers in a sequence
            sum += arr[x];
            if (sum === num){ 
                result +=1;
                break;
            } 
            if (sum > num) break;   
        }
    }
    return result;
}
