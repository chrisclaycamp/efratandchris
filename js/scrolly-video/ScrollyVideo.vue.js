'use strict';

var vue = require('vue');

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var uaParser = {exports: {}};

(function (module, exports) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.33
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined$1) {

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.33',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 350;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SHARP   = 'Sharp',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined$1;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                                }
                            } else {
                                this[q] = match ? match : undefined$1;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined$1 : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined$1 : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish/Huawei Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i,                                                     // LieBao Browser
            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION], [
            
            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
            ], [NAME, [VERSION, /master.|lts./, ""]]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
            /(macintosh);/i
            ], [MODEL, [VENDOR, APPLE]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i                                               // Sharp
            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
            /(bravia[\w ]+)( bui|\))/i                                              // Sony
            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
            /(mitv-\w{5}) bui/i                                                 // Xiaomi
            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined$1;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined$1;
            _browser[VERSION] = undefined$1;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined$1;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined$1;
            _device[MODEL] = undefined$1;
            _device[TYPE] = undefined$1;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined$1;
            _engine[VERSION] = undefined$1;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined$1;
            _os[VERSION] = undefined$1;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    {
        // nodejs env
        if (module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : commonjsGlobal);
}(uaParser, uaParser.exports));

var UAParser = uaParser.exports;

var mp4box_all = {};

(function (exports) {
// file:src/log.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var Log = (function (){
		var start = new Date();
		var LOG_LEVEL_ERROR 	= 4;
		var LOG_LEVEL_WARNING 	= 3;
		var LOG_LEVEL_INFO 		= 2;
		var LOG_LEVEL_DEBUG		= 1;
		var log_level = LOG_LEVEL_ERROR;
		var logObject = {
			setLogLevel : function(level) {
				if (level == this.debug) log_level = LOG_LEVEL_DEBUG;
				else if (level == this.info) log_level = LOG_LEVEL_INFO;
				else if (level == this.warn) log_level = LOG_LEVEL_WARNING;
				else if (level == this.error) log_level = LOG_LEVEL_ERROR;
				else log_level = LOG_LEVEL_ERROR;
			},
			debug : function(module, msg) {
				if (console.debug === undefined) {
					console.debug = console.log;
				}
				if (LOG_LEVEL_DEBUG >= log_level) {
					console.debug("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
				}
			},
			log : function(module, msg) {
				this.debug(module.msg);
			},
			info : function(module, msg) {
				if (LOG_LEVEL_INFO >= log_level) {
					console.info("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
				}
			},
			warn : function(module, msg) {
				if (LOG_LEVEL_WARNING >= log_level) {
					console.warn("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
				}
			},
			error : function(module, msg) {
				if (LOG_LEVEL_ERROR >= log_level) {
					console.error("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
				}
			}
		};
		return logObject;
	})();
	
/* Helper function to print a duration value in the form H:MM:SS.MS */
Log.getDurationString = function(duration, _timescale) {
	var neg;
	/* Helper function to print a number on a fixed number of digits */
	function pad(number, length) {
		var str = '' + number;
		var a = str.split('.');		
		while (a[0].length < length) {
			a[0] = '0' + a[0];
		}
		return a.join('.');
	}
	if (duration < 0) {
		neg = true;
		duration = -duration;
	} else {
		neg = false;	
	}
	var timescale = _timescale || 1;
	var duration_sec = duration/timescale;
	var hours = Math.floor(duration_sec/3600);
	duration_sec -= hours * 3600;
	var minutes = Math.floor(duration_sec/60);
	duration_sec -= minutes * 60;		
	var msec = duration_sec*1000;
	duration_sec = Math.floor(duration_sec);
	msec -= duration_sec*1000;
	msec = Math.floor(msec);
	return (neg ? "-": "")+hours+":"+pad(minutes,2)+":"+pad(duration_sec,2)+"."+pad(msec,3);
};
	
/* Helper function to stringify HTML5 TimeRanges objects */	
Log.printRanges = function(ranges) {
	var length = ranges.length;
	if (length > 0) {
		var str = "";
		for (var i = 0; i < length; i++) {
		  if (i > 0) str += ",";
		  str += "["+Log.getDurationString(ranges.start(i))+ ","+Log.getDurationString(ranges.end(i))+"]";
		}
		return str;
	} else {
		return "(empty)";
	}
};

{
	exports.Log = Log;
}
// file:src/stream.js
var MP4BoxStream = function(arrayBuffer) {
  if (arrayBuffer instanceof ArrayBuffer) {
    this.buffer = arrayBuffer;
    this.dataview = new DataView(arrayBuffer);
  } else {
    throw ("Needs an array buffer");
  }
  this.position = 0;
};

/*************************************************************************
  Common API between MultiBufferStream and SimpleStream
 *************************************************************************/
MP4BoxStream.prototype.getPosition = function() {
  return this.position;
};

MP4BoxStream.prototype.getEndPosition = function() {
  return this.buffer.byteLength;
};

MP4BoxStream.prototype.getLength = function() {
  return this.buffer.byteLength;
};

MP4BoxStream.prototype.seek = function (pos) {
  var npos = Math.max(0, Math.min(this.buffer.byteLength, pos));
  this.position = (isNaN(npos) || !isFinite(npos)) ? 0 : npos;
  return true;
};

MP4BoxStream.prototype.isEos = function () {
  return this.getPosition() >= this.getEndPosition();
};

/*************************************************************************
  Read methods, simimar to DataStream but simpler
 *************************************************************************/
MP4BoxStream.prototype.readAnyInt = function(size, signed) {
  var res = 0;
  if (this.position + size <= this.buffer.byteLength) {
    switch (size) {
      case 1:
        if (signed) {
          res = this.dataview.getInt8(this.position);
        } else {
          res = this.dataview.getUint8(this.position);
        }
        break;
      case 2:
        if (signed) {
          res = this.dataview.getInt16(this.position);
        } else {
          res = this.dataview.getUint16(this.position);
        }
        break;
      case 3:
        if (signed) {
          throw ("No method for reading signed 24 bits values");
        } else {
          res = this.dataview.getUint8(this.position) << 16;
          res |= this.dataview.getUint8(this.position+1) << 8;
          res |= this.dataview.getUint8(this.position+2);
        }
        break;
      case 4:
        if (signed) {
          res = this.dataview.getInt32(this.position);
        } else {
          res = this.dataview.getUint32(this.position);
        }
        break;
      case 8:
        if (signed) {
          throw ("No method for reading signed 64 bits values");
        } else {
          res = this.dataview.getUint32(this.position) << 32;
          res |= this.dataview.getUint32(this.position+4);
        }
        break;
      default:
        throw ("readInt method not implemented for size: "+size);
    }
    this.position+= size;
    return res;
  } else {
    throw ("Not enough bytes in buffer");
  }
};

MP4BoxStream.prototype.readUint8 = function() {
  return this.readAnyInt(1, false);
};

MP4BoxStream.prototype.readUint16 = function() {
  return this.readAnyInt(2, false);
};

MP4BoxStream.prototype.readUint24 = function() {
  return this.readAnyInt(3, false);
};

MP4BoxStream.prototype.readUint32 = function() {
  return this.readAnyInt(4, false);
};

MP4BoxStream.prototype.readUint64 = function() {
  return this.readAnyInt(8, false);
};

MP4BoxStream.prototype.readString = function(length) {
  if (this.position + length <= this.buffer.byteLength) {
    var s = "";
    for (var i = 0; i < length; i++) {
      s += String.fromCharCode(this.readUint8());
    }
    return s;
  } else {
    throw ("Not enough bytes in buffer");
  }
};

MP4BoxStream.prototype.readCString = function() {
  var arr = [];
  while(true) {
    var b = this.readUint8();
    if (b !== 0) {
      arr.push(b);
    } else {
      break;
    }
  }
  return String.fromCharCode.apply(null, arr); 
};

MP4BoxStream.prototype.readInt8 = function() {
  return this.readAnyInt(1, true);
};

MP4BoxStream.prototype.readInt16 = function() {
  return this.readAnyInt(2, true);
};

MP4BoxStream.prototype.readInt32 = function() {
  return this.readAnyInt(4, true);
};

MP4BoxStream.prototype.readInt64 = function() {
  return this.readAnyInt(8, false);
};

MP4BoxStream.prototype.readUint8Array = function(length) {
  var arr = new Uint8Array(length);
  for (var i = 0; i < length; i++) {
    arr[i] = this.readUint8();
  }
  return arr;
};

MP4BoxStream.prototype.readInt16Array = function(length) {
  var arr = new Int16Array(length);
  for (var i = 0; i < length; i++) {
    arr[i] = this.readInt16();
  }
  return arr;
};

MP4BoxStream.prototype.readUint16Array = function(length) {
  var arr = new Int16Array(length);
  for (var i = 0; i < length; i++) {
    arr[i] = this.readUint16();
  }
  return arr;
};

MP4BoxStream.prototype.readUint32Array = function(length) {
  var arr = new Uint32Array(length);
  for (var i = 0; i < length; i++) {
    arr[i] = this.readUint32();
  }
  return arr;
};

MP4BoxStream.prototype.readInt32Array = function(length) {
  var arr = new Int32Array(length);
  for (var i = 0; i < length; i++) {
    arr[i] = this.readInt32();
  }
  return arr;
};

{
  exports.MP4BoxStream = MP4BoxStream;
}// file:src/DataStream.js
/**
  DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
  It's like a file-like DataView on steroids.

  @param {ArrayBuffer} arrayBuffer ArrayBuffer to read from.
  @param {?Number} byteOffset Offset from arrayBuffer beginning for the DataStream.
  @param {?Boolean} endianness DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN (the default).
  */
var DataStream = function(arrayBuffer, byteOffset, endianness) {
  this._byteOffset = byteOffset || 0;
  if (arrayBuffer instanceof ArrayBuffer) {
    this.buffer = arrayBuffer;
  } else if (typeof arrayBuffer == "object") {
    this.dataView = arrayBuffer;
    if (byteOffset) {
      this._byteOffset += byteOffset;
    }
  } else {
    this.buffer = new ArrayBuffer(arrayBuffer || 0);
  }
  this.position = 0;
  this.endianness = endianness == null ? DataStream.LITTLE_ENDIAN : endianness;
};
DataStream.prototype = {};

DataStream.prototype.getPosition = function() {
  return this.position;
};

/**
  Internal function to resize the DataStream buffer when required.
  @param {number} extra Number of bytes to add to the buffer allocation.
  @return {null}
  */
DataStream.prototype._realloc = function(extra) {
  if (!this._dynamicSize) {
    return;
  }
  var req = this._byteOffset + this.position + extra;
  var blen = this._buffer.byteLength;
  if (req <= blen) {
    if (req > this._byteLength) {
      this._byteLength = req;
    }
    return;
  }
  if (blen < 1) {
    blen = 1;
  }
  while (req > blen) {
    blen *= 2;
  }
  var buf = new ArrayBuffer(blen);
  var src = new Uint8Array(this._buffer);
  var dst = new Uint8Array(buf, 0, src.length);
  dst.set(src);
  this.buffer = buf;
  this._byteLength = req;
};

/**
  Internal function to trim the DataStream buffer when required.
  Used for stripping out the extra bytes from the backing buffer when
  the virtual byteLength is smaller than the buffer byteLength (happens after
  growing the buffer with writes and not filling the extra space completely).

  @return {null}
  */
DataStream.prototype._trimAlloc = function() {
  if (this._byteLength == this._buffer.byteLength) {
    return;
  }
  var buf = new ArrayBuffer(this._byteLength);
  var dst = new Uint8Array(buf);
  var src = new Uint8Array(this._buffer, 0, dst.length);
  dst.set(src);
  this.buffer = buf;
};


/**
  Big-endian const to use as default endianness.
  @type {boolean}
  */
DataStream.BIG_ENDIAN = false;

/**
  Little-endian const to use as default endianness.
  @type {boolean}
  */
DataStream.LITTLE_ENDIAN = true;

/**
  Virtual byte length of the DataStream backing buffer.
  Updated to be max of original buffer size and last written size.
  If dynamicSize is false is set to buffer size.
  @type {number}
  */
DataStream.prototype._byteLength = 0;

/**
  Returns the byte length of the DataStream object.
  @type {number}
  */
Object.defineProperty(DataStream.prototype, 'byteLength',
  { get: function() {
    return this._byteLength - this._byteOffset;
  }});

/**
  Set/get the backing ArrayBuffer of the DataStream object.
  The setter updates the DataView to point to the new buffer.
  @type {Object}
  */
Object.defineProperty(DataStream.prototype, 'buffer',
  { get: function() {
      this._trimAlloc();
      return this._buffer;
    },
    set: function(v) {
      this._buffer = v;
      this._dataView = new DataView(this._buffer, this._byteOffset);
      this._byteLength = this._buffer.byteLength;
    } });

/**
  Set/get the byteOffset of the DataStream object.
  The setter updates the DataView to point to the new byteOffset.
  @type {number}
  */
Object.defineProperty(DataStream.prototype, 'byteOffset',
  { get: function() {
      return this._byteOffset;
    },
    set: function(v) {
      this._byteOffset = v;
      this._dataView = new DataView(this._buffer, this._byteOffset);
      this._byteLength = this._buffer.byteLength;
    } });

/**
  Set/get the backing DataView of the DataStream object.
  The setter updates the buffer and byteOffset to point to the DataView values.
  @type {Object}
  */
Object.defineProperty(DataStream.prototype, 'dataView',
  { get: function() {
      return this._dataView;
    },
    set: function(v) {
      this._byteOffset = v.byteOffset;
      this._buffer = v.buffer;
      this._dataView = new DataView(this._buffer, this._byteOffset);
      this._byteLength = this._byteOffset + v.byteLength;
    } });

/**
  Sets the DataStream read/write position to given position.
  Clamps between 0 and DataStream length.

  @param {number} pos Position to seek to.
  @return {null}
  */
DataStream.prototype.seek = function(pos) {
  var npos = Math.max(0, Math.min(this.byteLength, pos));
  this.position = (isNaN(npos) || !isFinite(npos)) ? 0 : npos;
};

/**
  Returns true if the DataStream seek pointer is at the end of buffer and
  there's no more data to read.

  @return {boolean} True if the seek pointer is at the end of the buffer.
  */
DataStream.prototype.isEof = function() {
  return (this.position >= this._byteLength);
};


/**
  Maps a Uint8Array into the DataStream buffer.

  Nice for quickly reading in data.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint8Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint8Array = function(length) {
  this._realloc(length * 1);
  var arr = new Uint8Array(this._buffer, this.byteOffset+this.position, length);
  this.position += length * 1;
  return arr;
};


/**
  Reads an Int32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int32Array.
 */
DataStream.prototype.readInt32Array = function(length, e) {
  length = length == null ? (this.byteLength-this.position / 4) : length;
  var arr = new Int32Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads an Int16Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int16Array.
 */
DataStream.prototype.readInt16Array = function(length, e) {
  length = length == null ? (this.byteLength-this.position / 2) : length;
  var arr = new Int16Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads an Int8Array of desired length from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int8Array.
 */
DataStream.prototype.readInt8Array = function(length) {
  length = length == null ? (this.byteLength-this.position) : length;
  var arr = new Int8Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads a Uint32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint32Array.
 */
DataStream.prototype.readUint32Array = function(length, e) {
  length = length == null ? (this.byteLength-this.position / 4) : length;
  var arr = new Uint32Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads a Uint16Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint16Array.
 */
DataStream.prototype.readUint16Array = function(length, e) {
  length = length == null ? (this.byteLength-this.position / 2) : length;
  var arr = new Uint16Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads a Uint8Array of desired length from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint8Array.
 */
DataStream.prototype.readUint8Array = function(length) {
  length = length == null ? (this.byteLength-this.position) : length;
  var arr = new Uint8Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads a Float64Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Float64Array.
 */
DataStream.prototype.readFloat64Array = function(length, e) {
  length = length == null ? (this.byteLength-this.position / 8) : length;
  var arr = new Float64Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += arr.byteLength;
  return arr;
};

/**
  Reads a Float32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Float32Array.
 */
DataStream.prototype.readFloat32Array = function(length, e) {
  length = length == null ? (this.byteLength-this.position / 4) : length;
  var arr = new Float32Array(length);
  DataStream.memcpy(arr.buffer, 0,
                    this.buffer, this.byteOffset+this.position,
                    length*arr.BYTES_PER_ELEMENT);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += arr.byteLength;
  return arr;
};


/**
  Reads a 32-bit int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readInt32 = function(e) {
  var v = this._dataView.getInt32(this.position, e == null ? this.endianness : e);
  this.position += 4;
  return v;
};

/**
  Reads a 16-bit int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readInt16 = function(e) {
  var v = this._dataView.getInt16(this.position, e == null ? this.endianness : e);
  this.position += 2;
  return v;
};

/**
  Reads an 8-bit int from the DataStream.

  @return {number} The read number.
 */
DataStream.prototype.readInt8 = function() {
  var v = this._dataView.getInt8(this.position);
  this.position += 1;
  return v;
};

/**
  Reads a 32-bit unsigned int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readUint32 = function(e) {
  var v = this._dataView.getUint32(this.position, e == null ? this.endianness : e);
  this.position += 4;
  return v;
};

/**
  Reads a 16-bit unsigned int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readUint16 = function(e) {
  var v = this._dataView.getUint16(this.position, e == null ? this.endianness : e);
  this.position += 2;
  return v;
};

/**
  Reads an 8-bit unsigned int from the DataStream.

  @return {number} The read number.
 */
DataStream.prototype.readUint8 = function() {
  var v = this._dataView.getUint8(this.position);
  this.position += 1;
  return v;
};

/**
  Reads a 32-bit float from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readFloat32 = function(e) {
  var v = this._dataView.getFloat32(this.position, e == null ? this.endianness : e);
  this.position += 4;
  return v;
};

/**
  Reads a 64-bit float from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readFloat64 = function(e) {
  var v = this._dataView.getFloat64(this.position, e == null ? this.endianness : e);
  this.position += 8;
  return v;
};

/**
  Native endianness. Either DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN
  depending on the platform endianness.

  @type {boolean}
 */
DataStream.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0;

/**
  Copies byteLength bytes from the src buffer at srcOffset to the
  dst buffer at dstOffset.

  @param {Object} dst Destination ArrayBuffer to write to.
  @param {number} dstOffset Offset to the destination ArrayBuffer.
  @param {Object} src Source ArrayBuffer to read from.
  @param {number} srcOffset Offset to the source ArrayBuffer.
  @param {number} byteLength Number of bytes to copy.
 */
DataStream.memcpy = function(dst, dstOffset, src, srcOffset, byteLength) {
  var dstU8 = new Uint8Array(dst, dstOffset, byteLength);
  var srcU8 = new Uint8Array(src, srcOffset, byteLength);
  dstU8.set(srcU8);
};

/**
  Converts array to native endianness in-place.

  @param {Object} array Typed array to convert.
  @param {boolean} arrayIsLittleEndian True if the data in the array is
                                       little-endian. Set false for big-endian.
  @return {Object} The converted typed array.
 */
DataStream.arrayToNative = function(array, arrayIsLittleEndian) {
  if (arrayIsLittleEndian == this.endianness) {
    return array;
  } else {
    return this.flipArrayEndianness(array);
  }
};

/**
  Converts native endianness array to desired endianness in-place.

  @param {Object} array Typed array to convert.
  @param {boolean} littleEndian True if the converted array should be
                                little-endian. Set false for big-endian.
  @return {Object} The converted typed array.
 */
DataStream.nativeToEndian = function(array, littleEndian) {
  if (this.endianness == littleEndian) {
    return array;
  } else {
    return this.flipArrayEndianness(array);
  }
};

/**
  Flips typed array endianness in-place.

  @param {Object} array Typed array to flip.
  @return {Object} The converted typed array.
 */
DataStream.flipArrayEndianness = function(array) {
  var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
  for (var i=0; i<array.byteLength; i+=array.BYTES_PER_ELEMENT) {
    for (var j=i+array.BYTES_PER_ELEMENT-1, k=i; j>k; j--, k++) {
      var tmp = u8[k];
      u8[k] = u8[j];
      u8[j] = tmp;
    }
  }
  return array;
};

/**
  Seek position where DataStream#readStruct ran into a problem.
  Useful for debugging struct parsing.

  @type {number}
 */
DataStream.prototype.failurePosition = 0;

String.fromCharCodeUint8 = function(uint8arr) {
    var arr = [];
    for (var i = 0; i < uint8arr.length; i++) {
      arr[i] = uint8arr[i];
    }
    return String.fromCharCode.apply(null, arr);
};
/**
  Read a string of desired length and encoding from the DataStream.

  @param {number} length The length of the string to read in bytes.
  @param {?string} encoding The encoding of the string data in the DataStream.
                            Defaults to ASCII.
  @return {string} The read string.
 */
DataStream.prototype.readString = function(length, encoding) {
  if (encoding == null || encoding == "ASCII") {
    return String.fromCharCodeUint8.apply(null, [this.mapUint8Array(length == null ? this.byteLength-this.position : length)]);
  } else {
    return (new TextDecoder(encoding)).decode(this.mapUint8Array(length));
  }
};

/**
  Read null-terminated string of desired length from the DataStream. Truncates
  the returned string so that the null byte is not a part of it.

  @param {?number} length The length of the string to read.
  @return {string} The read string.
 */
DataStream.prototype.readCString = function(length) {
  var blen = this.byteLength-this.position;
  var u8 = new Uint8Array(this._buffer, this._byteOffset + this.position);
  var len = blen;
  if (length != null) {
    len = Math.min(length, blen);
  }
  for (var i = 0; i < len && u8[i] !== 0; i++); // find first zero byte
  var s = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(i)]);
  if (length != null) {
    this.position += len-i;
  } else if (i != blen) {
    this.position += 1; // trailing zero if not at end of buffer
  }
  return s;
};

/* 
   TODO: fix endianness for 24/64-bit fields
   TODO: check range/support for 64-bits numbers in JavaScript
*/
var MAX_SIZE = Math.pow(2, 32);

DataStream.prototype.readInt64 = function () {
  return (this.readInt32()*MAX_SIZE)+this.readUint32();
};
DataStream.prototype.readUint64 = function () {
	return (this.readUint32()*MAX_SIZE)+this.readUint32();
};

DataStream.prototype.readInt64 = function () {
  return (this.readUint32()*MAX_SIZE)+this.readUint32();
};

DataStream.prototype.readUint24 = function () {
	return (this.readUint8()<<16)+(this.readUint8()<<8)+this.readUint8();
};

{
  exports.DataStream = DataStream;  
}
// file:src/DataStream-write.js
/**
  Saves the DataStream contents to the given filename.
  Uses Chrome's anchor download property to initiate download.
 
  @param {string} filename Filename to save as.
  @return {null}
  */
DataStream.prototype.save = function(filename) {
  var blob = new Blob([this.buffer]);
  if (window.URL && URL.createObjectURL) {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      // Required in Firefox:
      document.body.appendChild(a);
      a.setAttribute('href', url);
      a.setAttribute('download', filename);
      // Required in Firefox:
      a.setAttribute('target', '_self');
      a.click();
      window.URL.revokeObjectURL(url);
  } else {
      throw("DataStream.save: Can't create object URL.");
  }
};

/**
  Whether to extend DataStream buffer when trying to write beyond its size.
  If set, the buffer is reallocated to twice its current size until the
  requested write fits the buffer.
  @type {boolean}
  */
DataStream.prototype._dynamicSize = true;
Object.defineProperty(DataStream.prototype, 'dynamicSize',
  { get: function() {
      return this._dynamicSize;
    },
    set: function(v) {
      if (!v) {
        this._trimAlloc();
      }
      this._dynamicSize = v;
    } });

/**
  Internal function to trim the DataStream buffer when required.
  Used for stripping out the first bytes when not needed anymore.

  @return {null}
  */
DataStream.prototype.shift = function(offset) {
  var buf = new ArrayBuffer(this._byteLength-offset);
  var dst = new Uint8Array(buf);
  var src = new Uint8Array(this._buffer, offset, dst.length);
  dst.set(src);
  this.buffer = buf;
  this.position -= offset;
};

/**
  Writes an Int32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeInt32Array = function(arr, e) {
  this._realloc(arr.length * 4);
  if (arr instanceof Int32Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapInt32Array(arr.length, e);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeInt32(arr[i], e);
    }
  }
};

/**
  Writes an Int16Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeInt16Array = function(arr, e) {
  this._realloc(arr.length * 2);
  if (arr instanceof Int16Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapInt16Array(arr.length, e);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeInt16(arr[i], e);
    }
  }
};

/**
  Writes an Int8Array to the DataStream.

  @param {Object} arr The array to write.
 */
DataStream.prototype.writeInt8Array = function(arr) {
  this._realloc(arr.length * 1);
  if (arr instanceof Int8Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapInt8Array(arr.length);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeInt8(arr[i]);
    }
  }
};

/**
  Writes a Uint32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeUint32Array = function(arr, e) {
  this._realloc(arr.length * 4);
  if (arr instanceof Uint32Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapUint32Array(arr.length, e);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeUint32(arr[i], e);
    }
  }
};

/**
  Writes a Uint16Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeUint16Array = function(arr, e) {
  this._realloc(arr.length * 2);
  if (arr instanceof Uint16Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapUint16Array(arr.length, e);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeUint16(arr[i], e);
    }
  }
};

/**
  Writes a Uint8Array to the DataStream.

  @param {Object} arr The array to write.
 */
DataStream.prototype.writeUint8Array = function(arr) {
  this._realloc(arr.length * 1);
  if (arr instanceof Uint8Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapUint8Array(arr.length);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeUint8(arr[i]);
    }
  }
};

/**
  Writes a Float64Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeFloat64Array = function(arr, e) {
  this._realloc(arr.length * 8);
  if (arr instanceof Float64Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapFloat64Array(arr.length, e);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeFloat64(arr[i], e);
    }
  }
};

/**
  Writes a Float32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeFloat32Array = function(arr, e) {
  this._realloc(arr.length * 4);
  if (arr instanceof Float32Array &&
      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
                      arr.buffer, 0,
                      arr.byteLength);
    this.mapFloat32Array(arr.length, e);
  } else {
    for (var i=0; i<arr.length; i++) {
      this.writeFloat32(arr[i], e);
    }
  }
};


/**
  Writes a 32-bit int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeInt32 = function(v, e) {
  this._realloc(4);
  this._dataView.setInt32(this.position, v, e == null ? this.endianness : e);
  this.position += 4;
};

/**
  Writes a 16-bit int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeInt16 = function(v, e) {
  this._realloc(2);
  this._dataView.setInt16(this.position, v, e == null ? this.endianness : e);
  this.position += 2;
};

/**
  Writes an 8-bit int to the DataStream.

  @param {number} v Number to write.
 */
DataStream.prototype.writeInt8 = function(v) {
  this._realloc(1);
  this._dataView.setInt8(this.position, v);
  this.position += 1;
};

/**
  Writes a 32-bit unsigned int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeUint32 = function(v, e) {
  this._realloc(4);
  this._dataView.setUint32(this.position, v, e == null ? this.endianness : e);
  this.position += 4;
};

/**
  Writes a 16-bit unsigned int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeUint16 = function(v, e) {
  this._realloc(2);
  this._dataView.setUint16(this.position, v, e == null ? this.endianness : e);
  this.position += 2;
};

/**
  Writes an 8-bit unsigned  int to the DataStream.

  @param {number} v Number to write.
 */
DataStream.prototype.writeUint8 = function(v) {
  this._realloc(1);
  this._dataView.setUint8(this.position, v);
  this.position += 1;
};

/**
  Writes a 32-bit float to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeFloat32 = function(v, e) {
  this._realloc(4);
  this._dataView.setFloat32(this.position, v, e == null ? this.endianness : e);
  this.position += 4;
};

/**
  Writes a 64-bit float to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeFloat64 = function(v, e) {
  this._realloc(8);
  this._dataView.setFloat64(this.position, v, e == null ? this.endianness : e);
  this.position += 8;
};

/**
  Write a UCS-2 string of desired endianness to the DataStream. The
  lengthOverride argument lets you define the number of characters to write.
  If the string is shorter than lengthOverride, the extra space is padded with
  zeroes.

  @param {string} str The string to write.
  @param {?boolean} endianness The endianness to use for the written string data.
  @param {?number} lengthOverride The number of characters to write.
 */
DataStream.prototype.writeUCS2String = function(str, endianness, lengthOverride) {
  if (lengthOverride == null) {
    lengthOverride = str.length;
  }
  for (var i = 0; i < str.length && i < lengthOverride; i++) {
    this.writeUint16(str.charCodeAt(i), endianness);
  }
  for (; i<lengthOverride; i++) {
    this.writeUint16(0);
  }
};

/**
  Writes a string of desired length and encoding to the DataStream.

  @param {string} s The string to write.
  @param {?string} encoding The encoding for the written string data.
                            Defaults to ASCII.
  @param {?number} length The number of characters to write.
 */
DataStream.prototype.writeString = function(s, encoding, length) {
  var i = 0;
  if (encoding == null || encoding == "ASCII") {
    if (length != null) {
      var len = Math.min(s.length, length);
      for (i=0; i<len; i++) {
        this.writeUint8(s.charCodeAt(i));
      }
      for (; i<length; i++) {
        this.writeUint8(0);
      }
    } else {
      for (i=0; i<s.length; i++) {
        this.writeUint8(s.charCodeAt(i));
      }
    }
  } else {
    this.writeUint8Array((new TextEncoder(encoding)).encode(s.substring(0, length)));
  }
};

/**
  Writes a null-terminated string to DataStream and zero-pads it to length
  bytes. If length is not given, writes the string followed by a zero.
  If string is longer than length, the written part of the string does not have
  a trailing zero.

  @param {string} s The string to write.
  @param {?number} length The number of characters to write.
 */
DataStream.prototype.writeCString = function(s, length) {
  var i = 0;
  if (length != null) {
    var len = Math.min(s.length, length);
    for (i=0; i<len; i++) {
      this.writeUint8(s.charCodeAt(i));
    }
    for (; i<length; i++) {
      this.writeUint8(0);
    }
  } else {
    for (i=0; i<s.length; i++) {
      this.writeUint8(s.charCodeAt(i));
    }
    this.writeUint8(0);
  }
};

/**
  Writes a struct to the DataStream. Takes a structDefinition that gives the
  types and a struct object that gives the values. Refer to readStruct for the
  structure of structDefinition.

  @param {Object} structDefinition Type definition of the struct.
  @param {Object} struct The struct data object.
  */
DataStream.prototype.writeStruct = function(structDefinition, struct) {
  for (var i = 0; i < structDefinition.length; i+=2) {
    var t = structDefinition[i+1];
    this.writeType(t, struct[structDefinition[i]], struct);
  }
};

/**
  Writes object v of type t to the DataStream.

  @param {Object} t Type of data to write.
  @param {Object} v Value of data to write.
  @param {Object} struct Struct to pass to write callback functions.
  */
DataStream.prototype.writeType = function(t, v, struct) {
  var tp;
  if (typeof t == "function") {
    return t(this, v);
  } else if (typeof t == "object" && !(t instanceof Array)) {
    return t.set(this, v, struct);
  }
  var lengthOverride = null;
  var charset = "ASCII";
  var pos = this.position;
  if (typeof(t) == 'string' && /:/.test(t)) {
    tp = t.split(":");
    t = tp[0];
    lengthOverride = parseInt(tp[1]);
  }
  if (typeof t == 'string' && /,/.test(t)) {
    tp = t.split(",");
    t = tp[0];
    charset = parseInt(tp[1]);
  }

  switch(t) {
    case 'uint8':
      this.writeUint8(v);
      break;
    case 'int8':
      this.writeInt8(v);
      break;

    case 'uint16':
      this.writeUint16(v, this.endianness);
      break;
    case 'int16':
      this.writeInt16(v, this.endianness);
      break;
    case 'uint32':
      this.writeUint32(v, this.endianness);
      break;
    case 'int32':
      this.writeInt32(v, this.endianness);
      break;
    case 'float32':
      this.writeFloat32(v, this.endianness);
      break;
    case 'float64':
      this.writeFloat64(v, this.endianness);
      break;

    case 'uint16be':
      this.writeUint16(v, DataStream.BIG_ENDIAN);
      break;
    case 'int16be':
      this.writeInt16(v, DataStream.BIG_ENDIAN);
      break;
    case 'uint32be':
      this.writeUint32(v, DataStream.BIG_ENDIAN);
      break;
    case 'int32be':
      this.writeInt32(v, DataStream.BIG_ENDIAN);
      break;
    case 'float32be':
      this.writeFloat32(v, DataStream.BIG_ENDIAN);
      break;
    case 'float64be':
      this.writeFloat64(v, DataStream.BIG_ENDIAN);
      break;

    case 'uint16le':
      this.writeUint16(v, DataStream.LITTLE_ENDIAN);
      break;
    case 'int16le':
      this.writeInt16(v, DataStream.LITTLE_ENDIAN);
      break;
    case 'uint32le':
      this.writeUint32(v, DataStream.LITTLE_ENDIAN);
      break;
    case 'int32le':
      this.writeInt32(v, DataStream.LITTLE_ENDIAN);
      break;
    case 'float32le':
      this.writeFloat32(v, DataStream.LITTLE_ENDIAN);
      break;
    case 'float64le':
      this.writeFloat64(v, DataStream.LITTLE_ENDIAN);
      break;

    case 'cstring':
      this.writeCString(v, lengthOverride);
      break;

    case 'string':
      this.writeString(v, charset, lengthOverride);
      break;

    case 'u16string':
      this.writeUCS2String(v, this.endianness, lengthOverride);
      break;

    case 'u16stringle':
      this.writeUCS2String(v, DataStream.LITTLE_ENDIAN, lengthOverride);
      break;

    case 'u16stringbe':
      this.writeUCS2String(v, DataStream.BIG_ENDIAN, lengthOverride);
      break;

    default:
      if (t.length == 3) {
        var ta = t[1];
        for (var i=0; i<v.length; i++) {
          this.writeType(ta, v[i]);
        }
        break;
      } else {
        this.writeStruct(t, v);
        break;
      }
  }
  if (lengthOverride != null) {
    this.position = pos;
    this._realloc(lengthOverride);
    this.position = pos + lengthOverride;
  }
};


DataStream.prototype.writeUint64 = function (v) {
	var h = Math.floor(v / MAX_SIZE);
	this.writeUint32(h);
	this.writeUint32(v & 0xFFFFFFFF);
};

DataStream.prototype.writeUint24 = function (v) {
	this.writeUint8((v & 0x00FF0000)>>16);
	this.writeUint8((v & 0x0000FF00)>>8);
	this.writeUint8((v & 0x000000FF));
};

DataStream.prototype.adjustUint32 = function(position, value) {
	var pos = this.position;
	this.seek(position);
	this.writeUint32(value);
	this.seek(pos);
};
// file:src/DataStream-map.js
/**
  Maps an Int32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt32Array = function(length, e) {
  this._realloc(length * 4);
  var arr = new Int32Array(this._buffer, this.byteOffset+this.position, length);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += length * 4;
  return arr;
};

/**
  Maps an Int16Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int16Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt16Array = function(length, e) {
  this._realloc(length * 2);
  var arr = new Int16Array(this._buffer, this.byteOffset+this.position, length);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += length * 2;
  return arr;
};

/**
  Maps an Int8Array into the DataStream buffer.

  Nice for quickly reading in data.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int8Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt8Array = function(length) {
  this._realloc(length * 1);
  var arr = new Int8Array(this._buffer, this.byteOffset+this.position, length);
  this.position += length * 1;
  return arr;
};

/**
  Maps a Uint32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint32Array = function(length, e) {
  this._realloc(length * 4);
  var arr = new Uint32Array(this._buffer, this.byteOffset+this.position, length);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += length * 4;
  return arr;
};

/**
  Maps a Uint16Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint16Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint16Array = function(length, e) {
  this._realloc(length * 2);
  var arr = new Uint16Array(this._buffer, this.byteOffset+this.position, length);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += length * 2;
  return arr;
};

/**
  Maps a Float64Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Float64Array to the DataStream backing buffer.
  */
DataStream.prototype.mapFloat64Array = function(length, e) {
  this._realloc(length * 8);
  var arr = new Float64Array(this._buffer, this.byteOffset+this.position, length);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += length * 8;
  return arr;
};

/**
  Maps a Float32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Float32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapFloat32Array = function(length, e) {
  this._realloc(length * 4);
  var arr = new Float32Array(this._buffer, this.byteOffset+this.position, length);
  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  this.position += length * 4;
  return arr;
};
// file:src/buffer.js
/**
 * MultiBufferStream is a class that acts as a SimpleStream for parsing 
 * It holds several, possibly non-contiguous ArrayBuffer objects, each with a fileStart property 
 * containing the offset for the buffer data in an original/virtual file 
 *
 * It inherits also from DataStream for all read/write/alloc operations
 */

/**
 * Constructor
 */
var MultiBufferStream = function(buffer) {
	/* List of ArrayBuffers, with a fileStart property, sorted in fileStart order and non overlapping */
	this.buffers = [];	
	this.bufferIndex = -1;
	if (buffer) {
		this.insertBuffer(buffer);
		this.bufferIndex = 0;
	}
};
MultiBufferStream.prototype = new DataStream(new ArrayBuffer(), 0, DataStream.BIG_ENDIAN);

/************************************************************************************
  Methods for the managnement of the buffers (insertion, removal, concatenation, ...)
 ***********************************************************************************/

MultiBufferStream.prototype.initialized = function() {
	var firstBuffer;
	if (this.bufferIndex > -1) {
		return true;
	} else if (this.buffers.length > 0) {
		firstBuffer = this.buffers[0];
		if (firstBuffer.fileStart === 0) {
			this.buffer = firstBuffer;
			this.bufferIndex = 0;
			Log.debug("MultiBufferStream", "Stream ready for parsing");
			return true;
		} else {
			Log.warn("MultiBufferStream", "The first buffer should have a fileStart of 0");
			this.logBufferLevel();
			return false;
		}
	} else {
		Log.warn("MultiBufferStream", "No buffer to start parsing from");
		this.logBufferLevel();
		return false;
	}			
};

/**
 * helper functions to concatenate two ArrayBuffer objects
 * @param  {ArrayBuffer} buffer1 
 * @param  {ArrayBuffer} buffer2 
 * @return {ArrayBuffer} the concatenation of buffer1 and buffer2 in that order
 */
ArrayBuffer.concat = function(buffer1, buffer2) {
  Log.debug("ArrayBuffer", "Trying to create a new buffer of size: "+(buffer1.byteLength + buffer2.byteLength));
  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
};

/**
 * Reduces the size of a given buffer, but taking the part between offset and offset+newlength
 * @param  {ArrayBuffer} buffer    
 * @param  {Number}      offset    the start of new buffer
 * @param  {Number}      newLength the length of the new buffer
 * @return {ArrayBuffer}           the new buffer
 */
MultiBufferStream.prototype.reduceBuffer = function(buffer, offset, newLength) {
	var smallB;
	smallB = new Uint8Array(newLength);
	smallB.set(new Uint8Array(buffer, offset, newLength));
	smallB.buffer.fileStart = buffer.fileStart+offset;
	smallB.buffer.usedBytes = 0;
	return smallB.buffer;	
};

/**
 * Inserts the new buffer in the sorted list of buffers,
 *  making sure, it is not overlapping with existing ones (possibly reducing its size).
 *  if the new buffer overrides/replaces the 0-th buffer (for instance because it is bigger), 
 *  updates the DataStream buffer for parsing 
*/
MultiBufferStream.prototype.insertBuffer = function(ab) {	
	var to_add = true;
	/* TODO: improve insertion if many buffers */
	for (var i = 0; i < this.buffers.length; i++) {
		var b = this.buffers[i];
		if (ab.fileStart <= b.fileStart) {
			/* the insertion position is found */
			if (ab.fileStart === b.fileStart) {
				/* The new buffer overlaps with an existing buffer */
				if (ab.byteLength >  b.byteLength) {
					/* the new buffer is bigger than the existing one
					   remove the existing buffer and try again to insert 
					   the new buffer to check overlap with the next ones */
					this.buffers.splice(i, 1);
					i--; 
					continue;
				} else {
					/* the new buffer is smaller than the existing one, just drop it */
					Log.warn("MultiBufferStream", "Buffer (fileStart: "+ab.fileStart+" - Length: "+ab.byteLength+") already appended, ignoring");
				}
			} else {
				/* The beginning of the new buffer is not overlapping with an existing buffer
				   let's check the end of it */
				if (ab.fileStart + ab.byteLength <= b.fileStart) ; else {
					/* There is some overlap, cut the new buffer short, and add it*/
					ab = this.reduceBuffer(ab, 0, b.fileStart - ab.fileStart);
				}
				Log.debug("MultiBufferStream", "Appending new buffer (fileStart: "+ab.fileStart+" - Length: "+ab.byteLength+")");
				this.buffers.splice(i, 0, ab);
				/* if this new buffer is inserted in the first place in the list of the buffer, 
				   and the DataStream is initialized, make it the buffer used for parsing */
				if (i === 0) {
					this.buffer = ab;
				}
			}
			to_add = false;
			break;
		} else if (ab.fileStart < b.fileStart + b.byteLength) {
			/* the new buffer overlaps its beginning with the end of the current buffer */
			var offset = b.fileStart + b.byteLength - ab.fileStart;
			var newLength = ab.byteLength - offset;
			if (newLength > 0) {
				/* the new buffer is bigger than the current overlap, drop the overlapping part and try again inserting the remaining buffer */
				ab = this.reduceBuffer(ab, offset, newLength);
			} else {
				/* the content of the new buffer is entirely contained in the existing buffer, drop it entirely */
				to_add = false;
				break;
			}
		}
	}
	/* if the buffer has not been added, we can add it at the end */
	if (to_add) {
		Log.debug("MultiBufferStream", "Appending new buffer (fileStart: "+ab.fileStart+" - Length: "+ab.byteLength+")");
		this.buffers.push(ab);
		/* if this new buffer is inserted in the first place in the list of the buffer, 
		   and the DataStream is initialized, make it the buffer used for parsing */
		if (i === 0) {
			this.buffer = ab;
		}
	}
};

/**
 * Displays the status of the buffers (number and used bytes)
 * @param  {Object} info callback method for display
 */
MultiBufferStream.prototype.logBufferLevel = function(info) {
	var i;
	var buffer;
	var used, total;
	var ranges = [];
	var range;
	var bufferedString = "";
	used = 0;
	total = 0;
	for (i = 0; i < this.buffers.length; i++) {
		buffer = this.buffers[i];
		if (i === 0) {
			range = {};
			ranges.push(range);
			range.start = buffer.fileStart;
			range.end = buffer.fileStart+buffer.byteLength;
			bufferedString += "["+range.start+"-";
		} else if (range.end === buffer.fileStart) {
			range.end = buffer.fileStart+buffer.byteLength;
		} else {
			range = {};
			range.start = buffer.fileStart;
			bufferedString += (ranges[ranges.length-1].end-1)+"], ["+range.start+"-";
			range.end = buffer.fileStart+buffer.byteLength;
			ranges.push(range);
		}
		used += buffer.usedBytes;
		total += buffer.byteLength;
	}
	if (ranges.length > 0) {
		bufferedString += (range.end-1)+"]";
	}
	var log = (info ? Log.info : Log.debug);
	if (this.buffers.length === 0) {
		log("MultiBufferStream", "No more buffer in memory");
	} else {
		log("MultiBufferStream", ""+this.buffers.length+" stored buffer(s) ("+used+"/"+total+" bytes), continuous ranges: "+bufferedString);
	}
};

MultiBufferStream.prototype.cleanBuffers = function () {
	var i;
	var buffer;
	for (i = 0; i < this.buffers.length; i++) {
		buffer = this.buffers[i];
		if (buffer.usedBytes === buffer.byteLength) {
			Log.debug("MultiBufferStream", "Removing buffer #"+i);
			this.buffers.splice(i, 1);
			i--;
		}
	}
};

MultiBufferStream.prototype.mergeNextBuffer = function() {
	var next_buffer;
	if (this.bufferIndex+1 < this.buffers.length) {
		next_buffer = this.buffers[this.bufferIndex+1];
		if (next_buffer.fileStart === this.buffer.fileStart + this.buffer.byteLength) {
			var oldLength = this.buffer.byteLength;
			var oldUsedBytes = this.buffer.usedBytes;
			var oldFileStart = this.buffer.fileStart;
			this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, next_buffer);
			this.buffer = this.buffers[this.bufferIndex];
			this.buffers.splice(this.bufferIndex+1, 1);
			this.buffer.usedBytes = oldUsedBytes; /* TODO: should it be += ? */
			this.buffer.fileStart = oldFileStart;
			Log.debug("ISOFile", "Concatenating buffer for box parsing (length: "+oldLength+"->"+this.buffer.byteLength+")");
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};


/*************************************************************************
  Seek-related functions
 *************************************************************************/

/**
 * Finds the buffer that holds the given file position
 * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false) 
 *                                or from the first buffer (true)
 * @param  {Number}  filePosition position in the file to seek to
 * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position 
 *                                should be marked as used for garbage collection
 * @return {Number}               the index of the buffer holding the seeked file position, -1 if not found.
 */
MultiBufferStream.prototype.findPosition = function(fromStart, filePosition, markAsUsed) {
	var i;
	var abuffer = null;
	var index = -1;

	/* find the buffer with the largest position smaller than the given position */
	if (fromStart === true) {
	   /* the reposition can be in the past, we need to check from the beginning of the list of buffers */
		i = 0;
	} else {
		i = this.bufferIndex;
	}

	while (i < this.buffers.length) {
		abuffer = this.buffers[i];
		if (abuffer.fileStart <= filePosition) {
			index = i;
			if (markAsUsed) {
				if (abuffer.fileStart + abuffer.byteLength <= filePosition) {
					abuffer.usedBytes = abuffer.byteLength;	
				} else {
					abuffer.usedBytes = filePosition - abuffer.fileStart;
				}		
				this.logBufferLevel();	
			}
		} else {
			break;
		}
		i++;
	}

	if (index !== -1) {
		abuffer = this.buffers[index];
		if (abuffer.fileStart + abuffer.byteLength >= filePosition) {			
			Log.debug("MultiBufferStream", "Found position in existing buffer #"+index);
			return index;
		} else {
			return -1;
		}
	} else {
		return -1;
	}
};

/**
 * Finds the largest file position contained in a buffer or in the next buffers if they are contiguous (no gap)
 * starting from the given buffer index or from the current buffer if the index is not given
 *
 * @param  {Number} inputindex Index of the buffer to start from
 * @return {Number}            The largest file position found in the buffers
 */
MultiBufferStream.prototype.findEndContiguousBuf = function(inputindex) {
	var i;
	var currentBuf;
	var nextBuf;
	var index = (inputindex !== undefined ? inputindex : this.bufferIndex);
	currentBuf = this.buffers[index];
	/* find the end of the contiguous range of data */
	if (this.buffers.length > index+1) {
		for (i = index+1; i < this.buffers.length; i++) {
			nextBuf = this.buffers[i];
			if (nextBuf.fileStart === currentBuf.fileStart + currentBuf.byteLength) {
				currentBuf = nextBuf;
			} else {
				break;
			}
		}
	}
	/* return the position of last byte in the file that we have */
	return currentBuf.fileStart + currentBuf.byteLength;
};

/**
 * Returns the largest file position contained in the buffers, larger than the given position
 * @param  {Number} pos the file position to start from
 * @return {Number}     the largest position in the current buffer or in the buffer and the next contiguous 
 *                      buffer that holds the given position
 */
MultiBufferStream.prototype.getEndFilePositionAfter = function(pos) {
	var index = this.findPosition(true, pos, false);
	if (index !== -1) {
		return this.findEndContiguousBuf(index);
	} else {
		return pos;
	}
};

/*************************************************************************
  Garbage collection related functions
 *************************************************************************/

/**
 * Marks a given number of bytes as used in the current buffer for garbage collection
 * @param {Number} nbBytes 
 */
MultiBufferStream.prototype.addUsedBytes = function(nbBytes) {
	this.buffer.usedBytes += nbBytes;
	this.logBufferLevel();
};

/**
 * Marks the entire current buffer as used, ready for garbage collection
 */
MultiBufferStream.prototype.setAllUsedBytes = function() {
	this.buffer.usedBytes = this.buffer.byteLength;
	this.logBufferLevel();
};

/*************************************************************************
  Common API between MultiBufferStream and SimpleStream
 *************************************************************************/

/**
 * Tries to seek to a given file position
 * if possible, repositions the parsing from there and returns true 
 * if not possible, does not change anything and returns false 
 * @param  {Number}  filePosition position in the file to seek to
 * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false) 
 *                                or from the first buffer (true)
 * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position 
 *                                should be marked as used for garbage collection
 * @return {Boolean}              true if the seek succeeded, false otherwise
 */
MultiBufferStream.prototype.seek = function(filePosition, fromStart, markAsUsed) {
	var index;
	index = this.findPosition(fromStart, filePosition, markAsUsed);
	if (index !== -1) {
		this.buffer = this.buffers[index];
		this.bufferIndex = index;
		this.position = filePosition - this.buffer.fileStart;
		Log.debug("MultiBufferStream", "Repositioning parser at buffer position: "+this.position);
		return true;
	} else {
		Log.debug("MultiBufferStream", "Position "+filePosition+" not found in buffered data");
		return false;
	}
};

/**
 * Returns the current position in the file
 * @return {Number} the position in the file
 */
MultiBufferStream.prototype.getPosition = function() {
	if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === null) {
		throw "Error accessing position in the MultiBufferStream";
	}
	return this.buffers[this.bufferIndex].fileStart+this.position;
};

/**
 * Returns the length of the current buffer
 * @return {Number} the length of the current buffer
 */
MultiBufferStream.prototype.getLength = function() {
	return this.byteLength;
};

MultiBufferStream.prototype.getEndPosition = function() {
	if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === null) {
		throw "Error accessing position in the MultiBufferStream";
	}
	return this.buffers[this.bufferIndex].fileStart+this.byteLength;
};

{
	exports.MultiBufferStream = MultiBufferStream;
}// file:src/descriptor.js
/*
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var MPEG4DescriptorParser = function () {
	var ES_DescrTag 			= 0x03;
	var DecoderConfigDescrTag 	= 0x04;
	var DecSpecificInfoTag 		= 0x05;
	var SLConfigDescrTag 		= 0x06;

	var descTagToName = [];
	descTagToName[ES_DescrTag] 				= "ES_Descriptor";
	descTagToName[DecoderConfigDescrTag] 	= "DecoderConfigDescriptor";
	descTagToName[DecSpecificInfoTag] 		= "DecoderSpecificInfo";
	descTagToName[SLConfigDescrTag] 		= "SLConfigDescriptor";

	this.getDescriptorName = function(tag) {
		return descTagToName[tag];
	};

	var that = this;
	var classes = {};

	this.parseOneDescriptor = function (stream) {
		var size = 0;
		var tag;
		var desc;
		var byteRead;
		tag = stream.readUint8();
		byteRead = stream.readUint8();
		while (byteRead & 0x80) {
			size = (byteRead & 0x7F)<<7;
			byteRead = stream.readUint8();
		}
		size += byteRead & 0x7F;
		Log.debug("MPEG4DescriptorParser", "Found "+(descTagToName[tag] || "Descriptor "+tag)+", size "+size+" at position "+stream.getPosition());
		if (descTagToName[tag]) {
			desc = new classes[descTagToName[tag]](size);
		} else {
			desc = new classes.Descriptor(size);
		}
		desc.parse(stream);
		return desc;
	};

	classes.Descriptor = function(_tag, _size) {
		this.tag = _tag;
		this.size = _size;
		this.descs = [];
	};

	classes.Descriptor.prototype.parse = function (stream) {
		this.data = stream.readUint8Array(this.size);
	};

	classes.Descriptor.prototype.findDescriptor = function (tag) {
		for (var i = 0; i < this.descs.length; i++) {
			if (this.descs[i].tag == tag) {
				return this.descs[i];
			}
		}
		return null;
	};

	classes.Descriptor.prototype.parseRemainingDescriptors = function (stream) {
		var start = stream.position;
		while (stream.position < start+this.size) {
			var desc = that.parseOneDescriptor(stream);
			this.descs.push(desc);
		}
	};

	classes.ES_Descriptor = function (size) {
		classes.Descriptor.call(this, ES_DescrTag, size);
	};

	classes.ES_Descriptor.prototype = new classes.Descriptor();

	classes.ES_Descriptor.prototype.parse = function(stream) {
		this.ES_ID = stream.readUint16();
		this.flags = stream.readUint8();
		this.size -= 3;
		if (this.flags & 0x80) {
			this.dependsOn_ES_ID = stream.readUint16();
			this.size -= 2;
		} else {
			this.dependsOn_ES_ID = 0;
		}
		if (this.flags & 0x40) {
			var l = stream.readUint8();
			this.URL = stream.readString(l);
			this.size -= l+1;
		} else {
			this.URL = "";
		}
		if (this.flags & 0x20) {
			this.OCR_ES_ID = stream.readUint16();
			this.size -= 2;
		} else {
			this.OCR_ES_ID = 0;
		}
		this.parseRemainingDescriptors(stream);
	};

	classes.ES_Descriptor.prototype.getOTI = function(stream) {
		var dcd = this.findDescriptor(DecoderConfigDescrTag);
		if (dcd) {
			return dcd.oti;
		} else {
			return 0;
		}
	};

	classes.ES_Descriptor.prototype.getAudioConfig = function(stream) {
		var dcd = this.findDescriptor(DecoderConfigDescrTag);
		if (!dcd) return null;
		var dsi = dcd.findDescriptor(DecSpecificInfoTag);
		if (dsi && dsi.data) {
			var audioObjectType = (dsi.data[0]& 0xF8) >> 3;
			if (audioObjectType === 31 && dsi.data.length >= 2) {
				audioObjectType = 32 + ((dsi.data[0] & 0x7) << 3) + ((dsi.data[1] & 0xE0) >> 5);
			}
			return audioObjectType;
		} else {
			return null;
		}
	};

	classes.DecoderConfigDescriptor = function (size) {
		classes.Descriptor.call(this, DecoderConfigDescrTag, size);
	};
	classes.DecoderConfigDescriptor.prototype = new classes.Descriptor();

	classes.DecoderConfigDescriptor.prototype.parse = function(stream) {
		this.oti = stream.readUint8();
		this.streamType = stream.readUint8();
		this.bufferSize = stream.readUint24();
		this.maxBitrate = stream.readUint32();
		this.avgBitrate = stream.readUint32();
		this.size -= 13;
		this.parseRemainingDescriptors(stream);
	};

	classes.DecoderSpecificInfo = function (size) {
		classes.Descriptor.call(this, DecSpecificInfoTag, size);
	};
	classes.DecoderSpecificInfo.prototype = new classes.Descriptor();

	classes.SLConfigDescriptor = function (size) {
		classes.Descriptor.call(this, SLConfigDescrTag, size);
	};
	classes.SLConfigDescriptor.prototype = new classes.Descriptor();

	return this;
};

{
	exports.MPEG4DescriptorParser = MPEG4DescriptorParser;
}// file:src/box.js
/*
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var BoxParser = {
	ERR_INVALID_DATA : -1,
	ERR_NOT_ENOUGH_DATA : 0,
	OK : 1,

	// Boxes to be created with default parsing
	BASIC_BOXES: [ "mdat", "idat", "free", "skip", "meco", "strk" ],
	FULL_BOXES: [ "hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere" ],
	CONTAINER_BOXES: [
		[ "moov", [ "trak", "pssh" ] ],
		[ "trak" ],
		[ "edts" ],
		[ "mdia" ],
		[ "minf" ],
		[ "dinf" ],
		[ "stbl", [ "sgpd", "sbgp" ] ],
		[ "mvex", [ "trex" ] ],
		[ "moof", [ "traf" ] ],
		[ "traf", [ "trun", "sgpd", "sbgp" ] ],
		[ "vttc" ],
		[ "tref" ],
		[ "iref" ],
		[ "mfra", [ "tfra" ] ],
		[ "meco" ],
		[ "hnti" ],
		[ "hinf" ],
		[ "strk" ],
		[ "strd" ],
		[ "sinf" ],
		[ "rinf" ],
		[ "schi" ],
		[ "trgr" ],
		[ "udta", ["kind"] ],
		[ "iprp", ["ipma"] ],
		[ "ipco"]
	],
	// Boxes effectively created
	boxCodes : [],
	fullBoxCodes : [],
	containerBoxCodes : [],
	sampleEntryCodes : {},
	sampleGroupEntryCodes: [],
	trackGroupTypes: [],
	UUIDBoxes: {},
	UUIDs: [],
	initialize: function() {
		BoxParser.FullBox.prototype = new BoxParser.Box();
		BoxParser.ContainerBox.prototype = new BoxParser.Box();
		BoxParser.SampleEntry.prototype = new BoxParser.Box();
		BoxParser.TrackGroupTypeBox.prototype = new BoxParser.FullBox();

		/* creating constructors for simple boxes */
		BoxParser.BASIC_BOXES.forEach(function(type) {
			BoxParser.createBoxCtor(type);
		});
		BoxParser.FULL_BOXES.forEach(function(type) {
			BoxParser.createFullBoxCtor(type);
		});
		BoxParser.CONTAINER_BOXES.forEach(function(types) {
			BoxParser.createContainerBoxCtor(types[0], null, types[1]);
		});
	},
	Box: function(_type, _size, _uuid) {
		this.type = _type;
		this.size = _size;
		this.uuid = _uuid;
	},
	FullBox: function(type, size, uuid) {
		BoxParser.Box.call(this, type, size, uuid);
		this.flags = 0;
		this.version = 0;
	},
	ContainerBox: function(type, size, uuid) {
		BoxParser.Box.call(this, type, size, uuid);
		this.boxes = [];
	},
	SampleEntry: function(type, size, hdr_size, start) {
		BoxParser.ContainerBox.call(this, type, size);
		this.hdr_size = hdr_size;
		this.start = start;
	},
	SampleGroupEntry: function(type) {
		this.grouping_type = type;
	},
	TrackGroupTypeBox: function(type, size) {
		BoxParser.FullBox.call(this, type, size);
	},
	createBoxCtor: function(type, parseMethod){
		BoxParser.boxCodes.push(type);
		BoxParser[type+"Box"] = function(size) {
			BoxParser.Box.call(this, type, size);
		};
		BoxParser[type+"Box"].prototype = new BoxParser.Box();
		if (parseMethod) BoxParser[type+"Box"].prototype.parse = parseMethod;
	},
	createFullBoxCtor: function(type, parseMethod) {
		//BoxParser.fullBoxCodes.push(type);
		BoxParser[type+"Box"] = function(size) {
			BoxParser.FullBox.call(this, type, size);
		};
		BoxParser[type+"Box"].prototype = new BoxParser.FullBox();
		BoxParser[type+"Box"].prototype.parse = function(stream) {
			this.parseFullHeader(stream);
			if (parseMethod) {
				parseMethod.call(this, stream);
			}
		};
	},
	addSubBoxArrays: function(subBoxNames) {
		if (subBoxNames) {
			this.subBoxNames = subBoxNames;
			var nbSubBoxes = subBoxNames.length;
			for (var k = 0; k<nbSubBoxes; k++) {
				this[subBoxNames[k]+"s"] = [];
			}
		}
	},
	createContainerBoxCtor: function(type, parseMethod, subBoxNames) {
		//BoxParser.containerBoxCodes.push(type);
		BoxParser[type+"Box"] = function(size) {
			BoxParser.ContainerBox.call(this, type, size);
			BoxParser.addSubBoxArrays.call(this, subBoxNames);
		};
		BoxParser[type+"Box"].prototype = new BoxParser.ContainerBox();
		if (parseMethod) BoxParser[type+"Box"].prototype.parse = parseMethod;
	},
	createMediaSampleEntryCtor: function(mediaType, parseMethod, subBoxNames) {
		BoxParser.sampleEntryCodes[mediaType] = [];
		BoxParser[mediaType+"SampleEntry"] = function(type, size) {
			BoxParser.SampleEntry.call(this, type, size);
			BoxParser.addSubBoxArrays.call(this, subBoxNames);
		};
		BoxParser[mediaType+"SampleEntry"].prototype = new BoxParser.SampleEntry();
		if (parseMethod) BoxParser[mediaType+"SampleEntry"].prototype .parse = parseMethod;
	},
	createSampleEntryCtor: function(mediaType, type, parseMethod, subBoxNames) {
		BoxParser.sampleEntryCodes[mediaType].push(type);
		BoxParser[type+"SampleEntry"] = function(size) {
			BoxParser[mediaType+"SampleEntry"].call(this, type, size);
			BoxParser.addSubBoxArrays.call(this, subBoxNames);
		};
		BoxParser[type+"SampleEntry"].prototype = new BoxParser[mediaType+"SampleEntry"]();
		if (parseMethod) BoxParser[type+"SampleEntry"].prototype.parse = parseMethod;
	},
	createEncryptedSampleEntryCtor: function(mediaType, type, parseMethod) {
		BoxParser.createSampleEntryCtor.call(this, mediaType, type, parseMethod, ["sinf"]);
	},
	createSampleGroupCtor: function(type, parseMethod) {
		//BoxParser.sampleGroupEntryCodes.push(type);
		BoxParser[type+"SampleGroupEntry"] = function(size) {
			BoxParser.SampleGroupEntry.call(this, type, size);
		};
		BoxParser[type+"SampleGroupEntry"].prototype = new BoxParser.SampleGroupEntry();
		if (parseMethod) BoxParser[type+"SampleGroupEntry"].prototype.parse = parseMethod;
	},
	createTrackGroupCtor: function(type, parseMethod) {
		//BoxParser.trackGroupTypes.push(type);
		BoxParser[type+"TrackGroupTypeBox"] = function(size) {
			BoxParser.TrackGroupTypeBox.call(this, type, size);
		};
		BoxParser[type+"TrackGroupTypeBox"].prototype = new BoxParser.TrackGroupTypeBox();
		if (parseMethod) BoxParser[type+"TrackGroupTypeBox"].prototype.parse = parseMethod;
	},
	createUUIDBox: function(uuid, isFullBox, isContainerBox, parseMethod) {
		BoxParser.UUIDs.push(uuid);
		BoxParser.UUIDBoxes[uuid] = function(size) {
			if (isFullBox) {
				BoxParser.FullBox.call(this, "uuid", size, uuid);
			} else {
				if (isContainerBox) {
					BoxParser.ContainerBox.call(this, "uuid", size, uuid);
				} else {
					BoxParser.Box.call(this, "uuid", size, uuid);
				}
			}
		};
		BoxParser.UUIDBoxes[uuid].prototype = (isFullBox ? new BoxParser.FullBox() : (isContainerBox ? new BoxParser.ContainerBox() : new BoxParser.Box()));
		if (parseMethod) {
			if (isFullBox) {
				BoxParser.UUIDBoxes[uuid].prototype.parse = function(stream) {
					this.parseFullHeader(stream);
					if (parseMethod) {
						parseMethod.call(this, stream);
					}
				};
			} else {
				BoxParser.UUIDBoxes[uuid].prototype.parse = parseMethod;
			}
		}
	}
};

BoxParser.initialize();

BoxParser.TKHD_FLAG_ENABLED    = 0x000001;
BoxParser.TKHD_FLAG_IN_MOVIE   = 0x000002;
BoxParser.TKHD_FLAG_IN_PREVIEW = 0x000004;

BoxParser.TFHD_FLAG_BASE_DATA_OFFSET	= 0x01;
BoxParser.TFHD_FLAG_SAMPLE_DESC			= 0x02;
BoxParser.TFHD_FLAG_SAMPLE_DUR			= 0x08;
BoxParser.TFHD_FLAG_SAMPLE_SIZE			= 0x10;
BoxParser.TFHD_FLAG_SAMPLE_FLAGS		= 0x20;
BoxParser.TFHD_FLAG_DUR_EMPTY			= 0x10000;
BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF= 0x20000;

BoxParser.TRUN_FLAGS_DATA_OFFSET= 0x01;
BoxParser.TRUN_FLAGS_FIRST_FLAG	= 0x04;
BoxParser.TRUN_FLAGS_DURATION	= 0x100;
BoxParser.TRUN_FLAGS_SIZE		= 0x200;
BoxParser.TRUN_FLAGS_FLAGS		= 0x400;
BoxParser.TRUN_FLAGS_CTS_OFFSET	= 0x800;

BoxParser.Box.prototype.add = function(name) {
	return this.addBox(new BoxParser[name+"Box"]());
};

BoxParser.Box.prototype.addBox = function(box) {
	this.boxes.push(box);
	if (this[box.type+"s"]) {
		this[box.type+"s"].push(box);
	} else {
		this[box.type] = box;
	}
	return box;
};

BoxParser.Box.prototype.set = function(prop, value) {
	this[prop] = value;
	return this;
};

BoxParser.Box.prototype.addEntry = function(value, _prop) {
	var prop = _prop || "entries";
	if (!this[prop]) {
		this[prop] = [];
	}
	this[prop].push(value);
	return this;
};

{
	exports.BoxParser = BoxParser;
}
// file:src/box-parse.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.parseUUID = function(stream) {
	return BoxParser.parseHex16(stream);
};

BoxParser.parseHex16 = function(stream) {
	var hex16 = "";
	for (var i = 0; i <16; i++) {
		var hex = stream.readUint8().toString(16);
		hex16 += (hex.length === 1 ? "0"+hex : hex);
	}
	return hex16;
};

BoxParser.parseOneBox = function(stream, headerOnly, parentSize) {
	var box;
	var start = stream.getPosition();
	var hdr_size = 0;
	var diff;
	var uuid;
	if (stream.getEndPosition() - start < 8) {
		Log.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
	}
	if (parentSize && parentSize < 8) {
		Log.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
	}
	var size = stream.readUint32();
	var type = stream.readString(4);
	var box_type = type;
	Log.debug("BoxParser", "Found box of type '"+type+"' and size "+size+" at position "+start);
	hdr_size = 8;
	if (type == "uuid") {
		if ((stream.getEndPosition() - stream.getPosition() < 16) || (parentSize -hdr_size < 16)) {
			stream.seek(start);
			Log.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
			return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
		}
		uuid = BoxParser.parseUUID(stream);
		hdr_size += 16;
		box_type = uuid;
	}
	if (size == 1) {
		if ((stream.getEndPosition() - stream.getPosition() < 8) || (parentSize && (parentSize - hdr_size) < 8)) {
			stream.seek(start);
			Log.warn("BoxParser", "Not enough data in stream to parse the extended size of the \""+type+"\" box");
			return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
		}
		size = stream.readUint64();
		hdr_size += 8;
	} else if (size === 0) {
		/* box extends till the end of file or invalid file */
		if (parentSize) {
			size = parentSize;
		} else {
			/* box extends till the end of file */
			if (type !== "mdat") {
				Log.error("BoxParser", "Unlimited box size not supported for type: '"+type+"'");
				box = new BoxParser.Box(type, size);
				return { code: BoxParser.OK, box: box, size: box.size };
			}
		}
	}
	if (size < hdr_size) {
		Log.error("BoxParser", "Box of type "+type+" has an invalid size "+size+" (too small to be a box)");
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
	}
	if (parentSize && size > parentSize) {
		Log.error("BoxParser", "Box of type '"+type+"' has a size "+size+" greater than its container size "+parentSize);
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
	}
	if (start + size > stream.getEndPosition()) {
		stream.seek(start);
		Log.info("BoxParser", "Not enough data in stream to parse the entire '"+type+"' box");
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
	}
	if (headerOnly) {
		return { code: BoxParser.OK, type: type, size: size, hdr_size: hdr_size, start: start };
	} else {
		if (BoxParser[type+"Box"]) {
			box = new BoxParser[type+"Box"](size);
		} else {
			if (type !== "uuid") {
				Log.warn("BoxParser", "Unknown box type: '"+type+"'");
				box = new BoxParser.Box(type, size);
				box.has_unparsed_data = true;
			} else {
				if (BoxParser.UUIDBoxes[uuid]) {
					box = new BoxParser.UUIDBoxes[uuid](size);
				} else {
					Log.warn("BoxParser", "Unknown uuid type: '"+uuid+"'");
					box = new BoxParser.Box(type, size);
					box.uuid = uuid;
					box.has_unparsed_data = true;
				}
			}
		}
	}
	box.hdr_size = hdr_size;
	/* recording the position of the box in the input stream */
	box.start = start;
	if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
		Log.info("BoxParser", "'"+box_type+"' box writing not yet implemented, keeping unparsed data in memory for later write");
		box.parseDataAndRewind(stream);
	}
	box.parse(stream);
	diff = stream.getPosition() - (box.start+box.size);
	if (diff < 0) {
		Log.warn("BoxParser", "Parsing of box '"+box_type+"' did not read the entire indicated box data size (missing "+(-diff)+" bytes), seeking forward");
		stream.seek(box.start+box.size);
	} else if (diff > 0) {
		Log.error("BoxParser", "Parsing of box '"+box_type+"' read "+diff+" more bytes than the indicated box data size, seeking backwards");
		stream.seek(box.start+box.size);
	}
	return { code: BoxParser.OK, box: box, size: box.size };
};

BoxParser.Box.prototype.parse = function(stream) {
	if (this.type != "mdat") {
		this.data = stream.readUint8Array(this.size-this.hdr_size);
	} else {
		if (this.size === 0) {
			stream.seek(stream.getEndPosition());
		} else {
			stream.seek(this.start+this.size);
		}
	}
};

/* Used to parse a box without consuming its data, to allow detailled parsing
   Useful for boxes for which a write method is not yet implemented */
BoxParser.Box.prototype.parseDataAndRewind = function(stream) {
	this.data = stream.readUint8Array(this.size-this.hdr_size);
	// rewinding
	stream.position -= this.size-this.hdr_size;
};

BoxParser.FullBox.prototype.parseDataAndRewind = function(stream) {
	this.parseFullHeader(stream);
	this.data = stream.readUint8Array(this.size-this.hdr_size);
	// restore the header size as if the full header had not been parsed
	this.hdr_size -= 4;
	// rewinding
	stream.position -= this.size-this.hdr_size;
};

BoxParser.FullBox.prototype.parseFullHeader = function (stream) {
	this.version = stream.readUint8();
	this.flags = stream.readUint24();
	this.hdr_size += 4;
};

BoxParser.FullBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.data = stream.readUint8Array(this.size-this.hdr_size);
};

BoxParser.ContainerBox.prototype.parse = function(stream) {
	var ret;
	var box;
	while (stream.getPosition() < this.start+this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			/* store the box in the 'boxes' array to preserve box order (for offset) but also store box in a property for more direct access */
			this.boxes.push(box);
			if (this.subBoxNames && this.subBoxNames.indexOf(box.type) != -1) {
				this[this.subBoxNames[this.subBoxNames.indexOf(box.type)]+"s"].push(box);
			} else {
				var box_type = box.type !== "uuid" ? box.type : box.uuid;
				if (this[box_type]) {
					Log.warn("Box of type "+box_type+" already stored in field of this type");
				} else {
					this[box_type] = box;
				}
			}
		} else {
			return;
		}
	}
};

BoxParser.Box.prototype.parseLanguage = function(stream) {
	this.language = stream.readUint16();
	var chars = [];
	chars[0] = (this.language>>10)&0x1F;
	chars[1] = (this.language>>5)&0x1F;
	chars[2] = (this.language)&0x1F;
	this.languageString = String.fromCharCode(chars[0]+0x60, chars[1]+0x60, chars[2]+0x60);
};

// file:src/parsing/sampleentries/sampleentry.js
BoxParser.SAMPLE_ENTRY_TYPE_VISUAL 		= "Visual";
BoxParser.SAMPLE_ENTRY_TYPE_AUDIO 		= "Audio";
BoxParser.SAMPLE_ENTRY_TYPE_HINT 		= "Hint";
BoxParser.SAMPLE_ENTRY_TYPE_METADATA 	= "Metadata";
BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE 	= "Subtitle";
BoxParser.SAMPLE_ENTRY_TYPE_SYSTEM 		= "System";
BoxParser.SAMPLE_ENTRY_TYPE_TEXT 		= "Text";

BoxParser.SampleEntry.prototype.parseHeader = function(stream) {
	stream.readUint8Array(6);
	this.data_reference_index = stream.readUint16();
	this.hdr_size += 8;
};

BoxParser.SampleEntry.prototype.parse = function(stream) {
	this.parseHeader(stream);
	this.data = stream.readUint8Array(this.size - this.hdr_size);
};

BoxParser.SampleEntry.prototype.parseDataAndRewind = function(stream) {
	this.parseHeader(stream);
	this.data = stream.readUint8Array(this.size - this.hdr_size);
	// restore the header size as if the sample entry header had not been parsed
	this.hdr_size -= 8;
	// rewinding
	stream.position -= this.size-this.hdr_size;
};

BoxParser.SampleEntry.prototype.parseFooter = function(stream) {
	BoxParser.ContainerBox.prototype.parse.call(this, stream);
};

// Base SampleEntry types with default parsing
BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_HINT);
BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA);
BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE);
BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SYSTEM);
BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_TEXT);

//Base SampleEntry types for Audio and Video with specific parsing
BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, function(stream) {
	var compressorname_length;
	this.parseHeader(stream);
	stream.readUint16();
	stream.readUint16();
	stream.readUint32Array(3);
	this.width = stream.readUint16();
	this.height = stream.readUint16();
	this.horizresolution = stream.readUint32();
	this.vertresolution = stream.readUint32();
	stream.readUint32();
	this.frame_count = stream.readUint16();
	compressorname_length = Math.min(31, stream.readUint8());
	this.compressorname = stream.readString(compressorname_length);
	if (compressorname_length < 31) {
		stream.readString(31 - compressorname_length);
	}
	this.depth = stream.readUint16();
	stream.readUint16();
	this.parseFooter(stream);
});

BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, function(stream) {
	this.parseHeader(stream);
	stream.readUint32Array(2);
	this.channel_count = stream.readUint16();
	this.samplesize = stream.readUint16();
	stream.readUint16();
	stream.readUint16();
	this.samplerate = (stream.readUint32()/(1<<16));
	this.parseFooter(stream);
});

// Sample entries inheriting from Audio and Video
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc1");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc2");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc3");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc4");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "av01");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "hev1");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"mp4a");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"ac-3");
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"ec-3");

// Encrypted sample entries
BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, 	"encv");
BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"enca");
BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, 	"encu");
BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SYSTEM, 	"encs");
BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_TEXT, 		"enct");
BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, 	"encm");


// file:src/parsing/a1lx.js
BoxParser.createBoxCtor("a1lx", function(stream) {
	var large_size = stream.readUint8() & 1;
	var FieldLength = ((large_size & 1) + 1) * 16;
	this.layer_size = [];
	for (var i = 0; i < 3; i++) {
		if (FieldLength == 16) {
			this.layer_size[i] = stream.readUint16();
		} else {
			this.layer_size[i] = stream.readUint32();
		}
	}
});// file:src/parsing/a1op.js
BoxParser.createBoxCtor("a1op", function(stream) {
	this.op_index = stream.readUint8();
});// file:src/parsing/auxC.js
BoxParser.createFullBoxCtor("auxC", function(stream) {
	this.aux_type = stream.readCString();
	var aux_subtype_length = this.size - this.hdr_size - (this.aux_type.length + 1);
	this.aux_subtype = stream.readUint8Array(aux_subtype_length);
});// file:src/parsing/av1C.js
BoxParser.createBoxCtor("av1C", function(stream) {
	var tmp = stream.readUint8();
	if ((tmp >> 7) & 0x1 !== 1) {
		Log.error("av1C marker problem");
		return;
	}
	this.version = tmp & 0x7F;
	if (this.version !== 1) {
		Log.error("av1C version "+this.version+" not supported");
		return;
	}
	tmp = stream.readUint8();
	this.seq_profile = (tmp >> 5) & 0x7;
	this.seq_level_idx_0 = tmp & 0x1F;
	tmp = stream.readUint8();
	this.seq_tier_0 = (tmp >> 7) & 0x1;
	this.high_bitdepth = (tmp >> 6) & 0x1;
	this.twelve_bit = (tmp >> 5) & 0x1;
	this.monochrome = (tmp >> 4) & 0x1;
	this.chroma_subsampling_x = (tmp >> 3) & 0x1;
	this.chroma_subsampling_y = (tmp >> 2) & 0x1;
	this.chroma_sample_position = (tmp & 0x3);
	tmp = stream.readUint8();
	this.reserved_1 = (tmp >> 5) & 0x7;
	if (this.reserved_1 !== 0) {
		Log.error("av1C reserved_1 parsing problem");
		return;
	}
	this.initial_presentation_delay_present = (tmp >> 4) & 0x1;
	if (this.initial_presentation_delay_present === 1) {
		this.initial_presentation_delay_minus_one = (tmp & 0xF);
	} else {
		this.reserved_2 = (tmp & 0xF);
		if (this.reserved_2 !== 0) {
			Log.error("av1C reserved_2 parsing problem");
			return;
		}
	}

	var configOBUs_length = this.size - this.hdr_size - 4;
	this.configOBUs = stream.readUint8Array(configOBUs_length);
});

// file:src/parsing/avcC.js
BoxParser.createBoxCtor("avcC", function(stream) {
	var i;
	var toparse;
	this.configurationVersion = stream.readUint8();
	this.AVCProfileIndication = stream.readUint8();
	this.profile_compatibility = stream.readUint8();
	this.AVCLevelIndication = stream.readUint8();
	this.lengthSizeMinusOne = (stream.readUint8() & 0x3);
	this.nb_SPS_nalus = (stream.readUint8() & 0x1F);
	toparse = this.size - this.hdr_size - 6;
	this.SPS = [];
	for (i = 0; i < this.nb_SPS_nalus; i++) {
		this.SPS[i] = {};
		this.SPS[i].length = stream.readUint16();
		this.SPS[i].nalu = stream.readUint8Array(this.SPS[i].length);
		toparse -= 2+this.SPS[i].length;
	}
	this.nb_PPS_nalus = stream.readUint8();
	toparse--;
	this.PPS = [];
	for (i = 0; i < this.nb_PPS_nalus; i++) {
		this.PPS[i] = {};
		this.PPS[i].length = stream.readUint16();
		this.PPS[i].nalu = stream.readUint8Array(this.PPS[i].length);
		toparse -= 2+this.PPS[i].length;
	}
	if (toparse>0) {
		this.ext = stream.readUint8Array(toparse);
	}
});

// file:src/parsing/btrt.js
BoxParser.createBoxCtor("btrt", function(stream) {
	this.bufferSizeDB = stream.readUint32();
	this.maxBitrate = stream.readUint32();
	this.avgBitrate = stream.readUint32();
});

// file:src/parsing/clap.js
BoxParser.createBoxCtor("clap", function(stream) {
	this.cleanApertureWidthN = stream.readUint32();
	this.cleanApertureWidthD = stream.readUint32();
	this.cleanApertureHeightN = stream.readUint32();
	this.cleanApertureHeightD = stream.readUint32();
	this.horizOffN = stream.readUint32();
	this.horizOffD = stream.readUint32();
	this.vertOffN = stream.readUint32();
	this.vertOffD = stream.readUint32();
});// file:src/parsing/clli.js
BoxParser.createBoxCtor("clli", function(stream) {
	this.max_content_light_level = stream.readUint16();
    this.max_pic_average_light_level = stream.readUint16();
});

// file:src/parsing/co64.js
BoxParser.createFullBoxCtor("co64", function(stream) {
	var entry_count;
	var i;
	entry_count = stream.readUint32();
	this.chunk_offsets = [];
	if (this.version === 0) {
		for(i=0; i<entry_count; i++) {
			this.chunk_offsets.push(stream.readUint64());
		}
	}
});

// file:src/parsing/CoLL.js
BoxParser.createFullBoxCtor("CoLL", function(stream) {
	this.maxCLL = stream.readUint16();
    this.maxFALL = stream.readUint16();
});

// file:src/parsing/colr.js
BoxParser.createBoxCtor("colr", function(stream) {
	this.colour_type = stream.readString(4);
	if (this.colour_type === 'nclx') {
		this.colour_primaries = stream.readUint16();
		this.transfer_characteristics = stream.readUint16();
		this.matrix_coefficients = stream.readUint16();
		var tmp = stream.readUint8();
		this.full_range_flag = tmp >> 7;
	} else if (this.colour_type === 'rICC') {
		this.ICC_profile = stream.readUint8Array(this.size - 4);
	} else if (this.colour_type === 'prof') {
		this.ICC_profile = stream.readUint8Array(this.size - 4);
	}
});// file:src/parsing/cprt.js
BoxParser.createFullBoxCtor("cprt", function (stream) {
	this.parseLanguage(stream);
	this.notice = stream.readCString();
});

// file:src/parsing/cslg.js
BoxParser.createFullBoxCtor("cslg", function(stream) {
	if (this.version === 0) {
		this.compositionToDTSShift = stream.readInt32(); /* signed */
		this.leastDecodeToDisplayDelta = stream.readInt32(); /* signed */
		this.greatestDecodeToDisplayDelta = stream.readInt32(); /* signed */
		this.compositionStartTime = stream.readInt32(); /* signed */
		this.compositionEndTime = stream.readInt32(); /* signed */
	}
});

// file:src/parsing/ctts.js
BoxParser.createFullBoxCtor("ctts", function(stream) {
	var entry_count;
	var i;
	entry_count = stream.readUint32();
	this.sample_counts = [];
	this.sample_offsets = [];
	if (this.version === 0) {
		for(i=0; i<entry_count; i++) {
			this.sample_counts.push(stream.readUint32());
			/* some files are buggy and declare version=0 while using signed offsets.
			   The likelyhood of using the most significant bit in a 32-bits time offset is very low,
			   so using signed value here as well */
			   var value = stream.readInt32();
			   if (value < 0) {
			   		Log.warn("BoxParser", "ctts box uses negative values without using version 1");
			   }
			this.sample_offsets.push(value);
		}
	} else if (this.version == 1) {
		for(i=0; i<entry_count; i++) {
			this.sample_counts.push(stream.readUint32());
			this.sample_offsets.push(stream.readInt32()); /* signed */
		}
	}
});

// file:src/parsing/dac3.js
BoxParser.createBoxCtor("dac3", function(stream) {
	var tmp_byte1 = stream.readUint8();
	var tmp_byte2 = stream.readUint8();
	var tmp_byte3 = stream.readUint8();
	this.fscod = tmp_byte1 >> 6;
	this.bsid  = ((tmp_byte1 >> 1) & 0x1F);
	this.bsmod = ((tmp_byte1 & 0x1) <<  2) | ((tmp_byte2 >> 6) & 0x3);
	this.acmod = ((tmp_byte2 >> 3) & 0x7);
	this.lfeon = ((tmp_byte2 >> 2) & 0x1);
	this.bit_rate_code = (tmp_byte2 & 0x3) | ((tmp_byte3 >> 5) & 0x7);
});

// file:src/parsing/dec3.js
BoxParser.createBoxCtor("dec3", function(stream) {
	var tmp_16 = stream.readUint16();
	this.data_rate = tmp_16 >> 3;
	this.num_ind_sub = tmp_16 & 0x7;
	this.ind_subs = [];
	for (var i = 0; i < this.num_ind_sub+1; i++) {
		var ind_sub = {};
		this.ind_subs.push(ind_sub);
		var tmp_byte1 = stream.readUint8();
		var tmp_byte2 = stream.readUint8();
		var tmp_byte3 = stream.readUint8();
		ind_sub.fscod = tmp_byte1 >> 6;
		ind_sub.bsid  = ((tmp_byte1 >> 1) & 0x1F);
		ind_sub.bsmod = ((tmp_byte1 & 0x1) << 4) | ((tmp_byte2 >> 4) & 0xF);
		ind_sub.acmod = ((tmp_byte2 >> 1) & 0x7);
		ind_sub.lfeon = (tmp_byte2 & 0x1);
		ind_sub.num_dep_sub = ((tmp_byte3 >> 1) & 0xF);
		if (ind_sub.num_dep_sub > 0) {
			ind_sub.chan_loc = ((tmp_byte3 & 0x1) << 8) | stream.readUint8();
		}
	}
});

// file:src/parsing/dfLa.js
BoxParser.createFullBoxCtor("dfLa", function(stream) {
    var BLOCKTYPE_MASK = 0x7F;
    var LASTMETADATABLOCKFLAG_MASK = 0x80;

    var boxesFound = [];
    var knownBlockTypes = [
        "STREAMINFO",
        "PADDING",
        "APPLICATION",
        "SEEKTABLE",
        "VORBIS_COMMENT",
        "CUESHEET",
        "PICTURE",
        "RESERVED"
    ];

    // dfLa is a FullBox
    this.parseFullHeader(stream);

    // for (i=0; ; i++) { // to end of box
    do {
        var flagAndType = stream.readUint8();

        var type = Math.min(
            (flagAndType & BLOCKTYPE_MASK),
            (knownBlockTypes.length - 1)
        );

        // if this is a STREAMINFO block, read the true samplerate since this
        // can be different to the AudioSampleEntry samplerate.
        if (!(type)) {
            // read past all the other stuff
            stream.readUint8Array(13);

            // extract samplerate
            this.samplerate = (stream.readUint32() >> 12);

            // read to end of STREAMINFO
            stream.readUint8Array(20);
        } else {
            // not interested in other block types so just discard length bytes
            stream.readUint8Array(stream.readUint24());
        }

        boxesFound.push(knownBlockTypes[type]);

        if (!!(flagAndType & LASTMETADATABLOCKFLAG_MASK)) {
            break;
        }
    } while (true);

    this.numMetadataBlocks =
        boxesFound.length + " (" + boxesFound.join(", ") + ")";
});
// file:src/parsing/dimm.js
BoxParser.createBoxCtor("dimm", function(stream) {
	this.bytessent = stream.readUint64();
});

// file:src/parsing/dmax.js
BoxParser.createBoxCtor("dmax", function(stream) {
	this.time = stream.readUint32();
});

// file:src/parsing/dmed.js
BoxParser.createBoxCtor("dmed", function(stream) {
	this.bytessent = stream.readUint64();
});

// file:src/parsing/dref.js
BoxParser.createFullBoxCtor("dref", function(stream) {
	var ret;
	var box;
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.entries.push(box);
		} else {
			return;
		}
	}
});

// file:src/parsing/drep.js
BoxParser.createBoxCtor("drep", function(stream) {
	this.bytessent = stream.readUint64();
});

// file:src/parsing/elng.js
BoxParser.createFullBoxCtor("elng", function(stream) {
	this.extended_language = stream.readString(this.size-this.hdr_size);
});

// file:src/parsing/elst.js
BoxParser.createFullBoxCtor("elst", function(stream) {
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		var entry = {};
		this.entries.push(entry);
		if (this.version === 1) {
			entry.segment_duration = stream.readUint64();
			entry.media_time = stream.readInt64();
		} else {
			entry.segment_duration = stream.readUint32();
			entry.media_time = stream.readInt32();
		}
		entry.media_rate_integer = stream.readInt16();
		entry.media_rate_fraction = stream.readInt16();
	}
});

// file:src/parsing/emsg.js
BoxParser.createFullBoxCtor("emsg", function(stream) {
	if (this.version == 1) {
		this.timescale 					= stream.readUint32();
		this.presentation_time 			= stream.readUint64();
		this.event_duration			 	= stream.readUint32();
		this.id 						= stream.readUint32();
		this.scheme_id_uri 				= stream.readCString();
		this.value 						= stream.readCString();
	} else {
		this.scheme_id_uri 				= stream.readCString();
		this.value 						= stream.readCString();
		this.timescale 					= stream.readUint32();
		this.presentation_time_delta 	= stream.readUint32();
		this.event_duration			 	= stream.readUint32();
		this.id 						= stream.readUint32();
	}
	var message_size = this.size - this.hdr_size - (4*4 + (this.scheme_id_uri.length+1) + (this.value.length+1));
	if (this.version == 1) {
		message_size -= 4;
	}
	this.message_data = stream.readUint8Array(message_size);
});

// file:src/parsing/esds.js
BoxParser.createFullBoxCtor("esds", function(stream) {
	var esd_data = stream.readUint8Array(this.size-this.hdr_size);
	if (typeof MPEG4DescriptorParser !== "undefined") {
		var esd_parser = new MPEG4DescriptorParser();
		this.esd = esd_parser.parseOneDescriptor(new DataStream(esd_data.buffer, 0, DataStream.BIG_ENDIAN));
	}
});

// file:src/parsing/fiel.js
BoxParser.createBoxCtor("fiel", function(stream) {
	this.fieldCount = stream.readUint8();
	this.fieldOrdering = stream.readUint8();
});

// file:src/parsing/frma.js
BoxParser.createBoxCtor("frma", function(stream) {
	this.data_format = stream.readString(4);
});

// file:src/parsing/ftyp.js
BoxParser.createBoxCtor("ftyp", function(stream) {
	var toparse = this.size - this.hdr_size;
	this.major_brand = stream.readString(4);
	this.minor_version = stream.readUint32();
	toparse -= 8;
	this.compatible_brands = [];
	var i = 0;
	while (toparse>=4) {
		this.compatible_brands[i] = stream.readString(4);
		toparse -= 4;
		i++;
	}
});

// file:src/parsing/hdlr.js
BoxParser.createFullBoxCtor("hdlr", function(stream) {
	if (this.version === 0) {
		stream.readUint32();
		this.handler = stream.readString(4);
		stream.readUint32Array(3);
		this.name = stream.readString(this.size-this.hdr_size-20);
		if (this.name[this.name.length-1]==='\0') {
			this.name = this.name.slice(0,-1);
		}
	}
});

// file:src/parsing/hvcC.js
BoxParser.createBoxCtor("hvcC", function(stream) {
	var i, j;
	var length;
	var tmp_byte;
	this.configurationVersion = stream.readUint8();
	tmp_byte = stream.readUint8();
	this.general_profile_space = tmp_byte >> 6;
	this.general_tier_flag = (tmp_byte & 0x20) >> 5;
	this.general_profile_idc = (tmp_byte & 0x1F);
	this.general_profile_compatibility = stream.readUint32();
	this.general_constraint_indicator = stream.readUint8Array(6);
	this.general_level_idc = stream.readUint8();
	this.min_spatial_segmentation_idc = stream.readUint16() & 0xFFF;
	this.parallelismType = (stream.readUint8() & 0x3);
	this.chroma_format_idc = (stream.readUint8() & 0x3);
	this.bit_depth_luma_minus8 = (stream.readUint8() & 0x7);
	this.bit_depth_chroma_minus8 = (stream.readUint8() & 0x7);
	this.avgFrameRate = stream.readUint16();
	tmp_byte = stream.readUint8();
	this.constantFrameRate = (tmp_byte >> 6);
	this.numTemporalLayers = (tmp_byte & 0XD) >> 3;
	this.temporalIdNested = (tmp_byte & 0X4) >> 2;
	this.lengthSizeMinusOne = (tmp_byte & 0X3);

	this.nalu_arrays = [];
	var numOfArrays = stream.readUint8();
	for (i = 0; i < numOfArrays; i++) {
		var nalu_array = [];
		this.nalu_arrays.push(nalu_array);
		tmp_byte = stream.readUint8();
		nalu_array.completeness = (tmp_byte & 0x80) >> 7;
		nalu_array.nalu_type = tmp_byte & 0x3F;
		var numNalus = stream.readUint16();
		for (j = 0; j < numNalus; j++) {
			var nalu = {};
			nalu_array.push(nalu);
			length = stream.readUint16();
			nalu.data   = stream.readUint8Array(length);
		}
	}
});

// file:src/parsing/iinf.js
BoxParser.createFullBoxCtor("iinf", function(stream) {
	var ret;
	if (this.version === 0) {
		this.entry_count = stream.readUint16();
	} else {
		this.entry_count = stream.readUint32();
	}
	this.item_infos = [];
	for (var i = 0; i < this.entry_count; i++) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			if (ret.box.type !== "infe") {
				Log.error("BoxParser", "Expected 'infe' box, got "+ret.box.type);
			}
			this.item_infos[i] = ret.box;
		} else {
			return;
		}
	}
});

// file:src/parsing/iloc.js
BoxParser.createFullBoxCtor("iloc", function(stream) {
	var byte;
	byte = stream.readUint8();
	this.offset_size = (byte >> 4) & 0xF;
	this.length_size = byte & 0xF;
	byte = stream.readUint8();
	this.base_offset_size = (byte >> 4) & 0xF;
	if (this.version === 1 || this.version === 2) {
		this.index_size = byte & 0xF;
	} else {
		this.index_size = 0;
		// reserved = byte & 0xF;
	}
	this.items = [];
	var item_count = 0;
	if (this.version < 2) {
		item_count = stream.readUint16();
	} else if (this.version === 2) {
		item_count = stream.readUint32();
	} else {
		throw "version of iloc box not supported";
	}
	for (var i = 0; i < item_count; i++) {
		var item = {};
		this.items.push(item);
		if (this.version < 2) {
			item.item_ID = stream.readUint16();
		} else if (this.version === 2) {
			item.item_ID = stream.readUint16();
		} else {
			throw "version of iloc box not supported";
		}
		if (this.version === 1 || this.version === 2) {
			item.construction_method = (stream.readUint16() & 0xF);
		} else {
			item.construction_method = 0;
		}
		item.data_reference_index = stream.readUint16();
		switch(this.base_offset_size) {
			case 0:
				item.base_offset = 0;
				break;
			case 4:
				item.base_offset = stream.readUint32();
				break;
			case 8:
				item.base_offset = stream.readUint64();
				break;
			default:
				throw "Error reading base offset size";
		}
		var extent_count = stream.readUint16();
		item.extents = [];
		for (var j=0; j < extent_count; j++) {
			var extent = {};
			item.extents.push(extent);
			if (this.version === 1 || this.version === 2) {
				switch(this.index_size) {
					case 0:
						extent.extent_index = 0;
						break;
					case 4:
						extent.extent_index = stream.readUint32();
						break;
					case 8:
						extent.extent_index = stream.readUint64();
						break;
					default:
						throw "Error reading extent index";
				}
			}
			switch(this.offset_size) {
				case 0:
					extent.extent_offset = 0;
					break;
				case 4:
					extent.extent_offset = stream.readUint32();
					break;
				case 8:
					extent.extent_offset = stream.readUint64();
					break;
				default:
					throw "Error reading extent index";
			}
			switch(this.length_size) {
				case 0:
					extent.extent_length = 0;
					break;
				case 4:
					extent.extent_length = stream.readUint32();
					break;
				case 8:
					extent.extent_length = stream.readUint64();
					break;
				default:
					throw "Error reading extent index";
			}
		}
	}
});

// file:src/parsing/imir.js
BoxParser.createBoxCtor("imir", function(stream) {
	var tmp = stream.readUint8();
	this.reserved = tmp >> 7;
	this.axis = tmp & 1;
});// file:src/parsing/infe.js
BoxParser.createFullBoxCtor("infe", function(stream) {
	if (this.version === 0 || this.version === 1) {
		this.item_ID = stream.readUint16();
		this.item_protection_index = stream.readUint16();
		this.item_name = stream.readCString();
		this.content_type = stream.readCString();
		this.content_encoding = stream.readCString();
	}
	if (this.version === 1) {
		this.extension_type = stream.readString(4);
		Log.warn("BoxParser", "Cannot parse extension type");
		stream.seek(this.start+this.size);
		return;
	}
	if (this.version >= 2) {
		if (this.version === 2) {
			this.item_ID = stream.readUint16();
		} else if (this.version === 3) {
			this.item_ID = stream.readUint32();
		}
		this.item_protection_index = stream.readUint16();
		this.item_type = stream.readString(4);
		this.item_name = stream.readCString();
		if (this.item_type === "mime") {
			this.content_type = stream.readCString();
			this.content_encoding = stream.readCString();
		} else if (this.item_type === "uri ") {
			this.item_uri_type = stream.readCString();
		}
	}
});
// file:src/parsing/ipma.js
BoxParser.createFullBoxCtor("ipma", function(stream) {
	var i, j;
	entry_count = stream.readUint32();
	this.associations = [];
	for(i=0; i<entry_count; i++) {
		var item_assoc = {};
		this.associations.push(item_assoc);
		if (this.version < 1) {
			item_assoc.id = stream.readUint16();
		} else {
			item_assoc.id = stream.readUint32();
		}
		var association_count = stream.readUint8();
		item_assoc.props = [];
		for (j = 0; j < association_count; j++) {
			var tmp = stream.readUint8();
			var p = {};
			item_assoc.props.push(p);
			p.essential = ((tmp & 0x80) >> 7) === 1;
			if (this.flags & 0x1) {
				p.property_index = (tmp & 0x7F) << 8 | stream.readUint8();
			} else {
				p.property_index = (tmp & 0x7F);
			}
		}
	}
});

// file:src/parsing/iref.js
BoxParser.createFullBoxCtor("iref", function(stream) {
	var ret;
	var box;
	this.references = [];

	while (stream.getPosition() < this.start+this.size) {
		ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			if (this.version === 0) {
				box = new BoxParser.SingleItemTypeReferenceBox(ret.type, ret.size, ret.hdr_size, ret.start);
			} else {
				box = new BoxParser.SingleItemTypeReferenceBoxLarge(ret.type, ret.size, ret.hdr_size, ret.start);
			}
			if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
				Log.warn("BoxParser", box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
				box.parseDataAndRewind(stream);
			}
			box.parse(stream);
			this.references.push(box);
		} else {
			return;
		}
	}
});
// file:src/parsing/irot.js
BoxParser.createBoxCtor("irot", function(stream) {
	this.angle = stream.readUint8() & 0x3;
});

// file:src/parsing/ispe.js
BoxParser.createFullBoxCtor("ispe", function(stream) {
	this.image_width = stream.readUint32();
	this.image_height = stream.readUint32();
});// file:src/parsing/kind.js
BoxParser.createFullBoxCtor("kind", function(stream) {
	this.schemeURI = stream.readCString();
	this.value = stream.readCString();
});
// file:src/parsing/leva.js
BoxParser.createFullBoxCtor("leva", function(stream) {
	var count = stream.readUint8();
	this.levels = [];
	for (var i = 0; i < count; i++) {
		var level = {};
		this.levels[i] = level;
		level.track_ID = stream.readUint32();
		var tmp_byte = stream.readUint8();
		level.padding_flag = tmp_byte >> 7;
		level.assignment_type = tmp_byte & 0x7F;
		switch (level.assignment_type) {
			case 0:
				level.grouping_type = stream.readString(4);
				break;
			case 1:
				level.grouping_type = stream.readString(4);
				level.grouping_type_parameter = stream.readUint32();
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				level.sub_track_id = stream.readUint32();
				break;
			default:
				Log.warn("BoxParser", "Unknown leva assignement type");
		}
	}
});

// file:src/parsing/lsel.js
BoxParser.createBoxCtor("lsel", function(stream) {
	this.layer_id = stream.readUint16();
});// file:src/parsing/maxr.js
BoxParser.createBoxCtor("maxr", function(stream) {
	this.period = stream.readUint32();
	this.bytes = stream.readUint32();
});

// file:src/parsing/mdcv.js
BoxParser.createBoxCtor("mdcv", function(stream) {
    this.display_primaries = [];
    this.display_primaries[0] = {};
    this.display_primaries[0].x = stream.readUint16();
    this.display_primaries[0].y = stream.readUint16();
    this.display_primaries[1] = {};
    this.display_primaries[1].x = stream.readUint16();
    this.display_primaries[1].y = stream.readUint16();
    this.display_primaries[2] = {};
    this.display_primaries[2].x = stream.readUint16();
    this.display_primaries[2].y = stream.readUint16();
    this.white_point = {};
    this.white_point.x = stream.readUint16();
    this.white_point.y = stream.readUint16();
    this.max_display_mastering_luminance = stream.readUint32();
    this.min_display_mastering_luminance = stream.readUint32();
});

// file:src/parsing/mdhd.js
BoxParser.createFullBoxCtor("mdhd", function(stream) {
	if (this.version == 1) {
		this.creation_time = stream.readUint64();
		this.modification_time = stream.readUint64();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint64();
	} else {
		this.creation_time = stream.readUint32();
		this.modification_time = stream.readUint32();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint32();
	}
	this.parseLanguage(stream);
	stream.readUint16();
});

// file:src/parsing/mehd.js
BoxParser.createFullBoxCtor("mehd", function(stream) {
	if (this.flags & 0x1) {
		Log.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
		this.version = 1;
	}
	if (this.version == 1) {
		this.fragment_duration = stream.readUint64();
	} else {
		this.fragment_duration = stream.readUint32();
	}
});

// file:src/parsing/meta.js
BoxParser.createFullBoxCtor("meta", function(stream) {
	this.boxes = [];
	BoxParser.ContainerBox.prototype.parse.call(this, stream);
});
// file:src/parsing/mfhd.js
BoxParser.createFullBoxCtor("mfhd", function(stream) {
	this.sequence_number = stream.readUint32();
});

// file:src/parsing/mfro.js
BoxParser.createFullBoxCtor("mfro", function(stream) {
	this._size = stream.readUint32();
});

// file:src/parsing/mvhd.js
BoxParser.createFullBoxCtor("mvhd", function(stream) {
	if (this.version == 1) {
		this.creation_time = stream.readUint64();
		this.modification_time = stream.readUint64();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint64();
	} else {
		this.creation_time = stream.readUint32();
		this.modification_time = stream.readUint32();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint32();
	}
	this.rate = stream.readUint32();
	this.volume = stream.readUint16()>>8;
	stream.readUint16();
	stream.readUint32Array(2);
	this.matrix = stream.readUint32Array(9);
	stream.readUint32Array(6);
	this.next_track_id = stream.readUint32();
});
// file:src/parsing/npck.js
BoxParser.createBoxCtor("npck", function(stream) {
	this.packetssent = stream.readUint32();
});

// file:src/parsing/nump.js
BoxParser.createBoxCtor("nump", function(stream) {
	this.packetssent = stream.readUint64();
});

// file:src/parsing/padb.js
BoxParser.createFullBoxCtor("padb", function(stream) {
	var sample_count = stream.readUint32();
	this.padbits = [];
	for (var i = 0; i < Math.floor((sample_count+1)/2); i++) {
		this.padbits = stream.readUint8();
	}
});

// file:src/parsing/pasp.js
BoxParser.createBoxCtor("pasp", function(stream) {
	this.hSpacing = stream.readUint32();
	this.vSpacing = stream.readUint32();
});// file:src/parsing/payl.js
BoxParser.createBoxCtor("payl", function(stream) {
	this.text = stream.readString(this.size - this.hdr_size);
});

// file:src/parsing/payt.js
BoxParser.createBoxCtor("payt", function(stream) {
	this.payloadID = stream.readUint32();
	var count = stream.readUint8();
	this.rtpmap_string = stream.readString(count);
});

// file:src/parsing/pdin.js
BoxParser.createFullBoxCtor("pdin", function(stream) {
	var count = (this.size - this.hdr_size)/8;
	this.rate = [];
	this.initial_delay = [];
	for (var i = 0; i < count; i++) {
		this.rate[i] = stream.readUint32();
		this.initial_delay[i] = stream.readUint32();
	}
});

// file:src/parsing/pitm.js
BoxParser.createFullBoxCtor("pitm", function(stream) {
	if (this.version === 0) {
		this.item_id = stream.readUint16();
	} else {
		this.item_id = stream.readUint32();
	}
});

// file:src/parsing/pixi.js
BoxParser.createFullBoxCtor("pixi", function(stream) {
	var i;
	this.num_channels = stream.readUint8();
	this.bits_per_channels = [];
	for (i = 0; i < this.num_channels; i++) {
		this.bits_per_channels[i] = stream.readUint8();
	}
});

// file:src/parsing/pmax.js
BoxParser.createBoxCtor("pmax", function(stream) {
	this.bytes = stream.readUint32();
});

// file:src/parsing/prft.js
BoxParser.createFullBoxCtor("prft", function(stream) {
	this.ref_track_id = stream.readUint32();
	this.ntp_timestamp = stream.readUint64();
	if (this.version === 0) {
		this.media_time = stream.readUint32();
	} else {
		this.media_time = stream.readUint64();
	}
});

// file:src/parsing/pssh.js
BoxParser.createFullBoxCtor("pssh", function(stream) {
	this.system_id = BoxParser.parseHex16(stream);
	if (this.version > 0) {
		var count = stream.readUint32();
		this.kid = [];
		for (var i = 0; i < count; i++) {
			this.kid[i] = BoxParser.parseHex16(stream);
		}
	}
	var datasize = stream.readUint32();
	if (datasize > 0) {
		this.data = stream.readUint8Array(datasize);
	}
});

// file:src/parsing/qt/clef.js
BoxParser.createFullBoxCtor("clef", function(stream) {
	this.width = stream.readUint32();
	this.height = stream.readUint32();
});// file:src/parsing/qt/enof.js
BoxParser.createFullBoxCtor("enof", function(stream) {
	this.width = stream.readUint32();
	this.height = stream.readUint32();
});// file:src/parsing/qt/prof.js
BoxParser.createFullBoxCtor("prof", function(stream) {
	this.width = stream.readUint32();
	this.height = stream.readUint32();
});// file:src/parsing/qt/tapt.js
BoxParser.createContainerBoxCtor("tapt", null, [ "clef", "prof", "enof"]);// file:src/parsing/rtp.js
BoxParser.createBoxCtor("rtp ", function(stream) {
	this.descriptionformat = stream.readString(4);
	this.sdptext = stream.readString(this.size - this.hdr_size - 4);
});

// file:src/parsing/saio.js
BoxParser.createFullBoxCtor("saio", function(stream) {
	if (this.flags & 0x1) {
		this.aux_info_type = stream.readUint32();
		this.aux_info_type_parameter = stream.readUint32();
	}
	var count = stream.readUint32();
	this.offset = [];
	for (var i = 0; i < count; i++) {
		if (this.version === 0) {
			this.offset[i] = stream.readUint32();
		} else {
			this.offset[i] = stream.readUint64();
		}
	}
});
// file:src/parsing/saiz.js
BoxParser.createFullBoxCtor("saiz", function(stream) {
	if (this.flags & 0x1) {
		this.aux_info_type = stream.readUint32();
		this.aux_info_type_parameter = stream.readUint32();
	}
	this.default_sample_info_size = stream.readUint8();
	var count = stream.readUint32();
	this.sample_info_size = [];
	if (this.default_sample_info_size === 0) {
		for (var i = 0; i < count; i++) {
			this.sample_info_size[i] = stream.readUint8();
		}
	}
});

// file:src/parsing/sampleentries/mett.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, "mett", function(stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.mime_format = stream.readCString();
	this.parseFooter(stream);
});

// file:src/parsing/sampleentries/metx.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, "metx", function(stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.namespace = stream.readCString();
	this.schema_location = stream.readCString();
	this.parseFooter(stream);
});

// file:src/parsing/sampleentries/sbtt.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function(stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.mime_format = stream.readCString();
	this.parseFooter(stream);
});

// file:src/parsing/sampleentries/stpp.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function(stream) {
	this.parseHeader(stream);
	this.namespace = stream.readCString();
	this.schema_location = stream.readCString();
	this.auxiliary_mime_types = stream.readCString();
	this.parseFooter(stream);
});

// file:src/parsing/sampleentries/stxt.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function(stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.mime_format = stream.readCString();
	this.parseFooter(stream);
});

// file:src/parsing/sampleentries/tx3g.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function(stream) {
	this.parseHeader(stream);
	this.displayFlags = stream.readUint32();
	this.horizontal_justification = stream.readInt8();
	this.vertical_justification = stream.readInt8();
	this.bg_color_rgba = stream.readUint8Array(4);
	this.box_record = stream.readInt16Array(4);
	this.style_record = stream.readUint8Array(12);
	this.parseFooter(stream);
});
// file:src/parsing/sampleentries/wvtt.js
BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function(stream) {
	this.parseHeader(stream);
	this.parseFooter(stream);
});

// file:src/parsing/samplegroups/alst.js
BoxParser.createSampleGroupCtor("alst", function(stream) {
	var i;
	var roll_count = stream.readUint16();
	this.first_output_sample = stream.readUint16();
	this.sample_offset = [];
	for (i = 0; i < roll_count; i++) {
		this.sample_offset[i] = stream.readUint32();
	}
	var remaining = this.description_length - 4 - 4*roll_count;
	this.num_output_samples = [];
	this.num_total_samples = [];
	for (i = 0; i < remaining/4; i++) {
		this.num_output_samples[i] = stream.readUint16();
		this.num_total_samples[i] = stream.readUint16();
	}
});

// file:src/parsing/samplegroups/avll.js
BoxParser.createSampleGroupCtor("avll", function(stream) {
	this.layerNumber = stream.readUint8();
	this.accurateStatisticsFlag = stream.readUint8();
	this.avgBitRate = stream.readUint16();
	this.avgFrameRate = stream.readUint16();
});

// file:src/parsing/samplegroups/avss.js
BoxParser.createSampleGroupCtor("avss", function(stream) {
	this.subSequenceIdentifier = stream.readUint16();
	this.layerNumber = stream.readUint8();
	var tmp_byte = stream.readUint8();
	this.durationFlag = tmp_byte >> 7;
	this.avgRateFlag = (tmp_byte >> 6) & 0x1;
	if (this.durationFlag) {
		this.duration = stream.readUint32();
	}
	if (this.avgRateFlag) {
		this.accurateStatisticsFlag = stream.readUint8();
		this.avgBitRate = stream.readUint16();
		this.avgFrameRate = stream.readUint16();
	}
	this.dependency = [];
	var numReferences = stream.readUint8();
	for (var i = 0; i < numReferences; i++) {
		var dependencyInfo = {};
		this.dependency.push(dependencyInfo);
		dependencyInfo.subSeqDirectionFlag = stream.readUint8();
		dependencyInfo.layerNumber = stream.readUint8();
		dependencyInfo.subSequenceIdentifier = stream.readUint16();
	}
});

// file:src/parsing/samplegroups/dtrt.js
BoxParser.createSampleGroupCtor("dtrt", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/mvif.js
BoxParser.createSampleGroupCtor("mvif", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/prol.js
BoxParser.createSampleGroupCtor("prol", function(stream) {
	this.roll_distance = stream.readInt16();
});

// file:src/parsing/samplegroups/rap.js
BoxParser.createSampleGroupCtor("rap ", function(stream) {
	var tmp_byte = stream.readUint8();
	this.num_leading_samples_known = tmp_byte >> 7;
	this.num_leading_samples = tmp_byte & 0x7F;
});

// file:src/parsing/samplegroups/rash.js
BoxParser.createSampleGroupCtor("rash", function(stream) {
	this.operation_point_count = stream.readUint16();
	if (this.description_length !== 2+(this.operation_point_count === 1?2:this.operation_point_count*6)+9) {
		Log.warn("BoxParser", "Mismatch in "+this.grouping_type+" sample group length");
		this.data =  stream.readUint8Array(this.description_length-2);
	} else {
		if (this.operation_point_count === 1) {
			this.target_rate_share = stream.readUint16();
		} else {
			this.target_rate_share = [];
			this.available_bitrate = [];
			for (var i = 0; i < this.operation_point_count; i++) {
				this.available_bitrate[i] = stream.readUint32();
				this.target_rate_share[i] = stream.readUint16();
			}
		}
		this.maximum_bitrate = stream.readUint32();
		this.minimum_bitrate = stream.readUint32();
		this.discard_priority = stream.readUint8();
	}
});

// file:src/parsing/samplegroups/roll.js
BoxParser.createSampleGroupCtor("roll", function(stream) {
	this.roll_distance = stream.readInt16();
});

// file:src/parsing/samplegroups/samplegroup.js
BoxParser.SampleGroupEntry.prototype.parse = function(stream) {
	Log.warn("BoxParser", "Unknown Sample Group type: "+this.grouping_type);
	this.data =  stream.readUint8Array(this.description_length);
};

// file:src/parsing/samplegroups/scif.js
BoxParser.createSampleGroupCtor("scif", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/scnm.js
BoxParser.createSampleGroupCtor("scnm", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/seig.js
BoxParser.createSampleGroupCtor("seig", function(stream) {
	this.reserved = stream.readUint8();
	var tmp = stream.readUint8();
	this.crypt_byte_block = tmp >> 4;
	this.skip_byte_block = tmp & 0xF;
	this.isProtected = stream.readUint8();
	this.Per_Sample_IV_Size = stream.readUint8();
	this.KID = BoxParser.parseHex16(stream);
	this.constant_IV_size = 0;
	this.constant_IV = 0;
	if (this.isProtected === 1 && this.Per_Sample_IV_Size === 0) {
		this.constant_IV_size = stream.readUint8();
		this.constant_IV = stream.readUint8Array(this.constant_IV_size);
	}
});

// file:src/parsing/samplegroups/stsa.js
BoxParser.createSampleGroupCtor("stsa", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/sync.js
BoxParser.createSampleGroupCtor("sync", function(stream) {
	var tmp_byte = stream.readUint8();
	this.NAL_unit_type = tmp_byte & 0x3F;
});

// file:src/parsing/samplegroups/tele.js
BoxParser.createSampleGroupCtor("tele", function(stream) {
	var tmp_byte = stream.readUint8();
	this.level_independently_decodable = tmp_byte >> 7;
});

// file:src/parsing/samplegroups/tsas.js
BoxParser.createSampleGroupCtor("tsas", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/tscl.js
BoxParser.createSampleGroupCtor("tscl", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/samplegroups/vipr.js
BoxParser.createSampleGroupCtor("vipr", function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
});

// file:src/parsing/sbgp.js
BoxParser.createFullBoxCtor("sbgp", function(stream) {
	this.grouping_type = stream.readString(4);
	if (this.version === 1) {
		this.grouping_type_parameter = stream.readUint32();
	} else {
		this.grouping_type_parameter = 0;
	}
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		var entry = {};
		this.entries.push(entry);
		entry.sample_count = stream.readInt32();
		entry.group_description_index = stream.readInt32();
	}
});

// file:src/parsing/schm.js
BoxParser.createFullBoxCtor("schm", function(stream) {
	this.scheme_type = stream.readString(4);
	this.scheme_version = stream.readUint32();
	if (this.flags & 0x000001) {
		this.scheme_uri = stream.readString(this.size - this.hdr_size - 8);
	}
});

// file:src/parsing/sdp.js
BoxParser.createBoxCtor("sdp ", function(stream) {
	this.sdptext = stream.readString(this.size - this.hdr_size);
});

// file:src/parsing/sdtp.js
BoxParser.createFullBoxCtor("sdtp", function(stream) {
	var tmp_byte;
	var count = (this.size - this.hdr_size);
	this.is_leading = [];
	this.sample_depends_on = [];
	this.sample_is_depended_on = [];
	this.sample_has_redundancy = [];
	for (var i = 0; i < count; i++) {
		tmp_byte = stream.readUint8();
		this.is_leading[i] = tmp_byte >> 6;
		this.sample_depends_on[i] = (tmp_byte >> 4) & 0x3;
		this.sample_is_depended_on[i] = (tmp_byte >> 2) & 0x3;
		this.sample_has_redundancy[i] = tmp_byte & 0x3;
	}
});

// file:src/parsing/senc.js
// Cannot be fully parsed because Per_Sample_IV_Size needs to be known
BoxParser.createFullBoxCtor("senc" /*, function(stream) {
	this.parseFullHeader(stream);
	var sample_count = stream.readUint32();
	this.samples = [];
	for (var i = 0; i < sample_count; i++) {
		var sample = {};
		// tenc.default_Per_Sample_IV_Size or seig.Per_Sample_IV_Size
		sample.InitializationVector = this.readUint8Array(Per_Sample_IV_Size*8);
		if (this.flags & 0x2) {
			sample.subsamples = [];
			subsample_count = stream.readUint16();
			for (var j = 0; j < subsample_count; j++) {
				var subsample = {};
				subsample.BytesOfClearData = stream.readUint16();
				subsample.BytesOfProtectedData = stream.readUint32();
				sample.subsamples.push(subsample);
			}
		}
		// TODO
		this.samples.push(sample);
	}
}*/);
// file:src/parsing/sgpd.js
BoxParser.createFullBoxCtor("sgpd", function(stream) {
	this.grouping_type = stream.readString(4);
	Log.debug("BoxParser", "Found Sample Groups of type "+this.grouping_type);
	if (this.version === 1) {
		this.default_length = stream.readUint32();
	} else {
		this.default_length = 0;
	}
	if (this.version >= 2) {
		this.default_group_description_index = stream.readUint32();
	}
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		var entry;
		if (BoxParser[this.grouping_type+"SampleGroupEntry"]) {
			entry = new BoxParser[this.grouping_type+"SampleGroupEntry"](this.grouping_type);
		}  else {
			entry = new BoxParser.SampleGroupEntry(this.grouping_type);
		}
		this.entries.push(entry);
		if (this.version === 1) {
			if (this.default_length === 0) {
				entry.description_length = stream.readUint32();
			} else {
				entry.description_length = this.default_length;
			}
		} else {
			entry.description_length = this.default_length;
		}
		if (entry.write === BoxParser.SampleGroupEntry.prototype.write) {
			Log.info("BoxParser", "SampleGroup for type "+this.grouping_type+" writing not yet implemented, keeping unparsed data in memory for later write");
			// storing data
			entry.data = stream.readUint8Array(entry.description_length);
			// rewinding
			stream.position -= entry.description_length;
		}
		entry.parse(stream);
	}
});

// file:src/parsing/sidx.js
BoxParser.createFullBoxCtor("sidx", function(stream) {
	this.reference_ID = stream.readUint32();
	this.timescale = stream.readUint32();
	if (this.version === 0) {
		this.earliest_presentation_time = stream.readUint32();
		this.first_offset = stream.readUint32();
	} else {
		this.earliest_presentation_time = stream.readUint64();
		this.first_offset = stream.readUint64();
	}
	stream.readUint16();
	this.references = [];
	var count = stream.readUint16();
	for (var i = 0; i < count; i++) {
		var ref = {};
		this.references.push(ref);
		var tmp_32 = stream.readUint32();
		ref.reference_type = (tmp_32 >> 31) & 0x1;
		ref.referenced_size = tmp_32 & 0x7FFFFFFF;
		ref.subsegment_duration = stream.readUint32();
		tmp_32 = stream.readUint32();
		ref.starts_with_SAP = (tmp_32 >> 31) & 0x1;
		ref.SAP_type = (tmp_32 >> 28) & 0x7;
		ref.SAP_delta_time = tmp_32 & 0xFFFFFFF;
	}
});

// file:src/parsing/singleitemtypereference.js
BoxParser.SingleItemTypeReferenceBox = function(type, size, hdr_size, start) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
};
BoxParser.SingleItemTypeReferenceBox.prototype = new BoxParser.Box();
BoxParser.SingleItemTypeReferenceBox.prototype.parse = function(stream) {
	this.from_item_ID = stream.readUint16();
	var count =  stream.readUint16();
	this.references = [];
	for(var i = 0; i < count; i++) {
		this.references[i] = stream.readUint16();
	}
};

// file:src/parsing/singleitemtypereferencelarge.js
BoxParser.SingleItemTypeReferenceBoxLarge = function(type, size, hdr_size, start) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
};
BoxParser.SingleItemTypeReferenceBoxLarge.prototype = new BoxParser.Box();
BoxParser.SingleItemTypeReferenceBoxLarge.prototype.parse = function(stream) {
	this.from_item_ID = stream.readUint32();
	var count =  stream.readUint16();
	this.references = [];
	for(var i = 0; i < count; i++) {
		this.references[i] = stream.readUint32();
	}
};

// file:src/parsing/SmDm.js
BoxParser.createFullBoxCtor("SmDm", function(stream) {
	this.primaryRChromaticity_x = stream.readUint16();
    this.primaryRChromaticity_y = stream.readUint16();
    this.primaryGChromaticity_x = stream.readUint16();
    this.primaryGChromaticity_y = stream.readUint16();
    this.primaryBChromaticity_x = stream.readUint16();
    this.primaryBChromaticity_y = stream.readUint16();
    this.whitePointChromaticity_x = stream.readUint16();
    this.whitePointChromaticity_y = stream.readUint16();
    this.luminanceMax = stream.readUint32();
    this.luminanceMin = stream.readUint32();
});

// file:src/parsing/smhd.js
BoxParser.createFullBoxCtor("smhd", function(stream) {
	this.balance = stream.readUint16();
	stream.readUint16();
});

// file:src/parsing/ssix.js
BoxParser.createFullBoxCtor("ssix", function(stream) {
	this.subsegments = [];
	var subsegment_count = stream.readUint32();
	for (var i = 0; i < subsegment_count; i++) {
		var subsegment = {};
		this.subsegments.push(subsegment);
		subsegment.ranges = [];
		var range_count = stream.readUint32();
		for (var j = 0; j < range_count; j++) {
			var range = {};
			subsegment.ranges.push(range);
			range.level = stream.readUint8();
			range.range_size = stream.readUint24();
		}
	}
});

// file:src/parsing/stco.js
BoxParser.createFullBoxCtor("stco", function(stream) {
	var entry_count;
	entry_count = stream.readUint32();
	this.chunk_offsets = [];
	if (this.version === 0) {
		for (var i = 0; i < entry_count; i++) {
			this.chunk_offsets.push(stream.readUint32());
		}
	}
});

// file:src/parsing/stdp.js
BoxParser.createFullBoxCtor("stdp", function(stream) {
	var count = (this.size - this.hdr_size)/2;
	this.priority = [];
	for (var i = 0; i < count; i++) {
		this.priority[i] = stream.readUint16();
	}
});

// file:src/parsing/sthd.js
BoxParser.createFullBoxCtor("sthd");

// file:src/parsing/stri.js
BoxParser.createFullBoxCtor("stri", function(stream) {
	this.switch_group = stream.readUint16();
	this.alternate_group = stream.readUint16();
	this.sub_track_id = stream.readUint32();
	var count = (this.size - this.hdr_size - 8)/4;
	this.attribute_list = [];
	for (var i = 0; i < count; i++) {
		this.attribute_list[i] = stream.readUint32();
	}
});

// file:src/parsing/stsc.js
BoxParser.createFullBoxCtor("stsc", function(stream) {
	var entry_count;
	var i;
	entry_count = stream.readUint32();
	this.first_chunk = [];
	this.samples_per_chunk = [];
	this.sample_description_index = [];
	if (this.version === 0) {
		for(i=0; i<entry_count; i++) {
			this.first_chunk.push(stream.readUint32());
			this.samples_per_chunk.push(stream.readUint32());
			this.sample_description_index.push(stream.readUint32());
		}
	}
});

// file:src/parsing/stsd.js
BoxParser.createFullBoxCtor("stsd", function(stream) {
	var i;
	var ret;
	var entryCount;
	var box;
	this.entries = [];
	entryCount = stream.readUint32();
	for (i = 1; i <= entryCount; i++) {
		ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			if (BoxParser[ret.type+"SampleEntry"]) {
				box = new BoxParser[ret.type+"SampleEntry"](ret.size);
				box.hdr_size = ret.hdr_size;
				box.start = ret.start;
			} else {
				Log.warn("BoxParser", "Unknown sample entry type: "+ret.type);
				box = new BoxParser.SampleEntry(ret.type, ret.size, ret.hdr_size, ret.start);
			}
			if (box.write === BoxParser.SampleEntry.prototype.write) {
				Log.info("BoxParser", "SampleEntry "+box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
				box.parseDataAndRewind(stream);
			}
			box.parse(stream);
			this.entries.push(box);
		} else {
			return;
		}
	}
});

// file:src/parsing/stsg.js
BoxParser.createFullBoxCtor("stsg", function(stream) {
	this.grouping_type = stream.readUint32();
	var count = stream.readUint16();
	this.group_description_index = [];
	for (var i = 0; i < count; i++) {
		this.group_description_index[i] = stream.readUint32();
	}
});

// file:src/parsing/stsh.js
BoxParser.createFullBoxCtor("stsh", function(stream) {
	var entry_count;
	var i;
	entry_count = stream.readUint32();
	this.shadowed_sample_numbers = [];
	this.sync_sample_numbers = [];
	if (this.version === 0) {
		for(i=0; i<entry_count; i++) {
			this.shadowed_sample_numbers.push(stream.readUint32());
			this.sync_sample_numbers.push(stream.readUint32());
		}
	}
});

// file:src/parsing/stss.js
BoxParser.createFullBoxCtor("stss", function(stream) {
	var i;
	var entry_count;
	entry_count = stream.readUint32();
	if (this.version === 0) {
		this.sample_numbers = [];
		for(i=0; i<entry_count; i++) {
			this.sample_numbers.push(stream.readUint32());
		}
	}
});

// file:src/parsing/stsz.js
BoxParser.createFullBoxCtor("stsz", function(stream) {
	var i;
	this.sample_sizes = [];
	if (this.version === 0) {
		this.sample_size = stream.readUint32();
		this.sample_count = stream.readUint32();
		for (i = 0; i < this.sample_count; i++) {
			if (this.sample_size === 0) {
				this.sample_sizes.push(stream.readUint32());
			} else {
				this.sample_sizes[i] = this.sample_size;
			}
		}
	}
});

// file:src/parsing/stts.js
BoxParser.createFullBoxCtor("stts", function(stream) {
	var entry_count;
	var i;
	var delta;
	entry_count = stream.readUint32();
	this.sample_counts = [];
	this.sample_deltas = [];
	if (this.version === 0) {
		for(i=0; i<entry_count; i++) {
			this.sample_counts.push(stream.readUint32());
			delta = stream.readInt32();
			if (delta < 0) {
				Log.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
				delta = 1;
			}
			this.sample_deltas.push(delta);
		}
	}
});

// file:src/parsing/stvi.js
BoxParser.createFullBoxCtor("stvi", function(stream) {
	var tmp32 = stream.readUint32();
	this.single_view_allowed = tmp32 & 0x3;
	this.stereo_scheme = stream.readUint32();
	var length = stream.readUint32();
	this.stereo_indication_type = stream.readString(length);
	var ret;
	var box;
	this.boxes = [];
	while (stream.getPosition() < this.start+this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.boxes.push(box);
			this[box.type] = box;
		} else {
			return;
		}
	}
});

// file:src/parsing/styp.js
BoxParser.createBoxCtor("styp", function(stream) {
	BoxParser.ftypBox.prototype.parse.call(this, stream);
});

// file:src/parsing/stz2.js
BoxParser.createFullBoxCtor("stz2", function(stream) {
	var i;
	var sample_count;
	this.sample_sizes = [];
	if (this.version === 0) {
		this.reserved = stream.readUint24();
		this.field_size = stream.readUint8();
		sample_count = stream.readUint32();
		if (this.field_size === 4) {
			for (i = 0; i < sample_count; i+=2) {
				var tmp = stream.readUint8();
				this.sample_sizes[i] = (tmp >> 4) & 0xF;
				this.sample_sizes[i+1] = tmp & 0xF;
			}
		} else if (this.field_size === 8) {
			for (i = 0; i < sample_count; i++) {
				this.sample_sizes[i] = stream.readUint8();
			}
		} else if (this.field_size === 16) {
			for (i = 0; i < sample_count; i++) {
				this.sample_sizes[i] = stream.readUint16();
			}
		} else {
			Log.error("BoxParser", "Error in length field in stz2 box");
		}
	}
});

// file:src/parsing/subs.js
BoxParser.createFullBoxCtor("subs", function(stream) {
	var i,j;
	var entry_count;
	var subsample_count;
	entry_count = stream.readUint32();
	this.entries = [];
	for (i = 0; i < entry_count; i++) {
		var sampleInfo = {};
		this.entries[i] = sampleInfo;
		sampleInfo.sample_delta = stream.readUint32();
		sampleInfo.subsamples = [];
		subsample_count = stream.readUint16();
		if (subsample_count>0) {
			for (j = 0; j < subsample_count; j++) {
				var subsample = {};
				sampleInfo.subsamples.push(subsample);
				if (this.version == 1) {
					subsample.size = stream.readUint32();
				} else {
					subsample.size = stream.readUint16();
				}
				subsample.priority = stream.readUint8();
				subsample.discardable = stream.readUint8();
				subsample.codec_specific_parameters = stream.readUint32();
			}
		}
	}
});

// file:src/parsing/tenc.js
BoxParser.createFullBoxCtor("tenc", function(stream) {
	stream.readUint8(); // reserved
	if (this.version === 0) {
		stream.readUint8();
	} else {
		var tmp = stream.readUint8();
		this.default_crypt_byte_block = (tmp >> 4) & 0xF;
		this.default_skip_byte_block = tmp & 0xF;
	}
	this.default_isProtected = stream.readUint8();
	this.default_Per_Sample_IV_Size = stream.readUint8();
	this.default_KID = BoxParser.parseHex16(stream);
	if (this.default_isProtected === 1 && this.default_Per_Sample_IV_Size === 0) {
		this.default_constant_IV_size = stream.readUint8();
		this.default_constant_IV = stream.readUint8Array(this.default_constant_IV_size);
	}
});// file:src/parsing/tfdt.js
BoxParser.createFullBoxCtor("tfdt", function(stream) {
	if (this.version == 1) {
		this.baseMediaDecodeTime = stream.readUint64();
	} else {
		this.baseMediaDecodeTime = stream.readUint32();
	}
});

// file:src/parsing/tfhd.js
BoxParser.createFullBoxCtor("tfhd", function(stream) {
	var readBytes = 0;
	this.track_id = stream.readUint32();
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET)) {
		this.base_data_offset = stream.readUint64();
		readBytes += 8;
	} else {
		this.base_data_offset = 0;
	}
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC)) {
		this.default_sample_description_index = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_description_index = 0;
	}
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR)) {
		this.default_sample_duration = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_duration = 0;
	}
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE)) {
		this.default_sample_size = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_size = 0;
	}
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS)) {
		this.default_sample_flags = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_flags = 0;
	}
});

// file:src/parsing/tfra.js
BoxParser.createFullBoxCtor("tfra", function(stream) {
	this.track_ID = stream.readUint32();
	stream.readUint24();
	var tmp_byte = stream.readUint8();
	this.length_size_of_traf_num = (tmp_byte >> 4) & 0x3;
	this.length_size_of_trun_num = (tmp_byte >> 2) & 0x3;
	this.length_size_of_sample_num = (tmp_byte) & 0x3;
	this.entries = [];
	var number_of_entries = stream.readUint32();
	for (var i = 0; i < number_of_entries; i++) {
		if (this.version === 1) {
			this.time = stream.readUint64();
			this.moof_offset = stream.readUint64();
		} else {
			this.time = stream.readUint32();
			this.moof_offset = stream.readUint32();
		}
		this.traf_number = stream["readUint"+(8*(this.length_size_of_traf_num+1))]();
		this.trun_number = stream["readUint"+(8*(this.length_size_of_trun_num+1))]();
		this.sample_number = stream["readUint"+(8*(this.length_size_of_sample_num+1))]();
	}
});

// file:src/parsing/tkhd.js
BoxParser.createFullBoxCtor("tkhd", function(stream) {
	if (this.version == 1) {
		this.creation_time = stream.readUint64();
		this.modification_time = stream.readUint64();
		this.track_id = stream.readUint32();
		stream.readUint32();
		this.duration = stream.readUint64();
	} else {
		this.creation_time = stream.readUint32();
		this.modification_time = stream.readUint32();
		this.track_id = stream.readUint32();
		stream.readUint32();
		this.duration = stream.readUint32();
	}
	stream.readUint32Array(2);
	this.layer = stream.readInt16();
	this.alternate_group = stream.readInt16();
	this.volume = stream.readInt16()>>8;
	stream.readUint16();
	this.matrix = stream.readInt32Array(9);
	this.width = stream.readUint32();
	this.height = stream.readUint32();
});

// file:src/parsing/tmax.js
BoxParser.createBoxCtor("tmax", function(stream) {
	this.time = stream.readUint32();
});

// file:src/parsing/tmin.js
BoxParser.createBoxCtor("tmin", function(stream) {
	this.time = stream.readUint32();
});

// file:src/parsing/totl.js
BoxParser.createBoxCtor("totl",function(stream) {
	this.bytessent = stream.readUint32();
});

// file:src/parsing/tpay.js
BoxParser.createBoxCtor("tpay", function(stream) {
	this.bytessent = stream.readUint32();
});

// file:src/parsing/tpyl.js
BoxParser.createBoxCtor("tpyl", function(stream) {
	this.bytessent = stream.readUint64();
});

// file:src/parsing/TrackGroup.js
BoxParser.TrackGroupTypeBox.prototype.parse = function(stream) {
	this.parseFullHeader(stream);
	this.track_group_id = stream.readUint32();
};

// file:src/parsing/trackgroups/msrc.js
BoxParser.createTrackGroupCtor("msrc");// file:src/parsing/TrakReference.js
BoxParser.TrackReferenceTypeBox = function(type, size, hdr_size, start) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
};
BoxParser.TrackReferenceTypeBox.prototype = new BoxParser.Box();
BoxParser.TrackReferenceTypeBox.prototype.parse = function(stream) {
	this.track_ids = stream.readUint32Array((this.size-this.hdr_size)/4);
};

// file:src/parsing/tref.js
BoxParser.trefBox.prototype.parse = function(stream) {
	var ret;
	var box;
	while (stream.getPosition() < this.start+this.size) {
		ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = new BoxParser.TrackReferenceTypeBox(ret.type, ret.size, ret.hdr_size, ret.start);
			if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
				Log.info("BoxParser", "TrackReference "+box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
				box.parseDataAndRewind(stream);
			}
			box.parse(stream);
			this.boxes.push(box);
		} else {
			return;
		}
	}
};

// file:src/parsing/trep.js
BoxParser.createFullBoxCtor("trep", function(stream) {
	this.track_ID = stream.readUint32();
	this.boxes = [];
	while (stream.getPosition() < this.start+this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.boxes.push(box);
		} else {
			return;
		}
	}
});

// file:src/parsing/trex.js
BoxParser.createFullBoxCtor("trex", function(stream) {
	this.track_id = stream.readUint32();
	this.default_sample_description_index = stream.readUint32();
	this.default_sample_duration = stream.readUint32();
	this.default_sample_size = stream.readUint32();
	this.default_sample_flags = stream.readUint32();
});

// file:src/parsing/trpy.js
BoxParser.createBoxCtor("trpy", function(stream) {
	this.bytessent = stream.readUint64();
});

// file:src/parsing/trun.js
BoxParser.createFullBoxCtor("trun", function(stream) {
	var readBytes = 0;
	this.sample_count = stream.readUint32();
	readBytes+= 4;
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) ) {
		this.data_offset = stream.readInt32(); //signed
		readBytes += 4;
	} else {
		this.data_offset = 0;
	}
	if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) ) {
		this.first_sample_flags = stream.readUint32();
		readBytes += 4;
	} else {
		this.first_sample_flags = 0;
	}
	this.sample_duration = [];
	this.sample_size = [];
	this.sample_flags = [];
	this.sample_composition_time_offset = [];
	if (this.size - this.hdr_size > readBytes) {
		for (var i = 0; i < this.sample_count; i++) {
			if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
				this.sample_duration[i] = stream.readUint32();
			}
			if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
				this.sample_size[i] = stream.readUint32();
			}
			if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
				this.sample_flags[i] = stream.readUint32();
			}
			if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
				if (this.version === 0) {
					this.sample_composition_time_offset[i] = stream.readUint32();
				} else {
					this.sample_composition_time_offset[i] = stream.readInt32(); //signed
				}
			}
		}
	}
});

// file:src/parsing/tsel.js
BoxParser.createFullBoxCtor("tsel", function(stream) {
	this.switch_group = stream.readUint32();
	var count = (this.size - this.hdr_size - 4)/4;
	this.attribute_list = [];
	for (var i = 0; i < count; i++) {
		this.attribute_list[i] = stream.readUint32();
	}
});

// file:src/parsing/txtC.js
BoxParser.createFullBoxCtor("txtC", function(stream) {
	this.config = stream.readCString();
});

// file:src/parsing/url.js
BoxParser.createFullBoxCtor("url ", function(stream) {
	if (this.flags !== 0x000001) {
		this.location = stream.readCString();
	}
});

// file:src/parsing/urn.js
BoxParser.createFullBoxCtor("urn ", function(stream) {
	this.name = stream.readCString();
	if (this.size - this.hdr_size - this.name.length - 1 > 0) {
		this.location = stream.readCString();
	}
});

// file:src/parsing/uuid/piff/piffLsm.js
BoxParser.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", true, false, function(stream) {
    this.LiveServerManifest = stream.readString(this.size - this.hdr_size)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
});// file:src/parsing/uuid/piff/piffPssh.js
BoxParser.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", true, false, function(stream) {
	this.system_id = BoxParser.parseHex16(stream);
	var datasize = stream.readUint32();
	if (datasize > 0) {
		this.data = stream.readUint8Array(datasize);
	}
});

// file:src/parsing/uuid/piff/piffSenc.js
BoxParser.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", true, false /*, function(stream) {
	if (this.flags & 0x1) {
		this.AlgorithmID = stream.readUint24();
		this.IV_size = stream.readUint8();
		this.KID = BoxParser.parseHex16(stream);
	}
	var sample_count = stream.readUint32();
	this.samples = [];
	for (var i = 0; i < sample_count; i++) {
		var sample = {};
		sample.InitializationVector = this.readUint8Array(this.IV_size*8);
		if (this.flags & 0x2) {
			sample.subsamples = [];
			sample.NumberOfEntries = stream.readUint16();
			for (var j = 0; j < sample.NumberOfEntries; j++) {
				var subsample = {};
				subsample.BytesOfClearData = stream.readUint16();
				subsample.BytesOfProtectedData = stream.readUint32();
				sample.subsamples.push(subsample);
			}
		}
		this.samples.push(sample);
	}
}*/);
// file:src/parsing/uuid/piff/piffTenc.js
BoxParser.createUUIDBox("8974dbce7be74c5184f97148f9882554", true, false, function(stream) {
	this.default_AlgorithmID = stream.readUint24();
	this.default_IV_size = stream.readUint8();
	this.default_KID = BoxParser.parseHex16(stream);
});// file:src/parsing/uuid/piff/piffTfrf.js
BoxParser.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", true, false, function(stream) {
    this.fragment_count = stream.readUint8();
    this.entries = [];

    for (var i = 0; i < this.fragment_count; i++) {
        var entry = {};
        var absolute_time = 0;
        var absolute_duration = 0;

        if (this.version === 1) {
            absolute_time = stream.readUint64();
            absolute_duration = stream.readUint64();
        } else {
            absolute_time = stream.readUint32();
            absolute_duration = stream.readUint32();
        }

        entry.absolute_time = absolute_time;
        entry.absolute_duration = absolute_duration;

        this.entries.push(entry);
    }
});// file:src/parsing/uuid/piff/piffTfxd.js
BoxParser.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", true, false, function(stream) {
    if (this.version === 1) {
       this.absolute_time = stream.readUint64();
       this.duration = stream.readUint64();
    } else {
       this.absolute_time = stream.readUint32();
       this.duration = stream.readUint32();
    }
});// file:src/parsing/vmhd.js
BoxParser.createFullBoxCtor("vmhd", function(stream) {
	this.graphicsmode = stream.readUint16();
	this.opcolor = stream.readUint16Array(3);
});

// file:src/parsing/vpcC.js
BoxParser.createFullBoxCtor("vpcC", function (stream) {
	var tmp;
	if (this.version === 1) {
		this.profile = stream.readUint8();
		this.level = stream.readUint8();
		tmp = stream.readUint8();
		this.bitDepth = tmp >> 4;
		this.chromaSubsampling = (tmp >> 1) & 0x7;
		this.videoFullRangeFlag = tmp & 0x1;
		this.colourPrimaries = stream.readUint8();
		this.transferCharacteristics = stream.readUint8();
		this.matrixCoefficients = stream.readUint8();
		this.codecIntializationDataSize = stream.readUint16();
		this.codecIntializationData = stream.readUint8Array(this.codecIntializationDataSize);
	} else {
		this.profile = stream.readUint8();
		this.level = stream.readUint8();
		tmp = stream.readUint8();
		this.bitDepth = (tmp >> 4) & 0xF;
		this.colorSpace = tmp & 0xF;
		tmp = stream.readUint8();
		this.chromaSubsampling = (tmp >> 4) & 0xF;
		this.transferFunction = (tmp >> 1) & 0x7;
		this.videoFullRangeFlag = tmp & 0x1;
		this.codecIntializationDataSize = stream.readUint16();
		this.codecIntializationData = stream.readUint8Array(this.codecIntializationDataSize);
	}
});// file:src/parsing/vttC.js
BoxParser.createBoxCtor("vttC", function(stream) {
	this.text = stream.readString(this.size - this.hdr_size);
});

// file:src/box-codecs.js
BoxParser.SampleEntry.prototype.isVideo = function() {
	return false;
};

BoxParser.SampleEntry.prototype.isAudio = function() {
	return false;
};

BoxParser.SampleEntry.prototype.isSubtitle = function() {
	return false;
};

BoxParser.SampleEntry.prototype.isMetadata = function() {
	return false;
};

BoxParser.SampleEntry.prototype.isHint = function() {
	return false;
};

BoxParser.SampleEntry.prototype.getCodec = function() {
	return this.type.replace('.','');
};

BoxParser.SampleEntry.prototype.getWidth = function() {
	return "";
};

BoxParser.SampleEntry.prototype.getHeight = function() {
	return "";
};

BoxParser.SampleEntry.prototype.getChannelCount = function() {
	return "";
};

BoxParser.SampleEntry.prototype.getSampleRate = function() {
	return "";
};

BoxParser.SampleEntry.prototype.getSampleSize = function() {
	return "";
};

BoxParser.VisualSampleEntry.prototype.isVideo = function() {
	return true;
};

BoxParser.VisualSampleEntry.prototype.getWidth = function() {
	return this.width;
};

BoxParser.VisualSampleEntry.prototype.getHeight = function() {
	return this.height;
};

BoxParser.AudioSampleEntry.prototype.isAudio = function() {
	return true;
};

BoxParser.AudioSampleEntry.prototype.getChannelCount = function() {
	return this.channel_count;
};

BoxParser.AudioSampleEntry.prototype.getSampleRate = function() {
	return this.samplerate;
};

BoxParser.AudioSampleEntry.prototype.getSampleSize = function() {
	return this.samplesize;
};

BoxParser.SubtitleSampleEntry.prototype.isSubtitle = function() {
	return true;
};

BoxParser.MetadataSampleEntry.prototype.isMetadata = function() {
	return true;
};


BoxParser.decimalToHex = function(d, padding) {
	var hex = Number(d).toString(16);
	padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
	while (hex.length < padding) {
		hex = "0" + hex;
	}
	return hex;
};

BoxParser.avc1SampleEntry.prototype.getCodec =
BoxParser.avc2SampleEntry.prototype.getCodec =
BoxParser.avc3SampleEntry.prototype.getCodec =
BoxParser.avc4SampleEntry.prototype.getCodec = function() {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.avcC) {
		return baseCodec+"."+BoxParser.decimalToHex(this.avcC.AVCProfileIndication)+
						  ""+BoxParser.decimalToHex(this.avcC.profile_compatibility)+
						  ""+BoxParser.decimalToHex(this.avcC.AVCLevelIndication);
	} else {
		return baseCodec;
	}
};

BoxParser.hev1SampleEntry.prototype.getCodec =
BoxParser.hvc1SampleEntry.prototype.getCodec = function() {
	var i;
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.hvcC) {
		baseCodec += '.';
		switch (this.hvcC.general_profile_space) {
			case 0:
				baseCodec += '';
				break;
			case 1:
				baseCodec += 'A';
				break;
			case 2:
				baseCodec += 'B';
				break;
			case 3:
				baseCodec += 'C';
				break;
		}
		baseCodec += this.hvcC.general_profile_idc;
		baseCodec += '.';
		var val = this.hvcC.general_profile_compatibility;
		var reversed = 0;
		for (i=0; i<32; i++) {
			reversed |= val & 1;
			if (i==31) break;
			reversed <<= 1;
			val >>=1;
		}
		baseCodec += BoxParser.decimalToHex(reversed, 0);
		baseCodec += '.';
		if (this.hvcC.general_tier_flag === 0) {
			baseCodec += 'L';
		} else {
			baseCodec += 'H';
		}
		baseCodec += this.hvcC.general_level_idc;
		var hasByte = false;
		var constraint_string = "";
		for (i = 5; i >= 0; i--) {
			if (this.hvcC.general_constraint_indicator[i] || hasByte) {
				constraint_string = "."+BoxParser.decimalToHex(this.hvcC.general_constraint_indicator[i], 0)+constraint_string;
				hasByte = true;
			}
		}
		baseCodec += constraint_string;
	}
	return baseCodec;
};

BoxParser.mp4aSampleEntry.prototype.getCodec = function() {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.esds && this.esds.esd) {
		var oti = this.esds.esd.getOTI();
		var dsi = this.esds.esd.getAudioConfig();
		return baseCodec+"."+BoxParser.decimalToHex(oti)+(dsi ? "."+dsi: "");
	} else {
		return baseCodec;
	}
};

BoxParser.stxtSampleEntry.prototype.getCodec = function() {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if(this.mime_format) {
		return baseCodec + "." + this.mime_format;
	} else {
		return baseCodec
	}
};

BoxParser.av01SampleEntry.prototype.getCodec = function() {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	var bitdepth;
	if (this.av1C.seq_profile === 2 && this.av1C.high_bitdepth === 1) {
		bitdepth = (this.av1C.twelve_bit === 1) ? "12" : "10";
	} else if ( this.av1C.seq_profile <= 2 ) {
		bitdepth = (this.av1C.high_bitdepth === 1) ? "10" : "08";
	}
	// TODO need to parse the SH to find color config
	return baseCodec+"."+this.av1C.seq_profile+"."+this.av1C.seq_level_idx_0+(this.av1C.seq_tier_0?"H":"M")+"."+bitdepth;//+"."+this.av1C.monochrome+"."+this.av1C.chroma_subsampling_x+""+this.av1C.chroma_subsampling_y+""+this.av1C.chroma_sample_position;
};


// file:src/box-write.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.Box.prototype.writeHeader = function(stream, msg) {
	this.size += 8;
	if (this.size > MAX_SIZE) {
		this.size += 8;
	}
	if (this.type === "uuid") {
		this.size += 16;
	}
	Log.debug("BoxWriter", "Writing box "+this.type+" of size: "+this.size+" at position "+stream.getPosition()+(msg || ""));
	if (this.size > MAX_SIZE) {
		stream.writeUint32(1);
	} else {
		this.sizePosition = stream.getPosition();
		stream.writeUint32(this.size);
	}
	stream.writeString(this.type, null, 4);
	if (this.type === "uuid") {
		stream.writeUint8Array(this.uuid);
	}
	if (this.size > MAX_SIZE) {
		stream.writeUint64(this.size);
	} 
};

BoxParser.FullBox.prototype.writeHeader = function(stream) {
	this.size += 4;
	BoxParser.Box.prototype.writeHeader.call(this, stream, " v="+this.version+" f="+this.flags);
	stream.writeUint8(this.version);
	stream.writeUint24(this.flags);
};

BoxParser.Box.prototype.write = function(stream) {
	if (this.type === "mdat") {
		/* TODO: fix this */
		if (this.data) {
			this.size = this.data.length;
			this.writeHeader(stream);
			stream.writeUint8Array(this.data);
		}
	} else {
		this.size = (this.data ? this.data.length : 0);
		this.writeHeader(stream);
		if (this.data) {
			stream.writeUint8Array(this.data);
		}
	}
};

BoxParser.ContainerBox.prototype.write = function(stream) {
	this.size = 0;
	this.writeHeader(stream);
	for (var i=0; i<this.boxes.length; i++) {
		if (this.boxes[i]) {
			this.boxes[i].write(stream);
			this.size += this.boxes[i].size;
		}
	}
	/* adjusting the size, now that all sub-boxes are known */
	Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

BoxParser.TrackReferenceTypeBox.prototype.write = function(stream) {
	this.size = this.track_ids.length*4;
	this.writeHeader(stream);
	stream.writeUint32Array(this.track_ids);
};

// file:src/writing/avcC.js
BoxParser.avcCBox.prototype.write = function(stream) {
	var i;
	this.size = 7;
	for (i = 0; i < this.SPS.length; i++) {
		this.size += 2+this.SPS[i].length;
	}
	for (i = 0; i < this.PPS.length; i++) {
		this.size += 2+this.PPS[i].length;
	}
	if (this.ext) {
		this.size += this.ext.length;
	}
	this.writeHeader(stream);
	stream.writeUint8(this.configurationVersion);
	stream.writeUint8(this.AVCProfileIndication);
	stream.writeUint8(this.profile_compatibility);
	stream.writeUint8(this.AVCLevelIndication);
	stream.writeUint8(this.lengthSizeMinusOne + (63<<2));
	stream.writeUint8(this.SPS.length + (7<<5));
	for (i = 0; i < this.SPS.length; i++) {
		stream.writeUint16(this.SPS[i].length);
		stream.writeUint8Array(this.SPS[i].nalu);
	}
	stream.writeUint8(this.PPS.length);
	for (i = 0; i < this.PPS.length; i++) {
		stream.writeUint16(this.PPS[i].length);
		stream.writeUint8Array(this.PPS[i].nalu);
	}
	if (this.ext) {
		stream.writeUint8Array(this.ext);
	}
};

// file:src/writing/co64.js
BoxParser.co64Box.prototype.write = function(stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4+8*this.chunk_offsets.length;
	this.writeHeader(stream);
	stream.writeUint32(this.chunk_offsets.length);
	for(i=0; i<this.chunk_offsets.length; i++) {
		stream.writeUint64(this.chunk_offsets[i]);
	}
};

// file:src/writing/cslg.js
BoxParser.cslgBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4*5;
	this.writeHeader(stream);
	stream.writeInt32(this.compositionToDTSShift);
	stream.writeInt32(this.leastDecodeToDisplayDelta);
	stream.writeInt32(this.greatestDecodeToDisplayDelta);
	stream.writeInt32(this.compositionStartTime);
	stream.writeInt32(this.compositionEndTime);
};

// file:src/writing/ctts.js
BoxParser.cttsBox.prototype.write = function(stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4+8*this.sample_counts.length;
	this.writeHeader(stream);
	stream.writeUint32(this.sample_counts.length);
	for(i=0; i<this.sample_counts.length; i++) {
		stream.writeUint32(this.sample_counts[i]);
		if (this.version === 1) {
			stream.writeInt32(this.sample_offsets[i]); /* signed */
		} else {			
			stream.writeUint32(this.sample_offsets[i]); /* unsigned */
		}
	}
};

// file:src/writing/dref.js
BoxParser.drefBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4; //
	this.writeHeader(stream);
	stream.writeUint32(this.entries.length);
	for (var i = 0; i < this.entries.length; i++) {
		this.entries[i].write(stream);
		this.size += this.entries[i].size;
	}	
	/* adjusting the size, now that all sub-boxes are known */
	Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

// file:src/writing/elng.js
BoxParser.elngBox.prototype.write = function(stream) {
	this.version = 0;	
	this.flags = 0;
	this.size = this.extended_language.length;
	this.writeHeader(stream);
	stream.writeString(this.extended_language);
};

// file:src/writing/elst.js
BoxParser.elstBox.prototype.write = function(stream) {
	this.version = 0;	
	this.flags = 0;
	this.size = 4+12*this.entries.length;
	this.writeHeader(stream);
	stream.writeUint32(this.entries.length);
	for (var i = 0; i < this.entries.length; i++) {
		var entry = this.entries[i];
		stream.writeUint32(entry.segment_duration);
		stream.writeInt32(entry.media_time);
		stream.writeInt16(entry.media_rate_integer);
		stream.writeInt16(entry.media_rate_fraction);
	}
};

// file:src/writing/emsg.js
BoxParser.emsgBox.prototype.write = function(stream) {
	this.version = 0;	
	this.flags = 0;
	this.size = 4*4+this.message_data.length+(this.scheme_id_uri.length+1)+(this.value.length+1);
	this.writeHeader(stream);
	stream.writeCString(this.scheme_id_uri);
	stream.writeCString(this.value);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.presentation_time_delta);
	stream.writeUint32(this.event_duration);
	stream.writeUint32(this.id);
	stream.writeUint8Array(this.message_data);
};

// file:src/writing/ftyp.js
BoxParser.ftypBox.prototype.write = function(stream) {
	this.size = 8+4*this.compatible_brands.length;
	this.writeHeader(stream);
	stream.writeString(this.major_brand, null, 4);
	stream.writeUint32(this.minor_version);
	for (var i = 0; i < this.compatible_brands.length; i++) {
		stream.writeString(this.compatible_brands[i], null, 4);
	}
};

// file:src/writing/hdlr.js
BoxParser.hdlrBox.prototype.write = function(stream) {
	this.size = 5*4+this.name.length+1;
	this.version = 0;
	this.flags = 0;
	this.writeHeader(stream);
	stream.writeUint32(0);
	stream.writeString(this.handler, null, 4);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeCString(this.name);
};

// file:src/writing/kind.js
BoxParser.kindBox.prototype.write = function(stream) {
	this.version = 0;	
	this.flags = 0;
	this.size = (this.schemeURI.length+1)+(this.value.length+1);
	this.writeHeader(stream);
	stream.writeCString(this.schemeURI);
	stream.writeCString(this.value);
};

// file:src/writing/mdhd.js
BoxParser.mdhdBox.prototype.write = function(stream) {
	this.size = 4*4+2*2;
	this.flags = 0;
	this.version = 0;
	this.writeHeader(stream);
	stream.writeUint32(this.creation_time);
	stream.writeUint32(this.modification_time);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.duration);
	stream.writeUint16(this.language);
	stream.writeUint16(0);
};

// file:src/writing/mehd.js
BoxParser.mehdBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4;
	this.writeHeader(stream);
	stream.writeUint32(this.fragment_duration);
};

// file:src/writing/mfhd.js
BoxParser.mfhdBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4;
	this.writeHeader(stream);
	stream.writeUint32(this.sequence_number);
};

// file:src/writing/mvhd.js
BoxParser.mvhdBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 23*4+2*2;
	this.writeHeader(stream);
	stream.writeUint32(this.creation_time);
	stream.writeUint32(this.modification_time);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.duration);
	stream.writeUint32(this.rate);
	stream.writeUint16(this.volume<<8);
	stream.writeUint16(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32Array(this.matrix);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(this.next_track_id);
};

// file:src/writing/sampleentry.js
BoxParser.SampleEntry.prototype.writeHeader = function(stream) {
	this.size = 8;
	BoxParser.Box.prototype.writeHeader.call(this, stream);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint16(this.data_reference_index);
};

BoxParser.SampleEntry.prototype.writeFooter = function(stream) {
	for (var i=0; i<this.boxes.length; i++) {
		this.boxes[i].write(stream);
		this.size += this.boxes[i].size;
	}
	Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
	stream.adjustUint32(this.sizePosition, this.size);	
};

BoxParser.SampleEntry.prototype.write = function(stream) {
	this.writeHeader(stream);
	stream.writeUint8Array(this.data);
	this.size += this.data.length;
	Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
	stream.adjustUint32(this.sizePosition, this.size);	
};

BoxParser.VisualSampleEntry.prototype.write = function(stream) {
	this.writeHeader(stream);
	this.size += 2*7+6*4+32;
	stream.writeUint16(0); 
	stream.writeUint16(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint16(this.width);
	stream.writeUint16(this.height);
	stream.writeUint32(this.horizresolution);
	stream.writeUint32(this.vertresolution);
	stream.writeUint32(0);
	stream.writeUint16(this.frame_count);
	stream.writeUint8(Math.min(31, this.compressorname.length));
	stream.writeString(this.compressorname, null, 31);
	stream.writeUint16(this.depth);
	stream.writeInt16(-1);
	this.writeFooter(stream);
};

BoxParser.AudioSampleEntry.prototype.write = function(stream) {
	this.writeHeader(stream);
	this.size += 2*4+3*4;
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint16(this.channel_count);
	stream.writeUint16(this.samplesize);
	stream.writeUint16(0);
	stream.writeUint16(0);
	stream.writeUint32(this.samplerate<<16);
	this.writeFooter(stream);
};

BoxParser.stppSampleEntry.prototype.write = function(stream) {
	this.writeHeader(stream);
	this.size += this.namespace.length+1+
				 this.schema_location.length+1+
				 this.auxiliary_mime_types.length+1;
	stream.writeCString(this.namespace);
	stream.writeCString(this.schema_location);
	stream.writeCString(this.auxiliary_mime_types);
	this.writeFooter(stream);
};

// file:src/writing/samplegroups/samplegroup.js
BoxParser.SampleGroupEntry.prototype.write = function(stream) {
	stream.writeUint8Array(this.data);
};

// file:src/writing/sbgp.js
BoxParser.sbgpBox.prototype.write = function(stream) {
	this.version = 1;	
	this.flags = 0;
	this.size = 12+8*this.entries.length;
	this.writeHeader(stream);
	stream.writeString(this.grouping_type, null, 4);
	stream.writeUint32(this.grouping_type_parameter);
	stream.writeUint32(this.entries.length);
	for (var i = 0; i < this.entries.length; i++) {
		var entry = this.entries[i];
		stream.writeInt32(entry.sample_count);
		stream.writeInt32(entry.group_description_index);
	}
};

// file:src/writing/sgpd.js
BoxParser.sgpdBox.prototype.write = function(stream) {
	var i;
	var entry;
	// leave version as read
	// this.version;
	this.flags = 0;
	this.size = 12;
	for (i = 0; i < this.entries.length; i++) {
		entry = this.entries[i];
		if (this.version === 1) {
			if (this.default_length === 0) {
				this.size += 4;
			}
			this.size += entry.data.length;
		}
	}
	this.writeHeader(stream);
	stream.writeString(this.grouping_type, null, 4);
	if (this.version === 1) {
		stream.writeUint32(this.default_length);
	}
	if (this.version >= 2) {
		stream.writeUint32(this.default_sample_description_index);
	}
	stream.writeUint32(this.entries.length);
	for (i = 0; i < this.entries.length; i++) {
		entry = this.entries[i];
		if (this.version === 1) {
			if (this.default_length === 0) {
				stream.writeUint32(entry.description_length);
			}
		}
		entry.write(stream);
	}
};


// file:src/writing/sidx.js
BoxParser.sidxBox.prototype.write = function(stream) {
	this.version = 0;	
	this.flags = 0;
	this.size = 4*4+2+2+12*this.references.length;
	this.writeHeader(stream);
	stream.writeUint32(this.reference_ID);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.earliest_presentation_time);
	stream.writeUint32(this.first_offset);
	stream.writeUint16(0);
	stream.writeUint16(this.references.length);
	for (var i = 0; i < this.references.length; i++) {
		var ref = this.references[i];
		stream.writeUint32(ref.reference_type << 31 | ref.referenced_size);
		stream.writeUint32(ref.subsegment_duration);
		stream.writeUint32(ref.starts_with_SAP << 31 | ref.SAP_type << 28 | ref.SAP_delta_time);
	}
};

// file:src/writing/stco.js
BoxParser.stcoBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4+4*this.chunk_offsets.length;
	this.writeHeader(stream);
	stream.writeUint32(this.chunk_offsets.length);
	stream.writeUint32Array(this.chunk_offsets);
};

// file:src/writing/stsc.js
BoxParser.stscBox.prototype.write = function(stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4+12*this.first_chunk.length;
	this.writeHeader(stream);
	stream.writeUint32(this.first_chunk.length);
	for(i=0; i<this.first_chunk.length; i++) {
		stream.writeUint32(this.first_chunk[i]);
		stream.writeUint32(this.samples_per_chunk[i]);
		stream.writeUint32(this.sample_description_index[i]);
	}
};

// file:src/writing/stsd.js
BoxParser.stsdBox.prototype.write = function(stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 0;
	this.writeHeader(stream);
	stream.writeUint32(this.entries.length);
	this.size += 4;
	for (i = 0; i < this.entries.length; i++) {
		this.entries[i].write(stream);
		this.size += this.entries[i].size;
	}
	/* adjusting the size, now that all sub-boxes are known */
	Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

// file:src/writing/stsh.js
BoxParser.stshBox.prototype.write = function(stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4+8*this.shadowed_sample_numbers.length;
	this.writeHeader(stream);
	stream.writeUint32(this.shadowed_sample_numbers.length);
	for(i=0; i<this.shadowed_sample_numbers.length; i++) {
		stream.writeUint32(this.shadowed_sample_numbers[i]);
		stream.writeUint32(this.sync_sample_numbers[i]);
	}
};

// file:src/writing/stss.js
BoxParser.stssBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4+4*this.sample_numbers.length;
	this.writeHeader(stream);
	stream.writeUint32(this.sample_numbers.length);
	stream.writeUint32Array(this.sample_numbers);
};

// file:src/writing/stsz.js
BoxParser.stszBox.prototype.write = function(stream) {
	var i;
	var constant = true;
	this.version = 0;
	this.flags = 0;
	if (this.sample_sizes.length > 0) {
		i = 0;
		while (i+1 < this.sample_sizes.length) {
			if (this.sample_sizes[i+1] !==  this.sample_sizes[0]) {
				constant = false;
				break;
			} else {
				i++;
			}
		}
	} else {
		constant = false;
	}
	this.size = 8;
	if (!constant) {
		this.size += 4*this.sample_sizes.length;
	}
	this.writeHeader(stream);
	if (!constant) {
		stream.writeUint32(0);
	} else {
		stream.writeUint32(this.sample_sizes[0]);
	}
	stream.writeUint32(this.sample_sizes.length);
	if (!constant) {
		stream.writeUint32Array(this.sample_sizes);
	}	
};

// file:src/writing/stts.js
BoxParser.sttsBox.prototype.write = function(stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4+8*this.sample_counts.length;
	this.writeHeader(stream);
	stream.writeUint32(this.sample_counts.length);
	for(i=0; i<this.sample_counts.length; i++) {
		stream.writeUint32(this.sample_counts[i]);
		stream.writeUint32(this.sample_deltas[i]);
	}
};

// file:src/writing/tfdt.js
BoxParser.tfdtBox.prototype.write = function(stream) {
	var UINT32_MAX = Math.pow(2, 32) - 1;
	// use version 1 if baseMediaDecodeTime does not fit 32 bits
	this.version = this.baseMediaDecodeTime > UINT32_MAX ? 1 : 0;
	this.flags = 0;
	this.size = 4;
	if (this.version === 1) {
		this.size += 4;
	}
	this.writeHeader(stream);
	if (this.version === 1) {
		stream.writeUint64(this.baseMediaDecodeTime);
	} else {
		stream.writeUint32(this.baseMediaDecodeTime);
	}
};

// file:src/writing/tfhd.js
BoxParser.tfhdBox.prototype.write = function(stream) {
	this.version = 0;
	this.size = 4;
	if (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
		this.size += 8;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
		this.size += 4;
	}
	this.writeHeader(stream);
	stream.writeUint32(this.track_id);
	if (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
		stream.writeUint64(this.base_data_offset);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
		stream.writeUint32(this.default_sample_description_index);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
		stream.writeUint32(this.default_sample_duration);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
		stream.writeUint32(this.default_sample_size);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
		stream.writeUint32(this.default_sample_flags);
	}
};

// file:src/writing/tkhd.js
BoxParser.tkhdBox.prototype.write = function(stream) {
	this.version = 0;
	//this.flags = 0;
	this.size = 4*18+2*4;
	this.writeHeader(stream);
	stream.writeUint32(this.creation_time);
	stream.writeUint32(this.modification_time);
	stream.writeUint32(this.track_id);
	stream.writeUint32(0);
	stream.writeUint32(this.duration);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeInt16(this.layer);
	stream.writeInt16(this.alternate_group);
	stream.writeInt16(this.volume<<8);
	stream.writeUint16(0);
	stream.writeInt32Array(this.matrix);
	stream.writeUint32(this.width);
	stream.writeUint32(this.height);
};

// file:src/writing/trex.js
BoxParser.trexBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4*5;
	this.writeHeader(stream);
	stream.writeUint32(this.track_id);
	stream.writeUint32(this.default_sample_description_index);
	stream.writeUint32(this.default_sample_duration);
	stream.writeUint32(this.default_sample_size);
	stream.writeUint32(this.default_sample_flags);
};

// file:src/writing/trun.js
BoxParser.trunBox.prototype.write = function(stream) {
	this.version = 0;
	this.size = 4;
	if (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
		this.size += 4*this.sample_duration.length;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
		this.size += 4*this.sample_size.length;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
		this.size += 4*this.sample_flags.length;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
		this.size += 4*this.sample_composition_time_offset.length;
	}
	this.writeHeader(stream);
	stream.writeUint32(this.sample_count);
	if (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
		this.data_offset_position = stream.getPosition();
		stream.writeInt32(this.data_offset); //signed
	}
	if (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
		stream.writeUint32(this.first_sample_flags);
	}
	for (var i = 0; i < this.sample_count; i++) {
		if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
			stream.writeUint32(this.sample_duration[i]);
		}
		if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
			stream.writeUint32(this.sample_size[i]);
		}
		if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
			stream.writeUint32(this.sample_flags[i]);
		}
		if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
			if (this.version === 0) {
				stream.writeUint32(this.sample_composition_time_offset[i]);
			} else {
				stream.writeInt32(this.sample_composition_time_offset[i]); //signed
			}
		}
	}		
};

// file:src/writing/url.js
BoxParser["url Box"].prototype.write = function(stream) {
	this.version = 0;	
	if (this.location) {
		this.flags = 0;
		this.size = this.location.length+1;
	} else {
		this.flags = 0x000001;
		this.size = 0;
	}
	this.writeHeader(stream);
	if (this.location) {
		stream.writeCString(this.location);
	}
};

// file:src/writing/urn.js
BoxParser["urn Box"].prototype.write = function(stream) {
	this.version = 0;	
	this.flags = 0;
	this.size = this.name.length+1+(this.location ? this.location.length+1 : 0);
	this.writeHeader(stream);
	stream.writeCString(this.name);
	if (this.location) {
		stream.writeCString(this.location);
	}
};

// file:src/writing/vmhd.js
BoxParser.vmhdBox.prototype.write = function(stream) {
	this.version = 0;
	this.flags = 1;
	this.size = 8;
	this.writeHeader(stream);
	stream.writeUint16(this.graphicsmode);
	stream.writeUint16Array(this.opcolor);
};

// file:src/box-unpack.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.cttsBox.prototype.unpack = function(samples) {
	var i, j, k;
	k = 0;
	for (i = 0; i < this.sample_counts.length; i++) {
		for (j = 0; j < this.sample_counts[i]; j++) {
			samples[k].pts = samples[k].dts + this.sample_offsets[i];
			k++;
		}
	}
};

BoxParser.sttsBox.prototype.unpack = function(samples) {
	var i, j, k;
	k = 0;
	for (i = 0; i < this.sample_counts.length; i++) {
		for (j = 0; j < this.sample_counts[i]; j++) {
			if (k === 0) {
				samples[k].dts = 0;
			} else {
				samples[k].dts = samples[k-1].dts + this.sample_deltas[i];
			}
			k++;
		}
	}
};

BoxParser.stcoBox.prototype.unpack = function(samples) {
	var i;
	for (i = 0; i < this.chunk_offsets.length; i++) {
		samples[i].offset = this.chunk_offsets[i];
	}
};

BoxParser.stscBox.prototype.unpack = function(samples) {
	var i, j, k, l, m;
	l = 0;
	m = 0;
	for (i = 0; i < this.first_chunk.length; i++) {
		for (j = 0; j < (i+1 < this.first_chunk.length ? this.first_chunk[i+1] : Infinity); j++) {
			m++;
			for (k = 0; k < this.samples_per_chunk[i]; k++) {
				if (samples[l]) {
					samples[l].description_index = this.sample_description_index[i];
					samples[l].chunk_index = m;
				} else {
					return;
				}
				l++;
			}			
		}
	}
};

BoxParser.stszBox.prototype.unpack = function(samples) {
	var i;
	for (i = 0; i < this.sample_sizes.length; i++) {
		samples[i].size = this.sample_sizes[i];
	}
};
// file:src/box-diff.js

BoxParser.DIFF_BOXES_PROP_NAMES = [ "boxes", "entries", "references", "subsamples",
					 	 "items", "item_infos", "extents", "associations",
					 	 "subsegments", "ranges", "seekLists", "seekPoints",
					 	 "esd", "levels"];

BoxParser.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [ "compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas",
"first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration" ];

BoxParser.boxEqualFields = function(box_a, box_b) {
	if (box_a && !box_b) return false;
	var prop;
	for (prop in box_a) {
		if (BoxParser.DIFF_BOXES_PROP_NAMES.indexOf(prop) > -1) {
			continue;
		// } else if (excluded_fields && excluded_fields.indexOf(prop) > -1) {
		// 	continue;
		} else if (box_a[prop] instanceof BoxParser.Box || box_b[prop] instanceof BoxParser.Box) {
			continue;
		} else if (typeof box_a[prop] === "undefined" || typeof box_b[prop] === "undefined") {
			continue;
		} else if (typeof box_a[prop] === "function" || typeof box_b[prop] === "function") {
			continue;
		} else if (
			(box_a.subBoxNames && box_a.subBoxNames.indexOf(prop.slice(0,4)) > -1) ||
			(box_b.subBoxNames && box_b.subBoxNames.indexOf(prop.slice(0,4)) > -1))  {
			continue;
		} else {
			if (prop === "data" || prop === "start" || prop === "size" || prop === "creation_time" || prop === "modification_time") {
				continue;
			} else if (BoxParser.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(prop) > -1) {
				continue;
			} else {
				if (box_a[prop] !== box_b[prop]) {
					return false;
				}
			}
		}
	}
	return true;
};

BoxParser.boxEqual = function(box_a, box_b) {
	if (!BoxParser.boxEqualFields(box_a, box_b)) {
		return false;
	}
	for (var j = 0; j < BoxParser.DIFF_BOXES_PROP_NAMES.length; j++) {
		var name = BoxParser.DIFF_BOXES_PROP_NAMES[j];
		if (box_a[name] && box_b[name]) {
			if (!BoxParser.boxEqual(box_a[name], box_b[name])) {
				return false;
			}
		}
	}
	return true;
};// file:src/text-mp4.js

var XMLSubtitlein4Parser = function() {	
};

XMLSubtitlein4Parser.prototype.parseSample = function(sample) {
	var res = {};	
	var i;
	res.resources = [];
	var stream = new MP4BoxStream(sample.data.buffer);
	if (!sample.subsamples || sample.subsamples.length === 0) {
		res.documentString = stream.readString(sample.data.length);
	} else {
		res.documentString = stream.readString(sample.subsamples[0].size);
		if (sample.subsamples.length > 1) {
			for (i = 1; i < sample.subsamples.length; i++) {
				res.resources[i] = stream.readUint8Array(sample.subsamples[i].size);
			}
		}
	}
	if (typeof (DOMParser) !== "undefined") {
		res.document = (new DOMParser()).parseFromString(res.documentString, "application/xml");
	}
	return res;
};

var Textin4Parser = function() {	
};

Textin4Parser.prototype.parseSample = function(sample) {
	var textString;
	var stream = new MP4BoxStream(sample.data.buffer);
	textString = stream.readString(sample.data.length);
	return textString;
};

Textin4Parser.prototype.parseConfig = function(data) {
	var textString;
	var stream = new MP4BoxStream(data.buffer);
	stream.readUint32(); // version & flags
	textString = stream.readCString();
	return textString;
};

{
	exports.XMLSubtitlein4Parser = XMLSubtitlein4Parser;
	exports.Textin4Parser = Textin4Parser;
}
// file:src/isofile.js
/*
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var ISOFile = function (stream) {
	/* MutiBufferStream object used to parse boxes */
	this.stream = stream || new MultiBufferStream();
	/* Array of all boxes (in order) found in the file */
	this.boxes = [];
	/* Array of all mdats */
	this.mdats = [];
	/* Array of all moofs */
	this.moofs = [];
	/* Boolean indicating if the file is compatible with progressive parsing (moov first) */
	this.isProgressive = false;
	/* Boolean used to fire moov start event only once */
	this.moovStartFound = false;
	/* Callback called when the moov parsing starts */
	this.onMoovStart = null;
	/* Boolean keeping track of the call to onMoovStart, to avoid double calls */
	this.moovStartSent = false;
	/* Callback called when the moov is entirely parsed */
	this.onReady = null;
	/* Boolean keeping track of the call to onReady, to avoid double calls */
	this.readySent = false;
	/* Callback to call when segments are ready */
	this.onSegment = null;
	/* Callback to call when samples are ready */
	this.onSamples = null;
	/* Callback to call when there is an error in the parsing or processing of samples */
	this.onError = null;
	/* Boolean indicating if the moov box run-length encoded tables of sample information have been processed */
	this.sampleListBuilt = false;
	/* Array of Track objects for which fragmentation of samples is requested */
	this.fragmentedTracks = [];
	/* Array of Track objects for which extraction of samples is requested */
	this.extractedTracks = [];
	/* Boolean indicating that fragmention is ready */
	this.isFragmentationInitialized = false;
	/* Boolean indicating that fragmented has started */
	this.sampleProcessingStarted = false;
	/* Number of the next 'moof' to generate when fragmenting */
	this.nextMoofNumber = 0;
	/* Boolean indicating if the initial list of items has been produced */
	this.itemListBuilt = false;
	/* Callback called when the sidx box is entirely parsed */
	this.onSidx = null;
	/* Boolean keeping track of the call to onSidx, to avoid double calls */
	this.sidxSent = false;
};

ISOFile.prototype.setSegmentOptions = function(id, user, options) {
	var trak = this.getTrackById(id);
	if (trak) {
		var fragTrack = {};
		this.fragmentedTracks.push(fragTrack);
		fragTrack.id = id;
		fragTrack.user = user;
		fragTrack.trak = trak;
		trak.nextSample = 0;
		fragTrack.segmentStream = null;
		fragTrack.nb_samples = 1000;
		fragTrack.rapAlignement = true;
		if (options) {
			if (options.nbSamples) fragTrack.nb_samples = options.nbSamples;
			if (options.rapAlignement) fragTrack.rapAlignement = options.rapAlignement;
		}
	}
};

ISOFile.prototype.unsetSegmentOptions = function(id) {
	var index = -1;
	for (var i = 0; i < this.fragmentedTracks.length; i++) {
		var fragTrack = this.fragmentedTracks[i];
		if (fragTrack.id == id) {
			index = i;
		}
	}
	if (index > -1) {
		this.fragmentedTracks.splice(index, 1);
	}
};

ISOFile.prototype.setExtractionOptions = function(id, user, options) {
	var trak = this.getTrackById(id);
	if (trak) {
		var extractTrack = {};
		this.extractedTracks.push(extractTrack);
		extractTrack.id = id;
		extractTrack.user = user;
		extractTrack.trak = trak;
		trak.nextSample = 0;
		extractTrack.nb_samples = 1000;
		extractTrack.samples = [];
		if (options) {
			if (options.nbSamples) extractTrack.nb_samples = options.nbSamples;
		}
	}
};

ISOFile.prototype.unsetExtractionOptions = function(id) {
	var index = -1;
	for (var i = 0; i < this.extractedTracks.length; i++) {
		var extractTrack = this.extractedTracks[i];
		if (extractTrack.id == id) {
			index = i;
		}
	}
	if (index > -1) {
		this.extractedTracks.splice(index, 1);
	}
};

ISOFile.prototype.parse = function() {
	var ret;
	var box;
	var parseBoxHeadersOnly = false;

	if (this.restoreParsePosition)	{
		if (!this.restoreParsePosition()) {
			return;
		}
	}

	while (true) {

		if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
			if (this.processIncompleteMdat()) {
				continue;
			} else {
				return;
			}
		} else {
			if (this.saveParsePosition)	{
				this.saveParsePosition();
			}
			ret = BoxParser.parseOneBox(this.stream, parseBoxHeadersOnly);
			if (ret.code === BoxParser.ERR_NOT_ENOUGH_DATA) {
				if (this.processIncompleteBox) {
					if (this.processIncompleteBox(ret)) {
						continue;
					} else {
						return;
					}
				} else {
					return;
				}
			} else {
				var box_type;
				/* the box is entirely parsed */
				box = ret.box;
				box_type = (box.type !== "uuid" ? box.type : box.uuid);
				/* store the box in the 'boxes' array to preserve box order (for file rewrite if needed)  */
				this.boxes.push(box);
				/* but also store box in a property for more direct access */
				switch (box_type) {
					case "mdat":
						this.mdats.push(box);
						break;
					case "moof":
						this.moofs.push(box);
						break;
					case "moov":
						this.moovStartFound = true;
						if (this.mdats.length === 0) {
							this.isProgressive = true;
						}
						/* no break */
						/* falls through */
					default:
						if (this[box_type] !== undefined) {
							Log.warn("ISOFile", "Duplicate Box of type: "+box_type+", overriding previous occurrence");
						}
						this[box_type] = box;
						break;
				}
				if (this.updateUsedBytes) {
					this.updateUsedBytes(box, ret);
				}
			}
		}
	}
};

ISOFile.prototype.checkBuffer = function (ab) {
	if (ab === null || ab === undefined) {
		throw("Buffer must be defined and non empty");
	}
	if (ab.fileStart === undefined) {
		throw("Buffer must have a fileStart property");
	}
	if (ab.byteLength === 0) {
		Log.warn("ISOFile", "Ignoring empty buffer (fileStart: "+ab.fileStart+")");
		this.stream.logBufferLevel();
		return false;
	}
	Log.info("ISOFile", "Processing buffer (fileStart: "+ab.fileStart+")");

	/* mark the bytes in the buffer as not being used yet */
	ab.usedBytes = 0;
	this.stream.insertBuffer(ab);
	this.stream.logBufferLevel();

	if (!this.stream.initialized()) {
		Log.warn("ISOFile", "Not ready to start parsing");
		return false;
	}
	return true;
};

/* Processes a new ArrayBuffer (with a fileStart property)
   Returns the next expected file position, or undefined if not ready to parse */
ISOFile.prototype.appendBuffer = function(ab, last) {
	var nextFileStart;
	if (!this.checkBuffer(ab)) {
		return;
	}

	/* Parse whatever is in the existing buffers */
	this.parse();

	/* Check if the moovStart callback needs to be called */
	if (this.moovStartFound && !this.moovStartSent) {
		this.moovStartSent = true;
		if (this.onMoovStart) this.onMoovStart();
	}

	if (this.moov) {
		/* A moov box has been entirely parsed */

		/* if this is the first call after the moov is found we initialize the list of samples (may be empty in fragmented files) */
		if (!this.sampleListBuilt) {
			this.buildSampleLists();
			this.sampleListBuilt = true;
		}

		/* We update the sample information if there are any new moof boxes */
		this.updateSampleLists();

		/* If the application needs to be informed that the 'moov' has been found,
		   we create the information object and callback the application */
		if (this.onReady && !this.readySent) {
			this.readySent = true;
			this.onReady(this.getInfo());
		}

		/* See if any sample extraction or segment creation needs to be done with the available samples */
		this.processSamples(last);

		/* Inform about the best range to fetch next */
		if (this.nextSeekPosition) {
			nextFileStart = this.nextSeekPosition;
			this.nextSeekPosition = undefined;
		} else {
			nextFileStart = this.nextParsePosition;
		}
		if (this.stream.getEndFilePositionAfter) {
			nextFileStart = this.stream.getEndFilePositionAfter(nextFileStart);
		}
	} else {
		if (this.nextParsePosition) {
			/* moov has not been parsed but the first buffer was received,
			   the next fetch should probably be the next box start */
			nextFileStart = this.nextParsePosition;
		} else {
			/* No valid buffer has been parsed yet, we cannot know what to parse next */
			nextFileStart = 0;
		}
	}
	if (this.sidx) {
		if (this.onSidx && !this.sidxSent) {
			this.onSidx(this.sidx);
			this.sidxSent = true;
		}
	}
	if (this.meta) {
		if (this.flattenItemInfo && !this.itemListBuilt) {
			this.flattenItemInfo();
			this.itemListBuilt = true;
		}
		if (this.processItems) {
			this.processItems(this.onItem);
		}
	}

	if (this.stream.cleanBuffers) {
		Log.info("ISOFile", "Done processing buffer (fileStart: "+ab.fileStart+") - next buffer to fetch should have a fileStart position of "+nextFileStart);
		this.stream.logBufferLevel();
		this.stream.cleanBuffers();
		this.stream.logBufferLevel(true);
		Log.info("ISOFile", "Sample data size in memory: "+this.getAllocatedSampleDataSize());
	}
	return nextFileStart;
};

ISOFile.prototype.getInfo = function() {
	var i, j;
	var movie = {};
	var trak;
	var track;
	var sample_desc;
	var _1904 = (new Date('1904-01-01T00:00:00Z').getTime());

	if (this.moov) {
		movie.hasMoov = true;
		movie.duration = this.moov.mvhd.duration;
		movie.timescale = this.moov.mvhd.timescale;
		movie.isFragmented = (this.moov.mvex != null);
		if (movie.isFragmented && this.moov.mvex.mehd) {
			movie.fragment_duration = this.moov.mvex.mehd.fragment_duration;
		}
		movie.isProgressive = this.isProgressive;
		movie.hasIOD = (this.moov.iods != null);
		movie.brands = [];
		movie.brands.push(this.ftyp.major_brand);
		movie.brands = movie.brands.concat(this.ftyp.compatible_brands);
		movie.created = new Date(_1904+this.moov.mvhd.creation_time*1000);
		movie.modified = new Date(_1904+this.moov.mvhd.modification_time*1000);
		movie.tracks = [];
		movie.audioTracks = [];
		movie.videoTracks = [];
		movie.subtitleTracks = [];
		movie.metadataTracks = [];
		movie.hintTracks = [];
		movie.otherTracks = [];
		for (i = 0; i < this.moov.traks.length; i++) {
			trak = this.moov.traks[i];
			sample_desc = trak.mdia.minf.stbl.stsd.entries[0];
			track = {};
			movie.tracks.push(track);
			track.id = trak.tkhd.track_id;
			track.name = trak.mdia.hdlr.name;
			track.references = [];
			if (trak.tref) {
				for (j = 0; j < trak.tref.boxes.length; j++) {
					ref = {};
					track.references.push(ref);
					ref.type = trak.tref.boxes[j].type;
					ref.track_ids = trak.tref.boxes[j].track_ids;
				}
			}
			if (trak.edts) {
				track.edits = trak.edts.elst.entries;
			}
			track.created = new Date(_1904+trak.tkhd.creation_time*1000);
			track.modified = new Date(_1904+trak.tkhd.modification_time*1000);
			track.movie_duration = trak.tkhd.duration;
			track.movie_timescale = movie.timescale;
			track.layer = trak.tkhd.layer;
			track.alternate_group = trak.tkhd.alternate_group;
			track.volume = trak.tkhd.volume;
			track.matrix = trak.tkhd.matrix;
			track.track_width = trak.tkhd.width/(1<<16);
			track.track_height = trak.tkhd.height/(1<<16);
			track.timescale = trak.mdia.mdhd.timescale;
			track.cts_shift = trak.mdia.minf.stbl.cslg;
			track.duration = trak.mdia.mdhd.duration;
			track.samples_duration = trak.samples_duration;
			track.codec = sample_desc.getCodec();
			track.kind = (trak.udta && trak.udta.kinds.length ? trak.udta.kinds[0] : { schemeURI: "", value: ""});
			track.language = (trak.mdia.elng ? trak.mdia.elng.extended_language : trak.mdia.mdhd.languageString);
			track.nb_samples = trak.samples.length;
			track.size = trak.samples_size;
			track.bitrate = (track.size*8*track.timescale)/track.samples_duration;
			if (sample_desc.isAudio()) {
				track.type = "audio";
				movie.audioTracks.push(track);
				track.audio = {};
				track.audio.sample_rate = sample_desc.getSampleRate();
				track.audio.channel_count = sample_desc.getChannelCount();
				track.audio.sample_size = sample_desc.getSampleSize();
			} else if (sample_desc.isVideo()) {
				track.type = "video";
				movie.videoTracks.push(track);
				track.video = {};
				track.video.width = sample_desc.getWidth();
				track.video.height = sample_desc.getHeight();
			} else if (sample_desc.isSubtitle()) {
				track.type = "subtitles";
				movie.subtitleTracks.push(track);
			} else if (sample_desc.isHint()) {
				track.type = "metadata";
				movie.hintTracks.push(track);
			} else if (sample_desc.isMetadata()) {
				track.type = "metadata";
				movie.metadataTracks.push(track);
			} else {
				track.type = "metadata";
				movie.otherTracks.push(track);
			}
		}
	} else {
		movie.hasMoov = false;
	}
	movie.mime = "";
	if (movie.hasMoov && movie.tracks) {
		if (movie.videoTracks && movie.videoTracks.length > 0) {
			movie.mime += 'video/mp4; codecs=\"';
		} else if (movie.audioTracks && movie.audioTracks.length > 0) {
			movie.mime += 'audio/mp4; codecs=\"';
		} else {
			movie.mime += 'application/mp4; codecs=\"';
		}
		for (i = 0; i < movie.tracks.length; i++) {
			if (i !== 0) movie.mime += ',';
			movie.mime+= movie.tracks[i].codec;
		}
		movie.mime += '\"; profiles=\"';
		movie.mime += this.ftyp.compatible_brands.join();
		movie.mime += '\"';
	}
	return movie;
};

ISOFile.prototype.processSamples = function(last) {
	var i;
	var trak;
	if (!this.sampleProcessingStarted) return;

	/* For each track marked for fragmentation,
	   check if the next sample is there (i.e. if the sample information is known (i.e. moof has arrived) and if it has been downloaded)
	   and create a fragment with it */
	if (this.isFragmentationInitialized && this.onSegment !== null) {
		for (i = 0; i < this.fragmentedTracks.length; i++) {
			var fragTrak = this.fragmentedTracks[i];
			trak = fragTrak.trak;
			while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
				/* The sample information is there (either because the file is not fragmented and this is not the last sample,
				or because the file is fragmented and the moof for that sample has been received */
				Log.debug("ISOFile", "Creating media fragment on track #"+fragTrak.id +" for sample "+trak.nextSample);
				var result = this.createFragment(fragTrak.id, trak.nextSample, fragTrak.segmentStream);
				if (result) {
					fragTrak.segmentStream = result;
					trak.nextSample++;
				} else {
					/* The fragment could not be created because the media data is not there (not downloaded), wait for it */
					break;
				}
				/* A fragment is created by sample, but the segment is the accumulation in the buffer of these fragments.
				   It is flushed only as requested by the application (nb_samples) to avoid too many callbacks */
				if (trak.nextSample % fragTrak.nb_samples === 0 || (last || trak.nextSample >= trak.samples.length)) {
					Log.info("ISOFile", "Sending fragmented data on track #"+fragTrak.id+" for samples ["+Math.max(0,trak.nextSample-fragTrak.nb_samples)+","+(trak.nextSample-1)+"]");
					Log.info("ISOFile", "Sample data size in memory: "+this.getAllocatedSampleDataSize());
					if (this.onSegment) {
						this.onSegment(fragTrak.id, fragTrak.user, fragTrak.segmentStream.buffer, trak.nextSample, (last || trak.nextSample >= trak.samples.length));
					}
					/* force the creation of a new buffer */
					fragTrak.segmentStream = null;
					if (fragTrak !== this.fragmentedTracks[i]) {
						/* make sure we can stop fragmentation if needed */
						break;
					}
				}
			}
		}
	}

	if (this.onSamples !== null) {
		/* For each track marked for data export,
		   check if the next sample is there (i.e. has been downloaded) and send it */
		for (i = 0; i < this.extractedTracks.length; i++) {
			var extractTrak = this.extractedTracks[i];
			trak = extractTrak.trak;
			while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
				Log.debug("ISOFile", "Exporting on track #"+extractTrak.id +" sample #"+trak.nextSample);
				var sample = this.getSample(trak, trak.nextSample);
				if (sample) {
					trak.nextSample++;
					extractTrak.samples.push(sample);
				} else {
					break;
				}
				if (trak.nextSample % extractTrak.nb_samples === 0 || trak.nextSample >= trak.samples.length) {
					Log.debug("ISOFile", "Sending samples on track #"+extractTrak.id+" for sample "+trak.nextSample);
					if (this.onSamples) {
						this.onSamples(extractTrak.id, extractTrak.user, extractTrak.samples);
					}
					extractTrak.samples = [];
					if (extractTrak !== this.extractedTracks[i]) {
						/* check if the extraction needs to be stopped */
						break;
					}
				}
			}
		}
	}
};

/* Find and return specific boxes using recursion and early return */
ISOFile.prototype.getBox = function(type) {
  var result = this.getBoxes(type, true);
  return (result.length ? result[0] : null);
};

ISOFile.prototype.getBoxes = function(type, returnEarly) {
  var result = [];
  ISOFile._sweep.call(this, type, result, returnEarly);
  return result;
};

ISOFile._sweep = function(type, result, returnEarly) {
  if (this.type && this.type == type) result.push(this);
  for (var box in this.boxes) {
    if (result.length && returnEarly) return;
    ISOFile._sweep.call(this.boxes[box], type, result, returnEarly);
  }
};

ISOFile.prototype.getTrackSamplesInfo = function(track_id) {
	var track = this.getTrackById(track_id);
	if (track) {
		return track.samples;
	} else {
		return;
	}
};

ISOFile.prototype.getTrackSample = function(track_id, number) {
	var track = this.getTrackById(track_id);
	var sample = this.getSample(track, number);
	return sample;
};

/* Called by the application to release the resources associated to samples already forwarded to the application */
ISOFile.prototype.releaseUsedSamples = function (id, sampleNum) {
	var size = 0;
	var trak = this.getTrackById(id);
	if (!trak.lastValidSample) trak.lastValidSample = 0;
	for (var i = trak.lastValidSample; i < sampleNum; i++) {
		size+=this.releaseSample(trak, i);
	}
	Log.info("ISOFile", "Track #"+id+" released samples up to "+sampleNum+" (released size: "+size+", remaining: "+this.samplesDataSize+")");
	trak.lastValidSample = sampleNum;
};

ISOFile.prototype.start = function() {
	this.sampleProcessingStarted = true;
	this.processSamples(false);
};

ISOFile.prototype.stop = function() {
	this.sampleProcessingStarted = false;
};

/* Called by the application to flush the remaining samples (e.g. once the download is finished or when no more samples will be added) */
ISOFile.prototype.flush = function() {
	Log.info("ISOFile", "Flushing remaining samples");
	this.updateSampleLists();
	this.processSamples(true);
	this.stream.cleanBuffers();
	this.stream.logBufferLevel(true);
};

/* Finds the byte offset for a given time on a given track
   also returns the time of the previous rap */
ISOFile.prototype.seekTrack = function(time, useRap, trak) {
	var j;
	var sample;
	var seek_offset = Infinity;
	var rap_seek_sample_num = 0;
	var seek_sample_num = 0;
	var timescale;

	if (trak.samples.length === 0) {
		Log.info("ISOFile", "No sample in track, cannot seek! Using time "+Log.getDurationString(0, 1) +" and offset: "+0);
		return { offset: 0, time: 0 };
	}

	for (j = 0; j < trak.samples.length; j++) {
		sample = trak.samples[j];
		if (j === 0) {
			seek_sample_num = 0;
			timescale = sample.timescale;
		} else if (sample.cts > time * sample.timescale) {
			seek_sample_num = j-1;
			break;
		}
		if (useRap && sample.is_sync) {
			rap_seek_sample_num = j;
		}
	}
	if (useRap) {
		seek_sample_num = rap_seek_sample_num;
	}
	time = trak.samples[seek_sample_num].cts;
	trak.nextSample = seek_sample_num;
	while (trak.samples[seek_sample_num].alreadyRead === trak.samples[seek_sample_num].size) {
		// No remaining samples to look for, all are downloaded.
		if (!trak.samples[seek_sample_num + 1]) {
			break;
		}
		seek_sample_num++;
	}
	seek_offset = trak.samples[seek_sample_num].offset+trak.samples[seek_sample_num].alreadyRead;
	Log.info("ISOFile", "Seeking to "+(useRap ? "RAP": "")+" sample #"+trak.nextSample+" on track "+trak.tkhd.track_id+", time "+Log.getDurationString(time, timescale) +" and offset: "+seek_offset);
	return { offset: seek_offset, time: time/timescale };
};

/* Finds the byte offset in the file corresponding to the given time or to the time of the previous RAP */
ISOFile.prototype.seek = function(time, useRap) {
	var moov = this.moov;
	var trak;
	var trak_seek_info;
	var i;
	var seek_info = { offset: Infinity, time: Infinity };
	if (!this.moov) {
		throw "Cannot seek: moov not received!";
	} else {
		for (i = 0; i<moov.traks.length; i++) {
			trak = moov.traks[i];
			trak_seek_info = this.seekTrack(time, useRap, trak);
			if (trak_seek_info.offset < seek_info.offset) {
				seek_info.offset = trak_seek_info.offset;
			}
			if (trak_seek_info.time < seek_info.time) {
				seek_info.time = trak_seek_info.time;
			}
		}
		Log.info("ISOFile", "Seeking at time "+Log.getDurationString(seek_info.time, 1)+" needs a buffer with a fileStart position of "+seek_info.offset);
		if (seek_info.offset === Infinity) {
			/* No sample info, in all tracks, cannot seek */
			seek_info = { offset: this.nextParsePosition, time: 0 };
		} else {
			/* check if the seek position is already in some buffer and
			 in that case return the end of that buffer (or of the last contiguous buffer) */
			/* TODO: Should wait until append operations are done */
			seek_info.offset = this.stream.getEndFilePositionAfter(seek_info.offset);
		}
		Log.info("ISOFile", "Adjusted seek position (after checking data already in buffer): "+seek_info.offset);
		return seek_info;
	}
};

ISOFile.prototype.equal = function(b) {
	var box_index = 0;
	while (box_index < this.boxes.length && box_index < b.boxes.length) {
		var a_box = this.boxes[box_index];
		var b_box = b.boxes[box_index];
		if (!BoxParser.boxEqual(a_box, b_box)) {
			return false;
		}
		box_index++;
	}
	return true;
};

{
	exports.ISOFile = ISOFile;
}
// file:src/isofile-advanced-parsing.js
/* position in the current buffer of the beginning of the last box parsed */
ISOFile.prototype.lastBoxStartPosition = 0;
/* indicator if the parsing is stuck in the middle of an mdat box */
ISOFile.prototype.parsingMdat = null;
/* next file position that the parser needs:
    - 0 until the first buffer (i.e. fileStart ===0) has been received 
    - otherwise, the next box start until the moov box has been parsed
    - otherwise, the position of the next sample to fetch
 */
ISOFile.prototype.nextParsePosition = 0;
/* keep mdat data */
ISOFile.prototype.discardMdatData = false;

ISOFile.prototype.processIncompleteBox = function(ret) {
	var box;
	var merged;
	var found;
	
	/* we did not have enough bytes in the current buffer to parse the entire box */
	if (ret.type === "mdat") { 
		/* we had enough bytes to get its type and size and it's an 'mdat' */
		
		/* special handling for mdat boxes, since we don't actually need to parse it linearly 
		   we create the box */
		box = new BoxParser[ret.type+"Box"](ret.size);	
		this.parsingMdat = box;
		this.boxes.push(box);
		this.mdats.push(box);			
		box.start = ret.start;
		box.hdr_size = ret.hdr_size;
		this.stream.addUsedBytes(box.hdr_size);

		/* indicate that the parsing should start from the end of the box */
		this.lastBoxStartPosition = box.start + box.size;
 		/* let's see if we have the end of the box in the other buffers */
		found = this.stream.seek(box.start + box.size, false, this.discardMdatData);
		if (found) {
			/* found the end of the box */
			this.parsingMdat = null;
			/* let's see if we can parse more in this buffer */
			return true;
		} else {
			/* 'mdat' end not found in the existing buffers */
			/* determine the next position in the file to start parsing from */
			if (!this.moovStartFound) {
				/* moov not find yet, 
				   the file probably has 'mdat' at the beginning, and 'moov' at the end, 
				   indicate that the downloader should not try to download those bytes now */
				this.nextParsePosition = box.start + box.size;
			} else {
				/* we have the start of the moov box, 
				   the next bytes should try to complete the current 'mdat' */
				this.nextParsePosition = this.stream.findEndContiguousBuf();
			}
			/* not much we can do, wait for more buffers to arrive */
			return false;
		}
	} else {
		/* box is incomplete, we may not even know its type */
		if (ret.type === "moov") { 
			/* the incomplete box is a 'moov' box */
			this.moovStartFound = true;
			if (this.mdats.length === 0) {
				this.isProgressive = true;
			}
		}
		/* either it's not an mdat box (and we need to parse it, we cannot skip it)
		   (TODO: we could skip 'free' boxes ...)
			   or we did not have enough data to parse the type and size of the box, 
		   we try to concatenate the current buffer with the next buffer to restart parsing */
		merged = (this.stream.mergeNextBuffer ? this.stream.mergeNextBuffer() : false);
		if (merged) {
			/* The next buffer was contiguous, the merging succeeded,
			   we can now continue parsing, 
			   the next best position to parse is at the end of this new buffer */
			this.nextParsePosition = this.stream.getEndPosition();
			return true;
		} else {
			/* we cannot concatenate existing buffers because they are not contiguous or because there is no additional buffer */
			/* The next best position to parse is still at the end of this old buffer */
			if (!ret.type) {
				/* There were not enough bytes in the buffer to parse the box type and length,
				   the next fetch should retrieve those missing bytes, i.e. the next bytes after this buffer */
				this.nextParsePosition = this.stream.getEndPosition();
			} else {
				/* we had enough bytes to parse size and type of the incomplete box
				   if we haven't found yet the moov box, skip this one and try the next one 
				   if we have found the moov box, let's continue linear parsing */
				if (this.moovStartFound) {
					this.nextParsePosition = this.stream.getEndPosition();
				} else {
					this.nextParsePosition = this.stream.getPosition() + ret.size;
				}
			}
			return false;
		}
	}
};

ISOFile.prototype.hasIncompleteMdat = function () {
	return (this.parsingMdat !== null);
};

ISOFile.prototype.processIncompleteMdat = function () {
	var box;
	var found;
	
	/* we are in the parsing of an incomplete mdat box */
	box = this.parsingMdat;

	found = this.stream.seek(box.start + box.size, false, this.discardMdatData);
	if (found) {
		Log.debug("ISOFile", "Found 'mdat' end in buffered data");
		/* the end of the mdat has been found */ 
		this.parsingMdat = null;
		/* we can parse more in this buffer */
		return true;
	} else {
		/* we don't have the end of this mdat yet, 
		   indicate that the next byte to fetch is the end of the buffers we have so far, 
		   return and wait for more buffer to come */
		this.nextParsePosition = this.stream.findEndContiguousBuf();
		return false;
	}
};

ISOFile.prototype.restoreParsePosition = function() {
	/* Reposition at the start position of the previous box not entirely parsed */
	return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
};

ISOFile.prototype.saveParsePosition = function() {
	/* remember the position of the box start in case we need to roll back (if the box is incomplete) */
	this.lastBoxStartPosition = this.stream.getPosition();	
};

ISOFile.prototype.updateUsedBytes = function(box, ret) {
	if (this.stream.addUsedBytes) {
		if (box.type === "mdat") {
			/* for an mdat box, only its header is considered used, other bytes will be used when sample data is requested */
			this.stream.addUsedBytes(box.hdr_size);
			if (this.discardMdatData) {
				this.stream.addUsedBytes(box.size-box.hdr_size);
			}
		} else {
			/* for all other boxes, the entire box data is considered used */
			this.stream.addUsedBytes(box.size);
		}	
	}
};
// file:src/isofile-advanced-creation.js
ISOFile.prototype.add = BoxParser.Box.prototype.add;
ISOFile.prototype.addBox = BoxParser.Box.prototype.addBox;

ISOFile.prototype.init = function (_options) {
	var options = _options || {}; 
	this.add("ftyp").set("major_brand", (options.brands && options.brands[0]) || "iso4")
							   .set("minor_version", 0)
							   .set("compatible_brands", options.brands || ["iso4"]);
	var moov = this.add("moov");
	moov.add("mvhd").set("timescale", options.timescale || 600)
					.set("rate", options.rate || 1<<16)
					.set("creation_time", 0)
					.set("modification_time", 0)
					.set("duration", options.duration || 0)
					.set("volume", (options.width) ? 0 : 0x0100)
					.set("matrix", [ 1<<16, 0, 0, 0, 1<<16, 0, 0, 0, 0x40000000])
					.set("next_track_id", 1);
	moov.add("mvex");
	return this;
};

ISOFile.prototype.addTrack = function (_options) {
	if (!this.moov) {
		this.init(_options);
	}

	var options = _options || {}; 
	options.width = options.width || 320;
	options.height = options.height || 320;
	options.id = options.id || this.moov.mvhd.next_track_id;
	options.type = options.type || "avc1";

	var trak = this.moov.add("trak");
	this.moov.mvhd.next_track_id = options.id+1;
	trak.add("tkhd").set("flags",BoxParser.TKHD_FLAG_ENABLED | 
								 BoxParser.TKHD_FLAG_IN_MOVIE | 
								 BoxParser.TKHD_FLAG_IN_PREVIEW)
					.set("creation_time",0)
					.set("modification_time", 0)
					.set("track_id", options.id)
					.set("duration", options.duration || 0)
					.set("layer", options.layer || 0)
					.set("alternate_group", 0)
					.set("volume", 1)
					.set("matrix", [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ])
					.set("width", options.width)
					.set("height", options.height);

	var mdia = trak.add("mdia");
	mdia.add("mdhd").set("creation_time", 0)
					.set("modification_time", 0)
					.set("timescale", options.timescale || 1)
					.set("duration", options.media_duration || 0)
					.set("language", options.language || "und");

	mdia.add("hdlr").set("handler", options.hdlr || "vide")
					.set("name", options.name || "Track created with MP4Box.js");

	mdia.add("elng").set("extended_language", options.language || "fr-FR");

	var minf = mdia.add("minf");
	if (BoxParser[options.type+"SampleEntry"] === undefined) return;
	var sample_description_entry = new BoxParser[options.type+"SampleEntry"]();
	sample_description_entry.data_reference_index = 1;
	var media_type = "";
	for (var mediaType in BoxParser.sampleEntryCodes) {
		var codes = BoxParser.sampleEntryCodes[mediaType];
		for (var i = 0; i < codes.length; i++) {
			if (codes.indexOf(options.type) > -1) {
				media_type = mediaType;
				break;
			}
		}
	}
	switch(media_type) {
		case "Visual":
			minf.add("vmhd").set("graphicsmode",0).set("opcolor", [ 0, 0, 0 ]);
			sample_description_entry.set("width", options.width)
						.set("height", options.height)
						.set("horizresolution", 0x48<<16)
						.set("vertresolution", 0x48<<16)
						.set("frame_count", 1)
						.set("compressorname", options.type+" Compressor")
						.set("depth", 0x18);
			if (options.avcDecoderConfigRecord) {
				var avcC = new BoxParser.avcCBox();
				var stream = new MP4BoxStream(options.avcDecoderConfigRecord);
				avcC.parse(stream);
				sample_description_entry.addBox(avcC);
			}
			break;
		case "Audio":
			minf.add("smhd").set("balance", options.balance || 0);
			sample_description_entry.set("channel_count", options.channel_count || 2)
						.set("samplesize", options.samplesize || 16)
						.set("samplerate", options.samplerate || 1<<16);
			break;
		case "Hint":
			minf.add("hmhd"); // TODO: add properties
			break;
		case "Subtitle":
			minf.add("sthd");
			switch (options.type) {
				case "stpp":
					sample_description_entry.set("namespace", options.namespace || "nonamespace")
								.set("schema_location", options.schema_location || "")
								.set("auxiliary_mime_types", options.auxiliary_mime_types || "");
					break;
			}
			break;
		case "Metadata":
			minf.add("nmhd");
			break;
		case "System":
			minf.add("nmhd");
			break;
		default:
			minf.add("nmhd");
			break;
	}
	if (options.description) {
		sample_description_entry.addBox(options.description);
	}
	if (options.description_boxes) {
		options.description_boxes.forEach(function (b) {
			sample_description_entry.addBox(b);
		});
	}
	minf.add("dinf").add("dref").addEntry((new BoxParser["url Box"]()).set("flags", 0x1));
	var stbl = minf.add("stbl");
	stbl.add("stsd").addEntry(sample_description_entry);
	stbl.add("stts").set("sample_counts", [])
					.set("sample_deltas", []);
	stbl.add("stsc").set("first_chunk", [])
					.set("samples_per_chunk", [])
					.set("sample_description_index", []);
	stbl.add("stco").set("chunk_offsets", []);
	stbl.add("stsz").set("sample_sizes", []);

	this.moov.mvex.add("trex").set("track_id", options.id)
							  .set("default_sample_description_index", options.default_sample_description_index || 1)
							  .set("default_sample_duration", options.default_sample_duration || 0)
							  .set("default_sample_size", options.default_sample_size || 0)
							  .set("default_sample_flags", options.default_sample_flags || 0);
	this.buildTrakSampleLists(trak);
	return options.id;
};

BoxParser.Box.prototype.computeSize = function(stream_) {
	var stream = stream_ || new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	this.write(stream);
};

ISOFile.prototype.addSample = function (track_id, data, _options) {
	var options = _options || {};
	var sample = {};
	var trak = this.getTrackById(track_id);
	if (trak === null) return;
    sample.number = trak.samples.length;
	sample.track_id = trak.tkhd.track_id;
	sample.timescale = trak.mdia.mdhd.timescale;
	sample.description_index = (options.sample_description_index ? options.sample_description_index - 1: 0);
	sample.description = trak.mdia.minf.stbl.stsd.entries[sample.description_index];
	sample.data = data;
	sample.size = data.byteLength;
	sample.alreadyRead = sample.size;
	sample.duration = options.duration || 1;
	sample.cts = options.cts || 0;
	sample.dts = options.dts || 0;
	sample.is_sync = options.is_sync || false;
	sample.is_leading = options.is_leading || 0;
	sample.depends_on = options.depends_on || 0;
	sample.is_depended_on = options.is_depended_on || 0;
	sample.has_redundancy = options.has_redundancy || 0;
	sample.degradation_priority = options.degradation_priority || 0;
	sample.offset = 0;
	sample.subsamples = options.subsamples;
	trak.samples.push(sample);
	trak.samples_size += sample.size;
	trak.samples_duration += sample.duration;
	if (!trak.first_dts) {
		trak.first_dts = options.dts;
	}

	this.processSamples();
	
	var moof = this.createSingleSampleMoof(sample);
	this.addBox(moof);
	moof.computeSize();
	/* adjusting the data_offset now that the moof size is known*/
	moof.trafs[0].truns[0].data_offset = moof.size+8; //8 is mdat header
	this.add("mdat").data = new Uint8Array(data);
	return sample;
};

ISOFile.prototype.createSingleSampleMoof = function(sample) {
	var sample_flags = 0;
	if (sample.is_sync)
		sample_flags = (1 << 25);  // sample_depends_on_none (I picture)
	else
		sample_flags = (1 << 16);  // non-sync

	var moof = new BoxParser.moofBox();
	moof.add("mfhd").set("sequence_number", this.nextMoofNumber);
	this.nextMoofNumber++;
	var traf = moof.add("traf");
	var trak = this.getTrackById(sample.track_id);
	traf.add("tfhd").set("track_id", sample.track_id)
					.set("flags", BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
	traf.add("tfdt").set("baseMediaDecodeTime", (sample.dts - trak.first_dts));
	traf.add("trun").set("flags", BoxParser.TRUN_FLAGS_DATA_OFFSET | BoxParser.TRUN_FLAGS_DURATION | 
				 				  BoxParser.TRUN_FLAGS_SIZE | BoxParser.TRUN_FLAGS_FLAGS | 
				 				  BoxParser.TRUN_FLAGS_CTS_OFFSET)
					.set("data_offset",0)
					.set("first_sample_flags",0)
					.set("sample_count",1)
					.set("sample_duration",[sample.duration])
					.set("sample_size",[sample.size])
					.set("sample_flags",[sample_flags])
					.set("sample_composition_time_offset", [sample.cts - sample.dts]);
	return moof;
};

// file:src/isofile-sample-processing.js
/* Index of the last moof box received */
ISOFile.prototype.lastMoofIndex = 0;

/* size of the buffers allocated for samples */
ISOFile.prototype.samplesDataSize = 0;

/* Resets all sample tables */
ISOFile.prototype.resetTables = function () {
	var i;
	var trak, stco, stsc, stsz, stts, ctts, stss;
	this.initial_duration = this.moov.mvhd.duration;
	this.moov.mvhd.duration = 0;
	for (i = 0; i < this.moov.traks.length; i++) {
		trak = this.moov.traks[i];
		trak.tkhd.duration = 0;
		trak.mdia.mdhd.duration = 0;
		stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
		stco.chunk_offsets = [];
		stsc = trak.mdia.minf.stbl.stsc;
		stsc.first_chunk = [];
		stsc.samples_per_chunk = [];
		stsc.sample_description_index = [];
		stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
		stsz.sample_sizes = [];
		stts = trak.mdia.minf.stbl.stts;
		stts.sample_counts = [];
		stts.sample_deltas = [];
		ctts = trak.mdia.minf.stbl.ctts;
		if (ctts) {
			ctts.sample_counts = [];
			ctts.sample_offsets = [];
		}
		stss = trak.mdia.minf.stbl.stss;
		var k = trak.mdia.minf.stbl.boxes.indexOf(stss);
		if (k != -1) trak.mdia.minf.stbl.boxes[k] = null;
	}
};

ISOFile.initSampleGroups = function(trak, traf, sbgps, trak_sgpds, traf_sgpds) {
	var l;
	var k;
	var sample_group_info;
	var sample_group_key;
	function SampleGroupInfo(_type, _parameter, _sbgp) {
		this.grouping_type = _type;
		this.grouping_type_parameter = _parameter;
		this.sbgp = _sbgp;
		this.last_sample_in_run = -1;
		this.entry_index = -1;		
	}
	if (traf) {
		traf.sample_groups_info = [];
	} 
	if (!trak.sample_groups_info) {
		trak.sample_groups_info = [];
	}
	for (k = 0; k < sbgps.length; k++) {
		sample_group_key = sbgps[k].grouping_type +"/"+ sbgps[k].grouping_type_parameter;
		sample_group_info = new SampleGroupInfo(sbgps[k].grouping_type, sbgps[k].grouping_type_parameter, sbgps[k]);
		if (traf) {
			traf.sample_groups_info[sample_group_key] = sample_group_info;
		}
		if (!trak.sample_groups_info[sample_group_key]) {
			trak.sample_groups_info[sample_group_key] = sample_group_info;
		}
		for (l=0; l <trak_sgpds.length; l++) {
			if (trak_sgpds[l].grouping_type === sbgps[k].grouping_type) {
				sample_group_info.description = trak_sgpds[l];
				sample_group_info.description.used = true;
			}
		}
		if (traf_sgpds) {
			for (l=0; l <traf_sgpds.length; l++) {
				if (traf_sgpds[l].grouping_type === sbgps[k].grouping_type) {
					sample_group_info.fragment_description = traf_sgpds[l];
					sample_group_info.fragment_description.used = true;
					sample_group_info.is_fragment = true;
				}
			}			
		}
	}
	if (!traf) {
		for (k = 0; k < trak_sgpds.length; k++) {
			if (!trak_sgpds[k].used && trak_sgpds[k].version >= 2) {
				sample_group_key = trak_sgpds[k].grouping_type +"/0";
				sample_group_info = new SampleGroupInfo(trak_sgpds[k].grouping_type, 0);
				if (!trak.sample_groups_info[sample_group_key]) {
					trak.sample_groups_info[sample_group_key] = sample_group_info;
				}
			}
		}
	} else {
		if (traf_sgpds) {
			for (k = 0; k < traf_sgpds.length; k++) {
				if (!traf_sgpds[k].used && traf_sgpds[k].version >= 2) {
					sample_group_key = traf_sgpds[k].grouping_type +"/0";
					sample_group_info = new SampleGroupInfo(traf_sgpds[k].grouping_type, 0);
					sample_group_info.is_fragment = true;
					if (!traf.sample_groups_info[sample_group_key]) {
						traf.sample_groups_info[sample_group_key] = sample_group_info;
					}
				}
			}
		}
	}
};

ISOFile.setSampleGroupProperties = function(trak, sample, sample_number, sample_groups_info) {
	var k;
	var index;
	sample.sample_groups = [];
	for (k in sample_groups_info) {
		sample.sample_groups[k] = {};
		sample.sample_groups[k].grouping_type = sample_groups_info[k].grouping_type;
		sample.sample_groups[k].grouping_type_parameter = sample_groups_info[k].grouping_type_parameter;
		if (sample_number >= sample_groups_info[k].last_sample_in_run) {
			if (sample_groups_info[k].last_sample_in_run < 0) {
				sample_groups_info[k].last_sample_in_run = 0;
			}
			sample_groups_info[k].entry_index++;	
			if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) {
				sample_groups_info[k].last_sample_in_run += sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].sample_count;
			}
		}
		if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) {
			sample.sample_groups[k].group_description_index = sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].group_description_index;
		} else {
			sample.sample_groups[k].group_description_index = -1; // special value for not defined
		}
		if (sample.sample_groups[k].group_description_index !== 0) {
			var description;
			if (sample_groups_info[k].fragment_description) {
				description = sample_groups_info[k].fragment_description;
			} else {
				description = sample_groups_info[k].description;
			}
			if (sample.sample_groups[k].group_description_index > 0) {
				if (sample.sample_groups[k].group_description_index > 65535) {
					index = (sample.sample_groups[k].group_description_index >> 16)-1;
				} else {
					index = sample.sample_groups[k].group_description_index-1;
				}
				if (description && index >= 0) {
					sample.sample_groups[k].description = description.entries[index];
				}
			} else {
				if (description && description.version >= 2) {
					if (description.default_group_description_index > 0) {								
						sample.sample_groups[k].description = description.entries[description.default_group_description_index-1];
					}
				}
			}
		}
	}
};

ISOFile.process_sdtp = function (sdtp, sample, number) {
	if (!sample) {
		return;
	}
	if (sdtp) {
		sample.is_leading = sdtp.is_leading[number];
		sample.depends_on = sdtp.sample_depends_on[number];
		sample.is_depended_on = sdtp.sample_is_depended_on[number];
		sample.has_redundancy = sdtp.sample_has_redundancy[number];
	} else {
		sample.is_leading = 0;
		sample.depends_on = 0;
		sample.is_depended_on = 0;
		sample.has_redundancy = 0;
	}	
};

/* Build initial sample list from  sample tables */
ISOFile.prototype.buildSampleLists = function() {	
	var i;
	var trak;
	for (i = 0; i < this.moov.traks.length; i++) {
		trak = this.moov.traks[i];
		this.buildTrakSampleLists(trak);
	}
};

ISOFile.prototype.buildTrakSampleLists = function(trak) {	
	var j;
	var stco, stsc, stsz, stts, ctts, stss, stsd, subs, sbgps, sgpds, stdp;
	var chunk_run_index, chunk_index, last_chunk_in_run, offset_in_chunk, last_sample_in_chunk;
	var last_sample_in_stts_run, stts_run_index, last_sample_in_ctts_run, ctts_run_index, last_stss_index, subs_entry_index, last_subs_sample_index;

	trak.samples = [];
	trak.samples_duration = 0;
	trak.samples_size = 0;
	stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
	stsc = trak.mdia.minf.stbl.stsc;
	stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
	stts = trak.mdia.minf.stbl.stts;
	ctts = trak.mdia.minf.stbl.ctts;
	stss = trak.mdia.minf.stbl.stss;
	stsd = trak.mdia.minf.stbl.stsd;
	subs = trak.mdia.minf.stbl.subs;
	stdp = trak.mdia.minf.stbl.stdp;
	sbgps = trak.mdia.minf.stbl.sbgps;
	sgpds = trak.mdia.minf.stbl.sgpds;
	
	last_sample_in_stts_run = -1;
	stts_run_index = -1;
	last_sample_in_ctts_run = -1;
	ctts_run_index = -1;
	last_stss_index = 0;
	subs_entry_index = 0;
	last_subs_sample_index = 0;		

	ISOFile.initSampleGroups(trak, null, sbgps, sgpds);

	if (typeof stsz === "undefined") {
		return;
	}

	/* we build the samples one by one and compute their properties */
	for (j = 0; j < stsz.sample_sizes.length; j++) {
		var sample = {};
		sample.number = j;
		sample.track_id = trak.tkhd.track_id;
		sample.timescale = trak.mdia.mdhd.timescale;
		sample.alreadyRead = 0;
		trak.samples[j] = sample;
		/* size can be known directly */
		sample.size = stsz.sample_sizes[j];
		trak.samples_size += sample.size;
		/* computing chunk-based properties (offset, sample description index)*/
		if (j === 0) {				
			chunk_index = 1; /* the first sample is in the first chunk (chunk indexes are 1-based) */
			chunk_run_index = 0; /* the first chunk is the first entry in the first_chunk table */
			sample.chunk_index = chunk_index;
			sample.chunk_run_index = chunk_run_index;
			last_sample_in_chunk = stsc.samples_per_chunk[chunk_run_index];
			offset_in_chunk = 0;

			/* Is there another entry in the first_chunk table ? */
			if (chunk_run_index + 1 < stsc.first_chunk.length) {
				/* The last chunk in the run is the chunk before the next first chunk */
				last_chunk_in_run = stsc.first_chunk[chunk_run_index+1]-1; 	
			} else {
				/* There is only one entry in the table, it is valid for all future chunks*/
				last_chunk_in_run = Infinity;
			}
		} else {
			if (j < last_sample_in_chunk) {
				/* the sample is still in the current chunk */
				sample.chunk_index = chunk_index;
				sample.chunk_run_index = chunk_run_index;
			} else {
				/* the sample is in the next chunk */
				chunk_index++;
				sample.chunk_index = chunk_index;
				/* reset the accumulated offset in the chunk */
				offset_in_chunk = 0;
				if (chunk_index <= last_chunk_in_run) ; else {
					chunk_run_index++;
					/* Is there another entry in the first_chunk table ? */
					if (chunk_run_index + 1 < stsc.first_chunk.length) {
						/* The last chunk in the run is the chunk before the next first chunk */
						last_chunk_in_run = stsc.first_chunk[chunk_run_index+1]-1; 	
					} else {
						/* There is only one entry in the table, it is valid for all future chunks*/
						last_chunk_in_run = Infinity;
					}
					
				}
				sample.chunk_run_index = chunk_run_index;
				last_sample_in_chunk += stsc.samples_per_chunk[chunk_run_index];
			}
		}

		sample.description_index = stsc.sample_description_index[sample.chunk_run_index]-1;
		sample.description = stsd.entries[sample.description_index];
		sample.offset = stco.chunk_offsets[sample.chunk_index-1] + offset_in_chunk; /* chunk indexes are 1-based */
		offset_in_chunk += sample.size;

		/* setting dts, cts, duration and rap flags */
		if (j > last_sample_in_stts_run) {
			stts_run_index++;
			if (last_sample_in_stts_run < 0) {
				last_sample_in_stts_run = 0;
			}
			last_sample_in_stts_run += stts.sample_counts[stts_run_index];				
		}
		if (j > 0) {
			trak.samples[j-1].duration = stts.sample_deltas[stts_run_index];
			trak.samples_duration += trak.samples[j-1].duration;
			sample.dts = trak.samples[j-1].dts + trak.samples[j-1].duration;
		} else {
			sample.dts = 0;
		}
		if (ctts) {
			if (j >= last_sample_in_ctts_run) {
				ctts_run_index++;
				if (last_sample_in_ctts_run < 0) {
					last_sample_in_ctts_run = 0;
				}
				last_sample_in_ctts_run += ctts.sample_counts[ctts_run_index];				
			}
			sample.cts = trak.samples[j].dts + ctts.sample_offsets[ctts_run_index];
		} else {
			sample.cts = sample.dts;
		}
		if (stss) {
			if (j == stss.sample_numbers[last_stss_index] - 1) { // sample numbers are 1-based
				sample.is_sync = true;
				last_stss_index++;
			} else {
				sample.is_sync = false;				
				sample.degradation_priority = 0;
			}
			if (subs) {
				if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index == j+1) {
					sample.subsamples = subs.entries[subs_entry_index].subsamples;
					last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
					subs_entry_index++;
				}
			}
		} else {
			sample.is_sync = true;
		}
		ISOFile.process_sdtp(trak.mdia.minf.stbl.sdtp, sample, sample.number);
		if (stdp) {
			sample.degradation_priority = stdp.priority[j];
		} else {
			sample.degradation_priority = 0;
		}
		if (subs) {
			if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index == j) {
				sample.subsamples = subs.entries[subs_entry_index].subsamples;
				last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
			}
		}
		if (sbgps.length > 0 || sgpds.length > 0) {
			ISOFile.setSampleGroupProperties(trak, sample, j, trak.sample_groups_info);
		}
	}
	if (j>0) {
		trak.samples[j-1].duration = Math.max(trak.mdia.mdhd.duration - trak.samples[j-1].dts, 0);
		trak.samples_duration += trak.samples[j-1].duration;
	}
};

/* Update sample list when new 'moof' boxes are received */
ISOFile.prototype.updateSampleLists = function() {	
	var i, j, k;
	var default_sample_description_index, default_sample_duration, default_sample_size, default_sample_flags;
	var last_run_position;
	var box, moof, traf, trak, trex;
	var sample;
	var sample_flags;
	
	if (this.moov === undefined) {
		return;
	}
	/* if the input file is fragmented and fetched in multiple downloads, we need to update the list of samples */
	while (this.lastMoofIndex < this.moofs.length) {
		box = this.moofs[this.lastMoofIndex];
		this.lastMoofIndex++;
		if (box.type == "moof") {
			moof = box;
			for (i = 0; i < moof.trafs.length; i++) {
				traf = moof.trafs[i];
				trak = this.getTrackById(traf.tfhd.track_id);
				trex = this.getTrexById(traf.tfhd.track_id);
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
					default_sample_description_index = traf.tfhd.default_sample_description_index;
				} else {
					default_sample_description_index = (trex ? trex.default_sample_description_index: 1);
				}
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
					default_sample_duration = traf.tfhd.default_sample_duration;
				} else {
					default_sample_duration = (trex ? trex.default_sample_duration : 0);
				}
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
					default_sample_size = traf.tfhd.default_sample_size;
				} else {
					default_sample_size = (trex ? trex.default_sample_size : 0);
				}
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
					default_sample_flags = traf.tfhd.default_sample_flags;
				} else {
					default_sample_flags = (trex ? trex.default_sample_flags : 0);
				}
				traf.sample_number = 0;
				/* process sample groups */
				if (traf.sbgps.length > 0) {
					ISOFile.initSampleGroups(trak, traf, traf.sbgps, trak.mdia.minf.stbl.sgpds, traf.sgpds);
				}
				for (j = 0; j < traf.truns.length; j++) {
					var trun = traf.truns[j];
					for (k = 0; k < trun.sample_count; k++) {
						sample = {};
						sample.moof_number = this.lastMoofIndex;
						sample.number_in_traf = traf.sample_number;
						traf.sample_number++;
			            sample.number = trak.samples.length;
						traf.first_sample_index = trak.samples.length;
						trak.samples.push(sample);
						sample.track_id = trak.tkhd.track_id;
						sample.timescale = trak.mdia.mdhd.timescale;
						sample.description_index = default_sample_description_index-1;
						sample.description = trak.mdia.minf.stbl.stsd.entries[sample.description_index];
						sample.size = default_sample_size;
						if (trun.flags & BoxParser.TRUN_FLAGS_SIZE) {
							sample.size = trun.sample_size[k];
						}
						trak.samples_size += sample.size;
						sample.duration = default_sample_duration;
						if (trun.flags & BoxParser.TRUN_FLAGS_DURATION) {
							sample.duration = trun.sample_duration[k];
						}
						trak.samples_duration += sample.duration;
						if (trak.first_traf_merged || k > 0) {
							sample.dts = trak.samples[trak.samples.length-2].dts+trak.samples[trak.samples.length-2].duration;
						} else {
							if (traf.tfdt) {
								sample.dts = traf.tfdt.baseMediaDecodeTime;
							} else {
								sample.dts = 0;
							}
							trak.first_traf_merged = true;
						}
						sample.cts = sample.dts;
						if (trun.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
							sample.cts = sample.dts + trun.sample_composition_time_offset[k];
						}
						sample_flags = default_sample_flags;
						if (trun.flags & BoxParser.TRUN_FLAGS_FLAGS) {
							sample_flags = trun.sample_flags[k];
						} else if (k === 0 && (trun.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG)) {
							sample_flags = trun.first_sample_flags;
						}
						sample.is_sync = ((sample_flags >> 16 & 0x1) ? false : true);
						sample.is_leading = (sample_flags >> 26 & 0x3);
						sample.depends_on = (sample_flags >> 24 & 0x3);
						sample.is_depended_on = (sample_flags >> 22 & 0x3);
						sample.has_redundancy = (sample_flags >> 20 & 0x3);
						sample.degradation_priority = (sample_flags & 0xFFFF);
						//ISOFile.process_sdtp(traf.sdtp, sample, sample.number_in_traf);
						var bdop = (traf.tfhd.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) ? true : false;
						var dbim = (traf.tfhd.flags & BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF) ? true : false;
						var dop = (trun.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) ? true : false;
						var bdo = 0;
						if (!bdop) {
							if (!dbim) {
								if (j === 0) { // the first track in the movie fragment
									bdo = moof.start; // the position of the first byte of the enclosing Movie Fragment Box
								} else {
									bdo = last_run_position; // end of the data defined by the preceding *track* (irrespective of the track id) fragment in the moof
								}
							} else {
								bdo = moof.start;
							}
						} else {
							bdo = traf.tfhd.base_data_offset;
						}
						if (j === 0 && k === 0) {
							if (dop) {
								sample.offset = bdo + trun.data_offset; // If the data-offset is present, it is relative to the base-data-offset established in the track fragment header
							} else {
								sample.offset = bdo; // the data for this run starts the base-data-offset defined by the track fragment header
							}
						} else {
							sample.offset = last_run_position; // this run starts immediately after the data of the previous run
						}
						last_run_position = sample.offset + sample.size;
						if (traf.sbgps.length > 0 || traf.sgpds.length > 0 ||
							trak.mdia.minf.stbl.sbgps.length > 0 || trak.mdia.minf.stbl.sgpds.length > 0) {
							ISOFile.setSampleGroupProperties(trak, sample, sample.number_in_traf, traf.sample_groups_info);
						}
					}
				}
				if (traf.subs) {
					trak.has_fragment_subsamples = true;
					var sample_index = traf.first_sample_index;
					for (j = 0; j < traf.subs.entries.length; j++) {
						sample_index += traf.subs.entries[j].sample_delta;
						sample = trak.samples[sample_index-1];
						sample.subsamples = traf.subs.entries[j].subsamples;
					}					
				}
			}
		}
	}	
};

/* Try to get sample data for a given sample:
   returns null if not found
   returns the same sample if already requested
 */
ISOFile.prototype.getSample = function(trak, sampleNum) {	
	var buffer;
	var sample = trak.samples[sampleNum];
	
	if (!this.moov) {
		return null;
	}

	if (!sample.data) {
		/* Not yet fetched */
		sample.data = new Uint8Array(sample.size);
		sample.alreadyRead = 0;
		this.samplesDataSize += sample.size;
		Log.debug("ISOFile", "Allocating sample #"+sampleNum+" on track #"+trak.tkhd.track_id+" of size "+sample.size+" (total: "+this.samplesDataSize+")");
	} else if (sample.alreadyRead == sample.size) {
		/* Already fetched entirely */
		return sample;
	}

	/* The sample has only been partially fetched, we need to check in all buffers */
	while(true) {
		var index =	this.stream.findPosition(true, sample.offset + sample.alreadyRead, false);
		if (index > -1) {
			buffer = this.stream.buffers[index];
			var lengthAfterStart = buffer.byteLength - (sample.offset + sample.alreadyRead - buffer.fileStart);
			if (sample.size - sample.alreadyRead <= lengthAfterStart) {
				/* the (rest of the) sample is entirely contained in this buffer */

				Log.debug("ISOFile","Getting sample #"+sampleNum+" data (alreadyRead: "+sample.alreadyRead+" offset: "+
					(sample.offset+sample.alreadyRead - buffer.fileStart)+" read size: "+(sample.size - sample.alreadyRead)+" full size: "+sample.size+")");

				DataStream.memcpy(sample.data.buffer, sample.alreadyRead,
				                  buffer, sample.offset+sample.alreadyRead - buffer.fileStart, sample.size - sample.alreadyRead);

				/* update the number of bytes used in this buffer and check if it needs to be removed */
				buffer.usedBytes += sample.size - sample.alreadyRead;
				this.stream.logBufferLevel();

				sample.alreadyRead = sample.size;

				return sample;
			} else {
				/* the sample does not end in this buffer */

				if (lengthAfterStart === 0) return null;

				Log.debug("ISOFile","Getting sample #"+sampleNum+" partial data (alreadyRead: "+sample.alreadyRead+" offset: "+
					(sample.offset+sample.alreadyRead - buffer.fileStart)+" read size: "+lengthAfterStart+" full size: "+sample.size+")");

				DataStream.memcpy(sample.data.buffer, sample.alreadyRead,
				                  buffer, sample.offset+sample.alreadyRead - buffer.fileStart, lengthAfterStart);
				sample.alreadyRead += lengthAfterStart;

				/* update the number of bytes used in this buffer and check if it needs to be removed */
				buffer.usedBytes += lengthAfterStart;
				this.stream.logBufferLevel();

				/* keep looking in the next buffer */
			}
		} else {
			return null;
		}
	}
};

/* Release the memory used to store the data of the sample */
ISOFile.prototype.releaseSample = function(trak, sampleNum) {	
	var sample = trak.samples[sampleNum];
	if (sample.data) {
		this.samplesDataSize -= sample.size;
		sample.data = null;
		sample.alreadyRead = 0;
		return sample.size;
	} else {
		return 0;
	}
};

ISOFile.prototype.getAllocatedSampleDataSize = function() {
	return this.samplesDataSize;
};

/* Builds the MIME Type 'codecs' sub-parameters for the whole file */
ISOFile.prototype.getCodecs = function() {	
	var i;
	var codecs = "";
	for (i = 0; i < this.moov.traks.length; i++) {
		var trak = this.moov.traks[i];
		if (i>0) {
			codecs+=","; 
		}
		codecs += trak.mdia.minf.stbl.stsd.entries[0].getCodec();		
	}
	return codecs;
};

/* Helper function */
ISOFile.prototype.getTrexById = function(id) {	
	var i;
	if (!this.moov || !this.moov.mvex) return null;
	for (i = 0; i < this.moov.mvex.trexs.length; i++) {
		var trex = this.moov.mvex.trexs[i];
		if (trex.track_id == id) return trex;
	}
	return null;
};

/* Helper function */
ISOFile.prototype.getTrackById = function(id) {
	if (this.moov === undefined) {
		return null;
	}
	for (var j = 0; j < this.moov.traks.length; j++) {
		var trak = this.moov.traks[j];
		if (trak.tkhd.track_id == id) return trak;
	}
	return null;
};
// file:src/isofile-item-processing.js
ISOFile.prototype.items = [];
/* size of the buffers allocated for samples */
ISOFile.prototype.itemsDataSize = 0;

ISOFile.prototype.flattenItemInfo = function() {	
	var items = this.items;
	var i, j;
	var item;
	var meta = this.meta;
	if (meta === null || meta === undefined) return;
	if (meta.hdlr === undefined) return;
	if (meta.iinf === undefined) return;
	for (i = 0; i < meta.iinf.item_infos.length; i++) {
		item = {};
		item.id = meta.iinf.item_infos[i].item_ID;
		items[item.id] = item;
		item.ref_to = [];
		item.name = meta.iinf.item_infos[i].item_name;
		if (meta.iinf.item_infos[i].protection_index > 0) {
			item.protection = meta.ipro.protections[meta.iinf.item_infos[i].protection_index-1];
		}
		if (meta.iinf.item_infos[i].item_type) {
			item.type = meta.iinf.item_infos[i].item_type;
		} else {
			item.type = "mime";
		}
		item.content_type = meta.iinf.item_infos[i].content_type;
		item.content_encoding = meta.iinf.item_infos[i].content_encoding;
	}
	if (meta.iloc) {
		for(i = 0; i < meta.iloc.items.length; i++) {
			var itemloc = meta.iloc.items[i];
			item = items[itemloc.item_ID];
			if (itemloc.data_reference_index !== 0) {
				Log.warn("Item storage with reference to other files: not supported");
				item.source = meta.dinf.boxes[itemloc.data_reference_index-1];
			}
			switch(itemloc.construction_method) {
				case 0: // offset into the file referenced by the data reference index
				break;
				case 1: // offset into the idat box of this meta box
				Log.warn("Item storage with construction_method : not supported");
				break;
				case 2: // offset into another item
				Log.warn("Item storage with construction_method : not supported");
				break;
			}
			item.extents = [];
			item.size = 0;
			for (j = 0; j < itemloc.extents.length; j++) {
				item.extents[j] = {};
				item.extents[j].offset = itemloc.extents[j].extent_offset + itemloc.base_offset;
				item.extents[j].length = itemloc.extents[j].extent_length;
				item.extents[j].alreadyRead = 0;
				item.size += item.extents[j].length;
			}
		}
	}
	if (meta.pitm) {
		items[meta.pitm.item_id].primary = true;
	}
	if (meta.iref) {
		for (i=0; i <meta.iref.references.length; i++) {
			var ref = meta.iref.references[i];
			for (j=0; j<ref.references.length; j++) {
				items[ref.from_item_ID].ref_to.push({type: ref.type, id: ref.references[j]});
			}
		}
	}
	if (meta.iprp) {
		for (var k = 0; k < meta.iprp.ipmas.length; k++) {
			var ipma = meta.iprp.ipmas[k];
			for (i = 0; i < ipma.associations.length; i++) {
				var association = ipma.associations[i];
				item = items[association.id];
				if (item.properties === undefined) {
					item.properties = {};
					item.properties.boxes = [];
				}
				for (j = 0; j < association.props.length; j++) {
					var propEntry = association.props[j];
					if (propEntry.property_index > 0 && propEntry.property_index-1 < meta.iprp.ipco.boxes.length) {
						var propbox = meta.iprp.ipco.boxes[propEntry.property_index-1];
						item.properties[propbox.type] = propbox;
						item.properties.boxes.push(propbox);
					}
				}
			}
		}
	}
};

ISOFile.prototype.getItem = function(item_id) {	
	var buffer;
	var item;
	
	if (!this.meta) {
		return null;
	}

 	item = this.items[item_id];
	if (!item.data && item.size) {
		/* Not yet fetched */
		item.data = new Uint8Array(item.size);
		item.alreadyRead = 0;
		this.itemsDataSize += item.size;
		Log.debug("ISOFile", "Allocating item #"+item_id+" of size "+item.size+" (total: "+this.itemsDataSize+")");
	} else if (item.alreadyRead === item.size) {
		/* Already fetched entirely */
		return item;
	}

	/* The item has only been partially fetched, we need to check in all buffers to find the remaining extents*/

	for (var i = 0; i < item.extents.length; i++) {
		var extent = item.extents[i];
		if (extent.alreadyRead === extent.length) {
			continue;
		} else {
			var index =	this.stream.findPosition(true, extent.offset + extent.alreadyRead, false);
			if (index > -1) {
				buffer = this.stream.buffers[index];
				var lengthAfterStart = buffer.byteLength - (extent.offset + extent.alreadyRead - buffer.fileStart);
				if (extent.length - extent.alreadyRead <= lengthAfterStart) {
					/* the (rest of the) extent is entirely contained in this buffer */

					Log.debug("ISOFile","Getting item #"+item_id+" extent #"+i+" data (alreadyRead: "+extent.alreadyRead+
						" offset: "+(extent.offset+extent.alreadyRead - buffer.fileStart)+" read size: "+(extent.length - extent.alreadyRead)+
						" full extent size: "+extent.length+" full item size: "+item.size+")");

					DataStream.memcpy(item.data.buffer, item.alreadyRead, 
					                  buffer, extent.offset+extent.alreadyRead - buffer.fileStart, extent.length - extent.alreadyRead);

					/* update the number of bytes used in this buffer and check if it needs to be removed */
					buffer.usedBytes += extent.length - extent.alreadyRead;
					this.stream.logBufferLevel();

					item.alreadyRead += (extent.length - extent.alreadyRead);
					extent.alreadyRead = extent.length;
				} else {
					/* the sample does not end in this buffer */

					Log.debug("ISOFile","Getting item #"+item_id+" extent #"+i+" partial data (alreadyRead: "+extent.alreadyRead+" offset: "+
						(extent.offset+extent.alreadyRead - buffer.fileStart)+" read size: "+lengthAfterStart+
						" full extent size: "+extent.length+" full item size: "+item.size+")");

					DataStream.memcpy(item.data.buffer, item.alreadyRead, 
					                  buffer, extent.offset+extent.alreadyRead - buffer.fileStart, lengthAfterStart);
					extent.alreadyRead += lengthAfterStart;
					item.alreadyRead += lengthAfterStart;

					/* update the number of bytes used in this buffer and check if it needs to be removed */
					buffer.usedBytes += lengthAfterStart;
					this.stream.logBufferLevel();
					return null;
				}
			} else {
				return null;
			}
		}
	}
	if (item.alreadyRead === item.size) {
		/* fetched entirely */
		return item;
	} else {
		return null;
	}
};

/* Release the memory used to store the data of the item */
ISOFile.prototype.releaseItem = function(item_id) {	
	var item = this.items[item_id];
	if (item.data) {
		this.itemsDataSize -= item.size;
		item.data = null;
		item.alreadyRead = 0;
		for (var i = 0; i < item.extents.length; i++) {
			var extent = item.extents[i];
			extent.alreadyRead = 0;
		}
		return item.size;
	} else {
		return 0;
	}
};


ISOFile.prototype.processItems = function(callback) {
	for(var i in this.items) {
		var item = this.items[i];
		this.getItem(item.id);
		if (callback && !item.sent) {
			callback(item);
			item.sent = true;
			item.data = null;
		}
	}
};

ISOFile.prototype.hasItem = function(name) {
	for(var i in this.items) {
		var item = this.items[i];
		if (item.name === name) {
			return item.id;
		}
	}
	return -1;
};

ISOFile.prototype.getMetaHandler = function() {
	if (!this.meta) {
		return null;
	} else {
		return this.meta.hdlr.handler;		
	}
};

ISOFile.prototype.getPrimaryItem = function() {
	if (!this.meta || !this.meta.pitm) {
		return null;
	} else {
		return this.getItem(this.meta.pitm.item_id);
	}
};

ISOFile.prototype.itemToFragmentedTrackFile = function(_options) {
	var options = _options || {};
	var item = null;
	if (options.itemId) {
		item = this.getItem(options.itemId);
	} else {
		item = this.getPrimaryItem();
	}
	if (item == null) return null;

	var file = new ISOFile();
	file.discardMdatData = false;
	// assuming the track type is the same as the item type
	var trackOptions = { type: item.type, description_boxes: item.properties.boxes};
	if (item.properties.ispe) {
		trackOptions.width = item.properties.ispe.image_width;
		trackOptions.height = item.properties.ispe.image_height;
	}
	var trackId = file.addTrack(trackOptions);
	if (trackId) {
		file.addSample(trackId, item.data);
		return file;
	} else {
		return null;
	}
};

// file:src/isofile-write.js
/* Rewrite the entire file */
ISOFile.prototype.write = function(outstream) {
	for (var i=0; i<this.boxes.length; i++) {
		this.boxes[i].write(outstream);
	}
};

ISOFile.prototype.createFragment = function(track_id, sampleNumber, stream_) {
	var trak = this.getTrackById(track_id);
	var sample = this.getSample(trak, sampleNumber);
	if (sample == null) {
		sample = trak.samples[sampleNumber];
		if (this.nextSeekPosition) {
			this.nextSeekPosition = Math.min(sample.offset+sample.alreadyRead,this.nextSeekPosition);
		} else {
			this.nextSeekPosition = trak.samples[sampleNumber].offset+sample.alreadyRead;
		}
		return null;
	}
	
	var stream = stream_ || new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;

	var moof = this.createSingleSampleMoof(sample);
	moof.write(stream);

	/* adjusting the data_offset now that the moof size is known*/
	moof.trafs[0].truns[0].data_offset = moof.size+8; //8 is mdat header
	Log.debug("MP4Box", "Adjusting data_offset with new value "+moof.trafs[0].truns[0].data_offset);
	stream.adjustUint32(moof.trafs[0].truns[0].data_offset_position, moof.trafs[0].truns[0].data_offset);
		
	var mdat = new BoxParser.mdatBox();
	mdat.data = sample.data;
	mdat.write(stream);
	return stream;
};

/* Modify the file and create the initialization segment */
ISOFile.writeInitializationSegment = function(ftyp, moov, total_duration, sample_duration) {
	var i;
	Log.debug("ISOFile", "Generating initialization segment");

	var stream = new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	ftyp.write(stream);
	
	/* we can now create the new mvex box */
	var mvex = moov.add("mvex");
	if (total_duration) {
		mvex.add("mehd").set("fragment_duration", total_duration);
	}
	for (i = 0; i < moov.traks.length; i++) {
		mvex.add("trex").set("track_id", moov.traks[i].tkhd.track_id)
						.set("default_sample_description_index", 1)
						.set("default_sample_duration", sample_duration)
						.set("default_sample_size", 0)
						.set("default_sample_flags", 1<<16);
	}
	moov.write(stream);

	return stream.buffer;

};

ISOFile.prototype.save = function(name) {
	var stream = new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	this.write(stream);
	stream.save(name);	
};

ISOFile.prototype.getBuffer = function() {
	var stream = new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	this.write(stream);
	return stream.buffer;
};

ISOFile.prototype.initializeSegmentation = function() {
	var i;
	var initSegs;
	var trak;
	var seg;
	if (this.onSegment === null) {
		Log.warn("MP4Box", "No segmentation callback set!");
	}
	if (!this.isFragmentationInitialized) {
		this.isFragmentationInitialized = true;		
		this.nextMoofNumber = 0;
		this.resetTables();
	}	
	initSegs = [];	
	for (i = 0; i < this.fragmentedTracks.length; i++) {
		var moov = new BoxParser.moovBox();
		moov.mvhd = this.moov.mvhd;
	    moov.boxes.push(moov.mvhd);
		trak = this.getTrackById(this.fragmentedTracks[i].id);
		moov.boxes.push(trak);
		moov.traks.push(trak);
		seg = {};
		seg.id = trak.tkhd.track_id;
		seg.user = this.fragmentedTracks[i].user;
		seg.buffer = ISOFile.writeInitializationSegment(this.ftyp, moov, (this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration: undefined), (this.moov.traks[i].samples.length>0 ? this.moov.traks[i].samples[0].duration: 0));
		initSegs.push(seg);
	}
	return initSegs;
};

// file:src/box-print.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.Box.prototype.printHeader = function(output) {
	this.size += 8;
	if (this.size > MAX_SIZE) {
		this.size += 8;
	}
	if (this.type === "uuid") {
		this.size += 16;
	}
	output.log(output.indent+"size:"+this.size);
	output.log(output.indent+"type:"+this.type);
};

BoxParser.FullBox.prototype.printHeader = function(output) {
	this.size += 4;
	BoxParser.Box.prototype.printHeader.call(this, output);
	output.log(output.indent+"version:"+this.version);
	output.log(output.indent+"flags:"+this.flags);
};

BoxParser.Box.prototype.print = function(output) {
	this.printHeader(output);
};

BoxParser.ContainerBox.prototype.print = function(output) {
	this.printHeader(output);
	for (var i=0; i<this.boxes.length; i++) {
		if (this.boxes[i]) {
			var prev_indent = output.indent;
			output.indent += " ";
			this.boxes[i].print(output);
			output.indent = prev_indent;
		}
	}
};

ISOFile.prototype.print = function(output) {
	output.indent = "";
	for (var i=0; i<this.boxes.length; i++) {
		if (this.boxes[i]) {
			this.boxes[i].print(output);
		}
	}	
};

BoxParser.mvhdBox.prototype.print = function(output) {
	BoxParser.FullBox.prototype.printHeader.call(this, output);
	output.log(output.indent+"creation_time: "+this.creation_time);
	output.log(output.indent+"modification_time: "+this.modification_time);
	output.log(output.indent+"timescale: "+this.timescale);
	output.log(output.indent+"duration: "+this.duration);
	output.log(output.indent+"rate: "+this.rate);
	output.log(output.indent+"volume: "+(this.volume>>8));
	output.log(output.indent+"matrix: "+this.matrix.join(", "));
	output.log(output.indent+"next_track_id: "+this.next_track_id);
};

BoxParser.tkhdBox.prototype.print = function(output) {
	BoxParser.FullBox.prototype.printHeader.call(this, output);
	output.log(output.indent+"creation_time: "+this.creation_time);
	output.log(output.indent+"modification_time: "+this.modification_time);
	output.log(output.indent+"track_id: "+this.track_id);
	output.log(output.indent+"duration: "+this.duration);
	output.log(output.indent+"volume: "+(this.volume>>8));
	output.log(output.indent+"matrix: "+this.matrix.join(", "));
	output.log(output.indent+"layer: "+this.layer);
	output.log(output.indent+"alternate_group: "+this.alternate_group);
	output.log(output.indent+"width: "+this.width);
	output.log(output.indent+"height: "+this.height);
};// file:src/mp4box.js
/*
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var MP4Box = {};

MP4Box.createFile = function (_keepMdatData, _stream) {
	/* Boolean indicating if bytes containing media data should be kept in memory */
	var keepMdatData = (_keepMdatData !== undefined ? _keepMdatData : true);
	var file = new ISOFile(_stream);
	file.discardMdatData = (keepMdatData ? false : true);
	return file;
};

{
	exports.createFile = MP4Box.createFile;
}
}(mp4box_all));

/**
 * Taken from https://github.com/w3c/webcodecs/blob/main/samples/mp4-decode/mp4_demuxer.js
 */
var Writer = /*#__PURE__*/function () {
  function Writer(size) {
    _classCallCheck(this, Writer);
    this.data = new Uint8Array(size);
    this.idx = 0;
    this.size = size;
  }
  _createClass(Writer, [{
    key: "getData",
    value: function getData() {
      if (this.idx !== this.size) throw new Error('Mismatch between size reserved and sized used');
      return this.data.slice(0, this.idx);
    }
  }, {
    key: "writeUint8",
    value: function writeUint8(value) {
      this.data.set([value], this.idx);
      this.idx += 1;
    }
  }, {
    key: "writeUint16",
    value: function writeUint16(value) {
      var arr = new Uint16Array(1);
      arr[0] = value;
      var buffer = new Uint8Array(arr.buffer);
      this.data.set([buffer[1], buffer[0]], this.idx);
      this.idx += 2;
    }
  }, {
    key: "writeUint8Array",
    value: function writeUint8Array(value) {
      this.data.set(value, this.idx);
      this.idx += value.length;
    }
  }]);
  return Writer;
}();
/**
 * Taken from https://github.com/w3c/webcodecs/blob/main/samples/mp4-decode/mp4_demuxer.js
 *
 * @param avccBox
 * @returns {*}
 */
var getExtradata = function getExtradata(avccBox) {
  var i;
  var size = 7;
  for (i = 0; i < avccBox.SPS.length; i += 1) {
    // nalu length is encoded as a uint16.
    size += 2 + avccBox.SPS[i].length;
  }
  for (i = 0; i < avccBox.PPS.length; i += 1) {
    // nalu length is encoded as a uint16.
    size += 2 + avccBox.PPS[i].length;
  }
  var writer = new Writer(size);
  writer.writeUint8(avccBox.configurationVersion);
  writer.writeUint8(avccBox.AVCProfileIndication);
  writer.writeUint8(avccBox.profile_compatibility);
  writer.writeUint8(avccBox.AVCLevelIndication);
  // eslint-disable-next-line no-bitwise
  writer.writeUint8(avccBox.lengthSizeMinusOne + (63 << 2));

  // eslint-disable-next-line no-bitwise
  writer.writeUint8(avccBox.nb_SPS_nalus + (7 << 5));
  for (i = 0; i < avccBox.SPS.length; i += 1) {
    writer.writeUint16(avccBox.SPS[i].length);
    writer.writeUint8Array(avccBox.SPS[i].nalu);
  }
  writer.writeUint8(avccBox.nb_PPS_nalus);
  for (i = 0; i < avccBox.PPS.length; i += 1) {
    writer.writeUint16(avccBox.PPS[i].length);
    writer.writeUint8Array(avccBox.PPS[i].nalu);
  }
  return writer.getData();
};

/**
 * decodeVideo takes an url to a mp4 file and converts it into frames.
 *
 * The steps for this are:
 *  1. Determine the codec for this video file and demux it into chunks.
 *  2. Read the chunks with VideoDecoder as fast as possible.
 *  3. Return an array of frames that we can efficiently draw to a canvas.
 *
 * @param src
 * @param VideoDecoder
 * @param EncodedVideoChunk
 * @param emitFrame
 * @param debug
 * @returns {Promise<unknown>}
 */
var decodeVideo = function decodeVideo(src, emitFrame, _ref) {
  var VideoDecoder = _ref.VideoDecoder,
    EncodedVideoChunk = _ref.EncodedVideoChunk,
    debug = _ref.debug;
  return new Promise(function (resolve, reject) {
    if (debug) console.info('Decoding video from', src);
    try {
      // Uses mp4box for demuxing
      var mp4boxfile = mp4box_all.createFile();

      // Holds the codec value
      var codec;

      // Creates a VideoDecoder instance
      var decoder = new VideoDecoder({
        output: function output(frame) {
          createImageBitmap(frame, {
            resizeQuality: 'low'
          }).then(function (bitmap) {
            emitFrame(bitmap);
            frame.close();
            if (decoder.decodeQueueSize <= 0) {
              // Give it an extra half second to finish everything
              setTimeout(function () {
                if (decoder.state !== 'closed') {
                  decoder.close();
                  resolve();
                }
              }, 500);
            }
          });
        },
        error: function error(e) {
          // eslint-disable-next-line no-console
          console.error(e);
          reject(e);
        }
      });
      mp4boxfile.onReady = function (info) {
        if (info && info.videoTracks && info.videoTracks[0]) {
          var _info$videoTracks = _slicedToArray(info.videoTracks, 1);
          codec = _info$videoTracks[0].codec;
          if (debug) console.info('Video with codec:', codec);

          // Gets the avccbox used for reading extradata
          var avccBox = mp4boxfile.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC;
          var extradata = getExtradata(avccBox);

          // configure decoder
          decoder.configure({
            codec: codec,
            description: extradata
          });

          // Setup mp4box file for breaking it into chunks
          mp4boxfile.setExtractionOptions(info.videoTracks[0].id);
          mp4boxfile.start();
        } else reject(new Error('URL provided is not a valid mp4 video file.'));
      };
      mp4boxfile.onSamples = function (track_id, ref, samples) {
        for (var i = 0; i < samples.length; i += 1) {
          var sample = samples[i];
          var type = sample.is_sync ? 'key' : 'delta';
          var chunk = new EncodedVideoChunk({
            type: type,
            timestamp: sample.cts,
            duration: sample.duration,
            data: sample.data
          });
          decoder.decode(chunk);
        }
      };

      // Fetches the file into arraybuffers
      fetch(src).then(function (res) {
        var reader = res.body.getReader();
        var offset = 0;
        function appendBuffers(_ref2) {
          var done = _ref2.done,
            value = _ref2.value;
          if (done) {
            mp4boxfile.flush();
            return null;
          }
          var buf = value.buffer;
          buf.fileStart = offset;
          offset += buf.byteLength;
          mp4boxfile.appendBuffer(buf);
          return reader.read().then(appendBuffers);
        }
        return reader.read().then(appendBuffers);
      });
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * The main function for decoding video. Deals with the polyfill cases first,
 * then calls our decodeVideo.
 *
 * @param src
 * @param emitFrame
 * @param debug
 * @returns {Promise<never>|Promise<void>|*}
 */
var videoDecoder = (function (src, emitFrame, debug) {
  // If our browser supports WebCodecs natively
  if (typeof VideoDecoder === 'function' && typeof EncodedVideoChunk === 'function') {
    if (debug) console.info('WebCodecs is natively supported, using native version...');
    return decodeVideo(src, emitFrame, {
      VideoDecoder: VideoDecoder,
      EncodedVideoChunk: EncodedVideoChunk,
      debug: debug
    });
  }

  // Otherwise, resolve nothing
  if (debug) console.info('WebCodecs is not available in this browser.');
  return Promise.resolve();
});

function debounce(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timeoutId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;

    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);

    // Set a new timeout to call the function later
    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
var isScrollPositionAtTarget = function isScrollPositionAtTarget(targetScrollPosition) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  // eslint-disable-next-line no-undef
  var currentScrollPosition = window.pageYOffset;
  var difference = Math.abs(currentScrollPosition - targetScrollPosition);
  return difference < threshold;
};

/**
 *   ____                 _ _     __     ___     _
 *  / ___|  ___ _ __ ___ | | |_   \ \   / (_) __| | ___  ___
 *  \___ \ / __| '__/ _ \| | | | | \ \ / /| |/ _` |/ _ \/ _ \
 *   ___) | (__| | | (_) | | | |_| |\ V / | | (_| |  __/ (_) |
 *  |____/ \___|_|  \___/|_|_|\__, | \_/  |_|\__,_|\___|\___/
 *                            |___/
 *
 * Responsive scrollable videos without obscure video encoding requirements.
 * Compatible with React, Svelte, Vue, and plain HTML.
 */
var ScrollyVideo = /*#__PURE__*/function () {
  function ScrollyVideo(_ref) {
    var _this = this;
    var src = _ref.src,
      scrollyVideoContainer = _ref.scrollyVideoContainer,
      _ref$cover = _ref.cover,
      cover = _ref$cover === void 0 ? true : _ref$cover,
      _ref$sticky = _ref.sticky,
      sticky = _ref$sticky === void 0 ? true : _ref$sticky,
      _ref$full = _ref.full,
      full = _ref$full === void 0 ? true : _ref$full,
      _ref$trackScroll = _ref.trackScroll,
      trackScroll = _ref$trackScroll === void 0 ? true : _ref$trackScroll,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? true : _ref$lockScroll,
      _ref$transitionSpeed = _ref.transitionSpeed,
      transitionSpeed = _ref$transitionSpeed === void 0 ? 8 : _ref$transitionSpeed,
      _ref$frameThreshold = _ref.frameThreshold,
      frameThreshold = _ref$frameThreshold === void 0 ? 0.1 : _ref$frameThreshold,
      _ref$useWebCodecs = _ref.useWebCodecs,
      useWebCodecs = _ref$useWebCodecs === void 0 ? true : _ref$useWebCodecs,
      _ref$onReady = _ref.onReady,
      onReady = _ref$onReady === void 0 ? function () {} : _ref$onReady,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;
    _classCallCheck(this, ScrollyVideo);
    // Make sure that we have a DOM
    if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== 'object') {
      console.error('ScrollyVideo must be initiated in a DOM context');
      return;
    }

    // Make sure the basic arguments are set for scrollyvideo
    if (!scrollyVideoContainer) {
      console.error('scrollyVideoContainer must be a valid DOM object');
      return;
    }
    if (!src) {
      console.error('Must provide valid video src to ScrollyVideo');
      return;
    }

    // Save the container. If the container is a string we get the element
    // eslint-disable-next-line no-undef
    if (scrollyVideoContainer instanceof Element) this.container = scrollyVideoContainer;
    // otherwise it should better be an element
    else if (typeof scrollyVideoContainer === 'string') {
      // eslint-disable-next-line no-undef
      this.container = document.getElementById(scrollyVideoContainer);
      if (!this.container) throw new Error('scrollyVideoContainer must be a valid DOM object');
    } else {
      throw new Error('scrollyVideoContainer must be a valid DOM object');
    }

    // Save the constructor options
    this.src = src;
    this.transitionSpeed = transitionSpeed;
    this.frameThreshold = frameThreshold;
    this.useWebCodecs = useWebCodecs;
    this.cover = cover;
    this.sticky = sticky;
    this.trackScroll = trackScroll;
    this.onReady = onReady;
    this.onChange = onChange;
    this.debug = debug;

    // Create the initial video object. Even if we are going to use webcodecs,
    // we start with a paused video object
    // eslint-disable-next-line no-undef
    this.video = document.createElement('video');
    this.video.src = src;
    this.video.preload = 'auto';
    this.video.tabIndex = 0;
    this.video.autobuffer = true;
    this.video.playsInline = true;
    this.video.muted = true;
    this.video.pause();
    this.video.load();

    // Start the video percentage at 0
    this.videoPercentage = 0;

    // Adds the video to the container
    this.container.appendChild(this.video);

    // Setting CSS properties for sticky
    if (sticky) {
      this.container.style.display = 'block';
      this.container.style.position = 'sticky';
      this.container.style.top = '0';
    }

    // Setting CSS properties for full
    if (full) {
      this.container.style.width = '100%';
      this.container.style.height = '100vh';
      this.container.style.overflow = 'hidden';
    }

    // Setting CSS properties for cover
    if (cover) this.setCoverStyle(this.video);

    // Detect webkit (safari), because webkit requires special attention
    var browserEngine = new UAParser().getEngine();
    // eslint-disable-next-line no-undef
    this.isSafari = browserEngine.name === 'WebKit';
    if (debug && this.isSafari) console.info('Safari browser detected');

    // Initialize state variables
    this.currentTime = 0; // Saves the currentTime of the video, synced with this.video.currentTime
    this.targetTime = 0; // The target time before a transition happens
    this.canvas = null; // The canvas for drawing the frames decoded by webCodecs
    this.context = null; // The canvas context
    this.frames = []; // The frames decoded by webCodecs
    this.frameRate = 0; // Calculation of frameRate so we know which frame to paint

    var debouncedScroll = debounce(function () {
      // eslint-disable-next-line no-undef
      window.requestAnimationFrame(function () {
        _this.setScrollPercent(_this.videoPercentage);
      });
    }, 100);

    // Add scroll listener for responding to scroll position
    this.updateScrollPercentage = function (jump) {
      // Used for internally setting the scroll percentage based on built-in listeners
      var containerBoundingClientRect = _this.container.parentNode.getBoundingClientRect();

      // Calculate the current scroll percent of the video
      var scrollPercent = -containerBoundingClientRect.top / (
      // eslint-disable-next-line no-undef
      containerBoundingClientRect.height - window.innerHeight);
      if (_this.debug) {
        console.info('ScrollyVideo scrolled to', scrollPercent);
      }
      if (_this.targetScrollPosition == null) {
        _this.setTargetTimePercent(scrollPercent, {
          jump: jump
        });
        _this.onChange(scrollPercent);
      } else if (isScrollPositionAtTarget(_this.targetScrollPosition)) {
        _this.targetScrollPosition = null;
      } else if (lockScroll && _this.targetScrollPosition != null) {
        debouncedScroll();
      }
    };

    // Add our event listeners for handling changes to the window or scroll
    if (this.trackScroll) {
      // eslint-disable-next-line no-undef
      window.addEventListener('scroll', this.updateScrollPercentage);

      // Set the initial scroll percentage
      this.video.addEventListener('loadedmetadata', function () {
        return _this.updateScrollPercentage(true);
      }, {
        once: true
      });
    } else {
      this.video.addEventListener('loadedmetadata', function () {
        return _this.setTargetTimePercent(0, {
          jump: true
        });
      }, {
        once: true
      });
    }

    // Add resize function
    this.resize = function () {
      if (_this.debug) console.info('ScrollyVideo resizing...');
      // On resize, we need to reset the cover style
      if (_this.cover) _this.setCoverStyle(_this.canvas || _this.video);
      // Then repaint the canvas, if we are in useWebcodecs
      _this.paintCanvasFrame(Math.floor(_this.currentTime * _this.frameRate));
    };

    // eslint-disable-next-line no-undef
    window.addEventListener('resize', this.resize);
    this.video.addEventListener('progress', this.resize);

    // Calls decode video to attempt webcodecs method
    this.decodeVideo();
  }

  /**
   * Sets the currentTime of the video as a specified percentage of its total duration.
   *
   * @param percentage - The percentage of the video duration to set as the current time.
   * @param options - Configuration options for adjusting the video playback.
   *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
   *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
   *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
   */
  _createClass(ScrollyVideo, [{
    key: "setVideoPercentage",
    value: function setVideoPercentage(percentage) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Early termination if the video percentage is already at the percentage that is intended.
      if (this.videoPercentage === percentage) return;
      if (this.transitioningRaf) {
        // eslint-disable-next-line no-undef
        window.cancelAnimationFrame(this.transitioningRaf);
      }
      this.videoPercentage = percentage;
      this.onChange(percentage);
      if (this.trackScroll) {
        this.setScrollPercent(percentage);
      }
      this.setTargetTimePercent(percentage, options);
    }

    /**
     * Sets the style of the video or canvas to "cover" it's container
     *
     * @param el
     */
  }, {
    key: "setCoverStyle",
    value: function setCoverStyle(el) {
      if (this.cover) {
        /* eslint-disable no-param-reassign */
        el.style.position = 'absolute';
        el.style.top = '50%';
        el.style.left = '50%';
        el.style.transform = 'translate(-50%, -50%)';
        el.style.minWidth = '101%';
        el.style.minHeight = '101%';

        // Gets the width and height of the container
        var _this$container$getBo = this.container.getBoundingClientRect(),
          containerWidth = _this$container$getBo.width,
          containerHeight = _this$container$getBo.height;

        // Gets the width and height of the video frames
        var width = el.videoWidth || el.width;
        var height = el.videoHeight || el.height;
        if (this.debug) console.info('Container dimensions:', [containerWidth, containerHeight]);
        if (this.debug) console.info('Element dimensions:', [width, height]);

        // Determines which axis needs to be 100% and which needs to be scaled
        if (containerWidth / containerHeight > width / height) {
          el.style.width = '100%';
          el.style.height = 'auto';
        } else {
          el.style.height = '100%';
          el.style.width = 'auto';
        }
        /* eslint-enable no-param-reassign */
      }
    }

    /**
     * Uses webCodecs to decode the video into frames
     */
  }, {
    key: "decodeVideo",
    value: function () {
      var _decodeVideo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.useWebCodecs) {
                _context.next = 3;
                break;
              }
              if (this.debug) console.warn('Cannot perform video decode: `useWebCodes` disabled');
              return _context.abrupt("return");
            case 3:
              if (this.src) {
                _context.next = 6;
                break;
              }
              if (this.debug) console.warn('Cannot perform video decode: no `src` found');
              return _context.abrupt("return");
            case 6:
              _context.prev = 6;
              _context.next = 9;
              return videoDecoder(this.src, function (frame) {
                _this2.frames.push(frame);
              }, this.debug);
            case 9:
              _context.next = 16;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](6);
              if (this.debug) console.error('Error encountered while decoding video', _context.t0);

              // Remove all decoded frames if a failure happens during decoding
              this.frames = [];

              // Force a video reload when videoDecoder fails
              this.video.load();
            case 16:
              if (!(this.frames.length === 0)) {
                _context.next = 20;
                break;
              }
              if (this.debug) console.error('No frames were received from webCodecs');
              this.onReady();
              return _context.abrupt("return");
            case 20:
              // Calculate the frameRate based on number of frames and the duration
              this.frameRate = this.frames.length / this.video.duration;
              if (this.debug) console.info('Received', this.frames.length, 'frames');

              // Remove the video and add the canvas
              // eslint-disable-next-line no-undef
              this.canvas = document.createElement('canvas');
              this.context = this.canvas.getContext('2d');

              // Hide the video and add the canvas to the container
              this.video.style.display = 'none';
              this.container.appendChild(this.canvas);
              if (this.cover) this.setCoverStyle(this.canvas);

              // Paint our first frame
              this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
              this.onReady();
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[6, 11]]);
      }));
      function decodeVideo() {
        return _decodeVideo.apply(this, arguments);
      }
      return decodeVideo;
    }()
    /**
     * Paints the frame of to the canvas
     *
     * @param frameNum
     */
  }, {
    key: "paintCanvasFrame",
    value: function paintCanvasFrame(frameNum) {
      // Get the frame and paint it to the canvas
      var currFrame = this.frames[frameNum];
      if (!this.canvas || !currFrame) {
        return;
      }
      if (this.debug) {
        console.info('Painting frame', frameNum);
      }

      // Make sure the canvas is scaled properly, similar to setCoverStyle
      this.canvas.width = currFrame.width;
      this.canvas.height = currFrame.height;
      var _this$container$getBo2 = this.container.getBoundingClientRect(),
        width = _this$container$getBo2.width,
        height = _this$container$getBo2.height;
      if (width / height > currFrame.width / currFrame.height) {
        this.canvas.style.width = '100%';
        this.canvas.style.height = 'auto';
      } else {
        this.canvas.style.height = '100%';
        this.canvas.style.width = 'auto';
      }

      // Draw the frame to the canvas context
      this.context.drawImage(currFrame, 0, 0, currFrame.width, currFrame.height);
    }

    /**
     * Transitions the video or the canvas to the proper frame.
     *
     * @param options - Configuration options for adjusting the video playback.
     *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
     *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
     *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
     */
  }, {
    key: "transitionToTargetTime",
    value: function transitionToTargetTime(_ref2) {
      var _this3 = this;
      var jump = _ref2.jump,
        _ref2$transitionSpeed = _ref2.transitionSpeed,
        transitionSpeed = _ref2$transitionSpeed === void 0 ? this.transitionSpeed : _ref2$transitionSpeed,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? null : _ref2$easing;
      if (this.debug) {
        console.info('Transitioning targetTime:', this.targetTime, 'currentTime:', this.currentTime);
      }
      var diff = this.targetTime - this.currentTime;
      var distance = Math.abs(diff);
      var duration = distance * 1000;
      var isForwardTransition = diff > 0;
      var tick = function tick(_ref3) {
        var startCurrentTime = _ref3.startCurrentTime,
          startTimestamp = _ref3.startTimestamp,
          timestamp = _ref3.timestamp;
        var progress = (timestamp - startTimestamp) / duration;

        // if frameThreshold is too low to catch condition Math.abs(this.targetTime - this.currentTime) < this.frameThreshold
        var hasPassedThreshold = isForwardTransition ? _this3.currentTime >= _this3.targetTime : _this3.currentTime <= _this3.targetTime;

        // If we are already close enough to our target, pause the video and return.
        // This is the base case of the recursive function
        if (
        // eslint-disable-next-line no-restricted-globals
        isNaN(_this3.targetTime) ||
        // If the currentTime is already close enough to the targetTime
        Math.abs(_this3.targetTime - _this3.currentTime) < _this3.frameThreshold || hasPassedThreshold) {
          _this3.video.pause();
          if (_this3.transitioningRaf) {
            // eslint-disable-next-line no-undef
            cancelAnimationFrame(_this3.transitioningRaf);
            _this3.transitioningRaf = null;
          }
          return;
        }

        // Make sure we don't go out of time bounds
        if (_this3.targetTime > _this3.video.duration) _this3.targetTime = _this3.video.duration;
        if (_this3.targetTime < 0) _this3.targetTime = 0;

        // How far forward we need to transition
        var transitionForward = _this3.targetTime - _this3.currentTime;
        var easedProgress = easing && Number.isFinite(progress) ? easing(progress) : null;
        var easedCurrentTime = isForwardTransition ? startCurrentTime + easedProgress * Math.abs(distance) * transitionSpeed : startCurrentTime - easedProgress * Math.abs(distance) * transitionSpeed;
        if (_this3.canvas) {
          if (jump) {
            // If jump, we go directly to the frame
            _this3.currentTime = _this3.targetTime;
          } else if (easedProgress) {
            _this3.currentTime = easedCurrentTime;
          } else {
            _this3.currentTime += transitionForward / (256 / transitionSpeed);
          }
          _this3.paintCanvasFrame(Math.floor(_this3.currentTime * _this3.frameRate));
        } else if (jump || _this3.isSafari || !isForwardTransition) {
          // We can't use a negative playbackRate, so if the video needs to go backwards,
          // We have to use the inefficient method of modifying currentTime rapidly to
          // get an effect.
          _this3.video.pause();
          if (easedProgress) {
            _this3.currentTime = easedCurrentTime;
          } else {
            _this3.currentTime += transitionForward / (64 / transitionSpeed);
          }

          // If jump, we go directly to the frame
          if (jump) {
            _this3.currentTime = _this3.targetTime;
          }
          _this3.video.currentTime = _this3.currentTime;
        } else {
          // Otherwise, we play the video and adjust the playbackRate to get a smoother
          // animation effect.
          var playbackRate = Math.max(Math.min(transitionForward * 4, transitionSpeed, 16), 1);
          if (_this3.debug) console.info('ScrollyVideo playbackRate:', playbackRate);
          // eslint-disable-next-line no-restricted-globals
          if (!isNaN(playbackRate)) {
            _this3.video.playbackRate = playbackRate;
            _this3.video.play();
          }
          // Set the currentTime to the video's currentTime
          _this3.currentTime = _this3.video.currentTime;
        }

        // Recursively calls ourselves until the animation is done.
        if (typeof requestAnimationFrame === 'function') {
          // eslint-disable-next-line no-undef
          _this3.transitioningRaf = requestAnimationFrame(function (currentTimestamp) {
            return tick({
              startCurrentTime: startCurrentTime,
              startTimestamp: startTimestamp,
              timestamp: currentTimestamp
            });
          });
        }
      };
      if (typeof requestAnimationFrame === 'function') {
        // eslint-disable-next-line no-undef
        this.transitioningRaf = requestAnimationFrame(function (startTimestamp) {
          tick({
            startCurrentTime: _this3.currentTime,
            startTimestamp: startTimestamp,
            timestamp: startTimestamp
          });
        });
      }
    }

    /**
     * Sets the currentTime of the video as a specified percentage of its total duration.
     *
     * @param percentage - The percentage of the video duration to set as the current time.
     * @param options - Configuration options for adjusting the video playback.
     *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
     *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
     *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
     */
  }, {
    key: "setTargetTimePercent",
    value: function setTargetTimePercent(percentage) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var targetDuration = this.frames.length && this.frameRate ? this.frames.length / this.frameRate : this.video.duration;
      // The time we want to transition to
      this.targetTime = Math.max(Math.min(percentage, 1), 0) * targetDuration;

      // If we are close enough, return early
      if (!options.jump && Math.abs(this.currentTime - this.targetTime) < this.frameThreshold) return;

      // Play the video if we are in video mode
      if (!this.canvas && !this.video.paused) this.video.play();
      this.transitionToTargetTime(options);
    }

    /**
     * Simulate trackScroll programmatically (scrolls on page by percentage of video)
     *
     * @param percentage
     */
  }, {
    key: "setScrollPercent",
    value: function setScrollPercent(percentage) {
      if (!this.trackScroll) {
        console.warn('`setScrollPercent` requires enabled `trackScroll`');
        return;
      }
      var parent = this.container.parentNode;
      var _parent$getBoundingCl = parent.getBoundingClientRect(),
        top = _parent$getBoundingCl.top,
        height = _parent$getBoundingCl.height;

      // eslint-disable-next-line no-undef
      var startPoint = top + window.pageYOffset;
      // eslint-disable-next-line no-undef
      var containerHeightInViewport = height - window.innerHeight;
      var targetPosition = startPoint + containerHeightInViewport * percentage;
      if (isScrollPositionAtTarget(targetPosition)) {
        this.targetScrollPosition = null;
      } else {
        // eslint-disable-next-line no-undef
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        this.targetScrollPosition = targetPosition;
      }
    }

    /**
     * Call to destroy this ScrollyVideo object
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.debug) console.info('Destroying ScrollyVideo');
      if (this.trackScroll)
        // eslint-disable-next-line no-undef
        window.removeEventListener('scroll', this.updateScrollPercentage);

      // eslint-disable-next-line no-undef
      window.removeEventListener('resize', this.resize);

      // Clear component
      if (this.container) this.container.innerHTML = '';
    }
  }]);
  return ScrollyVideo;
}();

var script = {
  data() {
    return {
      // variable to hold the scrollyVideo object
      scrollyVideo: null,

      // Store the props so we know when things change
      lastPropsString: '',
    };
  },
  methods: {
    refreshScrollyVideo(props) {
      // if scrollyvideo already exists and any parameter is updated, destroy and recreate.
      if (this.scrollyVideo) this.scrollyVideo.destroy();
      this.scrollyVideo = new ScrollyVideo({
        scrollyVideoContainer: this.$refs.containerElement,
        ...props,
      });
    },
    setVideoPercentage(...args) {
      if (this.scrollyVideo) this.scrollyVideo.setVideoPercentage(...args);
    },
  },
  watch: {
    $attrs: {
      handler: function () {
        // separate out the videoPercentage prop
        const { videoPercentage, ...restProps } = this.$attrs;

        if (JSON.stringify(restProps) !== this.lastPropsString) {
          this.refreshScrollyVideo(restProps);

          // Save the new props
          this.lastPropsString = JSON.stringify(restProps);
        }

        // If we need to update the target time percent
        if (
          this.scrollyVideo &&
          typeof videoPercentage === 'number' &&
          videoPercentage >= 0 &&
          videoPercentage <= 1
        ) {
          this.scrollyVideo.setVideoPercentage(videoPercentage);
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.refreshScrollyVideo(this.$attrs);
  },
  unmounted() {
    if (this.scrollyVideo) this.scrollyVideo.destroy();
  },
};

const _hoisted_1 = {
  ref: "containerElement",
  "data-scrolly-container": ""
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, null, 512 /* NEED_PATCH */))
}

script.render = render;
script.__file = "src/ScrollyVideo.vue";

module.exports = script;
