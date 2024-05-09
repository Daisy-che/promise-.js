//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
async function logMessageWithDelay(message,delayMs){
    await new Promise((resolve)=>{
    setTimeout(resolve,delayMs)});
 console.log(message)   
        
}
logMessageWithDelay("hello world",1000)

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
async function fetchUserDataSequentially(userIDs){
    for(const id of userIDs){
 try{
 const userData=await getUserData(id);
 console.log(userData);
 
 } 
 catch(error) {
    console.log(`Error fetching data for id ${id}:`,error);
 }     
    }

}


//question3
function callAndLogTask(){
   performTask()
.then(()=>{
   console.log("Task successful!");
}) 
.catch(error=>{
   console.log("Error performing task:",error);

}) ; 
}

function UnstableTask(taskName,failureProbability){
   return new Promise((resolve,reject)=>{
      const randomNumber=Math.random();
      if(randomNumber>failureProbability){
         resolve(`Task ${taskName}succeeded`)
      }else{
         reject(`Task ${taskName}failed`)
      }
   })
}
 async function executeWithRetry(taskName,retriesFailureProbability){
   let attempt=1;
   while(attempt<=retries){
      try{
         const result=await UnstableTask(taskName,failureProbability);
         console.log(result)
      }catch(error){
         console.log(`Attempt ${attempt}failed:${error}`);
         attempt++
      }
   }
console.log(`Task ${taskName}failed after ${retries}attempts`);
 }
