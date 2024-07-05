const Services = require('./services');

module.exports = {
    async search(req,res){
        try{
            const result = await Services.search();
            const data = result.body.hits.hits.map((car) => {
                return {
                    id: car._id,
                    data: car._source
                }
            })
            res.json({status_code: 200, success: true, data: data, message: "Cars data successfully fetched"})
        }catch(err){
            res.json({status_code: 500, success: false, data: [], message: err});
        }
    }
}