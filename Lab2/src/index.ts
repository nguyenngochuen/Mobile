//Bai A
console.log("A");
function sayHello(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve("Hello Async"),2000);
    });
}
sayHello().then(message => console.log(message)
);

//2
function return10(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(10),1000);
    });
}
return10().then(num =>console.log(num)
);

//3
function errorPromise(){
    return new Promise((_,reject)=>{ //dau _ laf placeholder cho resolve 
        setTimeout(()=> reject("Something went wrong"),1000);
    });
}


//4
new Promise<number>((resolve,reject) =>{
    const random = Math.random();
    resolve(random);
}).then(num =>console.log("So ngau nhien: ", num)).catch(err => console.log("Loi :", err));


//5 
function simulateTask(time:number): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(`Task done in ${time}ms`),time);

    });
}
simulateTask(105).then(message =>console.log(message)
);

//6
Promise.all([
    simulateTask(1005),
    simulateTask(1005),
    simulateTask(1005),
]).then(results => console.log("chạy 3 Promise mô phỏng song song: ", results)
);

//7
Promise.race([
    simulateTask(1005),
    simulateTask(1609),
    simulateTask(2010),

]).then(results => console.log("Promise giải quyết trước: ", results)
);

//8
Promise.resolve(2).then(n =>n*n).then(n =>n*2).then(n=>n+5).then(result =>console.log("Ket qua cua n^2*2+5 la: ", result)
);

//9 even number
new Promise<number[]>((resolve)=>{
    setTimeout(()=>resolve([1,6,0,9,10]),1000)
}).then(arr => arr.filter(n=> n%2 ==0)).then(evenNumber =>console.log("So chan gom:", evenNumber)
);

//10
simulateTask(1000).then(message => console.log(message)
).catch(err => console.log(err)
).finally(()=>{
    console.log("Done");
});

const bAsync = new Promise<string>((resolve) =>{
    setTimeout(() =>{
        resolve("---------Bai B------------");
    },2001) 
});
bAsync.then(message => console.log(message)
);

//11
async function helloAsync(){
    const message = await new Promise<string>((resolve) =>{
        setTimeout(()=>resolve("Hello Async(B)"),2000);
    });
console.log(message);

}helloAsync();

async function runsimulateTask() {
    const result = await simulateTask(2000);
    console.log("B",result);
    
}runsimulateTask();

//13
async function testErr() {
    try{
        await new Promise((_,reject)=>
        setTimeout(()=>reject("Loi(B)"),1000)
        );
        
    }catch(err){
        console.log("B",err);
        
    }
    
}testErr();

//14
// async function enterWait1sX3(x:number): Promise<number> {
    
// }