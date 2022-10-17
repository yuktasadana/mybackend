let getBatchInfo = function(batchname,week,day,x){
    return batchname+week+day+x
}
let info=getBatchInfo("Lithium"," ","W3","D5"," "+"The topic for today is Nodejs module system")

let gettoday=function(){
    let date = new Date()

    return date
}
let getMonth=function(){
    let date =new Date()
    let month = date.getMonth()

    return month+1
}
module.exports.info=info
module.exports.gettoday=gettoday
module.exports.getMonth=getMonth