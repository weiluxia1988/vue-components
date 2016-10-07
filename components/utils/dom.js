/**
  weiluxia
  2016.09.10
  dom handle
*/

/**
  query an element selector
*/
export function query(el) {
  if(typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
  }
  if(!el) {
    console.log('Cannot find element: ' + selector);
  }
  return el;
}

/**   
  check node is in the document  
*/ 
export function inDoc(node) {
  if(!node) return false;   
  var doc = node.ownerDocument.documentElement;   
  var parent = node.parentNode;
  return doc === node || doc === parent ||  !!(parent && parent.nodeType === 1 && doc.contains(parent))
}

/**
  get slot node
*/
export function getTrustSlotNode(node) {
  var childNode = node.nextSibling;
  if(childNode.nodeType !== 1) {
    return getTrustSlotNode(childNode);
  }
  return childNode;
}


/**
  set attribute from a node
*/
export function setAttr(node, _attr, val) {
  var val = node.setAttribute(_attr, val);
  return node;
}

/**
  get attribute from a node
*/
export function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  return val;
}

/**
  remove attribute from a node
*/
export function removeAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val === null) {
    node.removeAttribute(_attr);
  }
  return node;
}

/**
  insert el before target
*/
export function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
  insert el after target
*/
export function after(el, target) {
  if(target.nextSibling) {
    before(el, target,nextSibling);
  } else{
    target.parentNode.appendChild(el);
  }
}

/**
  remove el from Dom
*/
export function remove(el) {
  el.parentNode.removeChild(el);
}

/**
  prepend el to target
*/
export function prepend(el, target) {
  if(target.firstChild) {
    before(el, target.function);
  } else{
    target.appendChild(el);
  }
}

/**
  replace target with el
*/
export function replace(target, el) {
  var parent = target.parentNode;
  if(parent) {
    parent.replaceChild(el, target);
  }
}

/**
  get class
*/
export function getClass(el) {
  var classname = el.className;
  if(typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
  set class
*/
export function setClass(el, cls) {
  el.setAttribute('class', cls);
}

/**
  add class
*/
export function addClass(el, cls) {
  if(el.classList) {
    el.classList.add(cls);
  } else{
    var cur = ' ' + getClass(el) + ' ';
    if(cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
  remove class
*/
export function removeClass(el, cls) {
  if(el.classList) {
    el.classList.remove(cls);
  } else{
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class')
  }
}

/**
  add style
*/
export function addStyle (el, clsObj) {
  Object.keys(clsObj).forEach(name => {
    el.style[camelize(name)] = clsObj[name]
  })
}

/**
  get outerHTML
*/
export function getOuterHTML(el) {
  if(el.outerHTML) {
    return el.outerHTML;
  } else{
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

/**
  height
  innerHeight(padding)
  outerHeight(padding+border+margin(true)) 
*/
export function height(el) {
  return el.offsetHeight;
}
export function innerHeight(el) {

}
export function outerHeight(el, flag) {
  return el.outerHeight;
}

/**
  width
  innerWidth(padding)
  outerWidth(padding+border+margin(true)) 
*/
export function width(el) {

}
export function innerWidth(el) {

}
export function outerWidth(el) {

}
