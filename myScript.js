
class NodeStruct {
   constructor(value,left,right){
     this.value = value;
     this.left = left;
     this.right = right;
   }
}

const height = new NodeStruct(-9,null,null)
const nine = new NodeStruct(9,null,null)
const ten = new NodeStruct(10,null,null)
const four = new NodeStruct(4,height,nine)
const five = new NodeStruct(5,ten,null)
const two = new NodeStruct(2,four,five)


function findmaxPathHelper(root,sum,path) {
  if(root === null){
    return {sum,path} 
  }
  sum += root.value
  path += root.value + " => "
  if(root.right === null && root.left === null){
      return {sum,path}
  }
  const left = findmaxPathHelper(root.left,sum,path)
  const right = findmaxPathHelper(root.right,sum,path)
  if(left.sum > right.sum){
    return findmaxPathHelper(root.left,sum,path)
  }else{
    return findmaxPathHelper(root.right,sum,path)
  }
}


function findmaxPath(root) {
  const sum = findmaxPathHelper(root,0,'')
  return sum;
}

console.log(findmaxPath(two))