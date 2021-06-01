size = (list) => {
  try {
    return list.length
  } catch (error) {
    throw new Error
  }
}
clear = (list) => {
  try{
    if(!list){
      throw new Error
    }
    list = []
    return list 
  } catch (error) {
    throw new Error
  }
  
}
add = (item, list) => {
  try {
    if(!item){
      throw new Error
    }
    list.push(item)
    return list
  } catch (error) {
    throw new Errors
  }
}
exists = (item, list) => {
  try {
    if(!item || !list){
      throw new Error
    }
    return list.includes(item)
  } catch (error) {
    throw new Error
  }
}
index = (index, list) => {
    if(index==null || !list){
      throw new Error()
    }
    if(index > list.length){
      throw new Error()
    }
    return list[index]
}
search = (object, list) => {
  if(!object || !list){
    throw new Error
  }

  if( list.indexOf(object) == -1){
    throw new Error
  }

  return list.indexOf(object)
}
remove = (item, list) => {
  const index = list.indexOf(item);

  if(item == null){
    throw Error
  }

  if (index < 0) {
    throw new Error
  }

  list.splice(index, 1);
  return list
}

module.exports = {size, clear, add, exists, index, search, remove}