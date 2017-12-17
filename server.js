var data = {
	en: {
		"201:en 201": {
			"2001:en 2001": {
				"detail": {
					"all": "first"
				}
			}
		},
		"202:en 202":{
			"2002:en 2002": {
				"detail": {
					"all": "second"
				}
			}
		}
	},
	fa: {
		"201:fa 201": {
			"2001:fa 2001": {
				"detail": {
					"all": "الف"
				}
			}
		},
		"202:fa 202":{
			"2002:fa 2002": {
				"detail": {
					"all": "دوم"
				}
			}
		}
	}
};


var newObj1 = {};
var createObj = function(cat, subcat){
	if(!subcat){
		if(!newObj1[cat[0]]){
			newObj1[cat[0]]= {"en":cat[1]};
		}else{
			newObj1[cat[0]].fa = cat[1];
		}
	}else{
		if(!newObj1[cat[0]])
			newObj1[cat[0]] = {};
		if(!newObj1[cat[0]][subcat[0]]){
			newObj1[cat[0]][subcat[0]]= {"en":subcat[1]};
		}else{
			newObj1[cat[0]][subcat[0]].fa = subcat[1];
		}
	}
}

Object.keys(data).map(function(dataKey, dataIndex){
	Object.keys(data[dataKey]).map(function(catProp, catIndex){
		var splitedDataCat = catProp.split(':');
		createObj(splitedDataCat);
		Object.keys(data[dataKey][catProp]).map(function(subCatProp, subCatId){
			var splitedSubCatData = subCatProp.split(':');
			createObj(splitedDataCat,splitedSubCatData)
			newObj1[splitedDataCat[0]][splitedSubCatData[0]].detail = JSON.stringify(data[dataKey][catProp][subCatProp]);
		})
	})
});

console.log("*****************************");
// var newObj2 = {};
// var traverse = function(obj){
// 	for(var prop in obj){

// 		if(prop!=="detail"){
// 			if(prop!='en'&&prop!='fa'){
// 				var splitedData = prop.split(':');
// 				if(!newObj2[splitedData[0]]){
// 					newObj2[splitedData[0]]= {"en":splitedData[1]};
// 				}else{
// 					newObj2[splitedData[0]].fa = splitedData[1];
// 				}
// 			}
// 			traverse(obj[prop])
// 		}else{
// 			// console.log(obj[prop]);
// 		}
// 	}
// }

// traverse(data);
console.log(newObj1);

// { 
// 	'201': { 
// 		'2001': { 
// 			en: 'en 2001',
//         	detail: '{"detail":{"all":"الف"}}',
//         	fa: 'fa 2001' 
//         },
//      en: 'en 201',
//      fa: 'fa 201' 
//  	},
//   '202': { 
//   	'2002': { 
//   		en: 'en 2002',
//         detail: '{"detail":{"all":"دوم"}}',
//         fa: 'fa 2002' 
//     	},
//     en: 'en 202',
//     fa: 'fa 202' 
// 	} 
// }