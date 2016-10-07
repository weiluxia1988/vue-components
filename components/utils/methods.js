/**
  weiluxia
  2016.09.13
*/
/**
  turn boolean
*/
export function coerceBoolean(val) {
  if(typeof val !== "string") {
    return val;
  } else if(val === "true") {
    return true;
  } else if(val === "false") {
    return false;
  } else if(val === "null") {
    return false;
  } else if(val === "undefined") {
    return false;
  } 
}

/**
 turn number
*/
export function coerceNumber(val) {
  if (typeof val !== 'string') {
    return val;
  } else {
    var parsed = Number(val);
    return isNaN(parsed) ? val : parsed;
  }
}

/**
  turn string
*/
export function coerceToString (value) {
  return value == null
    ? ''
    : value.toString();
}

/**
  check object
*/
export function isObject (obj) {
  return obj !== null && typeof obj === 'object';
}
export function isPlainObject (obj) {
  return Object.prototype.toString.apply(obj) == '[object Object]';
}

/**
  check array
*/
export function isArray (arr) {
  return Array.isArray(arr);
}

/**
  check function
*/
export function isFunction (fun) {
  return Object.prototype.toString.apply(fun) == '[object Function]';
}

/**
  Check whether the object has the property
*/
export function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
  Define a property
*/
export function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

/** 
  get new array
*/
export function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
  extend and copy obj
  extend(dest,src1,src2,src3...); 将src1,src2,src3...合并到dest中,返回值为合并后的dest
  extend(boolean,dest,src1,src2,src3...) 是否进行深度拷贝
*/
export function extend() {
  var src, copyIsArray, copy, name, options, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;

    // skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( i === length ) {
    target = this;
    i--;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && isArray(src) ? src : [];

          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
}

/** 
  节流函数
*/
export function throttle (func, wait, options) {
  let context, args, result
  let timeout = null
  let previous = 0
  if (!options) options = {}
  var later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    var now = Date.now()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}