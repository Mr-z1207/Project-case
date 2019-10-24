export const getRand = ()=>{
	const x = Math.floor(Math.random()*4)
	const y = Math.floor(Math.random()*4)
	return [x,y]
}