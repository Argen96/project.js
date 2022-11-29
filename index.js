
//0. Remember to add a README.md inside your projects
//1. keep your code clean
//2. use meaningful names for files, functions and variables
// 3. use proper indentation and align properly the brackets
// 4. stay consistent
 //5. use comments when needed,only if needed
//Version one of code
/*
import uniqueValue from './uniqueNumbers.js'

console.log(await uniqueValue('file.unique'));

try{
const response=await axios.get('https://aldeki.com/lessons-schedule/')
console.log('Yeah i gott the page' , response.data.length)
}catch(err){
    console.log(err)
}*/

import fsp from 'fs/promises'


    async function createFile(fileName,content){
     await fsp.writeFile(fileName,content) 
   return fileName
    }

const result= await createFile('fileName.txt','text')

async function readFile(fileName,content){
    let file = await fsp.readFile(fileName,'utf-8')
   if(file){
    file=== content
   }
}

readFile(result,'Ckemi')
