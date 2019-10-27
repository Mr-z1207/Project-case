export const getRand = ()=>{
	const x = Math.floor(Math.random()*4)
	const y = Math.floor(Math.random()*4)
	return [x,y]
}
export const isHave = (arr,cel)=>{
	if (arr[cel[0]][cel[1]] == null) {
		return false
	}else{
		return true
	}
}
export const createCeli = (data)=>{
	do{
		var cel = getRand()
	} while (isHave(data,cel))
	data[cel[0]][cel[1]] = 2
}

export const rotate = (arr)=>{
	var newArr = [[],[],[],[]]
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			newArr[j].push(arr[i][j])
		}
	}
	return newArr
}

const SingleRowLeftMove = (arr)=>{
	var newArr = []
		for(var i = 0;i<arr.length;i++){
			if(arr[i] == null){
				newArr.push(arr[i])
			}else{
				if (newArr.indexOf(null) == -1) {
					newArr.push(arr[i])
				}else{
					newArr.splice(newArr.indexOf(null),0,arr[i])
				}
			}
		}
		return newArr
}
export const LeftMove = (arr)=>{
	var newArr = []
	for(var i = 0; i < arr.length; i++){
		newArr.push(SingleRowLeftMove(arr[i]))
	}
	return newArr
}

const SingleRowRightMove = (arr)=>{
	var newArr = []
	for(var i = 0;i<arr.length;i++){
		if(arr[i] == null){
			newArr.unshift(arr[i])
		}else{
			newArr.push(arr[i])
		}
	}
	return newArr
}
export const RightMove = (arr)=>{
	var newArr = []
	for(var i = 0; i < arr.length; i++){
		newArr.push(SingleRowRightMove(arr[i]))
	}
	return newArr
}


const LeftSingleRowHasRepeat = (arr)=>{
	for(var i = 0; i < arr.length; i++){
		if (arr[i] == arr[i+1] && arr[i] != null) {
			arr[i] = arr[i] * 2
			arr[i+1] = null
		}
	}

	return arr
}
export const LeftHasRepeat = (arr)=>{
	var newArr = []
	for(var i = 0; i < arr.length; i++){
		newArr.push(LeftSingleRowHasRepeat(arr[i]))
	}
	return newArr
}

const RightSingleRowHasRepeat = (arr)=>{
	for(var i = arr.length-1; i >= 0 ; i--){
		if (arr[i] == arr[i-1] && arr[i] != null) {
			arr[i] = arr[i] * 2
			arr[i-1] = null
		}
	}

	return arr
}
export const RightHasRepeat = (arr)=>{
	var newArr = []
	for(var i = 0; i < arr.length; i++){
		newArr.push(RightSingleRowHasRepeat(arr[i]))
	}
	return newArr
}

export const getColor = ()=>{
	var oBox = document.getElementsByClassName('cellBox')
	for(var i = 0; i < oBox.length; i++){
		var cellNum = oBox[i].innerHTML
		console.log(cellNum)
		if (cellNum == 2) {
			oBox[i].style.backgroundColor = "#8F0"
		}else if(cellNum == 4){
			oBox[i].style.backgroundColor = "#F9B"
		}else if(cellNum == 8){
			oBox[i].style.backgroundColor = "#F50"
		}else if(cellNum == 16){
			oBox[i].style.backgroundColor = "#4E0"
		}else if(cellNum == 32){
			oBox[i].style.backgroundColor = "#0BF"
		}else if(cellNum == 64){
			oBox[i].style.backgroundColor = "#9F9"
		}else if(cellNum == 128){
			oBox[i].style.backgroundColor = "#F20"
		}else if(cellNum == 516){
			oBox[i].style.backgroundColor = "#F4B"
		}else if(cellNum == 1024){
			oBox[i].style.backgroundColor = "#02B"
		}else if(cellNum == 2048){
			oBox[i].style.backgroundColor = "#FF0"
		}
	}
}