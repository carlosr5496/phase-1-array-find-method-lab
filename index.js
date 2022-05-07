       // record.find(r=>r.result==="W").year)
    function superbowlWin(record){
         let r = record.find(r=>r.result==="W")

          return !!r ? r.year : undefined;

     }
//             Action Plan:
// 1. use console.log to see if an object is stored in r
// 2. create an if statement to do this:  
// - It should return the year when the win occurred (if it occurred at all!)   
// - If no win is found, it should return, sadly, undefined\
