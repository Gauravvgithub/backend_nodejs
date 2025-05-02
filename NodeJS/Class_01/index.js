// console.log("hello world")


const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname, 'test')
// console.log(dirPath)


// fs.mkdir(path.join(__dirname, "test"), function (err) {
//     if (err) throw err
//     else console.log("folder is created successfully")
// })

// fs.writeFile(path.join(__dirname, "test", "hello.txt"), "hello world", function (error) {
//     if (error) throw error
//     else console.log("file is created successfully")
// })

// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", function (error, data) {
//     if (error) throw error
//     else console.log(data)
// })


// fs.rename(path.join(__dirname, "test", "hello.txt"), path.join(__dirname, "test", "hello.js"), function(error){
//     if(error) throw error
//     console.log("file renamed successfully")
// })

// fs.unlink(path.join(__dirname, "test", "hello.js"), function(error){
//     if(error) throw error
//     console.log("file deleted successfully")
// })

// fs.rm(dirPath, { recursive: true, force: true }, (error) => {
//     if (error) {
//         console.log("Error deleting directory")
//         return;
//     }
//     console.log("Directory and its contents deleted sucessfully")
// })