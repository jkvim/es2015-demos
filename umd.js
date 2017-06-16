(function(define){
	define('umd',function(){
		return { name: 'umd'}
	})
})(
	typeof define ==='function'? define:
	function(moduleId, factory){
		module.exports = factory()
	}
)
