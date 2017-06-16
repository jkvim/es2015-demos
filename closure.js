function closure(){
	var obj = { name:'jacky' }
	var func = function(){
		return obj
	}

	return func
}

var obj1 = closure()()
obj1.id = 1
console.log('obj1:',obj1)

var obj2 = closure()()
console.log('obj2:',obj2)


(function(){
	var obj = { name:'jacky' }
	var func = function(){
		return obj
	}

	return func
})
