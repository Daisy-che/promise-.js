//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
function greet() {
   console.log('Hello Welcome');
}

setTimeout(greet, 3000);
console.log('Hi welcome back ');


//You have an array of user IDs and a function getUserData(id) 
//that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data 
//for each user ID one by one, in sequence.

const userIds = [1,2,3,4];
function getUserData(id) {
return new Promise((resolve, reject) => {
setTimeout(() => {
const userData = { id, name: `User ${id}` };
resolve(userData);
}, 1000);
});
}
async function logUserData() {
for (const userId of userIds) {
try {
const userData = await getUserData(userId);
console.log(`User ID ${userId}: ${userData.name}`);
} catch (error) {
console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
}
}
}
logUserData()



//You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's an error. 
//Write a function that calls performTask() and logs a custom success message if the 
//task is successful, and a custom error message if there's an error.

async function performTask(){
   try{
       console.log ('Congratulations')
   }
   catch{
     console.log ('Work hard')
   }
}
async function getPerformTask(){
   try{
       await performTask();
       console.log('The work was interesting')
   }
   catch(error){
       console.log(error)
       console.log('The work needs more efforts')
   }
}
getPerformTask();
//question4

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
   let retries=0

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
 
