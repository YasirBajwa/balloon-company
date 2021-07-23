
function changeImageLayout(id){
  var element = document.getElementById(id);
  element.classList.add("animate__pulse");
  var parent = document.querySelector(`#${id}`);
//   parent.childNodes[1].st
console.log(parent.childNodes[3])
// parent.getElementById(id).style.color = 'red'

}

function _changeImageLayout(id){
    var element = document.getElementById(id);
    element.classList.remove("animate__pulse");
  }