const fs = require('node:fs');
const replaceThis = "arun";
const replaceWith  = "john";
const preview = false;

try {
 fs.readdir(".",  (err, data)=>{

    // console.log(data);
    for(let index = 0; index<data.length; index++){
        const item = data[index];
        let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
        if(!preview){

            fs.rename("data/" + item, newFile, ()=>{
                console.log("Rename Success")
            })

        }
        else{

          if("data/" + item !== newFile)  console.log( "data/"+ item +" will be renamed to " + newFile)
        }
       
    }
    
  });
 
} catch (err) {
  console.error(err);
}

// const fs = require('node:fs');
// const replaceThis = "arun";
// const replaceWith  = "john";
// const preview = false;

// try {
//  fs.readdir(".",  (err, data)=>{

//     // console.log(data);
//     for(let index = 0; index<data.length; index++){
//         const item = data[index];
//         let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
//         if(!preview){

//             fs.rename("data/" + item, newFile, ()=>{
//                 console.log("Rename Success")
//             })

//         }
//         else{

//           if("data/" + item !== newFile)  console.log( "data/"+ item +" will be renamed to " + newFile)
//         }
       
//     }
    
//   });
 
// } catch (err) {
//   console.error(err);
// }

