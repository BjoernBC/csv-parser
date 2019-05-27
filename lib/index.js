/**
 * npm module to parse csv into JSON
 * author: Bjørn Christensen
 */


let parse = (csv) => {					// Input a CSV file (easy to expand with second parameter)
	var arr = csv.toString().split('\n');	// Make the csv a string with "toString()" & separate in lines with "split('\n')"

	var jsonObj = [];
	var headers = arr[0].split(',');		// Make array from first line i.e headers

	for (var i = 0; i < arr.length; i++) {	// Loop through the array "arr" i.e loop through the lines of the csv
		var data = arr[i].split(',');		// Split the lines into columns with "split(',')"
		var obj = {};

		for (var j = 0; j < data.length; j++) {			// Loop through array "data" i.e loop through the columns of each line
			obj[headers[j].trim()] = data[j].trim();	// Put the data into an object "obj"
		}

		jsonObj.push(obj);		// Push the data to JSON object
	}

	return jsonObj;		// Return the JSON object for use in the program
}
exports.parse=parse;