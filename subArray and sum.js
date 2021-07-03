/*
Given an array of integers of length n and a positive integer K, 
the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K. */

var arr =[2,3,4,6];
var k = 3;
function check(item,k){
     var result =false;
     var sum =0;
     for(var i=0 ; i<item.length ; i++){
         sum+=item[i];
     }
     if(sum%k!==0){
         result = true
     }
     return result;
}

var subarrays =[];
var max_len =0;
count =0;
for(var i =0 ; i<arr.length ; i++){
    var subarrays =[];
    for(var j =i ; j<arr.length ; j++){
        subarrays.push(arr[j]);
        if(check(subarrays)==true && subarrays.length>max_len){
                   max_len = subarrays.length;
                   count=1;
        }else if(check(subarrays)==true && max_len==subarrays.length){
            count++;
        }
            
        
    }
}
console.log(count)