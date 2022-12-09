const axios = require('axios')
const cryptoModel = require('../model/cryptoModel')

const getcrypto = async function (req, res) {
    try {
        const options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer c02df897-c350-4ac2-94db-790ff6fdeec1",
            }
        }
        let result = await axios(options)
        console.log(result.data)
        let data = result.data
        let arrData = data.data
        let sortData = arrData.sort((a,b)=>b.changePercent24Hr-a.changePercent24Hr)
        await cryptoModel.deleteMany()
        for(let i=0; i<sortData.length; i++){
            let obj ={}
            obj.symbol = sortData[i].symbol
            obj.name = sortData[i].name
            obj.marketCapUsd = sortData[i].marketCapUsd
            obj.priceUsd = sortData[i].priceUsd
            await cryptoModel.create(obj)
        }
        return res.status(200).send({ status: true, details: sortData})
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.getcrypto = getcrypto