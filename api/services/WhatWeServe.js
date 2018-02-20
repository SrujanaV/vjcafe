var schema = new Schema({
    name: {
        type: String
    },
    image: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('WhatWeServe', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    /**
     * this function for get what we serve 
     *  @param {data.skip} input skip
     * @param {data.limit} input limit
     * @param {callback} callback function with err and response
     */
    getWhatWeServe: function (data, callback) {
        WhatWeServe.find({}).skip(data.skip).limit(data.limit).exec(function (err, whatWeServe) {
            if (err) {
                callback(err, null);

            } else {
                if (!_.isEmpty(whatWeServe)) {

                    callback(null, whatWeServe);
                } else {
                    callback(null, []);
                }
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);