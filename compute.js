
 export function compute(dob){
    console.log('Compute Rec ', dob); // string --> convert Date
    const date =new Date(dob);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const singleDigit = convertItIntoSingleDigit(convertItIntoSingleDigit(year) + convertItIntoSingleDigit(month) + convertItIntoSingleDigit(day));
    console.log(`Your destiny number is ${singleDigit}`);
    return singleDigit;
}
 function convertItIntoSingleDigit(num){
    
    while(num>9){
        let sum = 0;
    while(num!=0){
        sum = sum + num % 10;
        num = parseInt(num /10);
    }
    num = sum;
}
    return num;
 }