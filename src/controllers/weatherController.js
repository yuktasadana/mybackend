const axios = require('axios')

const weatherBycity = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query data : ${q}  ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let cityWeather = await axios(options)
        console.log(cityWeather.data)
        res.status(200).send({ message: cityWeather.data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}


const getlondonweather = async function (req, res) {
    try {
        
        let appid = req.query.appid
        console.log(`query data : ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
        }
        let cityWeather = await axios(options)
        console.log(cityWeather.data)
        res.status(200).send({ message: cityWeather.data });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}

let sortcities = async function (req, res) {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    try {
        let Array = []
        for (let i = 0; i < cities.length; i++) {
            let q = cities[i]
            let appid = req.query.appid
           // console.log(`query data : ${q}  ${appid}`)
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            }
            let cityweather = await axios(options)
            console.log(cityweather.data)

            Array.push({
                city : cityweather.data.name , 
                temp : cityweather.data.main.temp
            })

        }
        
        Array.sort((a,b)=>{
            return a.temp-b.temp
        })
        res.status(200).send({status:true, message: Array });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}





/*const getcities = async function(req,res)
{
    let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    try{
        let array=[]
        for(let i=0;i<cities.length;i++)
        {
            let q = cities[i]
            let key = req.query.appid
            let options ={
                method: "get",
                url: `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}`
            }
            let result = await axios(options)
            array.push({city:result.data.name,temp:result.data.main.temp})
        }
        array.sort((a,b)=>{return a.temp-b.temp})
        res.status(200).send({status:true,msg:err})
    }
    catch (err){
        res.status(500).send({msg: err.message})
    }

}*/


module.exports.weatherBycity= weatherBycity
module.exports.getlondonweather= getlondonweather
module.exports.sortcities=sortcities