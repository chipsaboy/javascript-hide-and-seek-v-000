function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < lists.length; i++) {
      let children = lists[i].children

      for (let c = 0; c < children.length; c++) {
        children[c].innerHTML = parseInt(children[c].innerHTML) + n
      }
    }
  
}
