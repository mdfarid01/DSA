//Math Functions 

const { Orbit } = require("lucide-react");

// console.log(Math.ceil(10.2)); // 11
// console.log(Math.floor(10.2)); // 10
// console.log(Math.round(10.5)); // 11
// console.log(Math.round(10.4)); // 10
// console.log(Math.abs(-8)); // 8
// console.log(Math.abs(8)); // 8
// console.log(Math.trunc(10.6756134717)); // 10
// console.log(Math.pow(2, 3)); // 8 (2^3)
// console.log(Math.sqrt(9)); // 3
// console.log(Math.cbrt(27)); // 3
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.random()); // 0 to 1 random number
// console.log(Math.random() * 10); // 0 to 10 random number  





// let a=Number(prompt("Enter the  number"));
// let b=Number(prompt("Enter the  number"));
// let c=Number(prompt("Enter the  number"));  

// if(a+b<=c || a+c<=b || c+b<=a){
//     console.log('The triangle is not possible');
// } else{
//      let s=(a+b+c)/2;
//      consolele.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }





// let r=Number(prompt("Enter the radius of the circle"));
// console.log(Math.PI*2*r*r);





// let a=Number(prompt("Enter the  number"));
// let b=Number(prompt("Enter the  number"));

// if(a>b) console.log(a+" is greater than "+b);
// else console.log(b+" is greater than "+a);




// let a=Number(prompt("Enter the  number"));

// if (a%2==0) {
//     console.log(a+'is even number');
// }
// else console.log(a+'is odd number');





// let year=NUmber(prompt("Enter the year"));
// let isLeap=false;

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             isLeap=true;
//         }else isLeap=false;
//     }else isLeap=true;

// }else isLeap=false;

// console.log(isLeap? "leap yaer":"not leap year");






// let yaer=Number(prompt("Enter the year"));
// let isLeap=false;

// if((yaer%4==0 && yaer%100!=0)){  //2020,2024,2028
//     console.log('Leap year');
// }else if(yaer%400==0){          //2000,2400
//     console.log('Leap year');
// }else console.log('Not leap year');





// let n=Number(prompt("Enter the number"));

// if(isNaN(n)){
//     console.log("invalid input");
// }
// else{
//     let i;
//     for(i=1;i<=n;i++){
//         console.log("hellow world");
//     }
//     console.log("fail at"+ i);
    
// }





// let n=Number(prompt("Enter the number"));

// // for(let i=1;i<=n;i++){
// //     console.log(i);
// // }

// for(let i=n;i>=1;i--){
//     console.log(i);
// }





// let n=Number(prompt("Enter the number"));

// for(i=1;i<=10;i++){
//     console.log(n+'*'+i+'='+(n*1))
// }





// let n=Number(prompt("Enter the number"));
// let sum=0;

// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }

// console.log(sum);





// let n=Number(prompt("Enter the number"));
// let fact=1;

// for(i=i;i<=n;i++){
//     fact=fact*i;
// }

// console.log(fact);





// let n =Number(prompt("Enter the number"));

// for(i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
        
//     }
// }




// let n =Number(prompt("Enter the number"));

// for(i=1;i<=n/2;i++){
//     if(n%i==0){
//         console.log(i);
        
//     }
// }
// console.log(n);





// let n=Number(prompt("Enter the number"));

// let isPrime=true;

// for(i=2;i<n;i++){
//     if(n%i==0){
//         isPrime=false;
//         break;
//     }
// }

// if(isPrime) console.log("prime number");
// else console.log("not prime number");






// let n=Number(prompt("Enter the number"));

// let isPrime=isPrimeFumc(n);
// if(isPrime) console.log("prime number");
// else console.log("not prime number");

// function isPrimeFumc(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for (let i =3;i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i==0) return false;
//     }
//     return true;
// }






// let n=5;
// let i=1;

// while(i<=n){
//     console.log("hello world");
//     i++
    
// }


// let n=5,sum=0,i=1;

// while(i<=n){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);




// let n=Number(prompt("Enter the number"));

// let sum=0;
// while(n>0){
//     let rem=n%10;
//     sum=sum+rem;
//     n=Math.floor(n/10);
// }
// console.log(sum);





// let n=Number(prompt("Enter the number"));

// let rev=0;
// while(n>0){
//     let rem=n%10;
//     rev=(rev*10)+rem;
//     n=Math.floor(n/10);
// }
// console.log(rev);





// let n=Number(prompt("Enter the number"));
// let copy=n;
// let sq=n*n;

// let count=0;
// while(n>0){
//     count++;
//     n=Math.floor(n/10);
// }

// if(sq%Math.pow(10, count)== copy){
//     console.log("Automorphic number");
// }
// else console.log("Not Automorphic number");





// let i=1;
// do{
//     console.log("hwllo world");
//     i++;
// }while(1<=5);



// let userInput;

// do{
//     console.log("namsate bhdsk");
//     userInput=prompt("do you wana fuck? yes/no").toLowerCase()
// }while(userInput==='yes');





// let com = Math.floor(Math.random()*100)+1;

// let userInput;
// do{
//     userInput=Number(prompt("Guess the no in b/w 1 to 100"))
//     if(isNaN(userInput) || userInput<0 || userInput>100){
//         console.log("please enter a valid no");
//         continue
//     }
//     if(userInput>com) console.log("too high,try again");
//     else if(userInput<com) console.log("too low, try again");
//     else console.log("Congrats 🎉 mere bete bhdsk  "+com);
    
// }while(userInput!==com);






// let userInput;
// do{
//     let num1=Number(prompt("Enter first number"))
//     let num2=Number(prompt("Enter Second number"))
//     let operator=prompt("Enter operator(+,-,*,/)")

//     switch(operator){
//         case '+':
//             console.log("result" +num1+num2);
//         break;
//         case '-':
//             console.log("result" +num1-num2);
//         break;
//         case '*':
//             console.log("result" +num1*num2);
//         break;
//         case '/':
//             if(num2!=0) console.log("result" +num1/num2);
//             else console.log("invalid input");
//         break;
//         default:
//             console.log("invalid operator");
            
//     }
//     userInput=prompt('do you wamt to continue? yes/no').toLowerCase();
// }while(userInput==='yes');












// Pattern-         node index.js to run this file


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=4;j++){
//         process.stdout.write('* ');
//     }
//     console.log();
    
// }




// const prompt=require('prompt-sync')();
// let n=prompt("Enter a number");
// console.log(n);




// const prompt=require('prompt-sync')();
// let n=prompt('Enter a number');
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=4;j++){
//         process.stdout.write('* ');
//     }
//     console.log();              //node index.js - to run this file
    
// }




//PRINT RIGHT ANGLE TRIANGLE-

// const prompt=require('prompt-sync')();
// let n=prompt('Enter a number');
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write('* ');
//     }
//     console.log();
    
// }



//print right angle triangle in reverse order-

// const prompt=require('prompt-sync')();
// let n=prompt('Enter a number');
// let temp=n;
// for(let i=1;i<=n;i++){
//     // for(let j=1;j<=temp;j++){
//     //     process.stdout.write('* ');
//     // }
//     // temp--;

//     for(let j=1;j<=n-i+1;j++){
//         process.stdout.write('* ');
//     }
//     console.log();
    
// }



//print charcters in right angle triangle-

// const prompt=require('prompt-sync')();
// let n=prompt('enter a number');
// for(i=1;i<=n;i++){
//     let temp=65;
//     for(j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(temp)+' ');
//         temp++;
//     }
//     console.log();
// }



//mirror right angle triangle-

// let prompt = require('prompt-sync')();
// let n= prompt('Enter a number');
// for (let i=1;i<=n;i++){
//     for (let j=1;j<=n-i;j++){
//         process.stdout.write('  ')
//     }
//     for (let j=1;j<=i;j++){
//         process.stdout.write('* ')
//     }
//     console.log(); 
// }



//print traingle-

// let prompt = require('prompt-sync')();
// let n= prompt('Enter a number');
// for (let i=1;i<=n;i++){
//     for (let j=1;j<=n-i;j++){
//         process.stdout.write(' ')
//     }
//     for (let j=1;j<=i;j++){
//         process.stdout.write('* ')
//     }
//     console.log(); 
// }



//print X in start-

// let prompt=require('prompt-sync')();
// let n=Number(prompt('Enter a number'));
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j===n+1){
//             process.stdout.write('* ');
//         }else{
//             process.stdout.write('  ');
//         }
//     }
//     console.log();
// }




//print V in *-

// let prompt=require('prompt-sync')();
// let n=Number(prompt('Enter a number'));
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i==j || i+j === n*2){
//             process.stdout.write('* ');
//         }else{
//             process.stdout.write('  ');
//         }
//     }
//     console.log();
// }










                //Array

// let arr=[1,2,3,4,5];
// console.log(arr);



//Print the input no is strong no or not-----

// let prompt=require('prompt-sync')();
// let n=Number(prompt('Enter a number'));
// let copy=n;
// let ans=0;

// while(n>0){
//     let dig=n%10;
//     let fact=1;
//     for(let i=1;i<=dig;i++){
//         fact=fact*1;
//     }
//     ans=ans+fact;
//     n=Math.floor(n/10);
// }
// if(ans==copy){
//     console.log('Strong number');     //A number is called strong number if sum of the factorial of its digit is equal to number itself.
// }else{
//     console.log('Not strong number'); 
// }






// let arr=[10 , 20 , 30 , 40 , 50]
// arr.push(60)          //insert at last
// arr.unshift(0)        //insert at first
// console.log(arr);
// arr.pop()               //delete last element
// console.log(arr);
// arr.shift()             //delete first element
// console.log(arr);
// console.log(arr.length);   //length of array
// console.log(arr.indexOf(30));  //index of element
// arr[2]=35;          //update element
// arr[10]=100;
// console.log(arr);





//Making New Array ----

// let arr=new Array(5);
// // arr[0]=10;
// // arr[1]=20;
// // arr[2]=30;
// // arr[3]=40;
// // arr[4]=50;
// // console.log(arr);
// // arr[10]=100;
// // console.log(arr);

// arr.push(100);        //insert at last if i use push rather than arr[5]=100
// console.log(arr);




//Taking size and input from user----

// let prompt=require('prompt-sync')();
// let size=Number(prompt('Enter the size of aray '));
// let arr=new Array(size);
// let sum=0;

// for(i=0;i<arr.length;i++){   //0 to 4
//     arr[i]=Number(prompt('Enter the element'));
//     sum=sum+arr[i];
// }
// console.log(arr);
// console.log(sum);



//print max element from the array---

// let arr=[1,20,39,8,7,55];

// let max=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log('max elements ' + max);




// finding second max element from the array----

// let arr=[1,20,39,8,7,55];
// let max=Math.max(arr[0],arr[1]);
// let smax=Math.min(arr[0],arr[1]);

// for(let i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i];
//     }else if(arr[i]>smax && arr[i]!=max){
//         smax=arr[i];
//     }
// }
// console.log("secind max element is "+smax);




//Reverse the array----

// let arr=[1, 2, 3, 4, 5];
// let temp=new Array(arr.length);
// let i=0;
// for(let j=arr.length-1;j>=0;j--){
//     temp[i]=arr[j];
//     i++;
// }
// console.log(temp);


// let arr=[1, 2, 3, 4, 5];
// let i=0, j=arr.length-1;

// while(i<j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// console.log(arr);




//All zeroes to left and all ones to right----

// let arr=[0,1,0,1,0,1,0,1,0,1];
// let i=0, j=0;

// while(i<arr.length){
//     if(arr[i]==0){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);




//Array left Rotation by 1----

// let arr=[1,2,3,4,5];
// let temp=arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=temp;

// console.log(arr);





//Array left Rotation by K----

//Brute force Method

// let arr= [ 1,2,3,4,5];
// console.log(arr);
// let k=2;
// k=k%arr.length;

// for(let j=1;j<=k;j++){
//     let copy=arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i]=arr[i+1];
//     }
//     arr[arr.length-1]=copy;
// }
// console.log(arr);





// let arr=[1,2,3,4,5];
// let temp=new Array(arr.length);
// let k=3;
// k=k%arr,length;

// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length];
// }
// console.log(temp);







// let prompt=require('prompt-sync')();
// let arr=[1,2,3,4,5];
// let k=Number(prompt('Enter the number of rotation'));
// k=k%arr.length;

// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// reverse(arr,0,arr.length-1);
// console.log(arr);

// function reverse(arr,i,j){
//     while(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++
//         j--
//     }
// }






               //Searching in Array-----


//Linear Search in sorted array----(Time complexity is O(n))


//Finding index of target element in the array---

// let prompt=require('prompt-sync')();
// let target=Number(prompt('Enter the target number'));
// let arr=[10,5,3,15,19,69];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         index=i;
//         break;
//     }
// }
// if(index==-1){
//     console.log('element not found');
// }else{
//     console.log('element found at index '+index);
// }





//Binary Search in sorted array----(Time complexity is O(log n))
//In binary search array should be sorted

// let arr=[10,20,40,44,56,75,475,,497];

// if(binarySearch(arr,44)==-1){
//     console.log('element not found');
// }else{
//     console.log('element found');
// }

// function binarySearch(arr,lenghth){
//     let s=0,e= arr.lenth-1;
//     while(s<=e){
//         let mid=Math.floor((s+e)/2);
//         if(arr[mid]==target){
//             return mid;
//         }else if(arr[mid]<tar) e= mid-1;
//         else{
//             s=mid-1;
//         }
//     }
//     return -1;
// }






//Bubble Sort----(Time complexity is O(n^2))

// let arr=[1,4,3,2,9,10];
// let n=arr.length;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);





//Selection Sort----(Time complexity is O(n^2))

// let arr=[1,4,3,2,9,10];
// for(let i=1;i<arr.length;i++){
//     let key=arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1]=arr[j];
//         j--
//     }
//     arr[j+1]=key;
// }
// console.log(arr);









                    // Time complexity and space complexity---(Refer video no. 42)

//Time complexity is the amount of time taken by an algorithm to run as a function of the length of the input.
//Space complexity is the amount of memory space required by an algorithm to run as a function of the length of the input.
//Time complexity is expressed using Big O notation.
//Space complexity is expressed using Big O notation.

//Complexity representation of some algorithms:
//# BIG 0-Upper bond/worst case
//# Theta- Avg case
//# Omega-Lower bond/best case

//O(1) - Constant time
//O(n) - Linear time
//O(N^2) - Quadratic time
//O(log n) - Logarithmic time
//O(2^n) - Exponential time
//n! - Factorial time









                                        //Multidimensional Array---(refer v-43)

// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
    
// }



// let prompt=require('prompt-sync')();
// let size=Number(prompt('Enter the size of array'));
// let arr=new Array(size);
// for(let i=0;i<arr.length;i++){
//     let innerArraySize=Number(prompt('Enter the size of inner array'));
//     arr[i]=new Array(innerArraySize);
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j]=Number(prompt('Enter the element'))
//     }
// }
// console.log(arr);




//Sum of left and right diagonal of matrix----

// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let leftSum=0, rightSum=0;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(i==j){
//             leftSum+=arr[i][j];
//         }
//         if(i+j==arr.length-1){
//             rightSum+=arr[i][j];
//         }
//     }
// }
// console.log('left diagonal sum is '+leftSum);
// console.log('right diagonal sum is '+rightSum);



//Jagged Array----

// let prompt=require('prompt-sync')();
// let arr=new Array(4);
// for(let i=0;i<arr.length;i++){
//     let size=Number(prompt('Enter the size of inner array'));
//     arr[i]=new Array(size);
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j]=Number(prompt('Enter the element'));
//     }
// }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);  
// }



//one line code to print array---

// let arr=Array.from({length:3},()=>Array(4).fill(0));
// console.log(arr);






                                    // String---

// methods of string

// | `length` | Returns string length |

// | `slice(start, end)` | Extracts substring |

// | `substring(start, end)` | Similar to `slice`, but no negative indexes |

// | `substr(start, length)` | Extracts part of string with length |

// | `toUpperCase()` | Converts to uppercase |

// | `toLowerCase()` | Converts to lowercase |

// | `concat()` | Concatenates strings |

// | `trim()` | Removes spaces from both sides |

// | `indexOf(substring)` | Returns first index of substring |

// | `lastIndexOf(substring)` | Returns last index of substring |

// | `includes(substring)` | Checks if substring exists |

// | `startsWith(substring)` | Checks if string starts with substring |

// | `endsWith(substring)` | Checks if string ends with substring | 

// | `replace(old, new)` | Replaces first occurrence of substring |

// | `replaceAll(old, new)` | Replaces all occurrences |

// | `split(separator)` | Splits string into an array |

// | `charAt(index)` | Returns character at index |

// | `charCodeAt(index)` | Returns Unicode value of character |





//Questins on string-

//Chcek if string is palindrome or not----

// let prompt=require('prompt-sync')();
// let s= prompt('enter a string');
// let isPalindrome=true;
// let i=0, j = s.length-1;

// while(i<j){
//     if(s[i]!=s[j]){
//         isPalindrome=false;
//         break;
//     }
//     i++;
//     j--;
// }
// if(isPalindrome){
//     console.log('palindrome')
// }
// else{
//     console.log('not palindrome')
// };



//Toogle case of string----

// let prompt=require('prompt-sync')();
// let s=prompt('Enter a string');
// console.log(s);

// let ans='';
// for(let i=0;i<s.length;i++){
//     if(s[i]>='A' && s[i]<='Z'){
//         ans+=s[i].toLowerCase();
//     }else if(s[i]>='a' && s[i]<='z'){
//         ans+=s[i].toUpperCase();
//     }else{
//         ans+=s[i];
//     }
// }
// console.log(ans);

// OR

// let prompt= require('prompt-sync')();
// let s=prompt('Enter a string');
// console.log(s);

// let ans='';
// for(let i=0;i<s.length;i++){
//     let asci = s.charCodeAt(i);
//     if(asci>=65 && asci<=90){
//         ans= ans + String.fromCharCode(asci+32);
//     }
//     else if(asci>=97 && asci<=122){
//         ans =ans + String.fromCharCode(asci-32);

//     }
// }
// console.log(ans);




//Take an array of string words and a string prefix. print the no of strings in word that contains pref as a prefix.----

// let word=['hello','hellow','hell','helloword','helloword'];
// let pref='hell';
// let count=0;
// for(let i=0;i<word.length;i++){
//     if(word[i].startsWith(pref)){
//         count++;
//     }
// }
// console.log(count);




//Capatalize the first and last char of each word in the sentence and print the new sentence.-------

// let s= "hello bhai ky hal chal";
// let ans=' ';
// let arrStr = s.split(" ");
// for(let i=0;i<arrStr.length;i++){
//     let word = arrStr[i];
//     if(word.length<=2){
//         ans= ans+word.toUpperCase()+" ";
//     }
//     else{
//         ans = ans + word.charAt(0).toUpperCase()
//                   + word.substring(1,word.length-1)
//                   + word.charAt(word.length-1).toUpperCase() + " ";
//     }
// }
// console.log(ans);




//Accept a string and print the frequency of each character in the string.-------

// let prompt=require('prompt-sync')();
// let s= prompt('Enter a string');
// let freqArr=new Array(123).fill(0);
// for(let i=0;i<s.length;i++){
//     let ascii=s.charCodeAt(i);
//     freqArr[ascii]=freqArr[ascii]+1;
// }
// for(let i=0;i<freqArr.length;i++){
//     if(freqArr[i]>0){
//         console.log(String.fromCharCode(i)+ " "+ freqArr[i]);
//     }
// }




//Check the string is anagram of another string or not.-------

// let prompt=require('prompt-sync')();
// let s1=prompt('Enter first string ');
// let s2=prompt('Enter second string ');
// let freqArr=new Array(123).fill(0);

// if(s1.length!=s2.length){
//     console.log('not anagram');
// }else{
//     let isAnagram=true;

//     for(let i=0;i<s1.length;i++){
//         let ascii=s1.charCodeAt(i);
//         freqArr[ascii]=freqArr[ascii]+1;
//     }

//     for(let i=0;i<s2.length;i++){
//         let ascii=s2.charCodeAt(i);
//         freqArr[ascii]=freqArr[ascii]-1;
//     }
//     for(let i=0;i<freqArr.length;i++){
//         if(freqArr[i]!=0){
//             isAnagram=false;
//             break;
//         }
//     }
//     if(isAnagram){
//         console.log('anagram');
//     }else{
//         console.log('not anagram');
//     }
// }




                                // SET-

// let set=new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(1);

// for(let a of set){
//     process.stdout.write(a+" ");
// }
// console.log();
// console.log(set);
// set.delete(4);
// console.log(set);
// console.log(set.has(4));
// console.log(set.has(5));
// console.log(set.size);
// set.clear();
// console.log(set);







                        // Map----

// let map=new Map();
// map.set('ali',8)
// map.set('ahmed',9)
// map.set('ashok',10)
// map.set('rahul',44)
// console.log(map);
// console.log(map.keys());
// for(let a of map.keys()){
//     console.log(a);
// }

// console.log(map.values());
// for(let a of map.values()){
//     console.log(a);
// }

// for(let [key,value] of map){
//     console.log(key+"->"+value);
// }

// map.delete('ali');
// console.log(map);
// console.log(map.has('rahul'));
// console.log(map.size);
// console.log(map.get('ahmed'));
// map.clear();
// console.log(map);




//Chcek the frequency in array---

// let arr=[1,1,2,3,4,4,5,5,6,6,6,6,7,7,5,4,8]
// let map=new Map();

// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1)
//     }else map.set(arr[i],1);
// }
// console.log(map);




//check the freq of each element in a string---

// let s="malyalam";
// let map =new Map();

// for(let i=0;i<s.length;i++){
//     let ch=s.charAt(i);
//     if(map.has(ch)){
//         map.set(ch,map.get(ch)+1)
//     }else map.set(ch,1);
// }

// console.log(map);







                                        //Bitwise operator----

//Right shift operator(>>)---

// console.log(35>>3); //4
// console.log(35<<3); //280



//Left shift operator(<<)---

// console.log(13<<3); //104




// let prompt= require('prompt-sync')();
// let n= Number(prompt('Enter a number '));

// console.log((n&1)==0? 'even number' : 'odd number');




// let prompt= require('prompt-sync')();
// let n= Number(prompt('Enter a number '));

// console.log((n&(n-1))==0? 'power of 2' : 'not power of 2');






//return type -> void , number , string etc

// function temp(a){
//     if(a==0) return
//     console.log("mai to chala bhdsk");
    
// }
// temp(1);



// function temp(a){
//     if(a==0) return 10
//     console.log("mai to chala bhdsk");

//     return 0;    //add return here for a good practice, if no. then return with no if string then return with string
// }

// temp(1);












                                //Recursion---
    
// let prompt=require('prompt-sync')();
// let n = Number(prompt('Enter a number'));

// temp(n);
// function temp(a){
//     if(a==0) return
//     console.log("hello world");
//     temp(a-1);
// }


// let prompt=require('prompt-sync')();
// let n = Number(prompt('Enter a number'));

// temp(n);
// function temp(a){
//     if(a==0) return
//     process.stdout.write(a+" ");    // print in normal order
//     temp(a-1);
// }




//print number 1-n/n-1 --

// function temp(n){
//     if(n==0) return
//     temp(n-1);
//     process.stdout.write(n+" ");     // print in reverse order
// }

// temp(5);




//sum--

// function temp(n){
//     if(n==1) return 1
//     return n+temp(n-1);
// }

// console.log(temp(5));





//factorial--

// function temp(n){
//     if(n==1) return 1
//     return n * temp(n-1);
// }

// console.log(temp(5));




//Fibonacci series--

//using loop

// let n = 10;
// let first = 0, second = 1;
// process.stdout.write(first+" "+second+" ");
// for(let i=1;i<=n-2;i++){
//     let third = first + second;
//     process.stdout.write(third+" ");
//     first = second;
//     second = third;
// }

//using recursion

// function fiboNTerms(n,first, second){
//     if(n==0) return
//     let third = first + second;
//     process.stdout.write(third+" ")
//     fiboNTerms(n-1, second, third);
// }

// let n=10;
// let first=0, second=1;
// process.stdout.write(first+" "+second+" ")
// fiboNTerms(n-2, first, second);



//sum of fibinacci series--

// function fiboSum(n){
//     if(n==0) return 0
//     if(n==1) return 1
//     return fiboSum(n-1) + fiboSum(n-2);
// }

// let n=7;
// console.log(fiboSum(n));     //WATCH VIDEO NO 60 AT 1:15:55 FOR THE TREE TRAVERSAL




//sum of digi--

// let n = 577;
// let sum=0;
// while(n>0){
//     let rem = n%10;
//     sum += rem;
//     n = Math.floor(n/10);
// }
// console.log(sum);


// OR


// function SOD(n){
//     if(n<10) return n
//     return n%10 +SOD(Math.floor(n/10));
// }
// let n = 56321;
// console.log(SOD(n));





//REverse the number--

// let n = 876;
// let rev=0;
// while(n>0){
//     let rem = n%10;
//     rev = (rev*10) + rem;
//     n = Math.floor(n/10)
// }

// console.log(rev); 


// OR 


// function reverseDigit(n,rev){
//     if(n===0) return rev;
//     return reverseDigit(Math.floor(n/10),rev*10+(n%10))
// }

// let n = 891;
// console.log(reverseDigit(n,0));




//Math Problem--------- (video no 61)

//GCD of two numbers--

// let a = 16, b=24;

// for(let i = Math.min(a,b);i>1;i--){
//     if(a%i==0 && b%i==0){
//         console.log(i);
//         break;
//     }
// }


//OR
//By euclidean algorithm-

// let a = 16, b=24;

// while(a != b){
//     if(a>b) a=a-b;
//     else b = b-a;
// }
// console.log(a);


//OR


// function GCD(a,b){
//     if(a==b) return a;
//     if(a>b) return GCD(a-b,b);
//     else return GCD(a,b-a);
// }

// let a = 16, b=24;
// console.log(GCD(a,b));


//OR


// function gcd(a,b){
//     if(b==0) return a;
//     return gcd(b , a%b);

// }
// console.log(gcd(16,24));



// let prompt= require('prompt-sync')()
// let n = Number(prompt("enter a number "))
// checkRangeInPrime(n)

// function checkRangeInPrime(n){
//     let isPrime = new Array(n+1).fill(true)
//     for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
//         if(isPrime[i] == true){
//             for(let j = i*i;j<=n;j+=1){   
//                 isPrime[j] = false
//             }
//         }
//     }
//     for(let i=2;i<isPrime.length;i++){
//         if(isPrime[i])process.stdout.write(i+" ")
//     }
// }



// let arr1=[2,4,5]
// let arr2= [1,4,7]

// let ans = new Array(arr1.length+arr2.length)    //merged array
// let i=0,j=0,k=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         ans[k++]= arr1[i++]
//     }else{
//         ans[k++] = arr2[j++]
//     }
// }
// while(i<arr1.length){
//     ans[k++] = arr1[i++]
// }
// while(j<arr2.length){
//     ans[k++] = arr2[j++]
// }
// console.log(ans);




                    //Sorting Algorithms----

//Merge Sort----(Time complexity is O(n log n))

function conquer(arr, f, m, l) {
    let temp = new Array(l-f+1).fill(0)
    let i = f, j = m + 1, k = 0;
    while(i<=m && j<=l){
        if(arr[i] < arr[j]) temp[k++] = arr[i++]
        else temp[k++] = arr[j++]
    }
    while(i<=m) {
        temp[k++] = arr[i++]
    }
    while(j<=l){
        temp[k++] = arr[j++]
    }

    i=f ,k = 0
    while(k<temp.length){
        arr[i++] = temp[k++];
    }
}

function divide(arr , f , l){
    if(f>=l) return;
    let mid = Math.floor((f+l)/2);
    divide(arr, f, mid)
    divide(arr, mid+1, l)
    conquer(arr, f, mid, l)
}

let arr = [10,2,7,4,3,5,6,8,9,1]
divide(arr , 0, arr.length-1)
console.log(arr);
