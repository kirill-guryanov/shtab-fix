const del = require("del")

exports.clear = () => {
	return del("./dist")
}