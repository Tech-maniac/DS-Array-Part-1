let num = [10,20,40,50];

//num.push(30)
//console.log(num);

//1 : Inbuilt function :

//splice method :
//splice(index number, number of elements to be deleted,value to be inserted  )

num.splice(2,0,30);
console.log(num);

//2 : Without using any Inbuilt function :

let num1 = [10,20,40,50];
let newElement = 30;
let indexNum = 2;

for(let i=num1.length-1;i>=0;i--)
{
    console.log(num1[i]);
    if(i>=indexNum)
    {
        num1[i+1]=num1[i];
        if(i==indexNum)
        {
            num1[i]=newElement;
        }
    }
}
console.log(num1);
