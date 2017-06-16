var delegate
function closure(){
	var obj = { name:'jacky' }
	var func = function(){
		return obj
	}

	delegate = func
}

closure()
var obj1 = delegate()
obj1.id = 1
console.log('obj1:',obj1)

var obj2 = delegate()
console.log('obj2:',obj2)
