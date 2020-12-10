function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  let target = document.querySelector('div#nested div div div div')
  return target
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('ul.ranked-list li');

  for (let i =0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestFunction() {
  let hellaDeep = document.getElementbyId('grand-node').querySelectorAll('div');
  return hellaDeep
}
