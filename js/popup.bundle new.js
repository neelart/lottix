! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 18)
}([function(e, t, r) {
    "use strict";
    e.exports = r(7)
}, function(e, t, r) {
    e.exports = r(5)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), "undefined" == typeof window ? t.browser = {} : t.browser = r(6)
}, function(e, t, r) {
    "use strict";
    var n = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;

    function s(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                    return t[e]
                })).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                n[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var r, o, l = s(e), h = 1; h < arguments.length; h++) {
            for (var u in r = Object(arguments[h])) i.call(r, u) && (l[u] = r[u]);
            if (n) {
                o = n(r);
                for (var c = 0; c < o.length; c++) a.call(r, o[c]) && (l[o[c]] = r[o[c]])
            }
        }
        return l
    }
}, function(e, t, r) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = r(8)
}, function(e, t, r) {
    var n = function(e) {
        "use strict";
        var t = Object.prototype,
            r = t.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            i = n.iterator || "@@iterator",
            a = n.asyncIterator || "@@asyncIterator",
            s = n.toStringTag || "@@toStringTag";

        function o(e, t, r, n) {
            var i = t && t.prototype instanceof u ? t : u,
                a = Object.create(i.prototype),
                s = new S(n || []);
            return a._invoke = function(e, t, r) {
                var n = "suspendedStart";
                return function(i, a) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === i) throw a;
                        return w()
                    }
                    for (r.method = i, r.arg = a;;) {
                        var s = r.delegate;
                        if (s) {
                            var o = b(s, r);
                            if (o) {
                                if (o === h) continue;
                                return o
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = l(e, t, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield", u.arg === h) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                    }
                }
            }(e, r, s), a
        }

        function l(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = o;
        var h = {};

        function u() {}

        function c() {}

        function p() {}
        var f = {};
        f[i] = function() {
            return this
        };
        var d = Object.getPrototypeOf,
            m = d && d(d(k([])));
        m && m !== t && r.call(m, i) && (f = m);
        var g = p.prototype = u.prototype = Object.create(f);

        function y(e) {
            ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function v(e, t) {
            var n;
            this._invoke = function(i, a) {
                function s() {
                    return new t((function(n, s) {
                        ! function n(i, a, s, o) {
                            var h = l(e[i], e, a);
                            if ("throw" !== h.type) {
                                var u = h.arg,
                                    c = u.value;
                                return c && "object" == typeof c && r.call(c, "__await") ? t.resolve(c.__await).then((function(e) {
                                    n("next", e, s, o)
                                }), (function(e) {
                                    n("throw", e, s, o)
                                })) : t.resolve(c).then((function(e) {
                                    u.value = e, s(u)
                                }), (function(e) {
                                    return n("throw", e, s, o)
                                }))
                            }
                            o(h.arg)
                        }(i, a, n, s)
                    }))
                }
                return n = n ? n.then(s, s) : s()
            }
        }

        function b(e, t) {
            var r = e.iterator[t.method];
            if (void 0 === r) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return h
            }
            var n = l(r, e.iterator, t.arg);
            if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, h;
            var i = n.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
        }

        function x(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function E(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function S(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(x, this), this.reset(!0)
        }

        function k(e) {
            if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        a = function t() {
                            for (; ++n < e.length;)
                                if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return a.next = a
                }
            }
            return {
                next: w
            }
        }

        function w() {
            return {
                value: void 0,
                done: !0
            }
        }
        return c.prototype = g.constructor = p, p.constructor = c, p[s] = c.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === c || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(g), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, y(v.prototype), v.prototype[a] = function() {
            return this
        }, e.AsyncIterator = v, e.async = function(t, r, n, i, a) {
            void 0 === a && (a = Promise);
            var s = new v(o(t, r, n, i), a);
            return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                return e.done ? e.value : s.next()
            }))
        }, y(g), g[s] = "Generator", g[i] = function() {
            return this
        }, g.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return t.reverse(),
                function r() {
                    for (; t.length;) {
                        var n = t.pop();
                        if (n in e) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, e.values = k, S.prototype = {
            constructor: S,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                    for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;

                function n(r, n) {
                    return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        s = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                        var o = r.call(a, "catchLoc"),
                            l = r.call(a, "finallyLoc");
                        if (o && l) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        } else if (o) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                        } else {
                            if (!l) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var a = i;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var s = a ? a.completion : {};
                return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(s)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), E(r), h
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var i = n.arg;
                            E(r)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, r) {
                return this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), h
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = n
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(n)
    }
}, function(e, t, r) {
    var n, i, a;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e], void 0 === (a = "function" == typeof(n = function(e) {
        "use strict";
        if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
            const t = "The message port closed before a response was received.",
                r = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                n = e => {
                    const n = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(n).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class i extends WeakMap {
                        constructor(e, t) {
                            super(t), this.createItem = e
                        }
                        get(e) {
                            return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                        }
                    }
                    const a = (t, r) => (...n) => {
                            e.runtime.lastError ? t.reject(e.runtime.lastError) : r.singleCallbackArg || n.length <= 1 && !1 !== r.singleCallbackArg ? t.resolve(n[0]) : t.resolve(n)
                        },
                        s = e => 1 == e ? "argument" : "arguments",
                        o = (e, t, r) => new Proxy(t, {
                            apply: (t, n, i) => r.call(n, e, ...i)
                        });
                    let l = Function.call.bind(Object.prototype.hasOwnProperty);
                    const h = (e, t = {}, r = {}) => {
                            let n = Object.create(null),
                                i = {
                                    has: (t, r) => r in e || r in n,
                                    get(i, u, c) {
                                        if (u in n) return n[u];
                                        if (!(u in e)) return;
                                        let p = e[u];
                                        if ("function" == typeof p)
                                            if ("function" == typeof t[u]) p = o(e, e[u], t[u]);
                                            else if (l(r, u)) {
                                            let t = ((e, t) => function(r, ...n) {
                                                if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${n.length}`);
                                                if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${n.length}`);
                                                return new Promise((i, s) => {
                                                    if (t.fallbackToNoCallback) try {
                                                        r[e](...n, a({
                                                            resolve: i,
                                                            reject: s
                                                        }, t))
                                                    } catch (a) {
                                                        console.warn(`${e} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", a), r[e](...n), t.fallbackToNoCallback = !1, t.noCallback = !0, i()
                                                    } else t.noCallback ? (r[e](...n), i()) : r[e](...n, a({
                                                        resolve: i,
                                                        reject: s
                                                    }, t))
                                                })
                                            })(u, r[u]);
                                            p = o(e, e[u], t)
                                        } else p = p.bind(e);
                                        else if ("object" == typeof p && null !== p && (l(t, u) || l(r, u))) p = h(p, t[u], r[u]);
                                        else {
                                            if (!l(r, "*")) return Object.defineProperty(n, u, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => e[u],
                                                set(t) {
                                                    e[u] = t
                                                }
                                            }), p;
                                            p = h(p, t[u], r["*"])
                                        }
                                        return n[u] = p, p
                                    },
                                    set: (t, r, i, a) => (r in n ? n[r] = i : e[r] = i, !0),
                                    defineProperty: (e, t, r) => Reflect.defineProperty(n, t, r),
                                    deleteProperty: (e, t) => Reflect.deleteProperty(n, t)
                                },
                                u = Object.create(e);
                            return new Proxy(u, i)
                        },
                        u = e => ({
                            addListener(t, r, ...n) {
                                t.addListener(e.get(r), ...n)
                            },
                            hasListener: (t, r) => t.hasListener(e.get(r)),
                            removeListener(t, r) {
                                t.removeListener(e.get(r))
                            }
                        });
                    let c = !1;
                    const p = new i(e => "function" != typeof e ? e : function(t, n, i) {
                            let a, s, o = !1,
                                l = new Promise(e => {
                                    a = function(t) {
                                        c || (console.warn(r, (new Error).stack), c = !0), o = !0, e(t)
                                    }
                                });
                            try {
                                s = e(t, n, a)
                            } catch (e) {
                                s = Promise.reject(e)
                            }
                            const h = !0 !== s && (u = s) && "object" == typeof u && "function" == typeof u.then;
                            var u;
                            if (!0 !== s && !h && !o) return !1;
                            const p = e => {
                                e.then(e => {
                                    i(e)
                                }, e => {
                                    let t;
                                    t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", i({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: t
                                    })
                                }).catch(e => {
                                    console.error("Failed to send onMessage rejected reply", e)
                                })
                            };
                            return p(h ? s : l), !0
                        }),
                        f = ({
                            reject: r,
                            resolve: n
                        }, i) => {
                            e.runtime.lastError ? e.runtime.lastError.message === t ? n() : r(e.runtime.lastError) : i && i.__mozWebExtensionPolyfillReject__ ? r(new Error(i.message)) : n(i)
                        },
                        d = (e, t, r, ...n) => {
                            if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${n.length}`);
                            if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${n.length}`);
                            return new Promise((e, t) => {
                                const i = f.bind(null, {
                                    resolve: e,
                                    reject: t
                                });
                                n.push(i), r.sendMessage(...n)
                            })
                        },
                        m = {
                            runtime: {
                                onMessage: u(p),
                                onMessageExternal: u(p),
                                sendMessage: d.bind(null, "sendMessage", {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs: {
                                sendMessage: d.bind(null, "sendMessage", {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        },
                        g = {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                    return n.privacy = {
                        network: {
                            "*": g
                        },
                        services: {
                            "*": g
                        },
                        websites: {
                            "*": g
                        }
                    }, h(e, m, n)
                };
            if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
            e.exports = n(chrome)
        } else e.exports = browser
    }) ? n.apply(t, i) : n) || (e.exports = a)
}, function(e, t, r) {
    "use strict";
    var n = r(3),
        i = "function" == typeof Symbol && Symbol.for,
        a = i ? Symbol.for("react.element") : 60103,
        s = i ? Symbol.for("react.portal") : 60106,
        o = i ? Symbol.for("react.fragment") : 60107,
        l = i ? Symbol.for("react.strict_mode") : 60108,
        h = i ? Symbol.for("react.profiler") : 60114,
        u = i ? Symbol.for("react.provider") : 60109,
        c = i ? Symbol.for("react.context") : 60110,
        p = i ? Symbol.for("react.forward_ref") : 60112,
        f = i ? Symbol.for("react.suspense") : 60113,
        d = i ? Symbol.for("react.memo") : 60115,
        m = i ? Symbol.for("react.lazy") : 60116,
        g = "function" == typeof Symbol && Symbol.iterator;

    function y(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var v = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        b = {};

    function x(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || v
    }

    function E() {}

    function S(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || v
    }
    x.prototype.isReactComponent = {}, x.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, x.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, E.prototype = x.prototype;
    var k = S.prototype = new E;
    k.constructor = S, n(k, x.prototype), k.isPureReactComponent = !0;
    var w = {
            current: null
        },
        P = Object.prototype.hasOwnProperty,
        T = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function A(e, t, r) {
        var n, i = {},
            s = null,
            o = null;
        if (null != t)
            for (n in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) P.call(t, n) && !T.hasOwnProperty(n) && (i[n] = t[n]);
        var l = arguments.length - 2;
        if (1 === l) i.children = r;
        else if (1 < l) {
            for (var h = Array(l), u = 0; u < l; u++) h[u] = arguments[u + 2];
            i.children = h
        }
        if (e && e.defaultProps)
            for (n in l = e.defaultProps) void 0 === i[n] && (i[n] = l[n]);
        return {
            $$typeof: a,
            type: e,
            key: s,
            ref: o,
            props: i,
            _owner: w.current
        }
    }

    function _(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a
    }
    var C = /\/+/g,
        M = [];

    function D(e, t, r, n) {
        if (M.length) {
            var i = M.pop();
            return i.result = e, i.keyPrefix = t, i.func = r, i.context = n, i.count = 0, i
        }
        return {
            result: e,
            keyPrefix: t,
            func: r,
            context: n,
            count: 0
        }
    }

    function F(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > M.length && M.push(e)
    }

    function I(e, t, r) {
        return null == e ? 0 : function e(t, r, n, i) {
            var o = typeof t;
            "undefined" !== o && "boolean" !== o || (t = null);
            var l = !1;
            if (null === t) l = !0;
            else switch (o) {
                case "string":
                case "number":
                    l = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case a:
                        case s:
                            l = !0
                    }
            }
            if (l) return n(i, t, "" === r ? "." + R(t, 0) : r), 1;
            if (l = 0, r = "" === r ? "." : r + ":", Array.isArray(t))
                for (var h = 0; h < t.length; h++) {
                    var u = r + R(o = t[h], h);
                    l += e(o, u, n, i)
                } else if (null === t || "object" != typeof t ? u = null : u = "function" == typeof(u = g && t[g] || t["@@iterator"]) ? u : null, "function" == typeof u)
                    for (t = u.call(t), h = 0; !(o = t.next()).done;) l += e(o = o.value, u = r + R(o, h++), n, i);
                else if ("object" === o) throw n = "" + t, Error(y(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
            return l
        }(e, "", t, r)
    }

    function R(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function N(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function L(e, t, r) {
        var n = e.result,
            i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? V(e, n, r, (function(e) {
            return e
        })) : null != e && (_(e) && (e = function(e, t) {
            return {
                $$typeof: a,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(C, "$&/") + "/") + r)), n.push(e))
    }

    function V(e, t, r, n, i) {
        var a = "";
        null != r && (a = ("" + r).replace(C, "$&/") + "/"), I(e, L, t = D(t, a, n, i)), F(t)
    }
    var B = {
        current: null
    };

    function z() {
        var e = B.current;
        if (null === e) throw Error(y(321));
        return e
    }
    var O = {
        ReactCurrentDispatcher: B,
        ReactCurrentBatchConfig: {
            suspense: null
        },
        ReactCurrentOwner: w,
        IsSomeRendererActing: {
            current: !1
        },
        assign: n
    };
    t.Children = {
        map: function(e, t, r) {
            if (null == e) return e;
            var n = [];
            return V(e, n, null, t, r), n
        },
        forEach: function(e, t, r) {
            if (null == e) return e;
            I(e, N, t = D(null, null, t, r)), F(t)
        },
        count: function(e) {
            return I(e, (function() {
                return null
            }), null)
        },
        toArray: function(e) {
            var t = [];
            return V(e, t, null, (function(e) {
                return e
            })), t
        },
        only: function(e) {
            if (!_(e)) throw Error(y(143));
            return e
        }
    }, t.Component = x, t.Fragment = o, t.Profiler = h, t.PureComponent = S, t.StrictMode = l, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, r) {
        if (null == e) throw Error(y(267, e));
        var i = n({}, e.props),
            s = e.key,
            o = e.ref,
            l = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, l = w.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var h = e.type.defaultProps;
            for (u in t) P.call(t, u) && !T.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== h ? h[u] : t[u])
        }
        var u = arguments.length - 2;
        if (1 === u) i.children = r;
        else if (1 < u) {
            h = Array(u);
            for (var c = 0; c < u; c++) h[c] = arguments[c + 2];
            i.children = h
        }
        return {
            $$typeof: a,
            type: e.type,
            key: s,
            ref: o,
            props: i,
            _owner: l
        }
    }, t.createContext = function(e, t) {
        return void 0 === t && (t = null), (e = {
            $$typeof: c,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = {
            $$typeof: u,
            _context: e
        }, e.Consumer = e
    }, t.createElement = A, t.createFactory = function(e) {
        var t = A.bind(null, e);
        return t.type = e, t
    }, t.createRef = function() {
        return {
            current: null
        }
    }, t.forwardRef = function(e) {
        return {
            $$typeof: p,
            render: e
        }
    }, t.isValidElement = _, t.lazy = function(e) {
        return {
            $$typeof: m,
            _ctor: e,
            _status: -1,
            _result: null
        }
    }, t.memo = function(e, t) {
        return {
            $$typeof: d,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, t.useCallback = function(e, t) {
        return z().useCallback(e, t)
    }, t.useContext = function(e, t) {
        return z().useContext(e, t)
    }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
        return z().useEffect(e, t)
    }, t.useImperativeHandle = function(e, t, r) {
        return z().useImperativeHandle(e, t, r)
    }, t.useLayoutEffect = function(e, t) {
        return z().useLayoutEffect(e, t)
    }, t.useMemo = function(e, t) {
        return z().useMemo(e, t)
    }, t.useReducer = function(e, t, r) {
        return z().useReducer(e, t, r)
    }, t.useRef = function(e) {
        return z().useRef(e)
    }, t.useState = function(e) {
        return z().useState(e)
    }, t.version = "16.13.1"
}, function(e, t, r) {
    "use strict";
    var n = r(0),
        i = r(3),
        a = r(9);

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!n) throw Error(s(227));

    function o(e, t, r, n, i, a, s, o, l) {
        var h = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(r, h)
        } catch (e) {
            this.onError(e)
        }
    }
    var l = !1,
        h = null,
        u = !1,
        c = null,
        p = {
            onError: function(e) {
                l = !0, h = e
            }
        };

    function f(e, t, r, n, i, a, s, u, c) {
        l = !1, h = null, o.apply(p, arguments)
    }
    var d = null,
        m = null,
        g = null;

    function y(e, t, r) {
        var n = e.type || "unknown-event";
        e.currentTarget = g(r),
            function(e, t, r, n, i, a, o, p, d) {
                if (f.apply(this, arguments), l) {
                    if (!l) throw Error(s(198));
                    var m = h;
                    l = !1, h = null, u || (u = !0, c = m)
                }
            }(n, t, void 0, e), e.currentTarget = null
    }
    var v = null,
        b = {};

    function x() {
        if (v)
            for (var e in b) {
                var t = b[e],
                    r = v.indexOf(e);
                if (!(-1 < r)) throw Error(s(96, e));
                if (!S[r]) {
                    if (!t.extractEvents) throw Error(s(97, e));
                    for (var n in S[r] = t, r = t.eventTypes) {
                        var i = void 0,
                            a = r[n],
                            o = t,
                            l = n;
                        if (k.hasOwnProperty(l)) throw Error(s(99, l));
                        k[l] = a;
                        var h = a.phasedRegistrationNames;
                        if (h) {
                            for (i in h) h.hasOwnProperty(i) && E(h[i], o, l);
                            i = !0
                        } else a.registrationName ? (E(a.registrationName, o, l), i = !0) : i = !1;
                        if (!i) throw Error(s(98, n, e))
                    }
                }
            }
    }

    function E(e, t, r) {
        if (w[e]) throw Error(s(100, e));
        w[e] = t, P[e] = t.eventTypes[r].dependencies
    }
    var S = [],
        k = {},
        w = {},
        P = {};

    function T(e) {
        var t, r = !1;
        for (t in e)
            if (e.hasOwnProperty(t)) {
                var n = e[t];
                if (!b.hasOwnProperty(t) || b[t] !== n) {
                    if (b[t]) throw Error(s(102, t));
                    b[t] = n, r = !0
                }
            } r && x()
    }
    var A = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        _ = null,
        C = null,
        M = null;

    function D(e) {
        if (e = m(e)) {
            if ("function" != typeof _) throw Error(s(280));
            var t = e.stateNode;
            t && (t = d(t), _(e.stateNode, e.type, t))
        }
    }

    function F(e) {
        C ? M ? M.push(e) : M = [e] : C = e
    }

    function I() {
        if (C) {
            var e = C,
                t = M;
            if (M = C = null, D(e), t)
                for (e = 0; e < t.length; e++) D(t[e])
        }
    }

    function R(e, t) {
        return e(t)
    }

    function N(e, t, r, n, i) {
        return e(t, r, n, i)
    }

    function L() {}
    var V = R,
        B = !1,
        z = !1;

    function O() {
        null === C && null === M || (L(), I())
    }

    function G(e, t, r) {
        if (z) return e(t, r);
        z = !0;
        try {
            return V(e, t, r)
        } finally {
            z = !1, O()
        }
    }
    var H = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        j = Object.prototype.hasOwnProperty,
        W = {},
        q = {};

    function U(e, t, r, n, i, a) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a
    }
    var $ = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        $[e] = new U(e, 0, !1, e, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function(e) {
        var t = e[0];
        $[t] = new U(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        $[e] = new U(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        $[e] = new U(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        $[e] = new U(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        $[e] = new U(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function(e) {
        $[e] = new U(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function(e) {
        $[e] = new U(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function(e) {
        $[e] = new U(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var Q = /[\-:]([a-z])/g;

    function Y(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(Q, Y);
        $[t] = new U(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(Q, Y);
        $[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(Q, Y);
        $[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function(e) {
        $[e] = new U(e, 1, !1, e.toLowerCase(), null, !1)
    })), $.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
        $[e] = new U(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var K = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function X(e, t, r, n) {
        var i = $.hasOwnProperty(t) ? $[t] : null;
        (null !== i ? 0 === i.type : !n && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, r, n) {
            if (null == t || function(e, t, r, n) {
                    if (null !== r && 0 === r.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !n && (null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, r, n)) return !0;
            if (n) return !1;
            if (null !== r) switch (r.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, r, i, n) && (r = null), n || null === i ? function(e) {
            return !!j.call(q, e) || !j.call(W, e) && (H.test(e) ? q[e] = !0 : (W[e] = !0, !1))
        }(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = null === r ? 3 !== i.type && "" : r : (t = i.attributeName, n = i.attributeNamespace, null === r ? e.removeAttribute(t) : (r = 3 === (i = i.type) || 4 === i && !0 === r ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
    }
    K.hasOwnProperty("ReactCurrentDispatcher") || (K.ReactCurrentDispatcher = {
        current: null
    }), K.hasOwnProperty("ReactCurrentBatchConfig") || (K.ReactCurrentBatchConfig = {
        suspense: null
    });
    var Z = /^(.*)[\\\/]/,
        J = "function" == typeof Symbol && Symbol.for,
        ee = J ? Symbol.for("react.element") : 60103,
        te = J ? Symbol.for("react.portal") : 60106,
        re = J ? Symbol.for("react.fragment") : 60107,
        ne = J ? Symbol.for("react.strict_mode") : 60108,
        ie = J ? Symbol.for("react.profiler") : 60114,
        ae = J ? Symbol.for("react.provider") : 60109,
        se = J ? Symbol.for("react.context") : 60110,
        oe = J ? Symbol.for("react.concurrent_mode") : 60111,
        le = J ? Symbol.for("react.forward_ref") : 60112,
        he = J ? Symbol.for("react.suspense") : 60113,
        ue = J ? Symbol.for("react.suspense_list") : 60120,
        ce = J ? Symbol.for("react.memo") : 60115,
        pe = J ? Symbol.for("react.lazy") : 60116,
        fe = J ? Symbol.for("react.block") : 60121,
        de = "function" == typeof Symbol && Symbol.iterator;

    function me(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = de && e[de] || e["@@iterator"]) ? e : null
    }

    function ge(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case re:
                return "Fragment";
            case te:
                return "Portal";
            case ie:
                return "Profiler";
            case ne:
                return "StrictMode";
            case he:
                return "Suspense";
            case ue:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case se:
                return "Context.Consumer";
            case ae:
                return "Context.Provider";
            case le:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case ce:
                return ge(e.type);
            case fe:
                return ge(e.render);
            case pe:
                if (e = 1 === e._status ? e._result : null) return ge(e)
        }
        return null
    }

    function ye(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var r = "";
                    break e;
                default:
                    var n = e._debugOwner,
                        i = e._debugSource,
                        a = ge(e.type);
                    r = null, n && (r = ge(n.type)), n = a, a = "", i ? a = " (at " + i.fileName.replace(Z, "") + ":" + i.lineNumber + ")" : r && (a = " (created by " + r + ")"), r = "\n    in " + (n || "Unknown") + a
            }
            t += r,
            e = e.return
        } while (e);
        return t
    }

    function ve(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function be(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function xe(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = be(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                var i = r.get,
                    a = r.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        n = "" + e, a.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: r.enumerable
                }), {
                    getValue: function() {
                        return n
                    },
                    setValue: function(e) {
                        n = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function Ee(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var r = t.getValue(),
            n = "";
        return e && (n = be(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== r && (t.setValue(e), !0)
    }

    function Se(e, t) {
        var r = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked
        })
    }

    function ke(e, t) {
        var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
        r = ve(null != t.value ? t.value : r), e._wrapperState = {
            initialChecked: n,
            initialValue: r,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function we(e, t) {
        null != (t = t.checked) && X(e, "checked", t, !1)
    }

    function Pe(e, t) {
        we(e, t);
        var r = ve(t.value),
            n = t.type;
        if (null != r) "number" === n ? (0 === r && "" === e.value || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
        else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Ae(e, t.type, r) : t.hasOwnProperty("defaultValue") && Ae(e, t.type, ve(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Te(e, t, r) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (r = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== r && (e.name = r)
    }

    function Ae(e, t, r) {
        "number" === t && e.ownerDocument.activeElement === e || (null == r ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
    }

    function _e(e, t) {
        return e = i({
            children: void 0
        }, t), (t = function(e) {
            var t = "";
            return n.Children.forEach(e, (function(e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function Ce(e, t, r, n) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
            for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
        } else {
            for (r = "" + ve(r), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === r) return e[i].selected = !0, void(n && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Me(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
        return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function De(e, t) {
        var r = t.value;
        if (null == r) {
            if (r = t.children, t = t.defaultValue, null != r) {
                if (null != t) throw Error(s(92));
                if (Array.isArray(r)) {
                    if (!(1 >= r.length)) throw Error(s(93));
                    r = r[0]
                }
                t = r
            }
            null == t && (t = ""), r = t
        }
        e._wrapperState = {
            initialValue: ve(r)
        }
    }

    function Fe(e, t) {
        var r = ve(t.value),
            n = ve(t.defaultValue);
        null != r && ((r = "" + r) !== e.value && (e.value = r), null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)), null != n && (e.defaultValue = "" + n)
    }

    function Ie(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    var Re = "http://www.w3.org/1999/xhtml",
        Ne = "http://www.w3.org/2000/svg";

    function Le(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Ve(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var Be, ze = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
            MSApp.execUnsafeLocalFunction((function() {
                return e(t, r)
            }))
        } : e
    }((function(e, t) {
        if (e.namespaceURI !== Ne || "innerHTML" in e) e.innerHTML = t;
        else {
            for ((Be = Be || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Be.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function Oe(e, t) {
        if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType) return void(r.nodeValue = t)
        }
        e.textContent = t
    }

    function Ge(e, t) {
        var r = {};
        return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
    }
    var He = {
            animationend: Ge("Animation", "AnimationEnd"),
            animationiteration: Ge("Animation", "AnimationIteration"),
            animationstart: Ge("Animation", "AnimationStart"),
            transitionend: Ge("Transition", "TransitionEnd")
        },
        je = {},
        We = {};

    function qe(e) {
        if (je[e]) return je[e];
        if (!He[e]) return e;
        var t, r = He[e];
        for (t in r)
            if (r.hasOwnProperty(t) && t in We) return je[e] = r[t];
        return e
    }
    A && (We = document.createElement("div").style, "AnimationEvent" in window || (delete He.animationend.animation, delete He.animationiteration.animation, delete He.animationstart.animation), "TransitionEvent" in window || delete He.transitionend.transition);
    var Ue = qe("animationend"),
        $e = qe("animationiteration"),
        Qe = qe("animationstart"),
        Ye = qe("transitionend"),
        Ke = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Xe = new("function" == typeof WeakMap ? WeakMap : Map);

    function Ze(e) {
        var t = Xe.get(e);
        return void 0 === t && (t = new Map, Xe.set(e, t)), t
    }

    function Je(e) {
        var t = e,
            r = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (r = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? r : null
    }

    function et(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function tt(e) {
        if (Je(e) !== e) throw Error(s(188))
    }

    function rt(e) {
        if (!(e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = Je(e))) throw Error(s(188));
                    return t !== e ? null : e
                }
                for (var r = e, n = t;;) {
                    var i = r.return;
                    if (null === i) break;
                    var a = i.alternate;
                    if (null === a) {
                        if (null !== (n = i.return)) {
                            r = n;
                            continue
                        }
                        break
                    }
                    if (i.child === a.child) {
                        for (a = i.child; a;) {
                            if (a === r) return tt(i), e;
                            if (a === n) return tt(i), t;
                            a = a.sibling
                        }
                        throw Error(s(188))
                    }
                    if (r.return !== n.return) r = i, n = a;
                    else {
                        for (var o = !1, l = i.child; l;) {
                            if (l === r) {
                                o = !0, r = i, n = a;
                                break
                            }
                            if (l === n) {
                                o = !0, n = i, r = a;
                                break
                            }
                            l = l.sibling
                        }
                        if (!o) {
                            for (l = a.child; l;) {
                                if (l === r) {
                                    o = !0, r = a, n = i;
                                    break
                                }
                                if (l === n) {
                                    o = !0, n = a, r = i;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!o) throw Error(s(189))
                        }
                    }
                    if (r.alternate !== n) throw Error(s(190))
                }
                if (3 !== r.tag) throw Error(s(188));
                return r.stateNode.current === r ? e : t
            }(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function nt(e, t) {
        if (null == t) throw Error(s(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function it(e, t, r) {
        Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e)
    }
    var at = null;

    function st(e) {
        if (e) {
            var t = e._dispatchListeners,
                r = e._dispatchInstances;
            if (Array.isArray(t))
                for (var n = 0; n < t.length && !e.isPropagationStopped(); n++) y(e, t[n], r[n]);
            else t && y(e, t, r);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function ot(e) {
        if (null !== e && (at = nt(at, e)), e = at, at = null, e) {
            if (it(e, st), at) throw Error(s(95));
            if (u) throw e = c, u = !1, c = null, e
        }
    }

    function lt(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function ht(e) {
        if (!A) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }
    var ut = [];

    function ct(e) {
        e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > ut.length && ut.push(e)
    }

    function pt(e, t, r, n) {
        if (ut.length) {
            var i = ut.pop();
            return i.topLevelType = e, i.eventSystemFlags = n, i.nativeEvent = t, i.targetInst = r, i
        }
        return {
            topLevelType: e,
            eventSystemFlags: n,
            nativeEvent: t,
            targetInst: r,
            ancestors: []
        }
    }

    function ft(e) {
        var t = e.targetInst,
            r = t;
        do {
            if (!r) {
                e.ancestors.push(r);
                break
            }
            var n = r;
            if (3 === n.tag) n = n.stateNode.containerInfo;
            else {
                for (; n.return;) n = n.return;
                n = 3 !== n.tag ? null : n.stateNode.containerInfo
            }
            if (!n) break;
            5 !== (t = r.tag) && 6 !== t || e.ancestors.push(r), r = Tr(n)
        } while (r);
        for (r = 0; r < e.ancestors.length; r++) {
            t = e.ancestors[r];
            var i = lt(e.nativeEvent);
            n = e.topLevelType;
            var a = e.nativeEvent,
                s = e.eventSystemFlags;
            0 === r && (s |= 64);
            for (var o = null, l = 0; l < S.length; l++) {
                var h = S[l];
                h && (h = h.extractEvents(n, t, a, i, s)) && (o = nt(o, h))
            }
            ot(o)
        }
    }

    function dt(e, t, r) {
        if (!r.has(e)) {
            switch (e) {
                case "scroll":
                    Qt(t, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Qt(t, "focus", !0), Qt(t, "blur", !0), r.set("blur", null), r.set("focus", null);
                    break;
                case "cancel":
                case "close":
                    ht(e) && Qt(t, e, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === Ke.indexOf(e) && $t(e, t)
            }
            r.set(e, null)
        }
    }
    var mt, gt, yt, vt = !1,
        bt = [],
        xt = null,
        Et = null,
        St = null,
        kt = new Map,
        wt = new Map,
        Pt = [],
        Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        At = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function _t(e, t, r, n, i) {
        return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | r,
            nativeEvent: i,
            container: n
        }
    }

    function Ct(e, t) {
        switch (e) {
            case "focus":
            case "blur":
                xt = null;
                break;
            case "dragenter":
            case "dragleave":
                Et = null;
                break;
            case "mouseover":
            case "mouseout":
                St = null;
                break;
            case "pointerover":
            case "pointerout":
                kt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                wt.delete(t.pointerId)
        }
    }

    function Mt(e, t, r, n, i, a) {
        return null === e || e.nativeEvent !== a ? (e = _t(t, r, n, i, a), null !== t && (null !== (t = Ar(t)) && gt(t)), e) : (e.eventSystemFlags |= n, e)
    }

    function Dt(e) {
        var t = Tr(e.target);
        if (null !== t) {
            var r = Je(t);
            if (null !== r)
                if (13 === (t = r.tag)) {
                    if (null !== (t = et(r))) return e.blockedOn = t, void a.unstable_runWithPriority(e.priority, (function() {
                        yt(r)
                    }))
                } else if (3 === t && r.stateNode.hydrate) return void(e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function Ft(e) {
        if (null !== e.blockedOn) return !1;
        var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        if (null !== t) {
            var r = Ar(t);
            return null !== r && gt(r), e.blockedOn = t, !1
        }
        return !0
    }

    function It(e, t, r) {
        Ft(e) && r.delete(t)
    }

    function Rt() {
        for (vt = !1; 0 < bt.length;) {
            var e = bt[0];
            if (null !== e.blockedOn) {
                null !== (e = Ar(e.blockedOn)) && mt(e);
                break
            }
            var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            null !== t ? e.blockedOn = t : bt.shift()
        }
        null !== xt && Ft(xt) && (xt = null), null !== Et && Ft(Et) && (Et = null), null !== St && Ft(St) && (St = null), kt.forEach(It), wt.forEach(It)
    }

    function Nt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, vt || (vt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Rt)))
    }

    function Lt(e) {
        function t(t) {
            return Nt(t, e)
        }
        if (0 < bt.length) {
            Nt(bt[0], e);
            for (var r = 1; r < bt.length; r++) {
                var n = bt[r];
                n.blockedOn === e && (n.blockedOn = null)
            }
        }
        for (null !== xt && Nt(xt, e), null !== Et && Nt(Et, e), null !== St && Nt(St, e), kt.forEach(t), wt.forEach(t), r = 0; r < Pt.length; r++)(n = Pt[r]).blockedOn === e && (n.blockedOn = null);
        for (; 0 < Pt.length && null === (r = Pt[0]).blockedOn;) Dt(r), null === r.blockedOn && Pt.shift()
    }
    var Vt = {},
        Bt = new Map,
        zt = new Map,
        Ot = ["abort", "abort", Ue, "animationEnd", $e, "animationIteration", Qe, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ye, "transitionEnd", "waiting", "waiting"];

    function Gt(e, t) {
        for (var r = 0; r < e.length; r += 2) {
            var n = e[r],
                i = e[r + 1],
                a = "on" + (i[0].toUpperCase() + i.slice(1));
            a = {
                phasedRegistrationNames: {
                    bubbled: a,
                    captured: a + "Capture"
                },
                dependencies: [n],
                eventPriority: t
            }, zt.set(n, t), Bt.set(n, a), Vt[i] = a
        }
    }
    Gt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Gt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Gt(Ot, 2);
    for (var Ht = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), jt = 0; jt < Ht.length; jt++) zt.set(Ht[jt], 0);
    var Wt = a.unstable_UserBlockingPriority,
        qt = a.unstable_runWithPriority,
        Ut = !0;

    function $t(e, t) {
        Qt(t, e, !1)
    }

    function Qt(e, t, r) {
        var n = zt.get(t);
        switch (void 0 === n ? 2 : n) {
            case 0:
                n = Yt.bind(null, t, 1, e);
                break;
            case 1:
                n = Kt.bind(null, t, 1, e);
                break;
            default:
                n = Xt.bind(null, t, 1, e)
        }
        r ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1)
    }

    function Yt(e, t, r, n) {
        B || L();
        var i = Xt,
            a = B;
        B = !0;
        try {
            N(i, e, t, r, n)
        } finally {
            (B = a) || O()
        }
    }

    function Kt(e, t, r, n) {
        qt(Wt, Xt.bind(null, e, t, r, n))
    }

    function Xt(e, t, r, n) {
        if (Ut)
            if (0 < bt.length && -1 < Tt.indexOf(e)) e = _t(null, e, t, r, n), bt.push(e);
            else {
                var i = Zt(e, t, r, n);
                if (null === i) Ct(e, n);
                else if (-1 < Tt.indexOf(e)) e = _t(i, e, t, r, n), bt.push(e);
                else if (! function(e, t, r, n, i) {
                        switch (t) {
                            case "focus":
                                return xt = Mt(xt, e, t, r, n, i), !0;
                            case "dragenter":
                                return Et = Mt(Et, e, t, r, n, i), !0;
                            case "mouseover":
                                return St = Mt(St, e, t, r, n, i), !0;
                            case "pointerover":
                                var a = i.pointerId;
                                return kt.set(a, Mt(kt.get(a) || null, e, t, r, n, i)), !0;
                            case "gotpointercapture":
                                return a = i.pointerId, wt.set(a, Mt(wt.get(a) || null, e, t, r, n, i)), !0
                        }
                        return !1
                    }(i, e, t, r, n)) {
                    Ct(e, n), e = pt(e, n, null, t);
                    try {
                        G(ft, e)
                    } finally {
                        ct(e)
                    }
                }
            }
    }

    function Zt(e, t, r, n) {
        if (null !== (r = Tr(r = lt(n)))) {
            var i = Je(r);
            if (null === i) r = null;
            else {
                var a = i.tag;
                if (13 === a) {
                    if (null !== (r = et(i))) return r;
                    r = null
                } else if (3 === a) {
                    if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                    r = null
                } else i !== r && (r = null)
            }
        }
        e = pt(e, n, r, t);
        try {
            G(ft, e)
        } finally {
            ct(e)
        }
        return null
    }
    var Jt = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        er = ["Webkit", "ms", "Moz", "O"];

    function tr(e, t, r) {
        return null == t || "boolean" == typeof t || "" === t ? "" : r || "number" != typeof t || 0 === t || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px"
    }

    function rr(e, t) {
        for (var r in e = e.style, t)
            if (t.hasOwnProperty(r)) {
                var n = 0 === r.indexOf("--"),
                    i = tr(r, t[r], n);
                "float" === r && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
            }
    }
    Object.keys(Jt).forEach((function(e) {
        er.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e]
        }))
    }));
    var nr = i({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function ir(e, t) {
        if (t) {
            if (nr[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(s(60));
                if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(s(62, ""))
        }
    }

    function ar(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var sr = Re;

    function or(e, t) {
        var r = Ze(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = P[t];
        for (var n = 0; n < t.length; n++) dt(t[n], e, r)
    }

    function lr() {}

    function hr(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function ur(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function cr(e, t) {
        var r, n = ur(e);
        for (e = 0; n;) {
            if (3 === n.nodeType) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = ur(n)
        }
    }

    function pr() {
        for (var e = window, t = hr(); t instanceof e.HTMLIFrameElement;) {
            try {
                var r = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                r = !1
            }
            if (!r) break;
            t = hr((e = t.contentWindow).document)
        }
        return t
    }

    function fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var dr = null,
        mr = null;

    function gr(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function yr(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var vr = "function" == typeof setTimeout ? setTimeout : void 0,
        br = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function xr(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function Er(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var r = e.data;
                if ("$" === r || "$!" === r || "$?" === r) {
                    if (0 === t) return e;
                    t--
                } else "/$" === r && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Sr = Math.random().toString(36).slice(2),
        kr = "__reactInternalInstance$" + Sr,
        wr = "__reactEventHandlers$" + Sr,
        Pr = "__reactContainere$" + Sr;

    function Tr(e) {
        var t = e[kr];
        if (t) return t;
        for (var r = e.parentNode; r;) {
            if (t = r[Pr] || r[kr]) {
                if (r = t.alternate, null !== t.child || null !== r && null !== r.child)
                    for (e = Er(e); null !== e;) {
                        if (r = e[kr]) return r;
                        e = Er(e)
                    }
                return t
            }
            r = (e = r).parentNode
        }
        return null
    }

    function Ar(e) {
        return !(e = e[kr] || e[Pr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function _r(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(s(33))
    }

    function Cr(e) {
        return e[wr] || null
    }

    function Mr(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function Dr(e, t) {
        var r = e.stateNode;
        if (!r) return null;
        var n = d(r);
        if (!n) return null;
        r = n[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (r && "function" != typeof r) throw Error(s(231, t, typeof r));
        return r
    }

    function Fr(e, t, r) {
        (t = Dr(e, r.dispatchConfig.phasedRegistrationNames[t])) && (r._dispatchListeners = nt(r._dispatchListeners, t), r._dispatchInstances = nt(r._dispatchInstances, e))
    }

    function Ir(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, r = []; t;) r.push(t), t = Mr(t);
            for (t = r.length; 0 < t--;) Fr(r[t], "captured", e);
            for (t = 0; t < r.length; t++) Fr(r[t], "bubbled", e)
        }
    }

    function Rr(e, t, r) {
        e && r && r.dispatchConfig.registrationName && (t = Dr(e, r.dispatchConfig.registrationName)) && (r._dispatchListeners = nt(r._dispatchListeners, t), r._dispatchInstances = nt(r._dispatchInstances, e))
    }

    function Nr(e) {
        e && e.dispatchConfig.registrationName && Rr(e._targetInst, null, e)
    }

    function Lr(e) {
        it(e, Ir)
    }
    var Vr = null,
        Br = null,
        zr = null;

    function Or() {
        if (zr) return zr;
        var e, t, r = Br,
            n = r.length,
            i = "value" in Vr ? Vr.value : Vr.textContent,
            a = i.length;
        for (e = 0; e < n && r[e] === i[e]; e++);
        var s = n - e;
        for (t = 1; t <= s && r[n - t] === i[a - t]; t++);
        return zr = i.slice(e, 1 < t ? 1 - t : void 0)
    }

    function Gr() {
        return !0
    }

    function Hr() {
        return !1
    }

    function jr(e, t, r, n) {
        for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = r, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(r) : "target" === i ? this.target = n : this[i] = r[i]);
        return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? Gr : Hr, this.isPropagationStopped = Hr, this
    }

    function Wr(e, t, r, n) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, r, n), i
        }
        return new this(e, t, r, n)
    }

    function qr(e) {
        if (!(e instanceof this)) throw Error(s(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function Ur(e) {
        e.eventPool = [], e.getPooled = Wr, e.release = qr
    }
    i(jr.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Gr)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Gr)
        },
        persist: function() {
            this.isPersistent = Gr
        },
        isPersistent: Hr,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Hr, this._dispatchInstances = this._dispatchListeners = null
        }
    }), jr.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, jr.extend = function(e) {
        function t() {}

        function r() {
            return n.apply(this, arguments)
        }
        var n = this;
        t.prototype = n.prototype;
        var a = new t;
        return i(a, r.prototype), r.prototype = a, r.prototype.constructor = r, r.Interface = i({}, n.Interface, e), r.extend = n.extend, Ur(r), r
    }, Ur(jr);
    var $r = jr.extend({
            data: null
        }),
        Qr = jr.extend({
            data: null
        }),
        Yr = [9, 13, 27, 32],
        Kr = A && "CompositionEvent" in window,
        Xr = null;
    A && "documentMode" in document && (Xr = document.documentMode);
    var Zr = A && "TextEvent" in window && !Xr,
        Jr = A && (!Kr || Xr && 8 < Xr && 11 >= Xr),
        en = String.fromCharCode(32),
        tn = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        rn = !1;

    function nn(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== Yr.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function an(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var sn = !1;
    var on = {
            eventTypes: tn,
            extractEvents: function(e, t, r, n) {
                var i;
                if (Kr) e: {
                    switch (e) {
                        case "compositionstart":
                            var a = tn.compositionStart;
                            break e;
                        case "compositionend":
                            a = tn.compositionEnd;
                            break e;
                        case "compositionupdate":
                            a = tn.compositionUpdate;
                            break e
                    }
                    a = void 0
                }
                else sn ? nn(e, r) && (a = tn.compositionEnd) : "keydown" === e && 229 === r.keyCode && (a = tn.compositionStart);
                return a ? (Jr && "ko" !== r.locale && (sn || a !== tn.compositionStart ? a === tn.compositionEnd && sn && (i = Or()) : (Br = "value" in (Vr = n) ? Vr.value : Vr.textContent, sn = !0)), a = $r.getPooled(a, t, r, n), i ? a.data = i : null !== (i = an(r)) && (a.data = i), Lr(a), i = a) : i = null, (e = Zr ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return an(t);
                        case "keypress":
                            return 32 !== t.which ? null : (rn = !0, en);
                        case "textInput":
                            return (e = t.data) === en && rn ? null : e;
                        default:
                            return null
                    }
                }(e, r) : function(e, t) {
                    if (sn) return "compositionend" === e || !Kr && nn(e, t) ? (e = Or(), zr = Br = Vr = null, sn = !1, e) : null;
                    switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return Jr && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, r)) ? ((t = Qr.getPooled(tn.beforeInput, t, r, n)).data = e, Lr(t)) : t = null, null === i ? t : null === t ? i : [i, t]
            }
        },
        ln = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

    function hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!ln[e.type] : "textarea" === t
    }
    var un = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function cn(e, t, r) {
        return (e = jr.getPooled(un.change, e, t, r)).type = "change", F(r), Lr(e), e
    }
    var pn = null,
        fn = null;

    function dn(e) {
        ot(e)
    }

    function mn(e) {
        if (Ee(_r(e))) return e
    }

    function gn(e, t) {
        if ("change" === e) return t
    }
    var yn = !1;

    function vn() {
        pn && (pn.detachEvent("onpropertychange", bn), fn = pn = null)
    }

    function bn(e) {
        if ("value" === e.propertyName && mn(fn))
            if (e = cn(fn, e, lt(e)), B) ot(e);
            else {
                B = !0;
                try {
                    R(dn, e)
                } finally {
                    B = !1, O()
                }
            }
    }

    function xn(e, t, r) {
        "focus" === e ? (vn(), fn = r, (pn = t).attachEvent("onpropertychange", bn)) : "blur" === e && vn()
    }

    function En(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return mn(fn)
    }

    function Sn(e, t) {
        if ("click" === e) return mn(t)
    }

    function kn(e, t) {
        if ("input" === e || "change" === e) return mn(t)
    }
    A && (yn = ht("input") && (!document.documentMode || 9 < document.documentMode));
    var wn = {
            eventTypes: un,
            _isInputEventSupported: yn,
            extractEvents: function(e, t, r, n) {
                var i = t ? _r(t) : window,
                    a = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === a || "input" === a && "file" === i.type) var s = gn;
                else if (hn(i))
                    if (yn) s = kn;
                    else {
                        s = En;
                        var o = xn
                    }
                else(a = i.nodeName) && "input" === a.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (s = Sn);
                if (s && (s = s(e, t))) return cn(s, r, n);
                o && o(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Ae(i, "number", i.value)
            }
        },
        Pn = jr.extend({
            view: null,
            detail: null
        }),
        Tn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function An(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Tn[e]) && !!t[e]
    }

    function _n() {
        return An
    }
    var Cn = 0,
        Mn = 0,
        Dn = !1,
        Fn = !1,
        In = Pn.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: _n,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function(e) {
                if ("movementX" in e) return e.movementX;
                var t = Cn;
                return Cn = e.screenX, Dn ? "mousemove" === e.type ? e.screenX - t : 0 : (Dn = !0, 0)
            },
            movementY: function(e) {
                if ("movementY" in e) return e.movementY;
                var t = Mn;
                return Mn = e.screenY, Fn ? "mousemove" === e.type ? e.screenY - t : 0 : (Fn = !0, 0)
            }
        }),
        Rn = In.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }),
        Nn = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        Ln = {
            eventTypes: Nn,
            extractEvents: function(e, t, r, n, i) {
                var a = "mouseover" === e || "pointerover" === e,
                    s = "mouseout" === e || "pointerout" === e;
                if (a && 0 == (32 & i) && (r.relatedTarget || r.fromElement) || !s && !a) return null;
                (a = n.window === n ? n : (a = n.ownerDocument) ? a.defaultView || a.parentWindow : window, s) ? (s = t, null !== (t = (t = r.relatedTarget || r.toElement) ? Tr(t) : null) && (t !== Je(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : s = null;
                if (s === t) return null;
                if ("mouseout" === e || "mouseover" === e) var o = In,
                    l = Nn.mouseLeave,
                    h = Nn.mouseEnter,
                    u = "mouse";
                else "pointerout" !== e && "pointerover" !== e || (o = Rn, l = Nn.pointerLeave, h = Nn.pointerEnter, u = "pointer");
                if (e = null == s ? a : _r(s), a = null == t ? a : _r(t), (l = o.getPooled(l, s, r, n)).type = u + "leave", l.target = e, l.relatedTarget = a, (r = o.getPooled(h, t, r, n)).type = u + "enter", r.target = a, r.relatedTarget = e, u = t, (n = s) && u) e: {
                    for (h = u, s = 0, e = o = n; e; e = Mr(e)) s++;
                    for (e = 0, t = h; t; t = Mr(t)) e++;
                    for (; 0 < s - e;) o = Mr(o),
                    s--;
                    for (; 0 < e - s;) h = Mr(h),
                    e--;
                    for (; s--;) {
                        if (o === h || o === h.alternate) break e;
                        o = Mr(o), h = Mr(h)
                    }
                    o = null
                }
                else o = null;
                for (h = o, o = []; n && n !== h && (null === (s = n.alternate) || s !== h);) o.push(n), n = Mr(n);
                for (n = []; u && u !== h && (null === (s = u.alternate) || s !== h);) n.push(u), u = Mr(u);
                for (u = 0; u < o.length; u++) Rr(o[u], "bubbled", l);
                for (u = n.length; 0 < u--;) Rr(n[u], "captured", r);
                return 0 == (64 & i) ? [l] : [l, r]
            }
        };
    var Vn = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        Bn = Object.prototype.hasOwnProperty;

    function zn(e, t) {
        if (Vn(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (n = 0; n < r.length; n++)
            if (!Bn.call(t, r[n]) || !Vn(e[r[n]], t[r[n]])) return !1;
        return !0
    }
    var On = A && "documentMode" in document && 11 >= document.documentMode,
        Gn = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        Hn = null,
        jn = null,
        Wn = null,
        qn = !1;

    function Un(e, t) {
        var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return qn || null == Hn || Hn !== hr(r) ? null : ("selectionStart" in (r = Hn) && fr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }, Wn && zn(Wn, r) ? null : (Wn = r, (e = jr.getPooled(Gn.select, jn, e, t)).type = "select", e.target = Hn, Lr(e), e))
    }
    var $n = {
            eventTypes: Gn,
            extractEvents: function(e, t, r, n, i, a) {
                if (!(a = !(i = a || (n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument)))) {
                    e: {
                        i = Ze(i),
                        a = P.onSelect;
                        for (var s = 0; s < a.length; s++)
                            if (!i.has(a[s])) {
                                i = !1;
                                break e
                            } i = !0
                    }
                    a = !i
                }
                if (a) return null;
                switch (i = t ? _r(t) : window, e) {
                    case "focus":
                        (hn(i) || "true" === i.contentEditable) && (Hn = i, jn = t, Wn = null);
                        break;
                    case "blur":
                        Wn = jn = Hn = null;
                        break;
                    case "mousedown":
                        qn = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        return qn = !1, Un(r, n);
                    case "selectionchange":
                        if (On) break;
                    case "keydown":
                    case "keyup":
                        return Un(r, n)
                }
                return null
            }
        },
        Qn = jr.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        Yn = jr.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Kn = Pn.extend({
            relatedTarget: null
        });

    function Xn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var Zn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Jn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ei = Pn.extend({
            key: function(e) {
                if (e.key) {
                    var t = Zn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = Xn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Jn[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: _n,
            charCode: function(e) {
                return "keypress" === e.type ? Xn(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? Xn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }),
        ti = In.extend({
            dataTransfer: null
        }),
        ri = Pn.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: _n
        }),
        ni = jr.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        ii = In.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        ai = {
            eventTypes: Vt,
            extractEvents: function(e, t, r, n) {
                var i = Bt.get(e);
                if (!i) return null;
                switch (e) {
                    case "keypress":
                        if (0 === Xn(r)) return null;
                    case "keydown":
                    case "keyup":
                        e = ei;
                        break;
                    case "blur":
                    case "focus":
                        e = Kn;
                        break;
                    case "click":
                        if (2 === r.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = In;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = ti;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = ri;
                        break;
                    case Ue:
                    case $e:
                    case Qe:
                        e = Qn;
                        break;
                    case Ye:
                        e = ni;
                        break;
                    case "scroll":
                        e = Pn;
                        break;
                    case "wheel":
                        e = ii;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = Yn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = Rn;
                        break;
                    default:
                        e = jr
                }
                return Lr(t = e.getPooled(i, t, r, n)), t
            }
        };
    if (v) throw Error(s(101));
    v = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), x(), d = Cr, m = Ar, g = _r, T({
        SimpleEventPlugin: ai,
        EnterLeaveEventPlugin: Ln,
        ChangeEventPlugin: wn,
        SelectEventPlugin: $n,
        BeforeInputEventPlugin: on
    });
    var si = [],
        oi = -1;

    function li(e) {
        0 > oi || (e.current = si[oi], si[oi] = null, oi--)
    }

    function hi(e, t) {
        oi++, si[oi] = e.current, e.current = t
    }
    var ui = {},
        ci = {
            current: ui
        },
        pi = {
            current: !1
        },
        fi = ui;

    function di(e, t) {
        var r = e.type.contextTypes;
        if (!r) return ui;
        var n = e.stateNode;
        if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
        var i, a = {};
        for (i in r) a[i] = t[i];
        return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
    }

    function mi(e) {
        return null != (e = e.childContextTypes)
    }

    function gi() {
        li(pi), li(ci)
    }

    function yi(e, t, r) {
        if (ci.current !== ui) throw Error(s(168));
        hi(ci, t), hi(pi, r)
    }

    function vi(e, t, r) {
        var n = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof n.getChildContext) return r;
        for (var a in n = n.getChildContext())
            if (!(a in e)) throw Error(s(108, ge(t) || "Unknown", a));
        return i({}, r, {}, n)
    }

    function bi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ui, fi = ci.current, hi(ci, e), hi(pi, pi.current), !0
    }

    function xi(e, t, r) {
        var n = e.stateNode;
        if (!n) throw Error(s(169));
        r ? (e = vi(e, t, fi), n.__reactInternalMemoizedMergedChildContext = e, li(pi), li(ci), hi(ci, e)) : li(pi), hi(pi, r)
    }
    var Ei = a.unstable_runWithPriority,
        Si = a.unstable_scheduleCallback,
        ki = a.unstable_cancelCallback,
        wi = a.unstable_requestPaint,
        Pi = a.unstable_now,
        Ti = a.unstable_getCurrentPriorityLevel,
        Ai = a.unstable_ImmediatePriority,
        _i = a.unstable_UserBlockingPriority,
        Ci = a.unstable_NormalPriority,
        Mi = a.unstable_LowPriority,
        Di = a.unstable_IdlePriority,
        Fi = {},
        Ii = a.unstable_shouldYield,
        Ri = void 0 !== wi ? wi : function() {},
        Ni = null,
        Li = null,
        Vi = !1,
        Bi = Pi(),
        zi = 1e4 > Bi ? Pi : function() {
            return Pi() - Bi
        };

    function Oi() {
        switch (Ti()) {
            case Ai:
                return 99;
            case _i:
                return 98;
            case Ci:
                return 97;
            case Mi:
                return 96;
            case Di:
                return 95;
            default:
                throw Error(s(332))
        }
    }

    function Gi(e) {
        switch (e) {
            case 99:
                return Ai;
            case 98:
                return _i;
            case 97:
                return Ci;
            case 96:
                return Mi;
            case 95:
                return Di;
            default:
                throw Error(s(332))
        }
    }

    function Hi(e, t) {
        return e = Gi(e), Ei(e, t)
    }

    function ji(e, t, r) {
        return e = Gi(e), Si(e, t, r)
    }

    function Wi(e) {
        return null === Ni ? (Ni = [e], Li = Si(Ai, Ui)) : Ni.push(e), Fi
    }

    function qi() {
        if (null !== Li) {
            var e = Li;
            Li = null, ki(e)
        }
        Ui()
    }

    function Ui() {
        if (!Vi && null !== Ni) {
            Vi = !0;
            var e = 0;
            try {
                var t = Ni;
                Hi(99, (function() {
                    for (; e < t.length; e++) {
                        var r = t[e];
                        do {
                            r = r(!0)
                        } while (null !== r)
                    }
                })), Ni = null
            } catch (t) {
                throw null !== Ni && (Ni = Ni.slice(e + 1)), Si(Ai, qi), t
            } finally {
                Vi = !1
            }
        }
    }

    function $i(e, t, r) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (r /= 10) | 0)) * r
    }

    function Qi(e, t) {
        if (e && e.defaultProps)
            for (var r in t = i({}, t), e = e.defaultProps) void 0 === t[r] && (t[r] = e[r]);
        return t
    }
    var Yi = {
            current: null
        },
        Ki = null,
        Xi = null,
        Zi = null;

    function Ji() {
        Zi = Xi = Ki = null
    }

    function ea(e) {
        var t = Yi.current;
        li(Yi), e.type._context._currentValue = t
    }

    function ta(e, t) {
        for (; null !== e;) {
            var r = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== r && r.childExpirationTime < t && (r.childExpirationTime = t);
            else {
                if (!(null !== r && r.childExpirationTime < t)) break;
                r.childExpirationTime = t
            }
            e = e.return
        }
    }

    function ra(e, t) {
        Ki = e, Zi = Xi = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Cs = !0), e.firstContext = null)
    }

    function na(e, t) {
        if (Zi !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (Zi = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === Xi) {
                if (null === Ki) throw Error(s(308));
                Xi = t, Ki.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else Xi = Xi.next = t;
        return e._currentValue
    }
    var ia = !1;

    function aa(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            baseQueue: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }

    function sa(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects
        })
    }

    function oa(e, t) {
        return (e = {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }).next = e
    }

    function la(e, t) {
        if (null !== (e = e.updateQueue)) {
            var r = (e = e.shared).pending;
            null === r ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
        }
    }

    function ha(e, t) {
        var r = e.alternate;
        null !== r && sa(r, e), null === (r = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = r.next, r.next = t)
    }

    function ua(e, t, r, n) {
        var a = e.updateQueue;
        ia = !1;
        var s = a.baseQueue,
            o = a.shared.pending;
        if (null !== o) {
            if (null !== s) {
                var l = s.next;
                s.next = o.next, o.next = l
            }
            s = o, a.shared.pending = null, null !== (l = e.alternate) && (null !== (l = l.updateQueue) && (l.baseQueue = o))
        }
        if (null !== s) {
            l = s.next;
            var h = a.baseState,
                u = 0,
                c = null,
                p = null,
                f = null;
            if (null !== l)
                for (var d = l;;) {
                    if ((o = d.expirationTime) < n) {
                        var m = {
                            expirationTime: d.expirationTime,
                            suspenseConfig: d.suspenseConfig,
                            tag: d.tag,
                            payload: d.payload,
                            callback: d.callback,
                            next: null
                        };
                        null === f ? (p = f = m, c = h) : f = f.next = m, o > u && (u = o)
                    } else {
                        null !== f && (f = f.next = {
                            expirationTime: 1073741823,
                            suspenseConfig: d.suspenseConfig,
                            tag: d.tag,
                            payload: d.payload,
                            callback: d.callback,
                            next: null
                        }), al(o, d.suspenseConfig);
                        e: {
                            var g = e,
                                y = d;
                            switch (o = t, m = r, y.tag) {
                                case 1:
                                    if ("function" == typeof(g = y.payload)) {
                                        h = g.call(m, h, o);
                                        break e
                                    }
                                    h = g;
                                    break e;
                                case 3:
                                    g.effectTag = -4097 & g.effectTag | 64;
                                case 0:
                                    if (null == (o = "function" == typeof(g = y.payload) ? g.call(m, h, o) : g)) break e;
                                    h = i({}, h, o);
                                    break e;
                                case 2:
                                    ia = !0
                            }
                        }
                        null !== d.callback && (e.effectTag |= 32, null === (o = a.effects) ? a.effects = [d] : o.push(d))
                    }
                    if (null === (d = d.next) || d === l) {
                        if (null === (o = a.shared.pending)) break;
                        d = s.next = o.next, o.next = l, a.baseQueue = s = o, a.shared.pending = null
                    }
                }
            null === f ? c = h : f.next = p, a.baseState = c, a.baseQueue = f, sl(u), e.expirationTime = u, e.memoizedState = h
        }
    }

    function ca(e, t, r) {
        if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var n = e[t],
                    i = n.callback;
                if (null !== i) {
                    if (n.callback = null, n = i, i = r, "function" != typeof n) throw Error(s(191, n));
                    n.call(i)
                }
            }
    }
    var pa = K.ReactCurrentBatchConfig,
        fa = (new n.Component).refs;

    function da(e, t, r, n) {
        r = null == (r = r(n, t = e.memoizedState)) ? t : i({}, t, r), e.memoizedState = r, 0 === e.expirationTime && (e.updateQueue.baseState = r)
    }
    var ma = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && Je(e) === e
        },
        enqueueSetState: function(e, t, r) {
            e = e._reactInternalFiber;
            var n = Uo(),
                i = pa.suspense;
            (i = oa(n = $o(n, e, i), i)).payload = t, null != r && (i.callback = r), la(e, i), Qo(e, n)
        },
        enqueueReplaceState: function(e, t, r) {
            e = e._reactInternalFiber;
            var n = Uo(),
                i = pa.suspense;
            (i = oa(n = $o(n, e, i), i)).tag = 1, i.payload = t, null != r && (i.callback = r), la(e, i), Qo(e, n)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var r = Uo(),
                n = pa.suspense;
            (n = oa(r = $o(r, e, n), n)).tag = 2, null != t && (n.callback = t), la(e, n), Qo(e, r)
        }
    };

    function ga(e, t, r, n, i, a, s) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!zn(r, n) || !zn(i, a))
    }

    function ya(e, t, r) {
        var n = !1,
            i = ui,
            a = t.contextType;
        return "object" == typeof a && null !== a ? a = na(a) : (i = mi(t) ? fi : ci.current, a = (n = null != (n = t.contextTypes)) ? di(e, i) : ui), t = new t(r, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ma, e.stateNode = t, t._reactInternalFiber = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
    }

    function va(e, t, r, n) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && ma.enqueueReplaceState(t, t.state, null)
    }

    function ba(e, t, r, n) {
        var i = e.stateNode;
        i.props = r, i.state = e.memoizedState, i.refs = fa, aa(e);
        var a = t.contextType;
        "object" == typeof a && null !== a ? i.context = na(a) : (a = mi(t) ? fi : ci.current, i.context = di(e, a)), ua(e, r, i, n), i.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (da(e, t, a, r), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ma.enqueueReplaceState(i, i.state, null), ua(e, r, i, n), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }
    var xa = Array.isArray;

    function Ea(e, t, r) {
        if (null !== (e = r.ref) && "function" != typeof e && "object" != typeof e) {
            if (r._owner) {
                if (r = r._owner) {
                    if (1 !== r.tag) throw Error(s(309));
                    var n = r.stateNode
                }
                if (!n) throw Error(s(147, e));
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                    var t = n.refs;
                    t === fa && (t = n.refs = {}), null === e ? delete t[i] : t[i] = e
                })._stringRef = i, t)
            }
            if ("string" != typeof e) throw Error(s(284));
            if (!r._owner) throw Error(s(290, e))
        }
        return e
    }

    function Sa(e, t) {
        if ("textarea" !== e.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }

    function ka(e) {
        function t(t, r) {
            if (e) {
                var n = t.lastEffect;
                null !== n ? (n.nextEffect = r, t.lastEffect = r) : t.firstEffect = t.lastEffect = r, r.nextEffect = null, r.effectTag = 8
            }
        }

        function r(r, n) {
            if (!e) return null;
            for (; null !== n;) t(r, n), n = n.sibling;
            return null
        }

        function n(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function i(e, t) {
            return (e = Tl(e, t)).index = 0, e.sibling = null, e
        }

        function a(t, r, n) {
            return t.index = n, e ? null !== (n = t.alternate) ? (n = n.index) < r ? (t.effectTag = 2, r) : n : (t.effectTag = 2, r) : r
        }

        function o(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function l(e, t, r, n) {
            return null === t || 6 !== t.tag ? ((t = Cl(r, e.mode, n)).return = e, t) : ((t = i(t, r)).return = e, t)
        }

        function h(e, t, r, n) {
            return null !== t && t.elementType === r.type ? ((n = i(t, r.props)).ref = Ea(e, t, r), n.return = e, n) : ((n = Al(r.type, r.key, r.props, null, e.mode, n)).ref = Ea(e, t, r), n.return = e, n)
        }

        function u(e, t, r, n) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== r.containerInfo || t.stateNode.implementation !== r.implementation ? ((t = Ml(r, e.mode, n)).return = e, t) : ((t = i(t, r.children || [])).return = e, t)
        }

        function c(e, t, r, n, a) {
            return null === t || 7 !== t.tag ? ((t = _l(r, e.mode, n, a)).return = e, t) : ((t = i(t, r)).return = e, t)
        }

        function p(e, t, r) {
            if ("string" == typeof t || "number" == typeof t) return (t = Cl("" + t, e.mode, r)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case ee:
                        return (r = Al(t.type, t.key, t.props, null, e.mode, r)).ref = Ea(e, null, t), r.return = e, r;
                    case te:
                        return (t = Ml(t, e.mode, r)).return = e, t
                }
                if (xa(t) || me(t)) return (t = _l(t, e.mode, r, null)).return = e, t;
                Sa(e, t)
            }
            return null
        }

        function f(e, t, r, n) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof r || "number" == typeof r) return null !== i ? null : l(e, t, "" + r, n);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case ee:
                        return r.key === i ? r.type === re ? c(e, t, r.props.children, n, i) : h(e, t, r, n) : null;
                    case te:
                        return r.key === i ? u(e, t, r, n) : null
                }
                if (xa(r) || me(r)) return null !== i ? null : c(e, t, r, n, null);
                Sa(e, r)
            }
            return null
        }

        function d(e, t, r, n, i) {
            if ("string" == typeof n || "number" == typeof n) return l(t, e = e.get(r) || null, "" + n, i);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case ee:
                        return e = e.get(null === n.key ? r : n.key) || null, n.type === re ? c(t, e, n.props.children, i, n.key) : h(t, e, n, i);
                    case te:
                        return u(t, e = e.get(null === n.key ? r : n.key) || null, n, i)
                }
                if (xa(n) || me(n)) return c(t, e = e.get(r) || null, n, i, null);
                Sa(t, n)
            }
            return null
        }

        function m(i, s, o, l) {
            for (var h = null, u = null, c = s, m = s = 0, g = null; null !== c && m < o.length; m++) {
                c.index > m ? (g = c, c = null) : g = c.sibling;
                var y = f(i, c, o[m], l);
                if (null === y) {
                    null === c && (c = g);
                    break
                }
                e && c && null === y.alternate && t(i, c), s = a(y, s, m), null === u ? h = y : u.sibling = y, u = y, c = g
            }
            if (m === o.length) return r(i, c), h;
            if (null === c) {
                for (; m < o.length; m++) null !== (c = p(i, o[m], l)) && (s = a(c, s, m), null === u ? h = c : u.sibling = c, u = c);
                return h
            }
            for (c = n(i, c); m < o.length; m++) null !== (g = d(c, i, m, o[m], l)) && (e && null !== g.alternate && c.delete(null === g.key ? m : g.key), s = a(g, s, m), null === u ? h = g : u.sibling = g, u = g);
            return e && c.forEach((function(e) {
                return t(i, e)
            })), h
        }

        function g(i, o, l, h) {
            var u = me(l);
            if ("function" != typeof u) throw Error(s(150));
            if (null == (l = u.call(l))) throw Error(s(151));
            for (var c = u = null, m = o, g = o = 0, y = null, v = l.next(); null !== m && !v.done; g++, v = l.next()) {
                m.index > g ? (y = m, m = null) : y = m.sibling;
                var b = f(i, m, v.value, h);
                if (null === b) {
                    null === m && (m = y);
                    break
                }
                e && m && null === b.alternate && t(i, m), o = a(b, o, g), null === c ? u = b : c.sibling = b, c = b, m = y
            }
            if (v.done) return r(i, m), u;
            if (null === m) {
                for (; !v.done; g++, v = l.next()) null !== (v = p(i, v.value, h)) && (o = a(v, o, g), null === c ? u = v : c.sibling = v, c = v);
                return u
            }
            for (m = n(i, m); !v.done; g++, v = l.next()) null !== (v = d(m, i, g, v.value, h)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), o = a(v, o, g), null === c ? u = v : c.sibling = v, c = v);
            return e && m.forEach((function(e) {
                return t(i, e)
            })), u
        }
        return function(e, n, a, l) {
            var h = "object" == typeof a && null !== a && a.type === re && null === a.key;
            h && (a = a.props.children);
            var u = "object" == typeof a && null !== a;
            if (u) switch (a.$$typeof) {
                case ee:
                    e: {
                        for (u = a.key, h = n; null !== h;) {
                            if (h.key === u) {
                                switch (h.tag) {
                                    case 7:
                                        if (a.type === re) {
                                            r(e, h.sibling), (n = i(h, a.props.children)).return = e, e = n;
                                            break e
                                        }
                                        break;
                                    default:
                                        if (h.elementType === a.type) {
                                            r(e, h.sibling), (n = i(h, a.props)).ref = Ea(e, h, a), n.return = e, e = n;
                                            break e
                                        }
                                }
                                r(e, h);
                                break
                            }
                            t(e, h), h = h.sibling
                        }
                        a.type === re ? ((n = _l(a.props.children, e.mode, l, a.key)).return = e, e = n) : ((l = Al(a.type, a.key, a.props, null, e.mode, l)).ref = Ea(e, n, a), l.return = e, e = l)
                    }
                    return o(e);
                case te:
                    e: {
                        for (h = a.key; null !== n;) {
                            if (n.key === h) {
                                if (4 === n.tag && n.stateNode.containerInfo === a.containerInfo && n.stateNode.implementation === a.implementation) {
                                    r(e, n.sibling), (n = i(n, a.children || [])).return = e, e = n;
                                    break e
                                }
                                r(e, n);
                                break
                            }
                            t(e, n), n = n.sibling
                        }(n = Ml(a, e.mode, l)).return = e,
                        e = n
                    }
                    return o(e)
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== n && 6 === n.tag ? (r(e, n.sibling), (n = i(n, a)).return = e, e = n) : (r(e, n), (n = Cl(a, e.mode, l)).return = e, e = n), o(e);
            if (xa(a)) return m(e, n, a, l);
            if (me(a)) return g(e, n, a, l);
            if (u && Sa(e, a), void 0 === a && !h) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(s(152, e.displayName || e.name || "Component"))
            }
            return r(e, n)
        }
    }
    var wa = ka(!0),
        Pa = ka(!1),
        Ta = {},
        Aa = {
            current: Ta
        },
        _a = {
            current: Ta
        },
        Ca = {
            current: Ta
        };

    function Ma(e) {
        if (e === Ta) throw Error(s(174));
        return e
    }

    function Da(e, t) {
        switch (hi(Ca, t), hi(_a, e), hi(Aa, Ta), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ve(null, "");
                break;
            default:
                t = Ve(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        li(Aa), hi(Aa, t)
    }

    function Fa() {
        li(Aa), li(_a), li(Ca)
    }

    function Ia(e) {
        Ma(Ca.current);
        var t = Ma(Aa.current),
            r = Ve(t, e.type);
        t !== r && (hi(_a, e), hi(Aa, r))
    }

    function Ra(e) {
        _a.current === e && (li(Aa), li(_a))
    }
    var Na = {
        current: 0
    };

    function La(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var r = t.memoizedState;
                if (null !== r && (null === (r = r.dehydrated) || "$?" === r.data || "$!" === r.data)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Va(e, t) {
        return {
            responder: e,
            props: t
        }
    }
    var Ba = K.ReactCurrentDispatcher,
        za = K.ReactCurrentBatchConfig,
        Oa = 0,
        Ga = null,
        Ha = null,
        ja = null,
        Wa = !1;

    function qa() {
        throw Error(s(321))
    }

    function Ua(e, t) {
        if (null === t) return !1;
        for (var r = 0; r < t.length && r < e.length; r++)
            if (!Vn(e[r], t[r])) return !1;
        return !0
    }

    function $a(e, t, r, n, i, a) {
        if (Oa = a, Ga = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, Ba.current = null === e || null === e.memoizedState ? gs : ys, e = r(n, i), t.expirationTime === Oa) {
            a = 0;
            do {
                if (t.expirationTime = 0, !(25 > a)) throw Error(s(301));
                a += 1, ja = Ha = null, t.updateQueue = null, Ba.current = vs, e = r(n, i)
            } while (t.expirationTime === Oa)
        }
        if (Ba.current = ms, t = null !== Ha && null !== Ha.next, Oa = 0, ja = Ha = Ga = null, Wa = !1, t) throw Error(s(300));
        return e
    }

    function Qa() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === ja ? Ga.memoizedState = ja = e : ja = ja.next = e, ja
    }

    function Ya() {
        if (null === Ha) {
            var e = Ga.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = Ha.next;
        var t = null === ja ? Ga.memoizedState : ja.next;
        if (null !== t) ja = t, Ha = e;
        else {
            if (null === e) throw Error(s(310));
            e = {
                memoizedState: (Ha = e).memoizedState,
                baseState: Ha.baseState,
                baseQueue: Ha.baseQueue,
                queue: Ha.queue,
                next: null
            }, null === ja ? Ga.memoizedState = ja = e : ja = ja.next = e
        }
        return ja
    }

    function Ka(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function Xa(e) {
        var t = Ya(),
            r = t.queue;
        if (null === r) throw Error(s(311));
        r.lastRenderedReducer = e;
        var n = Ha,
            i = n.baseQueue,
            a = r.pending;
        if (null !== a) {
            if (null !== i) {
                var o = i.next;
                i.next = a.next, a.next = o
            }
            n.baseQueue = i = a, r.pending = null
        }
        if (null !== i) {
            i = i.next, n = n.baseState;
            var l = o = a = null,
                h = i;
            do {
                var u = h.expirationTime;
                if (u < Oa) {
                    var c = {
                        expirationTime: h.expirationTime,
                        suspenseConfig: h.suspenseConfig,
                        action: h.action,
                        eagerReducer: h.eagerReducer,
                        eagerState: h.eagerState,
                        next: null
                    };
                    null === l ? (o = l = c, a = n) : l = l.next = c, u > Ga.expirationTime && (Ga.expirationTime = u, sl(u))
                } else null !== l && (l = l.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: h.suspenseConfig,
                    action: h.action,
                    eagerReducer: h.eagerReducer,
                    eagerState: h.eagerState,
                    next: null
                }), al(u, h.suspenseConfig), n = h.eagerReducer === e ? h.eagerState : e(n, h.action);
                h = h.next
            } while (null !== h && h !== i);
            null === l ? a = n : l.next = o, Vn(n, t.memoizedState) || (Cs = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n
        }
        return [t.memoizedState, r.dispatch]
    }

    function Za(e) {
        var t = Ya(),
            r = t.queue;
        if (null === r) throw Error(s(311));
        r.lastRenderedReducer = e;
        var n = r.dispatch,
            i = r.pending,
            a = t.memoizedState;
        if (null !== i) {
            r.pending = null;
            var o = i = i.next;
            do {
                a = e(a, o.action), o = o.next
            } while (o !== i);
            Vn(a, t.memoizedState) || (Cs = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), r.lastRenderedState = a
        }
        return [a, n]
    }

    function Ja(e) {
        var t = Qa();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Ka,
            lastRenderedState: e
        }).dispatch = ds.bind(null, Ga, e), [t.memoizedState, e]
    }

    function es(e, t, r, n) {
        return e = {
            tag: e,
            create: t,
            destroy: r,
            deps: n,
            next: null
        }, null === (t = Ga.updateQueue) ? (t = {
            lastEffect: null
        }, Ga.updateQueue = t, t.lastEffect = e.next = e) : null === (r = t.lastEffect) ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e), e
    }

    function ts() {
        return Ya().memoizedState
    }

    function rs(e, t, r, n) {
        var i = Qa();
        Ga.effectTag |= e, i.memoizedState = es(1 | t, r, void 0, void 0 === n ? null : n)
    }

    function ns(e, t, r, n) {
        var i = Ya();
        n = void 0 === n ? null : n;
        var a = void 0;
        if (null !== Ha) {
            var s = Ha.memoizedState;
            if (a = s.destroy, null !== n && Ua(n, s.deps)) return void es(t, r, a, n)
        }
        Ga.effectTag |= e, i.memoizedState = es(1 | t, r, a, n)
    }

    function is(e, t) {
        return rs(516, 4, e, t)
    }

    function as(e, t) {
        return ns(516, 4, e, t)
    }

    function ss(e, t) {
        return ns(4, 2, e, t)
    }

    function os(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
            t.current = null
        }) : void 0
    }

    function ls(e, t, r) {
        return r = null != r ? r.concat([e]) : null, ns(4, 2, os.bind(null, t, e), r)
    }

    function hs() {}

    function us(e, t) {
        return Qa().memoizedState = [e, void 0 === t ? null : t], e
    }

    function cs(e, t) {
        var r = Ya();
        t = void 0 === t ? null : t;
        var n = r.memoizedState;
        return null !== n && null !== t && Ua(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
    }

    function ps(e, t) {
        var r = Ya();
        t = void 0 === t ? null : t;
        var n = r.memoizedState;
        return null !== n && null !== t && Ua(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
    }

    function fs(e, t, r) {
        var n = Oi();
        Hi(98 > n ? 98 : n, (function() {
            e(!0)
        })), Hi(97 < n ? 97 : n, (function() {
            var n = za.suspense;
            za.suspense = void 0 === t ? null : t;
            try {
                e(!1), r()
            } finally {
                za.suspense = n
            }
        }))
    }

    function ds(e, t, r) {
        var n = Uo(),
            i = pa.suspense;
        i = {
            expirationTime: n = $o(n, e, i),
            suspenseConfig: i,
            action: r,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var a = t.pending;
        if (null === a ? i.next = i : (i.next = a.next, a.next = i), t.pending = i, a = e.alternate, e === Ga || null !== a && a === Ga) Wa = !0, i.expirationTime = Oa, Ga.expirationTime = Oa;
        else {
            if (0 === e.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = t.lastRenderedReducer)) try {
                var s = t.lastRenderedState,
                    o = a(s, r);
                if (i.eagerReducer = a, i.eagerState = o, Vn(o, s)) return
            } catch (e) {}
            Qo(e, n)
        }
    }
    var ms = {
            readContext: na,
            useCallback: qa,
            useContext: qa,
            useEffect: qa,
            useImperativeHandle: qa,
            useLayoutEffect: qa,
            useMemo: qa,
            useReducer: qa,
            useRef: qa,
            useState: qa,
            useDebugValue: qa,
            useResponder: qa,
            useDeferredValue: qa,
            useTransition: qa
        },
        gs = {
            readContext: na,
            useCallback: us,
            useContext: na,
            useEffect: is,
            useImperativeHandle: function(e, t, r) {
                return r = null != r ? r.concat([e]) : null, rs(4, 2, os.bind(null, t, e), r)
            },
            useLayoutEffect: function(e, t) {
                return rs(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var r = Qa();
                return t = void 0 === t ? null : t, e = e(), r.memoizedState = [e, t], e
            },
            useReducer: function(e, t, r) {
                var n = Qa();
                return t = void 0 !== r ? r(t) : t, n.memoizedState = n.baseState = t, e = (e = n.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = ds.bind(null, Ga, e), [n.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, Qa().memoizedState = e
            },
            useState: Ja,
            useDebugValue: hs,
            useResponder: Va,
            useDeferredValue: function(e, t) {
                var r = Ja(e),
                    n = r[0],
                    i = r[1];
                return is((function() {
                    var r = za.suspense;
                    za.suspense = void 0 === t ? null : t;
                    try {
                        i(e)
                    } finally {
                        za.suspense = r
                    }
                }), [e, t]), n
            },
            useTransition: function(e) {
                var t = Ja(!1),
                    r = t[0];
                return t = t[1], [us(fs.bind(null, t, e), [t, e]), r]
            }
        },
        ys = {
            readContext: na,
            useCallback: cs,
            useContext: na,
            useEffect: as,
            useImperativeHandle: ls,
            useLayoutEffect: ss,
            useMemo: ps,
            useReducer: Xa,
            useRef: ts,
            useState: function() {
                return Xa(Ka)
            },
            useDebugValue: hs,
            useResponder: Va,
            useDeferredValue: function(e, t) {
                var r = Xa(Ka),
                    n = r[0],
                    i = r[1];
                return as((function() {
                    var r = za.suspense;
                    za.suspense = void 0 === t ? null : t;
                    try {
                        i(e)
                    } finally {
                        za.suspense = r
                    }
                }), [e, t]), n
            },
            useTransition: function(e) {
                var t = Xa(Ka),
                    r = t[0];
                return t = t[1], [cs(fs.bind(null, t, e), [t, e]), r]
            }
        },
        vs = {
            readContext: na,
            useCallback: cs,
            useContext: na,
            useEffect: as,
            useImperativeHandle: ls,
            useLayoutEffect: ss,
            useMemo: ps,
            useReducer: Za,
            useRef: ts,
            useState: function() {
                return Za(Ka)
            },
            useDebugValue: hs,
            useResponder: Va,
            useDeferredValue: function(e, t) {
                var r = Za(Ka),
                    n = r[0],
                    i = r[1];
                return as((function() {
                    var r = za.suspense;
                    za.suspense = void 0 === t ? null : t;
                    try {
                        i(e)
                    } finally {
                        za.suspense = r
                    }
                }), [e, t]), n
            },
            useTransition: function(e) {
                var t = Za(Ka),
                    r = t[0];
                return t = t[1], [cs(fs.bind(null, t, e), [t, e]), r]
            }
        },
        bs = null,
        xs = null,
        Es = !1;

    function Ss(e, t) {
        var r = wl(5, null, null, 0);
        r.elementType = "DELETED", r.type = "DELETED", r.stateNode = t, r.return = e, r.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r
    }

    function ks(e, t) {
        switch (e.tag) {
            case 5:
                var r = e.type;
                return null !== (t = 1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function ws(e) {
        if (Es) {
            var t = xs;
            if (t) {
                var r = t;
                if (!ks(e, t)) {
                    if (!(t = xr(r.nextSibling)) || !ks(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Es = !1, void(bs = e);
                    Ss(bs, r)
                }
                bs = e, xs = xr(t.firstChild)
            } else e.effectTag = -1025 & e.effectTag | 2, Es = !1, bs = e
        }
    }

    function Ps(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        bs = e
    }

    function Ts(e) {
        if (e !== bs) return !1;
        if (!Es) return Ps(e), Es = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !yr(t, e.memoizedProps))
            for (t = xs; t;) Ss(e, t), t = xr(t.nextSibling);
        if (Ps(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var r = e.data;
                        if ("/$" === r) {
                            if (0 === t) {
                                xs = xr(e.nextSibling);
                                break e
                            }
                            t--
                        } else "$" !== r && "$!" !== r && "$?" !== r || t++
                    }
                    e = e.nextSibling
                }
                xs = null
            }
        } else xs = bs ? xr(e.stateNode.nextSibling) : null;
        return !0
    }

    function As() {
        xs = bs = null, Es = !1
    }
    var _s = K.ReactCurrentOwner,
        Cs = !1;

    function Ms(e, t, r, n) {
        t.child = null === e ? Pa(t, null, r, n) : wa(t, e.child, r, n)
    }

    function Ds(e, t, r, n, i) {
        r = r.render;
        var a = t.ref;
        return ra(t, i), n = $a(e, t, r, n, a, i), null === e || Cs ? (t.effectTag |= 1, Ms(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), $s(e, t, i))
    }

    function Fs(e, t, r, n, i, a) {
        if (null === e) {
            var s = r.type;
            return "function" != typeof s || Pl(s) || void 0 !== s.defaultProps || null !== r.compare || void 0 !== r.defaultProps ? ((e = Al(r.type, null, n, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, Is(e, t, s, n, i, a))
        }
        return s = e.child, i < a && (i = s.memoizedProps, (r = null !== (r = r.compare) ? r : zn)(i, n) && e.ref === t.ref) ? $s(e, t, a) : (t.effectTag |= 1, (e = Tl(s, n)).ref = t.ref, e.return = t, t.child = e)
    }

    function Is(e, t, r, n, i, a) {
        return null !== e && zn(e.memoizedProps, n) && e.ref === t.ref && (Cs = !1, i < a) ? (t.expirationTime = e.expirationTime, $s(e, t, a)) : Ns(e, t, r, n, a)
    }

    function Rs(e, t) {
        var r = t.ref;
        (null === e && null !== r || null !== e && e.ref !== r) && (t.effectTag |= 128)
    }

    function Ns(e, t, r, n, i) {
        var a = mi(r) ? fi : ci.current;
        return a = di(t, a), ra(t, i), r = $a(e, t, r, n, a, i), null === e || Cs ? (t.effectTag |= 1, Ms(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), $s(e, t, i))
    }

    function Ls(e, t, r, n, i) {
        if (mi(r)) {
            var a = !0;
            bi(t)
        } else a = !1;
        if (ra(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), ya(t, r, n), ba(t, r, n, i), n = !0;
        else if (null === e) {
            var s = t.stateNode,
                o = t.memoizedProps;
            s.props = o;
            var l = s.context,
                h = r.contextType;
            "object" == typeof h && null !== h ? h = na(h) : h = di(t, h = mi(r) ? fi : ci.current);
            var u = r.getDerivedStateFromProps,
                c = "function" == typeof u || "function" == typeof s.getSnapshotBeforeUpdate;
            c || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (o !== n || l !== h) && va(t, s, n, h), ia = !1;
            var p = t.memoizedState;
            s.state = p, ua(t, n, s, i), l = t.memoizedState, o !== n || p !== l || pi.current || ia ? ("function" == typeof u && (da(t, r, u, n), l = t.memoizedState), (o = ia || ga(t, r, o, n, p, l, h)) ? (c || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), t.memoizedProps = n, t.memoizedState = l), s.props = n, s.state = l, s.context = h, n = o) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), n = !1)
        } else s = t.stateNode, sa(e, t), o = t.memoizedProps, s.props = t.type === t.elementType ? o : Qi(t.type, o), l = s.context, "object" == typeof(h = r.contextType) && null !== h ? h = na(h) : h = di(t, h = mi(r) ? fi : ci.current), (c = "function" == typeof(u = r.getDerivedStateFromProps) || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (o !== n || l !== h) && va(t, s, n, h), ia = !1, l = t.memoizedState, s.state = l, ua(t, n, s, i), p = t.memoizedState, o !== n || l !== p || pi.current || ia ? ("function" == typeof u && (da(t, r, u, n), p = t.memoizedState), (u = ia || ga(t, r, o, n, l, p, h)) ? (c || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(n, p, h), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(n, p, h)), "function" == typeof s.componentDidUpdate && (t.effectTag |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof s.componentDidUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = n, t.memoizedState = p), s.props = n, s.state = p, s.context = h, n = u) : ("function" != typeof s.componentDidUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), n = !1);
        return Vs(e, t, r, n, a, i)
    }

    function Vs(e, t, r, n, i, a) {
        Rs(e, t);
        var s = 0 != (64 & t.effectTag);
        if (!n && !s) return i && xi(t, r, !1), $s(e, t, a);
        n = t.stateNode, _s.current = t;
        var o = s && "function" != typeof r.getDerivedStateFromError ? null : n.render();
        return t.effectTag |= 1, null !== e && s ? (t.child = wa(t, e.child, null, a), t.child = wa(t, null, o, a)) : Ms(e, t, o, a), t.memoizedState = n.state, i && xi(t, r, !0), t.child
    }

    function Bs(e) {
        var t = e.stateNode;
        t.pendingContext ? yi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yi(0, t.context, !1), Da(e, t.containerInfo)
    }
    var zs, Os, Gs, Hs = {
        dehydrated: null,
        retryTime: 0
    };

    function js(e, t, r) {
        var n, i = t.mode,
            a = t.pendingProps,
            s = Na.current,
            o = !1;
        if ((n = 0 != (64 & t.effectTag)) || (n = 0 != (2 & s) && (null === e || null !== e.memoizedState)), n ? (o = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (s |= 1), hi(Na, 1 & s), null === e) {
            if (void 0 !== a.fallback && ws(t), o) {
                if (o = a.fallback, (a = _l(null, i, 0, null)).return = t, 0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                return (r = _l(o, i, r, null)).return = t, a.sibling = r, t.memoizedState = Hs, t.child = a, r
            }
            return i = a.children, t.memoizedState = null, t.child = Pa(t, null, i, r)
        }
        if (null !== e.memoizedState) {
            if (i = (e = e.child).sibling, o) {
                if (a = a.fallback, (r = Tl(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (o = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                    for (r.child = o; null !== o;) o.return = r, o = o.sibling;
                return (i = Tl(i, a)).return = t, r.sibling = i, r.childExpirationTime = 0, t.memoizedState = Hs, t.child = r, i
            }
            return r = wa(t, e.child, a.children, r), t.memoizedState = null, t.child = r
        }
        if (e = e.child, o) {
            if (o = a.fallback, (a = _l(null, i, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 == (2 & t.mode))
                for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
            return (r = _l(o, i, r, null)).return = t, a.sibling = r, r.effectTag |= 2, a.childExpirationTime = 0, t.memoizedState = Hs, t.child = a, r
        }
        return t.memoizedState = null, t.child = wa(t, e, a.children, r)
    }

    function Ws(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var r = e.alternate;
        null !== r && r.expirationTime < t && (r.expirationTime = t), ta(e.return, t)
    }

    function qs(e, t, r, n, i, a) {
        var s = e.memoizedState;
        null === s ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: r,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: a
        } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailExpiration = 0, s.tailMode = i, s.lastEffect = a)
    }

    function Us(e, t, r) {
        var n = t.pendingProps,
            i = n.revealOrder,
            a = n.tail;
        if (Ms(e, t, n.children, r), 0 != (2 & (n = Na.current))) n = 1 & n | 2, t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && Ws(e, r);
                else if (19 === e.tag) Ws(e, r);
                else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            n &= 1
        }
        if (hi(Na, n), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (r = t.child, i = null; null !== r;) null !== (e = r.alternate) && null === La(e) && (i = r), r = r.sibling;
                null === (r = i) ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), qs(t, !1, i, r, a, t.lastEffect);
                break;
            case "backwards":
                for (r = null, i = t.child, t.child = null; null !== i;) {
                    if (null !== (e = i.alternate) && null === La(e)) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = r, r = i, i = e
                }
                qs(t, !0, r, null, a, t.lastEffect);
                break;
            case "together":
                qs(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function $s(e, t, r) {
        null !== e && (t.dependencies = e.dependencies);
        var n = t.expirationTime;
        if (0 !== n && sl(n), t.childExpirationTime < r) return null;
        if (null !== e && t.child !== e.child) throw Error(s(153));
        if (null !== t.child) {
            for (r = Tl(e = t.child, e.pendingProps), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = Tl(e, e.pendingProps)).return = t;
            r.sibling = null
        }
        return t.child
    }

    function Qs(e, t) {
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
                null === r ? e.tail = null : r.sibling = null;
                break;
            case "collapsed":
                r = e.tail;
                for (var n = null; null !== r;) null !== r.alternate && (n = r), r = r.sibling;
                null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
    }

    function Ys(e, t, r) {
        var n = t.pendingProps;
        switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return mi(t.type) && gi(), null;
            case 3:
                return Fa(), li(pi), li(ci), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || !Ts(t) || (t.effectTag |= 4), null;
            case 5:
                Ra(t), r = Ma(Ca.current);
                var a = t.type;
                if (null !== e && null != t.stateNode) Os(e, t, a, n, r), e.ref !== t.ref && (t.effectTag |= 128);
                else {
                    if (!n) {
                        if (null === t.stateNode) throw Error(s(166));
                        return null
                    }
                    if (e = Ma(Aa.current), Ts(t)) {
                        n = t.stateNode, a = t.type;
                        var o = t.memoizedProps;
                        switch (n[kr] = t, n[wr] = o, a) {
                            case "iframe":
                            case "object":
                            case "embed":
                                $t("load", n);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Ke.length; e++) $t(Ke[e], n);
                                break;
                            case "source":
                                $t("error", n);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $t("error", n), $t("load", n);
                                break;
                            case "form":
                                $t("reset", n), $t("submit", n);
                                break;
                            case "details":
                                $t("toggle", n);
                                break;
                            case "input":
                                ke(n, o), $t("invalid", n), or(r, "onChange");
                                break;
                            case "select":
                                n._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, $t("invalid", n), or(r, "onChange");
                                break;
                            case "textarea":
                                De(n, o), $t("invalid", n), or(r, "onChange")
                        }
                        for (var l in ir(a, o), e = null, o)
                            if (o.hasOwnProperty(l)) {
                                var h = o[l];
                                "children" === l ? "string" == typeof h ? n.textContent !== h && (e = ["children", h]) : "number" == typeof h && n.textContent !== "" + h && (e = ["children", "" + h]) : w.hasOwnProperty(l) && null != h && or(r, l)
                            } switch (a) {
                            case "input":
                                xe(n), Te(n, o, !0);
                                break;
                            case "textarea":
                                xe(n), Ie(n);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof o.onClick && (n.onclick = lr)
                        }
                        r = e, t.updateQueue = r, null !== r && (t.effectTag |= 4)
                    } else {
                        switch (l = 9 === r.nodeType ? r : r.ownerDocument, e === sr && (e = Le(a)), e === sr ? "script" === a ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof n.is ? e = l.createElement(a, {
                                is: n.is
                            }) : (e = l.createElement(a), "select" === a && (l = e, n.multiple ? l.multiple = !0 : n.size && (l.size = n.size))) : e = l.createElementNS(e, a), e[kr] = t, e[wr] = n, zs(e, t), t.stateNode = e, l = ar(a, n), a) {
                            case "iframe":
                            case "object":
                            case "embed":
                                $t("load", e), h = n;
                                break;
                            case "video":
                            case "audio":
                                for (h = 0; h < Ke.length; h++) $t(Ke[h], e);
                                h = n;
                                break;
                            case "source":
                                $t("error", e), h = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $t("error", e), $t("load", e), h = n;
                                break;
                            case "form":
                                $t("reset", e), $t("submit", e), h = n;
                                break;
                            case "details":
                                $t("toggle", e), h = n;
                                break;
                            case "input":
                                ke(e, n), h = Se(e, n), $t("invalid", e), or(r, "onChange");
                                break;
                            case "option":
                                h = _e(e, n);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!n.multiple
                                }, h = i({}, n, {
                                    value: void 0
                                }), $t("invalid", e), or(r, "onChange");
                                break;
                            case "textarea":
                                De(e, n), h = Me(e, n), $t("invalid", e), or(r, "onChange");
                                break;
                            default:
                                h = n
                        }
                        ir(a, h);
                        var u = h;
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var c = u[o];
                                "style" === o ? rr(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && ze(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== a || "" !== c) && Oe(e, c) : "number" == typeof c && Oe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (w.hasOwnProperty(o) ? null != c && or(r, o) : null != c && X(e, o, c, l))
                            } switch (a) {
                            case "input":
                                xe(e), Te(e, n, !1);
                                break;
                            case "textarea":
                                xe(e), Ie(e);
                                break;
                            case "option":
                                null != n.value && e.setAttribute("value", "" + ve(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple, null != (r = n.value) ? Ce(e, !!n.multiple, r, !1) : null != n.defaultValue && Ce(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof h.onClick && (e.onclick = lr)
                        }
                        gr(a, n) && (t.effectTag |= 4)
                    }
                    null !== t.ref && (t.effectTag |= 128)
                }
                return null;
            case 6:
                if (e && null != t.stateNode) Gs(0, t, e.memoizedProps, n);
                else {
                    if ("string" != typeof n && null === t.stateNode) throw Error(s(166));
                    r = Ma(Ca.current), Ma(Aa.current), Ts(t) ? (r = t.stateNode, n = t.memoizedProps, r[kr] = t, r.nodeValue !== n && (t.effectTag |= 4)) : ((r = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(n))[kr] = t, t.stateNode = r)
                }
                return null;
            case 13:
                return li(Na), n = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = r, t) : (r = null !== n, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Ts(t) : (n = null !== (a = e.memoizedState), r || null === a || null !== (a = e.child.sibling) && (null !== (o = t.firstEffect) ? (t.firstEffect = a, a.nextEffect = o) : (t.firstEffect = t.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), r && !n && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Na.current) ? Ao === xo && (Ao = Eo) : (Ao !== xo && Ao !== Eo || (Ao = So), 0 !== Fo && null !== wo && (Il(wo, To), Rl(wo, Fo)))), (r || n) && (t.effectTag |= 4), null);
            case 4:
                return Fa(), null;
            case 10:
                return ea(t), null;
            case 17:
                return mi(t.type) && gi(), null;
            case 19:
                if (li(Na), null === (n = t.memoizedState)) return null;
                if (a = 0 != (64 & t.effectTag), null === (o = n.rendering)) {
                    if (a) Qs(n, !1);
                    else if (Ao !== xo || null !== e && 0 != (64 & e.effectTag))
                        for (o = t.child; null !== o;) {
                            if (null !== (e = La(o))) {
                                for (t.effectTag |= 64, Qs(n, !1), null !== (a = e.updateQueue) && (t.updateQueue = a, t.effectTag |= 4), null === n.lastEffect && (t.firstEffect = null), t.lastEffect = n.lastEffect, n = t.child; null !== n;) o = r, (a = n).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (e = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = o, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = e.childExpirationTime, a.expirationTime = e.expirationTime, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, o = e.dependencies, a.dependencies = null === o ? null : {
                                    expirationTime: o.expirationTime,
                                    firstContext: o.firstContext,
                                    responders: o.responders
                                }), n = n.sibling;
                                return hi(Na, 1 & Na.current | 2), t.child
                            }
                            o = o.sibling
                        }
                } else {
                    if (!a)
                        if (null !== (e = La(o))) {
                            if (t.effectTag |= 64, a = !0, null !== (r = e.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), Qs(n, !0), null === n.tail && "hidden" === n.tailMode && !o.alternate) return null !== (t = t.lastEffect = n.lastEffect) && (t.nextEffect = null), null
                        } else 2 * zi() - n.renderingStartTime > n.tailExpiration && 1 < r && (t.effectTag |= 64, a = !0, Qs(n, !1), t.expirationTime = t.childExpirationTime = r - 1);
                    n.isBackwards ? (o.sibling = t.child, t.child = o) : (null !== (r = n.last) ? r.sibling = o : t.child = o, n.last = o)
                }
                return null !== n.tail ? (0 === n.tailExpiration && (n.tailExpiration = zi() + 500), r = n.tail, n.rendering = r, n.tail = r.sibling, n.lastEffect = t.lastEffect, n.renderingStartTime = zi(), r.sibling = null, t = Na.current, hi(Na, a ? 1 & t | 2 : 1 & t), r) : null
        }
        throw Error(s(156, t.tag))
    }

    function Ks(e) {
        switch (e.tag) {
            case 1:
                mi(e.type) && gi();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (Fa(), li(pi), li(ci), 0 != (64 & (t = e.effectTag))) throw Error(s(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return Ra(e), null;
            case 13:
                return li(Na), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return li(Na), null;
            case 4:
                return Fa(), null;
            case 10:
                return ea(e), null;
            default:
                return null
        }
    }

    function Xs(e, t) {
        return {
            value: e,
            source: t,
            stack: ye(t)
        }
    }
    zs = function(e, t) {
        for (var r = t.child; null !== r;) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === t) break;
            for (; null === r.sibling;) {
                if (null === r.return || r.return === t) return;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
    }, Os = function(e, t, r, n, a) {
        var s = e.memoizedProps;
        if (s !== n) {
            var o, l, h = t.stateNode;
            switch (Ma(Aa.current), e = null, r) {
                case "input":
                    s = Se(h, s), n = Se(h, n), e = [];
                    break;
                case "option":
                    s = _e(h, s), n = _e(h, n), e = [];
                    break;
                case "select":
                    s = i({}, s, {
                        value: void 0
                    }), n = i({}, n, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    s = Me(h, s), n = Me(h, n), e = [];
                    break;
                default:
                    "function" != typeof s.onClick && "function" == typeof n.onClick && (h.onclick = lr)
            }
            for (o in ir(r, n), r = null, s)
                if (!n.hasOwnProperty(o) && s.hasOwnProperty(o) && null != s[o])
                    if ("style" === o)
                        for (l in h = s[o]) h.hasOwnProperty(l) && (r || (r = {}), r[l] = "");
                    else "dangerouslySetInnerHTML" !== o && "children" !== o && "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (w.hasOwnProperty(o) ? e || (e = []) : (e = e || []).push(o, null));
            for (o in n) {
                var u = n[o];
                if (h = null != s ? s[o] : void 0, n.hasOwnProperty(o) && u !== h && (null != u || null != h))
                    if ("style" === o)
                        if (h) {
                            for (l in h) !h.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r || (r = {}), r[l] = "");
                            for (l in u) u.hasOwnProperty(l) && h[l] !== u[l] && (r || (r = {}), r[l] = u[l])
                        } else r || (e || (e = []), e.push(o, r)), r = u;
                else "dangerouslySetInnerHTML" === o ? (u = u ? u.__html : void 0, h = h ? h.__html : void 0, null != u && h !== u && (e = e || []).push(o, u)) : "children" === o ? h === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(o, "" + u) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && (w.hasOwnProperty(o) ? (null != u && or(a, o), e || h === u || (e = [])) : (e = e || []).push(o, u))
            }
            r && (e = e || []).push("style", r), a = e, (t.updateQueue = a) && (t.effectTag |= 4)
        }
    }, Gs = function(e, t, r, n) {
        r !== n && (t.effectTag |= 4)
    };
    var Zs = "function" == typeof WeakSet ? WeakSet : Set;

    function Js(e, t) {
        var r = t.source,
            n = t.stack;
        null === n && null !== r && (n = ye(r)), null !== r && ge(r.type), t = t.value, null !== e && 1 === e.tag && ge(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function() {
                throw e
            }))
        }
    }

    function eo(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                vl(e, t)
            } else t.current = null
    }

    function to(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var r = e.memoizedProps,
                        n = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? r : Qi(t.type, r), n), e.__reactInternalSnapshotBeforeUpdate = t
                }
                return;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                return
        }
        throw Error(s(163))
    }

    function ro(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var r = t = t.next;
            do {
                if ((r.tag & e) === e) {
                    var n = r.destroy;
                    r.destroy = void 0, void 0 !== n && n()
                }
                r = r.next
            } while (r !== t)
        }
    }

    function no(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var r = t = t.next;
            do {
                if ((r.tag & e) === e) {
                    var n = r.create;
                    r.destroy = n()
                }
                r = r.next
            } while (r !== t)
        }
    }

    function io(e, t, r) {
        switch (r.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return void no(3, r);
            case 1:
                if (e = r.stateNode, 4 & r.effectTag)
                    if (null === t) e.componentDidMount();
                    else {
                        var n = r.elementType === r.type ? t.memoizedProps : Qi(r.type, t.memoizedProps);
                        e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                    } return void(null !== (t = r.updateQueue) && ca(r, t, e));
            case 3:
                if (null !== (t = r.updateQueue)) {
                    if (e = null, null !== r.child) switch (r.child.tag) {
                        case 5:
                            e = r.child.stateNode;
                            break;
                        case 1:
                            e = r.child.stateNode
                    }
                    ca(r, t, e)
                }
                return;
            case 5:
                return e = r.stateNode, void(null === t && 4 & r.effectTag && gr(r.type, r.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
                return;
            case 13:
                return void(null === r.memoizedState && (r = r.alternate, null !== r && (r = r.memoizedState, null !== r && (r = r.dehydrated, null !== r && Lt(r)))));
            case 19:
            case 17:
            case 20:
            case 21:
                return
        }
        throw Error(s(163))
    }

    function ao(e, t, r) {
        switch ("function" == typeof Sl && Sl(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var n = e.next;
                    Hi(97 < r ? 97 : r, (function() {
                        var e = n;
                        do {
                            var r = e.destroy;
                            if (void 0 !== r) {
                                var i = t;
                                try {
                                    r()
                                } catch (e) {
                                    vl(i, e)
                                }
                            }
                            e = e.next
                        } while (e !== n)
                    }))
                }
                break;
            case 1:
                eo(t), "function" == typeof(r = t.stateNode).componentWillUnmount && function(e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        vl(e, t)
                    }
                }(t, r);
                break;
            case 5:
                eo(t);
                break;
            case 4:
                ho(e, t, r)
        }
    }

    function so(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && so(t)
    }

    function oo(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function lo(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (oo(t)) {
                    var r = t;
                    break e
                }
                t = t.return
            }
            throw Error(s(160))
        }
        switch (t = r.stateNode, r.tag) {
            case 5:
                var n = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, n = !0;
                break;
            default:
                throw Error(s(161))
        }
        16 & r.effectTag && (Oe(t, ""), r.effectTag &= -17);e: t: for (r = e;;) {
            for (; null === r.sibling;) {
                if (null === r.return || oo(r.return)) {
                    r = null;
                    break e
                }
                r = r.return
            }
            for (r.sibling.return = r.return, r = r.sibling; 5 !== r.tag && 6 !== r.tag && 18 !== r.tag;) {
                if (2 & r.effectTag) continue t;
                if (null === r.child || 4 === r.tag) continue t;
                r.child.return = r, r = r.child
            }
            if (!(2 & r.effectTag)) {
                r = r.stateNode;
                break e
            }
        }
        n ? function e(t, r, n) {
            var i = t.tag,
                a = 5 === i || 6 === i;
            if (a) t = a ? t.stateNode : t.stateNode.instance, r ? 8 === n.nodeType ? n.parentNode.insertBefore(t, r) : n.insertBefore(t, r) : (8 === n.nodeType ? (r = n.parentNode).insertBefore(t, n) : (r = n).appendChild(t), null !== (n = n._reactRootContainer) && void 0 !== n || null !== r.onclick || (r.onclick = lr));
            else if (4 !== i && null !== (t = t.child))
                for (e(t, r, n), t = t.sibling; null !== t;) e(t, r, n), t = t.sibling
        }(e, r, t) : function e(t, r, n) {
            var i = t.tag,
                a = 5 === i || 6 === i;
            if (a) t = a ? t.stateNode : t.stateNode.instance, r ? n.insertBefore(t, r) : n.appendChild(t);
            else if (4 !== i && null !== (t = t.child))
                for (e(t, r, n), t = t.sibling; null !== t;) e(t, r, n), t = t.sibling
        }(e, r, t)
    }

    function ho(e, t, r) {
        for (var n, i, a = t, o = !1;;) {
            if (!o) {
                o = a.return;
                e: for (;;) {
                    if (null === o) throw Error(s(160));
                    switch (n = o.stateNode, o.tag) {
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                        case 4:
                            n = n.containerInfo, i = !0;
                            break e
                    }
                    o = o.return
                }
                o = !0
            }
            if (5 === a.tag || 6 === a.tag) {
                e: for (var l = e, h = a, u = r, c = h;;)
                    if (ao(l, c, u), null !== c.child && 4 !== c.tag) c.child.return = c, c = c.child;
                    else {
                        if (c === h) break e;
                        for (; null === c.sibling;) {
                            if (null === c.return || c.return === h) break e;
                            c = c.return
                        }
                        c.sibling.return = c.return, c = c.sibling
                    }i ? (l = n, h = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(h) : l.removeChild(h)) : n.removeChild(a.stateNode)
            }
            else if (4 === a.tag) {
                if (null !== a.child) {
                    n = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
                    continue
                }
            } else if (ao(e, a, r), null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === t) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === t) return;
                4 === (a = a.return).tag && (o = !1)
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function uo(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                return void ro(3, t);
            case 1:
                return;
            case 5:
                var r = t.stateNode;
                if (null != r) {
                    var n = t.memoizedProps,
                        i = null !== e ? e.memoizedProps : n;
                    e = t.type;
                    var a = t.updateQueue;
                    if (t.updateQueue = null, null !== a) {
                        for (r[wr] = n, "input" === e && "radio" === n.type && null != n.name && we(r, n), ar(e, i), t = ar(e, n), i = 0; i < a.length; i += 2) {
                            var o = a[i],
                                l = a[i + 1];
                            "style" === o ? rr(r, l) : "dangerouslySetInnerHTML" === o ? ze(r, l) : "children" === o ? Oe(r, l) : X(r, o, l, t)
                        }
                        switch (e) {
                            case "input":
                                Pe(r, n);
                                break;
                            case "textarea":
                                Fe(r, n);
                                break;
                            case "select":
                                t = r._wrapperState.wasMultiple, r._wrapperState.wasMultiple = !!n.multiple, null != (e = n.value) ? Ce(r, !!n.multiple, e, !1) : t !== !!n.multiple && (null != n.defaultValue ? Ce(r, !!n.multiple, n.defaultValue, !0) : Ce(r, !!n.multiple, n.multiple ? [] : "", !1))
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode) throw Error(s(162));
                return void(t.stateNode.nodeValue = t.memoizedProps);
            case 3:
                return void((t = t.stateNode).hydrate && (t.hydrate = !1, Lt(t.containerInfo)));
            case 12:
                return;
            case 13:
                if (r = t, null === t.memoizedState ? n = !1 : (n = !0, r = t.child, Ro = zi()), null !== r) e: for (e = r;;) {
                    if (5 === e.tag) a = e.stateNode, n ? "function" == typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, a.style.display = tr("display", i));
                    else if (6 === e.tag) e.stateNode.nodeValue = n ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (a = e.child.sibling).return = e, e = a;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === r) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === r) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                return void co(t);
            case 19:
                return void co(t);
            case 17:
                return
        }
        throw Error(s(163))
    }

    function co(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new Zs), t.forEach((function(t) {
                var n = xl.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n))
            }))
        }
    }
    var po = "function" == typeof WeakMap ? WeakMap : Map;

    function fo(e, t, r) {
        (r = oa(r, null)).tag = 3, r.payload = {
            element: null
        };
        var n = t.value;
        return r.callback = function() {
            Lo || (Lo = !0, Vo = n), Js(e, t)
        }, r
    }

    function mo(e, t, r) {
        (r = oa(r, null)).tag = 3;
        var n = e.type.getDerivedStateFromError;
        if ("function" == typeof n) {
            var i = t.value;
            r.payload = function() {
                return Js(e, t), n(i)
            }
        }
        var a = e.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (r.callback = function() {
            "function" != typeof n && (null === Bo ? Bo = new Set([this]) : Bo.add(this), Js(e, t));
            var r = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== r ? r : ""
            })
        }), r
    }
    var go, yo = Math.ceil,
        vo = K.ReactCurrentDispatcher,
        bo = K.ReactCurrentOwner,
        xo = 0,
        Eo = 3,
        So = 4,
        ko = 0,
        wo = null,
        Po = null,
        To = 0,
        Ao = xo,
        _o = null,
        Co = 1073741823,
        Mo = 1073741823,
        Do = null,
        Fo = 0,
        Io = !1,
        Ro = 0,
        No = null,
        Lo = !1,
        Vo = null,
        Bo = null,
        zo = !1,
        Oo = null,
        Go = 90,
        Ho = null,
        jo = 0,
        Wo = null,
        qo = 0;

    function Uo() {
        return 0 != (48 & ko) ? 1073741821 - (zi() / 10 | 0) : 0 !== qo ? qo : qo = 1073741821 - (zi() / 10 | 0)
    }

    function $o(e, t, r) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var n = Oi();
        if (0 == (4 & t)) return 99 === n ? 1073741823 : 1073741822;
        if (0 != (16 & ko)) return To;
        if (null !== r) e = $i(e, 0 | r.timeoutMs || 5e3, 250);
        else switch (n) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = $i(e, 150, 100);
                break;
            case 97:
            case 96:
                e = $i(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(s(326))
        }
        return null !== wo && e === To && --e, e
    }

    function Qo(e, t) {
        if (50 < jo) throw jo = 0, Wo = null, Error(s(185));
        if (null !== (e = Yo(e, t))) {
            var r = Oi();
            1073741823 === t ? 0 != (8 & ko) && 0 == (48 & ko) ? Jo(e) : (Xo(e), 0 === ko && qi()) : Xo(e), 0 == (4 & ko) || 98 !== r && 99 !== r || (null === Ho ? Ho = new Map([
                [e, t]
            ]) : (void 0 === (r = Ho.get(e)) || r > t) && Ho.set(e, t))
        }
    }

    function Yo(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var r = e.alternate;
        null !== r && r.expirationTime < t && (r.expirationTime = t);
        var n = e.return,
            i = null;
        if (null === n && 3 === e.tag) i = e.stateNode;
        else
            for (; null !== n;) {
                if (r = n.alternate, n.childExpirationTime < t && (n.childExpirationTime = t), null !== r && r.childExpirationTime < t && (r.childExpirationTime = t), null === n.return && 3 === n.tag) {
                    i = n.stateNode;
                    break
                }
                n = n.return
            }
        return null !== i && (wo === i && (sl(t), Ao === So && Il(i, To)), Rl(i, t)), i
    }

    function Ko(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Fl(e, t = e.firstPendingTime)) return t;
        var r = e.lastPingedTime;
        return 2 >= (e = r > (e = e.nextKnownPendingLevel) ? r : e) && t !== e ? 0 : e
    }

    function Xo(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Wi(Jo.bind(null, e));
        else {
            var t = Ko(e),
                r = e.callbackNode;
            if (0 === t) null !== r && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
            else {
                var n = Uo();
                if (1073741823 === t ? n = 99 : 1 === t || 2 === t ? n = 95 : n = 0 >= (n = 10 * (1073741821 - t) - 10 * (1073741821 - n)) ? 99 : 250 >= n ? 98 : 5250 >= n ? 97 : 95, null !== r) {
                    var i = e.callbackPriority;
                    if (e.callbackExpirationTime === t && i >= n) return;
                    r !== Fi && ki(r)
                }
                e.callbackExpirationTime = t, e.callbackPriority = n, t = 1073741823 === t ? Wi(Jo.bind(null, e)) : ji(n, Zo.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - zi()
                }), e.callbackNode = t
            }
        }
    }

    function Zo(e, t) {
        if (qo = 0, t) return Nl(e, t = Uo()), Xo(e), null;
        var r = Ko(e);
        if (0 !== r) {
            if (t = e.callbackNode, 0 != (48 & ko)) throw Error(s(327));
            if (ml(), e === wo && r === To || rl(e, r), null !== Po) {
                var n = ko;
                ko |= 16;
                for (var i = il();;) try {
                    ll();
                    break
                } catch (t) {
                    nl(e, t)
                }
                if (Ji(), ko = n, vo.current = i, 1 === Ao) throw t = _o, rl(e, r), Il(e, r), Xo(e), t;
                if (null === Po) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = r, n = Ao, wo = null, n) {
                    case xo:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Nl(e, 2 < r ? 2 : r);
                        break;
                    case Eo:
                        if (Il(e, r), r === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = cl(i)), 1073741823 === Co && 10 < (i = Ro + 500 - zi())) {
                            if (Io) {
                                var a = e.lastPingedTime;
                                if (0 === a || a >= r) {
                                    e.lastPingedTime = r, rl(e, r);
                                    break
                                }
                            }
                            if (0 !== (a = Ko(e)) && a !== r) break;
                            if (0 !== n && n !== r) {
                                e.lastPingedTime = n;
                                break
                            }
                            e.timeoutHandle = vr(pl.bind(null, e), i);
                            break
                        }
                        pl(e);
                        break;
                    case So:
                        if (Il(e, r), r === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = cl(i)), Io && (0 === (i = e.lastPingedTime) || i >= r)) {
                            e.lastPingedTime = r, rl(e, r);
                            break
                        }
                        if (0 !== (i = Ko(e)) && i !== r) break;
                        if (0 !== n && n !== r) {
                            e.lastPingedTime = n;
                            break
                        }
                        if (1073741823 !== Mo ? n = 10 * (1073741821 - Mo) - zi() : 1073741823 === Co ? n = 0 : (n = 10 * (1073741821 - Co) - 5e3, 0 > (n = (i = zi()) - n) && (n = 0), (r = 10 * (1073741821 - r) - i) < (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * yo(n / 1960)) - n) && (n = r)), 10 < n) {
                            e.timeoutHandle = vr(pl.bind(null, e), n);
                            break
                        }
                        pl(e);
                        break;
                    case 5:
                        if (1073741823 !== Co && null !== Do) {
                            a = Co;
                            var o = Do;
                            if (0 >= (n = 0 | o.busyMinDurationMs) ? n = 0 : (i = 0 | o.busyDelayMs, n = (a = zi() - (10 * (1073741821 - a) - (0 | o.timeoutMs || 5e3))) <= i ? 0 : i + n - a), 10 < n) {
                                Il(e, r), e.timeoutHandle = vr(pl.bind(null, e), n);
                                break
                            }
                        }
                        pl(e);
                        break;
                    default:
                        throw Error(s(329))
                }
                if (Xo(e), e.callbackNode === t) return Zo.bind(null, e)
            }
        }
        return null
    }

    function Jo(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, 0 != (48 & ko)) throw Error(s(327));
        if (ml(), e === wo && t === To || rl(e, t), null !== Po) {
            var r = ko;
            ko |= 16;
            for (var n = il();;) try {
                ol();
                break
            } catch (t) {
                nl(e, t)
            }
            if (Ji(), ko = r, vo.current = n, 1 === Ao) throw r = _o, rl(e, t), Il(e, t), Xo(e), r;
            if (null !== Po) throw Error(s(261));
            e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, wo = null, pl(e), Xo(e)
        }
        return null
    }

    function el(e, t) {
        var r = ko;
        ko |= 1;
        try {
            return e(t)
        } finally {
            0 === (ko = r) && qi()
        }
    }

    function tl(e, t) {
        var r = ko;
        ko &= -2, ko |= 8;
        try {
            return e(t)
        } finally {
            0 === (ko = r) && qi()
        }
    }

    function rl(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var r = e.timeoutHandle;
        if (-1 !== r && (e.timeoutHandle = -1, br(r)), null !== Po)
            for (r = Po.return; null !== r;) {
                var n = r;
                switch (n.tag) {
                    case 1:
                        null != (n = n.type.childContextTypes) && gi();
                        break;
                    case 3:
                        Fa(), li(pi), li(ci);
                        break;
                    case 5:
                        Ra(n);
                        break;
                    case 4:
                        Fa();
                        break;
                    case 13:
                    case 19:
                        li(Na);
                        break;
                    case 10:
                        ea(n)
                }
                r = r.return
            }
        wo = e, Po = Tl(e.current, null), To = t, Ao = xo, _o = null, Mo = Co = 1073741823, Do = null, Fo = 0, Io = !1
    }

    function nl(e, t) {
        for (;;) {
            try {
                if (Ji(), Ba.current = ms, Wa)
                    for (var r = Ga.memoizedState; null !== r;) {
                        var n = r.queue;
                        null !== n && (n.pending = null), r = r.next
                    }
                if (Oa = 0, ja = Ha = Ga = null, Wa = !1, null === Po || null === Po.return) return Ao = 1, _o = t, Po = null;
                e: {
                    var i = e,
                        a = Po.return,
                        s = Po,
                        o = t;
                    if (t = To, s.effectTag |= 2048, s.firstEffect = s.lastEffect = null, null !== o && "object" == typeof o && "function" == typeof o.then) {
                        var l = o;
                        if (0 == (2 & s.mode)) {
                            var h = s.alternate;
                            h ? (s.updateQueue = h.updateQueue, s.memoizedState = h.memoizedState, s.expirationTime = h.expirationTime) : (s.updateQueue = null, s.memoizedState = null)
                        }
                        var u = 0 != (1 & Na.current),
                            c = a;
                        do {
                            var p;
                            if (p = 13 === c.tag) {
                                var f = c.memoizedState;
                                if (null !== f) p = null !== f.dehydrated;
                                else {
                                    var d = c.memoizedProps;
                                    p = void 0 !== d.fallback && (!0 !== d.unstable_avoidThisFallback || !u)
                                }
                            }
                            if (p) {
                                var m = c.updateQueue;
                                if (null === m) {
                                    var g = new Set;
                                    g.add(l), c.updateQueue = g
                                } else m.add(l);
                                if (0 == (2 & c.mode)) {
                                    if (c.effectTag |= 64, s.effectTag &= -2981, 1 === s.tag)
                                        if (null === s.alternate) s.tag = 17;
                                        else {
                                            var y = oa(1073741823, null);
                                            y.tag = 2, la(s, y)
                                        } s.expirationTime = 1073741823;
                                    break e
                                }
                                o = void 0, s = t;
                                var v = i.pingCache;
                                if (null === v ? (v = i.pingCache = new po, o = new Set, v.set(l, o)) : void 0 === (o = v.get(l)) && (o = new Set, v.set(l, o)), !o.has(s)) {
                                    o.add(s);
                                    var b = bl.bind(null, i, l, s);
                                    l.then(b, b)
                                }
                                c.effectTag |= 4096, c.expirationTime = t;
                                break e
                            }
                            c = c.return
                        } while (null !== c);
                        o = Error((ge(s.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ye(s))
                    }
                    5 !== Ao && (Ao = 2),
                    o = Xs(o, s),
                    c = a;do {
                        switch (c.tag) {
                            case 3:
                                l = o, c.effectTag |= 4096, c.expirationTime = t, ha(c, fo(c, l, t));
                                break e;
                            case 1:
                                l = o;
                                var x = c.type,
                                    E = c.stateNode;
                                if (0 == (64 & c.effectTag) && ("function" == typeof x.getDerivedStateFromError || null !== E && "function" == typeof E.componentDidCatch && (null === Bo || !Bo.has(E)))) {
                                    c.effectTag |= 4096, c.expirationTime = t, ha(c, mo(c, l, t));
                                    break e
                                }
                        }
                        c = c.return
                    } while (null !== c)
                }
                Po = ul(Po)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function il() {
        var e = vo.current;
        return vo.current = ms, null === e ? ms : e
    }

    function al(e, t) {
        e < Co && 2 < e && (Co = e), null !== t && e < Mo && 2 < e && (Mo = e, Do = t)
    }

    function sl(e) {
        e > Fo && (Fo = e)
    }

    function ol() {
        for (; null !== Po;) Po = hl(Po)
    }

    function ll() {
        for (; null !== Po && !Ii();) Po = hl(Po)
    }

    function hl(e) {
        var t = go(e.alternate, e, To);
        return e.memoizedProps = e.pendingProps, null === t && (t = ul(e)), bo.current = null, t
    }

    function ul(e) {
        Po = e;
        do {
            var t = Po.alternate;
            if (e = Po.return, 0 == (2048 & Po.effectTag)) {
                if (t = Ys(t, Po, To), 1 === To || 1 !== Po.childExpirationTime) {
                    for (var r = 0, n = Po.child; null !== n;) {
                        var i = n.expirationTime,
                            a = n.childExpirationTime;
                        i > r && (r = i), a > r && (r = a), n = n.sibling
                    }
                    Po.childExpirationTime = r
                }
                if (null !== t) return t;
                null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Po.firstEffect), null !== Po.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Po.firstEffect), e.lastEffect = Po.lastEffect), 1 < Po.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Po : e.firstEffect = Po, e.lastEffect = Po))
            } else {
                if (null !== (t = Ks(Po))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = Po.sibling)) return t;
            Po = e
        } while (null !== Po);
        return Ao === xo && (Ao = 5), null
    }

    function cl(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function pl(e) {
        var t = Oi();
        return Hi(99, fl.bind(null, e, t)), null
    }

    function fl(e, t) {
        do {
            ml()
        } while (null !== Oo);
        if (0 != (48 & ko)) throw Error(s(327));
        var r = e.finishedWork,
            n = e.finishedExpirationTime;
        if (null === r) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, r === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var i = cl(r);
        if (e.firstPendingTime = i, n <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1), n <= e.lastPingedTime && (e.lastPingedTime = 0), n <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === wo && (Po = wo = null, To = 0), 1 < r.effectTag ? null !== r.lastEffect ? (r.lastEffect.nextEffect = r, i = r.firstEffect) : i = r : i = r.firstEffect, null !== i) {
            var a = ko;
            ko |= 32, bo.current = null, dr = Ut;
            var o = pr();
            if (fr(o)) {
                if ("selectionStart" in o) var l = {
                    start: o.selectionStart,
                    end: o.selectionEnd
                };
                else e: {
                    var h = (l = (l = o.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                    if (h && 0 !== h.rangeCount) {
                        l = h.anchorNode;
                        var u = h.anchorOffset,
                            c = h.focusNode;
                        h = h.focusOffset;
                        try {
                            l.nodeType, c.nodeType
                        } catch (e) {
                            l = null;
                            break e
                        }
                        var p = 0,
                            f = -1,
                            d = -1,
                            m = 0,
                            g = 0,
                            y = o,
                            v = null;
                        t: for (;;) {
                            for (var b; y !== l || 0 !== u && 3 !== y.nodeType || (f = p + u), y !== c || 0 !== h && 3 !== y.nodeType || (d = p + h), 3 === y.nodeType && (p += y.nodeValue.length), null !== (b = y.firstChild);) v = y, y = b;
                            for (;;) {
                                if (y === o) break t;
                                if (v === l && ++m === u && (f = p), v === c && ++g === h && (d = p), null !== (b = y.nextSibling)) break;
                                v = (y = v).parentNode
                            }
                            y = b
                        }
                        l = -1 === f || -1 === d ? null : {
                            start: f,
                            end: d
                        }
                    } else l = null
                }
                l = l || {
                    start: 0,
                    end: 0
                }
            } else l = null;
            mr = {
                activeElementDetached: null,
                focusedElem: o,
                selectionRange: l
            }, Ut = !1, No = i;
            do {
                try {
                    dl()
                } catch (e) {
                    if (null === No) throw Error(s(330));
                    vl(No, e), No = No.nextEffect
                }
            } while (null !== No);
            No = i;
            do {
                try {
                    for (o = e, l = t; null !== No;) {
                        var x = No.effectTag;
                        if (16 & x && Oe(No.stateNode, ""), 128 & x) {
                            var E = No.alternate;
                            if (null !== E) {
                                var S = E.ref;
                                null !== S && ("function" == typeof S ? S(null) : S.current = null)
                            }
                        }
                        switch (1038 & x) {
                            case 2:
                                lo(No), No.effectTag &= -3;
                                break;
                            case 6:
                                lo(No), No.effectTag &= -3, uo(No.alternate, No);
                                break;
                            case 1024:
                                No.effectTag &= -1025;
                                break;
                            case 1028:
                                No.effectTag &= -1025, uo(No.alternate, No);
                                break;
                            case 4:
                                uo(No.alternate, No);
                                break;
                            case 8:
                                ho(o, u = No, l), so(u)
                        }
                        No = No.nextEffect
                    }
                } catch (e) {
                    if (null === No) throw Error(s(330));
                    vl(No, e), No = No.nextEffect
                }
            } while (null !== No);
            if (S = mr, E = pr(), x = S.focusedElem, l = S.selectionRange, E !== x && x && x.ownerDocument && function e(t, r) {
                    return !(!t || !r) && (t === r || (!t || 3 !== t.nodeType) && (r && 3 === r.nodeType ? e(t, r.parentNode) : "contains" in t ? t.contains(r) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(r))))
                }(x.ownerDocument.documentElement, x)) {
                null !== l && fr(x) && (E = l.start, void 0 === (S = l.end) && (S = E), "selectionStart" in x ? (x.selectionStart = E, x.selectionEnd = Math.min(S, x.value.length)) : (S = (E = x.ownerDocument || document) && E.defaultView || window).getSelection && (S = S.getSelection(), u = x.textContent.length, o = Math.min(l.start, u), l = void 0 === l.end ? o : Math.min(l.end, u), !S.extend && o > l && (u = l, l = o, o = u), u = cr(x, o), c = cr(x, l), u && c && (1 !== S.rangeCount || S.anchorNode !== u.node || S.anchorOffset !== u.offset || S.focusNode !== c.node || S.focusOffset !== c.offset) && ((E = E.createRange()).setStart(u.node, u.offset), S.removeAllRanges(), o > l ? (S.addRange(E), S.extend(c.node, c.offset)) : (E.setEnd(c.node, c.offset), S.addRange(E))))), E = [];
                for (S = x; S = S.parentNode;) 1 === S.nodeType && E.push({
                    element: S,
                    left: S.scrollLeft,
                    top: S.scrollTop
                });
                for ("function" == typeof x.focus && x.focus(), x = 0; x < E.length; x++)(S = E[x]).element.scrollLeft = S.left, S.element.scrollTop = S.top
            }
            Ut = !!dr, mr = dr = null, e.current = r, No = i;
            do {
                try {
                    for (x = e; null !== No;) {
                        var k = No.effectTag;
                        if (36 & k && io(x, No.alternate, No), 128 & k) {
                            E = void 0;
                            var w = No.ref;
                            if (null !== w) {
                                var P = No.stateNode;
                                switch (No.tag) {
                                    case 5:
                                        E = P;
                                        break;
                                    default:
                                        E = P
                                }
                                "function" == typeof w ? w(E) : w.current = E
                            }
                        }
                        No = No.nextEffect
                    }
                } catch (e) {
                    if (null === No) throw Error(s(330));
                    vl(No, e), No = No.nextEffect
                }
            } while (null !== No);
            No = null, Ri(), ko = a
        } else e.current = r;
        if (zo) zo = !1, Oo = e, Go = t;
        else
            for (No = i; null !== No;) t = No.nextEffect, No.nextEffect = null, No = t;
        if (0 === (t = e.firstPendingTime) && (Bo = null), 1073741823 === t ? e === Wo ? jo++ : (jo = 0, Wo = e) : jo = 0, "function" == typeof El && El(r.stateNode, n), Xo(e), Lo) throw Lo = !1, e = Vo, Vo = null, e;
        return 0 != (8 & ko) || qi(), null
    }

    function dl() {
        for (; null !== No;) {
            var e = No.effectTag;
            0 != (256 & e) && to(No.alternate, No), 0 == (512 & e) || zo || (zo = !0, ji(97, (function() {
                return ml(), null
            }))), No = No.nextEffect
        }
    }

    function ml() {
        if (90 !== Go) {
            var e = 97 < Go ? 97 : Go;
            return Go = 90, Hi(e, gl)
        }
    }

    function gl() {
        if (null === Oo) return !1;
        var e = Oo;
        if (Oo = null, 0 != (48 & ko)) throw Error(s(331));
        var t = ko;
        for (ko |= 32, e = e.current.firstEffect; null !== e;) {
            try {
                var r = e;
                if (0 != (512 & r.effectTag)) switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        ro(5, r), no(5, r)
                }
            } catch (t) {
                if (null === e) throw Error(s(330));
                vl(e, t)
            }
            r = e.nextEffect, e.nextEffect = null, e = r
        }
        return ko = t, qi(), !0
    }

    function yl(e, t, r) {
        la(e, t = fo(e, t = Xs(r, t), 1073741823)), null !== (e = Yo(e, 1073741823)) && Xo(e)
    }

    function vl(e, t) {
        if (3 === e.tag) yl(e, e, t);
        else
            for (var r = e.return; null !== r;) {
                if (3 === r.tag) {
                    yl(r, e, t);
                    break
                }
                if (1 === r.tag) {
                    var n = r.stateNode;
                    if ("function" == typeof r.type.getDerivedStateFromError || "function" == typeof n.componentDidCatch && (null === Bo || !Bo.has(n))) {
                        la(r, e = mo(r, e = Xs(t, e), 1073741823)), null !== (r = Yo(r, 1073741823)) && Xo(r);
                        break
                    }
                }
                r = r.return
            }
    }

    function bl(e, t, r) {
        var n = e.pingCache;
        null !== n && n.delete(t), wo === e && To === r ? Ao === So || Ao === Eo && 1073741823 === Co && zi() - Ro < 500 ? rl(e, To) : Io = !0 : Fl(e, r) && (0 !== (t = e.lastPingedTime) && t < r || (e.lastPingedTime = r, Xo(e)))
    }

    function xl(e, t) {
        var r = e.stateNode;
        null !== r && r.delete(t), 0 === (t = 0) && (t = $o(t = Uo(), e, null)), null !== (e = Yo(e, t)) && Xo(e)
    }
    go = function(e, t, r) {
        var n = t.expirationTime;
        if (null !== e) {
            var i = t.pendingProps;
            if (e.memoizedProps !== i || pi.current) Cs = !0;
            else {
                if (n < r) {
                    switch (Cs = !1, t.tag) {
                        case 3:
                            Bs(t), As();
                            break;
                        case 5:
                            if (Ia(t), 4 & t.mode && 1 !== r && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            mi(t.type) && bi(t);
                            break;
                        case 4:
                            Da(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            n = t.memoizedProps.value, i = t.type._context, hi(Yi, i._currentValue), i._currentValue = n;
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (n = t.child.childExpirationTime) && n >= r ? js(e, t, r) : (hi(Na, 1 & Na.current), null !== (t = $s(e, t, r)) ? t.sibling : null);
                            hi(Na, 1 & Na.current);
                            break;
                        case 19:
                            if (n = t.childExpirationTime >= r, 0 != (64 & e.effectTag)) {
                                if (n) return Us(e, t, r);
                                t.effectTag |= 64
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), hi(Na, Na.current), !n) return null
                    }
                    return $s(e, t, r)
                }
                Cs = !1
            }
        } else Cs = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (n = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = di(t, ci.current), ra(t, r), i = $a(null, t, n, e, i, r), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                    if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mi(n)) {
                        var a = !0;
                        bi(t)
                    } else a = !1;
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, aa(t);
                    var o = n.getDerivedStateFromProps;
                    "function" == typeof o && da(t, n, o, e), i.updater = ma, t.stateNode = i, i._reactInternalFiber = t, ba(t, n, e, r), t = Vs(null, t, n, !0, a, r)
                } else t.tag = 0, Ms(null, t, i, r), t = t.child;
                return t;
            case 16:
                e: {
                    if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                            if (-1 === e._status) {
                                e._status = 0;
                                var t = e._ctor;
                                t = t(), e._result = t, t.then((function(t) {
                                    0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                }), (function(t) {
                                    0 === e._status && (e._status = 2, e._result = t)
                                }))
                            }
                        }(i), 1 !== i._status) throw i._result;
                    switch (i = i._result, t.type = i, a = t.tag = function(e) {
                            if ("function" == typeof e) return Pl(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === le) return 11;
                                if (e === ce) return 14
                            }
                            return 2
                        }(i), e = Qi(i, e), a) {
                        case 0:
                            t = Ns(null, t, i, e, r);
                            break e;
                        case 1:
                            t = Ls(null, t, i, e, r);
                            break e;
                        case 11:
                            t = Ds(null, t, i, e, r);
                            break e;
                        case 14:
                            t = Fs(null, t, i, Qi(i.type, e), n, r);
                            break e
                    }
                    throw Error(s(306, i, ""))
                }
                return t;
            case 0:
                return n = t.type, i = t.pendingProps, Ns(e, t, n, i = t.elementType === n ? i : Qi(n, i), r);
            case 1:
                return n = t.type, i = t.pendingProps, Ls(e, t, n, i = t.elementType === n ? i : Qi(n, i), r);
            case 3:
                if (Bs(t), n = t.updateQueue, null === e || null === n) throw Error(s(282));
                if (n = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, sa(e, t), ua(t, n, null, r), (n = t.memoizedState.element) === i) As(), t = $s(e, t, r);
                else {
                    if ((i = t.stateNode.hydrate) && (xs = xr(t.stateNode.containerInfo.firstChild), bs = t, i = Es = !0), i)
                        for (r = Pa(t, null, n, r), t.child = r; r;) r.effectTag = -3 & r.effectTag | 1024, r = r.sibling;
                    else Ms(e, t, n, r), As();
                    t = t.child
                }
                return t;
            case 5:
                return Ia(t), null === e && ws(t), n = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, o = i.children, yr(n, i) ? o = null : null !== a && yr(n, a) && (t.effectTag |= 16), Rs(e, t), 4 & t.mode && 1 !== r && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Ms(e, t, o, r), t = t.child), t;
            case 6:
                return null === e && ws(t), null;
            case 13:
                return js(e, t, r);
            case 4:
                return Da(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = wa(t, null, n, r) : Ms(e, t, n, r), t.child;
            case 11:
                return n = t.type, i = t.pendingProps, Ds(e, t, n, i = t.elementType === n ? i : Qi(n, i), r);
            case 7:
                return Ms(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
                return Ms(e, t, t.pendingProps.children, r), t.child;
            case 10:
                e: {
                    n = t.type._context,
                    i = t.pendingProps,
                    o = t.memoizedProps,
                    a = i.value;
                    var l = t.type._context;
                    if (hi(Yi, l._currentValue), l._currentValue = a, null !== o)
                        if (l = o.value, 0 === (a = Vn(l, a) ? 0 : 0 | ("function" == typeof n._calculateChangedBits ? n._calculateChangedBits(l, a) : 1073741823))) {
                            if (o.children === i.children && !pi.current) {
                                t = $s(e, t, r);
                                break e
                            }
                        } else
                            for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                var h = l.dependencies;
                                if (null !== h) {
                                    o = l.child;
                                    for (var u = h.firstContext; null !== u;) {
                                        if (u.context === n && 0 != (u.observedBits & a)) {
                                            1 === l.tag && ((u = oa(r, null)).tag = 2, la(l, u)), l.expirationTime < r && (l.expirationTime = r), null !== (u = l.alternate) && u.expirationTime < r && (u.expirationTime = r), ta(l.return, r), h.expirationTime < r && (h.expirationTime = r);
                                            break
                                        }
                                        u = u.next
                                    }
                                } else o = 10 === l.tag && l.type === t.type ? null : l.child;
                                if (null !== o) o.return = l;
                                else
                                    for (o = l; null !== o;) {
                                        if (o === t) {
                                            o = null;
                                            break
                                        }
                                        if (null !== (l = o.sibling)) {
                                            l.return = o.return, o = l;
                                            break
                                        }
                                        o = o.return
                                    }
                                l = o
                            }
                    Ms(e, t, i.children, r),
                    t = t.child
                }
                return t;
            case 9:
                return i = t.type, n = (a = t.pendingProps).children, ra(t, r), n = n(i = na(i, a.unstable_observedBits)), t.effectTag |= 1, Ms(e, t, n, r), t.child;
            case 14:
                return a = Qi(i = t.type, t.pendingProps), Fs(e, t, i, a = Qi(i.type, a), n, r);
            case 15:
                return Is(e, t, t.type, t.pendingProps, n, r);
            case 17:
                return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Qi(n, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, mi(n) ? (e = !0, bi(t)) : e = !1, ra(t, r), ya(t, n, i), ba(t, n, i, r), Vs(null, t, n, !0, e, r);
            case 19:
                return Us(e, t, r)
        }
        throw Error(s(156, t.tag))
    };
    var El = null,
        Sl = null;

    function kl(e, t, r, n) {
        this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function wl(e, t, r, n) {
        return new kl(e, t, r, n)
    }

    function Pl(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Tl(e, t) {
        var r = e.alternate;
        return null === r ? ((r = wl(e.tag, t, e.key, e.mode)).elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.effectTag = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.childExpirationTime = e.childExpirationTime, r.expirationTime = e.expirationTime, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
    }

    function Al(e, t, r, n, i, a) {
        var o = 2;
        if (n = e, "function" == typeof e) Pl(e) && (o = 1);
        else if ("string" == typeof e) o = 5;
        else e: switch (e) {
            case re:
                return _l(r.children, i, a, t);
            case oe:
                o = 8, i |= 7;
                break;
            case ne:
                o = 8, i |= 1;
                break;
            case ie:
                return (e = wl(12, r, t, 8 | i)).elementType = ie, e.type = ie, e.expirationTime = a, e;
            case he:
                return (e = wl(13, r, t, i)).type = he, e.elementType = he, e.expirationTime = a, e;
            case ue:
                return (e = wl(19, r, t, i)).elementType = ue, e.expirationTime = a, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case ae:
                        o = 10;
                        break e;
                    case se:
                        o = 9;
                        break e;
                    case le:
                        o = 11;
                        break e;
                    case ce:
                        o = 14;
                        break e;
                    case pe:
                        o = 16, n = null;
                        break e;
                    case fe:
                        o = 22;
                        break e
                }
                throw Error(s(130, null == e ? e : typeof e, ""))
        }
        return (t = wl(o, r, t, i)).elementType = e, t.type = n, t.expirationTime = a, t
    }

    function _l(e, t, r, n) {
        return (e = wl(7, e, n, t)).expirationTime = r, e
    }

    function Cl(e, t, r) {
        return (e = wl(6, e, null, t)).expirationTime = r, e
    }

    function Ml(e, t, r) {
        return (t = wl(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = r, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Dl(e, t, r) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Fl(e, t) {
        var r = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== r && r >= t && e <= t
    }

    function Il(e, t) {
        var r = e.firstSuspendedTime,
            n = e.lastSuspendedTime;
        r < t && (e.firstSuspendedTime = t), (n > t || 0 === r) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function Rl(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var r = e.firstSuspendedTime;
        0 !== r && (t >= r ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function Nl(e, t) {
        var r = e.lastExpiredTime;
        (0 === r || r > t) && (e.lastExpiredTime = t)
    }

    function Ll(e, t, r, n) {
        var i = t.current,
            a = Uo(),
            o = pa.suspense;
        a = $o(a, i, o);
        e: if (r) {
            t: {
                if (Je(r = r._reactInternalFiber) !== r || 1 !== r.tag) throw Error(s(170));
                var l = r;do {
                    switch (l.tag) {
                        case 3:
                            l = l.stateNode.context;
                            break t;
                        case 1:
                            if (mi(l.type)) {
                                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    l = l.return
                } while (null !== l);
                throw Error(s(171))
            }
            if (1 === r.tag) {
                var h = r.type;
                if (mi(h)) {
                    r = vi(r, h, l);
                    break e
                }
            }
            r = l
        }
        else r = ui;
        return null === t.context ? t.context = r : t.pendingContext = r, (t = oa(a, o)).payload = {
            element: e
        }, null !== (n = void 0 === n ? null : n) && (t.callback = n), la(i, t), Qo(i, a), a
    }

    function Vl(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Bl(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }

    function zl(e, t) {
        Bl(e, t), (e = e.alternate) && Bl(e, t)
    }

    function Ol(e, t, r) {
        var n = new Dl(e, t, r = null != r && !0 === r.hydrate),
            i = wl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        n.current = i, i.stateNode = n, aa(i), e[Pr] = n.current, r && 0 !== t && function(e, t) {
            var r = Ze(t);
            Tt.forEach((function(e) {
                dt(e, t, r)
            })), At.forEach((function(e) {
                dt(e, t, r)
            }))
        }(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = n
    }

    function Gl(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function Hl(e, t, r, n, i) {
        var a = r._reactRootContainer;
        if (a) {
            var s = a._internalRoot;
            if ("function" == typeof i) {
                var o = i;
                i = function() {
                    var e = Vl(s);
                    o.call(e)
                }
            }
            Ll(t, s, e, i)
        } else {
            if (a = r._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var r; r = e.lastChild;) e.removeChild(r);
                    return new Ol(e, 0, t ? {
                        hydrate: !0
                    } : void 0)
                }(r, n), s = a._internalRoot, "function" == typeof i) {
                var l = i;
                i = function() {
                    var e = Vl(s);
                    l.call(e)
                }
            }
            tl((function() {
                Ll(t, s, e, i)
            }))
        }
        return Vl(s)
    }

    function jl(e, t, r) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: te,
            key: null == n ? null : "" + n,
            children: e,
            containerInfo: t,
            implementation: r
        }
    }

    function Wl(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Gl(t)) throw Error(s(200));
        return jl(e, t, null, r)
    }
    Ol.prototype.render = function(e) {
        Ll(e, this._internalRoot, null, null)
    }, Ol.prototype.unmount = function() {
        var e = this._internalRoot,
            t = e.containerInfo;
        Ll(null, e, null, (function() {
            t[Pr] = null
        }))
    }, mt = function(e) {
        if (13 === e.tag) {
            var t = $i(Uo(), 150, 100);
            Qo(e, t), zl(e, t)
        }
    }, gt = function(e) {
        13 === e.tag && (Qo(e, 3), zl(e, 3))
    }, yt = function(e) {
        if (13 === e.tag) {
            var t = Uo();
            Qo(e, t = $o(t, e, null)), zl(e, t)
        }
    }, _ = function(e, t, r) {
        switch (t) {
            case "input":
                if (Pe(e, r), t = r.name, "radio" === r.type && null != t) {
                    for (r = e; r.parentNode;) r = r.parentNode;
                    for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                        var n = r[t];
                        if (n !== e && n.form === e.form) {
                            var i = Cr(n);
                            if (!i) throw Error(s(90));
                            Ee(n), Pe(n, i)
                        }
                    }
                }
                break;
            case "textarea":
                Fe(e, r);
                break;
            case "select":
                null != (t = r.value) && Ce(e, !!r.multiple, t, !1)
        }
    }, R = el, N = function(e, t, r, n, i) {
        var a = ko;
        ko |= 4;
        try {
            return Hi(98, e.bind(null, t, r, n, i))
        } finally {
            0 === (ko = a) && qi()
        }
    }, L = function() {
        0 == (49 & ko) && (function() {
            if (null !== Ho) {
                var e = Ho;
                Ho = null, e.forEach((function(e, t) {
                    Nl(t, e), Xo(t)
                })), qi()
            }
        }(), ml())
    }, V = function(e, t) {
        var r = ko;
        ko |= 2;
        try {
            return e(t)
        } finally {
            0 === (ko = r) && qi()
        }
    };
    var ql, Ul, $l = {
        Events: [Ar, _r, Cr, T, k, Lr, function(e) {
            it(e, Nr)
        }, F, I, Xt, ot, ml, {
            current: !1
        }]
    };
    Ul = (ql = {
            findFiberByHostInstance: Tr,
            bundleType: 0,
            version: "16.13.1",
            rendererPackageName: "react-dom"
        }).findFiberByHostInstance,
        function(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
                var r = t.inject(e);
                El = function(e) {
                    try {
                        t.onCommitFiberRoot(r, e, void 0, 64 == (64 & e.current.effectTag))
                    } catch (e) {}
                }, Sl = function(e) {
                    try {
                        t.onCommitFiberUnmount(r, e)
                    } catch (e) {}
                }
            } catch (e) {}
        }(i({}, ql, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: K.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = rt(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return Ul ? Ul(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        })), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $l, t.createPortal = Wl, t.findDOMNode = function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(s(188));
                throw Error(s(268, Object.keys(e)))
            }
            return e = null === (e = rt(t)) ? null : e.stateNode
        }, t.flushSync = function(e, t) {
            if (0 != (48 & ko)) throw Error(s(187));
            var r = ko;
            ko |= 1;
            try {
                return Hi(99, e.bind(null, t))
            } finally {
                ko = r, qi()
            }
        }, t.hydrate = function(e, t, r) {
            if (!Gl(t)) throw Error(s(200));
            return Hl(null, e, t, !0, r)
        }, t.render = function(e, t, r) {
            if (!Gl(t)) throw Error(s(200));
            return Hl(null, e, t, !1, r)
        }, t.unmountComponentAtNode = function(e) {
            if (!Gl(e)) throw Error(s(40));
            return !!e._reactRootContainer && (tl((function() {
                Hl(null, null, e, !1, (function() {
                    e._reactRootContainer = null, e[Pr] = null
                }))
            })), !0)
        }, t.unstable_batchedUpdates = el, t.unstable_createPortal = function(e, t) {
            return Wl(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
        }, t.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
            if (!Gl(r)) throw Error(s(200));
            if (null == e || void 0 === e._reactInternalFiber) throw Error(s(38));
            return Hl(e, t, r, !1, n)
        }, t.version = "16.13.1"
}, function(e, t, r) {
    "use strict";
    e.exports = r(10)
}, function(e, t, r) {
    "use strict";
    var n, i, a, s, o;
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var l = null,
            h = null,
            u = function() {
                if (null !== l) try {
                    var e = t.unstable_now();
                    l(!0, e), l = null
                } catch (e) {
                    throw setTimeout(u, 0), e
                }
            },
            c = Date.now();
        t.unstable_now = function() {
            return Date.now() - c
        }, n = function(e) {
            null !== l ? setTimeout(n, 0, e) : (l = e, setTimeout(u, 0))
        }, i = function(e, t) {
            h = setTimeout(e, t)
        }, a = function() {
            clearTimeout(h)
        }, s = function() {
            return !1
        }, o = t.unstable_forceFrameRate = function() {}
    } else {
        var p = window.performance,
            f = window.Date,
            d = window.setTimeout,
            m = window.clearTimeout;
        if ("undefined" != typeof console) {
            var g = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof p && "function" == typeof p.now) t.unstable_now = function() {
            return p.now()
        };
        else {
            var y = f.now();
            t.unstable_now = function() {
                return f.now() - y
            }
        }
        var v = !1,
            b = null,
            x = -1,
            E = 5,
            S = 0;
        s = function() {
            return t.unstable_now() >= S
        }, o = function() {}, t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : E = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var k = new MessageChannel,
            w = k.port2;
        k.port1.onmessage = function() {
            if (null !== b) {
                var e = t.unstable_now();
                S = e + E;
                try {
                    b(!0, e) ? w.postMessage(null) : (v = !1, b = null)
                } catch (e) {
                    throw w.postMessage(null), e
                }
            } else v = !1
        }, n = function(e) {
            b = e, v || (v = !0, w.postMessage(null))
        }, i = function(e, r) {
            x = d((function() {
                e(t.unstable_now())
            }), r)
        }, a = function() {
            m(x), x = -1
        }
    }

    function P(e, t) {
        var r = e.length;
        e.push(t);
        e: for (;;) {
            var n = r - 1 >>> 1,
                i = e[n];
            if (!(void 0 !== i && 0 < _(i, t))) break e;
            e[n] = t, e[r] = i, r = n
        }
    }

    function T(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function A(e) {
        var t = e[0];
        if (void 0 !== t) {
            var r = e.pop();
            if (r !== t) {
                e[0] = r;
                e: for (var n = 0, i = e.length; n < i;) {
                    var a = 2 * (n + 1) - 1,
                        s = e[a],
                        o = a + 1,
                        l = e[o];
                    if (void 0 !== s && 0 > _(s, r)) void 0 !== l && 0 > _(l, s) ? (e[n] = l, e[o] = r, n = o) : (e[n] = s, e[a] = r, n = a);
                    else {
                        if (!(void 0 !== l && 0 > _(l, r))) break e;
                        e[n] = l, e[o] = r, n = o
                    }
                }
            }
            return t
        }
        return null
    }

    function _(e, t) {
        var r = e.sortIndex - t.sortIndex;
        return 0 !== r ? r : e.id - t.id
    }
    var C = [],
        M = [],
        D = 1,
        F = null,
        I = 3,
        R = !1,
        N = !1,
        L = !1;

    function V(e) {
        for (var t = T(M); null !== t;) {
            if (null === t.callback) A(M);
            else {
                if (!(t.startTime <= e)) break;
                A(M), t.sortIndex = t.expirationTime, P(C, t)
            }
            t = T(M)
        }
    }

    function B(e) {
        if (L = !1, V(e), !N)
            if (null !== T(C)) N = !0, n(z);
            else {
                var t = T(M);
                null !== t && i(B, t.startTime - e)
            }
    }

    function z(e, r) {
        N = !1, L && (L = !1, a()), R = !0;
        var n = I;
        try {
            for (V(r), F = T(C); null !== F && (!(F.expirationTime > r) || e && !s());) {
                var o = F.callback;
                if (null !== o) {
                    F.callback = null, I = F.priorityLevel;
                    var l = o(F.expirationTime <= r);
                    r = t.unstable_now(), "function" == typeof l ? F.callback = l : F === T(C) && A(C), V(r)
                } else A(C);
                F = T(C)
            }
            if (null !== F) var h = !0;
            else {
                var u = T(M);
                null !== u && i(B, u.startTime - r), h = !1
            }
            return h
        } finally {
            F = null, I = n, R = !1
        }
    }

    function O(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }
    var G = o;
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
        e.callback = null
    }, t.unstable_continueExecution = function() {
        N || R || (N = !0, n(z))
    }, t.unstable_getCurrentPriorityLevel = function() {
        return I
    }, t.unstable_getFirstCallbackNode = function() {
        return T(C)
    }, t.unstable_next = function(e) {
        switch (I) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = I
        }
        var r = I;
        I = t;
        try {
            return e()
        } finally {
            I = r
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = G, t.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var r = I;
        I = e;
        try {
            return t()
        } finally {
            I = r
        }
    }, t.unstable_scheduleCallback = function(e, r, s) {
        var o = t.unstable_now();
        if ("object" == typeof s && null !== s) {
            var l = s.delay;
            l = "number" == typeof l && 0 < l ? o + l : o, s = "number" == typeof s.timeout ? s.timeout : O(e)
        } else s = O(e), l = o;
        return e = {
            id: D++,
            callback: r,
            priorityLevel: e,
            startTime: l,
            expirationTime: s = l + s,
            sortIndex: -1
        }, l > o ? (e.sortIndex = l, P(M, e), null === T(C) && e === T(M) && (L ? a() : L = !0, i(B, l - o))) : (e.sortIndex = s, P(C, e), N || R || (N = !0, n(z))), e
    }, t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        V(e);
        var r = T(C);
        return r !== F && null !== F && null !== r && null !== r.callback && r.startTime <= e && r.expirationTime < F.expirationTime || s()
    }, t.unstable_wrapCallback = function(e) {
        var t = I;
        return function() {
            var r = I;
            I = t;
            try {
                return e.apply(this, arguments)
            } finally {
                I = r
            }
        }
    }
}, , function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "undefined" != typeof navigator && function(e, t) {
        void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return t(e)
        }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window || {}, (function(window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bm_rounder = Math.round,
            bm_rnd, bm_pow = Math.pow,
            bm_sqrt = Math.sqrt,
            bm_abs = Math.abs,
            bm_floor = Math.floor,
            bm_max = Math.max,
            bm_min = Math.min,
            blitter = 10,
            BMMath = {};

        function ProjectInterface() {
            return {}
        }! function() {
            var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                r = t.length;
            for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        }(), BMMath.random = Math.random, BMMath.abs = function(e) {
            if ("object" === typeof e && e.length) {
                var t, r = createSizedArray(e.length),
                    n = e.length;
                for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
                return r
            }
            return Math.abs(e)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(e) {
            bm_rnd = e ? Math.round : function(e) {
                return e
            }
        }

        function styleDiv(e) {
            e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(e, t, r, n) {
            this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
        }

        function BMCompleteEvent(e, t) {
            this.type = e, this.direction = t < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(e, t, r, n) {
            this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(e, t, r) {
            this.type = e, this.firstFrame = t, this.totalFrames = r
        }

        function BMDestroyEvent(e, t) {
            this.type = e, this.target = t
        }

        function BMRenderFrameErrorEvent(e, t) {
            this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
        }

        function BMConfigErrorEvent(e) {
            this.type = "configError", this.nativeError = e
        }

        function BMAnimationConfigErrorEvent(e, t) {
            this.type = e, this.nativeError = t, this.currentTime = currentTime
        }
        roundValues(!1);
        var createElementID = (_count = 0, function() {
                return "__lottie_element_" + ++_count
            }),
            _count;

        function HSVtoRGB(e, t, r) {
            var n, i, a, s, o, l, h, u;
            switch (l = r * (1 - t), h = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
                case 0:
                    n = r, i = u, a = l;
                    break;
                case 1:
                    n = h, i = r, a = l;
                    break;
                case 2:
                    n = l, i = r, a = u;
                    break;
                case 3:
                    n = l, i = h, a = r;
                    break;
                case 4:
                    n = u, i = l, a = r;
                    break;
                case 5:
                    n = r, i = l, a = h
            }
            return [n, i, a]
        }

        function RGBtoHSV(e, t, r) {
            var n, i = Math.max(e, t, r),
                a = Math.min(e, t, r),
                s = i - a,
                o = 0 === i ? 0 : s / i,
                l = i / 255;
            switch (i) {
                case a:
                    n = 0;
                    break;
                case e:
                    n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
                    break;
                case t:
                    n = r - e + 2 * s, n /= 6 * s;
                    break;
                case r:
                    n = e - t + 4 * s, n /= 6 * s
            }
            return [n, o, l]
        }

        function addSaturationToRGB(e, t) {
            var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(e, t) {
            var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(e, t) {
            var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var e, t, r = [];
            for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = 1 == t.length ? "0" + t : t;
            return function(e, t, n) {
                return e < 0 && (e = 0), t < 0 && (t = 0), n < 0 && (n = 0), "#" + r[e] + r[t] + r[n]
            }
        }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(e, t) {
                if (this._cbs[e])
                    for (var r = this._cbs[e].length, n = 0; n < r; n++) this._cbs[e][n](t)
            },
            addEventListener: function(e, t) {
                return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
                    function() {
                        this.removeEventListener(e, t)
                    }.bind(this)
            },
            removeEventListener: function(e, t) {
                if (t) {
                    if (this._cbs[e]) {
                        for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
                        this._cbs[e].length || (this._cbs[e] = null)
                    }
                } else this._cbs[e] = null
            }
        };
        var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, t) {
            return "float32" === e ? new Float32Array(t) : "int16" === e ? new Int16Array(t) : "uint8c" === e ? new Uint8ClampedArray(t) : void 0
        } : function(e, t) {
            var r, n = 0,
                i = [];
            switch (e) {
                case "int16":
                case "uint8c":
                    r = 1;
                    break;
                default:
                    r = 1.1
            }
            for (n = 0; n < t; n += 1) i.push(r);
            return i
        };

        function createSizedArray(e) {
            return Array.apply(null, {
                length: e
            })
        }

        function createNS(e) {
            return document.createElementNS(svgNS, e)
        }

        function createTag(e) {
            return document.createElement(e)
        }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(e) {
                -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var e, t = this.dynamicProperties.length;
                for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(e) {
                this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function(e) {
                return blendModeEnums[e] || ""
            }),
            blendModeEnums, Matrix = function() {
                var e = Math.cos,
                    t = Math.sin,
                    r = Math.tan,
                    n = Math.round;

                function i() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                }

                function a(r) {
                    if (0 === r) return this;
                    var n = e(r),
                        i = t(r);
                    return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function s(r) {
                    if (0 === r) return this;
                    var n = e(r),
                        i = t(r);
                    return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
                }

                function o(r) {
                    if (0 === r) return this;
                    var n = e(r),
                        i = t(r);
                    return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
                }

                function l(r) {
                    if (0 === r) return this;
                    var n = e(r),
                        i = t(r);
                    return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function h(e, t) {
                    return this._t(1, t, e, 1, 0, 0)
                }

                function u(e, t) {
                    return this.shear(r(e), r(t))
                }

                function c(n, i) {
                    var a = e(i),
                        s = t(i);
                    return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function p(e, t, r) {
                    return r || 0 === r || (r = 1), 1 === e && 1 === t && 1 === r ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                }

                function f(e, t, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
                    return this.props[0] = e, this.props[1] = t, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = u, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                }

                function d(e, t, r) {
                    return r = r || 0, 0 !== e || 0 !== t || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, r, 1) : this
                }

                function m(e, t, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
                    var g = this.props;
                    if (1 === e && 0 === t && 0 === r && 0 === n && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === u && 0 === c) return g[12] = g[12] * e + g[15] * p, g[13] = g[13] * a + g[15] * f, g[14] = g[14] * u + g[15] * d, g[15] = g[15] * m, this._identityCalculated = !1, this;
                    var y = g[0],
                        v = g[1],
                        b = g[2],
                        x = g[3],
                        E = g[4],
                        S = g[5],
                        k = g[6],
                        w = g[7],
                        P = g[8],
                        T = g[9],
                        A = g[10],
                        _ = g[11],
                        C = g[12],
                        M = g[13],
                        D = g[14],
                        F = g[15];
                    return g[0] = y * e + v * i + b * l + x * p, g[1] = y * t + v * a + b * h + x * f, g[2] = y * r + v * s + b * u + x * d, g[3] = y * n + v * o + b * c + x * m, g[4] = E * e + S * i + k * l + w * p, g[5] = E * t + S * a + k * h + w * f, g[6] = E * r + S * s + k * u + w * d, g[7] = E * n + S * o + k * c + w * m, g[8] = P * e + T * i + A * l + _ * p, g[9] = P * t + T * a + A * h + _ * f, g[10] = P * r + T * s + A * u + _ * d, g[11] = P * n + T * o + A * c + _ * m, g[12] = C * e + M * i + D * l + F * p, g[13] = C * t + M * a + D * h + F * f, g[14] = C * r + M * s + D * u + F * d, g[15] = C * n + M * o + D * c + F * m, this._identityCalculated = !1, this
                }

                function g() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                }

                function y(e) {
                    for (var t = 0; t < 16;) {
                        if (e.props[t] !== this.props[t]) return !1;
                        t += 1
                    }
                    return !0
                }

                function v(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) e.props[t] = this.props[t]
                }

                function b(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) this.props[t] = e[t]
                }

                function x(e, t, r) {
                    return {
                        x: e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12],
                        y: e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13],
                        z: e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
                    }
                }

                function E(e, t, r) {
                    return e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12]
                }

                function S(e, t, r) {
                    return e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13]
                }

                function k(e, t, r) {
                    return e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
                }

                function w() {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        t = this.props[5] / e,
                        r = -this.props[1] / e,
                        n = -this.props[4] / e,
                        i = this.props[0] / e,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                        o = new Matrix;
                    return o.props[0] = t, o.props[1] = r, o.props[4] = n, o.props[5] = i, o.props[12] = a, o.props[13] = s, o
                }

                function P(e) {
                    return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0)
                }

                function T(e) {
                    var t, r = e.length,
                        n = [];
                    for (t = 0; t < r; t += 1) n[t] = P(e[t]);
                    return n
                }

                function A(e, t, r) {
                    var n = createTypedArray("float32", 6);
                    if (this.isIdentity()) n[0] = e[0], n[1] = e[1], n[2] = t[0], n[3] = t[1], n[4] = r[0], n[5] = r[1];
                    else {
                        var i = this.props[0],
                            a = this.props[1],
                            s = this.props[4],
                            o = this.props[5],
                            l = this.props[12],
                            h = this.props[13];
                        n[0] = e[0] * i + e[1] * s + l, n[1] = e[0] * a + e[1] * o + h, n[2] = t[0] * i + t[1] * s + l, n[3] = t[0] * a + t[1] * o + h, n[4] = r[0] * i + r[1] * s + l, n[5] = r[0] * a + r[1] * o + h
                    }
                    return n
                }

                function _(e, t, r) {
                    return this.isIdentity() ? [e, t, r] : [e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]]
                }

                function C(e, t) {
                    if (this.isIdentity()) return e + "," + t;
                    var r = this.props;
                    return Math.round(100 * (e * r[0] + t * r[4] + r[12])) / 100 + "," + Math.round(100 * (e * r[1] + t * r[5] + r[13])) / 100
                }

                function M() {
                    for (var e = 0, t = this.props, r = "matrix3d("; e < 16;) r += n(1e4 * t[e]) / 1e4, r += 15 === e ? ")" : ",", e += 1;
                    return r
                }

                function D(e) {
                    return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? n(1e4 * e) / 1e4 : e
                }

                function F() {
                    var e = this.props;
                    return "matrix(" + D(e[0]) + "," + D(e[1]) + "," + D(e[4]) + "," + D(e[5]) + "," + D(e[12]) + "," + D(e[13]) + ")"
                }
                return function() {
                    this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = c, this.shear = h, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = x, this.applyToX = E, this.applyToY = S, this.applyToZ = k, this.applyToPointArray = _, this.applyToTriplePoints = A, this.applyToPointStringified = C, this.toCSS = M, this.to2dCSS = F, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = T, this.inversePoint = P, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                }
            }();
        ! function(e, t) {
            var r = this,
                n = t.pow(256, 6),
                i = t.pow(2, 52),
                a = 2 * i;

            function s(e) {
                var t, r = e.length,
                    n = this,
                    i = 0,
                    a = n.i = n.j = 0,
                    s = n.S = [];
                for (r || (e = [r++]); i < 256;) s[i] = i++;
                for (i = 0; i < 256; i++) s[i] = s[a = 255 & a + e[i % r] + (t = s[i])], s[a] = t;
                n.g = function(e) {
                    for (var t, r = 0, i = n.i, a = n.j, s = n.S; e--;) t = s[i = 255 & i + 1], r = 256 * r + s[255 & (s[i] = s[a = 255 & a + t]) + (s[a] = t)];
                    return n.i = i, n.j = a, r
                }
            }

            function o(e, t) {
                return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
            }

            function l(e, t) {
                for (var r, n = e + "", i = 0; i < n.length;) t[255 & i] = 255 & (r ^= 19 * t[255 & i]) + n.charCodeAt(i++);
                return h(t)
            }

            function h(e) {
                return String.fromCharCode.apply(0, e)
            }
            t.seedrandom = function(u, c, p) {
                var f = [],
                    d = l(function e(t, r) {
                        var n, i = [],
                            a = typeof t;
                        if (r && "object" == a)
                            for (n in t) try {
                                i.push(e(t[n], r - 1))
                            } catch (e) {}
                        return i.length ? i : "string" == a ? t : t + "\0"
                    }((c = !0 === c ? {
                        entropy: !0
                    } : c || {}).entropy ? [u, h(e)] : null === u ? function() {
                        try {
                            void 0;
                            var t = new Uint8Array(256);
                            return (r.crypto || r.msCrypto).getRandomValues(t), h(t)
                        } catch (t) {
                            var n = r.navigator,
                                i = n && n.plugins;
                            return [+new Date, r, i, r.screen, h(e)]
                        }
                    }() : u, 3), f),
                    m = new s(f),
                    g = function() {
                        for (var e = m.g(6), t = n, r = 0; e < i;) e = 256 * (e + r), t *= 256, r = m.g(1);
                        for (; e >= a;) e /= 2, t /= 2, r >>>= 1;
                        return (e + r) / t
                    };
                return g.int32 = function() {
                    return 0 | m.g(4)
                }, g.quick = function() {
                    return m.g(4) / 4294967296
                }, g.double = g, l(h(m.S), e), (c.pass || p || function(e, r, n, i) {
                    return i && (i.S && o(i, m), e.state = function() {
                        return o(m, {})
                    }), n ? (t.random = e, r) : e
                })(g, d, "global" in c ? c.global : this == t, c.state)
            }, l(t.random(), e)
        }([], BMMath);
        var BezierFactory = function() {
            var e = {
                    getBezierEasing: function(e, r, n, i, a) {
                        var s = a || ("bez_" + e + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
                        if (t[s]) return t[s];
                        var o = new l([e, r, n, i]);
                        return t[s] = o, o
                    }
                },
                t = {};
            var r = "function" == typeof Float32Array;

            function n(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function a(e) {
                return 3 * e
            }

            function s(e, t, r) {
                return ((n(t, r) * e + i(t, r)) * e + a(t)) * e
            }

            function o(e, t, r) {
                return 3 * n(t, r) * e * e + 2 * i(t, r) * e + a(t)
            }

            function l(e) {
                this._p = e, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return l.prototype = {
                get: function(e) {
                    var t = this._p[0],
                        r = this._p[1],
                        n = this._p[2],
                        i = this._p[3];
                    return this._precomputed || this._precompute(), t === r && n === i ? e : 0 === e ? 0 : 1 === e ? 1 : s(this._getTForX(e), r, i)
                },
                _precompute: function() {
                    var e = this._p[0],
                        t = this._p[1],
                        r = this._p[2],
                        n = this._p[3];
                    this._precomputed = !0, e === t && r === n || this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var e = this._p[0], t = this._p[2], r = 0; r < 11; ++r) this._mSampleValues[r] = s(.1 * r, e, t)
                },
                _getTForX: function(e) {
                    for (var t = this._p[0], r = this._p[2], n = this._mSampleValues, i = 0, a = 1; 10 !== a && n[a] <= e; ++a) i += .1;
                    var l = i + .1 * ((e - n[--a]) / (n[a + 1] - n[a])),
                        h = o(l, t, r);
                    return h >= .001 ? function(e, t, r, n) {
                        for (var i = 0; i < 4; ++i) {
                            var a = o(t, r, n);
                            if (0 === a) return t;
                            t -= (s(t, r, n) - e) / a
                        }
                        return t
                    }(e, l, t, r) : 0 === h ? l : function(e, t, r, n, i) {
                        var a, o, l = 0;
                        do {
                            (a = s(o = t + (r - t) / 2, n, i) - e) > 0 ? r = o : t = o
                        } while (Math.abs(a) > 1e-7 && ++l < 10);
                        return o
                    }(e, i, i + .1, t, r)
                }
            }, e
        }();

        function extendPrototype(e, t) {
            var r, n, i = e.length;
            for (r = 0; r < i; r += 1)
                for (var a in n = e[r].prototype) n.hasOwnProperty(a) && (t.prototype[a] = n[a])
        }

        function getDescriptor(e, t) {
            return Object.getOwnPropertyDescriptor(e, t)
        }

        function createProxyFunction(e) {
            function t() {}
            return t.prototype = e, t
        }

        function bezFunction() {
            Math;

            function e(e, t, r, n, i, a) {
                var s = e * n + t * i + r * a - i * n - a * e - r * t;
                return s > -.001 && s < .001
            }
            var t = function(e, t, r, n) {
                var i, a, s, o, l, h, u = defaultCurveSegments,
                    c = 0,
                    p = [],
                    f = [],
                    d = bezier_length_pool.newElement();
                for (s = r.length, i = 0; i < u; i += 1) {
                    for (l = i / (u - 1), h = 0, a = 0; a < s; a += 1) o = bm_pow(1 - l, 3) * e[a] + 3 * bm_pow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bm_pow(l, 2) * n[a] + bm_pow(l, 3) * t[a], p[a] = o, null !== f[a] && (h += bm_pow(p[a] - f[a], 2)), f[a] = p[a];
                    h && (c += h = bm_sqrt(h)), d.percents[i] = l, d.lengths[i] = c
                }
                return d.addedLength = c, d
            };

            function r(e) {
                this.segmentLength = 0, this.points = new Array(e)
            }

            function n(e, t) {
                this.partialLength = e, this.point = t
            }
            var i, a = (i = {}, function(t, a, s, o) {
                var l = (t[0] + "_" + t[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                if (!i[l]) {
                    var h, u, c, p, f, d, m, g = defaultCurveSegments,
                        y = 0,
                        v = null;
                    2 === t.length && (t[0] != a[0] || t[1] != a[1]) && e(t[0], t[1], a[0], a[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (g = 2);
                    var b = new r(g);
                    for (c = s.length, h = 0; h < g; h += 1) {
                        for (m = createSizedArray(c), f = h / (g - 1), d = 0, u = 0; u < c; u += 1) p = bm_pow(1 - f, 3) * t[u] + 3 * bm_pow(1 - f, 2) * f * (t[u] + s[u]) + 3 * (1 - f) * bm_pow(f, 2) * (a[u] + o[u]) + bm_pow(f, 3) * a[u], m[u] = p, null !== v && (d += bm_pow(m[u] - v[u], 2));
                        y += d = bm_sqrt(d), b.points[h] = new n(d, m), v = m
                    }
                    b.segmentLength = y, i[l] = b
                }
                return i[l]
            });

            function s(e, t) {
                var r = t.percents,
                    n = t.lengths,
                    i = r.length,
                    a = bm_floor((i - 1) * e),
                    s = e * t.addedLength,
                    o = 0;
                if (a === i - 1 || 0 === a || s === n[a]) return r[a];
                for (var l = n[a] > s ? -1 : 1, h = !0; h;)
                    if (n[a] <= s && n[a + 1] > s ? (o = (s - n[a]) / (n[a + 1] - n[a]), h = !1) : a += l, a < 0 || a >= i - 1) {
                        if (a === i - 1) return r[a];
                        h = !1
                    } return r[a] + (r[a + 1] - r[a]) * o
            }
            var o = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(e) {
                    var r, n = segments_length_pool.newElement(),
                        i = e.c,
                        a = e.v,
                        s = e.o,
                        o = e.i,
                        l = e._length,
                        h = n.lengths,
                        u = 0;
                    for (r = 0; r < l - 1; r += 1) h[r] = t(a[r], a[r + 1], s[r], o[r + 1]), u += h[r].addedLength;
                    return i && l && (h[r] = t(a[r], a[0], s[r], o[0]), u += h[r].addedLength), n.totalLength = u, n
                },
                getNewSegment: function(e, t, r, n, i, a, l) {
                    var h, u = s(i = i < 0 ? 0 : i > 1 ? 1 : i, l),
                        c = s(a = a > 1 ? 1 : a, l),
                        p = e.length,
                        f = 1 - u,
                        d = 1 - c,
                        m = f * f * f,
                        g = u * f * f * 3,
                        y = u * u * f * 3,
                        v = u * u * u,
                        b = f * f * d,
                        x = u * f * d + f * u * d + f * f * c,
                        E = u * u * d + f * u * c + u * f * c,
                        S = u * u * c,
                        k = f * d * d,
                        w = u * d * d + f * c * d + f * d * c,
                        P = u * c * d + f * c * c + u * d * c,
                        T = u * c * c,
                        A = d * d * d,
                        _ = c * d * d + d * c * d + d * d * c,
                        C = c * c * d + d * c * c + c * d * c,
                        M = c * c * c;
                    for (h = 0; h < p; h += 1) o[4 * h] = Math.round(1e3 * (m * e[h] + g * r[h] + y * n[h] + v * t[h])) / 1e3, o[4 * h + 1] = Math.round(1e3 * (b * e[h] + x * r[h] + E * n[h] + S * t[h])) / 1e3, o[4 * h + 2] = Math.round(1e3 * (k * e[h] + w * r[h] + P * n[h] + T * t[h])) / 1e3, o[4 * h + 3] = Math.round(1e3 * (A * e[h] + _ * r[h] + C * n[h] + M * t[h])) / 1e3;
                    return o
                },
                getPointInSegment: function(e, t, r, n, i, a) {
                    var o = s(i, a),
                        l = 1 - o;
                    return [Math.round(1e3 * (l * l * l * e[0] + (o * l * l + l * o * l + l * l * o) * r[0] + (o * o * l + l * o * o + o * l * o) * n[0] + o * o * o * t[0])) / 1e3, Math.round(1e3 * (l * l * l * e[1] + (o * l * l + l * o * l + l * l * o) * r[1] + (o * o * l + l * o * o + o * l * o) * n[1] + o * o * o * t[1])) / 1e3]
                },
                buildBezierData: a,
                pointOnLine2D: e,
                pointOnLine3D: function(t, r, n, i, a, s, o, l, h) {
                    if (0 === n && 0 === s && 0 === h) return e(t, r, i, a, o, l);
                    var u, c = Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - r, 2) + Math.pow(s - n, 2)),
                        p = Math.sqrt(Math.pow(o - t, 2) + Math.pow(l - r, 2) + Math.pow(h - n, 2)),
                        f = Math.sqrt(Math.pow(o - i, 2) + Math.pow(l - a, 2) + Math.pow(h - s, 2));
                    return (u = c > p ? c > f ? c - p - f : f - p - c : f > p ? f - p - c : p - c - f) > -1e-4 && u < 1e-4
                }
            }
        }! function() {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[t[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[r] + "CancelAnimationFrame"] || window[t[r] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, r) {
                var n = (new Date).getTime(),
                    i = Math.max(0, 16 - (n - e)),
                    a = setTimeout((function() {
                        t(n + i)
                    }), i);
                return e = n + i, a
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }();
        var bez = bezFunction();

        function dataFunctionManager() {
            function e(i, a, s) {
                var o, l, h, c, p, f, d = i.length;
                for (l = 0; l < d; l += 1)
                    if ("ks" in (o = i[l]) && !o.completed) {
                        if (o.completed = !0, o.tt && (i[l - 1].td = o.tt), [], -1, o.hasMask) {
                            var m = o.masksProperties;
                            for (c = m.length, h = 0; h < c; h += 1)
                                if (m[h].pt.k.i) n(m[h].pt.k);
                                else
                                    for (f = m[h].pt.k.length, p = 0; p < f; p += 1) m[h].pt.k[p].s && n(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && n(m[h].pt.k[p].e[0])
                        }
                        0 === o.ty ? (o.layers = t(o.refId, a), e(o.layers, a, s)) : 4 === o.ty ? r(o.shapes) : 5 == o.ty && u(o, s)
                    }
            }

            function t(e, t) {
                for (var r = 0, n = t.length; r < n;) {
                    if (t[r].id === e) return t[r].layers.__used ? JSON.parse(JSON.stringify(t[r].layers)) : (t[r].layers.__used = !0, t[r].layers);
                    r += 1
                }
            }

            function r(e) {
                var t, i, a;
                for (t = e.length - 1; t >= 0; t -= 1)
                    if ("sh" == e[t].ty) {
                        if (e[t].ks.k.i) n(e[t].ks.k);
                        else
                            for (a = e[t].ks.k.length, i = 0; i < a; i += 1) e[t].ks.k[i].s && n(e[t].ks.k[i].s[0]), e[t].ks.k[i].e && n(e[t].ks.k[i].e[0]);
                        !0
                    } else "gr" == e[t].ty && r(e[t].it)
            }

            function n(e) {
                var t, r = e.i.length;
                for (t = 0; t < r; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1]
            }

            function i(e, t) {
                var r = t ? t.split(".") : [100, 100, 100];
                return e[0] > r[0] || !(r[0] > e[0]) && (e[1] > r[1] || !(r[1] > e[1]) && (e[2] > r[2] || !(r[2] > e[2]) && void 0))
            }
            var a, s = function() {
                    var e = [4, 4, 14];

                    function t(e) {
                        var t, r, n, i = e.length;
                        for (t = 0; t < i; t += 1) 5 === e[t].ty && (r = e[t], n = void 0, n = r.t.d, r.t.d = {
                            k: [{
                                s: n,
                                t: 0
                            }]
                        })
                    }
                    return function(r) {
                        if (i(e, r.v) && (t(r.layers), r.assets)) {
                            var n, a = r.assets.length;
                            for (n = 0; n < a; n += 1) r.assets[n].layers && t(r.assets[n].layers)
                        }
                    }
                }(),
                o = (a = [4, 7, 99], function(e) {
                    if (e.chars && !i(a, e.v)) {
                        var t, r, s, o, l, h = e.chars.length;
                        for (t = 0; t < h; t += 1)
                            if (e.chars[t].data && e.chars[t].data.shapes)
                                for (s = (l = e.chars[t].data.shapes[0].it).length, r = 0; r < s; r += 1)(o = l[r].ks.k).__converted || (n(l[r].ks.k), o.__converted = !0)
                    }
                }),
                l = function() {
                    var e = [4, 1, 9];

                    function t(e) {
                        var r, n, i, a = e.length;
                        for (r = 0; r < a; r += 1)
                            if ("gr" === e[r].ty) t(e[r].it);
                            else if ("fl" === e[r].ty || "st" === e[r].ty)
                            if (e[r].c.k && e[r].c.k[0].i)
                                for (i = e[r].c.k.length, n = 0; n < i; n += 1) e[r].c.k[n].s && (e[r].c.k[n].s[0] /= 255, e[r].c.k[n].s[1] /= 255, e[r].c.k[n].s[2] /= 255, e[r].c.k[n].s[3] /= 255), e[r].c.k[n].e && (e[r].c.k[n].e[0] /= 255, e[r].c.k[n].e[1] /= 255, e[r].c.k[n].e[2] /= 255, e[r].c.k[n].e[3] /= 255);
                            else e[r].c.k[0] /= 255, e[r].c.k[1] /= 255, e[r].c.k[2] /= 255, e[r].c.k[3] /= 255
                    }

                    function r(e) {
                        var r, n = e.length;
                        for (r = 0; r < n; r += 1) 4 === e[r].ty && t(e[r].shapes)
                    }
                    return function(t) {
                        if (i(e, t.v) && (r(t.layers), t.assets)) {
                            var n, a = t.assets.length;
                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                        }
                    }
                }(),
                h = function() {
                    var e = [4, 4, 18];

                    function t(e) {
                        var r, n, i;
                        for (r = e.length - 1; r >= 0; r -= 1)
                            if ("sh" == e[r].ty) {
                                if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                                else
                                    for (i = e[r].ks.k.length, n = 0; n < i; n += 1) e[r].ks.k[n].s && (e[r].ks.k[n].s[0].c = e[r].closed), e[r].ks.k[n].e && (e[r].ks.k[n].e[0].c = e[r].closed);
                                !0
                            } else "gr" == e[r].ty && t(e[r].it)
                    }

                    function r(e) {
                        var r, n, i, a, s, o, l = e.length;
                        for (n = 0; n < l; n += 1) {
                            if ((r = e[n]).hasMask) {
                                var h = r.masksProperties;
                                for (a = h.length, i = 0; i < a; i += 1)
                                    if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                    else
                                        for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl)
                            }
                            4 === r.ty && t(r.shapes)
                        }
                    }
                    return function(t) {
                        if (i(e, t.v) && (r(t.layers), t.assets)) {
                            var n, a = t.assets.length;
                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                        }
                    }
                }();

            function u(e, t) {
                0 !== e.t.a.length || "m" in e.t.p || (e.singleShape = !0)
            }
            var c = {
                completeData: function(t, r) {
                    t.__complete || (l(t), s(t), o(t), h(t), e(t.layers, t.assets, r), t.__complete = !0)
                }
            };
            return c.checkColors = l, c.checkChars = o, c.checkShapes = h, c.completeLayers = e, c
        }
        var dataManager = dataFunctionManager(),
            FontManager = function() {
                var e = {
                        w: 0,
                        size: 0,
                        shapes: []
                    },
                    t = [];

                function r(e, t) {
                    var r = createTag("span");
                    r.style.fontFamily = t;
                    var n = createTag("span");
                    n.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
                    var i = n.offsetWidth;
                    return n.style.fontFamily = function(e) {
                        var t, r = e.split(","),
                            n = r.length,
                            i = [];
                        for (t = 0; t < n; t += 1) "sans-serif" !== r[t] && "monospace" !== r[t] && i.push(r[t]);
                        return i.join(",")
                    }(e) + ", " + t, {
                        node: n,
                        w: i,
                        parent: r
                    }
                }

                function n(e, t) {
                    var r = createNS("text");
                    return r.style.fontSize = "100px", r.setAttribute("font-family", t.fFamily), r.setAttribute("font-style", t.fStyle), r.setAttribute("font-weight", t.fWeight), r.textContent = "1", t.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", t.fClass)) : r.style.fontFamily = t.fFamily, e.appendChild(r), createTag("canvas").getContext("2d").font = t.fWeight + " " + t.fStyle + " 100px " + t.fFamily, r
                }
                t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var i = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                return i.getCombinedCharacterCodes = function() {
                    return t
                }, i.prototype = {
                    addChars: function(e) {
                        if (e) {
                            this.chars || (this.chars = []);
                            var t, r, n, i = e.length,
                                a = this.chars.length;
                            for (t = 0; t < i; t += 1) {
                                for (r = 0, n = !1; r < a;) this.chars[r].style === e[t].style && this.chars[r].fFamily === e[t].fFamily && this.chars[r].ch === e[t].ch && (n = !0), r += 1;
                                n || (this.chars.push(e[t]), a += 1)
                            }
                        }
                    },
                    addFonts: function(e, t) {
                        if (e) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = e.list);
                            var i, a = e.list,
                                s = a.length,
                                o = s;
                            for (i = 0; i < s; i += 1) {
                                var l, h, u = !0;
                                if (a[i].loaded = !1, a[i].monoCase = r(a[i].fFamily, "monospace"), a[i].sansCase = r(a[i].fFamily, "sans-serif"), a[i].fPath) {
                                    if ("p" === a[i].fOrigin || 3 === a[i].origin) {
                                        if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[i].fFamily + '"], style[f-origin="3"][f-family="' + a[i].fFamily + '"]')).length > 0 && (u = !1), u) {
                                            var c = createTag("style");
                                            c.setAttribute("f-forigin", a[i].fOrigin), c.setAttribute("f-origin", a[i].origin), c.setAttribute("f-family", a[i].fFamily), c.type = "text/css", c.innerHTML = "@font-face {font-family: " + a[i].fFamily + "; font-style: normal; src: url('" + a[i].fPath + "');}", t.appendChild(c)
                                        }
                                    } else if ("g" === a[i].fOrigin || 1 === a[i].origin) {
                                        for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h++) - 1 !== l[h].href.indexOf(a[i].fPath) && (u = !1);
                                        if (u) {
                                            var p = createTag("link");
                                            p.setAttribute("f-forigin", a[i].fOrigin), p.setAttribute("f-origin", a[i].origin), p.type = "text/css", p.rel = "stylesheet", p.href = a[i].fPath, document.body.appendChild(p)
                                        }
                                    } else if ("t" === a[i].fOrigin || 2 === a[i].origin) {
                                        for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h++) a[i].fPath === l[h].src && (u = !1);
                                        if (u) {
                                            var f = createTag("link");
                                            f.setAttribute("f-forigin", a[i].fOrigin), f.setAttribute("f-origin", a[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", a[i].fPath), t.appendChild(f)
                                        }
                                    }
                                } else a[i].loaded = !0, o -= 1;
                                a[i].helper = n(t, a[i]), a[i].cache = {}, this.fonts.push(a[i])
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(t, r, n) {
                        for (var i = 0, a = this.chars.length; i < a;) {
                            if (this.chars[i].ch === t && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                            i += 1
                        }
                        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, r, n), e
                    },
                    getFontByName: function(e) {
                        for (var t = 0, r = this.fonts.length; t < r;) {
                            if (this.fonts[t].fName === e) return this.fonts[t];
                            t += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(e, t, r) {
                        var n = this.getFontByName(t),
                            i = e.charCodeAt(0);
                        if (!n.cache[i + 1]) {
                            var a = n.helper;
                            if (" " === e) {
                                a.textContent = "|" + e + "|";
                                var s = a.getComputedTextLength();
                                a.textContent = "||";
                                var o = a.getComputedTextLength();
                                n.cache[i + 1] = (s - o) / 100
                            } else a.textContent = e, n.cache[i + 1] = a.getComputedTextLength() / 100
                        }
                        return n.cache[i + 1] * r
                    },
                    checkLoadedFonts: function() {
                        var e, t, r, n = this.fonts.length,
                            i = n;
                        for (e = 0; e < n; e += 1) this.fonts[e].loaded ? i -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (t = this.fonts[e].monoCase.node, r = this.fonts[e].monoCase.w, t.offsetWidth !== r ? (i -= 1, this.fonts[e].loaded = !0) : (t = this.fonts[e].sansCase.node, r = this.fonts[e].sansCase.w, t.offsetWidth !== r && (i -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                        0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                }, i
            }(),
            PropertyFactory = function() {
                var e = initialDefaultFrame,
                    t = Math.abs;

                function r(e, t) {
                    var r, i = this.offsetTime;
                    "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                    for (var a, s, o, l, h, u, c, p, f = t.lastIndex, d = f, m = this.keyframes.length - 1, g = !0; g;) {
                        if (a = this.keyframes[d], s = this.keyframes[d + 1], d === m - 1 && e >= s.t - i) {
                            a.h && (a = s), f = 0;
                            break
                        }
                        if (s.t - i > e) {
                            f = d;
                            break
                        }
                        d < m - 1 ? d += 1 : (f = 0, g = !1)
                    }
                    var y, v = s.t - i,
                        b = a.t - i;
                    if (a.to) {
                        a.bezierData || (a.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                        var x = a.bezierData;
                        if (e >= v || e < b) {
                            var E = e >= v ? x.points.length - 1 : 0;
                            for (l = x.points[E].point.length, o = 0; o < l; o += 1) r[o] = x.points[E].point[o]
                        } else {
                            a.__fnct ? p = a.__fnct : (p = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = p), h = p((e - b) / (v - b));
                            var S, k = x.segmentLength * h,
                                w = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastAddedLength : 0;
                            for (c = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastPoint : 0, g = !0, u = x.points.length; g;) {
                                if (w += x.points[c].partialLength, 0 === k || 0 === h || c === x.points.length - 1) {
                                    for (l = x.points[c].point.length, o = 0; o < l; o += 1) r[o] = x.points[c].point[o];
                                    break
                                }
                                if (k >= w && k < w + x.points[c + 1].partialLength) {
                                    for (S = (k - w) / x.points[c + 1].partialLength, l = x.points[c].point.length, o = 0; o < l; o += 1) r[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * S;
                                    break
                                }
                                c < u - 1 ? c += 1 : g = !1
                            }
                            t._lastPoint = c, t._lastAddedLength = w - x.points[c].partialLength, t._lastKeyframeIndex = d
                        }
                    } else {
                        var P, T, A, _, C;
                        if (m = a.s.length, y = s.s || a.e, this.sh && 1 !== a.h)
                            if (e >= v) r[0] = y[0], r[1] = y[1], r[2] = y[2];
                            else if (e <= b) r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2];
                        else {
                            ! function(e, t) {
                                var r = t[0],
                                    n = t[1],
                                    i = t[2],
                                    a = t[3],
                                    s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
                                    o = Math.asin(2 * r * n + 2 * i * a),
                                    l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
                                e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
                            }(r, function(e, t, r) {
                                var n, i, a, s, o, l = [],
                                    h = e[0],
                                    u = e[1],
                                    c = e[2],
                                    p = e[3],
                                    f = t[0],
                                    d = t[1],
                                    m = t[2],
                                    g = t[3];
                                (i = h * f + u * d + c * m + p * g) < 0 && (i = -i, f = -f, d = -d, m = -m, g = -g);
                                1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r);
                                return l[0] = s * h + o * f, l[1] = s * u + o * d, l[2] = s * c + o * m, l[3] = s * p + o * g, l
                            }(n(a.s), n(y), (e - b) / (v - b)))
                        } else
                            for (d = 0; d < m; d += 1) 1 !== a.h && (e >= v ? h = 1 : e < b ? h = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? p = a.__fnct[d] : (P = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], T = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], A = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], _ = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], p = BezierFactory.getBezierEasing(P, T, A, _).get, a.__fnct[d] = p)) : a.__fnct ? p = a.__fnct : (P = a.o.x, T = a.o.y, A = a.i.x, _ = a.i.y, p = BezierFactory.getBezierEasing(P, T, A, _).get, a.__fnct = p), h = p((e - b) / (v - b)))), y = s.s || a.e, C = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * h, "multidimensional" === this.propType ? r[d] = C : r = C
                    }
                    return t.lastIndex = f, r
                }

                function n(e) {
                    var t = e[0] * degToRads,
                        r = e[1] * degToRads,
                        n = e[2] * degToRads,
                        i = Math.cos(t / 2),
                        a = Math.cos(r / 2),
                        s = Math.cos(n / 2),
                        o = Math.sin(t / 2),
                        l = Math.sin(r / 2),
                        h = Math.sin(n / 2);
                    return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h]
                }

                function i() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || this._caching.lastFrame !== e && (this._caching.lastFrame >= n && t >= n || this._caching.lastFrame < r && t < r))) {
                        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var i = this.interpolateValue(t, this._caching);
                        this.pv = i
                    }
                    return this._caching.lastFrame = t, this.pv
                }

                function a(e) {
                    var r;
                    if ("unidimensional" === this.propType) r = e * this.mult, t(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
                    else
                        for (var n = 0, i = this.v.length; n < i;) r = e[n] * this.mult, t(this.v[n] - r) > 1e-5 && (this.v[n] = r, this._mdf = !0), n += 1
                }

                function s() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e, t = this.effectsSequence.length,
                                r = this.kf ? this.pv : this.data.k;
                            for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function o(e) {
                    this.effectsSequence.push(e), this.container.addDynamicProperty(this)
                }

                function l(e, t, r, n) {
                    this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o
                }

                function h(e, t, r, n) {
                    this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var i, l = t.k.length;
                    this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l);
                    createTypedArray("float32", l);
                    for (this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o
                }

                function u(t, n, l, h) {
                    this.propType = "unidimensional", this.keyframes = n.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                        lastFrame: e,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.v = e, this.pv = e, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [i.bind(this)], this.addEffect = o
                }

                function c(t, n, l, h) {
                    this.propType = "multidimensional";
                    var u, c, p, f, d, m = n.k.length;
                    for (u = 0; u < m - 1; u += 1) n.k[u].to && n.k[u].s && n.k[u + 1] && n.k[u + 1].s && (c = n.k[u].s, p = n.k[u + 1].s, f = n.k[u].to, d = n.k[u].ti, (2 === c.length && (c[0] !== p[0] || c[1] !== p[1]) && bez.pointOnLine2D(c[0], c[1], p[0], p[1], c[0] + f[0], c[1] + f[1]) && bez.pointOnLine2D(c[0], c[1], p[0], p[1], p[0] + d[0], p[1] + d[1]) || 3 === c.length && (c[0] !== p[0] || c[1] !== p[1] || c[2] !== p[2]) && bez.pointOnLine3D(c[0], c[1], c[2], p[0], p[1], p[2], c[0] + f[0], c[1] + f[1], c[2] + f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], p[0], p[1], p[2], p[0] + d[0], p[1] + d[1], p[2] + d[2])) && (n.k[u].to = null, n.k[u].ti = null), c[0] === p[0] && c[1] === p[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === c.length || c[2] === p[2] && 0 === f[2] && 0 === d[2]) && (n.k[u].to = null, n.k[u].ti = null));
                    this.effectsSequence = [i.bind(this)], this.keyframes = n.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
                    var g = n.k[0].s.length;
                    for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), u = 0; u < g; u += 1) this.v[u] = e, this.pv[u] = e;
                    this._caching = {
                        lastFrame: e,
                        lastIndex: 0,
                        value: createTypedArray("float32", g)
                    }, this.addEffect = o
                }
                return {
                    getProp: function(e, t, r, n, i) {
                        var a;
                        if (t.k.length)
                            if ("number" == typeof t.k[0]) a = new h(e, t, n, i);
                            else switch (r) {
                                case 0:
                                    a = new u(e, t, n, i);
                                    break;
                                case 1:
                                    a = new c(e, t, n, i)
                            } else a = new l(e, t, n, i);
                        return a.effectsSequence.length && i.addDynamicProperty(a), a
                    }
                }
            }(),
            TransformPropertyFactory = function() {
                var e = [0, 0];

                function t(e, t, r) {
                    if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), t.rx) {
                        if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
                            var n, i = t.or.k.length;
                            for (n = 0; n < i; n += 1) t.or.k[n].to = t.or.k[n].ti = null
                        }
                        this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(e, t.r || {
                        k: 0
                    }, 0, degToRads, this);
                    t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return t.prototype = {
                    applyToMatrix: function(e) {
                        var t = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var r, n, i = this.elem.globalData.frameRate;
                                    if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        r = [], n = [];
                                        var a = this.px,
                                            s = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[1] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), n[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), n[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0)) : (r = [a.pv, s.pv], n[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime))
                                    } else r = n = e;
                                    this.v.rotate(-Math.atan2(r[1] - n[1], r[0] - n[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            if (this.r) {
                                if (this.r.effectsSequence.length) return;
                                this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                            } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(e) {
                    this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0
                }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(e, r, n) {
                        return new t(e, r, n)
                    }
                }
            }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(e, t) {
            this.c = e, this.setLength(t);
            for (var r = 0; r < t;) this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(e) {
            for (; this._maxLength < e;) this.doubleArrayLength();
            this._length = e
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(e, t, r, n, i) {
            var a;
            switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o
            }(!a[n] || a[n] && !i) && (a[n] = point_pool.newElement()), a[n][0] = e, a[n][1] = t
        }, ShapePath.prototype.setTripleAt = function(e, t, r, n, i, a, s, o) {
            this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
            var e = new ShapePath;
            e.setPathData(this.c, this._length);
            var t = this.v,
                r = this.o,
                n = this.i,
                i = 0;
            this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
            var a, s = this._length - 1,
                o = this._length;
            for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
            return e
        };
        var ShapePropertyFactory = function() {
                function e(e, t, r) {
                    var n, i, a, s, o, l, h, u, c, p = r.lastIndex,
                        f = this.keyframes;
                    if (e < f[0].t - this.offsetTime) n = f[0].s[0], a = !0, p = 0;
                    else if (e >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
                    else {
                        for (var d, m, g = p, y = f.length - 1, v = !0; v && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > e));) g < y - 1 ? g += 1 : v = !1;
                        if (p = g, !(a = 1 === d.h)) {
                            if (e >= m.t - this.offsetTime) u = 1;
                            else if (e < d.t - this.offsetTime) u = 0;
                            else {
                                var b;
                                d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), u = b((e - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                            }
                            i = m.s ? m.s[0] : d.e[0]
                        }
                        n = d.s[0]
                    }
                    for (l = t._length, h = n.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1)
                        for (o = 0; o < h; o += 1) c = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * u, t.i[s][o] = c, c = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * u, t.o[s][o] = c, c = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * u, t.v[s][o] = c
                }

                function t() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        t = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        n = this._caching.lastFrame;
                    return -999999 !== n && (n < t && e < t || n > r && e > r) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                }

                function r() {
                    this.paths = this.localShapeCollection
                }

                function n(e) {
                    (function(e, t) {
                        if (e._length !== t._length || e.c !== t.c) return !1;
                        var r, n = e._length;
                        for (r = 0; r < n; r += 1)
                            if (e.v[r][0] !== t.v[r][0] || e.v[r][1] !== t.v[r][1] || e.o[r][0] !== t.o[r][0] || e.o[r][1] !== t.o[r][1] || e.i[r][0] !== t.i[r][0] || e.i[r][1] !== t.i[r][1]) return !1;
                        return !0
                    })(this.v, e) || (this.v = shape_pool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function i() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                this.lock = !0, this._mdf = !1;
                                var e, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                    r = this.effectsSequence.length;
                                for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    else this._mdf = !1
                }

                function a(e, t, n) {
                    this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
                    var i = 3 === n ? t.pt.k : t.ks.k;
                    this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                }

                function s(e) {
                    this.effectsSequence.push(e), this.container.addDynamicProperty(this)
                }

                function o(e, n, i) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === i ? n.pt.k : n.ks.k, this.k = !0, this.kf = !0;
                    var a = this.keyframes[0].s[0].i.length;
                    this.keyframes[0].s[0].i[0].length;
                    this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = r, this._caching = {
                        lastFrame: -999999,
                        lastIndex: 0
                    }, this.effectsSequence = [t.bind(this)]
                }
                a.prototype.interpolateShape = e, a.prototype.getValue = i, a.prototype.setVValue = n, a.prototype.addEffect = s, o.prototype.getValue = i, o.prototype.interpolateShape = e, o.prototype.setVValue = n, o.prototype.addEffect = s;
                var l = function() {
                        var e = roundCorner;

                        function t(e, t) {
                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return t.prototype = {
                            reset: r,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function() {
                                var t = this.p.v[0],
                                    r = this.p.v[1],
                                    n = this.s.v[0] / 2,
                                    i = this.s.v[1] / 2,
                                    a = 3 !== this.d,
                                    s = this.v;
                                s.v[0][0] = t, s.v[0][1] = r - i, s.v[1][0] = a ? t + n : t - n, s.v[1][1] = r, s.v[2][0] = t, s.v[2][1] = r + i, s.v[3][0] = a ? t - n : t + n, s.v[3][1] = r, s.i[0][0] = a ? t - n * e : t + n * e, s.i[0][1] = r - i, s.i[1][0] = a ? t + n : t - n, s.i[1][1] = r - i * e, s.i[2][0] = a ? t + n * e : t - n * e, s.i[2][1] = r + i, s.i[3][0] = a ? t - n : t + n, s.i[3][1] = r + i * e, s.o[0][0] = a ? t + n * e : t - n * e, s.o[0][1] = r - i, s.o[1][0] = a ? t + n : t - n, s.o[1][1] = r + i * e, s.o[2][0] = a ? t - n * e : t + n * e, s.o[2][1] = r + i, s.o[3][0] = a ? t - n : t + n, s.o[3][1] = r - i * e
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(),
                    h = function() {
                        function e(e, t) {
                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return e.prototype = {
                            reset: r,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function() {
                                var e, t, r, n, i = 2 * Math.floor(this.pt.v),
                                    a = 2 * Math.PI / i,
                                    s = !0,
                                    o = this.or.v,
                                    l = this.ir.v,
                                    h = this.os.v,
                                    u = this.is.v,
                                    c = 2 * Math.PI * o / (2 * i),
                                    p = 2 * Math.PI * l / (2 * i),
                                    f = -Math.PI / 2;
                                f += this.r.v;
                                var d = 3 === this.data.d ? -1 : 1;
                                for (this.v._length = 0, e = 0; e < i; e += 1) {
                                    r = s ? h : u, n = s ? c : p;
                                    var m = (t = s ? o : l) * Math.cos(f),
                                        g = t * Math.sin(f),
                                        y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                        v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                    m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * n * r * d, g - v * n * r * d, m + y * n * r * d, g + v * n * r * d, e, !0), s = !s, f += a * d
                                }
                            },
                            convertPolygonToPath: function() {
                                var e, t = Math.floor(this.pt.v),
                                    r = 2 * Math.PI / t,
                                    n = this.or.v,
                                    i = this.os.v,
                                    a = 2 * Math.PI * n / (4 * t),
                                    s = -Math.PI / 2,
                                    o = 3 === this.data.d ? -1 : 1;
                                for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                                    var l = n * Math.cos(s),
                                        h = n * Math.sin(s),
                                        u = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                    l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - u * a * i * o, h - c * a * i * o, l + u * a * i * o, h + c * a * i * o, e, !0), s += r * o
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(),
                    u = function() {
                        function e(e, t) {
                            this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return e.prototype = {
                            convertRectToPath: function() {
                                var e = this.p.v[0],
                                    t = this.p.v[1],
                                    r = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    i = bm_min(r, n, this.r.v),
                                    a = i * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + r, t - n + i, e + r, t - n + i, e + r, t - n + a, 0, !0), this.v.setTripleAt(e + r, t + n - i, e + r, t + n - a, e + r, t + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(e + r - i, t + n, e + r - i, t + n, e + r - a, t + n, 2, !0), this.v.setTripleAt(e - r + i, t + n, e - r + a, t + n, e - r + i, t + n, 3, !0), this.v.setTripleAt(e - r, t + n - i, e - r, t + n - i, e - r, t + n - a, 4, !0), this.v.setTripleAt(e - r, t - n + i, e - r, t - n + a, e - r, t - n + i, 5, !0), this.v.setTripleAt(e - r + i, t - n, e - r + i, t - n, e - r + a, t - n, 6, !0), this.v.setTripleAt(e + r - i, t - n, e + r - a, t - n, e + r - i, t - n, 7, !0)) : (this.v.setTripleAt(e - r, t + n, e - r + a, t + n, e - r, t + n, 2), this.v.setTripleAt(e - r, t - n, e - r, t - n + a, e - r, t - n, 3))) : (this.v.setTripleAt(e + r, t - n + i, e + r, t - n + a, e + r, t - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(e + r - i, t - n, e + r - i, t - n, e + r - a, t - n, 1, !0), this.v.setTripleAt(e - r + i, t - n, e - r + a, t - n, e - r + i, t - n, 2, !0), this.v.setTripleAt(e - r, t - n + i, e - r, t - n + i, e - r, t - n + a, 3, !0), this.v.setTripleAt(e - r, t + n - i, e - r, t + n - a, e - r, t + n - i, 4, !0), this.v.setTripleAt(e - r + i, t + n, e - r + i, t + n, e - r + a, t + n, 5, !0), this.v.setTripleAt(e + r - i, t + n, e + r - a, t + n, e + r - i, t + n, 6, !0), this.v.setTripleAt(e + r, t + n - i, e + r, t + n - i, e + r, t + n - a, 7, !0)) : (this.v.setTripleAt(e - r, t - n, e - r + a, t - n, e - r, t - n, 1, !0), this.v.setTripleAt(e - r, t + n, e - r, t + n - a, e - r, t + n, 2, !0), this.v.setTripleAt(e + r, t + n, e + r - a, t + n, e + r, t + n, 3, !0)))
                            },
                            getValue: function(e) {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: r
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }();
                var c = {
                    getShapeProp: function(e, t, r) {
                        var n;
                        return 3 === r || 4 === r ? n = (3 === r ? t.pt : t.ks).k.length ? new o(e, t, r) : new a(e, t, r) : 5 === r ? n = new u(e, t) : 6 === r ? n = new l(e, t) : 7 === r && (n = new h(e, t)), n.k && e.addDynamicProperty(n), n
                    },
                    getConstructorFunction: function() {
                        return a
                    },
                    getKeyframedConstructorFunction: function() {
                        return o
                    }
                };
                return c
            }(),
            ShapeModifiers = function() {
                var e = {},
                    t = {};
                return e.registerModifier = function(e, r) {
                    t[e] || (t[e] = r)
                }, e.getModifier = function(e, r, n) {
                    return new t[e](r, n)
                }, e
            }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        function DashProperty(e, t, r, n) {
            this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
            var i, a, s = t.length || 0;
            for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
                n: t[i].n,
                p: a
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function GradientProperty(e, t, r) {
            this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
            var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
            this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
            if (!this.closed) {
                e.sh.container.addDynamicProperty(e.sh);
                var t = {
                    shape: e.sh,
                    data: e,
                    localShapeCollection: shapeCollection_pool.newShapeCollection()
                };
                this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(e, t) {
            this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
            this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(e) {
            e.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, n, i) {
            var a = [];
            t <= 1 ? a.push({
                s: e,
                e: t
            }) : e >= 1 ? a.push({
                s: e - 1,
                e: t - 1
            }) : (a.push({
                s: e,
                e: 1
            }), a.push({
                s: 0,
                e: t - 1
            }));
            var s, o, l = [],
                h = a.length;
            for (s = 0; s < h; s += 1) {
                var u, c;
                if ((o = a[s]).e * i < n || o.s * i > n + r);
                else u = o.s * i <= n ? 0 : (o.s * i - n) / r, c = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, c])
            }
            return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(e) {
            var t, r = e.length;
            for (t = 0; t < r; t += 1) segments_length_pool.release(e[t]);
            return e.length = 0, e
        }, TrimModifier.prototype.processShapes = function(e) {
            var t, r, n;
            if (this._mdf || e) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), (t = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + i) > (r = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + i)) {
                    var a = t;
                    t = r, r = a
                }
                t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
            } else t = this.sValue, r = this.eValue;
            var s, o, l, h, u, c, p = this.shapes.length,
                f = 0;
            if (r === t)
                for (s = 0; s < p; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection;
            else if (1 === r && 0 === t || 0 === r && 1 === t) {
                if (this._mdf)
                    for (s = 0; s < p; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
            } else {
                var d, m, g = [];
                for (s = 0; s < p; s += 1)
                    if ((d = this.shapes[s]).shape._mdf || this._mdf || e || 2 === this.m) {
                        if (l = (n = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                        else {
                            for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), h.push(u), c += u.totalLength;
                            d.totalShapeLength = c, d.pathsData = h
                        }
                        f += c, d.shape._mdf = !0
                    } else d.shape.paths = d.localShapeCollection;
                var y, v = t,
                    b = r,
                    x = 0;
                for (s = p - 1; s >= 0; s -= 1)
                    if ((d = this.shapes[s]).shape._mdf) {
                        for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (y = this.calculateShapeEdges(t, r, d.totalShapeLength, x, f), x += d.totalShapeLength) : y = [
                                [v, b]
                            ], l = y.length, o = 0; o < l; o += 1) {
                            v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength * b
                            }) : v >= 1 ? g.push({
                                s: d.totalShapeLength * (v - 1),
                                e: d.totalShapeLength * (b - 1)
                            }) : (g.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength
                            }), g.push({
                                s: 0,
                                e: d.totalShapeLength * (b - 1)
                            }));
                            var E = this.addShapes(d, g[0]);
                            if (g[0].s !== g[0].e) {
                                if (g.length > 1)
                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                        var S = E.pop();
                                        this.addPaths(E, m), E = this.addShapes(d, g[1], S)
                                    } else this.addPaths(E, m), E = this.addShapes(d, g[1]);
                                this.addPaths(E, m)
                            }
                        }
                        d.shape.paths = m
                    }
            }
        }, TrimModifier.prototype.addPaths = function(e, t) {
            var r, n = e.length;
            for (r = 0; r < n; r += 1) t.addShape(e[r])
        }, TrimModifier.prototype.addSegment = function(e, t, r, n, i, a, s) {
            i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, n) {
            t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(e, t, r) {
            var n, i, a, s, o, l, h, u, c = e.pathsData,
                p = e.shape.paths.shapes,
                f = e.shape.paths._length,
                d = 0,
                m = [],
                g = !0;
            for (r ? (o = r._length, u = r._length) : (r = shape_pool.newElement(), o = 0, u = 0), m.push(r), n = 0; n < f; n += 1) {
                for (l = c[n].lengths, r.c = p[n].c, a = p[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
                    if (d + (s = l[i - 1]).addedLength < t.s) d += s.addedLength, r.c = !1;
                    else {
                        if (d > t.e) {
                            r.c = !1;
                            break
                        }
                        t.s <= d && t.e >= d + s.addedLength ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[i], p[n].v[i], r, o, g), g = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[i], p[n].o[i - 1], p[n].i[i], (t.s - d) / s.addedLength, (t.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, o, g), g = !1, r.c = !1), d += s.addedLength, o += 1
                    } if (p[n].c && l.length) {
                    if (s = l[i - 1], d <= t.e) {
                        var y = l[i - 1].addedLength;
                        t.s <= d && t.e >= d + y ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[0], p[n].v[0], r, o, g), g = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[0], p[n].o[i - 1], p[n].i[0], (t.s - d) / y, (t.e - d) / y, l[i - 1]), this.addSegmentFromArray(h, r, o, g), g = !1, r.c = !1)
                    } else r.c = !1;
                    d += s.addedLength, o += 1
                }
                if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > t.e) break;
                n < f - 1 && (r = shape_pool.newElement(), g = !0, m.push(r), o = 0)
            }
            return m
        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(e, t) {
            var r = shape_pool.newElement();
            r.c = e.c;
            var n, i, a, s, o, l, h, u, c, p, f, d, m, g = e._length,
                y = 0;
            for (n = 0; n < g; n += 1) i = e.v[n], s = e.o[n], a = e.i[n], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== n && n !== g - 1 || e.c ? (o = 0 === n ? e.v[g - 1] : e.v[n - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = d = i[0] + (o[0] - i[0]) * h, c = m = i[1] - (i[1] - o[1]) * h, p = u - (u - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, r.setTripleAt(u, c, p, f, d, m, y), y += 1, o = n === g - 1 ? e.v[0] : e.v[n + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = p = i[0] + (o[0] - i[0]) * h, c = f = i[1] + (o[1] - i[1]) * h, d = u - (u - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, r.setTripleAt(u, c, p, f, d, m, y), y += 1) : (r.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], y), y += 1) : (r.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], y), y += 1);
            return r
        }, RoundCornersModifier.prototype.processShapes = function(e) {
            var t, r, n, i, a, s, o = this.shapes.length,
                l = this.rd.v;
            if (0 !== l)
                for (r = 0; r < o; r += 1) {
                    if ((a = this.shapes[r]).shape.paths, s = a.localShapeCollection, a.shape._mdf || this._mdf || e)
                        for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
                    a.shape.paths = a.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, n, i, a) {
            var s = a ? -1 : 1,
                o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
                l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
            e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
        }, RepeaterModifier.prototype.init = function(e, t, r, n) {
            this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]);
            for (; r > 0;) r -= 1, this._elements.unshift(t[r]), 1;
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(e) {
            var t, r = e.length;
            for (t = 0; t < r; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it)
        }, RepeaterModifier.prototype.cloneElements = function(e) {
            e.length;
            var t = JSON.parse(JSON.stringify(e));
            return this.resetElements(t), t
        }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
            var r, n = e.length;
            for (r = 0; r < n; r += 1) e[r]._render = t, "gr" === e[r].ty && this.changeGroupRender(e[r].it, t)
        }, RepeaterModifier.prototype.processShapes = function(e) {
            var t, r, n, i, a;
            if (this._mdf || e) {
                var s, o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                    for (; this._groups.length < o;) {
                        var l = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        l.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                    }
                    this.elem.reloadShapes()
                }
                for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) s = a < o, this._groups[n]._render = s, this.changeGroupRender(this._groups[n].it, s), a += 1;
                this._currentCopies = o;
                var h = this.o.v,
                    u = h % 1,
                    c = h > 0 ? Math.floor(h) : Math.ceil(h),
                    p = (this.tr.v.props, this.pMatrix.props),
                    f = this.rMatrix.props,
                    d = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var m, g, y = 0;
                if (h > 0) {
                    for (; y < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                    u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), y += u)
                } else if (h < 0) {
                    for (; y > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
                    u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), y -= u)
                }
                for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                    if (g = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== y) {
                        for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), m = 0; m < g; m += 1) r[m] = this.matrix.props[m];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), m = 0; m < g; m += 1) r[m] = this.matrix.props[m];
                    y += 1, a -= 1, n += i
                }
            } else
                for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i
        }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(e) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
            var e;
            for (e = 0; e < this._length; e += 1) shape_pool.release(this.shapes[e]);
            this._length = 0
        }, DashProperty.prototype.getValue = function(e) {
            if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
                var t = 0,
                    r = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < r; t += 1) "o" != this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(e, t) {
            for (var r = 0, n = this.o.length / 2; r < n;) {
                if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
                r += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var e = 0, t = this.data.k.k.length; e < t;) {
                    if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                    e += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(e) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
                var t, r, n, i = 4 * this.data.p;
                for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
                if (this.o.length)
                    for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
                this._mdf = !e
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function(e, t, r, n) {
                if (0 === t) return "";
                var i, a = e.o,
                    s = e.i,
                    o = e.v,
                    l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
                for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
                return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
            },
            ImagePreloader = function() {
                var e = function() {
                    var e = createTag("canvas");
                    e.width = 1, e.height = 1;
                    var t = e.getContext("2d");
                    return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e
                }();

                function t() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function r(e, t, r) {
                    var n = "";
                    if (e.e) n = e.p;
                    else if (t) {
                        var i = e.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = t + i
                    } else n = r, n += e.u ? e.u : "", n += e.p;
                    return n
                }

                function n(e) {
                    this._imageLoaded = t.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                }
                return n.prototype = {
                    loadAssets: function(e, t) {
                        this.imagesLoadedCb = t;
                        var r, n = e.length;
                        for (r = 0; r < n; r += 1) e[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(e[r])))
                    },
                    setAssetsPath: function(e) {
                        this.assetsPath = e || ""
                    },
                    setPath: function(e) {
                        this.path = e || ""
                    },
                    loaded: function() {
                        return this.totalImages === this.loadedAssets
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null, this.images.length = 0
                    },
                    getImage: function(e) {
                        for (var t = 0, r = this.images.length; t < r;) {
                            if (this.images[t].assetData === e) return this.images[t].img;
                            t += 1
                        }
                    },
                    createImgData: function(t) {
                        var n = r(t, this.assetsPath, this.path),
                            i = createTag("img");
                        i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                            a.img = e, this._imageLoaded()
                        }.bind(this), !1), i.src = n;
                        var a = {
                            img: i,
                            assetData: t
                        };
                        return a
                    },
                    createImageData: function(t) {
                        var n = r(t, this.assetsPath, this.path),
                            i = createNS("image");
                        i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                            a.img = e, this._imageLoaded()
                        }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", n);
                        var a = {
                            img: i,
                            assetData: t
                        };
                        return a
                    },
                    imageLoaded: t,
                    setCacheType: function(e) {
                        this._createImageData = "svg" === e ? this.createImageData.bind(this) : this.createImgData.bind(this)
                    }
                }, n
            }(),
            featureSupport = function() {
                var e = {
                    maskType: !0
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), e
            }(),
            filtersFactory = function() {
                var e = {};
                return e.createFilter = function(e) {
                    var t = createNS("filter");
                    return t.setAttribute("id", e), t.setAttribute("filterUnits", "objectBoundingBox"), t.setAttribute("x", "0%"), t.setAttribute("y", "0%"), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t
                }, e.createAlphaToLuminanceFilter = function() {
                    var e = createNS("feColorMatrix");
                    return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
                }, e
            }(),
            assetLoader = function() {
                function e(e) {
                    return e.response && "object" == typeof e.response ? e.response : e.response && "string" == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : void 0
                }
                return {
                    load: function(t, r, n) {
                        var i, a = new XMLHttpRequest;
                        a.open("GET", t, !0);
                        try {
                            a.responseType = "json"
                        } catch (e) {}
                        a.send(), a.onreadystatechange = function() {
                            if (4 == a.readyState)
                                if (200 == a.status) i = e(a), r(i);
                                else try {
                                    i = e(a), r(i)
                                } catch (e) {
                                    n && n(e)
                                }
                        }
                    }
                }
            }();

        function TextAnimatorProperty(e, t, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function TextAnimatorDataProperty(e, t, r) {
            var n = {
                    propType: !1
                },
                i = PropertyFactory.getProp,
                a = t.a;
            this.a = {
                r: a.r ? i(e, a.r, 0, degToRads, r) : n,
                rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
                ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
                sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
                sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
                s: a.s ? i(e, a.s, 1, .01, r) : n,
                a: a.a ? i(e, a.a, 1, 0, r) : n,
                o: a.o ? i(e, a.o, 0, .01, r) : n,
                p: a.p ? i(e, a.p, 1, 0, r) : n,
                sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
                sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
                fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
                fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
                fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
                fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
                t: a.t ? i(e, a.t, 0, 0, r) : n
            }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
        }

        function LetterProps(e, t, r, n, i, a) {
            this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
                o: !0,
                sw: !!t,
                sc: !!r,
                fc: !!n,
                m: !0,
                p: !0
            }
        }

        function TextProperty(e, t) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var e, t, r = this._textData.a.length,
                n = PropertyFactory.getProp;
            for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                f: n(this._elem, this._textData.p.f, 0, 0, this),
                l: n(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
            if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var r, n, i, a, s, o, l, h, u, c, p, f, d, m, g, y, v, b, x, E = this._moreOptions.alignment.v,
                    S = this._animatorsData,
                    k = this._textData,
                    w = this.mHelper,
                    P = this._renderType,
                    T = this.renderedLetters.length,
                    A = (this.data, e.l);
                if (this._hasMaskedPath) {
                    if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var _, C = x.v;
                        for (this._pathData.r && (C = C.reverse()), s = {
                                tLength: 0,
                                segments: []
                            }, a = C._length - 1, y = 0, i = 0; i < a; i += 1) _ = bez.buildBezierData(C.v[i], C.v[i + 1], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[i + 1][0] - C.v[i + 1][0], C.i[i + 1][1] - C.v[i + 1][1]]), s.tLength += _.segmentLength, s.segments.push(_), y += _.segmentLength;
                        i = a, x.v.c && (_ = bez.buildBezierData(C.v[i], C.v[0], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), s.tLength += _.segmentLength, s.segments.push(_), y += _.segmentLength), this._pathData.pi = s
                    }
                    if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, h = 0, u = !0, m = s.segments, o < 0 && x.v.c)
                        for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
                    f = (d = m[p].points)[c - 1], g = (l = d[c]).partialLength
                }
                a = A.length, r = 0, n = 0;
                var M, D, F, I, R = 1.2 * e.finalSize * .714,
                    N = !0;
                F = S.length;
                var L, V, B, z, O, G, H, j, W, q, U, $, Q, Y = -1,
                    K = o,
                    X = p,
                    Z = c,
                    J = -1,
                    ee = "",
                    te = this.defaultPropsArray;
                if (2 === e.j || 1 === e.j) {
                    var re = 0,
                        ne = 0,
                        ie = 2 === e.j ? -.5 : -1,
                        ae = 0,
                        se = !0;
                    for (i = 0; i < a; i += 1)
                        if (A[i].n) {
                            for (re && (re += ne); ae < i;) A[ae].animatorJustifyOffset = re, ae += 1;
                            re = 0, se = !0
                        } else {
                            for (D = 0; D < F; D += 1)(M = S[D].a).t.propType && (se && 2 === e.j && (ne += M.t.v * ie), (L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars)).length ? re += M.t.v * L[0] * ie : re += M.t.v * L * ie);
                            se = !1
                        } for (re && (re += ne); ae < i;) A[ae].animatorJustifyOffset = re, ae += 1
                }
                for (i = 0; i < a; i += 1) {
                    if (w.reset(), O = 1, A[i].n) r = 0, n += e.yOffset, n += N ? 1 : 0, o = K, N = !1, 0, this._hasMaskedPath && (c = Z, f = (d = m[p = X].points)[c - 1], g = (l = d[c]).partialLength, h = 0), Q = q = $ = ee = "", te = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (J !== A[i].line) {
                                switch (e.j) {
                                    case 1:
                                        o += y - e.lineWidths[A[i].line];
                                        break;
                                    case 2:
                                        o += (y - e.lineWidths[A[i].line]) / 2
                                }
                                J = A[i].line
                            }
                            Y !== A[i].ind && (A[Y] && (o += A[Y].extra), o += A[i].an / 2, Y = A[i].ind), o += E[0] * A[i].an / 200;
                            var oe = 0;
                            for (D = 0; D < F; D += 1)(M = S[D].a).p.propType && ((L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars)).length ? oe += M.p.v[0] * L[0] : oe += M.p.v[0] * L), M.a.propType && ((L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars)).length ? oe += M.a.v[0] * L[0] : oe += M.a.v[0] * L);
                            for (u = !0; u;) h + g >= o + oe || !d ? (v = (o + oe - h) / l.partialLength, B = f.point[0] + (l.point[0] - f.point[0]) * v, z = f.point[1] + (l.point[1] - f.point[1]) * v, w.translate(-E[0] * A[i].an / 200, -E[1] * R / 100), u = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : x.v.c ? (c = 0, d = m[p = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, g = (l = d[c]).partialLength));
                            V = A[i].an / 2 - A[i].add, w.translate(-V, 0, 0)
                        } else V = A[i].an / 2 - A[i].add, w.translate(-V, 0, 0), w.translate(-E[0] * A[i].an / 200, -E[1] * R / 100, 0);
                        for (A[i].l / 2, D = 0; D < F; D += 1)(M = S[D].a).t.propType && (L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars), 0 === r && 0 === e.j || (this._hasMaskedPath ? L.length ? o += M.t.v * L[0] : o += M.t.v * L : L.length ? r += M.t.v * L[0] : r += M.t.v * L));
                        for (A[i].l / 2, e.strokeWidthAnim && (H = e.sw || 0), e.strokeColorAnim && (G = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (j = [e.fc[0], e.fc[1], e.fc[2]]), D = 0; D < F; D += 1)(M = S[D].a).a.propType && ((L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars)).length ? w.translate(-M.a.v[0] * L[0], -M.a.v[1] * L[1], M.a.v[2] * L[2]) : w.translate(-M.a.v[0] * L, -M.a.v[1] * L, M.a.v[2] * L));
                        for (D = 0; D < F; D += 1)(M = S[D].a).s.propType && ((L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars)).length ? w.scale(1 + (M.s.v[0] - 1) * L[0], 1 + (M.s.v[1] - 1) * L[1], 1) : w.scale(1 + (M.s.v[0] - 1) * L, 1 + (M.s.v[1] - 1) * L, 1));
                        for (D = 0; D < F; D += 1) {
                            if (M = S[D].a, L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars), M.sk.propType && (L.length ? w.skewFromAxis(-M.sk.v * L[0], M.sa.v * L[1]) : w.skewFromAxis(-M.sk.v * L, M.sa.v * L)), M.r.propType && (L.length ? w.rotateZ(-M.r.v * L[2]) : w.rotateZ(-M.r.v * L)), M.ry.propType && (L.length ? w.rotateY(M.ry.v * L[1]) : w.rotateY(M.ry.v * L)), M.rx.propType && (L.length ? w.rotateX(M.rx.v * L[0]) : w.rotateX(M.rx.v * L)), M.o.propType && (L.length ? O += (M.o.v * L[0] - O) * L[0] : O += (M.o.v * L - O) * L), e.strokeWidthAnim && M.sw.propType && (L.length ? H += M.sw.v * L[0] : H += M.sw.v * L), e.strokeColorAnim && M.sc.propType)
                                for (W = 0; W < 3; W += 1) L.length ? G[W] = G[W] + (M.sc.v[W] - G[W]) * L[0] : G[W] = G[W] + (M.sc.v[W] - G[W]) * L;
                            if (e.fillColorAnim && e.fc) {
                                if (M.fc.propType)
                                    for (W = 0; W < 3; W += 1) L.length ? j[W] = j[W] + (M.fc.v[W] - j[W]) * L[0] : j[W] = j[W] + (M.fc.v[W] - j[W]) * L;
                                M.fh.propType && (j = L.length ? addHueToRGB(j, M.fh.v * L[0]) : addHueToRGB(j, M.fh.v * L)), M.fs.propType && (j = L.length ? addSaturationToRGB(j, M.fs.v * L[0]) : addSaturationToRGB(j, M.fs.v * L)), M.fb.propType && (j = L.length ? addBrightnessToRGB(j, M.fb.v * L[0]) : addBrightnessToRGB(j, M.fb.v * L))
                            }
                        }
                        for (D = 0; D < F; D += 1)(M = S[D].a).p.propType && (L = S[D].s.getMult(A[i].anIndexes[D], k.a[D].s.totalChars), this._hasMaskedPath ? L.length ? w.translate(0, M.p.v[1] * L[0], -M.p.v[2] * L[1]) : w.translate(0, M.p.v[1] * L, -M.p.v[2] * L) : L.length ? w.translate(M.p.v[0] * L[0], M.p.v[1] * L[1], -M.p.v[2] * L[2]) : w.translate(M.p.v[0] * L, M.p.v[1] * L, -M.p.v[2] * L));
                        if (e.strokeWidthAnim && (q = H < 0 ? 0 : H), e.strokeColorAnim && (U = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), e.fillColorAnim && e.fc && ($ = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                            if (w.translate(0, -e.ls), w.translate(0, E[1] * R / 100 + n, 0), k.p.p) {
                                b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                                var le = 180 * Math.atan(b) / Math.PI;
                                l.point[0] < f.point[0] && (le += 180), w.rotate(-le * Math.PI / 180)
                            }
                            w.translate(B, z, 0), o -= E[0] * A[i].an / 200, A[i + 1] && Y !== A[i + 1].ind && (o += A[i].an / 2, o += e.tr / 1e3 * e.finalSize)
                        } else {
                            switch (w.translate(r, n, 0), e.ps && w.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                                case 1:
                                    w.translate(A[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[A[i].line]), 0, 0);
                                    break;
                                case 2:
                                    w.translate(A[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[A[i].line]) / 2, 0, 0)
                            }
                            w.translate(0, -e.ls), w.translate(V, 0, 0), w.translate(E[0] * A[i].an / 200, E[1] * R / 100, 0), r += A[i].l + e.tr / 1e3 * e.finalSize
                        }
                        "html" === P ? ee = w.toCSS() : "svg" === P ? ee = w.to2dCSS() : te = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], Q = O
                    }
                    T <= i ? (I = new LetterProps(Q, q, U, $, ee, te), this.renderedLetters.push(I), T += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[i], this.lettersChangedFlag = I.update(Q, q, U, $, ee, te) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(e, t, r, n, i, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var s = !1;
            return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            return e
        }, TextProperty.prototype.setCurrentData = function(e) {
            e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(e) {
            this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(e) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var t = this.currentData,
                    r = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    this.lock = !0, this._mdf = !1;
                    var n, i = this.effectsSequence.length,
                        a = e || this.data.d.k[this.keysIndex].s;
                    for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
                    t !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && (e[r].s, !(r === n - 1 || e[r + 1].t > t));) r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(e) {
            for (var t, r = FontManager.getCombinedCharacterCodes(), n = [], i = 0, a = e.length; i < a;) t = e.charCodeAt(i), -1 !== r.indexOf(t) ? n[n.length - 1] += e.charAt(i) : t >= 55296 && t <= 56319 && (t = e.charCodeAt(i + 1)) >= 56320 && t <= 57343 ? (n.push(e.substr(i, 2)), ++i) : n.push(e.charAt(i)), i += 1;
            return n
        }, TextProperty.prototype.completeTextData = function(e) {
            e.__complete = !0;
            var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
                h = this.data,
                u = [],
                c = 0,
                p = h.m.g,
                f = 0,
                d = 0,
                m = 0,
                g = [],
                y = 0,
                v = 0,
                b = l.getFontByName(e.f),
                x = 0,
                E = b.fStyle ? b.fStyle.split(" ") : [],
                S = "normal",
                k = "normal";
            for (r = E.length, t = 0; t < r; t += 1) switch (E[t].toLowerCase()) {
                case "italic":
                    k = "italic";
                    break;
                case "bold":
                    S = "700";
                    break;
                case "black":
                    S = "900";
                    break;
                case "medium":
                    S = "500";
                    break;
                case "regular":
                case "normal":
                    S = "400";
                    break;
                case "light":
                case "thin":
                    S = "200"
            }
            e.fWeight = b.fWeight || S, e.fStyle = k, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
            var w, P = e.tr / 1e3 * e.finalSize;
            if (e.sz)
                for (var T, A, _ = !0, C = e.sz[0], M = e.sz[1]; _;) {
                    T = 0, y = 0, r = (A = this.buildFinalText(e.t)).length, P = e.tr / 1e3 * e.finalSize;
                    var D = -1;
                    for (t = 0; t < r; t += 1) w = A[t].charCodeAt(0), n = !1, " " === A[t] ? D = t : 13 !== w && 3 !== w || (y = 0, n = !0, T += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(A[t], b.fStyle, b.fFamily), x = n ? 0 : o.w * e.finalSize / 100) : x = l.measureText(A[t], e.f, e.finalSize), y + x > C && " " !== A[t] ? (-1 === D ? r += 1 : t = D, T += e.finalLineHeight || 1.2 * e.finalSize, A.splice(t, D === t ? 1 : 0, "\r"), D = -1, y = 0) : (y += x, y += P);
                    T += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && M < T ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = A, r = e.finalText.length, _ = !1)
                }
            y = -P, x = 0;
            var F, I = 0;
            for (t = 0; t < r; t += 1)
                if (n = !1, 13 === (w = (F = e.finalText[t]).charCodeAt(0)) || 3 === w ? (I = 0, g.push(y), v = y > v ? y : v, y = -2 * P, i = "", n = !0, m += 1) : i = F, l.chars ? (o = l.getCharData(F, b.fStyle, l.getFontByName(e.f).fFamily), x = n ? 0 : o.w * e.finalSize / 100) : x = l.measureText(i, e.f, e.finalSize), " " === F ? I += x + P : (y += x + P + I, I = 0), u.push({
                        l: x,
                        an: x,
                        add: f,
                        n: n,
                        anIndexes: [],
                        val: i,
                        line: m,
                        animatorJustifyOffset: 0
                    }), 2 == p) {
                    if (f += x, "" === i || " " === i || t === r - 1) {
                        for ("" !== i && " " !== i || (f -= x); d <= t;) u[d].an = f, u[d].ind = c, u[d].extra = x, d += 1;
                        c += 1, f = 0
                    }
                } else if (3 == p) {
                if (f += x, "" === i || t === r - 1) {
                    for ("" === i && (f -= x); d <= t;) u[d].an = f, u[d].ind = c, u[d].extra = x, d += 1;
                    f = 0, c += 1
                }
            } else u[c].ind = c, u[c].extra = 0, c += 1;
            if (e.l = u, v = y > v ? y : v, g.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
            else switch (e.boxWidth = v, e.j) {
                case 1:
                    e.justifyOffset = -e.boxWidth;
                    break;
                case 2:
                    e.justifyOffset = -e.boxWidth / 2;
                    break;
                default:
                    e.justifyOffset = 0
            }
            e.lineWidths = g;
            var R, N, L = h.a;
            s = L.length;
            var V, B, z = [];
            for (a = 0; a < s; a += 1) {
                for ((R = L[a]).a.sc && (e.strokeColorAnim = !0), R.a.sw && (e.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (e.fillColorAnim = !0), B = 0, V = R.s.b, t = 0; t < r; t += 1)(N = u[t]).anIndexes[a] = B, (1 == V && "" !== N.val || 2 == V && "" !== N.val && " " !== N.val || 3 == V && (N.n || " " == N.val || t == r - 1) || 4 == V && (N.n || t == r - 1)) && (1 === R.s.rn && z.push(B), B += 1);
                h.a[a].s.totalChars = B;
                var O, G = -1;
                if (1 === R.s.rn)
                    for (t = 0; t < r; t += 1) G != (N = u[t]).anIndexes[a] && (G = N.anIndexes[a], O = z.splice(Math.floor(Math.random() * z.length), 1)[0]), N.anIndexes[a] = O
            }
            e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(e, t) {
            t = void 0 === t ? this.keysIndex : t;
            var r = this.copyData({}, this.data.d.k[t].s);
            r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(e) {
            var t = this.data.d.k[e].s;
            t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
        }, TextProperty.prototype.canResizeFont = function(e) {
            this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(e) {
            this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
                var e = Math.max,
                    t = Math.min,
                    r = Math.floor;

                function n(e, t) {
                    this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(e, t.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || {
                        k: 0
                    }, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return n.prototype = {
                    getMult: function(n) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var i = 0,
                            a = 0,
                            s = 1,
                            o = 1;
                        this.ne.v > 0 ? i = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var l = BezierFactory.getBezierEasing(i, a, s, o).get,
                            h = 0,
                            u = this.finalS,
                            c = this.finalE,
                            p = this.data.sh;
                        if (2 === p) h = l(h = c === u ? n >= c ? 1 : 0 : e(0, t(.5 / (c - u) + (n - u) / (c - u), 1)));
                        else if (3 === p) h = l(h = c === u ? n >= c ? 0 : 1 : 1 - e(0, t(.5 / (c - u) + (n - u) / (c - u), 1)));
                        else if (4 === p) c === u ? h = 0 : (h = e(0, t(.5 / (c - u) + (n - u) / (c - u), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
                        else if (5 === p) {
                            if (c === u) h = 0;
                            else {
                                var f = c - u,
                                    d = -f / 2 + (n = t(e(0, n + .5 - u), c - u)),
                                    m = f / 2;
                                h = Math.sqrt(1 - d * d / (m * m))
                            }
                            h = l(h)
                        } else 6 === p ? (c === u ? h = 0 : (n = t(e(0, n + .5 - u), c - u), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (c - u))) / 2), h = l(h)) : (n >= r(u) && (h = e(0, t(n - u < 0 ? t(c, 1) - (u - n) : c - n, 1))), h = l(h));
                        return h * this.a.v
                    },
                    getValue: function(e) {
                        this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            r = this.o.v / t,
                            n = this.s.v / t + r,
                            i = this.e.v / t + r;
                        if (n > i) {
                            var a = n;
                            n = i, i = a
                        }
                        this.finalS = n, this.finalE = i
                    }
                }, extendPrototype([DynamicPropertyContainer], n), {
                    getTextSelectorProp: function(e, t, r) {
                        return new n(e, t, r)
                    }
                }
            }(),
            pool_factory = function(e, t, r, n) {
                var i = 0,
                    a = e,
                    s = createSizedArray(a);

                function o() {
                    return i ? s[i -= 1] : t()
                }
                return {
                    newElement: o,
                    release: function(e) {
                        i === a && (s = pooling.double(s), a *= 2), r && r(e), s[i] = e, i += 1
                    }
                }
            },
            pooling = {
                double: function(e) {
                    return e.concat(createSizedArray(e.length))
                }
            },
            point_pool = pool_factory(8, (function() {
                return createTypedArray("float32", 2)
            })),
            shape_pool = (factory = pool_factory(4, (function() {
                return new ShapePath
            }), (function(e) {
                var t, r = e._length;
                for (t = 0; t < r; t += 1) point_pool.release(e.v[t]), point_pool.release(e.i[t]), point_pool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
                e._length = 0, e.c = !1
            })), factory.clone = function(e) {
                var t, r = factory.newElement(),
                    n = void 0 === e._length ? e.v.length : e._length;
                for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
                return r
            }, factory),
            factory, shapeCollection_pool = function() {
                var e = {
                        newShapeCollection: function() {
                            var e;
                            e = t ? n[t -= 1] : new ShapeCollection;
                            return e
                        },
                        release: function(e) {
                            var i, a = e._length;
                            for (i = 0; i < a; i += 1) shape_pool.release(e.shapes[i]);
                            e._length = 0, t === r && (n = pooling.double(n), r *= 2);
                            n[t] = e, t += 1
                        }
                    },
                    t = 0,
                    r = 4,
                    n = createSizedArray(r);
                return e
            }(),
            segments_length_pool = pool_factory(8, (function() {
                return {
                    lengths: [],
                    totalLength: 0
                }
            }), (function(e) {
                var t, r = e.lengths.length;
                for (t = 0; t < r; t += 1) bezier_length_pool.release(e.lengths[t]);
                e.lengths.length = 0
            })),
            bezier_length_pool = pool_factory(8, (function() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", defaultCurveSegments),
                    lengths: createTypedArray("float32", defaultCurveSegments)
                }
            }));

        function BaseRenderer() {}

        function SVGRenderer(e, t) {
            this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (t && t.title) {
                var n = createNS("title"),
                    i = createElementID();
                n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
            }
            if (t && t.description) {
                var a = createNS("desc"),
                    s = createElementID();
                a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var l = createNS("g");
            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                progressiveLoad: t && t.progressiveLoad || !1,
                hideOnTransparent: !t || !1 !== t.hideOnTransparent,
                viewBoxOnly: t && t.viewBoxOnly || !1,
                viewBoxSize: t && t.viewBoxSize || !1,
                className: t && t.className || "",
                id: t && t.id || "",
                focusable: t && t.focusable,
                filterSize: {
                    width: t && t.filterSize && t.filterSize.width || "100%",
                    height: t && t.filterSize && t.filterSize.height || "100%",
                    x: t && t.filterSize && t.filterSize.x || "0%",
                    y: t && t.filterSize && t.filterSize.y || "0%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CanvasRenderer(e, t) {
            this.animationItem = e, this.renderConfig = {
                clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
                context: t && t.context || null,
                progressiveLoad: t && t.progressiveLoad || !1,
                preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                className: t && t.className || "",
                id: t && t.id || ""
            }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function HybridRenderer(e, t) {
            this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: t && t.className || "",
                imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !t || !1 !== t.hideOnTransparent,
                filterSize: {
                    width: t && t.filterSize && t.filterSize.width || "400%",
                    height: t && t.filterSize && t.filterSize.height || "400%",
                    x: t && t.filterSize && t.filterSize.x || "-100%",
                    y: t && t.filterSize && t.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function MaskElement(e, t, r) {
            this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var n, i = this.globalData.defs,
                a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var s, o, l, h, u, c, p, f = this.masksProperties,
                d = 0,
                m = [],
                g = createElementID(),
                y = "clipPath",
                v = "clip-path";
            for (n = 0; n < a; n++)
                if (("a" !== f[n].mode && "n" !== f[n].mode || f[n].inv || 100 !== f[n].o.k || f[n].o.x) && (y = "mask", v = "mask"), "s" != f[n].mode && "i" != f[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), s = createNS("path"), "n" != f[n].mode) {
                    var b;
                    if (d += 1, s.setAttribute("fill", "s" === f[n].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== f[n].x.k ? (y = "mask", v = "mask", p = PropertyFactory.getProp(this.element, f[n].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), u.appendChild(c), i.appendChild(u), s.setAttribute("stroke", "s" === f[n].mode ? "#000000" : "#ffffff")) : (c = null, p = null), this.storedData[n] = {
                            elem: s,
                            x: p,
                            expan: c,
                            lastPath: "",
                            lastOperator: "",
                            filterId: b,
                            lastRadius: 0
                        }, "i" == f[n].mode) {
                        l = m.length;
                        var x = createNS("g");
                        for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                        var E = createNS("mask");
                        E.setAttribute("mask-type", "alpha"), E.setAttribute("id", g + "_" + d), E.appendChild(s), i.appendChild(E), x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), m.length = 0, m.push(x)
                    } else m.push(s);
                    f[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                        elem: s,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                        invRect: h
                    }, this.viewData[n].prop.k || this.drawPath(f[n], this.viewData[n].prop.v, this.viewData[n])
                } else this.viewData[n] = {
                    op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                    elem: s,
                    lastPath: ""
                }, i.appendChild(s);
            for (this.maskElement = createNS(y), a = m.length, n = 0; n < a; n += 1) this.maskElement.appendChild(m[n]);
            d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(e, t) {
            this.elem = e, this.pos = t
        }

        function SVGStyleData(e, t) {
            this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === e.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function SVGShapeData(e, t, r) {
            this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
            for (var n = 0, i = e.length; n < i;) {
                if (e[n].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                n += 1
            }
        }

        function SVGTransformData(e, t, r) {
            this.transform = {
                mProps: e,
                op: t,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        function SVGStrokeStyleData(e, t, r) {
            this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(e, t, r) {
            this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
        }

        function SVGGradientFillStyleData(e, t, r) {
            this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
        }

        function SVGGradientStrokeStyleData(e, t, r) {
            this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }
        BaseRenderer.prototype.checkLayers = function(e) {
            var t, r, n = this.layers.length;
            for (this.completeLayers = !0, t = n - 1; t >= 0; t--) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(e) {
            switch (e.ty) {
                case 2:
                    return this.createImage(e);
                case 0:
                    return this.createComp(e);
                case 1:
                    return this.createSolid(e);
                case 3:
                    return this.createNull(e);
                case 4:
                    return this.createShape(e);
                case 5:
                    return this.createText(e);
                case 13:
                    return this.createCamera(e)
            }
            return this.createNull(e)
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.buildAllItems = function() {
            var e, t = this.layers.length;
            for (e = 0; e < t; e += 1) this.buildItem(e);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(e) {
            this.completeLayers = !1;
            var t, r, n = e.length,
                i = this.layers.length;
            for (t = 0; t < n; t += 1)
                for (r = 0; r < i;) {
                    if (this.layers[r].id == e[t].id) {
                        this.layers[r] = e[t];
                        break
                    }
                    r += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(e) {
            this.globalData.projectInterface = e
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
            for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(e) {
            this.pendingElements.push(e)
        }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
            var t, r = e.length;
            for (t = 0; t < r; t += 1)
                if (e[t].xt) {
                    var n = this.createComp(e[t]);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                }
        }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
                w: e.w,
                h: e.h
            }
        }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(e) {
            return new NullElement(e, this.globalData, this)
        }, SVGRenderer.prototype.createShape = function(e) {
            return new SVGShapeElement(e, this.globalData, this)
        }, SVGRenderer.prototype.createText = function(e) {
            return new SVGTextElement(e, this.globalData, this)
        }, SVGRenderer.prototype.createImage = function(e) {
            return new IImageElement(e, this.globalData, this)
        }, SVGRenderer.prototype.createComp = function(e) {
            return new SVGCompElement(e, this.globalData, this)
        }, SVGRenderer.prototype.createSolid = function(e) {
            return new ISolidElement(e, this.globalData, this)
        }, SVGRenderer.prototype.configAnimation = function(e) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var t = this.globalData.defs;
            this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
            var r = createNS("clipPath"),
                n = createNS("rect");
            n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
            var i = createElementID();
            r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
        }, SVGRenderer.prototype.destroy = function() {
            this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
            var e, t = this.layers ? this.layers.length : 0;
            for (e = 0; e < t; e++) this.elements[e] && this.elements[e].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(e) {
            var t = this.elements;
            if (!t[e] && 99 != this.layers[e].ty) {
                t[e] = !0;
                var r = this.createItem(this.layers[e]);
                t[e] = r, expressionsPlugin && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt && (this.elements[e - 1] && !0 !== this.elements[e - 1] ? r.setMatte(t[e - 1].layerId) : (this.buildItem(e - 1), this.addPendingElement(r)))
            }
        }, SVGRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var e = this.pendingElements.pop();
                if (e.checkParenting(), e.data.tt)
                    for (var t = 0, r = this.elements.length; t < r;) {
                        if (this.elements[t] === e) {
                            e.setMatte(this.elements[t - 1].layerId);
                            break
                        }
                        t += 1
                    }
            }
        }, SVGRenderer.prototype.renderFrame = function(e) {
            if (this.renderedFrame !== e && !this.destroyed) {
                null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
                var t, r = this.layers.length;
                for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t--)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
                if (this.globalData._mdf)
                    for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }
        }, SVGRenderer.prototype.appendElementInPos = function(e, t) {
            var r = e.getBaseElement();
            if (r) {
                for (var n, i = 0; i < t;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
                n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
            }
        }, SVGRenderer.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }, SVGRenderer.prototype.show = function() {
            this.layerElement.style.display = "block"
        }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(e) {
            return new CVShapeElement(e, this.globalData, this)
        }, CanvasRenderer.prototype.createText = function(e) {
            return new CVTextElement(e, this.globalData, this)
        }, CanvasRenderer.prototype.createImage = function(e) {
            return new CVImageElement(e, this.globalData, this)
        }, CanvasRenderer.prototype.createComp = function(e) {
            return new CVCompElement(e, this.globalData, this)
        }, CanvasRenderer.prototype.createSolid = function(e) {
            return new CVSolidElement(e, this.globalData, this)
        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(e) {
            if (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(e);
                    var t = this.contextData.cTr.props;
                    this.transformMat.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var r = this.contextData.cTr.props;
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                } else this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
        }, CanvasRenderer.prototype.ctxOpacity = function(e) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= e < 0 ? 0 : e, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= e < 0 ? 0 : e, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
        }, CanvasRenderer.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRenderer.prototype.save = function(e) {
            if (this.renderConfig.clearCanvas) {
                e && this.canvasContext.save();
                var t = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var r, n = this.contextData.saved[this.contextData.cArrPos];
                for (r = 0; r < 16; r += 1) n[r] = t[r];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
            } else this.canvasContext.save()
        }, CanvasRenderer.prototype.restore = function(e) {
            if (this.renderConfig.clearCanvas) {
                e && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var t, r = this.contextData.saved[this.contextData.cArrPos],
                    n = this.contextData.cTr.props;
                for (t = 0; t < 16; t += 1) n[t] = r[t];
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
            } else this.canvasContext.restore()
        }, CanvasRenderer.prototype.configAnimation = function(e) {
            this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = e, this.layers = e.layers, this.transformCanvas = {
                w: e.w,
                h: e.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
        }, CanvasRenderer.prototype.updateContainerSize = function() {
            var e, t, r, n;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (e = this.animationItem.wrapper.offsetWidth, t = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", e * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", t * this.renderConfig.dpr)) : (e = this.canvasContext.canvas.width * this.renderConfig.dpr, t = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var i = this.renderConfig.preserveAspectRatio.split(" "),
                    a = i[1] || "meet",
                    s = i[0] || "xMidYMid",
                    o = s.substr(0, 4),
                    l = s.substr(4);
                r = e / t, (n = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === a || n < r && "slice" === a ? (this.transformCanvas.sx = e / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = t / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (n < r && "meet" === a || n > r && "slice" === a) ? (e - this.transformCanvas.w * (t / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (n < r && "meet" === a || n > r && "slice" === a) ? (e - this.transformCanvas.w * (t / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (n > r && "meet" === a || n < r && "slice" === a) ? (t - this.transformCanvas.h * (e / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (n > r && "meet" === a || n < r && "slice" === a) ? (t - this.transformCanvas.h * (e / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = e / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRenderer.prototype.destroy = function() {
            var e;
            for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRenderer.prototype.renderFrame = function(e, t) {
            if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
                this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
                var r, n = this.layers.length;
                for (this.completeLayers || this.checkLayers(e), r = 0; r < n; r++)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }, CanvasRenderer.prototype.buildItem = function(e) {
            var t = this.elements;
            if (!t[e] && 99 != this.layers[e].ty) {
                var r = this.createItem(this.layers[e], this, this.globalData);
                t[e] = r, r.initExpressions()
            }
        }, CanvasRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }, CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, HybridRenderer.prototype.appendElementInPos = function(e, t) {
            var r = e.getBaseElement();
            if (r) {
                var n = this.layers[t];
                if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
                else if (this.threeDElements) this.addTo3dContainer(r, t);
                else {
                    for (var i, a, s = 0; s < t;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
                    i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
                }
            }
        }, HybridRenderer.prototype.createShape = function(e) {
            return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
        }, HybridRenderer.prototype.createText = function(e) {
            return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextElement(e, this.globalData, this)
        }, HybridRenderer.prototype.createCamera = function(e) {
            return this.camera = new HCameraElement(e, this.globalData, this), this.camera
        }, HybridRenderer.prototype.createImage = function(e) {
            return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
        }, HybridRenderer.prototype.createComp = function(e) {
            return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        }, HybridRenderer.prototype.createSolid = function(e) {
            return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
        }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(e) {
            for (var t = 0, r = this.threeDElements.length; t < r;) {
                if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
                t += 1
            }
        }, HybridRenderer.prototype.createThreeDContainer = function(e, t) {
            var r = createTag("div");
            styleDiv(r);
            var n = createTag("div");
            styleDiv(n), "3d" === t && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", n.style.transform = n.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(n);
            var i = {
                container: n,
                perspectiveElem: r,
                startPos: e,
                endPos: e,
                type: t
            };
            return this.threeDElements.push(i), i
        }, HybridRenderer.prototype.build3dContainers = function() {
            var e, t, r = this.layers.length,
                n = "";
            for (e = 0; e < r; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? ("3d" !== n && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : ("2d" !== n && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
            for (e = (r = this.threeDElements.length) - 1; e >= 0; e--) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
        }, HybridRenderer.prototype.addTo3dContainer = function(e, t) {
            for (var r = 0, n = this.threeDElements.length; r < n;) {
                if (t <= this.threeDElements[r].endPos) {
                    for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                    i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
                    break
                }
                r += 1
            }
        }, HybridRenderer.prototype.configAnimation = function(e) {
            var t = createTag("div"),
                r = this.animationItem.wrapper;
            t.style.width = e.w + "px", t.style.height = e.h + "px", this.resizerElem = t, styleDiv(t), t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), t.style.overflow = "hidden";
            var n = createNS("svg");
            n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
            var i = createNS("defs");
            n.appendChild(i), this.data = e, this.setupGlobalData(e, n), this.globalData.defs = i, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRenderer.prototype.destroy = function() {
            this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
            var e, t = this.layers ? this.layers.length : 0;
            for (e = 0; e < t; e++) this.elements[e].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRenderer.prototype.updateContainerSize = function() {
            var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
                a = this.animationItem.wrapper.offsetHeight,
                s = i / a;
            this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)"
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }, HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var e, t = this.globalData.compSize.w,
                    r = this.globalData.compSize.h,
                    n = this.threeDElements.length;
                for (e = 0; e < n; e += 1) this.threeDElements[e].perspectiveElem.style.perspective = this.threeDElements[e].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px"
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function(e) {
            var t, r = e.length,
                n = createTag("div");
            for (t = 0; t < r; t += 1)
                if (e[t].xt) {
                    var i = this.createComp(e[t], n, this.globalData.comp, null);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                }
        }, MaskElement.prototype.getMaskProperty = function(e) {
            return this.viewData[e].prop
        }, MaskElement.prototype.renderFrame = function(e) {
            var t, r = this.element.finalTransform.mat,
                n = this.masksProperties.length;
            for (t = 0; t < n; t++)
                if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
                    var i = this.storedData[t].expan;
                    this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
                }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var e = "M0,0 ";
            return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(e, t, r) {
            var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
            for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
            if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
                var s = "";
                r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        }, HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function(e) {
                this.hierarchy = e
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        }, FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function(e, t) {
                var r, n = this.dynamicProperties.length;
                for (r = 0; r < n; r += 1)(t || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function(e) {
                -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
            }
        }, TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var e, t = this.finalTransform.mat,
                        r = 0,
                        n = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; r < n;) {
                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            r += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) e = this.hierarchy[r].finalTransform.mProp.v.props, t.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                }
            },
            globalToLocal: function(e) {
                var t = [];
                t.push(this.finalTransform);
                for (var r = !0, n = this.comp; r;) n.finalTransform ? (n.data.hasMask && t.splice(0, 0, n.finalTransform), n = n.comp) : r = !1;
                var i, a, s = t.length;
                for (i = 0; i < s; i += 1) a = t[i].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
                return e
            },
            mHelper: new Matrix
        }, RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function(e) {
                -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
            },
            removeRenderableComponent: function(e) {
                -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
            },
            prepareRenderableFrame: function(e) {
                this.checkLayerLimits(e)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function(e) {
                this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function() {
                var e, t = this.renderableComponents.length;
                for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        }, extendPrototype([RenderableElement, createProxyFunction({
            initElement: function(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
            },
            hide: function() {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
            },
            show: function() {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            renderInnerContent: function() {},
            prepareFrame: function(e) {
                this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
            },
            destroy: function() {
                this.innerElem = null, this.destroyBaseElement()
            }
        })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1
        }, SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
            this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
            var r = createElementID(),
                n = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
            var i, a, s, o = [];
            for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
            e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = n, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, n, i, a = createNS("mask"),
                    s = createNS("path");
                a.appendChild(s);
                var o = createElementID(),
                    l = createElementID();
                a.setAttribute("id", l);
                var h = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
                var u = this.stops;
                for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), u.push(r);
                s.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function() {
            var e = new Matrix,
                t = new Matrix;

            function r(e, t, r) {
                (r || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (r || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS())
            }

            function n(r, n, i) {
                var a, s, o, l, h, u, c, p, f, d, m, g = n.styles.length,
                    y = n.lvl;
                for (u = 0; u < g; u += 1) {
                    if (l = n.sh._mdf || i, n.styles[u].lvl < y) {
                        for (p = t.reset(), d = y - n.styles[u].lvl, m = n.transformers.length - 1; !l && d > 0;) l = n.transformers[m].mProps._mdf || l, d--, m--;
                        if (l)
                            for (d = y - n.styles[u].lvl, m = n.transformers.length - 1; d > 0;) f = n.transformers[m].mProps.v.props, p.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d--, m--
                    } else p = e;
                    if (s = (c = n.sh.paths)._length, l) {
                        for (o = "", a = 0; a < s; a += 1)(h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, p));
                        n.caches[u] = o
                    } else o = n.caches[u];
                    n.styles[u].d += !0 === r.hd ? "" : o, n.styles[u]._mdf = l || n.styles[u]._mdf
                }
            }

            function i(e, t, r) {
                var n = t.style;
                (t.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || r) && n.pElem.setAttribute("fill-opacity", t.o.v)
            }

            function a(e, t, r) {
                s(e, t, r), o(e, t, r)
            }

            function s(e, t, r) {
                var n, i, a, s, o, l = t.gf,
                    h = t.g._hasOpacity,
                    u = t.s.v,
                    c = t.e.v;
                if (t.o._mdf || r) {
                    var p = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
                    t.style.pElem.setAttribute(p, t.o.v)
                }
                if (t.s._mdf || r) {
                    var f = 1 === e.t ? "x1" : "cx",
                        d = "x1" === f ? "y1" : "cy";
                    l.setAttribute(f, u[0]), l.setAttribute(d, u[1]), h && !t.g._collapsable && (t.of.setAttribute(f, u[0]), t.of.setAttribute(d, u[1]))
                }
                if (t.g._cmdf || r) {
                    n = t.cst;
                    var m = t.g.c;
                    for (a = n.length, i = 0; i < a; i += 1)(s = n[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
                }
                if (h && (t.g._omdf || r)) {
                    var g = t.g.o;
                    for (a = (n = t.g._collapsable ? t.cst : t.ost).length, i = 0; i < a; i += 1) s = n[i], t.g._collapsable || s.setAttribute("offset", g[2 * i] + "%"), s.setAttribute("stop-opacity", g[2 * i + 1])
                }
                if (1 === e.t)(t.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !t.g._collapsable && (t.of.setAttribute("x2", c[0]), t.of.setAttribute("y2", c[1])));
                else if ((t.s._mdf || t.e._mdf || r) && (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)), l.setAttribute("r", o), h && !t.g._collapsable && t.of.setAttribute("r", o)), t.e._mdf || t.h._mdf || t.a._mdf || r) {
                    o || (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)));
                    var y = Math.atan2(c[1] - u[1], c[0] - u[0]),
                        v = o * (t.h.v >= 1 ? .99 : t.h.v <= -1 ? -.99 : t.h.v),
                        b = Math.cos(y + t.a.v) * v + u[0],
                        x = Math.sin(y + t.a.v) * v + u[1];
                    l.setAttribute("fx", b), l.setAttribute("fy", x), h && !t.g._collapsable && (t.of.setAttribute("fx", b), t.of.setAttribute("fy", x))
                }
            }

            function o(e, t, r) {
                var n = t.style,
                    i = t.d;
                i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), t.c && (t.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || r) && (n.pElem.setAttribute("stroke-width", t.w.v), n.msElem && n.msElem.setAttribute("stroke-width", t.w.v))
            }
            return {
                createRenderFunction: function(e) {
                    e.ty;
                    switch (e.ty) {
                        case "fl":
                            return i;
                        case "gf":
                            return s;
                        case "gs":
                            return a;
                        case "st":
                            return o;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return n;
                        case "tr":
                            return r
                    }
                }
            }
        }();

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        function CVShapeData(e, t, r, n) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var i = 4;
            "rc" == t.ty ? i = 5 : "el" == t.ty ? i = 6 : "sr" == t.ty && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, i, e);
            var a, s, o = r.length;
            for (a = 0; a < o; a += 1) r[a].closed || (s = {
                transforms: n.addTransformSequence(r[a].transforms),
                trNodes: []
            }, this.styledShapes.push(s), r[a].elements.push(s))
        }

        function BaseElement() {}

        function NullElement(e, t, r) {
            this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
        }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(e, t, r) {
            this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        function ISolidElement(e, t, r) {
            this.initElement(e, t, r)
        }

        function SVGCompElement(e, t, r) {
            this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                _placeholder: !0
            }
        }

        function SVGTextElement(e, t, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
        }

        function SVGShapeElement(e, t, r) {
            this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
        }

        function SVGTintFilter(e, t) {
            this.filterManager = t;
            var r = createNS("feColorMatrix");
            if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), e.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), e.appendChild(r), this.matrixFilter = r, 100 !== t.effectElements[2].p.v || t.effectElements[2].p.k) {
                var n, i = createNS("feMerge");
                e.appendChild(i), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), i.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "f2"), i.appendChild(n)
            }
        }

        function SVGFillFilter(e, t) {
            this.filterManager = t;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), e.appendChild(r), this.matrixFilter = r
        }

        function SVGGaussianBlurEffect(e, t) {
            e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
            var r = createNS("feGaussianBlur");
            e.appendChild(r), this.feGaussianBlur = r
        }

        function SVGStrokeEffect(e, t) {
            this.initialized = !1, this.filterManager = t, this.elem = e, this.paths = []
        }

        function SVGTritoneFilter(e, t) {
            this.filterManager = t;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), e.appendChild(r);
            var n = createNS("feComponentTransfer");
            n.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(n), this.matrixFilter = n;
            var i = createNS("feFuncR");
            i.setAttribute("type", "table"), n.appendChild(i), this.feFuncR = i;
            var a = createNS("feFuncG");
            a.setAttribute("type", "table"), n.appendChild(a), this.feFuncG = a;
            var s = createNS("feFuncB");
            s.setAttribute("type", "table"), n.appendChild(s), this.feFuncB = s
        }

        function SVGProLevelsFilter(e, t) {
            this.filterManager = t;
            var r = this.filterManager.effectElements,
                n = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(n), n = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (n.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
        }

        function SVGDropShadowEffect(e, t) {
            var r = t.container.globalData.renderConfig.filterSize;
            e.setAttribute("x", r.x), e.setAttribute("y", r.y), e.setAttribute("width", r.width), e.setAttribute("height", r.height), this.filterManager = t;
            var n = createNS("feGaussianBlur");
            n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, e.appendChild(n);
            var i = createNS("feOffset");
            i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, e.appendChild(i);
            var a = createNS("feFlood");
            a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, e.appendChild(a);
            var s = createNS("feComposite");
            s.setAttribute("in", "drop_shadow_3"), s.setAttribute("in2", "drop_shadow_2"), s.setAttribute("operator", "in"), s.setAttribute("result", "drop_shadow_4"), e.appendChild(s);
            var o, l = createNS("feMerge");
            e.appendChild(l), o = createNS("feMergeNode"), l.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = l, this.originalNodeAdded = !1, l.appendChild(o)
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(e) {
                var t, r = e.length,
                    n = "_";
                for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
                var i = this.sequences[n];
                return i || (i = {
                    transforms: [].concat(e),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[n] = i, this.sequenceList.push(i)), i
            },
            processSequence: function(e, t) {
                for (var r, n = 0, i = e.transforms.length, a = t; n < i && !t;) {
                    if (e.transforms[n].transform.mProps._mdf) {
                        a = !0;
                        break
                    }
                    n += 1
                }
                if (a)
                    for (e.finalTransform.reset(), n = i - 1; n >= 0; n -= 1) r = e.transforms[n].transform.mProps.v.props, e.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                e._mdf = a
            },
            processSequences: function(e) {
                var t, r = this.sequenceList.length;
                for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
            },
            getNewKey: function() {
                return "_" + this.transform_key_count++
            }
        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var e = 0, t = this.data.masksProperties.length; e < t;) {
                    if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
                    e += 1
                }
                return !1
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var e = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(e), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function() {
                var e = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
            },
            initBaseData: function(e, t, r) {
                this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        }, NullElement.prototype.prepareFrame = function(e) {
            this.prepareProperties(e, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var e, t, r, n = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var i = createNS("mask");
                        i.setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), n = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), e = createElementID(), t = filtersFactory.createFilter(e), this.globalData.defs.appendChild(t), t.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), n = r, i.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + e + ")"))
                    } else if (2 == this.data.td) {
                        var a = createNS("mask");
                        a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                        var s = createNS("g");
                        a.appendChild(s), e = createElementID(), t = filtersFactory.createFilter(e);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), t.appendChild(o);
                        var l = createNS("feFuncA");
                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(t);
                        var h = createNS("rect");
                        h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + e + ")"), s.appendChild(h), s.appendChild(this.layerElement), n = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), t.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), s.appendChild(h), r.appendChild(this.layerElement), n = r, s.appendChild(r)), this.globalData.defs.appendChild(a)
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), n = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var u = createNS("clipPath"),
                        c = createNS("path");
                    c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var p = createElementID();
                    if (u.setAttribute("id", p), u.appendChild(c), this.globalData.defs.appendChild(u), this.checkMasks()) {
                        var f = createNS("g");
                        f.setAttribute("clip-path", "url(" + locationHref + "#" + p + ")"), f.appendChild(this.layerElement), this.transformedElement = f, n ? n.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + p + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
            },
            setMatte: function(e) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + e + ")")
            }
        }, IShapeElement.prototype = {
            addShapeToModifiers: function(e) {
                var t, r = this.shapeModifiers.length;
                for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
            },
            isShapeInAnimatedModifiers: function(e) {
                for (var t = this.shapeModifiers.length; 0 < t;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var e, t = this.shapes.length;
                    for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                    for (e = (t = this.shapeModifiers.length) - 1; e >= 0; e -= 1) this.shapeModifiers[e].processShapes(this._isFirstFrame)
                }
            },
            lcEnum: {
                1: "butt",
                2: "round",
                3: "square"
            },
            ljEnum: {
                1: "miter",
                2: "round",
                3: "bevel"
            },
            searchProcessedElement: function(e) {
                for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
                    if (t[r].elem === e) return t[r].pos;
                    r += 1
                }
                return 0
            },
            addProcessedElement: function(e, t) {
                for (var r = this.processedElements, n = r.length; n;)
                    if (r[n -= 1].elem === e) return void(r[n].pos = t);
                r.push(new ProcessedElement(e, t))
            },
            prepareFrame: function(e) {
                this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
            }
        }, ITextElement.prototype.initElement = function(e, t, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(e) {
            this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function(e, t) {
            var r, n, i = t.length,
                a = "";
            for (r = 0; r < i; r += 1) n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e);
            return a
        }, ITextElement.prototype.updateDocumentData = function(e, t) {
            this.textProperty.updateDocumentData(e, t)
        }, ITextElement.prototype.canResizeFont = function(e) {
            this.textProperty.canResizeFont(e)
        }, ITextElement.prototype.setMinimumFontSize = function(e) {
            this.textProperty.setMinimumFontSize(e)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, n, i) {
            switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
                case 1:
                    t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
            }
            t.translate(n, i, 0)
        }, ITextElement.prototype.buildColor = function(e) {
            return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
            this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(e) {
            if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
                else {
                    var t = this.tm.v;
                    t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
                }
                var r, n = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var e, t = this.layers.length;
            for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, ICompElement.prototype.setElements = function(e) {
            this.elements = e
        }, ICompElement.prototype.getElements = function() {
            return this.elements
        }, ICompElement.prototype.destroyElements = function() {
            var e, t = this.layers.length;
            for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var e = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var e = createNS("rect");
            e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
        }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextElement.prototype.buildTextContents = function(e) {
            for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
            return n.push(i), n
        }, SVGTextElement.prototype.buildNewText = function() {
            var e, t, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var n = this.globalData.fontManager.getFontByName(r.f);
            if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
            else {
                this.layerElement.setAttribute("font-family", n.fFamily);
                var i = r.fWeight,
                    a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var s, o = r.l || [],
                l = !!this.globalData.fontManager.chars;
            t = o.length;
            var h, u = this.mHelper,
                c = "",
                p = this.data.singleShape,
                f = 0,
                d = 0,
                m = !0,
                g = r.tr / 1e3 * r.finalSize;
            if (!p || l || r.sz) {
                var y, v, b = this.textSpans.length;
                for (e = 0; e < t; e += 1) l && p && 0 !== e || (s = b > e ? this.textSpans[e] : createNS(l ? "path" : "text"), b <= e && (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e] = s, this.layerElement.appendChild(s)), s.style.display = "inherit"), u.reset(), u.scale(r.finalSize / 100, r.finalSize / 100), p && (o[e].n && (f = -g, d += r.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, u, o[e].line, f, d), f += o[e].l || 0, f += g), l ? (h = (y = (v = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], p ? c += this.createPathShape(u, h) : s.setAttribute("d", this.createPathShape(u, h))) : (p && s.setAttribute("transform", "translate(" + u.props[12] + "," + u.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                p && s && s.setAttribute("d", c)
            } else {
                var x = this.textContainer,
                    E = "start";
                switch (r.j) {
                    case 1:
                        E = "end";
                        break;
                    case 2:
                        E = "middle"
                }
                x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", g);
                var S = this.buildTextContents(r.finalText);
                for (t = S.length, d = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e] || createNS("tspan")).textContent = S[e], s.setAttribute("x", 0), s.setAttribute("y", d), s.style.display = "inherit", x.appendChild(s), this.textSpans[e] = s, d += r.finalLineHeight;
                this.layerElement.appendChild(x)
            }
            for (; e < this.textSpans.length;) this.textSpans[e].style.display = "none", e += 1;
            this._sizeChanged = !0
        }, SVGTextElement.prototype.sourceRectAtTime = function(e) {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }, SVGTextElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var e, t;
                this._sizeChanged = !0;
                var r, n, i = this.textAnimator.renderedLetters,
                    a = this.textProperty.currentData.l;
                for (t = a.length, e = 0; e < t; e += 1) a[e].n || (r = i[e], n = this.textSpans[e], r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
            }
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var e, t, r, n, i = this.shapes.length,
                a = this.stylesList.length,
                s = [],
                o = !1;
            for (r = 0; r < a; r += 1) {
                for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1) - 1 !== (t = this.shapes[e]).styles.indexOf(n) && (s.push(t), o = t._isAnimated || o);
                s.length > 1 && o && this.setShapesAsAnimated(s)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
            var t, r = e.length;
            for (t = 0; t < r; t += 1) e[t].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
            var r, n = new SVGStyleData(e, t),
                i = n.pElem;
            if ("st" === e.ty) r = new SVGStrokeStyleData(this, e, n);
            else if ("fl" === e.ty) r = new SVGFillStyleData(this, e, n);
            else if ("gf" === e.ty || "gs" === e.ty) {
                r = new("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))
            }
            return "st" !== e.ty && "gs" !== e.ty || (i.setAttribute("stroke-linecap", this.lcEnum[e.lc] || "round"), i.setAttribute("stroke-linejoin", this.ljEnum[e.lj] || "round"), i.setAttribute("fill-opacity", "0"), 1 === e.lj && i.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(e) {
            var t = new ShapeGroupData;
            return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
        }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
            var r = TransformPropertyFactory.getTransformProperty(this, e, this),
                n = new SVGTransformData(r, r.o, t);
            return this.addToAnimatedContents(e, n), n
        }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
            var n = 4;
            "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7);
            var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
            return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
        }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
            for (var r = 0, n = this.animatedContents.length; r < n;) {
                if (this.animatedContents[r].element === t) return;
                r += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(e),
                element: t,
                data: e
            })
        }, SVGShapeElement.prototype.setElementStyles = function(e) {
            var t, r = e.styles,
                n = this.stylesList.length;
            for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var e, t = this.itemsData.length;
            for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(e, t, r, n, i, a, s) {
            var o, l, h, u, c, p, f = [].concat(a),
                d = e.length - 1,
                m = [],
                g = [];
            for (o = d; o >= 0; o -= 1) {
                if ((p = this.searchProcessedElement(e[o])) ? t[o] = r[p - 1] : e[o]._render = s, "fl" == e[o].ty || "st" == e[o].ty || "gf" == e[o].ty || "gs" == e[o].ty) p ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && n.appendChild(t[o].style.pElem), m.push(t[o].style);
                else if ("gr" == e[o].ty) {
                    if (p)
                        for (h = t[o].it.length, l = 0; l < h; l += 1) t[o].prevViewData[l] = t[o].it[l];
                    else t[o] = this.createGroupElement(e[o]);
                    this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, f, s), e[o]._render && n.appendChild(t[o].gr)
                } else "tr" == e[o].ty ? (p || (t[o] = this.createTransformElement(e[o], n)), u = t[o].transform, f.push(u)) : "sh" == e[o].ty || "rc" == e[o].ty || "el" == e[o].ty || "sr" == e[o].ty ? (p || (t[o] = this.createShapeElement(e[o], f, i)), this.setElementStyles(t[o])) : "tm" == e[o].ty || "rd" == e[o].ty || "ms" == e[o].ty ? (p ? (c = t[o]).closed = !1 : ((c = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = c, this.shapeModifiers.push(c)), g.push(c)) : "rp" == e[o].ty && (p ? (c = t[o]).closed = !0 : (c = ShapeModifiers.getModifier(e[o].ty), t[o] = c, c.init(this, e, o, t), this.shapeModifiers.push(c), s = !1), g.push(c));
                this.addProcessedElement(e[o], o + 1)
            }
            for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
            for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var e, t = this.stylesList.length;
            for (e = 0; e < t; e += 1) this.stylesList[e].reset();
            for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
            var e, t, r = this.animatedContents.length;
            for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, SVGTintFilter.prototype.renderFrame = function(e) {
            if (e || this.filterManager._mdf) {
                var t = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 " + n + " 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function(e) {
            if (e || this.filterManager._mdf) {
                var t = this.filterManager.effectElements[2].p.v,
                    r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
            }
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
            if (e || this.filterManager._mdf) {
                var t = .3 * this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = 3 == r ? 0 : t,
                    i = 2 == r ? 0 : t;
                this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
                var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", a)
            }
        }, SVGStrokeEffect.prototype.initialize = function() {
            var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
                p: e,
                m: r
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var a = createNS("mask"),
                    s = createElementID();
                a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); i[0];) o.appendChild(i[0]);
                this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
                this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = t
        }, SVGStrokeEffect.prototype.renderFrame = function(e) {
            this.initialized || this.initialize();
            var t, r, n, i = this.paths.length;
            for (t = 0; t < i; t += 1)
                if (-1 !== this.paths[t].m && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                    var a;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                            o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                            l = n.getTotalLength();
                        a = "0 0 0 " + l * s + " ";
                        var h, u = l * (o - s),
                            c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                            p = Math.floor(u / c);
                        for (h = 0; h < p; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                        a += "0 " + 10 * l + " 0 0"
                    } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                    n.setAttribute("stroke-dasharray", a)
                } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf)) {
                var f = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * f[0]) + "," + bm_floor(255 * f[1]) + "," + bm_floor(255 * f[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function(e) {
            if (e || this.filterManager._mdf) {
                var t = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v,
                    i = n[0] + " " + r[0] + " " + t[0],
                    a = n[1] + " " + r[1] + " " + t[1],
                    s = n[2] + " " + r[2] + " " + t[2];
                this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
            var r = createNS(e);
            return r.setAttribute("type", "table"), t.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, n, i) {
            for (var a, s, o = 0, l = Math.min(e, t), h = Math.max(e, t), u = Array.call(null, {
                    length: 256
                }), c = 0, p = i - n, f = t - e; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : n : a >= h ? f < 0 ? n : i : n + p * Math.pow((a - e) / f, 1 / r), u[c++] = s, o += 256 / 255;
            return u.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
            if (e || this.filterManager._mdf) {
                var t, r = this.filterManager.effectElements;
                this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function(e) {
            if (e || this.filterManager._mdf) {
                if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
                    var t = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
                }
                if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v,
                        n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        i = r * Math.cos(n),
                        a = r * Math.sin(n);
                    this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(e, t, r) {
            this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGEffects(e) {
            var t, r, n = e.data.ef ? e.data.ef.length : 0,
                i = createElementID(),
                a = filtersFactory.createFilter(i),
                s = 0;
            for (this.filters = [], t = 0; t < n; t += 1) r = null, 20 === e.data.ef[t].ty ? (s += 1, r = new SVGTintFilter(a, e.effectsManager.effectElements[t])) : 21 === e.data.ef[t].ty ? (s += 1, r = new SVGFillFilter(a, e.effectsManager.effectElements[t])) : 22 === e.data.ef[t].ty ? r = new SVGStrokeEffect(e, e.effectsManager.effectElements[t]) : 23 === e.data.ef[t].ty ? (s += 1, r = new SVGTritoneFilter(a, e.effectsManager.effectElements[t])) : 24 === e.data.ef[t].ty ? (s += 1, r = new SVGProLevelsFilter(a, e.effectsManager.effectElements[t])) : 25 === e.data.ef[t].ty ? (s += 1, r = new SVGDropShadowEffect(a, e.effectsManager.effectElements[t])) : 28 === e.data.ef[t].ty ? r = new SVGMatte3Effect(a, e.effectsManager.effectElements[t], e) : 29 === e.data.ef[t].ty && (s += 1, r = new SVGGaussianBlurEffect(a, e.effectsManager.effectElements[t])), r && this.filters.push(r);
            s && (e.globalData.defs.appendChild(a), e.layerElement.setAttribute("filter", "url(" + locationHref + "#" + i + ")")), this.filters.length && e.addRenderableComponent(this)
        }

        function CVContextData() {
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
            var e;
            for (this.savedOp = createTypedArray("float32", 15), e = 0; e < 15; e += 1) this.saved[e] = createTypedArray("float32", 16);
            this._length = 15
        }

        function CVBaseElement() {}

        function CVImageElement(e, t, r) {
            this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getImage(this.assetData), this.initElement(e, t, r)
        }

        function CVCompElement(e, t, r) {
            this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                _placeholder: !0
            }
        }

        function CVMaskElement(e, t) {
            this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var r, n = this.masksProperties.length,
                i = !1;
            for (r = 0; r < n; r++) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = i, i && this.element.addRenderableComponent(this)
        }

        function CVShapeElement(e, t, r) {
            this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
        }

        function CVSolidElement(e, t, r) {
            this.initElement(e, t, r)
        }

        function CVTextElement(e, t, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(e, t, r)
        }

        function CVEffects() {}

        function HBaseElement(e, t, r) {}

        function HSolidElement(e, t, r) {
            this.initElement(e, t, r)
        }

        function HCompElement(e, t, r) {
            this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                _placeholder: !0
            }
        }

        function HShapeElement(e, t, r) {
            this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        function HTextElement(e, t, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
        }

        function HImageElement(e, t, r) {
            this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
        }

        function HCameraElement(e, t, r) {
            this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
            var n = PropertyFactory.getProp;
            if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
                var i, a = e.ks.or.k.length;
                for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
            }
            this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(e) {
            for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
                if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
                t += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
            var r = e.layerElement.parentNode;
            if (r) {
                for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
                a <= s - 2 && (n = i[a + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
            if (!this.findSymbol(t)) {
                var r = createElementID(),
                    n = createNS("mask");
                n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
                var i = e.globalData.defs;
                i.appendChild(n);
                var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
                var s = createNS("use");
                s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
            }
            e.setMatte(t.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }, SVGEffects.prototype.renderFrame = function(e) {
            var t, r = this.filters.length;
            for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, CVContextData.prototype.duplicate = function() {
            var e = 2 * this._length,
                t = this.savedOp;
            this.savedOp = createTypedArray("float32", e), this.savedOp.set(t);
            var r = 0;
            for (r = this._length; r < e; r += 1) this.saved[r] = createTypedArray("float32", 16);
            this._length = e
        }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
            },
            createContent: function() {},
            setBlendMode: function() {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var t = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = t
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this)
            },
            hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var e = 0 === this.data.ty;
                    this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(e), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var e = createTag("canvas");
                e.width = this.assetData.w, e.height = this.assetData.h;
                var t, r, n = e.getContext("2d"),
                    i = this.img.width,
                    a = this.img.height,
                    s = i / a,
                    o = this.assetData.w / this.assetData.h,
                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
            }
        }, CVImageElement.prototype.renderInnerContent = function(e) {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
            this.img = null
        }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var e, t = this.canvasContext;
            for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
            var e;
            for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
            this.layers = null, this.elements = null
        }, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var e, t, r, n, i = this.element.finalTransform.mat,
                    a = this.element.canvasContext,
                    s = this.masksProperties.length;
                for (a.beginPath(), e = 0; e < s; e++)
                    if ("n" !== this.masksProperties[e].mode) {
                        this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
                        var o, l = n._length;
                        for (o = 1; o < l; o++) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                        r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                    } this.element.globalData.renderer.save(!0), a.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(e, t) {
            var r = {
                    data: e,
                    type: e.ty,
                    preTransforms: this.transformsManager.addTransformSequence(t),
                    transforms: [],
                    elements: [],
                    closed: !0 === e.hd
                },
                n = {};
            if ("fl" == e.ty || "st" == e.ty ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bm_floor(n.c.v[0]) + "," + bm_floor(n.c.v[1]) + "," + bm_floor(n.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
                    k: 0
                }, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
                    k: 0
                }, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" == e.ty || "gs" == e.ty) {
                if (r.lc = this.lcEnum[e.lc] || "round", r.lj = this.ljEnum[e.lj] || "round", 1 == e.lj && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
                    var i = new DashProperty(this, e.d, "canvas", this);
                    n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
                }
            } else r.r = 2 === e.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), n.style = r, n
        }, CVShapeElement.prototype.createGroupElement = function(e) {
            return {
                it: [],
                prevViewData: []
            }
        }, CVShapeElement.prototype.createTransformElement = function(e) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, e.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
                }
            }
        }, CVShapeElement.prototype.createShapeElement = function(e) {
            var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
            return this.shapes.push(t), this.addShapeToModifiers(t), t
        }, CVShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var e, t = this.itemsData.length;
            for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
            var t, r = this.stylesList.length;
            for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var e, t = this.stylesList.length;
            for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(e) {
            var t, r = e.length;
            for (t = 0; t < r; t += 1) e[t].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(e, t, r, n, i) {
            var a, s, o, l, h, u, c = e.length - 1,
                p = [],
                f = [],
                d = [].concat(i);
            for (a = c; a >= 0; a -= 1) {
                if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, "fl" == e[a].ty || "st" == e[a].ty || "gf" == e[a].ty || "gs" == e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], d), p.push(t[a].style);
                else if ("gr" == e[a].ty) {
                    if (l)
                        for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
                    else t[a] = this.createGroupElement(e[a]);
                    this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, d)
                } else "tr" == e[a].ty ? (l || (u = this.createTransformElement(e[a]), t[a] = u), d.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" == e[a].ty || "rc" == e[a].ty || "el" == e[a].ty || "sr" == e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" == e[a].ty || "rd" == e[a].ty ? (l ? (h = t[a]).closed = !1 : ((h = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" == e[a].ty && (l ? (h = t[a]).closed = !0 : (h = ShapeModifiers.getModifier(e[a].ty), t[a] = h, h.init(this, e, a, t), this.shapeModifiers.push(h), n = !1), f.push(h));
                this.addProcessedElement(e[a], a + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(p), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
            (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
            var e, t, r, n, i, a, s, o, l, h = this.stylesList.length,
                u = this.globalData.renderer,
                c = this.globalData.canvasContext;
            for (e = 0; e < h; e += 1)
                if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (u.save(), a = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, u.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                        for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) "m" == s[n].t ? c.moveTo(s[n].p[0], s[n].p[1]) : "c" == s[n].t ? c.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : c.closePath();
                        "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter))
                    }
                    "st" !== o && "gs" !== o && c.fill(l.r), u.restore()
                }
        }, CVShapeElement.prototype.renderShape = function(e, t, r, n) {
            var i, a;
            for (a = e, i = t.length - 1; i >= 0; i -= 1) "tr" == t[i].ty ? (a = r[i].transform, this.renderShapeTransform(e, a)) : "sh" == t[i].ty || "el" == t[i].ty || "rc" == t[i].ty || "sr" == t[i].ty ? this.renderPath(t[i], r[i]) : "fl" == t[i].ty ? this.renderFill(t[i], r[i], a) : "st" == t[i].ty ? this.renderStroke(t[i], r[i], a) : "gf" == t[i].ty || "gs" == t[i].ty ? this.renderGradientFill(t[i], r[i], a) : "gr" == t[i].ty ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
            n && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
            if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                var r, n, i, a = e.trNodes,
                    s = t.paths,
                    o = s._length;
                a.length = 0;
                var l = e.transforms.finalTransform;
                for (i = 0; i < o; i += 1) {
                    var h = s.shapes[i];
                    if (h && h.v) {
                        for (n = h._length, r = 1; r < n; r += 1) 1 === r && a.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), a.push({
                            t: "c",
                            pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                        });
                        1 === n && a.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), h.c && n && (a.push({
                            t: "c",
                            pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                        }), a.push({
                            t: "z"
                        }))
                    }
                }
                e.trNodes = a
            }
        }, CVShapeElement.prototype.renderPath = function(e, t) {
            if (!0 !== e.hd && e._shouldRender) {
                var r, n = t.styledShapes.length;
                for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
            }
        }, CVShapeElement.prototype.renderFill = function(e, t, r) {
            var n = t.style;
            (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
            var n = t.style;
            if (!n.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) {
                var i = this.globalData.canvasContext,
                    a = t.s.v,
                    s = t.e.v;
                if (1 === e.t) p = i.createLinearGradient(a[0], a[1], s[0], s[1]);
                else var o = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)),
                    l = Math.atan2(s[1] - a[1], s[0] - a[0]),
                    h = o * (t.h.v >= 1 ? .99 : t.h.v <= -1 ? -.99 : t.h.v),
                    u = Math.cos(l + t.a.v) * h + a[0],
                    c = Math.sin(l + t.a.v) * h + a[1],
                    p = i.createRadialGradient(u, c, 0, a[0], a[1], o);
                var f, d = e.g.p,
                    m = t.g.c,
                    g = 1;
                for (f = 0; f < d; f += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * f + 1]), p.addColorStop(m[4 * f] / 100, "rgba(" + m[4 * f + 1] + "," + m[4 * f + 2] + "," + m[4 * f + 3] + "," + g + ")");
                n.grd = p
            }
            n.coOp = t.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
            var n = t.style,
                i = t.d;
            i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var e = this.canvasContext;
            e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var e = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
            var t = !1;
            e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
            var r = !1;
            e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
            var n, i, a = this.globalData.fontManager.getFontByName(e.f),
                s = e.l,
                o = this.mHelper;
            this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
            var l, h, u, c, p, f, d, m, g, y, v = this.data.singleShape,
                b = e.tr / 1e3 * e.finalSize,
                x = 0,
                E = 0,
                S = !0,
                k = 0;
            for (n = 0; n < i; n += 1) {
                for (h = (l = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && l.data || {}, o.reset(), v && s[n].n && (x = -b, E += e.yOffset, E += S ? 1 : 0, S = !1), d = (p = h.shapes ? h.shapes[0].it : []).length, o.scale(e.finalSize / 100, e.finalSize / 100), v && this.applyTextPropertiesToMatrix(e, o, s[n].line, x, E), g = createSizedArray(d), f = 0; f < d; f += 1) {
                    for (c = p[f].ks.k.i.length, m = p[f].ks.k, y = [], u = 1; u < c; u += 1) 1 == u && y.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), y.push(o.applyToX(m.o[u - 1][0], m.o[u - 1][1], 0), o.applyToY(m.o[u - 1][0], m.o[u - 1][1], 0), o.applyToX(m.i[u][0], m.i[u][1], 0), o.applyToY(m.i[u][0], m.i[u][1], 0), o.applyToX(m.v[u][0], m.v[u][1], 0), o.applyToY(m.v[u][0], m.v[u][1], 0));
                    y.push(o.applyToX(m.o[u - 1][0], m.o[u - 1][1], 0), o.applyToY(m.o[u - 1][0], m.o[u - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), g[f] = y
                }
                v && (x += s[n].l, x += b), this.textSpans[k] ? this.textSpans[k].elem = g : this.textSpans[k] = {
                    elem: g
                }, k += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var e, t, r, n, i, a, s = this.canvasContext;
            this.finalTransform.mat.props;
            s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, l = this.textAnimator.renderedLetters,
                h = this.textProperty.currentData.l;
            t = h.length;
            var u, c, p = null,
                f = null,
                d = null;
            for (e = 0; e < t; e += 1)
                if (!h[e].n) {
                    if ((o = l[e]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                        for (o && o.fc ? p !== o.fc && (p = o.fc, s.fillStyle = o.fc) : p !== this.values.fill && (p = this.values.fill, s.fillStyle = this.values.fill), n = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                            for (a = (c = u[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (o && o.sw ? d !== o.sw && (d = o.sw, s.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, s.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, s.strokeStyle = this.values.stroke), n = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                            for (a = (c = u[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    o && this.globalData.renderer.restore()
                }
        }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var e;
            this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
        }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(e, t) {
            for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
            r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var e;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
            else {
                e = createNS("svg");
                var t = this.comp.data ? this.comp.data : this.globalData.compSize;
                e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
        }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
            var r, n = e.length;
            for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
            return t
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
            var r, n, i, a, s, o = e.sh.v,
                l = e.transformers,
                h = o._length;
            if (!(h <= 1)) {
                for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
                o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
            }
        }, HShapeElement.prototype.checkBounds = function(e, t, r, n, i) {
            this.getBoundsOfCurve(e, t, r, n);
            var a = this.shapeBoundingBox;
            i.x = bm_min(a.left, i.x), i.xMax = bm_max(a.right, i.xMax), i.y = bm_min(a.top, i.y), i.yMax = bm_max(a.bottom, i.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, n) {
            for (var i, a, s, o, l, h, u, c = [
                    [e[0], n[0]],
                    [e[1], n[1]]
                ], p = 0; p < 2; ++p)
                if (a = 6 * e[p] - 12 * t[p] + 6 * r[p], i = -3 * e[p] + 9 * t[p] - 9 * r[p] + 3 * n[p], s = 3 * t[p] - 3 * e[p], a |= 0, s |= 0, 0 !== (i |= 0))(l = a * a - 4 * s * i) < 0 || (0 < (h = (-a + bm_sqrt(l)) / (2 * i)) && h < 1 && c[p].push(this.calculateF(h, e, t, r, n, p)), 0 < (u = (-a - bm_sqrt(l)) / (2 * i)) && u < 1 && c[p].push(this.calculateF(u, e, t, r, n, p)));
                else {
                    if (0 === a) continue;
                    0 < (o = -s / a) && o < 1 && c[p].push(this.calculateF(o, e, t, r, n, p))
                } this.shapeBoundingBox.left = bm_min.apply(null, c[0]), this.shapeBoundingBox.top = bm_min.apply(null, c[1]), this.shapeBoundingBox.right = bm_max.apply(null, c[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(e, t, r, n, i, a) {
            return bm_pow(1 - e, 3) * t[a] + 3 * bm_pow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bm_pow(e, 2) * n[a] + bm_pow(e, 3) * i[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
            var r, n = e.length;
            for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it && this.calculateBoundingBox(e[r].it, t)
        }, HShapeElement.prototype.currentBoxContains = function(e) {
            return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var e = this.tempBoundingBox,
                    t = 999999;
                if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
                var r = !1;
                this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), (r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) && (this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var e = createNS("g");
                this.maskedElement.appendChild(e), this.innerElem = e
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
            var e = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
            var t = this.innerElem.style;
            t.color = t.fill = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)", e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
            var r, n, i = this.globalData.fontManager.getFontByName(e.f);
            if (!this.globalData.fontManager.chars)
                if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
                else {
                    t.fontFamily = i.fFamily;
                    var a = e.fWeight,
                        s = e.fStyle;
                    t.fontStyle = s, t.fontWeight = a
                } var o, l, h, u = e.l;
            n = u.length;
            var c, p = this.mHelper,
                f = "",
                d = 0;
            for (r = 0; r < n; r += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? h = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(o), styleDiv(l)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(o = createTag("span")), l.appendChild(o)), this.globalData.fontManager.chars) {
                    var m, g = this.globalData.fontManager.getCharData(e.finalText[r], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                    if (m = g ? g.data : null, p.reset(), m && m.shapes && (c = m.shapes[0].it, p.scale(e.finalSize / 100, e.finalSize / 100), f = this.createPathShape(p, c), o.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(o);
                    else {
                        if (this.innerElem.appendChild(l), m && m.shapes) {
                            document.body.appendChild(h);
                            var y = h.getBBox();
                            h.setAttribute("width", y.width + 2), h.setAttribute("height", y.height + 2), h.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2)), h.style.transform = h.style.webkitTransform = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)", u[r].yOffset = y.y - 1
                        } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                        l.appendChild(h)
                    }
                } else o.textContent = u[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(l), o.style.transform = o.style.webkitTransform = "translate3d(0," + -e.finalSize / 1.2 + "px,0)");
                this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1
            }
            for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
        }, HTextElement.prototype.renderInnerContent = function() {
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var e, t, r, n, i, a = 0,
                    s = this.textAnimator.renderedLetters,
                    o = this.textProperty.currentData.l;
                for (t = o.length, e = 0; e < t; e += 1) o[e].n ? a += 1 : (n = this.textSpans[e], i = this.textPaths[e], r = s[a], a += 1, r._mdf.m && (this.isMasked ? n.setAttribute("transform", r.m) : n.style.transform = n.style.webkitTransform = r.m), n.style.opacity = r.o, r.sw && r._mdf.sw && i.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && i.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (i.setAttribute("fill", r.fc), i.style.color = r.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var l = this.innerElem.getBBox();
                    this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height));
                    this.currentBBox.w === l.width + 2 && this.currentBBox.h === l.height + 2 && this.currentBBox.x === l.x - 1 && this.currentBBox.y === l.y - 1 || (this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var e = this.globalData.getAssetsPath(this.assetData),
                t = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
            var e, t, r = this.comp.threeDElements.length;
            for (e = 0; e < r; e += 1) "3d" === (t = this.comp.threeDElements[e]).type && (t.perspectiveElem.style.perspective = t.perspectiveElem.style.webkitPerspective = this.pe.v + "px", t.container.style.transformOrigin = t.container.style.mozTransformOrigin = t.container.style.webkitTransformOrigin = "0px 0px 0px", t.perspectiveElem.style.transform = t.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var e, t, r = this._isFirstFrame;
            if (this.hierarchy)
                for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                        var n = this.hierarchy[e].finalTransform.mProp;
                        this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var i;
                    i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                        s = [i[0] / a, i[1] / a, i[2] / a],
                        o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                        l = Math.atan2(s[1], o),
                        h = Math.atan2(s[0], -s[2]);
                    this.mat.rotateY(h).rotateX(-l)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var u = !this._prevMat.equals(this.mat);
                if ((u || this.pe._mdf) && this.comp.threeDElements) {
                    var c;
                    for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1) "3d" === (c = this.comp.threeDElements[e]).type && (u && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(e) {
            this.prepareProperties(e, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
            return null
        }, HEffects.prototype.renderFrame = function() {};
        var animationManager = function() {
                var e = {},
                    t = [],
                    r = 0,
                    n = 0,
                    i = 0,
                    a = !0,
                    s = !1;

                function o(e) {
                    for (var r = 0, i = e.target; r < n;) t[r].animation === i && (t.splice(r, 1), r -= 1, n -= 1, i.isPaused || u()), r += 1
                }

                function l(e, r) {
                    if (!e) return null;
                    for (var i = 0; i < n;) {
                        if (t[i].elem == e && null !== t[i].elem) return t[i].animation;
                        i += 1
                    }
                    var a = new AnimationItem;
                    return c(a, e), a.setData(e, r), a
                }

                function h() {
                    i += 1, d()
                }

                function u() {
                    i -= 1
                }

                function c(e, r) {
                    e.addEventListener("destroy", o), e.addEventListener("_active", h), e.addEventListener("_idle", u), t.push({
                        elem: r,
                        animation: e
                    }), n += 1
                }

                function p(e) {
                    var o, l = e - r;
                    for (o = 0; o < n; o += 1) t[o].animation.advanceTime(l);
                    r = e, i && !s ? window.requestAnimationFrame(p) : a = !0
                }

                function f(e) {
                    r = e, window.requestAnimationFrame(p)
                }

                function d() {
                    !s && i && a && (window.requestAnimationFrame(f), a = !1)
                }
                return e.registerAnimation = l, e.loadAnimation = function(e) {
                    var t = new AnimationItem;
                    return c(t, null), t.setParams(e), t
                }, e.setSpeed = function(e, r) {
                    var i;
                    for (i = 0; i < n; i += 1) t[i].animation.setSpeed(e, r)
                }, e.setDirection = function(e, r) {
                    var i;
                    for (i = 0; i < n; i += 1) t[i].animation.setDirection(e, r)
                }, e.play = function(e) {
                    var r;
                    for (r = 0; r < n; r += 1) t[r].animation.play(e)
                }, e.pause = function(e) {
                    var r;
                    for (r = 0; r < n; r += 1) t[r].animation.pause(e)
                }, e.stop = function(e) {
                    var r;
                    for (r = 0; r < n; r += 1) t[r].animation.stop(e)
                }, e.togglePause = function(e) {
                    var r;
                    for (r = 0; r < n; r += 1) t[r].animation.togglePause(e)
                }, e.searchAnimations = function(e, t, r) {
                    var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        a = i.length;
                    for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], e);
                    if (t && 0 === a) {
                        r || (r = "svg");
                        var s = document.getElementsByTagName("body")[0];
                        s.innerHTML = "";
                        var o = createTag("div");
                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, e)
                    }
                }, e.resize = function() {
                    var e;
                    for (e = 0; e < n; e += 1) t[e].animation.resize()
                }, e.goToAndStop = function(e, r, i) {
                    var a;
                    for (a = 0; a < n; a += 1) t[a].animation.goToAndStop(e, r, i)
                }, e.destroy = function(e) {
                    var r;
                    for (r = n - 1; r >= 0; r -= 1) t[r].animation.destroy(e)
                }, e.freeze = function() {
                    s = !0
                }, e.unfreeze = function() {
                    s = !1, d()
                }, e.getRegisteredAnimations = function() {
                    var e, r = t.length,
                        n = [];
                    for (e = 0; e < r; e += 1) n.push(t[e].animation);
                    return n
                }, e
            }(),
            AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
            };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
            e.context && (this.context = e.context), (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
            var t = e.animType ? e.animType : e.renderer ? e.renderer : "svg";
            switch (t) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, e.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, e.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this, e.rendererSettings)
            }
            this.imagePreloader.setCacheType(t), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? this.loop = !0 : !1 === e.loop ? this.loop = !1 : this.loop = parseInt(e.loop), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !e.hasOwnProperty("autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.animationData ? this.configAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(e.path, this.configAnimation.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this)))
        }, AnimationItem.prototype.setData = function(e, t) {
            var r = {
                    wrapper: e,
                    animationData: t ? "object" == typeof t ? t : JSON.parse(t) : null
                },
                n = e.attributes;
            r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
            var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
            "" === i || (r.loop = "false" !== i && ("true" === i || parseInt(i)));
            var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
            r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
        }, AnimationItem.prototype.includeLayers = function(e) {
            e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
            var t, r, n = this.animationData.layers,
                i = n.length,
                a = e.layers,
                s = a.length;
            for (r = 0; r < s; r += 1)
                for (t = 0; t < i;) {
                    if (n[t].id == a[r].id) {
                        n[t] = a[r];
                        break
                    }
                    t += 1
                }
            if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
                for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(e.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var e = this.animationData.segments;
            if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            var t = e.shift();
            this.timeCompleted = t.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(e) {
            if (this.renderer) try {
                this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
            } catch (e) {
                this.triggerConfigError(e)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
            this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
        }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize()
        }, AnimationItem.prototype.setSubframe = function(e) {
            this.isSubframeEnabled = !!e
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
        }, AnimationItem.prototype.renderFrame = function() {
            if (!1 !== this.isLoaded) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (e) {
                this.triggerRenderFrameError(e)
            }
        }, AnimationItem.prototype.play = function(e) {
            e && this.name != e || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(e) {
            e && this.name != e || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
        }, AnimationItem.prototype.togglePause = function(e) {
            e && this.name != e || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(e) {
            e && this.name != e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
            r && this.name != r || (t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier), this.pause())
        }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
            this.goToAndStop(e, t, r), this.play()
        }, AnimationItem.prototype.advanceTime = function(e) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var t = this.currentRawFrame + e * this.frameModifier,
                    r = !1;
                t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(e, t) {
            this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = e[0] - e[1], this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = e[1] - e[0], this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(e, t) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.timeCompleted = this.totalFrames = t - e, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(e, t) {
            if (t && (this.segments.length = 0), "object" == typeof e[0]) {
                var r, n = e.length;
                for (r = 0; r < n; r += 1) this.segments.push(e[r])
            } else this.segments.push(e);
            this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(e) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(e) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
        }, AnimationItem.prototype.destroy = function(e) {
            e && this.name != e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
            this.currentRawFrame = e, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(e) {
            this.playSpeed = e, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(e) {
            this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(e) {
            var t = "";
            if (e.e) t = e.p;
            else if (this.assetsPath) {
                var r = e.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), t = this.assetsPath + r
            } else t = this.path, t += e.u ? e.u : "", t += e.p;
            return t
        }, AnimationItem.prototype.getAssetData = function(e) {
            for (var t = 0, r = this.assets.length; t < r;) {
                if (e == this.assets[t].id) return this.assets[t];
                t += 1
            }
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(e) {
            return e ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.trigger = function(e) {
            if (this._cbs && this._cbs[e]) switch (e) {
                case "enterFrame":
                    this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(e, new BMDestroyEvent(e, this));
                    break;
                default:
                    this.triggerEvent(e)
            }
            "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
            var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
            this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        }, AnimationItem.prototype.triggerConfigError = function(e) {
            var t = new BMConfigErrorEvent(e, this.currentFrame);
            this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        };
        var Expressions = function() {
            var e = {};
            return e.initExpressions = function(e) {
                var t = 0,
                    r = [];
                e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() {
                    t += 1
                }, e.renderer.globalData.popExpression = function() {
                    0 === (t -= 1) && function() {
                        var e, t = r.length;
                        for (e = 0; e < t; e += 1) r[e].release();
                        r.length = 0
                    }()
                }, e.renderer.globalData.registerExpressionProperty = function(e) {
                    -1 === r.indexOf(e) && r.push(e)
                }
            }, e
        }();
        expressionsPlugin = Expressions;
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null;

                function $bm_isInstanceOfArray(e) {
                    return e.constructor === Array || e.constructor === Float32Array
                }

                function isNumerable(e, t) {
                    return "number" === e || "boolean" === e || "string" === e || t instanceof Number
                }

                function $bm_neg(e) {
                    var t = typeof e;
                    if ("number" === t || "boolean" === t || e instanceof Number) return -e;
                    if ($bm_isInstanceOfArray(e)) {
                        var r, n = e.length,
                            i = [];
                        for (r = 0; r < n; r += 1) i[r] = -e[r];
                        return i
                    }
                    return e.propType ? e.v : void 0
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(e, t) {
                    var r = typeof e,
                        n = typeof t;
                    if ("string" === r || "string" === n) return e + t;
                    if (isNumerable(r, e) && isNumerable(n, t)) return e + t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] = e[0] + t, e;
                    if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;

                function sub(e, t) {
                    var r = typeof e,
                        n = typeof t;
                    if (isNumerable(r, e) && isNumerable(n, t)) return "string" === r && (e = parseInt(e)), "string" === n && (t = parseInt(t)), e - t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] = e[0] - t, e;
                    if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                        return o
                    }
                    return 0
                }

                function mul(e, t) {
                    var r, n, i, a = typeof e,
                        s = typeof t;
                    if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                        for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
                        return r
                    }
                    if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                        for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
                        return r
                    }
                    return 0
                }

                function div(e, t) {
                    var r, n, i, a = typeof e,
                        s = typeof t;
                    if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                        for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
                        return r
                    }
                    if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                        for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
                        return r
                    }
                    return 0
                }

                function mod(e, t) {
                    return "string" == typeof e && (e = parseInt(e)), "string" == typeof t && (t = parseInt(t)), e % t
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(e, t, r) {
                    if (t > r) {
                        var n = r;
                        r = t, t = n
                    }
                    return Math.min(Math.max(e, t), r)
                }

                function radiansToDegrees(e) {
                    return e / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(e) {
                    return e * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(e, t) {
                    if ("number" == typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
                    t || (t = helperLengthArray);
                    var r, n = Math.min(e.length, t.length),
                        i = 0;
                    for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
                    return Math.sqrt(i)
                }

                function normalize(e) {
                    return div(e, length(e))
                }

                function rgbToHsl(e) {
                    var t, r, n = e[0],
                        i = e[1],
                        a = e[2],
                        s = Math.max(n, i, a),
                        o = Math.min(n, i, a),
                        l = (s + o) / 2;
                    if (s == o) t = r = 0;
                    else {
                        var h = s - o;
                        switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                            case n:
                                t = (i - a) / h + (i < a ? 6 : 0);
                                break;
                            case i:
                                t = (a - n) / h + 2;
                                break;
                            case a:
                                t = (n - i) / h + 4
                        }
                        t /= 6
                    }
                    return [t, r, l, e[3]]
                }

                function hue2rgb(e, t, r) {
                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                }

                function hslToRgb(e) {
                    var t, r, n, i = e[0],
                        a = e[1],
                        s = e[2];
                    if (0 === a) t = r = n = s;
                    else {
                        var o = s < .5 ? s * (1 + a) : s + a - s * a,
                            l = 2 * s - o;
                        t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
                    }
                    return [t, r, n, e[3]]
                }

                function linear(e, t, r, n, i) {
                    if (void 0 !== n && void 0 !== i || (n = t, i = r, t = 0, r = 1), r < t) {
                        var a = r;
                        r = t, t = a
                    }
                    if (e <= t) return n;
                    if (e >= r) return i;
                    var s = r === t ? 0 : (e - t) / (r - t);
                    if (!n.length) return n + (i - n) * s;
                    var o, l = n.length,
                        h = createTypedArray("float32", l);
                    for (o = 0; o < l; o += 1) h[o] = n[o] + (i[o] - n[o]) * s;
                    return h
                }

                function random(e, t) {
                    if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                        var r, n = t.length;
                        e || (e = createTypedArray("float32", n));
                        var i = createTypedArray("float32", n),
                            a = BMMath.random();
                        for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
                        return i
                    }
                    return void 0 === e && (e = 0), e + BMMath.random() * (t - e)
                }

                function createPath(e, t, r, n) {
                    var i, a = e.length,
                        s = shape_pool.newElement();
                    s.setPathData(!!n, a);
                    var o, l, h = [0, 0];
                    for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : h, l = r && r[i] ? r[i] : h, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
                    return s
                }

                function initiateExpression(elem, data, property) {
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                        scoped_bm_rt;
                    if (data.xf) {
                        var i, len = data.xf.length;
                        for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                    }
                    var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(e, t) {
                            var r, n, i = this.pv.length ? this.pv.length : 1,
                                a = createTypedArray("float32", i);
                            var s = Math.floor(5 * time);
                            for (r = 0, n = 0; r < s;) {
                                for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
                                r += 1
                            }
                            var o = 5 * time,
                                l = o - Math.floor(o),
                                h = createTypedArray("float32", i);
                            if (i > 1) {
                                for (n = 0; n < i; n += 1) h[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
                                return h
                            }
                            return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                        }.bind(this);

                    function loopInDuration(e, t) {
                        return loopIn(e, t, !0)
                    }

                    function loopOutDuration(e, t) {
                        return loopOut(e, t, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(e, t) {
                        var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                            n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                        return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
                    }

                    function easeOut(e, t, r, n, i) {
                        return applyEase(easeOutBez, e, t, r, n, i)
                    }

                    function easeIn(e, t, r, n, i) {
                        return applyEase(easeInBez, e, t, r, n, i)
                    }

                    function ease(e, t, r, n, i) {
                        return applyEase(easeInOutBez, e, t, r, n, i)
                    }

                    function applyEase(e, t, r, n, i, a) {
                        void 0 === i ? (i = r, a = n) : t = (t - r) / (n - r);
                        var s = e(t = t > 1 ? 1 : t < 0 ? 0 : t);
                        if ($bm_isInstanceOfArray(i)) {
                            var o, l = i.length,
                                h = createTypedArray("float32", l);
                            for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
                            return h
                        }
                        return (a - i) * s + i
                    }

                    function nearestKey(e) {
                        var t, r, n, i = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                            else {
                                for (t = 0; t < i - 1; t += 1) {
                                    if (e === data.k[t].t) {
                                        r = t + 1, n = data.k[t].t;
                                        break
                                    }
                                    if (e > data.k[t].t && e < data.k[t + 1].t) {
                                        e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
                                        break
                                    }
                                } - 1 === r && (r = t + 1, n = data.k[t].t)
                            }
                        else r = 0, n = 0;
                        var a = {};
                        return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
                    }

                    function key(e) {
                        var t, r, n;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
                        e -= 1, t = {
                            time: data.k[e].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var i = data.k[e].hasOwnProperty("s") ? data.k[e].s : data.k[e - 1].e;
                        for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
                        return t
                    }

                    function framesToTime(e, t) {
                        return t || (t = elem.comp.globalData.frameRate), e / t
                    }

                    function timeToFrames(e, t) {
                        return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
                    }

                    function seedRandom(e) {
                        BMMath.seedrandom(randSeed + e)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(e, t) {
                        return "string" == typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : ""
                    }

                    function substr(e, t) {
                        return "string" == typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : ""
                    }

                    function posterizeTime(e) {
                        time = 0 === e ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
                    }
                    var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(e) {
                        return value = e, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                    }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob
            }(),
            expressionHelpers = {
                searchExpressions: function(e, t, r) {
                    t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
                },
                getSpeedAtTime: function(e) {
                    var t = this.getValueAtTime(e),
                        r = this.getValueAtTime(e + -.01),
                        n = 0;
                    if (t.length) {
                        var i;
                        for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
                        n = 100 * Math.sqrt(n)
                    } else n = 0;
                    return n
                },
                getVelocityAtTime: function(e) {
                    if (void 0 !== this.vel) return this.vel;
                    var t, r, n = this.getValueAtTime(e),
                        i = this.getValueAtTime(e + -.001);
                    if (n.length)
                        for (t = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) t[r] = (i[r] - n[r]) / -.001;
                    else t = (i - n) / -.001;
                    return t
                },
                getValueAtTime: function(e) {
                    return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(e) {
                    this.propertyGroup = e
                }
            };
        ! function() {
            function e(e, t, r) {
                if (!this.k || !this.keyframes) return this.pv;
                e = e ? e.toLowerCase() : "";
                var n, i, a, s, o, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    u = h[h.length - 1].t;
                if (l <= u) return this.pv;
                if (r ? i = u - (n = t ? Math.abs(u - elem.comp.globalData.frameRate * t) : Math.max(0, u - this.elem.data.ip)) : ((!t || t > h.length - 1) && (t = h.length - 1), n = u - (i = h[h.length - 1 - t].t)), "pingpong" === e) {
                    if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === e) {
                        var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((l - i) / n);
                        if (this.pv.length) {
                            for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - c[a]) * d + f[a];
                            return o
                        }
                        return (p - c) * d + f
                    }
                    if ("continue" === e) {
                        var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4;
                            return o
                        }
                        return m + (l - u) / .001 * (m - g)
                    }
                }
                return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
            }

            function t(e, t, r) {
                if (!this.k) return this.pv;
                e = e ? e.toLowerCase() : "";
                var n, i, a, s, o, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    u = h[0].t;
                if (l >= u) return this.pv;
                if (r ? i = u + (n = t ? Math.abs(elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - u)) : ((!t || t > h.length - 1) && (t = h.length - 1), n = (i = h[t].t) - u), "pingpong" === e) {
                    if (Math.floor((u - l) / n) % 2 == 0) return this.getValueAtTime(((u - l) % n + u) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === e) {
                        var c = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime((n - (u - l) % n + u) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((u - l) / n) + 1;
                        if (this.pv.length) {
                            for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (p[a] - c[a]) * d;
                            return o
                        }
                        return f - (p - c) * d
                    }
                    if ("continue" === e) {
                        var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * (u - l) / .001;
                            return o
                        }
                        return m + (m - g) * (u - l) / .001
                    }
                }
                return this.getValueAtTime((n - (u - l) % n + u) / this.comp.globalData.frameRate, 0)
            }

            function r(e, t) {
                if (!this.k) return this.pv;
                if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv;
                var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    a = i - e,
                    s = t > 1 ? (i + e - a) / (t - 1) : 1,
                    o = 0,
                    l = 0;
                for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) {
                    if (n = this.getValueAtTime(a + o * s), this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
                    else r += n;
                    o += 1
                }
                if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1) r[l] /= t;
                else r /= t;
                return r
            }

            function n(e) {
                console.warn("Transform at time not supported")
            }

            function i(e) {}
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(e, t, r) {
                var s = a(e, t, r);
                return s.dynamicProperties.length ? s.getValueAtTime = n.bind(s) : s.getValueAtTime = i.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
            };
            var s = PropertyFactory.getProp;
            PropertyFactory.getProp = function(n, i, a, o, l) {
                var h = s(n, i, a, o, l);
                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === i.a ? i.k.length : 0, h.propertyIndex = i.ix;
                var u = 0;
                return 0 !== a && (u = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), h._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: u
                }, expressionHelpers.searchExpressions(n, i, h), h.k && l.addDynamicProperty(h), h
            };
            var o = ShapePropertyFactory.getConstructorFunction(),
                l = ShapePropertyFactory.getKeyframedConstructorFunction();

            function h() {}
            h.prototype = {
                vertices: function(e, t) {
                    this.k && this.getValue();
                    var r = this.v;
                    void 0 !== t && (r = this.getValueAtTime(t, 0));
                    var n, i = r._length,
                        a = r[e],
                        s = r.v,
                        o = createSizedArray(i);
                    for (n = 0; n < i; n += 1) o[n] = "i" === e || "o" === e ? [a[n][0] - s[n][0], a[n][1] - s[n][1]] : [a[n][0], a[n][1]];
                    return o
                },
                points: function(e) {
                    return this.vertices("v", e)
                },
                inTangents: function(e) {
                    return this.vertices("i", e)
                },
                outTangents: function(e) {
                    return this.vertices("o", e)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(e, t) {
                    var r = this.v;
                    void 0 !== t && (r = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                    for (var n, i = this._segmentsLength, a = i.lengths, s = i.totalLength * e, o = 0, l = a.length, h = 0; o < l;) {
                        if (h + a[o].addedLength > s) {
                            var u = o,
                                c = r.c && o === l - 1 ? 0 : o + 1,
                                p = (s - h) / a[o].addedLength;
                            n = bez.getPointInSegment(r.v[u], r.v[c], r.o[u], r.i[c], p, a[o]);
                            break
                        }
                        h += a[o].addedLength, o += 1
                    }
                    return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
                },
                vectorOnPath: function(e, t, r) {
                    e = 1 == e ? this.v.c ? 0 : .999 : e;
                    var n = this.pointOnPath(e, t),
                        i = this.pointOnPath(e + .001, t),
                        a = i[0] - n[0],
                        s = i[1] - n[1],
                        o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
                    return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
                },
                tangentOnPath: function(e, t) {
                    return this.vectorOnPath(e, t, "tangent")
                },
                normalOnPath: function(e, t) {
                    return this.vectorOnPath(e, t, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(e) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shape_pool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var u = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(e, t, r, n, i) {
                var a = u(e, t, r, n, i);
                return a.propertyIndex = t.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === r && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a
            }
        }(), TextProperty.prototype.getExpressionValue = function(e, t) {
            var r = this.calculateExpression(t);
            if (e.t !== r) {
                var n = {};
                return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
            }
            return e
        }, TextProperty.prototype.searchProperty = function() {
            var e = this.searchKeyframes(),
                t = this.searchExpressions();
            return this.kf = e || t, this.kf
        }, TextProperty.prototype.searchExpressions = function() {
            if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
        };
        var ShapeExpressionInterface = function() {
                function e(e, c, p) {
                    var f, d = [],
                        m = e ? e.length : 0;
                    for (f = 0; f < m; f += 1) "gr" == e[f].ty ? d.push(t(e[f], c[f], p)) : "fl" == e[f].ty ? d.push(r(e[f], c[f], p)) : "st" == e[f].ty ? d.push(n(e[f], c[f], p)) : "tm" == e[f].ty ? d.push(i(e[f], c[f], p)) : "tr" == e[f].ty || ("el" == e[f].ty ? d.push(a(e[f], c[f], p)) : "sr" == e[f].ty ? d.push(s(e[f], c[f], p)) : "sh" == e[f].ty ? d.push(u(e[f], c[f], p)) : "rc" == e[f].ty ? d.push(o(e[f], c[f], p)) : "rd" == e[f].ty ? d.push(l(e[f], c[f], p)) : "rp" == e[f].ty && d.push(h(e[f], c[f], p)));
                    return d
                }

                function t(t, r, n) {
                    var i = function(e) {
                        switch (e) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return i.content;
                            default:
                                return i.transform
                        }
                    };
                    i.propertyGroup = function(e) {
                        return 1 === e ? i : n(e - 1)
                    };
                    var a = function(t, r, n) {
                            var i, a = function(e) {
                                for (var t = 0, r = i.length; t < r;) {
                                    if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
                                    t += 1
                                }
                                if ("number" == typeof e) return i[e - 1]
                            };
                            return a.propertyGroup = function(e) {
                                return 1 === e ? a : n(e - 1)
                            }, i = e(t.it, r.it, a.propertyGroup), a.numProperties = i.length, a.propertyIndex = t.cix, a._name = t.nm, a
                        }(t, r, i.propertyGroup),
                        s = function(e, t, r) {
                            function n(e) {
                                return 1 == e ? i : r(--e)
                            }
                            t.transform.mProps.o.setGroupProperty(n), t.transform.mProps.p.setGroupProperty(n), t.transform.mProps.a.setGroupProperty(n), t.transform.mProps.s.setGroupProperty(n), t.transform.mProps.r.setGroupProperty(n), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(n), t.transform.mProps.sa.setGroupProperty(n));

                            function i(t) {
                                return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : void 0
                            }
                            return t.transform.op.setGroupProperty(n), Object.defineProperties(i, {
                                opacity: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(t.transform.mProps.sa)
                                },
                                _name: {
                                    value: e.nm
                                }
                            }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = r, i
                        }(t.it[t.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
                    return i.content = a, i.transform = s, Object.defineProperty(i, "_name", {
                        get: function() {
                            return t.nm
                        }
                    }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i
                }

                function r(e, t, r) {
                    function n(e) {
                        return "Color" === e || "color" === e ? n.color : "Opacity" === e || "opacity" === e ? n.opacity : void 0
                    }
                    return Object.defineProperties(n, {
                        color: {
                            get: ExpressionPropertyInterface(t.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(t.o)
                        },
                        _name: {
                            value: e.nm
                        },
                        mn: {
                            value: e.mn
                        }
                    }), t.c.setGroupProperty(r), t.o.setGroupProperty(r), n
                }

                function n(e, t, r) {
                    function n(e) {
                        return 1 === e ? ob : r(e - 1)
                    }

                    function i(e) {
                        return 1 === e ? l : n(e - 1)
                    }

                    function a(r) {
                        Object.defineProperty(l, e.d[r].nm, {
                            get: ExpressionPropertyInterface(t.d.dataProps[r].p)
                        })
                    }
                    var s, o = e.d ? e.d.length : 0,
                        l = {};
                    for (s = 0; s < o; s += 1) a(s), t.d.dataProps[s].p.setGroupProperty(i);

                    function h(e) {
                        return "Color" === e || "color" === e ? h.color : "Opacity" === e || "opacity" === e ? h.opacity : "Stroke Width" === e || "stroke width" === e ? h.strokeWidth : void 0
                    }
                    return Object.defineProperties(h, {
                        color: {
                            get: ExpressionPropertyInterface(t.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(t.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(t.w)
                        },
                        dash: {
                            get: function() {
                                return l
                            }
                        },
                        _name: {
                            value: e.nm
                        },
                        mn: {
                            value: e.mn
                        }
                    }), t.c.setGroupProperty(n), t.o.setGroupProperty(n), t.w.setGroupProperty(n), h
                }

                function i(e, t, r) {
                    function n(e) {
                        return 1 == e ? i : r(--e)
                    }

                    function i(t) {
                        return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : void 0
                    }
                    return i.propertyIndex = e.ix, t.s.setGroupProperty(n), t.e.setGroupProperty(n), t.o.setGroupProperty(n), i.propertyIndex = e.ix, i.propertyGroup = r, Object.defineProperties(i, {
                        start: {
                            get: ExpressionPropertyInterface(t.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(t.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(t.o)
                        },
                        _name: {
                            value: e.nm
                        }
                    }), i.mn = e.mn, i
                }

                function a(e, t, r) {
                    function n(e) {
                        return 1 == e ? a : r(--e)
                    }
                    a.propertyIndex = e.ix;
                    var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                    function a(t) {
                        return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0
                    }
                    return i.s.setGroupProperty(n), i.p.setGroupProperty(n), Object.defineProperties(a, {
                        size: {
                            get: ExpressionPropertyInterface(i.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(i.p)
                        },
                        _name: {
                            value: e.nm
                        }
                    }), a.mn = e.mn, a
                }

                function s(e, t, r) {
                    function n(e) {
                        return 1 == e ? a : r(--e)
                    }
                    var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                    function a(t) {
                        return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius
                    }
                    return a.propertyIndex = e.ix, i.or.setGroupProperty(n), i.os.setGroupProperty(n), i.pt.setGroupProperty(n), i.p.setGroupProperty(n), i.r.setGroupProperty(n), e.ir && (i.ir.setGroupProperty(n), i.is.setGroupProperty(n)), Object.defineProperties(a, {
                        position: {
                            get: ExpressionPropertyInterface(i.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(i.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(i.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(i.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(i.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(i.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(i.is)
                        },
                        _name: {
                            value: e.nm
                        }
                    }), a.mn = e.mn, a
                }

                function o(e, t, r) {
                    function n(e) {
                        return 1 == e ? a : r(--e)
                    }
                    var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                    function a(t) {
                        return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0
                    }
                    return a.propertyIndex = e.ix, i.p.setGroupProperty(n), i.s.setGroupProperty(n), i.r.setGroupProperty(n), Object.defineProperties(a, {
                        position: {
                            get: ExpressionPropertyInterface(i.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(i.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(i.s)
                        },
                        _name: {
                            value: e.nm
                        }
                    }), a.mn = e.mn, a
                }

                function l(e, t, r) {
                    var n = t;

                    function i(t) {
                        if (e.r.ix === t || "Round Corners 1" === t) return i.radius
                    }
                    return i.propertyIndex = e.ix, n.rd.setGroupProperty((function(e) {
                        return 1 == e ? i : r(--e)
                    })), Object.defineProperties(i, {
                        radius: {
                            get: ExpressionPropertyInterface(n.rd)
                        },
                        _name: {
                            value: e.nm
                        }
                    }), i.mn = e.mn, i
                }

                function h(e, t, r) {
                    function n(e) {
                        return 1 == e ? a : r(--e)
                    }
                    var i = t;

                    function a(t) {
                        return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0
                    }
                    return a.propertyIndex = e.ix, i.c.setGroupProperty(n), i.o.setGroupProperty(n), Object.defineProperties(a, {
                        copies: {
                            get: ExpressionPropertyInterface(i.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(i.o)
                        },
                        _name: {
                            value: e.nm
                        }
                    }), a.mn = e.mn, a
                }

                function u(e, t, r) {
                    var n = t.sh;

                    function i(e) {
                        if ("Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e) return i.path
                    }
                    return n.setGroupProperty((function(e) {
                        return 1 == e ? i : r(--e)
                    })), Object.defineProperties(i, {
                        path: {
                            get: function() {
                                return n.k && n.getValue(), n
                            }
                        },
                        shape: {
                            get: function() {
                                return n.k && n.getValue(), n
                            }
                        },
                        _name: {
                            value: e.nm
                        },
                        ix: {
                            value: e.ix
                        },
                        propertyIndex: {
                            value: e.ix
                        },
                        mn: {
                            value: e.mn
                        }
                    }), i
                }
                return function(t, r, n) {
                    var i;

                    function a(e) {
                        if ("number" == typeof e) return i[e - 1];
                        for (var t = 0, r = i.length; t < r;) {
                            if (i[t]._name === e) return i[t];
                            t += 1
                        }
                    }
                    return a.propertyGroup = n, i = e(t, r, a), a.numProperties = i.length, a
                }
            }(),
            TextExpressionInterface = function(e) {
                var t;

                function r() {}
                return Object.defineProperty(r, "sourceText", {
                    get: function() {
                        e.textProperty.getValue();
                        var r = e.textProperty.currentData.t;
                        return void 0 !== r && (e.textProperty.currentData.t = void 0, (t = new String(r)).value = r || new String(r)), t
                    }
                }), r
            },
            LayerExpressionInterface = function() {
                function e(e, t) {
                    var r = new Matrix;
                    if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n, i = this._elem.hierarchy.length;
                        for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(r);
                        return r.applyToPointArray(e[0], e[1], e[2] || 0)
                    }
                    return r.applyToPointArray(e[0], e[1], e[2] || 0)
                }

                function t(e, t) {
                    var r = new Matrix;
                    if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n, i = this._elem.hierarchy.length;
                        for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(r);
                        return r.inversePoint(e)
                    }
                    return r.inversePoint(e)
                }

                function r(e) {
                    var t = new Matrix;
                    if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, n = this._elem.hierarchy.length;
                        for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                        return t.inversePoint(e)
                    }
                    return t.inversePoint(e)
                }

                function n() {
                    return [1, 1, 1, 1]
                }
                return function(i) {
                    var a;

                    function s(e) {
                        switch (e) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return s.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return a;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return s.effect
                        }
                    }
                    s.toWorld = e, s.fromWorld = t, s.toComp = e, s.fromComp = r, s.sampleImage = n, s.sourceRectAtTime = i.sourceRectAtTime.bind(i), s._elem = i;
                    var o = getDescriptor(a = TransformExpressionInterface(i.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(s, {
                        hasParent: {
                            get: function() {
                                return i.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return i.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(a, "rotation"),
                        scale: getDescriptor(a, "scale"),
                        position: getDescriptor(a, "position"),
                        opacity: getDescriptor(a, "opacity"),
                        anchorPoint: o,
                        anchor_point: o,
                        transform: {
                            get: function() {
                                return a
                            }
                        },
                        active: {
                            get: function() {
                                return i.isInRange
                            }
                        }
                    }), s.startTime = i.data.st, s.index = i.data.ind, s.source = i.data.refId, s.height = 0 === i.data.ty ? i.data.h : 100, s.width = 0 === i.data.ty ? i.data.w : 100, s.inPoint = i.data.ip / i.comp.globalData.frameRate, s.outPoint = i.data.op / i.comp.globalData.frameRate, s._name = i.data.nm, s.registerMaskInterface = function(e) {
                        s.mask = new MaskManagerInterface(e, i)
                    }, s.registerEffectsInterface = function(e) {
                        s.effect = e
                    }, s
                }
            }(),
            CompExpressionInterface = function(e) {
                function t(t) {
                    for (var r = 0, n = e.layers.length; r < n;) {
                        if (e.layers[r].nm === t || e.layers[r].ind === t) return e.elements[r].layerInterface;
                        r += 1
                    }
                    return null
                }
                return Object.defineProperty(t, "_name", {
                    value: e.data.nm
                }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
            },
            TransformExpressionInterface = function(e) {
                function t(e) {
                    switch (e) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return t.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return t.rotation;
                        case "ADBE Rotate X":
                            return t.xRotation;
                        case "ADBE Rotate Y":
                            return t.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return t.position;
                        case "ADBE Position_0":
                            return t.xPosition;
                        case "ADBE Position_1":
                            return t.yPosition;
                        case "ADBE Position_2":
                            return t.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return t.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return t.opacity
                    }
                }
                if (Object.defineProperty(t, "rotation", {
                        get: ExpressionPropertyInterface(e.r || e.rz)
                    }), Object.defineProperty(t, "zRotation", {
                        get: ExpressionPropertyInterface(e.rz || e.r)
                    }), Object.defineProperty(t, "xRotation", {
                        get: ExpressionPropertyInterface(e.rx)
                    }), Object.defineProperty(t, "yRotation", {
                        get: ExpressionPropertyInterface(e.ry)
                    }), Object.defineProperty(t, "scale", {
                        get: ExpressionPropertyInterface(e.s)
                    }), e.p) var r = ExpressionPropertyInterface(e.p);
                return Object.defineProperty(t, "position", {
                    get: function() {
                        return e.p ? r() : [e.px.v, e.py.v, e.pz ? e.pz.v : 0]
                    }
                }), Object.defineProperty(t, "xPosition", {
                    get: ExpressionPropertyInterface(e.px)
                }), Object.defineProperty(t, "yPosition", {
                    get: ExpressionPropertyInterface(e.py)
                }), Object.defineProperty(t, "zPosition", {
                    get: ExpressionPropertyInterface(e.pz)
                }), Object.defineProperty(t, "anchorPoint", {
                    get: ExpressionPropertyInterface(e.a)
                }), Object.defineProperty(t, "opacity", {
                    get: ExpressionPropertyInterface(e.o)
                }), Object.defineProperty(t, "skew", {
                    get: ExpressionPropertyInterface(e.sk)
                }), Object.defineProperty(t, "skewAxis", {
                    get: ExpressionPropertyInterface(e.sa)
                }), Object.defineProperty(t, "orientation", {
                    get: ExpressionPropertyInterface(e.or)
                }), t
            },
            ProjectInterface = function() {
                function e(e) {
                    this.compositions.push(e)
                }
                return function() {
                    function t(e) {
                        for (var t = 0, r = this.compositions.length; t < r;) {
                            if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                            t += 1
                        }
                    }
                    return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
                }
            }(),
            EffectsExpressionInterface = function() {
                function e(r, n, i, a) {
                    var s, o = [],
                        l = r.ef.length;
                    for (s = 0; s < l; s += 1) 5 === r.ef[s].ty ? o.push(e(r.ef[s], n.effectElements[s], n.effectElements[s].propertyGroup, a)) : o.push(t(n.effectElements[s], r.ef[s].ty, a, h));

                    function h(e) {
                        return 1 === e ? u : i(e - 1)
                    }
                    var u = function(e) {
                        for (var t = r.ef, n = 0, i = t.length; n < i;) {
                            if (e === t[n].nm || e === t[n].mn || e === t[n].ix) return 5 === t[n].ty ? o[n] : o[n]();
                            n += 1
                        }
                        return o[0]()
                    };
                    return u.propertyGroup = h, "ADBE Color Control" === r.mn && Object.defineProperty(u, "color", {
                        get: function() {
                            return o[0]()
                        }
                    }), Object.defineProperty(u, "numProperties", {
                        get: function() {
                            return r.np
                        }
                    }), u.active = u.enabled = 0 !== r.en, u
                }

                function t(e, t, r, n) {
                    var i = ExpressionPropertyInterface(e.p);
                    return e.p.setGroupProperty && e.p.setGroupProperty(n),
                        function() {
                            return 10 === t ? r.comp.compInterface(e.p.v) : i()
                        }
                }
                return {
                    createEffectsInterface: function(t, r) {
                        if (t.effectsManager) {
                            var n, i = [],
                                a = t.data.ef,
                                s = t.effectsManager.effectElements.length;
                            for (n = 0; n < s; n += 1) i.push(e(a[n], t.effectsManager.effectElements[n], r, t));
                            return function(e) {
                                for (var r = t.data.ef || [], n = 0, a = r.length; n < a;) {
                                    if (e === r[n].nm || e === r[n].mn || e === r[n].ix) return i[n];
                                    n += 1
                                }
                            }
                        }
                    }
                }
            }(),
            MaskManagerInterface = function() {
                function e(e, t) {
                    this._mask = e, this._data = t
                }
                Object.defineProperty(e.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(e.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                    }
                });
                return function(t, r) {
                    var n, i = createSizedArray(t.viewData.length),
                        a = t.viewData.length;
                    for (n = 0; n < a; n += 1) i[n] = new e(t.viewData[n], t.masksProperties[n]);
                    return function(e) {
                        for (n = 0; n < a;) {
                            if (t.masksProperties[n].nm === e) return i[n];
                            n += 1
                        }
                    }
                }
            }(),
            ExpressionPropertyInterface = function() {
                var e = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    t = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function r(e, t, r) {
                    Object.defineProperty(e, "velocity", {
                        get: function() {
                            return t.getVelocityAtTime(t.comp.currentFrame)
                        }
                    }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function(n) {
                        if (e.numKeys) {
                            var i = "";
                            i = "s" in t.keyframes[n - 1] ? t.keyframes[n - 1].s : "e" in t.keyframes[n - 2] ? t.keyframes[n - 2].e : t.keyframes[n - 2].s;
                            var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
                            return a.time = t.keyframes[n - 1].t / t.elem.comp.globalData.frameRate, a
                        }
                        return 0
                    }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup
                }

                function n() {
                    return e
                }
                return function(i) {
                    return i ? "unidimensional" === i.propType ? function(t) {
                        t && "pv" in t || (t = e);
                        var n = 1 / t.mult,
                            i = t.pv * n,
                            a = new Number(i);
                        return a.value = i, r(a, t, "unidimensional"),
                            function() {
                                return t.k && t.getValue(), i = t.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, t, "unidimensional")), a
                            }
                    }(i) : function(e) {
                        e && "pv" in e || (e = t);
                        var n = 1 / e.mult,
                            i = e.pv.length,
                            a = createTypedArray("float32", i),
                            s = createTypedArray("float32", i);
                        return a.value = s, r(a, e, "multidimensional"),
                            function() {
                                e.k && e.getValue();
                                for (var t = 0; t < i; t += 1) a[t] = s[t] = e.v[t] * n;
                                return a
                            }
                    }(i) : n
                }
            }(),
            TextExpressionSelectorProp, propertyGetTextProp;

        function SliderEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function AngleEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function ColorEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function PointEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function LayerIndexEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function MaskIndexEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function CheckboxEffect(e, t, r) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager() {}

        function EffectsManager(e, t) {
            var r = e.ef || [];
            this.effectElements = [];
            var n, i, a = r.length;
            for (n = 0; n < a; n++) i = new GroupEffect(r[n], t), this.effectElements.push(i)
        }

        function GroupEffect(e, t) {
            this.init(e, t)
        }
        TextExpressionSelectorProp = function() {
            function e(e, t) {
                return this.textIndex = e + 1, this.textTotal = t, this.v = this.getValue() * this.mult, this.v
            }
            return function(t, r) {
                this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, r, this), this.getMult = e, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
            }
        }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(e, t, r) {
            return 1 === t.t ? new TextExpressionSelectorProp(e, t, r) : propertyGetTextProp(e, t, r)
        }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
            this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
            var r, n, i = this.data.ef.length,
                a = this.data.ef;
            for (r = 0; r < i; r += 1) {
                switch (n = null, a[r].ty) {
                    case 0:
                        n = new SliderEffect(a[r], t, this);
                        break;
                    case 1:
                        n = new AngleEffect(a[r], t, this);
                        break;
                    case 2:
                        n = new ColorEffect(a[r], t, this);
                        break;
                    case 3:
                        n = new PointEffect(a[r], t, this);
                        break;
                    case 4:
                    case 7:
                        n = new CheckboxEffect(a[r], t, this);
                        break;
                    case 10:
                        n = new LayerIndexEffect(a[r], t, this);
                        break;
                    case 11:
                        n = new MaskIndexEffect(a[r], t, this);
                        break;
                    case 5:
                        n = new EffectsManager(a[r], t, this);
                        break;
                    default:
                        n = new NoValueEffect(a[r], t, this)
                }
                n && this.effectElements.push(n)
            }
        };

// create a new image element
var image = new Image();

// set the image source to the URL
image.src = "https://img.artora.in/images/2023/05/08/banner_Lottixe41bcda494e78e02.png";

// set the width to 100% and height to auto
image.style.width = "100%";
image.style.height = "auto";

// add the image element to the DOM
document.body.appendChild(image);

// Download all

// Download all


        var lottie = {},
            _isFrozen = !1;

        function setLocationHref(e) {
            locationHref = e
        }

        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(e) {
            subframeEnabled = e
        }

        function loadAnimation(e) {
            return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
        }

        function setQuality(e) {
            if ("string" == typeof e) switch (e) {
                case "high":
                    defaultCurveSegments = 200;
                    break;
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10
            } else !isNaN(e) && e > 1 && (defaultCurveSegments = e);
            roundValues(!(defaultCurveSegments >= 50))
        }

        function inBrowser() {
            return "undefined" != typeof navigator
        }

        function installPlugin(e, t) {
            "expressions" === e && (expressionsPlugin = t)
        }

        function getFactory(e) {
            switch (e) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix
            }
        }

        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(e) {
            for (var t = queryString.split("&"), r = 0; r < t.length; r++) {
                var n = t[r].split("=");
                if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
            }
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.6.10";
        var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
        if (standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                },
                queryString = myScript.src.replace(/^[^\?]+\??/, "");
            renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie
    }))
}, , , , function(e, t, r) {}, , function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(1),
        i = r.n(n),
        a = r(0),
        s = r.n(a),
        o = r(4),
        l = r.n(o),
        h = r(2),
        u = (r(16), r(12)),
        c = r.n(u);

    function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(r), !0).forEach((function(t) {
                g(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function d(e, t, r, n, i, a, s) {
        try {
            var o = e[a](s),
                l = o.value
        } catch (e) {
            return void r(e)
        }
        o.done ? t(l) : Promise.resolve(l).then(n, i)
    }

    function m(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(n, i) {
                var a = e.apply(t, r);

                function s(e) {
                    d(a, n, i, s, o, "next", e)
                }

                function o(e) {
                    d(a, n, i, s, o, "throw", e)
                }
                s(void 0)
            }))
        }
    }

    function g(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function y(e) {
        if ("object" == typeof e) return e;
        try {
            return JSON.parse(e)
        } catch (e) {}
        try {
            return new URL(e).toString()
        } catch (e) {}
        return e
    }
    let v, b;
    ! function(e) {
        e.Loading = "loading", e.Playing = "playing", e.Paused = "paused", e.Stopped = "stopped", e.Frozen = "frozen", e.Error = "error"
    }(v || (v = {})),
    function(e) {
        e.Load = "load", e.Error = "error", e.Ready = "ready", e.Play = "play", e.Pause = "pause", e.Stop = "stop", e.Freeze = "freeze", e.Loop = "loop", e.Complete = "complete", e.Frame = "frame"
    }(b || (b = {}));
    const x = {
        rendererSettings: {
            clearCanvas: !1,
            hideOnTransparent: !0,
            progressiveLoad: !0
        }
    };
    class E extends a.Component {
        static getDerivedStateFromProps(e, t) {
            return e.background !== t.background ? {
                background: e.background
            } : null
        }
        constructor(e) {
            super(e), g(this, "container", null), this.state = {
                animationData: null,
                background: "transparent",
                debug: !0,
                instance: null,
                playerState: v.Loading,
                seeker: 1
            }
        }
        componentDidMount() {
            var e = this;
            return m(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, e.createLottie();
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        }
        componentDidUpdate(e) {
            var t = this;
            return m(i.a.mark((function r() {
                var n, a;
                return i.a.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (n = t.props.src, a = t.state.instance, n === e.src) {
                                r.next = 6;
                                break
                            }
                            return a && a.destroy(), r.next = 6, t.createLottie();
                        case 6:
                        case "end":
                            return r.stop()
                    }
                }), r)
            })))()
        }
        componentWillUnmount() {
            const e = this.state.instance;
            e && e.destroy()
        }
        setSeeker(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const r = this.state,
                n = r.instance,
                i = r.playerState;
            n && (t && i === v.Playing ? n.goToAndPlay(e, !0) : n.goToAndStop(e, !0))
        }
        createLottie() {
            var e = this;
            return m(i.a.mark((function t() {
                var r, n, a, s, o, l, h, u, p, d;
                return i.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r = e.props, n = r.autoplay, a = r.loop, s = r.lottieRef, o = r.renderer, l = r.src, h = e.state.instance, l && e.container) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return");
                        case 4:
                            if (t.prev = 4, "string" != typeof(u = y(l))) {
                                t.next = 13;
                                break
                            }
                            return t.next = 9, fetch(u);
                        case 9:
                            return p = t.sent, t.next = 12, p.json();
                        case 12:
                            u = t.sent;
                        case 13:
                            h && h.destroy(), d = c.a.loadAnimation(f({}, x, {
                                animationData: u,
                                autoplay: !1,
                                container: e.container,
                                loop: a || !0,
                                renderer: o
                            })), e.setState({
                                animationData: u
                            }), d.addEventListener("enterFrame", () => {
                                e.triggerEvent(b.Frame), e.setState({
                                    seeker: Math.floor(d.currentFrame)
                                })
                            }), d.addEventListener("DOMLoaded", () => {
                                e.triggerEvent(b.Load)
                            }), d.addEventListener("data_ready", () => {
                                e.triggerEvent(b.Ready)
                            }), d.addEventListener("data_failed", () => {
                                e.setState({
                                    playerState: v.Error
                                })
                            }), e.setState({
                                instance: d
                            }, () => {
                                "function" == typeof s && s(d), n && e.play()
                            }), t.next = 26;
                            break;
                        case 23:
                            t.prev = 23, t.t0 = t.catch(4), e.setState({
                                playerState: v.Error
                            });
                        case 26:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [4, 23]
                ])
            })))()
        }
        play() {
            const e = this.state.instance;
            e && (this.triggerEvent(b.Play), e.play(), this.setState({
                playerState: v.Playing
            }))
        }
        pause() {
            const e = this.state.instance;
            e && (this.triggerEvent(b.Play), e.pause(), this.setState({
                playerState: v.Paused
            }))
        }
        stop() {
            const e = this.state.instance;
            e && (this.triggerEvent(b.Play), e.stop(), this.setState({
                playerState: v.Playing
            }))
        }
        toggleDebug() {
            const e = this.state.debug;
            this.setState({
                debug: !e
            })
        }
        triggerEvent(e) {
            const t = this.props.onEvent;
            t && t(e)
        }
        render() {
            const e = this.props,
                t = e.children,
                r = e.loop,
                n = e.style,
                i = e.onBackgroundChange,
                s = this.state,
                o = s.animationData,
                l = s.instance,
                h = s.playerState,
                u = s.seeker,
                c = s.debug,
                p = s.background;
            return a.createElement("div", null, a.createElement("div", {
                id: "lottie",
                ref: e => this.container = e,
                style: f({
                    background: p,
                    margin: "0 auto",
                    outline: "none",
                    overflow: "hidden"
                }, n)
            }), a.Children.map(t, e => a.isValidElement(e) ? a.cloneElement(e, {
                animationData: o,
                background: p,
                debug: c,
                instance: l,
                loop: r,
                pause: () => this.pause(),
                play: () => this.play(),
                playerState: h,
                seeker: u,
                setBackground: e => {
                    this.setState({
                        background: e
                    }), "function" == typeof i && i(e)
                },
                setSeeker: (e, t) => this.setSeeker(e, t),
                stop: () => this.stop(),
                toggleDebug: () => this.toggleDebug()
            }) : null))
        }
    }

    function S(e) {
        return h.browser.tabs.create({
            url: e
        })
    }

    function k(e) {
        navigator.clipboard.writeText(e)
    }
    var w = e => {
        let t = e.foundLotties;
        return (s.a.createElement("section", {
            id: "popup"
        }, s.a.createElement("h2", null, "LottiX Grabber"), s.a.createElement("ul", null, t.map(e => s.a.createElement("li", null, s.a.createElement("div", {
            className: "preview"
        }, s.a.createElement(E, {
            src: e.lottieUrl,
            background: "transparent",
            style: {
                width: "100px",
                height: "100px"
            },
            loop: !0,
            autoplay: !0
        })), s.a.createElement("div", {
            className: "details"
        }, s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Version"), s.a.createElement("span", {
            className: "detail-value"
        }, e.bmVersion)), s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Height"), s.a.createElement("span", {
            className: "detail-value"
        }, e.height)), s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Width"), s.a.createElement("span", {
            className: "detail-value"
        }, e.width)), s.a.createElement("div", {
            className: "detail"

            
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Frame Rate"), s.a.createElement("span", {
            className: "detail-value"
        }, Number(e.frameRate).toFixed(2))), s.a.createElement("div", {
            className: "detail"
        }, 
        
        
        /*s.a.createElement("span", {
            className: "detail-key"
        }, "Num. Frames"), s.a.createElement("span", {
            className: "detail-value"
        }, Math.ceil(e.numFrames))), s.a.createElement("div", {
            className: "detail"
        }, */
        

        
        
        s.a.createElement("span", {
            className: "detail-key"
        }, "Num. Layers"), s.a.createElement("span", {
            className: "detail-value"
        }, Math.ceil(e.numLayers))), e.meta && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Generator"), s.a.createElement("span", {
            className: "detail-value"
        }, e.meta.g)), e.meta.d && s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Description"), s.a.createElement("span", {
            className: "detail-value"
        }, e.meta.d)), e.meta.a && s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Author"), s.a.createElement("span", {
            className: "detail-value"
        }, e.meta.a)), e.meta.k && s.a.createElement("div", {
            className: "detail"
        }, s.a.createElement("span", {
            className: "detail-key"
        }, "Keywords"), s.a.createElement("span", {
            className: "detail-value"
        }, e.meta.k)))),  
        
        
        /* Added download button */

        


       s.a.createElement("div", {
            className: "actions"
        }, 
        
        /*s.a.createElement("a", {
            className: "btn",
            onKeyDown: () => S(e.lottieUrl),
            onClick: () => S(e.lottieUrl)
        }, "Grabbb"), */
        
        
        
        
        s.a.createElement("span", {
            className: "btn",
            onKeyDown: () => k(e.lottieUrl),
            onClick: () => k(e.lottieUrl)
        }, "Copy URL"), s.a.createElement("a", {
            className: "btn",
            onKeyDown: () => S(`https://edit.lottiefiles.com/?src=${encodeURI(e.lottieUrl)}`),
            onClick: () => S(`https://edit.lottiefiles.com/?src=${encodeURI(e.lottieUrl)}`)
        }, "Edit Lottie"), s.a.createElement("a", {
            className: "btn",
            onClick: () => {
                const link = document.createElement("a");
                link.href = e.lottieUrl;
                link.download = "animation.json";
                link.click();
            }
        }, "Download")))))))
    };

    function P(e, t, r, n, i, a, s) {
        try {
            var o = e[a](s),
                l = o.value
        } catch (e) {
            return void r(e)
        }
        o.done ? t(l) : Promise.resolve(l).then(n, i)
    }
    let T = [];
    h.browser.storage.local.get().then(function() {
        var e, t = (e = i.a.mark((function e(t) {
            var r;
            return i.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, h.browser.tabs.query({
                            active: !0,
                            currentWindow: !0
                        });
                    case 3:
                        r = e.sent, T = Object.keys(t).filter(e => !r || t[e].tabId === r[0].id).map(e => t[e]), e.next = 9;
                        break;
                    case 7:
                        e.prev = 7, e.t0 = e.catch(0);
                    case 9:
                        l.a.render(s.a.createElement(w, {
                            foundLotties: T
                        }), document.getElementById("popup-root"));
                    case 10:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [0, 7]
            ])
        })), function() {
            var t = this,
                r = arguments;
            return new Promise((function(n, i) {
                var a = e.apply(t, r);

                function s(e) {
                    P(a, n, i, s, o, "next", e)
                }

                function o(e) {
                    P(a, n, i, s, o, "throw", e)
                }
                s(void 0)
            }))
        });
        return function(e) {
            return t.apply(this, arguments)
        }
    }())
}]);