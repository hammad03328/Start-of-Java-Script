console.log("### We will calculate notes for you ###\n")

 let a=parseInt(prompt("Just Enter Your Total Amount"));
 let b=[5000, 1000, 500, 100, 50, 20, 10, 5, 2,1];//this amount of note
let c=[];      // in this array number of notes will store accordingly
let d=[];      //in this array the index of note store which not in use

for (let k in b)        //this loop is for storing number of notes acc
{
  c[k]=parseInt(a/b[k]); 
  let h=parseInt(c[k])
  if (h>0){a=(a)-(h*b[k])}  //this condition is to deduct Total    
}                           //amount of note from main amount
//this loop will filter and display the currency which used
console.log("You need : ")
for (let k in c)
{
  if(c[k]>0)
  {console.log( c[k] + " notes of " + b[k])}
  else{d[k]=k}
}
//this loop will display the note which is not used
console.log("\nthis is remaining")
for (let k in d)
{ let y=d[k];
  console.log("0 notes of "+b[y])
}