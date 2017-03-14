/**
 * 设置根HTML font-size
 */
export function setHtmlSize() {
  let iW =window.innerWidth; // screen.width;
  document.getElementsByTagName("html")[0].style.fontSize = iW / 3.75 + "px";
}

/**
 * 绑定transitionEnd事件
 * @param obj 对象
 * @param callback 会调
 */
export function addTransitionEndEvent (obj, callback){
  obj.addEventListener('webkitTransitionEnd', function(){
    callback && callback()
  }, false);
  obj.addEventListener('transitionEnd', function(){
    callback && callback()
  }, false)
}

/**
 * 移除transitionEnd事件
 * @param obj
 * @param end
 */
export function removeTransitionEndEvent(obj, end) {
  obj.removeEventListener('webkitTransitionEnd', end, false)
  obj.removeEventListener('transitionEnd', end, false)
}
