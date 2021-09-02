let list = document.querySelector("#parentLi");
console.log(list);
let childs = list.childNodes;
list.removeChild(childs[3]);
