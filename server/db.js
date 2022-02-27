const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'insta'
})

con.connect(err => {
    if(err){
        console.log(err)
    }else{
        console.log("connected to mySql😁")
    }
})

const mySql = (q) => new Promise((resolve, reject)=>{
    con.query(q,(err, results)=> {
        if(err){
            reject(err)
        }else{
            resolve(results)
        }
    })
})

module.exports = {mySql}