// Site Scripts
// (c) 2019 by prointernet.de

/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function(e, t) {
  var n,
    r,
    i = typeof t,
    o = e.location,
    a = e.document,
    s = a.documentElement,
    l = e.jQuery,
    u = e.$,
    c = {},
    p = [],
    f = "1.10.1",
    d = p.concat,
    h = p.push,
    g = p.slice,
    m = p.indexOf,
    y = c.toString,
    v = c.hasOwnProperty,
    b = f.trim,
    x = function(e, t) {
      return new x.fn.init(e, t, r);
    },
    w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = /\S+/g,
    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    E = /^[\],:{}\s]*$/,
    S = /(?:^|:|,)(?:\s*\[)+/g,
    A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    D = /^-ms-/,
    L = /-([\da-z])/gi,
    H = function(e, t) {
      return t.toUpperCase();
    },
    q = function(e) {
      (a.addEventListener ||
        "load" === e.type ||
        "complete" === a.readyState) &&
        (_(), x.ready());
    },
    _ = function() {
      a.addEventListener
        ? (a.removeEventListener("DOMContentLoaded", q, !1),
          e.removeEventListener("load", q, !1))
        : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
    };
  (x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function(e, n, r) {
      var i, o;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          ((i =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : N.exec(e)),
          !i || (!i[1] && n))
        )
          return !n || n.jquery
            ? (n || r).find(e)
            : this.constructor(n).find(e);
        if (i[1]) {
          if (
            ((n = n instanceof x ? n[0] : n),
            x.merge(
              this,
              x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)
            ),
            k.test(i[1]) && x.isPlainObject(n))
          )
            for (i in n)
              x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }
        if (((o = a.getElementById(i[2])), o && o.parentNode)) {
          if (o.id !== i[2]) return r.find(e);
          (this.length = 1), (this[0] = o);
        }
        return (this.context = a), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : x.isFunction(e)
        ? r.ready(e)
        : (e.selector !== t &&
            ((this.selector = e.selector), (this.context = e.context)),
          x.makeArray(e, this));
    },
    selector: "",
    length: 0,
    toArray: function() {
      return g.call(this);
    },
    get: function(e) {
      return null == e
        ? this.toArray()
        : 0 > e
        ? this[this.length + e]
        : this[e];
    },
    pushStack: function(e) {
      var t = x.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function(e, t) {
      return x.each(this, e, t);
    },
    ready: function(e) {
      return x.ready.promise().done(e), this;
    },
    slice: function() {
      return this.pushStack(g.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function(e) {
      return this.pushStack(
        x.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }),
    (x.fn.init.prototype = x.fn),
    (x.extend = x.fn.extend = function() {
      var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;
      for (
        "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (l = 2)),
          "object" == typeof s || x.isFunction(s) || (s = {}),
          u === l && ((s = this), --l);
        u > l;
        l++
      )
        if (null != (o = arguments[l]))
          for (i in o)
            (e = s[i]),
              (r = o[i]),
              s !== r &&
                (c && r && (x.isPlainObject(r) || (n = x.isArray(r)))
                  ? (n
                      ? ((n = !1), (a = e && x.isArray(e) ? e : []))
                      : (a = e && x.isPlainObject(e) ? e : {}),
                    (s[i] = x.extend(c, a, r)))
                  : r !== t && (s[i] = r));
      return s;
    }),
    x.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      noConflict: function(t) {
        return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? x.readyWait++ : x.ready(!0);
      },
      ready: function(e) {
        if (e === !0 ? !--x.readyWait : !x.isReady) {
          if (!a.body) return setTimeout(x.ready);
          (x.isReady = !0),
            (e !== !0 && --x.readyWait > 0) ||
              (n.resolveWith(a, [x]),
              x.fn.trigger &&
                x(a)
                  .trigger("ready")
                  .off("ready"));
        }
      },
      isFunction: function(e) {
        return "function" === x.type(e);
      },
      isArray:
        Array.isArray ||
        function(e) {
          return "array" === x.type(e);
        },
      isWindow: function(e) {
        return null != e && e == e.window;
      },
      isNumeric: function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? c[y.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function(e) {
        var n;
        if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !v.call(e, "constructor") &&
            !v.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (r) {
          return !1;
        }
        if (x.support.ownLast) for (n in e) return v.call(e, n);
        for (n in e);
        return n === t || v.call(e, n);
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function(e) {
        throw Error(e);
      },
      parseHTML: function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || a);
        var r = k.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = x.buildFragment([e], t, i)),
            i && x(i).remove(),
            x.merge([], r.childNodes));
      },
      parseJSON: function(n) {
        return e.JSON && e.JSON.parse
          ? e.JSON.parse(n)
          : null === n
          ? n
          : "string" == typeof n &&
            ((n = x.trim(n)),
            n &&
              E.test(
                n
                  .replace(A, "@")
                  .replace(j, "]")
                  .replace(S, "")
              ))
          ? Function("return " + n)()
          : (x.error("Invalid JSON: " + n), t);
      },
      parseXML: function(n) {
        var r, i;
        if (!n || "string" != typeof n) return null;
        try {
          e.DOMParser
            ? ((i = new DOMParser()), (r = i.parseFromString(n, "text/xml")))
            : ((r = new ActiveXObject("Microsoft.XMLDOM")),
              (r.async = "false"),
              r.loadXML(n));
        } catch (o) {
          r = t;
        }
        return (
          (r &&
            r.documentElement &&
            !r.getElementsByTagName("parsererror").length) ||
            x.error("Invalid XML: " + n),
          r
        );
      },
      noop: function() {},
      globalEval: function(t) {
        t &&
          x.trim(t) &&
          (
            e.execScript ||
            function(t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function(e) {
        return e.replace(D, "ms-").replace(L, H);
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function(e, t, n) {
        var r,
          i = 0,
          o = e.length,
          a = M(e);
        if (n) {
          if (a) {
            for (; o > i; i++) if (((r = t.apply(e[i], n)), r === !1)) break;
          } else for (i in e) if (((r = t.apply(e[i], n)), r === !1)) break;
        } else if (a) {
          for (; o > i; i++) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
        } else for (i in e) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
        return e;
      },
      trim:
        b && !b.call("\ufeff\u00a0")
          ? function(e) {
              return null == e ? "" : b.call(e);
            }
          : function(e) {
              return null == e ? "" : (e + "").replace(C, "");
            },
      makeArray: function(e, t) {
        var n = t || [];
        return (
          null != e &&
            (M(Object(e))
              ? x.merge(n, "string" == typeof e ? [e] : e)
              : h.call(n, e)),
          n
        );
      },
      inArray: function(e, t, n) {
        var r;
        if (t) {
          if (m) return m.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function(e, n) {
        var r = n.length,
          i = e.length,
          o = 0;
        if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
        else while (n[o] !== t) e[i++] = n[o++];
        return (e.length = i), e;
      },
      grep: function(e, t, n) {
        var r,
          i = [],
          o = 0,
          a = e.length;
        for (n = !!n; a > o; o++) (r = !!t(e[o], o)), n !== r && i.push(e[o]);
        return i;
      },
      map: function(e, t, n) {
        var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];
        if (a)
          for (; o > i; i++)
            (r = t(e[i], i, n)), null != r && (s[s.length] = r);
        else for (i in e) (r = t(e[i], i, n)), null != r && (s[s.length] = r);
        return d.apply([], s);
      },
      guid: 1,
      proxy: function(e, n) {
        var r, i, o;
        return (
          "string" == typeof n && ((o = e[n]), (n = e), (e = o)),
          x.isFunction(e)
            ? ((r = g.call(arguments, 2)),
              (i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || x.guid++),
              i)
            : t
        );
      },
      access: function(e, n, r, i, o, a, s) {
        var l = 0,
          u = e.length,
          c = null == r;
        if ("object" === x.type(r)) {
          o = !0;
          for (l in r) x.access(e, n, l, r[l], !0, a, s);
        } else if (
          i !== t &&
          ((o = !0),
          x.isFunction(i) || (s = !0),
          c &&
            (s
              ? (n.call(e, i), (n = null))
              : ((c = n),
                (n = function(e, t, n) {
                  return c.call(x(e), n);
                }))),
          n)
        )
          for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
        return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
      },
      now: function() {
        return new Date().getTime();
      },
      swap: function(e, t, n, r) {
        var i,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
      }
    }),
    (x.ready.promise = function(t) {
      if (!n)
        if (((n = x.Deferred()), "complete" === a.readyState))
          setTimeout(x.ready);
        else if (a.addEventListener)
          a.addEventListener("DOMContentLoaded", q, !1),
            e.addEventListener("load", q, !1);
        else {
          a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
          var r = !1;
          try {
            r = null == e.frameElement && a.documentElement;
          } catch (i) {}
          r &&
            r.doScroll &&
            (function o() {
              if (!x.isReady) {
                try {
                  r.doScroll("left");
                } catch (e) {
                  return setTimeout(o, 50);
                }
                _(), x.ready();
              }
            })();
        }
      return n.promise(t);
    }),
    x.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function M(e) {
    var t = e.length,
      n = x.type(e);
    return x.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
      ? !0
      : "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
  }
  (r = x(a)),
    (function(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle" + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = lt(),
        k = lt(),
        E = lt(),
        S = !1,
        A = function() {
          return 0;
        },
        j = typeof t,
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F =
          H.indexOf ||
          function(e) {
            var t = 0,
              n = this.length;
            for (; n > t; t++) if (this[t] === e) return t;
            return -1;
          },
        B =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ =
          "\\[" +
          P +
          "*(" +
          R +
          ")" +
          P +
          "*(?:([*^$|!~]?=)" +
          P +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          W +
          ")|)|)" +
          P +
          "*\\]",
        I =
          ":(" +
          R +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          $.replace(3, 8) +
          ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = {
          ID: RegExp("^#(" + R + ")"),
          CLASS: RegExp("^\\.(" + R + ")"),
          TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + $),
          PSEUDO: RegExp("^" + I),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              P +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              P +
              "*(?:([+-]|)" +
              P +
              "*(\\d+)|))" +
              P +
              "*\\)|)",
            "i"
          ),
          bool: RegExp("^(?:" + B + ")$", "i"),
          needsContext: RegExp(
            "^" +
              P +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              P +
              "*((?:-\\d)?\\d*)" +
              P +
              "*\\)|)(?=[^-]|$)",
            "i"
          )
        },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n
            ? t
            : 0 > r
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r));
        };
      try {
        M.apply((H = O.call(w.childNodes)), w.childNodes),
          H[w.childNodes.length].nodeType;
      } catch (ot) {
        M = {
          apply: H.length
            ? function(e, t) {
                _.apply(e, O.call(t));
              }
            : function(e, t) {
                var n = e.length,
                  r = 0;
                while ((e[n++] = t[r++]));
                e.length = n - 1;
              }
        };
      }
      function at(e, t, n, i) {
        var o, a, s, l, u, c, d, m, y, x;
        if (
          ((t ? t.ownerDocument || t : w) !== f && p(t),
          (t = t || f),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (l = t.nodeType) && 9 !== l) return [];
        if (h && !i) {
          if ((o = Z.exec(e)))
            if ((s = o[1])) {
              if (9 === l) {
                if (((a = t.getElementById(s)), !a || !a.parentNode)) return n;
                if (a.id === s) return n.push(a), n;
              } else if (
                t.ownerDocument &&
                (a = t.ownerDocument.getElementById(s)) &&
                v(t, a) &&
                a.id === s
              )
                return n.push(a), n;
            } else {
              if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
              if (
                (s = o[3]) &&
                r.getElementsByClassName &&
                t.getElementsByClassName
              )
                return M.apply(n, t.getElementsByClassName(s)), n;
            }
          if (r.qsa && (!g || !g.test(e))) {
            if (
              ((m = d = b),
              (y = t),
              (x = 9 === l && e),
              1 === l && "object" !== t.nodeName.toLowerCase())
            ) {
              (c = bt(e)),
                (d = t.getAttribute("id"))
                  ? (m = d.replace(nt, "\\$&"))
                  : t.setAttribute("id", m),
                (m = "[id='" + m + "'] "),
                (u = c.length);
              while (u--) c[u] = m + xt(c[u]);
              (y = (V.test(e) && t.parentNode) || t), (x = c.join(","));
            }
            if (x)
              try {
                return M.apply(n, y.querySelectorAll(x)), n;
              } catch (T) {
              } finally {
                d || t.removeAttribute("id");
              }
          }
        }
        return At(e.replace(z, "$1"), t, n, i);
      }
      function st(e) {
        return K.test(e + "");
      }
      function lt() {
        var e = [];
        function t(n, r) {
          return (
            e.push((n += " ")) > o.cacheLength && delete t[e.shift()],
            (t[n] = r)
          );
        }
        return t;
      }
      function ut(e) {
        return (e[b] = !0), e;
      }
      function ct(e) {
        var t = f.createElement("div");
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function pt(e, t, n) {
        e = e.split("|");
        var r,
          i = e.length,
          a = n ? null : t;
        while (i--)
          ((r = o.attrHandle[e[i]]) && r !== t) || (o.attrHandle[e[i]] = a);
      }
      function ft(e, t) {
        var n = e.getAttributeNode(t);
        return n && n.specified
          ? n.value
          : e[t] === !0
          ? t.toLowerCase()
          : null;
      }
      function dt(e, t) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }
      function ht(e) {
        return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t;
      }
      function gt(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || D) - (~e.sourceIndex || D);
        if (r) return r;
        if (n) while ((n = n.nextSibling)) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function mt(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function yt(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function vt(e) {
        return ut(function(t) {
          return (
            (t = +t),
            ut(function(n, r) {
              var i,
                o = e([], n.length, t),
                a = o.length;
              while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      (s = at.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1;
      }),
        (r = at.support = {}),
        (p = at.setDocument = function(e) {
          var n = e ? e.ownerDocument || e : w,
            i = n.parentWindow;
          return n !== f && 9 === n.nodeType && n.documentElement
            ? ((f = n),
              (d = n.documentElement),
              (h = !s(n)),
              i &&
                i.frameElement &&
                i.attachEvent("onbeforeunload", function() {
                  p();
                }),
              (r.attributes = ct(function(e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  pt(
                    "type|href|height|width",
                    dt,
                    "#" === e.firstChild.getAttribute("href")
                  ),
                  pt(B, ft, null == e.getAttribute("disabled")),
                  (e.className = "i"),
                  !e.getAttribute("className")
                );
              })),
              (r.input = ct(function(e) {
                return (
                  (e.innerHTML = "<input>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })),
              pt("value", ht, r.attributes && r.input),
              (r.getElementsByTagName = ct(function(e) {
                return (
                  e.appendChild(n.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (r.getElementsByClassName = ct(function(e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
              (r.getById = ct(function(e) {
                return (
                  (d.appendChild(e).id = b),
                  !n.getElementsByName || !n.getElementsByName(b).length
                );
              })),
              r.getById
                ? ((o.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && h) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete o.find.ID,
                  (o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                      var n =
                        typeof e.getAttributeNode !== j &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (o.find.TAG = r.getElementsByTagName
                ? function(e, n) {
                    return typeof n.getElementsByTagName !== j
                      ? n.getElementsByTagName(e)
                      : t;
                  }
                : function(e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (o.find.CLASS =
                r.getElementsByClassName &&
                function(e, n) {
                  return typeof n.getElementsByClassName !== j && h
                    ? n.getElementsByClassName(e)
                    : t;
                }),
              (m = []),
              (g = []),
              (r.qsa = st(n.querySelectorAll)) &&
                (ct(function(e) {
                  (e.innerHTML =
                    "<select><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length ||
                      g.push("\\[" + P + "*(?:value|" + B + ")"),
                    e.querySelectorAll(":checked").length || g.push(":checked");
                }),
                ct(function(e) {
                  var t = n.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("t", ""),
                    e.querySelectorAll("[t^='']").length &&
                      g.push("[*^$]=" + P + "*(?:''|\"\")"),
                    e.querySelectorAll(":enabled").length ||
                      g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:");
                })),
              (r.matchesSelector = st(
                (y =
                  d.webkitMatchesSelector ||
                  d.mozMatchesSelector ||
                  d.oMatchesSelector ||
                  d.msMatchesSelector)
              )) &&
                ct(function(e) {
                  (r.disconnectedMatch = y.call(e, "div")),
                    y.call(e, "[s!='']:x"),
                    m.push("!=", I);
                }),
              (g = g.length && RegExp(g.join("|"))),
              (m = m.length && RegExp(m.join("|"))),
              (v =
                st(d.contains) || d.compareDocumentPosition
                  ? function(e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function(e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (r.sortDetached = ct(function(e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"));
              })),
              (A = d.compareDocumentPosition
                ? function(e, t) {
                    if (e === t) return (S = !0), 0;
                    var i =
                      t.compareDocumentPosition &&
                      e.compareDocumentPosition &&
                      e.compareDocumentPosition(t);
                    return i
                      ? 1 & i ||
                        (!r.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === n || v(w, e)
                          ? -1
                          : t === n || v(w, t)
                          ? 1
                          : c
                          ? F.call(c, e) - F.call(c, t)
                          : 0
                        : 4 & i
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : function(e, t) {
                    var r,
                      i = 0,
                      o = e.parentNode,
                      a = t.parentNode,
                      s = [e],
                      l = [t];
                    if (e === t) return (S = !0), 0;
                    if (!o || !a)
                      return e === n
                        ? -1
                        : t === n
                        ? 1
                        : o
                        ? -1
                        : a
                        ? 1
                        : c
                        ? F.call(c, e) - F.call(c, t)
                        : 0;
                    if (o === a) return gt(e, t);
                    r = e;
                    while ((r = r.parentNode)) s.unshift(r);
                    r = t;
                    while ((r = r.parentNode)) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i
                      ? gt(s[i], l[i])
                      : s[i] === w
                      ? -1
                      : l[i] === w
                      ? 1
                      : 0;
                  }),
              n)
            : f;
        }),
        (at.matches = function(e, t) {
          return at(e, null, null, t);
        }),
        (at.matchesSelector = function(e, t) {
          if (
            ((e.ownerDocument || e) !== f && p(e),
            (t = t.replace(Y, "='$1']")),
            !(!r.matchesSelector || !h || (m && m.test(t)) || (g && g.test(t))))
          )
            try {
              var n = y.call(e, t);
              if (
                n ||
                r.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (i) {}
          return at(t, f, null, [e]).length > 0;
        }),
        (at.contains = function(e, t) {
          return (e.ownerDocument || e) !== f && p(e), v(e, t);
        }),
        (at.attr = function(e, n) {
          (e.ownerDocument || e) !== f && p(e);
          var i = o.attrHandle[n.toLowerCase()],
            a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
          return a === t
            ? r.attributes || !h
              ? e.getAttribute(n)
              : (a = e.getAttributeNode(n)) && a.specified
              ? a.value
              : null
            : a;
        }),
        (at.error = function(e) {
          throw Error("Syntax error, unrecognized expression: " + e);
        }),
        (at.uniqueSort = function(e) {
          var t,
            n = [],
            i = 0,
            o = 0;
          if (
            ((S = !r.detectDuplicates),
            (c = !r.sortStable && e.slice(0)),
            e.sort(A),
            S)
          ) {
            while ((t = e[o++])) t === e[o] && (i = n.push(o));
            while (i--) e.splice(n[i], 1);
          }
          return e;
        }),
        (a = at.getText = function(e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r]); r++) n += a(t);
          return n;
        }),
        (o = at.selectors = {
          cacheLength: 50,
          createPseudo: ut,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(e) {
              return (
                (e[1] = e[1].replace(rt, it)),
                (e[3] = (e[4] || e[5] || "").replace(rt, it)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function(e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || at.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && at.error(e[0]),
                e
              );
            },
            PSEUDO: function(e) {
              var n,
                r = !e[5] && e[2];
              return Q.CHILD.test(e[0])
                ? null
                : (e[3] && e[4] !== t
                    ? (e[2] = e[4])
                    : r &&
                      J.test(r) &&
                      (n = bt(r, !0)) &&
                      (n = r.indexOf(")", r.length - n) - r.length) &&
                      ((e[0] = e[0].slice(0, n)), (e[2] = r.slice(0, n))),
                  e.slice(0, 3));
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(rt, it).toLowerCase();
              return "*" === e
                ? function() {
                    return !0;
                  }
                : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function(e) {
              var t = N[e + " "];
              return (
                t ||
                ((t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                  N(e, function(e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== j &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function(e, t, n) {
              return function(r) {
                var i = at.attr(r, e);
                return null == i
                  ? "!=" === t
                  : t
                  ? ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && i.indexOf(n) > -1
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + i + " ").indexOf(n) > -1
                      : "|=" === t
                      ? i === n || i.slice(0, n.length + 1) === n + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function(e) {
                    return !!e.parentNode;
                  }
                : function(t, n, l) {
                    var u,
                      c,
                      p,
                      f,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      y = s && t.nodeName.toLowerCase(),
                      v = !l && !s;
                    if (m) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              s
                                ? p.nodeName.toLowerCase() === y
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                        (c = m[b] || (m[b] = {})),
                          (u = c[e] || []),
                          (d = u[0] === T && u[1]),
                          (f = u[0] === T && u[2]),
                          (p = d && m.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (f = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++f && p === t) {
                            c[e] = [T, d, f];
                            break;
                          }
                      } else if (
                        v &&
                        (u = (t[b] || (t[b] = {}))[e]) &&
                        u[0] === T
                      )
                        f = u[1];
                      else
                        while (
                          (p = (++d && p && p[g]) || (f = d = 0) || h.pop())
                        )
                          if (
                            (s
                              ? p.nodeName.toLowerCase() === y
                              : 1 === p.nodeType) &&
                            ++f &&
                            (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)
                          )
                            break;
                      return (f -= i), f === r || (0 === f % r && f / r >= 0);
                    }
                  };
            },
            PSEUDO: function(e, t) {
              var n,
                r =
                  o.pseudos[e] ||
                  o.setFilters[e.toLowerCase()] ||
                  at.error("unsupported pseudo: " + e);
              return r[b]
                ? r(t)
                : r.length > 1
                ? ((n = [e, e, "", t]),
                  o.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ut(function(e, n) {
                        var i,
                          o = r(e, t),
                          a = o.length;
                        while (a--)
                          (i = F.call(e, o[a])), (e[i] = !(n[i] = o[a]));
                      })
                    : function(e) {
                        return r(e, 0, n);
                      })
                : r;
            }
          },
          pseudos: {
            not: ut(function(e) {
              var t = [],
                n = [],
                r = l(e.replace(z, "$1"));
              return r[b]
                ? ut(function(e, t, n, i) {
                    var o,
                      a = r(e, null, i, []),
                      s = e.length;
                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function(e, i, o) {
                    return (t[0] = e), r(t, null, o, n), !n.pop();
                  };
            }),
            has: ut(function(e) {
              return function(t) {
                return at(e, t).length > 0;
              };
            }),
            contains: ut(function(e) {
              return function(t) {
                return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
              };
            }),
            lang: ut(function(e) {
              return (
                G.test(e || "") || at.error("unsupported lang: " + e),
                (e = e.replace(rt, it).toLowerCase()),
                function(t) {
                  var n;
                  do
                    if (
                      (n = h
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function(e) {
              return e === d;
            },
            focus: function(e) {
              return (
                e === f.activeElement &&
                (!f.hasFocus || f.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function(e) {
              return e.disabled === !1;
            },
            disabled: function(e) {
              return e.disabled === !0;
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function(e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                  return !1;
              return !0;
            },
            parent: function(e) {
              return !o.pseudos.empty(e);
            },
            header: function(e) {
              return tt.test(e.nodeName);
            },
            input: function(e) {
              return et.test(e.nodeName);
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function(e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  t.toLowerCase() === e.type)
              );
            },
            first: vt(function() {
              return [0];
            }),
            last: vt(function(e, t) {
              return [t - 1];
            }),
            eq: vt(function(e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: vt(function(e, t) {
              var n = 0;
              for (; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: vt(function(e, t) {
              var n = 1;
              for (; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: vt(function(e, t, n) {
              var r = 0 > n ? n + t : n;
              for (; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: vt(function(e, t, n) {
              var r = 0 > n ? n + t : n;
              for (; t > ++r; ) e.push(r);
              return e;
            })
          }
        });
      for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        o.pseudos[n] = mt(n);
      for (n in { submit: !0, reset: !0 }) o.pseudos[n] = yt(n);
      function bt(e, t) {
        var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);
        (s = e), (l = []), (u = o.preFilter);
        while (s) {
          (!n || (r = X.exec(s))) &&
            (r && (s = s.slice(r[0].length) || s), l.push((i = []))),
            (n = !1),
            (r = U.exec(s)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(z, " ") }),
              (s = s.slice(n.length)));
          for (a in o.filter)
            !(r = Q[a].exec(s)) ||
              (u[a] && !(r = u[a](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: a, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
      }
      function xt(e) {
        var t = 0,
          n = e.length,
          r = "";
        for (; n > t; t++) r += e[t].value;
        return r;
      }
      function wt(e, t, n) {
        var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;
        return t.first
          ? function(t, n, i) {
              while ((t = t[r])) if (1 === t.nodeType || o) return e(t, n, i);
            }
          : function(t, n, s) {
              var l,
                u,
                c,
                p = T + " " + a;
              if (s) {
                while ((t = t[r]))
                  if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
              } else
                while ((t = t[r]))
                  if (1 === t.nodeType || o)
                    if (((c = t[b] || (t[b] = {})), (u = c[r]) && u[0] === p)) {
                      if ((l = u[1]) === !0 || l === i) return l === !0;
                    } else if (
                      ((u = c[r] = [p]), (u[1] = e(t, n, s) || i), u[1] === !0)
                    )
                      return !0;
            };
      }
      function Tt(e) {
        return e.length > 1
          ? function(t, n, r) {
              var i = e.length;
              while (i--) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function Ct(e, t, n, r, i) {
        var o,
          a = [],
          s = 0,
          l = e.length,
          u = null != t;
        for (; l > s; s++)
          (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
        return a;
      }
      function Nt(e, t, n, r, i, o) {
        return (
          r && !r[b] && (r = Nt(r)),
          i && !i[b] && (i = Nt(i, o)),
          ut(function(o, a, s, l) {
            var u,
              c,
              p,
              f = [],
              d = [],
              h = a.length,
              g = o || St(t || "*", s.nodeType ? [s] : s, []),
              m = !e || (!o && t) ? g : Ct(g, f, e, s, l),
              y = n ? (i || (o ? e : h || r) ? [] : a) : m;
            if ((n && n(m, y, s, l), r)) {
              (u = Ct(y, d)), r(u, [], s, l), (c = u.length);
              while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
            }
            if (o) {
              if (i || e) {
                if (i) {
                  (u = []), (c = y.length);
                  while (c--) (p = y[c]) && u.push((m[c] = p));
                  i(null, (y = []), u, l);
                }
                c = y.length;
                while (c--)
                  (p = y[c]) &&
                    (u = i ? F.call(o, p) : f[c]) > -1 &&
                    (o[u] = !(a[u] = p));
              }
            } else (y = Ct(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, l) : M.apply(a, y);
          })
        );
      }
      function kt(e) {
        var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = wt(
            function(e) {
              return e === t;
            },
            s,
            !0
          ),
          p = wt(
            function(e) {
              return F.call(t, e) > -1;
            },
            s,
            !0
          ),
          f = [
            function(e, n, r) {
              return (
                (!a && (r || n !== u)) ||
                ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
              );
            }
          ];
        for (; i > l; l++)
          if ((n = o.relative[e[l].type])) f = [wt(Tt(f), n)];
          else {
            if (((n = o.filter[e[l].type].apply(null, e[l].matches)), n[b])) {
              for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
              return Nt(
                l > 1 && Tt(f),
                l > 1 &&
                  xt(
                    e
                      .slice(0, l - 1)
                      .concat({ value: " " === e[l - 2].type ? "*" : "" })
                  ).replace(z, "$1"),
                n,
                r > l && kt(e.slice(l, r)),
                i > r && kt((e = e.slice(r))),
                i > r && xt(e)
              );
            }
            f.push(n);
          }
        return Tt(f);
      }
      function Et(e, t) {
        var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function(s, l, c, p, d) {
            var h,
              g,
              m,
              y = [],
              v = 0,
              b = "0",
              x = s && [],
              w = null != d,
              C = u,
              N = s || (a && o.find.TAG("*", (d && l.parentNode) || l)),
              k = (T += null == C ? 1 : Math.random() || 0.1);
            for (w && ((u = l !== f && l), (i = n)); null != (h = N[b]); b++) {
              if (a && h) {
                g = 0;
                while ((m = e[g++]))
                  if (m(h, l, c)) {
                    p.push(h);
                    break;
                  }
                w && ((T = k), (i = ++n));
              }
              r && ((h = !m && h) && v--, s && x.push(h));
            }
            if (((v += b), r && b !== v)) {
              g = 0;
              while ((m = t[g++])) m(x, y, l, c);
              if (s) {
                if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
                y = Ct(y);
              }
              M.apply(p, y),
                w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
            }
            return w && ((T = k), (u = C)), x;
          };
        return r ? ut(s) : s;
      }
      l = at.compile = function(e, t) {
        var n,
          r = [],
          i = [],
          o = E[e + " "];
        if (!o) {
          t || (t = bt(e)), (n = t.length);
          while (n--) (o = kt(t[n])), o[b] ? r.push(o) : i.push(o);
          o = E(e, Et(i, r));
        }
        return o;
      };
      function St(e, t, n) {
        var r = 0,
          i = t.length;
        for (; i > r; r++) at(e, t[r], n);
        return n;
      }
      function At(e, t, n, i) {
        var a,
          s,
          u,
          c,
          p,
          f = bt(e);
        if (!i && 1 === f.length) {
          if (
            ((s = f[0] = f[0].slice(0)),
            s.length > 2 &&
              "ID" === (u = s[0]).type &&
              r.getById &&
              9 === t.nodeType &&
              h &&
              o.relative[s[1].type])
          ) {
            if (
              ((t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0]), !t)
            )
              return n;
            e = e.slice(s.shift().value.length);
          }
          a = Q.needsContext.test(e) ? 0 : s.length;
          while (a--) {
            if (((u = s[a]), o.relative[(c = u.type)])) break;
            if (
              (p = o.find[c]) &&
              (i = p(
                u.matches[0].replace(rt, it),
                (V.test(s[0].type) && t.parentNode) || t
              ))
            ) {
              if ((s.splice(a, 1), (e = i.length && xt(s)), !e))
                return M.apply(n, i), n;
              break;
            }
          }
        }
        return l(e, f)(i, t, !h, n, V.test(e)), n;
      }
      o.pseudos.nth = o.pseudos.eq;
      function jt() {}
      (jt.prototype = o.filters = o.pseudos),
        (o.setFilters = new jt()),
        (r.sortStable =
          b
            .split("")
            .sort(A)
            .join("") === b),
        p(),
        [0, 0].sort(A),
        (r.detectDuplicates = S),
        (x.find = at),
        (x.expr = at.selectors),
        (x.expr[":"] = x.expr.pseudos),
        (x.unique = at.uniqueSort),
        (x.text = at.getText),
        (x.isXMLDoc = at.isXML),
        (x.contains = at.contains);
    })(e);
  var O = {};
  function F(e) {
    var t = (O[e] = {});
    return (
      x.each(e.match(T) || [], function(e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  (x.Callbacks = function(e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
    var n,
      r,
      i,
      o,
      a,
      s,
      l = [],
      u = !e.once && [],
      c = function(t) {
        for (
          r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0;
          l && o > a;
          a++
        )
          if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            r = !1;
            break;
          }
        (n = !1),
          l && (u ? u.length && c(u.shift()) : r ? (l = []) : p.disable());
      },
      p = {
        add: function() {
          if (l) {
            var t = l.length;
            (function i(t) {
              x.each(t, function(t, n) {
                var r = x.type(n);
                "function" === r
                  ? (e.unique && p.has(n)) || l.push(n)
                  : n && n.length && "string" !== r && i(n);
              });
            })(arguments),
              n ? (o = l.length) : r && ((s = t), c(r));
          }
          return this;
        },
        remove: function() {
          return (
            l &&
              x.each(arguments, function(e, t) {
                var r;
                while ((r = x.inArray(t, l, r)) > -1)
                  l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
              }),
            this
          );
        },
        has: function(e) {
          return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function() {
          return (l = []), (o = 0), this;
        },
        disable: function() {
          return (l = u = r = t), this;
        },
        disabled: function() {
          return !l;
        },
        lock: function() {
          return (u = t), r || p.disable(), this;
        },
        locked: function() {
          return !u;
        },
        fireWith: function(e, t) {
          return (
            (t = t || []),
            (t = [e, t.slice ? t.slice() : t]),
            !l || (i && !u) || (n ? u.push(t) : c(t)),
            this
          );
        },
        fire: function() {
          return p.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!i;
        }
      };
    return p;
  }),
    x.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", x.Callbacks("once memory"), "resolved"],
            ["reject", "fail", x.Callbacks("once memory"), "rejected"],
            ["notify", "progress", x.Callbacks("memory")]
          ],
          n = "pending",
          r = {
            state: function() {
              return n;
            },
            always: function() {
              return i.done(arguments).fail(arguments), this;
            },
            then: function() {
              var e = arguments;
              return x
                .Deferred(function(n) {
                  x.each(t, function(t, o) {
                    var a = o[0],
                      s = x.isFunction(e[t]) && e[t];
                    i[o[1]](function() {
                      var e = s && s.apply(this, arguments);
                      e && x.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[a + "With"](
                            this === r ? n.promise() : this,
                            s ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function(e) {
              return null != e ? x.extend(e, r) : r;
            }
          },
          i = {};
        return (
          (r.pipe = r.then),
          x.each(t, function(e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function() {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function() {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function(e) {
        var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = 1 !== r || (e && x.isFunction(e.promise)) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          a = function(e, t, n) {
            return function(r) {
              (t[e] = this),
                (n[e] = arguments.length > 1 ? g.call(arguments) : r),
                n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
            };
          },
          s,
          l,
          u;
        if (r > 1)
          for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)
            n[t] && x.isFunction(n[t].promise)
              ? n[t]
                  .promise()
                  .done(a(t, u, n))
                  .fail(o.reject)
                  .progress(a(t, l, s))
              : --i;
        return i || o.resolveWith(u, n), o.promise();
      }
    }),
    (x.support = (function(t) {
      var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement("div");
      if (
        (d.setAttribute("className", "t"),
        (d.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = d.getElementsByTagName("*") || []),
        (r = d.getElementsByTagName("a")[0]),
        !r || !r.style || !n.length)
      )
        return t;
      (s = a.createElement("select")),
        (u = s.appendChild(a.createElement("option"))),
        (o = d.getElementsByTagName("input")[0]),
        (r.style.cssText = "top:1px;float:left;opacity:.5"),
        (t.getSetAttribute = "t" !== d.className),
        (t.leadingWhitespace = 3 === d.firstChild.nodeType),
        (t.tbody = !d.getElementsByTagName("tbody").length),
        (t.htmlSerialize = !!d.getElementsByTagName("link").length),
        (t.style = /top/.test(r.getAttribute("style"))),
        (t.hrefNormalized = "/a" === r.getAttribute("href")),
        (t.opacity = /^0.5/.test(r.style.opacity)),
        (t.cssFloat = !!r.style.cssFloat),
        (t.checkOn = !!o.value),
        (t.optSelected = u.selected),
        (t.enctype = !!a.createElement("form").enctype),
        (t.html5Clone =
          "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML),
        (t.inlineBlockNeedsLayout = !1),
        (t.shrinkWrapBlocks = !1),
        (t.pixelPosition = !1),
        (t.deleteExpando = !0),
        (t.noCloneEvent = !0),
        (t.reliableMarginRight = !0),
        (t.boxSizingReliable = !0),
        (o.checked = !0),
        (t.noCloneChecked = o.cloneNode(!0).checked),
        (s.disabled = !0),
        (t.optDisabled = !u.disabled);
      try {
        delete d.test;
      } catch (h) {
        t.deleteExpando = !1;
      }
      (o = a.createElement("input")),
        o.setAttribute("value", ""),
        (t.input = "" === o.getAttribute("value")),
        (o.value = "t"),
        o.setAttribute("type", "radio"),
        (t.radioValue = "t" === o.value),
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        (l = a.createDocumentFragment()),
        l.appendChild(o),
        (t.appendChecked = o.checked),
        (t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked),
        d.attachEvent &&
          (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
          }),
          d.cloneNode(!0).click());
      for (f in { submit: !0, change: !0, focusin: !0 })
        d.setAttribute((c = "on" + f), "t"),
          (t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1);
      (d.style.backgroundClip = "content-box"),
        (d.cloneNode(!0).style.backgroundClip = ""),
        (t.clearCloneStyle = "content-box" === d.style.backgroundClip);
      for (f in x(t)) break;
      return (
        (t.ownLast = "0" !== f),
        x(function() {
          var n,
            r,
            o,
            s =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            l = a.getElementsByTagName("body")[0];
          l &&
            ((n = a.createElement("div")),
            (n.style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            l.appendChild(n).appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (o = d.getElementsByTagName("td")),
            (o[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (p = 0 === o[0].offsetHeight),
            (o[0].style.display = ""),
            (o[1].style.display = "none"),
            (t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight),
            (d.innerHTML = ""),
            (d.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function() {
              t.boxSizing = 4 === d.offsetWidth;
            }),
            e.getComputedStyle &&
              ((t.pixelPosition =
                "1%" !== (e.getComputedStyle(d, null) || {}).top),
              (t.boxSizingReliable =
                "4px" ===
                (e.getComputedStyle(d, null) || { width: "4px" }).width),
              (r = d.appendChild(a.createElement("div"))),
              (r.style.cssText = d.style.cssText = s),
              (r.style.marginRight = r.style.width = "0"),
              (d.style.width = "1px"),
              (t.reliableMarginRight = !parseFloat(
                (e.getComputedStyle(r, null) || {}).marginRight
              ))),
            typeof d.style.zoom !== i &&
              ((d.innerHTML = ""),
              (d.style.cssText =
                s + "width:1px;padding:1px;display:inline;zoom:1"),
              (t.inlineBlockNeedsLayout = 3 === d.offsetWidth),
              (d.style.display = "block"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (t.shrinkWrapBlocks = 3 !== d.offsetWidth),
              t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            (n = d = o = r = null));
        }),
        (n = s = l = u = r = o = null),
        t
      );
    })({}));
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    P = /([A-Z])/g;
  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
        a,
        s = x.expando,
        l = e.nodeType,
        u = l ? x.cache : e,
        c = l ? e[s] : e[s] && s;
      if ((c && u[c] && (i || u[c].data)) || r !== t || "string" != typeof n)
        return (
          c || (c = l ? (e[s] = p.pop() || x.guid++) : s),
          u[c] || (u[c] = l ? {} : { toJSON: x.noop }),
          ("object" == typeof n || "function" == typeof n) &&
            (i
              ? (u[c] = x.extend(u[c], n))
              : (u[c].data = x.extend(u[c].data, n))),
          (a = u[c]),
          i || (a.data || (a.data = {}), (a = a.data)),
          r !== t && (a[x.camelCase(n)] = r),
          "string" == typeof n
            ? ((o = a[n]), null == o && (o = a[x.camelCase(n)]))
            : (o = a),
          o
        );
    }
  }
  function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? x.cache : e,
        s = o ? e[x.expando] : x.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t)
            ? (t = t.concat(x.map(t, x.camelCase)))
            : t in r
            ? (t = [t])
            : ((t = x.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
            (i = t.length);
          while (i--) delete r[t[i]];
          if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, I(a[s]))) &&
          (o
            ? x.cleanData([e], !0)
            : x.support.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = null));
      }
    }
  }
  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return (
        (e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]), !!e && !I(e)
      );
    },
    data: function(e, t, n) {
      return R(e, t, n);
    },
    removeData: function(e, t) {
      return W(e, t);
    },
    _data: function(e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function(e, t) {
      return W(e, t, !0);
    },
    acceptData: function(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || (t !== !0 && e.getAttribute("classid") === t);
    }
  }),
    x.fn.extend({
      data: function(e, n) {
        var r,
          i,
          o = null,
          a = 0,
          s = this[0];
        if (e === t) {
          if (
            this.length &&
            ((o = x.data(s)), 1 === s.nodeType && !x._data(s, "parsedAttrs"))
          ) {
            for (r = s.attributes; r.length > a; a++)
              (i = r[a].name),
                0 === i.indexOf("data-") &&
                  ((i = x.camelCase(i.slice(5))), $(s, i, o[i]));
            x._data(s, "parsedAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function() {
              x.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function() {
              x.data(this, e, n);
            })
          : s
          ? $(s, e, x.data(s, e))
          : null;
      },
      removeData: function(e) {
        return this.each(function() {
          x.removeData(this, e);
        });
      }
    });
  function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      if (((r = e.getAttribute(i)), "string" == typeof r)) {
        try {
          r =
            "true" === r
              ? !0
              : "false" === r
              ? !1
              : "null" === r
              ? null
              : +r + "" === r
              ? +r
              : B.test(r)
              ? x.parseJSON(r)
              : r;
        } catch (o) {}
        x.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function I(e) {
    var t;
    for (t in e)
      if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  x.extend({
    queue: function(e, n, r) {
      var i;
      return e
        ? ((n = (n || "fx") + "queue"),
          (i = x._data(e, n)),
          r &&
            (!i || x.isArray(r)
              ? (i = x._data(e, n, x.makeArray(r)))
              : i.push(r)),
          i || [])
        : t;
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = x.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = x._queueHooks(e, t),
        a = function() {
          x.dequeue(e, t);
        };
      "inprogress" === i && ((i = n.shift()), r--),
        i &&
          ("fx" === t && n.unshift("inprogress"),
          delete o.stop,
          i.call(e, a, o)),
        !r && o && o.empty.fire();
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return (
        x._data(e, n) ||
        x._data(e, n, {
          empty: x.Callbacks("once memory").add(function() {
            x._removeData(e, t + "queue"), x._removeData(e, n);
          })
        })
      );
    }
  }),
    x.fn.extend({
      queue: function(e, n) {
        var r = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), r--),
          r > arguments.length
            ? x.queue(this[0], e)
            : n === t
            ? this
            : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          x.dequeue(this, e);
        });
      },
      delay: function(e, t) {
        return (
          (e = x.fx ? x.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
              clearTimeout(r);
            };
          })
        );
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      promise: function(e, n) {
        var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function() {
            --i || o.resolveWith(a, [a]);
          };
        "string" != typeof e && ((n = e), (e = t)), (e = e || "fx");
        while (s--)
          (r = x._data(a[s], e + "queueHooks")),
            r && r.empty && (i++, r.empty.add(l));
        return l(), o.promise(n);
      }
    });
  var z,
    X,
    U = /[\t\r\n\f]/g,
    V = /\r/g,
    Y = /^(?:input|select|textarea|button|object)$/i,
    J = /^(?:a|area)$/i,
    G = /^(?:checked|selected)$/i,
    Q = x.support.getSetAttribute,
    K = x.support.input;
  x.fn.extend({
    attr: function(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        x.removeAttr(this, e);
      });
    },
    prop: function(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return (
        (e = x.propFix[e] || e),
        this.each(function() {
          try {
            (this[e] = t), delete this[e];
          } catch (n) {}
        })
      );
    },
    addClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        l = "string" == typeof e && e;
      if (x.isFunction(e))
        return this.each(function(t) {
          x(this).addClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || "").match(T) || []; s > a; a++)
          if (
            ((n = this[a]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(U, " ") : " ")))
          ) {
            o = 0;
            while ((i = t[o++])) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r);
          }
      return this;
    },
    removeClass: function(e) {
      var t,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        l = 0 === arguments.length || ("string" == typeof e && e);
      if (x.isFunction(e))
        return this.each(function(t) {
          x(this).removeClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || "").match(T) || []; s > a; a++)
          if (
            ((n = this[a]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(U, " ") : "")))
          ) {
            o = 0;
            while ((i = t[o++]))
              while (r.indexOf(" " + i + " ") >= 0)
                r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : "";
          }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        r = "boolean" == typeof t;
      return x.isFunction(e)
        ? this.each(function(n) {
            x(this).toggleClass(e.call(this, n, this.className, t), t);
          })
        : this.each(function() {
            if ("string" === n) {
              var o,
                a = 0,
                s = x(this),
                l = t,
                u = e.match(T) || [];
              while ((o = u[a++]))
                (l = r ? l : !s.hasClass(o)),
                  s[l ? "addClass" : "removeClass"](o);
            } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || ""));
          });
    },
    hasClass: function(e) {
      var t = " " + e + " ",
        n = 0,
        r = this.length;
      for (; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
    val: function(e) {
      var n,
        r,
        i,
        o = this[0];
      {
        if (arguments.length)
          return (
            (i = x.isFunction(e)),
            this.each(function(n) {
              var o;
              1 === this.nodeType &&
                ((o = i ? e.call(this, n, x(this).val()) : e),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : x.isArray(o) &&
                    (o = x.map(o, function(e) {
                      return null == e ? "" : e + "";
                    })),
                (r =
                  x.valHooks[this.type] ||
                  x.valHooks[this.nodeName.toLowerCase()]),
                (r && "set" in r && r.set(this, o, "value") !== t) ||
                  (this.value = o));
            })
          );
        if (o)
          return (
            (r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]),
            r && "get" in r && (n = r.get(o, "value")) !== t
              ? n
              : ((n = o.value),
                "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
          );
      }
    }
  }),
    x.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = x.find.attr(e, "value");
            return null != t ? t : e.text;
          }
        },
        select: {
          get: function(e) {
            var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = 0 > i ? s : o ? i : 0;
            for (; s > l; l++)
              if (
                ((n = r[l]),
                !(
                  (!n.selected && l !== i) ||
                  (x.support.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    x.nodeName(n.parentNode, "optgroup"))
                ))
              ) {
                if (((t = x(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function(e, t) {
            var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;
            while (a--)
              (r = i[a]),
                (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          }
        }
      },
      attr: function(e, n, r) {
        var o,
          a,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return typeof e.getAttribute === i
            ? x.prop(e, n, r)
            : ((1 === s && x.isXMLDoc(e)) ||
                ((n = n.toLowerCase()),
                (o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z))),
              r === t
                ? o && "get" in o && null !== (a = o.get(e, n))
                  ? a
                  : ((a = x.find.attr(e, n)), null == a ? t : a)
                : null !== r
                ? o && "set" in o && (a = o.set(e, r, n)) !== t
                  ? a
                  : (e.setAttribute(n, r + ""), r)
                : (x.removeAttr(e, n), t));
      },
      removeAttr: function(e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(T);
        if (o && 1 === e.nodeType)
          while ((n = o[i++]))
            (r = x.propFix[n] || n),
              x.expr.match.bool.test(n)
                ? (K && Q) || !G.test(n)
                  ? (e[r] = !1)
                  : (e[x.camelCase("default-" + n)] = e[r] = !1)
                : x.attr(e, n, ""),
              e.removeAttribute(Q ? n : r);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (
              !x.support.radioValue &&
              "radio" === t &&
              x.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" },
      prop: function(e, n, r) {
        var i,
          o,
          a,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return (
            (a = 1 !== s || !x.isXMLDoc(e)),
            a && ((n = x.propFix[n] || n), (o = x.propHooks[n])),
            r !== t
              ? o && "set" in o && (i = o.set(e, r, n)) !== t
                ? i
                : (e[n] = r)
              : o && "get" in o && null !== (i = o.get(e, n))
              ? i
              : e[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = x.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Y.test(e.nodeName) || (J.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      }
    }),
    (X = {
      set: function(e, t, n) {
        return (
          t === !1
            ? x.removeAttr(e, n)
            : (K && Q) || !G.test(n)
            ? e.setAttribute((!Q && x.propFix[n]) || n, n)
            : (e[x.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      }
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
      var r = x.expr.attrHandle[n] || x.find.attr;
      x.expr.attrHandle[n] =
        (K && Q) || !G.test(n)
          ? function(e, n, i) {
              var o = x.expr.attrHandle[n],
                a = i
                  ? t
                  : (x.expr.attrHandle[n] = t) != r(e, n, i)
                  ? n.toLowerCase()
                  : null;
              return (x.expr.attrHandle[n] = o), a;
            }
          : function(e, n, r) {
              return r
                ? t
                : e[x.camelCase("default-" + n)]
                ? n.toLowerCase()
                : null;
            };
    }),
    (K && Q) ||
      (x.attrHooks.value = {
        set: function(e, n, r) {
          return x.nodeName(e, "input")
            ? ((e.defaultValue = n), t)
            : z && z.set(e, n, r);
        }
      }),
    Q ||
      ((z = {
        set: function(e, n, r) {
          var i = e.getAttributeNode(r);
          return (
            i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
            (i.value = n += ""),
            "value" === r || n === e.getAttribute(r) ? n : t
          );
        }
      }),
      (x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(
        e,
        n,
        r
      ) {
        var i;
        return r
          ? t
          : (i = e.getAttributeNode(n)) && "" !== i.value
          ? i.value
          : null;
      }),
      (x.valHooks.button = {
        get: function(e, n) {
          var r = e.getAttributeNode(n);
          return r && r.specified ? r.value : t;
        },
        set: z.set
      }),
      (x.attrHooks.contenteditable = {
        set: function(e, t, n) {
          z.set(e, "" === t ? !1 : t, n);
        }
      }),
      x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
          set: function(e, r) {
            return "" === r ? (e.setAttribute(n, "auto"), r) : t;
          }
        };
      })),
    x.support.hrefNormalized ||
      x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
          get: function(e) {
            return e.getAttribute(t, 4);
          }
        };
      }),
    x.support.style ||
      (x.attrHooks.style = {
        get: function(e) {
          return e.style.cssText || t;
        },
        set: function(e, t) {
          return (e.style.cssText = t + "");
        }
      }),
    x.support.optSelected ||
      (x.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        }
      }),
    x.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function() {
      (x.valHooks[this] = {
        set: function(e, n) {
          return x.isArray(n) ? (e.checked = x.inArray(x(e).val(), n) >= 0) : t;
        }
      }),
        x.support.checkOn ||
          (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Z = /^(?:input|select|textarea)$/i,
    et = /^key/,
    tt = /^(?:mouse|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/,
    rt = /^([^.]*)(?:\.(.+)|)$/;
  function it() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }
  (x.event = {
    global: {},
    add: function(e, n, r, o, a) {
      var s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v = x._data(e);
      if (v) {
        r.handler && ((c = r), (r = c.handler), (a = c.selector)),
          r.guid || (r.guid = x.guid++),
          (l = v.events) || (l = v.events = {}),
          (f = v.handle) ||
            ((f = v.handle = function(e) {
              return typeof x === i || (e && x.event.triggered === e.type)
                ? t
                : x.event.dispatch.apply(f.elem, arguments);
            }),
            (f.elem = e)),
          (n = (n || "").match(T) || [""]),
          (u = n.length);
        while (u--)
          (s = rt.exec(n[u]) || []),
            (g = y = s[1]),
            (m = (s[2] || "").split(".").sort()),
            g &&
              ((p = x.event.special[g] || {}),
              (g = (a ? p.delegateType : p.bindType) || g),
              (p = x.event.special[g] || {}),
              (d = x.extend(
                {
                  type: g,
                  origType: y,
                  data: o,
                  handler: r,
                  guid: r.guid,
                  selector: a,
                  needsContext: a && x.expr.match.needsContext.test(a),
                  namespace: m.join(".")
                },
                c
              )),
              (h = l[g]) ||
                ((h = l[g] = []),
                (h.delegateCount = 0),
                (p.setup && p.setup.call(e, o, m, f) !== !1) ||
                  (e.addEventListener
                    ? e.addEventListener(g, f, !1)
                    : e.attachEvent && e.attachEvent("on" + g, f))),
              p.add &&
                (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
              a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
              (x.event.global[g] = !0));
        e = null;
      }
    },
    remove: function(e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m = x.hasData(e) && x._data(e);
      if (m && (c = m.events)) {
        (t = (t || "").match(T) || [""]), (u = t.length);
        while (u--)
          if (
            ((s = rt.exec(t[u]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (p = x.event.special[d] || {}),
              (d = (r ? p.delegateType : p.bindType) || d),
              (f = c[d] || []),
              (s =
                s[2] &&
                RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (l = o = f.length);
            while (o--)
              (a = f[o]),
                (!i && g !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  p.remove && p.remove.call(e, a));
            l &&
              !f.length &&
              ((p.teardown && p.teardown.call(e, h, m.handle) !== !1) ||
                x.removeEvent(e, d, m.handle),
              delete c[d]);
          } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    },
    trigger: function(n, r, i, o) {
      var s,
        l,
        u,
        c,
        p,
        f,
        d,
        h = [i || a],
        g = v.call(n, "type") ? n.type : n,
        m = v.call(n, "namespace") ? n.namespace.split(".") : [];
      if (
        ((u = f = i = i || a),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !nt.test(g + x.event.triggered) &&
          (g.indexOf(".") >= 0 &&
            ((m = g.split(".")), (g = m.shift()), m.sort()),
          (l = 0 > g.indexOf(":") && "on" + g),
          (n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n)),
          (n.isTrigger = o ? 2 : 3),
          (n.namespace = m.join(".")),
          (n.namespace_re = n.namespace
            ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = t),
          n.target || (n.target = i),
          (r = null == r ? [n] : x.makeArray(r, [n])),
          (p = x.event.special[g] || {}),
          o || !p.trigger || p.trigger.apply(i, r) !== !1))
      ) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (
            c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            h.push(u), (f = u);
          f === (i.ownerDocument || a) &&
            h.push(f.defaultView || f.parentWindow || e);
        }
        d = 0;
        while ((u = h[d++]) && !n.isPropagationStopped())
          (n.type = d > 1 ? c : p.bindType || g),
            (s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle")),
            s && s.apply(u, r),
            (s = l && u[l]),
            s &&
              x.acceptData(u) &&
              s.apply &&
              s.apply(u, r) === !1 &&
              n.preventDefault();
        if (
          ((n.type = g),
          !o &&
            !n.isDefaultPrevented() &&
            (!p._default || p._default.apply(h.pop(), r) === !1) &&
            x.acceptData(i) &&
            l &&
            i[g] &&
            !x.isWindow(i))
        ) {
          (f = i[l]), f && (i[l] = null), (x.event.triggered = g);
          try {
            i[g]();
          } catch (y) {}
          (x.event.triggered = t), f && (i[l] = f);
        }
        return n.result;
      }
    },
    dispatch: function(e) {
      e = x.event.fix(e);
      var n,
        r,
        i,
        o,
        a,
        s = [],
        l = g.call(arguments),
        u = (x._data(this, "events") || {})[e.type] || [],
        c = x.event.special[e.type] || {};
      if (
        ((l[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || c.preDispatch.call(this, e) !== !1)
      ) {
        (s = x.event.handlers.call(this, e, u)), (n = 0);
        while ((o = s[n++]) && !e.isPropagationStopped()) {
          (e.currentTarget = o.elem), (a = 0);
          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
              ((e.handleObj = i),
              (e.data = i.data),
              (r = (
                (x.event.special[i.origType] || {}).handle || i.handler
              ).apply(o.elem, l)),
              r !== t &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, n) {
      var r,
        i,
        o,
        a,
        s = [],
        l = n.delegateCount,
        u = e.target;
      if (l && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; l > a; a++)
              (i = n[a]),
                (r = i.selector + " "),
                o[r] === t &&
                  (o[r] = i.needsContext
                    ? x(r, this).index(u) >= 0
                    : x.find(r, this, null, [u]).length),
                o[r] && o.push(i);
            o.length && s.push({ elem: u, handlers: o });
          }
      return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
    },
    fix: function(e) {
      if (e[x.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      s ||
        (this.fixHooks[i] = s = tt.test(i)
          ? this.mouseHooks
          : et.test(i)
          ? this.keyHooks
          : {}),
        (r = s.props ? this.props.concat(s.props) : this.props),
        (e = new x.Event(o)),
        (t = r.length);
      while (t--) (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = o.srcElement || a),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        s.filter ? s.filter(e, o) : e
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function(e, n) {
        var r,
          i,
          o,
          s = n.button,
          l = n.fromElement;
        return (
          null == e.pageX &&
            null != n.clientX &&
            ((i = e.target.ownerDocument || a),
            (o = i.documentElement),
            (r = i.body),
            (e.pageX =
              n.clientX +
              ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              n.clientY +
              ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
              ((o && o.clientTop) || (r && r.clientTop) || 0))),
          !e.relatedTarget &&
            l &&
            (e.relatedTarget = l === e.target ? n.toElement : l),
          e.which ||
            s === t ||
            (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          e
        );
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== at() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return x.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : t;
        },
        _default: function(e) {
          return x.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    }
  }),
    (x.removeEvent = a.removeEventListener
      ? function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function(e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
        }),
    (x.Event = function(e, n) {
      return this instanceof x.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                e.returnValue === !1 ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? it
                  : ot))
            : (this.type = e),
          n && x.extend(this, n),
          (this.timeStamp = (e && e.timeStamp) || x.now()),
          (this[x.expando] = !0),
          t)
        : new x.Event(e, n);
    }),
    (x.Event.prototype = {
      isDefaultPrevented: ot,
      isPropagationStopped: ot,
      isImmediatePropagationStopped: ot,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = it),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = it),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function() {
        (this.isImmediatePropagationStopped = it), this.stopPropagation();
      }
    }),
    x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
      x.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
          return (
            (!i || (i !== r && !x.contains(r, i))) &&
              ((e.type = o.origType),
              (n = o.handler.apply(this, arguments)),
              (e.type = t)),
            n
          );
        }
      };
    }),
    x.support.submitBubbles ||
      (x.event.special.submit = {
        setup: function() {
          return x.nodeName(this, "form")
            ? !1
            : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                  r =
                    x.nodeName(n, "input") || x.nodeName(n, "button")
                      ? n.form
                      : t;
                r &&
                  !x._data(r, "submitBubbles") &&
                  (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                  }),
                  x._data(r, "submitBubbles", !0));
              }),
              t);
        },
        postDispatch: function(e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              x.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
          return x.nodeName(this, "form")
            ? !1
            : (x.event.remove(this, "._submit"), t);
        }
      }),
    x.support.changeBubbles ||
      (x.event.special.change = {
        setup: function() {
          return Z.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (x.event.add(this, "propertychange._change", function(e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                x.event.add(this, "click._change", function(e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    x.event.simulate("change", this, e, !0);
                })),
              !1)
            : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) &&
                  !x._data(t, "changeBubbles") &&
                  (x.event.add(t, "change._change", function(e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      x.event.simulate("change", this.parentNode, e, !0);
                  }),
                  x._data(t, "changeBubbles", !0));
              }),
              t);
        },
        handle: function(e) {
          var n = e.target;
          return this !== n ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== n.type && "checkbox" !== n.type)
            ? e.handleObj.handler.apply(this, arguments)
            : t;
        },
        teardown: function() {
          return x.event.remove(this, "._change"), !Z.test(this.nodeName);
        }
      }),
    x.support.focusinBubbles ||
      x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = 0,
          r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0);
          };
        x.event.special[t] = {
          setup: function() {
            0 === n++ && a.addEventListener(e, r, !0);
          },
          teardown: function() {
            0 === --n && a.removeEventListener(e, r, !0);
          }
        };
      }),
    x.fn.extend({
      on: function(e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
          "string" != typeof n && ((r = r || n), (n = t));
          for (a in e) this.on(a, n, r, e[a], o);
          return this;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = t))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = t))
                : ((i = r), (r = n), (n = t))),
          i === !1)
        )
          i = ot;
        else if (!i) return this;
        return (
          1 === o &&
            ((s = i),
            (i = function(e) {
              return x().off(e), s.apply(this, arguments);
            }),
            (i.guid = s.guid || (s.guid = x.guid++))),
          this.each(function() {
            x.event.add(this, e, i, r, n);
          })
        );
      },
      one: function(e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function(e, n, r) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            x(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, n, e[o]);
          return this;
        }
        return (
          (n === !1 || "function" == typeof n) && ((r = n), (n = t)),
          r === !1 && (r = ot),
          this.each(function() {
            x.event.remove(this, e, r, n);
          })
        );
      },
      trigger: function(e, t) {
        return this.each(function() {
          x.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, n) {
        var r = this[0];
        return r ? x.event.trigger(e, n, r, !0) : t;
      }
    });
  var st = /^.[^:#\[\.,]*$/,
    lt = /^(?:parents|prev(?:Until|All))/,
    ut = x.expr.match.needsContext,
    ct = { children: !0, contents: !0, next: !0, prev: !0 };
  x.fn.extend({
    find: function(e) {
      var t,
        n = [],
        r = this,
        i = r.length;
      if ("string" != typeof e)
        return this.pushStack(
          x(e).filter(function() {
            for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0;
          })
        );
      for (t = 0; i > t; t++) x.find(e, r[t], n);
      return (
        (n = this.pushStack(i > 1 ? x.unique(n) : n)),
        (n.selector = this.selector ? this.selector + " " + e : e),
        n
      );
    },
    has: function(e) {
      var t,
        n = x(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0;
      });
    },
    not: function(e) {
      return this.pushStack(ft(this, e || [], !0));
    },
    filter: function(e) {
      return this.pushStack(ft(this, e || [], !1));
    },
    is: function(e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1)
        .length;
    },
    closest: function(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
      for (; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            11 > n.nodeType &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && x.find.matchesSelector(n, e))
          ) {
            n = o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function(e) {
      return e
        ? "string" == typeof e
          ? x.inArray(this[0], x(e))
          : x.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      var n =
          "string" == typeof e
            ? x(e, t)
            : x.makeArray(e && e.nodeType ? [e] : e),
        r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function pt(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  x.each(
    {
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function(e) {
        return x.dir(e, "parentNode");
      },
      parentsUntil: function(e, t, n) {
        return x.dir(e, "parentNode", n);
      },
      next: function(e) {
        return pt(e, "nextSibling");
      },
      prev: function(e) {
        return pt(e, "previousSibling");
      },
      nextAll: function(e) {
        return x.dir(e, "nextSibling");
      },
      prevAll: function(e) {
        return x.dir(e, "previousSibling");
      },
      nextUntil: function(e, t, n) {
        return x.dir(e, "nextSibling", n);
      },
      prevUntil: function(e, t, n) {
        return x.dir(e, "previousSibling", n);
      },
      siblings: function(e) {
        return x.sibling((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return x.sibling(e.firstChild);
      },
      contents: function(e) {
        return x.nodeName(e, "iframe")
          ? e.contentDocument || e.contentWindow.document
          : x.merge([], e.childNodes);
      }
    },
    function(e, t) {
      x.fn[e] = function(n, r) {
        var i = x.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = x.filter(r, i)),
          this.length > 1 &&
            (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())),
          this.pushStack(i)
        );
      };
    }
  ),
    x.extend({
      filter: function(e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? x.find.matchesSelector(r, e)
              ? [r]
              : []
            : x.find.matches(
                e,
                x.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      },
      dir: function(e, n, r) {
        var i = [],
          o = e[n];
        while (
          o &&
          9 !== o.nodeType &&
          (r === t || 1 !== o.nodeType || !x(o).is(r))
        )
          1 === o.nodeType && i.push(o), (o = o[n]);
        return i;
      },
      sibling: function(e, t) {
        var n = [];
        for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      }
    });
  function ft(e, t, n) {
    if (x.isFunction(t))
      return x.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return x.grep(e, function(e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);
      t = x.filter(t, e);
    }
    return x.grep(e, function(e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }
  function dt(e) {
    var t = ht.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }
  var ht =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gt = / jQuery\d+="(?:null|\d+)"/g,
    mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
    yt = /^\s+/,
    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bt = /<([\w:]+)/,
    xt = /<tbody/i,
    wt = /<|&#?\w+;/,
    Tt = /<(?:script|style|link)/i,
    Ct = /^(?:checkbox|radio)$/i,
    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^$|\/(?:java|ecma)script/i,
    Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    At = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    jt = dt(a),
    Dt = jt.appendChild(a.createElement("div"));
  (At.optgroup = At.option),
    (At.tbody = At.tfoot = At.colgroup = At.caption = At.thead),
    (At.th = At.td),
    x.fn.extend({
      text: function(e) {
        return x.access(
          this,
          function(e) {
            return e === t
              ? x.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || a).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return this.domManip(arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Lt(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function() {
        return this.domManip(arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Lt(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function(e, t) {
        var n,
          r = e ? x.filter(e, this) : this,
          i = 0;
        for (; null != (n = r[i]); i++)
          t || 1 !== n.nodeType || x.cleanData(Ft(n)),
            n.parentNode &&
              (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function() {
        var e,
          t = 0;
        for (; null != (e = this[t]); t++) {
          1 === e.nodeType && x.cleanData(Ft(e, !1));
          while (e.firstChild) e.removeChild(e.firstChild);
          e.options && x.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null == e ? !1 : e),
          (t = null == t ? e : t),
          this.map(function() {
            return x.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return x.access(
          this,
          function(e) {
            var n = this[0] || {},
              r = 0,
              i = this.length;
            if (e === t)
              return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
            if (
              !(
                "string" != typeof e ||
                Tt.test(e) ||
                (!x.support.htmlSerialize && mt.test(e)) ||
                (!x.support.leadingWhitespace && yt.test(e)) ||
                At[(bt.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(vt, "<$1></$2>");
              try {
                for (; i > r; r++)
                  (n = this[r] || {}),
                    1 === n.nodeType &&
                      (x.cleanData(Ft(n, !1)), (n.innerHTML = e));
                n = 0;
              } catch (o) {}
            }
            n && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = x.map(this, function(e) {
            return [e.nextSibling, e.parentNode];
          }),
          t = 0;
        return (
          this.domManip(
            arguments,
            function(n) {
              var r = e[t++],
                i = e[t++];
              i &&
                (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r));
            },
            !0
          ),
          t ? this : this.remove()
        );
      },
      detach: function(e) {
        return this.remove(e, !0);
      },
      domManip: function(e, t, n) {
        e = d.apply([], e);
        var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);
        if (
          g ||
          (!(1 >= c || "string" != typeof h || x.support.checkClone) &&
            Nt.test(h))
        )
          return this.each(function(r) {
            var i = p.eq(r);
            g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
          });
        if (
          c &&
          ((l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this)),
          (r = l.firstChild),
          1 === l.childNodes.length && (l = r),
          r)
        ) {
          for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)
            (i = l),
              u !== f &&
                ((i = x.clone(i, !0, !0)), o && x.merge(a, Ft(i, "script"))),
              t.call(this[u], i, u);
          if (o)
            for (
              s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0;
              o > u;
              u++
            )
              (i = a[u]),
                kt.test(i.type || "") &&
                  !x._data(i, "globalEval") &&
                  x.contains(s, i) &&
                  (i.src
                    ? x._evalUrl(i.src)
                    : x.globalEval(
                        (i.text || i.textContent || i.innerHTML || "").replace(
                          St,
                          ""
                        )
                      ));
          l = r = null;
        }
        return this;
      }
    });
  function Lt(e, t) {
    return x.nodeName(e, "table") &&
      x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function Ht(e) {
    return (e.type = (null !== x.find.attr(e, "type")) + "/" + e.type), e;
  }
  function qt(e) {
    var t = Et.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function _t(e, t) {
    var n,
      r = 0;
    for (; null != (n = e[r]); r++)
      x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
  }
  function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
        r,
        i,
        o = x._data(e),
        a = x._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = x.extend({}, a.data));
    }
  }
  function Ot(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (
        ((n = t.nodeName.toLowerCase()),
        !x.support.noCloneEvent && t[x.expando])
      ) {
        i = x._data(t);
        for (r in i.events) x.removeEvent(t, r, i.handle);
        t.removeAttribute(x.expando);
      }
      "script" === n && t.text !== e.text
        ? ((Ht(t).text = e.text), qt(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          x.support.html5Clone &&
            e.innerHTML &&
            !x.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && Ct.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  x.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    },
    function(e, t) {
      x.fn[e] = function(e) {
        var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;
        for (; a >= r; r++)
          (n = r === a ? this : this.clone(!0)),
            x(o[r])[t](n),
            h.apply(i, n.get());
        return this.pushStack(i);
      };
    }
  );
  function Ft(e, n) {
    var r,
      o,
      a = 0,
      s =
        typeof e.getElementsByTagName !== i
          ? e.getElementsByTagName(n || "*")
          : typeof e.querySelectorAll !== i
          ? e.querySelectorAll(n || "*")
          : t;
    if (!s)
      for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)
        !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    return n === t || (n && x.nodeName(e, n)) ? x.merge([e], s) : s;
  }
  function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }
  x.extend({
    clone: function(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l = x.contains(e.ownerDocument, e);
      if (
        (x.support.html5Clone ||
        x.isXMLDoc(e) ||
        !mt.test("<" + e.nodeName + ">")
          ? (o = e.cloneNode(!0))
          : ((Dt.innerHTML = e.outerHTML), Dt.removeChild((o = Dt.firstChild))),
        !(
          (x.support.noCloneEvent && x.support.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          x.isXMLDoc(e)
        ))
      )
        for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)
          r[a] && Ot(i, r[a]);
      if (t)
        if (n)
          for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)
            Mt(i, r[a]);
        else Mt(e, o);
      return (
        (r = Ft(o, "script")),
        r.length > 0 && _t(r, !l && Ft(e, "script")),
        (r = s = i = null),
        o
      );
    },
    buildFragment: function(e, t, n, r) {
      var i,
        o,
        a,
        s,
        l,
        u,
        c,
        p = e.length,
        f = dt(t),
        d = [],
        h = 0;
      for (; p > h; h++)
        if (((o = e[h]), o || 0 === o))
          if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
          else if (wt.test(o)) {
            (s = s || f.appendChild(t.createElement("div"))),
              (l = (bt.exec(o) || ["", ""])[1].toLowerCase()),
              (c = At[l] || At._default),
              (s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2]),
              (i = c[0]);
            while (i--) s = s.lastChild;
            if (
              (!x.support.leadingWhitespace &&
                yt.test(o) &&
                d.push(t.createTextNode(yt.exec(o)[0])),
              !x.support.tbody)
            ) {
              (o =
                "table" !== l || xt.test(o)
                  ? "<table>" !== c[1] || xt.test(o)
                    ? 0
                    : s
                  : s.firstChild),
                (i = o && o.childNodes.length);
              while (i--)
                x.nodeName((u = o.childNodes[i]), "tbody") &&
                  !u.childNodes.length &&
                  o.removeChild(u);
            }
            x.merge(d, s.childNodes), (s.textContent = "");
            while (s.firstChild) s.removeChild(s.firstChild);
            s = f.lastChild;
          } else d.push(t.createTextNode(o));
      s && f.removeChild(s),
        x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
        (h = 0);
      while ((o = d[h++]))
        if (
          (!r || -1 === x.inArray(o, r)) &&
          ((a = x.contains(o.ownerDocument, o)),
          (s = Ft(f.appendChild(o), "script")),
          a && _t(s),
          n)
        ) {
          i = 0;
          while ((o = s[i++])) kt.test(o.type || "") && n.push(o);
        }
      return (s = null), f;
    },
    cleanData: function(e, t) {
      var n,
        r,
        o,
        a,
        s = 0,
        l = x.expando,
        u = x.cache,
        c = x.support.deleteExpando,
        f = x.event.special;
      for (; null != (n = e[s]); s++)
        if ((t || x.acceptData(n)) && ((o = n[l]), (a = o && u[o]))) {
          if (a.events)
            for (r in a.events)
              f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          u[o] &&
            (delete u[o],
            c
              ? delete n[l]
              : typeof n.removeAttribute !== i
              ? n.removeAttribute(l)
              : (n[l] = null),
            p.push(o));
        }
    },
    _evalUrl: function(e) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      });
    }
  }),
    x.fn.extend({
      wrapAll: function(e) {
        if (x.isFunction(e))
          return this.each(function(t) {
            x(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = x(e, this[0].ownerDocument)
            .eq(0)
            .clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function() {
                var e = this;
                while (e.firstChild && 1 === e.firstChild.nodeType)
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function(e) {
        return x.isFunction(e)
          ? this.each(function(t) {
              x(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = x(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = x.isFunction(e);
        return this.each(function(n) {
          x(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
          })
          .end();
      }
    });
  var Pt,
    Rt,
    Wt,
    $t = /alpha\([^)]*\)/i,
    It = /opacity\s*=\s*([^)]*)/,
    zt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/,
    Ut = /^margin/,
    Vt = RegExp("^(" + w + ")(.*)$", "i"),
    Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
    Jt = RegExp("^([+-])=(" + w + ")", "i"),
    Gt = { BODY: "block" },
    Qt = { position: "absolute", visibility: "hidden", display: "block" },
    Kt = { letterSpacing: 0, fontWeight: 400 },
    Zt = ["Top", "Right", "Bottom", "Left"],
    en = ["Webkit", "O", "Moz", "ms"];
  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = en.length;
    while (i--) if (((t = en[i] + n), t in e)) return t;
    return r;
  }
  function nn(e, t) {
    return (
      (e = t || e),
      "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    );
  }
  function rn(e, t) {
    var n,
      r,
      i,
      o = [],
      a = 0,
      s = e.length;
    for (; s > a; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = x._data(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[a] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                nn(r) &&
                (o[a] = x._data(r, "olddisplay", ln(r.nodeName))))
            : o[a] ||
              ((i = nn(r)),
              ((n && "none" !== n) || !i) &&
                x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    for (a = 0; s > a; a++)
      (r = e[a]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  x.fn.extend({
    css: function(e, n) {
      return x.access(
        this,
        function(e, n, r) {
          var i,
            o,
            a = {},
            s = 0;
          if (x.isArray(n)) {
            for (o = Rt(e), i = n.length; i > s; s++)
              a[n[s]] = x.css(e, n[s], !1, o);
            return a;
          }
          return r !== t ? x.style(e, n, r) : x.css(e, n);
        },
        e,
        n,
        arguments.length > 1
      );
    },
    show: function() {
      return rn(this, !0);
    },
    hide: function() {
      return rn(this);
    },
    toggle: function(e) {
      var t = "boolean" == typeof e;
      return this.each(function() {
        (t ? e : nn(this)) ? x(this).show() : x(this).hide();
      });
    }
  }),
    x.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = Wt(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: { float: x.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function(e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;
          if (
            ((n = x.cssProps[l] || (x.cssProps[l] = tn(u, l))),
            (s = x.cssHooks[n] || x.cssHooks[l]),
            r === t)
          )
            return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
          if (
            ((a = typeof r),
            "string" === a &&
              (o = Jt.exec(r)) &&
              ((r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n))),
              (a = "number")),
            !(
              null == r ||
              ("number" === a && isNaN(r)) ||
              ("number" !== a || x.cssNumber[l] || (r += "px"),
              x.support.clearCloneStyle ||
                "" !== r ||
                0 !== n.indexOf("background") ||
                (u[n] = "inherit"),
              s && "set" in s && (r = s.set(e, r, i)) === t)
            ))
          )
            try {
              u[n] = r;
            } catch (c) {}
        }
      },
      css: function(e, n, r, i) {
        var o,
          a,
          s,
          l = x.camelCase(n);
        return (
          (n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l))),
          (s = x.cssHooks[n] || x.cssHooks[l]),
          s && "get" in s && (a = s.get(e, !0, r)),
          a === t && (a = Wt(e, n, i)),
          "normal" === a && n in Kt && (a = Kt[n]),
          "" === r || r
            ? ((o = parseFloat(a)), r === !0 || x.isNumeric(o) ? o || 0 : a)
            : a
        );
      }
    }),
    e.getComputedStyle
      ? ((Rt = function(t) {
          return e.getComputedStyle(t, null);
        }),
        (Wt = function(e, n, r) {
          var i,
            o,
            a,
            s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
          return (
            s &&
              ("" !== l ||
                x.contains(e.ownerDocument, e) ||
                (l = x.style(e, n)),
              Yt.test(l) &&
                Ut.test(n) &&
                ((i = u.width),
                (o = u.minWidth),
                (a = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = l),
                (l = s.width),
                (u.width = i),
                (u.minWidth = o),
                (u.maxWidth = a))),
            l
          );
        }))
      : a.documentElement.currentStyle &&
        ((Rt = function(e) {
          return e.currentStyle;
        }),
        (Wt = function(e, n, r) {
          var i,
            o,
            a,
            s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
          return (
            null == l && u && u[n] && (l = u[n]),
            Yt.test(l) &&
              !zt.test(n) &&
              ((i = u.left),
              (o = e.runtimeStyle),
              (a = o && o.left),
              a && (o.left = e.currentStyle.left),
              (u.left = "fontSize" === n ? "1em" : l),
              (l = u.pixelLeft + "px"),
              (u.left = i),
              a && (o.left = a)),
            "" === l ? "auto" : l
          );
        }));
  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
      a = 0;
    for (; 4 > o; o += 2)
      "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
        r
          ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n &&
              (a -= x.css(e, "border" + Zt[o] + "Width", !0, i)))
          : ((a += x.css(e, "padding" + Zt[o], !0, i)),
            "padding" !== n &&
              (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
    return a;
  }
  function sn(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Rt(e),
      a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (
        ((i = Wt(e, t, o)),
        (0 > i || null == i) && (i = e.style[t]),
        Yt.test(i))
      )
        return i;
      (r = a && (x.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function ln(e) {
    var t = a,
      n = Gt[e];
    return (
      n ||
        ((n = un(e, t)),
        ("none" !== n && n) ||
          ((Pt = (
            Pt ||
            x("<iframe frameborder='0' width='0' height='0'/>").css(
              "cssText",
              "display:block !important"
            )
          ).appendTo(t.documentElement)),
          (t = (Pt[0].contentWindow || Pt[0].contentDocument).document),
          t.write("<!doctype html><html><body>"),
          t.close(),
          (n = un(e, t)),
          Pt.detach()),
        (Gt[e] = n)),
      n
    );
  }
  function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
      r = x.css(n[0], "display");
    return n.remove(), r;
  }
  x.each(["height", "width"], function(e, n) {
    x.cssHooks[n] = {
      get: function(e, r, i) {
        return r
          ? 0 === e.offsetWidth && Xt.test(x.css(e, "display"))
            ? x.swap(e, Qt, function() {
                return sn(e, n, i);
              })
            : sn(e, n, i)
          : t;
      },
      set: function(e, t, r) {
        var i = r && Rt(e);
        return on(
          e,
          t,
          r
            ? an(
                e,
                n,
                r,
                x.support.boxSizing &&
                  "border-box" === x.css(e, "boxSizing", !1, i),
                i
              )
            : 0
        );
      }
    };
  }),
    x.support.opacity ||
      (x.cssHooks.opacity = {
        get: function(e, t) {
          return It.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function(e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === x.trim(o.replace($t, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
        }
      }),
    x(function() {
      x.support.reliableMarginRight ||
        (x.cssHooks.marginRight = {
          get: function(e, n) {
            return n
              ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"])
              : t;
          }
        }),
        !x.support.pixelPosition &&
          x.fn.position &&
          x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
              get: function(e, r) {
                return r
                  ? ((r = Wt(e, n)), Yt.test(r) ? x(e).position()[n] + "px" : r)
                  : t;
              }
            };
          });
    }),
    x.expr &&
      x.expr.filters &&
      ((x.expr.filters.hidden = function(e) {
        return (
          (0 >= e.offsetWidth && 0 >= e.offsetHeight) ||
          (!x.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || x.css(e, "display")))
        );
      }),
      (x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e);
      })),
    x.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
      (x.cssHooks[e + t] = {
        expand: function(n) {
          var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];
          for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        }
      }),
        Ut.test(e) || (x.cssHooks[e + t].set = on);
    });
  var cn = /%20/g,
    pn = /\[\]$/,
    fn = /\r?\n/g,
    dn = /^(?:submit|button|image|reset|file)$/i,
    hn = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function() {
      return x.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = x.prop(this, "elements");
        return e ? x.makeArray(e) : this;
      })
        .filter(function() {
          var e = this.type;
          return (
            this.name &&
            !x(this).is(":disabled") &&
            hn.test(this.nodeName) &&
            !dn.test(e) &&
            (this.checked || !Ct.test(e))
          );
        })
        .map(function(e, t) {
          var n = x(this).val();
          return null == n
            ? null
            : x.isArray(n)
            ? x.map(n, function(e) {
                return { name: t.name, value: e.replace(fn, "\r\n") };
              })
            : { name: t.name, value: n.replace(fn, "\r\n") };
        })
        .get();
    }
  }),
    (x.param = function(e, n) {
      var r,
        i = [],
        o = function(e, t) {
          (t = x.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || (e.jquery && !x.isPlainObject(e)))
      )
        x.each(e, function() {
          o(this.name, this.value);
        });
      else for (r in e) gn(r, e[r], n, o);
      return i.join("&").replace(cn, "+");
    });
  function gn(e, t, n, r) {
    var i;
    if (x.isArray(t))
      x.each(t, function(t, i) {
        n || pn.test(e)
          ? r(e, i)
          : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== x.type(t)) r(e, t);
    else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
  }
  x.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
      " "
    ),
    function(e, t) {
      x.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }
  ),
    x.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      }
    });
  var mn,
    yn,
    vn = x.now(),
    bn = /\?/,
    xn = /#.*$/,
    wn = /([?&])_=[^&]*/,
    Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Nn = /^(?:GET|HEAD)$/,
    kn = /^\/\//,
    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Sn = x.fn.load,
    An = {},
    jn = {},
    Dn = "*/".concat("*");
  try {
    yn = o.href;
  } catch (Ln) {
    (yn = a.createElement("a")), (yn.href = ""), (yn = yn.href);
  }
  mn = En.exec(yn.toLowerCase()) || [];
  function Hn(e) {
    return function(t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function qn(e, n, r, i) {
    var o = {},
      a = e === jn;
    function s(l) {
      var u;
      return (
        (o[l] = !0),
        x.each(e[l] || [], function(e, l) {
          var c = l(n, r, i);
          return "string" != typeof c || a || o[c]
            ? a
              ? !(u = c)
              : t
            : (n.dataTypes.unshift(c), s(c), !1);
        }),
        u
      );
    }
    return s(n.dataTypes[0]) || (!o["*"] && s("*"));
  }
  function _n(e, n) {
    var r,
      i,
      o = x.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && x.extend(!0, e, r), e;
  }
  (x.fn.load = function(e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
      o,
      a,
      s = this,
      l = e.indexOf(" ");
    return (
      l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
      x.isFunction(n)
        ? ((r = n), (n = t))
        : n && "object" == typeof n && (a = "POST"),
      s.length > 0 &&
        x
          .ajax({ url: e, type: a, dataType: "html", data: n })
          .done(function(e) {
            (o = arguments),
              s.html(
                i
                  ? x("<div>")
                      .append(x.parseHTML(e))
                      .find(i)
                  : e
              );
          })
          .complete(
            r &&
              function(e, t) {
                s.each(r, o || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    x.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(e, t) {
        x.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: yn,
        type: "GET",
        isLocal: Cn.test(mn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Dn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": x.parseJSON,
          "text xml": x.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(e, t) {
        return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
      },
      ajaxPrefilter: Hn(An),
      ajaxTransport: Hn(jn),
      ajax: function(e, n) {
        "object" == typeof e && ((n = e), (e = t)), (n = n || {});
        var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === b) {
                if (!c) {
                  c = {};
                  while ((t = Tn.exec(a))) c[t[1].toLowerCase()] = t[2];
                }
                t = c[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function() {
              return 2 === b ? a : null;
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return b || ((e = v[n] = v[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function(e) {
              return b || (p.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                else C.always(e[C.status]);
              return this;
            },
            abort: function(e) {
              var t = e || w;
              return u && u.abort(t), k(0, t), this;
            }
          };
        if (
          ((h.promise(C).complete = g.add),
          (C.success = C.done),
          (C.error = C.fail),
          (p.url = ((e || p.url || yn) + "")
            .replace(xn, "")
            .replace(kn, mn[1] + "//")),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = x
            .trim(p.dataType || "*")
            .toLowerCase()
            .match(T) || [""]),
          null == p.crossDomain &&
            ((r = En.exec(p.url.toLowerCase())),
            (p.crossDomain = !(
              !r ||
              (r[1] === mn[1] &&
                r[2] === mn[2] &&
                (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                  (mn[3] || ("http:" === mn[1] ? "80" : "443")))
            ))),
          p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = x.param(p.data, p.traditional)),
          qn(An, p, n, C),
          2 === b)
        )
          return C;
        (l = p.global),
          l && 0 === x.active++ && x.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !Nn.test(p.type)),
          (o = p.url),
          p.hasContent ||
            (p.data &&
              ((o = p.url += (bn.test(o) ? "&" : "?") + p.data), delete p.data),
            p.cache === !1 &&
              (p.url = wn.test(o)
                ? o.replace(wn, "$1_=" + vn++)
                : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
          p.ifModified &&
            (x.lastModified[o] &&
              C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
          ((p.data && p.hasContent && p.contentType !== !1) || n.contentType) &&
            C.setRequestHeader("Content-Type", p.contentType),
          C.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
        if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
          return C.abort();
        w = "abort";
        for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]);
        if ((u = qn(jn, p, n, C))) {
          (C.readyState = 1),
            l && d.trigger("ajaxSend", [C, p]),
            p.async &&
              p.timeout > 0 &&
              (s = setTimeout(function() {
                C.abort("timeout");
              }, p.timeout));
          try {
            (b = 1), u.send(y, k);
          } catch (N) {
            if (!(2 > b)) throw N;
            k(-1, N);
          }
        } else k(-1, "No Transport");
        function k(e, n, r, i) {
          var c,
            y,
            v,
            w,
            T,
            N = n;
          2 !== b &&
            ((b = 2),
            s && clearTimeout(s),
            (u = t),
            (a = i || ""),
            (C.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && 300 > e) || 304 === e),
            r && (w = Mn(p, C, r)),
            (w = On(p, w, C, c)),
            c
              ? (p.ifModified &&
                  ((T = C.getResponseHeader("Last-Modified")),
                  T && (x.lastModified[o] = T),
                  (T = C.getResponseHeader("etag")),
                  T && (x.etag[o] = T)),
                204 === e || "HEAD" === p.type
                  ? (N = "nocontent")
                  : 304 === e
                  ? (N = "notmodified")
                  : ((N = w.state), (y = w.data), (v = w.error), (c = !v)))
              : ((v = N), (e || !N) && ((N = "error"), 0 > e && (e = 0))),
            (C.status = e),
            (C.statusText = (n || N) + ""),
            c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
            C.statusCode(m),
            (m = t),
            l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
            g.fireWith(f, [C, N]),
            l &&
              (d.trigger("ajaxComplete", [C, p]),
              --x.active || x.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function(e, t, n) {
        return x.get(e, t, n, "json");
      },
      getScript: function(e, n) {
        return x.get(e, t, n, "script");
      }
    }),
    x.each(["get", "post"], function(e, n) {
      x[n] = function(e, r, i, o) {
        return (
          x.isFunction(r) && ((o = o || i), (i = r), (r = t)),
          x.ajax({ url: e, type: n, dataType: o, data: r, success: i })
        );
      };
    });
  function Mn(e, n, r) {
    var i,
      o,
      a,
      s,
      l = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      u.shift(),
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    if (o)
      for (s in l)
        if (l[s] && l[s].test(o)) {
          u.unshift(s);
          break;
        }
    if (u[0] in r) a = u[0];
    else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;
          break;
        }
        i || (i = s);
      }
      a = a || i;
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }
  function On(e, t, n, r) {
    var i,
      o,
      a,
      s,
      l,
      u = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = o),
        (o = c.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (((a = u[l + " " + o] || u["* " + o]), !a))
            for (i in u)
              if (
                ((s = i.split(" ")),
                s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]]))
              ) {
                a === !0
                  ? (a = u[i])
                  : u[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (p) {
                return {
                  state: "parsererror",
                  error: a ? p : "No conversion from " + l + " to " + o
                };
              }
        }
    return { state: "success", data: t };
  }
  x.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function(e) {
        return x.globalEval(e), e;
      }
    }
  }),
    x.ajaxPrefilter("script", function(e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    x.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var n,
          r = a.head || x("head")[0] || a.documentElement;
        return {
          send: function(t, i) {
            (n = a.createElement("script")),
              (n.async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange = function(e, t) {
                (t || !n.readyState || /loaded|complete/.test(n.readyState)) &&
                  ((n.onload = n.onreadystatechange = null),
                  n.parentNode && n.parentNode.removeChild(n),
                  (n = null),
                  t || i(200, "success"));
              }),
              r.insertBefore(n, r.firstChild);
          },
          abort: function() {
            n && n.onload(t, !0);
          }
        };
      }
    });
  var Fn = [],
    Bn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Fn.pop() || x.expando + "_" + vn++;
      return (this[e] = !0), e;
    }
  }),
    x.ajaxPrefilter("json jsonp", function(n, r, i) {
      var o,
        a,
        s,
        l =
          n.jsonp !== !1 &&
          (Bn.test(n.url)
            ? "url"
            : "string" == typeof n.data &&
              !(n.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Bn.test(n.data) &&
              "data");
      return l || "jsonp" === n.dataTypes[0]
        ? ((o = n.jsonpCallback = x.isFunction(n.jsonpCallback)
            ? n.jsonpCallback()
            : n.jsonpCallback),
          l
            ? (n[l] = n[l].replace(Bn, "$1" + o))
            : n.jsonp !== !1 &&
              (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
          (n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0];
          }),
          (n.dataTypes[0] = "json"),
          (a = e[o]),
          (e[o] = function() {
            s = arguments;
          }),
          i.always(function() {
            (e[o] = a),
              n[o] && ((n.jsonpCallback = r.jsonpCallback), Fn.push(o)),
              s && x.isFunction(a) && a(s[0]),
              (s = a = t);
          }),
          "script")
        : t;
    });
  var Pn,
    Rn,
    Wn = 0,
    $n =
      e.ActiveXObject &&
      function() {
        var e;
        for (e in Pn) Pn[e](t, !0);
      };
  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  (x.ajaxSettings.xhr = e.ActiveXObject
    ? function() {
        return (!this.isLocal && In()) || zn();
      }
    : In),
    (Rn = x.ajaxSettings.xhr()),
    (x.support.cors = !!Rn && "withCredentials" in Rn),
    (Rn = x.support.ajax = !!Rn),
    Rn &&
      x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
          var r;
          return {
            send: function(i, o) {
              var a,
                s,
                l = n.xhr();
              if (
                (n.username
                  ? l.open(n.type, n.url, n.async, n.username, n.password)
                  : l.open(n.type, n.url, n.async),
                n.xhrFields)
              )
                for (s in n.xhrFields) l[s] = n.xhrFields[s];
              n.mimeType &&
                l.overrideMimeType &&
                l.overrideMimeType(n.mimeType),
                n.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (s in i) l.setRequestHeader(s, i[s]);
              } catch (u) {}
              l.send((n.hasContent && n.data) || null),
                (r = function(e, i) {
                  var s, u, c, p;
                  try {
                    if (r && (i || 4 === l.readyState))
                      if (
                        ((r = t),
                        a &&
                          ((l.onreadystatechange = x.noop), $n && delete Pn[a]),
                        i)
                      )
                        4 !== l.readyState && l.abort();
                      else {
                        (p = {}),
                          (s = l.status),
                          (u = l.getAllResponseHeaders()),
                          "string" == typeof l.responseText &&
                            (p.text = l.responseText);
                        try {
                          c = l.statusText;
                        } catch (f) {
                          c = "";
                        }
                        s || !n.isLocal || n.crossDomain
                          ? 1223 === s && (s = 204)
                          : (s = p.text ? 200 : 404);
                      }
                  } catch (d) {
                    i || o(-1, d);
                  }
                  p && o(s, c, p, u);
                }),
                n.async
                  ? 4 === l.readyState
                    ? setTimeout(r)
                    : ((a = ++Wn),
                      $n && (Pn || ((Pn = {}), x(e).unload($n)), (Pn[a] = r)),
                      (l.onreadystatechange = r))
                  : r();
            },
            abort: function() {
              r && r(t, !0);
            }
          };
        }
      });
  var Xn,
    Un,
    Vn = /^(?:toggle|show|hide)$/,
    Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
    Jn = /queueHooks$/,
    Gn = [nr],
    Qn = {
      "*": [
        function(e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = Yn.exec(t),
            o = (i && i[3]) || (x.cssNumber[e] ? "" : "px"),
            a =
              (x.cssNumber[e] || ("px" !== o && +r)) &&
              Yn.exec(x.css(n.elem, e)),
            s = 1,
            l = 20;
          if (a && a[3] !== o) {
            (o = o || a[3]), (i = i || []), (a = +r || 1);
            do (s = s || ".5"), (a /= s), x.style(n.elem, e, a + o);
            while (s !== (s = n.cur() / r) && 1 !== s && --l);
          }
          return (
            i &&
              ((a = n.start = +a || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        }
      ]
    };
  function Kn() {
    return (
      setTimeout(function() {
        Xn = t;
      }),
      (Xn = x.now())
    );
  }
  function Zn(e, t, n) {
    var r,
      i = (Qn[t] || []).concat(Qn["*"]),
      o = 0,
      a = i.length;
    for (; a > o; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function er(e, t, n) {
    var r,
      i,
      o = 0,
      a = Gn.length,
      s = x.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (i) return !1;
        var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;
        for (; l > a; a++) u.tweens[a].run(o);
        return (
          s.notifyWith(e, [u, o, n]),
          1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Xn || Kn(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = x.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function(t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
        }
      }),
      c = u.props;
    for (tr(c, u.opts.specialEasing); a > o; o++)
      if ((r = Gn[o].call(u, e, c, u.opts))) return r;
    return (
      x.map(c, Zn, u),
      x.isFunction(u.opts.start) && u.opts.start.call(e, u),
      x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function tr(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = x.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        x.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = x.cssHooks[r]),
        a && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  x.Animation = x.extend(er, {
    tweener: function(e, t) {
      x.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      var n,
        r = 0,
        i = e.length;
      for (; i > r; r++) (n = e[r]), (Qn[n] = Qn[n] || []), Qn[n].unshift(t);
    },
    prefilter: function(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  });
  function nr(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      l,
      u = this,
      c = {},
      p = e.style,
      f = e.nodeType && nn(e),
      d = x._data(e, "fxshow");
    n.queue ||
      ((s = x._queueHooks(e, "fx")),
      null == s.unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function() {
          s.unqueued || l();
        })),
      s.unqueued++,
      u.always(function() {
        u.always(function() {
          s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        "inline" === x.css(e, "display") &&
          "none" === x.css(e, "float") &&
          (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      n.overflow &&
        ((p.overflow = "hidden"),
        x.support.shrinkWrapBlocks ||
          u.always(function() {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          }));
    for (r in t)
      if (((i = t[r]), Vn.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (f ? "hide" : "show"))
        )
          continue;
        c[r] = (d && d[r]) || x.style(e, r);
      }
    if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : (d = x._data(e, "fxshow", {})),
        o && (d.hidden = !f),
        f
          ? x(e).show()
          : u.done(function() {
              x(e).hide();
            }),
        u.done(function() {
          var t;
          x._removeData(e, "fxshow");
          for (t in c) x.style(e, t, c[t]);
        });
      for (r in c)
        (a = Zn(f ? d[r] : 0, r, u)),
          r in d ||
            ((d[r] = a.start),
            f &&
              ((a.end = a.start),
              (a.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }
  (x.Tween = rr),
    (rr.prototype = {
      constructor: rr,
      init: function(e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (x.cssNumber[n] ? "" : "px"));
      },
      cur: function() {
        var e = rr.propHooks[this.prop];
        return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = rr.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? x.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : rr.propHooks._default.set(this),
          this
        );
      }
    }),
    (rr.prototype.init.prototype = rr.prototype),
    (rr.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = x.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function(e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop])
            ? x.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        }
      }
    }),
    (rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    x.each(["toggle", "show", "hide"], function(e, t) {
      var n = x.fn[t];
      x.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ir(t, !0), e, r, i);
      };
    }),
    x.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(nn)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function(e, t, n, r) {
        var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function() {
            var t = er(this, x.extend({}, e), o);
            (i || x._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function(e, n, r) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof e && ((r = n), (n = e), (e = t)),
          n && e !== !1 && this.queue(e || "fx", []),
          this.each(function() {
            var t = !0,
              n = null != e && e + "queueHooks",
              o = x.timers,
              a = x._data(this);
            if (n) a[n] && a[n].stop && i(a[n]);
            else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
            for (n = o.length; n--; )
              o[n].elem !== this ||
                (null != e && o[n].queue !== e) ||
                (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
            (t || !r) && x.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function() {
            var t,
              n = x._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = x.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    });
  function ir(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      (n = Zt[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  x.each(
    {
      slideDown: ir("show"),
      slideUp: ir("hide"),
      slideToggle: ir("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    },
    function(e, t) {
      x.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r);
      };
    }
  ),
    (x.speed = function(e, t, n) {
      var r =
        e && "object" == typeof e
          ? x.extend({}, e)
          : {
              complete: n || (!n && t) || (x.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !x.isFunction(t) && t)
            };
      return (
        (r.duration = x.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in x.fx.speeds
          ? x.fx.speeds[r.duration]
          : x.fx.speeds._default),
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function() {
          x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue);
        }),
        r
      );
    }),
    (x.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      }
    }),
    (x.timers = []),
    (x.fx = rr.prototype.init),
    (x.fx.tick = function() {
      var e,
        n = x.timers,
        r = 0;
      for (Xn = x.now(); n.length > r; r++)
        (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
      n.length || x.fx.stop(), (Xn = t);
    }),
    (x.fx.timer = function(e) {
      e() && x.timers.push(e) && x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function() {
      Un || (Un = setInterval(x.fx.tick, x.fx.interval));
    }),
    (x.fx.stop = function() {
      clearInterval(Un), (Un = null);
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fx.step = {}),
    x.expr &&
      x.expr.filters &&
      (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
          return e === t.elem;
        }).length;
      }),
    (x.fn.offset = function(e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function(t) {
              x.offset.setOffset(this, e, t);
            });
      var n,
        r,
        o = { top: 0, left: 0 },
        a = this[0],
        s = a && a.ownerDocument;
      if (s)
        return (
          (n = s.documentElement),
          x.contains(n, a)
            ? (typeof a.getBoundingClientRect !== i &&
                (o = a.getBoundingClientRect()),
              (r = or(s)),
              {
                top:
                  o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left:
                  o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
              })
            : o
        );
    }),
    (x.offset = {
      setOffset: function(e, t, n) {
        var r = x.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i = x(e),
          o = i.offset(),
          a = x.css(e, "top"),
          s = x.css(e, "left"),
          l =
            ("absolute" === r || "fixed" === r) &&
            x.inArray("auto", [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;
        l
          ? ((c = i.position()), (p = c.top), (f = c.left))
          : ((p = parseFloat(a) || 0), (f = parseFloat(s) || 0)),
          x.isFunction(t) && (t = t.call(e, n, o)),
          null != t.top && (u.top = t.top - o.top + p),
          null != t.left && (u.left = t.left - o.left + f),
          "using" in t ? t.using.call(e, u) : i.css(u);
      }
    }),
    x.fn.extend({
      position: function() {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === x.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                x.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += x.css(e[0], "borderTopWidth", !0)),
                (n.left += x.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - x.css(r, "marginTop", !0),
              left: t.left - n.left - x.css(r, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var e = this.offsetParent || s;
          while (
            e &&
            !x.nodeName(e, "html") &&
            "static" === x.css(e, "position")
          )
            e = e.offsetParent;
          return e || s;
        });
      }
    }),
    x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      e,
      n
    ) {
      var r = /Y/.test(n);
      x.fn[e] = function(i) {
        return x.access(
          this,
          function(e, i, o) {
            var a = or(e);
            return o === t
              ? a
                ? n in a
                  ? a[n]
                  : a.document.documentElement[i]
                : e[i]
              : (a
                  ? a.scrollTo(
                      r ? x(a).scrollLeft() : o,
                      r ? o : x(a).scrollTop()
                    )
                  : (e[i] = o),
                t);
          },
          e,
          i,
          arguments.length,
          null
        );
      };
    });
  function or(e) {
    return x.isWindow(e)
      ? e
      : 9 === e.nodeType
      ? e.defaultView || e.parentWindow
      : !1;
  }
  x.each({ Height: "height", Width: "width" }, function(e, n) {
    x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(
      r,
      i
    ) {
      x.fn[i] = function(i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
          s = r || (i === !0 || o === !0 ? "margin" : "border");
        return x.access(
          this,
          function(n, r, i) {
            var o;
            return x.isWindow(n)
              ? n.document.documentElement["client" + e]
              : 9 === n.nodeType
              ? ((o = n.documentElement),
                Math.max(
                  n.body["scroll" + e],
                  o["scroll" + e],
                  n.body["offset" + e],
                  o["offset" + e],
                  o["client" + e]
                ))
              : i === t
              ? x.css(n, r, s)
              : x.style(n, r, i, s);
          },
          n,
          a ? i : t,
          a,
          null
        );
      };
    });
  }),
    (x.fn.size = function() {
      return this.length;
    }),
    (x.fn.andSelf = x.fn.addBack),
    "object" == typeof module && module && "object" == typeof module.exports
      ? (module.exports = x)
      : ((e.jQuery = e.$ = x),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function() {
            return x;
          }));
})(window);

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
  (function(e, t, n) {
    function r(n) {
      var r = t.console;
      i[n] ||
        ((i[n] = !0),
        e.migrateWarnings.push(n),
        r &&
          r.warn &&
          !e.migrateMute &&
          (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()));
    }
    function a(t, a, i, o) {
      if (Object.defineProperty)
        try {
          return (
            Object.defineProperty(t, a, {
              configurable: !0,
              enumerable: !0,
              get: function() {
                return r(o), i;
              },
              set: function(e) {
                r(o), (i = e);
              }
            }),
            n
          );
        } catch (s) {}
      (e._definePropertyBroken = !0), (t[a] = i);
    }
    var i = {};
    (e.migrateWarnings = []),
      !e.migrateMute &&
        t.console &&
        t.console.log &&
        t.console.log("JQMIGRATE: Logging is active"),
      e.migrateTrace === n && (e.migrateTrace = !0),
      (e.migrateReset = function() {
        (i = {}), (e.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
      s = e.attr,
      u =
        (e.attrHooks.value && e.attrHooks.value.get) ||
        function() {
          return null;
        },
      c =
        (e.attrHooks.value && e.attrHooks.value.set) ||
        function() {
          return n;
        },
      l = /^(?:input|button)$/i,
      d = /^[238]$/,
      p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"),
      (e.attr = function(t, a, i, u) {
        var c = a.toLowerCase(),
          g = t && t.nodeType;
        return u &&
          (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"),
          t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a])))
          ? e(t)[a](i)
          : ("type" === a &&
              i !== n &&
              l.test(t.nodeName) &&
              t.parentNode &&
              r("Can't change the 'type' of an input or button in IE 6/7/8"),
            !e.attrHooks[c] &&
              p.test(c) &&
              ((e.attrHooks[c] = {
                get: function(t, r) {
                  var a,
                    i = e.prop(t, r);
                  return i === !0 ||
                    ("boolean" != typeof i &&
                      (a = t.getAttributeNode(r)) &&
                      a.nodeValue !== !1)
                    ? r.toLowerCase()
                    : n;
                },
                set: function(t, n, r) {
                  var a;
                  return (
                    n === !1
                      ? e.removeAttr(t, r)
                      : ((a = e.propFix[r] || r),
                        a in t && (t[a] = !0),
                        t.setAttribute(r, r.toLowerCase())),
                    r
                  );
                }
              }),
              f.test(c) &&
                r(
                  "jQuery.fn.attr('" +
                    c +
                    "') may use property instead of attribute"
                )),
            s.call(e, t, a, i));
      }),
      (e.attrHooks.value = {
        get: function(e, t) {
          var n = (e.nodeName || "").toLowerCase();
          return "button" === n
            ? u.apply(this, arguments)
            : ("input" !== n &&
                "option" !== n &&
                r("jQuery.fn.attr('value') no longer gets properties"),
              t in e ? e.value : null);
        },
        set: function(e, t) {
          var a = (e.nodeName || "").toLowerCase();
          return "button" === a
            ? c.apply(this, arguments)
            : ("input" !== a &&
                "option" !== a &&
                r("jQuery.fn.attr('value', val) no longer sets properties"),
              (e.value = t),
              n);
        }
      });
    var g,
      h,
      v = e.fn.init,
      m = e.parseJSON,
      y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    (e.fn.init = function(t, n, a) {
      var i;
      return t &&
        "string" == typeof t &&
        !e.isPlainObject(n) &&
        (i = y.exec(e.trim(t))) &&
        i[0] &&
        ("<" !== t.charAt(0) &&
          r("$(html) HTML strings must start with '<' character"),
        i[3] && r("$(html) HTML text after last tag is ignored"),
        "#" === i[0].charAt(0) &&
          (r("HTML string cannot start with a '#' character"),
          e.error("JQMIGRATE: Invalid selector string (XSS)")),
        n && n.context && (n = n.context),
        e.parseHTML)
        ? v.call(this, e.parseHTML(i[2], n, !0), n, a)
        : v.apply(this, arguments);
    }),
      (e.fn.init.prototype = e.fn),
      (e.parseJSON = function(e) {
        return e || null === e
          ? m.apply(this, arguments)
          : (r("jQuery.parseJSON requires a valid JSON string"), null);
      }),
      (e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t =
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (0 > e.indexOf("compatible") &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          [];
        return { browser: t[1] || "", version: t[2] || "0" };
      }),
      e.browser ||
        ((g = e.uaMatch(navigator.userAgent)),
        (h = {}),
        g.browser && ((h[g.browser] = !0), (h.version = g.version)),
        h.chrome ? (h.webkit = !0) : h.webkit && (h.safari = !0),
        (e.browser = h)),
      a(e, "browser", e.browser, "jQuery.browser is deprecated"),
      (e.sub = function() {
        function t(e, n) {
          return new t.fn.init(e, n);
        }
        e.extend(!0, t, this),
          (t.superclass = this),
          (t.fn = t.prototype = this()),
          (t.fn.constructor = t),
          (t.sub = this.sub),
          (t.fn.init = function(r, a) {
            return (
              a && a instanceof e && !(a instanceof t) && (a = t(a)),
              e.fn.init.call(this, r, a, n)
            );
          }),
          (t.fn.init.prototype = t.fn);
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t;
      }),
      e.ajaxSetup({ converters: { "text json": e.parseJSON } });
    var b = e.fn.data;
    e.fn.data = function(t) {
      var a,
        i,
        o = this[0];
      return !o ||
        "events" !== t ||
        1 !== arguments.length ||
        ((a = e.data(o, t)),
        (i = e._data(o, t)),
        (a !== n && a !== i) || i === n)
        ? b.apply(this, arguments)
        : (r("Use of jQuery.fn.data('events') is deprecated"), i);
    };
    var j = /\/(java|ecma)script/i,
      w = e.fn.andSelf || e.fn.addBack;
    (e.fn.andSelf = function() {
      return (
        r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
      );
    }),
      e.clean ||
        (e.clean = function(t, a, i, o) {
          (a = a || document),
            (a = (!a.nodeType && a[0]) || a),
            (a = a.ownerDocument || a),
            r("jQuery.clean() is deprecated");
          var s,
            u,
            c,
            l,
            d = [];
          if ((e.merge(d, e.buildFragment(t, a).childNodes), i))
            for (
              c = function(e) {
                return !e.type || j.test(e.type)
                  ? o
                    ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e)
                    : i.appendChild(e)
                  : n;
              },
                s = 0;
              null != (u = d[s]);
              s++
            )
              (e.nodeName(u, "script") && c(u)) ||
                (i.appendChild(u),
                u.getElementsByTagName !== n &&
                  ((l = e.grep(
                    e.merge([], u.getElementsByTagName("script")),
                    c
                  )),
                  d.splice.apply(d, [s + 1, 0].concat(l)),
                  (s += l.length)));
          return d;
        });
    var Q = e.event.add,
      x = e.event.remove,
      k = e.event.trigger,
      N = e.fn.toggle,
      T = e.fn.live,
      M = e.fn.die,
      S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      C = RegExp("\\b(?:" + S + ")\\b"),
      H = /(?:^|\s)hover(\.\S+|)\b/,
      A = function(t) {
        return "string" != typeof t || e.event.special.hover
          ? t
          : (H.test(t) &&
              r(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            t && t.replace(H, "mouseenter$1 mouseleave$1"));
      };
    e.event.props &&
      "attrChange" !== e.event.props[0] &&
      e.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      e.event.dispatch &&
        a(
          e.event,
          "handle",
          e.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (e.event.add = function(e, t, n, a, i) {
        e !== document &&
          C.test(t) &&
          r("AJAX events should be attached to document: " + t),
          Q.call(this, e, A(t || ""), n, a, i);
      }),
      (e.event.remove = function(e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a);
      }),
      (e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return (
          r("jQuery.fn.error() is deprecated"),
          e.splice(0, 0, "error"),
          arguments.length
            ? this.bind.apply(this, e)
            : (this.triggerHandler.apply(this, e), this)
        );
      }),
      (e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n))
          return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments,
          i = t.guid || e.guid++,
          o = 0,
          s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return (
              e._data(this, "lastToggle" + t.guid, r + 1),
              n.preventDefault(),
              a[r].apply(this, arguments) || !1
            );
          };
        for (s.guid = i; a.length > o; ) a[o++].guid = i;
        return this.click(s);
      }),
      (e.fn.live = function(t, n, a) {
        return (
          r("jQuery.fn.live() is deprecated"),
          T
            ? T.apply(this, arguments)
            : (e(this.context).on(t, this.selector, n, a), this)
        );
      }),
      (e.fn.die = function(t, n) {
        return (
          r("jQuery.fn.die() is deprecated"),
          M
            ? M.apply(this, arguments)
            : (e(this.context).off(t, this.selector || "**", n), this)
        );
      }),
      (e.event.trigger = function(e, t, n, a) {
        return (
          n || C.test(e) || r("Global events are undocumented and deprecated"),
          k.call(this, e, t, n || document, a)
        );
      }),
      e.each(S.split("|"), function(t, n) {
        e.event.special[n] = {
          setup: function() {
            var t = this;
            return (
              t !== document &&
                (e.event.add(document, n + "." + e.guid, function() {
                  e.event.trigger(n, null, t, !0);
                }),
                e._data(this, n, e.guid++)),
              !1
            );
          },
          teardown: function() {
            return (
              this !== document &&
                e.event.remove(document, n + "." + e._data(this, n)),
              !1
            );
          }
        };
      });
  })(jQuery, window);
/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($, p) {
  var i,
    m = Array.prototype.slice,
    r = decodeURIComponent,
    a = $.param,
    c,
    l,
    v,
    b = ($.bbq = $.bbq || {}),
    q,
    u,
    j,
    e = $.event.special,
    d = "hashchange",
    A = "querystring",
    D = "fragment",
    y = "elemUrlAttr",
    g = "location",
    k = "href",
    t = "src",
    x = /^.*\?|#.*$/g,
    w = /^.*\#/,
    h,
    C = {};
  function E(F) {
    return typeof F === "string";
  }
  function B(G) {
    var F = m.call(arguments, 1);
    return function() {
      return G.apply(this, F.concat(m.call(arguments)));
    };
  }
  function n(F) {
    return F.replace(/^[^#]*#?(.*)$/, "$1");
  }
  function o(F) {
    return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1");
  }
  function f(H, M, F, I, G) {
    var O, L, K, N, J;
    if (I !== i) {
      K = F.match(H ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/);
      J = K[3] || "";
      if (G === 2 && E(I)) {
        L = I.replace(H ? w : x, "");
      } else {
        N = l(K[2]);
        I = E(I) ? l[H ? D : A](I) : I;
        L = G === 2 ? I : G === 1 ? $.extend({}, I, N) : $.extend({}, N, I);
        L = a(L);
        if (H) {
          L = L.replace(h, r);
        }
      }
      O = K[1] + (H ? "#" : L || !K[1] ? "?" : "") + L + J;
    } else {
      O = M(F !== i ? F : p[g][k]);
    }
    return O;
  }
  a[A] = B(f, 0, o);
  a[D] = c = B(f, 1, n);
  c.noEscape = function(G) {
    G = G || "";
    var F = $.map(G.split(""), encodeURIComponent);
    h = new RegExp(F.join("|"), "g");
  };
  c.noEscape(",/");
  $.deparam = l = function(I, F) {
    var H = {},
      G = { true: !0, false: !1, null: null };
    $.each(I.replace(/\+/g, " ").split("&"), function(L, Q) {
      var K = Q.split("="),
        P = r(K[0]),
        J,
        O = H,
        M = 0,
        R = P.split("]["),
        N = R.length - 1;
      if (/\[/.test(R[0]) && /\]$/.test(R[N])) {
        R[N] = R[N].replace(/\]$/, "");
        R = R.shift()
          .split("[")
          .concat(R);
        N = R.length - 1;
      } else {
        N = 0;
      }
      if (K.length === 2) {
        J = r(K[1]);
        if (F) {
          J =
            J && !isNaN(J) ? +J : J === "undefined" ? i : G[J] !== i ? G[J] : J;
        }
        if (N) {
          for (; M <= N; M++) {
            P = R[M] === "" ? O.length : R[M];
            O = O[P] =
              M < N ? O[P] || (R[M + 1] && isNaN(R[M + 1]) ? {} : []) : J;
          }
        } else {
          if ($.isArray(H[P])) {
            H[P].push(J);
          } else {
            if (H[P] !== i) {
              H[P] = [H[P], J];
            } else {
              H[P] = J;
            }
          }
        }
      } else {
        if (P) {
          H[P] = F ? i : "";
        }
      }
    });
    return H;
  };
  function z(H, F, G) {
    if (F === i || typeof F === "boolean") {
      G = F;
      F = a[H ? D : A]();
    } else {
      F = E(F) ? F.replace(H ? w : x, "") : F;
    }
    return l(F, G);
  }
  l[A] = B(z, 0);
  l[D] = v = B(z, 1);
  $[y] ||
    ($[y] = function(F) {
      return $.extend(C, F);
    })({
      a: k,
      base: k,
      iframe: t,
      img: t,
      input: t,
      form: "action",
      link: k,
      script: t
    });
  j = $[y];
  function s(I, G, H, F) {
    if (!E(H) && typeof H !== "object") {
      F = H;
      H = G;
      G = i;
    }
    return this.each(function() {
      var L = $(this),
        J = G || j()[(this.nodeName || "").toLowerCase()] || "",
        K = (J && L.attr(J)) || "";
      L.attr(J, a[I](K, H, F));
    });
  }
  $.fn[A] = B(s, A);
  $.fn[D] = B(s, D);
  b.pushState = q = function(I, F) {
    if (E(I) && /^#/.test(I) && F === i) {
      F = 2;
    }
    var H = I !== i,
      G = c(p[g][k], H ? I : {}, H ? F : 2);
    p[g][k] = G + (/#/.test(G) ? "" : "#");
  };
  b.getState = u = function(F, G) {
    return F === i || typeof F === "boolean" ? v(F) : v(G)[F];
  };
  b.removeState = function(F) {
    var G = {};
    if (F !== i) {
      G = u();
      $.each($.isArray(F) ? F : arguments, function(I, H) {
        delete G[H];
      });
    }
    q(G, 2);
  };
  e[d] = $.extend(e[d], {
    add: function(F) {
      var H;
      function G(J) {
        var I = (J[D] = c());
        J.getState = function(K, L) {
          return K === i || typeof K === "boolean" ? l(I, K) : l(I, L)[K];
        };
        H.apply(this, arguments);
      }
      if ($.isFunction(F)) {
        H = F;
        return G;
      } else {
        H = F.handler;
        F.handler = G;
      }
    }
  });
})(jQuery, this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($, i, b) {
  var j,
    k = $.event.special,
    c = "location",
    d = "hashchange",
    l = "href",
    f = $.browser,
    g = document.documentMode,
    h = f.msie && (g === b || g < 8),
    e = "on" + d in i && !h;
  function a(m) {
    m = m || i[c][l];
    return m.replace(/^[^#]*#?(.*)$/, "$1");
  }
  $[d + "Delay"] = 100;
  k[d] = $.extend(k[d], {
    setup: function() {
      if (e) {
        return false;
      }
      $(j.start);
    },
    teardown: function() {
      if (e) {
        return false;
      }
      $(j.stop);
    }
  });
  j = (function() {
    var m = {},
      r,
      n,
      o,
      q;
    function p() {
      o = q = function(s) {
        return s;
      };
      if (h) {
        n = $('<iframe src="javascript:0"/>')
          .hide()
          .insertAfter("body")[0].contentWindow;
        q = function() {
          return a(n.document[c][l]);
        };
        o = function(u, s) {
          if (u !== s) {
            var t = n.document;
            t.open().close();
            t[c].hash = "#" + u;
          }
        };
        o(a());
      }
    }
    m.start = function() {
      if (r) {
        return;
      }
      var t = a();
      o || p();
      (function s() {
        var v = a(),
          u = q(t);
        if (v !== t) {
          o((t = v), u);
          $(i).trigger(d);
        } else {
          if (u !== t) {
            i[c][l] = i[c][l].replace(/#.*/, "") + "#" + u;
          }
        }
        r = setTimeout(s, $[d + "Delay"]);
      })();
    };
    m.stop = function() {
      if (!n) {
        r && clearTimeout(r);
        r = 0;
      }
    };
    return m;
  })();
})(jQuery, this);
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JÃ¶rn Zaefferer; Licensed MIT */
!(function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function(a) {
  a.extend(a.fn, {
    validate: function(b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function(b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.on("submit.validate", function(b) {
              function d() {
                var d, e;
                return c.settings.submitHandler
                  ? (c.submitButton &&
                      (d = a("<input type='hidden'/>")
                        .attr("name", c.submitButton.name)
                        .val(a(c.submitButton).val())
                        .appendTo(c.currentForm)),
                    (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1)
                  : !0;
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function() {
      var b, c, d;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function() {
              (b = c.element(this) && b), (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function(b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (b)
        switch (
          ((d = a.data(j.form, "validator").settings),
          (e = d.rules),
          (f = a.validator.staticRules(j)),
          b)
        ) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)),
              delete f.messages,
              (e[j.name] = f),
              c.messages &&
                (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c
              ? ((i = {}),
                a.each(c.split(/\s/), function(b, c) {
                  (i[c] = f[c]),
                    delete f[c],
                    "required" === c && a(j).removeAttr("aria-required");
                }),
                i)
              : (delete e[j.name], f);
        }
      return (
        (g = a.validator.normalizeRules(
          a.extend(
            {},
            a.validator.classRules(j),
            a.validator.attributeRules(j),
            a.validator.dataRules(j),
            a.validator.staticRules(j)
          ),
          j
        )),
        g.required &&
          ((h = g.required),
          delete g.required,
          (g = a.extend({ required: h }, g)),
          a(j).attr("aria-required", "true")),
        g.remote &&
          ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
        g
      );
    }
  }),
    a.extend(a.expr[":"], {
      blank: function(b) {
        return !a.trim("" + a(b).val());
      },
      filled: function(b) {
        return !!a.trim("" + a(b).val());
      },
      unchecked: function(b) {
        return !a(b).prop("checked");
      }
    }),
    (a.validator = function(b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function(b, c) {
      return 1 === arguments.length
        ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function(a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function(b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && "" === this.elementValue(b)) ||
            -1 !== a.inArray(c.keyCode, d) ||
            ((b.name in this.submitted || b === this.lastElement) &&
              this.element(b));
        },
        onclick: function(a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function(b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name)
                .addClass(c)
                .removeClass(d)
            : a(b)
                .addClass(c)
                .removeClass(d);
        },
        unhighlight: function(b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name)
                .removeClass(c)
                .addClass(d)
            : a(b)
                .removeClass(c)
                .addClass(d);
        }
      },
      setDefaults: function(b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        )
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function b(b) {
            var c = a.data(this.form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function(b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function(a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function(b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                b
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function() {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function() {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function(b) {
          var c = this.clean(b),
            d = this.validationTargetFor(c),
            e = !0;
          return (
            (this.lastElement = d),
            void 0 === d
              ? delete this.invalid[c.name]
              : (this.prepareElement(d),
                (this.currentElements = a(d)),
                (e = this.check(d) !== !1),
                e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
            a(b).attr("aria-invalid", !e),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            e
          );
        },
        showErrors: function(b) {
          if (b) {
            a.extend(this.errorMap, b), (this.errorList = []);
            for (var c in b)
              this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0]
              });
            this.successList = a.grep(this.successList, function(a) {
              return !(a.name in b);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function() {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors();
          var b,
            c = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
          if (this.settings.unhighlight)
            for (b = 0; c[b]; b++)
              this.settings.unhighlight.call(
                this,
                c[b],
                this.settings.errorClass,
                ""
              );
          else c.removeClass(this.settings.errorClass);
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid);
        },
        objectLength: function(a) {
          var b,
            c = 0;
          for (b in a) c++;
          return c;
        },
        hideErrors: function() {
          this.hideThese(this.toHide);
        },
        hideThese: function(a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function() {
          return 0 === this.size();
        },
        size: function() {
          return this.errorList.length;
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function() {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function(a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function() {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function() {
              return (
                !this.name &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.name in c || !b.objectLength(a(this).rules())
                  ? !1
                  : ((c[this.name] = !0), !0)
              );
            });
        },
        clean: function(b) {
          return a(b)[0];
        },
        errors: function() {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        reset: function() {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([])),
            (this.currentElements = a([]));
        },
        prepareForm: function() {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function(a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function(b) {
          var c,
            d = a(b),
            e = b.type;
          return "radio" === e || "checkbox" === e
            ? this.findByName(b.name)
                .filter(":checked")
                .val()
            : "number" === e && "undefined" != typeof b.validity
            ? b.validity.badInput
              ? !1
              : d.val()
            : ((c = d.val()), "string" == typeof c ? c.replace(/\r/g, "") : c);
        },
        check: function(b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function(a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                "dependency-mismatch" === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (j) {
              throw (this.settings.debug &&
                window.console &&
                console.log(
                  "Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method.",
                  j
                ),
              j instanceof TypeError &&
                (j.message +=
                  ".  Exception occurred when checking element " +
                  b.id +
                  ", check the '" +
                  e.method +
                  "' method."),
              j);
            }
          }
          if (!h) return this.objectLength(f) && this.successList.push(b), !0;
        },
        customDataMessage: function(b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function(a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function() {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
          return void 0;
        },
        defaultMessage: function(b, c) {
          return this.findDefined(
            this.customMessage(b.name, c),
            this.customDataMessage(b, c),
            (!this.settings.ignoreTitle && b.title) || void 0,
            a.validator.messages[c],
            "<strong>Warning: No message defined for " + b.name + "</strong>"
          );
        },
        formatAndAdd: function(b, c) {
          var d = this.defaultMessage(b, c.method),
            e = /\$?\{(\d+)\}/g;
          "function" == typeof d
            ? (d = d.call(this, c.parameters, b))
            : e.test(d) &&
              (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            this.errorList.push({ message: d, element: b, method: c.method }),
            (this.errorMap[b.name] = d),
            (this.submitted[b.name] = d);
        },
        addWrapper: function(a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function() {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function() {
          return a(this.errorList).map(function() {
            return this.element;
          });
        },
        showLabel: function(b, c) {
          var d,
            e,
            f,
            g = this.errorsFor(b),
            h = this.idOrName(b),
            i = a(b).attr("aria-describedby");
          g.length
            ? (g
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              g.html(c))
            : ((g = a("<" + this.settings.errorElement + ">")
                .attr("id", h + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = g),
              this.settings.wrapper &&
                (d = g
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement(d, a(b))
                : d.insertAfter(b),
              g.is("label")
                ? g.attr("for", h)
                : 0 === g.parents("label[for='" + h + "']").length &&
                  ((f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                  i
                    ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f)
                    : (i = f),
                  a(b).attr("aria-describedby", i),
                  (e = this.groups[b.name]),
                  e &&
                    a.each(this.groups, function(b, c) {
                      c === e &&
                        a("[name='" + b + "']", this.currentForm).attr(
                          "aria-describedby",
                          g.attr("id")
                        );
                    }))),
            !c &&
              this.settings.success &&
              (g.text(""),
              "string" == typeof this.settings.success
                ? g.addClass(this.settings.success)
                : this.settings.success(g, b)),
            (this.toShow = this.toShow.add(g));
        },
        errorsFor: function(b) {
          var c = this.idOrName(b),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + d.replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        idOrName: function(a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function(b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function(a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function(b) {
          return a(this.currentForm).find("[name='" + b + "']");
        },
        getLength: function(b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function(a, b) {
          return this.dependTypes[typeof a]
            ? this.dependTypes[typeof a](a, b)
            : !0;
        },
        dependTypes: {
          boolean: function(a) {
            return a;
          },
          string: function(b, c) {
            return !!a(b, c.form).length;
          },
          function: function(a, b) {
            return a(b);
          }
        },
        optional: function(b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function(a) {
          this.pending[a.name] ||
            (this.pendingRequest++, (this.pending[a.name] = !0));
        },
        stopRequest: function(b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function(b) {
          return (
            a.data(b, "previousValue") ||
            a.data(b, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, "remote")
            })
          );
        },
        destroy: function() {
          this.resetForm(),
            a(this.currentForm)
              .off(".validate")
              .removeData("validator");
        }
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 }
      },
      addClassRules: function(b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function(b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function() {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function(a, b, c, d) {
        /min|max/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
      },
      attributeRules: function(b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function(b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function(b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function(b, c) {
        return (
          a.each(b, function(d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
            }
          }),
          a.each(b, function(d, e) {
            b[d] = a.isFunction(e) ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function() {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function() {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function(b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function() {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function(b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function(b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
        },
        email: function(a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function(a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: function(a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function(a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function(a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function(a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        creditcard: function(a, b) {
          if (this.optional(b)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(a)) return !1;
          var c,
            d,
            e = 0,
            f = 0,
            g = !1;
          if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19))
            return !1;
          for (c = a.length - 1; c >= 0; c--)
            (d = a.charAt(c)),
              (f = parseInt(d, 10)),
              g && (f *= 2) > 9 && (f -= 9),
              (e += f),
              (g = !g);
          return e % 10 === 0;
        },
        minlength: function(b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e >= d;
        },
        maxlength: function(b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || d >= e;
        },
        rangelength: function(b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function(a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function(a, b, c) {
          return this.optional(b) || c >= a;
        },
        range: function(a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        equalTo: function(b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e
                .off(".validate-equalTo")
                .on("blur.validate-equalTo", function() {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function(b, c, d) {
          if (this.optional(c)) return "dependency-mismatch";
          var e,
            f,
            g = this.previousValue(c);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (g.originalMessage = this.settings.messages[c.name].remote),
            (this.settings.messages[c.name].remote = g.message),
            (d = ("string" == typeof d && { url: d }) || d),
            g.old === b
              ? g.valid
              : ((g.old = b),
                (e = this),
                this.startRequest(c),
                (f = {}),
                (f[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: f,
                      context: e.currentForm,
                      success: function(d) {
                        var f,
                          h,
                          i,
                          j = d === !0 || "true" === d;
                        (e.settings.messages[c.name].remote =
                          g.originalMessage),
                          j
                            ? ((i = e.formSubmitted),
                              e.prepareElement(c),
                              (e.formSubmitted = i),
                              e.successList.push(c),
                              delete e.invalid[c.name],
                              e.showErrors())
                            : ((f = {}),
                              (h = d || e.defaultMessage(c, "remote")),
                              (f[c.name] = g.message = a.isFunction(h)
                                ? h(b)
                                : h),
                              (e.invalid[c.name] = !0),
                              e.showErrors(f)),
                          (g.valid = j),
                          e.stopRequest(c, j);
                      }
                    },
                    d
                  )
                ),
                "pending")
          );
        }
      }
    });
  var b,
    c = {};
  a.ajaxPrefilter
    ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
      })
    : ((b = a.ajax),
      (a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
          f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e
          ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
          : b.apply(this, arguments);
      }));
});
(function(a) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "../jquery.validate"], a);
  } else {
    a(jQuery);
  }
})(function(a) {
  a.extend(a.validator.messages, {
    required: "Dieses Feld ist ein Pflichtfeld.",
    maxlength: a.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),
    minlength: a.validator.format(
      "Geben Sie bitte mindestens {0} Zeichen ein."
    ),
    rangelength: a.validator.format(
      "Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."
    ),
    email: "Geben Sie bitte eine gÃ¼ltige E-Mail Adresse ein.",
    url: "Geben Sie bitte eine gÃ¼ltige URL ein.",
    date: "Bitte geben Sie ein gÃ¼ltiges Datum ein.",
    number: "Geben Sie bitte eine Nummer ein.",
    digits: "Geben Sie bitte nur Ziffern ein.",
    equalTo: "Bitte denselben Wert wiederholen.",
    range: a.validator.format(
      "Geben Sie bitte einen Wert zwischen {0} und {1} ein."
    ),
    max: a.validator.format(
      "Geben Sie bitte einen Wert kleiner oder gleich {0} ein."
    ),
    min: a.validator.format(
      "Geben Sie bitte einen Wert grÃ¶ÃŸer oder gleich {0} ein."
    ),
    creditcard: "Geben Sie bitte eine gÃ¼ltige Kreditkarten-Nummer ein."
  });
});
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k) {
  k.transit = {
    version: "0.9.9",
    propertyMap: {
      marginLeft: "margin",
      marginRight: "margin",
      marginBottom: "margin",
      marginTop: "margin",
      paddingLeft: "padding",
      paddingRight: "padding",
      paddingBottom: "padding",
      paddingTop: "padding"
    },
    enabled: true,
    useTransitionEnd: false
  };
  var d = document.createElement("div");
  var q = {};
  function b(v) {
    if (v in d.style) {
      return v;
    }
    var u = ["Moz", "Webkit", "O", "ms"];
    var r = v.charAt(0).toUpperCase() + v.substr(1);
    if (v in d.style) {
      return v;
    }
    for (var t = 0; t < u.length; ++t) {
      var s = u[t] + r;
      if (s in d.style) {
        return s;
      }
    }
  }
  function e() {
    d.style[q.transform] = "";
    d.style[q.transform] = "rotateY(90deg)";
    return d.style[q.transform] !== "";
  }
  var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  q.transition = b("transition");
  q.transitionDelay = b("transitionDelay");
  q.transform = b("transform");
  q.transformOrigin = b("transformOrigin");
  q.transform3d = e();
  var i = {
    transition: "transitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    WebkitTransition: "webkitTransitionEnd",
    msTransition: "MSTransitionEnd"
  };
  var f = (q.transitionEnd = i[q.transition] || null);
  for (var p in q) {
    if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
      k.support[p] = q[p];
    }
  }
  d = null;
  k.cssEase = {
    _default: "ease",
    in: "ease-in",
    out: "ease-out",
    "in-out": "ease-in-out",
    snap: "cubic-bezier(0,1,.5,1)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
  };
  k.cssHooks["transit:transform"] = {
    get: function(r) {
      return k(r).data("transform") || new j();
    },
    set: function(s, r) {
      var t = r;
      if (!(t instanceof j)) {
        t = new j(t);
      }
      if (q.transform === "WebkitTransform" && !a) {
        s.style[q.transform] = t.toString(true);
      } else {
        s.style[q.transform] = t.toString();
      }
      k(s).data("transform", t);
    }
  };
  k.cssHooks.transform = { set: k.cssHooks["transit:transform"].set };
  if (k.fn.jquery < "1.8") {
    k.cssHooks.transformOrigin = {
      get: function(r) {
        return r.style[q.transformOrigin];
      },
      set: function(r, s) {
        r.style[q.transformOrigin] = s;
      }
    };
    k.cssHooks.transition = {
      get: function(r) {
        return r.style[q.transition];
      },
      set: function(r, s) {
        r.style[q.transition] = s;
      }
    };
  }
  n("scale");
  n("translate");
  n("rotate");
  n("rotateX");
  n("rotateY");
  n("rotate3d");
  n("perspective");
  n("skewX");
  n("skewY");
  n("x", true);
  n("y", true);
  function j(r) {
    if (typeof r === "string") {
      this.parse(r);
    }
    return this;
  }
  j.prototype = {
    setFromString: function(t, s) {
      var r =
        typeof s === "string"
          ? s.split(",")
          : s.constructor === Array
          ? s
          : [s];
      r.unshift(t);
      j.prototype.set.apply(this, r);
    },
    set: function(s) {
      var r = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[s]) {
        this.setter[s].apply(this, r);
      } else {
        this[s] = r.join(",");
      }
    },
    get: function(r) {
      if (this.getter[r]) {
        return this.getter[r].apply(this);
      } else {
        return this[r] || 0;
      }
    },
    setter: {
      rotate: function(r) {
        this.rotate = o(r, "deg");
      },
      rotateX: function(r) {
        this.rotateX = o(r, "deg");
      },
      rotateY: function(r) {
        this.rotateY = o(r, "deg");
      },
      scale: function(r, s) {
        if (s === undefined) {
          s = r;
        }
        this.scale = r + "," + s;
      },
      skewX: function(r) {
        this.skewX = o(r, "deg");
      },
      skewY: function(r) {
        this.skewY = o(r, "deg");
      },
      perspective: function(r) {
        this.perspective = o(r, "px");
      },
      x: function(r) {
        this.set("translate", r, null);
      },
      y: function(r) {
        this.set("translate", null, r);
      },
      translate: function(r, s) {
        if (this._translateX === undefined) {
          this._translateX = 0;
        }
        if (this._translateY === undefined) {
          this._translateY = 0;
        }
        if (r !== null && r !== undefined) {
          this._translateX = o(r, "px");
        }
        if (s !== null && s !== undefined) {
          this._translateY = o(s, "px");
        }
        this.translate = this._translateX + "," + this._translateY;
      }
    },
    getter: {
      x: function() {
        return this._translateX || 0;
      },
      y: function() {
        return this._translateY || 0;
      },
      scale: function() {
        var r = (this.scale || "1,1").split(",");
        if (r[0]) {
          r[0] = parseFloat(r[0]);
        }
        if (r[1]) {
          r[1] = parseFloat(r[1]);
        }
        return r[0] === r[1] ? r[0] : r;
      },
      rotate3d: function() {
        var t = (this.rotate3d || "0,0,0,0deg").split(",");
        for (var r = 0; r <= 3; ++r) {
          if (t[r]) {
            t[r] = parseFloat(t[r]);
          }
        }
        if (t[3]) {
          t[3] = o(t[3], "deg");
        }
        return t;
      }
    },
    parse: function(s) {
      var r = this;
      s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, v, u) {
        r.setFromString(v, u);
      });
    },
    toString: function(t) {
      var s = [];
      for (var r in this) {
        if (this.hasOwnProperty(r)) {
          if (
            !q.transform3d &&
            (r === "rotateX" ||
              r === "rotateY" ||
              r === "perspective" ||
              r === "transformOrigin")
          ) {
            continue;
          }
          if (r[0] !== "_") {
            if (t && r === "scale") {
              s.push(r + "3d(" + this[r] + ",1)");
            } else {
              if (t && r === "translate") {
                s.push(r + "3d(" + this[r] + ",0)");
              } else {
                s.push(r + "(" + this[r] + ")");
              }
            }
          }
        }
      }
      return s.join(" ");
    }
  };
  function m(s, r, t) {
    if (r === true) {
      s.queue(t);
    } else {
      if (r) {
        s.queue(r, t);
      } else {
        t();
      }
    }
  }
  function h(s) {
    var r = [];
    k.each(s, function(t) {
      t = k.camelCase(t);
      t = k.transit.propertyMap[t] || k.cssProps[t] || t;
      t = c(t);
      if (k.inArray(t, r) === -1) {
        r.push(t);
      }
    });
    return r;
  }
  function g(s, v, x, r) {
    var t = h(s);
    if (k.cssEase[x]) {
      x = k.cssEase[x];
    }
    var w = "" + l(v) + " " + x;
    if (parseInt(r, 10) > 0) {
      w += " " + l(r);
    }
    var u = [];
    k.each(t, function(z, y) {
      u.push(y + " " + w);
    });
    return u.join(", ");
  }
  k.fn.transition = k.fn.transit = function(z, s, y, C) {
    var D = this;
    var u = 0;
    var w = true;
    if (typeof s === "function") {
      C = s;
      s = undefined;
    }
    if (typeof y === "function") {
      C = y;
      y = undefined;
    }
    if (typeof z.easing !== "undefined") {
      y = z.easing;
      delete z.easing;
    }
    if (typeof z.duration !== "undefined") {
      s = z.duration;
      delete z.duration;
    }
    if (typeof z.complete !== "undefined") {
      C = z.complete;
      delete z.complete;
    }
    if (typeof z.queue !== "undefined") {
      w = z.queue;
      delete z.queue;
    }
    if (typeof z.delay !== "undefined") {
      u = z.delay;
      delete z.delay;
    }
    if (typeof s === "undefined") {
      s = k.fx.speeds._default;
    }
    if (typeof y === "undefined") {
      y = k.cssEase._default;
    }
    s = l(s);
    var E = g(z, s, y, u);
    var B = k.transit.enabled && q.transition;
    var t = B ? parseInt(s, 10) + parseInt(u, 10) : 0;
    if (t === 0) {
      var A = function(F) {
        D.css(z);
        if (C) {
          C.apply(D);
        }
        if (F) {
          F();
        }
      };
      m(D, w, A);
      return D;
    }
    var x = {};
    var r = function(H) {
      var G = false;
      var F = function() {
        if (G) {
          D.unbind(f, F);
        }
        if (t > 0) {
          D.each(function() {
            this.style[q.transition] = x[this] || null;
          });
        }
        if (typeof C === "function") {
          C.apply(D);
        }
        if (typeof H === "function") {
          H();
        }
      };
      if (t > 0 && f && k.transit.useTransitionEnd) {
        G = true;
        D.bind(f, F);
      } else {
        window.setTimeout(F, t);
      }
      D.each(function() {
        if (t > 0) {
          this.style[q.transition] = E;
        }
        k(this).css(z);
      });
    };
    var v = function(F) {
      this.offsetWidth;
      r(F);
    };
    m(D, w, v);
    return this;
  };
  function n(s, r) {
    if (!r) {
      k.cssNumber[s] = true;
    }
    k.transit.propertyMap[s] = q.transform;
    k.cssHooks[s] = {
      get: function(v) {
        var u = k(v).css("transit:transform");
        return u.get(s);
      },
      set: function(v, w) {
        var u = k(v).css("transit:transform");
        u.setFromString(s, w);
        k(v).css({ "transit:transform": u });
      }
    };
  }
  function c(r) {
    return r.replace(/([A-Z])/g, function(s) {
      return "-" + s.toLowerCase();
    });
  }
  function o(s, r) {
    if (typeof s === "string" && !s.match(/^[\-0-9\.]+$/)) {
      return s;
    } else {
      return "" + s + r;
    }
  }
  function l(s) {
    var r = s;
    if (k.fx.speeds[r]) {
      r = k.fx.speeds[r];
    }
    return o(r, "ms");
  }
  k.transit.getTransitionValue = g;
})(jQuery);
// ==================================================
// fancyBox v3.1.20
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!(function(t, e, n, o) {
  "use strict";
  function i(t) {
    var e = t.currentTarget,
      o = t.data ? t.data.options : {},
      i = t.data ? t.data.items : [],
      a = n(e).attr("data-fancybox") || "",
      s = 0;
    t.preventDefault(),
      t.stopPropagation(),
      a
        ? ((i = i.length
            ? i.filter('[data-fancybox="' + a + '"]')
            : n('[data-fancybox="' + a + '"]')),
          (s = i.index(e)),
          s < 0 && (s = 0))
        : (i = [e]),
      n.fancybox.open(i, o, s);
  }
  if (n) {
    if (n.fn.fancybox) return void n.error("fancyBox already initialized");
    var a = {
        loop: !1,
        margin: [44, 0],
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !1,
        toolbar: !0,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        idleTime: 4,
        smallBtn: "auto",
        protect: !1,
        modal: !1,
        image: { preload: "auto" },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: "auto" }
        },
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
        btnTpl: {
          slideShow:
            '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
          smallBtn:
            '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
        },
        parentEl: "body",
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 4e3 },
        thumbs: { autoStart: !1, hideOnClose: !0 },
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function(t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          clickContent: function(t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function(t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function(t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function(t, e) {
            return "image" === t.type && "zoom";
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails"
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "ZurÃ¼ck",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder"
          }
        }
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function(t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      u = (function() {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function(e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      d = (function() {
        var t,
          n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (t in i) if (n.style[t] !== o) return i[t];
      })(),
      f = function(t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function(t, o, i) {
        var s = this;
        (s.opts = n.extend(!0, { index: i }, a, o || {})),
          o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons),
          (s.id = s.opts.id || ++c),
          (s.group = []),
          (s.currIndex = parseInt(s.opts.index, 10) || 0),
          (s.prevIndex = null),
          (s.prevPos = null),
          (s.currPos = 0),
          (s.firstRun = null),
          s.createGroup(t),
          s.group.length &&
            ((s.$lastFocus = n(e.activeElement).blur()),
            (s.slides = {}),
            s.init(t));
      };
    n.extend(h.prototype, {
      init: function() {
        var t,
          e,
          o,
          i = this,
          a = i.group[i.currIndex].opts;
        (i.scrollTop = r.scrollTop()),
          (i.scrollLeft = r.scrollLeft()),
          n.fancybox.getInstance() ||
            n.fancybox.isMobile ||
            "hidden" === n("body").css("overflow") ||
            ((t = n("body").width()),
            n("html").addClass("fancybox-enabled"),
            (t = n("body").width() - t),
            t > 1 &&
              n("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' +
                  t +
                  "px; }</style>"
              )),
          (o = ""),
          n.each(a.buttons, function(t, e) {
            o += a.btnTpl[e] || "";
          }),
          (e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o)))
            .addClass("fancybox-is-hidden")
            .attr("id", "fancybox-container-" + i.id)
            .addClass(a.baseClass)
            .data("FancyBox", i)
            .prependTo(a.parentEl)),
          (i.$refs = { container: e }),
          ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(
            function(t) {
              i.$refs[t] = e.find(".fancybox-" + t);
            }
          ),
          (!a.arrows || i.group.length < 2) &&
            e.find(".fancybox-navigation").remove(),
          a.infobar || i.$refs.infobar.remove(),
          a.toolbar || i.$refs.toolbar.remove(),
          i.trigger("onInit"),
          i.activate(),
          i.jumpTo(i.currIndex);
      },
      translate: function(t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
          var i = n[e];
          return i === o ? t : i;
        });
      },
      createGroup: function(t) {
        var e = this,
          i = n.makeArray(t);
        n.each(i, function(t, i) {
          var a,
            s,
            r,
            c,
            l = {},
            u = {},
            d = [];
          n.isPlainObject(i)
            ? ((l = i), (u = i.opts || i))
            : "object" === n.type(i) && n(i).length
            ? ((a = n(i)),
              (d = a.data()),
              (u = "options" in d ? d.options : {}),
              (u = "object" === n.type(u) ? u : {}),
              (l.src = "src" in d ? d.src : u.src || a.attr("href")),
              ["width", "height", "thumb", "type", "filter"].forEach(function(
                t
              ) {
                t in d && (u[t] = d[t]);
              }),
              "srcset" in d && (u.image = { srcset: d.srcset }),
              (u.$orig = a),
              l.type || l.src || ((l.type = "inline"), (l.src = i)))
            : (l = { type: "html", src: i + "" }),
            (l.opts = n.extend(!0, {}, e.opts, u)),
            n.fancybox.isMobile &&
              (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)),
            (s = l.type || l.opts.type),
            (r = l.src || ""),
            !s &&
              r &&
              (r.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
                ? (s = "image")
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? (s = "pdf")
                : "#" === r.charAt(0) && (s = "inline")),
            (l.type = s),
            (l.index = e.group.length),
            l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig,
            !l.opts.$thumb &&
              l.opts.$orig &&
              (l.opts.$thumb = l.opts.$orig.find("img:first")),
            l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb,
            "function" === n.type(l.opts.caption)
              ? (l.opts.caption = l.opts.caption.apply(i, [e, l]))
              : "caption" in d && (l.opts.caption = d.caption),
            (l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + ""),
            "ajax" === s &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            "auto" == l.opts.smallBtn &&
              (n.inArray(s, ["html", "inline", "ajax"]) > -1
                ? ((l.opts.toolbar = !1), (l.opts.smallBtn = !0))
                : (l.opts.smallBtn = !1)),
            "pdf" === s && ((l.type = "iframe"), (l.opts.iframe.preload = !1)),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1
              })),
            e.group.push(l);
        });
      },
      addEvents: function() {
        var o = this;
        o.removeEvents(),
          o.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function(t) {
              t.stopPropagation(), t.preventDefault(), o.close(t);
            })
            .on(
              "click.fb-prev touchend.fb-prev",
              "[data-fancybox-prev]",
              function(t) {
                t.stopPropagation(), t.preventDefault(), o.previous();
              }
            )
            .on(
              "click.fb-next touchend.fb-next",
              "[data-fancybox-next]",
              function(t) {
                t.stopPropagation(), t.preventDefault(), o.next();
              }
            ),
          s.on("orientationchange.fb resize.fb", function(t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? u(function() {
                  o.update();
                })
              : (o.$refs.stage.hide(),
                setTimeout(function() {
                  o.$refs.stage.show(), o.update();
                }, 500));
          }),
          r.on("focusin.fb", function(t) {
            var i = n.fancybox ? n.fancybox.getInstance() : null;
            i.isClosing ||
              !i.current ||
              !i.current.opts.trapFocus ||
              n(t.target).hasClass("fancybox-container") ||
              n(t.target).is(e) ||
              (i &&
                "fixed" !== n(t.target).css("position") &&
                !i.$refs.container.has(t.target).length &&
                (t.stopPropagation(),
                i.focus(),
                s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft)));
          }),
          r.on("keydown.fb", function(t) {
            var e = o.current,
              i = t.keyCode || t.which;
            if (
              e &&
              e.opts.keyboard &&
              !n(t.target).is("input") &&
              !n(t.target).is("textarea")
            )
              return 8 === i || 27 === i
                ? (t.preventDefault(), void o.close(t))
                : 37 === i || 38 === i
                ? (t.preventDefault(), void o.previous())
                : 39 === i || 40 === i
                ? (t.preventDefault(), void o.next())
                : void o.trigger("afterKeydown", t, i);
          }),
          o.group[o.currIndex].opts.idleTime &&
            ((o.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function() {
                (o.idleSecondsCounter = 0),
                  o.isIdle && o.showControls(),
                  (o.isIdle = !1);
              }
            ),
            (o.idleInterval = t.setInterval(function() {
              o.idleSecondsCounter++,
                o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime &&
                  ((o.isIdle = !0),
                  (o.idleSecondsCounter = 0),
                  o.hideControls());
            }, 1e3)));
      },
      removeEvents: function() {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("focusin.fb keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function(t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function(t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function(t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          h = this,
          p = h.group.length;
        if (!(h.isSliding || h.isClosing || (h.isAnimating && h.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            (s = h.current ? h.current.opts.loop : h.opts.loop),
            !s && (t < 0 || t >= p))
          )
            return !1;
          if (
            ((a = h.firstRun = null === h.firstRun),
            !(p < 2 && !a && h.isSliding))
          ) {
            if (
              ((c = h.current),
              (h.prevIndex = h.currIndex),
              (h.prevPos = h.currPos),
              (r = h.createSlide(t)),
              p > 1 &&
                ((s || r.index > 0) && h.createSlide(t - 1),
                (s || r.index < p - 1) && h.createSlide(t + 1)),
              (h.current = r),
              (h.currIndex = r.index),
              (h.currPos = r.pos),
              h.trigger("beforeShow", a),
              h.updateControls(),
              (u = n.fancybox.getTranslate(r.$slide)),
              (r.isMoved =
                (0 !== u.left || 0 !== u.top) &&
                !r.$slide.hasClass("fancybox-animated")),
              (r.forcedDuration = o),
              n.isNumeric(e)
                ? (r.forcedDuration = e)
                : (e = r.opts[a ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              a)
            )
              return (
                r.opts.animationEffect &&
                  e &&
                  h.$refs.container.css("transition-duration", e + "ms"),
                h.$refs.container.removeClass("fancybox-is-hidden"),
                f(h.$refs.container),
                h.$refs.container.addClass("fancybox-is-open"),
                r.$slide.addClass("fancybox-slide--current"),
                h.loadSlide(r),
                void h.preload()
              );
            n.each(h.slides, function(t, e) {
              n.fancybox.stop(e.$slide);
            }),
              r.$slide
                .removeClass("fancybox-slide--next fancybox-slide--previous")
                .addClass("fancybox-slide--current"),
              r.isMoved
                ? ((l = Math.round(r.$slide.width())),
                  n.each(h.slides, function(t, o) {
                    var i = o.pos - r.pos;
                    n.fancybox.animate(
                      o.$slide,
                      { top: 0, left: i * l + i * o.opts.gutter },
                      e,
                      function() {
                        o.$slide
                          .removeAttr("style")
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === h.currPos &&
                            ((r.isMoved = !1), h.complete());
                      }
                    );
                  }))
                : h.$refs.stage.children().removeAttr("style"),
              r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
              h.preload(),
              c.pos !== r.pos &&
                ((d =
                  "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                c.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                ),
                (c.isComplete = !1),
                e &&
                  (r.isMoved || r.opts.transitionEffect) &&
                  (r.isMoved
                    ? c.$slide.addClass(d)
                    : ((d =
                        "fancybox-animated " +
                        d +
                        " fancybox-fx-" +
                        r.opts.transitionEffect),
                      n.fancybox.animate(c.$slide, d, e, function() {
                        c.$slide.removeClass(d).removeAttr("style");
                      }))));
          }
        }
      },
      createSlide: function(t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function(t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u = this,
          d = u.current,
          f = d.$content,
          h = parseInt(d.$slide.width(), 10),
          p = parseInt(d.$slide.height(), 10),
          g = d.width,
          b = d.height;
        "image" != d.type ||
          d.hasError ||
          !f ||
          u.isAnimating ||
          (n.fancybox.stop(f),
          (u.isAnimating = !0),
          (t = t === o ? 0.5 * h : t),
          (e = e === o ? 0.5 * p : e),
          (a = n.fancybox.getTranslate(f)),
          (c = g / a.width),
          (l = b / a.height),
          (s = 0.5 * h - 0.5 * g),
          (r = 0.5 * p - 0.5 * b),
          g > h &&
            ((s = a.left * c - (t * c - t)),
            s > 0 && (s = 0),
            s < h - g && (s = h - g)),
          b > p &&
            ((r = a.top * l - (e * l - e)),
            r > 0 && (r = 0),
            r < p - b && (r = p - b)),
          u.updateCursor(g, b),
          n.fancybox.animate(
            f,
            { top: r, left: s, scaleX: c, scaleY: l },
            i || 330,
            function() {
              u.isAnimating = !1;
            }
          ),
          u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
      },
      scaleToFit: function(t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        "image" != i.type ||
          i.hasError ||
          !a ||
          o.isAnimating ||
          (n.fancybox.stop(a),
          (o.isAnimating = !0),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height()
            },
            t || 330,
            function() {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function(t) {
        var e,
          o,
          i,
          a,
          r,
          c = this,
          l = t.$content,
          u = t.width,
          d = t.height,
          f = t.opts.margin;
        return (
          !(!l || !l.length || (!u && !d)) &&
          ("number" === n.type(f) && (f = [f, f]),
          2 == f.length && (f = [f[0], f[1], f[0], f[1]]),
          s.width() < 800 && (f = [0, 0, 0, 0]),
          (e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3])),
          (o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2])),
          (i = Math.min(1, e / u, o / d)),
          (a = Math.floor(i * u)),
          (r = Math.floor(i * d)),
          {
            top: Math.floor(0.5 * (o - r)) + f[0],
            left: Math.floor(0.5 * (e - a)) + f[3],
            width: a,
            height: r
          })
        );
      },
      update: function() {
        var t = this;
        n.each(t.slides, function(e, n) {
          t.updateSlide(n);
        });
      },
      updateSlide: function(t) {
        var e = this,
          o = t.$content;
        o &&
          (t.width || t.height) &&
          (n.fancybox.stop(o),
          n.fancybox.setTranslate(o, e.getFitPos(t)),
          t.pos === e.currPos && e.updateCursor()),
          t.$slide.trigger("refresh"),
          e.trigger("onUpdate", t);
      },
      updateCursor: function(t, e) {
        var n,
          i = this,
          a = i.$refs.container.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
          );
        i.current &&
          !i.isClosing &&
          (i.isZoomable()
            ? (a.addClass("fancybox-is-zoomable"),
              (n =
                t !== o && e !== o
                  ? t < i.current.width && e < i.current.height
                  : i.isScaledDown()),
              n
                ? a.addClass("fancybox-can-zoomIn")
                : i.current.opts.touch
                ? a.addClass("fancybox-can-drag")
                : a.addClass("fancybox-can-zoomOut"))
            : i.current.opts.touch && a.addClass("fancybox-can-drag"));
      },
      isZoomable: function() {
        var t,
          e = this,
          o = e.current;
        if (o && !e.isClosing)
          return !!(
            "image" === o.type &&
            o.isLoaded &&
            !o.hasError &&
            ("zoom" === o.opts.clickContent ||
              (n.isFunction(o.opts.clickContent) &&
                "zoom" === o.opts.clickContent(o))) &&
            ((t = e.getFitPos(o)), o.width > t.width || o.height > t.height)
          );
      },
      isScaledDown: function() {
        var t = this,
          e = t.current,
          o = e.$content,
          i = !1;
        return (
          o &&
            ((i = n.fancybox.getTranslate(o)),
            (i = i.width < e.width || i.height < e.height)),
          i
        );
      },
      canPan: function() {
        var t = this,
          e = t.current,
          n = e.$content,
          o = !1;
        return (
          n &&
            ((o = t.getFitPos(e)),
            (o =
              Math.abs(n.width() - o.width) > 1 ||
              Math.abs(n.height() - o.height) > 1)),
          o
        );
      },
      loadSlide: function(t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (
            ((t.isLoading = !0),
            a.trigger("beforeLoad", t),
            (e = t.type),
            (o = t.$slide),
            o
              .off("refresh")
              .trigger("onReset")
              .addClass("fancybox-slide--" + (e || "unknown"))
              .addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function(e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function(e, n) {
                      e && "abort" !== n && a.setError(t);
                    }
                  })
                )),
                o.one("onReset", function() {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function(e) {
        var o,
          i,
          a,
          s,
          r = this,
          c = e.opts.image.srcset;
        if (c) {
          (a = t.devicePixelRatio || 1),
            (s = t.innerWidth * a),
            (i = c.split(",").map(function(t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function(t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    return 0 === n
                      ? (e.url = t)
                      : void (
                          o && ((e.value = o), (e.postfix = t[t.length - 1]))
                        );
                  }),
                e
              );
            })),
            i.sort(function(t, e) {
              return t.value - e.value;
            });
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            if (
              ("w" === u.postfix && u.value >= s) ||
              ("x" === u.postfix && u.value >= a)
            ) {
              o = u;
              break;
            }
          }
          !o && i.length && (o = i[i.length - 1]),
            o &&
              ((e.src = o.url),
              e.width &&
                e.height &&
                "w" == o.postfix &&
                ((e.height = (e.width / e.height) * o.value),
                (e.width = o.value)));
        }
        (e.$content = n('<div class="fancybox-image-wrap"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(e.$slide)),
          e.opts.preload !== !1 &&
          e.opts.width &&
          e.opts.height &&
          (e.opts.thumb || e.opts.$thumb)
            ? ((e.width = e.opts.width),
              (e.height = e.opts.height),
              (e.$ghost = n("<img />")
                .one("error", function() {
                  n(this).remove(), (e.$ghost = null), r.setBigImage(e);
                })
                .one("load", function() {
                  r.afterLoad(e), r.setBigImage(e);
                })
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
            : r.setBigImage(e);
      },
      setBigImage: function(t) {
        var e = this,
          o = n("<img />");
        (t.$image = o
          .one("error", function() {
            e.setError(t);
          })
          .one("load", function() {
            clearTimeout(t.timouts),
              (t.timouts = null),
              e.isClosing ||
                ((t.width = this.naturalWidth),
                (t.height = this.naturalHeight),
                t.opts.image.srcset &&
                  o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                e.hideLoading(t),
                t.$ghost
                  ? (t.timouts = setTimeout(function() {
                      (t.timouts = null), t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))))
                  : e.afterLoad(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          o[0].complete
            ? o.trigger("load")
            : o[0].error
            ? o.trigger("error")
            : (t.timouts = setTimeout(function() {
                o[0].complete || t.hasError || e.showLoading(t);
              }, 100));
      },
      setIframe: function(t) {
        var e,
          i = this,
          a = t.opts.iframe,
          s = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (a.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(a.css)
          .appendTo(s)),
          (e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(a.attr)
            .appendTo(t.$content)),
          a.preload
            ? (i.showLoading(t),
              e.on("load.fb error.fb", function(e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), i.afterLoad(t);
              }),
              s.on("refresh.fb", function() {
                var n,
                  i,
                  s,
                  r,
                  c,
                  l = t.$content;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (i = n.find("body"));
                  } catch (t) {}
                  i &&
                    i.length &&
                    (a.css.width === o || a.css.height === o) &&
                    ((s =
                      e[0].contentWindow.document.documentElement.scrollWidth),
                    (r = Math.ceil(i.outerWidth(!0) + (l.width() - s))),
                    (c = Math.ceil(i.outerHeight(!0))),
                    l.css({
                      width:
                        a.css.width === o
                          ? r + (l.outerWidth() - l.innerWidth())
                          : a.css.width,
                      height:
                        a.css.height === o
                          ? c + (l.outerHeight() - l.innerHeight())
                          : a.css.height
                    })),
                    l.removeClass("fancybox-is-hidden");
                }
              }))
            : this.afterLoad(t),
          e.attr("src", t.src),
          t.opts.smallBtn === !0 &&
            t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
          s.one("onReset", function() {
            try {
              n(this)
                .find("iframe")
                .hide()
                .attr("src", "//about:blank");
            } catch (t) {}
            n(this).empty(), (t.isLoaded = !1);
          });
      },
      setContent: function(t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
              (t.$placeholder = n("<div></div>")
                .hide()
                .insertAfter(e)),
              e.css("display", "inline-block"))
            : t.hasError ||
              ("string" === n.type(e) &&
                ((e = n("<div>")
                  .append(n.trim(e))
                  .contents()),
                3 === e[0].nodeType && (e = n("<div>").html(e))),
              t.opts.filter &&
                (e = n("<div>")
                  .html(e)
                  .find(t.opts.filter))),
          t.$slide.one("onReset", function() {
            t.$placeholder &&
              (t.$placeholder.after(e.hide()).remove(),
              (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError || (n(this).empty(), (t.isLoaded = !1));
          }),
          (t.$content = n(e).appendTo(t.$slide)),
          t.opts.smallBtn &&
            !t.$smallBtn &&
            (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          this.afterLoad(t));
      },
      setError: function(t) {
        (t.hasError = !0),
          t.$slide.removeClass("fancybox-slide--" + t.type),
          this.setContent(t, this.translate(t, t.opts.errorTpl));
      },
      showLoading: function(t) {
        var e = this;
        (t = t || e.current),
          t &&
            !t.$spinner &&
            (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
      },
      hideLoading: function(t) {
        var e = this;
        (t = t || e.current),
          t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
      },
      afterLoad: function(t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger("afterLoad", t),
          e.hideLoading(t),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function(t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.revealContent(t));
      },
      revealContent: function(t) {
        var e,
          i,
          a,
          s,
          r,
          c = this,
          l = t.$slide,
          u = !1;
        return (
          (e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"]),
          (a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"]),
          (a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10)),
          (!t.isMoved && t.pos === c.currPos && a) || (e = !1),
          "zoom" !== e ||
            (t.pos === c.currPos &&
              a &&
              "image" === t.type &&
              !t.hasError &&
              (u = c.getThumbPos(t))) ||
            (e = "fade"),
          "zoom" === e
            ? ((r = c.getFitPos(t)),
              (r.scaleX = Math.round((r.width / u.width) * 100) / 100),
              (r.scaleY = Math.round((r.height / u.height) * 100) / 100),
              delete r.width,
              delete r.height,
              (s = t.opts.zoomOpacity),
              "auto" == s &&
                (s = Math.abs(t.width / t.height - u.width / u.height) > 0.1),
              s && ((u.opacity = 0.1), (r.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                u
              ),
              f(t.$content),
              void n.fancybox.animate(t.$content, r, a, function() {
                c.complete();
              }))
            : (c.updateSlide(t),
              e
                ? (n.fancybox.stop(l),
                  (i =
                    "fancybox-animated fancybox-slide--" +
                    (t.pos > c.prevPos ? "next" : "previous") +
                    " fancybox-fx-" +
                    e),
                  l
                    .removeAttr("style")
                    .removeClass(
                      "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                    )
                    .addClass(i),
                  t.$content.removeClass("fancybox-is-hidden"),
                  f(l),
                  void n.fancybox.animate(
                    l,
                    "fancybox-slide--current",
                    a,
                    function(e) {
                      l.removeClass(i).removeAttr("style"),
                        t.pos === c.currPos && c.complete();
                    },
                    !0
                  ))
                : (f(l),
                  t.$content.removeClass("fancybox-is-hidden"),
                  void (t.pos === c.currPos && c.complete())))
        );
      },
      getThumbPos: function(o) {
        var i,
          a = this,
          s = !1,
          r = function(e) {
            for (
              var o, i = e[0], a = i.getBoundingClientRect(), s = [];
              null !== i.parentElement;

            )
              ("hidden" !== n(i.parentElement).css("overflow") &&
                "auto" !== n(i.parentElement).css("overflow")) ||
                s.push(i.parentElement.getBoundingClientRect()),
                (i = i.parentElement);
            return (
              (o = s.every(function(t) {
                var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                  n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                return e > 0 && n > 0;
              })),
              o &&
                a.bottom > 0 &&
                a.right > 0 &&
                a.left < n(t).width() &&
                a.top < n(t).height()
            );
          },
          c = o.opts.$thumb,
          l = c ? c.offset() : 0;
        return (
          l &&
            c[0].ownerDocument === e &&
            r(c) &&
            ((i = a.$refs.stage.offset()),
            (s = {
              top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
              left:
                l.left - i.left + parseFloat(c.css("border-left-width") || 0),
              width: c.width(),
              height: c.height(),
              scaleX: 1,
              scaleY: 1
            })),
          s
        );
      },
      complete: function() {
        var t = this,
          o = t.current,
          i = {};
        o.isMoved ||
          !o.isLoaded ||
          o.isComplete ||
          ((o.isComplete = !0),
          o.$slide.siblings().trigger("onReset"),
          f(o.$slide),
          o.$slide.addClass("fancybox-slide--complete"),
          n.each(t.slides, function(e, o) {
            o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
              ? (i[o.pos] = o)
              : o && (n.fancybox.stop(o.$slide), o.$slide.unbind().remove());
          }),
          (t.slides = i),
          t.updateCursor(),
          t.trigger("afterShow"),
          (n(e.activeElement).is("[disabled]") ||
            (o.opts.autoFocus && "image" != o.type && "iframe" !== o.type)) &&
            t.focus());
      },
      preload: function() {
        var t,
          e,
          n = this;
        n.group.length < 2 ||
          ((t = n.slides[n.currPos + 1]),
          (e = n.slides[n.currPos - 1]),
          t && "image" === t.type && n.loadSlide(t),
          e && "image" === e.type && n.loadSlide(e));
      },
      focus: function() {
        var t,
          e = this.current;
        this.isClosing ||
          ((t =
            e && e.isComplete
              ? e.$slide
                  .find("button,:input,[tabindex],a")
                  .filter(":not([disabled]):visible:first")
              : null),
          (t = t && t.length ? t : this.$refs.container),
          t.focus());
      },
      activate: function() {
        var t = this;
        n(".fancybox-container").each(function() {
          var e = n(this).data("FancyBox");
          e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
        }),
          t.current &&
            (t.$refs.container.index() > 0 &&
              t.$refs.container.prependTo(e.body),
            t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function(t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l = this,
          f = l.current,
          h = function() {
            l.cleanUp(t);
          };
        return (
          !l.isClosing &&
          ((l.isClosing = !0),
          l.trigger("beforeClose", t) === !1
            ? ((l.isClosing = !1),
              u(function() {
                l.update();
              }),
              !1)
            : (l.removeEvents(),
              f.timouts && clearTimeout(f.timouts),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide
                .off(d)
                .removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
              f.$slide
                .siblings()
                .trigger("onReset")
                .remove(),
              i &&
                l.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing"),
              l.hideLoading(f),
              l.hideControls(),
              l.updateCursor(),
              "zoom" !== o ||
                (t !== !0 &&
                  a &&
                  i &&
                  "image" === f.type &&
                  !f.hasError &&
                  (c = l.getThumbPos(f))) ||
                (o = "fade"),
              "zoom" === o
                ? (n.fancybox.stop(a),
                  (r = n.fancybox.getTranslate(a)),
                  (r.width = r.width * r.scaleX),
                  (r.height = r.height * r.scaleY),
                  (s = f.opts.zoomOpacity),
                  "auto" == s &&
                    (s =
                      Math.abs(f.width / f.height - c.width / c.height) > 0.1),
                  s && (c.opacity = 0),
                  (r.scaleX = r.width / c.width),
                  (r.scaleY = r.height / c.height),
                  (r.width = c.width),
                  (r.height = c.height),
                  n.fancybox.setTranslate(f.$content, r),
                  n.fancybox.animate(f.$content, c, i, h),
                  !0)
                : (o && i
                    ? t === !0
                      ? setTimeout(h, i)
                      : n.fancybox.animate(
                          f.$slide.removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                            o,
                          i,
                          h
                        )
                    : h(),
                  !0)))
        );
      },
      cleanUp: function(t) {
        var e,
          o = this;
        o.current.$slide.trigger("onReset"),
          o.$refs.container.empty().remove(),
          o.trigger("afterClose", t),
          o.$lastFocus && !o.current.focusBack && o.$lastFocus.focus(),
          (o.current = null),
          (e = n.fancybox.getInstance()),
          e
            ? e.activate()
            : (s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),
              n("html").removeClass("fancybox-enabled"),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function(t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        return (
          s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          o === !1
            ? o
            : void ("afterClose" === t
                ? r.trigger(t + ".fb", i)
                : a.$refs.container.trigger(t + ".fb", i))
        );
      },
      updateControls: function(t) {
        var e = this,
          o = e.current,
          i = o.index,
          a = o.opts,
          s = a.caption,
          r = e.$refs.caption;
        o.$slide.trigger("refresh"),
          (e.$caption = s && s.length ? r.html(s) : null),
          e.isHiddenControls || e.showControls(),
          n("[data-fancybox-count]").html(e.group.length),
          n("[data-fancybox-index]").html(i + 1),
          n("[data-fancybox-prev]").prop("disabled", !a.loop && i <= 0),
          n("[data-fancybox-next]").prop(
            "disabled",
            !a.loop && i >= e.group.length - 1
          );
      },
      hideControls: function() {
        (this.isHiddenControls = !0),
          this.$refs.container.removeClass(
            "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
          );
      },
      showControls: function() {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.isHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal),
          t.$caption
            ? n.addClass("fancybox-show-caption ")
            : n.removeClass("fancybox-show-caption");
      },
      toggleControls: function() {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      }
    }),
      (n.fancybox = {
        version: "3.1.20",
        defaults: a,
        getInstance: function(t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):first'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof h &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function(t, e, n) {
          return new h(t, e, n);
        },
        close: function(t) {
          var e = this.getInstance();
          e && (e.close(), t === !0 && this.close());
        },
        destroy: function() {
          this.close(!0), r.off("click.fb-start");
        },
        isMobile:
          e.createTouch !== o &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent
          ),
        use3d: (function() {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function(t) {
          var e;
          if (!t || !t.length) return !1;
          if (
            ((e = t.eq(0).css("transform")),
            e && e.indexOf("matrix") !== -1
              ? ((e = e.split("(")[1]),
                (e = e.split(")")[0]),
                (e = e.split(",")))
              : (e = []),
            e.length)
          )
            (e =
              e.length > 10
                ? [e[13], e[12], e[0], e[5]]
                : [e[5], e[4], e[0], e[3]]),
              (e = e.map(parseFloat));
          else {
            e = [0, 0, 1, 1];
            var n = /\.*translate\((.*)px,(.*)px\)/i,
              o = n.exec(t.eq(0).attr("style"));
            o && ((e[0] = parseFloat(o[2])), (e[1] = parseFloat(o[1])));
          }
          return {
            top: e[0],
            left: e[1],
            scaleX: e[2],
            scaleY: e[3],
            opacity: parseFloat(t.css("opacity")),
            width: t.width(),
            height: t.height()
          };
        },
        setTranslate: function(t, e) {
          var n = "",
            i = {};
          if (t && e)
            return (
              (e.left === o && e.top === o) ||
                ((n =
                  (e.left === o ? t.position().left : e.left) +
                  "px, " +
                  (e.top === o ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              e.scaleX !== o &&
                e.scaleY !== o &&
                (n =
                  (n.length ? n + " " : "") +
                  "scale(" +
                  e.scaleX +
                  ", " +
                  e.scaleY +
                  ")"),
              n.length && (i.transform = n),
              e.opacity !== o && (i.opacity = e.opacity),
              e.width !== o && (i.width = e.width),
              e.height !== o && (i.height = e.height),
              t.css(i)
            );
        },
        animate: function(t, e, i, a, s) {
          var r = d || "transitionend";
          n.isFunction(i) && ((a = i), (i = null)),
            n.isPlainObject(e) || t.removeAttr("style"),
            t.on(r, function(i) {
              (!i ||
                !i.originalEvent ||
                (t.is(i.originalEvent.target) &&
                  "z-index" != i.originalEvent.propertyName)) &&
                (t.off(r),
                n.isPlainObject(e)
                  ? e.scaleX !== o &&
                    e.scaleY !== o &&
                    (t.css("transition-duration", "0ms"),
                    (e.width = t.width() * e.scaleX),
                    (e.height = t.height() * e.scaleY),
                    (e.scaleX = 1),
                    (e.scaleY = 1),
                    n.fancybox.setTranslate(t, e))
                  : s !== !0 && t.removeClass(e),
                n.isFunction(a) && a(i));
            }),
            n.isNumeric(i) && t.css("transition-duration", i + "ms"),
            n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
            t.data(
              "timer",
              setTimeout(function() {
                t.trigger("transitionend");
              }, i + 16)
            );
        },
        stop: function(t) {
          clearTimeout(t.data("timer")), t.off(d);
        }
      }),
      (n.fn.fancybox = function(t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body")
                .off("click.fb-start", e)
                .on("click.fb-start", e, { items: n(e), options: t }, i)
            : this.off("click.fb-start").on(
                "click.fb-start",
                { items: this, options: t },
                i
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i);
  }
})(window, document, window.jQuery),
  (function(t) {
    "use strict";
    var e = function(e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      },
      n = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
          matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
          type: "iframe",
          url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "iframe",
          url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
          matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
          type: "iframe",
          url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l"
        },
        google_maps: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function(t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12]) +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          }
        }
      };
    t(document).on("onInit.fb", function(o, i) {
      t.each(i.group, function(o, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          f = i.src || "",
          h = !1;
        i.type ||
          ((a = t.extend(!0, {}, n, i.opts.media)),
          t.each(a, function(n, o) {
            if (((r = f.match(o.matcher)), (u = {}), (d = n), r)) {
              if (((h = o.type), o.paramPlace && r[o.paramPlace])) {
                (l = r[o.paramPlace]),
                  "?" == l[0] && (l = l.substring(1)),
                  (l = l.split("&"));
                for (var a = 0; a < l.length; ++a) {
                  var p = l[a].split("=", 2);
                  2 == p.length &&
                    (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")));
                }
              }
              return (
                (c = t.extend(!0, {}, o.params, i.opts[n], u)),
                (f =
                  "function" === t.type(o.url)
                    ? o.url.call(this, r, c, i)
                    : e(o.url, r, c)),
                (s =
                  "function" === t.type(o.thumb)
                    ? o.thumb.call(this, r, c, i)
                    : e(o.thumb, r)),
                "vimeo" === d && (f = f.replace("&%23", "#")),
                !1
              );
            }
          }),
          h
            ? ((i.src = f),
              (i.type = h),
              i.opts.thumb ||
                (i.opts.$thumb && i.opts.$thumb.length) ||
                (i.opts.thumb = s),
              "iframe" === h &&
                (t.extend(!0, i.opts, {
                  iframe: { preload: !1, attr: { scrolling: "no" } }
                }),
                (i.contentProvider = d),
                (i.opts.slideClass +=
                  " fancybox-slide--" +
                  ("google_maps" == d ? "map" : "video"))))
            : (i.type = "image"));
      });
    });
  })(window.jQuery),
  (function(t, e, n) {
    "use strict";
    var o = (function() {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function(e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function() {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function(e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function(e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function(t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function(t) {
        if (
          t.is("a,button,input,select,textarea") ||
          n.isFunction(t.get(0).onclick)
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function(t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      u = function(t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function() {
      this.$container.off(".fb.touch");
    }),
      (u.prototype.ontouchstart = function(o) {
        var i = this,
          c = n(o.target),
          u = i.instance,
          d = u.current,
          f = d.$content,
          h = "touchstart" == o.type;
        if (
          (h && i.$container.off("mousedown.fb.touch"),
          !d || i.instance.isAnimating || i.instance.isClosing)
        )
          return o.stopPropagation(), void o.preventDefault();
        if (
          (!o.originalEvent || 2 != o.originalEvent.button) &&
          c.length &&
          !r(c) &&
          !r(c.parent()) &&
          !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left) &&
          ((i.startPoints = a(o)),
          i.startPoints && !(i.startPoints.length > 1 && u.isSliding))
        ) {
          if (
            ((i.$target = c),
            (i.$content = f),
            (i.canTap = !0),
            n(e).off(".fb.touch"),
            n(e).on(
              h
                ? "touchend.fb.touch touchcancel.fb.touch"
                : "mouseup.fb.touch mouseleave.fb.touch",
              n.proxy(i, "ontouchend")
            ),
            n(e).on(
              h ? "touchmove.fb.touch" : "mousemove.fb.touch",
              n.proxy(i, "ontouchmove")
            ),
            o.stopPropagation(),
            (!u.current.opts.touch && !u.canPan()) ||
              (!c.is(i.$stage) && !i.$stage.find(c).length))
          )
            return void (c.is("img") && o.preventDefault());
          (n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent()))) ||
            o.preventDefault(),
            (i.canvasWidth = Math.round(d.$slide[0].clientWidth)),
            (i.canvasHeight = Math.round(d.$slide[0].clientHeight)),
            (i.startTime = new Date().getTime()),
            (i.distanceX = i.distanceY = i.distance = 0),
            (i.isPanning = !1),
            (i.isSwiping = !1),
            (i.isZooming = !1),
            (i.sliderStartPos = i.sliderLastPos || { top: 0, left: 0 }),
            (i.contentStartPos = n.fancybox.getTranslate(i.$content)),
            (i.contentLastPos = null),
            1 !== i.startPoints.length ||
              i.isZooming ||
              ((i.canTap = !u.isSliding),
              "image" === d.type &&
              (i.contentStartPos.width > i.canvasWidth + 1 ||
                i.contentStartPos.height > i.canvasHeight + 1)
                ? (n.fancybox.stop(i.$content),
                  i.$content.css("transition-duration", "0ms"),
                  (i.isPanning = !0))
                : (i.isSwiping = !0),
              i.$container.addClass("fancybox-controls--isGrabbing")),
            2 !== i.startPoints.length ||
              u.isAnimating ||
              d.hasError ||
              "image" !== d.type ||
              (!d.isLoaded && !d.$ghost) ||
              ((i.isZooming = !0),
              (i.isSwiping = !1),
              (i.isPanning = !1),
              n.fancybox.stop(i.$content),
              i.$content.css("transition-duration", "0ms"),
              (i.centerPointStartX =
                0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                n(t).scrollLeft()),
              (i.centerPointStartY =
                0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                n(t).scrollTop()),
              (i.percentageOfImageAtPinchPointX =
                (i.centerPointStartX - i.contentStartPos.left) /
                i.contentStartPos.width),
              (i.percentageOfImageAtPinchPointY =
                (i.centerPointStartY - i.contentStartPos.top) /
                i.contentStartPos.height),
              (i.startDistanceBetweenFingers = s(
                i.startPoints[0],
                i.startPoints[1]
              )));
        }
      }),
      (u.prototype.ontouchmove = function(t) {
        var e = this;
        if (
          ((e.newPoints = a(t)),
          n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent())))
        )
          return t.stopPropagation(), void (e.canTap = !1);
        if (
          (e.instance.current.opts.touch || e.instance.canPan()) &&
          e.newPoints &&
          e.newPoints.length &&
          ((e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
          (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
          (e.distance = s(e.newPoints[0], e.startPoints[0])),
          e.distance > 0)
        ) {
          if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length)
            return;
          t.stopPropagation(),
            t.preventDefault(),
            e.isSwiping
              ? e.onSwipe()
              : e.isPanning
              ? e.onPan()
              : e.isZooming && e.onZoom();
        }
      }),
      (u.prototype.onSwipe = function() {
        var e,
          a = this,
          s = a.isSwiping,
          r = a.sliderStartPos.left || 0;
        s === !0
          ? Math.abs(a.distance) > 10 &&
            ((a.canTap = !1),
            a.instance.group.length < 2 && a.instance.opts.touch.vertical
              ? (a.isSwiping = "y")
              : a.instance.isSliding ||
                a.instance.opts.touch.vertical === !1 ||
                ("auto" === a.instance.opts.touch.vertical &&
                  n(t).width() > 800)
              ? (a.isSwiping = "x")
              : ((e = Math.abs(
                  (180 * Math.atan2(a.distanceY, a.distanceX)) / Math.PI
                )),
                (a.isSwiping = e > 45 && e < 135 ? "y" : "x")),
            (a.instance.isSliding = a.isSwiping),
            (a.startPoints = a.newPoints),
            n.each(a.instance.slides, function(t, e) {
              n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", "0ms"),
                (e.inTransition = !1),
                e.pos === a.instance.current.pos &&
                  (a.sliderStartPos.left = n.fancybox.getTranslate(
                    e.$slide
                  ).left);
            }),
            a.instance.SlideShow &&
              a.instance.SlideShow.isActive &&
              a.instance.SlideShow.stop())
          : ("x" == s &&
              (a.distanceX > 0 &&
              (a.instance.group.length < 2 ||
                (0 === a.instance.current.index &&
                  !a.instance.current.opts.loop))
                ? (r += Math.pow(a.distanceX, 0.8))
                : a.distanceX < 0 &&
                  (a.instance.group.length < 2 ||
                    (a.instance.current.index === a.instance.group.length - 1 &&
                      !a.instance.current.opts.loop))
                ? (r -= Math.pow(-a.distanceX, 0.8))
                : (r += a.distanceX)),
            (a.sliderLastPos = {
              top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
              left: r
            }),
            a.requestId && (i(a.requestId), (a.requestId = null)),
            (a.requestId = o(function() {
              a.sliderLastPos &&
                (n.each(a.instance.slides, function(t, e) {
                  var o = e.pos - a.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left:
                      a.sliderLastPos.left +
                      o * a.canvasWidth +
                      o * e.opts.gutter
                  });
                }),
                a.$container.addClass("fancybox-is-sliding"));
            })));
      }),
      (u.prototype.onPan = function() {
        var t,
          e,
          a,
          s = this;
        (s.canTap = !1),
          (t =
            s.contentStartPos.width > s.canvasWidth
              ? s.contentStartPos.left + s.distanceX
              : s.contentStartPos.left),
          (e = s.contentStartPos.top + s.distanceY),
          (a = s.limitMovement(
            t,
            e,
            s.contentStartPos.width,
            s.contentStartPos.height
          )),
          (a.scaleX = s.contentStartPos.scaleX),
          (a.scaleY = s.contentStartPos.scaleY),
          (s.contentLastPos = a),
          s.requestId && (i(s.requestId), (s.requestId = null)),
          (s.requestId = o(function() {
            n.fancybox.setTranslate(s.$content, s.contentLastPos);
          }));
      }),
      (u.prototype.limitMovement = function(t, e, n, o) {
        var i,
          a,
          s,
          r,
          c = this,
          l = c.canvasWidth,
          u = c.canvasHeight,
          d = c.contentStartPos.left,
          f = c.contentStartPos.top,
          h = c.distanceX,
          p = c.distanceY;
        return (
          (i = Math.max(0, 0.5 * l - 0.5 * n)),
          (a = Math.max(0, 0.5 * u - 0.5 * o)),
          (s = Math.min(l - n, 0.5 * l - 0.5 * n)),
          (r = Math.min(u - o, 0.5 * u - 0.5 * o)),
          n > l &&
            (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, 0.8) || 0),
            h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, 0.8) || 0)),
          o > u &&
            (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, 0.8) || 0),
            p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, 0.8) || 0)),
          { top: e, left: t }
        );
      }),
      (u.prototype.limitPosition = function(t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (u.prototype.onZoom = function() {
        var e = this,
          a = e.contentStartPos.width,
          r = e.contentStartPos.height,
          c = e.contentStartPos.left,
          l = e.contentStartPos.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          d = u / e.startDistanceBetweenFingers,
          f = Math.floor(a * d),
          h = Math.floor(r * d),
          p = (a - f) * e.percentageOfImageAtPinchPointX,
          g = (r - h) * e.percentageOfImageAtPinchPointY,
          b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = b - e.centerPointStartX,
          v = m - e.centerPointStartY,
          x = c + (p + y),
          w = l + (g + v),
          $ = {
            top: w,
            left: x,
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d
          };
        (e.canTap = !1),
          (e.newWidth = f),
          (e.newHeight = h),
          (e.contentLastPos = $),
          e.requestId && (i(e.requestId), (e.requestId = null)),
          (e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function(t) {
        var o = this,
          s = Math.max(new Date().getTime() - o.startTime, 1),
          r = o.isSwiping,
          c = o.isPanning,
          l = o.isZooming;
        return (
          (o.endPoints = a(t)),
          o.$container.removeClass("fancybox-controls--isGrabbing"),
          n(e).off(".fb.touch"),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          o.canTap
            ? o.onTap(t)
            : ((o.speed = 366),
              (o.velocityX = (o.distanceX / s) * 0.5),
              (o.velocityY = (o.distanceY / s) * 0.5),
              (o.speedX = Math.max(
                0.5 * o.speed,
                Math.min(1.5 * o.speed, (1 / Math.abs(o.velocityX)) * o.speed)
              )),
              void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))
        );
      }),
      (u.prototype.endSwiping = function(t) {
        var e = this,
          o = !1;
        (e.instance.isSliding = !1),
          (e.sliderLastPos = null),
          "y" == t && Math.abs(e.distanceY) > 50
            ? (n.fancybox.animate(
                e.instance.current.$slide,
                {
                  top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                  opacity: 0
                },
                150
              ),
              (o = e.instance.close(!0, 300)))
            : "x" == t && e.distanceX > 50 && e.instance.group.length > 1
            ? (o = e.instance.previous(e.speedX))
            : "x" == t &&
              e.distanceX < -50 &&
              e.instance.group.length > 1 &&
              (o = e.instance.next(e.speedX)),
          o !== !1 ||
            ("x" != t && "y" != t) ||
            e.instance.jumpTo(e.instance.current.index, 150),
          e.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function() {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (i.instance.current.opts.touch.momentum === !1
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + i.velocityX * i.speed),
              (e = i.contentLastPos.top + i.velocityY * i.speed)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 330));
      }),
      (u.prototype.endZooming = function() {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.setTranslate(
                a.content,
                n.fancybox.getTranslate(a.$content)
              ),
              n.fancybox.animate(a.$content, o, 150)));
      }),
      (u.prototype.onTap = function(t) {
        var e,
          o = this,
          i = n(t.target),
          s = o.instance,
          r = s.current,
          c = (t && a(t)) || o.startPoints,
          l = c[0] ? c[0].x - o.$stage.offset().left : 0,
          u = c[0] ? c[0].y - o.$stage.offset().top : 0,
          d = function(e) {
            var i = r.opts[e];
            if ((n.isFunction(i) && (i = i.apply(s, [r, t])), i))
              switch (i) {
                case "close":
                  s.close(o.startEvent);
                  break;
                case "toggleControls":
                  s.toggleControls(!0);
                  break;
                case "next":
                  s.next();
                  break;
                case "nextOrClose":
                  s.group.length > 1 ? s.next() : s.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == r.type &&
                    (r.isLoaded || r.$ghost) &&
                    (s.canPan()
                      ? s.scaleToFit()
                      : s.isScaledDown()
                      ? s.scaleToActual(l, u)
                      : s.group.length < 2 && s.close(o.startEvent));
              }
          };
        if (
          !(
            (t.originalEvent && 2 == t.originalEvent.button) ||
            s.isSliding ||
            l > i[0].clientWidth + i.offset().left
          )
        ) {
          if (
            i.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (i.is(".fancybox-slide")) e = "Slide";
          else {
            if (!s.current.$content || !s.current.$content.has(t.target).length)
              return;
            e = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(l - o.tapX) > 50 ||
                Math.abs(u - o.tapY) > 50 ||
                s.isSliding)
            )
              return this;
            d("dblclick" + e);
          } else
            (o.tapX = l),
              (o.tapY = u),
              r.opts["dblclick" + e] &&
              r.opts["dblclick" + e] !== r.opts["click" + e]
                ? (o.tapped = setTimeout(function() {
                    (o.tapped = null), d("click" + e);
                  }, 300))
                : d("click" + e);
          return this;
        }
      }),
      n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      }),
      n(e).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy();
      });
  })(window, document, window.jQuery),
  (function(t, e) {
    "use strict";
    var n = function(t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      speed: 3e3,
      init: function() {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function() {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
            t.$button.hide();
      },
      set: function() {
        var t = this;
        t.instance &&
        t.instance.current &&
        (t.instance.current.opts.loop ||
          t.instance.currIndex < t.instance.group.length - 1)
          ? (t.timer = setTimeout(function() {
              t.instance.next();
            }, t.instance.current.opts.slideShow.speed || t.speed))
          : (t.stop(),
            (t.instance.idleSecondsCounter = 0),
            t.instance.showControls());
      },
      clear: function() {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function() {
        var t = this,
          e = t.instance.current;
        t.instance &&
          e &&
          (e.opts.loop || e.index < t.instance.group.length - 1) &&
          ((t.isActive = !0),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
            .addClass("fancybox-button--pause"),
          e.isComplete && t.set());
      },
      stop: function() {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause"),
          (t.isActive = !1);
      },
      toggle: function() {
        var t = this;
        t.isActive ? t.stop() : t.start();
      }
    }),
      e(t).on({
        "onInit.fb": function(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function(t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function(t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        }
      }),
      e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, window.jQuery),
  (function(t, e) {
    "use strict";
    var n = (function() {
      var e,
        n,
        o,
        i = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror"
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror"
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError"
          ]
        ],
        a = {};
      for (n = 0; n < i.length; n++)
        if (((e = i[n]), e && e[1] in t)) {
          for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
          return a;
        }
      return !1;
    })();
    if (!n) return void (e.fancybox.defaults.btnTpl.fullScreen = !1);
    var o = {
      request: function(e) {
        (e = e || t.documentElement),
          e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function() {
        t[n.exitFullscreen]();
      },
      toggle: function(e) {
        (e = e || t.documentElement),
          this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function() {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function() {
        return Boolean(t[n.fullscreenEnabled]);
      }
    };
    e(t).on({
      "onInit.fb": function(t, e) {
        var n,
          i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
        e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen
          ? ((n = e.$refs.container),
            n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(
              t
            ) {
              t.stopPropagation(), t.preventDefault(), o.toggle(n[0]);
            }),
            e.opts.fullScreen &&
              e.opts.fullScreen.autoStart === !0 &&
              o.request(n[0]),
            (e.FullScreen = o))
          : i.hide();
      },
      "afterKeydown.fb": function(t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
      },
      "beforeClose.fb": function(t) {
        t && t.FullScreen && o.exit();
      }
    }),
      e(t).on(n.fullscreenchange, function() {
        var t = e.fancybox.getInstance();
        t.current &&
          "image" === t.current.type &&
          t.isAnimating &&
          (t.current.$content.css("transition", "none"),
          (t.isAnimating = !1),
          t.update(!0, !0, 0));
      });
  })(document, window.jQuery),
  (function(t, e) {
    "use strict";
    var n = function(t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      init: function() {
        var t = this,
          e = t.instance.group[0],
          n = t.instance.group[1];
        (t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]")),
          t.instance.group.length > 1 &&
          t.instance.group[t.instance.currIndex].opts.thumbs &&
          ("image" == e.type || e.opts.thumb || e.opts.$thumb) &&
          ("image" == n.type || n.opts.thumb || n.opts.$thumb)
            ? (t.$button.on("click", function() {
                t.toggle();
              }),
              (t.isActive = !0))
            : (t.$button.hide(), (t.isActive = !1));
      },
      create: function() {
        var t,
          n,
          o = this.instance;
        (this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(
          o.$refs.container
        )),
          (t = "<ul>"),
          e.each(o.group, function(e, o) {
            (n =
              o.opts.thumb ||
              (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)),
              n || "image" !== o.type || (n = o.src),
              n &&
                n.length &&
                (t +=
                  '<li data-index="' +
                  e +
                  '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                  n +
                  '" /></li>');
          }),
          (t += "</ul>"),
          (this.$list = e(t)
            .appendTo(this.$grid)
            .on("click", "li", function() {
              o.jumpTo(e(this).data("index"));
            })),
          this.$list
            .find("img")
            .hide()
            .one("load", function() {
              var t,
                n,
                o,
                i,
                a = e(this)
                  .parent()
                  .removeClass("fancybox-thumbs-loading"),
                s = a.outerWidth(),
                r = a.outerHeight();
              (t = this.naturalWidth || this.width),
                (n = this.naturalHeight || this.height),
                (o = t / s),
                (i = n / r),
                o >= 1 &&
                  i >= 1 &&
                  (o > i ? ((t /= i), (n = r)) : ((t = s), (n /= o))),
                e(this)
                  .css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(0.3 * r - 0.3 * n)),
                    "margin-left": Math.min(0, Math.floor(0.5 * s - 0.5 * t))
                  })
                  .show();
            })
            .each(function() {
              this.src = e(this).data("src");
            });
      },
      focus: function() {
        this.instance.current &&
          this.$list
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")
            .focus();
      },
      close: function() {
        this.$grid.hide();
      },
      update: function() {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus())
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function() {
        (this.isVisible = !1), this.update();
      },
      show: function() {
        (this.isVisible = !0), this.update();
      },
      toggle: function() {
        (this.isVisible = !this.isVisible), this.update();
      }
    }),
      e(t).on({
        "onInit.fb": function(t, e) {
          e && !e.Thumbs && (e.Thumbs = new n(e));
        },
        "beforeShow.fb": function(t, e, n, o) {
          var i = e && e.Thumbs;
          if (i && i.isActive) {
            if (n.modal) return i.$button.hide(), void i.hide();
            o && e.opts.thumbs.autoStart === !0 && i.show(),
              i.isVisible && i.focus();
          }
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close();
        }
      });
  })(document, window.jQuery),
  (function(t, e, n) {
    "use strict";
    function o() {
      var t = e.location.hash.substr(1),
        n = t.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return o < 1 && (o = 1), { hash: t, index: o, gallery: i };
    }
    function i(t) {
      var e;
      "" !== t.gallery &&
        ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(
          t.index - 1
        )),
        e.length
          ? e.trigger("click")
          : n("#" + n.escapeSelector(t.gallery)).trigger("click"));
    }
    function a(t) {
      var e;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        e.$orig ? e.$orig.data("fancybox") : e.hash || "")
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function(t, e) {
            return e
              ? "\0" === t
                ? "ï¿½"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          };
        return (t + "").replace(e, n);
      });
    var s = null,
      r = null;
    n(function() {
      setTimeout(function() {
        n.fancybox.defaults.hash !== !1 &&
          (n(t).on({
            "onInit.fb": function(t, e) {
              var n, i;
              e.group[e.currIndex].opts.hash !== !1 &&
                ((n = o()),
                (i = a(e)),
                i &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function(n, o, i, c) {
              var l;
              i.opts.hash !== !1 &&
                ((l = a(o)),
                l &&
                  "" !== l &&
                  (e.location.hash.indexOf(l) < 0 &&
                    (o.opts.origHash = e.location.hash),
                  (s = l + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                  "replaceState" in e.history
                    ? (r && clearTimeout(r),
                      (r = setTimeout(function() {
                        e.history[c ? "pushState" : "replaceState"](
                          {},
                          t.title,
                          e.location.pathname + e.location.search + "#" + s
                        ),
                          (r = null);
                      }, 300)))
                    : (e.location.hash = s)));
            },
            "beforeClose.fb": function(o, i, c) {
              var l, u;
              r && clearTimeout(r),
                c.opts.hash !== !1 &&
                  ((l = a(i)),
                  (u = i && i.opts.origHash ? i.opts.origHash : ""),
                  l &&
                    "" !== l &&
                    ("replaceState" in history
                      ? e.history.replaceState(
                          {},
                          t.title,
                          e.location.pathname + e.location.search + u
                        )
                      : ((e.location.hash = u),
                        n(e)
                          .scrollTop(i.scrollTop)
                          .scrollLeft(i.scrollLeft))),
                  (s = null));
            }
          }),
          n(e).on("hashchange.fb", function() {
            var t = o();
            n.fancybox.getInstance()
              ? !s ||
                s === t.gallery + "-" + t.index ||
                (1 === t.index && s == t.gallery) ||
                ((s = null), n.fancybox.close())
              : "" !== t.gallery && i(t);
          }),
          n(e).one("unload.fb popstate.fb", function() {
            n.fancybox.getInstance("close", !0, 0);
          }),
          i(o()));
      }, 50);
    });
  })(document, window, window.jQuery);
/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!(function(t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e &&
      (delete e.refresh, delete e.render, t.extend(this, e)),
      (this.$element = t(i)),
      !this.imageSrc &&
        this.$element.is("img") &&
        (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (
      (r.length < 1 && r.push("center"),
      1 == r.length && r.push(r[0]),
      ("top" == r[0] ||
        "bottom" == r[0] ||
        "left" == r[1] ||
        "right" == r[1]) &&
        (r = [r[1], r[0]]),
      this.positionX != s && (r[0] = this.positionX.toLowerCase()),
      this.positionY != s && (r[1] = this.positionY.toLowerCase()),
      (h.positionX = r[0]),
      (h.positionY = r[1]),
      "left" != this.positionX &&
        "right" != this.positionX &&
        (this.positionX = isNaN(parseInt(this.positionX))
          ? "center"
          : parseInt(this.positionX)),
      "top" != this.positionY &&
        "bottom" != this.positionY &&
        (this.positionY = isNaN(parseInt(this.positionY))
          ? "center"
          : parseInt(this.positionY)),
      (this.position =
        this.positionX +
        (isNaN(this.positionX) ? "" : "px") +
        " " +
        this.positionY +
        (isNaN(this.positionY) ? "" : "px")),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/))
    )
      return (
        this.imageSrc &&
          this.iosFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
          }),
        this
      );
    if (navigator.userAgent.match(/(Android)/))
      return (
        this.imageSrc &&
          this.androidFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
          }),
        this
      );
    this.$mirror = t("<div />").prependTo("body");
    var a = this.$element.find(">.parallax-slider"),
      n = !1;
    0 == a.length
      ? (this.$slider = t("<img />").prependTo(this.$mirror))
      : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
      this.$mirror
        .addClass("parallax-mirror")
        .css({
          visibility: "hidden",
          zIndex: this.zIndex,
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden"
        }),
      this.$slider.addClass("parallax-slider").one("load", function() {
        (h.naturalHeight && h.naturalWidth) ||
          ((h.naturalHeight = this.naturalHeight || this.height || 1),
          (h.naturalWidth = this.naturalWidth || this.width || 1)),
          (h.aspectRatio = h.naturalWidth / h.naturalHeight),
          o.isSetup || o.setup(),
          o.sliders.push(h),
          (o.isFresh = !1),
          o.requestRender();
      }),
      n || (this.$slider[0].src = this.imageSrc),
      ((this.naturalHeight && this.naturalWidth) ||
        this.$slider[0].complete ||
        a.length > 0) &&
        this.$slider.trigger("load");
  }
  function h(s) {
    return this.each(function() {
      var h = t(this),
        r = "object" == typeof s && s;
      this == i || this == e || h.is("body")
        ? o.configure(r)
        : h.data("px.parallax")
        ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
        : ((r = t.extend({}, h.data(), r)),
          h.data("px.parallax", new o(this, r))),
        "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }
  !(function() {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
      s < e.length && !i.requestAnimationFrame;
      ++s
    )
      (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
        (i.cancelAnimationFrame =
          i[e[s] + "CancelAnimationFrame"] ||
          i[e[s] + "CancelRequestAnimationFrame"]);
    i.requestAnimationFrame ||
      (i.requestAnimationFrame = function(e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function() {
            e(s + o);
          }, o);
        return (t = s + o), h;
      }),
      i.cancelAnimationFrame ||
        (i.cancelAnimationFrame = function(t) {
          clearTimeout(t);
        });
  })(),
    t.extend(o.prototype, {
      speed: 0.2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      refresh: function() {
        (this.boxWidth = this.$element.outerWidth()),
          (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
          (this.boxOffsetTop = this.$element.offset().top - this.bleed),
          (this.boxOffsetLeft = this.$element.offset().left),
          (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
        var t = o.winHeight,
          i = o.docHeight,
          e = Math.min(this.boxOffsetTop, i - t),
          s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
          h = (this.boxHeight + (e - s) * (1 - this.speed)) | 0,
          r = ((this.boxOffsetTop - e) * (1 - this.speed)) | 0;
        if (h * this.aspectRatio >= this.boxWidth) {
          (this.imageWidth = (h * this.aspectRatio) | 0),
            (this.imageHeight = h),
            (this.offsetBaseTop = r);
          var a = this.imageWidth - this.boxWidth;
          this.offsetLeft =
            "left" == this.positionX
              ? 0
              : "right" == this.positionX
              ? -a
              : isNaN(this.positionX)
              ? (-a / 2) | 0
              : Math.max(this.positionX, -a);
        } else {
          (this.imageWidth = this.boxWidth),
            (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
            (this.offsetLeft = 0);
          var a = this.imageHeight - h;
          this.offsetBaseTop =
            "top" == this.positionY
              ? r
              : "bottom" == this.positionY
              ? r - a
              : isNaN(this.positionY)
              ? (r - a / 2) | 0
              : r + Math.max(this.positionY, -a);
        }
      },
      render: function() {
        var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
        this.boxOffsetBottom > t && this.boxOffsetTop <= s
          ? ((this.visibility = "visible"),
            (this.mirrorTop = this.boxOffsetTop - t),
            (this.mirrorLeft = this.boxOffsetLeft - i),
            (this.offsetTop =
              this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
          : (this.visibility = "hidden"),
          this.$mirror.css({
            transform: "translate3d(0px, 0px, 0px)",
            visibility: this.visibility,
            top: this.mirrorTop - e,
            left: this.mirrorLeft,
            height: this.boxHeight,
            width: this.boxWidth
          }),
          this.$slider.css({
            transform: "translate3d(0px, 0px, 0px)",
            position: "absolute",
            top: this.offsetTop,
            left: this.offsetLeft,
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: "none"
          });
      }
    }),
    t.extend(o, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function() {
        if (!this.isReady) {
          var s = t(e),
            h = t(i),
            r = function() {
              (o.winHeight = h.height()),
                (o.winWidth = h.width()),
                (o.docHeight = s.height()),
                (o.docWidth = s.width());
            },
            a = function() {
              var t = h.scrollTop(),
                i = o.docHeight - o.winHeight,
                e = o.docWidth - o.winWidth;
              (o.scrollTop = Math.max(0, Math.min(i, t))),
                (o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft()))),
                (o.overScroll = Math.max(t - i, Math.min(t, 0)));
            };
          h
            .on("resize.px.parallax load.px.parallax", function() {
              r(), (o.isFresh = !1), o.requestRender();
            })
            .on("scroll.px.parallax load.px.parallax", function() {
              a(), o.requestRender();
            }),
            r(),
            a(),
            (this.isReady = !0);
        }
      },
      configure: function(i) {
        "object" == typeof i &&
          (delete i.refresh, delete i.render, t.extend(this.prototype, i));
      },
      refresh: function() {
        t.each(this.sliders, function() {
          this.refresh();
        }),
          (this.isFresh = !0);
      },
      render: function() {
        this.isFresh || this.refresh(),
          t.each(this.sliders, function() {
            this.render();
          });
      },
      requestRender: function() {
        var t = this;
        this.isBusy ||
          ((this.isBusy = !0),
          i.requestAnimationFrame(function() {
            t.render(), (t.isBusy = !1);
          }));
      },
      destroy: function(e) {
        var s,
          h = t(e).data("px.parallax");
        for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
          this.sliders[s] == h && this.sliders.splice(s, 1);
        t(e).data("px.parallax", !1),
          0 === this.sliders.length &&
            (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            (this.isReady = !1),
            (o.isSetup = !1));
      }
    });
  var r = t.fn.parallax;
  (t.fn.parallax = h),
    (t.fn.parallax.Constructor = o),
    (t.fn.parallax.noConflict = function() {
      return (t.fn.parallax = r), this;
    }),
    t(e).on("ready.px.parallax.data-api", function() {
      t('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document);
/*! WOW - v1.0.3 - 2015-01-14
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */ (function() {
  var a,
    b,
    c,
    d,
    e,
    f = function(a, b) {
      return function() {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function(a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function() {
    function a() {}
    return (
      (a.prototype.extend = function(a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.addEvent = function(a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function(a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function() {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function() {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function() {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function() {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function(a) {
        return (
          (this.getPropertyValue = function(b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function(a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function() {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          (this.animationNameCache = new c());
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null
        }),
        (e.prototype.init = function() {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function() {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function() {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function() {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(window, "scroll", this.scrollHandler),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function(a) {
                    return function(b) {
                      var c, d, e, f, g;
                      for (g = [], e = 0, f = b.length; f > e; e++)
                        (d = b[e]),
                          g.push(
                            function() {
                              var a, b, e, f;
                              for (
                                e = d.addedNodes || [],
                                  f = [],
                                  a = 0,
                                  b = e.length;
                                b > a;
                                a++
                              )
                                (c = e[a]), f.push(this.doSync(c));
                              return f;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function() {
          return (
            (this.stopped = !0),
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function() {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function(a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function(a) {
          return (
            this.applyStyle(a),
            (a.className = "" + a.className + " " + this.config.animateClass),
            null != this.config.callback ? this.config.callback(a) : void 0
          );
        }),
        (e.prototype.applyStyle = function(a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function(f) {
                return function() {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function() {
          return "requestAnimationFrame" in window
            ? function(a) {
                return window.requestAnimationFrame(a);
              }
            : function(a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function() {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.customStyle = function(a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function(a, b) {
          var c, d, e, f;
          f = [];
          for (c in b)
            (d = b[c]),
              (a["" + c] = d),
              f.push(
                function() {
                  var b, f, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, f = g.length;
                    f > b;
                    b++
                  )
                    (e = g[b]),
                      h.push(
                        (a[
                          "" + e + c.charAt(0).toUpperCase() + c.substr(1)
                        ] = d)
                      );
                  return h;
                }.call(this)
              );
          return f;
        }),
        (e.prototype.vendorCSS = function(a, b) {
          var c, e, f, g, h, i;
          for (
            e = d(a),
              c = e.getPropertyCSSValue(b),
              i = this.vendors,
              g = 0,
              h = i.length;
            h > g;
            g++
          )
            (f = i[g]), (c = c || e.getPropertyCSSValue("-" + f + "-" + b));
          return c;
        }),
        (e.prototype.animationName = function(a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function(a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function(a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function() {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function() {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function() {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function(a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function(a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f = window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function() {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function() {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}.call(this));
/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 7, 2016
 */
!(function() {
  "use strict";
  function e(e) {
    e.fn.swiper = function(a) {
      var r;
      return (
        e(this).each(function() {
          var e = new t(this, a);
          r || (r = e);
        }),
        r
      );
    };
  }
  var a,
    t = function(e, i) {
      function s(e) {
        return Math.floor(e);
      }
      function n() {
        b.autoplayTimeoutId = setTimeout(function() {
          b.params.loop
            ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b))
            : b.isEnd
            ? i.autoplayStopOnLast
              ? b.stopAutoplay()
              : (b._slideTo(0), b.emit("onAutoplay", b))
            : (b._slideNext(), b.emit("onAutoplay", b));
        }, b.params.autoplay);
      }
      function o(e, t) {
        var r = a(e.target);
        if (!r.is(t))
          if ("string" == typeof t) r = r.parents(t);
          else if (t.nodeType) {
            var i;
            return (
              r.parents().each(function(e, a) {
                a === t && (i = t);
              }),
              i ? t : void 0
            );
          }
        if (0 !== r.length) return r[0];
      }
      function l(e, a) {
        a = a || {};
        var t = window.MutationObserver || window.WebkitMutationObserver,
          r = new t(function(e) {
            e.forEach(function(e) {
              b.onResize(!0), b.emit("onObserverUpdate", b, e);
            });
          });
        r.observe(e, {
          attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
          childList: "undefined" == typeof a.childList ? !0 : a.childList,
          characterData:
            "undefined" == typeof a.characterData ? !0 : a.characterData
        }),
          b.observers.push(r);
      }
      function p(e) {
        e.originalEvent && (e = e.originalEvent);
        var a = e.keyCode || e.charCode;
        if (
          !b.params.allowSwipeToNext &&
          ((b.isHorizontal() && 39 === a) || (!b.isHorizontal() && 40 === a))
        )
          return !1;
        if (
          !b.params.allowSwipeToPrev &&
          ((b.isHorizontal() && 37 === a) || (!b.isHorizontal() && 38 === a))
        )
          return !1;
        if (
          !(
            e.shiftKey ||
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            (document.activeElement &&
              document.activeElement.nodeName &&
              ("input" === document.activeElement.nodeName.toLowerCase() ||
                "textarea" === document.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (37 === a || 39 === a || 38 === a || 40 === a) {
            var t = !1;
            if (
              b.container.parents(".swiper-slide").length > 0 &&
              0 === b.container.parents(".swiper-slide-active").length
            )
              return;
            var r = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              s = window.innerHeight,
              n = b.container.offset();
            b.rtl && (n.left = n.left - b.container[0].scrollLeft);
            for (
              var o = [
                  [n.left, n.top],
                  [n.left + b.width, n.top],
                  [n.left, n.top + b.height],
                  [n.left + b.width, n.top + b.height]
                ],
                l = 0;
              l < o.length;
              l++
            ) {
              var p = o[l];
              p[0] >= r.left &&
                p[0] <= r.left + i &&
                p[1] >= r.top &&
                p[1] <= r.top + s &&
                (t = !0);
            }
            if (!t) return;
          }
          b.isHorizontal()
            ? ((37 === a || 39 === a) &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
              ((39 === a && !b.rtl) || (37 === a && b.rtl)) && b.slideNext(),
              ((37 === a && !b.rtl) || (39 === a && b.rtl)) && b.slidePrev())
            : ((38 === a || 40 === a) &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
              40 === a && b.slideNext(),
              38 === a && b.slidePrev());
        }
      }
      function d(e) {
        e.originalEvent && (e = e.originalEvent);
        var a = b.mousewheel.event,
          t = 0,
          r = b.rtl ? -1 : 1;
        if ("mousewheel" === a)
          if (b.params.mousewheelForceToAxis)
            if (b.isHorizontal()) {
              if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
              t = e.wheelDeltaX * r;
            } else {
              if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
              t = e.wheelDeltaY;
            }
          else
            t =
              Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)
                ? -e.wheelDeltaX * r
                : -e.wheelDeltaY;
        else if ("DOMMouseScroll" === a) t = -e.detail;
        else if ("wheel" === a)
          if (b.params.mousewheelForceToAxis)
            if (b.isHorizontal()) {
              if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
              t = -e.deltaX * r;
            } else {
              if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
              t = -e.deltaY;
            }
          else
            t =
              Math.abs(e.deltaX) > Math.abs(e.deltaY)
                ? -e.deltaX * r
                : -e.deltaY;
        if (0 !== t) {
          if ((b.params.mousewheelInvert && (t = -t), b.params.freeMode)) {
            var i =
                b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
              s = b.isBeginning,
              n = b.isEnd;
            if (
              (i >= b.minTranslate() && (i = b.minTranslate()),
              i <= b.maxTranslate() && (i = b.maxTranslate()),
              b.setWrapperTransition(0),
              b.setWrapperTranslate(i),
              b.updateProgress(),
              b.updateActiveIndex(),
              ((!s && b.isBeginning) || (!n && b.isEnd)) && b.updateClasses(),
              b.params.freeModeSticky
                ? (clearTimeout(b.mousewheel.timeout),
                  (b.mousewheel.timeout = setTimeout(function() {
                    b.slideReset();
                  }, 300)))
                : b.params.lazyLoading && b.lazy && b.lazy.load(),
              0 === i || i === b.maxTranslate())
            )
              return;
          } else {
            if (new window.Date().getTime() - b.mousewheel.lastScrollTime > 60)
              if (0 > t)
                if ((b.isEnd && !b.params.loop) || b.animating) {
                  if (b.params.mousewheelReleaseOnEdges) return !0;
                } else b.slideNext();
              else if ((b.isBeginning && !b.params.loop) || b.animating) {
                if (b.params.mousewheelReleaseOnEdges) return !0;
              } else b.slidePrev();
            b.mousewheel.lastScrollTime = new window.Date().getTime();
          }
          return (
            b.params.autoplay && b.stopAutoplay(),
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            !1
          );
        }
      }
      function u(e, t) {
        e = a(e);
        var r,
          i,
          s,
          n = b.rtl ? -1 : 1;
        (r = e.attr("data-swiper-parallax") || "0"),
          (i = e.attr("data-swiper-parallax-x")),
          (s = e.attr("data-swiper-parallax-y")),
          i || s
            ? ((i = i || "0"), (s = s || "0"))
            : b.isHorizontal()
            ? ((i = r), (s = "0"))
            : ((s = r), (i = "0")),
          (i =
            i.indexOf("%") >= 0
              ? parseInt(i, 10) * t * n + "%"
              : i * t * n + "px"),
          (s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px"),
          e.transform("translate3d(" + i + ", " + s + ",0px)");
      }
      function c(e) {
        return (
          0 !== e.indexOf("on") &&
            (e =
              e[0] !== e[0].toUpperCase()
                ? "on" + e[0].toUpperCase() + e.substring(1)
                : "on" + e),
          e
        );
      }
      if (!(this instanceof t)) return new t(e, i);
      var m = {
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          autoplay: !1,
          autoplayDisableOnInteraction: !0,
          autoplayStopOnLast: !1,
          iOSEdgeSwipeDetection: !1,
          iOSEdgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          },
          flip: { slideShadows: !0, limitRotation: !0 },
          cube: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          fade: { crossFade: !1 },
          parallax: !1,
          scrollbar: null,
          scrollbarHide: !0,
          scrollbarDraggable: !1,
          scrollbarSnapOnRelease: !1,
          keyboardControl: !1,
          mousewheelControl: !1,
          mousewheelReleaseOnEdges: !1,
          mousewheelInvert: !1,
          mousewheelForceToAxis: !1,
          mousewheelSensitivity: 1,
          hashnav: !1,
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          onlyExternal: !1,
          threshold: 0,
          touchMoveStopPropagation: !0,
          uniqueNavElements: !0,
          pagination: null,
          paginationElement: "span",
          paginationClickable: !1,
          paginationHide: !1,
          paginationBulletRender: null,
          paginationProgressRender: null,
          paginationFractionRender: null,
          paginationCustomRender: null,
          paginationType: "bullets",
          resistance: !0,
          resistanceRatio: 0.85,
          nextButton: null,
          prevButton: null,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          lazyLoading: !1,
          lazyLoadingInPrevNext: !1,
          lazyLoadingInPrevNextAmount: 1,
          lazyLoadingOnTransitionStart: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          control: void 0,
          controlInverse: !1,
          controlBy: "slide",
          allowSwipeToPrev: !0,
          allowSwipeToNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          slideClass: "swiper-slide",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          buttonDisabledClass: "swiper-button-disabled",
          paginationCurrentClass: "swiper-pagination-current",
          paginationTotalClass: "swiper-pagination-total",
          paginationHiddenClass: "swiper-pagination-hidden",
          paginationProgressbarClass: "swiper-pagination-progressbar",
          observer: !1,
          observeParents: !1,
          a11y: !1,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          runCallbacksOnInit: !0
        },
        h = i && i.virtualTranslate;
      i = i || {};
      var f = {};
      for (var g in i)
        if (
          "object" != typeof i[g] ||
          null === i[g] ||
          i[g].nodeType ||
            i[g] === window ||
            i[g] === document ||
            ("undefined" != typeof r && i[g] instanceof r) ||
            ("undefined" != typeof jQuery && i[g] instanceof jQuery)
        )
          f[g] = i[g];
        else {
          f[g] = {};
          for (var v in i[g]) f[g][v] = i[g][v];
        }
      for (var w in m)
        if ("undefined" == typeof i[w]) i[w] = m[w];
        else if ("object" == typeof i[w])
          for (var y in m[w])
            "undefined" == typeof i[w][y] && (i[w][y] = m[w][y]);
      var b = this;
      if (
        ((b.params = i),
        (b.originalParams = f),
        (b.classNames = []),
        "undefined" != typeof a && "undefined" != typeof r && (a = r),
        ("undefined" != typeof a ||
          (a =
            "undefined" == typeof r
              ? window.Dom7 || window.Zepto || window.jQuery
              : r)) &&
          ((b.$ = a),
          (b.currentBreakpoint = void 0),
          (b.getActiveBreakpoint = function() {
            if (!b.params.breakpoints) return !1;
            var e,
              a = !1,
              t = [];
            for (e in b.params.breakpoints)
              b.params.breakpoints.hasOwnProperty(e) && t.push(e);
            t.sort(function(e, a) {
              return parseInt(e, 10) > parseInt(a, 10);
            });
            for (var r = 0; r < t.length; r++)
              (e = t[r]), e >= window.innerWidth && !a && (a = e);
            return a || "max";
          }),
          (b.setBreakpoint = function() {
            var e = b.getActiveBreakpoint();
            if (e && b.currentBreakpoint !== e) {
              var a =
                  e in b.params.breakpoints
                    ? b.params.breakpoints[e]
                    : b.originalParams,
                t = b.params.loop && a.slidesPerView !== b.params.slidesPerView;
              for (var r in a) b.params[r] = a[r];
              (b.currentBreakpoint = e), t && b.destroyLoop && b.reLoop(!0);
            }
          }),
          b.params.breakpoints && b.setBreakpoint(),
          (b.container = a(e)),
          0 !== b.container.length))
      ) {
        if (b.container.length > 1) {
          var x = [];
          return (
            b.container.each(function() {
              x.push(new t(this, i));
            }),
            x
          );
        }
        (b.container[0].swiper = b),
          b.container.data("swiper", b),
          b.classNames.push("swiper-container-" + b.params.direction),
          b.params.freeMode && b.classNames.push("swiper-container-free-mode"),
          b.support.flexbox ||
            (b.classNames.push("swiper-container-no-flexbox"),
            (b.params.slidesPerColumn = 1)),
          b.params.autoHeight &&
            b.classNames.push("swiper-container-autoheight"),
          (b.params.parallax || b.params.watchSlidesVisibility) &&
            (b.params.watchSlidesProgress = !0),
          ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 &&
            (b.support.transforms3d
              ? ((b.params.watchSlidesProgress = !0),
                b.classNames.push("swiper-container-3d"))
              : (b.params.effect = "slide")),
          "slide" !== b.params.effect &&
            b.classNames.push("swiper-container-" + b.params.effect),
          "cube" === b.params.effect &&
            ((b.params.resistanceRatio = 0),
            (b.params.slidesPerView = 1),
            (b.params.slidesPerColumn = 1),
            (b.params.slidesPerGroup = 1),
            (b.params.centeredSlides = !1),
            (b.params.spaceBetween = 0),
            (b.params.virtualTranslate = !0),
            (b.params.setWrapperSize = !1)),
          ("fade" === b.params.effect || "flip" === b.params.effect) &&
            ((b.params.slidesPerView = 1),
            (b.params.slidesPerColumn = 1),
            (b.params.slidesPerGroup = 1),
            (b.params.watchSlidesProgress = !0),
            (b.params.spaceBetween = 0),
            (b.params.setWrapperSize = !1),
            "undefined" == typeof h && (b.params.virtualTranslate = !0)),
          b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1),
          (b.wrapper = b.container.children("." + b.params.wrapperClass)),
          b.params.pagination &&
            ((b.paginationContainer = a(b.params.pagination)),
            b.params.uniqueNavElements &&
              "string" == typeof b.params.pagination &&
              b.paginationContainer.length > 1 &&
              1 === b.container.find(b.params.pagination).length &&
              (b.paginationContainer = b.container.find(b.params.pagination)),
            "bullets" === b.params.paginationType &&
            b.params.paginationClickable
              ? b.paginationContainer.addClass("swiper-pagination-clickable")
              : (b.params.paginationClickable = !1),
            b.paginationContainer.addClass(
              "swiper-pagination-" + b.params.paginationType
            )),
          (b.params.nextButton || b.params.prevButton) &&
            (b.params.nextButton &&
              ((b.nextButton = a(b.params.nextButton)),
              b.params.uniqueNavElements &&
                "string" == typeof b.params.nextButton &&
                b.nextButton.length > 1 &&
                1 === b.container.find(b.params.nextButton).length &&
                (b.nextButton = b.container.find(b.params.nextButton))),
            b.params.prevButton &&
              ((b.prevButton = a(b.params.prevButton)),
              b.params.uniqueNavElements &&
                "string" == typeof b.params.prevButton &&
                b.prevButton.length > 1 &&
                1 === b.container.find(b.params.prevButton).length &&
                (b.prevButton = b.container.find(b.params.prevButton)))),
          (b.isHorizontal = function() {
            return "horizontal" === b.params.direction;
          }),
          (b.rtl =
            b.isHorizontal() &&
            ("rtl" === b.container[0].dir.toLowerCase() ||
              "rtl" === b.container.css("direction"))),
          b.rtl && b.classNames.push("swiper-container-rtl"),
          b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")),
          b.params.slidesPerColumn > 1 &&
            b.classNames.push("swiper-container-multirow"),
          b.device.android && b.classNames.push("swiper-container-android"),
          b.container.addClass(b.classNames.join(" ")),
          (b.translate = 0),
          (b.progress = 0),
          (b.velocity = 0),
          (b.lockSwipeToNext = function() {
            b.params.allowSwipeToNext = !1;
          }),
          (b.lockSwipeToPrev = function() {
            b.params.allowSwipeToPrev = !1;
          }),
          (b.lockSwipes = function() {
            b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1;
          }),
          (b.unlockSwipeToNext = function() {
            b.params.allowSwipeToNext = !0;
          }),
          (b.unlockSwipeToPrev = function() {
            b.params.allowSwipeToPrev = !0;
          }),
          (b.unlockSwipes = function() {
            b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0;
          }),
          b.params.grabCursor &&
            ((b.container[0].style.cursor = "move"),
            (b.container[0].style.cursor = "-webkit-grab"),
            (b.container[0].style.cursor = "-moz-grab"),
            (b.container[0].style.cursor = "grab")),
          (b.imagesToLoad = []),
          (b.imagesLoaded = 0),
          (b.loadImage = function(e, a, t, r, i) {
            function s() {
              i && i();
            }
            var n;
            e.complete && r
              ? s()
              : a
              ? ((n = new window.Image()),
                (n.onload = s),
                (n.onerror = s),
                t && (n.srcset = t),
                a && (n.src = a))
              : s();
          }),
          (b.preloadImages = function() {
            function e() {
              "undefined" != typeof b &&
                null !== b &&
                (void 0 !== b.imagesLoaded && b.imagesLoaded++,
                b.imagesLoaded === b.imagesToLoad.length &&
                  (b.params.updateOnImagesReady && b.update(),
                  b.emit("onImagesReady", b)));
            }
            b.imagesToLoad = b.container.find("img");
            for (var a = 0; a < b.imagesToLoad.length; a++)
              b.loadImage(
                b.imagesToLoad[a],
                b.imagesToLoad[a].currentSrc ||
                  b.imagesToLoad[a].getAttribute("src"),
                b.imagesToLoad[a].srcset ||
                  b.imagesToLoad[a].getAttribute("srcset"),
                !0,
                e
              );
          }),
          (b.autoplayTimeoutId = void 0),
          (b.autoplaying = !1),
          (b.autoplayPaused = !1),
          (b.startAutoplay = function() {
            return "undefined" != typeof b.autoplayTimeoutId
              ? !1
              : b.params.autoplay
              ? b.autoplaying
                ? !1
                : ((b.autoplaying = !0), b.emit("onAutoplayStart", b), void n())
              : !1;
          }),
          (b.stopAutoplay = function(e) {
            b.autoplayTimeoutId &&
              (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId),
              (b.autoplaying = !1),
              (b.autoplayTimeoutId = void 0),
              b.emit("onAutoplayStop", b));
          }),
          (b.pauseAutoplay = function(e) {
            b.autoplayPaused ||
              (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId),
              (b.autoplayPaused = !0),
              0 === e
                ? ((b.autoplayPaused = !1), n())
                : b.wrapper.transitionEnd(function() {
                    b &&
                      ((b.autoplayPaused = !1),
                      b.autoplaying ? n() : b.stopAutoplay());
                  }));
          }),
          (b.minTranslate = function() {
            return -b.snapGrid[0];
          }),
          (b.maxTranslate = function() {
            return -b.snapGrid[b.snapGrid.length - 1];
          }),
          (b.updateAutoHeight = function() {
            var e = b.slides.eq(b.activeIndex)[0];
            if ("undefined" != typeof e) {
              var a = e.offsetHeight;
              a && b.wrapper.css("height", a + "px");
            }
          }),
          (b.updateContainerSize = function() {
            var e, a;
            (e =
              "undefined" != typeof b.params.width
                ? b.params.width
                : b.container[0].clientWidth),
              (a =
                "undefined" != typeof b.params.height
                  ? b.params.height
                  : b.container[0].clientHeight),
              (0 === e && b.isHorizontal()) ||
                (0 === a && !b.isHorizontal()) ||
                ((e =
                  e -
                  parseInt(b.container.css("padding-left"), 10) -
                  parseInt(b.container.css("padding-right"), 10)),
                (a =
                  a -
                  parseInt(b.container.css("padding-top"), 10) -
                  parseInt(b.container.css("padding-bottom"), 10)),
                (b.width = e),
                (b.height = a),
                (b.size = b.isHorizontal() ? b.width : b.height));
          }),
          (b.updateSlidesSize = function() {
            (b.slides = b.wrapper.children("." + b.params.slideClass)),
              (b.snapGrid = []),
              (b.slidesGrid = []),
              (b.slidesSizesGrid = []);
            var e,
              a = b.params.spaceBetween,
              t = -b.params.slidesOffsetBefore,
              r = 0,
              i = 0;
            if ("undefined" != typeof b.size) {
              "string" == typeof a &&
                a.indexOf("%") >= 0 &&
                (a = (parseFloat(a.replace("%", "")) / 100) * b.size),
                (b.virtualSize = -a),
                b.rtl
                  ? b.slides.css({ marginLeft: "", marginTop: "" })
                  : b.slides.css({ marginRight: "", marginBottom: "" });
              var n;
              b.params.slidesPerColumn > 1 &&
                ((n =
                  Math.floor(b.slides.length / b.params.slidesPerColumn) ===
                  b.slides.length / b.params.slidesPerColumn
                    ? b.slides.length
                    : Math.ceil(b.slides.length / b.params.slidesPerColumn) *
                      b.params.slidesPerColumn),
                "auto" !== b.params.slidesPerView &&
                  "row" === b.params.slidesPerColumnFill &&
                  (n = Math.max(
                    n,
                    b.params.slidesPerView * b.params.slidesPerColumn
                  )));
              var o,
                l = b.params.slidesPerColumn,
                p = n / l,
                d = p - (b.params.slidesPerColumn * p - b.slides.length);
              for (e = 0; e < b.slides.length; e++) {
                o = 0;
                var u = b.slides.eq(e);
                if (b.params.slidesPerColumn > 1) {
                  var c, m, h;
                  "column" === b.params.slidesPerColumnFill
                    ? ((m = Math.floor(e / l)),
                      (h = e - m * l),
                      (m > d || (m === d && h === l - 1)) &&
                        ++h >= l &&
                        ((h = 0), m++),
                      (c = m + (h * n) / l),
                      u.css({
                        "-webkit-box-ordinal-group": c,
                        "-moz-box-ordinal-group": c,
                        "-ms-flex-order": c,
                        "-webkit-order": c,
                        order: c
                      }))
                    : ((h = Math.floor(e / p)), (m = e - h * p)),
                    u
                      .css({
                        "margin-top":
                          0 !== h &&
                          b.params.spaceBetween &&
                          b.params.spaceBetween + "px"
                      })
                      .attr("data-swiper-column", m)
                      .attr("data-swiper-row", h);
                }
                "none" !== u.css("display") &&
                  ("auto" === b.params.slidesPerView
                    ? ((o = b.isHorizontal()
                        ? u.outerWidth(!0)
                        : u.outerHeight(!0)),
                      b.params.roundLengths && (o = s(o)))
                    : ((o =
                        (b.size - (b.params.slidesPerView - 1) * a) /
                        b.params.slidesPerView),
                      b.params.roundLengths && (o = s(o)),
                      b.isHorizontal()
                        ? (b.slides[e].style.width = o + "px")
                        : (b.slides[e].style.height = o + "px")),
                  (b.slides[e].swiperSlideSize = o),
                  b.slidesSizesGrid.push(o),
                  b.params.centeredSlides
                    ? ((t = t + o / 2 + r / 2 + a),
                      0 === e && (t = t - b.size / 2 - a),
                      Math.abs(t) < 0.001 && (t = 0),
                      i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t),
                      b.slidesGrid.push(t))
                    : (i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t),
                      b.slidesGrid.push(t),
                      (t = t + o + a)),
                  (b.virtualSize += o + a),
                  (r = o),
                  i++);
              }
              b.virtualSize =
                Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
              var f;
              if (
                (b.rtl &&
                  b.wrongRTL &&
                  ("slide" === b.params.effect ||
                    "coverflow" === b.params.effect) &&
                  b.wrapper.css({
                    width: b.virtualSize + b.params.spaceBetween + "px"
                  }),
                (!b.support.flexbox || b.params.setWrapperSize) &&
                  (b.isHorizontal()
                    ? b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                      })
                    : b.wrapper.css({
                        height: b.virtualSize + b.params.spaceBetween + "px"
                      })),
                b.params.slidesPerColumn > 1 &&
                  ((b.virtualSize = (o + b.params.spaceBetween) * n),
                  (b.virtualSize =
                    Math.ceil(b.virtualSize / b.params.slidesPerColumn) -
                    b.params.spaceBetween),
                  b.wrapper.css({
                    width: b.virtualSize + b.params.spaceBetween + "px"
                  }),
                  b.params.centeredSlides))
              ) {
                for (f = [], e = 0; e < b.snapGrid.length; e++)
                  b.snapGrid[e] < b.virtualSize + b.snapGrid[0] &&
                    f.push(b.snapGrid[e]);
                b.snapGrid = f;
              }
              if (!b.params.centeredSlides) {
                for (f = [], e = 0; e < b.snapGrid.length; e++)
                  b.snapGrid[e] <= b.virtualSize - b.size &&
                    f.push(b.snapGrid[e]);
                (b.snapGrid = f),
                  Math.floor(b.virtualSize - b.size) -
                    Math.floor(b.snapGrid[b.snapGrid.length - 1]) >
                    1 && b.snapGrid.push(b.virtualSize - b.size);
              }
              0 === b.snapGrid.length && (b.snapGrid = [0]),
                0 !== b.params.spaceBetween &&
                  (b.isHorizontal()
                    ? b.rtl
                      ? b.slides.css({ marginLeft: a + "px" })
                      : b.slides.css({ marginRight: a + "px" })
                    : b.slides.css({ marginBottom: a + "px" })),
                b.params.watchSlidesProgress && b.updateSlidesOffset();
            }
          }),
          (b.updateSlidesOffset = function() {
            for (var e = 0; e < b.slides.length; e++)
              b.slides[e].swiperSlideOffset = b.isHorizontal()
                ? b.slides[e].offsetLeft
                : b.slides[e].offsetTop;
          }),
          (b.updateSlidesProgress = function(e) {
            if (
              ("undefined" == typeof e && (e = b.translate || 0),
              0 !== b.slides.length)
            ) {
              "undefined" == typeof b.slides[0].swiperSlideOffset &&
                b.updateSlidesOffset();
              var a = -e;
              b.rtl && (a = e),
                b.slides.removeClass(b.params.slideVisibleClass);
              for (var t = 0; t < b.slides.length; t++) {
                var r = b.slides[t],
                  i =
                    (a - r.swiperSlideOffset) /
                    (r.swiperSlideSize + b.params.spaceBetween);
                if (b.params.watchSlidesVisibility) {
                  var s = -(a - r.swiperSlideOffset),
                    n = s + b.slidesSizesGrid[t],
                    o =
                      (s >= 0 && s < b.size) ||
                      (n > 0 && n <= b.size) ||
                      (0 >= s && n >= b.size);
                  o && b.slides.eq(t).addClass(b.params.slideVisibleClass);
                }
                r.progress = b.rtl ? -i : i;
              }
            }
          }),
          (b.updateProgress = function(e) {
            "undefined" == typeof e && (e = b.translate || 0);
            var a = b.maxTranslate() - b.minTranslate(),
              t = b.isBeginning,
              r = b.isEnd;
            0 === a
              ? ((b.progress = 0), (b.isBeginning = b.isEnd = !0))
              : ((b.progress = (e - b.minTranslate()) / a),
                (b.isBeginning = b.progress <= 0),
                (b.isEnd = b.progress >= 1)),
              b.isBeginning && !t && b.emit("onReachBeginning", b),
              b.isEnd && !r && b.emit("onReachEnd", b),
              b.params.watchSlidesProgress && b.updateSlidesProgress(e),
              b.emit("onProgress", b, b.progress);
          }),
          (b.updateActiveIndex = function() {
            var e,
              a,
              t,
              r = b.rtl ? b.translate : -b.translate;
            for (a = 0; a < b.slidesGrid.length; a++)
              "undefined" != typeof b.slidesGrid[a + 1]
                ? r >= b.slidesGrid[a] &&
                  r <
                    b.slidesGrid[a + 1] -
                      (b.slidesGrid[a + 1] - b.slidesGrid[a]) / 2
                  ? (e = a)
                  : r >= b.slidesGrid[a] &&
                    r < b.slidesGrid[a + 1] &&
                    (e = a + 1)
                : r >= b.slidesGrid[a] && (e = a);
            (0 > e || "undefined" == typeof e) && (e = 0),
              (t = Math.floor(e / b.params.slidesPerGroup)),
              t >= b.snapGrid.length && (t = b.snapGrid.length - 1),
              e !== b.activeIndex &&
                ((b.snapIndex = t),
                (b.previousIndex = b.activeIndex),
                (b.activeIndex = e),
                b.updateClasses());
          }),
          (b.updateClasses = function() {
            b.slides.removeClass(
              b.params.slideActiveClass +
                " " +
                b.params.slideNextClass +
                " " +
                b.params.slidePrevClass
            );
            var e = b.slides.eq(b.activeIndex);
            e.addClass(b.params.slideActiveClass);
            var t = e
              .next("." + b.params.slideClass)
              .addClass(b.params.slideNextClass);
            b.params.loop &&
              0 === t.length &&
              b.slides.eq(0).addClass(b.params.slideNextClass);
            var r = e
              .prev("." + b.params.slideClass)
              .addClass(b.params.slidePrevClass);
            if (
              (b.params.loop &&
                0 === r.length &&
                b.slides.eq(-1).addClass(b.params.slidePrevClass),
              b.paginationContainer && b.paginationContainer.length > 0)
            ) {
              var i,
                s = b.params.loop
                  ? Math.ceil(
                      (b.slides.length - 2 * b.loopedSlides) /
                        b.params.slidesPerGroup
                    )
                  : b.snapGrid.length;
              if (
                (b.params.loop
                  ? ((i = Math.ceil(
                      (b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup
                    )),
                    i > b.slides.length - 1 - 2 * b.loopedSlides &&
                      (i -= b.slides.length - 2 * b.loopedSlides),
                    i > s - 1 && (i -= s),
                    0 > i &&
                      "bullets" !== b.params.paginationType &&
                      (i = s + i))
                  : (i =
                      "undefined" != typeof b.snapIndex
                        ? b.snapIndex
                        : b.activeIndex || 0),
                "bullets" === b.params.paginationType &&
                  b.bullets &&
                  b.bullets.length > 0 &&
                  (b.bullets.removeClass(b.params.bulletActiveClass),
                  b.paginationContainer.length > 1
                    ? b.bullets.each(function() {
                        a(this).index() === i &&
                          a(this).addClass(b.params.bulletActiveClass);
                      })
                    : b.bullets.eq(i).addClass(b.params.bulletActiveClass)),
                "fraction" === b.params.paginationType &&
                  (b.paginationContainer
                    .find("." + b.params.paginationCurrentClass)
                    .text(i + 1),
                  b.paginationContainer
                    .find("." + b.params.paginationTotalClass)
                    .text(s)),
                "progress" === b.params.paginationType)
              ) {
                var n = (i + 1) / s,
                  o = n,
                  l = 1;
                b.isHorizontal() || ((l = n), (o = 1)),
                  b.paginationContainer
                    .find("." + b.params.paginationProgressbarClass)
                    .transform(
                      "translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")"
                    )
                    .transition(b.params.speed);
              }
              "custom" === b.params.paginationType &&
                b.params.paginationCustomRender &&
                (b.paginationContainer.html(
                  b.params.paginationCustomRender(b, i + 1, s)
                ),
                b.emit("onPaginationRendered", b, b.paginationContainer[0]));
            }
            b.params.loop ||
              (b.params.prevButton &&
                b.prevButton &&
                b.prevButton.length > 0 &&
                (b.isBeginning
                  ? (b.prevButton.addClass(b.params.buttonDisabledClass),
                    b.params.a11y && b.a11y && b.a11y.disable(b.prevButton))
                  : (b.prevButton.removeClass(b.params.buttonDisabledClass),
                    b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))),
              b.params.nextButton &&
                b.nextButton &&
                b.nextButton.length > 0 &&
                (b.isEnd
                  ? (b.nextButton.addClass(b.params.buttonDisabledClass),
                    b.params.a11y && b.a11y && b.a11y.disable(b.nextButton))
                  : (b.nextButton.removeClass(b.params.buttonDisabledClass),
                    b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))));
          }),
          (b.updatePagination = function() {
            if (
              b.params.pagination &&
              b.paginationContainer &&
              b.paginationContainer.length > 0
            ) {
              var e = "";
              if ("bullets" === b.params.paginationType) {
                for (
                  var a = b.params.loop
                      ? Math.ceil(
                          (b.slides.length - 2 * b.loopedSlides) /
                            b.params.slidesPerGroup
                        )
                      : b.snapGrid.length,
                    t = 0;
                  a > t;
                  t++
                )
                  e += b.params.paginationBulletRender
                    ? b.params.paginationBulletRender(t, b.params.bulletClass)
                    : "<" +
                      b.params.paginationElement +
                      ' class="' +
                      b.params.bulletClass +
                      '"></' +
                      b.params.paginationElement +
                      ">";
                b.paginationContainer.html(e),
                  (b.bullets = b.paginationContainer.find(
                    "." + b.params.bulletClass
                  )),
                  b.params.paginationClickable &&
                    b.params.a11y &&
                    b.a11y &&
                    b.a11y.initPagination();
              }
              "fraction" === b.params.paginationType &&
                ((e = b.params.paginationFractionRender
                  ? b.params.paginationFractionRender(
                      b,
                      b.params.paginationCurrentClass,
                      b.params.paginationTotalClass
                    )
                  : '<span class="' +
                    b.params.paginationCurrentClass +
                    '"></span> / <span class="' +
                    b.params.paginationTotalClass +
                    '"></span>'),
                b.paginationContainer.html(e)),
                "progress" === b.params.paginationType &&
                  ((e = b.params.paginationProgressRender
                    ? b.params.paginationProgressRender(
                        b,
                        b.params.paginationProgressbarClass
                      )
                    : '<span class="' +
                      b.params.paginationProgressbarClass +
                      '"></span>'),
                  b.paginationContainer.html(e)),
                "custom" !== b.params.paginationType &&
                  b.emit("onPaginationRendered", b, b.paginationContainer[0]);
            }
          }),
          (b.update = function(e) {
            function a() {
              (r = Math.min(
                Math.max(b.translate, b.maxTranslate()),
                b.minTranslate()
              )),
                b.setWrapperTranslate(r),
                b.updateActiveIndex(),
                b.updateClasses();
            }
            if (
              (b.updateContainerSize(),
              b.updateSlidesSize(),
              b.updateProgress(),
              b.updatePagination(),
              b.updateClasses(),
              b.params.scrollbar && b.scrollbar && b.scrollbar.set(),
              e)
            ) {
              var t, r;
              b.controller &&
                b.controller.spline &&
                (b.controller.spline = void 0),
                b.params.freeMode
                  ? (a(), b.params.autoHeight && b.updateAutoHeight())
                  : ((t =
                      ("auto" === b.params.slidesPerView ||
                        b.params.slidesPerView > 1) &&
                      b.isEnd &&
                      !b.params.centeredSlides
                        ? b.slideTo(b.slides.length - 1, 0, !1, !0)
                        : b.slideTo(b.activeIndex, 0, !1, !0)),
                    t || a());
            } else b.params.autoHeight && b.updateAutoHeight();
          }),
          (b.onResize = function(e) {
            b.params.breakpoints && b.setBreakpoint();
            var a = b.params.allowSwipeToPrev,
              t = b.params.allowSwipeToNext;
            (b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0),
              b.updateContainerSize(),
              b.updateSlidesSize(),
              ("auto" === b.params.slidesPerView || b.params.freeMode || e) &&
                b.updatePagination(),
              b.params.scrollbar && b.scrollbar && b.scrollbar.set(),
              b.controller &&
                b.controller.spline &&
                (b.controller.spline = void 0);
            var r = !1;
            if (b.params.freeMode) {
              var i = Math.min(
                Math.max(b.translate, b.maxTranslate()),
                b.minTranslate()
              );
              b.setWrapperTranslate(i),
                b.updateActiveIndex(),
                b.updateClasses(),
                b.params.autoHeight && b.updateAutoHeight();
            } else
              b.updateClasses(),
                (r =
                  ("auto" === b.params.slidesPerView ||
                    b.params.slidesPerView > 1) &&
                  b.isEnd &&
                  !b.params.centeredSlides
                    ? b.slideTo(b.slides.length - 1, 0, !1, !0)
                    : b.slideTo(b.activeIndex, 0, !1, !0));
            b.params.lazyLoading && !r && b.lazy && b.lazy.load(),
              (b.params.allowSwipeToPrev = a),
              (b.params.allowSwipeToNext = t);
          });
        var T = ["mousedown", "mousemove", "mouseup"];
        window.navigator.pointerEnabled
          ? (T = ["pointerdown", "pointermove", "pointerup"])
          : window.navigator.msPointerEnabled &&
            (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
          (b.touchEvents = {
            start:
              b.support.touch || !b.params.simulateTouch ? "touchstart" : T[0],
            move:
              b.support.touch || !b.params.simulateTouch ? "touchmove" : T[1],
            end: b.support.touch || !b.params.simulateTouch ? "touchend" : T[2]
          }),
          (window.navigator.pointerEnabled ||
            window.navigator.msPointerEnabled) &&
            ("container" === b.params.touchEventsTarget
              ? b.container
              : b.wrapper
            ).addClass("swiper-wp8-" + b.params.direction),
          (b.initEvents = function(e) {
            var a = e ? "off" : "on",
              t = e ? "removeEventListener" : "addEventListener",
              r =
                "container" === b.params.touchEventsTarget
                  ? b.container[0]
                  : b.wrapper[0],
              s = b.support.touch ? r : document,
              n = b.params.nested ? !0 : !1;
            b.browser.ie
              ? (r[t](b.touchEvents.start, b.onTouchStart, !1),
                s[t](b.touchEvents.move, b.onTouchMove, n),
                s[t](b.touchEvents.end, b.onTouchEnd, !1))
              : (b.support.touch &&
                  (r[t](b.touchEvents.start, b.onTouchStart, !1),
                  r[t](b.touchEvents.move, b.onTouchMove, n),
                  r[t](b.touchEvents.end, b.onTouchEnd, !1)),
                !i.simulateTouch ||
                  b.device.ios ||
                  b.device.android ||
                  (r[t]("mousedown", b.onTouchStart, !1),
                  document[t]("mousemove", b.onTouchMove, n),
                  document[t]("mouseup", b.onTouchEnd, !1))),
              window[t]("resize", b.onResize),
              b.params.nextButton &&
                b.nextButton &&
                b.nextButton.length > 0 &&
                (b.nextButton[a]("click", b.onClickNext),
                b.params.a11y &&
                  b.a11y &&
                  b.nextButton[a]("keydown", b.a11y.onEnterKey)),
              b.params.prevButton &&
                b.prevButton &&
                b.prevButton.length > 0 &&
                (b.prevButton[a]("click", b.onClickPrev),
                b.params.a11y &&
                  b.a11y &&
                  b.prevButton[a]("keydown", b.a11y.onEnterKey)),
              b.params.pagination &&
                b.params.paginationClickable &&
                (b.paginationContainer[a](
                  "click",
                  "." + b.params.bulletClass,
                  b.onClickIndex
                ),
                b.params.a11y &&
                  b.a11y &&
                  b.paginationContainer[a](
                    "keydown",
                    "." + b.params.bulletClass,
                    b.a11y.onEnterKey
                  )),
              (b.params.preventClicks || b.params.preventClicksPropagation) &&
                r[t]("click", b.preventClicks, !0);
          }),
          (b.attachEvents = function() {
            b.initEvents();
          }),
          (b.detachEvents = function() {
            b.initEvents(!0);
          }),
          (b.allowClick = !0),
          (b.preventClicks = function(e) {
            b.allowClick ||
              (b.params.preventClicks && e.preventDefault(),
              b.params.preventClicksPropagation &&
                b.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
          }),
          (b.onClickNext = function(e) {
            e.preventDefault(), (!b.isEnd || b.params.loop) && b.slideNext();
          }),
          (b.onClickPrev = function(e) {
            e.preventDefault(),
              (!b.isBeginning || b.params.loop) && b.slidePrev();
          }),
          (b.onClickIndex = function(e) {
            e.preventDefault();
            var t = a(this).index() * b.params.slidesPerGroup;
            b.params.loop && (t += b.loopedSlides), b.slideTo(t);
          }),
          (b.updateClickedSlide = function(e) {
            var t = o(e, "." + b.params.slideClass),
              r = !1;
            if (t)
              for (var i = 0; i < b.slides.length; i++)
                b.slides[i] === t && (r = !0);
            if (!t || !r)
              return (b.clickedSlide = void 0), void (b.clickedIndex = void 0);
            if (
              ((b.clickedSlide = t),
              (b.clickedIndex = a(t).index()),
              b.params.slideToClickedSlide &&
                void 0 !== b.clickedIndex &&
                b.clickedIndex !== b.activeIndex)
            ) {
              var s,
                n = b.clickedIndex;
              if (b.params.loop) {
                if (b.animating) return;
                (s = a(b.clickedSlide).attr("data-swiper-slide-index")),
                  b.params.centeredSlides
                    ? n < b.loopedSlides - b.params.slidesPerView / 2 ||
                      n >
                        b.slides.length -
                          b.loopedSlides +
                          b.params.slidesPerView / 2
                      ? (b.fixLoop(),
                        (n = b.wrapper
                          .children(
                            "." +
                              b.params.slideClass +
                              '[data-swiper-slide-index="' +
                              s +
                              '"]:not(.swiper-slide-duplicate)'
                          )
                          .eq(0)
                          .index()),
                        setTimeout(function() {
                          b.slideTo(n);
                        }, 0))
                      : b.slideTo(n)
                    : n > b.slides.length - b.params.slidesPerView
                    ? (b.fixLoop(),
                      (n = b.wrapper
                        .children(
                          "." +
                            b.params.slideClass +
                            '[data-swiper-slide-index="' +
                            s +
                            '"]:not(.swiper-slide-duplicate)'
                        )
                        .eq(0)
                        .index()),
                      setTimeout(function() {
                        b.slideTo(n);
                      }, 0))
                    : b.slideTo(n);
              } else b.slideTo(n);
            }
          });
        var S,
          C,
          z,
          M,
          E,
          P,
          k,
          I,
          L,
          B,
          D = "input, select, textarea, button",
          H = Date.now(),
          A = [];
        (b.animating = !1),
          (b.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          });
        var G, O;
        if (
          ((b.onTouchStart = function(e) {
            if (
              (e.originalEvent && (e = e.originalEvent),
              (G = "touchstart" === e.type),
              G || !("which" in e) || 3 !== e.which)
            ) {
              if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass))
                return void (b.allowClick = !0);
              if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
                var t = (b.touches.currentX =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  r = (b.touches.currentY =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY);
                if (
                  !(
                    b.device.ios &&
                    b.params.iOSEdgeSwipeDetection &&
                    t <= b.params.iOSEdgeSwipeThreshold
                  )
                ) {
                  if (
                    ((S = !0),
                    (C = !1),
                    (z = !0),
                    (E = void 0),
                    (O = void 0),
                    (b.touches.startX = t),
                    (b.touches.startY = r),
                    (M = Date.now()),
                    (b.allowClick = !0),
                    b.updateContainerSize(),
                    (b.swipeDirection = void 0),
                    b.params.threshold > 0 && (I = !1),
                    "touchstart" !== e.type)
                  ) {
                    var i = !0;
                    a(e.target).is(D) && (i = !1),
                      document.activeElement &&
                        a(document.activeElement).is(D) &&
                        document.activeElement.blur(),
                      i && e.preventDefault();
                  }
                  b.emit("onTouchStart", b, e);
                }
              }
            }
          }),
          (b.onTouchMove = function(e) {
            if (
              (e.originalEvent && (e = e.originalEvent),
              !G || "mousemove" !== e.type)
            ) {
              if (e.preventedByNestedSwiper)
                return (
                  (b.touches.startX =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  void (b.touches.startY =
                    "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY)
                );
              if (b.params.onlyExternal)
                return (
                  (b.allowClick = !1),
                  void (
                    S &&
                    ((b.touches.startX = b.touches.currentX =
                      "touchmove" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (b.touches.startY = b.touches.currentY =
                      "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY),
                    (M = Date.now()))
                  )
                );
              if (
                G &&
                document.activeElement &&
                e.target === document.activeElement &&
                a(e.target).is(D)
              )
                return (C = !0), void (b.allowClick = !1);
              if (
                (z && b.emit("onTouchMove", b, e),
                !(e.targetTouches && e.targetTouches.length > 1))
              ) {
                if (
                  ((b.touches.currentX =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (b.touches.currentY =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  "undefined" == typeof E)
                ) {
                  var t =
                    (180 *
                      Math.atan2(
                        Math.abs(b.touches.currentY - b.touches.startY),
                        Math.abs(b.touches.currentX - b.touches.startX)
                      )) /
                    Math.PI;
                  E = b.isHorizontal()
                    ? t > b.params.touchAngle
                    : 90 - t > b.params.touchAngle;
                }
                if (
                  (E && b.emit("onTouchMoveOpposite", b, e),
                  "undefined" == typeof O &&
                    b.browser.ieTouch &&
                    (b.touches.currentX !== b.touches.startX ||
                      b.touches.currentY !== b.touches.startY) &&
                    (O = !0),
                  S)
                ) {
                  if (E) return void (S = !1);
                  if (O || !b.browser.ieTouch) {
                    (b.allowClick = !1),
                      b.emit("onSliderMove", b, e),
                      e.preventDefault(),
                      b.params.touchMoveStopPropagation &&
                        !b.params.nested &&
                        e.stopPropagation(),
                      C ||
                        (i.loop && b.fixLoop(),
                        (k = b.getWrapperTranslate()),
                        b.setWrapperTransition(0),
                        b.animating &&
                          b.wrapper.trigger(
                            "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                          ),
                        b.params.autoplay &&
                          b.autoplaying &&
                          (b.params.autoplayDisableOnInteraction
                            ? b.stopAutoplay()
                            : b.pauseAutoplay()),
                        (B = !1),
                        b.params.grabCursor &&
                          ((b.container[0].style.cursor = "move"),
                          (b.container[0].style.cursor = "-webkit-grabbing"),
                          (b.container[0].style.cursor = "-moz-grabbin"),
                          (b.container[0].style.cursor = "grabbing"))),
                      (C = !0);
                    var r = (b.touches.diff = b.isHorizontal()
                      ? b.touches.currentX - b.touches.startX
                      : b.touches.currentY - b.touches.startY);
                    (r *= b.params.touchRatio),
                      b.rtl && (r = -r),
                      (b.swipeDirection = r > 0 ? "prev" : "next"),
                      (P = r + k);
                    var s = !0;
                    if (
                      (r > 0 && P > b.minTranslate()
                        ? ((s = !1),
                          b.params.resistance &&
                            (P =
                              b.minTranslate() -
                              1 +
                              Math.pow(
                                -b.minTranslate() + k + r,
                                b.params.resistanceRatio
                              )))
                        : 0 > r &&
                          P < b.maxTranslate() &&
                          ((s = !1),
                          b.params.resistance &&
                            (P =
                              b.maxTranslate() +
                              1 -
                              Math.pow(
                                b.maxTranslate() - k - r,
                                b.params.resistanceRatio
                              ))),
                      s && (e.preventedByNestedSwiper = !0),
                      !b.params.allowSwipeToNext &&
                        "next" === b.swipeDirection &&
                        k > P &&
                        (P = k),
                      !b.params.allowSwipeToPrev &&
                        "prev" === b.swipeDirection &&
                        P > k &&
                        (P = k),
                      b.params.followFinger)
                    ) {
                      if (b.params.threshold > 0) {
                        if (!(Math.abs(r) > b.params.threshold || I))
                          return void (P = k);
                        if (!I)
                          return (
                            (I = !0),
                            (b.touches.startX = b.touches.currentX),
                            (b.touches.startY = b.touches.currentY),
                            (P = k),
                            void (b.touches.diff = b.isHorizontal()
                              ? b.touches.currentX - b.touches.startX
                              : b.touches.currentY - b.touches.startY)
                          );
                      }
                      (b.params.freeMode || b.params.watchSlidesProgress) &&
                        b.updateActiveIndex(),
                        b.params.freeMode &&
                          (0 === A.length &&
                            A.push({
                              position:
                                b.touches[
                                  b.isHorizontal() ? "startX" : "startY"
                                ],
                              time: M
                            }),
                          A.push({
                            position:
                              b.touches[
                                b.isHorizontal() ? "currentX" : "currentY"
                              ],
                            time: new window.Date().getTime()
                          })),
                        b.updateProgress(P),
                        b.setWrapperTranslate(P);
                    }
                  }
                }
              }
            }
          }),
          (b.onTouchEnd = function(e) {
            if (
              (e.originalEvent && (e = e.originalEvent),
              z && b.emit("onTouchEnd", b, e),
              (z = !1),
              S)
            ) {
              b.params.grabCursor &&
                C &&
                S &&
                ((b.container[0].style.cursor = "move"),
                (b.container[0].style.cursor = "-webkit-grab"),
                (b.container[0].style.cursor = "-moz-grab"),
                (b.container[0].style.cursor = "grab"));
              var t = Date.now(),
                r = t - M;
              if (
                (b.allowClick &&
                  (b.updateClickedSlide(e),
                  b.emit("onTap", b, e),
                  300 > r &&
                    t - H > 300 &&
                    (L && clearTimeout(L),
                    (L = setTimeout(function() {
                      b &&
                        (b.params.paginationHide &&
                          b.paginationContainer.length > 0 &&
                          !a(e.target).hasClass(b.params.bulletClass) &&
                          b.paginationContainer.toggleClass(
                            b.params.paginationHiddenClass
                          ),
                        b.emit("onClick", b, e));
                    }, 300))),
                  300 > r &&
                    300 > t - H &&
                    (L && clearTimeout(L), b.emit("onDoubleTap", b, e))),
                (H = Date.now()),
                setTimeout(function() {
                  b && (b.allowClick = !0);
                }, 0),
                !S ||
                  !C ||
                  !b.swipeDirection ||
                  0 === b.touches.diff ||
                  P === k)
              )
                return void (S = C = !1);
              S = C = !1;
              var i;
              if (
                ((i = b.params.followFinger
                  ? b.rtl
                    ? b.translate
                    : -b.translate
                  : -P),
                b.params.freeMode)
              ) {
                if (i < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                if (i > -b.maxTranslate())
                  return void (b.slides.length < b.snapGrid.length
                    ? b.slideTo(b.snapGrid.length - 1)
                    : b.slideTo(b.slides.length - 1));
                if (b.params.freeModeMomentum) {
                  if (A.length > 1) {
                    var s = A.pop(),
                      n = A.pop(),
                      o = s.position - n.position,
                      l = s.time - n.time;
                    (b.velocity = o / l),
                      (b.velocity = b.velocity / 2),
                      Math.abs(b.velocity) < b.params.freeModeMinimumVelocity &&
                        (b.velocity = 0),
                      (l > 150 || new window.Date().getTime() - s.time > 300) &&
                        (b.velocity = 0);
                  } else b.velocity = 0;
                  A.length = 0;
                  var p = 1e3 * b.params.freeModeMomentumRatio,
                    d = b.velocity * p,
                    u = b.translate + d;
                  b.rtl && (u = -u);
                  var c,
                    m = !1,
                    h =
                      20 *
                      Math.abs(b.velocity) *
                      b.params.freeModeMomentumBounceRatio;
                  if (u < b.maxTranslate())
                    b.params.freeModeMomentumBounce
                      ? (u + b.maxTranslate() < -h &&
                          (u = b.maxTranslate() - h),
                        (c = b.maxTranslate()),
                        (m = !0),
                        (B = !0))
                      : (u = b.maxTranslate());
                  else if (u > b.minTranslate())
                    b.params.freeModeMomentumBounce
                      ? (u - b.minTranslate() > h && (u = b.minTranslate() + h),
                        (c = b.minTranslate()),
                        (m = !0),
                        (B = !0))
                      : (u = b.minTranslate());
                  else if (b.params.freeModeSticky) {
                    var f,
                      g = 0;
                    for (g = 0; g < b.snapGrid.length; g += 1)
                      if (b.snapGrid[g] > -u) {
                        f = g;
                        break;
                      }
                    (u =
                      Math.abs(b.snapGrid[f] - u) <
                        Math.abs(b.snapGrid[f - 1] - u) ||
                      "next" === b.swipeDirection
                        ? b.snapGrid[f]
                        : b.snapGrid[f - 1]),
                      b.rtl || (u = -u);
                  }
                  if (0 !== b.velocity)
                    p = b.rtl
                      ? Math.abs((-u - b.translate) / b.velocity)
                      : Math.abs((u - b.translate) / b.velocity);
                  else if (b.params.freeModeSticky) return void b.slideReset();
                  b.params.freeModeMomentumBounce && m
                    ? (b.updateProgress(c),
                      b.setWrapperTransition(p),
                      b.setWrapperTranslate(u),
                      b.onTransitionStart(),
                      (b.animating = !0),
                      b.wrapper.transitionEnd(function() {
                        b &&
                          B &&
                          (b.emit("onMomentumBounce", b),
                          b.setWrapperTransition(b.params.speed),
                          b.setWrapperTranslate(c),
                          b.wrapper.transitionEnd(function() {
                            b && b.onTransitionEnd();
                          }));
                      }))
                    : b.velocity
                    ? (b.updateProgress(u),
                      b.setWrapperTransition(p),
                      b.setWrapperTranslate(u),
                      b.onTransitionStart(),
                      b.animating ||
                        ((b.animating = !0),
                        b.wrapper.transitionEnd(function() {
                          b && b.onTransitionEnd();
                        })))
                    : b.updateProgress(u),
                    b.updateActiveIndex();
                }
                return void (
                  (!b.params.freeModeMomentum || r >= b.params.longSwipesMs) &&
                  (b.updateProgress(), b.updateActiveIndex())
                );
              }
              var v,
                w = 0,
                y = b.slidesSizesGrid[0];
              for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup)
                "undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup]
                  ? i >= b.slidesGrid[v] &&
                    i < b.slidesGrid[v + b.params.slidesPerGroup] &&
                    ((w = v),
                    (y =
                      b.slidesGrid[v + b.params.slidesPerGroup] -
                      b.slidesGrid[v]))
                  : i >= b.slidesGrid[v] &&
                    ((w = v),
                    (y =
                      b.slidesGrid[b.slidesGrid.length - 1] -
                      b.slidesGrid[b.slidesGrid.length - 2]));
              var x = (i - b.slidesGrid[w]) / y;
              if (r > b.params.longSwipesMs) {
                if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                "next" === b.swipeDirection &&
                  (x >= b.params.longSwipesRatio
                    ? b.slideTo(w + b.params.slidesPerGroup)
                    : b.slideTo(w)),
                  "prev" === b.swipeDirection &&
                    (x > 1 - b.params.longSwipesRatio
                      ? b.slideTo(w + b.params.slidesPerGroup)
                      : b.slideTo(w));
              } else {
                if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                "next" === b.swipeDirection &&
                  b.slideTo(w + b.params.slidesPerGroup),
                  "prev" === b.swipeDirection && b.slideTo(w);
              }
            }
          }),
          (b._slideTo = function(e, a) {
            return b.slideTo(e, a, !0, !0);
          }),
          (b.slideTo = function(e, a, t, r) {
            "undefined" == typeof t && (t = !0),
              "undefined" == typeof e && (e = 0),
              0 > e && (e = 0),
              (b.snapIndex = Math.floor(e / b.params.slidesPerGroup)),
              b.snapIndex >= b.snapGrid.length &&
                (b.snapIndex = b.snapGrid.length - 1);
            var i = -b.snapGrid[b.snapIndex];
            b.params.autoplay &&
              b.autoplaying &&
              (r || !b.params.autoplayDisableOnInteraction
                ? b.pauseAutoplay(a)
                : b.stopAutoplay()),
              b.updateProgress(i);
            for (var s = 0; s < b.slidesGrid.length; s++)
              -Math.floor(100 * i) >= Math.floor(100 * b.slidesGrid[s]) &&
                (e = s);
            return !b.params.allowSwipeToNext &&
              i < b.translate &&
              i < b.minTranslate()
              ? !1
              : !b.params.allowSwipeToPrev &&
                i > b.translate &&
                i > b.maxTranslate() &&
                (b.activeIndex || 0) !== e
              ? !1
              : ("undefined" == typeof a && (a = b.params.speed),
                (b.previousIndex = b.activeIndex || 0),
                (b.activeIndex = e),
                (b.rtl && -i === b.translate) || (!b.rtl && i === b.translate)
                  ? (b.params.autoHeight && b.updateAutoHeight(),
                    b.updateClasses(),
                    "slide" !== b.params.effect && b.setWrapperTranslate(i),
                    !1)
                  : (b.updateClasses(),
                    b.onTransitionStart(t),
                    0 === a
                      ? (b.setWrapperTranslate(i),
                        b.setWrapperTransition(0),
                        b.onTransitionEnd(t))
                      : (b.setWrapperTranslate(i),
                        b.setWrapperTransition(a),
                        b.animating ||
                          ((b.animating = !0),
                          b.wrapper.transitionEnd(function() {
                            b && b.onTransitionEnd(t);
                          }))),
                    !0));
          }),
          (b.onTransitionStart = function(e) {
            "undefined" == typeof e && (e = !0),
              b.params.autoHeight && b.updateAutoHeight(),
              b.lazy && b.lazy.onTransitionStart(),
              e &&
                (b.emit("onTransitionStart", b),
                b.activeIndex !== b.previousIndex &&
                  (b.emit("onSlideChangeStart", b),
                  b.activeIndex > b.previousIndex
                    ? b.emit("onSlideNextStart", b)
                    : b.emit("onSlidePrevStart", b)));
          }),
          (b.onTransitionEnd = function(e) {
            (b.animating = !1),
              b.setWrapperTransition(0),
              "undefined" == typeof e && (e = !0),
              b.lazy && b.lazy.onTransitionEnd(),
              e &&
                (b.emit("onTransitionEnd", b),
                b.activeIndex !== b.previousIndex &&
                  (b.emit("onSlideChangeEnd", b),
                  b.activeIndex > b.previousIndex
                    ? b.emit("onSlideNextEnd", b)
                    : b.emit("onSlidePrevEnd", b))),
              b.params.hashnav && b.hashnav && b.hashnav.setHash();
          }),
          (b.slideNext = function(e, a, t) {
            if (b.params.loop) {
              if (b.animating) return !1;
              b.fixLoop();
              b.container[0].clientLeft;
              return b.slideTo(
                b.activeIndex + b.params.slidesPerGroup,
                a,
                e,
                t
              );
            }
            return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t);
          }),
          (b._slideNext = function(e) {
            return b.slideNext(!0, e, !0);
          }),
          (b.slidePrev = function(e, a, t) {
            if (b.params.loop) {
              if (b.animating) return !1;
              b.fixLoop();
              b.container[0].clientLeft;
              return b.slideTo(b.activeIndex - 1, a, e, t);
            }
            return b.slideTo(b.activeIndex - 1, a, e, t);
          }),
          (b._slidePrev = function(e) {
            return b.slidePrev(!0, e, !0);
          }),
          (b.slideReset = function(e, a, t) {
            return b.slideTo(b.activeIndex, a, e);
          }),
          (b.setWrapperTransition = function(e, a) {
            b.wrapper.transition(e),
              "slide" !== b.params.effect &&
                b.effects[b.params.effect] &&
                b.effects[b.params.effect].setTransition(e),
              b.params.parallax && b.parallax && b.parallax.setTransition(e),
              b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e),
              b.params.control &&
                b.controller &&
                b.controller.setTransition(e, a),
              b.emit("onSetTransition", b, e);
          }),
          (b.setWrapperTranslate = function(e, a, t) {
            var r = 0,
              i = 0,
              n = 0;
            b.isHorizontal() ? (r = b.rtl ? -e : e) : (i = e),
              b.params.roundLengths && ((r = s(r)), (i = s(i))),
              b.params.virtualTranslate ||
                (b.support.transforms3d
                  ? b.wrapper.transform(
                      "translate3d(" + r + "px, " + i + "px, " + n + "px)"
                    )
                  : b.wrapper.transform("translate(" + r + "px, " + i + "px)")),
              (b.translate = b.isHorizontal() ? r : i);
            var o,
              l = b.maxTranslate() - b.minTranslate();
            (o = 0 === l ? 0 : (e - b.minTranslate()) / l),
              o !== b.progress && b.updateProgress(e),
              a && b.updateActiveIndex(),
              "slide" !== b.params.effect &&
                b.effects[b.params.effect] &&
                b.effects[b.params.effect].setTranslate(b.translate),
              b.params.parallax &&
                b.parallax &&
                b.parallax.setTranslate(b.translate),
              b.params.scrollbar &&
                b.scrollbar &&
                b.scrollbar.setTranslate(b.translate),
              b.params.control &&
                b.controller &&
                b.controller.setTranslate(b.translate, t),
              b.emit("onSetTranslate", b, b.translate);
          }),
          (b.getTranslate = function(e, a) {
            var t, r, i, s;
            return (
              "undefined" == typeof a && (a = "x"),
              b.params.virtualTranslate
                ? b.rtl
                  ? -b.translate
                  : b.translate
                : ((i = window.getComputedStyle(e, null)),
                  window.WebKitCSSMatrix
                    ? ((r = i.transform || i.webkitTransform),
                      r.split(",").length > 6 &&
                        (r = r
                          .split(", ")
                          .map(function(e) {
                            return e.replace(",", ".");
                          })
                          .join(", ")),
                      (s = new window.WebKitCSSMatrix("none" === r ? "" : r)))
                    : ((s =
                        i.MozTransform ||
                        i.OTransform ||
                        i.MsTransform ||
                        i.msTransform ||
                        i.transform ||
                        i
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,")),
                      (t = s.toString().split(","))),
                  "x" === a &&
                    (r = window.WebKitCSSMatrix
                      ? s.m41
                      : 16 === t.length
                      ? parseFloat(t[12])
                      : parseFloat(t[4])),
                  "y" === a &&
                    (r = window.WebKitCSSMatrix
                      ? s.m42
                      : 16 === t.length
                      ? parseFloat(t[13])
                      : parseFloat(t[5])),
                  b.rtl && r && (r = -r),
                  r || 0)
            );
          }),
          (b.getWrapperTranslate = function(e) {
            return (
              "undefined" == typeof e && (e = b.isHorizontal() ? "x" : "y"),
              b.getTranslate(b.wrapper[0], e)
            );
          }),
          (b.observers = []),
          (b.initObservers = function() {
            if (b.params.observeParents)
              for (var e = b.container.parents(), a = 0; a < e.length; a++)
                l(e[a]);
            l(b.container[0], { childList: !1 }),
              l(b.wrapper[0], { attributes: !1 });
          }),
          (b.disconnectObservers = function() {
            for (var e = 0; e < b.observers.length; e++)
              b.observers[e].disconnect();
            b.observers = [];
          }),
          (b.createLoop = function() {
            b.wrapper
              .children(
                "." + b.params.slideClass + "." + b.params.slideDuplicateClass
              )
              .remove();
            var e = b.wrapper.children("." + b.params.slideClass);
            "auto" !== b.params.slidesPerView ||
              b.params.loopedSlides ||
              (b.params.loopedSlides = e.length),
              (b.loopedSlides = parseInt(
                b.params.loopedSlides || b.params.slidesPerView,
                10
              )),
              (b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides),
              b.loopedSlides > e.length && (b.loopedSlides = e.length);
            var t,
              r = [],
              i = [];
            for (
              e.each(function(t, s) {
                var n = a(this);
                t < b.loopedSlides && i.push(s),
                  t < e.length && t >= e.length - b.loopedSlides && r.push(s),
                  n.attr("data-swiper-slide-index", t);
              }),
                t = 0;
              t < i.length;
              t++
            )
              b.wrapper.append(
                a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass)
              );
            for (t = r.length - 1; t >= 0; t--)
              b.wrapper.prepend(
                a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass)
              );
          }),
          (b.destroyLoop = function() {
            b.wrapper
              .children(
                "." + b.params.slideClass + "." + b.params.slideDuplicateClass
              )
              .remove(),
              b.slides.removeAttr("data-swiper-slide-index");
          }),
          (b.reLoop = function(e) {
            var a = b.activeIndex - b.loopedSlides;
            b.destroyLoop(),
              b.createLoop(),
              b.updateSlidesSize(),
              e && b.slideTo(a + b.loopedSlides, 0, !1);
          }),
          (b.fixLoop = function() {
            var e;
            b.activeIndex < b.loopedSlides
              ? ((e = b.slides.length - 3 * b.loopedSlides + b.activeIndex),
                (e += b.loopedSlides),
                b.slideTo(e, 0, !1, !0))
              : (("auto" === b.params.slidesPerView &&
                  b.activeIndex >= 2 * b.loopedSlides) ||
                  b.activeIndex >
                    b.slides.length - 2 * b.params.slidesPerView) &&
                ((e = -b.slides.length + b.activeIndex + b.loopedSlides),
                (e += b.loopedSlides),
                b.slideTo(e, 0, !1, !0));
          }),
          (b.appendSlide = function(e) {
            if (
              (b.params.loop && b.destroyLoop(),
              "object" == typeof e && e.length)
            )
              for (var a = 0; a < e.length; a++) e[a] && b.wrapper.append(e[a]);
            else b.wrapper.append(e);
            b.params.loop && b.createLoop(),
              (b.params.observer && b.support.observer) || b.update(!0);
          }),
          (b.prependSlide = function(e) {
            b.params.loop && b.destroyLoop();
            var a = b.activeIndex + 1;
            if ("object" == typeof e && e.length) {
              for (var t = 0; t < e.length; t++)
                e[t] && b.wrapper.prepend(e[t]);
              a = b.activeIndex + e.length;
            } else b.wrapper.prepend(e);
            b.params.loop && b.createLoop(),
              (b.params.observer && b.support.observer) || b.update(!0),
              b.slideTo(a, 0, !1);
          }),
          (b.removeSlide = function(e) {
            b.params.loop &&
              (b.destroyLoop(),
              (b.slides = b.wrapper.children("." + b.params.slideClass)));
            var a,
              t = b.activeIndex;
            if ("object" == typeof e && e.length) {
              for (var r = 0; r < e.length; r++)
                (a = e[r]),
                  b.slides[a] && b.slides.eq(a).remove(),
                  t > a && t--;
              t = Math.max(t, 0);
            } else
              (a = e),
                b.slides[a] && b.slides.eq(a).remove(),
                t > a && t--,
                (t = Math.max(t, 0));
            b.params.loop && b.createLoop(),
              (b.params.observer && b.support.observer) || b.update(!0),
              b.params.loop
                ? b.slideTo(t + b.loopedSlides, 0, !1)
                : b.slideTo(t, 0, !1);
          }),
          (b.removeAllSlides = function() {
            for (var e = [], a = 0; a < b.slides.length; a++) e.push(a);
            b.removeSlide(e);
          }),
          (b.effects = {
            fade: {
              setTranslate: function() {
                for (var e = 0; e < b.slides.length; e++) {
                  var a = b.slides.eq(e),
                    t = a[0].swiperSlideOffset,
                    r = -t;
                  b.params.virtualTranslate || (r -= b.translate);
                  var i = 0;
                  b.isHorizontal() || ((i = r), (r = 0));
                  var s = b.params.fade.crossFade
                    ? Math.max(1 - Math.abs(a[0].progress), 0)
                    : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                  a.css({ opacity: s }).transform(
                    "translate3d(" + r + "px, " + i + "px, 0px)"
                  );
                }
              },
              setTransition: function(e) {
                if (
                  (b.slides.transition(e), b.params.virtualTranslate && 0 !== e)
                ) {
                  var a = !1;
                  b.slides.transitionEnd(function() {
                    if (!a && b) {
                      (a = !0), (b.animating = !1);
                      for (
                        var e = [
                            "webkitTransitionEnd",
                            "transitionend",
                            "oTransitionEnd",
                            "MSTransitionEnd",
                            "msTransitionEnd"
                          ],
                          t = 0;
                        t < e.length;
                        t++
                      )
                        b.wrapper.trigger(e[t]);
                    }
                  });
                }
              }
            },
            flip: {
              setTranslate: function() {
                for (var e = 0; e < b.slides.length; e++) {
                  var t = b.slides.eq(e),
                    r = t[0].progress;
                  b.params.flip.limitRotation &&
                    (r = Math.max(Math.min(t[0].progress, 1), -1));
                  var i = t[0].swiperSlideOffset,
                    s = -180 * r,
                    n = s,
                    o = 0,
                    l = -i,
                    p = 0;
                  if (
                    (b.isHorizontal()
                      ? b.rtl && (n = -n)
                      : ((p = l), (l = 0), (o = -n), (n = 0)),
                    (t[0].style.zIndex =
                      -Math.abs(Math.round(r)) + b.slides.length),
                    b.params.flip.slideShadows)
                  ) {
                    var d = b.isHorizontal()
                        ? t.find(".swiper-slide-shadow-left")
                        : t.find(".swiper-slide-shadow-top"),
                      u = b.isHorizontal()
                        ? t.find(".swiper-slide-shadow-right")
                        : t.find(".swiper-slide-shadow-bottom");
                    0 === d.length &&
                      ((d = a(
                        '<div class="swiper-slide-shadow-' +
                          (b.isHorizontal() ? "left" : "top") +
                          '"></div>'
                      )),
                      t.append(d)),
                      0 === u.length &&
                        ((u = a(
                          '<div class="swiper-slide-shadow-' +
                            (b.isHorizontal() ? "right" : "bottom") +
                            '"></div>'
                        )),
                        t.append(u)),
                      d.length && (d[0].style.opacity = Math.max(-r, 0)),
                      u.length && (u[0].style.opacity = Math.max(r, 0));
                  }
                  t.transform(
                    "translate3d(" +
                      l +
                      "px, " +
                      p +
                      "px, 0px) rotateX(" +
                      o +
                      "deg) rotateY(" +
                      n +
                      "deg)"
                  );
                }
              },
              setTransition: function(e) {
                if (
                  (b.slides
                    .transition(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e),
                  b.params.virtualTranslate && 0 !== e)
                ) {
                  var t = !1;
                  b.slides.eq(b.activeIndex).transitionEnd(function() {
                    if (
                      !t &&
                      b &&
                      a(this).hasClass(b.params.slideActiveClass)
                    ) {
                      (t = !0), (b.animating = !1);
                      for (
                        var e = [
                            "webkitTransitionEnd",
                            "transitionend",
                            "oTransitionEnd",
                            "MSTransitionEnd",
                            "msTransitionEnd"
                          ],
                          r = 0;
                        r < e.length;
                        r++
                      )
                        b.wrapper.trigger(e[r]);
                    }
                  });
                }
              }
            },
            cube: {
              setTranslate: function() {
                var e,
                  t = 0;
                b.params.cube.shadow &&
                  (b.isHorizontal()
                    ? ((e = b.wrapper.find(".swiper-cube-shadow")),
                      0 === e.length &&
                        ((e = a('<div class="swiper-cube-shadow"></div>')),
                        b.wrapper.append(e)),
                      e.css({ height: b.width + "px" }))
                    : ((e = b.container.find(".swiper-cube-shadow")),
                      0 === e.length &&
                        ((e = a('<div class="swiper-cube-shadow"></div>')),
                        b.container.append(e))));
                for (var r = 0; r < b.slides.length; r++) {
                  var i = b.slides.eq(r),
                    s = 90 * r,
                    n = Math.floor(s / 360);
                  b.rtl && ((s = -s), (n = Math.floor(-s / 360)));
                  var o = Math.max(Math.min(i[0].progress, 1), -1),
                    l = 0,
                    p = 0,
                    d = 0;
                  r % 4 === 0
                    ? ((l = 4 * -n * b.size), (d = 0))
                    : (r - 1) % 4 === 0
                    ? ((l = 0), (d = 4 * -n * b.size))
                    : (r - 2) % 4 === 0
                    ? ((l = b.size + 4 * n * b.size), (d = b.size))
                    : (r - 3) % 4 === 0 &&
                      ((l = -b.size), (d = 3 * b.size + 4 * b.size * n)),
                    b.rtl && (l = -l),
                    b.isHorizontal() || ((p = l), (l = 0));
                  var u =
                    "rotateX(" +
                    (b.isHorizontal() ? 0 : -s) +
                    "deg) rotateY(" +
                    (b.isHorizontal() ? s : 0) +
                    "deg) translate3d(" +
                    l +
                    "px, " +
                    p +
                    "px, " +
                    d +
                    "px)";
                  if (
                    (1 >= o &&
                      o > -1 &&
                      ((t = 90 * r + 90 * o), b.rtl && (t = 90 * -r - 90 * o)),
                    i.transform(u),
                    b.params.cube.slideShadows)
                  ) {
                    var c = b.isHorizontal()
                        ? i.find(".swiper-slide-shadow-left")
                        : i.find(".swiper-slide-shadow-top"),
                      m = b.isHorizontal()
                        ? i.find(".swiper-slide-shadow-right")
                        : i.find(".swiper-slide-shadow-bottom");
                    0 === c.length &&
                      ((c = a(
                        '<div class="swiper-slide-shadow-' +
                          (b.isHorizontal() ? "left" : "top") +
                          '"></div>'
                      )),
                      i.append(c)),
                      0 === m.length &&
                        ((m = a(
                          '<div class="swiper-slide-shadow-' +
                            (b.isHorizontal() ? "right" : "bottom") +
                            '"></div>'
                        )),
                        i.append(m)),
                      c.length && (c[0].style.opacity = Math.max(-o, 0)),
                      m.length && (m[0].style.opacity = Math.max(o, 0));
                  }
                }
                if (
                  (b.wrapper.css({
                    "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                    "transform-origin": "50% 50% -" + b.size / 2 + "px"
                  }),
                  b.params.cube.shadow)
                )
                  if (b.isHorizontal())
                    e.transform(
                      "translate3d(0px, " +
                        (b.width / 2 + b.params.cube.shadowOffset) +
                        "px, " +
                        -b.width / 2 +
                        "px) rotateX(90deg) rotateZ(0deg) scale(" +
                        b.params.cube.shadowScale +
                        ")"
                    );
                  else {
                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                      f =
                        1.5 -
                        (Math.sin((2 * h * Math.PI) / 360) / 2 +
                          Math.cos((2 * h * Math.PI) / 360) / 2),
                      g = b.params.cube.shadowScale,
                      v = b.params.cube.shadowScale / f,
                      w = b.params.cube.shadowOffset;
                    e.transform(
                      "scale3d(" +
                        g +
                        ", 1, " +
                        v +
                        ") translate3d(0px, " +
                        (b.height / 2 + w) +
                        "px, " +
                        -b.height / 2 / v +
                        "px) rotateX(-90deg)"
                    );
                  }
                var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                b.wrapper.transform(
                  "translate3d(0px,0," +
                    y +
                    "px) rotateX(" +
                    (b.isHorizontal() ? 0 : t) +
                    "deg) rotateY(" +
                    (b.isHorizontal() ? -t : 0) +
                    "deg)"
                );
              },
              setTransition: function(e) {
                b.slides
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e),
                  b.params.cube.shadow &&
                    !b.isHorizontal() &&
                    b.container.find(".swiper-cube-shadow").transition(e);
              }
            },
            coverflow: {
              setTranslate: function() {
                for (
                  var e = b.translate,
                    t = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2,
                    r = b.isHorizontal()
                      ? b.params.coverflow.rotate
                      : -b.params.coverflow.rotate,
                    i = b.params.coverflow.depth,
                    s = 0,
                    n = b.slides.length;
                  n > s;
                  s++
                ) {
                  var o = b.slides.eq(s),
                    l = b.slidesSizesGrid[s],
                    p = o[0].swiperSlideOffset,
                    d = ((t - p - l / 2) / l) * b.params.coverflow.modifier,
                    u = b.isHorizontal() ? r * d : 0,
                    c = b.isHorizontal() ? 0 : r * d,
                    m = -i * Math.abs(d),
                    h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
                    f = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;
                  Math.abs(f) < 0.001 && (f = 0),
                    Math.abs(h) < 0.001 && (h = 0),
                    Math.abs(m) < 0.001 && (m = 0),
                    Math.abs(u) < 0.001 && (u = 0),
                    Math.abs(c) < 0.001 && (c = 0);
                  var g =
                    "translate3d(" +
                    f +
                    "px," +
                    h +
                    "px," +
                    m +
                    "px)  rotateX(" +
                    c +
                    "deg) rotateY(" +
                    u +
                    "deg)";
                  if (
                    (o.transform(g),
                    (o[0].style.zIndex = -Math.abs(Math.round(d)) + 1),
                    b.params.coverflow.slideShadows)
                  ) {
                    var v = b.isHorizontal()
                        ? o.find(".swiper-slide-shadow-left")
                        : o.find(".swiper-slide-shadow-top"),
                      w = b.isHorizontal()
                        ? o.find(".swiper-slide-shadow-right")
                        : o.find(".swiper-slide-shadow-bottom");
                    0 === v.length &&
                      ((v = a(
                        '<div class="swiper-slide-shadow-' +
                          (b.isHorizontal() ? "left" : "top") +
                          '"></div>'
                      )),
                      o.append(v)),
                      0 === w.length &&
                        ((w = a(
                          '<div class="swiper-slide-shadow-' +
                            (b.isHorizontal() ? "right" : "bottom") +
                            '"></div>'
                        )),
                        o.append(w)),
                      v.length && (v[0].style.opacity = d > 0 ? d : 0),
                      w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
                  }
                }
                if (b.browser.ie) {
                  var y = b.wrapper[0].style;
                  y.perspectiveOrigin = t + "px 50%";
                }
              },
              setTransition: function(e) {
                b.slides
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e);
              }
            }
          }),
          (b.lazy = {
            initialImageLoaded: !1,
            loadImageInSlide: function(e, t) {
              if (
                "undefined" != typeof e &&
                ("undefined" == typeof t && (t = !0), 0 !== b.slides.length)
              ) {
                var r = b.slides.eq(e),
                  i = r.find(
                    ".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)"
                  );
                !r.hasClass("swiper-lazy") ||
                  r.hasClass("swiper-lazy-loaded") ||
                  r.hasClass("swiper-lazy-loading") ||
                  (i = i.add(r[0])),
                  0 !== i.length &&
                    i.each(function() {
                      var e = a(this);
                      e.addClass("swiper-lazy-loading");
                      var i = e.attr("data-background"),
                        s = e.attr("data-src"),
                        n = e.attr("data-srcset");
                      b.loadImage(e[0], s || i, n, !1, function() {
                        if (
                          (i
                            ? (e.css("background-image", 'url("' + i + '")'),
                              e.removeAttr("data-background"))
                            : (n &&
                                (e.attr("srcset", n),
                                e.removeAttr("data-srcset")),
                              s &&
                                (e.attr("src", s), e.removeAttr("data-src"))),
                          e
                            .addClass("swiper-lazy-loaded")
                            .removeClass("swiper-lazy-loading"),
                          r.find(".swiper-lazy-preloader, .preloader").remove(),
                          b.params.loop && t)
                        ) {
                          var a = r.attr("data-swiper-slide-index");
                          if (r.hasClass(b.params.slideDuplicateClass)) {
                            var o = b.wrapper.children(
                              '[data-swiper-slide-index="' +
                                a +
                                '"]:not(.' +
                                b.params.slideDuplicateClass +
                                ")"
                            );
                            b.lazy.loadImageInSlide(o.index(), !1);
                          } else {
                            var l = b.wrapper.children(
                              "." +
                                b.params.slideDuplicateClass +
                                '[data-swiper-slide-index="' +
                                a +
                                '"]'
                            );
                            b.lazy.loadImageInSlide(l.index(), !1);
                          }
                        }
                        b.emit("onLazyImageReady", b, r[0], e[0]);
                      }),
                        b.emit("onLazyImageLoad", b, r[0], e[0]);
                    });
              }
            },
            load: function() {
              var e;
              if (b.params.watchSlidesVisibility)
                b.wrapper
                  .children("." + b.params.slideVisibleClass)
                  .each(function() {
                    b.lazy.loadImageInSlide(a(this).index());
                  });
              else if (b.params.slidesPerView > 1)
                for (
                  e = b.activeIndex;
                  e < b.activeIndex + b.params.slidesPerView;
                  e++
                )
                  b.slides[e] && b.lazy.loadImageInSlide(e);
              else b.lazy.loadImageInSlide(b.activeIndex);
              if (b.params.lazyLoadingInPrevNext)
                if (
                  b.params.slidesPerView > 1 ||
                  (b.params.lazyLoadingInPrevNextAmount &&
                    b.params.lazyLoadingInPrevNextAmount > 1)
                ) {
                  var t = b.params.lazyLoadingInPrevNextAmount,
                    r = b.params.slidesPerView,
                    i = Math.min(
                      b.activeIndex + r + Math.max(t, r),
                      b.slides.length
                    ),
                    s = Math.max(b.activeIndex - Math.max(r, t), 0);
                  for (e = b.activeIndex + b.params.slidesPerView; i > e; e++)
                    b.slides[e] && b.lazy.loadImageInSlide(e);
                  for (e = s; e < b.activeIndex; e++)
                    b.slides[e] && b.lazy.loadImageInSlide(e);
                } else {
                  var n = b.wrapper.children("." + b.params.slideNextClass);
                  n.length > 0 && b.lazy.loadImageInSlide(n.index());
                  var o = b.wrapper.children("." + b.params.slidePrevClass);
                  o.length > 0 && b.lazy.loadImageInSlide(o.index());
                }
            },
            onTransitionStart: function() {
              b.params.lazyLoading &&
                (b.params.lazyLoadingOnTransitionStart ||
                  (!b.params.lazyLoadingOnTransitionStart &&
                    !b.lazy.initialImageLoaded)) &&
                b.lazy.load();
            },
            onTransitionEnd: function() {
              b.params.lazyLoading &&
                !b.params.lazyLoadingOnTransitionStart &&
                b.lazy.load();
            }
          }),
          (b.scrollbar = {
            isTouched: !1,
            setDragPosition: function(e) {
              var a = b.scrollbar,
                t = b.isHorizontal()
                  ? "touchstart" === e.type || "touchmove" === e.type
                    ? e.targetTouches[0].pageX
                    : e.pageX || e.clientX
                  : "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageY
                  : e.pageY || e.clientY,
                r =
                  t -
                  a.track.offset()[b.isHorizontal() ? "left" : "top"] -
                  a.dragSize / 2,
                i = -b.minTranslate() * a.moveDivider,
                s = -b.maxTranslate() * a.moveDivider;
              i > r ? (r = i) : r > s && (r = s),
                (r = -r / a.moveDivider),
                b.updateProgress(r),
                b.setWrapperTranslate(r, !0);
            },
            dragStart: function(e) {
              var a = b.scrollbar;
              (a.isTouched = !0),
                e.preventDefault(),
                e.stopPropagation(),
                a.setDragPosition(e),
                clearTimeout(a.dragTimeout),
                a.track.transition(0),
                b.params.scrollbarHide && a.track.css("opacity", 1),
                b.wrapper.transition(100),
                a.drag.transition(100),
                b.emit("onScrollbarDragStart", b);
            },
            dragMove: function(e) {
              var a = b.scrollbar;
              a.isTouched &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                a.setDragPosition(e),
                b.wrapper.transition(0),
                a.track.transition(0),
                a.drag.transition(0),
                b.emit("onScrollbarDragMove", b));
            },
            dragEnd: function(e) {
              var a = b.scrollbar;
              a.isTouched &&
                ((a.isTouched = !1),
                b.params.scrollbarHide &&
                  (clearTimeout(a.dragTimeout),
                  (a.dragTimeout = setTimeout(function() {
                    a.track.css("opacity", 0), a.track.transition(400);
                  }, 1e3))),
                b.emit("onScrollbarDragEnd", b),
                b.params.scrollbarSnapOnRelease && b.slideReset());
            },
            enableDraggable: function() {
              var e = b.scrollbar,
                t = b.support.touch ? e.track : document;
              a(e.track).on(b.touchEvents.start, e.dragStart),
                a(t).on(b.touchEvents.move, e.dragMove),
                a(t).on(b.touchEvents.end, e.dragEnd);
            },
            disableDraggable: function() {
              var e = b.scrollbar,
                t = b.support.touch ? e.track : document;
              a(e.track).off(b.touchEvents.start, e.dragStart),
                a(t).off(b.touchEvents.move, e.dragMove),
                a(t).off(b.touchEvents.end, e.dragEnd);
            },
            set: function() {
              if (b.params.scrollbar) {
                var e = b.scrollbar;
                (e.track = a(b.params.scrollbar)),
                  b.params.uniqueNavElements &&
                    "string" == typeof b.params.scrollbar &&
                    e.track.length > 1 &&
                    1 === b.container.find(b.params.scrollbar).length &&
                    (e.track = b.container.find(b.params.scrollbar)),
                  (e.drag = e.track.find(".swiper-scrollbar-drag")),
                  0 === e.drag.length &&
                    ((e.drag = a('<div class="swiper-scrollbar-drag"></div>')),
                    e.track.append(e.drag)),
                  (e.drag[0].style.width = ""),
                  (e.drag[0].style.height = ""),
                  (e.trackSize = b.isHorizontal()
                    ? e.track[0].offsetWidth
                    : e.track[0].offsetHeight),
                  (e.divider = b.size / b.virtualSize),
                  (e.moveDivider = e.divider * (e.trackSize / b.size)),
                  (e.dragSize = e.trackSize * e.divider),
                  b.isHorizontal()
                    ? (e.drag[0].style.width = e.dragSize + "px")
                    : (e.drag[0].style.height = e.dragSize + "px"),
                  e.divider >= 1
                    ? (e.track[0].style.display = "none")
                    : (e.track[0].style.display = ""),
                  b.params.scrollbarHide && (e.track[0].style.opacity = 0);
              }
            },
            setTranslate: function() {
              if (b.params.scrollbar) {
                var e,
                  a = b.scrollbar,
                  t = (b.translate || 0, a.dragSize);
                (e = (a.trackSize - a.dragSize) * b.progress),
                  b.rtl && b.isHorizontal()
                    ? ((e = -e),
                      e > 0
                        ? ((t = a.dragSize - e), (e = 0))
                        : -e + a.dragSize > a.trackSize &&
                          (t = a.trackSize + e))
                    : 0 > e
                    ? ((t = a.dragSize + e), (e = 0))
                    : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                  b.isHorizontal()
                    ? (b.support.transforms3d
                        ? a.drag.transform("translate3d(" + e + "px, 0, 0)")
                        : a.drag.transform("translateX(" + e + "px)"),
                      (a.drag[0].style.width = t + "px"))
                    : (b.support.transforms3d
                        ? a.drag.transform("translate3d(0px, " + e + "px, 0)")
                        : a.drag.transform("translateY(" + e + "px)"),
                      (a.drag[0].style.height = t + "px")),
                  b.params.scrollbarHide &&
                    (clearTimeout(a.timeout),
                    (a.track[0].style.opacity = 1),
                    (a.timeout = setTimeout(function() {
                      (a.track[0].style.opacity = 0), a.track.transition(400);
                    }, 1e3)));
              }
            },
            setTransition: function(e) {
              b.params.scrollbar && b.scrollbar.drag.transition(e);
            }
          }),
          (b.controller = {
            LinearSpline: function(e, a) {
              (this.x = e), (this.y = a), (this.lastIndex = e.length - 1);
              var t, r;
              this.x.length;
              this.interpolate = function(e) {
                return e
                  ? ((r = i(this.x, e)),
                    (t = r - 1),
                    ((e - this.x[t]) * (this.y[r] - this.y[t])) /
                      (this.x[r] - this.x[t]) +
                      this.y[t])
                  : 0;
              };
              var i = (function() {
                var e, a, t;
                return function(r, i) {
                  for (a = -1, e = r.length; e - a > 1; )
                    r[(t = (e + a) >> 1)] <= i ? (a = t) : (e = t);
                  return e;
                };
              })();
            },
            getInterpolateFunction: function(e) {
              b.controller.spline ||
                (b.controller.spline = b.params.loop
                  ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid)
                  : new b.controller.LinearSpline(b.snapGrid, e.snapGrid));
            },
            setTranslate: function(e, a) {
              function r(a) {
                (e =
                  a.rtl && "horizontal" === a.params.direction
                    ? -b.translate
                    : b.translate),
                  "slide" === b.params.controlBy &&
                    (b.controller.getInterpolateFunction(a),
                    (s = -b.controller.spline.interpolate(-e))),
                  (s && "container" !== b.params.controlBy) ||
                    ((i =
                      (a.maxTranslate() - a.minTranslate()) /
                      (b.maxTranslate() - b.minTranslate())),
                    (s = (e - b.minTranslate()) * i + a.minTranslate())),
                  b.params.controlInverse && (s = a.maxTranslate() - s),
                  a.updateProgress(s),
                  a.setWrapperTranslate(s, !1, b),
                  a.updateActiveIndex();
              }
              var i,
                s,
                n = b.params.control;
              if (b.isArray(n))
                for (var o = 0; o < n.length; o++)
                  n[o] !== a && n[o] instanceof t && r(n[o]);
              else n instanceof t && a !== n && r(n);
            },
            setTransition: function(e, a) {
              function r(a) {
                a.setWrapperTransition(e, b),
                  0 !== e &&
                    (a.onTransitionStart(),
                    a.wrapper.transitionEnd(function() {
                      s &&
                        (a.params.loop &&
                          "slide" === b.params.controlBy &&
                          a.fixLoop(),
                        a.onTransitionEnd());
                    }));
              }
              var i,
                s = b.params.control;
              if (b.isArray(s))
                for (i = 0; i < s.length; i++)
                  s[i] !== a && s[i] instanceof t && r(s[i]);
              else s instanceof t && a !== s && r(s);
            }
          }),
          (b.hashnav = {
            init: function() {
              if (b.params.hashnav) {
                b.hashnav.initialized = !0;
                var e = document.location.hash.replace("#", "");
                if (e)
                  for (var a = 0, t = 0, r = b.slides.length; r > t; t++) {
                    var i = b.slides.eq(t),
                      s = i.attr("data-hash");
                    if (s === e && !i.hasClass(b.params.slideDuplicateClass)) {
                      var n = i.index();
                      b.slideTo(n, a, b.params.runCallbacksOnInit, !0);
                    }
                  }
              }
            },
            setHash: function() {
              b.hashnav.initialized &&
                b.params.hashnav &&
                (document.location.hash =
                  b.slides.eq(b.activeIndex).attr("data-hash") || "");
            }
          }),
          (b.disableKeyboardControl = function() {
            (b.params.keyboardControl = !1), a(document).off("keydown", p);
          }),
          (b.enableKeyboardControl = function() {
            (b.params.keyboardControl = !0), a(document).on("keydown", p);
          }),
          (b.mousewheel = {
            event: !1,
            lastScrollTime: new window.Date().getTime()
          }),
          b.params.mousewheelControl)
        ) {
          try {
            new window.WheelEvent("wheel"), (b.mousewheel.event = "wheel");
          } catch (N) {
            (window.WheelEvent ||
              (b.container[0] && "wheel" in b.container[0])) &&
              (b.mousewheel.event = "wheel");
          }
          !b.mousewheel.event && window.WheelEvent,
            b.mousewheel.event ||
              void 0 === document.onmousewheel ||
              (b.mousewheel.event = "mousewheel"),
            b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll");
        }
        (b.disableMousewheelControl = function() {
          return b.mousewheel.event
            ? (b.container.off(b.mousewheel.event, d), !0)
            : !1;
        }),
          (b.enableMousewheelControl = function() {
            return b.mousewheel.event
              ? (b.container.on(b.mousewheel.event, d), !0)
              : !1;
          }),
          (b.parallax = {
            setTranslate: function() {
              b.container
                .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function() {
                  u(this, b.progress);
                }),
                b.slides.each(function() {
                  var e = a(this);
                  e.find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  ).each(function() {
                    var a = Math.min(Math.max(e[0].progress, -1), 1);
                    u(this, a);
                  });
                });
            },
            setTransition: function(e) {
              "undefined" == typeof e && (e = b.params.speed),
                b.container
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  )
                  .each(function() {
                    var t = a(this),
                      r =
                        parseInt(t.attr("data-swiper-parallax-duration"), 10) ||
                        e;
                    0 === e && (r = 0), t.transition(r);
                  });
            }
          }),
          (b._plugins = []);
        for (var R in b.plugins) {
          var W = b.plugins[R](b, b.params[R]);
          W && b._plugins.push(W);
        }
        return (
          (b.callPlugins = function(e) {
            for (var a = 0; a < b._plugins.length; a++)
              e in b._plugins[a] &&
                b._plugins[a][e](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
          }),
          (b.emitterEventListeners = {}),
          (b.emit = function(e) {
            b.params[e] &&
              b.params[e](
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5]
              );
            var a;
            if (b.emitterEventListeners[e])
              for (a = 0; a < b.emitterEventListeners[e].length; a++)
                b.emitterEventListeners[e][a](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
            b.callPlugins &&
              b.callPlugins(
                e,
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5]
              );
          }),
          (b.on = function(e, a) {
            return (
              (e = c(e)),
              b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []),
              b.emitterEventListeners[e].push(a),
              b
            );
          }),
          (b.off = function(e, a) {
            var t;
            if (((e = c(e)), "undefined" == typeof a))
              return (b.emitterEventListeners[e] = []), b;
            if (
              b.emitterEventListeners[e] &&
              0 !== b.emitterEventListeners[e].length
            ) {
              for (t = 0; t < b.emitterEventListeners[e].length; t++)
                b.emitterEventListeners[e][t] === a &&
                  b.emitterEventListeners[e].splice(t, 1);
              return b;
            }
          }),
          (b.once = function(e, a) {
            e = c(e);
            var t = function() {
              a(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4]
              ),
                b.off(e, t);
            };
            return b.on(e, t), b;
          }),
          (b.a11y = {
            makeFocusable: function(e) {
              return e.attr("tabIndex", "0"), e;
            },
            addRole: function(e, a) {
              return e.attr("role", a), e;
            },
            addLabel: function(e, a) {
              return e.attr("aria-label", a), e;
            },
            disable: function(e) {
              return e.attr("aria-disabled", !0), e;
            },
            enable: function(e) {
              return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function(e) {
              13 === e.keyCode &&
                (a(e.target).is(b.params.nextButton)
                  ? (b.onClickNext(e),
                    b.isEnd
                      ? b.a11y.notify(b.params.lastSlideMessage)
                      : b.a11y.notify(b.params.nextSlideMessage))
                  : a(e.target).is(b.params.prevButton) &&
                    (b.onClickPrev(e),
                    b.isBeginning
                      ? b.a11y.notify(b.params.firstSlideMessage)
                      : b.a11y.notify(b.params.prevSlideMessage)),
                a(e.target).is("." + b.params.bulletClass) &&
                  a(e.target)[0].click());
            },
            liveRegion: a(
              '<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'
            ),
            notify: function(e) {
              var a = b.a11y.liveRegion;
              0 !== a.length && (a.html(""), a.html(e));
            },
            init: function() {
              b.params.nextButton &&
                b.nextButton &&
                b.nextButton.length > 0 &&
                (b.a11y.makeFocusable(b.nextButton),
                b.a11y.addRole(b.nextButton, "button"),
                b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)),
                b.params.prevButton &&
                  b.prevButton &&
                  b.prevButton.length > 0 &&
                  (b.a11y.makeFocusable(b.prevButton),
                  b.a11y.addRole(b.prevButton, "button"),
                  b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)),
                a(b.container).append(b.a11y.liveRegion);
            },
            initPagination: function() {
              b.params.pagination &&
                b.params.paginationClickable &&
                b.bullets &&
                b.bullets.length &&
                b.bullets.each(function() {
                  var e = a(this);
                  b.a11y.makeFocusable(e),
                    b.a11y.addRole(e, "button"),
                    b.a11y.addLabel(
                      e,
                      b.params.paginationBulletMessage.replace(
                        /{{index}}/,
                        e.index() + 1
                      )
                    );
                });
            },
            destroy: function() {
              b.a11y.liveRegion &&
                b.a11y.liveRegion.length > 0 &&
                b.a11y.liveRegion.remove();
            }
          }),
          (b.init = function() {
            b.params.loop && b.createLoop(),
              b.updateContainerSize(),
              b.updateSlidesSize(),
              b.updatePagination(),
              b.params.scrollbar &&
                b.scrollbar &&
                (b.scrollbar.set(),
                b.params.scrollbarDraggable && b.scrollbar.enableDraggable()),
              "slide" !== b.params.effect &&
                b.effects[b.params.effect] &&
                (b.params.loop || b.updateProgress(),
                b.effects[b.params.effect].setTranslate()),
              b.params.loop
                ? b.slideTo(
                    b.params.initialSlide + b.loopedSlides,
                    0,
                    b.params.runCallbacksOnInit
                  )
                : (b.slideTo(
                    b.params.initialSlide,
                    0,
                    b.params.runCallbacksOnInit
                  ),
                  0 === b.params.initialSlide &&
                    (b.parallax &&
                      b.params.parallax &&
                      b.parallax.setTranslate(),
                    b.lazy &&
                      b.params.lazyLoading &&
                      (b.lazy.load(), (b.lazy.initialImageLoaded = !0)))),
              b.attachEvents(),
              b.params.observer && b.support.observer && b.initObservers(),
              b.params.preloadImages &&
                !b.params.lazyLoading &&
                b.preloadImages(),
              b.params.autoplay && b.startAutoplay(),
              b.params.keyboardControl &&
                b.enableKeyboardControl &&
                b.enableKeyboardControl(),
              b.params.mousewheelControl &&
                b.enableMousewheelControl &&
                b.enableMousewheelControl(),
              b.params.hashnav && b.hashnav && b.hashnav.init(),
              b.params.a11y && b.a11y && b.a11y.init(),
              b.emit("onInit", b);
          }),
          (b.cleanupStyles = function() {
            b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),
              b.wrapper.removeAttr("style"),
              b.slides &&
                b.slides.length &&
                b.slides
                  .removeClass(
                    [
                      b.params.slideVisibleClass,
                      b.params.slideActiveClass,
                      b.params.slideNextClass,
                      b.params.slidePrevClass
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row"),
              b.paginationContainer &&
                b.paginationContainer.length &&
                b.paginationContainer.removeClass(
                  b.params.paginationHiddenClass
                ),
              b.bullets &&
                b.bullets.length &&
                b.bullets.removeClass(b.params.bulletActiveClass),
              b.params.prevButton &&
                a(b.params.prevButton).removeClass(
                  b.params.buttonDisabledClass
                ),
              b.params.nextButton &&
                a(b.params.nextButton).removeClass(
                  b.params.buttonDisabledClass
                ),
              b.params.scrollbar &&
                b.scrollbar &&
                (b.scrollbar.track &&
                  b.scrollbar.track.length &&
                  b.scrollbar.track.removeAttr("style"),
                b.scrollbar.drag &&
                  b.scrollbar.drag.length &&
                  b.scrollbar.drag.removeAttr("style"));
          }),
          (b.destroy = function(e, a) {
            b.detachEvents(),
              b.stopAutoplay(),
              b.params.scrollbar &&
                b.scrollbar &&
                b.params.scrollbarDraggable &&
                b.scrollbar.disableDraggable(),
              b.params.loop && b.destroyLoop(),
              a && b.cleanupStyles(),
              b.disconnectObservers(),
              b.params.keyboardControl &&
                b.disableKeyboardControl &&
                b.disableKeyboardControl(),
              b.params.mousewheelControl &&
                b.disableMousewheelControl &&
                b.disableMousewheelControl(),
              b.params.a11y && b.a11y && b.a11y.destroy(),
              b.emit("onDestroy"),
              e !== !1 && (b = null);
          }),
          b.init(),
          b
        );
      }
    };
  t.prototype = {
    isSafari: (function() {
      var e = navigator.userAgent.toLowerCase();
      return (
        e.indexOf("safari") >= 0 &&
        e.indexOf("chrome") < 0 &&
        e.indexOf("android") < 0
      );
    })(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      navigator.userAgent
    ),
    isArray: function(e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch:
        (window.navigator.msPointerEnabled &&
          window.navigator.msMaxTouchPoints > 1) ||
        (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
    },
    device: (function() {
      var e = navigator.userAgent,
        a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        t = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
      return { ios: t || i || r, android: a };
    })(),
    support: {
      touch:
        (window.Modernizr && Modernizr.touch === !0) ||
        (function() {
          return !!(
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof DocumentTouch)
          );
        })(),
      transforms3d:
        (window.Modernizr && Modernizr.csstransforms3d === !0) ||
        (function() {
          var e = document.createElement("div").style;
          return (
            "webkitPerspective" in e ||
            "MozPerspective" in e ||
            "OPerspective" in e ||
            "MsPerspective" in e ||
            "perspective" in e
          );
        })(),
      flexbox: (function() {
        for (
          var e = document.createElement("div").style,
            a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
              " "
            ),
            t = 0;
          t < a.length;
          t++
        )
          if (a[t] in e) return !0;
      })(),
      observer: (function() {
        return (
          "MutationObserver" in window || "WebkitMutationObserver" in window
        );
      })()
    },
    plugins: {}
  };
  for (
    var r = (function() {
        var e = function(e) {
            var a = this,
              t = 0;
            for (t = 0; t < e.length; t++) a[t] = e[t];
            return (a.length = e.length), this;
          },
          a = function(a, t) {
            var r = [],
              i = 0;
            if (a && !t && a instanceof e) return a;
            if (a)
              if ("string" == typeof a) {
                var s,
                  n,
                  o = a.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                  var l = "div";
                  for (
                    0 === o.indexOf("<li") && (l = "ul"),
                      0 === o.indexOf("<tr") && (l = "tbody"),
                      (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) &&
                        (l = "tr"),
                      0 === o.indexOf("<tbody") && (l = "table"),
                      0 === o.indexOf("<option") && (l = "select"),
                      n = document.createElement(l),
                      n.innerHTML = a,
                      i = 0;
                    i < n.childNodes.length;
                    i++
                  )
                    r.push(n.childNodes[i]);
                } else
                  for (
                    s =
                      t || "#" !== a[0] || a.match(/[ .<>:~]/)
                        ? (t || document).querySelectorAll(a)
                        : [document.getElementById(a.split("#")[1])],
                      i = 0;
                    i < s.length;
                    i++
                  )
                    s[i] && r.push(s[i]);
              } else if (a.nodeType || a === window || a === document)
                r.push(a);
              else if (a.length > 0 && a[0].nodeType)
                for (i = 0; i < a.length; i++) r.push(a[i]);
            return new e(r);
          };
        return (
          (e.prototype = {
            addClass: function(e) {
              if ("undefined" == typeof e) return this;
              for (var a = e.split(" "), t = 0; t < a.length; t++)
                for (var r = 0; r < this.length; r++)
                  this[r].classList.add(a[t]);
              return this;
            },
            removeClass: function(e) {
              for (var a = e.split(" "), t = 0; t < a.length; t++)
                for (var r = 0; r < this.length; r++)
                  this[r].classList.remove(a[t]);
              return this;
            },
            hasClass: function(e) {
              return this[0] ? this[0].classList.contains(e) : !1;
            },
            toggleClass: function(e) {
              for (var a = e.split(" "), t = 0; t < a.length; t++)
                for (var r = 0; r < this.length; r++)
                  this[r].classList.toggle(a[t]);
              return this;
            },
            attr: function(e, a) {
              if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
              for (var t = 0; t < this.length; t++)
                if (2 === arguments.length) this[t].setAttribute(e, a);
                else
                  for (var r in e)
                    (this[t][r] = e[r]), this[t].setAttribute(r, e[r]);
              return this;
            },
            removeAttr: function(e) {
              for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
              return this;
            },
            data: function(e, a) {
              if ("undefined" != typeof a) {
                for (var t = 0; t < this.length; t++) {
                  var r = this[t];
                  r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                    (r.dom7ElementDataStorage[e] = a);
                }
                return this;
              }
              if (this[0]) {
                var i = this[0].getAttribute("data-" + e);
                return i
                  ? i
                  : this[0].dom7ElementDataStorage &&
                    (e in this[0].dom7ElementDataStorage)
                  ? this[0].dom7ElementDataStorage[e]
                  : void 0;
              }
            },
            transform: function(e) {
              for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
              }
              return this;
            },
            transition: function(e) {
              "string" != typeof e && (e += "ms");
              for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
              }
              return this;
            },
            on: function(e, t, r, i) {
              function s(e) {
                var i = e.target;
                if (a(i).is(t)) r.call(i, e);
                else
                  for (var s = a(i).parents(), n = 0; n < s.length; n++)
                    a(s[n]).is(t) && r.call(s[n], e);
              }
              var n,
                o,
                l = e.split(" ");
              for (n = 0; n < this.length; n++)
                if ("function" == typeof t || t === !1)
                  for (
                    "function" == typeof t &&
                      ((r = arguments[1]), (i = arguments[2] || !1)),
                      o = 0;
                    o < l.length;
                    o++
                  )
                    this[n].addEventListener(l[o], r, i);
                else
                  for (o = 0; o < l.length; o++)
                    this[n].dom7LiveListeners ||
                      (this[n].dom7LiveListeners = []),
                      this[n].dom7LiveListeners.push({
                        listener: r,
                        liveListener: s
                      }),
                      this[n].addEventListener(l[o], s, i);
              return this;
            },
            off: function(e, a, t, r) {
              for (var i = e.split(" "), s = 0; s < i.length; s++)
                for (var n = 0; n < this.length; n++)
                  if ("function" == typeof a || a === !1)
                    "function" == typeof a &&
                      ((t = arguments[1]), (r = arguments[2] || !1)),
                      this[n].removeEventListener(i[s], t, r);
                  else if (this[n].dom7LiveListeners)
                    for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                      this[n].dom7LiveListeners[o].listener === t &&
                        this[n].removeEventListener(
                          i[s],
                          this[n].dom7LiveListeners[o].liveListener,
                          r
                        );
              return this;
            },
            once: function(e, a, t, r) {
              function i(n) {
                t(n), s.off(e, a, i, r);
              }
              var s = this;
              "function" == typeof a &&
                ((a = !1), (t = arguments[1]), (r = arguments[2])),
                s.on(e, a, i, r);
            },
            trigger: function(e, a) {
              for (var t = 0; t < this.length; t++) {
                var r;
                try {
                  r = new window.CustomEvent(e, {
                    detail: a,
                    bubbles: !0,
                    cancelable: !0
                  });
                } catch (i) {
                  (r = document.createEvent("Event")),
                    r.initEvent(e, !0, !0),
                    (r.detail = a);
                }
                this[t].dispatchEvent(r);
              }
              return this;
            },
            transitionEnd: function(e) {
              function a(s) {
                if (s.target === this)
                  for (e.call(this, s), t = 0; t < r.length; t++)
                    i.off(r[t], a);
              }
              var t,
                r = [
                  "webkitTransitionEnd",
                  "transitionend",
                  "oTransitionEnd",
                  "MSTransitionEnd",
                  "msTransitionEnd"
                ],
                i = this;
              if (e) for (t = 0; t < r.length; t++) i.on(r[t], a);
              return this;
            },
            width: function() {
              return this[0] === window
                ? window.innerWidth
                : this.length > 0
                ? parseFloat(this.css("width"))
                : null;
            },
            outerWidth: function(e) {
              return this.length > 0
                ? e
                  ? this[0].offsetWidth +
                    parseFloat(this.css("margin-right")) +
                    parseFloat(this.css("margin-left"))
                  : this[0].offsetWidth
                : null;
            },
            height: function() {
              return this[0] === window
                ? window.innerHeight
                : this.length > 0
                ? parseFloat(this.css("height"))
                : null;
            },
            outerHeight: function(e) {
              return this.length > 0
                ? e
                  ? this[0].offsetHeight +
                    parseFloat(this.css("margin-top")) +
                    parseFloat(this.css("margin-bottom"))
                  : this[0].offsetHeight
                : null;
            },
            offset: function() {
              if (this.length > 0) {
                var e = this[0],
                  a = e.getBoundingClientRect(),
                  t = document.body,
                  r = e.clientTop || t.clientTop || 0,
                  i = e.clientLeft || t.clientLeft || 0,
                  s = window.pageYOffset || e.scrollTop,
                  n = window.pageXOffset || e.scrollLeft;
                return { top: a.top + s - r, left: a.left + n - i };
              }
              return null;
            },
            css: function(e, a) {
              var t;
              if (1 === arguments.length) {
                if ("string" != typeof e) {
                  for (t = 0; t < this.length; t++)
                    for (var r in e) this[t].style[r] = e[r];
                  return this;
                }
                if (this[0])
                  return window
                    .getComputedStyle(this[0], null)
                    .getPropertyValue(e);
              }
              if (2 === arguments.length && "string" == typeof e) {
                for (t = 0; t < this.length; t++) this[t].style[e] = a;
                return this;
              }
              return this;
            },
            each: function(e) {
              for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
              return this;
            },
            html: function(e) {
              if ("undefined" == typeof e)
                return this[0] ? this[0].innerHTML : void 0;
              for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
              return this;
            },
            text: function(e) {
              if ("undefined" == typeof e)
                return this[0] ? this[0].textContent.trim() : null;
              for (var a = 0; a < this.length; a++) this[a].textContent = e;
              return this;
            },
            is: function(t) {
              if (!this[0]) return !1;
              var r, i;
              if ("string" == typeof t) {
                var s = this[0];
                if (s === document) return t === document;
                if (s === window) return t === window;
                if (s.matches) return s.matches(t);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                if (s.mozMatchesSelector) return s.mozMatchesSelector(t);
                if (s.msMatchesSelector) return s.msMatchesSelector(t);
                for (r = a(t), i = 0; i < r.length; i++)
                  if (r[i] === this[0]) return !0;
                return !1;
              }
              if (t === document) return this[0] === document;
              if (t === window) return this[0] === window;
              if (t.nodeType || t instanceof e) {
                for (r = t.nodeType ? [t] : t, i = 0; i < r.length; i++)
                  if (r[i] === this[0]) return !0;
                return !1;
              }
              return !1;
            },
            index: function() {
              if (this[0]) {
                for (var e = this[0], a = 0; null !== (e = e.previousSibling); )
                  1 === e.nodeType && a++;
                return a;
              }
            },
            eq: function(a) {
              if ("undefined" == typeof a) return this;
              var t,
                r = this.length;
              return a > r - 1
                ? new e([])
                : 0 > a
                ? ((t = r + a), new e(0 > t ? [] : [this[t]]))
                : new e([this[a]]);
            },
            append: function(a) {
              var t, r;
              for (t = 0; t < this.length; t++)
                if ("string" == typeof a) {
                  var i = document.createElement("div");
                  for (i.innerHTML = a; i.firstChild; )
                    this[t].appendChild(i.firstChild);
                } else if (a instanceof e)
                  for (r = 0; r < a.length; r++) this[t].appendChild(a[r]);
                else this[t].appendChild(a);
              return this;
            },
            prepend: function(a) {
              var t, r;
              for (t = 0; t < this.length; t++)
                if ("string" == typeof a) {
                  var i = document.createElement("div");
                  for (
                    i.innerHTML = a, r = i.childNodes.length - 1;
                    r >= 0;
                    r--
                  )
                    this[t].insertBefore(
                      i.childNodes[r],
                      this[t].childNodes[0]
                    );
                } else if (a instanceof e)
                  for (r = 0; r < a.length; r++)
                    this[t].insertBefore(a[r], this[t].childNodes[0]);
                else this[t].insertBefore(a, this[t].childNodes[0]);
              return this;
            },
            insertBefore: function(e) {
              for (var t = a(e), r = 0; r < this.length; r++)
                if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0]);
                else if (t.length > 1)
                  for (var i = 0; i < t.length; i++)
                    t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i]);
            },
            insertAfter: function(e) {
              for (var t = a(e), r = 0; r < this.length; r++)
                if (1 === t.length)
                  t[0].parentNode.insertBefore(this[r], t[0].nextSibling);
                else if (t.length > 1)
                  for (var i = 0; i < t.length; i++)
                    t[i].parentNode.insertBefore(
                      this[r].cloneNode(!0),
                      t[i].nextSibling
                    );
            },
            next: function(t) {
              return new e(
                this.length > 0
                  ? t
                    ? this[0].nextElementSibling &&
                      a(this[0].nextElementSibling).is(t)
                      ? [this[0].nextElementSibling]
                      : []
                    : this[0].nextElementSibling
                    ? [this[0].nextElementSibling]
                    : []
                  : []
              );
            },
            nextAll: function(t) {
              var r = [],
                i = this[0];
              if (!i) return new e([]);
              for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                t ? a(s).is(t) && r.push(s) : r.push(s), (i = s);
              }
              return new e(r);
            },
            prev: function(t) {
              return new e(
                this.length > 0
                  ? t
                    ? this[0].previousElementSibling &&
                      a(this[0].previousElementSibling).is(t)
                      ? [this[0].previousElementSibling]
                      : []
                    : this[0].previousElementSibling
                    ? [this[0].previousElementSibling]
                    : []
                  : []
              );
            },
            prevAll: function(t) {
              var r = [],
                i = this[0];
              if (!i) return new e([]);
              for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                t ? a(s).is(t) && r.push(s) : r.push(s), (i = s);
              }
              return new e(r);
            },
            parent: function(e) {
              for (var t = [], r = 0; r < this.length; r++)
                e
                  ? a(this[r].parentNode).is(e) && t.push(this[r].parentNode)
                  : t.push(this[r].parentNode);
              return a(a.unique(t));
            },
            parents: function(e) {
              for (var t = [], r = 0; r < this.length; r++)
                for (var i = this[r].parentNode; i; )
                  e ? a(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
              return a(a.unique(t));
            },
            find: function(a) {
              for (var t = [], r = 0; r < this.length; r++)
                for (
                  var i = this[r].querySelectorAll(a), s = 0;
                  s < i.length;
                  s++
                )
                  t.push(i[s]);
              return new e(t);
            },
            children: function(t) {
              for (var r = [], i = 0; i < this.length; i++)
                for (var s = this[i].childNodes, n = 0; n < s.length; n++)
                  t
                    ? 1 === s[n].nodeType && a(s[n]).is(t) && r.push(s[n])
                    : 1 === s[n].nodeType && r.push(s[n]);
              return new e(a.unique(r));
            },
            remove: function() {
              for (var e = 0; e < this.length; e++)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
              return this;
            },
            add: function() {
              var e,
                t,
                r = this;
              for (e = 0; e < arguments.length; e++) {
                var i = a(arguments[e]);
                for (t = 0; t < i.length; t++) (r[r.length] = i[t]), r.length++;
              }
              return r;
            }
          }),
          (a.fn = e.prototype),
          (a.unique = function(e) {
            for (var a = [], t = 0; t < e.length; t++)
              -1 === a.indexOf(e[t]) && a.push(e[t]);
            return a;
          }),
          a
        );
      })(),
      i = ["jQuery", "Zepto", "Dom7"],
      s = 0;
    s < i.length;
    s++
  )
    window[i[s]] && e(window[i[s]]);
  var n;
  (n =
    "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r),
    n &&
      ("transitionEnd" in n.fn ||
        (n.fn.transitionEnd = function(e) {
          function a(s) {
            if (s.target === this)
              for (e.call(this, s), t = 0; t < r.length; t++) i.off(r[t], a);
          }
          var t,
            r = [
              "webkitTransitionEnd",
              "transitionend",
              "oTransitionEnd",
              "MSTransitionEnd",
              "msTransitionEnd"
            ],
            i = this;
          if (e) for (t = 0; t < r.length; t++) i.on(r[t], a);
          return this;
        }),
      "transform" in n.fn ||
        (n.fn.transform = function(e) {
          for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
          }
          return this;
        }),
      "transition" in n.fn ||
        (n.fn.transition = function(e) {
          "string" != typeof e && (e += "ms");
          for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
          }
          return this;
        })),
    (window.Swiper = t);
})(),
  "undefined" != typeof module
    ? (module.exports = window.Swiper)
    : "function" == typeof define &&
      define.amd &&
      define([], function() {
        "use strict";
        return window.Swiper;
      });
//# sourceMappingURL=maps/swiper.min.js.map

$.ajaxSetup({ cache: true });
var AjaxNav = {
  initContainer: "master",
  goToStartOnError: true,
  clientParams: [],
  headers: [],
  ajax: true,
  scrollTop: true,
  lastLink: $(),
  html4: false,
  html5: false,
  useCustomEventLoadListener: false,
  showFormSubmitErrors: false,
  useCustomConfirm: false,
  maxFileSizeTxt: "30 MByte",
  clientValidationCallbackFn: null,
  uploadLimits: {},
  init: function() {
    AjaxNav.html4 = AjaxNav.isFallback();
    AjaxNav.html5 = !AjaxNav.isFallback();
    if (AjaxNav.html5 || location.href.indexOf("#") == -1) {
      AjaxNav.lastUrl = AjaxNav.getUrl();
    }
    AjaxNav.events.callHandlers("beforeinit", this);
    if (AjaxNav.html5) {
      window.onpopstate = AjaxNav.events.onpopstate;
    } else {
      $(window).bind("hashchange", AjaxNav.events.onhashchange);
    }
    if (AjaxNav.ajax) {
      AjaxNav.setAsyncLinks("a:not(.static)");
    }
    $(document).ready(function() {
      var a = AjaxNav.getState();
      AjaxNav.events.beforestatechange({
        state: a,
        url: AjaxNav.getUrl(),
        init: true
      });
      AjaxNav.events.callHandlers("init", this);
    });
  },
  setAsyncLinks: function(a) {
    if (location.href.match(/(c1mode|flowui)/i)) {
      return;
    }
    if (this._clickHandlers.indexOf(a) > -1) {
      return;
    }
    this._clickHandlers.push(a);
    $(document).on("click", a, function(c) {
      var d = $(this);
      var b = d.attr("href");
      if (d.hasClass("x-btn")) {
        return;
      }
      if (!b) {
        return false;
      }
      var f = AjaxNav.getUrl(b);
      AjaxNav.lastLink = d;
      if (d.data("ajaxNav") == false || d.attr("target") == "_blank") {
        return true;
      }
      if (location.href.indexOf("#form") > -1) {
        return true;
      }
      if (b.indexOf("/media/") > -1 || b.indexOf("/media(") > -1) {
        return true;
      }
      if (d.closest("#langSwitcher").length > 0) {
        return true;
      }
      if (f) {
        AjaxNav.lastLink = d;
        if (f.match(/^\/.*/) && !f.match(/\./)) {
          AjaxNav.go(f);
          c.preventDefault();
          return false;
        }
      }
    });
  },
  _clickHandlers: [],
  events: {
    customHandlers: [],
    callHandlers: function(b, a) {
      $.each(AjaxNav.events.customHandlers, function(d, c) {
        if (c.event == b) {
          c.func(a);
        }
      });
    },
    onhashchange: function(a) {
      var b = AjaxNav.getUrl();
      if (b.indexOf("/") == -1) {
        return false;
      }
      AjaxNav.events.beforestatechange({
        state: AjaxNav.getState(),
        url: AjaxNav.getUrl(),
        init: a.init ? a.init : false
      });
      AjaxNav.events.callHandlers("onhashchange", a);
    },
    onpopstate: function(a) {
      AjaxNav.events.beforestatechange({
        url: AjaxNav.getUrl(),
        state: AjaxNav.getState()
      });
      AjaxNav.events.callHandlers("onpopstate", a);
    },
    beforestatechange: function(a) {
      a.loadContentBase = function(c, b) {
        var d = true;
        if (AjaxNav.html4 && c.init) {
          d = location.hash && location.hash.length > 0;
        }
        AjaxNav.load(c.url, { updateContent: d, getCallback: b });
      };
      a.pageChanged =
        AjaxNav.lastUrl &&
        a.url &&
        AjaxNav.getBaseUrl(AjaxNav.lastUrl) != AjaxNav.getBaseUrl(a.url);
      a.loadContent = a.loadContentBase;
      a.getContent = function(b) {
        AjaxNav.load(b.url ? b.url : a.url, {
          updateContent: false,
          forceLoad: true,
          params: b.params,
          getCallback: b.callback
        });
      };
      AjaxNav.events.callHandlers("beforestatechange", a);
      if (!a.preventDefault) {
        a.loadContent(a, function() {
          AjaxNav.events.callHandlers("statechanged", a);
          AjaxNav.events.callHandlers("afterstatechange", a);
        });
      }
    }
  },
  live: function(b, a) {
    if (b && a) {
      AjaxNav.bind(b, "live", a);
    } else {
      AjaxNav.events.callHandlers("live");
    }
  },
  bind: function(d, b, c) {
    var a = $.grep(AjaxNav.events.customHandlers, function(e) {
      return e.id == d;
    });
    if (a.length == 0) {
      AjaxNav.events.customHandlers.push({ id: d, event: b, func: c });
    }
  },
  unbind: function(a) {
    AjaxNav.events.customHandlers = $.grep(
      AjaxNav.events.customHandlers,
      function(b) {
        return b.id != a;
      }
    );
  },
  getState: function(b) {
    var a = AjaxNav.getUrlVars();
    if (b) {
      if (a[b]) {
        return a[b];
      }
    } else {
      return a;
    }
  },
  go: function(g, e, c) {
    var a = this;
    AjaxNav.previousUrl = location.href;
    c = $.extend(
      {
        preventDefault: false,
        paramMode: 0,
        callStateChangeHandler: true,
        renderId: null,
        replace: false
      },
      c
    );
    if (c.sender) {
      AjaxNav.lastLink = c.sender;
    }
    if (c.renderId) {
      a.tempRenderId = c.renderId;
    }
    g = g.replace("&amp;", "&");
    if (g.indexOf("http") > -1 && g.indexOf(location.host) == -1) {
      location.href = g;
      return false;
    }
    if (g == null || g == "") {
      g = AjaxNav.getUrl();
    }
    if (!c.replace) {
      e = $.extend(AjaxNav.getUrlVars(g), e);
    }
    var f = $.param(e);
    var b = AjaxNav.getBaseUrl(g);
    var d = b + (f ? "?" + f : "");
    if (AjaxNav.html5) {
      window.history.pushState(e, document.title, d);
      if (c.callStateChangeHandler) {
        AjaxNav.events.beforestatechange({ url: d, state: e });
      }
    } else {
      if (f.length > 0) {
        location.href = "#" + d;
      } else {
        location.href = d;
      }
    }
    if (typeof _gaq != "undefined") {
      _gaq.push(["_trackPageview", g]);
    }
    if (typeof gtagKey != "undefined") {
      gtag(
        "config",
        gtagKey,
        { page_path: window.location.pathname },
        { anonymize_ip: true }
      );
      if (typeof gtagAdwordsKey != "undefined") {
        gtag(
          "config",
          gtagAdwordsKey,
          { page_path: window.location.pathname },
          { anonymize_ip: true }
        );
      }
    }
  },
  pushState: function(b, a) {
    a = $.extend({ url: "", replace: false }, a);
    AjaxNav.go(a.url, b, a);
  },
  pushHash: function(b) {
    var a = $.param(b);
    location.hash = $.param(b);
  },
  getUrl: function(a) {
    if (!a) {
      a = location.href;
    }
    a = a.replace(location.protocol + "//" + location.host, "");
    if (a.indexOf("#") > -1) {
      return a.substr(a.indexOf("#") + 1);
    } else {
      return a;
    }
  },
  getBaseUrl: function(b) {
    var a = b ? b : AjaxNav.getUrl();
    if (a.indexOf("?") > -1) {
      a = a.substr(0, a.indexOf("?"));
    }
    return a;
  },
  getUrlVars: function(c) {
    if (!c) {
      c = AjaxNav.getUrl();
    }
    var d = {};
    if (c.indexOf("?") > -1) {
      var a = c.slice(c.indexOf("?") + 1).split("&");
      for (var b = 0; b < a.length; b++) {
        if (d == null) {
          d = {};
        }
        hash = a[b].split("=");
        d[hash[0]] = decodeURI(hash[1]);
      }
    }
    return d;
  },
  getUrlVar: function(a, b) {
    if (!b) {
      b = AjaxNav.getUrl();
    }
    return $.getUrlVars(b)[a];
  },
  setClientParams: function(a) {
    AjaxNav.clientParams = $.extend(a.split(","), AjaxNav.clientParams);
  },
  isFallback: function() {
    return !window.history.pushState;
  },
  loader: function(a) {
    if (a) {
      $("body").removeClass("ajaxloading");
      $("body").focus();
    } else {
      $("body").addClass("ajaxloading");
    }
  },
  load: function(g, a) {
    var f = this;
    a = $.extend(
      {
        params: {},
        updateContent: true,
        updateTitle: true,
        forceLoad: false,
        scrollTop: true,
        url: g
      },
      a
    );
    var b = {
      type: "ajax",
      renderid: f.tempRenderId ? f.tempRenderId : "master"
    };
    b = $.extend(b, a.params);
    b = $.extend(b, f.headers);
    for (var d in b) {
      if (b.hasOwnProperty(d)) {
        if (typeof b[d] == "function") {
          delete b[d];
        }
      }
    }
    if (a.updateContent) {
      var e = $("a[href='" + g + "']");
      if (e.length > 0) {
        if (e.attr("data") != null) {
          b = $.extend(b, $.parseJSON(e.attr("data")));
        }
        if (e.attr("render") != null) {
          b.renderid = e.attr("render");
        } else {
          if (
            e
              .parents("div[render]")
              .first()
              .attr("render") != null
          ) {
            b.renderid = e
              .parents("div[render]")
              .first()
              .attr("render");
          }
        }
      }
    }
    var c = true;
    if (AjaxNav.lastUrl) {
      c = AjaxNav.lastUrl != g;
    }
    if (AjaxNav.clientParams.length > 0) {
      $.each(AjaxNav.clientParams, function(i, j) {
        if (g.indexOf(j + "=") > -1) {
          c = false;
          AjaxNav.lastUrl = g;
          return false;
        }
      });
    }
    var h = g && g.indexOf("/") > -1;
    if ((c || a.forceLoad) && h) {
      f.loader();
      if (g.indexOf("/") == -1) {
        return false;
      }
      $.get(g, b, function(l, o, k) {
        if (k.getResponseHeader("X-Location") != null) {
          AjaxNav.go(k.getResponseHeader("X-Location"));
          return;
        }
        var m = $(l);
        if (a.updateContent) {
          $("#" + b.renderid).replaceWith(m);
          if (Site.live) {
            Site.live();
          }
          AjaxNav.events.callHandlers("scrollTop", a);
          if (a.scrollTop) {
            var j = AjaxNav.scrollTop;
            if (AjaxNav.lastLink) {
              if (AjaxNav.lastLink.hasClass("noscrolltop")) {
                j = false;
              }
            } else {
              j = false;
            }
            var n = $("#" + b.renderid);
            n.scrollToWhenNotVisible(0, j);
          }
          f.tempRenderId = null;
          f.lastLink = null;
          AjaxNav.events.callHandlers("live", {
            url: g,
            data: b,
            result: l,
            config: a
          });
        }
        var i = { valid: true, html: l, loadConfig: a };
        if (a.getCallback) {
          l.valid = true;
          a.getCallback(i);
        }
        if (a.updateTitle) {
          if (m.attr("data-title")) {
            document.title = m.attr("data-title");
          }
        }
        if (m.attr("data-pageid")) {
          $("body").attr("data-pageid", m.attr("data-pageid"));
        }
        AjaxNav.events.callHandlers("afterPageChanged", i);
        f.loader(true);
      }).error(function(j) {
        AjaxNav.handleError(j);
        var i = {
          valid: false,
          error: true,
          status: j.status,
          html: "",
          loadConfig: a
        };
        if (a.getCallback) {
          a.getCallback(i);
        }
        AjaxNav.events.callHandlers("afterPageChanged", i);
        if (a.goToStartOnError) {
          AjaxNav.go("/");
        }
      });
      AjaxNav.lastUrl = g;
    } else {
      AjaxNav.events.callHandlers("live", { url: g, data: b, config: a });
      if (Site.live) {
        Site.live();
      }
      if (a.getCallback) {
        a.getCallback();
      }
    }
  },
  handleError: function(d) {
    AjaxNav.loader(true);
    if (d.status == 404 || d.status == 500) {
      var f = $(d.responseText).filter("error");
      var j = AjaxNav.getUrl();
      var b = f.attr("debug") == "true";
      var i = "";
      var h = "";
      var g = "";
      if (f != null && f.attr("title") != null) {
        i = f.attr("title");
        h = f.attr("message");
        g = f.attr("details");
      } else {
        i = "Es ist ein Fehler aufgetreten";
        var a = d.responseText.match(/<body[^>]*>([\w|\W]*)<\/body>/im);
        if (a.length > 0) {
          h = a[1];
        }
      }
      if (d.status == 404) {
        if (b) {
          AjaxNav.go("/");
          return true;
        }
      }
      var c = $("#error");
      if (c.length == 0) {
        $("head").prepend(
          $(
            "<style tyle='text/css'>#error { position:fixed; width:100%; height:0; bottom:0; left:0; background:#fff; z-index:9999; overflow-y:auto; border-top:solid 2px #000; }#error * { font-size:12px!important; }#error hr, #error br { display:none; }#error .excnt { padding:20px; }#error h1, #error h2 { font-size:22px!important; margin-bottom:10px; color:red!important; margin:0!important; }#error .exurl a { color:grey!important; text-decoration:none!important; border:none!important; }#error .exmsg { font-weight:bold; }#error .exdetails { font-family:Courier New; word-break:break-all; }#error a.close { position:absolute!important; right:10px!important; top:10px!important; }</style>"
          )
        );
        c = $(
          "<div id='error'><a href='' class='close'>Fehlermeldung schlieÃŸen</a><div class='excnt'>" +
            (!h.match(/<h1>/gi) ? "<h1>" + i + "</h1>" : "") +
            "<div class='exurl'><a href='" +
            j +
            "' class='static' target='_blank'>" +
            j +
            "</a></div><div class='exmsg'>" +
            h +
            "</div><div class='exdetails'>" +
            g +
            "</div></div></div>"
        ).appendTo($("body"));
        c.find("a.close").click(function() {
          c.remove();
        });
        c.animate({ height: "35%" });
        AjaxNav.bind("hideError", "afterstatechange", function(k) {
          $("#error").remove();
        });
        AjaxNav.go(AjaxNav.previousUrl, {}, { callStateChangeHandler: false });
      }
    }
  }
};
AjaxNav.Forms = {
  live: function() {
    this.initForms();
  },
  getFormUrl: function(b, a) {
    var c = b.attr("id") ? b.attr("id") : a.attr("id");
    if (a) {
      var e = a.parents("div[data-group-name]");
      if (e.length > 0) {
        c = e.first().attr("data-group-name");
      }
    }
    var f = b.attr("action") ? b.attr("action") : location.href;
    var d =
      f + (f.indexOf("?") > -1 ? "&" : "?") + "renderid=" + c + "&type=ajax";
    return d;
  },
  initForms: function() {
    var a = this;
    if (document.formsInitComplete) {
      return false;
    }
    $(document).on("submit", "form[data-async='true']", function(b) {
      var d = $(this);
      var h = d.attr("id");
      var l = a.validationConfig.getConfig(h);
      var m = d.validate(l);
      var h = d.attr("id");
      var j = a.getFormUrl(d);
      var f = d.serializeArray();
      f.push({ name: "submit", value: "true" });
      var i = false;
      var k = d.attr("data-novalidate") == "True";
      if (!k) {
        var g = d.find("input,textarea,select");
        g.each(function() {
          var e = $(this);
          if (!m.element(e)) {
            i = true;
          }
        });
        var c = $("input[id^=txt]").filter(function() {
          return $(this).hasClass("has-error");
        });
        if (c.length > 0) {
          i = true;
        }
      }
      if (!i) {
        $.ajax({
          type: "POST",
          url: j,
          data: f,
          success: function(n) {
            a.processCallback({ form: d, data: n });
            var e = n.errors.length > 0;
            if (AjaxNav.clientValidationCallbackFn) {
              AjaxNav.clientValidationCallbackFn(!e);
            }
          },
          error: function(e) {
            if (AjaxNav.showFormSubmitErrors) {
              console.error(e);
              alert(e.responseText);
            }
          }
        });
      }
      b.preventDefault();
    });
    $(document).on("submit", "form.formbuilder", a.onFormBuilderSubmit);
    processConfirm = function(b, d, c, f, g) {
      if (d) {
        b.preventDefault();
        swal(
          {
            title: f || "Are you sure?",
            text: c,
            type: g || "warning",
            showCancelButton: true,
            customClass: "stat-modal"
          },
          function(e) {
            if (e) {
              $(b.target).trigger("click", {});
            } else {
              return false;
            }
          }
        );
      }
      return false;
    };
    $(document).on(
      "click",
      "a[data-confirm-message], button[data-confirm-message]",
      function(f, d) {
        var g = $(this).attr("data-confirm-message");
        g = g.replace(/\\n/gi, "\n");
        if (!AjaxNav.useCustomConfirm) {
          if (!confirm(g)) {
            f.stopImmediatePropagation();
            return false;
          }
        } else {
          var h = $(this).attr("data-confirm-title");
          if (h) {
            h = h.replace(/\\n/gi, "\n");
          }
          var i = $(this).attr("data-confirm-type");
          var b = $(this).attr("data-confirm-callback");
          if (!b) {
            b = $(this)
              .parent("a")
              .attr("data-confirm-callback");
          }
          if (!d) {
            processConfirm(f, true, g, h, i);
            f.preventDefault();
            f.stopImmediatePropagation();
          } else {
            if (b) {
              var c = window[b];
              if (c) {
                c();
              }
            }
          }
        }
      }
    );
    $(document).on("click", "*[data-cmd]", function(c) {
      var l = $(this);
      var g = l.closest("form");
      var i = g.attr("id");
      var k = a.getFormUrl(g, l);
      var f = l.closest("[id^='field']");
      var b = g.serializeArray();
      b.push({ name: "form_cmd", value: l.attr("data-cmd") });
      if (l.attr("data-cmd-value")) {
        b.push({ name: "form_cmd_value", value: l.attr("data-cmd-value") });
      }
      b.push({ name: "callback", value: "true" });
      b.push({ name: "callback_field", value: f.attr("id") });
      var m = a.validationConfig.getConfig(i);
      var n = g.validate(m);
      var j = false;
      if (l.attr("data-validate")) {
        var h = g.find("input,textarea,select");
        h.each(function() {
          var e = $(this);
          if (!n.element(e)) {
            j = true;
            return false;
          }
        });
        var d = $("input[id^=txt]").filter(function() {
          return $(this).hasClass("has-error");
        });
        if (d.length > 0) {
          j = true;
        }
      }
      if (AjaxNav.clientValidationCallbackFn) {
        AjaxNav.clientValidationCallbackFn(!j);
      }
      if (!j) {
        $.ajax({
          type: "POST",
          url: k,
          data: b,
          success: function(e) {
            a.processCallback({ form: g, data: e });
          }
        });
      }
    });
    $(document).on(
      "change",
      "*[data-autocallback='true'],*[data-autopostback='true']",
      function(c) {
        var i = $(this);
        var f = i.closest("form");
        var g = f.attr("id");
        var h = a.getFormUrl(f, i);
        var d = i.closest("[id^='field']");
        var b = f.serializeArray();
        b.push({ name: "form_cmd", value: i.attr("name") });
        b.push({ name: "form_cmd_value", value: i.val() });
        b.push({ name: "callback", value: "true" });
        if (i.attr("data-autocallback-field")) {
          b.push({
            name: "callback_field",
            value: i.attr("data-autocallback-field")
          });
        } else {
          b.push({ name: "callback_field", value: d.attr("id") });
        }
        $.ajax({
          type: "POST",
          url: h,
          data: b,
          success: function(e) {
            a.processCallback({ form: f, data: e });
          }
        });
      }
    );
    $(document).on("change", "form[data-async='true'] *[type='file']", function(
      h
    ) {
      var l = $(this);
      var m = h.target.files;
      var c = [];
      if (m) {
        for (var r = 0; r < m.length; r++) {
          var j = m[r];
          if (AjaxNav.uploadLimits.length > 0 || true) {
            var n = j.type;
            var b = n.split("/")[0];
            if (AjaxNav.uploadLimits[b]) {
              var s = AjaxNav.uploadLimits[b];
              var d = j.size / 1000 / 1000;
              if (d > s) {
                console.info("Max Filesize exceeded: ", j.name);
                if (AjaxNav.useCustomConfirm) {
                  var t =
                    "Eine oder mehrere Dateien Ã¼berschreiten die maximale DateigrÃ¶ÃŸe. Bitte wÃ¤hlen Sie eine andere Datei.</br> Maximum: " +
                    s +
                    " MByte";
                  swal({
                    title: "Limit Ã¼berschritten",
                    text: t,
                    confirmButtonText: "OK",
                    html: true
                  });
                } else {
                  var t =
                    "Eine oder mehrere Dateien Ã¼berschreiten die maximale DateigrÃ¶ÃŸe. Bitte wÃ¤hlen Sie eine andere Datei. Maximum: " +
                    s +
                    " MByte";
                  alert(t);
                }
                continue;
              }
            }
          }
          c.push(j);
        }
      }
      if (c.length == 0) {
        return true;
      }
      var o = l.closest("form");
      var p = o.attr("id");
      var q = a.getFormUrl(o, l);
      var k = l.closest("[id^='field']");
      var g = new FormData();
      g.append("callback", "true");
      g.append("callback_field", k.attr("id"));
      $.each(c, function(e, f) {
        g.append(l.attr("name") + "-" + e, f);
      });
      $.each(o.serializeArray(), function(e, f) {
        g.append(f.name, f.value);
      });
      $.ajax({
        type: "POST",
        url: q,
        data: g,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        xhr: function() {
          var e = $.ajaxSettings.xhr();
          if (e.upload) {
            e.upload.addEventListener(
              "progress",
              function(f) {
                var i = l.parent().find("progress");
                if (i.length == 0) {
                  i = $(
                    "<progress id='" + l.attr("id") + "-progress'></progress>"
                  ).appendTo(l.parent());
                }
                i.attr({ value: f.loaded, max: f.total });
              },
              false
            );
          }
          return e;
        },
        success: function(e) {
          a.processCallback({ form: o, data: e });
        },
        error: function() {
          if (AjaxNav.useCustomConfirm) {
            swal({
              title: "Sorry",
              text:
                "Something went wrong. Maximum Filesize: " +
                  AjaxNav.maxFileSizeTxt || "30 MByte",
              confirmButtonText: "Ok",
              type: "error"
            });
          } else {
            alert("Something went wrong! Please try again.");
          }
        }
      });
    });
    document.formsInitComplete = true;
  },
  processCallback: function(c) {
    var a = this;
    var b = c.data;
    var d = c.form;
    var f = d.attr("id");
    if (b.globalError && b.globalError != "") {
      alert(b.globalError);
      return false;
    }
    var g = true;
    var m = {};
    if (b.errors && b.errors.length > 0) {
      b.errors.forEach(function(o) {
        var p = d.find("[name='" + o.field + "']");
        if (p.length > 0) {
          m[o.field] = o.message;
          g = false;
        } else {
          console.log("Validation Error: Field [" + o.field + "] not found");
        }
      });
    }
    if (g) {
      var h = "";
      if (b.html) {
        h = b.html;
      } else {
        if (typeof b === "string") {
          html = b;
        }
      }
      if (h != "") {
        var i = $(h);
        var k = i.attr("id");
        if (k == null) {
          alert("No FieldId found in HTML Result");
          return false;
        }
        var j = $("#" + k);
        j.replaceWith(i);
        j.scrollToWhenNotVisible();
      }
      if (b.script) {
        setTimeout(b.script, 50);
      }
      AjaxNav.live();
    } else {
      var l = a.validationConfig.getConfig(f);
      var n = d.validate(l);
      n.showErrors(m);
    }
  },
  validationConfig: {
    defaultConfig: {
      highlight: function(a) {
        if ($(".has-error").length == 0) {
          $(a).focusInvalid();
        }
        $(a)
          .closest(".form-group")
          .addClass("has-error");
      },
      unhighlight: function(a) {
        $(a)
          .closest(".form-group")
          .removeClass("has-error");
      },
      errorElement: "span",
      errorClass: "help-block",
      errorPlacement: function(b, a) {
        if (
          a.parent(".checkbox, .checkbox-inline, .radio, .radio-inline").length
        ) {
          b.insertAfter(a.parent().parent());
        } else {
          if (a.parent(".form-group, .btn").length) {
            b.insertAfter(a);
          } else {
            b.insertAfter(a);
          }
        }
      },
      rules: {}
    },
    customConfigs: {},
    addRule: function(a, c, d) {
      if (typeof c === "function") {
        if (this.defaultConfig.rules[a] != null) {
          return;
        }
        var b = {};
        b[a] = a;
        this.defaultConfig.rules[a] = b;
        if (d == null) {
          d = "UngÃ¼ltiges Format";
        }
        $.validator.addMethod(a, c, d);
      } else {
        this.defaultConfig.rules[a] = c;
      }
    },
    add: function(b, a) {
      this.customConfigs[b] = a;
    },
    getConfig: function(b) {
      var a = this.defaultConfig;
      if (b) {
        if (this.customConfigs[b]) {
          a = $.extend(a, this.customConfigs[b]);
        }
      }
      return a;
    }
  },
  onFormBuilderSubmit: function(b) {
    var a = AjaxNav.Forms;
    if ($(b.target).hasClass("voting")) {
      return;
    }
    try {
      var c = $(this);
      var h = c.attr("id");
      var d = c.closest("div[id]");
      var k = d.attr("id");
      var l = a.validationConfig.getConfig(h);
      var m = c.validate(l);
      var h = c.attr("id");
      var j = c.attr("action");
      var i = false;
      var g = c.find("input,textarea,select");
      g.each(function() {
        var e = $(this);
        if (!m.element(e)) {
          i = true;
        }
      });
      if (!i) {
        var f = new FormData(c[0]);
        f.append("submit", "true");
        f.append("type", "ajax");
        f.append("renderid", k);
        $.ajax({
          type: "POST",
          url: j,
          data: f,
          contentType: false,
          cache: false,
          processData: false,
          success: function(e) {
            d.html(e);
            if (e.indexOf("validationErrors") == -1) {
              d.scrollToWhenNotVisible();
            }
          }
        });
      }
      b.preventDefault();
      return false;
    } catch (b) {
      return true;
    }
  }
};
AjaxNav.bind("asyncForms", "live", function() {
  if (AjaxNav.ajax) {
    AjaxNav.Forms.live();
  }
});
$.extend({
  getUrlVars: function() {
    var d = [],
      a;
    var b = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var c = 0; c < b.length; c++) {
      a = b[c].split("=");
      d.push(a[0]);
      d[a[0]] = a[1];
    }
    return d;
  },
  getUrlVar: function(a) {
    return $.getUrlVars()[a];
  },
  getHashVars: function() {
    var d = [],
      a;
    var b = window.location.href
      .slice(window.location.href.indexOf("#") + 1)
      .split("&");
    for (var c = 0; c < b.length; c++) {
      a = b[c].split("=");
      d.push(a[0]);
      d[a[0]] = a[1];
    }
    return d;
  },
  getHashVar: function(a) {
    return $.getHashVars()[a];
  }
});
!(function($) {
  ($.fn.simpleUpload = function(options) {
    var def = {
      url: null,
      change: null,
      error: null,
      types: null,
      fields: null,
      size: 5120
    };
    return this.each(function() {
      function send() {
        var a = $this.attr("name"),
          b = new FormData();
        for (var c in $this[0].files) {
          if ("object" == typeof $this[0].files[c]) {
            var d = $this[0].files[c];
            if (!typeCheck(d.name)) {
              return (
                "function" == typeof params.error &&
                  params.error({ type: "fileType" }),
                !1
              );
            }
            if (d.size / params.size > params.size) {
              return (
                "function" == typeof params.error &&
                  params.error({ type: "size" }),
                !1
              );
            }
            b.append(a + "[" + c + "]", d);
          }
        }
        if ("object" == typeof params.fields) {
          for (var c in params.fields) {
            if ($.isArray(params.fields[c])) {
              for (var e in params.fields[c]) {
                b.append(c + "[" + e + "]", params.fields[c][e]);
              }
            } else {
              b.append(c, params.fields[c]);
            }
          }
        }
        var f = {
          url: params.url,
          data: b,
          cache: !1,
          contentType: !1,
          processData: !1,
          type: "POST",
          complete: function() {
            $this.val(""), params.complete && params.complete(arguments);
          }
        };
        null != params.error && (f.error = params.error),
          params.success && (f.success = params.success),
          params.async && (f.async = params.async),
          params.beforeSend && (f.beforeSend = params.beforeSend),
          params.global && (f.global = params.global),
          params.dataType && (f.dataType = params.dataType),
          params.contents && (f.contents = params.contents),
          params.jsonp && (f.jsonp = params.jsonp),
          params.jsonpCallback && (f.jsonpCallback = params.jsonpCallback),
          params.password && (f.password = params.password),
          params.username && (f.username = params.username),
          params.statusCode && (f.statusCode = params.statusCode),
          $.ajax(f);
      }
      function typeCheck(a) {
        return $.isArray(params.types)
          ? params.types.indexOf($.getExt(a)) > -1
            ? !0
            : !1
          : !0;
      }
      var $this = $(this);
      options || (options = {}),
        $.each(this.attributes, function() {
          if (this.specified && this.name.indexOf("data-") > -1) {
            var name = this.name.replace("data-", "");
            options[name] =
              "function" == typeof window[this.value]
                ? eval(this.value)
                : this.value;
          }
        });
      var params = $.extend({}, def, options);
      "function" == typeof params.change &&
        $this.change(function() {
          params.change($this[0].files);
        }),
        params.trigger ? $(params.trigger).click(send) : $this.change(send);
    });
  }),
    $.extend(!0, {
      getExt: function(a) {
        return a.substr(a.lastIndexOf(".") + 1);
      }
    });
})(jQuery);
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(a) {
    var c = this.length >>> 0;
    var b = Number(arguments[1]) || 0;
    b = b < 0 ? Math.ceil(b) : Math.floor(b);
    if (b < 0) {
      b += c;
    }
    for (; b < c; b++) {
      if (b in this && this[b] === a) {
        return b;
      }
    }
    return -1;
  };
}
if (!window.addEventListenerBase) {
  window.addEventListenerBase = window.addEventListener;
  if (!window.addEventListenerBase) {
    window.addEventListenerBase = window.attachEvent;
  }
  window.addEventListener = function(b, a, c) {
    if (b == "load" && AjaxNav.useCustomEventLoadListener) {
      $(document).ready(a);
    } else {
      if (window.addEventListenerBase) {
        window.addEventListenerBase(b, a, c);
      } else {
        console.warn("AddEventListener not supported");
      }
    }
  };
}
if (typeof Site == "undefined") {
  Site = {};
}
Site.Nav = AjaxNav;
document.ajaxNav = AjaxNav;
$(document).ready(document.ajaxNav.init);
$.fn.submitAsync = function(a) {
  var b = $(this);
  a = $.extend(
    {
      data: [],
      editContainer: ".edit",
      confirmContainer: ".confirm",
      source: b.attr("id"),
      autoInfo: true,
      validate: true,
      valid: false,
      infoTarget: b
    },
    a
  );
  a.data = a.data.concat(b.serializeArray());
  if (a.source) {
    a.data.push({ name: "source", value: a.source.replace("form", "") });
  }
  if (a.validate) {
    a.valid = b.groupValid();
  } else {
    a.valid = true;
  }
  var c = b.attr("action");
  if (a.valid) {
    $.post(c, a.data, function(d) {
      a.result = d;
      if (a.callback) {
        a.callback(a);
      }
      if ($(a.confirmContainer).length > 0 && d.success) {
        $(a.confirmContainer).show();
        $(a.editContainer).hide();
        $(a.confirmContainer + " .message").html(d.message);
      } else {
        if (a.autoInfo && d.message) {
          var e = d.targetId && d.targetId != "" ? d.targetId : b.attr("id");
          var f = {};
          f[d.targetId] = d.message;
          b.validate().showErrors(f);
        }
      }
      AjaxNav.live();
    }).error(function(d) {
      $.showError(d.responseText);
    });
  }
};
$.fn.groupValid = function() {
  var a = true;
  var b = false;
  this.each(function() {
    $(this)
      .find("input:visible,select:visible,textarea:visible")
      .not(".rtChk")
      .each(function() {
        var c = $(this);
        if (!c.valid()) {
          a = false;
          if (!b) {
            if (c.offset().top > 0) {
              document.scrollActive = true;
              var d = c.offset().top - 300;
              $("html,body").animate({ scrollTop: d });
              c.focus();
            }
            b = true;
          }
        }
      });
  });
  return a;
};
$.fn.toolTip = function(f) {
  f = $.extend(
    {
      type: "standard",
      html: "",
      id: new Date().getTime(),
      contentId: "",
      delay: 3000,
      wait: 0,
      cssclass: "",
      alignTo: "",
      left: 0,
      closeable: false,
      width: 0,
      top: 0,
      position: "bottom"
    },
    f
  );
  var i = false;
  if (f.opener) {
    if (!f.opener.hasClass("tipopen")) {
      f.opener.addClass("tipopen");
    } else {
      i = true;
    }
  }
  if (!i) {
    var b = $(this);
    b.addClass("infoActive");
    var e = $(
      "<div id='infotip" +
        f.id +
        "' class='infotip " +
        f.cssclass +
        "' style='display:none;'><div class='frame'><div class='arrow'></div><div class='cnt'></div></div></div>"
    ).appendTo($("#master"));
    var d = e.find(".cnt");
    if (f.contentId != "") {
      f.contentElement = $("#" + f.contentId);
      f.contentElement.attr("activeTip", f.id);
      f.contentElementParent = f.contentElement.parent();
      d.append(f.contentElement.show());
      f.width = f.contentElement.width();
    } else {
      d.html(f.html);
    }
    if (f.top > 0) {
      e.css({ "margin-top": f.top + "px" });
    }
    if (f.left > 0) {
      e.css({ "margin-left": f.left + "px" });
    }
    if (f.width > 0) {
      e.css({ width: f.width + "px" });
    }
    var a = b;
    if (f.alignTo) {
      a = $(f.alignTo);
      f.alignTo.addClass("active");
    }
    if (b[0].tagName == "INPUT") {
      if (!b.is(":text")) {
        a = a.parent();
      }
      b.addClass("active");
      b.focus(function() {
        g();
      });
    }
    if (f.closable) {
      f.delay = 0;
      $("#masterpage").click(function(c) {
        if (c.target.id != f.opener.attr("id")) {
          g();
        }
      });
    }
    e.css({ left: a.offset().left + a.width() + 40 + "px" });
    e.css({
      top: a.offset().top + (f.position == "bottom" ? a.height() : 0) + "px"
    });
    var g = function() {
      e.fadeOut(500, function() {
        b.removeClass("infoActive");
        b.removeClass("active");
        if (f.callback) {
          f.callback();
        }
        if (f.alignTo) {
          f.alignTo.removeClass("active");
          f.alignTo.parent().removeClass("active");
        }
        if (f.contentElement) {
          f.contentElementParent.append(f.contentElement.hide());
        }
        if (f.opener) {
          f.opener.removeClass("tipopen");
        }
        e.remove();
      });
    };
    b.hideLayer = g;
    $(".infotip").fadeOut(200);
    var h = a.offset().left + e.width();
    if (h > $(window).width()) {
      e.addClass("leftalign");
      e.css({ left: a.offset().left - e.width() + 20 + "px" });
    }
    e.delay(f.wait).fadeIn(500, function() {
      if (f.delay > 0) {
        setTimeout(function() {
          g();
        }, f.delay);
      }
    });
  }
  return b;
};
$.fn.overlay = function(a) {
  a = $.extend({ opacity: 0.6, fadeInSpeed: 200, fadeOutSpeed: 200 }, a);
  return {
    getLayer: function() {
      var b = $("#overlay");
      if (b.length == 0) {
        b = $("<div id='overlay' style='display:none;'></div>").appendTo(
          $("body")
        );
      }
      return b;
    },
    show: function(d) {
      var c = this;
      var b = this.getLayer();
      if (!b.is(":visible")) {
        b.css({ opacity: 0 })
          .show()
          .animate({ opacity: a.opacity }, a.fadeInSpeed, function() {
            if (d.callback) {
              d.callback();
            }
            if (d.click) {
              b.click(function() {
                d.click();
              });
            }
          });
      }
    },
    hide: function(b) {
      var c = this.getLayer();
      c.animate({ opacity: 0 }, a.fadeOutSpeed, function() {
        if (b) {
          b();
        }
        c.remove();
      });
    }
  };
};
$.fn.showLayer = function(a) {
  a = $.extend(
    {
      url: "",
      width: 0,
      height: 0,
      iframe: false,
      cssClass: "",
      id: "",
      closeLink: true,
      fadeInSpeed: 200,
      fadeOutSpeed: 100,
      closeLinkText: "<span>Fenster schlieÃŸen</span>",
      backLink: false,
      backLinkText: "zurÃ¼ck zur Ãœbersicht",
      top: 60,
      bottom: 60,
      padding: 80,
      overlay: true,
      center: false,
      resize: false
    },
    a
  );
  if (a.id == "") {
    if (a.opener) {
      if (a.opener.attr("lid")) {
        a.id = "sLayer" + a.opener.attr("lid");
      } else {
        if (a.opener.attr("id")) {
          a.id = "sLayer" + a.opener.attr("id").replace(/_/g, "");
        }
      }
      if (a.opener.hasClass("full")) {
        a.width = $("#contentframe").width();
      }
    }
    if (a.opener == "") {
      a.id = "sLayer" + new Date().getTime();
    }
  } else {
    a.id = "sLayer" + a.id;
  }
  var b = $(this);
  if (a.url != "" || b.length > 0) {
    var c = a.url.match(/#.+/);
    if (c) {
      c = $.deparam.fragment(c[0]);
    }
    a.url = a.url.replace(/#.+/, "");
    var d = $("#" + a.id);
    if (d.length == 0) {
      d = $(
        "<div id='" +
          a.id +
          "' class='layer " +
          a.cssClass +
          "' style='display:none;'><div class='lcnt'></div></div>"
      ).appendTo($("body"));
    }
    var e = d.find(".lcnt");
    d.css({ "z-index": 550 + $(".layer:visible").length });
    d.validateSize = function(f) {
      d.css({ top: $(window).scrollTop() + a.top + "px" });
      if (f) {
        f();
      }
    };
    d.showLayer = function() {
      if (a.opener) {
        a.opener.addClass("active");
        if (d.data("lastOpener")) {
          d.data("lastOpener").removeClass("active");
        }
        d.data("lastOpener", a.opener);
      }
      if (a.closeLink) {
        $(
          "<a href='javascript:;' class='close closeLayer'>" +
            a.closeLinkText +
            "</a>"
        ).appendTo(d);
      }
      d.close = function() {
        d.fadeOut(a.fadeOutSpeed, function() {
          if (a.opener) {
            a.opener.removeClass("active");
          }
          if (a.closeCallback) {
            a.closeCallback();
          }
          $.fn.overlay().hide();
          d.remove();
        });
      };
      if (a.backLink || (a.opener ? a.opener.hasClass("backLink") : false)) {
        if (d.find(".back").length == 0) {
          $(
            "<a href='javascript:;' class='back s1 closeLayer'>" +
              a.backLinkText +
              "</a>"
          ).appendTo(d);
        }
      }
      d.find("a.closeLayer").click(function(f) {
        d.close();
        f.preventDefault();
        return false;
      });
      d.validateSize(function() {
        if (a.overlay) {
          $.fn.overlay().show({
            callback: function() {
              d.fadeIn(a.fadeInSpeed);
            },
            click: function() {
              d.close();
            }
          });
        } else {
          d.fadeIn(a.fadeInSpeed);
        }
      });
    };
    d.update = function(f) {
      if (f.iframe) {
        var g = $("#layerIframe");
        if (g.length == 0) {
          g = $("<iframe id='layerIframe'></iframe>").appendTo(e);
        }
        g.attr("src", f.url);
      } else {
        $.get(f.url, { type: "ajax", renderid: f.render }, function(h) {
          e.html(h);
          AjaxNav.live();
          d.showLayer();
          if (typeof _gaq != "undefined") {
            _gaq.push(["_trackPageview", f.url]);
          }
        }).error(function(h) {
          $.showError(h.responseText);
        });
      }
    };
    if (a.url != "") {
      d.update(a);
    } else {
      e.append(b.show());
      d.showLayer();
    }
    return d;
  }
};
$.getX = function(d, b, a, c) {
  $.get(
    d,
    b,
    function(g) {
      var h = $("#xhead");
      if (h.length == 0) {
        h = $("<div id='xhead' style='display:none;'></div>").appendTo(
          $("body")
        );
      } else {
        h.empty();
      }
      var f = /<div id="xhead".+?>([\s\S]*?)<\/div>/;
      var e = f.exec(g);
      h.html(e[1]);
      a(g);
    },
    c
  );
};
$.extend({
  getUrlVars: function() {
    var d = [],
      a;
    var b = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var c = 0; c < b.length; c++) {
      a = b[c].split("=");
      d.push(a[0]);
      d[a[0]] = a[1];
    }
    return d;
  },
  getUrlVar: function(a) {
    return $.getUrlVars()[a];
  },
  getHashVars: function() {
    var d = [],
      a;
    var b = window.location.href
      .slice(window.location.href.indexOf("#") + 1)
      .split("&");
    for (var c = 0; c < b.length; c++) {
      a = b[c].split("=");
      d.push(a[0]);
      d[a[0]] = a[1];
    }
    return d;
  },
  getHashVar: function(a) {
    return $.getHashVars()[a];
  }
});
$.fn.isScrollingVisible = function() {
  var c = $(this);
  var a = c.offset().top;
  var b = $(window).scrollTop();
  var e = b;
  var d = b + $(window).height();
  if (a < e || a > d) {
    return false;
  }
  return true;
};
$.fn.scrollToWhenNotVisible = function(a, d) {
  var i = $(this);
  if (typeof d == "undefined") {
    d = true;
  }
  var c = $("[data-scrolltarget]");
  if (c.length > 0) {
    i = $("#" + c.attr("data-scrolltarget"));
    d = true;
  }
  var f = 50;
  var b = $("[data-scrolloffset]");
  if (b.length > 0) {
    var g = b.attr("data-scrolloffset");
    f = parseInt(g);
    d = true;
  }
  if (d && !i.isScrollingVisible(f)) {
    var e = i.offset().top;
    var h = e - f;
    $("html,body")
      .delay(150)
      .animate({ scrollTop: h }, 250, function() {
        if (a) {
          a();
        }
      });
  } else {
    if (a) {
      a();
    }
  }
};
function setCookie(a, b, e) {
  var c = new Date();
  c.setTime(c.getTime() + e * 24 * 60 * 60 * 1000);
  var f = "expires=" + c.toGMTString();
  document.cookie = a + "=" + b + "; " + f;
}
function getCookie(d) {
  var f = d + "=";
  var b = document.cookie.split(";");
  for (var e = 0; e < b.length; e++) {
    var a = b[e];
    while (a.charAt(0) == " ") {
      a = a.substring(1);
    }
    if (a.indexOf(f) == 0) {
      return a.substring(f.length, a.length);
    }
  }
  return "";
}
if (!document.defaultButtonsParsed) {
  $(function() {
    $(document).on("keypress", "[data-default-btn]", function(b) {
      var c = $(this);
      if (b.which == 13) {
        var a = $("#" + c.attr("data-default-btn"));
        a.click();
      }
    });
  });
  document.defaultButtonsParsed = true;
}
if (typeof console == "undefined") {
  console = { log: function(a) {} };
}
$(document).ready(function() {
  AjaxNav.live("webForms", function() {
    if (typeof Sys != "undefined" && document.lastWebFormUrl != location.href) {
      $(document).ready(function() {
        var a = Sys.WebForms.PageRequestManager.getInstance();
        if (a != null) {
          a.add_initializeRequest(function(f, c) {
            document.validator = $("form").validate({
              highlight: function(e) {
                if ($(".has-error").length == 0) {
                  $(e).focusInvalid();
                }
                $(e)
                  .closest(".form-group")
                  .addClass("has-error");
              },
              unhighlight: function(e) {
                $(e)
                  .closest(".form-group")
                  .removeClass("has-error");
              },
              errorElement: "span",
              errorClass: "help-block",
              errorPlacement: function(h, e) {
                if (
                  e.parent(".checkbox, .checkbox-inline, .radio, .radio-inline")
                    .length
                ) {
                  h.insertAfter(e.parent().parent());
                } else {
                  if (e.parent(".form-group, .btn").length) {
                    h.insertAfter(e);
                  } else {
                    h.insertAfter(e);
                  }
                }
              }
            });
            var b = $(c._postBackElement);
            var g = b.attr("data-valgroup") ? b.attr("data-valgroup") : "all";
            var d = false;
            $.each(c._updatePanelsToUpdate, function(e, h) {
              var i = $("[id*='" + h.replace("$", "_") + "']");
              i.find("input,select,textarea").each(function() {
                var j = $(this);
                if (g != "all") {
                  if (j.attr("data-valgroup") != g) {
                    return false;
                  }
                }
                if (!document.validator.element(j)) {
                  d = true;
                }
              });
            });
            if (d) {
              c.set_cancel(true);
              $(".has-error")
                .first()
                .focusInvalid();
            }
          });
        }
      });
      document.lastWebFormUrl = location.href;
    }
  });
});
$.fn.focusInvalid = function() {
  var a = $(this);
  if (a.length > 0) {
    var b = a.offset().top - $(window).height() * 0.5;
    $("html,body").animate({ scrollTop: b }, function() {
      a.focus();
    });
  }
  return a;
};
/*! jQuery UI - v1.10.4 - 2014-02-12
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.tooltip.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e, t) {
  function i(t, i) {
    var s,
      a,
      o,
      r = t.nodeName.toLowerCase();
    return "area" === r
      ? ((s = t.parentNode),
        (a = s.name),
        t.href && a && "map" === s.nodeName.toLowerCase()
          ? ((o = e("img[usemap=#" + a + "]")[0]), !!o && n(o))
          : !1)
      : (/input|select|textarea|button|object/.test(r)
          ? !t.disabled
          : "a" === r
          ? t.href || i
          : i) && n(t);
  }
  function n(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function() {
          return "hidden" === e.css(this, "visibility");
        }).length
    );
  }
  var s = 0,
    a = /^ui-id-\d+$/;
  (e.ui = e.ui || {}),
    e.extend(e.ui, {
      version: "1.10.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }),
    e.fn.extend({
      focus: (function(t) {
        return function(i, n) {
          return "number" == typeof i
            ? this.each(function() {
                var t = this;
                setTimeout(function() {
                  e(t).focus(), n && n.call(t);
                }, i);
              })
            : t.apply(this, arguments);
        };
      })(e.fn.focus),
      scrollParent: function() {
        var t;
        return (
          (t =
            (e.ui.ie && /(static|relative)/.test(this.css("position"))) ||
            /absolute/.test(this.css("position"))
              ? this.parents()
                  .filter(function() {
                    return (
                      /(relative|absolute|fixed)/.test(
                        e.css(this, "position")
                      ) &&
                      /(auto|scroll)/.test(
                        e.css(this, "overflow") +
                          e.css(this, "overflow-y") +
                          e.css(this, "overflow-x")
                      )
                    );
                  })
                  .eq(0)
              : this.parents()
                  .filter(function() {
                    return /(auto|scroll)/.test(
                      e.css(this, "overflow") +
                        e.css(this, "overflow-y") +
                        e.css(this, "overflow-x")
                    );
                  })
                  .eq(0)),
          /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        );
      },
      zIndex: function(i) {
        if (i !== t) return this.css("zIndex", i);
        if (this.length)
          for (var n, s, a = e(this[0]); a.length && a[0] !== document; ) {
            if (
              ((n = a.css("position")),
              ("absolute" === n || "relative" === n || "fixed" === n) &&
                ((s = parseInt(a.css("zIndex"), 10)), !isNaN(s) && 0 !== s))
            )
              return s;
            a = a.parent();
          }
        return 0;
      },
      uniqueId: function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++s);
        });
      },
      removeUniqueId: function() {
        return this.each(function() {
          a.test(this.id) && e(this).removeAttr("id");
        });
      }
    }),
    e.extend(e.expr[":"], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function(t) {
            return function(i) {
              return !!e.data(i, t);
            };
          })
        : function(t, i, n) {
            return !!e.data(t, n[3]);
          },
      focusable: function(t) {
        return i(t, !isNaN(e.attr(t, "tabindex")));
      },
      tabbable: function(t) {
        var n = e.attr(t, "tabindex"),
          s = isNaN(n);
        return (s || n >= 0) && i(t, !s);
      }
    }),
    e("<a>").outerWidth(1).jquery ||
      e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) {
          return (
            e.each(a, function() {
              (i -= parseFloat(e.css(t, "padding" + this)) || 0),
                n &&
                  (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
            }),
            i
          );
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
          o = n.toLowerCase(),
          r = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
          };
        (e.fn["inner" + n] = function(i) {
          return i === t
            ? r["inner" + n].call(this)
            : this.each(function() {
                e(this).css(o, s(this, i) + "px");
              });
        }),
          (e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t
              ? r["outer" + n].call(this, t)
              : this.each(function() {
                  e(this).css(o, s(this, t, !0, i) + "px");
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function(e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }),
    e("<a>")
      .data("a-b", "a")
      .removeData("a-b")
      .data("a-b") &&
      (e.fn.removeData = (function(t) {
        return function(i) {
          return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    (e.support.selectstart = "onselectstart" in document.createElement("div")),
    e.fn.extend({
      disableSelection: function() {
        return this.bind(
          (e.support.selectstart ? "selectstart" : "mousedown") +
            ".ui-disableSelection",
          function(e) {
            e.preventDefault();
          }
        );
      },
      enableSelection: function() {
        return this.unbind(".ui-disableSelection");
      }
    }),
    e.extend(e.ui, {
      plugin: {
        add: function(t, i, n) {
          var s,
            a = e.ui[t].prototype;
          for (s in n)
            (a.plugins[s] = a.plugins[s] || []), a.plugins[s].push([i, n[s]]);
        },
        call: function(e, t, i) {
          var n,
            s = e.plugins[t];
          if (
            s &&
            e.element[0].parentNode &&
            11 !== e.element[0].parentNode.nodeType
          )
            for (n = 0; s.length > n; n++)
              e.options[s[n][0]] && s[n][1].apply(e.element, i);
        }
      },
      hasScroll: function(t, i) {
        if ("hidden" === e(t).css("overflow")) return !1;
        var n = i && "left" === i ? "scrollLeft" : "scrollTop",
          s = !1;
        return t[n] > 0 ? !0 : ((t[n] = 1), (s = t[n] > 0), (t[n] = 0), s);
      }
    });
})(jQuery);
(function(t, e) {
  var i = 0,
    s = Array.prototype.slice,
    n = t.cleanData;
  (t.cleanData = function(e) {
    for (var i, s = 0; null != (i = e[s]); s++)
      try {
        t(i).triggerHandler("remove");
      } catch (o) {}
    n(e);
  }),
    (t.widget = function(i, s, n) {
      var o,
        a,
        r,
        h,
        l = {},
        c = i.split(".")[0];
      (i = i.split(".")[1]),
        (o = c + "-" + i),
        n || ((n = s), (s = t.Widget)),
        (t.expr[":"][o.toLowerCase()] = function(e) {
          return !!t.data(e, o);
        }),
        (t[c] = t[c] || {}),
        (a = t[c][i]),
        (r = t[c][i] = function(t, i) {
          return this._createWidget
            ? (arguments.length && this._createWidget(t, i), e)
            : new r(t, i);
        }),
        t.extend(r, a, {
          version: n.version,
          _proto: t.extend({}, n),
          _childConstructors: []
        }),
        (h = new s()),
        (h.options = t.widget.extend({}, h.options)),
        t.each(n, function(i, n) {
          return t.isFunction(n)
            ? ((l[i] = (function() {
                var t = function() {
                    return s.prototype[i].apply(this, arguments);
                  },
                  e = function(t) {
                    return s.prototype[i].apply(this, t);
                  };
                return function() {
                  var i,
                    s = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = e),
                    (i = n.apply(this, arguments)),
                    (this._super = s),
                    (this._superApply = o),
                    i
                  );
                };
              })()),
              e)
            : ((l[i] = n), e);
        }),
        (r.prototype = t.widget.extend(
          h,
          { widgetEventPrefix: a ? h.widgetEventPrefix || i : i },
          l,
          { constructor: r, namespace: c, widgetName: i, widgetFullName: o }
        )),
        a
          ? (t.each(a._childConstructors, function(e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, r, i._proto);
            }),
            delete a._childConstructors)
          : s._childConstructors.push(r),
        t.widget.bridge(i, r);
    }),
    (t.widget.extend = function(i) {
      for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
        for (n in a[r])
          (o = a[r][n]),
            a[r].hasOwnProperty(n) &&
              o !== e &&
              (i[n] = t.isPlainObject(o)
                ? t.isPlainObject(i[n])
                  ? t.widget.extend({}, i[n], o)
                  : t.widget.extend({}, o)
                : o);
      return i;
    }),
    (t.widget.bridge = function(i, n) {
      var o = n.prototype.widgetFullName || i;
      t.fn[i] = function(a) {
        var r = "string" == typeof a,
          h = s.call(arguments, 1),
          l = this;
        return (
          (a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a),
          r
            ? this.each(function() {
                var s,
                  n = t.data(this, o);
                return n
                  ? t.isFunction(n[a]) && "_" !== a.charAt(0)
                    ? ((s = n[a].apply(n, h)),
                      s !== n && s !== e
                        ? ((l = s && s.jquery ? l.pushStack(s.get()) : s), !1)
                        : e)
                    : t.error(
                        "no such method '" +
                          a +
                          "' for " +
                          i +
                          " widget instance"
                      )
                  : t.error(
                      "cannot call methods on " +
                        i +
                        " prior to initialization; " +
                        "attempted to call method '" +
                        a +
                        "'"
                    );
              })
            : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this));
              }),
          l
        );
      };
    }),
    (t.Widget = function() {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function(e, s) {
        (s = t(s || this.defaultElement || this)[0]),
          (this.element = t(s)),
          (this.uuid = i++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            e
          )),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          s !== this &&
            (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function(t) {
                t.target === s && this.destroy();
              }
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: t.noop,
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function() {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetName)
            .removeData(this.widgetFullName)
            .removeData(t.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
              this.widgetFullName + "-disabled " + "ui-state-disabled"
            ),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: t.noop,
      widget: function() {
        return this.element;
      },
      option: function(i, s) {
        var n,
          o,
          a,
          r = i;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof i)
          if (((r = {}), (n = i.split(".")), (i = n.shift()), n.length)) {
            for (
              o = r[i] = t.widget.extend({}, this.options[i]), a = 0;
              n.length - 1 > a;
              a++
            )
              (o[n[a]] = o[n[a]] || {}), (o = o[n[a]]);
            if (((i = n.pop()), 1 === arguments.length))
              return o[i] === e ? null : o[i];
            o[i] = s;
          } else {
            if (1 === arguments.length)
              return this.options[i] === e ? null : this.options[i];
            r[i] = s;
          }
        return this._setOptions(r), this;
      },
      _setOptions: function(t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function(t, e) {
        return (
          (this.options[t] = e),
          "disabled" === t &&
            (this.widget()
              .toggleClass(
                this.widgetFullName + "-disabled ui-state-disabled",
                !!e
              )
              .attr("aria-disabled", e),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
          this
        );
      },
      enable: function() {
        return this._setOption("disabled", !1);
      },
      disable: function() {
        return this._setOption("disabled", !0);
      },
      _on: function(i, s, n) {
        var o,
          a = this;
        "boolean" != typeof i && ((n = s), (s = i), (i = !1)),
          n
            ? ((s = o = t(s)), (this.bindings = this.bindings.add(s)))
            : ((n = s), (s = this.element), (o = this.widget())),
          t.each(n, function(n, r) {
            function h() {
              return i ||
                (a.options.disabled !== !0 &&
                  !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof r ? a[r] : r).apply(a, arguments)
                : e;
            }
            "string" != typeof r &&
              (h.guid = r.guid = r.guid || h.guid || t.guid++);
            var l = n.match(/^(\w+)\s*(.*)$/),
              c = l[1] + a.eventNamespace,
              u = l[2];
            u ? o.delegate(u, c, h) : s.bind(c, h);
          });
      },
      _off: function(t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.unbind(e).undelegate(e);
      },
      _delay: function(t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function(e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function(e) {
              t(e.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function(e) {
              t(e.currentTarget).removeClass("ui-state-hover");
            }
          });
      },
      _focusable: function(e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function(e) {
              t(e.currentTarget).addClass("ui-state-focus");
            },
            focusout: function(e) {
              t(e.currentTarget).removeClass("ui-state-focus");
            }
          });
      },
      _trigger: function(e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (e === this.widgetEventPrefix
            ? e
            : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              a.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      }
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) {
      t.Widget.prototype["_" + e] = function(s, n, o) {
        "string" == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    });
})(jQuery);
(function(t) {
  var e = !1;
  t(document).mouseup(function() {
    e = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.10.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0
      },
      _mouseInit: function() {
        var e = this;
        this.element
          .bind("mousedown." + this.widgetName, function(t) {
            return e._mouseDown(t);
          })
          .bind("click." + this.widgetName, function(i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : undefined;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function() {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            t(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function(i) {
        if (!e) {
          this._mouseStarted && this._mouseUp(i), (this._mouseDownEvent = i);
          var s = this,
            n = 1 === i.which,
            a =
              "string" == typeof this.options.cancel && i.target.nodeName
                ? t(i.target).closest(this.options.cancel).length
                : !1;
          return n && !a && this._mouseCapture(i)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function() {
                  s.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(i) &&
              this._mouseDelayMet(i) &&
              ((this._mouseStarted = this._mouseStart(i) !== !1),
              !this._mouseStarted)
                ? (i.preventDefault(), !0)
                : (!0 ===
                    t.data(i.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      i.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t);
                  }),
                  t(document)
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  i.preventDefault(),
                  (e = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function(e) {
        return t.ui.ie &&
          (!document.documentMode || 9 > document.documentMode) &&
          !e.button
          ? this._mouseUp(e)
          : this._mouseStarted
          ? (this._mouseDrag(e), e.preventDefault())
          : (this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted =
                this._mouseStart(this._mouseDownEvent, e) !== !1),
              this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted);
      },
      _mouseUp: function(e) {
        return (
          t(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          !1
        );
      },
      _mouseDistanceMet: function(t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function() {
        return this.mouseDelayMet;
      },
      _mouseStart: function() {},
      _mouseDrag: function() {},
      _mouseStop: function() {},
      _mouseCapture: function() {
        return !0;
      }
    });
})(jQuery);
(function(t, e) {
  function i(t, e, i) {
    return [
      parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)
    ];
  }
  function s(e, i) {
    return parseInt(t.css(e, i), 10) || 0;
  }
  function n(e) {
    var i = e[0];
    return 9 === i.nodeType
      ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
      : t.isWindow(i)
      ? {
          width: e.width(),
          height: e.height(),
          offset: { top: e.scrollTop(), left: e.scrollLeft() }
        }
      : i.preventDefault
      ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
      : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
  }
  t.ui = t.ui || {};
  var a,
    o = Math.max,
    r = Math.abs,
    l = Math.round,
    h = /left|center|right/,
    c = /top|center|bottom/,
    u = /[\+\-]\d+(\.[\d]+)?%?/,
    d = /^\w+/,
    p = /%$/,
    f = t.fn.position;
  (t.position = {
    scrollbarWidth: function() {
      if (a !== e) return a;
      var i,
        s,
        n = t(
          "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
        ),
        o = n.children()[0];
      return (
        t("body").append(n),
        (i = o.offsetWidth),
        n.css("overflow", "scroll"),
        (s = o.offsetWidth),
        i === s && (s = n[0].clientWidth),
        n.remove(),
        (a = i - s)
      );
    },
    getScrollInfo: function(e) {
      var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
        s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
        n =
          "scroll" === i ||
          ("auto" === i && e.width < e.element[0].scrollWidth),
        a =
          "scroll" === s ||
          ("auto" === s && e.height < e.element[0].scrollHeight);
      return {
        width: a ? t.position.scrollbarWidth() : 0,
        height: n ? t.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function(e) {
      var i = t(e || window),
        s = t.isWindow(i[0]),
        n = !!i[0] && 9 === i[0].nodeType;
      return {
        element: i,
        isWindow: s,
        isDocument: n,
        offset: i.offset() || { left: 0, top: 0 },
        scrollLeft: i.scrollLeft(),
        scrollTop: i.scrollTop(),
        width: s ? i.width() : i.outerWidth(),
        height: s ? i.height() : i.outerHeight()
      };
    }
  }),
    (t.fn.position = function(e) {
      if (!e || !e.of) return f.apply(this, arguments);
      e = t.extend({}, e);
      var a,
        p,
        g,
        m,
        v,
        _,
        b = t(e.of),
        y = t.position.getWithinInfo(e.within),
        k = t.position.getScrollInfo(y),
        w = (e.collision || "flip").split(" "),
        D = {};
      return (
        (_ = n(b)),
        b[0].preventDefault && (e.at = "left top"),
        (p = _.width),
        (g = _.height),
        (m = _.offset),
        (v = t.extend({}, m)),
        t.each(["my", "at"], function() {
          var t,
            i,
            s = (e[this] || "").split(" ");
          1 === s.length &&
            (s = h.test(s[0])
              ? s.concat(["center"])
              : c.test(s[0])
              ? ["center"].concat(s)
              : ["center", "center"]),
            (s[0] = h.test(s[0]) ? s[0] : "center"),
            (s[1] = c.test(s[1]) ? s[1] : "center"),
            (t = u.exec(s[0])),
            (i = u.exec(s[1])),
            (D[this] = [t ? t[0] : 0, i ? i[0] : 0]),
            (e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]);
        }),
        1 === w.length && (w[1] = w[0]),
        "right" === e.at[0]
          ? (v.left += p)
          : "center" === e.at[0] && (v.left += p / 2),
        "bottom" === e.at[1]
          ? (v.top += g)
          : "center" === e.at[1] && (v.top += g / 2),
        (a = i(D.at, p, g)),
        (v.left += a[0]),
        (v.top += a[1]),
        this.each(function() {
          var n,
            h,
            c = t(this),
            u = c.outerWidth(),
            d = c.outerHeight(),
            f = s(this, "marginLeft"),
            _ = s(this, "marginTop"),
            x = u + f + s(this, "marginRight") + k.width,
            C = d + _ + s(this, "marginBottom") + k.height,
            M = t.extend({}, v),
            T = i(D.my, c.outerWidth(), c.outerHeight());
          "right" === e.my[0]
            ? (M.left -= u)
            : "center" === e.my[0] && (M.left -= u / 2),
            "bottom" === e.my[1]
              ? (M.top -= d)
              : "center" === e.my[1] && (M.top -= d / 2),
            (M.left += T[0]),
            (M.top += T[1]),
            t.support.offsetFractions ||
              ((M.left = l(M.left)), (M.top = l(M.top))),
            (n = { marginLeft: f, marginTop: _ }),
            t.each(["left", "top"], function(i, s) {
              t.ui.position[w[i]] &&
                t.ui.position[w[i]][s](M, {
                  targetWidth: p,
                  targetHeight: g,
                  elemWidth: u,
                  elemHeight: d,
                  collisionPosition: n,
                  collisionWidth: x,
                  collisionHeight: C,
                  offset: [a[0] + T[0], a[1] + T[1]],
                  my: e.my,
                  at: e.at,
                  within: y,
                  elem: c
                });
            }),
            e.using &&
              (h = function(t) {
                var i = m.left - M.left,
                  s = i + p - u,
                  n = m.top - M.top,
                  a = n + g - d,
                  l = {
                    target: {
                      element: b,
                      left: m.left,
                      top: m.top,
                      width: p,
                      height: g
                    },
                    element: {
                      element: c,
                      left: M.left,
                      top: M.top,
                      width: u,
                      height: d
                    },
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                  };
                u > p && p > r(i + s) && (l.horizontal = "center"),
                  d > g && g > r(n + a) && (l.vertical = "middle"),
                  (l.important =
                    o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical"),
                  e.using.call(this, t, l);
              }),
            c.offset(t.extend(M, { using: h }));
        })
      );
    }),
    (t.ui.position = {
      fit: {
        left: function(t, e) {
          var i,
            s = e.within,
            n = s.isWindow ? s.scrollLeft : s.offset.left,
            a = s.width,
            r = t.left - e.collisionPosition.marginLeft,
            l = n - r,
            h = r + e.collisionWidth - a - n;
          e.collisionWidth > a
            ? l > 0 && 0 >= h
              ? ((i = t.left + l + e.collisionWidth - a - n), (t.left += l - i))
              : (t.left =
                  h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n)
            : l > 0
            ? (t.left += l)
            : h > 0
            ? (t.left -= h)
            : (t.left = o(t.left - r, t.left));
        },
        top: function(t, e) {
          var i,
            s = e.within,
            n = s.isWindow ? s.scrollTop : s.offset.top,
            a = e.within.height,
            r = t.top - e.collisionPosition.marginTop,
            l = n - r,
            h = r + e.collisionHeight - a - n;
          e.collisionHeight > a
            ? l > 0 && 0 >= h
              ? ((i = t.top + l + e.collisionHeight - a - n), (t.top += l - i))
              : (t.top =
                  h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n)
            : l > 0
            ? (t.top += l)
            : h > 0
            ? (t.top -= h)
            : (t.top = o(t.top - r, t.top));
        }
      },
      flip: {
        left: function(t, e) {
          var i,
            s,
            n = e.within,
            a = n.offset.left + n.scrollLeft,
            o = n.width,
            l = n.isWindow ? n.scrollLeft : n.offset.left,
            h = t.left - e.collisionPosition.marginLeft,
            c = h - l,
            u = h + e.collisionWidth - o - l,
            d =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            p =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            f = -2 * e.offset[0];
          0 > c
            ? ((i = t.left + d + p + f + e.collisionWidth - o - a),
              (0 > i || r(c) > i) && (t.left += d + p + f))
            : u > 0 &&
              ((s = t.left - e.collisionPosition.marginLeft + d + p + f - l),
              (s > 0 || u > r(s)) && (t.left += d + p + f));
        },
        top: function(t, e) {
          var i,
            s,
            n = e.within,
            a = n.offset.top + n.scrollTop,
            o = n.height,
            l = n.isWindow ? n.scrollTop : n.offset.top,
            h = t.top - e.collisionPosition.marginTop,
            c = h - l,
            u = h + e.collisionHeight - o - l,
            d = "top" === e.my[1],
            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
            f =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            g = -2 * e.offset[1];
          0 > c
            ? ((s = t.top + p + f + g + e.collisionHeight - o - a),
              t.top + p + f + g > c &&
                (0 > s || r(c) > s) &&
                (t.top += p + f + g))
            : u > 0 &&
              ((i = t.top - e.collisionPosition.marginTop + p + f + g - l),
              t.top + p + f + g > u &&
                (i > 0 || u > r(i)) &&
                (t.top += p + f + g));
        }
      },
      flipfit: {
        left: function() {
          t.ui.position.flip.left.apply(this, arguments),
            t.ui.position.fit.left.apply(this, arguments);
        },
        top: function() {
          t.ui.position.flip.top.apply(this, arguments),
            t.ui.position.fit.top.apply(this, arguments);
        }
      }
    }),
    (function() {
      var e,
        i,
        s,
        n,
        a,
        o = document.getElementsByTagName("body")[0],
        r = document.createElement("div");
      (e = document.createElement(o ? "div" : "body")),
        (s = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none"
        }),
        o &&
          t.extend(s, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
          });
      for (a in s) e.style[a] = s[a];
      e.appendChild(r),
        (i = o || document.documentElement),
        i.insertBefore(e, i.firstChild),
        (r.style.cssText = "position: absolute; left: 10.7432222px;"),
        (n = t(r).offset().left),
        (t.support.offsetFractions = n > 10 && 11 > n),
        (e.innerHTML = ""),
        i.removeChild(e);
    })();
})(jQuery);
(function(e) {
  var t,
    i = "ui-button ui-widget ui-state-default ui-corner-all",
    n =
      "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    s = function() {
      var t = e(this);
      setTimeout(function() {
        t.find(":ui-button").button("refresh");
      }, 1);
    },
    a = function(t) {
      var i = t.name,
        n = t.form,
        s = e([]);
      return (
        i &&
          ((i = i.replace(/'/g, "\\'")),
          (s = n
            ? e(n).find("[name='" + i + "']")
            : e("[name='" + i + "']", t.ownerDocument).filter(function() {
                return !this.form;
              }))),
        s
      );
    };
  e.widget("ui.button", {
    version: "1.10.4",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: { primary: null, secondary: null }
    },
    _create: function() {
      this.element
        .closest("form")
        .unbind("reset" + this.eventNamespace)
        .bind("reset" + this.eventNamespace, s),
        "boolean" != typeof this.options.disabled
          ? (this.options.disabled = !!this.element.prop("disabled"))
          : this.element.prop("disabled", this.options.disabled),
        this._determineButtonType(),
        (this.hasTitle = !!this.buttonElement.attr("title"));
      var n = this,
        o = this.options,
        r = "checkbox" === this.type || "radio" === this.type,
        h = r ? "" : "ui-state-active";
      null === o.label &&
        (o.label =
          "input" === this.type
            ? this.buttonElement.val()
            : this.buttonElement.html()),
        this._hoverable(this.buttonElement),
        this.buttonElement
          .addClass(i)
          .attr("role", "button")
          .bind("mouseenter" + this.eventNamespace, function() {
            o.disabled || (this === t && e(this).addClass("ui-state-active"));
          })
          .bind("mouseleave" + this.eventNamespace, function() {
            o.disabled || e(this).removeClass(h);
          })
          .bind("click" + this.eventNamespace, function(e) {
            o.disabled && (e.preventDefault(), e.stopImmediatePropagation());
          }),
        this._on({
          focus: function() {
            this.buttonElement.addClass("ui-state-focus");
          },
          blur: function() {
            this.buttonElement.removeClass("ui-state-focus");
          }
        }),
        r &&
          this.element.bind("change" + this.eventNamespace, function() {
            n.refresh();
          }),
        "checkbox" === this.type
          ? this.buttonElement.bind("click" + this.eventNamespace, function() {
              return o.disabled ? !1 : undefined;
            })
          : "radio" === this.type
          ? this.buttonElement.bind("click" + this.eventNamespace, function() {
              if (o.disabled) return !1;
              e(this).addClass("ui-state-active"),
                n.buttonElement.attr("aria-pressed", "true");
              var t = n.element[0];
              a(t)
                .not(t)
                .map(function() {
                  return e(this).button("widget")[0];
                })
                .removeClass("ui-state-active")
                .attr("aria-pressed", "false");
            })
          : (this.buttonElement
              .bind("mousedown" + this.eventNamespace, function() {
                return o.disabled
                  ? !1
                  : (e(this).addClass("ui-state-active"),
                    (t = this),
                    n.document.one("mouseup", function() {
                      t = null;
                    }),
                    undefined);
              })
              .bind("mouseup" + this.eventNamespace, function() {
                return o.disabled
                  ? !1
                  : (e(this).removeClass("ui-state-active"), undefined);
              })
              .bind("keydown" + this.eventNamespace, function(t) {
                return o.disabled
                  ? !1
                  : ((t.keyCode === e.ui.keyCode.SPACE ||
                      t.keyCode === e.ui.keyCode.ENTER) &&
                      e(this).addClass("ui-state-active"),
                    undefined);
              })
              .bind(
                "keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                function() {
                  e(this).removeClass("ui-state-active");
                }
              ),
            this.buttonElement.is("a") &&
              this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click();
              })),
        this._setOption("disabled", o.disabled),
        this._resetButton();
    },
    _determineButtonType: function() {
      var e, t, i;
      (this.type = this.element.is("[type=checkbox]")
        ? "checkbox"
        : this.element.is("[type=radio]")
        ? "radio"
        : this.element.is("input")
        ? "input"
        : "button"),
        "checkbox" === this.type || "radio" === this.type
          ? ((e = this.element.parents().last()),
            (t = "label[for='" + this.element.attr("id") + "']"),
            (this.buttonElement = e.find(t)),
            this.buttonElement.length ||
              ((e = e.length ? e.siblings() : this.element.siblings()),
              (this.buttonElement = e.filter(t)),
              this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            (i = this.element.is(":checked")),
            i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", i))
          : (this.buttonElement = this.element);
    },
    widget: function() {
      return this.buttonElement;
    },
    _destroy: function() {
      this.element.removeClass("ui-helper-hidden-accessible"),
        this.buttonElement
          .removeClass(i + " ui-state-active " + n)
          .removeAttr("role")
          .removeAttr("aria-pressed")
          .html(this.buttonElement.find(".ui-button-text").html()),
        this.hasTitle || this.buttonElement.removeAttr("title");
    },
    _setOption: function(e, t) {
      return (
        this._super(e, t),
        "disabled" === e
          ? (this.element.prop("disabled", !!t),
            t && this.buttonElement.removeClass("ui-state-focus"),
            undefined)
          : (this._resetButton(), undefined)
      );
    },
    refresh: function() {
      var t = this.element.is("input, button")
        ? this.element.is(":disabled")
        : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOption("disabled", t),
        "radio" === this.type
          ? a(this.element[0]).each(function() {
              e(this).is(":checked")
                ? e(this)
                    .button("widget")
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : e(this)
                    .button("widget")
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false");
            })
          : "checkbox" === this.type &&
            (this.element.is(":checked")
              ? this.buttonElement
                  .addClass("ui-state-active")
                  .attr("aria-pressed", "true")
              : this.buttonElement
                  .removeClass("ui-state-active")
                  .attr("aria-pressed", "false"));
    },
    _resetButton: function() {
      if ("input" === this.type)
        return (
          this.options.label && this.element.val(this.options.label), undefined
        );
      var t = this.buttonElement.removeClass(n),
        i = e("<span></span>", this.document[0])
          .addClass("ui-button-text")
          .html(this.options.label)
          .appendTo(t.empty())
          .text(),
        s = this.options.icons,
        a = s.primary && s.secondary,
        o = [];
      s.primary || s.secondary
        ? (this.options.text &&
            o.push(
              "ui-button-text-icon" +
                (a ? "s" : s.primary ? "-primary" : "-secondary")
            ),
          s.primary &&
            t.prepend(
              "<span class='ui-button-icon-primary ui-icon " +
                s.primary +
                "'></span>"
            ),
          s.secondary &&
            t.append(
              "<span class='ui-button-icon-secondary ui-icon " +
                s.secondary +
                "'></span>"
            ),
          this.options.text ||
            (o.push(a ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || t.attr("title", e.trim(i))))
        : o.push("ui-button-text-only"),
        t.addClass(o.join(" "));
    }
  }),
    e.widget("ui.buttonset", {
      version: "1.10.4",
      options: {
        items:
          "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
      },
      _create: function() {
        this.element.addClass("ui-buttonset");
      },
      _init: function() {
        this.refresh();
      },
      _setOption: function(e, t) {
        "disabled" === e && this.buttons.button("option", e, t),
          this._super(e, t);
      },
      refresh: function() {
        var t = "rtl" === this.element.css("direction");
        this.buttons = this.element
          .find(this.options.items)
          .filter(":ui-button")
          .button("refresh")
          .end()
          .not(":ui-button")
          .button()
          .end()
          .map(function() {
            return e(this).button("widget")[0];
          })
          .removeClass("ui-corner-all ui-corner-left ui-corner-right")
          .filter(":first")
          .addClass(t ? "ui-corner-right" : "ui-corner-left")
          .end()
          .filter(":last")
          .addClass(t ? "ui-corner-left" : "ui-corner-right")
          .end()
          .end();
      },
      _destroy: function() {
        this.element.removeClass("ui-buttonset"),
          this.buttons
            .map(function() {
              return e(this).button("widget")[0];
            })
            .removeClass("ui-corner-left ui-corner-right")
            .end()
            .button("destroy");
      }
    });
})(jQuery);
(function(e, t) {
  function i() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }),
      e.extend(this._defaults, this.regional[""]),
      (this.dpDiv = a(
        e(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function a(t) {
    var i =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .delegate(i, "mouseout", function() {
        e(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            e(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            e(this).removeClass("ui-datepicker-next-hover");
      })
      .delegate(i, "mouseover", function() {
        e.datepicker._isDisabledDatepicker(
          n.inline ? t.parent()[0] : n.input[0]
        ) ||
          (e(this)
            .parents(".ui-datepicker-calendar")
            .find("a")
            .removeClass("ui-state-hover"),
          e(this).addClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            e(this).addClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            e(this).addClass("ui-datepicker-next-hover"));
      });
  }
  function s(t, i) {
    e.extend(t, i);
    for (var a in i) null == i[a] && (t[a] = i[a]);
    return t;
  }
  e.extend(e.ui, { datepicker: { version: "1.10.4" } });
  var n,
    r = "datepicker";
  e.extend(i.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv;
    },
    setDefaults: function(e) {
      return s(this._defaults, e || {}), this;
    },
    _attachDatepicker: function(t, i) {
      var a, s, n;
      (a = t.nodeName.toLowerCase()),
        (s = "div" === a || "span" === a),
        t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
        (n = this._newInst(e(t), s)),
        (n.settings = e.extend({}, i || {})),
        "input" === a
          ? this._connectDatepicker(t, n)
          : s && this._inlineDatepicker(t, n);
    },
    _newInst: function(t, i) {
      var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
          ? a(
              e(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv
      };
    },
    _connectDatepicker: function(t, i) {
      var a = e(t);
      (i.append = e([])),
        (i.trigger = e([])),
        a.hasClass(this.markerClassName) ||
          (this._attachments(a, i),
          a
            .addClass(this.markerClassName)
            .keydown(this._doKeyDown)
            .keypress(this._doKeyPress)
            .keyup(this._doKeyUp),
          this._autoSize(i),
          e.data(t, r, i),
          i.settings.disabled && this._disableDatepicker(t));
    },
    _attachments: function(t, i) {
      var a,
        s,
        n,
        r = this._get(i, "appendText"),
        o = this._get(i, "isRTL");
      i.append && i.append.remove(),
        r &&
          ((i.append = e(
            "<span class='" + this._appendClass + "'>" + r + "</span>"
          )),
          t[o ? "before" : "after"](i.append)),
        t.unbind("focus", this._showDatepicker),
        i.trigger && i.trigger.remove(),
        (a = this._get(i, "showOn")),
        ("focus" === a || "both" === a) && t.focus(this._showDatepicker),
        ("button" === a || "both" === a) &&
          ((s = this._get(i, "buttonText")),
          (n = this._get(i, "buttonImage")),
          (i.trigger = e(
            this._get(i, "buttonImageOnly")
              ? e("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: n, alt: s, title: s })
              : e("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(n ? e("<img/>").attr({ src: n, alt: s, title: s }) : s)
          )),
          t[o ? "before" : "after"](i.trigger),
          i.trigger.click(function() {
            return (
              e.datepicker._datepickerShowing &&
              e.datepicker._lastInput === t[0]
                ? e.datepicker._hideDatepicker()
                : e.datepicker._datepickerShowing &&
                  e.datepicker._lastInput !== t[0]
                ? (e.datepicker._hideDatepicker(),
                  e.datepicker._showDatepicker(t[0]))
                : e.datepicker._showDatepicker(t[0]),
              !1
            );
          }));
    },
    _autoSize: function(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
          i,
          a,
          s,
          n = new Date(2009, 11, 20),
          r = this._get(e, "dateFormat");
        r.match(/[DM]/) &&
          ((t = function(e) {
            for (i = 0, a = 0, s = 0; e.length > s; s++)
              e[s].length > i && ((i = e[s].length), (a = s));
            return a;
          }),
          n.setMonth(
            t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))
          ),
          n.setDate(
            t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) +
              20 -
              n.getDay()
          )),
          e.input.attr("size", this._formatDate(e, n).length);
      }
    },
    _inlineDatepicker: function(t, i) {
      var a = e(t);
      a.hasClass(this.markerClassName) ||
        (a.addClass(this.markerClassName).append(i.dpDiv),
        e.data(t, r, i),
        this._setDate(i, this._getDefaultDate(i), !0),
        this._updateDatepicker(i),
        this._updateAlternate(i),
        i.settings.disabled && this._disableDatepicker(t),
        i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function(t, i, a, n, o) {
      var u,
        c,
        h,
        l,
        d,
        p = this._dialogInst;
      return (
        p ||
          ((this.uuid += 1),
          (u = "dp" + this.uuid),
          (this._dialogInput = e(
            "<input type='text' id='" +
              u +
              "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.keydown(this._doKeyDown),
          e("body").append(this._dialogInput),
          (p = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (p.settings = {}),
          e.data(this._dialogInput[0], r, p)),
        s(p.settings, n || {}),
        (i = i && i.constructor === Date ? this._formatDate(p, i) : i),
        this._dialogInput.val(i),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((c = document.documentElement.clientWidth),
          (h = document.documentElement.clientHeight),
          (l = document.documentElement.scrollLeft || document.body.scrollLeft),
          (d = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [c / 2 - 100 + l, h / 2 - 150 + d])),
        this._dialogInput
          .css("left", this._pos[0] + 20 + "px")
          .css("top", this._pos[1] + "px"),
        (p.settings.onSelect = a),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        e.blockUI && e.blockUI(this.dpDiv),
        e.data(this._dialogInput[0], r, p),
        this
      );
    },
    _destroyDatepicker: function(t) {
      var i,
        a = e(t),
        s = e.data(t, r);
      a.hasClass(this.markerClassName) &&
        ((i = t.nodeName.toLowerCase()),
        e.removeData(t, r),
        "input" === i
          ? (s.append.remove(),
            s.trigger.remove(),
            a
              .removeClass(this.markerClassName)
              .unbind("focus", this._showDatepicker)
              .unbind("keydown", this._doKeyDown)
              .unbind("keypress", this._doKeyPress)
              .unbind("keyup", this._doKeyUp))
          : ("div" === i || "span" === i) &&
            a.removeClass(this.markerClassName).empty());
    },
    _enableDatepicker: function(t) {
      var i,
        a,
        s = e(t),
        n = e.data(t, r);
      s.hasClass(this.markerClassName) &&
        ((i = t.nodeName.toLowerCase()),
        "input" === i
          ? ((t.disabled = !1),
            n.trigger
              .filter("button")
              .each(function() {
                this.disabled = !1;
              })
              .end()
              .filter("img")
              .css({ opacity: "1.0", cursor: "" }))
          : ("div" === i || "span" === i) &&
            ((a = s.children("." + this._inlineClass)),
            a.children().removeClass("ui-state-disabled"),
            a
              .find("select.ui-datepicker-month, select.ui-datepicker-year")
              .prop("disabled", !1)),
        (this._disabledInputs = e.map(this._disabledInputs, function(e) {
          return e === t ? null : e;
        })));
    },
    _disableDatepicker: function(t) {
      var i,
        a,
        s = e(t),
        n = e.data(t, r);
      s.hasClass(this.markerClassName) &&
        ((i = t.nodeName.toLowerCase()),
        "input" === i
          ? ((t.disabled = !0),
            n.trigger
              .filter("button")
              .each(function() {
                this.disabled = !0;
              })
              .end()
              .filter("img")
              .css({ opacity: "0.5", cursor: "default" }))
          : ("div" === i || "span" === i) &&
            ((a = s.children("." + this._inlineClass)),
            a.children().addClass("ui-state-disabled"),
            a
              .find("select.ui-datepicker-month, select.ui-datepicker-year")
              .prop("disabled", !0)),
        (this._disabledInputs = e.map(this._disabledInputs, function(e) {
          return e === t ? null : e;
        })),
        (this._disabledInputs[this._disabledInputs.length] = t));
    },
    _isDisabledDatepicker: function(e) {
      if (!e) return !1;
      for (var t = 0; this._disabledInputs.length > t; t++)
        if (this._disabledInputs[t] === e) return !0;
      return !1;
    },
    _getInst: function(t) {
      try {
        return e.data(t, r);
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function(i, a, n) {
      var r,
        o,
        u,
        c,
        h = this._getInst(i);
      return 2 === arguments.length && "string" == typeof a
        ? "defaults" === a
          ? e.extend({}, e.datepicker._defaults)
          : h
          ? "all" === a
            ? e.extend({}, h.settings)
            : this._get(h, a)
          : null
        : ((r = a || {}),
          "string" == typeof a && ((r = {}), (r[a] = n)),
          h &&
            (this._curInst === h && this._hideDatepicker(),
            (o = this._getDateDatepicker(i, !0)),
            (u = this._getMinMaxDate(h, "min")),
            (c = this._getMinMaxDate(h, "max")),
            s(h.settings, r),
            null !== u &&
              r.dateFormat !== t &&
              r.minDate === t &&
              (h.settings.minDate = this._formatDate(h, u)),
            null !== c &&
              r.dateFormat !== t &&
              r.maxDate === t &&
              (h.settings.maxDate = this._formatDate(h, c)),
            "disabled" in r &&
              (r.disabled
                ? this._disableDatepicker(i)
                : this._enableDatepicker(i)),
            this._attachments(e(i), h),
            this._autoSize(h),
            this._setDate(h, o),
            this._updateAlternate(h),
            this._updateDatepicker(h)),
          t);
    },
    _changeDatepicker: function(e, t, i) {
      this._optionDatepicker(e, t, i);
    },
    _refreshDatepicker: function(e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function(e, t) {
      var i = this._getInst(e);
      i &&
        (this._setDate(i, t),
        this._updateDatepicker(i),
        this._updateAlternate(i));
    },
    _getDateDatepicker: function(e, t) {
      var i = this._getInst(e);
      return (
        i && !i.inline && this._setDateFromField(i, t),
        i ? this._getDate(i) : null
      );
    },
    _doKeyDown: function(t) {
      var i,
        a,
        s,
        n = e.datepicker._getInst(t.target),
        r = !0,
        o = n.dpDiv.is(".ui-datepicker-rtl");
      if (((n._keyEvent = !0), e.datepicker._datepickerShowing))
        switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker(), (r = !1);
            break;
          case 13:
            return (
              (s = e(
                "td." +
                  e.datepicker._dayOverClass +
                  ":not(." +
                  e.datepicker._currentClass +
                  ")",
                n.dpDiv
              )),
              s[0] &&
                e.datepicker._selectDay(
                  t.target,
                  n.selectedMonth,
                  n.selectedYear,
                  s[0]
                ),
              (i = e.datepicker._get(n, "onSelect")),
              i
                ? ((a = e.datepicker._formatDate(n)),
                  i.apply(n.input ? n.input[0] : null, [a, n]))
                : e.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            e.datepicker._hideDatepicker();
            break;
          case 33:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? -e.datepicker._get(n, "stepBigMonths")
                : -e.datepicker._get(n, "stepMonths"),
              "M"
            );
            break;
          case 34:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? +e.datepicker._get(n, "stepBigMonths")
                : +e.datepicker._get(n, "stepMonths"),
              "M"
            );
            break;
          case 35:
            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
              (r = t.ctrlKey || t.metaKey);
            break;
          case 36:
            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
              (r = t.ctrlKey || t.metaKey);
            break;
          case 37:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
              (r = t.ctrlKey || t.metaKey),
              t.originalEvent.altKey &&
                e.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? -e.datepicker._get(n, "stepBigMonths")
                    : -e.datepicker._get(n, "stepMonths"),
                  "M"
                );
            break;
          case 38:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, -7, "D"),
              (r = t.ctrlKey || t.metaKey);
            break;
          case 39:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
              (r = t.ctrlKey || t.metaKey),
              t.originalEvent.altKey &&
                e.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? +e.datepicker._get(n, "stepBigMonths")
                    : +e.datepicker._get(n, "stepMonths"),
                  "M"
                );
            break;
          case 40:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, 7, "D"),
              (r = t.ctrlKey || t.metaKey);
            break;
          default:
            r = !1;
        }
      else
        36 === t.keyCode && t.ctrlKey
          ? e.datepicker._showDatepicker(this)
          : (r = !1);
      r && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function(i) {
      var a,
        s,
        n = e.datepicker._getInst(i.target);
      return e.datepicker._get(n, "constrainInput")
        ? ((a = e.datepicker._possibleChars(
            e.datepicker._get(n, "dateFormat")
          )),
          (s = String.fromCharCode(
            null == i.charCode ? i.keyCode : i.charCode
          )),
          i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1)
        : t;
    },
    _doKeyUp: function(t) {
      var i,
        a = e.datepicker._getInst(t.target);
      if (a.input.val() !== a.lastVal)
        try {
          (i = e.datepicker.parseDate(
            e.datepicker._get(a, "dateFormat"),
            a.input ? a.input.val() : null,
            e.datepicker._getFormatConfig(a)
          )),
            i &&
              (e.datepicker._setDateFromField(a),
              e.datepicker._updateAlternate(a),
              e.datepicker._updateDatepicker(a));
        } catch (s) {}
      return !0;
    },
    _showDatepicker: function(t) {
      if (
        ((t = t.target || t),
        "input" !== t.nodeName.toLowerCase() &&
          (t = e("input", t.parentNode)[0]),
        !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t)
      ) {
        var i, a, n, r, o, u, c;
        (i = e.datepicker._getInst(t)),
          e.datepicker._curInst &&
            e.datepicker._curInst !== i &&
            (e.datepicker._curInst.dpDiv.stop(!0, !0),
            i &&
              e.datepicker._datepickerShowing &&
              e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
          (a = e.datepicker._get(i, "beforeShow")),
          (n = a ? a.apply(t, [t, i]) : {}),
          n !== !1 &&
            (s(i.settings, n),
            (i.lastVal = null),
            (e.datepicker._lastInput = t),
            e.datepicker._setDateFromField(i),
            e.datepicker._inDialog && (t.value = ""),
            e.datepicker._pos ||
              ((e.datepicker._pos = e.datepicker._findPos(t)),
              (e.datepicker._pos[1] += t.offsetHeight)),
            (r = !1),
            e(t)
              .parents()
              .each(function() {
                return (r |= "fixed" === e(this).css("position")), !r;
              }),
            (o = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }),
            (e.datepicker._pos = null),
            i.dpDiv.empty(),
            i.dpDiv.css({
              position: "absolute",
              display: "block",
              top: "-1000px"
            }),
            e.datepicker._updateDatepicker(i),
            (o = e.datepicker._checkOffset(i, o, r)),
            i.dpDiv.css({
              position:
                e.datepicker._inDialog && e.blockUI
                  ? "static"
                  : r
                  ? "fixed"
                  : "absolute",
              display: "none",
              left: o.left + "px",
              top: o.top + "px"
            }),
            i.inline ||
              ((u = e.datepicker._get(i, "showAnim")),
              (c = e.datepicker._get(i, "duration")),
              i.dpDiv.zIndex(e(t).zIndex() + 1),
              (e.datepicker._datepickerShowing = !0),
              e.effects && e.effects.effect[u]
                ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c)
                : i.dpDiv[u || "show"](u ? c : null),
              e.datepicker._shouldFocusInput(i) && i.input.focus(),
              (e.datepicker._curInst = i)));
      }
    },
    _updateDatepicker: function(t) {
      (this.maxRows = 4),
        (n = t),
        t.dpDiv.empty().append(this._generateHTML(t)),
        this._attachHandlers(t),
        t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var i,
        a = this._getNumberOfMonths(t),
        s = a[1],
        r = 17;
      t.dpDiv
        .removeClass(
          "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
        )
        .width(""),
        s > 1 &&
          t.dpDiv
            .addClass("ui-datepicker-multi-" + s)
            .css("width", r * s + "em"),
        t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"](
          "ui-datepicker-multi"
        ),
        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"](
          "ui-datepicker-rtl"
        ),
        t === e.datepicker._curInst &&
          e.datepicker._datepickerShowing &&
          e.datepicker._shouldFocusInput(t) &&
          t.input.focus(),
        t.yearshtml &&
          ((i = t.yearshtml),
          setTimeout(function() {
            i === t.yearshtml &&
              t.yearshtml &&
              t.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(t.yearshtml),
              (i = t.yearshtml = null);
          }, 0));
    },
    _shouldFocusInput: function(e) {
      return (
        e.input &&
        e.input.is(":visible") &&
        !e.input.is(":disabled") &&
        !e.input.is(":focus")
      );
    },
    _checkOffset: function(t, i, a) {
      var s = t.dpDiv.outerWidth(),
        n = t.dpDiv.outerHeight(),
        r = t.input ? t.input.outerWidth() : 0,
        o = t.input ? t.input.outerHeight() : 0,
        u =
          document.documentElement.clientWidth +
          (a ? 0 : e(document).scrollLeft()),
        c =
          document.documentElement.clientHeight +
          (a ? 0 : e(document).scrollTop());
      return (
        (i.left -= this._get(t, "isRTL") ? s - r : 0),
        (i.left -=
          a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0),
        (i.top -=
          a && i.top === t.input.offset().top + o
            ? e(document).scrollTop()
            : 0),
        (i.left -= Math.min(
          i.left,
          i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0
        )),
        (i.top -= Math.min(
          i.top,
          i.top + n > c && c > n ? Math.abs(n + o) : 0
        )),
        i
      );
    },
    _findPos: function(t) {
      for (
        var i, a = this._getInst(t), s = this._get(a, "isRTL");
        t &&
        ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));

      )
        t = t[s ? "previousSibling" : "nextSibling"];
      return (i = e(t).offset()), [i.left, i.top];
    },
    _hideDatepicker: function(t) {
      var i,
        a,
        s,
        n,
        o = this._curInst;
      !o ||
        (t && o !== e.data(t, r)) ||
        (this._datepickerShowing &&
          ((i = this._get(o, "showAnim")),
          (a = this._get(o, "duration")),
          (s = function() {
            e.datepicker._tidyDialog(o);
          }),
          e.effects && (e.effects.effect[i] || e.effects[i])
            ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s)
            : o.dpDiv[
                "slideDown" === i
                  ? "slideUp"
                  : "fadeIn" === i
                  ? "fadeOut"
                  : "hide"
              ](i ? a : null, s),
          i || s(),
          (this._datepickerShowing = !1),
          (n = this._get(o, "onClose")),
          n &&
            n.apply(o.input ? o.input[0] : null, [
              o.input ? o.input.val() : "",
              o
            ]),
          (this._lastInput = null),
          this._inDialog &&
            (this._dialogInput.css({
              position: "absolute",
              left: "0",
              top: "-100px"
            }),
            e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))),
          (this._inDialog = !1)));
    },
    _tidyDialog: function(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function(t) {
      if (e.datepicker._curInst) {
        var i = e(t.target),
          a = e.datepicker._getInst(i[0]);
        ((i[0].id !== e.datepicker._mainDivId &&
          0 === i.parents("#" + e.datepicker._mainDivId).length &&
          !i.hasClass(e.datepicker.markerClassName) &&
          !i.closest("." + e.datepicker._triggerClass).length &&
          e.datepicker._datepickerShowing &&
          (!e.datepicker._inDialog || !e.blockUI)) ||
          (i.hasClass(e.datepicker.markerClassName) &&
            e.datepicker._curInst !== a)) &&
          e.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function(t, i, a) {
      var s = e(t),
        n = this._getInst(s[0]);
      this._isDisabledDatepicker(s[0]) ||
        (this._adjustInstDate(
          n,
          i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0),
          a
        ),
        this._updateDatepicker(n));
    },
    _gotoToday: function(t) {
      var i,
        a = e(t),
        s = this._getInst(a[0]);
      this._get(s, "gotoCurrent") && s.currentDay
        ? ((s.selectedDay = s.currentDay),
          (s.drawMonth = s.selectedMonth = s.currentMonth),
          (s.drawYear = s.selectedYear = s.currentYear))
        : ((i = new Date()),
          (s.selectedDay = i.getDate()),
          (s.drawMonth = s.selectedMonth = i.getMonth()),
          (s.drawYear = s.selectedYear = i.getFullYear())),
        this._notifyChange(s),
        this._adjustDate(a);
    },
    _selectMonthYear: function(t, i, a) {
      var s = e(t),
        n = this._getInst(s[0]);
      (n["selected" + ("M" === a ? "Month" : "Year")] = n[
        "draw" + ("M" === a ? "Month" : "Year")
      ] = parseInt(i.options[i.selectedIndex].value, 10)),
        this._notifyChange(n),
        this._adjustDate(s);
    },
    _selectDay: function(t, i, a, s) {
      var n,
        r = e(t);
      e(s).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(r[0]) ||
        ((n = this._getInst(r[0])),
        (n.selectedDay = n.currentDay = e("a", s).html()),
        (n.selectedMonth = n.currentMonth = i),
        (n.selectedYear = n.currentYear = a),
        this._selectDate(
          t,
          this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)
        ));
    },
    _clearDate: function(t) {
      var i = e(t);
      this._selectDate(i, "");
    },
    _selectDate: function(t, i) {
      var a,
        s = e(t),
        n = this._getInst(s[0]);
      (i = null != i ? i : this._formatDate(n)),
        n.input && n.input.val(i),
        this._updateAlternate(n),
        (a = this._get(n, "onSelect")),
        a
          ? a.apply(n.input ? n.input[0] : null, [i, n])
          : n.input && n.input.trigger("change"),
        n.inline
          ? this._updateDatepicker(n)
          : (this._hideDatepicker(),
            (this._lastInput = n.input[0]),
            "object" != typeof n.input[0] && n.input.focus(),
            (this._lastInput = null));
    },
    _updateAlternate: function(t) {
      var i,
        a,
        s,
        n = this._get(t, "altField");
      n &&
        ((i = this._get(t, "altFormat") || this._get(t, "dateFormat")),
        (a = this._getDate(t)),
        (s = this.formatDate(i, a, this._getFormatConfig(t))),
        e(n).each(function() {
          e(this).val(s);
        }));
    },
    noWeekends: function(e) {
      var t = e.getDay();
      return [t > 0 && 6 > t, ""];
    },
    iso8601Week: function(e) {
      var t,
        i = new Date(e.getTime());
      return (
        i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
        (t = i.getTime()),
        i.setMonth(0),
        i.setDate(1),
        Math.floor(Math.round((t - i) / 864e5) / 7) + 1
      );
    },
    parseDate: function(i, a, s) {
      if (null == i || null == a) throw "Invalid arguments";
      if (((a = "object" == typeof a ? "" + a : a + ""), "" === a)) return null;
      var n,
        r,
        o,
        u,
        c = 0,
        h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        l =
          "string" != typeof h
            ? h
            : (new Date().getFullYear() % 100) + parseInt(h, 10),
        d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        p = (s ? s.dayNames : null) || this._defaults.dayNames,
        g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        m = (s ? s.monthNames : null) || this._defaults.monthNames,
        f = -1,
        _ = -1,
        v = -1,
        k = -1,
        y = !1,
        b = function(e) {
          var t = i.length > n + 1 && i.charAt(n + 1) === e;
          return t && n++, t;
        },
        D = function(e) {
          var t = b(e),
            i =
              "@" === e
                ? 14
                : "!" === e
                ? 20
                : "y" === e && t
                ? 4
                : "o" === e
                ? 3
                : 2,
            s = RegExp("^\\d{1," + i + "}"),
            n = a.substring(c).match(s);
          if (!n) throw "Missing number at position " + c;
          return (c += n[0].length), parseInt(n[0], 10);
        },
        w = function(i, s, n) {
          var r = -1,
            o = e
              .map(b(i) ? n : s, function(e, t) {
                return [[t, e]];
              })
              .sort(function(e, t) {
                return -(e[1].length - t[1].length);
              });
          if (
            (e.each(o, function(e, i) {
              var s = i[1];
              return a.substr(c, s.length).toLowerCase() === s.toLowerCase()
                ? ((r = i[0]), (c += s.length), !1)
                : t;
            }),
            -1 !== r)
          )
            return r + 1;
          throw "Unknown name at position " + c;
        },
        M = function() {
          if (a.charAt(c) !== i.charAt(n))
            throw "Unexpected literal at position " + c;
          c++;
        };
      for (n = 0; i.length > n; n++)
        if (y) "'" !== i.charAt(n) || b("'") ? M() : (y = !1);
        else
          switch (i.charAt(n)) {
            case "d":
              v = D("d");
              break;
            case "D":
              w("D", d, p);
              break;
            case "o":
              k = D("o");
              break;
            case "m":
              _ = D("m");
              break;
            case "M":
              _ = w("M", g, m);
              break;
            case "y":
              f = D("y");
              break;
            case "@":
              (u = new Date(D("@"))),
                (f = u.getFullYear()),
                (_ = u.getMonth() + 1),
                (v = u.getDate());
              break;
            case "!":
              (u = new Date((D("!") - this._ticksTo1970) / 1e4)),
                (f = u.getFullYear()),
                (_ = u.getMonth() + 1),
                (v = u.getDate());
              break;
            case "'":
              b("'") ? M() : (y = !0);
              break;
            default:
              M();
          }
      if (a.length > c && ((o = a.substr(c)), !/^\s+/.test(o)))
        throw "Extra/unparsed characters found in date: " + o;
      if (
        (-1 === f
          ? (f = new Date().getFullYear())
          : 100 > f &&
            (f +=
              new Date().getFullYear() -
              (new Date().getFullYear() % 100) +
              (l >= f ? 0 : -100)),
        k > -1)
      )
        for (_ = 1, v = k; ; ) {
          if (((r = this._getDaysInMonth(f, _ - 1)), r >= v)) break;
          _++, (v -= r);
        }
      if (
        ((u = this._daylightSavingAdjust(new Date(f, _ - 1, v))),
        u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v)
      )
        throw "Invalid date";
      return u;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970:
      1e7 *
      60 *
      60 *
      24 *
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(e, t, i) {
      if (!t) return "";
      var a,
        s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        n = (i ? i.dayNames : null) || this._defaults.dayNames,
        r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        o = (i ? i.monthNames : null) || this._defaults.monthNames,
        u = function(t) {
          var i = e.length > a + 1 && e.charAt(a + 1) === t;
          return i && a++, i;
        },
        c = function(e, t, i) {
          var a = "" + t;
          if (u(e)) for (; i > a.length; ) a = "0" + a;
          return a;
        },
        h = function(e, t, i, a) {
          return u(e) ? a[t] : i[t];
        },
        l = "",
        d = !1;
      if (t)
        for (a = 0; e.length > a; a++)
          if (d) "'" !== e.charAt(a) || u("'") ? (l += e.charAt(a)) : (d = !1);
          else
            switch (e.charAt(a)) {
              case "d":
                l += c("d", t.getDate(), 2);
                break;
              case "D":
                l += h("D", t.getDay(), s, n);
                break;
              case "o":
                l += c(
                  "o",
                  Math.round(
                    (new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime() -
                      new Date(t.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case "m":
                l += c("m", t.getMonth() + 1, 2);
                break;
              case "M":
                l += h("M", t.getMonth(), r, o);
                break;
              case "y":
                l += u("y")
                  ? t.getFullYear()
                  : (10 > t.getYear() % 100 ? "0" : "") + (t.getYear() % 100);
                break;
              case "@":
                l += t.getTime();
                break;
              case "!":
                l += 1e4 * t.getTime() + this._ticksTo1970;
                break;
              case "'":
                u("'") ? (l += "'") : (d = !0);
                break;
              default:
                l += e.charAt(a);
            }
      return l;
    },
    _possibleChars: function(e) {
      var t,
        i = "",
        a = !1,
        s = function(i) {
          var a = e.length > t + 1 && e.charAt(t + 1) === i;
          return a && t++, a;
        };
      for (t = 0; e.length > t; t++)
        if (a) "'" !== e.charAt(t) || s("'") ? (i += e.charAt(t)) : (a = !1);
        else
          switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
              i += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              s("'") ? (i += "'") : (a = !0);
              break;
            default:
              i += e.charAt(t);
          }
      return i;
    },
    _get: function(e, i) {
      return e.settings[i] !== t ? e.settings[i] : this._defaults[i];
    },
    _setDateFromField: function(e, t) {
      if (e.input.val() !== e.lastVal) {
        var i = this._get(e, "dateFormat"),
          a = (e.lastVal = e.input ? e.input.val() : null),
          s = this._getDefaultDate(e),
          n = s,
          r = this._getFormatConfig(e);
        try {
          n = this.parseDate(i, a, r) || s;
        } catch (o) {
          a = t ? "" : a;
        }
        (e.selectedDay = n.getDate()),
          (e.drawMonth = e.selectedMonth = n.getMonth()),
          (e.drawYear = e.selectedYear = n.getFullYear()),
          (e.currentDay = a ? n.getDate() : 0),
          (e.currentMonth = a ? n.getMonth() : 0),
          (e.currentYear = a ? n.getFullYear() : 0),
          this._adjustInstDate(e);
      }
    },
    _getDefaultDate: function(e) {
      return this._restrictMinMax(
        e,
        this._determineDate(e, this._get(e, "defaultDate"), new Date())
      );
    },
    _determineDate: function(t, i, a) {
      var s = function(e) {
          var t = new Date();
          return t.setDate(t.getDate() + e), t;
        },
        n = function(i) {
          try {
            return e.datepicker.parseDate(
              e.datepicker._get(t, "dateFormat"),
              i,
              e.datepicker._getFormatConfig(t)
            );
          } catch (a) {}
          for (
            var s =
                (i.toLowerCase().match(/^c/)
                  ? e.datepicker._getDate(t)
                  : null) || new Date(),
              n = s.getFullYear(),
              r = s.getMonth(),
              o = s.getDate(),
              u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              c = u.exec(i);
            c;

          ) {
            switch (c[2] || "d") {
              case "d":
              case "D":
                o += parseInt(c[1], 10);
                break;
              case "w":
              case "W":
                o += 7 * parseInt(c[1], 10);
                break;
              case "m":
              case "M":
                (r += parseInt(c[1], 10)),
                  (o = Math.min(o, e.datepicker._getDaysInMonth(n, r)));
                break;
              case "y":
              case "Y":
                (n += parseInt(c[1], 10)),
                  (o = Math.min(o, e.datepicker._getDaysInMonth(n, r)));
            }
            c = u.exec(i);
          }
          return new Date(n, r, o);
        },
        r =
          null == i || "" === i
            ? a
            : "string" == typeof i
            ? n(i)
            : "number" == typeof i
            ? isNaN(i)
              ? a
              : s(i)
            : new Date(i.getTime());
      return (
        (r = r && "Invalid Date" == "" + r ? a : r),
        r &&
          (r.setHours(0),
          r.setMinutes(0),
          r.setSeconds(0),
          r.setMilliseconds(0)),
        this._daylightSavingAdjust(r)
      );
    },
    _daylightSavingAdjust: function(e) {
      return e
        ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
        : null;
    },
    _setDate: function(e, t, i) {
      var a = !t,
        s = e.selectedMonth,
        n = e.selectedYear,
        r = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
      (e.selectedDay = e.currentDay = r.getDate()),
        (e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth()),
        (e.drawYear = e.selectedYear = e.currentYear = r.getFullYear()),
        (s === e.selectedMonth && n === e.selectedYear) ||
          i ||
          this._notifyChange(e),
        this._adjustInstDate(e),
        e.input && e.input.val(a ? "" : this._formatDate(e));
    },
    _getDate: function(e) {
      var t =
        !e.currentYear || (e.input && "" === e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      return t;
    },
    _attachHandlers: function(t) {
      var i = this._get(t, "stepMonths"),
        a = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function() {
        var t = {
          prev: function() {
            e.datepicker._adjustDate(a, -i, "M");
          },
          next: function() {
            e.datepicker._adjustDate(a, +i, "M");
          },
          hide: function() {
            e.datepicker._hideDatepicker();
          },
          today: function() {
            e.datepicker._gotoToday(a);
          },
          selectDay: function() {
            return (
              e.datepicker._selectDay(
                a,
                +this.getAttribute("data-month"),
                +this.getAttribute("data-year"),
                this
              ),
              !1
            );
          },
          selectMonth: function() {
            return e.datepicker._selectMonthYear(a, this, "M"), !1;
          },
          selectYear: function() {
            return e.datepicker._selectMonthYear(a, this, "Y"), !1;
          }
        };
        e(this).bind(
          this.getAttribute("data-event"),
          t[this.getAttribute("data-handler")]
        );
      });
    },
    _generateHTML: function(e) {
      var t,
        i,
        a,
        s,
        n,
        r,
        o,
        u,
        c,
        h,
        l,
        d,
        p,
        g,
        m,
        f,
        _,
        v,
        k,
        y,
        b,
        D,
        w,
        M,
        C,
        x,
        I,
        N,
        T,
        A,
        E,
        S,
        Y,
        F,
        P,
        O,
        j,
        K,
        R,
        H = new Date(),
        W = this._daylightSavingAdjust(
          new Date(H.getFullYear(), H.getMonth(), H.getDate())
        ),
        L = this._get(e, "isRTL"),
        U = this._get(e, "showButtonPanel"),
        B = this._get(e, "hideIfNoPrevNext"),
        z = this._get(e, "navigationAsDateFormat"),
        q = this._getNumberOfMonths(e),
        G = this._get(e, "showCurrentAtPos"),
        J = this._get(e, "stepMonths"),
        Q = 1 !== q[0] || 1 !== q[1],
        V = this._daylightSavingAdjust(
          e.currentDay
            ? new Date(e.currentYear, e.currentMonth, e.currentDay)
            : new Date(9999, 9, 9)
        ),
        $ = this._getMinMaxDate(e, "min"),
        X = this._getMinMaxDate(e, "max"),
        Z = e.drawMonth - G,
        et = e.drawYear;
      if ((0 > Z && ((Z += 12), et--), X))
        for (
          t = this._daylightSavingAdjust(
            new Date(
              X.getFullYear(),
              X.getMonth() - q[0] * q[1] + 1,
              X.getDate()
            )
          ),
            t = $ && $ > t ? $ : t;
          this._daylightSavingAdjust(new Date(et, Z, 1)) > t;

        )
          Z--, 0 > Z && ((Z = 11), et--);
      for (
        e.drawMonth = Z,
          e.drawYear = et,
          i = this._get(e, "prevText"),
          i = z
            ? this.formatDate(
                i,
                this._daylightSavingAdjust(new Date(et, Z - J, 1)),
                this._getFormatConfig(e)
              )
            : i,
          a = this._canAdjustMonth(e, -1, et, Z)
            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (L ? "e" : "w") +
              "'>" +
              i +
              "</span></a>"
            : B
            ? ""
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (L ? "e" : "w") +
              "'>" +
              i +
              "</span></a>",
          s = this._get(e, "nextText"),
          s = z
            ? this.formatDate(
                s,
                this._daylightSavingAdjust(new Date(et, Z + J, 1)),
                this._getFormatConfig(e)
              )
            : s,
          n = this._canAdjustMonth(e, 1, et, Z)
            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
              s +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (L ? "w" : "e") +
              "'>" +
              s +
              "</span></a>"
            : B
            ? ""
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
              s +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (L ? "w" : "e") +
              "'>" +
              s +
              "</span></a>",
          r = this._get(e, "currentText"),
          o = this._get(e, "gotoCurrent") && e.currentDay ? V : W,
          r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r,
          u = e.inline
            ? ""
            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
              this._get(e, "closeText") +
              "</button>",
          c = U
            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
              (L ? u : "") +
              (this._isInRange(e, o)
                ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                  r +
                  "</button>"
                : "") +
              (L ? "" : u) +
              "</div>"
            : "",
          h = parseInt(this._get(e, "firstDay"), 10),
          h = isNaN(h) ? 0 : h,
          l = this._get(e, "showWeek"),
          d = this._get(e, "dayNames"),
          p = this._get(e, "dayNamesMin"),
          g = this._get(e, "monthNames"),
          m = this._get(e, "monthNamesShort"),
          f = this._get(e, "beforeShowDay"),
          _ = this._get(e, "showOtherMonths"),
          v = this._get(e, "selectOtherMonths"),
          k = this._getDefaultDate(e),
          y = "",
          D = 0;
        q[0] > D;
        D++
      ) {
        for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
          if (
            ((C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay))),
            (x = " ui-corner-all"),
            (I = ""),
            Q)
          ) {
            if (((I += "<div class='ui-datepicker-group"), q[1] > 1))
              switch (M) {
                case 0:
                  (I += " ui-datepicker-group-first"),
                    (x = " ui-corner-" + (L ? "right" : "left"));
                  break;
                case q[1] - 1:
                  (I += " ui-datepicker-group-last"),
                    (x = " ui-corner-" + (L ? "left" : "right"));
                  break;
                default:
                  (I += " ui-datepicker-group-middle"), (x = "");
              }
            I += "'>";
          }
          for (
            I +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              x +
              "'>" +
              (/all|left/.test(x) && 0 === D ? (L ? n : a) : "") +
              (/all|right/.test(x) && 0 === D ? (L ? a : n) : "") +
              this._generateMonthYearHeader(
                e,
                Z,
                et,
                $,
                X,
                D > 0 || M > 0,
                g,
                m
              ) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              "<tr>",
              N = l
                ? "<th class='ui-datepicker-week-col'>" +
                  this._get(e, "weekHeader") +
                  "</th>"
                : "",
              b = 0;
            7 > b;
            b++
          )
            (T = (b + h) % 7),
              (N +=
                "<th" +
                ((b + h + 6) % 7 >= 5
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                ">" +
                "<span title='" +
                d[T] +
                "'>" +
                p[T] +
                "</span></th>");
          for (
            I += N + "</tr></thead><tbody>",
              A = this._getDaysInMonth(et, Z),
              et === e.selectedYear &&
                Z === e.selectedMonth &&
                (e.selectedDay = Math.min(e.selectedDay, A)),
              E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7,
              S = Math.ceil((E + A) / 7),
              Y = Q ? (this.maxRows > S ? this.maxRows : S) : S,
              this.maxRows = Y,
              F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)),
              P = 0;
            Y > P;
            P++
          ) {
            for (
              I += "<tr>",
                O = l
                  ? "<td class='ui-datepicker-week-col'>" +
                    this._get(e, "calculateWeek")(F) +
                    "</td>"
                  : "",
                b = 0;
              7 > b;
              b++
            )
              (j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""]),
                (K = F.getMonth() !== Z),
                (R = (K && !v) || !j[0] || ($ && $ > F) || (X && F > X)),
                (O +=
                  "<td class='" +
                  ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (K ? " ui-datepicker-other-month" : "") +
                  ((F.getTime() === C.getTime() &&
                    Z === e.selectedMonth &&
                    e._keyEvent) ||
                  (k.getTime() === F.getTime() && k.getTime() === C.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (R
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (K && !_
                    ? ""
                    : " " +
                      j[1] +
                      (F.getTime() === V.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (F.getTime() === W.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  "'" +
                  ((K && !_) || !j[2]
                    ? ""
                    : " title='" + j[2].replace(/'/g, "&#39;") + "'") +
                  (R
                    ? ""
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      F.getMonth() +
                      "' data-year='" +
                      F.getFullYear() +
                      "'") +
                  ">" +
                  (K && !_
                    ? "&#xa0;"
                    : R
                    ? "<span class='ui-state-default'>" +
                      F.getDate() +
                      "</span>"
                    : "<a class='ui-state-default" +
                      (F.getTime() === W.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (F.getTime() === V.getTime() ? " ui-state-active" : "") +
                      (K ? " ui-priority-secondary" : "") +
                      "' href='#'>" +
                      F.getDate() +
                      "</a>") +
                  "</td>"),
                F.setDate(F.getDate() + 1),
                (F = this._daylightSavingAdjust(F));
            I += O + "</tr>";
          }
          Z++,
            Z > 11 && ((Z = 0), et++),
            (I +=
              "</tbody></table>" +
              (Q
                ? "</div>" +
                  (q[0] > 0 && M === q[1] - 1
                    ? "<div class='ui-datepicker-row-break'></div>"
                    : "")
                : "")),
            (w += I);
        }
        y += w;
      }
      return (y += c), (e._keyEvent = !1), y;
    },
    _generateMonthYearHeader: function(e, t, i, a, s, n, r, o) {
      var u,
        c,
        h,
        l,
        d,
        p,
        g,
        m,
        f = this._get(e, "changeMonth"),
        _ = this._get(e, "changeYear"),
        v = this._get(e, "showMonthAfterYear"),
        k = "<div class='ui-datepicker-title'>",
        y = "";
      if (n || !f) y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
      else {
        for (
          u = a && a.getFullYear() === i,
            c = s && s.getFullYear() === i,
            y +=
              "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
            h = 0;
          12 > h;
          h++
        )
          (!u || h >= a.getMonth()) &&
            (!c || s.getMonth() >= h) &&
            (y +=
              "<option value='" +
              h +
              "'" +
              (h === t ? " selected='selected'" : "") +
              ">" +
              o[h] +
              "</option>");
        y += "</select>";
      }
      if ((v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml))
        if (((e.yearshtml = ""), n || !_))
          k += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (
            l = this._get(e, "yearRange").split(":"),
              d = new Date().getFullYear(),
              p = function(e) {
                var t = e.match(/c[+\-].*/)
                  ? i + parseInt(e.substring(1), 10)
                  : e.match(/[+\-].*/)
                  ? d + parseInt(e, 10)
                  : parseInt(e, 10);
                return isNaN(t) ? d : t;
              },
              g = p(l[0]),
              m = Math.max(g, p(l[1] || "")),
              g = a ? Math.max(g, a.getFullYear()) : g,
              m = s ? Math.min(m, s.getFullYear()) : m,
              e.yearshtml +=
                "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            m >= g;
            g++
          )
            e.yearshtml +=
              "<option value='" +
              g +
              "'" +
              (g === i ? " selected='selected'" : "") +
              ">" +
              g +
              "</option>";
          (e.yearshtml += "</select>"),
            (k += e.yearshtml),
            (e.yearshtml = null);
        }
      return (
        (k += this._get(e, "yearSuffix")),
        v && (k += (!n && f && _ ? "" : "&#xa0;") + y),
        (k += "</div>")
      );
    },
    _adjustInstDate: function(e, t, i) {
      var a = e.drawYear + ("Y" === i ? t : 0),
        s = e.drawMonth + ("M" === i ? t : 0),
        n =
          Math.min(e.selectedDay, this._getDaysInMonth(a, s)) +
          ("D" === i ? t : 0),
        r = this._restrictMinMax(
          e,
          this._daylightSavingAdjust(new Date(a, s, n))
        );
      (e.selectedDay = r.getDate()),
        (e.drawMonth = e.selectedMonth = r.getMonth()),
        (e.drawYear = e.selectedYear = r.getFullYear()),
        ("M" === i || "Y" === i) && this._notifyChange(e);
    },
    _restrictMinMax: function(e, t) {
      var i = this._getMinMaxDate(e, "min"),
        a = this._getMinMaxDate(e, "max"),
        s = i && i > t ? i : t;
      return a && s > a ? a : s;
    },
    _notifyChange: function(e) {
      var t = this._get(e, "onChangeMonthYear");
      t &&
        t.apply(e.input ? e.input[0] : null, [
          e.selectedYear,
          e.selectedMonth + 1,
          e
        ]);
    },
    _getNumberOfMonths: function(e) {
      var t = this._get(e, "numberOfMonths");
      return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
    },
    _getMinMaxDate: function(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    },
    _getDaysInMonth: function(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function(e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function(e, t, i, a) {
      var s = this._getNumberOfMonths(e),
        n = this._daylightSavingAdjust(
          new Date(i, a + (0 > t ? t : s[0] * s[1]), 1)
        );
      return (
        0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())),
        this._isInRange(e, n)
      );
    },
    _isInRange: function(e, t) {
      var i,
        a,
        s = this._getMinMaxDate(e, "min"),
        n = this._getMinMaxDate(e, "max"),
        r = null,
        o = null,
        u = this._get(e, "yearRange");
      return (
        u &&
          ((i = u.split(":")),
          (a = new Date().getFullYear()),
          (r = parseInt(i[0], 10)),
          (o = parseInt(i[1], 10)),
          i[0].match(/[+\-].*/) && (r += a),
          i[1].match(/[+\-].*/) && (o += a)),
        (!s || t.getTime() >= s.getTime()) &&
          (!n || t.getTime() <= n.getTime()) &&
          (!r || t.getFullYear() >= r) &&
          (!o || o >= t.getFullYear())
      );
    },
    _getFormatConfig: function(e) {
      var t = this._get(e, "shortYearCutoff");
      return (
        (t =
          "string" != typeof t
            ? t
            : (new Date().getFullYear() % 100) + parseInt(t, 10)),
        {
          shortYearCutoff: t,
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames")
        }
      );
    },
    _formatDate: function(e, t, i, a) {
      t ||
        ((e.currentDay = e.selectedDay),
        (e.currentMonth = e.selectedMonth),
        (e.currentYear = e.selectedYear));
      var s = t
        ? "object" == typeof t
          ? t
          : this._daylightSavingAdjust(new Date(a, i, t))
        : this._daylightSavingAdjust(
            new Date(e.currentYear, e.currentMonth, e.currentDay)
          );
      return this.formatDate(
        this._get(e, "dateFormat"),
        s,
        this._getFormatConfig(e)
      );
    }
  }),
    (e.fn.datepicker = function(t) {
      if (!this.length) return this;
      e.datepicker.initialized ||
        (e(document).mousedown(e.datepicker._checkExternalClick),
        (e.datepicker.initialized = !0)),
        0 === e("#" + e.datepicker._mainDivId).length &&
          e("body").append(e.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof t ||
        ("isDisabled" !== t && "getDate" !== t && "widget" !== t)
        ? "option" === t &&
          2 === arguments.length &&
          "string" == typeof arguments[1]
          ? e.datepicker["_" + t + "Datepicker"].apply(
              e.datepicker,
              [this[0]].concat(i)
            )
          : this.each(function() {
              "string" == typeof t
                ? e.datepicker["_" + t + "Datepicker"].apply(
                    e.datepicker,
                    [this].concat(i)
                  )
                : e.datepicker._attachDatepicker(this, t);
            })
        : e.datepicker["_" + t + "Datepicker"].apply(
            e.datepicker,
            [this[0]].concat(i)
          );
    }),
    (e.datepicker = new i()),
    (e.datepicker.initialized = !1),
    (e.datepicker.uuid = new Date().getTime()),
    (e.datepicker.version = "1.10.4");
})(jQuery);
(function(t) {
  function e(e, i) {
    var s = (e.attr("aria-describedby") || "").split(/\s+/);
    s.push(i),
      e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
  }
  function i(e) {
    var i = e.data("ui-tooltip-id"),
      s = (e.attr("aria-describedby") || "").split(/\s+/),
      n = t.inArray(i, s);
    -1 !== n && s.splice(n, 1),
      e.removeData("ui-tooltip-id"),
      (s = t.trim(s.join(" "))),
      s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
  }
  var s = 0;
  t.widget("ui.tooltip", {
    version: "1.10.4",
    options: {
      content: function() {
        var e = t(this).attr("title") || "";
        return t("<a>")
          .text(e)
          .html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null
    },
    _create: function() {
      this._on({ mouseover: "open", focusin: "open" }),
        (this.tooltips = {}),
        (this.parents = {}),
        this.options.disabled && this._disable();
    },
    _setOption: function(e, i) {
      var s = this;
      return "disabled" === e
        ? (this[i ? "_disable" : "_enable"](), (this.options[e] = i), void 0)
        : (this._super(e, i),
          "content" === e &&
            t.each(this.tooltips, function(t, e) {
              s._updateContent(e);
            }),
          void 0);
    },
    _disable: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event("blur");
        (n.target = n.currentTarget = s[0]), e.close(n, !0);
      }),
        this.element
          .find(this.options.items)
          .addBack()
          .each(function() {
            var e = t(this);
            e.is("[title]") &&
              e.data("ui-tooltip-title", e.attr("title")).attr("title", "");
          });
    },
    _enable: function() {
      this.element
        .find(this.options.items)
        .addBack()
        .each(function() {
          var e = t(this);
          e.data("ui-tooltip-title") &&
            e.attr("title", e.data("ui-tooltip-title"));
        });
    },
    open: function(e) {
      var i = this,
        s = t(e ? e.target : this.element).closest(this.options.items);
      s.length &&
        !s.data("ui-tooltip-id") &&
        (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
        s.data("ui-tooltip-open", !0),
        e &&
          "mouseover" === e.type &&
          s.parents().each(function() {
            var e,
              s = t(this);
            s.data("ui-tooltip-open") &&
              ((e = t.Event("blur")),
              (e.target = e.currentTarget = this),
              i.close(e, !0)),
              s.attr("title") &&
                (s.uniqueId(),
                (i.parents[this.id] = {
                  element: this,
                  title: s.attr("title")
                }),
                s.attr("title", ""));
          }),
        this._updateContent(s, e));
    },
    _updateContent: function(t, e) {
      var i,
        s = this.options.content,
        n = this,
        o = e ? e.type : null;
      return "string" == typeof s
        ? this._open(e, t, s)
        : ((i = s.call(t[0], function(i) {
            t.data("ui-tooltip-open") &&
              n._delay(function() {
                e && (e.type = o), this._open(e, t, i);
              });
          })),
          i && this._open(e, t, i),
          void 0);
    },
    _open: function(i, s, n) {
      function o(t) {
        (l.of = t), a.is(":hidden") || a.position(l);
      }
      var a,
        r,
        h,
        l = t.extend({}, this.options.position);
      if (n) {
        if (((a = this._find(s)), a.length))
          return a.find(".ui-tooltip-content").html(n), void 0;
        s.is("[title]") &&
          (i && "mouseover" === i.type
            ? s.attr("title", "")
            : s.removeAttr("title")),
          (a = this._tooltip(s)),
          e(s, a.attr("id")),
          a.find(".ui-tooltip-content").html(n),
          this.options.track && i && /^mouse/.test(i.type)
            ? (this._on(this.document, { mousemove: o }), o(i))
            : a.position(t.extend({ of: s }, this.options.position)),
          a.hide(),
          this._show(a, this.options.show),
          this.options.show &&
            this.options.show.delay &&
            (h = this.delayedShow = setInterval(function() {
              a.is(":visible") && (o(l.of), clearInterval(h));
            }, t.fx.interval)),
          this._trigger("open", i, { tooltip: a }),
          (r = {
            keyup: function(e) {
              if (e.keyCode === t.ui.keyCode.ESCAPE) {
                var i = t.Event(e);
                (i.currentTarget = s[0]), this.close(i, !0);
              }
            },
            remove: function() {
              this._removeTooltip(a);
            }
          }),
          (i && "mouseover" !== i.type) || (r.mouseleave = "close"),
          (i && "focusin" !== i.type) || (r.focusout = "close"),
          this._on(!0, s, r);
      }
    },
    close: function(e) {
      var s = this,
        n = t(e ? e.currentTarget : this.element),
        o = this._find(n);
      this.closing ||
        (clearInterval(this.delayedShow),
        n.data("ui-tooltip-title") &&
          n.attr("title", n.data("ui-tooltip-title")),
        i(n),
        o.stop(!0),
        this._hide(o, this.options.hide, function() {
          s._removeTooltip(t(this));
        }),
        n.removeData("ui-tooltip-open"),
        this._off(n, "mouseleave focusout keyup"),
        n[0] !== this.element[0] && this._off(n, "remove"),
        this._off(this.document, "mousemove"),
        e &&
          "mouseleave" === e.type &&
          t.each(this.parents, function(e, i) {
            t(i.element).attr("title", i.title), delete s.parents[e];
          }),
        (this.closing = !0),
        this._trigger("close", e, { tooltip: o }),
        (this.closing = !1));
    },
    _tooltip: function(e) {
      var i = "ui-tooltip-" + s++,
        n = t("<div>")
          .attr({ id: i, role: "tooltip" })
          .addClass(
            "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
              (this.options.tooltipClass || "")
          );
      return (
        t("<div>")
          .addClass("ui-tooltip-content")
          .appendTo(n),
        n.appendTo(this.document[0].body),
        (this.tooltips[i] = e),
        n
      );
    },
    _find: function(e) {
      var i = e.data("ui-tooltip-id");
      return i ? t("#" + i) : t();
    },
    _removeTooltip: function(t) {
      t.remove(), delete this.tooltips[t.attr("id")];
    },
    _destroy: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event("blur");
        (n.target = n.currentTarget = s[0]),
          e.close(n, !0),
          t("#" + i).remove(),
          s.data("ui-tooltip-title") &&
            (s.attr("title", s.data("ui-tooltip-title")),
            s.removeData("ui-tooltip-title"));
      });
    }
  });
})(jQuery);
$.datepicker.regional.de = {
  clearText: "lÃ¶schen",
  clearStatus: "aktuelles Datum lÃ¶schen",
  closeText: "schlieÃŸen",
  closeStatus: "ohne Ã„nderungen schlieÃŸen",
  prevText: "<zurÃ¼ck",
  prevStatus: "letzten Monat zeigen",
  nextText: "Vor>",
  nextStatus: "nÃ¤chsten Monat zeigen",
  currentText: "heute",
  currentStatus: "",
  monthNames: [
    "Januar",
    "Februar",
    "MÃ¤rz",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "MÃ¤r",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  monthStatus: "anderen Monat anzeigen",
  yearStatus: "anderes Jahr anzeigen",
  weekHeader: "Wo",
  weekStatus: "Woche des Monats",
  dayNames: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ],
  dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  dayStatus: "Setze DD als ersten Wochentag",
  dateStatus: "WÃ¤hle D, M d",
  dateFormat: "dd.mm.yy",
  firstDay: 1,
  initStatus: "WÃ¤hle ein Datum",
  isRTL: false
};
$.datepicker.setDefaults($.datepicker.regional.de);
/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!(function(t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function(t, e) {
  "use strict";
  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return (
        t.each(function(t, h) {
          var u = a.data(h, i);
          if (!u)
            return void s(
              i + " not initialized. Cannot call methods, i.e. " + r
            );
          var d = u[e];
          if (!d || "_" == e.charAt(0))
            return void s(r + " is not a valid method");
          var l = d.apply(u, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function u(t, e) {
      t.each(function(t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (r.prototype.option ||
          (r.prototype.option = function(t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function(t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function() {}
        : function(t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            o = i[n];
          e = e || [];
          for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
            var s = r && r[o];
            s && (this.off(t, o), delete r[o]),
              o.apply(this, e),
              (n += s ? 0 : 1),
              (o = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function() {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function() {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          },
          e = 0;
        u > e;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
      }
    }
    function r(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var r = n(e);
        if ("none" == r.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
          u > l;
          l++
        ) {
          var c = h[l],
            f = r[c],
            m = parseFloat(f);
          a[c] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          E = a.borderTopWidth + a.borderBottomWidth,
          z = d && s,
          b = t(r.width);
        b !== !1 && (a.width = b + (z ? 0 : p + _));
        var x = t(r.height);
        return (
          x !== !1 && (a.height = x + (z ? 0 : g + E)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + E)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function(t) {
              console.error(t);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ],
      u = h.length,
      d = !1;
    return r;
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function() {
    "use strict";
    var t = (function() {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function(e, i) {
      return e[t](i);
    };
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "desandro-matches-selector/matches-selector"
        ], function(i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function(t, e) {
    var i = {};
    (i.extend = function(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function(t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function(t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function(t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                o.push(i[r]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function() {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function() {
            n.apply(r, e), delete r[o];
          }, i || 100);
        };
      }),
      (i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? t()
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function(t) {
        return t
          .replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function(e, o) {
        i.docReady(function() {
          var r = i.toDashed(o),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            h = document.querySelectorAll(".js-" + r),
            u = i.makeArray(a).concat(i.makeArray(h)),
            d = s + "-options",
            l = t.jQuery;
          u.forEach(function(t) {
            var i,
              r = t.getAttribute(s) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + s + " on " + t.className + ": " + a)
              );
            }
            var h = new e(t, i);
            l && l.data(t, o, h);
          });
        });
      }),
      i
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("outlayer/item", [
          "ev-emitter/ev-emitter",
          "get-size/get-size"
        ], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function(t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function() {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function() {
        this.size = e(this.element);
      }),
      (d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
          var n = u[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = this.layout.size,
          s =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * r.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * r.height
              : parseInt(o, 10);
        (s = isNaN(s) ? 0 : s),
          (a = isNaN(a) ? 0 : a),
          (s -= e ? r.paddingLeft : r.paddingRight),
          (a -= i ? r.paddingTop : r.paddingBottom),
          (this.position.x = s),
          (this.position.y = a);
      }),
      (d.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[r] = this.getXValue(a)), (e[s] = "");
        var h = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[h];
        (e[u] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          h = e - n,
          u = {};
        (u.transform = this.getTranslate(a, h)),
          this.transition({
            to: u,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0
          });
      }),
      (d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function(t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function() {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0
          }),
          this.element.addEventListener(h, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function(t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (d.ontransitionend = function(t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function() {
        this.removeTransitionStyles(),
          this.element.removeEventListener(h, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
    };
    return (
      (d.removeTransitionStyles = function() {
        this.css(f);
      }),
      (d.stagger = function(t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function() {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
      }),
      (d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function() {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
      }),
      (d.onHideTransitionEnd = function() {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      }),
      n
    );
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("outlayer/outlayer", [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ], function(i, n, o, r) {
          return e(t, i, n, o, r);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (c[o] = this), this._create();
      var r = this._getOption("initLayout");
      r && this.layout();
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var h = t.console,
      u = t.jQuery,
      d = function() {},
      l = 0,
      c = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" }
      });
    var f = r.prototype;
    n.extend(f, e.prototype),
      (f.option = function(t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }),
      (f._create = function() {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (f.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function(t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = e[o],
            s = new i(r, this);
          n.push(s);
        }
        return n;
      }),
      (f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element;
        });
      }),
      (f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function() {
        this.getSize();
      }),
      (f.getSize = function() {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function(t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (f.layoutItems = function(t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function(t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function(t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function() {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function(t) {
        this.updateStagger(),
          t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function() {
        this.resizeContainer();
      }),
      (f.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function(t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          s++, s == r && i();
        }
        var o = this,
          r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
          e.once(t, n);
        });
      }),
      (f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var o = u.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function(t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (f.unstamp = function(t) {
        (t = this._find(t)),
          t &&
            t.forEach(function(t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (f._find = function(t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (f._manageStamps = function() {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
          };
        return r;
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function() {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function() {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function() {
        this.resize();
      }),
      n.debounceMethod(r, "onresize", 100),
      (f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function() {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function(t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function(t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function(t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function(t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function(t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function() {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function(t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
      }),
      (r.create = function(t, e) {
        var i = s(r);
        return (
          (i.defaults = n.extend({}, r.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = s(o)),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function(t, e) {
    var i = t.create("masonry");
    return (
      (i.compatOptions.fitWidth = "isFitWidth"),
      (i.prototype._resetLayout = function() {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (i.prototype.measureColumns = function() {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / n,
          s = n - (o % n),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this._getColGroup(n),
            r = Math.min.apply(Math, o),
            s = o.indexOf(r),
            a = { x: this.columnWidth * s, y: r },
            h = r + t.size.outerHeight,
            u = this.cols + 1 - o.length,
            d = 0;
          u > d;
          d++
        )
          this.colYs[s + d] = h;
        return a;
      }),
      (i.prototype._getColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
          var o = this.colYs.slice(n, n + t);
          e[n] = Math.max.apply(Math, o);
        }
        return e;
      }),
      (i.prototype._manageStamp = function(t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          r = o ? n.left : n.right,
          s = r + i.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var u = this._getOption("originTop"),
            d = (u ? n.top : n.bottom) + i.outerHeight,
            l = a;
          h >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  });
/*
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(b, a) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", a);
  } else {
    if (typeof module == "object" && module.exports) {
      module.exports = a();
    } else {
      b.EvEmitter = a();
    }
  }
})(typeof window != "undefined" ? window : this, function() {
  function a() {}
  var b = a.prototype;
  b.on = function(c, e) {
    if (!c || !e) {
      return;
    }
    var d = (this._events = this._events || {});
    var f = (d[c] = d[c] || []);
    if (f.indexOf(e) == -1) {
      f.push(e);
    }
    return this;
  };
  b.once = function(c, d) {
    if (!c || !d) {
      return;
    }
    this.on(c, d);
    var e = (this._onceEvents = this._onceEvents || {});
    var f = (e[c] = e[c] || {});
    f[d] = true;
    return this;
  };
  b.off = function(c, e) {
    var f = this._events && this._events[c];
    if (!f || !f.length) {
      return;
    }
    var d = f.indexOf(e);
    if (d != -1) {
      f.splice(d, 1);
    }
    return this;
  };
  b.emitEvent = function(d, c) {
    var h = this._events && this._events[d];
    if (!h || !h.length) {
      return;
    }
    var e = 0;
    var g = h[e];
    c = c || [];
    var j = this._onceEvents && this._onceEvents[d];
    while (g) {
      var f = j && j[g];
      if (f) {
        this.off(d, g);
        delete j[g];
      }
      g.apply(this, c);
      e += f ? 0 : 1;
      g = h[e];
    }
    return this;
  };
  return a;
});
/*
 * imagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(b, a) {
  if (typeof define == "function" && define.amd) {
    define(["ev-emitter/ev-emitter"], function(c) {
      return a(b, c);
    });
  } else {
    if (typeof module == "object" && module.exports) {
      module.exports = a(b, require("ev-emitter"));
    } else {
      b.imagesLoaded = a(b, b.EvEmitter);
    }
  }
})(window, function factory(j, e) {
  var a = j.jQuery;
  var c = j.console;
  function f(k, l) {
    for (var m in l) {
      k[m] = l[m];
    }
    return k;
  }
  function i(m) {
    var k = [];
    if (Array.isArray(m)) {
      k = m;
    } else {
      if (typeof m.length == "number") {
        for (var l = 0; l < m.length; l++) {
          k.push(m[l]);
        }
      } else {
        k.push(m);
      }
    }
    return k;
  }
  function g(k, m, l) {
    if (!(this instanceof g)) {
      return new g(k, m, l);
    }
    if (typeof k == "string") {
      k = document.querySelectorAll(k);
    }
    this.elements = i(k);
    this.options = f({}, this.options);
    if (typeof m == "function") {
      l = m;
    } else {
      f(this.options, m);
    }
    if (l) {
      this.on("always", l);
    }
    this.getImages();
    if (a) {
      this.jqDeferred = new a.Deferred();
    }
    setTimeout(
      function() {
        this.check();
      }.bind(this)
    );
  }
  g.prototype = Object.create(e.prototype);
  g.prototype.options = {};
  g.prototype.getImages = function() {
    this.images = [];
    this.elements.forEach(this.addElementImages, this);
  };
  g.prototype.addElementImages = function(n) {
    if (n.nodeName == "IMG") {
      this.addImage(n);
    }
    if (this.options.background === true) {
      this.addElementBackgroundImages(n);
    }
    var q = n.nodeType;
    if (!q || !d[q]) {
      return;
    }
    var l = n.querySelectorAll("img");
    for (var o = 0; o < l.length; o++) {
      var p = l[o];
      this.addImage(p);
    }
    if (typeof this.options.background == "string") {
      var m = n.querySelectorAll(this.options.background);
      for (o = 0; o < m.length; o++) {
        var k = m[o];
        this.addElementBackgroundImages(k);
      }
    }
  };
  var d = { 1: true, 9: true, 11: true };
  g.prototype.addElementBackgroundImages = function(k) {
    var n = getComputedStyle(k);
    if (!n) {
      return;
    }
    var m = /url\((['"])?(.*?)\1\)/gi;
    var l = m.exec(n.backgroundImage);
    while (l !== null) {
      var o = l && l[2];
      if (o) {
        this.addBackground(o, k);
      }
      l = m.exec(n.backgroundImage);
    }
  };
  g.prototype.addImage = function(k) {
    var l = new h(k);
    this.images.push(l);
  };
  g.prototype.addBackground = function(m, l) {
    var k = new b(m, l);
    this.images.push(k);
  };
  g.prototype.check = function() {
    var k = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    if (!this.images.length) {
      this.complete();
      return;
    }
    function l(n, m, o) {
      setTimeout(function() {
        k.progress(n, m, o);
      });
    }
    this.images.forEach(function(m) {
      m.once("progress", l);
      m.check();
    });
  };
  g.prototype.progress = function(l, k, m) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !l.isLoaded;
    this.emitEvent("progress", [this, l, k]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, l);
    }
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && c) {
      c.log("progress: " + m, l, k);
    }
  };
  g.prototype.complete = function() {
    var k = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = true;
    this.emitEvent(k, [this]);
    this.emitEvent("always", [this]);
    if (this.jqDeferred) {
      var l = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[l](this);
    }
  };
  function h(k) {
    this.img = k;
  }
  h.prototype = Object.create(e.prototype);
  h.prototype.check = function() {
    var k = this.getIsImageComplete();
    if (k) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      return;
    }
    this.proxyImage = new Image();
    this.proxyImage.addEventListener("load", this);
    this.proxyImage.addEventListener("error", this);
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    this.proxyImage.src = this.img.src;
  };
  h.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth !== undefined;
  };
  h.prototype.confirm = function(k, l) {
    this.isLoaded = k;
    this.emitEvent("progress", [this, this.img, l]);
  };
  h.prototype.handleEvent = function(k) {
    var l = "on" + k.type;
    if (this[l]) {
      this[l](k);
    }
  };
  h.prototype.onload = function() {
    this.confirm(true, "onload");
    this.unbindEvents();
  };
  h.prototype.onerror = function() {
    this.confirm(false, "onerror");
    this.unbindEvents();
  };
  h.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener("load", this);
    this.proxyImage.removeEventListener("error", this);
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
  };
  function b(l, k) {
    this.url = l;
    this.element = k;
    this.img = new Image();
  }
  b.prototype = Object.create(h.prototype);
  b.prototype.check = function() {
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    this.img.src = this.url;
    var k = this.getIsImageComplete();
    if (k) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      this.unbindEvents();
    }
  };
  b.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
  };
  b.prototype.confirm = function(k, l) {
    this.isLoaded = k;
    this.emitEvent("progress", [this, this.element, l]);
  };
  g.makeJQueryPlugin = function(k) {
    k = k || j.jQuery;
    if (!k) {
      return;
    }
    a = k;
    a.fn.imagesLoaded = function(n, l) {
      var m = new g(this, n, l);
      return m.jqDeferred.promise(a(this));
    };
  };
  g.makeJQueryPlugin();
  return g;
});
AjaxNav.scrollTopSpeed = 0;
AjaxNav.preventScrollAnimation = true;
document.addEventListener("DOMContentLoaded", function() {
  yall({ observeChanges: true });
});
function content() {
  $("#video").bind("contextmenu", function() {
    return false;
  });
  content.responsiveTables();
  content.modulesFixed();
  content.extendListItemClicks();
  content.addTopScroller();
  content.actionButton();
  content.mobilenav();
  content.contentPosition();
  content.animateFormLabels();
  content.scrollNavigation();
  content.parallax();
  $(".parallax-window").parallax();
  content.updateActiveParallaxItem();
  content.parallaxNavigation();
  var b = $("#mainnav");
  b.find("a.active").each(function() {
    $(this).click(function() {
      content.closeNavigation();
    });
  });
  $("#header")
    .unbind("hover")
    .hover(function() {
      $(this).toggleClass("over");
    });
  var a = $(".kunden").masonry({
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    gutter: ".gutter-sizer",
    percentPosition: true
  });
  a.imagesLoaded().progress(function() {
    a.masonry("layout");
  });
  var c = $("ul.tab-menu li");
  c.click(function(d) {
    d.preventDefault();
    var e = $(this).attr("data-tab");
    c.removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#" + e).addClass("current");
  });
  if (
    navigator.userAgent.match(/MSIE/i) ||
    navigator.userAgent.match(/Trident\/7./) ||
    navigator.userAgent.match(/Edge\/12./)
  ) {
    $("body").on("mousewheel", function() {
      event.preventDefault
        ? event.preventDefault()
        : (event.returnValue = false);
      var e = event.wheelDelta;
      var d = window.pageYOffset;
      window.scrollTo(0, d - e);
    });
  }
}
content.scrollNavigation = function() {};
content.contentPosition = function() {};
content.animateFormLabels = function() {
  $("input, textarea").focusout(function() {
    var b = $(this)
      .parent()
      .find("label")
      .not("label.checkbox, .noAbs, .txt");
    if ($(this).val() === "") {
      b.removeClass("fix");
    } else {
      b.addClass("fix");
    }
  });
  $("input, textarea").focus(function() {
    var b = $(this).val() != "";
    var c = $(this)
      .parent()
      .find("label")
      .not("label.checkbox, .noAbs, .txt");
    if (!b) {
      c.addClass("fix");
    }
  });
  var a = $("input[name=Date]");
  a.datepicker("option", {
    beforeShow: function() {
      a.expandLabel();
    },
    onClose: function() {
      a.reduceLabel();
    }
  });
};
$.fn.expandLabel = function() {
  $(this)
    .getFormLabel()
    .animateIn();
};
$.fn.reduceLabel = function() {
  var a = $(this).datepicker("getDate") != null;
  if (!a) {
    $(this)
      .getFormLabel()
      .animateOut();
  }
};
$.fn.getFormLabel = function() {
  var a = $(this)
    .parents(".form-group")
    .find("label")
    .not("label.checkbox, .noAbs");
  return a;
};
$.fn.animateIn = function() {
  $(this).animate({ top: "-1px", "font-size": "10px", opacity: "0.5" }, 200);
};
$.fn.animateOut = function() {
  $(this).animate({ top: "13px", "font-size": "16px", opacity: "1" }, 200);
};
content.mobilenav = function() {
  var a = $("#mobilenavBtn");
  a.unbind("click").click(function() {
    content.toggleNavigation();
  });
};
content.toggleNavigation = function() {
  var a = $("#navigation");
  if (!a.hasClass("open")) {
    content.openNaviation();
  } else {
    content.closeNavigation();
  }
};
content.openNaviation = function() {
  var b = $("#navigation");
  var a = $("#mobilenavBtn");
  b.addClass("open");
  a.addClass("active");
  b.removeClass("close");
  $("#master").addClass("open");
};
content.closeNavigation = function() {
  var b = $("#navigation");
  var a = $("#mobilenavBtn");
  a.removeClass("active");
  b.addClass("close");
  b.removeClass("open");
  $("#master").removeClass("open");
};
content.parallaxNavigation = function() {
  $(document).on("click", ".page-menu a", function(c) {
    c.preventDefault();
    var g = $("html, body");
    if ($("body").hasClass("scrolling")) {
      g.stop();
    }
    $("body").addClass("scrolling");
    var e = 550;
    var f = 200;
    var d = $('[name="' + $.attr(this, "href").substr(1) + '"]');
    var h = $(window).height();
    var a = d.closest(".parallax-content.item");
    if (a.length == 0) {
      a = $("#content .section.top");
    }
    var b = a.height();
    f = h - b;
    if (h - b < e) {
      f = e;
    }
    $("html, body").animate(
      { scrollTop: a.offset().top - f },
      {
        duration: 500,
        complete: function() {
          g.removeClass("scrolling");
        }
      }
    );
  });
};
content.optimizeSearch = function() {
  $("#txtSearch").siteSearch({ layerTarget: "#search-field" });
  $("#search-field").on(
    "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
    function(a) {
      $("#txtSearch").focus();
    }
  );
  $("#check-search").click(function() {
    $("#txtSearch").focus();
  });
  $(document).click(function(b) {
    if (!$(b.target).closest("#search-field").length) {
      if ($(b.target)[0].id != "check-search") {
        var a = $("#check-search");
        a.attr("checked", false);
        $("#header, .search-field").removeClass("open");
      }
    }
    if (!$(b.target).closest("#search").length) {
      if ($(b.target)[0].id != "header") {
        var c = $("#header");
        c.removeClass("open");
      }
    }
  });
};
content.tapNavigation = function() {
  $("a.lvl1").click(function() {
    var b = $(this).parent();
    var a = b.hasClass("mobileOpen");
    if (isMobile() && !a) {
      b.addClass("mobileOpen");
      return false;
    }
    b.removeClass("mobileOpen");
    return true;
  });
};
content.actionButton = function() {
  function a(b, d, c) {
    var f = $(".fab-icons");
    var g = $(".buttons:not(.fab-main)");
    if (!d && !$(b.toElement).hasClass("float-action-button")) {
      g.removeClass("fab-visible");
    } else {
      if (d && !$(b.toElement).hasClass("fab-main-wrapper")) {
        if (g.hasClass("fab-visible")) {
          g.removeClass("fab-visible");
        }
      }
    }
  }
  $(".fab-main")
    .click(function() {
      var b = $(".fab-icons");
      b.css("opacity", "1");
      var c = $(".buttons");
      c.toggleClass("fab-visible");
    })
    .mouseleave(function(b) {
      a(b);
    });
  $(".float-action-button .buttons:not(.fab-main)").mouseleave(function(b) {
    a(b, false, true);
  });
  $(".fab-icons").mouseleave(function(b) {
    a(b, true);
  });
};
content.extendListItemClicks = function() {
  var a = $(".list.box, .list.box2");
  a.find(".item").each(function() {
    var b = $(this);
    b.css("cursor", "pointer");
    b.click(function(c) {
      if (c.target.localName != "a" && b.find(".edit").length == 0) {
        $(this)
          .find("a:first")
          .click();
      }
    });
  });
};
content.dropDowns = function() {
  if (content.dropDownsInitialised) {
    return false;
  } else {
    content.dropDownsInitialised = true;
  }
  var a = ".filter.values";
  $(document).on("click", a, function() {
    var b = $(this);
    $(a).each(function() {
      if ($(this).attr("class") != b.attr("class")) {
        $(this).removeClass("active");
      }
    });
    if (!b.hasClass("active")) {
      b.addClass("active");
    } else {
      b.removeClass("active");
    }
    if (!document.dropMoveOutInitialised) {
      document.dropMoveOutInitialised = true;
      $(document).on("click tap", function(c) {
        var d = $(c.target);
        if (d.closest(a).length === 0) {
          $(a).removeClass("active");
        }
      });
    }
  });
};
content.modulesFixed = function() {
  var d = 250;
  var a = d;
  var c = 10;
  var g = 400;
  if ($(".section.top").length > 0) {
    g = $(".section.top").height() / 2;
  }
  var e = $(window).width() > 678;
  var b = $("#header");
  var f = $(document).scrollTop();
  if (f > a) {
    b.addClass("fixed");
  } else {
    b.removeClass("fixed");
  }
  if (f > g) {
    $(".projectitem .controls").addClass("colored");
  } else {
    $(".projectitem .controls").removeClass("colored");
  }
};
content.addTopScroller = function() {
  $("#scroller").on("click", function() {
    var c = $("body,html");
    c.animate({ scrollTop: 400 }, 800);
  });
  var b = $(".lnk-back");
  var a = $("html, body");
  b.click(function() {
    a.animate({ scrollTop: 0 }, 800);
    return false;
  });
};
content.responsiveTables = function() {
  $("table")
    .not(".responsive")
    .each(function() {
      var a = $(this);
      a.addClass("responsive");
      var c = a.find("thead");
      var b = a.find("tbody");
      b.find("tr").each(function() {
        var d = $(this);
        d.find("td").each(function(f) {
          var e = $(this);
          var h = c.find("tr>:eq(" + f + ")");
          var g = e.find("label.title");
          if (g.length == 0) {
            g = $("<label class='title' style='display:none;'>")
              .html(h.html())
              .prependTo(e);
          }
        });
      });
    });
};
content.updateActiveParallaxItem = function() {
  var b = $(".parallax-content.item");
  var f = $("#content .section.top");
  var c = true;
  b.each(function() {
    var g = $(this);
    if (g.isOnScreen()) {
      f = g;
      c = false;
    }
  });
  var a = $("#page-menu li:first-child a");
  var d = $(f).find("a");
  if (!c && d.length > 0) {
    var e = d.attr("name");
    a = $("a[href=#" + e + "]");
  }
  $("#page-menu li a").removeClass("active");
  a.addClass("active");
};
$(window).resize(function(a) {
  if (!isMobile()) {
    content.responsiveTables();
    content.contentPosition();
    $(".parallax-window").parallax();
  }
});
function isScrolledIntoView(c) {
  var b = $(window).scrollTop();
  var a = (b * 2 + $(window).height()) / 2;
  var e = $(c).offset().top;
  var d = e + $(c).height();
  return !(a > d);
}
function elementIsHigher(a, b) {
  var d = $(window).height();
  var c = window.frames.scrollY;
  var b = (70 * d) / 100;
  return c > b;
}
content.parallax = function() {};
$(window).scroll(function(a) {
  content.modulesFixed();
  content.parallax();
  var c = $(this).scrollTop();
  var b = 1 - (Math.round((c / 3) * 100) / 10000).toFixed(2);
  $("#teaser .h1").css({ opacity: b, "margin-top": c / -2 });
  content.updateActiveParallaxItem();
});
$.fn.isOnScreen = function() {
  var c = $(window);
  var b = { top: c.scrollTop(), left: c.scrollLeft() };
  b.right = b.left + c.width();
  b.bottom = b.top + c.height();
  var a = this.offset();
  a.right = a.left + this.outerWidth();
  a.bottom = a.top + this.outerHeight();
  return !(
    b.right < a.left ||
    b.left > a.right ||
    b.bottom < a.top ||
    b.top > a.bottom
  );
};
Site.Nav.bind("content", "live", content);
Site.Nav.bind("parallax", "afterPageChanged", function() {
  setTimeout(function() {
    jQuery(window)
      .trigger("resize")
      .trigger("scroll");
  }, 800);
});
function media() {
  media.teaser();
  media.teaserVideo();
  media.wowAnimation();
  $("img[class*='imgcnt'], .images img").each(function() {
    var a = $(this);
    if (a.hasClass("noGal")) {
      return true;
    }
    var d = a.attr("src");
    d = $.param.querystring(d, "mw=1500", 2);
    var b = a.attr("class");
    if (!b) {
      b = "imgcnt";
    }
    var e = $(
      "<div class='" +
        b +
        " img-wrapper'><a href='" +
        d +
        "' caption='" +
        (a.attr("title") ? a.attr("title") : "") +
        "' class='gal fancy' rel='group'></a></div>"
    );
    var c = e.find("a");
    var f = a.clone();
    f.removeAttr("class").removeAttr("align");
    f.attr("src", $.param.querystring(d, "mw=1250", 2));
    f.removeClass("imtcnt");
    c.append(f);
    if (f.attr("title")) {
      e.append($("<div class='alt'>" + f.attr("title") + "</div>"));
      c.attr(
        "title",
        f.attr("alt") +
          (f.attr("longdesc") ? " (" + f.attr("longdesc") + ")" : "")
      );
    }
    if (f.attr("longdesc")) {
      e.append("<div class='longdesc'>" + f.attr("longdesc") + "</div>");
    }
    a.replaceWith(e);
  });
  $("[data-fancybox]").fancybox({ hash: false });
  $.fancybox.defaults.hash = false;
}
media.wowAnimation = function() {
  var b = false;
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    mobile: true,
    live: true
  });
  var a = AjaxNav.getUrlVars();
  if (!a.item && !a.sq && !$("#master").hasClass("animated") && !isMobile()) {
    $("#teaser").addClass("wow fadeIn");
    $("#teaser").attr("data-wow-duration", "0.6s");
    b = true;
  } else {
    $("#teaser").removeClass("wow fadeIn");
  }
  $(".wow:not(.letter-animation)").each(function(e, f) {
    var d = $(this);
    if (!d.attr("data-wow-duration")) {
      d.attr("data-wow-duration", "0.8s");
      b = true;
    }
    if (!d.attr("data-wow-offset")) {
      d.attr("data-wow-offset", "100");
      if (isMobile()) {
        d.attr("data-wow-offset", "40");
      }
      b = true;
    }
  });
  $(".delayed-wow").each(function(i, j) {
    var h = $(this);
    var g = 0.05;
    if (isMobile()) {
      g = 0;
    }
    var d = 0 + i * g;
    var e = d + "s";
    var f = "0.5s";
    if (isMobile()) {
      h.attr("data-wow-offset", "30");
    } else {
      h.attr("data-wow-offset", "10");
    }
    h.attr("data-wow-delay", e);
    h.attr("data-wow-duration", f);
  });
  if (!isMobile()) {
    $(".letter-animation").each(function(g, h) {
      var f = $(this);
      var d = 0.3 + g * 0.2;
      var e = d + "s";
      f.attr("data-wow-delay", e);
      f.attr("data-wow-duration", "1.2s");
      f.addClass("wow fadeInUpSmall");
    });
  } else {
    var c = $("#teaser .h1")[0];
    $(c).attr("data-wow-delay", 0.8);
    $(c).attr("data-wow-duration", "0.5s");
    $(c).addClass("wow");
    $(c).addClass("fadeInDown");
    $(".letter-animation").css("opacity", "1");
  }
  if (b) {
    wow.init();
  }
};
media.teaserVideo = function() {
  var b = $(".videowrapper");
  var a = $(b).find("video")[0];
  var c = $("#video")[0];
  a = $("#ifrmVideo");
  if (c) {
    setTimeout(function() {
      var d = c.readyState == 4;
      if (!d) {
        c.pause();
        c.poster = "";
        var e = $("#video").find("source")[0];
        $(e).attr("src", "");
      }
    }, 2000);
  }
  $(document).click(function(d) {
    if (!$(d.target).closest(".videoframe").length) {
      if ($(d.target)[0].id != ".videoframe") {
        if (c) {
          c.play();
        }
        b.hide(400);
        setTimeout(function() {
          if (!media.inlineIframe) {
            a.attr("src", "");
          }
        }, 800);
        $("body").css("overflow", "auto");
        $(".infos, #mobilenavBtn, #footer").css("z-index", "600");
        $("#logo, #content").css("z-index", "100");
        $(".logo").css("visibility", "visible");
        clearInterval(media.focusInterval);
      }
    }
    return true;
  });
  $(document).on("click", "#teaser", function(n) {
    var d = $(".videoLnk");
    if (d.length == 0) {
      return;
    }
    var k = d.width();
    var h = d.height();
    var i = d.offset().left;
    var j = i + k;
    var f = i + h;
    var g = g + k;
    var l = n.offsetX;
    var m = n.offsetY;
    var p = m > d.offset().top && m < d.offset().top + h;
    var o = l > d.offset().left && l < d.offset().left + k;
    if (p && o) {
      $(".videoLnk").click();
    }
  });
  $(".videoLnk").click(function() {
    var h = "https://player.vimeo.com/video/192621944?autoplay=1&amp;loop=1";
    var d = $("#video2")[0];
    var f = $("#video")[0];
    var g = $("#video source");
    var e = $("#video2 source");
    a.attr("src", h);
    if ((isMobile() && !isTablet()) || !isLandscapeOrientation()) {
      $(".swiper-wrapper").html("");
      a.prependTo(".swiper-wrapper");
      media.inlineIframe = true;
      $(".videoLnk").hide();
    } else {
      b.show(400);
      if (f != null) {
        f.pause();
      }
      $("body").css("overflow", "hidden");
      $("#logo, .infos, #mobilenavBtn, #content, #footer").css(
        "z-index",
        "-999"
      );
      media.focusInterval = window.setInterval(media.changeFocus, 1000);
    }
  });
  $(".videowrapper .close").click(function(d) {
    $("#video")[0].play();
    b.hide(400);
    a.attr("src", "");
    $("body").css("overflow", "auto");
    $(".infos, #mobilenavBtn, #footer").css("z-index", "600");
    $("#logo, #content").css("z-index", "100");
    $(".logo").css("visibility", "visible");
    clearInterval(media.focusInterval);
  });
  $(document).keyup(function(d) {
    var f = $("#video");
    if (d.keyCode === 27 && f.length > 0) {
      f[0].play();
      b.hide(400);
      a.attr("src", "");
      $("body").css("overflow", "auto");
      $(".infos, #mobilenavBtn, #footer").css("z-index", "600");
      $("#logo, #content").css("z-index", "100");
      $(".logo").css("visibility", "visible");
      clearInterval(media.focusInterval);
    }
  });
};
media.changeFocus = function() {
  if (document.activeElement.id == "ifrmVideo") {
    document.activeElement.blur();
  }
};
media.teaser = function() {
  var a = $(".swiper-container");
  if (a.length && a[0].swiper != null) {
    return;
  }
  var c = {
    direction: "horizontal",
    loop: false,
    paginationClickable: true,
    keyboardControl: true,
    effect: "fade",
    fade: { crossFade: true },
    iOSEdgeSwipeDetection: true,
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev"
  };
  var d = $(".swiper-slide");
  if (d.length > 1) {
    c.loop = true;
    c.autoplay = 5000;
    c.speed = 1000;
    c.shortSwipes = true;
    c.longSwipesRatio = 0.5;
    c.touchRatio = 0.8;
  }
  var e = $(".swiper-wrapper")[0];
  if (!$(e).hasClass("scale")) {
    $(e).addClass("scale");
  }
  $(".swiper-wrapper")
    .not(".hasvideo")
    .on(
      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      function(g) {
        var f = g.originalEvent.propertyName;
        if (f == "transform") {
          if ($(e).hasClass("scale")) {
            $(e).removeClass("scale");
          } else {
            if (!$(e).hasClass("scale")) {
              $(e).addClass("scale");
            }
          }
        }
      }
    );
  var b = new Swiper(".swiper-container", c);
};
Site.Nav.bind("media", "live", media);
$.fn.onS = function(c, a, d) {
  var b = $(this);
  var e = c + "-" + a;
  if (b.data(e)) {
    return true;
  } else {
    b.data(e, true);
  }
  b.bind(c, d);
  return b;
};
$.fn.scrollTo = function(d, b, a) {
  if (typeof b == "function" && arguments.length == 2) {
    a = b;
    b = d;
  }
  var c = $.extend(
    { scrollTarget: d, offsetTop: 185, duration: 1000, easing: "swing" },
    b
  );
  return this.each(function() {
    var e = $(this);
    var f =
      typeof c.scrollTarget == "number" ? c.scrollTarget : $(c.scrollTarget);
    var g =
      typeof f == "number"
        ? f
        : f.offset().top + e.scrollTop() - parseInt(c.offsetTop);
    e.animate({ scrollTop: g }, parseInt(c.duration), c.easing, function() {
      if (typeof a == "function") {
        a.call(this);
      }
    });
  });
};
function isMobile() {
  var a = false;
  if (navigator.userAgent.match(/iPhone/i)) {
    a = true;
  }
  if (navigator.userAgent.match(/iPod/i)) {
    a = true;
  }
  if (navigator.userAgent.match(/iPad/i)) {
    a = true;
  }
  if (navigator.userAgent.match(/Android/i)) {
    a = true;
  }
  return a;
}
function isTablet() {
  var a = false;
  if (navigator.userAgent.match(/iPad/i)) {
    a = true;
  }
  if (navigator.userAgent.match(/Android/i)) {
    a = true;
  }
  return a;
}
function isLandscapeOrientation() {
  if (window.innerHeight < window.innerWidth) {
    return true;
  }
  return false;
}
function tools() {
  $(".mods img")
    .not(".init, .noGal, .list img")
    .each(function() {
      var a = $(this);
      if (a.parent()[0].tagName != "A") {
        var b = a.attr("src").replace(/(\?.+)/, "?mw=1400");
        a.wrap(
          "<a href='" +
            b +
            "' rel='fancybox-thumb' title='" +
            (a.attr("title") != null ? a.attr("title") : "") +
            "' class='gal static'></a>"
        );
      }
      a.addClass("init");
    });
}
Site.Nav.bind("tools", "live", tools);
var yall = (function() {
  "use strict";
  return function(e) {
    var n = (e = e || {}).lazyClass || "lazy",
      o = e.lazyBackgroundClass || "lazy-bg",
      t = "idleLoadTimeout" in e ? e.idleLoadTimeout : 200,
      r = e.observeChanges || !1,
      i = e.events || {},
      a = window,
      s = "requestIdleCallback",
      c = "IntersectionObserver",
      u = ["srcset", "src", "poster"],
      d = [],
      l = function(e, t) {
        return d.slice.call(
          (t || document).querySelectorAll(
            e || "img." + n + ",video." + n + ",iframe." + n + ",." + o
          )
        );
      },
      f = function(n) {
        var t,
          r,
          i = n.parentNode;
        for (var a in ("PICTURE" == i.nodeName && (r = i),
        "VIDEO" == n.nodeName && (r = n),
        (t = l("source", r))))
          b(t[a]);
        b(n), n.autoplay && n.load();
        var s = n.classList;
        s.contains(o) &&
          (s.remove(o), s.add(e.lazyBackgroundLoaded || "lazy-bg-loaded"));
      },
      v = function(e) {
        for (var n in i)
          e.addEventListener(n, i[n].listener || i[n], i[n].options || void 0);
        h.observe(e);
      },
      b = function(e) {
        u.forEach(function(n) {
          n in e.dataset &&
            a.requestAnimationFrame(function() {
              e[n] = e.dataset[n];
            });
        });
      },
      g = l();
    if (/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent))
      for (var m in g) f(g[m]);
    else if (c in a && c + "Entry" in a) {
      var h = new a[c](
        function(e, o) {
          e.forEach(function(e) {
            if (e.intersectionRatio) {
              var i = e.target;
              s in a && t
                ? a[s](
                    function() {
                      f(i);
                    },
                    { timeout: t }
                  )
                : f(i),
                i.classList.remove(n),
                o.unobserve(i),
                (g = g.filter(function(e) {
                  return e != i;
                })).length ||
                  r ||
                  h.disconnect();
            }
          });
        },
        { rootMargin: ("threshold" in e ? e.threshold : 200) + "px 0%" }
      );
      for (var y in g) v(g[y]);
      r &&
        new MutationObserver(function() {
          l().forEach(function(e) {
            g.indexOf(e) < 0 && (g.push(e), v(e));
          });
        }).observe(
          l(e.observeRootSelector || "body")[0],
          e.mutationObserverOptions || { childList: !0, subtree: !0 }
        );
    }
  };
})();
