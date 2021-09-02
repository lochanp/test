/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "2.2.4", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a) {
            return n.each(this, a);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a) ;
            return void 0 === b || k.call(a, b);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), 
            b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : g.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), 
            null != e && h.push(e);
            return f.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), 
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, da = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), 
                    d;
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), 
                    d;
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), 
                        r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d;
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ha(a) {
            return a[u] = !0, a;
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ja(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function ka(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, 
            p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), 
            c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b);
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return fa(b, n, null, [ a ]).length > 0;
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], 
                                n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ w, n, t ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                            j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), 
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [ w, t ]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0;
                    };
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), 
                    function(b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                            c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Y.test(a.nodeName);
                },
                input: function(a) {
                    return X.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: na(function() {
                    return [ 0 ];
                }),
                last: na(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: na(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        };
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function ra(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0;
                }
            };
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c;
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b;
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ ra(sa(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
                }
                m.push(c);
            }
            return sa(m);
        }
        function xa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u);
                    }
                    H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
                }
                return k && (w = y, j = v), t;
            };
            return c ? ha(f) : f;
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a;
            }
            return f;
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ia(function(a) {
            return null == a.getAttribute("disabled");
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fa;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, v = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0));
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : B.exec(a), 
            !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), 
                x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
            this.context = d, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return u(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c);
        },
        next: function(a) {
            return F(a, "nextSibling");
        },
        prev: function(a) {
            return F(a, "previousSibling");
        },
        nextAll: function(a) {
            return u(a, "nextSibling");
        },
        prevAll: function(a) {
            return u(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c);
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return v(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, 
                c = !1);
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c || (f = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [ a, c.slice ? c.slice() : c ], g.push(c), b || i()), 
                this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return j;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [ n ]), 
            n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), 
        n.ready();
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), 
        a.addEventListener("load", J))), I.promise(b);
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) K(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function M() {
        this.expando = n.expando + M.uid++;
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando];
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a); else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [ b, e ] : (d = e, 
                    d = d in f ? [ d ] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]];
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b);
        }
    };
    var N = new M(), O = new M(), P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            O.set(a, b, c);
        } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a);
        },
        data: function(a, b, c) {
            return O.access(a, b, c);
        },
        removeData: function(a, b) {
            O.remove(a, b);
        },
        _data: function(a, b, c) {
            return N.access(a, b, c);
        },
        _removeData: function(a, b) {
            N.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a);
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c;
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), U = [ "Top", "Right", "Bottom", "Left" ], V = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return n.css(a, b, "");
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    var X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], 
        f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [ f ] : f); else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f); else if (j = n.contains(f.ownerDocument, f), 
        g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f);
        }
        return l;
    }
    !function() {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0;
    }
    function ha() {
        return !1;
    }
    function ia() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha; else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c);
        });
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
                (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(G) || [ "" ], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, 
                l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                n.event.global[o] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [ "" ], j = b.length;
                while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, 
                    a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                    void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (;i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, 
                e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), 
            e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            h.filter ? h.filter(a, g) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i, ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), 
        g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), 
            i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], 
            Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
        }
        return a;
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), 
        d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), 
            f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]); else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
                if (b = c[N.expando]) {
                    if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    c[N.expando] = void 0;
                }
                c[O.expando] && (c[O.expando] = void 0);
            }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0);
        },
        remove: function(a) {
            return va(this, a);
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), 
            n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d;
    }
    function za(a) {
        var b = d, c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), 
        c;
    }
    var Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    }, Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    }, Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", 
            l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", 
                e = "4px" === d.marginRight, Ea.removeChild(g);
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b;
                },
                boxSizingReliable: function() {
                    return null == c && i(), c;
                },
                pixelMarginRight: function() {
                    return null == c && i(), e;
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f;
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), 
                    b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), 
                    b;
                }
            });
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Ha = /^(none|table(?!-c[ea]).+)/, Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ka = [ "Webkit", "O", "Moz", "ms" ], La = d.createElement("div").style;
    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Ka.length;
        while (c--) if (a = Ka[c] + b, a in La) return a;
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g;
    }
    function Pa(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ca(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), 
        "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), 
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d);
                }) : Pa(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), 
                Na(a, c, g);
            }
        };
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Qa(this, !0);
        },
        hide: function() {
            return Qa(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e);
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0;
        }), Sa = n.now();
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Ua.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), 
        d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], 
            _a.tweeners[c].unshift(b);
        },
        prefilters: [ Za ],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = N.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Sa = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        a.clearInterval(Ta), Ta = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, 
        l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", 
        l.radioValue = "t" === a.value;
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), 
            null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            bb[b] = f), e;
        };
    });
    var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)));
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = n.trim(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = n.trim(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), 
                this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var gb = /\r/g, hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [ e || d ], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), 
            q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = e), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), 
                    i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, 
                m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), 
                m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], 
                i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), 
                b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b);
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
            }
        };
    });
    var jb = a.location, kb = n.now(), lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), 
        c;
    };
    var mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm, pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {}, tb = {}, ub = "*/".concat("*"), vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function xb(a, b, c, d) {
        var e = {}, f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2];
                        }
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a, t[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > v) for (b in a) s[b] = [ s[b], a[b] ]; else x.always(a[x.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b), z(0, b), this;
                }
            };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [ "" ], 
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
                } catch (y) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), 
            xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), 
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), 
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), 
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [ x, m ]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout");
                }, m.timeout));
                try {
                    v = 1, e.send(t, z);
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y);
                }
            } else z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, 
                j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), 
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), 
                w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, 
                l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), 
                x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [ l, y, x ]) : q.rejectWith(o, [ x, y, t ]), 
                x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [ x, m, j ? l : t ]), 
                r.fireWith(o, [ x, y ]), k && (p.trigger("ajaxComplete", [ x, m ]), --n.active || n.event.trigger("ajaxStop")));
            }
            return x;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a));
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a);
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
    };
    var Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i, Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Hb = {
        0: 200,
        1223: 204
    }, Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a), f = !c && [];
        return e ? [ b.createElement(e[1]) ] : (e = ca([ a ], b, f), f && f.length && n(f).remove(), 
        n.merge([], e.childNodes));
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), 
            c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        size: function() {
            return this.length;
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Nb = a.jQuery, Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }, b || (a.jQuery = a.$ = n), n;
});

/**
 * Swiper 5.2.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 16, 2019
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null;
        },
        querySelectorAll: function() {
            return [];
        },
        getElementById: function() {
            return null;
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            };
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return [];
                }
            };
        },
        location: {
            hash: ""
        }
    } : document, t = "undefined" == typeof window ? {
        document: e,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this;
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return "";
                }
            };
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window, i = function(e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this;
    };
    function s(s, a) {
        var r = [], n = 0;
        if (s && !a && s instanceof i) return s;
        if (s) if ("string" == typeof s) {
            var o, l, d = s.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                var h = "div";
                for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 
                0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 
                0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, 
                n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n]);
            } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [ e.getElementById(s.trim().split("#")[1]) ], 
            n = 0; n < o.length; n += 1) o[n] && r.push(o[n]);
        } else if (s.nodeType || s === t || s === e) r.push(s); else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r);
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this;
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this;
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this;
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], 
            this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), 
                i.dom7ElementDataStorage[e] = t;
                return this;
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0;
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e;
            }
            return this;
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e;
            }
            return this;
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
            var a = t[0], r = t[1], n = t[2], o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i); else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i);
                }
            }
            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (h = 0; h < p.length; h += 1) {
                    var v = p[h];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), 
                    u.dom7LiveListeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, o);
                } else for (h = 0; h < p.length; h += 1) {
                    var f = p[h];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), 
                    u.dom7Listeners[f].push({
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(f, d, o);
                }
            }
            return this;
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), 
                c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
                    var v = c[u];
                    r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), 
                    c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
                }
            }
            return this;
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], l = 0; l < this.length; l += 1) {
                var d = this[l], h = void 0;
                try {
                    h = new t.CustomEvent(o, {
                        detail: r,
                        bubbles: !0,
                        cancelable: !0
                    });
                } catch (t) {
                    (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
                }
                d.dom7EventData = i.filter(function(e, t) {
                    return t > 0;
                }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
            }
            return this;
        },
        transitionEnd: function(e) {
            var t, i = [ "webkitTransitionEnd", "transitionend" ], s = this;
            function a(r) {
                if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0, n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop, l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                };
            }
            return null;
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                    return this;
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this;
            }
            return this;
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1;
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [ a ] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [ this[t] ] : [ this[e] ]);
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
                    var o = e.createElement("div");
                    for (o.innerHTML = t; o.firstChild; ) this[n].appendChild(o.firstChild);
                } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]); else this[n].appendChild(t);
            }
            return this;
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
                var r = e.createElement("div");
                for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
            } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([ this[0].nextElementSibling ]) : new i([]) : this[0].nextElementSibling ? new i([ this[0].nextElementSibling ]) : new i([]) : new i([]);
        },
        nextAll: function(e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (;a.nextElementSibling; ) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([ t.previousElementSibling ]) : new i([]) : t.previousElementSibling ? new i([ t.previousElementSibling ]) : new i([]);
            }
            return new i([]);
        },
        prevAll: function(e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (;a.previousElementSibling; ) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t));
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r; ) e ? s(r).is(e) && t.push(r) : t.push(r), 
            r = r.parentNode;
            return s(a(t));
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t);
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t));
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t);
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1;
            }
            return this;
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {};
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = s.fn[e] || r[e];
    });
    var n = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null;
                } catch (e) {}
                try {
                    delete t[e];
                } catch (e) {}
            });
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function() {
            return Date.now();
        },
        getTranslate: function(e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                return e.replace(",", ".");
            }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), 
            "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), 
            "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), 
            a || 0;
        },
        parseUrlQuery: function(e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                return "" !== e;
            })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n;
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                    var d = r[o], h = Object.getOwnPropertyDescriptor(a, d);
                    void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, 
                    n.extend(i[d], a[d])) : i[d] = a[d]);
                }
            }
            return i;
        }
    }, o = {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0;
                    }
                });
                t.addEventListener("testPassiveListener", null, i);
            } catch (e) {}
            return e;
        }(),
        gestures: "ongesturestart" in t
    }, l = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e]);
        });
    }, d = {
        components: {
            configurable: !0
        }
    };
    l.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
    }, l.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        function a() {
            for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
        }
        return a.f7proxy = t, s.on(e, a, i);
    }, l.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1);
            });
        }), i) : i;
    }, l.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), 
        a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e);
                }), t.forEach(function(e) {
                    e.apply(a, s);
                });
            }
        }), r;
    }, l.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params);
        });
    }, l.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(a);
        });
    }, d.components.set = function(e) {
        this.use && this.use(e);
    }, l.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t];
        }), e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t];
        }), e.install && e.install.apply(s, t), s;
    }, l.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e);
        }), s) : s.installModule.apply(s, [ e ].concat(t));
    }, Object.defineProperties(l, d);
    var h = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), 
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), 
            n.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }));
        },
        updateSlides: function() {
            var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL, o = this.virtual && e.virtual.enabled, l = o ? this.virtual.slides.length : this.slides.length, d = i.children("." + this.params.slideClass), h = o ? this.virtual.slides.length : d.length, p = [], c = [], u = [];
            function v(t) {
                return !e.cssMode || t !== d.length - 1;
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length, b = this.snapGrid.length, w = e.spaceBetween, y = -f, x = 0, T = 0;
            if (void 0 !== s) {
                var E, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), 
                this.virtualSize = -w, a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, 
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0, I = void 0, D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)), A = k - e.slidesPerColumn * e.slidesPerGroup * O, G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            });
                        } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, 
                        (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px");
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var B = t.getComputedStyle($[0], null), H = $[0].style.transform, N = $[0].style.webkitTransform;
                            if (H && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), 
                            e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0); else if (this.isHorizontal()) {
                                var X = parseFloat(B.getPropertyValue("width")), V = parseFloat(B.getPropertyValue("padding-left")), Y = parseFloat(B.getPropertyValue("padding-right")), F = parseFloat(B.getPropertyValue("margin-left")), W = parseFloat(B.getPropertyValue("margin-right")), R = B.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
                            } else {
                                var q = parseFloat(B.getPropertyValue("height")), j = parseFloat(B.getPropertyValue("padding-top")), K = parseFloat(B.getPropertyValue("padding-bottom")), U = parseFloat(B.getPropertyValue("margin-top")), _ = parseFloat(B.getPropertyValue("margin-bottom")), Z = B.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
                            }
                            H && ($[0].style.transform = H), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S));
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), 
                        d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                        d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 
                        0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), 
                        e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), 
                        T % e.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, 
                        x = S, T += 1;
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, 
                this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }), e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J);
                    }
                    p = C;
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te);
                    }
                    p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
                }
                if (0 === p.length && (p = [ 0 ]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                    marginLeft: w + "px"
                }) : d.filter(v).css({
                    marginRight: w + "px"
                }) : d.filter(v).css({
                    marginBottom: w + "px"
                })), e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach(function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0);
                    });
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map(function(e) {
                        return e < 0 ? -f : e > se ? se + m : e;
                    });
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach(function(t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0);
                    }), (ae -= e.spaceBetween) < s) {
                        var re = (s - ae) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - re;
                        }), c.forEach(function(e, t) {
                            c[t] = e + re;
                        });
                    }
                }
                n.extend(this, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), 
                this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), 
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), 
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0]);
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s;
            }
            s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], 
                this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n], l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset), h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), 
                        this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass));
                    }
                    o.progress = a ? -l : l;
                }
                this.visibleSlides = s(this.visibleSlides);
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0;
            }
            var i = this.params, s = this.maxTranslate() - this.minTranslate(), a = this.progress, r = this.isBeginning, o = this.isEnd, l = r, d = o;
            0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, 
            o = a >= 1), n.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), 
            r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), 
            (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a);
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), 
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), 
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), 
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, o = this.activeIndex, l = this.realIndex, d = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), 
            h !== o) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                n.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: o,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), 
                (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange");
            } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"));
        },
        updateClickedSlide: function(e) {
            var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), 
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.wrapperEl, n = this.progress, o = 0, l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), 
            l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), 
            this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), 
            void 0 === s && (s = !0);
            var n = this, o = n.params, l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, 
                r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0;
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), 
            n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), 
            n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), 
                n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), 
                n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, 
                i && n.emit("transitionEnd"));
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), 
            n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), 
            !0;
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), 
                e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex, a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), 
                e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                }
            }
        }
    };
    var u = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this, n = e;
            n < 0 && (n = 0);
            var o = r.params, l = r.snapGrid, d = r.slidesGrid, h = r.previousIndex, p = r.activeIndex, c = r.rtlTranslate, u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.floor(n / o.slidesPerGroup);
            v >= l.length && (v = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var f, m = -l[v];
            if (r.updateProgress(m), o.normalizeSlideIndex) for (var g = 0; g < d.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * d[g]) && (n = g);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (p || 0) !== n) return !1;
            }
            if (f = n > p ? "next" : n < p ? "prev" : "reset", c && -m === r.translate || !c && m === r.translate) return r.updateActiveIndex(n), 
            o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(m), 
            "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1;
            if (o.cssMode) {
                var b = r.isHorizontal();
                return 0 === t ? u[b ? "scrollLeft" : "scrollTop"] = -m : u.scrollTo ? u.scrollTo(((a = {})[b ? "left" : "top"] = -m, 
                a.behavior = "smooth", a)) : u[b ? "scrollLeft" : "scrollTop"] = -m, !0;
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(n), 
            r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), 
            r.transitionEnd(i, f)) : (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(n), 
            r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), 
            r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), 
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), 
                r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, 
                r.transitionEnd(i, f));
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), 
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), 
            !0;
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, 
            this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map(function(e) {
                return l(e);
            }), c = (n.map(function(e) {
                return l(e);
            }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach(function(e) {
                !c && h >= e && (c = e);
            }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex, r = Math.floor(a / this.params.slidesPerGroup), n = this.rtlTranslate ? this.translate : -this.translate;
            if (n >= this.snapGrid[r]) {
                var o = this.snapGrid[r];
                n - o > (this.snapGrid[r + 1] - o) * s && (a += this.params.slidesPerGroup);
            } else {
                var l = this.snapGrid[r - 1];
                n - l <= (this.snapGrid[r] - l) * s && (a -= this.params.slidesPerGroup);
            }
            return a = Math.max(a, 0), a = Math.min(a, this.snapGrid.length - 1), this.slideTo(a, e, t, i);
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, o = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), 
                o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), 
                n.nextTick(function() {
                    t.slideTo(o);
                })) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), 
                n.nextTick(function() {
                    t.slideTo(o);
                })) : t.slideTo(o);
            } else t.slideTo(o);
        }
    };
    var v = {
        loopCreate: function() {
            var t = this, i = t.params, a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l);
                    }
                    r = a.children("." + i.slideClass);
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), 
            t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [], h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), 
                a.attr("data-swiper-slide-index", e);
            });
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
        },
        loopDestroy: function() {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), 
            i.removeAttr("data-swiper-slide-index");
        }
    };
    var f = {
        setGrabCursor: function(e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", 
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
            }
        },
        unsetGrabCursor: function() {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
        }
    };
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
        appendSlide: function(e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && o.observer || this.update();
        },
        prependSlide: function(e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1);
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else {
                for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                    var h = this.slides.eq(d);
                    h.remove(), l.unshift(h);
                }
                if ("object" == typeof t && "length" in t) {
                    for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a;
                } else i.append(t);
                for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
            }
        },
        removeSlide: function(e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), 
                a < r && (r -= 1);
                r = Math.max(r, 0);
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
        }
    }, I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!t.cordova && !t.phonegap),
        phonegap: !(!t.cordova && !t.phonegap),
        electron: !1
    }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), 
    T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), 
    C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, 
    P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, 
    $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), 
    $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], 
    b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", 
    b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), 
    T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, 
    b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), 
    b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, 
    b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, 
    b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), 
    b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);
    function D(i) {
        var a = this.touchEventsData, r = this.params, o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, 
            (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0; else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var h = o.currentX, p = o.currentY, c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection, u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!c || !(h <= u || h >= t.screen.width - u)) {
                    if (n.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, 
                    this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), 
                    "touchstart" !== l.type) {
                        var v = !0;
                        d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                        var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || f) && l.preventDefault();
                    }
                    this.emit("touchStart", l);
                }
            }
        }
    }
    function O(t) {
        var i = this.touchEventsData, a = this.params, r = this.touches, o = this.rtlTranslate, l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]), h = "touchmove" === l.type ? d.pageX : l.pageX, p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
                    if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, 
                    void (i.isMoved = !1);
                } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, 
                void (this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h, r.currentY = p;
                    var c = r.currentX - r.startX, u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, 
                        i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), 
                        i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), 
                            i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), 
                            this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), 
                            i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), 
                            this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", 
                            i.currentTranslate = f + i.startTranslate;
                            var m = !0, g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, 
                            a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, 
                            a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), 
                            m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), 
                            !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 
                            a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, 
                                r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), 
                            this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
    }
    function A(e) {
        var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, o = t.$wrapperEl, l = t.slidesGrid, d = t.snapGrid, h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), 
        i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), 
        i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), 
        i.lastClickTime = n.now(), n.nextTick(function() {
            t.destroyed || (t.allowClick = !0);
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, 
        i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, 
        !s.cssMode) if (s.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position, g = v.time - f.time;
                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), 
                    (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
                } else t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                r && (y = -y);
                var x, T, E = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), 
                x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), 
                s.loop && s.centeredSlides && (T = !0); else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), 
                x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), 
                s.loop && s.centeredSlides && (T = !0); else if (s.freeModeSticky) {
                    for (var C, M = 0; M < d.length; M += 1) if (d[M] > -y) {
                        C = M;
                        break;
                    }
                    y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1]);
                }
                if (T && t.once("transitionEnd", function() {
                    t.loopFix();
                }), 0 !== t.velocity) {
                    if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), 
                    s.freeModeSticky) {
                        var P = Math.abs((r ? -y : y) - t.translate), z = t.slidesSizesGrid[t.activeIndex];
                        b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
                    }
                } else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), 
                t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function() {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), 
                    t.setTranslate(x), o.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd();
                    }));
                })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), 
                t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function() {
                    t && !t.destroyed && t.transitionEnd();
                }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
            } else if (s.freeModeSticky) return void t.slideToClosest();
            (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), 
            t.updateSlidesClasses());
        } else {
            for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += s.slidesPerGroup) void 0 !== l[L + s.slidesPerGroup] ? p >= l[L] && p < l[L + s.slidesPerGroup] && (k = L, 
            $ = l[L + s.slidesPerGroup] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
            var I = (p - l[k]) / $;
            if (u > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (I >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), 
                "prev" === t.swipeDirection && (I > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k));
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), 
                "prev" === t.swipeDirection && t.slideTo(k));
            }
        }
    }
    function G() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), 
            this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), 
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), 
            this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
        }
    }
    function B(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), 
        e.stopImmediatePropagation()));
    }
    function H() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, 
        -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), 
        this.emit("setTranslate", this.translate, !1);
    }
    var N = !1;
    function X() {}
    var V = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, Y = {
        update: h,
        translate: p,
        transition: c,
        slide: u,
        loop: v,
        grabCursor: f,
        manipulation: L,
        events: {
            attachEvents: function() {
                var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl;
                this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), 
                t.cssMode && (this.onScroll = H.bind(this)), this.onClick = B.bind(this);
                var r = !!t.nested;
                if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), 
                e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1); else {
                    if (o.touch) {
                        var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), 
                        N || (e.addEventListener("touchstart", X), N = !0);
                    }
                    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), 
                    e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), 
                t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
            },
            detachEvents: function() {
                var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = !!t.nested;
                if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), 
                e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1); else {
                    if (o.touch) {
                        var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), 
                        s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
                    }
                    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), 
                    e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), 
                t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params, a = this.$el, r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var o = this.getBreakpoint(r);
                    if (o && this.currentBreakpoint !== o) {
                        var l = o in r ? r[o] : void 0;
                        l && [ "slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn" ].forEach(function(e) {
                            var t = l[e];
                            void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
                        });
                        var d = l || this.originalParams, h = s.slidesPerColumn > 1, p = d.slidesPerColumn > 1;
                        h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), 
                        "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var c = d.direction && d.direction !== s.direction, u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                        c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), 
                        this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var i = !1, s = [];
                    Object.keys(e).forEach(function(e) {
                        s.push(e);
                    }), s.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10);
                    });
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a];
                        r <= t.innerWidth && (i = r);
                    }
                    return i || "max";
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.params, t = this.isLocked, i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, 
                this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), 
                t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update());
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), 
                i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), 
                I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), 
                a.forEach(function(i) {
                    e.push(t.containerModifierClass + i);
                }), s.addClass(e.join(" "));
            },
            removeClasses: function() {
                var e = this.$el, t = this.classNames;
                e.removeClass(t.join(" "));
            }
        },
        images: {
            loadImage: function(e, i, s, a, r, n) {
                var o;
                function l() {
                    n && n();
                }
                e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), 
                s && (o.srcset = s), i && (o.src = i)) : l();
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), 
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), 
                    e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, F = {}, W = function(e) {
        function t() {
            for (var i, a, r, l = [], d = arguments.length; d--; ) l[d] = arguments[d];
            1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], 
            r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), 
            Object.keys(Y).forEach(function(e) {
                Object.keys(Y[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = Y[e][i]);
                });
            });
            var h = this;
            void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function(e) {
                var t = h.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], s = t.params[i];
                    if ("object" != typeof s || null === s) return;
                    if (!(i in r && "enabled" in s)) return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                        enabled: !1
                    });
                }
            });
            var p = n.extend({}, V);
            h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), 
            h.passedParams = n.extend({}, r), h.$ = s;
            var c = s(h.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each(function(e, i) {
                        var s = n.extend({}, r, {
                            el: i
                        });
                        u.push(new t(s));
                    }), u;
                }
                var v, f, m;
                return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function(e) {
                    return c.children(e);
                } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                    $el: c,
                    el: a,
                    $wrapperEl: v,
                    wrapperEl: v[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === h.params.direction;
                    },
                    isVertical: function() {
                        return "vertical" === h.params.direction;
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === v.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: h.params.allowSlideNext,
                    allowSlidePrev: h.params.allowSlidePrev,
                    touchEvents: (f = [ "touchstart", "touchmove", "touchend", "touchcancel" ], m = [ "mousedown", "mousemove", "mouseup" ], 
                    o.pointerEvents && (m = [ "pointerdown", "pointermove", "pointerup" ]), h.touchEventsTouch = {
                        start: f[0],
                        move: f[1],
                        end: f[2],
                        cancel: f[3]
                    }, h.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                    }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: n.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: h.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), h.useModules(), h.params.init && h.init(), h;
            }
        }
        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, 
                (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
            } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
            return r;
        }, t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), 
                e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), 
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate, i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
        }, t.prototype.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), 
            this.params.direction = e, this.slides.each(function(t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = "";
            }), this.emit("changeDirection"), t && this.update(), this);
        }, t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), 
            this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), 
            this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), 
            this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), 
            this.attachEvents(), this.initialized = !0, this.emit("init"));
        }, t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, o = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, 
            i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), 
            r.removeAttr("style"), o && o.length && o.removeClass([ s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), 
            i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e);
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), 
            i.destroyed = !0, null);
        }, t.extendDefaults = function(e) {
            n.extend(F, e);
        }, i.extendedDefaults.get = function() {
            return F;
        }, i.defaults.get = function() {
            return V;
        }, i.Class.get = function() {
            return e;
        }, i.$.get = function() {
            return s;
        }, Object.defineProperties(t, i), t;
    }(l), R = {
        name: "device",
        proto: {
            device: I
        },
        static: {
            device: I
        }
    }, q = {
        name: "support",
        proto: {
            support: o
        },
        static: {
            support: o
        }
    }, j = {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            var e = t.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }, K = {
        name: "browser",
        proto: {
            browser: j
        },
        static: {
            browser: j
        }
    }, U = {
        name: "resize",
        create: function() {
            var e = this;
            n.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange");
                    }
                }
            });
        },
        on: {
            init: function() {
                t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
            },
            destroy: function() {
                t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
            }
        }
    }, _ = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, i) {
            void 0 === i && (i = {});
            var s = this, a = new (0, _.func)(function(e) {
                if (1 !== e.length) {
                    var i = function() {
                        s.emit("observerUpdate", e[0]);
                    };
                    t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0);
                } else s.emit("observerUpdate", e[0]);
            });
            a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
            }), s.observer.observers.push(a);
        },
        init: function() {
            if (o.observer && this.params.observer) {
                if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }), this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                });
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect();
            }), this.observer.observers = [];
        }
    }, Z = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            n.extend(this, {
                observer: {
                    init: _.init.bind(this),
                    attach: _.attach.bind(this),
                    destroy: _.destroy.bind(this),
                    observers: []
                }
            });
        },
        on: {
            init: function() {
                this.observer.init();
            },
            destroy: function() {
                this.observer.destroy();
            }
        }
    }, Q = {
        update: function(e) {
            var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, o = t.params.virtual, l = o.addSlidesBefore, d = o.addSlidesAfter, h = t.virtual, p = h.from, c = h.to, u = h.slides, v = h.slidesGrid, f = h.renderSlide, m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, 
            w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
            var x = Math.max((y || 0) - w, 0), T = Math.min((y || 0) + b, u.length - 1), E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
            }
            if (n.extend(t.virtual, {
                from: x,
                to: T,
                offset: E,
                slidesGrid: t.slidesGrid
            }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), 
            void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: E,
                from: x,
                to: T,
                slides: function() {
                    for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                    return e;
                }()
            }), void S();
            var C = [], M = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var P = p; P <= c; P += 1) (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), 
            z < p && C.push(z)));
            M.forEach(function(e) {
                t.$wrapperEl.append(f(u[e], e));
            }), C.sort(function(e, t) {
                return t - e;
            }).forEach(function(e) {
                t.$wrapperEl.prepend(f(u[e], e));
            }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S();
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), 
            i.cache && (this.virtual.cache[t] = a), a;
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
            this.virtual.update(!0);
        },
        prependSlide: function(e) {
            var t = this.activeIndex, i = t + 1, s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length, s = e.length;
            } else this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache, n = {};
                Object.keys(r).forEach(function(e) {
                    var t = r[e], i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
                }), this.virtual.cache = n;
            }
            this.virtual.update(!0), this.slideTo(i, 0);
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), 
                this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), 
                t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], 
                e < t && (t -= 1), t = Math.max(t, 0);
                this.virtual.update(!0), this.slideTo(t, 0);
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), 
            this.virtual.update(!0), this.slideTo(0, 0);
        }
    }, J = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            n.extend(this, {
                virtual: {
                    update: Q.update.bind(this),
                    appendSlide: Q.appendSlide.bind(this),
                    prependSlide: Q.prependSlide.bind(this),
                    removeSlide: Q.removeSlide.bind(this),
                    removeAllSlides: Q.removeAllSlides.bind(this),
                    renderSlide: Q.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            });
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update();
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update();
            }
        }
    }, ee = {
        handle: function(i) {
            var s = this.rtlTranslate, a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                    var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [ [ d.left, d.top ], [ d.left + this.width, d.top ], [ d.left, d.top + this.height ], [ d.left + this.width, d.top + this.height ] ], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
                    }
                    if (!n) return;
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 
                (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), 
                (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 
                34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), 
                this.emit("keyPress", r);
            }
        },
        enable: function() {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
        },
        disable: function() {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
        }
    }, te = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            n.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: ee.enable.bind(this),
                    disable: ee.disable.bind(this),
                    handle: ee.handle.bind(this)
                }
            });
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable();
            }
        }
    };
    var ie = {
        lastScrollTime: n.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var t = "onwheel" in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), 
                t;
            }() ? "wheel" : "mousewheel";
        },
        normalize: function(e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), 
            "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), 
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, 
            "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, 
            a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, 
            a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            };
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0;
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1;
        },
        handle: function(e) {
            var t = e, i = this, s = i.params.mousewheel;
            if (i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var a = 0, r = i.rtlTranslate ? -1 : 1, o = ie.normalize(t);
            if (s.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                a = o.pixelX * r;
            } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                a = o.pixelY;
            } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
            if (0 === a) return !0;
            if (s.invert && (a = -a), i.params.freeMode) {
                var l = {
                    time: n.now(),
                    delta: Math.abs(a),
                    direction: Math.sign(a)
                }, d = i.mousewheel.lastEventBeforeSnap, h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                if (!h) {
                    i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                    var p = i.getTranslate() + a * s.sensitivity, c = i.isBeginning, u = i.isEnd;
                    if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), 
                    i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), 
                    i.updateSlidesClasses(), (!c && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), 
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                        var v = i.mousewheel.recentWheelEvents;
                        v.length >= 15 && v.shift();
                        var f = v.length ? v[v.length - 1] : void 0, m = v[0];
                        if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0); else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
                            var g = a > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = n.nextTick(function() {
                                i.slideToClosest(i.params.speed, !0, void 0, g);
                            }, 0);
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function() {
                            i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
                        }, 500));
                    }
                    if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), 
                    p === i.minTranslate() || p === i.maxTranslate()) return !0;
                }
            } else {
                var b = {
                    time: n.now(),
                    delta: Math.abs(a),
                    direction: Math.sign(a),
                    raw: e
                }, w = i.mousewheel.recentWheelEvents;
                w.length >= 2 && w.shift();
                var y = w.length ? w[w.length - 1] : void 0;
                if (w.push(b), y ? (b.direction !== y.direction || b.delta > y.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), 
                i.mousewheel.releaseScroll(b)) return !0;
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
        },
        animateSlider: function(e) {
            return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), 
            this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), 
            this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), 
            !1);
        },
        releaseScroll: function(e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
            return !1;
        },
        enable: function() {
            var e = ie.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), 
            !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), 
            t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), 
            t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
        },
        disable: function() {
            var e = ie.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), 
            !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), 
            t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
        }
    }, se = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), 
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), 
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), 
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
        },
        onNextClick: function(e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), 
            i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), 
            e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), 
            n.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }));
        },
        destroy: function() {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), 
            i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
        }
    }, ae = {
        update: function() {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), 
                i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, 
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), 
                    r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), 
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, 
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), 
                    o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), 
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), 
                    r.length > 1) h.each(function(e, a) {
                        var r = s(a), n = r.index();
                        n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), 
                        n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), 
                        n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
                    }); else {
                        var p = h.eq(i), c = p.index();
                        if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop) if (c >= h.length - t.dynamicMainBullets) {
                                for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                            } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), 
                            v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"); else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), 
                            v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4), b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize, w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px");
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), 
                r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / n, T = 1, E = 1;
                    "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed);
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), 
                this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), 
                r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', 
                i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', 
                i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
            }
        },
        init: function() {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), 
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), 
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), 
                e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), 
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), 
                t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }), n.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }));
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), 
                e.clickable && t.off("click", "." + e.bulletClass);
            }
        }
    }, re = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize, r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, 
                d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), 
                r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), 
                r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), 
                n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                    n[0].style.opacity = 0, n.transition(400);
                }, 1e3));
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, o = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), 
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", 
                i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), 
                n.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: o,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), 
            t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, 
            e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), 
            clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), 
            this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
        },
        onDragMove: function(e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 
            t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), 
            s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function() {
                a.css("opacity", 0), a.transition(400);
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), 
                r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), 
                e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), 
                r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), 
                e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), 
                a.append(r)), n.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable();
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable();
        }
    }, ne = {
        setTransform: function(e, t) {
            var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0", o = a.attr("data-swiper-parallax-x"), l = a.attr("data-swiper-parallax-y"), d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, 
            o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", 
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p;
            }
            if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)"); else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
            }
        },
        setTranslate: function() {
            var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                e.parallax.setTransform(i, a);
            }), i.each(function(t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), 
                n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                    e.parallax.setTransform(i, n);
                });
            });
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r);
            });
        }
    }, oe = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
        },
        onGestureStart: function(e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e);
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 
            0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), 
            a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 
            0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
        },
        onGestureChange: function(e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!o.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e);
            }
            s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, 
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), 
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), 
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!o.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), 
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), 
            i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
        },
        onTouchStart: function(e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), 
            s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, 
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
        },
        onTouchMove: function(e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, 
                s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, 
                i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, 
                i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, o = s.height * t.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), 
                    s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, 
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), 
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), 
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), 
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), 
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), 
                    a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, 
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), 
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, 
                    a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), 
                i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), 
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), 
            t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, 
            t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function(e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), 
            y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), 
            y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), 
            void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, 
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, 
            i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, 
            b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, 
            g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, 
            l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, 
            p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), 
            (n = a * b.scale) < c && (n = c), n > v && (n = v), (o = r * b.scale) < u && (o = u), 
            o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), 
            y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
        },
        out: function() {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), 
            i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), 
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), 
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), 
            i.$slideEl = void 0);
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !o.passiveListener || {
                    passive: !1,
                    capture: !0
                };
                o.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), 
                this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), 
                this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), 
                this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), 
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !o.passiveListener || {
                    passive: !1,
                    capture: !0
                };
                o.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), 
                this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), 
                this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), 
                this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), 
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
            }
        }
    }, le = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this, a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e), n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 
                0 !== n.length && n.each(function(e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"), p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), 
                            o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), 
                            d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), 
                            r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1);
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1);
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0]);
                        }
                    }), i.emit("lazyImageLoad", r[0], o[0]);
                });
            }
        },
        load: function() {
            var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex, n = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                } else if (a[e]) return !0;
                return !1;
            }
            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
            }
            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), 
            e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a);
            }); else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(r);
            if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
            } else {
                var b = t.children("." + i.slideNextClass);
                b.length > 0 && e.lazy.loadInSlide(h(b));
                var w = t.children("." + i.slidePrevClass);
                w.length > 0 && e.lazy.loadInSlide(h(w));
            }
        }
    }, de = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1, i = e.length; i - s > 1; ) e[a = i + s >> 1] <= t ? s = a : i = a;
                return i;
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
            }, this;
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid));
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), 
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), 
                s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), 
                e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]); else r instanceof W && t !== r && n(r);
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick(function() {
                    t.updateAutoHeight();
                }), t.$wrapperEl.transitionEnd(function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
            }
            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]); else a instanceof W && t !== a && r(a);
        }
    }, he = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"), e;
        },
        addElRole: function(e, t) {
            return e.attr("role", t), e;
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t), e;
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0), e;
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), 
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), 
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), 
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), 
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), 
                t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
            }
        },
        updatePagination: function() {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
            });
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), 
            e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), 
            e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), 
            this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), 
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), 
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), 
            e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), 
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
        }
    }, pe = {
        init: function() {
            if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, 
                void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), 
                this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
            }
        },
        destroy: function() {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function() {
            this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
        },
        getPathValues: function() {
            var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e;
            }), i = e.length;
            return {
                key: e[i - 2],
                value: e[i - 1]
            };
        },
        setHistory: function(e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i), a = pe.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                    value: a
                }, null, a) : t.history.pushState({
                    value: a
                }, null, a));
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        scrollToSlide: function(e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i);
                }
            } else this.slideTo(0, e, i);
        }
    }, ce = {
        onHashCange: function() {
            var t = e.location.hash.replace("#", "");
            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i) return;
                this.slideTo(i);
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                e.location.hash = s || "";
            }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
                    var n = this.slides.eq(a);
                    if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                    }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
        }
    }, ue = {
        run: function() {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), 
            clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), 
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), 
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), 
                e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), 
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), 
                e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, i);
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, 
            this.emit("autoplayStart"), this.autoplay.run(), !0));
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), 
            this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), 
            !0));
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), 
            this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), 
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, 
            this.autoplay.run())));
        }
    }, ve = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
            }
        },
        setTransition: function(e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function() {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for (var e = [ "webkitTransitionEnd", "transitionend" ], i = 0; i < e.length; i += 1) s.trigger(e[i]);
                    }
                });
            }
        }
    }, fe = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), 
            i.append(e)), e.css({
                height: r + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), 
            t.append(e)));
            for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, 
                x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, 
                w = 0);
                var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), 
                d.slideShadows) {
                    var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), 
                    v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), 
                    v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2), P = d.shadowScale, z = d.shadowScale / M, k = d.shadowOffset;
                e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)");
            }
            var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
        }
    }, me = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i), r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, 
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), 
                    a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                    a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
        },
        setTransition: function(e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for (var e = [ "webkitTransitionEnd", "transitionend" ], i = 0; i < e.length; i += 1) a.trigger(e[i]);
                    }
                });
            }
        }
    }, ge = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u), m = r[u], g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = l ? p * g : 0, w = l ? 0 : p * g, y = -c * Math.abs(g), x = l ? 0 : n.stretch * g, T = l ? n.stretch * g : 0;
                Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), 
                Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                    var S = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), C = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), 
                    f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), 
                    f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
                }
            }
            (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%");
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        }
    }, be = {
        init: function() {
            var e = this.params.thumbs, t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), n.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), 
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex, i = e.clickedSlide;
                if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var a;
                    if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, 
                    this.params.loop) {
                        var r = this.activeIndex;
                        this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), 
                        this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                        var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(), o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                        a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
                    }
                    this.slideTo(a);
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                    var s, a = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, 
                        a = t.activeIndex);
                        var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r;
                    } else s = this.realIndex;
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), 
                    t.slideTo(s, e ? 0 : void 0));
                }
                var o = 1, l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), 
                this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), 
                t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l); else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l);
            }
        }
    }, we = [ R, q, K, U, Z, J, te, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            n.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: ie.enable.bind(this),
                    disable: ie.disable.bind(this),
                    handle: ie.handle.bind(this),
                    handleMouseEnter: ie.handleMouseEnter.bind(this),
                    handleMouseLeave: ie.handleMouseLeave.bind(this),
                    animateSlider: ie.animateSlider.bind(this),
                    releaseScroll: ie.releaseScroll.bind(this),
                    lastScrollTime: n.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            });
        },
        on: {
            init: function() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), 
                this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function() {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            n.extend(this, {
                navigation: {
                    init: se.init.bind(this),
                    update: se.update.bind(this),
                    destroy: se.destroy.bind(this),
                    onNextClick: se.onNextClick.bind(this),
                    onPrevClick: se.onPrevClick.bind(this)
                }
            });
        },
        on: {
            init: function() {
                this.navigation.init(), this.navigation.update();
            },
            toEdge: function() {
                this.navigation.update();
            },
            fromEdge: function() {
                this.navigation.update();
            },
            destroy: function() {
                this.navigation.destroy();
            },
            click: function(e) {
                var t, i = this.navigation, a = i.$nextEl, r = i.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), 
                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), 
                a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass));
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e;
                },
                formatFractionTotal: function(e) {
                    return e;
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            n.extend(this, {
                pagination: {
                    init: ae.init.bind(this),
                    render: ae.render.bind(this),
                    update: ae.update.bind(this),
                    destroy: ae.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            });
        },
        on: {
            init: function() {
                this.pagination.init(), this.pagination.render(), this.pagination.update();
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(), this.pagination.update());
            },
            destroy: function() {
                this.pagination.destroy();
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), 
                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            n.extend(this, {
                scrollbar: {
                    init: re.init.bind(this),
                    destroy: re.destroy.bind(this),
                    updateSize: re.updateSize.bind(this),
                    setTranslate: re.setTranslate.bind(this),
                    setTransition: re.setTransition.bind(this),
                    enableDraggable: re.enableDraggable.bind(this),
                    disableDraggable: re.disableDraggable.bind(this),
                    setDragPosition: re.setDragPosition.bind(this),
                    getPointerPosition: re.getPointerPosition.bind(this),
                    onDragStart: re.onDragStart.bind(this),
                    onDragMove: re.onDragMove.bind(this),
                    onDragEnd: re.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            });
        },
        on: {
            init: function() {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
            },
            update: function() {
                this.scrollbar.updateSize();
            },
            resize: function() {
                this.scrollbar.updateSize();
            },
            observerUpdate: function() {
                this.scrollbar.updateSize();
            },
            setTranslate: function() {
                this.scrollbar.setTranslate();
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e);
            },
            destroy: function() {
                this.scrollbar.destroy();
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            n.extend(this, {
                parallax: {
                    setTransform: ne.setTransform.bind(this),
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e);
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                t[i] = oe[i].bind(e);
            }), n.extend(e, {
                zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i;
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a);
                    }
                    i = t;
                }
            });
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function() {
                this.zoom.disable();
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
            },
            slideChange: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            n.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: le.load.bind(this),
                    loadInSlide: le.loadInSlide.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
            },
            slideChange: function() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            n.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: de.getInterpolateFunction.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            });
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, 
                delete this.controller.spline);
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, 
                delete this.controller.spline);
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, 
                delete this.controller.spline);
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t);
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            n.extend(e, {
                a11y: {
                    liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }), Object.keys(he).forEach(function(t) {
                e.a11y[t] = he[t].bind(e);
            });
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy();
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            n.extend(this, {
                history: {
                    init: pe.init.bind(this),
                    setHistory: pe.setHistory.bind(this),
                    setHistoryPopState: pe.setHistoryPopState.bind(this),
                    scrollToSlide: pe.scrollToSlide.bind(this),
                    destroy: pe.destroy.bind(this)
                }
            });
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init();
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
            },
            slideChange: function() {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            n.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: ce.init.bind(this),
                    destroy: ce.destroy.bind(this),
                    setHash: ce.setHash.bind(this),
                    onHashCange: ce.onHashCange.bind(this)
                }
            });
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy();
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
            slideChange: function() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var e = this;
            n.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: ue.run.bind(e),
                    start: ue.start.bind(e),
                    stop: ue.stop.bind(e),
                    pause: ue.pause.bind(e),
                    onVisibilityChange: function() {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), 
                        "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), 
                        e.autoplay.paused = !1);
                    },
                    onTransitionEnd: function(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), 
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), 
                        e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                    }
                }
            });
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
            },
            touchEnd: function() {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            n.extend(this, {
                fadeEffect: {
                    setTranslate: ve.setTranslate.bind(this),
                    setTransition: ve.setTransition.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e);
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            n.extend(this, {
                cubeEffect: {
                    setTranslate: fe.setTranslate.bind(this),
                    setTransition: fe.setTransition.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e);
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            n.extend(this, {
                flipEffect: {
                    setTranslate: me.setTranslate.bind(this),
                    setTransition: me.setTransition.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e);
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e);
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            n.extend(this, {
                coverflowEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), 
                this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, 
                this.originalParams.watchSlidesProgress = !0);
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            n.extend(this, {
                thumbs: {
                    swiper: null,
                    init: be.init.bind(this),
                    update: be.update.bind(this),
                    onThumbClick: be.onThumbClick.bind(this)
                }
            });
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update();
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update();
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update();
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e);
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
            }
        }
    } ];
    return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), 
    W.use(we), W;
});

//# sourceMappingURL=swiper.min.js.map
/*! jQuery Validation Plugin - v1.19.2 - 5/23/2020
 * https://jqueryvalidation.org/
 * Copyright (c) 2020 Jörn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), 
            a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), 
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), 
                    !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), 
                    d && d.remove(), void 0 !== e && e);
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, 
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), 
                !1);
            })), c);
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), 
            this.each(function() {
                b = c.element(this) && b, b || (d = d.concat(c.errorList));
            }), c.errorList = d), b;
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0], k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), 
            null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), 
                b) {
                  case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;

                  case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
                        i[b] = f[b], delete f[b];
                    }), i) : (delete e[j.name], f);
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), 
                g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g;
            }
        }
    });
    var b = function(a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(c) {
            return !b("" + a(c).val());
        },
        filled: function(c) {
            var d = a(c).val();
            return null !== d && !!b("" + d);
        },
        unchecked: function(b) {
            return !a(b).prop("checked");
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, 
        this.init();
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), 
        c.constructor !== Array && (c = [ c ]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c;
            });
        }), b);
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
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
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), 
                this.hideThese(this.errorsFor(a)));
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
            },
            onkeyup: function(b, c) {
                var d = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
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
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), 
                    d === this.form) {
                        var e = a.data(this.form, "validator"), f = "on" + b.type.replace(/^validate/, ""), g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
                    }
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), 
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), 
                this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, 
                this.invalid = {}, this.reset();
                var c, d = this.currentForm, e = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        e[c] = b;
                    });
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d);
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), 
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), 
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), 
                this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid();
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), 
                d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), 
                    e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, 
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), 
                a(b).attr("aria-invalid", !c)), h;
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        };
                    }), this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, 
                this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b);
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), 
                this.findByName(a[b].name).removeClass(this.settings.validClass); else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
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
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name;
                }).length && b;
            },
            elements: function() {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name"), e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), 
                    e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, 
                    !0));
                });
            },
            clean: function(b) {
                return a(b)[0];
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), 
                this.toHide = a([]);
            },
            reset: function() {
                this.resetInternals(), this.currentElements = a([]);
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a);
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type, g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), 
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), 
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(), h = a.map(g, function(a, b) {
                    return b;
                }).length, i = !1, j = this.elementValue(b);
                "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), 
                f && (j = f.call(b, j), delete g.normalizer);
                for (d in g) {
                    e = {
                        method: d,
                        parameters: g[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue;
                        }
                        if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1;
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), 
                        k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), 
                        k;
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0;
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b]);
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"), e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), 
                d;
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), 
                this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
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
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), 
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), 
                d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), 
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), 
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), 
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, 
                a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), 
                this.toShow = this.toShow.add(h);
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type);
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                  case "select":
                    return a("option:selected", c).length;

                  case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                }
                return b.length;
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b);
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
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), 
                this.pending[b.name] = !0);
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], 
                a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), 
                this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), 
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [ this ]), 
                this.formSubmitted = !1);
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                });
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
        },
        classRules: function(b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
            }), c;
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), 
            isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), 
            d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, 
            e;
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), 
            "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
            return e;
        },
        staticRules: function(b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), 
            c;
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
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
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), 
                    delete b[d]);
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
            }), a.each([ "minlength", "maxlength" ], function() {
                b[this] && (b[this] = Number(b[this]));
            }), a.each([ "rangelength", "range" ], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [ Number(b[this][0]), Number(b[this][1]) ] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), 
                b[this] = [ Number(c[0]), Number(c[1]) ]));
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [ b.min, b.max ], 
            delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [ b.minlength, b.maxlength ], 
            delete b.minlength, delete b.maxlength)), b;
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0;
                }), b = c;
            }
            return b;
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0;
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
            },
            date: function() {
                var a = !1;
                return function(b, c) {
                    return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), 
                    this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
                };
            }(),
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d;
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d;
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1];
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c;
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c;
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1];
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = [ "text", "number", "range" ], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?$/);
                    return b && b[1] ? b[1].length : 0;
                }, l = function(a) {
                    return Math.round(a * Math.pow(10, e));
                }, m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid();
                }), b === e.val();
            },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), 
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, 
                d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), 
                g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), 
                        f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, 
                        f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, 
                        f.stopRequest(c, j);
                    }
                }, d)), "pending");
            }
        }
    });
    var c, d = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, c) {
        var e = a.port;
        "abort" === a.mode && (d[e] && d[e].abort(), d[e] = c);
    }) : (c = a.ajax, a.ajax = function(b) {
        var e = ("mode" in b ? b : a.ajaxSettings).mode, f = ("port" in b ? b : a.ajaxSettings).port;
        return "abort" === e ? (d[f] && d[f].abort(), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments);
    }), a;
});

/*!
 * GSAP 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = t || self).window = t.window || {});
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    }
    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function n(t) {
        return "string" == typeof t;
    }
    function o(t) {
        return "function" == typeof t;
    }
    function p(t) {
        return "number" == typeof t;
    }
    function q(t) {
        return void 0 === t;
    }
    function r(t) {
        return "object" == typeof t;
    }
    function s(t) {
        return !1 !== t;
    }
    function t() {
        return "undefined" != typeof window;
    }
    function u(t) {
        return o(t) || n(t);
    }
    function K(t) {
        return (l = mt(t, ot)) && ae;
    }
    function L(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    }
    function M(t, e) {
        return !e && console.warn(t);
    }
    function N(t, e) {
        return t && (ot[t] = e) && l && (l[t] = e) || ot;
    }
    function O() {
        return 0;
    }
    function Y(t) {
        var e, i, n = t[0];
        if (r(n) || o(n) || (t = [ t ]), !(e = (n._gsap || {}).harness)) {
            for (i = _t.length; i-- && !_t[i].targetTest(n); ) ;
            e = _t[i];
        }
        for (i = t.length; i--; ) t[i] && (t[i]._gsap || (t[i]._gsap = new It(t[i], e))) || t.splice(i, 1);
        return t;
    }
    function Z(t) {
        return t._gsap || Y(bt(t))[0]._gsap;
    }
    function $(t, e, r) {
        return (r = t[e]) && o(r) ? t[e]() : q(r) && t.getAttribute && t.getAttribute(e) || r;
    }
    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t;
    }
    function aa(t) {
        return Math.round(1e5 * t) / 1e5 || 0;
    }
    function ba(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; ) ;
        return i < r;
    }
    function ca(t, e, r) {
        var i, n = p(t[1]), a = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
        if (n && (o.duration = t[1]), o.parent = r, e) {
            for (i = o; r && !("immediateRender" in i); ) i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
            o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];
        }
        return o;
    }
    function da() {
        var t, e, r = ht.length, i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function ea(t, e, r, i) {
        ht.length && da(), t.render(e, r, i), ht.length && da();
    }
    function fa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(st).length < 2 ? e : n(t) ? t.trim() : t;
    }
    function ga(t) {
        return t;
    }
    function ha(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
    }
    function ia(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    }
    function ka(t, e) {
        for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
        return t;
    }
    function la(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i;
    }
    function ma(t) {
        var e = t.parent || E, r = t.keyframes ? ia : ha;
        if (s(t.inherit)) for (;e; ) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t;
    }
    function pa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev, a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), 
        e._next = e._prev = e.parent = null;
    }
    function qa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
    }
    function ra(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) r._dirty = 1, 
        r = r.parent;
        return t;
    }
    function ua(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    }
    function wa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    }
    function xa(t) {
        return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0));
    }
    function ya(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = aa(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), 
        xa(t), r._dirty || ra(r, t)), t;
    }
    function za(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)), 
        ra(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for (r = t; r._dp; ) 0 <= r.rawTime() && r.totalTime(r._tTime), 
            r = r._dp;
            t._zTime = -U;
        }
    }
    function Aa(t, e, r, i) {
        return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), 
        function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
            s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, 
            e._prev = s, e.parent = e._dp = t;
        }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || za(t, e), 
        t;
    }
    function Ba(t, e) {
        return (ot.ScrollTrigger || L("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
    }
    function Ca(t, e, r, i) {
        return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== At.frame ? (ht.push(t), 
        t._lazy = [ e, i ], 1) : void 0 : 1;
    }
    function Fa(t, e, r, i) {
        var n = t._repeat, a = aa(e) || 0, s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : aa(a * (n + 1) + t._rDelay * n) : a, 
        s && !i ? ya(t, t._tTime = t._tDur * s) : t.parent && xa(t), r || ra(t.parent, t), 
        t;
    }
    function Ga(t) {
        return t instanceof Bt ? ra(t) : Fa(t, t._dur);
    }
    function Ia(t, e) {
        var r, i, a = t.labels, s = t._recent || vt, o = t.duration() >= B ? s.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), 
        a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;
    }
    function Ja(t, e) {
        return t || 0 === t ? e(t) : e;
    }
    function La(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : "";
    }
    function Oa(t, e) {
        return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i;
    }
    function Ra(t) {
        return t.sort(function() {
            return .5 - Math.random();
        });
    }
    function Sa(t) {
        if (o(t)) return t;
        var _ = r(t) ? t : {
            each: t
        }, c = Rt(_.ease), m = _.from || 0, g = parseFloat(_.base) || 0, v = {}, e = 0 < m && m < 1, y = isNaN(m) || e, T = _.axis, b = m, w = m;
        return n(m) ? b = w = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (b = m[0], w = m[1]), function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || _).length, p = v[d];
            if (!p) {
                if (!(f = "auto" === _.grid ? 0 : (_.grid || [ 1, B ])[1])) {
                    for (h = -B; h < (h = r[f++].getBoundingClientRect().left) && f < d; ) ;
                    f--;
                }
                for (p = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, 
                l = B, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), p[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), 
                h < o && (h = o), o < l && (l = o);
                "random" === m && Ra(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), 
                p.b = d < 0 ? g - d : g, p.u = La(_.amount || _.each) || 0, c = c && d < 0 ? Ft(c) : c;
            }
            return d = (p[t] - p.min) / p.max || 0, aa(p.b + (c ? c(d) : d) * p.v) + p.u;
        };
    }
    function Ta(e) {
        var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : La(t));
        };
    }
    function Ua(u, t) {
        var h, l, e = tt(u);
        return !e && r(u) && (h = e = u.radius || B, u.values ? (u = bt(u.values), (l = !p(u[0])) && (h *= h)) : u = Ta(u.increment)), 
        Ja(t, e ? o(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t;
        } : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = B, s = 0, o = u.length; o--; ) (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, 
            s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + La(t);
        } : Ta(u));
    }
    function Va(t, e, r, i) {
        return Ja(tt(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return tt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;
        });
    }
    function Za(e, r, t) {
        return Ja(t, function(t) {
            return e[~~r(t)];
        });
    }
    function ab(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); ) i = t.indexOf(")", e), 
        n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? st : et), 
        s += t.substr(a, e - a) + Va(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a);
    }
    function db(t, e, r) {
        var i, n, a, s = t.labels, o = B;
        for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, 
        o = n);
        return a;
    }
    function fb(t) {
        return qa(t), t.progress() < 1 && xt(t, "onInterrupt"), t;
    }
    function kb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0;
    }
    function lb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, _ = t ? p(t) ? [ t >> 16, t >> 8 & kt, t & kt ] : 0 : Ot.black;
        if (!_) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ot[t]) _ = Ot[t]; else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), 
            _ = [ (t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt ]; else if ("hsl" === t.substr(0, 3)) if (_ = d = t.match(et), 
            e) {
                if (~t.indexOf("=")) return _ = t.match(rt), r && _.length < 4 && (_[3] = 1), _;
            } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 
            3 < _.length && (_[3] *= 1), _[0] = kb(s + 1 / 3, i, n), _[1] = kb(s, i, n), _[2] = kb(s - 1 / 3, i, n); else _ = t.match(et) || Ot.transparent;
            _ = _.map(Number);
        }
        return e && !d && (i = _[0] / kt, n = _[1] / kt, a = _[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, 
        h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, 
        s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), 
        r && _.length < 4 && (_[3] = 1), _;
    }
    function mb(t) {
        var r = [], i = [], n = -1;
        return t.split(Mt).forEach(function(t) {
            var e = t.match(it) || [];
            r.push.apply(r, e), i.push(n += e.length + 1);
        }), r.c = i, r;
    }
    function nb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(Mt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
            return (t = lb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
        }), r && (a = mb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Mt, "1").split(it)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n) for (s = (n = t.split(Mt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s];
    }
    function qb(t) {
        var e, r = t.join(" ");
        if (Mt.lastIndex = 0, Mt.test(r)) return e = Ct.test(r), t[1] = nb(t[1], e), t[0] = nb(t[0], e, mb(t[1])), 
        !0;
    }
    function zb(t) {
        var e = (t + "").split("("), r = Dt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], 
            e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, 
            s = r.substr(e + 1).trim();
            return n;
        }(e[1]) ] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
        }(t).split(",").map(fa)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r;
    }
    function Bb(t, e) {
        for (var r, i = t._first; i; ) i instanceof Bt ? Bb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Bb(i.timeline, e) : (r = i._ease, 
        i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
    function Db(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t);
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return _(t, function(t) {
            for (var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a) Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e];
        }), a;
    }
    function Eb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
        };
    }
    function Fb(r, t, e) {
        function ul(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1;
        }
        var i = 1 <= t ? t : 1, n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1), a = n / V * (Math.asin(1 / i) || 0), s = "out" === r ? ul : "in" === r ? function(t) {
            return 1 - ul(1 - t);
        } : Eb(ul);
        return n = V / n, s.config = function(t, e) {
            return Fb(r, t, e);
        }, s;
    }
    function Gb(e, r) {
        function Cl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Cl : "in" === e ? function(t) {
            return 1 - Cl(1 - t);
        } : Eb(Cl);
        return t.config = function(t) {
            return Gb(e, t);
        }, t;
    }
    var E, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, C, A, P, D, S, z, F, R, j = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, I = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, B = 1e8, U = 1 / B, V = 2 * Math.PI, X = V / 4, G = 0, J = Math.sqrt, Q = Math.cos, W = Math.sin, H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}, tt = Array.isArray, et = /(?:-?\.?\d|\.)+/gi, rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, nt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, at = /[+-]=-?[\.\d]+/, st = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, pt = 30, _t = [], ct = "", mt = function _merge(t, e) {
        for (var r in e) t[r] = e[r];
        return t;
    }, gt = function _animationCycle(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    }, vt = {
        _start: 0,
        endTime: O
    }, yt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r;
    }, Tt = [].slice, bt = function toArray(t, e) {
        return !n(t) || e || !a && Pt() ? tt(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []), t.forEach(function(t) {
                return n(t) && !e || Oa(t, 1) ? r.push.apply(r, bt(t)) : r.push(t);
            }) || r;
        }(t, e) : Oa(t) ? Tt.call(t, 0) : t ? [ t ] : [] : Tt.call(h.querySelectorAll(t), 0);
    }, wt = function mapRange(e, t, r, i, n) {
        var a = t - e, s = i - r;
        return Ja(n, function(t) {
            return r + ((t - e) / a * s || 0);
        });
    }, xt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && da(), 
        i ? s.apply(n, i) : s.call(n);
    }, kt = 255, Ot = {
        aqua: [ 0, kt, kt ],
        lime: [ 0, kt, 0 ],
        silver: [ 192, 192, 192 ],
        black: [ 0, 0, 0 ],
        maroon: [ 128, 0, 0 ],
        teal: [ 0, 128, 128 ],
        blue: [ 0, 0, kt ],
        navy: [ 0, 0, 128 ],
        white: [ kt, kt, kt ],
        olive: [ 128, 128, 0 ],
        yellow: [ kt, kt, 0 ],
        orange: [ kt, 165, 0 ],
        gray: [ 128, 128, 128 ],
        purple: [ 128, 0, 128 ],
        green: [ 0, 128, 0 ],
        red: [ kt, 0, 0 ],
        pink: [ kt, 192, 203 ],
        cyan: [ 0, kt, kt ],
        transparent: [ kt, kt, kt, 0 ]
    }, Mt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in Ot) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
    }(), Ct = /hsl[a]?\(/, At = (x = Date.now, k = 500, C = 33, A = x(), P = A, S = D = 1e3 / 240, 
    T = {
        time: 0,
        frame: 0,
        tick: function tick() {
            qk(!0);
        },
        deltaRatio: function deltaRatio(t) {
            return b / (1e3 / (t || 60));
        },
        wake: function wake() {
            f && (!a && t() && (i = a = window, h = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), 
            K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), 
            g && T.sleep(), v = y || function(t) {
                return setTimeout(t, S - 1e3 * T.time + 1 | 0);
            }, m = 1, qk(2));
        },
        sleep: function sleep() {
            (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O;
        },
        lagSmoothing: function lagSmoothing(t, e) {
            k = t || 1e8, C = Math.min(e, k, 0);
        },
        fps: function fps(t) {
            D = 1e3 / (t || 240), S = 1e3 * T.time + D;
        },
        add: function add(t) {
            z.indexOf(t) < 0 && z.push(t), Pt();
        },
        remove: function remove(t) {
            var e;
            ~(e = z.indexOf(t)) && z.splice(e, 1) && e <= w && w--;
        },
        _listeners: z = []
    }), Pt = function _wake() {
        return !m && At.wake();
    }, Dt = {}, St = /^[\d.\-M][\d.\-,\s]/, zt = /["']/g, Ft = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t);
        };
    }, Rt = function _parseEase(t, e) {
        return t && (o(t) ? t : Dt[t] || zb(t)) || e;
    };
    function qk(t) {
        var e, r, i, n, a = x() - P, s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (P += a) - A) - S) || s) && (n = ++T.frame, 
        b = i - 1e3 * T.time, T.time = i /= 1e3, S += e + (D <= e ? 4 : D - e), r = 1), 
        s || (g = v(qk)), r) for (w = 0; w < z.length; w++) z[w](i, b, n, t);
    }
    function Tl(t) {
        return t < R ? F * t * t : t < .7272727272727273 ? F * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? F * (t -= 2.25 / 2.75) * t + .9375 : F * Math.pow(t - 2.625 / 2.75, 2) + .984375;
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Db(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r);
        } : function(t) {
            return t;
        }, function(t) {
            return 1 - Math.pow(1 - t, r);
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
        });
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Db("Elastic", Fb("in"), Fb("out"), Fb()), 
    F = 7.5625, R = 1 / 2.75, Db("Bounce", function(t) {
        return 1 - Tl(1 - t);
    }, Tl), Db("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }), Db("Circ", function(t) {
        return -(J(1 - t * t) - 1);
    }), Db("Sine", function(t) {
        return 1 === t ? 1 : 1 - Q(t * X);
    }), Db("Back", Gb("in"), Gb("out"), Gb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0;
            return function(t) {
                return ((i * yt(0, .99999999, t) | 0) + n) * r;
            };
        }
    }, I.ease = Dt["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,";
    });
    var Et, It = function GSCache(t, e) {
        this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, 
        this.set = e ? e.getSetter : Qt;
    }, Lt = ((Et = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), 
        this._delay = t, this) : this._delay;
    }, Et.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, Et.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0, Fa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, Et.totalTime = function totalTime(t, e) {
        if (Pt(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (ya(this, t); r.parent; ) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), 
            r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Aa(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), 
        ea(this, t, e)), this;
    }, Et.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
    }, Et.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, Et.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, Et.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
    }, Et.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -U ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || t === -U ? 0 : this._rts, function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; ) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t;
        }(this.totalTime(yt(-this._delay, this._tDur, e), !0));
    }, Et.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), 
        this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= U) && Math.abs(this._zTime) !== U))), 
        this) : this._ps;
    }, Et.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Aa(e, this, t - this._delay), this;
        }
        return this._start;
    }, Et.endTime = function endTime(t) {
        return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }, Et.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime;
    }, Et.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) r = e._start + r / (e._ts || 1), 
        e = e._dp;
        return r;
    }, Et.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t, Ga(this)) : this._repeat;
    }, Et.repeatDelay = function repeatDelay(t) {
        return arguments.length ? (this._rDelay = t, Ga(this)) : this._rDelay;
    }, Et.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, Et.seek = function seek(t, e) {
        return this.totalTime(Ia(this, t), s(e));
    }, Et.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
    }, Et.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, Et.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, Et.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
    }, Et.resume = function resume() {
        return this.paused(!1);
    }, Et.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)), 
        this) : this._rts < 0;
    }, Et.invalidate = function invalidate() {
        return this._initted = 0, this._zTime = -U, this;
    }, Et.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U));
    }, Et.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], 
        this) : i[t];
    }, Et.then = function then(t) {
        var i = this;
        return new Promise(function(e) {
            function jn() {
                var t = i.then;
                i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), 
                i.then = t;
            }
            var r = o(t) ? t : ga;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? jn() : i._prom = jn;
        });
    }, Et.kill = function kill() {
        fb(this);
    }, Animation);
    function Animation(t, e) {
        var r = t.parent || E;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, 
        this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Fa(this, +t.duration, 1, 1), 
        this.data = t.data, m || At.wake(), r && Aa(r, this, e || 0 === e ? e : r._time, 1), 
        t.reversed && this.reverse(), t.paused && this.paused(!0);
    }
    ha(Lt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, 
            r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && za(r.parent, _assertThisInitialized(r)), 
            t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger), r;
        }
        _inheritsLoose(Timeline, i);
        var t = Timeline.prototype;
        return t.to = function to(t, e, r, i) {
            return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this;
        }, t.from = function from(t, e, r, i) {
            return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this;
        }, t.fromTo = function fromTo(t, e, r, i, n) {
            return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this;
        }, t.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, 
            new Xt(t, e, Ia(this, r), 1), this;
        }, t.call = function call(t, e, r) {
            return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r));
        }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, 
            r.parent = this, new Xt(t, r, Ia(this, n)), this;
        }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
            return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o);
        }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
            return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u);
        }, t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, _, c = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== E && m - U < t && 0 <= t ? m : t < U ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, 
                f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), 
                this._repeat && (p = this._yoyo, o = g + this._rDelay, i = aa(v % o), v === m ? (s = this._repeat, 
                i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), 
                !c && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, _ = 1), s !== d && !this._lock)) {
                    var T = p && 1 & d, b = T === (p && 1 & s);
                    if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (_ ? 0 : aa(s * o)), e, !g)._lock = 0, 
                    !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), 
                    c !== this._time || u != !this._ts) return this;
                    if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -1e-4, this.render(c, !0), 
                    this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    Bb(this, _);
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r) for (i = t._first; i && i._start <= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start > e) return i;
                        i = i._next;
                    } else for (i = t._last; i && i._start >= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start < e) return i;
                        i = i._prev;
                    }
                }(this, aa(c), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, 
                this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, 
                this._zTime = t), c || !i || e || xt(this, "onStart"), c <= i && 0 <= t) for (n = this._first; n; ) {
                    if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                        if (n.parent !== this) return this.render(t, e, r);
                        if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), 
                        i !== this._time || !this._ts && !u) {
                            h = 0, a && (v += this._zTime = -U);
                            break;
                        }
                    }
                    n = a;
                } else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n; ) {
                        if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), 
                            i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = w ? -U : U);
                                break;
                            }
                        }
                        n = a;
                    }
                }
                if (h && !e && (this.pause(), h.render(c <= i ? 0 : -U)._zTime = c <= i ? 1 : -1, 
                this._ts)) return this._start = f, xa(this), this.render(t, e, r);
                this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), 
                e || t < 0 && !c || !v && !c || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), 
                !this._prom || v < m && 0 < this.timeScale() || this._prom())));
            }
            return this;
        }, t.add = function add(t, e) {
            var r = this;
            if (p(e) || (e = Ia(this, e)), !(t instanceof Lt)) {
                if (tt(t)) return t.forEach(function(t) {
                    return r.add(t, e);
                }), this;
                if (n(t)) return this.addLabel(t, e);
                if (!o(t)) return this;
                t = Xt.delayedCall(0, t);
            }
            return this !== t ? Aa(this, t, e) : this;
        }, t.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -B);
            for (var n = [], a = this._first; a; ) a._start >= i && (a instanceof Xt ? e && n.push(a) : (r && n.push(a), 
            t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n;
        }, t.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
        }, t.remove = function remove(t) {
            return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), 
            t === this._recent && (this._recent = this._last), ra(this));
        }, t.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = aa(At.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), 
            i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
        }, t.addLabel = function addLabel(t, e) {
            return this.labels[t] = Ia(this, e), this;
        }, t.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this;
        }, t.addPause = function addPause(t, e, r) {
            var i = Xt.delayedCall(0, e || O, r);
            return i.data = "isPause", this._hasPause = 1, Aa(this, i, Ia(this, t));
        }, t.removePause = function removePause(t) {
            var e = this._first;
            for (t = Ia(this, t); e; ) e._start === t && "isPause" === e.data && qa(e), e = e._next;
        }, t.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; ) qt !== i[n] && i[n].kill(t, e);
            return this;
        }, t.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = bt(t), a = this._first, s = p(e); a; ) a instanceof Xt ? ba(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), 
            a = a._next;
            return i;
        }, t.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r = this, i = Ia(r, t), n = e.startAt, a = e.onStart, s = e.onStartParams, o = Xt.to(r, ha(e, {
                ease: "none",
                lazy: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || U,
                onStart: function onStart() {
                    r.pause();
                    var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                    o._dur !== t && Fa(o, t, 0, 1).render(o._time, !0, !0), a && a.apply(o, s || []);
                }
            }));
            return o;
        }, t.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ha({
                startAt: {
                    time: Ia(this, t)
                }
            }, r));
        }, t.recent = function recent() {
            return this._recent;
        }, t.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t));
        }, t.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t), 1);
        }, t.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U);
        }, t.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n; ) n._start >= r && (n._start += t, 
            n._end += t), n = n._next;
            if (e) for (i in a) a[i] >= r && (a[i] += t);
            return ra(this);
        }, t.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t; ) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this);
        }, t.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; ) e = r._next, this.remove(r), r = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this);
        }, t.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = B;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s; ) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, 
                Aa(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, 
                a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), 
                s = e;
                Fa(a, a === E && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
            }
            return a._tDur;
        }, Timeline.updateRoot = function updateRoot(t) {
            if (E._ts && (ea(E, wa(t, E)), d = At.frame), At.frame >= pt) {
                pt += j.autoSleep || 120;
                var e = E._first;
                if ((!e || !e._ts) && j.autoSleep && At._listeners.length < 2) {
                    for (;e && !e._ts; ) e = e._next;
                    e || At.sleep();
                }
            }
        }, Timeline;
    }(Lt);
    ha(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Nb(t, e, i, a, s, u) {
        var h, l, f, d;
        if (ft[t] && !1 !== (h = new ft[t]()).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
            if (o(t) && (t = jt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || tt(t) || H(t)) return n(t) ? jt(t, s, e, i, a) : t;
            var u, h = {};
            for (u in t) h[u] = jt(t[u], s, e, i, a);
            return h;
        }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ie(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), 
        i !== c)) for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--; ) f[h._props[d]] = l;
        return h;
    }
    var qt, Yt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
        o(i) && (i = i(a || 0, t, s));
        var f, d = t[e], p = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, _ = o(d) ? l ? Jt : Zt : Gt;
        if (n(i) && (~i.indexOf("random(") && (i = ab(i)), "=" === i.charAt(1) && (i = parseFloat(p) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (La(p) || 0))), 
        p !== i) return isNaN(p * i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
            var o, u, h, l, f, d, p, _, c = new ie(this._pt, t, e, 0, 1, Ht, null, n), m = 0, g = 0;
            for (c.b = r, c.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = ab(i)), 
            a && (a(_ = [ r, i ], t, e), r = _[0], i = _[1]), u = r.match(nt) || []; o = nt.exec(i); ) l = o[0], 
            f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), 
            l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
                _next: c._pt,
                p: f || 1 === g ? f : ",",
                s: d,
                c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                m: h && h < 4 ? Math.round : 0
            }, m = nt.lastIndex);
            return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (at.test(i) || p) && (c.e = 0), 
            this._pt = c;
        }.call(this, t, e, p, i, _, h || j.stringFilter, l)) : (f = new ie(this._pt, t, e, +p || 0, i - (p || 0), "boolean" == typeof d ? $t : Wt, 0, _), 
        l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);
    }, Nt = function _initTween(t, e) {
        var r, i, n, a, o, u, h, l, f, d, p, _, c, m = t.vars, g = m.ease, v = m.startAt, y = m.immediateRender, T = m.lazy, b = m.onUpdate, w = m.onUpdateParams, x = m.callbackScope, k = m.runBackwards, O = m.yoyoEase, M = m.keyframes, C = m.autoRevert, A = t._dur, P = t._startAt, D = t._targets, S = t.parent, z = S && "nested" === S.data ? S.parent._targets : D, F = "auto" === t._overwrite, R = t.timeline;
        if (!R || M && g || (g = "none"), t._ease = Rt(g, I.ease), t._yEase = O ? Ft(Rt(!0 === O ? g : O, I.ease)) : 0, 
        O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), !R) {
            if (_ = (l = D[0] ? Z(D[0]).harness : 0) && m[l.prop], r = la(m, ut), P && P.render(-1, !0).kill(), 
            v) {
                if (qa(t._startAt = Xt.set(D, ha({
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: s(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: x,
                    stagger: 0
                }, v))), y) if (0 < e) C || (t._startAt = 0); else if (A && !(e < 0 && P)) return void (e && (t._zTime = e));
            } else if (k && A) if (P) C || (t._startAt = 0); else if (e && (y = !1), n = ha({
                overwrite: !1,
                data: "isFromStart",
                lazy: y && s(T),
                immediateRender: y,
                stagger: 0,
                parent: S
            }, r), _ && (n[l.prop] = _), qa(t._startAt = Xt.set(D, n)), y) {
                if (!e) return;
            } else _initTween(t._startAt, U);
            for (t._pt = 0, T = A && s(T) || T && !A, i = 0; i < D.length; i++) {
                if (h = (o = D[i])._gsap || Y(D)[i]._gsap, t._ptLookup[i] = d = {}, lt[h.id] && ht.length && da(), 
                p = z === D ? i : z.indexOf(o), l && !1 !== (f = new l()).init(o, _ || r, t, p, z) && (t._pt = a = new ie(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), 
                f._props.forEach(function(t) {
                    d[t] = a;
                }), f.priority && (u = 1)), !l || _) for (n in r) ft[n] && (f = Nb(n, r, t, p, o, z)) ? f.priority && (u = 1) : d[n] = a = Yt.call(t, o, n, "get", r[n], p, z, 0, m.stringFilter);
                t._op && t._op[i] && t.kill(o, t._op[i]), F && t._pt && (qt = t, E.killTweensOf(o, d, t.globalTime(0)), 
                c = !t.parent, qt = 0), t._pt && T && (lt[h.id] = 1);
            }
            u && re(t), t._onInit && t._onInit(t);
        }
        t._from = !R && !!m.runBackwards, t._onUpdate = b, t._initted = (!t._op || t._pt) && !c;
    }, jt = function _parseFuncOrString(t, e, r, i, a) {
        return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? ab(t) : t;
    }, Ut = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Vt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Xt = function(S) {
        function Tween(t, e, i, n) {
            var a;
            "number" == typeof e && (i.duration = e, e = i, i = null);
            var o, h, l, f, d, _, c, m, g = (a = S.call(this, n ? e : ma(e), i) || this).vars, v = g.duration, y = g.delay, T = g.immediateRender, b = g.stagger, w = g.overwrite, x = g.keyframes, k = g.defaults, C = g.scrollTrigger, A = g.yoyoEase, P = a.parent, D = (tt(t) || H(t) ? p(t[0]) : "length" in e) ? [ t ] : bt(t);
            if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !j.nullTargetWarn) || [], 
            a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
                if (e = a.vars, (o = a.timeline = new Bt({
                    data: "nested",
                    defaults: k || {}
                })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
                    ease: "none"
                }), x.forEach(function(t) {
                    return o.to(D, t, ">");
                }); else {
                    if (f = D.length, c = b ? Sa(b) : O, r(b)) for (d in b) ~Ut.indexOf(d) && ((m = m || {})[d] = b[d]);
                    for (h = 0; h < f; h++) {
                        for (d in l = {}, e) Vt.indexOf(d) < 0 && (l[d] = e[d]);
                        l.stagger = 0, A && (l.yoyoEase = A), m && mt(l, m), _ = D[h], l.duration = +jt(v, _assertThisInitialized(a), h, _, D), 
                        l.delay = (+jt(y, _assertThisInitialized(a), h, _, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, 
                        a._start += y, l.delay = 0), o.to(_, l, c(h, _, D));
                    }
                    o.duration() ? v = y = 0 : a.timeline = 0;
                }
                v || a.duration(v = o.duration());
            } else a.timeline = 0;
            return !0 === w && (qt = _assertThisInitialized(a), E.killTweensOf(D), qt = 0), 
            P && za(P, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(P._time) && s(T) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent);
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -U, a.render(Math.max(0, -y))), 
            C && Ba(_assertThisInitialized(a), C), a;
        }
        _inheritsLoose(Tween, S);
        var t = Tween.prototype;
        return t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, p = this._tDur, _ = this._dur, c = p - U < t && 0 <= t ? p : t < U ? 0 : t;
            if (_) {
                if (c !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = c, l = this.timeline, this._repeat) {
                        if (s = _ + this._rDelay, i = aa(c % s), c === p ? (a = this._repeat, i = _) : ((a = ~~(c / s)) && a === c / s && (i = _, 
                        a--), _ < i && (i = _)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = _ - i), 
                        o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                        a !== o && (l && this._yEase && Bb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, 
                        this.render(aa(s * a), !0).invalidate()._lock = 0));
                    }
                    if (!this._initted) {
                        if (Ca(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                        if (_ !== this._dur) return this.render(t, e, r);
                    }
                    for (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, 
                    this._lazy = 0), this.ratio = h = (f || this._ease)(i / _), this._from && (this.ratio = h = 1 - h), 
                    !i || d || e || xt(this, "onStart"), n = this._pt; n; ) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r) || this._startAt && (this._zTime = t), 
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), 
                    xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), 
                    c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), 
                    !t && _ || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || qa(this, 1), 
                    e || t < 0 && !d || !c && !d || (xt(this, c === p ? "onComplete" : "onReverseComplete", !0), 
                    !this._prom || c < p && 0 < this.timeScale() || this._prom()));
                }
            } else !function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s = t.ratio, o = e < 0 || !e && s && !t._start && t._zTime > U && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1, u = t._rDelay, h = 0;
                if (u && t._repeat && (h = yt(0, t._tDur, e), gt(h, u) !== (a = gt(t._tTime, u)) && (s = 1 - o, 
                t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || i || t._zTime === U || !e && t._zTime) {
                    if (!t._initted && Ca(t, e, i, r)) return;
                    for (a = t._zTime, t._zTime = e || (r ? U : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), 
                    t._time = 0, t._tTime = h, r || xt(t, "onStart"), n = t._pt; n; ) n.r(o, n.d), n = n._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), 
                    h && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), 
                    r || (xt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
            }(this, t, e, r);
            return this;
        }, t.targets = function targets() {
            return this._targets;
        }, t.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, 
            this._ptLookup = [], this.timeline && this.timeline.invalidate(), S.prototype.invalidate.call(this);
        }, t.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return fb(this);
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || fb(this), 
                this.parent && r !== this.timeline.totalDuration() && Fa(this, this._dur * this.timeline._tDur / r, 0, 1), 
                this;
            }
            var i, a, s, o, u, h, l, f = this._targets, d = t ? bt(t) : f, p = this._ptLookup, c = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; ) ;
                return r < 0;
            }(f, d)) return "all" === e && (this._pt = 0), fb(this);
            for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function(t) {
                return u[t] = 1;
            }), e = u), e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0, o = s && s.aliases;
                if (!o) return e;
                for (i in r = mt({}, e), o) if (i in r) for (n = (a = o[i].split(",")).length; n--; ) r[a[n]] = r[i];
                return r;
            }(f, e)), l = f.length; l--; ) if (~d.indexOf(f[l])) for (u in a = p[l], "all" === e ? (i[l] = e, 
            o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o) (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), 
            delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && c && fb(this), this;
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r);
        }, Tween.from = function from(t, e) {
            return new Tween(t, ca(arguments, 1));
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            });
        }, Tween.fromTo = function fromTo(t, e, r) {
            return new Tween(t, ca(arguments, 2));
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return E.killTweensOf(t, e, r);
        }, Tween;
    }(Lt);
    ha(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), _("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Xt[r] = function() {
            var t = new Bt(), e = Tt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
        };
    });
    function Yb(t, e, r) {
        return t.setAttribute(e, r);
    }
    function ec(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    }
    var Gt = function _setterPlain(t, e, r) {
        return t[e] = r;
    }, Zt = function _setterFunc(t, e, r) {
        return t[e](r);
    }, Jt = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r);
    }, Qt = function _getSetter(t, e) {
        return o(t[e]) ? Zt : q(t[e]) && t.setAttribute ? Yb : Gt;
    }, Wt = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    }, $t = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    }, Ht = function _renderComplexString(t, e) {
        var r = e._pt, i = "";
        if (!t && e.b) i = e.b; else if (1 === t && e.e) i = e.e; else {
            for (;r; ) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, 
            r = r._next;
            i += e.c;
        }
        e.set(e.t, e.p, i, e);
    }, Kt = function _renderPropTweens(t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), r = r._next;
    }, te = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a; ) n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }, ee = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i; ) r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), 
        i = r;
        return !e;
    }, re = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a; ) {
            for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, 
            a = e;
        }
        t._pt = i;
    }, ie = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set, this.set = ec, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Wt, this.d = s || this, 
        this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
    }
    _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1;
    }), ot.TweenMax = ot.TweenLite = Xt, ot.TimelineLite = ot.TimelineMax = Bt, E = new Bt({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), j.stringFilter = qb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name, r = o(t), i = e && !r && t.init ? function() {
                        this._props = [];
                    } : t, n = {
                        init: O,
                        render: Kt,
                        add: Yt,
                        kill: ee,
                        modifier: te,
                        rawVars: 0
                    }, a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Qt,
                        aliases: {},
                        register: 0
                    };
                    if (Pt(), t !== i) {
                        if (ft[e]) return;
                        ha(i, ha(la(t, n), a)), mt(i.prototype, mt(n, la(t, a))), ft[i.prop = e] = i, t.targetTest && (_t.push(i), 
                        ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
                    }
                    N(e, i), t.register && t.register(ae, i, ie);
                }(t);
            });
        },
        timeline: function timeline(t) {
            return new Bt(t);
        },
        getTweensOf: function getTweensOf(t, e) {
            return E.getTweensOf(t, e);
        },
        getProperty: function getProperty(i, t, e, r) {
            n(i) && (i = bt(i)[0]);
            var a = Z(i || {}).get, s = e ? ga : fa;
            return "native" === e && (e = ""), i ? t ? s((ft[t] && ft[t].get || a)(i, t, e, r)) : function(t, e, r) {
                return s((ft[t] && ft[t].get || a)(i, t, e, r));
            } : i;
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = bt(r)).length) {
                var n = r.map(function(t) {
                    return ae.quickSetter(t, e, i);
                }), a = n.length;
                return function(t) {
                    for (var e = a; e--; ) n[e](t);
                };
            }
            r = r[0] || {};
            var s = ft[e], o = Z(r), u = o.harness && (o.harness.aliases || {})[e] || e, h = s ? function(t) {
                var e = new s();
                c._pt = 0, e.init(r, i ? t + i : t, c, 0, [ r ]), e.render(1, e), c._pt && Kt(1, c);
            } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1);
            };
        },
        isTweening: function isTweening(t) {
            return 0 < E.getTweensOf(t, !0).length;
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Rt(t.ease, I.ease)), ka(I, t || {});
        },
        config: function config(t) {
            return ka(j, t || {});
        },
        registerEffect: function registerEffect(t) {
            var n = t.name, i = t.effect, e = t.plugins, a = t.defaults, s = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && M(n + " effect requires " + t + " plugin.");
            }), dt[n] = function(t, e, r) {
                return i(bt(t), ha(e || {}, a), r);
            }, s && (Bt.prototype[n] = function(t, e, i) {
                return this.add(dt[n](t, r(e) ? e : (i = e) && {}, this), i);
            });
        },
        registerEase: function registerEase(t, e) {
            Dt[t] = Rt(e);
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Rt(t, e) : Dt;
        },
        getById: function getById(t) {
            return E.getById(t);
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Bt(t);
            for (n.smoothChildTiming = s(t.smoothChildTiming), E.remove(n), n._dp = 0, n._time = n._tTime = E._time, 
            r = E._first; r; ) i = r._next, !e && !r._dur && r instanceof Xt && r.vars.onComplete === r._targets[0] || Aa(n, r, r._start - r._delay), 
            r = i;
            return Aa(E, n, 0), n;
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return tt(e) ? Za(e, wrap(0, e.length), t) : Ja(r, function(t) {
                    return (i + (t - e) % i) % i + e;
                });
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e, n = 2 * i;
                return tt(e) ? Za(e, wrapYoyo(0, e.length - 1), t) : Ja(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
                });
            },
            distribute: Sa,
            random: Va,
            snap: Ua,
            normalize: function normalize(t, e, r) {
                return wt(t, e, 0, 1, r);
            },
            getUnit: La,
            clamp: function clamp(e, r, t) {
                return Ja(t, function(t) {
                    return yt(e, r, t);
                });
            },
            splitColor: lb,
            toArray: bt,
            mapRange: wt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t);
                    }, t);
                };
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || La(t));
                };
            },
            interpolate: function interpolate(e, r, t, i) {
                var a = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r;
                };
                if (!a) {
                    var s, o, u, h, l, f = n(e), d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    }; else if (tt(e) && !tt(r)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e);
                        }, t = r;
                    } else i || (e = mt(tt(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r) Yt.call(d, e, s, "get", r[s]);
                        a = function func(t) {
                            return Kt(t, d) || (f ? e.p : e);
                        };
                    }
                }
                return Ja(t, a);
            },
            shuffle: Ra
        },
        install: K,
        effects: dt,
        ticker: At,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: E,
        core: {
            PropTween: ie,
            globals: N,
            Tween: Xt,
            Timeline: Bt,
            Animation: Lt,
            getCache: Z,
            _removeLinkedListItem: pa
        }
    };
    _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ne[t] = Xt[t];
    }), At.add(Bt.updateRoot), c = ne.to({}, {
        duration: 0
    });
    function ic(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
        return r;
    }
    function kc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (n(i) && (e = {}, _(i, function(t) {
                        return e[t] = 1;
                    }), i = e), a) {
                        for (r in e = {}, i) e[r] = a(i[r]);
                        i = e;
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e) for (i = a.length; i--; ) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ic(n, r)), 
                        n && n.modifier && n.modifier(e[r], t, a[i], r));
                    }(t, i);
                };
            }
        };
    }
    var ae = ne.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e) (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), 
            this._props.push(a);
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        }
    }, kc("roundProps", Ta), kc("modifiers"), kc("snap", Ua)) || ne;
    Xt.version = Bt.version = ae.version = "3.5.1", f = 1, t() && Pt();
    function Vc(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function Wc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function Xc(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    }
    function Yc(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
    }
    function Zc(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function $c(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function _c(t, e, r) {
        return t.style[e] = r;
    }
    function ad(t, e, r) {
        return t.style.setProperty(e, r);
    }
    function bd(t, e, r) {
        return t._gsap[e] = r;
    }
    function cd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r;
    }
    function dd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a);
    }
    function ed(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a);
    }
    function id(t, e) {
        var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
        return r.style ? r : oe.createElement(t);
    }
    function jd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && jd(t, Ue(e) || e, 1) || "";
    }
    function md() {
        (function _windowExists() {
            return "undefined" != typeof window;
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, 
        le = id("div") || {
            style: {}
        }, fe = id("div"), Ye = Ue(Ye), Ne = Ye + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", 
        pe = !!Ue("perspective"), he = 1);
    }
    function nd(t) {
        var e, r = id("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = nd;
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), 
        this.style.cssText = a, e;
    }
    function od(t, e) {
        for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
    function pd(e) {
        var r;
        try {
            r = e.getBBox();
        } catch (t) {
            r = nd.call(e, !0);
        }
        return r && (r.width || r.height) || e.getBBox === nd || (r = nd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +od(e, [ "x", "cx", "x1" ]) || 0,
            y: +od(e, [ "y", "cy", "y1" ]) || 0,
            width: 0,
            height: 0
        };
    }
    function qd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pd(t));
    }
    function rd(t, e) {
        if (e) {
            var r = t.style;
            e in ze && e !== Ne && (e = Ye), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), 
            r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e);
        }
    }
    function sd(t, e, r, i, n, a) {
        var s = new ie(t._pt, e, r, 0, 1, a ? $c : Zc);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
    }
    function ud(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = le.style, f = Le.test(e), d = "svg" === t.tagName.toLowerCase(), p = (d ? "client" : "offset") + (f ? "Width" : "Height"), _ = "px" === i, c = "%" === i;
        return i === h || !u || Ve[i] || Ve[h] ? u : ("px" === h || _ || (u = ud(t, e, r, "px")), 
        o = t.getCTM && qd(t), c && (ze[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[p]) * 100) : (l[f ? "width" : "height"] = 100 + (_ ? h : i), 
        a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, 
        o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), 
        (s = a._gsap) && c && s.width && f && s.time === At.time ? aa(u / s.width * 100) : (!c && "%" !== h || (l.position = jd(t, "position")), 
        a === t && (l.position = "static"), a.appendChild(le), n = le[p], a.removeChild(le), 
        l.position = "absolute", f && c && ((s = Z(a)).time = At.time, s.width = a[p]), 
        aa(_ ? n * u / 100 : n && u ? 100 / n * u : 0))));
    }
    function vd(t, e, r, i) {
        var n;
        return he || md(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), 
        ze[e] && "transform" !== e ? (n = Qe(t, i), n = "transformOrigin" !== e ? n[e] : We(jd(t, Ne)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || jd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), 
        r && !~(n + "").indexOf(" ") ? ud(t, e, n, r) + r : n;
    }
    function wd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1), a = n && jd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = jd(t, "borderTopColor"));
        }
        var s, o, u, h, l, f, d, p, _, c, m, g, v = new ie(this._pt, t.style, e, 0, 1, Ht), y = 0, T = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = jd(t, e) || i, 
        t.style[e] = r), qb(s = [ r, i ]), i = s[1], u = (r = s[0]).match(it) || [], (i.match(it) || []).length) {
            for (;o = it.exec(i); ) d = o[0], _ = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), 
            d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), 
            (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), 
            c = d.substr((p + "").length), y = it.lastIndex - c.length, c || (c = c || j.units[e] || m, 
            y === i.length && (i += c, v.e += c)), m !== c && (h = ud(t, e, f, c) || 0), v._pt = {
                _next: v._pt,
                p: _ || 1 === T ? _ : ",",
                s: h,
                c: g ? g * p : p - h,
                m: l && l < 4 ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : "";
        } else v.r = "display" === e && "none" === i ? $c : Zc;
        return at.test(i) && (v.e = 0), this._pt = v;
    }
    function yd(t) {
        var e = t.split(" "), r = e[0], i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, 
        r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ");
    }
    function zd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1; else for (n = (o = o.split(",")).length; -1 < --n; ) r = o[n], 
            ze[r] && (i = 1, r = "transformOrigin" === r ? Ne : Ye), rd(a, r);
            i && (rd(a, Ye), u && (u.svg && a.removeAttribute("transform"), Qe(a, 1), u.uncache = 1));
        }
    }
    function Dd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function Ed(t) {
        var e = jd(t, Ye);
        return Dd(e) ? Ze : e.substr(7).match(rt).map(aa);
    }
    function Fd(t, e) {
        var r, i, n, a, s = t._gsap || Z(t), o = t.style, u = Ed(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [ (n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f ]).join(",") ? Ze : u : (u !== Ze || t.offsetParent || t === ue || s.svg || (n = o.display, 
        o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, 
        ue.appendChild(t)), u = Ed(t), n ? o.display = n : rd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), 
        e && 6 < u.length ? [ u[0], u[1], u[4], u[5], u[12], u[13] ] : u);
    }
    function Gd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Fd(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, p = h.xOffset || 0, _ = h.yOffset || 0, c = l[0], m = l[1], g = l[2], v = l[3], y = l[4], T = l[5], b = e.split(" "), w = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
        r ? l !== Ze && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, 
        w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = pd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), 
        x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, 
        T = x - d, h.xOffset = p + (y * c + T * g) - y, h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, 
        h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, 
        t.style[Ne] = "0px 0px", a && (sd(a, h, "xOrigin", f, w), sd(a, h, "yOrigin", d, x), 
        sd(a, h, "xOffset", p, h.xOffset), sd(a, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
    }
    function Jd(t, e, r) {
        var i = La(e);
        return aa(parseFloat(e) + parseFloat(ud(t, "x", r + "px", i))) + i;
    }
    function Qd(t, e, r, i, a, s) {
        var o, u, h = 360, l = n(a), f = parseFloat(a) * (l && ~a.indexOf("rad") ? Fe : 1), d = s ? f * s : f - i, p = i + d + "deg";
        return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), 
        "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), 
        t._pt = u = new ie(t._pt, e, r, i, d, Wc), u.e = p, u.u = "deg", t._props.push(r), 
        u;
    }
    function Rd(t, e, r) {
        var i, n, a, s, o, u, h, l = fe.style, f = r._gsap;
        for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", 
        l[Ye] = e, oe.body.appendChild(fe), i = Qe(fe, 1), ze) (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = La(a) !== (h = La(s)) ? ud(r, n, a, h) : parseFloat(a), 
        u = parseFloat(s), t._pt = new ie(t._pt, f, n, o, u - o, Vc), t._pt.u = h || 0, 
        t._props.push(n));
        oe.body.removeChild(fe);
    }
    var se, oe, ue, he, le, fe, de, pe, _e = Dt.Power0, ce = Dt.Power1, me = Dt.Power2, ge = Dt.Power3, ve = Dt.Power4, ye = Dt.Linear, Te = Dt.Quad, be = Dt.Cubic, we = Dt.Quart, xe = Dt.Quint, ke = Dt.Strong, Oe = Dt.Elastic, Me = Dt.Back, Ce = Dt.SteppedEase, Ae = Dt.Bounce, Pe = Dt.Sine, De = Dt.Expo, Se = Dt.Circ, ze = {}, Fe = 180 / Math.PI, Re = Math.PI / 180, Ee = Math.atan2, Ie = /([A-Z])/g, Le = /(?:left|right|width|margin|padding|x)/i, Be = /[\s,\(]\S/, qe = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ye = "transform", Ne = Ye + "Origin", je = "O,Moz,ms,Ms,Webkit".split(","), Ue = function _checkPropPrefix(t, e, r) {
        var i = (e || le).style, n = 5;
        if (t in i && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i); ) ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t;
    }, Ve = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Xe = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ge = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ie(t._pt, e, r, 0, 0, zd);
                return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
            }
        }
    }, Ze = [ 1, 0, 0, 1, 0, 0 ], Je = {}, Qe = function _parseTransform(t, e) {
        var r = t._gsap || new It(t);
        if ("x" in r && !e && !r.uncache) return r;
        var i, n, a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T, b, w, x, k, O, M, C, A, P, D, S, z, F, R, E = t.style, I = r.scaleX < 0, L = "deg", B = jd(t, Ne) || "0";
        return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !qd(t)), 
        m = Fd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), 
        Gd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, 
        c = r.yOrigin || 0, m !== Ze && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], 
        n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), 
        u = T || b ? Ee(b, T) * Fe : 0, (f = w || x ? Ee(w, x) * Fe + u : 0) && (o *= Math.cos(f * Re)), 
        r.svg && (i -= _ - (_ * T + c * w), n -= c - (_ * b + c * x))) : (R = m[6], z = m[7], 
        P = m[8], D = m[9], S = m[10], F = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(R, S)) * Fe, 
        g && (M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g)), C = O * v + D * y, A = R * v + S * y, 
        P = k * -y + P * v, D = O * -y + D * v, S = R * -y + S * v, F = z * -y + F * v, 
        k = M, O = C, R = A), l = (g = Ee(-w, S)) * Fe, g && (v = Math.cos(-g), F = x * (y = Math.sin(-g)) + F * v, 
        T = M = T * v - P * y, b = C = b * v - D * y, w = A = w * v - S * y), u = (g = Ee(b, T)) * Fe, 
        g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + O * y, b = b * v - T * y, 
        O = O * v - k * y, T = M, k = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, 
        l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + R * R)), 
        g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Fe : 0, p = F ? 1 / (F < 0 ? -F : F) : 0), 
        r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Dd(jd(t, Ye)), 
        M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, 
        f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), 
        r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", 
        r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", 
        r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + L, r.rotationX = aa(h) + L, 
        r.rotationY = aa(l) + L, r.skewX = f + L, r.skewY = d + L, r.transformPerspective = p + "px", 
        (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (E[Ne] = We(B)), r.xOffset = r.yOffset = 0, 
        r.force3D = j.force3D, r.renderTransform = r.svg ? rr : pe ? er : $e, r.uncache = 0, 
        r;
    }, We = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1];
    }, $e = function _renderNon3DTransforms(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, er(t, e);
    }, He = "0deg", Ke = "0px", tr = ") ", er = function _renderCSSTransforms(t, e) {
        var r = e || this, i = r.xPercent, n = r.yPercent, a = r.x, s = r.y, o = r.z, u = r.rotation, h = r.rotationY, l = r.rotationX, f = r.skewX, d = r.skewY, p = r.scaleX, _ = r.scaleY, c = r.transformPerspective, m = r.force3D, g = r.target, v = r.zOrigin, y = "", T = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== He || h !== He)) {
            var b, w = parseFloat(h) * Re, x = Math.sin(w), k = Math.cos(w);
            w = parseFloat(l) * Re, b = Math.cos(w), a = Jd(g, a, x * b * -v), s = Jd(g, s, -Math.sin(w) * -v), 
            o = Jd(g, o, k * b * -v + v);
        }
        c !== Ke && (y += "perspective(" + c + tr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), 
        !T && a === Ke && s === Ke && o === Ke || (y += o !== Ke || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + tr), 
        u !== He && (y += "rotate(" + u + tr), h !== He && (y += "rotateY(" + h + tr), l !== He && (y += "rotateX(" + l + tr), 
        f === He && d === He || (y += "skew(" + f + ", " + d + tr), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + tr), 
        g.style[Ye] = y || "translate(0, 0)";
    }, rr = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, p = o.skewX, _ = o.skewY, c = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, b = o.yOffset, w = o.forceCSS, x = parseFloat(l), k = parseFloat(f);
        d = parseFloat(d), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), 
        d += _), d || p ? (d *= Re, p *= Re, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - p) * -m, 
        a = Math.cos(d - p) * m, p && (_ *= Re, s = Math.tan(p - _), n *= s = Math.sqrt(1 + s * s), 
        a *= s, _ && (s = Math.tan(_), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), 
        i = aa(i), n = aa(n), a = aa(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = ud(g, "x", l, "px"), 
        k = ud(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), 
        k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), 
        k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", 
        g.setAttribute("transform", s), w && (g.style[Ye] = s);
    };
    _("padding,margin,Width,Radius", function(e, r) {
        var t = "Right", i = "Bottom", n = "Left", o = (r < 3 ? [ "Top", t, i, n ] : [ "Top" + n, "Top" + t, i + t, i + n ]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e;
        });
        Ge[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return vd(e, t, r);
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
            }), e.init(t, s, n);
        };
    });
    var ir, nr, ar, sr = {
        name: "css",
        register: md,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType;
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T = this._props, b = t.style;
            for (f in he || md(), e) if ("autoRound" !== f && (s = e[f], !ft[f] || !Nb(f, e, r, i, t, n))) if (h = typeof s, 
            l = Ge[f], "function" === h && (h = typeof (s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = ab(s)), 
            l) l(this, t, f, s, r) && (y = 1); else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f); else if ("undefined" !== h) {
                if (a = vd(t, f), u = parseFloat(a), (_ = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), 
                o = parseFloat(s), f in qe && ("autoAlpha" === f && (1 === u && "hidden" === vd(t, "visibility") && o && (u = 0), 
                sd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), 
                "scale" !== f && "transform" !== f && ~(f = qe[f]).indexOf(",") && (f = f.split(",")[0])), 
                c = f in ze) if (m || ((g = t._gsap).renderTransform || Qe(t), v = !1 !== e.smoothOrigin && g.smooth, 
                (m = this._pt = new ie(this._pt, b, Ye, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), 
                "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, _ ? _ * o : o - g.scaleY), 
                T.push("scaleY", f), f += "X"; else {
                    if ("transformOrigin" === f) {
                        s = yd(s), g.svg ? Gd(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && sd(this, g, "zOrigin", g.zOrigin, p), 
                        sd(this, b, f, We(a), We(s)));
                        continue;
                    }
                    if ("svgOrigin" === f) {
                        Gd(t, s, 1, v, 0, this);
                        continue;
                    }
                    if (f in Je) {
                        Qd(this, g, f, u, s, _);
                        continue;
                    }
                    if ("smoothOrigin" === f) {
                        sd(this, g, "smooth", g.smooth, s);
                        continue;
                    }
                    if ("force3D" === f) {
                        g[f] = s;
                        continue;
                    }
                    if ("transform" === f) {
                        Rd(this, s, t);
                        continue;
                    }
                } else f in b || (f = Ue(f) || f);
                if (c || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) o = o || 0, 
                (d = (a + "").substr((u + "").length)) !== (p = La(s) || (f in j.units ? j.units[f] : d)) && (u = ud(t, f, a, p)), 
                this._pt = new ie(this._pt, c ? g : b, f, u, _ ? _ * o : o - u, "px" !== p || !1 === e.autoRound || c ? Vc : Yc), 
                this._pt.u = p || 0, d !== p && (this._pt.b = a, this._pt.r = Xc); else if (f in b) wd.call(this, t, f, a, s); else {
                    if (!(f in t)) {
                        L(f, s);
                        continue;
                    }
                    this.add(t, f, t[f], s, i, n);
                }
                T.push(f);
            }
            y && re(this);
        },
        get: vd,
        aliases: qe,
        getSetter: function getSetter(t, e, r) {
            var i = qe[e];
            return i && i.indexOf(",") < 0 && (e = i), e in ze && e !== Ne && (t._gsap.x || vd(t, "x")) ? r && de === r ? "scale" === e ? cd : bd : (de = r || {}) && ("scale" === e ? dd : ed) : t.style && !q(t.style[e]) ? _c : ~e.indexOf("-") ? ad : Qt(t, e);
        },
        core: {
            _removeProperty: rd,
            _getMatrix: Fd
        }
    };
    ae.utils.checkPrefix = Ue, ar = _((ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        ze[t] = 1;
    }), _(nr, function(t) {
        j.units[t] = "deg", Je[t] = 1;
    }), qe[ar[13]] = ir + "," + nr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        qe[e[1]] = ar[e[0]];
    }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        j.units[t] = "px";
    }), ae.registerPlugin(sr);
    var or = ae.registerPlugin(sr) || ae, ur = or.core.Tween;
    e.Back = Me, e.Bounce = Ae, e.CSSPlugin = sr, e.Circ = Se, e.Cubic = be, e.Elastic = Oe, 
    e.Expo = De, e.Linear = ye, e.Power0 = _e, e.Power1 = ce, e.Power2 = me, e.Power3 = ge, 
    e.Power4 = ve, e.Quad = Te, e.Quart = we, e.Quint = xe, e.Sine = Pe, e.SteppedEase = Ce, 
    e.Strong = ke, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Xt, e.TweenMax = ur, 
    e.default = or, e.gsap = or;
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    } else {
        delete e.default;
    }
});

/*!
 * ScrollTrigger 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t((e = e || self).window = e.window || {});
}(this, function(e) {
    "use strict";
    function H(e) {
        return e;
    }
    function I() {
        return "undefined" != typeof window;
    }
    function J() {
        return Me || I() && (Me = window.gsap) && Me.registerPlugin && Me;
    }
    function K(e) {
        return !!~i.indexOf(e);
    }
    function L(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
    }
    function M(t, e) {
        var r = e.s, n = e.sc, o = h.indexOf(t), i = n === rt.sc ? 1 : 2;
        return ~o || (o = h.push(t) - 1), h[o + i] || (h[o + i] = L(t, r) || (K(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r];
        }));
    }
    function N(e) {
        return L(e, "getBoundingClientRect") || (K(e) ? function() {
            return ut.width = ke.innerWidth, ut.height = ke.innerHeight, ut;
        } : function() {
            return nt(e);
        });
    }
    function Q(e, t) {
        var r = t.s, n = t.d2, o = t.d, i = t.a;
        return (r = "scroll" + n) && (i = L(e, r)) ? i() - N(e)()[o] : K(e) ? Math.max(_e[r], Oe[r]) - (ke["inner" + n] || _e["client" + n] || Oe["client" + n]) : e[r] - e["offset" + n];
    }
    function R(e, t) {
        for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2]);
    }
    function S(e) {
        return "string" == typeof e;
    }
    function T(e) {
        return "function" == typeof e;
    }
    function U(e) {
        return "number" == typeof e;
    }
    function V(e) {
        return "object" == typeof e;
    }
    function W(e) {
        return T(e) && e();
    }
    function X(r, n) {
        return function() {
            var e = W(r), t = W(n);
            return function() {
                W(e), W(t);
            };
        };
    }
    function qa(e) {
        return ke.getComputedStyle(e);
    }
    function sa(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e;
    }
    function ua(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
    }
    function wa(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n);
        });
    }
    function xa(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        });
    }
    function ya(e, t, r) {
        return e.removeEventListener(t, r);
    }
    function Ca(e, t) {
        if (S(e)) {
            var r = e.indexOf("="), n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in m ? m[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
        }
        return e;
    }
    function Da(e, t, r, n, o, i, a) {
        var s = o.startColor, l = o.endColor, c = o.fontSize, u = o.indent, f = o.fontWeight, d = Pe.createElement("div"), p = K(r) || "fixed" === L(r, "pinType"), g = -1 !== e.indexOf("scroller"), h = p ? Oe : r, v = -1 !== e.indexOf("start"), b = v ? s : l, m = "border-color:" + b + ";font-size:" + c + ";color:" + b + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return m += "position:" + (g && p ? "fixed;" : "absolute;"), !g && p || (m += (n === rt ? x : y) + ":" + (i + parseFloat(u)) + "px;"), 
        a && (m += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), 
        d._isStart = v, d.setAttribute("class", "gsap-marker-" + e), d.style.cssText = m, 
        d.innerText = t || 0 === t ? e + "-" + t : e, h.insertBefore(d, h.children[0]), 
        d._offset = d["offset" + n.op.d2], w(d, 0, n, v), d;
    }
    function Ha() {
        return l = l || s(B);
    }
    function Ia() {
        l || (l = s(B), De || _("scrollStart"), De = He());
    }
    function Ja() {
        return !Re && a.restart(!0);
    }
    function Pa(e) {
        var t, r = Me.ticker.frame, n = [], o = 0;
        if (g !== r || Be) {
            for (A(); o < P.length; o += 4) (t = ke.matchMedia(P[o]).matches) !== P[o + 3] && ((P[o + 3] = t) ? n.push(o) : A(1, P[o]) || T(P[o + 2]) && P[o + 2]());
            for (E(), o = 0; o < n.length; o++) t = n[o], We = P[t], P[t + 2] = P[t + 1](e);
            z(We = 0, 1), g = r, _("matchMedia");
        }
    }
    function Qa() {
        return ya(Z, "scrollEnd", Qa) || z(!0);
    }
    function ab(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var o, i = F.length, a = t.style, s = e.style; i--; ) a[o = F[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), 
            s[y] = s[x] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Ke] = ua(e, tt) + et, 
            a[je] = ua(e, rt) + et, a[Ze] = s[$e] = s.top = s[b] = "0", ct(n), s[Ke] = s.maxWidth = r[Ke], 
            s[je] = s.maxHeight = r[je], s[Ze] = r[Ze], e.parentNode.insertBefore(t, e), t.appendChild(e);
        }
    }
    function db(e) {
        for (var t = D.length, r = e.style, n = [], o = 0; o < t; o++) n.push(D[o], r[D[o]]);
        return n.t = e, n;
    }
    function gb(e, t, r, n, o, i, a, s, l, c, u, f) {
        if (T(e) && (e = e(s)), S(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ca("0" + e.substr(3), r) : 0)), 
        U(e)) a && w(a, r, n, !0); else {
            T(t) && (t = t(s));
            var d, p, g, h = Ee(t)[0] || Oe, v = nt(h) || {}, b = e.split(" ");
            v && (v.left || v.top) || "none" !== qa(h).display || (g = h.style.display, h.style.display = "block", 
            v = nt(h), g ? h.style.display = g : h.style.removeProperty("display")), d = Ca(b[0], v[n.d]), 
            p = Ca(b[1] || "0", r), e = v[n.p] - l[n.p] - c + d + o - p, a && w(a, p, n, r - p < 20 || a._isStart && 20 < p), 
            r -= r - p;
        }
        if (i) {
            var m = e + r, x = i._isStart;
            f = "scroll" + n.d2, w(i, m, n, x && 20 < m || !x && (u ? Math.max(Oe[f], _e[f]) : i.parentNode[f]) <= m + 1), 
            u && (l = nt(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + et));
        }
        return Math.round(e);
    }
    function ib(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Oe) {
                for (o in e._stOrig = a.cssText, i = qa(e)) +o || Y.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n;
            } else a.cssText = e._stOrig;
            Me.core.getCache(e).uncache = 1, t.appendChild(e);
        }
    }
    function jb(l, e) {
        var c, u, f = M(l, e), d = "_scroll" + e.p2;
        return l[d] = f, function getTween(e, t, r, n, o) {
            var i = getTween.tween, a = t.onComplete, s = {};
            return i && i.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function(e) {
                return (e = Math.round(f())) !== c && e !== u ? (i.kill(), getTween.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, 
                u = c, c = Math.round(e);
            }, t.onComplete = function() {
                getTween.tween = 0, a && a.call(i);
            }, i = getTween.tween = Me.to(l, t);
        };
    }
    var Me, o, ke, Pe, _e, Oe, i, a, s, l, Ee, Le, Ie, c, Re, Ae, u, ze, f, d, p, Ne, qe, We, g, Be = 1, Fe = [], h = [], He = Date.now, v = He(), De = 0, Je = 1, Qe = Math.abs, t = "scrollLeft", r = "scrollTop", b = "left", x = "right", y = "bottom", Ke = "width", je = "height", Ve = "Right", Xe = "Left", Ue = "Top", Ye = "Bottom", Ze = "padding", $e = "margin", Ge = "Width", n = "Height", et = "px", tt = {
        s: t,
        p: b,
        p2: Xe,
        os: x,
        os2: Ve,
        d: Ke,
        d2: Ge,
        a: "x",
        sc: function sc(e) {
            return arguments.length ? ke.scrollTo(e, rt.sc()) : ke.pageXOffset || Pe[t] || _e[t] || Oe[t] || 0;
        }
    }, rt = {
        s: r,
        p: "top",
        p2: Ue,
        os: y,
        os2: Ye,
        d: je,
        d2: n,
        a: "y",
        op: tt,
        sc: function sc(e) {
            return arguments.length ? ke.scrollTo(tt.sc(), e) : ke.pageYOffset || Pe[r] || _e[r] || Oe[r] || 0;
        }
    }, nt = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== qa(e)[u] && Me.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), n = e.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
    }, ot = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, it = {
        toggleActions: "play",
        anticipatePin: 0
    }, m = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, w = function _positionMarker(e, t, r, n) {
        var o = {
            display: "block"
        }, i = r[n ? "os2" : "p2"], a = r[n ? "p2" : "os2"];
        e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? 1 : 0, o["border" + i + Ge] = 1, 
        o["border" + a + Ge] = 0, o[r.p] = t, Me.set(e, o);
    }, at = [], st = {}, C = {}, k = [], P = [], _ = function _dispatch(e) {
        return C[e] && C[e].map(function(e) {
            return e();
        }) || k;
    }, O = [], E = function _revertRecorded(e) {
        for (var t = 0; t < O.length; t += 4) e && O[t + 3] !== e || (O[t].style.cssText = O[t + 1], 
        O[t + 2].uncache = 1);
    }, A = function _revertAll(e, t) {
        var r;
        for (ze = 0; ze < at.length; ze++) r = at[ze], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), 
        r.revert()));
        E(t), t || _("revert");
    }, z = function _refreshAll(e, t) {
        if (!De || e) {
            var r = _("refreshInit");
            for (Ne && Z.sort(), t || A(), ze = 0; ze < at.length; ze++) at[ze].refresh();
            for (r.forEach(function(e) {
                return e && e.render && e.render(-1);
            }), ze = at.length; ze--; ) at[ze].scroll.rec = 0;
            a.pause(), _("refresh");
        } else xa(Z, "scrollEnd", Qa);
    }, q = 0, lt = 1, B = function _updateAll() {
        var e = at.length, t = He(), r = 50 <= t - v, n = e && at[0].scroll();
        if (lt = n < q ? -1 : 1, q = n, r && (De && !Ae && 200 < t - De && (De = 0, _("scrollEnd")), 
        Ie = v, v = t), lt < 0) {
            for (ze = e; ze--; ) at[ze] && at[ze].update(0, r);
            lt = 1;
        } else for (ze = 0; ze < e; ze++) at[ze] && at[ze].update(0, r);
        l = 0;
    }, F = [ b, "top", y, x, $e + Ye, $e + Ve, $e + Ue, $e + Xe, "display", "flexShrink", "float" ], D = F.concat([ Ke, je, "boxSizing", "max" + Ge, "max" + n, "position", $e, Ze, Ze + Ue, Ze + Ve, Ze + Ye, Ze + Xe ]), j = /([A-Z])/g, ct = function _setState(e) {
        if (e) for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) r = e[i + 1], 
        t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase());
    }, ut = {
        left: 0,
        top: 0
    }, Y = /(?:webkit|moz|length|cssText)/i;
    tt.op = rt;
    var Z = (ScrollTrigger.prototype.init = function init(x, y) {
        if (this.progress = 0, this.vars && this.kill(1), Je) {
            var p, n, l, w, C, k, P, _, O, E, I, R, e, A, z, q, W, B, t, F, g, D, J, h, j, v, b, r, m, X, Y, o, c, Z, $, G, ee, te = (x = sa(S(x) || U(x) || x.nodeType ? {
                trigger: x
            } : x, it)).horizontal ? tt : rt, re = x.onUpdate, ne = x.toggleClass, i = x.id, oe = x.onToggle, ie = x.onRefresh, a = x.scrub, ae = x.trigger, se = x.pin, le = x.pinSpacing, ce = x.invalidateOnRefresh, ue = x.anticipatePin, s = x.onScrubComplete, u = x.onSnapComplete, fe = x.once, de = x.snap, pe = x.pinReparent, ge = !a && 0 !== a, he = Ee(x.scroller || ke)[0], f = Me.core.getCache(he), ve = K(he), be = "pinType" in x ? "fixed" === x.pinType : ve || "fixed" === L(he, "pinType"), me = [ x.onEnter, x.onLeave, x.onEnterBack, x.onLeaveBack ], xe = ge && x.toggleActions.split(" "), d = "markers" in x ? x.markers : it.markers, ye = ve ? 0 : parseFloat(qa(he)["border" + te.p2 + Ge]) || 0, Te = this, we = x.onRefreshInit && function() {
                return x.onRefreshInit(Te);
            }, Se = function _getSizeFunc(e, t, r) {
                var n = r.d, o = r.d2, i = r.a;
                return (i = L(e, "getBoundingClientRect")) ? function() {
                    return i()[n];
                } : function() {
                    return (t ? ke["inner" + o] : e["client" + o]) || 0;
                };
            }(he, ve, te), Ce = function _getOffsetsFunc(e, t) {
                return !t || ~Fe.indexOf(e) ? N(e) : function() {
                    return ut;
                };
            }(he, ve);
            Te.media = We, ue *= 45, at.push(Te), Te.scroller = he, Te.scroll = M(he, te), C = Te.scroll(), 
            Te.vars = x, y = y || x.animation, "refreshPriority" in x && (Ne = 1), f.tweenScroll = f.tweenScroll || {
                top: jb(he, rt),
                left: jb(he, tt)
            }, Te.tweenTo = p = f.tweenScroll[te.p], y && (y.vars.lazy = !1, y._initted || !1 !== y.vars.immediateRender && !1 !== x.immediateRender && y.render(0, !0, !0), 
            Te.animation = y.pause(), y.scrollTrigger = Te, (o = U(a) && a) && (Y = Me.to(y, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                    return s && s(Te);
                }
            })), m = 0, i = i || y.vars.id), de && (V(de) || (de = {
                snapTo: de
            }), Me.set(ve ? [ Oe, _e ] : he, {
                scrollBehavior: "auto"
            }), l = T(de.snapTo) ? de.snapTo : "labels" === de.snapTo ? function _getLabels(i) {
                return function(e) {
                    var t, r = [], n = i.labels, o = i.duration();
                    for (t in n) r.push(n[t] / o);
                    return Me.utils.snap(r, e);
                };
            }(y) : Me.utils.snap(de.snapTo), c = de.duration || {
                min: .1,
                max: 2
            }, c = V(c) ? Le(c.min, c.max) : Le(c, c), Z = Me.delayedCall(de.delay || o / 2 || .1, function() {
                if (Math.abs(Te.getVelocity()) < 10 && !Ae) {
                    var e = y && !ge ? y.totalProgress() : Te.progress, t = (e - X) / (He() - Ie) * 1e3 || 0, r = Qe(t / 2) * t / .185, n = e + r, o = Le(0, 1, l(n, Te)), i = Te.scroll(), a = Math.round(P + o * A), s = p.tween;
                    if (i <= _ && P <= i && a !== i) {
                        if (s && !s._initted && s.data <= Math.abs(a - i)) return;
                        p(a, {
                            duration: c(Qe(.185 * Math.max(Qe(n - e), Qe(o - e)) / t / .05 || 0)),
                            ease: de.ease || "power3",
                            data: Math.abs(a - i),
                            onComplete: function onComplete() {
                                m = X = y && !ge ? y.totalProgress() : Te.progress, u && u(Te);
                            }
                        }, i, r * A, a - i - r * A);
                    }
                } else Te.isActive && Z.restart(!0);
            }).pause()), i && (st[i] = Te), ae = Te.trigger = Ee(ae || se)[0], se = !0 === se ? ae : Ee(se)[0], 
            S(ne) && (ne = {
                targets: ae,
                className: ne
            }), se && (!1 === le || le === $e || (le = !(!le && "flex" === qa(se.parentNode).display) && Ze), 
            Te.pin = se, !1 !== x.force3D && Me.set(se, {
                force3D: !0
            }), (n = Me.core.getCache(se)).spacer ? z = n.pinState : (n.spacer = B = Pe.createElement("div"), 
            B.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), n.pinState = z = db(se)), 
            Te.spacer = B = n.spacer, r = qa(se), h = r[le + te.os2], F = Me.getProperty(se), 
            g = Me.quickSetter(se, te.a, et), ab(se, B, r), W = db(se)), d && (e = V(d) ? sa(d, ot) : ot, 
            I = Da("scroller-start", i, he, te, e, 0), R = Da("scroller-end", i, he, te, e, 0, I), 
            t = I["offset" + te.op.d2], O = Da("start", i, he, te, e, t), E = Da("end", i, he, te, e, t), 
            be || (function _makePositionable(e) {
                e.style.position = "absolute" === qa(e).position ? "absolute" : "relative";
            }(he), Me.set([ I, R ], {
                force3D: !0
            }), v = Me.quickSetter(I, te.a, et), b = Me.quickSetter(R, te.a, et))), Te.revert = function(e) {
                var t = !1 !== e || !Te.enabled, r = Re;
                t !== w && (t && (G = Math.max(Te.scroll(), Te.scroll.rec || 0), $ = Te.progress, 
                ee = y && y.progress()), O && [ O, E, I, R ].forEach(function(e) {
                    return e.style.display = t ? "none" : "block";
                }), t && (Re = 1), Te.update(t), Re = r, se && (t ? function _swapPinOut(e, t, r) {
                    if (ct(r), e.parentNode === t) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                    }
                }(se, B, z) : pe && Te.isActive || ab(se, B, qa(se), j)), w = t);
            }, Te.refresh = function(e) {
                if (!Re && Te.enabled) if (se && e && De) xa(ScrollTrigger, "scrollEnd", Qa); else {
                    Re = 1, Y && Y.kill(), ce && y && y.progress(0).invalidate(), w || Te.revert();
                    for (var t, r, n, o, i, a, s, l, c = Se(), u = Ce(), f = Q(he, te), d = 0, p = 0, g = x.end, h = x.endTrigger || ae, v = x.start || (0 === x.start ? 0 : se || !ae ? "0 0" : "0 100%"), b = ae && Math.max(0, at.indexOf(Te)) || 0, m = b; m--; ) !(s = at[m].pin) || s !== ae && s !== se || at[m].revert();
                    for (P = gb(v, ae, c, te, Te.scroll(), O, I, Te, u, ye, be, f) || (se ? -.001 : 0), 
                    T(g) && (g = g(Te)), S(g) && !g.indexOf("+=") && (~g.indexOf(" ") ? g = (S(v) ? v.split(" ")[0] : "") + g : (d = Ca(g.substr(2), c), 
                    g = S(v) ? v : P + d, h = ae)), _ = Math.max(P, gb(g || (h ? "100% 0" : f), h, c, te, Te.scroll() + d, E, R, Te, u, ye, be, f)) || -.001, 
                    A = _ - P || (P -= .01) && .001, d = 0, m = b; m--; ) (s = (a = at[m]).pin) && a.start - a._pinPush < P && (t = a.end - a.start, 
                    s === ae && (d += t), s === se && (p += t));
                    if (P += d, _ += d, Te._pinPush = p, O && d && ((t = {})[te.a] = "+=" + d, Me.set([ O, E ], t)), 
                    se) t = qa(se), o = te === rt, n = Te.scroll(), D = parseFloat(F(te.a)) + p, !f && 1 < _ && ((ve ? Oe : he).style["overflow-" + te.a] = "scroll"), 
                    ab(se, B, t), W = db(se), r = nt(se, !0), l = be && M(he, o ? tt : rt)(), le && ((j = [ le + te.os2, A + p + et ]).t = B, 
                    (m = le === Ze ? ua(se, te) + A + p : 0) && j.push(te.d, m + et), ct(j), be && Te.scroll(G)), 
                    be && ((i = {
                        top: r.top + (o ? n - P : l) + et,
                        left: r.left + (o ? l : n - P) + et,
                        boxSizing: "border-box",
                        position: "fixed"
                    })[Ke] = i.maxWidth = Math.ceil(r.width) + et, i[je] = i.maxHeight = Math.ceil(r.height) + et, 
                    i[$e] = i[$e + Ue] = i[$e + Ve] = i[$e + Ye] = i[$e + Xe] = "0", i[Ze] = t[Ze], 
                    i[Ze + Ue] = t[Ze + Ue], i[Ze + Ve] = t[Ze + Ve], i[Ze + Ye] = t[Ze + Ye], i[Ze + Xe] = t[Ze + Xe], 
                    q = function _copyState(e, t, r) {
                        for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                        return o.t = e.t, o;
                    }(z, i, pe)), y ? (y.progress(1, !0), J = F(te.a) - D + A + p, A !== J && q.splice(q.length - 2, 2), 
                    y.progress(0, !0)) : J = A; else if (ae && Te.scroll()) for (r = ae.parentNode; r && r !== Oe; ) r._pinOffset && (P -= r._pinOffset, 
                    _ -= r._pinOffset), r = r.parentNode;
                    for (m = 0; m < b; m++) !(a = at[m].pin) || a !== ae && a !== se || at[m].revert(!1);
                    Te.start = P, Te.end = _, (C = k = Te.scroll()) < G && Te.scroll(G), Te.revert(!1), 
                    Re = 0, ee && ge && y.progress(ee, !0), $ !== Te.progress && (Y && y.totalProgress($, !0), 
                    Te.progress = $, Te.update()), se && le && (B._pinOffset = Math.round(Te.progress * J)), 
                    ie && ie(Te);
                }
            }, Te.getVelocity = function() {
                return (Te.scroll() - k) / (He() - Ie) * 1e3 || 0;
            }, Te.update = function(e, t) {
                var r, n, o, i, a, s = Te.scroll(), l = e ? 0 : (s - P) / A, c = l < 0 ? 0 : 1 < l ? 1 : l || 0, u = Te.progress;
                if (t && (k = C, C = s, de && (X = m, m = y && !ge ? y.totalProgress() : c)), ue && !c && se && !Re && !Be && De && P < s + (s - k) / (He() - Ie) * ue && (c = 1e-4), 
                c !== u && Te.enabled) {
                    if (i = (a = (r = Te.isActive = !!c && c < 1) != (!!u && u < 1)) || !!c != !!u, 
                    Te.direction = u < c ? 1 : -1, Te.progress = c, ge || (!Y || Re || Be ? y && y.totalProgress(c, !!Re) : (Y.vars.totalProgress = c, 
                    Y.invalidate().restart())), se) if (e && le && (B.style[le + te.os2] = h), be) {
                        if (i) {
                            if (o = !e && u < c && s < _ + 1 && s + 1 >= Q(he, te), pe) if (e || !r && !o) ib(se, B); else {
                                var f = nt(se, !0), d = s - P;
                                ib(se, Oe, f.top + (te === rt ? d : 0) + et, f.left + (te === rt ? 0 : d) + et);
                            }
                            ct(r || o ? q : W), J !== A && c < 1 && r || g(D + (1 !== c || o ? 0 : J));
                        }
                    } else g(D + J * c);
                    !de || p.tween || Re || Be || Z.restart(!0), ne && (a || fe && c && (c < 1 || !qe)) && Ee(ne.targets).forEach(function(e) {
                        return e.classList[r || fe ? "add" : "remove"](ne.className);
                    }), !re || ge || e || re(Te), i && !Re ? (n = c && !u ? 0 : 1 === c ? 1 : 1 === u ? 2 : 3, 
                    ge && (o = !a && "none" !== xe[n + 1] && xe[n + 1] || xe[n], y && ("complete" === o || "reset" === o || o in y) && ("complete" === o ? y.pause().totalProgress(1) : "reset" === o ? y.restart(!0).pause() : y[o]()), 
                    re && re(Te)), !a && qe || (oe && a && oe(Te), me[n] && me[n](Te), fe && (1 === c ? Te.kill(!1, 1) : me[n] = 0), 
                    a || me[n = 1 === c ? 1 : 3] && me[n](Te))) : ge && re && !Re && re(Te);
                }
                b && (v(s + (I._isFlipped ? 1 : 0)), b(s));
            }, Te.enable = function() {
                Te.enabled || (Te.enabled = !0, xa(he, "resize", Ja), xa(he, "scroll", Ia), we && xa(ScrollTrigger, "refreshInit", we), 
                y && y.add ? Me.delayedCall(.01, function() {
                    return P || _ || Te.refresh();
                }) && (A = .01) && (P = _ = 0) : Te.refresh());
            }, Te.disable = function(e, t) {
                if (Te.enabled && (!1 !== e && Te.revert(), Te.enabled = Te.isActive = !1, t || Y && Y.pause(), 
                G = 0, n && (n.uncache = 1), we && ya(ScrollTrigger, "refreshInit", we), Z && (Z.pause(), 
                p.tween && p.tween.kill() && (p.tween = 0)), !ve)) {
                    for (var r = at.length; r--; ) if (at[r].scroller === he && at[r] !== Te) return;
                    ya(he, "resize", Ja), ya(he, "scroll", Ia);
                }
            }, Te.kill = function(e, t) {
                Te.disable(e, t), i && delete st[i];
                var r = at.indexOf(Te);
                at.splice(r, 1), r === ze && 0 < lt && ze--, y && (y.scrollTrigger = null, e && y.render(-1), 
                t || y.kill()), O && [ O, E, I, R ].forEach(function(e) {
                    return e.parentNode.removeChild(e);
                }), n && (n.uncache = 1);
            }, Te.enable();
        } else this.update = this.refresh = this.kill = H;
    }, ScrollTrigger.register = function register(e) {
        if (!o && (Me = e || J(), I() && window.document && (ke = window, Pe = document, 
        _e = Pe.documentElement, Oe = Pe.body), Me && (Ee = Me.utils.toArray, Le = Me.utils.clamp, 
        Me.core.globals("ScrollTrigger", ScrollTrigger), Oe))) {
            s = ke.requestAnimationFrame || function(e) {
                return setTimeout(e, 16);
            }, xa(ke, "mousewheel", Ia), i = [ ke, Pe, _e, Oe ], xa(Pe, "scroll", Ia);
            var t, r = Oe.style, n = r.borderTop;
            r.borderTop = "1px solid #000", t = nt(Oe), rt.m = Math.round(t.top + rt.sc()) || 0, 
            tt.m = Math.round(t.left + tt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), 
            c = setInterval(Ha, 200), Me.delayedCall(.5, function() {
                return Be = 0;
            }), xa(Pe, "touchcancel", H), xa(Oe, "touchstart", H), wa(xa, Pe, "pointerdown,touchstart,mousedown", function() {
                return Ae = 1;
            }), wa(xa, Pe, "pointerup,touchend,mouseup", function() {
                return Ae = 0;
            }), u = Me.utils.checkPrefix("transform"), D.push(u), o = He(), a = Me.delayedCall(.2, z).pause(), 
            p = [ Pe, "visibilitychange", function() {
                var e = ke.innerWidth, t = ke.innerHeight;
                Pe.hidden ? (f = e, d = t) : f === e && d === t || Ja();
            }, Pe, "DOMContentLoaded", z, ke, "load", function() {
                return De || z();
            }, ke, "resize", Ja ], R(xa);
        }
        return o;
    }, ScrollTrigger.defaults = function defaults(e) {
        for (var t in e) it[t] = e[t];
    }, ScrollTrigger.kill = function kill() {
        Je = 0, at.slice(0).forEach(function(e) {
            return e.kill(1);
        });
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (qe = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(Ha, t), "autoRefreshEvents" in e && (R(ya) || R(xa, e.autoRefreshEvents || "none"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Ee(e)[0];
        K(r) ? Fe.unshift(ke, t, Oe, t, _e, t) : Fe.unshift(r, t);
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, o, i;
        for (r in e) n = P.indexOf(r), o = e[r], "all" === (We = r) ? o() : (t = ke.matchMedia(r)) && (t.matches && (i = o()), 
        ~n ? (P[n + 1] = X(P[n + 1], o), P[n + 2] = X(P[n + 2], i)) : (n = P.length, P.push(r, o, i), 
        t.addListener ? t.addListener(Pa) : t.addEventListener("change", Pa)), P[n + 3] = t.matches), 
        We = 0;
        return P;
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (P.length = 0), 0 <= (e = P.indexOf(e)) && P.splice(e, 4);
    }, ScrollTrigger);
    function ScrollTrigger(e, t) {
        o || ScrollTrigger.register(Me) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), 
        this.init(e, t);
    }
    Z.version = "3.5.1", Z.saveStyles = function(e) {
        return e ? Ee(e).forEach(function(e) {
            var t = O.indexOf(e);
            0 <= t && O.splice(t, 4), O.push(e, e.style.cssText, Me.core.getCache(e), We);
        }) : O;
    }, Z.revert = function(e, t) {
        return A(!e, t);
    }, Z.create = function(e, t) {
        return new Z(e, t);
    }, Z.refresh = function(e) {
        return e ? Ja() : z(!0);
    }, Z.update = B, Z.maxScroll = function(e, t) {
        return Q(e, t ? tt : rt);
    }, Z.getScrollFunc = function(e, t) {
        return M(Ee(e)[0], t ? tt : rt);
    }, Z.getById = function(e) {
        return st[e];
    }, Z.getAll = function() {
        return at.slice(0);
    }, Z.isScrolling = function() {
        return !!De;
    }, Z.addEventListener = function(e, t) {
        var r = C[e] || (C[e] = []);
        ~r.indexOf(t) || r.push(t);
    }, Z.removeEventListener = function(e, t) {
        var r = C[e], n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1);
    }, Z.batch = function(e, t) {
        function bi(e, t) {
            var r = [], n = [], o = Me.delayedCall(i, function() {
                t(r, n), r = [], n = [];
            }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
            };
        }
        var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && T(t[r]) && "onRefreshInit" !== r ? bi(0, t[r]) : t[r];
        return T(a) && (a = a(), xa(Z, "refresh", function() {
            return a = t.batchMax();
        })), Ee(e).forEach(function(e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push(Z.create(t));
        }), n;
    }, Z.sort = function(e) {
        return at.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
        });
    }, J() && Me.registerPlugin(Z), e.ScrollTrigger = Z, e.default = Z;
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    } else {
        delete e.default;
    }
});

!function(a, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, exports, module) : a.CountUp = n();
}(this, function(a, n, t) {
    var e = function(a, n, t, e, i, r) {
        function o(a) {
            var n, t, e, i, r, o, s = a < 0;
            if (a = Math.abs(a).toFixed(l.decimals), a += "", n = a.split("."), t = n[0], e = n.length > 1 ? l.options.decimal + n[1] : "", 
            l.options.useGrouping) {
                for (i = "", r = 0, o = t.length; r < o; ++r) 0 !== r && r % 3 === 0 && (i = l.options.separator + i), 
                i = t[o - r - 1] + i;
                t = i;
            }
            return l.options.numerals.length && (t = t.replace(/[0-9]/g, function(a) {
                return l.options.numerals[+a];
            }), e = e.replace(/[0-9]/g, function(a) {
                return l.options.numerals[+a];
            })), (s ? "-" : "") + l.options.prefix + t + e + l.options.suffix;
        }
        function s(a, n, t, e) {
            return t * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + n;
        }
        function u(a) {
            return "number" == typeof a && !isNaN(a);
        }
        var l = this;
        if (l.version = function() {
            return "1.9.3";
        }, l.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: s,
            formattingFn: o,
            prefix: "",
            suffix: "",
            numerals: []
        }, r && "object" == typeof r) for (var m in l.options) r.hasOwnProperty(m) && null !== r[m] && (l.options[m] = r[m]);
        "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
        for (var d = 0, c = [ "webkit", "moz", "ms", "o" ], f = 0; f < c.length && !window.requestAnimationFrame; ++f) window.requestAnimationFrame = window[c[f] + "RequestAnimationFrame"], 
        window.cancelAnimationFrame = window[c[f] + "CancelAnimationFrame"] || window[c[f] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a, n) {
            var t = new Date().getTime(), e = Math.max(0, 16 - (t - d)), i = window.setTimeout(function() {
                a(t + e);
            }, e);
            return d = t + e, i;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        }), l.initialize = function() {
            return !!l.initialized || (l.error = "", l.d = "string" == typeof a ? document.getElementById(a) : a, 
            l.d ? (l.startVal = Number(n), l.endVal = Number(t), u(l.startVal) && u(l.endVal) ? (l.decimals = Math.max(0, e || 0), 
            l.dec = Math.pow(10, l.decimals), l.duration = 1e3 * Number(i) || 2e3, l.countDown = l.startVal > l.endVal, 
            l.frameVal = l.startVal, l.initialized = !0, !0) : (l.error = "[CountUp] startVal (" + n + ") or endVal (" + t + ") is not a number", 
            !1)) : (l.error = "[CountUp] target is null or undefined", !1));
        }, l.printValue = function(a) {
            var n = l.options.formattingFn(a);
            "INPUT" === l.d.tagName ? this.d.value = n : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent = n : this.d.innerHTML = n;
        }, l.count = function(a) {
            l.startTime || (l.startTime = a), l.timestamp = a;
            var n = a - l.startTime;
            l.remaining = l.duration - n, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(n, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn(n, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (n / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (n / l.duration), 
            l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, 
            l.frameVal = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), n < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback();
        }, l.start = function(a) {
            l.initialize() && (l.callback = a, l.rAF = requestAnimationFrame(l.count));
        }, l.pauseResume = function() {
            l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, 
            requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF));
        }, l.reset = function() {
            l.paused = !1, delete l.startTime, l.initialized = !1, l.initialize() && (cancelAnimationFrame(l.rAF), 
            l.printValue(l.startVal));
        }, l.update = function(a) {
            if (l.initialize()) {
                if (a = Number(a), !u(a)) return void (l.error = "[CountUp] update() - new endVal is not a number: " + a);
                l.error = "", a !== l.frameVal && (cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, 
                l.startVal = l.frameVal, l.endVal = a, l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count));
            }
        }, l.initialize() && l.printValue(l.startVal);
    };
    return e;
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Util = function($) {
    /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
    var transition = false;
    var MAX_UID = 1e6;
 // Shoutout AngusCroll (https://goo.gl/pxwQGp)
        function toType(obj) {
        return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function getSpecialTransitionEndEvent() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function handle(event) {
                if ($(event.target).is(this)) {
                    return event.handleObj.handler.apply(this, arguments);
 // eslint-disable-line prefer-rest-params
                                }
                return undefined;
 // eslint-disable-line no-undefined
                        }
        };
    }
    function transitionEndTest() {
        if (typeof window !== "undefined" && window.QUnit) {
            return false;
        }
        return {
            end: "transitionend"
        };
    }
    function transitionEndEmulator(duration) {
        var _this = this;
        var called = false;
        $(this).one(Util.TRANSITION_END, function() {
            called = true;
        });
        setTimeout(function() {
            if (!called) {
                Util.triggerTransitionEnd(_this);
            }
        }, duration);
        return this;
    }
    function setTransitionEndSupport() {
        transition = transitionEndTest();
        $.fn.emulateTransitionEnd = transitionEndEmulator;
        if (Util.supportsTransitionEnd()) {
            $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
        }
    }
    function escapeId(selector) {
        // We escape IDs in case of special selectors (selector = '#myId:something')
        // $.escapeSelector does not exist in jQuery < 3
        selector = typeof $.escapeSelector === "function" ? $.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
        return selector;
    }
    /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */    var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(prefix) {
            do {
                // eslint-disable-next-line no-bitwise
                prefix += ~~(Math.random() * MAX_UID);
 // "~~" acts like a faster Math.floor() here
                        } while (document.getElementById(prefix));
            return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute("data-target");
            if (!selector || selector === "#") {
                selector = element.getAttribute("href") || "";
            }
 // If it's an ID
                        if (selector.charAt(0) === "#") {
                selector = escapeId(selector);
            }
            try {
                var $selector = $(document).find(selector);
                return $selector.length > 0 ? selector : null;
            } catch (err) {
                return null;
            }
        },
        reflow: function reflow(element) {
            return element.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
            $(element).trigger(transition.end);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(transition);
        },
        isElement: function isElement(obj) {
            return (obj[0] || obj).nodeType;
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
            for (var property in configTypes) {
                if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                    var expectedTypes = configTypes[property];
                    var value = config[property];
                    var valueType = value && Util.isElement(value) ? "element" : toType(value);
                    if (!new RegExp(expectedTypes).test(valueType)) {
                        throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                    }
                }
            }
        }
    };
    setTransitionEndSupport();
    return Util;
}($);

//# sourceMappingURL=util.js.map
function _extends() {
    _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */ var Collapse = function($) {
    /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
    var NAME = "collapse";
    var VERSION = "4.0.0";
    var DATA_KEY = "bs.collapse";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var Default = {
        toggle: true,
        parent: ""
    };
    var DefaultType = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    var Event = {
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SHOW: "show",
        COLLAPSE: "collapse",
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed"
    };
    var Dimension = {
        WIDTH: "width",
        HEIGHT: "height"
    };
    var Selector = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
        /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */    };
    var Collapse = 
    /* */
    function() {
        function Collapse(element, config) {
            this._isTransitioning = false;
            this._element = element;
            this._config = this._getConfig(config);
            this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
            var tabToggles = $(Selector.DATA_TOGGLE);
            for (var i = 0; i < tabToggles.length; i++) {
                var elem = tabToggles[i];
                var selector = Util.getSelectorFromElement(elem);
                if (selector !== null && $(selector).filter(element).length > 0) {
                    this._selector = selector;
                    this._triggerArray.push(elem);
                }
            }
            this._parent = this._config.parent ? this._getParent() : null;
            if (!this._config.parent) {
                this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            }
            if (this._config.toggle) {
                this.toggle();
            }
        }
 // Getters
                var _proto = Collapse.prototype;
        // Public
                _proto.toggle = function toggle() {
            if ($(this._element).hasClass(ClassName.SHOW)) {
                this.hide();
            } else {
                this.show();
            }
        };
        _proto.show = function show() {
            var _this = this;
            if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
                return;
            }
            var actives;
            var activesData;
            if (this._parent) {
                actives = $.makeArray($(this._parent).find(Selector.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'));
                if (actives.length === 0) {
                    actives = null;
                }
            }
            if (actives) {
                activesData = $(actives).not(this._selector).data(DATA_KEY);
                if (activesData && activesData._isTransitioning) {
                    return;
                }
            }
            var startEvent = $.Event(Event.SHOW);
            $(this._element).trigger(startEvent);
            if (startEvent.isDefaultPrevented()) {
                return;
            }
            if (actives) {
                Collapse._jQueryInterface.call($(actives).not(this._selector), "hide");
                if (!activesData) {
                    $(actives).data(DATA_KEY, null);
                }
            }
            var dimension = this._getDimension();
            $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
            this._element.style[dimension] = 0;
            if (this._triggerArray.length > 0) {
                $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr("aria-expanded", true);
            }
            this.setTransitioning(true);
            var complete = function complete() {
                $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
                _this._element.style[dimension] = "";
                _this.setTransitioning(false);
                $(_this._element).trigger(Event.SHOWN);
            };
            if (!Util.supportsTransitionEnd()) {
                complete();
                return;
            }
            var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            var scrollSize = "scroll" + capitalizedDimension;
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
            this._element.style[dimension] = this._element[scrollSize] + "px";
        };
        _proto.hide = function hide() {
            var _this2 = this;
            if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
                return;
            }
            var startEvent = $.Event(Event.HIDE);
            $(this._element).trigger(startEvent);
            if (startEvent.isDefaultPrevented()) {
                return;
            }
            var dimension = this._getDimension();
            this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
            Util.reflow(this._element);
            $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
            if (this._triggerArray.length > 0) {
                for (var i = 0; i < this._triggerArray.length; i++) {
                    var trigger = this._triggerArray[i];
                    var selector = Util.getSelectorFromElement(trigger);
                    if (selector !== null) {
                        var $elem = $(selector);
                        if (!$elem.hasClass(ClassName.SHOW)) {
                            $(trigger).addClass(ClassName.COLLAPSED).attr("aria-expanded", false);
                        }
                    }
                }
            }
            this.setTransitioning(true);
            var complete = function complete() {
                _this2.setTransitioning(false);
                $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
            };
            this._element.style[dimension] = "";
            if (!Util.supportsTransitionEnd()) {
                complete();
                return;
            }
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        };
        _proto.setTransitioning = function setTransitioning(isTransitioning) {
            this._isTransitioning = isTransitioning;
        };
        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null;
        };
 // Private
                _proto._getConfig = function _getConfig(config) {
            config = _extends({}, Default, config);
            config.toggle = Boolean(config.toggle);
 // Coerce string values
                        Util.typeCheckConfig(NAME, config, DefaultType);
            return config;
        };
        _proto._getDimension = function _getDimension() {
            var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
            return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
        };
        _proto._getParent = function _getParent() {
            var _this3 = this;
            var parent = null;
            if (Util.isElement(this._config.parent)) {
                parent = this._config.parent;
 // It's a jQuery object
                                if (typeof this._config.parent.jquery !== "undefined") {
                    parent = this._config.parent[0];
                }
            } else {
                parent = $(this._config.parent)[0];
            }
            var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            $(parent).find(selector).each(function(i, element) {
                _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [ element ]);
            });
            return parent;
        };
        _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
            if (element) {
                var isOpen = $(element).hasClass(ClassName.SHOW);
                if (triggerArray.length > 0) {
                    $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr("aria-expanded", isOpen);
                }
            }
        };
 // Static
                Collapse._getTargetFromElement = function _getTargetFromElement(element) {
            var selector = Util.getSelectorFromElement(element);
            return selector ? $(selector)[0] : null;
        };
        Collapse._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data(DATA_KEY);
                var _config = _extends({}, Default, $this.data(), typeof config === "object" && config);
                if (!data && _config.toggle && /show|hide/.test(config)) {
                    _config.toggle = false;
                }
                if (!data) {
                    data = new Collapse(this, _config);
                    $this.data(DATA_KEY, data);
                }
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") {
                        throw new TypeError('No method named "' + config + '"');
                    }
                    data[config]();
                }
            });
        };
        _createClass(Collapse, null, [ {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        } ]);
        return Collapse;
    }();
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.currentTarget.tagName === "A") {
            event.preventDefault();
        }
        var $trigger = $(this);
        var selector = Util.getSelectorFromElement(this);
        $(selector).each(function() {
            var $target = $(this);
            var data = $target.data(DATA_KEY);
            var config = data ? "toggle" : $trigger.data();
            Collapse._jQueryInterface.call($target, config);
        });
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */    $.fn[NAME] = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Collapse._jQueryInterface;
    };
    return Collapse;
}($);

//# sourceMappingURL=collapse.js.map
function _extends() {
    _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */ var Modal = function($) {
    /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
    var NAME = "modal";
    var VERSION = "4.0.0";
    var DATA_KEY = "bs.modal";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27;
 // KeyboardEvent.which value for Escape (Esc) key
        var Default = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
    };
    var DefaultType = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        RESIZE: "resize" + EVENT_KEY,
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
        KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
        MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        SHOW: "show"
    };
    var Selector = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
        /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */    };
    var Modal = 
    /* */
    function() {
        function Modal(element, config) {
            this._config = this._getConfig(config);
            this._element = element;
            this._dialog = $(element).find(Selector.DIALOG)[0];
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._originalBodyPadding = 0;
            this._scrollbarWidth = 0;
        }
 // Getters
                var _proto = Modal.prototype;
        // Public
                _proto.toggle = function toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        };
        _proto.show = function show(relatedTarget) {
            var _this = this;
            if (this._isTransitioning || this._isShown) {
                return;
            }
            if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                this._isTransitioning = true;
            }
            var showEvent = $.Event(Event.SHOW, {
                relatedTarget: relatedTarget
            });
            $(this._element).trigger(showEvent);
            if (this._isShown || showEvent.isDefaultPrevented()) {
                return;
            }
            this._isShown = true;
            this._checkScrollbar();
            this._setScrollbar();
            this._adjustDialog();
            $(document.body).addClass(ClassName.OPEN);
            this._setEscapeEvent();
            this._setResizeEvent();
            $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function(event) {
                return _this.hide(event);
            });
            $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
                $(_this._element).one(Event.MOUSEUP_DISMISS, function(event) {
                    if ($(event.target).is(_this._element)) {
                        _this._ignoreBackdropClick = true;
                    }
                });
            });
            this._showBackdrop(function() {
                return _this._showElement(relatedTarget);
            });
        };
        _proto.hide = function hide(event) {
            var _this2 = this;
            if (event) {
                event.preventDefault();
            }
            if (this._isTransitioning || !this._isShown) {
                return;
            }
            var hideEvent = $.Event(Event.HIDE);
            $(this._element).trigger(hideEvent);
            if (!this._isShown || hideEvent.isDefaultPrevented()) {
                return;
            }
            this._isShown = false;
            var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
            if (transition) {
                this._isTransitioning = true;
            }
            this._setEscapeEvent();
            this._setResizeEvent();
            $(document).off(Event.FOCUSIN);
            $(this._element).removeClass(ClassName.SHOW);
            $(this._element).off(Event.CLICK_DISMISS);
            $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
            if (transition) {
                $(this._element).one(Util.TRANSITION_END, function(event) {
                    return _this2._hideModal(event);
                }).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
                this._hideModal();
            }
        };
        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            $(window, document, this._element, this._backdrop).off(EVENT_KEY);
            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._scrollbarWidth = null;
        };
        _proto.handleUpdate = function handleUpdate() {
            this._adjustDialog();
        };
 // Private
                _proto._getConfig = function _getConfig(config) {
            config = _extends({}, Default, config);
            Util.typeCheckConfig(NAME, config, DefaultType);
            return config;
        };
        _proto._showElement = function _showElement(relatedTarget) {
            var _this3 = this;
            var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                // Don't move modal's DOM position
                document.body.appendChild(this._element);
            }
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.scrollTop = 0;
            if (transition) {
                Util.reflow(this._element);
            }
            $(this._element).addClass(ClassName.SHOW);
            if (this._config.focus) {
                this._enforceFocus();
            }
            var shownEvent = $.Event(Event.SHOWN, {
                relatedTarget: relatedTarget
            });
            var transitionComplete = function transitionComplete() {
                if (_this3._config.focus) {
                    _this3._element.focus();
                }
                _this3._isTransitioning = false;
                $(_this3._element).trigger(shownEvent);
            };
            if (transition) {
                $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
                transitionComplete();
            }
        };
        _proto._enforceFocus = function _enforceFocus() {
            var _this4 = this;
            $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function(event) {
                if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
                    _this4._element.focus();
                }
            });
        };
        _proto._setEscapeEvent = function _setEscapeEvent() {
            var _this5 = this;
            if (this._isShown && this._config.keyboard) {
                $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                    if (event.which === ESCAPE_KEYCODE) {
                        event.preventDefault();
                        _this5.hide();
                    }
                });
            } else if (!this._isShown) {
                $(this._element).off(Event.KEYDOWN_DISMISS);
            }
        };
        _proto._setResizeEvent = function _setResizeEvent() {
            var _this6 = this;
            if (this._isShown) {
                $(window).on(Event.RESIZE, function(event) {
                    return _this6.handleUpdate(event);
                });
            } else {
                $(window).off(Event.RESIZE);
            }
        };
        _proto._hideModal = function _hideModal() {
            var _this7 = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", true);
            this._isTransitioning = false;
            this._showBackdrop(function() {
                $(document.body).removeClass(ClassName.OPEN);
                _this7._resetAdjustments();
                _this7._resetScrollbar();
                $(_this7._element).trigger(Event.HIDDEN);
            });
        };
        _proto._removeBackdrop = function _removeBackdrop() {
            if (this._backdrop) {
                $(this._backdrop).remove();
                this._backdrop = null;
            }
        };
        _proto._showBackdrop = function _showBackdrop(callback) {
            var _this8 = this;
            var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : "";
            if (this._isShown && this._config.backdrop) {
                var doAnimate = Util.supportsTransitionEnd() && animate;
                this._backdrop = document.createElement("div");
                this._backdrop.className = ClassName.BACKDROP;
                if (animate) {
                    $(this._backdrop).addClass(animate);
                }
                $(this._backdrop).appendTo(document.body);
                $(this._element).on(Event.CLICK_DISMISS, function(event) {
                    if (_this8._ignoreBackdropClick) {
                        _this8._ignoreBackdropClick = false;
                        return;
                    }
                    if (event.target !== event.currentTarget) {
                        return;
                    }
                    if (_this8._config.backdrop === "static") {
                        _this8._element.focus();
                    } else {
                        _this8.hide();
                    }
                });
                if (doAnimate) {
                    Util.reflow(this._backdrop);
                }
                $(this._backdrop).addClass(ClassName.SHOW);
                if (!callback) {
                    return;
                }
                if (!doAnimate) {
                    callback();
                    return;
                }
                $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
            } else if (!this._isShown && this._backdrop) {
                $(this._backdrop).removeClass(ClassName.SHOW);
                var callbackRemove = function callbackRemove() {
                    _this8._removeBackdrop();
                    if (callback) {
                        callback();
                    }
                };
                if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                    $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                } else {
                    callbackRemove();
                }
            } else if (callback) {
                callback();
            }
        };
 // ----------------------------------------------------------------------
        // the following methods are used to handle overflowing modals
        // todo (fat): these should probably be refactored out of modal.js
        // ----------------------------------------------------------------------
                _proto._adjustDialog = function _adjustDialog() {
            var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            if (!this._isBodyOverflowing && isModalOverflowing) {
                this._element.style.paddingLeft = this._scrollbarWidth + "px";
            }
            if (this._isBodyOverflowing && !isModalOverflowing) {
                this._element.style.paddingRight = this._scrollbarWidth + "px";
            }
        };
        _proto._resetAdjustments = function _resetAdjustments() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = "";
        };
        _proto._checkScrollbar = function _checkScrollbar() {
            var rect = document.body.getBoundingClientRect();
            this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth();
        };
        _proto._setScrollbar = function _setScrollbar() {
            var _this9 = this;
            if (this._isBodyOverflowing) {
                // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
                // Adjust fixed content padding
                $(Selector.FIXED_CONTENT).each(function(index, element) {
                    var actualPadding = $(element)[0].style.paddingRight;
                    var calculatedPadding = $(element).css("padding-right");
                    $(element).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
                });
 // Adjust sticky content margin
                                $(Selector.STICKY_CONTENT).each(function(index, element) {
                    var actualMargin = $(element)[0].style.marginRight;
                    var calculatedMargin = $(element).css("margin-right");
                    $(element).data("margin-right", actualMargin).css("margin-right", parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
                });
 // Adjust navbar-toggler margin
                                $(Selector.NAVBAR_TOGGLER).each(function(index, element) {
                    var actualMargin = $(element)[0].style.marginRight;
                    var calculatedMargin = $(element).css("margin-right");
                    $(element).data("margin-right", actualMargin).css("margin-right", parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
                });
 // Adjust body padding
                                var actualPadding = document.body.style.paddingRight;
                var calculatedPadding = $("body").css("padding-right");
                $("body").data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
            }
        };
        _proto._resetScrollbar = function _resetScrollbar() {
            // Restore fixed content padding
            $(Selector.FIXED_CONTENT).each(function(index, element) {
                var padding = $(element).data("padding-right");
                if (typeof padding !== "undefined") {
                    $(element).css("padding-right", padding).removeData("padding-right");
                }
            });
 // Restore sticky content and navbar-toggler margin
                        $(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function(index, element) {
                var margin = $(element).data("margin-right");
                if (typeof margin !== "undefined") {
                    $(element).css("margin-right", margin).removeData("margin-right");
                }
            });
 // Restore body padding
                        var padding = $("body").data("padding-right");
            if (typeof padding !== "undefined") {
                $("body").css("padding-right", padding).removeData("padding-right");
            }
        };
        _proto._getScrollbarWidth = function _getScrollbarWidth() {
            // thx d.walsh
            var scrollDiv = document.createElement("div");
            scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        };
 // Static
                Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
            return this.each(function() {
                var data = $(this).data(DATA_KEY);
                var _config = _extends({}, Modal.Default, $(this).data(), typeof config === "object" && config);
                if (!data) {
                    data = new Modal(this, _config);
                    $(this).data(DATA_KEY, data);
                }
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") {
                        throw new TypeError('No method named "' + config + '"');
                    }
                    data[config](relatedTarget);
                } else if (_config.show) {
                    data.show(relatedTarget);
                }
            });
        };
        _createClass(Modal, null, [ {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        } ]);
        return Modal;
    }();
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        var _this10 = this;
        var target;
        var selector = Util.getSelectorFromElement(this);
        if (selector) {
            target = $(selector)[0];
        }
        var config = $(target).data(DATA_KEY) ? "toggle" : _extends({}, $(target).data(), $(this).data());
        if (this.tagName === "A" || this.tagName === "AREA") {
            event.preventDefault();
        }
        var $target = $(target).one(Event.SHOW, function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
                // Only register focus restorer if modal will actually get shown
                return;
            }
            $target.one(Event.HIDDEN, function() {
                if ($(_this10).is(":visible")) {
                    _this10.focus();
                }
            });
        });
        Modal._jQueryInterface.call($(target), config, this);
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Modal._jQueryInterface;
    };
    return Modal;
}($);

//# sourceMappingURL=modal.js.map
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */ var Tab = function($) {
    /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
    var NAME = "tab";
    var VERSION = "4.0.0";
    var DATA_KEY = "bs.tab";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        DROPDOWN_MENU: "dropdown-menu",
        ACTIVE: "active",
        DISABLED: "disabled",
        FADE: "fade",
        SHOW: "show"
    };
    var Selector = {
        DROPDOWN: ".dropdown",
        NAV_LIST_GROUP: ".nav, .list-group",
        ACTIVE: ".active",
        ACTIVE_UL: "> li > .active",
        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        DROPDOWN_TOGGLE: ".dropdown-toggle",
        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */    };
    var Tab = 
    /* */
    function() {
        function Tab(element) {
            this._element = element;
        }
 // Getters
                var _proto = Tab.prototype;
        // Public
                _proto.show = function show() {
            var _this = this;
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
                return;
            }
            var target;
            var previous;
            var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
            var selector = Util.getSelectorFromElement(this._element);
            if (listElement) {
                var itemSelector = listElement.nodeName === "UL" ? Selector.ACTIVE_UL : Selector.ACTIVE;
                previous = $.makeArray($(listElement).find(itemSelector));
                previous = previous[previous.length - 1];
            }
            var hideEvent = $.Event(Event.HIDE, {
                relatedTarget: this._element
            });
            var showEvent = $.Event(Event.SHOW, {
                relatedTarget: previous
            });
            if (previous) {
                $(previous).trigger(hideEvent);
            }
            $(this._element).trigger(showEvent);
            if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                return;
            }
            if (selector) {
                target = $(selector)[0];
            }
            this._activate(this._element, listElement);
            var complete = function complete() {
                var hiddenEvent = $.Event(Event.HIDDEN, {
                    relatedTarget: _this._element
                });
                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: previous
                });
                $(previous).trigger(hiddenEvent);
                $(_this._element).trigger(shownEvent);
            };
            if (target) {
                this._activate(target, target.parentNode, complete);
            } else {
                complete();
            }
        };
        _proto.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            this._element = null;
        };
 // Private
                _proto._activate = function _activate(element, container, callback) {
            var _this2 = this;
            var activeElements;
            if (container.nodeName === "UL") {
                activeElements = $(container).find(Selector.ACTIVE_UL);
            } else {
                activeElements = $(container).children(Selector.ACTIVE);
            }
            var active = activeElements[0];
            var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);
            var complete = function complete() {
                return _this2._transitionComplete(element, active, callback);
            };
            if (active && isTransitioning) {
                $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
                complete();
            }
        };
        _proto._transitionComplete = function _transitionComplete(element, active, callback) {
            if (active) {
                $(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
                var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
                if (dropdownChild) {
                    $(dropdownChild).removeClass(ClassName.ACTIVE);
                }
                if (active.getAttribute("role") === "tab") {
                    active.setAttribute("aria-selected", false);
                }
            }
            $(element).addClass(ClassName.ACTIVE);
            if (element.getAttribute("role") === "tab") {
                element.setAttribute("aria-selected", true);
            }
            Util.reflow(element);
            $(element).addClass(ClassName.SHOW);
            if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
                var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
                if (dropdownElement) {
                    $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                }
                element.setAttribute("aria-expanded", true);
            }
            if (callback) {
                callback();
            }
        };
 // Static
                Tab._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data(DATA_KEY);
                if (!data) {
                    data = new Tab(this);
                    $this.data(DATA_KEY, data);
                }
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") {
                        throw new TypeError('No method named "' + config + '"');
                    }
                    data[config]();
                }
            });
        };
        _createClass(Tab, null, [ {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        } ]);
        return Tab;
    }();
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        event.preventDefault();
        Tab._jQueryInterface.call($(this), "show");
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */    $.fn[NAME] = Tab._jQueryInterface;
    $.fn[NAME].Constructor = Tab;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Tab._jQueryInterface;
    };
    return Tab;
}($);

//# sourceMappingURL=tab.js.map
/*!
 * current-device v0.9.1 - https://github.com/matthewhudson/current-device
 * MIT Licensed
 */
!function(n, o) {
    "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports.device = o() : n.device = o();
}(window, function() {
    return function(n) {
        var o = {};
        function e(t) {
            if (o[t]) return o[t].exports;
            var r = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }
        return e.m = n, e.c = o, e.d = function(n, o, t) {
            e.o(n, o) || Object.defineProperty(n, o, {
                enumerable: !0,
                get: t
            });
        }, e.r = function(n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(n, "__esModule", {
                value: !0
            });
        }, e.t = function(n, o) {
            if (1 & o && (n = e(n)), 8 & o) return n;
            if (4 & o && "object" == typeof n && n && n.__esModule) return n;
            var t = Object.create(null);
            if (e.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: n
            }), 2 & o && "string" != typeof n) for (var r in n) e.d(t, r, function(o) {
                return n[o];
            }.bind(null, r));
            return t;
        }, e.n = function(n) {
            var o = n && n.__esModule ? function() {
                return n.default;
            } : function() {
                return n;
            };
            return e.d(o, "a", o), o;
        }, e.o = function(n, o) {
            return Object.prototype.hasOwnProperty.call(n, o);
        }, e.p = "", e(e.s = 0);
    }([ function(n, o, e) {
        n.exports = e(1);
    }, function(n, o, e) {
        "use strict";
        e.r(o);
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n;
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, r = window.device, i = {}, a = [];
        window.device = i;
        var c = window.document.documentElement, d = window.navigator.userAgent.toLowerCase(), u = [ "googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html" ];
        function l(n, o) {
            return -1 !== n.indexOf(o);
        }
        function s(n) {
            return l(d, n);
        }
        function f(n) {
            return c.className.match(new RegExp(n, "i"));
        }
        function b(n) {
            var o = null;
            f(n) || (o = c.className.replace(/^\s+|\s+$/g, ""), c.className = o + " " + n);
        }
        function p(n) {
            f(n) && (c.className = c.className.replace(" " + n, ""));
        }
        function w() {
            i.landscape() ? (p("portrait"), b("landscape"), y("landscape")) : (p("landscape"), 
            b("portrait"), y("portrait")), v();
        }
        function y(n) {
            for (var o in a) a[o](n);
        }
        i.macos = function() {
            return s("mac");
        }, i.ios = function() {
            return i.iphone() || i.ipod() || i.ipad();
        }, i.iphone = function() {
            return !i.windows() && s("iphone");
        }, i.ipod = function() {
            return s("ipod");
        }, i.ipad = function() {
            var n = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
            return s("ipad") || n;
        }, i.android = function() {
            return !i.windows() && s("android");
        }, i.androidPhone = function() {
            return i.android() && s("mobile");
        }, i.androidTablet = function() {
            return i.android() && !s("mobile");
        }, i.blackberry = function() {
            return s("blackberry") || s("bb10") || s("rim");
        }, i.blackberryPhone = function() {
            return i.blackberry() && !s("tablet");
        }, i.blackberryTablet = function() {
            return i.blackberry() && s("tablet");
        }, i.windows = function() {
            return s("windows");
        }, i.windowsPhone = function() {
            return i.windows() && s("phone");
        }, i.windowsTablet = function() {
            return i.windows() && s("touch") && !i.windowsPhone();
        }, i.fxos = function() {
            return (s("(mobile") || s("(tablet")) && s(" rv:");
        }, i.fxosPhone = function() {
            return i.fxos() && s("mobile");
        }, i.fxosTablet = function() {
            return i.fxos() && s("tablet");
        }, i.meego = function() {
            return s("meego");
        }, i.cordova = function() {
            return window.cordova && "file:" === location.protocol;
        }, i.nodeWebkit = function() {
            return "object" === t(window.process);
        }, i.mobile = function() {
            return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego();
        }, i.tablet = function() {
            return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet();
        }, i.desktop = function() {
            return !i.tablet() && !i.mobile();
        }, i.television = function() {
            for (var n = 0; n < u.length; ) {
                if (s(u[n])) return !0;
                n++;
            }
            return !1;
        }, i.portrait = function() {
            return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? l(screen.orientation.type, "portrait") : i.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? 90 !== Math.abs(window.orientation) : window.innerHeight / window.innerWidth > 1;
        }, i.landscape = function() {
            return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? l(screen.orientation.type, "landscape") : i.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? 90 === Math.abs(window.orientation) : window.innerHeight / window.innerWidth < 1;
        }, i.noConflict = function() {
            return window.device = r, this;
        }, i.ios() ? i.ipad() ? b("ios ipad tablet") : i.iphone() ? b("ios iphone mobile") : i.ipod() && b("ios ipod mobile") : i.macos() ? b("macos desktop") : i.android() ? i.androidTablet() ? b("android tablet") : b("android mobile") : i.blackberry() ? i.blackberryTablet() ? b("blackberry tablet") : b("blackberry mobile") : i.windows() ? i.windowsTablet() ? b("windows tablet") : i.windowsPhone() ? b("windows mobile") : b("windows desktop") : i.fxos() ? i.fxosTablet() ? b("fxos tablet") : b("fxos mobile") : i.meego() ? b("meego mobile") : i.nodeWebkit() ? b("node-webkit") : i.television() ? b("television") : i.desktop() && b("desktop"), 
        i.cordova() && b("cordova"), i.onChangeOrientation = function(n) {
            "function" == typeof n && a.push(n);
        };
        var m = "resize";
        function h(n) {
            for (var o = 0; o < n.length; o++) if (i[n[o]]()) return n[o];
            return "unknown";
        }
        function v() {
            i.orientation = h([ "portrait", "landscape" ]);
        }
        Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (m = "orientationchange"), 
        window.addEventListener ? window.addEventListener(m, w, !1) : window.attachEvent ? window.attachEvent(m, w) : window[m] = w, 
        w(), i.type = h([ "mobile", "tablet", "desktop" ]), i.os = h([ "ios", "iphone", "ipad", "ipod", "android", "blackberry", "macos", "windows", "fxos", "meego", "television" ]), 
        v(), o.default = i;
    } ]).default;
});

//# sourceMappingURL=current-device.min.js.map
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-prefixed-setclasses !*/
!function(e, n, t) {
    function r(e, n) {
        return typeof e === n;
    }
    function o() {
        var e, n, t, o, i, s, a;
        for (var f in C) if (C.hasOwnProperty(f)) {
            if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
            for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], 
            a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), 
            Modernizr[a[0]][a[1]] = o), g.push((o ? "" : "no-") + a.join("-"));
        }
    }
    function i(e) {
        var n = w.className, t = Modernizr._config.classPrefix || "";
        if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2");
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? w.className.baseVal = n : w.className = n);
    }
    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase();
        }).replace(/^-/, "");
    }
    function a(e, n) {
        return !!~("" + e).indexOf(n);
    }
    function f() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }
    function l(e, n) {
        return function() {
            return e.apply(n, arguments);
        };
    }
    function u(e, n, t) {
        var o;
        for (var i in e) if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? l(o, t || n) : o);
        return !1;
    }
    function p(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }
    function d() {
        var e = n.body;
        return e || (e = f(x ? "svg" : "body"), e.fake = !0), e;
    }
    function c(e, t, r, o) {
        var i, s, a, l, u = "modernizr", p = f("div"), c = d();
        if (parseInt(r, 10)) for (;r--; ) a = f("div"), a.id = o ? o[r] : u + (r + 1), p.appendChild(a);
        return i = f("style"), i.type = "text/css", i.id = "s" + u, (c.fake ? c : p).appendChild(i), 
        c.appendChild(p), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), 
        p.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", l = w.style.overflow, 
        w.style.overflow = "hidden", w.appendChild(c)), s = t(p, e), c.fake ? (c.parentNode.removeChild(c), 
        w.style.overflow = l, w.offsetHeight) : p.parentNode.removeChild(p), !!s;
    }
    function m(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (;o--; ) if (e.CSS.supports(p(n[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--; ) i.push("(" + p(n[o]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position;
            });
        }
        return t;
    }
    function v(e, n, o, i) {
        function l() {
            p && (delete z.style, delete z.modElem);
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var u = m(e, o);
            if (!r(u, "undefined")) return u;
        }
        for (var p, d, c, v, h, y = [ "modernizr", "tspan", "samp" ]; !z.style && y.length; ) p = !0, 
        z.modElem = f(y.shift()), z.style = z.modElem.style;
        for (c = e.length, d = 0; c > d; d++) if (v = e[d], h = z.style[v], a(v, "-") && (v = s(v)), 
        z.style[v] !== t) {
            if (i || r(o, "undefined")) return l(), "pfx" == n ? v : !0;
            try {
                z.style[v] = o;
            } catch (g) {}
            if (z.style[v] != h) return l(), "pfx" == n ? v : !0;
        }
        return l(), !1;
    }
    function h(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + b.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(a, n, o, i) : (a = (e + " " + N.join(s + " ") + s).split(" "), 
        u(a, n, t));
    }
    function y(e, n, r) {
        return h(e, t, t, n, r);
    }
    var g = [], C = [], _ = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var t = this;
            setTimeout(function() {
                n(t[e]);
            }, 0);
        },
        addTest: function(e, n, t) {
            C.push({
                name: e,
                fn: n,
                options: t
            });
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            });
        }
    }, Modernizr = function() {};
    Modernizr.prototype = _, Modernizr = new Modernizr();
    var w = n.documentElement, x = "svg" === w.nodeName.toLowerCase(), S = "Moz O ms Webkit", b = _._config.usePrefixes ? S.split(" ") : [];
    _._cssomPrefixes = b;
    var E = function(n) {
        var r, o = prefixes.length, i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = prefixes[s], f = a.toUpperCase() + "_" + r;
            if (f in i) return "@-" + a.toLowerCase() + "-" + n;
        }
        return !1;
    };
    _.atRule = E;
    var N = _._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    _._domPrefixes = N;
    var P = {
        elem: f("modernizr")
    };
    Modernizr._q.push(function() {
        delete P.elem;
    });
    var z = {
        style: P.elem.style
    };
    Modernizr._q.unshift(function() {
        delete z.style;
    }), _.testAllProps = h;
    _.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? E(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? h(e, n, t) : h(e, "pfx"));
    };
    _.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), 
    o(), i(g), delete _.addTest, delete _.addAsyncTest;
    for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
    e.Modernizr = Modernizr;
}(window, document);

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
(function(window) {
    "use strict";
    // some helper functions
    /**
   * from https://davidwalsh.name/javascript-debounce-function
   */    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }
    // some vars
        var bodyEl = document.body, 
    // window sizes
    winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    }, 
    // support for animations
    support = {
        animations: Modernizr.cssanimations
    }, 
    // animationend event function
    animEndEventNames = {
        WebkitAnimation: "webkitAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
    }, animEndEventName = animEndEventNames[Modernizr.prefixed("animation")], onEndAnimation = function(el, callback) {
        var onEndCallbackFn = function(ev) {
            if (support.animations) {
                if (ev.target != this) return;
                this.removeEventListener(animEndEventName, onEndCallbackFn);
            }
            if (callback && typeof callback === "function") {
                callback.call();
            }
        };
        if (support.animations) {
            el.addEventListener(animEndEventName, onEndCallbackFn);
        } else {
            onEndCallbackFn();
        }
    };
    /**
   * Revealer obj
   */    function Revealer(options) {
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }
    /**
   * Revealer default options
   */    Revealer.prototype.options = {
        // total number of revealing layers (min is 1)
        nmbLayers: 1,
        // bg color for the revealing layers
        bgcolor: "#fff",
        // effect classname
        effect: "anim--effect-1",
        // callback
        onStart: function(direction) {
            return false;
        },
        // callback
        onEnd: function(direction) {
            return false;
        }
    };
    /**
   * build layer structure
   * add effect class
   * init/bind events
   */    Revealer.prototype._init = function() {
        // add revealer layers
        this._addLayers();
        // now we have access to the layers
                this.layers = [].slice.call(this.revealerWrapper.children);
        // init/bind events
                this._initEvents();
    };
    /**
   * init/bind events
   */    Revealer.prototype._initEvents = function() {
        // window resize: recalculate window sizes
        this.debounceResize = debounce(function(ev) {
            winsize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }, 10);
        window.addEventListener("resize", this.debounceResize);
    };
    /**
   * build layer structure and append it to the body
   * add effect class
   */    Revealer.prototype._addLayers = function() {
        this.revealerWrapper = document.createElement("div");
        this.revealerWrapper.className = "revealer";
        classie.add(bodyEl, this.options.effect);
        var strHTML = "";
        for (var i = 0; i < this.options.nmbLayers; ++i) {
            var bgcolor = typeof this.options.bgcolor === "string" ? this.options.bgcolor : this.options.bgcolor instanceof Array && this.options.bgcolor[i] ? this.options.bgcolor[i] : "#fff";
            strHTML += '<div style="background:' + bgcolor + '" class="revealer__layer"></div>';
        }
        this.revealerWrapper.innerHTML = strHTML;
        bodyEl.appendChild(this.revealerWrapper);
    };
    /**
   * reveal the layers
   * direction: right || left || top || bottom || cornertopleft || cornertopright || cornerbottomleft || cornerbottomright
   */    Revealer.prototype.reveal = function(direction, callbacktime, callback) {
        // if animating return
        if (this.isAnimating) {
            return false;
        }
        this.isAnimating = true;
        // current direction
                this.direction = direction;
        // onStart callback
                this.options.onStart(this.direction);
        // set the initial position for the layers´ parent
                var widthVal, heightVal, transform;
        if (direction === "cornertopleft" || direction === "cornertopright" || direction === "cornerbottomleft" || direction === "cornerbottomright") {
            var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
            widthVal = heightVal = pageDiagonal + "px";
            if (direction === "cornertopleft") {
                transform = "translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0," + pageDiagonal + "px,0)";
            } else if (direction === "cornertopright") {
                transform = "translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0," + pageDiagonal + "px,0)";
            } else if (direction === "cornerbottomleft") {
                transform = "translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0," + pageDiagonal + "px,0)";
            } else if (direction === "cornerbottomright") {
                transform = "translate3d(-50%,-50%,0) rotate3d(0,0,1,-63deg) translate3d(0," + pageDiagonal + "px,0)";
            }
        } else if (direction === "left" || direction === "right") {
            widthVal = "100vh";
            heightVal = "100vw";
            transform = "translate3d(-50%,-50%,0) rotate3d(0,0,1," + (direction === "left" ? 90 : -90) + "deg) translate3d(0,100%,0)";
        } else if (direction === "top" || direction === "bottom") {
            widthVal = "100vw";
            heightVal = "100vh";
            transform = direction === "top" ? "rotate3d(0,0,1,180deg)" : "none";
        }
        this.revealerWrapper.style.width = widthVal;
        this.revealerWrapper.style.height = heightVal;
        this.revealerWrapper.style.WebkitTransform = this.revealerWrapper.style.transform = transform;
        this.revealerWrapper.style.opacity = 1;
        // add direction and animate classes to parent
                classie.add(this.revealerWrapper, "revealer--" + direction || "revealer--right");
        classie.add(this.revealerWrapper, "revealer--animate");
        // track the end of the animation for all layers
                var self = this, layerscomplete = 0;
        this.layers.forEach(function(layer) {
            onEndAnimation(layer, function() {
                ++layerscomplete;
                if (layerscomplete === self.options.nmbLayers) {
                    classie.remove(self.revealerWrapper, "revealer--" + direction || "revealer--right");
                    classie.remove(self.revealerWrapper, "revealer--animate");
                    self.revealerWrapper.style.opacity = 0;
                    self.isAnimating = false;
                    // callback
                                        self.options.onEnd(self.direction);
                }
            });
        });
        // reveal fn callback
                if (typeof callback === "function") {
            if (this.callbacktimeout) {
                clearTimeout(this.callbacktimeout);
            }
            this.callbacktimeout = setTimeout(callback, callbacktime);
        }
    };
    /**
   * destroy method
   */    Revealer.prototype.destroy = function() {
        classie.remove(bodyEl, this.options.effect);
        window.removeEventListener("resize", this.debounceResize);
        bodyEl.removeChild(this.revealerWrapper);
    };
    window.Revealer = Revealer;
})(window);

/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */
(function(window) {
    "use strict";
    // class helper functions from bonzo https://github.com/ded/bonzo
        function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;
    if ("classList" in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + " " + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), " ");
        };
    }
    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    // transport
        if (typeof define === "function" && define.amd) {
        // AMD
        define(classie);
    } else if (typeof exports === "object") {
        // CommonJS
        module.exports = classie;
    } else {
        // browser global
        window.classie = classie;
    }
})(window);