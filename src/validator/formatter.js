let str = "   Yukta  "
let gettrim=function(){
    return str.trim()
}
let abc="BACKEND"
let getlowercase = function(){
    return abc.toLowerCase()
}
let def="lithium"
let getuppercase = function(){
    return def.toUpperCase()
}
module.exports.gettrim=gettrim
module.exports.getLowercase=getlowercase
module.exports.getUppercase=getuppercase