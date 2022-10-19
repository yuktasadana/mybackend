//ques1
/*function missing(input){
    let N= input.length+1
   // console.log(N)
    var sum = N*(N+1);
    sum=sum/2;
    var output=0;
    for(var i=0;i<input.length;i++)
    {
        output=output+input[i];
    }
    console.log(sum-output)

}
missing([1,2,3,5,6,7])*/



// ques2
function missing(input){
    let N = input.length+1
    let first= input[0]
    let last= input[input.length-1]
      
    var sum = N*(first+last);
    sum=sum/2;
    var output=0;

    for(var i=0;i<input.length;i++)
    {
        output=output+input[i];
    }
    console.log(sum-output)
}
missing([33,34,35,37,38,39])

