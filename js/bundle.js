jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return 0 == t ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        return 0 == t ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b : c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        if (p || (p = .3 * d), a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        if (p || (p = .3 * d), a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (0 == t) return b;
        if (2 == (t /= d / 2)) return b + c;
        if (p || (p = d * (.3 * 1.5)), a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), (t /= d / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        return (t /= d) < 1 / 2.75 ? c * (7.5625 * t * t) + b : 2 / 2.75 > t ? c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b : 2.5 / 2.75 > t ? c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b : c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    },
    easeInOutBounce: function(x, t, b, c, d) {
        return d / 2 > t ? .5 * jQuery.easing.easeInBounce(x, 2 * t, 0, c, d) + b : .5 * jQuery.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + .5 * c + b;
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : c / 4 * ((t -= 2) * t * t + 2) + b;
    }
}), !function(e) {
    function t(e) {
        var t = e.length, r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t);
        };
        $.isWindow = function(e) {
            return null != e && e == e.window;
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e;
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e);
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (r) {
                return !1;
            }
            for (t in e) ;
            return void 0 === t || n.call(e, t);
        }, $.each = function(e, r, a) {
            var n, o = 0, i = e.length, s = t(e);
            if (a) {
                if (s) for (;i > o && (n = r.apply(e[o], a), n !== !1); o++) ; else for (o in e) if (n = r.apply(e[o], a), 
                n === !1) break;
            } else if (s) for (;i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) ; else for (o in e) if (n = r.call(e[o], o, e[o]), 
            n === !1) break;
            return e;
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando], o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t];
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a;
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando], n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t];
            });
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), 
            s === l && (i = this, s--); l > s; s++) if (null != (n = arguments[s])) for (a in n) e = i[a], 
            r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, 
            o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i;
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? !function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a; ) e[n++] = t[a++];
                    if (r !== r) for (;void 0 !== t[a]; ) e[n++] = t[a++];
                    return e.length = n, e;
                }(a, "string" == typeof e ? [ e ] : e) : [].push.call(a, e)), a;
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || [];
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [ e ] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t), n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), 
                n.call(r, function() {
                    $.dequeue(r, t);
                }));
            });
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.");
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; ) e = e.offsetParent;
                    return e || document;
                }
                var t = this[0], e = e.apply(t), r = this.offset(), a = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, 
                e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), 
                {
                    top: r.top - a.top,
                    left: r.left - a.left
                };
            }
        };
        var r = {};
        $.expando = "velocity" + new Date().getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        };
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                var n = e[t];
                n && a.push(n);
            }
            return a;
        }
        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [ e ]), e;
        }
        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t;
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e);
            };
        }
        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e;
            }
            function i(e, t) {
                return 3 * t - 6 * e;
            }
            function s(e) {
                return 3 * e;
            }
            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
            }
            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
            }
            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o;
                }
                return r;
            }
            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a);
            }
            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i;
            }
            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]), s = r + i * x, l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
            }
            function g() {
                V = !0, (e != r || a != n) && p();
            }
            var m = 4, y = .001, h = 1e-7, v = 10, b = 11, x = 1 / (b - 1), S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P) if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b), V = !1, C = function(t) {
                return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
            };
            C.getControlPoints = function() {
                return [ {
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                } ];
            };
            var T = "generateBezier(" + [ e, r, a, n ] + ")";
            return C.toString = function() {
                return T;
            }, C;
        }
        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([ t ])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, 
            r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r;
        }
        function c(e) {
            if (e) {
                var t = new Date().getTime(), r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++) if (v.State.calls[o]) {
                    var s = v.State.calls[o], l = s[0], u = s[2], f = s[3], d = !!f, m = null;
                    f || (f = v.State.calls[o][3] = t - 16);
                    for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                        var S = l[h], w = S.element;
                        if (i(w)) {
                            var V = !1;
                            if (u.display !== a && null !== u.display && "none" !== u.display) {
                                if ("flex" === u.display) {
                                    var C = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
                                    $.each(C, function(e, t) {
                                        x.setPropertyValue(w, "display", t);
                                    });
                                }
                                x.setPropertyValue(w, "display", u.display);
                            }
                            u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                            for (var T in S) if ("element" !== T) {
                                var A, k = S[T], F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                if (1 === y) A = k.endValue; else {
                                    var E = k.endValue - k.startValue;
                                    if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue) continue;
                                }
                                if (k.currentValue = A, "tween" === T) m = A; else {
                                    if (x.Hooks.registered[T]) {
                                        var j = x.Hooks.getRoot(T), H = i(w).rootPropertyValueCache[j];
                                        H && (k.rootPropertyValue = H);
                                    }
                                    var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                    x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), 
                                    "transform" === N[0] && (V = !0);
                                }
                            }
                            u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", 
                            V = !0), V && x.flushTransformCache(w);
                        }
                    }
                    u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), 
                    u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 
                    1 === y && p(o);
                }
            }
            v.State.isTicking && P(c);
        }
        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), 
                "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), 
                o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0, n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, 
                        delete i(p).transformCache[t]);
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), 
                    x.Values.removeClass(p, "velocity-animating");
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n);
                } catch (d) {
                    setTimeout(function() {
                        throw d;
                    }, 1);
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), 
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, 
                    t.startValue = 100);
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue);
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++) if (v.State.calls[g] !== !1) {
                l = !0;
                break;
            }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = []);
        }
        var $, f = function() {
            if (r.documentMode) return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, 
                e;
            }
            return a;
        }(), d = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var a, r = new Date().getTime();
                return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                    t(r + a);
                }, a);
            };
        }(), g = {
            isString: function(e) {
                return "string" == typeof e;
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            },
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e);
            },
            isNode: function(e) {
                return e && e.nodeType;
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement;
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
            }
        }, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400, h = "swing", v = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: r.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: $,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: y,
                easing: h,
                begin: a,
                complete: a,
                progress: a,
                display: a,
                visibility: a,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                $.data(e, "velocity", {
                    isSVG: g.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                });
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", 
        v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, 
        v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v;
            }
            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                };
            }
            function r(r, a) {
                var n = {
                    dx: r.v,
                    dv: e(r)
                }, o = t(r, .5 * a, n), i = t(r, .5 * a, o), s = t(r, a, i), l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx), u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r;
            }
            return function a(e, t, n) {
                var c, p, f, o = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, i = [ 0 ], s = 0, l = 1e-4, u = .016;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, 
                o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u; f = r(f || o, p), 
                i.push(1 + f.x), s += 16, Math.abs(f.x) > l && Math.abs(f.v) > l; ) ;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0];
                } : s;
            };
        }();
        v.Easings = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
            }
        }, $.each([ [ "ease", [ .25, .1, .25, 1 ] ], [ "ease-in", [ .42, 0, 1, 1 ] ], [ "ease-out", [ 0, 0, .58, 1 ] ], [ "ease-in-out", [ .42, 0, .58, 1 ] ], [ "easeInSine", [ .47, 0, .745, .715 ] ], [ "easeOutSine", [ .39, .575, .565, 1 ] ], [ "easeInOutSine", [ .445, .05, .55, .95 ] ], [ "easeInQuad", [ .55, .085, .68, .53 ] ], [ "easeOutQuad", [ .25, .46, .45, .94 ] ], [ "easeInOutQuad", [ .455, .03, .515, .955 ] ], [ "easeInCubic", [ .55, .055, .675, .19 ] ], [ "easeOutCubic", [ .215, .61, .355, 1 ] ], [ "easeInOutCubic", [ .645, .045, .355, 1 ] ], [ "easeInQuart", [ .895, .03, .685, .22 ] ], [ "easeOutQuart", [ .165, .84, .44, 1 ] ], [ "easeInOutQuart", [ .77, 0, .175, 1 ] ], [ "easeInQuint", [ .755, .05, .855, .06 ] ], [ "easeOutQuint", [ .23, 1, .32, 1 ] ], [ "easeInOutQuint", [ .86, 0, .07, 1 ] ], [ "easeInExpo", [ .95, .05, .795, .035 ] ], [ "easeOutExpo", [ .19, 1, .22, 1 ] ], [ "easeInOutExpo", [ 1, 0, 0, 1 ] ], [ "easeInCirc", [ .6, .04, .98, .335 ] ], [ "easeOutCirc", [ .075, .82, .165, 1 ] ], [ "easeInOutCirc", [ .785, .135, .15, .86 ] ] ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1]);
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
                transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
                transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
            },
            Hooks: {
                templates: {
                    textShadow: [ "Color X Y Blur", "black 0px 0px 0px" ],
                    boxShadow: [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                    clip: [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                    backgroundPosition: [ "X Y", "0% 0%" ],
                    transformOrigin: [ "X Y Z", "50% 50% 0px" ],
                    perspectiveOrigin: [ "X Y", "50% 50%" ]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = [ "Red Green Blue Alpha", t ];
                    }
                    var r, a, n;
                    if (f) for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        var o = a[1].match(x.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [ n.join(" "), o.join(" ") ]);
                    }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e], s = e;
                            x.Hooks.registered[i] = [ r, s ];
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e;
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), 
                    t;
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0], n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n];
                    }
                    return t;
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var i, s, n = a[0], o = a[1];
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), 
                        i[o] = t, s = i.join(" ");
                    }
                    return r;
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                          case "name":
                            return "clip";

                          case "extract":
                            var a;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), 
                            a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;

                          case "inject":
                            return "rect(" + r + ")";
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                          case "name":
                            return v.State.isFirefox ? "filter" : "-webkit-filter";

                          case "extract":
                            var a = parseFloat(r);
                            if (!a && 0 !== a) {
                                var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                a = n ? n[1] : 0;
                            }
                            return a;

                          case "inject":
                            return parseFloat(r) ? "blur(" + r + ")" : "none";
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                          case "name":
                            return "filter";

                          case "extract":
                            var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                            return r = a ? a[1] / 100 : 1;

                          case "inject":
                            return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";
                        } else switch (e) {
                          case "name":
                            return "opacity";

                          case "extract":
                            return r;

                          case "inject":
                            return r;
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) !function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                              case "name":
                                return "transform";

                              case "extract":
                                return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");

                              case "inject":
                                var o = !1;
                                switch (t.substr(0, t.length - 1)) {
                                  case "translate":
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                    break;

                                  case "scal":
                                  case "scale":
                                    v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                    break;

                                  case "skew":
                                    o = !/(deg|\d)$/i.test(n);
                                    break;

                                  case "rotate":
                                    o = !/(deg|\d)$/i.test(n);
                                }
                                return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];
                            }
                        };
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) !function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                              case "name":
                                return t;

                              case "extract":
                                var o;
                                if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n; else {
                                    var i, s = {
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        red: "rgb(255, 0, 0)",
                                        white: "rgb(255, 255, 255)"
                                    };
                                    /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), 
                                    o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                }
                                return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;

                              case "inject":
                                return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), 
                                (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    }();
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase();
                    });
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [ v.State.prefixMatches[e], !0 ];
                    for (var t = [ "", "Webkit", "Moz", "ms", "O" ], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase();
                        }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, 
                        [ n, !0 ];
                    }
                    return [ e, !1 ];
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var a, t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a;
                    }), a = r.exec(e), a ? [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ] : [ 0, 0, 0 ];
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block";
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none");
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r); else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, 
                        x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c;
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p;
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), 
                        "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], 
                        ("" === l || null === l) && (l = e.style[r]), n();
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px");
                    }
                    return l;
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r, c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), 
                    l = x.Hooks.extractValue(u, n);
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), 
                    x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), 
                    l = x.Normalizations.registered[r]("extract", e, d);
                }
                if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r)) if (/^(height|width)$/i.test(r)) try {
                    l = e.getBBox()[r];
                } catch (g) {
                    l = 0;
                } else l = e.getAttribute(r); else l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), 
                l;
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a); else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), 
                s = "transform", a = i(e).transformCache[r]; else {
                    if (x.Hooks.registered[r]) {
                        var l = r, u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u;
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), 
                    r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a;
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
                }
                return [ s, a ];
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t));
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [ t("translateX"), t("translateY") ],
                        skewX: [ t("skewX") ],
                        skewY: [ t("skewY") ],
                        scale: 1 !== t("scale") ? [ t("scale"), t("scale") ] : [ t("scaleX"), t("scaleY") ],
                        rotate: [ t("rotateZ"), 0, 0 ]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), 
                        a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
                    });
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), 
                        void (r += t + n + " "));
                    }), o && (r = "perspective" + o + " " + r);
                }
                x.setPropertyValue(e, "transform", r);
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t)); else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s;
                }
            }), n;
        };
        var S = function() {
            function e() {
                return l ? T.promise || null : f;
            }
            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a, i = a, s = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), 
                        e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), 
                        g.isFunction(s) && (s = s.call(n, w, P)), [ r || 0, i, s ];
                    }
                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, "";
                        }), r || (r = x.Values.getUnitType(e)), [ a, r ];
                    }
                    function d() {
                        var e = {
                            myParent: n.parentNode || r.body,
                            position: x.getPropertyValue(n, "position"),
                            fontSize: x.getPropertyValue(n, "fontSize")
                        }, a = e.position === N.lastPosition && e.myParent === N.lastParent, o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100, l = {};
                        if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, 
                        l.percentToPxHeight = N.lastPercentToPxHeight; else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each([ "overflow", "overflowX", "overflowY" ], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden");
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), 
                            v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%");
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, 
                            l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, 
                            l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, 
                            e.myParent.removeChild(u);
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), 
                        null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), 
                        l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), 
                        l;
                    }
                    if (o.begin && 0 === w) try {
                        o.begin.call(m, m);
                    } catch (y) {
                        setTimeout(function() {
                            throw y;
                        }, 1);
                    }
                    if ("scroll" === k) {
                        var C, A, F, S = /^x$/i.test(o.axis) ? "Left" : "Top", V = parseFloat(o.offset) || 0;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, 
                        C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], 
                        A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], 
                        F = $(n).offset()[S.toLowerCase()] + V), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: S,
                                    alternateValue: A
                                }
                            },
                            element: n
                        }, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n);
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer) return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), 
                        i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, 
                        b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E) if ("element" !== j) {
                            var H = E[j].startValue;
                            E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), 
                            v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n);
                        }
                        s = E;
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0), n = r[0], o = r[1], i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = [ "Red", "Green", "Blue" ], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [ l[c] ];
                                        o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f;
                                    }
                                    delete h[e];
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R]), z = O[0], q = O[1], M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R), B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), 
                                o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), 
                                M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return X = t, "";
                                }), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, 
                                G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, 
                                G = "")), /[\/*]/.test(X)) G = D; else if (D !== G && 0 !== M) if (0 === z) G = D; else {
                                    l = l || d();
                                    var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                    switch (D) {
                                      case "%":
                                        M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        M *= l[D + "ToPx"];
                                    }
                                    switch (G) {
                                      case "%":
                                        M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        M *= 1 / l[G + "ToPx"];
                                    }
                                }
                                switch (X) {
                                  case "+":
                                    z = M + z;
                                    break;

                                  case "-":
                                    z = M - z;
                                    break;

                                  case "*":
                                    z = M * z;
                                    break;

                                  case "/":
                                    z = M / z;
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                }, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n);
                            } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
                        }
                        s.element = n;
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, 
                    i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([ L, m, o, null, T.resolver ]), 
                    v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++);
                }
                var l, n = this, o = $.extend({}, v.defaults, b), s = {};
                switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    };
                }), o.duration.toString().toLowerCase()) {
                  case "fast":
                    o.duration = 200;
                    break;

                  case "normal":
                    o.duration = y;
                    break;

                  case "slow":
                    o.duration = 600;
                    break;

                  default:
                    o.duration = parseFloat(o.duration) || 1;
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, 
                o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), 
                o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), 
                o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), 
                "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), 
                o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function(t, r) {
                    return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, 
                    void e(t));
                }), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n);
            }
            var l, f, d, m, h, b, s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), 
            m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], 
                b = arguments[d + 1]);
                var P = m.length, w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C];
                }
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                l && v.Promise && (T.promise = new v.Promise(function(e, t) {
                    T.resolver = e, T.rejecter = t;
                }));
                var k;
                switch (h) {
                  case "scroll":
                    k = "scroll";
                    break;

                  case "reverse":
                    k = "reverse";
                    break;

                  case "finish":
                  case "stop":
                    $.each(m, function(e, t) {
                        i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), 
                        delete i(t).delayTimer);
                    });
                    var A = [];
                    return $.each(v.State.calls, function(e, t) {
                        t && $.each(t[1], function(r, n) {
                            var o = b === a ? "" : b;
                            return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function(r, a) {
                                a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function(e, t) {
                                    g.isFunction(t) && t(null, !0);
                                }), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue;
                                }), A.push(e)) : "finish" === h && (t[2].duration = 1));
                            }) : !0;
                        });
                    }), "stop" === h && ($.each(A, function(e, t) {
                        p(t, !0);
                    }), T.promise && T.resolver(m)), e();

                  default:
                    if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                        if (g.isString(h) && v.Redirects[h]) {
                            var F = $.extend({}, b), E = F.duration, j = F.delay || 0;
                            return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function(e, t) {
                                parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), 
                                F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), 
                                F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), 
                                v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a);
                            }), e();
                        }
                        var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return T.promise ? T.rejecter(new Error(H)) : console.log(H), e();
                    }
                    k = "start";
                }
                var N = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, L = [];
                $.each(m, function(e, t) {
                    g.isNode(t) && n.call(t);
                });
                var R, F = $.extend({}, v.defaults, b);
                if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop) for (var O = 0; R > O; O++) {
                    var z = {
                        delay: F.delay,
                        progress: F.progress
                    };
                    O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), 
                    S(m, "reverse", z);
                }
                return e();
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0);
                }, 16);
            }, c()) : P = t.requestAnimationFrame || d;
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), 
        $.each([ "Down", "Up" ], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = l.begin, c = l.complete, p = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), 
                l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [ a, 0 ] : [ 0, a ];
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden";
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i);
                }, v(e, p, l);
            };
        }), $.each([ "In", "Out" ], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = {
                    opacity: "In" === t ? 1 : 0
                }, c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i);
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l);
            };
        }), v;
    }(window.jQuery || window.Zepto || window, window, document);
}), !function(a, b, c, d) {
    "use strict";
    function k(a, b, c) {
        return setTimeout(q(a, c), b);
    }
    function l(a, b, c) {
        return Array.isArray(a) ? (m(a, c[b], c), !0) : !1;
    }
    function m(a, b, c) {
        var e;
        if (a) if (a.forEach) a.forEach(b, c); else if (a.length !== d) for (e = 0; e < a.length; ) b.call(c, a[e], e, a), 
        e++; else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function n(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; ) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), 
        f++;
        return a;
    }
    function o(a, b) {
        return n(a, b, !0);
    }
    function p(a, b, c) {
        var e, d = b.prototype;
        e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c);
    }
    function q(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }
    function r(a, b) {
        return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function s(a, b) {
        return a === d ? b : a;
    }
    function t(a, b, c) {
        m(x(b), function(b) {
            a.addEventListener(b, c, !1);
        });
    }
    function u(a, b, c) {
        m(x(b), function(b) {
            a.removeEventListener(b, c, !1);
        });
    }
    function v(a, b) {
        for (;a; ) {
            if (a == b) return !0;
            a = a.parentNode;
        }
        return !1;
    }
    function w(a, b) {
        return a.indexOf(b) > -1;
    }
    function x(a) {
        return a.trim().split(/\s+/g);
    }
    function y(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++;
        }
        return -1;
    }
    function z(a) {
        return Array.prototype.slice.call(a, 0);
    }
    function A(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            y(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b];
        }) : d.sort()), d;
    }
    function B(a, b) {
        for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length; ) {
            if (c = e[h], f = c ? c + g : b, f in a) return f;
            h++;
        }
        return d;
    }
    function D() {
        return C++;
    }
    function E(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow;
    }
    function ab(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, 
        this.domHandler = function(b) {
            r(a.options.enable, [ a ]) && c.handler(b);
        }, this.init();
    }
    function bb(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : H ? wb : I ? Eb : G ? Gb : rb)(a, cb);
    }
    function cb(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & O && 0 === d - e, g = b & (Q | R) && 0 === d - e;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), 
        a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
    }
    function db(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = hb(d);
        b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), 
        b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, 
        b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);
        var k = a.element;
        v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }
    function eb(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === O || f.eventType === Q) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }
    function fb(a, b) {
        var f, g, h, j, c = a.lastInterval || b, e = b.timeStamp - c.timeStamp;
        if (b.eventType != R && (e > N || c.velocity === d)) {
            var k = c.deltaX - b.deltaX, l = c.deltaY - b.deltaY, m = ib(e, k, l);
            g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b;
        } else f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;
        b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j;
    }
    function gb(a) {
        for (var b = [], c = 0; c < a.pointers.length; ) b[c] = {
            clientX: h(a.pointers[c].clientX),
            clientY: h(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: j(),
            pointers: b,
            center: hb(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        };
    }
    function hb(a) {
        var b = a.length;
        if (1 === b) return {
            x: h(a[0].clientX),
            y: h(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e; ) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: h(c / b),
            y: h(d / b)
        };
    }
    function ib(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        };
    }
    function jb(a, b) {
        return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W;
    }
    function kb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
    }
    function lb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI;
    }
    function mb(a, b) {
        return lb(b[1], b[0], _) - lb(a[1], a[0], _);
    }
    function nb(a, b) {
        return kb(b[0], b[1], _) / kb(a[0], a[1], _);
    }
    function rb() {
        this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments);
    }
    function wb() {
        this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function Ab() {
        this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments);
    }
    function Bb(a, b) {
        var c = z(a.touches), d = z(a.changedTouches);
        return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [ c, d ];
    }
    function Eb() {
        this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments);
    }
    function Fb(a, b) {
        var c = z(a.touches), d = this.targetIds;
        if (b & (O | P) && 1 === c.length) return d[c[0].identifier] = !0, [ c, c ];
        var e, f, g = z(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return v(a.target, i);
        }), b === O) for (e = 0; e < f.length; ) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length; ) d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], 
        e++;
        return h.length ? [ A(f.concat(h), "identifier", !0), h ] : void 0;
    }
    function Gb() {
        ab.apply(this, arguments);
        var a = q(this.handler, this);
        this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a);
    }
    function Pb(a, b) {
        this.manager = a, this.set(b);
    }
    function Qb(a) {
        if (w(a, Mb)) return Mb;
        var b = w(a, Nb), c = w(a, Ob);
        return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb;
    }
    function Yb(a) {
        this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), 
        this.state = Rb, this.simultaneous = {}, this.requireFail = [];
    }
    function Zb(a) {
        return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : "";
    }
    function $b(a) {
        return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : "";
    }
    function _b(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
    }
    function ac() {
        Yb.apply(this, arguments);
    }
    function bc() {
        ac.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function cc() {
        ac.apply(this, arguments);
    }
    function dc() {
        Yb.apply(this, arguments), this._timer = null, this._input = null;
    }
    function ec() {
        ac.apply(this, arguments);
    }
    function fc() {
        ac.apply(this, arguments);
    }
    function gc() {
        Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
        this._input = null, this.count = 0;
    }
    function hc(a, b) {
        return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b);
    }
    function kc(a, b) {
        b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, 
        this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, 
        this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), 
        lc(this, !0), m(b.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        }, this);
    }
    function lc(a, b) {
        var c = a.element;
        m(a.options.cssProps, function(a, d) {
            c.style[B(c.style, d)] = b ? a : "";
        });
    }
    function mc(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }
    var e = [ "", "webkit", "moz", "MS", "ms", "o" ], f = b.createElement("div"), g = "function", h = Math.round, i = Math.abs, j = Date.now, C = 1, F = /mobile|tablet|ip(ad|hone|od)|android/i, G = "ontouchstart" in a, H = B(a, "PointerEvent") !== d, I = G && F.test(navigator.userAgent), J = "touch", K = "pen", L = "mouse", M = "kinect", N = 25, O = 1, P = 2, Q = 4, R = 8, S = 1, T = 2, U = 4, V = 8, W = 16, X = T | U, Y = V | W, Z = X | Y, $ = [ "x", "y" ], _ = [ "clientX", "clientY" ];
    ab.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), 
            this.evWin && t(E(this.element), this.evWin, this.domHandler);
        },
        destroy: function() {
            this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), 
            this.evWin && u(E(this.element), this.evWin, this.domHandler);
        }
    };
    var ob = {
        mousedown: O,
        mousemove: P,
        mouseup: Q
    }, pb = "mousedown", qb = "mousemove mouseup";
    p(rb, ab, {
        handler: function(a) {
            var b = ob[a.type];
            b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), 
            this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [ a ],
                changedPointers: [ a ],
                pointerType: L,
                srcEvent: a
            }));
        }
    });
    var sb = {
        pointerdown: O,
        pointermove: P,
        pointerup: Q,
        pointercancel: R,
        pointerout: R
    }, tb = {
        2: J,
        3: K,
        4: L,
        5: M
    }, ub = "pointerdown", vb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), 
    p(wb, ab, {
        handler: function(a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = sb[d], f = tb[a.pointerType] || a.pointerType, g = f == J, h = y(b, a.pointerId, "pointerId");
            e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 
            0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [ a ],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1));
        }
    });
    var xb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }, yb = "touchstart", zb = "touchstart touchmove touchend touchcancel";
    p(Ab, ab, {
        handler: function(a) {
            var b = xb[a.type];
            if (b === O && (this.started = !0), this.started) {
                var c = Bb.call(this, a, b);
                b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: J,
                    srcEvent: a
                });
            }
        }
    });
    var Cb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }, Db = "touchstart touchmove touchend touchcancel";
    p(Eb, ab, {
        handler: function(a) {
            var b = Cb[a.type], c = Fb.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: J,
                srcEvent: a
            });
        }
    }), p(Gb, ab, {
        handler: function(a, b, c) {
            var d = c.pointerType == J, e = c.pointerType == L;
            if (d) this.mouse.allow = !1; else if (e && !this.mouse.allow) return;
            b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c);
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var Hb = B(f.style, "touchAction"), Ib = Hb !== d, Jb = "compute", Kb = "auto", Lb = "manipulation", Mb = "none", Nb = "pan-x", Ob = "pan-y";
    Pb.prototype = {
        set: function(a) {
            a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim();
        },
        update: function() {
            this.set(this.manager.options.touchAction);
        },
        compute: function() {
            var a = [];
            return m(this.manager.recognizers, function(b) {
                r(b.options.enable, [ b ]) && (a = a.concat(b.getTouchAction()));
            }), Qb(a.join(" "));
        },
        preventDefaults: function(a) {
            if (!Ib) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions, e = w(d, Mb), f = w(d, Ob), g = w(d, Nb);
                return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0;
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0, a.preventDefault();
        }
    };
    var Rb = 1, Sb = 2, Tb = 4, Ub = 8, Vb = Ub, Wb = 16, Xb = 32;
    Yb.prototype = {
        defaults: {},
        set: function(a) {
            return n(this.options, a), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function(a) {
            if (l(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
        },
        dropRecognizeWith: function(a) {
            return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], 
            this);
        },
        requireFailure: function(a) {
            if (l(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this;
        },
        dropRequireFailure: function(a) {
            if (l(a, "dropRequireFailure", this)) return this;
            a = _b(a, this);
            var b = y(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id];
        },
        emit: function(a) {
            function d(d) {
                b.manager.emit(b.options.event + (d ? Zb(c) : ""), a);
            }
            var b = this, c = this.state;
            Ub > c && d(!0), d(), c >= Ub && d(!0);
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = Xb);
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (Xb | Rb))) return !1;
                a++;
            }
            return !0;
        },
        recognize: function(a) {
            var b = n({}, a);
            return r(this.options.enable, [ this, b ]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), 
            this.state = this.process(b), void (this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b))) : (this.reset(), 
            void (this.state = Xb));
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, p(ac, Yb, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
        },
        process: function(a) {
            var b = this.state, c = a.eventType, d = b & (Sb | Tb), e = this.attrTest(a);
            return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb;
        }
    }), p(bc, ac, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Z
        },
        getTouchAction: function() {
            var a = this.options.direction, b = [];
            return a & X && b.push(Ob), a & Y && b.push(Nb), b;
        },
        directionTest: function(a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, 
            d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), 
            a.direction = e, c && d > b.threshold && e & b.direction;
        },
        attrTest: function(a) {
            return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a));
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
        }
    }), p(cc, ac, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ Mb ];
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb);
        },
        emit: function(a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a);
            }
        }
    }), p(dc, Yb, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [ Kb ];
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, e = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Q | R) && !e) this.reset(); else if (a.eventType & O) this.reset(), 
            this._timer = k(function() {
                this.state = Vb, this.tryEmit();
            }, b.time, this); else if (a.eventType & Q) return Vb;
            return Xb;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(a) {
            this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), 
            this.manager.emit(this.options.event, this._input)));
        }
    }), p(ec, ac, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ Mb ];
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb);
        }
    }), p(fc, ac, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: X | Y,
            pointers: 1
        },
        getTouchAction: function() {
            return bc.prototype.getTouchAction.call(this);
        },
        attrTest: function(a) {
            var c, b = this.options.direction;
            return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), 
            this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q;
        },
        emit: function(a) {
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
        }
    }), p(gc, Yb, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ Lb ];
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, e = a.deltaTime < b.time;
            if (this.reset(), a.eventType & O && 0 === this.count) return this.failTimeout();
            if (d && e && c) {
                if (a.eventType != Q) return this.failTimeout();
                var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, 
                this._input = a;
                var h = this.count % b.taps;
                if (0 === h) return this.hasRequireFailures() ? (this._timer = k(function() {
                    this.state = Vb, this.tryEmit();
                }, b.interval, this), Sb) : Vb;
            }
            return Xb;
        },
        failTimeout: function() {
            return this._timer = k(function() {
                this.state = Xb;
            }, this.options.interval, this), Xb;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
    }), hc.VERSION = "2.0.4", hc.defaults = {
        domEvents: !1,
        touchAction: Jb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [ [ ec, {
            enable: !1
        } ], [ cc, {
            enable: !1
        }, [ "rotate" ] ], [ fc, {
            direction: X
        } ], [ bc, {
            direction: X
        }, [ "swipe" ] ], [ gc ], [ gc, {
            event: "doubletap",
            taps: 2
        }, [ "tap" ] ], [ dc ] ],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ic = 1, jc = 2;
    kc.prototype = {
        set: function(a) {
            return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), 
            this.input.target = a.inputTarget, this.input.init()), this;
        },
        stop: function(a) {
            this.session.stopped = a ? jc : ic;
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & Vb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; ) c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), 
                !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++;
            }
        },
        get: function(a) {
            if (a instanceof Yb) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];
            return null;
        },
        add: function(a) {
            if (l(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), 
            a;
        },
        remove: function(a) {
            if (l(a, "remove", this)) return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this;
        },
        on: function(a, b) {
            var c = this.handlers;
            return m(x(a), function(a) {
                c[a] = c[a] || [], c[a].push(b);
            }), this;
        },
        off: function(a, b) {
            var c = this.handlers;
            return m(x(a), function(a) {
                b ? c[a].splice(y(c[a], b), 1) : delete c[a];
            }), this;
        },
        emit: function(a, b) {
            this.options.domEvents && mc(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault();
                };
                for (var d = 0; d < c.length; ) c[d](b), d++;
            }
        },
        destroy: function() {
            this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
            this.element = null;
        }
    }, n(hc, {
        INPUT_START: O,
        INPUT_MOVE: P,
        INPUT_END: Q,
        INPUT_CANCEL: R,
        STATE_POSSIBLE: Rb,
        STATE_BEGAN: Sb,
        STATE_CHANGED: Tb,
        STATE_ENDED: Ub,
        STATE_RECOGNIZED: Vb,
        STATE_CANCELLED: Wb,
        STATE_FAILED: Xb,
        DIRECTION_NONE: S,
        DIRECTION_LEFT: T,
        DIRECTION_RIGHT: U,
        DIRECTION_UP: V,
        DIRECTION_DOWN: W,
        DIRECTION_HORIZONTAL: X,
        DIRECTION_VERTICAL: Y,
        DIRECTION_ALL: Z,
        Manager: kc,
        Input: ab,
        TouchAction: Pb,
        TouchInput: Eb,
        MouseInput: rb,
        PointerEventInput: wb,
        TouchMouseInput: Gb,
        SingleTouchInput: Ab,
        Recognizer: Yb,
        AttrRecognizer: ac,
        Tap: gc,
        Pan: bc,
        Swipe: fc,
        Pinch: cc,
        Rotate: ec,
        Press: dc,
        on: t,
        off: u,
        each: m,
        merge: o,
        extend: n,
        inherit: p,
        bindFn: q,
        prefixed: B
    }), typeof define == g && define.amd ? define(function() {
        return hc;
    }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc;
}(window, document, "Hammer"), function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery", "hammerjs" ], factory) : "object" == typeof exports ? factory(require("jquery"), require("hammerjs")) : factory(jQuery, Hammer);
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        $el.data("hammer") || $el.data("hammer", new Hammer($el[0], options));
    }
    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    }, Hammer.Manager.prototype.emit = function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data), $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    }(Hammer.Manager.prototype.emit);
}), Materialize = {}, Materialize.guid = function() {
    function s4() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }
    return function() {
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    };
}(), Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element), $checkElements = $element.add($element.parents()), isFixed = !1;
    return $checkElements.each(function() {
        return "fixed" === $(this).css("position") ? (isFixed = !0, !1) : void 0;
    }), isFixed;
};

var Vel;

Vel = $ ? $.Velocity : Velocity, function($) {
    $.fn.collapsible = function(options) {
        var defaults = {
            accordion: void 0
        };
        return options = $.extend(defaults, options), this.each(function() {
            function accordionOpen(object) {
                $panel_headers = $this.find("> li > .collapsible-header"), object.hasClass("active") ? object.parent().addClass("active") : object.parent().removeClass("active"), 
                object.parent().hasClass("active") ? object.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        $(this).css("height", "");
                    }
                }) : object.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        $(this).css("height", "");
                    }
                }), $panel_headers.not(object).removeClass("active").parent().removeClass("active"), 
                $panel_headers.not(object).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        $(this).css("height", "");
                    }
                });
            }
            function expandableOpen(object) {
                object.hasClass("active") ? object.parent().addClass("active") : object.parent().removeClass("active"), 
                object.parent().hasClass("active") ? object.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        $(this).css("height", "");
                    }
                }) : object.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        $(this).css("height", "");
                    }
                });
            }
            function isChildrenOfPanelHeader(object) {
                var panelHeader = getPanelHeader(object);
                return panelHeader.length > 0;
            }
            function getPanelHeader(object) {
                return object.closest("li > .collapsible-header");
            }
            var $this = $(this), $panel_headers = $(this).find("> li > .collapsible-header"), collapsible_type = $this.data("collapsible");
            $this.off("click.collapse", ".collapsible-header"), $panel_headers.off("click.collapse"), 
            options.accordion || "accordion" === collapsible_type || void 0 === collapsible_type ? ($panel_headers = $this.find("> li > .collapsible-header"), 
            $panel_headers.on("click.collapse", function(e) {
                var element = $(e.target);
                isChildrenOfPanelHeader(element) && (element = getPanelHeader(element)), element.toggleClass("active"), 
                accordionOpen(element);
            }), accordionOpen($panel_headers.filter(".active").first())) : $panel_headers.each(function() {
                $(this).on("click.collapse", function(e) {
                    var element = $(e.target);
                    isChildrenOfPanelHeader(element) && (element = getPanelHeader(element)), element.toggleClass("active"), 
                    expandableOpen(element);
                }), $(this).hasClass("active") && expandableOpen($(this));
            });
        });
    }, $(document).ready(function() {
        $(".collapsible").collapsible();
    });
}(jQuery), function($) {
    $.fn.scrollTo = function(elem) {
        return $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top), 
        this;
    }, $.fn.dropdown = function(option) {
        var defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1
        };
        this.each(function() {
            function updateOptions() {
                void 0 !== origin.data("induration") && (options.inDuration = origin.data("inDuration")), 
                void 0 !== origin.data("outduration") && (options.outDuration = origin.data("outDuration")), 
                void 0 !== origin.data("constrainwidth") && (options.constrain_width = origin.data("constrainwidth")), 
                void 0 !== origin.data("hover") && (options.hover = origin.data("hover")), void 0 !== origin.data("gutter") && (options.gutter = origin.data("gutter")), 
                void 0 !== origin.data("beloworigin") && (options.belowOrigin = origin.data("beloworigin"));
            }
            function placeDropdown() {
                updateOptions(), activates.addClass("active"), options.constrain_width === !0 && activates.css("width", origin.outerWidth());
                var offset = 0;
                options.belowOrigin === !0 && (offset = origin.height());
                var offsetLeft = origin.offset().left, width_difference = 0, gutter_spacing = options.gutter;
                offsetLeft + activates.innerWidth() > $(window).width() && (width_difference = origin.innerWidth() - activates.innerWidth(), 
                gutter_spacing = -1 * gutter_spacing), activates.css({
                    position: "absolute",
                    top: origin.position().top + offset,
                    left: origin.position().left + width_difference + gutter_spacing
                }), activates.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: options.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        $(this).css("height", "");
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: options.inDuration,
                    easing: "easeOutSine"
                });
            }
            function hideDropdown() {
                activates.fadeOut(options.outDuration), activates.removeClass("active");
            }
            var origin = $(this), options = $.extend({}, defaults, option), activates = $("#" + origin.attr("data-activates"));
            if (updateOptions(), origin.after(activates), options.hover) {
                var open = !1;
                origin.unbind("click." + origin.attr("id")), origin.on("mouseenter", function(e) {
                    open === !1 && (placeDropdown(), open = !0);
                }), origin.on("mouseleave", function(e) {
                    var toEl = e.toElement || e.relatedTarget;
                    $(toEl).closest(".dropdown-content").is(activates) || (activates.stop(!0, !0), hideDropdown(), 
                    open = !1);
                }), activates.on("mouseleave", function(e) {
                    var toEl = e.toElement || e.relatedTarget;
                    $(toEl).closest(".dropdown-button").is(origin) || (activates.stop(!0, !0), hideDropdown(), 
                    open = !1);
                });
            } else origin.unbind("click." + origin.attr("id")), origin.bind("click." + origin.attr("id"), function(e) {
                origin[0] == e.currentTarget && 0 === $(e.target).closest(".dropdown-content").length ? (e.preventDefault(), 
                placeDropdown()) : origin.hasClass("active") && (hideDropdown(), $(document).unbind("click." + activates.attr("id"))), 
                activates.hasClass("active") && $(document).bind("click." + activates.attr("id"), function(e) {
                    !activates.is(e.target) && !origin.is(e.target) && !origin.find(e.target).length > 0 && (hideDropdown(), 
                    $(document).unbind("click." + activates.attr("id")));
                });
            });
            origin.on("open", placeDropdown), origin.on("close", hideDropdown);
        });
    }, $(document).ready(function() {
        $(".dropdown-button").dropdown();
    });
}(jQuery), function($) {
    var _stack = 0, _lastID = 0, _generateID = function() {
        return _lastID++, "materialize-lean-overlay-" + _lastID;
    };
    $.fn.extend({
        openModal: function(options) {
            $("body").css("overflow", "hidden");
            var defaults = {
                opacity: .5,
                in_duration: 350,
                out_duration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                starting_top: "4%"
            }, overlayID = _generateID(), $modal = $(this), $overlay = $('<div class="lean-overlay"></div>'), lStack = ++_stack;
            $overlay.attr("id", overlayID).css("z-index", 1e3 + 2 * lStack), $modal.data("overlay-id", overlayID).css("z-index", 1e3 + 2 * lStack + 1), 
            $("body").append($overlay), options = $.extend(defaults, options), options.dismissible && ($overlay.click(function() {
                $modal.closeModal(options);
            }), $(document).on("keyup.leanModal" + overlayID, function(e) {
                27 === e.keyCode && $modal.closeModal(options);
            })), $modal.find(".modal-close").on("click.close", function(e) {
                $modal.closeModal(options);
            }), $overlay.css({
                display: "block",
                opacity: 0
            }), $modal.css({
                display: "block",
                opacity: 0
            }), $overlay.velocity({
                opacity: options.opacity
            }, {
                duration: options.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), $modal.data("associated-overlay", $overlay[0]), $modal.hasClass("bottom-sheet") ? $modal.velocity({
                bottom: "0",
                opacity: 1
            }, {
                duration: options.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    "function" == typeof options.ready && options.ready();
                }
            }) : ($.Velocity.hook($modal, "scaleX", .7), $modal.css({
                top: options.starting_top
            }), $modal.velocity({
                top: "10%",
                opacity: 1,
                scaleX: "1"
            }, {
                duration: options.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    "function" == typeof options.ready && options.ready();
                }
            }));
        }
    }), $.fn.extend({
        closeModal: function(options) {
            var defaults = {
                out_duration: 250,
                complete: void 0
            }, $modal = $(this), overlayID = $modal.data("overlay-id"), $overlay = $("#" + overlayID);
            options = $.extend(defaults, options), $("body").css("overflow", ""), $modal.find(".modal-close").off("click.close"), 
            $(document).off("keyup.leanModal" + overlayID), $overlay.velocity({
                opacity: 0
            }, {
                duration: options.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), $modal.hasClass("bottom-sheet") ? $modal.velocity({
                bottom: "-100%",
                opacity: 0
            }, {
                duration: options.out_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    $overlay.css({
                        display: "none"
                    }), "function" == typeof options.complete && options.complete(), $overlay.remove(), 
                    _stack--;
                }
            }) : $modal.velocity({
                top: options.starting_top,
                opacity: 0,
                scaleX: .7
            }, {
                duration: options.out_duration,
                complete: function() {
                    $(this).css("display", "none"), "function" == typeof options.complete && options.complete(), 
                    $overlay.remove(), _stack--;
                }
            });
        }
    }), $.fn.extend({
        leanModal: function(option) {
            return this.each(function() {
                var defaults = {
                    starting_top: "4%"
                }, options = $.extend(defaults, option);
                $(this).click(function(e) {
                    options.starting_top = ($(this).offset().top - $(window).scrollTop()) / 1.15;
                    var modal_id = $(this).attr("href") || "#" + $(this).data("target");
                    $(modal_id).openModal(options), e.preventDefault();
                });
            });
        }
    });
}(jQuery), function($) {
    $.fn.materialbox = function() {
        return this.each(function() {
            function returnToOriginal() {
                doneAnimating = !1;
                var placeholder = origin.parent(".material-placeholder"), originalWidth = (window.innerWidth, 
                window.innerHeight, origin.data("width")), originalHeight = origin.data("height");
                origin.velocity("stop", !0), $("#materialbox-overlay").velocity("stop", !0), $(".materialbox-caption").velocity("stop", !0), 
                $("#materialbox-overlay").velocity({
                    opacity: 0
                }, {
                    duration: outDuration,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        overlayActive = !1, $(this).remove();
                    }
                }), origin.velocity({
                    width: originalWidth,
                    height: originalHeight,
                    left: 0,
                    top: 0
                }, {
                    duration: outDuration,
                    queue: !1,
                    easing: "easeOutQuad"
                }), $(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: outDuration,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        placeholder.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }), origin.css({
                            height: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), origin.removeClass("active"), doneAnimating = !0, $(this).remove();
                    }
                });
            }
            if (!$(this).hasClass("initialized")) {
                $(this).addClass("initialized");
                var overlayActive = !1, doneAnimating = !0, inDuration = 275, outDuration = 200, origin = $(this), placeholder = $("<div></div>").addClass("material-placeholder");
                origin.wrap(placeholder), origin.on("click", function() {
                    var placeholder = origin.parent(".material-placeholder"), windowWidth = window.innerWidth, windowHeight = window.innerHeight, originalWidth = origin.width(), originalHeight = origin.height();
                    if (doneAnimating === !1) return returnToOriginal(), !1;
                    if (overlayActive && doneAnimating === !0) return returnToOriginal(), !1;
                    doneAnimating = !1, origin.addClass("active"), overlayActive = !0, placeholder.css({
                        width: placeholder[0].getBoundingClientRect().width,
                        height: placeholder[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), origin.css({
                        position: "absolute",
                        "z-index": 1e3
                    }).data("width", originalWidth).data("height", originalHeight);
                    var overlay = $('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        doneAnimating === !0 && returnToOriginal();
                    });
                    if ($("body").append(overlay), overlay.velocity({
                        opacity: 1
                    }, {
                        duration: inDuration,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), "" !== origin.data("caption")) {
                        var $photo_caption = $('<div class="materialbox-caption"></div>');
                        $photo_caption.text(origin.data("caption")), $("body").append($photo_caption), $photo_caption.css({
                            display: "inline"
                        }), $photo_caption.velocity({
                            opacity: 1
                        }, {
                            duration: inDuration,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                    }
                    var ratio = 0, widthPercent = originalWidth / windowWidth, heightPercent = originalHeight / windowHeight, newWidth = 0, newHeight = 0;
                    widthPercent > heightPercent ? (ratio = originalHeight / originalWidth, newWidth = .9 * windowWidth, 
                    newHeight = .9 * windowWidth * ratio) : (ratio = originalWidth / originalHeight, 
                    newWidth = .9 * windowHeight * ratio, newHeight = .9 * windowHeight), origin.hasClass("responsive-img") ? origin.velocity({
                        "max-width": newWidth,
                        width: originalWidth
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            origin.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: newHeight,
                                width: newWidth,
                                left: $(document).scrollLeft() + windowWidth / 2 - origin.parent(".material-placeholder").offset().left - newWidth / 2,
                                top: $(document).scrollTop() + windowHeight / 2 - origin.parent(".material-placeholder").offset().top - newHeight / 2
                            }, {
                                duration: inDuration,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    doneAnimating = !0;
                                }
                            });
                        }
                    }) : origin.css("left", 0).css("top", 0).velocity({
                        height: newHeight,
                        width: newWidth,
                        left: $(document).scrollLeft() + windowWidth / 2 - origin.parent(".material-placeholder").offset().left - newWidth / 2,
                        top: $(document).scrollTop() + windowHeight / 2 - origin.parent(".material-placeholder").offset().top - newHeight / 2
                    }, {
                        duration: inDuration,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            doneAnimating = !0;
                        }
                    });
                }), $(window).scroll(function() {
                    overlayActive && returnToOriginal();
                }), $(document).keyup(function(e) {
                    27 === e.keyCode && doneAnimating === !0 && overlayActive && returnToOriginal();
                });
            }
        });
    }, $(document).ready(function() {
        $(".materialboxed").materialbox();
    });
}(jQuery), function($) {
    $.fn.parallax = function() {
        var window_width = $(window).width();
        return this.each(function(i) {
            function updateParallax(initial) {
                var container_height;
                container_height = 601 > window_width ? $this.height() > 0 ? $this.height() : $this.children("img").height() : $this.height() > 0 ? $this.height() : 500;
                var $img = $this.children("img").first(), img_height = $img.height(), parallax_dist = img_height - container_height, bottom = $this.offset().top + container_height, top = $this.offset().top, scrollTop = $(window).scrollTop(), windowHeight = window.innerHeight, windowBottom = scrollTop + windowHeight, percentScrolled = (windowBottom - top) / (container_height + windowHeight), parallax = Math.round(parallax_dist * percentScrolled);
                initial && $img.css("display", "block"), bottom > scrollTop && scrollTop + windowHeight > top && $img.css("transform", "translate3D(-50%," + parallax + "px, 0)");
            }
            var $this = $(this);
            $this.addClass("parallax"), $this.children("img").one("load", function() {
                updateParallax(!0);
            }).each(function() {
                this.complete && $(this).load();
            }), $(window).scroll(function() {
                window_width = $(window).width(), updateParallax(!1);
            }), $(window).resize(function() {
                window_width = $(window).width(), updateParallax(!1);
            });
        });
    };
}(jQuery), function($) {
    var methods = {
        init: function() {
            return this.each(function() {
                var $this = $(this);
                $(window).width();
                $this.width("100%");
                var $num_tabs = $(this).children("li").length;
                $this.children("li").each(function() {
                    $(this).width(100 / $num_tabs + "%");
                });
                var $active, $content, $links = $this.find("li.tab a"), $tabs_width = $this.width(), $tab_width = $this.find("li").first().outerWidth(), $index = 0;
                $active = $($links.filter('[href="' + location.hash + '"]')), 0 === $active.length && ($active = $(this).find("li.tab a.active").first()), 
                0 === $active.length && ($active = $(this).find("li.tab a").first()), $active.addClass("active"), 
                $index = $links.index($active), 0 > $index && ($index = 0), $content = $($active[0].hash), 
                $this.append('<div class="indicator"></div>');
                var $indicator = $this.find(".indicator");
                $this.is(":visible") && ($indicator.css({
                    right: $tabs_width - ($index + 1) * $tab_width
                }), $indicator.css({
                    left: $index * $tab_width
                })), $(window).resize(function() {
                    $tabs_width = $this.width(), $tab_width = $this.find("li").first().outerWidth(), 
                    0 > $index && ($index = 0), 0 !== $tab_width && 0 !== $tabs_width && ($indicator.css({
                        right: $tabs_width - ($index + 1) * $tab_width
                    }), $indicator.css({
                        left: $index * $tab_width
                    }));
                }), $links.not($active).each(function() {
                    $(this.hash).hide();
                }), $this.on("click", "a", function(e) {
                    if ($(this).parent().hasClass("disabled")) return void e.preventDefault();
                    $tabs_width = $this.width(), $tab_width = $this.find("li").first().outerWidth(), 
                    $active.removeClass("active"), $content.hide(), $active = $(this), $content = $(this.hash), 
                    $links = $this.find("li.tab a"), $active.addClass("active");
                    var $prev_index = $index;
                    $index = $links.index($(this)), 0 > $index && ($index = 0), $content.show(), $index - $prev_index >= 0 ? ($indicator.velocity({
                        right: $tabs_width - ($index + 1) * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), $indicator.velocity({
                        left: $index * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : ($indicator.velocity({
                        left: $index * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), $indicator.velocity({
                        right: $tabs_width - ($index + 1) * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), e.preventDefault();
                });
            });
        },
        select_tab: function(id) {
            this.find('a[href="#' + id + '"]').trigger("click");
        }
    };
    $.fn.tabs = function(methodOrOptions) {
        return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.tooltip") : methods.init.apply(this, arguments);
    }, $(document).ready(function() {
        $("ul.tabs").tabs();
    });
}(jQuery), function($) {
    $.fn.tooltip = function(options) {
        var counter = null, started = !1, counterInterval = null, margin = 5, defaults = {
            delay: 350
        };
        return options = $.extend(defaults, options), $(".material-tooltip").remove(), this.each(function() {
            var origin = $(this), tooltip_text = $("<span></span>").text(origin.attr("data-tooltip")), newTooltip = $("<div></div>");
            newTooltip.addClass("material-tooltip").append(tooltip_text), newTooltip.appendTo($("body"));
            var backdrop = $("<div></div>").addClass("backdrop");
            backdrop.appendTo(newTooltip), backdrop.css({
                top: 0,
                left: 0
            }), $(this).off("mouseenter mouseleave"), $(this).on({
                mouseenter: function(e) {
                    var tooltip_delay = origin.data("delay");
                    tooltip_delay = void 0 === tooltip_delay || "" === tooltip_delay ? options.delay : tooltip_delay, 
                    counter = 0, counterInterval = setInterval(function() {
                        if (counter += 10, counter >= tooltip_delay && started === !1) {
                            started = !0, newTooltip.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), newTooltip.children("span").text(origin.attr("data-tooltip"));
                            var originWidth = origin.outerWidth(), originHeight = origin.outerHeight(), tooltipPosition = origin.attr("data-position"), tooltipHeight = newTooltip.outerHeight(), tooltipWidth = newTooltip.outerWidth(), tooltipVerticalMovement = "0px", tooltipHorizontalMovement = "0px", scale_factor = 8;
                            "top" === tooltipPosition ? (newTooltip.css({
                                top: origin.offset().top - tooltipHeight - margin,
                                left: origin.offset().left + originWidth / 2 - tooltipWidth / 2
                            }), tooltipVerticalMovement = "-10px", backdrop.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: tooltipHeight,
                                marginLeft: tooltipWidth / 2 - backdrop.width() / 2
                            })) : "left" === tooltipPosition ? (newTooltip.css({
                                top: origin.offset().top + originHeight / 2 - tooltipHeight / 2,
                                left: origin.offset().left - tooltipWidth - margin
                            }), tooltipHorizontalMovement = "-10px", backdrop.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: tooltipHeight / 2,
                                marginLeft: tooltipWidth
                            })) : "right" === tooltipPosition ? (newTooltip.css({
                                top: origin.offset().top + originHeight / 2 - tooltipHeight / 2,
                                left: origin.offset().left + originWidth + margin
                            }), tooltipHorizontalMovement = "+10px", backdrop.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: tooltipHeight / 2,
                                marginLeft: "0px"
                            })) : (newTooltip.css({
                                top: origin.offset().top + origin.outerHeight() + margin,
                                left: origin.offset().left + originWidth / 2 - tooltipWidth / 2
                            }), tooltipVerticalMovement = "+10px", backdrop.css({
                                marginLeft: tooltipWidth / 2 - backdrop.width() / 2
                            })), scale_factor = tooltipWidth / 8, 8 > scale_factor && (scale_factor = 8), ("right" === tooltipPosition || "left" === tooltipPosition) && (scale_factor = tooltipWidth / 10, 
                            6 > scale_factor && (scale_factor = 6)), newTooltip.velocity({
                                opacity: 1,
                                marginTop: tooltipVerticalMovement,
                                marginLeft: tooltipHorizontalMovement
                            }, {
                                duration: 350,
                                queue: !1
                            }), backdrop.css({
                                display: "block"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scale: scale_factor
                            }, {
                                duration: 300,
                                delay: 0,
                                queue: !1,
                                easing: "easeInOutQuad"
                            });
                        }
                    }, 10);
                },
                mouseleave: function() {
                    clearInterval(counterInterval), counter = 0, newTooltip.velocity({
                        opacity: 0,
                        marginTop: 0,
                        marginLeft: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        delay: 275
                    }), backdrop.velocity({
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: 225,
                        delay: 275,
                        queue: !1,
                        complete: function() {
                            backdrop.css("display", "none"), newTooltip.css("display", "none"), started = !1;
                        }
                    });
                }
            });
        });
    }, $(document).ready(function() {
        $(".tooltipped").tooltip();
    });
}(jQuery), function(window) {
    "use strict";
    function isWindow(obj) {
        return null !== obj && obj === obj.window;
    }
    function getWindow(elem) {
        return isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView;
    }
    function offset(elem) {
        var docElem, win, box = {
            top: 0,
            left: 0
        }, doc = elem && elem.ownerDocument;
        return docElem = doc.documentElement, "undefined" != typeof elem.getBoundingClientRect && (box = elem.getBoundingClientRect()), 
        win = getWindow(doc), {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }
    function convertStyle(obj) {
        var style = "";
        for (var a in obj) obj.hasOwnProperty(a) && (style += a + ":" + obj[a] + ";");
        return style;
    }
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === !1) return null;
        for (var element = null, target = e.target || e.srcElement; null !== target.parentElement; ) {
            if (!(target instanceof SVGElement || -1 === target.className.indexOf("waves-effect"))) {
                element = target;
                break;
            }
            if (target.classList.contains("waves-effect")) {
                element = target;
                break;
            }
            target = target.parentElement;
        }
        return element;
    }
    function showEffect(e) {
        var element = getWavesEffectElement(e);
        null !== element && (Effect.show(e, element), "ontouchstart" in window && (element.addEventListener("touchend", Effect.hide, !1), 
        element.addEventListener("touchcancel", Effect.hide, !1)), element.addEventListener("mouseup", Effect.hide, !1), 
        element.addEventListener("mouseleave", Effect.hide, !1));
    }
    var Waves = Waves || {}, $$ = document.querySelectorAll.bind(document), Effect = {
        duration: 750,
        show: function(e, element) {
            if (2 === e.button) return !1;
            var el = element || this, ripple = document.createElement("div");
            ripple.className = "waves-ripple", el.appendChild(ripple);
            var pos = offset(el), relativeY = e.pageY - pos.top, relativeX = e.pageX - pos.left, scale = "scale(" + el.clientWidth / 100 * 10 + ")";
            "touches" in e && (relativeY = e.touches[0].pageY - pos.top, relativeX = e.touches[0].pageX - pos.left), 
            ripple.setAttribute("data-hold", Date.now()), ripple.setAttribute("data-scale", scale), 
            ripple.setAttribute("data-x", relativeX), ripple.setAttribute("data-y", relativeY);
            var rippleStyle = {
                top: relativeY + "px",
                left: relativeX + "px"
            };
            ripple.className = ripple.className + " waves-notransition", ripple.setAttribute("style", convertStyle(rippleStyle)), 
            ripple.className = ripple.className.replace("waves-notransition", ""), rippleStyle["-webkit-transform"] = scale, 
            rippleStyle["-moz-transform"] = scale, rippleStyle["-ms-transform"] = scale, rippleStyle["-o-transform"] = scale, 
            rippleStyle.transform = scale, rippleStyle.opacity = "1", rippleStyle["-webkit-transition-duration"] = Effect.duration + "ms", 
            rippleStyle["-moz-transition-duration"] = Effect.duration + "ms", rippleStyle["-o-transition-duration"] = Effect.duration + "ms", 
            rippleStyle["transition-duration"] = Effect.duration + "ms", rippleStyle["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            rippleStyle["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            rippleStyle["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            rippleStyle["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            ripple.setAttribute("style", convertStyle(rippleStyle));
        },
        hide: function(e) {
            TouchHandler.touchup(e);
            var el = this, ripple = (1.4 * el.clientWidth, null), ripples = el.getElementsByClassName("waves-ripple");
            if (!(ripples.length > 0)) return !1;
            ripple = ripples[ripples.length - 1];
            var relativeX = ripple.getAttribute("data-x"), relativeY = ripple.getAttribute("data-y"), scale = ripple.getAttribute("data-scale"), diff = Date.now() - Number(ripple.getAttribute("data-hold")), delay = 350 - diff;
            0 > delay && (delay = 0), setTimeout(function() {
                var style = {
                    top: relativeY + "px",
                    left: relativeX + "px",
                    opacity: "0",
                    "-webkit-transition-duration": Effect.duration + "ms",
                    "-moz-transition-duration": Effect.duration + "ms",
                    "-o-transition-duration": Effect.duration + "ms",
                    "transition-duration": Effect.duration + "ms",
                    "-webkit-transform": scale,
                    "-moz-transform": scale,
                    "-ms-transform": scale,
                    "-o-transform": scale,
                    transform: scale
                };
                ripple.setAttribute("style", convertStyle(style)), setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return !1;
                    }
                }, Effect.duration);
            }, delay);
        },
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];
                if ("input" === el.tagName.toLowerCase()) {
                    var parent = el.parentNode;
                    if ("i" === parent.tagName.toLowerCase() && -1 !== parent.className.indexOf("waves-effect")) continue;
                    var wrapper = document.createElement("i");
                    wrapper.className = el.className + " waves-input-wrapper";
                    var elementStyle = el.getAttribute("style");
                    elementStyle || (elementStyle = ""), wrapper.setAttribute("style", elementStyle), 
                    el.className = "waves-button-input", el.removeAttribute("style"), parent.replaceChild(wrapper, el), 
                    wrapper.appendChild(el);
                }
            }
        }
    }, TouchHandler = {
        touches: 0,
        allowEvent: function(e) {
            var allow = !0;
            return "touchstart" === e.type ? TouchHandler.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                TouchHandler.touches > 0 && (TouchHandler.touches -= 1);
            }, 500) : "mousedown" === e.type && TouchHandler.touches > 0 && (allow = !1), allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };
    Waves.displayEffect = function(options) {
        options = options || {}, "duration" in options && (Effect.duration = options.duration), 
        Effect.wrapInput($$(".waves-effect")), "ontouchstart" in window && document.body.addEventListener("touchstart", showEffect, !1), 
        document.body.addEventListener("mousedown", showEffect, !1);
    }, Waves.attach = function(element) {
        "input" === element.tagName.toLowerCase() && (Effect.wrapInput([ element ]), element = element.parentElement), 
        "ontouchstart" in window && element.addEventListener("touchstart", showEffect, !1), 
        element.addEventListener("mousedown", showEffect, !1);
    }, window.Waves = Waves, document.addEventListener("DOMContentLoaded", function() {
        Waves.displayEffect();
    }, !1);
}(window), Materialize.toast = function(message, displayLength, className, completeCallback) {
    function createToast(html) {
        var toast = document.createElement("div");
        if (toast.classList.add("toast"), className) for (var classes = className.split(" "), i = 0, count = classes.length; count > i; i++) toast.classList.add(classes[i]);
        toast.innerHTML = html;
        var hammerHandler = new Hammer(toast, {
            prevent_default: !1
        });
        return hammerHandler.on("pan", function(e) {
            var deltaX = e.deltaX, activationDistance = 80;
            toast.classList.contains("panning") || toast.classList.add("panning");
            var opacityPercent = 1 - Math.abs(deltaX / activationDistance);
            0 > opacityPercent && (opacityPercent = 0), Vel(toast, {
                left: deltaX,
                opacity: opacityPercent
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            });
        }), hammerHandler.on("panend", function(e) {
            var deltaX = e.deltaX, activationDistance = 80;
            Math.abs(deltaX) > activationDistance ? Vel(toast, {
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof completeCallback && completeCallback(), toast.parentNode.removeChild(toast);
                }
            }) : (toast.classList.remove("panning"), Vel(toast, {
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }));
        }), toast;
    }
    className = className || "";
    var container = document.getElementById("toast-container");
    null === container && (container = document.createElement("div"), container.id = "toast-container", 
    document.body.appendChild(container));
    var newToast = createToast(message);
    message && container.appendChild(newToast), newToast.style.top = "35px", newToast.style.opacity = 0, 
    Vel(newToast, {
        top: "0px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var timeLeft = displayLength, counterInterval = setInterval(function() {
        null === newToast.parentNode && window.clearInterval(counterInterval), newToast.classList.contains("panning") || (timeLeft -= 20), 
        0 >= timeLeft && (Vel(newToast, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof completeCallback && completeCallback(), this[0].parentNode.removeChild(this[0]);
            }
        }), window.clearInterval(counterInterval));
    }, 20);
}, function($) {
    var methods = {
        init: function(options) {
            var defaults = {
                menuWidth: 240,
                edge: "left",
                closeOnClick: !1
            };
            options = $.extend(defaults, options), $(this).each(function() {
                function removeMenu(restoreNav) {
                    panning = !1, menuOut = !1, $("body").css("overflow", ""), $("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $(this).remove();
                        }
                    }), "left" === options.edge ? ($(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }), menu_id.velocity({
                        left: -1 * (options.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            restoreNav === !0 && (menu_id.removeAttr("style"), menu_id.css("width", options.menuWidth));
                        }
                    })) : ($(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }), menu_id.velocity({
                        right: -1 * (options.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            restoreNav === !0 && (menu_id.removeAttr("style"), menu_id.css("width", options.menuWidth));
                        }
                    }));
                }
                var $this = $(this), menu_id = $("#" + $this.attr("data-activates"));
                240 != options.menuWidth && menu_id.css("width", options.menuWidth), $("body").append($('<div class="drag-target"></div>')), 
                "left" == options.edge ? (menu_id.css("left", -1 * (options.menuWidth + 10)), $(".drag-target").css({
                    left: 0
                })) : (menu_id.addClass("right-aligned").css("right", -1 * (options.menuWidth + 10)).css("left", ""), 
                $(".drag-target").css({
                    right: 0
                })), menu_id.hasClass("fixed") && window.innerWidth > 992 && menu_id.css("left", 0), 
                menu_id.hasClass("fixed") && $(window).resize(function() {
                    window.innerWidth > 992 ? 0 !== $("#sidenav-overlay").css("opacity") && menuOut ? removeMenu(!0) : (menu_id.removeAttr("style"), 
                    menu_id.css("width", options.menuWidth)) : menuOut === !1 && ("left" === options.edge ? menu_id.css("left", -1 * (options.menuWidth + 10)) : menu_id.css("right", -1 * (options.menuWidth + 10)));
                }), options.closeOnClick === !0 && menu_id.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    removeMenu();
                });
                var panning = !1, menuOut = !1;
                $(".drag-target").on("click", function() {
                    removeMenu();
                }), $(".drag-target").hammer({
                    prevent_default: !1
                }).bind("pan", function(e) {
                    if ("touch" == e.gesture.pointerType) {
                        var x = (e.gesture.direction, e.gesture.center.x);
                        e.gesture.center.y, e.gesture.velocityX;
                        if ($("body").css("overflow", "hidden"), 0 === $("#sidenav-overlay").length) {
                            var overlay = $('<div id="sidenav-overlay"></div>');
                            overlay.css("opacity", 0).click(function() {
                                removeMenu();
                            }), $("body").append(overlay);
                        }
                        if ("left" === options.edge && (x > options.menuWidth ? x = options.menuWidth : 0 > x && (x = 0)), 
                        "left" === options.edge) x < options.menuWidth / 2 ? menuOut = !1 : x >= options.menuWidth / 2 && (menuOut = !0), 
                        menu_id.css("left", x - options.menuWidth); else {
                            x < window.innerWidth - options.menuWidth / 2 ? menuOut = !0 : x >= window.innerWidth - options.menuWidth / 2 && (menuOut = !1);
                            var rightPos = -1 * (x - options.menuWidth / 2);
                            rightPos > 0 && (rightPos = 0), menu_id.css("right", rightPos);
                        }
                        var overlayPerc;
                        "left" === options.edge ? (overlayPerc = x / options.menuWidth, $("#sidenav-overlay").velocity({
                            opacity: overlayPerc
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth), $("#sidenav-overlay").velocity({
                            opacity: overlayPerc
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }));
                    }
                }).bind("panend", function(e) {
                    if ("touch" == e.gesture.pointerType) {
                        var velocityX = e.gesture.velocityX;
                        panning = !1, "left" === options.edge ? menuOut && .3 >= velocityX || -.5 > velocityX ? (menu_id.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!menuOut || velocityX > .3) && ($("body").css("overflow", ""), menu_id.velocity({
                            left: -1 * (options.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $(this).remove();
                            }
                        }), $(".drag-target").css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : menuOut && velocityX >= -.3 || velocityX > .5 ? (menu_id.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!menuOut || -.3 > velocityX) && ($("body").css("overflow", ""), menu_id.velocity({
                            right: -1 * (options.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $(this).remove();
                            }
                        }), $(".drag-target").css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }));
                    }
                }), $this.click(function() {
                    if (menuOut === !0) menuOut = !1, panning = !1, removeMenu(); else {
                        $("body").css("overflow", "hidden"), "left" === options.edge ? ($(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), menu_id.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : ($(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), menu_id.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), menu_id.css("left", ""));
                        var overlay = $('<div id="sidenav-overlay"></div>');
                        overlay.css("opacity", 0).click(function() {
                            menuOut = !1, panning = !1, removeMenu(), overlay.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    $(this).remove();
                                }
                            });
                        }), $("body").append(overlay), overlay.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                menuOut = !0, panning = !1;
                            }
                        });
                    }
                    return !1;
                });
            });
        },
        show: function() {
            this.trigger("click");
        },
        hide: function() {
            $("#sidenav-overlay").trigger("click");
        }
    };
    $.fn.sideNav = function(methodOrOptions) {
        return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.sideNav") : methods.init.apply(this, arguments);
    };
}(jQuery), function($) {
    function findElements(top, right, bottom, left) {
        var hits = $();
        return $.each(elements, function(i, element) {
            if (element.height() > 0) {
                var elTop = element.offset().top, elLeft = element.offset().left, elRight = elLeft + element.width(), elBottom = elTop + element.height(), isIntersect = !(elLeft > right || left > elRight || elTop > bottom || top > elBottom);
                isIntersect && hits.push(element);
            }
        }), hits;
    }
    function onScroll() {
        ++ticks;
        var top = jWindow.scrollTop(), left = jWindow.scrollLeft(), right = left + jWindow.width(), bottom = top + jWindow.height(), intersections = findElements(top + offset.top + 200, right + offset.right, bottom + offset.bottom, left + offset.left);
        $.each(intersections, function(i, element) {
            var lastTick = element.data("scrollSpy:ticks");
            "number" != typeof lastTick && element.triggerHandler("scrollSpy:enter"), element.data("scrollSpy:ticks", ticks);
        }), $.each(elementsInView, function(i, element) {
            var lastTick = element.data("scrollSpy:ticks");
            "number" == typeof lastTick && lastTick !== ticks && (element.triggerHandler("scrollSpy:exit"), 
            element.data("scrollSpy:ticks", null));
        }), elementsInView = intersections;
    }
    function onWinSize() {
        jWindow.trigger("scrollSpy:winSize");
    }
    function throttle(func, wait, options) {
        var context, args, result, timeout = null, previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === !1 ? 0 : getTime(), timeout = null, result = func.apply(context, args), 
            context = args = null;
        };
        return function() {
            var now = getTime();
            previous || options.leading !== !1 || (previous = now);
            var remaining = wait - (now - previous);
            return context = this, args = arguments, 0 >= remaining ? (clearTimeout(timeout), 
            timeout = null, previous = now, result = func.apply(context, args), context = args = null) : timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining)), 
            result;
        };
    }
    var jWindow = $(window), elements = [], elementsInView = [], isSpying = !1, ticks = 0, offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, getTime = Date.now || function() {
        return new Date().getTime();
    };
    $.scrollSpy = function(selector, options) {
        var visible = [];
        selector = $(selector), selector.each(function(i, element) {
            elements.push($(element)), $(element).data("scrollSpy:id", i), $("a[href=#" + $(element).attr("id") + "]").click(function(e) {
                e.preventDefault();
                var offset = $(this.hash).offset().top + 1;
                $("html, body").animate({
                    scrollTop: offset - 200
                }, {
                    duration: 400,
                    queue: !1,
                    easing: "easeOutCubic"
                });
            });
        }), options = options || {
            throttle: 100
        }, offset.top = options.offsetTop || 0, offset.right = options.offsetRight || 0, 
        offset.bottom = options.offsetBottom || 0, offset.left = options.offsetLeft || 0;
        var throttledScroll = throttle(onScroll, options.throttle || 100), readyScroll = function() {
            $(document).ready(throttledScroll);
        };
        return isSpying || (jWindow.on("scroll", readyScroll), jWindow.on("resize", readyScroll), 
        isSpying = !0), setTimeout(readyScroll, 0), selector.on("scrollSpy:enter", function() {
            visible = $.grep(visible, function(value) {
                return 0 != value.height();
            });
            var $this = $(this);
            visible[0] ? ($("a[href=#" + visible[0].attr("id") + "]").removeClass("active"), 
            $this.data("scrollSpy:id") < visible[0].data("scrollSpy:id") ? visible.unshift($(this)) : visible.push($(this))) : visible.push($(this)), 
            $("a[href=#" + visible[0].attr("id") + "]").addClass("active");
        }), selector.on("scrollSpy:exit", function() {
            if (visible = $.grep(visible, function(value) {
                return 0 != value.height();
            }), visible[0]) {
                $("a[href=#" + visible[0].attr("id") + "]").removeClass("active");
                var $this = $(this);
                visible = $.grep(visible, function(value) {
                    return value.attr("id") != $this.attr("id");
                }), visible[0] && $("a[href=#" + visible[0].attr("id") + "]").addClass("active");
            }
        }), selector;
    }, $.winSizeSpy = function(options) {
        return $.winSizeSpy = function() {
            return jWindow;
        }, options = options || {
            throttle: 100
        }, jWindow.on("resize", throttle(onWinSize, options.throttle || 100));
    }, $.fn.scrollSpy = function(options) {
        return $.scrollSpy($(this), options);
    };
}(jQuery), function($) {
    $(document).ready(function() {
        function textareaAutoResize($textarea) {
            var fontFamily = $textarea.css("font-family"), fontSize = $textarea.css("font-size");
            fontSize && hiddenDiv.css("font-size", fontSize), fontFamily && hiddenDiv.css("font-family", fontFamily), 
            "off" === $textarea.attr("wrap") && hiddenDiv.css("overflow-wrap", "normal").css("white-space", "pre"), 
            hiddenDiv.text($textarea.val() + "\n");
            var content = hiddenDiv.html().replace(/\n/g, "<br>");
            hiddenDiv.html(content), $textarea.is(":visible") ? hiddenDiv.css("width", $textarea.width()) : hiddenDiv.css("width", $(window).width() / 2), 
            $textarea.css("height", hiddenDiv.height());
        }
        Materialize.updateTextFields = function() {
            var input_selector = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            $(input_selector).each(function(index, element) {
                $(element).val().length > 0 || void 0 !== $(this).attr("placeholder") || $(element)[0].validity.badInput === !0 ? $(this).siblings("label, i").addClass("active") : $(this).siblings("label, i").removeClass("active");
            });
        };
        var input_selector = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        $("input[autofocus]").siblings("label, i").addClass("active"), $(document).on("change", input_selector, function() {
            (0 !== $(this).val().length || void 0 !== $(this).attr("placeholder")) && $(this).siblings("label, i").addClass("active"), 
            validate_field($(this));
        }), $(document).ready(function() {
            Materialize.updateTextFields();
        }), $(document).on("reset", function(e) {
            var formReset = $(e.target);
            formReset.is("form") && (formReset.find(input_selector).removeClass("valid").removeClass("invalid"), 
            formReset.find(input_selector).each(function() {
                "" === $(this).attr("value") && $(this).siblings("label, i").removeClass("active");
            }), formReset.find("select.initialized").each(function() {
                var reset_text = formReset.find("option[selected]").text();
                formReset.siblings("input.select-dropdown").val(reset_text);
            }));
        }), $(document).on("focus", input_selector, function() {
            $(this).siblings("label, i").addClass("active");
        }), $(document).on("blur", input_selector, function() {
            var $inputElement = $(this);
            0 === $inputElement.val().length && $inputElement[0].validity.badInput !== !0 && void 0 === $inputElement.attr("placeholder") && $inputElement.siblings("label, i").removeClass("active"), 
            validate_field($inputElement);
        }), validate_field = function(object) {
            var hasLength = void 0 !== object.attr("length"), lenAttr = parseInt(object.attr("length")), len = object.val().length;
            0 === object.val().length && object[0].validity.badInput === !1 ? object.hasClass("validate") && (object.removeClass("valid"), 
            object.removeClass("invalid")) : object.hasClass("validate") && (object.is(":valid") && hasLength && lenAttr > len || object.is(":valid") && !hasLength ? (object.removeClass("invalid"), 
            object.addClass("valid")) : (object.removeClass("valid"), object.addClass("invalid")));
        };
        var hiddenDiv = $(".hiddendiv").first();
        hiddenDiv.length || (hiddenDiv = $('<div class="hiddendiv common"></div>'), $("body").append(hiddenDiv));
        var text_area_selector = ".materialize-textarea";
        $(text_area_selector).each(function() {
            var $textarea = $(this);
            $textarea.val().length && textareaAutoResize($textarea);
        }), $("body").on("keyup keydown", text_area_selector, function() {
            textareaAutoResize($(this));
        }), $(".file-field").each(function() {
            var path_input = $(this).find("input.file-path");
            $(this).find('input[type="file"]').change(function() {
                path_input.val($(this)[0].files[0].name), path_input.trigger("change");
            });
        });
        var left, range_type = "input[type=range]", range_mousedown = !1;
        $(range_type).each(function() {
            var thumb = $('<span class="thumb"><span class="value"></span></span>');
            $(this).after(thumb);
        });
        var range_wrapper = ".range-field";
        $(document).on("change", range_type, function(e) {
            var thumb = $(this).siblings(".thumb");
            thumb.find(".value").html($(this).val());
        }), $(document).on("mousedown touchstart", range_type, function(e) {
            var thumb = $(this).siblings(".thumb");
            thumb.length <= 0 && (thumb = $('<span class="thumb"><span class="value"></span></span>'), 
            $(this).append(thumb)), thumb.find(".value").html($(this).val()), range_mousedown = !0, 
            $(this).addClass("active"), thumb.hasClass("active") || thumb.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), left = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - $(this).offset().left : e.pageX - $(this).offset().left;
            var width = $(this).outerWidth();
            0 > left ? left = 0 : left > width && (left = width), thumb.addClass("active").css("left", left), 
            thumb.find(".value").html($(this).val());
        }), $(document).on("mouseup touchend", range_wrapper, function() {
            range_mousedown = !1, $(this).removeClass("active");
        }), $(document).on("mousemove touchmove", range_wrapper, function(e) {
            var left, thumb = $(this).children(".thumb");
            if (range_mousedown) {
                thumb.hasClass("active") || thumb.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), left = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - $(this).offset().left : e.pageX - $(this).offset().left;
                var width = $(this).outerWidth();
                0 > left ? left = 0 : left > width && (left = width), thumb.addClass("active").css("left", left);
            }
        }), $(document).on("mouseout touchleave", range_wrapper, function() {
            if (!range_mousedown) {
                var thumb = $(this).children(".thumb");
                thumb.hasClass("active") && thumb.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), thumb.removeClass("active");
            }
        });
    }), $.fn.material_select = function(callback) {
        $(this).each(function() {
            if ($select = $(this), !$select.hasClass("browser-default")) {
                var lastID = $select.data("select-id");
                if (lastID && ($select.parent().find("i").remove(), $select.parent().find("input").remove(), 
                $select.unwrap(), $("ul#select-options-" + lastID).remove()), "destroy" === callback) return void $select.data("select-id", null).removeClass("initialized");
                var uniqueID = Materialize.guid();
                $select.data("select-id", uniqueID);
                var wrapper = $('<div class="select-wrapper"></div>');
                wrapper.addClass($select.attr("class"));
                var label, options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown"></ul>'), selectOptions = $select.children("option");
                label = void 0 !== $select.find("option:selected") ? $select.find("option:selected") : options.first(), 
                selectOptions.each(function() {
                    options.append($('<li class="' + ($(this).is(":disabled") ? "disabled" : "") + '"><span>' + $(this).html() + "</span></li>"));
                }), options.find("li").each(function(i) {
                    var $curr_select = $select;
                    $(this).click(function() {
                        $(this).hasClass("disabled") || ($curr_select.find("option").eq(i).prop("selected", !0), 
                        $curr_select.trigger("change"), $curr_select.siblings("input.select-dropdown").val($(this).text()), 
                        "undefined" != typeof callback && callback());
                    });
                }), $select.wrap(wrapper);
                var dropdownIcon = $('<span class="caret">&#9660;</span>');
                $select.is(":disabled") && dropdownIcon.addClass("disabled");
                var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + uniqueID + '" value="' + label.html() + '"/>');
                $select.before($newSelect), $newSelect.before(dropdownIcon), $("body").append(options), 
                $select.is(":disabled") || $newSelect.dropdown({
                    hover: !1
                }), $select.attr("tabindex") && $($newSelect[0]).attr("tabindex", $select.attr("tabindex")), 
                $select.addClass("initialized"), $newSelect.on("focus", function() {
                    $(this).trigger("open"), label = $(this).val(), selectedOption = options.find("li").filter(function() {
                        return $(this).text().toLowerCase() === label.toLowerCase();
                    })[0], activateOption(options, selectedOption);
                }), $newSelect.on("blur", function() {
                    $(this).trigger("close");
                }), activateOption = function(collection, newOption) {
                    collection.find("li.active").removeClass("active"), $(newOption).addClass("active"), 
                    collection.scrollTo(newOption);
                }, filterQuery = [], onKeyDown = function(event) {
                    if (9 == event.which) return void $newSelect.trigger("close");
                    if (40 == event.which && !options.is(":visible")) return void $newSelect.trigger("open");
                    if (13 != event.which || options.is(":visible")) {
                        event.preventDefault(), letter = String.fromCharCode(event.which).toLowerCase();
                        var nonLetters = [ 9, 13, 27, 38, 40 ];
                        letter && -1 === nonLetters.indexOf(event.which) && (filterQuery.push(letter), string = filterQuery.join(""), 
                        newOption = options.find("li").filter(function() {
                            return 0 === $(this).text().toLowerCase().indexOf(string);
                        })[0], newOption && activateOption(options, newOption)), 13 == event.which && (activeOption = options.find("li.active:not(.disabled)")[0], 
                        activeOption && ($(activeOption).trigger("click"), $newSelect.trigger("close"))), 
                        40 == event.which && (newOption = options.find("li.active").next("li:not(.disabled)")[0], 
                        newOption && activateOption(options, newOption)), 27 == event.which && $newSelect.trigger("close"), 
                        38 == event.which && (newOption = options.find("li.active").prev("li:not(.disabled)")[0], 
                        newOption && activateOption(options, newOption)), setTimeout(function() {
                            filterQuery = [];
                        }, 1e3);
                    }
                }, $newSelect.on("keydown", onKeyDown);
            }
        });
    };
}(jQuery), function($) {
    var methods = {
        init: function(options) {
            var defaults = {
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            };
            return options = $.extend(defaults, options), this.each(function() {
                function captionTransition(caption, duration) {
                    caption.hasClass("center-align") ? caption.velocity({
                        opacity: 0,
                        translateY: -100
                    }, {
                        duration: duration,
                        queue: !1
                    }) : caption.hasClass("right-align") ? caption.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: duration,
                        queue: !1
                    }) : caption.hasClass("left-align") && caption.velocity({
                        opacity: 0,
                        translateX: -100
                    }, {
                        duration: duration,
                        queue: !1
                    });
                }
                function moveToSlide(index) {
                    index >= $slides.length ? index = 0 : 0 > index && (index = $slides.length - 1), 
                    $active_index = $slider.find(".active").index(), $active_index != index && ($active = $slides.eq($active_index), 
                    $caption = $active.find(".caption"), $active.removeClass("active"), $active.velocity({
                        opacity: 0
                    }, {
                        duration: options.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $slides.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            });
                        }
                    }), captionTransition($caption, options.transition), options.indicators && $indicators.eq($active_index).removeClass("active"), 
                    $slides.eq(index).velocity({
                        opacity: 1
                    }, {
                        duration: options.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), $slides.eq(index).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: options.transition,
                        delay: options.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), $slides.eq(index).addClass("active"), options.indicators && $indicators.eq(index).addClass("active"));
                }
                var $active, $this = $(this), $slider = $this.find("ul.slides").first(), $slides = $slider.find("li"), $active_index = $slider.find(".active").index();
                if (-1 != $active_index && ($active = $slides.eq($active_index)), $this.hasClass("fullscreen") || (options.indicators ? $this.height(options.height + 40) : $this.height(options.height), 
                $slider.height(options.height)), $slides.find(".caption").each(function() {
                    captionTransition($(this), 0);
                }), $slides.find("img").each(function() {
                    $(this).css("background-image", "url(" + $(this).attr("src") + ")"), $(this).attr("src", "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
                }), options.indicators) {
                    var $indicators = $('<ul class="indicators"></ul>');
                    $slides.each(function(index) {
                        var $indicator = $('<li class="indicator-item"></li>');
                        $indicator.click(function() {
                            var $parent = $slider.parent(), curr_index = $parent.find($(this)).index();
                            moveToSlide(curr_index), clearInterval($interval), $interval = setInterval(function() {
                                $active_index = $slider.find(".active").index(), $slides.length == $active_index + 1 ? $active_index = 0 : $active_index += 1, 
                                moveToSlide($active_index);
                            }, options.transition + options.interval);
                        }), $indicators.append($indicator);
                    }), $this.append($indicators), $indicators = $this.find("ul.indicators").find("li.indicator-item");
                }
                $active ? $active.show() : ($slides.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: options.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), $active_index = 0, $active = $slides.eq($active_index), options.indicators && $indicators.eq($active_index).addClass("active")), 
                $active.find("img").each(function() {
                    $active.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: options.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    });
                }), $interval = setInterval(function() {
                    $active_index = $slider.find(".active").index(), moveToSlide($active_index + 1);
                }, options.transition + options.interval);
                var panning = !1, swipeLeft = !1, swipeRight = !1;
                $this.hammer({
                    prevent_default: !1
                }).bind("pan", function(e) {
                    if ("touch" === e.gesture.pointerType) {
                        clearInterval($interval);
                        var direction = e.gesture.direction, x = e.gesture.deltaX, velocityX = e.gesture.velocityX;
                        $curr_slide = $slider.find(".active"), $curr_slide.velocity({
                            translateX: x
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === direction && (x > $this.innerWidth() / 2 || -.65 > velocityX) ? swipeRight = !0 : 2 === direction && (x < -1 * $this.innerWidth() / 2 || velocityX > .65) && (swipeLeft = !0);
                        var next_slide;
                        swipeLeft && (next_slide = $curr_slide.next(), 0 === next_slide.length && (next_slide = $slides.first()), 
                        next_slide.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })), swipeRight && (next_slide = $curr_slide.prev(), 0 === next_slide.length && (next_slide = $slides.last()), 
                        next_slide.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }));
                    }
                }).bind("panend", function(e) {
                    "touch" === e.gesture.pointerType && ($curr_slide = $slider.find(".active"), panning = !1, 
                    curr_index = $slider.find(".active").index(), swipeRight || swipeLeft ? swipeLeft ? (moveToSlide(curr_index + 1), 
                    $curr_slide.velocity({
                        translateX: -1 * $this.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            });
                        }
                    })) : swipeRight && (moveToSlide(curr_index - 1), $curr_slide.velocity({
                        translateX: $this.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            });
                        }
                    })) : $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), swipeLeft = !1, swipeRight = !1, clearInterval($interval), $interval = setInterval(function() {
                        $active_index = $slider.find(".active").index(), $slides.length == $active_index + 1 ? $active_index = 0 : $active_index += 1, 
                        moveToSlide($active_index);
                    }, options.transition + options.interval));
                }), $this.on("sliderPause", function() {
                    clearInterval($interval);
                }), $this.on("sliderStart", function() {
                    clearInterval($interval), $interval = setInterval(function() {
                        $active_index = $slider.find(".active").index(), $slides.length == $active_index + 1 ? $active_index = 0 : $active_index += 1, 
                        moveToSlide($active_index);
                    }, options.transition + options.interval);
                });
            });
        },
        pause: function() {
            $(this).trigger("sliderPause");
        },
        start: function() {
            $(this).trigger("sliderStart");
        }
    };
    $.fn.slider = function(methodOrOptions) {
        return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.tooltip") : methods.init.apply(this, arguments);
    };
}(jQuery), function($) {
    $(document).ready(function() {
        $(document).on("click.card", ".card", function(e) {
            $(this).find(".card-reveal").length && ($(e.target).is($(".card-reveal .card-title")) || $(e.target).is($(".card-reveal .card-title i")) ? $(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    $(this).css({
                        display: "none"
                    });
                }
            }) : ($(e.target).is($(".card .activator")) || $(e.target).is($(".card .activator i"))) && $(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }));
        });
    });
}(jQuery), function($) {
    $(document).ready(function() {
        $.fn.pushpin = function(options) {
            var defaults = {
                top: 0,
                bottom: 1 / 0,
                offset: 0
            };
            return options = $.extend(defaults, options), $index = 0, this.each(function() {
                function removePinClasses(object) {
                    object.removeClass("pin-top"), object.removeClass("pinned"), object.removeClass("pin-bottom");
                }
                function updateElements(objects, scrolled) {
                    objects.each(function() {
                        options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass("pinned") && (removePinClasses($(this)), 
                        $(this).css("top", options.offset), $(this).addClass("pinned")), scrolled < options.top && !$(this).hasClass("pin-top") && (removePinClasses($(this)), 
                        $(this).css("top", 0), $(this).addClass("pin-top")), scrolled > options.bottom && !$(this).hasClass("pin-bottom") && (removePinClasses($(this)), 
                        $(this).addClass("pin-bottom"), $(this).css("top", options.bottom - $original_offset));
                    });
                }
                var $uniqueId = Materialize.guid(), $this = $(this), $original_offset = $(this).offset().top;
                updateElements($this, $(window).scrollTop()), $(window).on("scroll." + $uniqueId, function() {
                    var $scrolled = $(window).scrollTop() + options.offset;
                    updateElements($this, $scrolled);
                });
            });
        };
    });
}(jQuery), function($) {
    $(document).ready(function() {
        $.fn.reverse = [].reverse, $(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function(e) {
            var $this = $(this);
            openFABMenu($this);
        }), $(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function(e) {
            var $this = $(this);
            closeFABMenu($this);
        });
    }), $.fn.extend({
        openFAB: function() {
            var $this = $(this);
            openFABMenu($this);
        },
        closeFAB: function() {
            closeFABMenu($this);
        }
    });
    var openFABMenu = function(btn) {
        if ($this = btn, $this.hasClass("active") === !1) {
            $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {
                duration: 0
            });
            var time = 0;
            $this.find("ul .btn-floating").reverse().each(function() {
                $(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0"
                }, {
                    duration: 80,
                    delay: time
                }), time += 40;
            });
        }
    }, closeFABMenu = function(btn) {
        $this = btn, $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: "40px"
        }, {
            duration: 80
        });
    };
}(jQuery), function($) {
    Materialize.fadeInImage = function(selector) {
        var element = $(selector);
        element.css({
            opacity: 0
        }), $(element).velocity({
            opacity: 1
        }, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }), $(element).velocity({
            opacity: 1
        }, {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function(now, fx) {
                fx.start = 100;
                var grayscale_setting = now / 100, brightness_setting = 150 - (100 - now) / 1.75;
                100 > brightness_setting && (brightness_setting = 100), now >= 0 && $(this).css({
                    "-webkit-filter": "grayscale(" + grayscale_setting + ")brightness(" + brightness_setting + "%)",
                    filter: "grayscale(" + grayscale_setting + ")brightness(" + brightness_setting + "%)"
                });
            }
        });
    }, Materialize.showStaggeredList = function(selector) {
        var time = 0;
        $(selector).find("li").velocity({
            translateX: "-100px"
        }, {
            duration: 0
        }), $(selector).find("li").each(function() {
            $(this).velocity({
                opacity: "1",
                translateX: "0"
            }, {
                duration: 800,
                delay: time,
                easing: [ 60, 10 ]
            }), time += 120;
        });
    }, $(document).ready(function() {
        var swipeLeft = !1, swipeRight = !1;
        $(".dismissable").each(function() {
            $(this).hammer({
                prevent_default: !1
            }).bind("pan", function(e) {
                if ("touch" === e.gesture.pointerType) {
                    var $this = $(this), direction = e.gesture.direction, x = e.gesture.deltaX, velocityX = e.gesture.velocityX;
                    $this.velocity({
                        translateX: x
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === direction && (x > $this.innerWidth() / 2 || -.75 > velocityX) && (swipeLeft = !0), 
                    2 === direction && (x < -1 * $this.innerWidth() / 2 || velocityX > .75) && (swipeRight = !0);
                }
            }).bind("panend", function(e) {
                if (Math.abs(e.gesture.deltaX) < $(this).innerWidth() / 2 && (swipeRight = !1, swipeLeft = !1), 
                "touch" === e.gesture.pointerType) {
                    var $this = $(this);
                    if (swipeLeft || swipeRight) {
                        var fullWidth;
                        fullWidth = swipeLeft ? $this.innerWidth() : -1 * $this.innerWidth(), $this.velocity({
                            translateX: fullWidth
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $this.css("border", "none"), $this.velocity({
                                    height: 0,
                                    padding: 0
                                }, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        $this.remove();
                                    }
                                });
                            }
                        });
                    } else $this.velocity({
                        translateX: 0
                    }, {
                        duration: 100,
                        queue: !1,
                        easing: "easeOutQuad"
                    });
                    swipeLeft = !1, swipeRight = !1;
                }
            });
        });
    });
}(jQuery), function($) {
    Materialize.scrollFire = function(options) {
        var didScroll = !1;
        window.addEventListener("scroll", function() {
            didScroll = !0;
        }), setInterval(function() {
            if (didScroll) {
                didScroll = !1;
                for (var windowScroll = window.pageYOffset + window.innerHeight, i = 0; i < options.length; i++) {
                    var value = options[i], selector = value.selector, offset = value.offset, callback = value.callback, currentElement = document.querySelector(selector);
                    if (null !== currentElement) {
                        var elementOffset = currentElement.getBoundingClientRect().top + document.body.scrollTop;
                        if (windowScroll > elementOffset + offset && value.done !== !0) {
                            var callbackFunc = new Function(callback);
                            callbackFunc(), value.done = !0;
                        }
                    }
                }
            }
        }, 100);
    };
}(jQuery), function(factory) {
    "function" == typeof define && define.amd ? define("picker", [ "jquery" ], factory) : "object" == typeof exports ? module.exports = factory(require("jquery")) : this.Picker = factory(jQuery);
}(function($) {
    function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {
        function createWrappedComponent() {
            return PickerConstructor._.node("div", PickerConstructor._.node("div", PickerConstructor._.node("div", PickerConstructor._.node("div", P.component.nodes(STATE.open), CLASSES.box), CLASSES.wrap), CLASSES.frame), CLASSES.holder);
        }
        function prepareElement() {
            $ELEMENT.data(NAME, P).addClass(CLASSES.input).attr("tabindex", -1).val($ELEMENT.data("value") ? P.get("select", SETTINGS.format) : ELEMENT.value), 
            SETTINGS.editable || $ELEMENT.on("focus." + STATE.id + " click." + STATE.id, function(event) {
                event.preventDefault(), P.$root[0].focus();
            }).on("keydown." + STATE.id, handleKeydownEvent), aria(ELEMENT, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: ELEMENT.id + "_root"
            });
        }
        function prepareElementRoot() {
            P.$root.on({
                keydown: handleKeydownEvent,
                focusin: function(event) {
                    P.$root.removeClass(CLASSES.focused), event.stopPropagation();
                },
                "mousedown click": function(event) {
                    var target = event.target;
                    target != P.$root.children()[0] && (event.stopPropagation(), "mousedown" != event.type || $(target).is("input, select, textarea, button, option") || (event.preventDefault(), 
                    P.$root[0].focus()));
                }
            }).on({
                focus: function() {
                    $ELEMENT.addClass(CLASSES.target);
                },
                blur: function() {
                    $ELEMENT.removeClass(CLASSES.target);
                }
            }).on("focus.toOpen", handleFocusToOpenEvent).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var $target = $(this), targetData = $target.data(), targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled), activeElement = getActiveElement();
                activeElement = activeElement && (activeElement.type || activeElement.href), (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) && P.$root[0].focus(), 
                !targetDisabled && targetData.nav ? P.set("highlight", P.component.item.highlight, {
                    nav: targetData.nav
                }) : !targetDisabled && "pick" in targetData ? P.set("select", targetData.pick) : targetData.clear ? P.clear().close(!0) : targetData.close && P.close(!0);
            }), aria(P.$root[0], "hidden", !0);
        }
        function prepareElementHidden() {
            var name;
            SETTINGS.hiddenName === !0 ? (name = ELEMENT.name, ELEMENT.name = "") : (name = [ "string" == typeof SETTINGS.hiddenPrefix ? SETTINGS.hiddenPrefix : "", "string" == typeof SETTINGS.hiddenSuffix ? SETTINGS.hiddenSuffix : "_submit" ], 
            name = name[0] + ELEMENT.name + name[1]), P._hidden = $('<input type=hidden name="' + name + '"' + ($ELEMENT.data("value") || ELEMENT.value ? ' value="' + P.get("select", SETTINGS.formatSubmit) + '"' : "") + ">")[0], 
            $ELEMENT.on("change." + STATE.id, function() {
                P._hidden.value = ELEMENT.value ? P.get("select", SETTINGS.formatSubmit) : "";
            }), SETTINGS.container ? $(SETTINGS.container).append(P._hidden) : $ELEMENT.after(P._hidden);
        }
        function handleKeydownEvent(event) {
            var keycode = event.keyCode, isKeycodeDelete = /^(8|46)$/.test(keycode);
            return 27 == keycode ? (P.close(), !1) : void ((32 == keycode || isKeycodeDelete || !STATE.open && P.component.key[keycode]) && (event.preventDefault(), 
            event.stopPropagation(), isKeycodeDelete ? P.clear().close() : P.open()));
        }
        function handleFocusToOpenEvent(event) {
            event.stopPropagation(), "focus" == event.type && P.$root.addClass(CLASSES.focused), 
            P.open();
        }
        if (!ELEMENT) return PickerConstructor;
        var IS_DEFAULT_THEME = !1, STATE = {
            id: ELEMENT.id || "P" + Math.abs(~~(Math.random() * new Date()))
        }, SETTINGS = COMPONENT ? $.extend(!0, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {}, CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass), $ELEMENT = $(ELEMENT), PickerInstance = function() {
            return this.start();
        }, P = PickerInstance.prototype = {
            constructor: PickerInstance,
            $node: $ELEMENT,
            start: function() {
                return STATE && STATE.start ? P : (STATE.methods = {}, STATE.start = !0, STATE.open = !1, 
                STATE.type = ELEMENT.type, ELEMENT.autofocus = ELEMENT == getActiveElement(), ELEMENT.readOnly = !SETTINGS.editable, 
                ELEMENT.id = ELEMENT.id || STATE.id, "text" != ELEMENT.type && (ELEMENT.type = "text"), 
                P.component = new COMPONENT(P, SETTINGS), P.$root = $(PickerConstructor._.node("div", createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"')), 
                prepareElementRoot(), SETTINGS.formatSubmit && prepareElementHidden(), prepareElement(), 
                SETTINGS.container ? $(SETTINGS.container).append(P.$root) : $ELEMENT.after(P.$root), 
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                }), IS_DEFAULT_THEME = isUsingDefaultTheme(P.$root.children()[0]), ELEMENT.autofocus && P.open(), 
                P.trigger("start").trigger("render"));
            },
            render: function(entireComponent) {
                return entireComponent ? P.$root.html(createWrappedComponent()) : P.$root.find("." + CLASSES.box).html(P.component.nodes(STATE.open)), 
                P.trigger("render");
            },
            stop: function() {
                return STATE.start ? (P.close(), P._hidden && P._hidden.parentNode.removeChild(P._hidden), 
                P.$root.remove(), $ELEMENT.removeClass(CLASSES.input).removeData(NAME), setTimeout(function() {
                    $ELEMENT.off("." + STATE.id);
                }, 0), ELEMENT.type = STATE.type, ELEMENT.readOnly = !1, P.trigger("stop"), STATE.methods = {}, 
                STATE.start = !1, P) : P;
            },
            open: function(dontGiveFocus) {
                return STATE.open ? P : ($ELEMENT.addClass(CLASSES.active), aria(ELEMENT, "expanded", !0), 
                setTimeout(function() {
                    P.$root.addClass(CLASSES.opened), aria(P.$root[0], "hidden", !1);
                }, 0), dontGiveFocus !== !1 && (STATE.open = !0, IS_DEFAULT_THEME && $html.css("overflow", "hidden").css("padding-right", "+=" + getScrollbarWidth()), 
                P.$root[0].focus(), $document.on("click." + STATE.id + " focusin." + STATE.id, function(event) {
                    var target = event.target;
                    target != ELEMENT && target != document && 3 != event.which && P.close(target === P.$root.children()[0]);
                }).on("keydown." + STATE.id, function(event) {
                    var keycode = event.keyCode, keycodeToMove = P.component.key[keycode], target = event.target;
                    27 == keycode ? P.close(!0) : target != P.$root[0] || !keycodeToMove && 13 != keycode ? $.contains(P.$root[0], target) && 13 == keycode && (event.preventDefault(), 
                    target.click()) : (event.preventDefault(), keycodeToMove ? PickerConstructor._.trigger(P.component.key.go, P, [ PickerConstructor._.trigger(keycodeToMove) ]) : P.$root.find("." + CLASSES.highlighted).hasClass(CLASSES.disabled) || P.set("select", P.component.item.highlight).close());
                })), P.trigger("open"));
            },
            close: function(giveFocus) {
                return giveFocus && (P.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                    P.$root.on("focus.toOpen", handleFocusToOpenEvent);
                }, 0)), $ELEMENT.removeClass(CLASSES.active), aria(ELEMENT, "expanded", !1), setTimeout(function() {
                    P.$root.removeClass(CLASSES.opened + " " + CLASSES.focused), aria(P.$root[0], "hidden", !0);
                }, 0), STATE.open ? (STATE.open = !1, IS_DEFAULT_THEME && $html.css("overflow", "").css("padding-right", "-=" + getScrollbarWidth()), 
                $document.off("." + STATE.id), P.trigger("close")) : P;
            },
            clear: function(options) {
                return P.set("clear", null, options);
            },
            set: function(thing, value, options) {
                var thingItem, thingValue, thingIsObject = $.isPlainObject(thing), thingObject = thingIsObject ? thing : {};
                if (options = thingIsObject && $.isPlainObject(value) ? value : options || {}, thing) {
                    thingIsObject || (thingObject[thing] = value);
                    for (thingItem in thingObject) thingValue = thingObject[thingItem], thingItem in P.component.item && (void 0 === thingValue && (thingValue = null), 
                    P.component.set(thingItem, thingValue, options)), ("select" == thingItem || "clear" == thingItem) && $ELEMENT.val("clear" == thingItem ? "" : P.get(thingItem, SETTINGS.format)).trigger("change");
                    P.render();
                }
                return options.muted ? P : P.trigger("set", thingObject);
            },
            get: function(thing, format) {
                if (thing = thing || "value", null != STATE[thing]) return STATE[thing];
                if ("valueSubmit" == thing) {
                    if (P._hidden) return P._hidden.value;
                    thing = "value";
                }
                if ("value" == thing) return ELEMENT.value;
                if (thing in P.component.item) {
                    if ("string" == typeof format) {
                        var thingValue = P.component.get(thing);
                        return thingValue ? PickerConstructor._.trigger(P.component.formats.toString, P.component, [ format, thingValue ]) : "";
                    }
                    return P.component.get(thing);
                }
            },
            on: function(thing, method, internal) {
                var thingName, thingMethod, thingIsObject = $.isPlainObject(thing), thingObject = thingIsObject ? thing : {};
                if (thing) {
                    thingIsObject || (thingObject[thing] = method);
                    for (thingName in thingObject) thingMethod = thingObject[thingName], internal && (thingName = "_" + thingName), 
                    STATE.methods[thingName] = STATE.methods[thingName] || [], STATE.methods[thingName].push(thingMethod);
                }
                return P;
            },
            off: function() {
                var i, thingName, names = arguments;
                for (i = 0, namesCount = names.length; i < namesCount; i += 1) thingName = names[i], 
                thingName in STATE.methods && delete STATE.methods[thingName];
                return P;
            },
            trigger: function(name, data) {
                var _trigger = function(name) {
                    var methodList = STATE.methods[name];
                    methodList && methodList.map(function(method) {
                        PickerConstructor._.trigger(method, P, [ data ]);
                    });
                };
                return _trigger("_" + name), _trigger(name), P;
            }
        };
        return new PickerInstance();
    }
    function isUsingDefaultTheme(element) {
        var theme, prop = "position";
        return element.currentStyle ? theme = element.currentStyle[prop] : window.getComputedStyle && (theme = getComputedStyle(element)[prop]), 
        "fixed" == theme;
    }
    function getScrollbarWidth() {
        if ($html.height() <= $window.height()) return 0;
        var $outer = $('<div style="visibility:hidden;width:100px" />').appendTo("body"), widthWithoutScroll = $outer[0].offsetWidth;
        $outer.css("overflow", "scroll");
        var $inner = $('<div style="width:100%" />').appendTo($outer), widthWithScroll = $inner[0].offsetWidth;
        return $outer.remove(), widthWithoutScroll - widthWithScroll;
    }
    function aria(element, attribute, value) {
        if ($.isPlainObject(attribute)) for (var key in attribute) ariaSet(element, key, attribute[key]); else ariaSet(element, attribute, value);
    }
    function ariaSet(element, attribute, value) {
        element.setAttribute(("role" == attribute ? "" : "aria-") + attribute, value);
    }
    function ariaAttr(attribute, data) {
        $.isPlainObject(attribute) || (attribute = {
            attribute: data
        }), data = "";
        for (var key in attribute) {
            var attr = ("role" == key ? "" : "aria-") + key, attrVal = attribute[key];
            data += null == attrVal ? "" : attr + '="' + attribute[key] + '"';
        }
        return data;
    }
    function getActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    var $window = $(window), $document = $(document), $html = $(document.documentElement);
    return PickerConstructor.klasses = function(prefix) {
        return prefix = prefix || "picker", {
            picker: prefix,
            opened: prefix + "--opened",
            focused: prefix + "--focused",
            input: prefix + "__input",
            active: prefix + "__input--active",
            target: prefix + "__input--target",
            holder: prefix + "__holder",
            frame: prefix + "__frame",
            wrap: prefix + "__wrap",
            box: prefix + "__box"
        };
    }, PickerConstructor._ = {
        group: function(groupObject) {
            for (var loopObjectScope, nodesList = "", counter = PickerConstructor._.trigger(groupObject.min, groupObject); counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [ counter ]); counter += groupObject.i) loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [ counter ]), 
            nodesList += PickerConstructor._.node(groupObject.node, loopObjectScope[0], loopObjectScope[1], loopObjectScope[2]);
            return nodesList;
        },
        node: function(wrapper, item, klass, attribute) {
            return item ? (item = $.isArray(item) ? item.join("") : item, klass = klass ? ' class="' + klass + '"' : "", 
            attribute = attribute ? " " + attribute : "", "<" + wrapper + klass + attribute + ">" + item + "</" + wrapper + ">") : "";
        },
        lead: function(number) {
            return (10 > number ? "0" : "") + number;
        },
        trigger: function(callback, scope, args) {
            return "function" == typeof callback ? callback.apply(scope, args || []) : callback;
        },
        digits: function(string) {
            return /\d/.test(string[1]) ? 2 : 1;
        },
        isDate: function(value) {
            return {}.toString.call(value).indexOf("Date") > -1 && this.isInteger(value.getDate());
        },
        isInteger: function(value) {
            return {}.toString.call(value).indexOf("Number") > -1 && value % 1 === 0;
        },
        ariaAttr: ariaAttr
    }, PickerConstructor.extend = function(name, Component) {
        $.fn[name] = function(options, action) {
            var componentData = this.data(name);
            return "picker" == options ? componentData : componentData && "string" == typeof options ? PickerConstructor._.trigger(componentData[options], componentData, [ action ]) : this.each(function() {
                var $this = $(this);
                $this.data(name) || new PickerConstructor(this, name, Component, options);
            });
        }, $.fn[name].defaults = Component.defaults;
    }, PickerConstructor;
}), function(factory) {
    "function" == typeof define && define.amd ? define([ "picker", "jquery" ], factory) : "object" == typeof exports ? module.exports = factory(require("./picker.js"), require("jquery")) : factory(Picker, jQuery);
}(function(Picker, $) {
    function DatePicker(picker, settings) {
        var calendar = this, element = picker.$node[0], elementValue = element.value, elementDataValue = picker.$node.data("value"), valueString = elementDataValue || elementValue, formatString = elementDataValue ? settings.formatSubmit : settings.format, isRTL = function() {
            return element.currentStyle ? "rtl" == element.currentStyle.direction : "rtl" == getComputedStyle(picker.$root[0]).direction;
        };
        calendar.settings = settings, calendar.$node = picker.$node, calendar.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, calendar.item = {}, calendar.item.clear = null, calendar.item.disable = (settings.disable || []).slice(0), 
        calendar.item.enable = -function(collectionDisabled) {
            return collectionDisabled[0] === !0 ? collectionDisabled.shift() : -1;
        }(calendar.item.disable), calendar.set("min", settings.min).set("max", settings.max).set("now"), 
        valueString ? calendar.set("select", valueString, {
            format: formatString
        }) : calendar.set("select", null).set("highlight", calendar.item.now), calendar.key = {
            40: 7,
            38: -7,
            39: function() {
                return isRTL() ? -1 : 1;
            },
            37: function() {
                return isRTL() ? 1 : -1;
            },
            go: function(timeChange) {
                var highlightedObject = calendar.item.highlight, targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange);
                calendar.set("highlight", targetDate, {
                    interval: timeChange
                }), this.render();
            }
        }, picker.on("render", function() {
            picker.$root.find("." + settings.klass.selectMonth).on("change", function() {
                var value = this.value;
                value && (picker.set("highlight", [ picker.get("view").year, value, picker.get("highlight").date ]), 
                picker.$root.find("." + settings.klass.selectMonth).trigger("focus"));
            }), picker.$root.find("." + settings.klass.selectYear).on("change", function() {
                var value = this.value;
                value && (picker.set("highlight", [ value, picker.get("view").month, picker.get("highlight").date ]), 
                picker.$root.find("." + settings.klass.selectYear).trigger("focus"));
            });
        }, 1).on("open", function() {
            var includeToday = "";
            calendar.disabled(calendar.get("now")) && (includeToday = ":not(." + settings.klass.buttonToday + ")"), 
            picker.$root.find("button" + includeToday + ", select").attr("disabled", !1);
        }, 1).on("close", function() {
            picker.$root.find("button, select").attr("disabled", !0);
        }, 1);
    }
    var DAYS_IN_WEEK = 7, WEEKS_IN_CALENDAR = 6, _ = Picker._;
    DatePicker.prototype.set = function(type, value, options) {
        var calendar = this, calendarItem = calendar.item;
        return null === value ? ("clear" == type && (type = "select"), calendarItem[type] = value, 
        calendar) : (calendarItem["enable" == type ? "disable" : "flip" == type ? "enable" : type] = calendar.queue[type].split(" ").map(function(method) {
            return value = calendar[method](type, value, options);
        }).pop(), "select" == type ? calendar.set("highlight", calendarItem.select, options) : "highlight" == type ? calendar.set("view", calendarItem.highlight, options) : type.match(/^(flip|min|max|disable|enable)$/) && (calendarItem.select && calendar.disabled(calendarItem.select) && calendar.set("select", calendarItem.select, options), 
        calendarItem.highlight && calendar.disabled(calendarItem.highlight) && calendar.set("highlight", calendarItem.highlight, options)), 
        calendar);
    }, DatePicker.prototype.get = function(type) {
        return this.item[type];
    }, DatePicker.prototype.create = function(type, value, options) {
        var isInfiniteValue, calendar = this;
        return value = void 0 === value ? type : value, value == -(1 / 0) || value == 1 / 0 ? isInfiniteValue = value : $.isPlainObject(value) && _.isInteger(value.pick) ? value = value.obj : $.isArray(value) ? (value = new Date(value[0], value[1], value[2]), 
        value = _.isDate(value) ? value : calendar.create().obj) : value = _.isInteger(value) || _.isDate(value) ? calendar.normalize(new Date(value), options) : calendar.now(type, value, options), 
        {
            year: isInfiniteValue || value.getFullYear(),
            month: isInfiniteValue || value.getMonth(),
            date: isInfiniteValue || value.getDate(),
            day: isInfiniteValue || value.getDay(),
            obj: isInfiniteValue || value,
            pick: isInfiniteValue || value.getTime()
        };
    }, DatePicker.prototype.createRange = function(from, to) {
        var calendar = this, createDate = function(date) {
            return date === !0 || $.isArray(date) || _.isDate(date) ? calendar.create(date) : date;
        };
        return _.isInteger(from) || (from = createDate(from)), _.isInteger(to) || (to = createDate(to)), 
        _.isInteger(from) && $.isPlainObject(to) ? from = [ to.year, to.month, to.date + from ] : _.isInteger(to) && $.isPlainObject(from) && (to = [ from.year, from.month, from.date + to ]), 
        {
            from: createDate(from),
            to: createDate(to)
        };
    }, DatePicker.prototype.withinRange = function(range, dateUnit) {
        return range = this.createRange(range.from, range.to), dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick;
    }, DatePicker.prototype.overlapRanges = function(one, two) {
        var calendar = this;
        return one = calendar.createRange(one.from, one.to), two = calendar.createRange(two.from, two.to), 
        calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) || calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to);
    }, DatePicker.prototype.now = function(type, value, options) {
        return value = new Date(), options && options.rel && value.setDate(value.getDate() + options.rel), 
        this.normalize(value, options);
    }, DatePicker.prototype.navigate = function(type, value, options) {
        var targetDateObject, targetYear, targetMonth, targetDate, isTargetArray = $.isArray(value), isTargetObject = $.isPlainObject(value), viewsetObject = this.item.view;
        if (isTargetArray || isTargetObject) {
            for (isTargetObject ? (targetYear = value.year, targetMonth = value.month, targetDate = value.date) : (targetYear = +value[0], 
            targetMonth = +value[1], targetDate = +value[2]), options && options.nav && viewsetObject && viewsetObject.month !== targetMonth && (targetYear = viewsetObject.year, 
            targetMonth = viewsetObject.month), targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1), 
            targetYear = targetDateObject.getFullYear(), targetMonth = targetDateObject.getMonth(); new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth; ) targetDate -= 1;
            value = [ targetYear, targetMonth, targetDate ];
        }
        return value;
    }, DatePicker.prototype.normalize = function(value) {
        return value.setHours(0, 0, 0, 0), value;
    }, DatePicker.prototype.measure = function(type, value) {
        var calendar = this;
        return value ? "string" == typeof value ? value = calendar.parse(type, value) : _.isInteger(value) && (value = calendar.now(type, value, {
            rel: value
        })) : value = "min" == type ? -(1 / 0) : 1 / 0, value;
    }, DatePicker.prototype.viewset = function(type, dateObject) {
        return this.create([ dateObject.year, dateObject.month, 1 ]);
    }, DatePicker.prototype.validate = function(type, dateObject, options) {
        var hasEnabledBeforeTarget, hasEnabledAfterTarget, reachedMin, reachedMax, calendar = this, originalDateObject = dateObject, interval = options && options.interval ? options.interval : 1, isFlippedBase = -1 === calendar.item.enable, minLimitObject = calendar.item.min, maxLimitObject = calendar.item.max, hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function(value) {
            if ($.isArray(value)) {
                var dateTime = calendar.create(value).pick;
                dateTime < dateObject.pick ? hasEnabledBeforeTarget = !0 : dateTime > dateObject.pick && (hasEnabledAfterTarget = !0);
            }
            return _.isInteger(value);
        }).length;
        if ((!options || !options.nav) && (!isFlippedBase && calendar.disabled(dateObject) || isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget) || !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick))) for (isFlippedBase && !hasEnabledWeekdays && (!hasEnabledAfterTarget && interval > 0 || !hasEnabledBeforeTarget && 0 > interval) && (interval *= -1); calendar.disabled(dateObject) && (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month) && (dateObject = originalDateObject, 
        interval = interval > 0 ? 1 : -1), dateObject.pick <= minLimitObject.pick ? (reachedMin = !0, 
        interval = 1, dateObject = calendar.create([ minLimitObject.year, minLimitObject.month, minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1) ])) : dateObject.pick >= maxLimitObject.pick && (reachedMax = !0, 
        interval = -1, dateObject = calendar.create([ maxLimitObject.year, maxLimitObject.month, maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1) ])), 
        !reachedMin || !reachedMax); ) dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ]);
        return dateObject;
    }, DatePicker.prototype.disabled = function(dateToVerify) {
        var calendar = this, isDisabledMatch = calendar.item.disable.filter(function(dateToDisable) {
            return _.isInteger(dateToDisable) ? dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7 : $.isArray(dateToDisable) || _.isDate(dateToDisable) ? dateToVerify.pick === calendar.create(dateToDisable).pick : $.isPlainObject(dateToDisable) ? calendar.withinRange(dateToDisable, dateToVerify) : void 0;
        });
        return isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function(dateToDisable) {
            return $.isArray(dateToDisable) && "inverted" == dateToDisable[3] || $.isPlainObject(dateToDisable) && dateToDisable.inverted;
        }).length, -1 === calendar.item.enable ? !isDisabledMatch : isDisabledMatch || dateToVerify.pick < calendar.item.min.pick || dateToVerify.pick > calendar.item.max.pick;
    }, DatePicker.prototype.parse = function(type, value, options) {
        var calendar = this, parsingObject = {};
        return value && "string" == typeof value ? (options && options.format || (options = options || {}, 
        options.format = calendar.settings.format), calendar.formats.toArray(options.format).map(function(label) {
            var formattingLabel = calendar.formats[label], formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [ value, parsingObject ]) : label.replace(/^!/, "").length;
            formattingLabel && (parsingObject[label] = value.substr(0, formatLength)), value = value.substr(formatLength);
        }), [ parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1, parsingObject.dd || parsingObject.d ]) : value;
    }, DatePicker.prototype.formats = function() {
        function getWordLengthFromCollection(string, collection, dateObject) {
            var word = string.match(/\w+/)[0];
            return dateObject.mm || dateObject.m || (dateObject.m = collection.indexOf(word) + 1), 
            word.length;
        }
        function getFirstWordLength(string) {
            return string.match(/\w+/)[0].length;
        }
        return {
            d: function(string, dateObject) {
                return string ? _.digits(string) : dateObject.date;
            },
            dd: function(string, dateObject) {
                return string ? 2 : _.lead(dateObject.date);
            },
            ddd: function(string, dateObject) {
                return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day];
            },
            dddd: function(string, dateObject) {
                return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day];
            },
            m: function(string, dateObject) {
                return string ? _.digits(string) : dateObject.month + 1;
            },
            mm: function(string, dateObject) {
                return string ? 2 : _.lead(dateObject.month + 1);
            },
            mmm: function(string, dateObject) {
                var collection = this.settings.monthsShort;
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
            },
            mmmm: function(string, dateObject) {
                var collection = this.settings.monthsFull;
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
            },
            yy: function(string, dateObject) {
                return string ? 2 : ("" + dateObject.year).slice(2);
            },
            yyyy: function(string, dateObject) {
                return string ? 4 : dateObject.year;
            },
            toArray: function(formatString) {
                return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
            },
            toString: function(formatString, itemObject) {
                var calendar = this;
                return calendar.formats.toArray(formatString).map(function(label) {
                    return _.trigger(calendar.formats[label], calendar, [ 0, itemObject ]) || label.replace(/^!/, "");
                }).join("");
            }
        };
    }(), DatePicker.prototype.isDateExact = function(one, two) {
        var calendar = this;
        return _.isInteger(one) && _.isInteger(two) || "boolean" == typeof one && "boolean" == typeof two ? one === two : (_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two)) ? calendar.create(one).pick === calendar.create(two).pick : $.isPlainObject(one) && $.isPlainObject(two) ? calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to) : !1;
    }, DatePicker.prototype.isDateOverlap = function(one, two) {
        var calendar = this, firstDay = calendar.settings.firstDay ? 1 : 0;
        return _.isInteger(one) && (_.isDate(two) || $.isArray(two)) ? (one = one % 7 + firstDay, 
        one === calendar.create(two).day + 1) : _.isInteger(two) && (_.isDate(one) || $.isArray(one)) ? (two = two % 7 + firstDay, 
        two === calendar.create(one).day + 1) : $.isPlainObject(one) && $.isPlainObject(two) ? calendar.overlapRanges(one, two) : !1;
    }, DatePicker.prototype.flipEnable = function(val) {
        var itemObject = this.item;
        itemObject.enable = val || (-1 == itemObject.enable ? 1 : -1);
    }, DatePicker.prototype.deactivate = function(type, datesToDisable) {
        var calendar = this, disabledItems = calendar.item.disable.slice(0);
        return "flip" == datesToDisable ? calendar.flipEnable() : datesToDisable === !1 ? (calendar.flipEnable(1), 
        disabledItems = []) : datesToDisable === !0 ? (calendar.flipEnable(-1), disabledItems = []) : datesToDisable.map(function(unitToDisable) {
            for (var matchFound, index = 0; index < disabledItems.length; index += 1) if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
                matchFound = !0;
                break;
            }
            matchFound || (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || $.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to) && disabledItems.push(unitToDisable);
        }), disabledItems;
    }, DatePicker.prototype.activate = function(type, datesToEnable) {
        var calendar = this, disabledItems = calendar.item.disable, disabledItemsCount = disabledItems.length;
        return "flip" == datesToEnable ? calendar.flipEnable() : datesToEnable === !0 ? (calendar.flipEnable(1), 
        disabledItems = []) : datesToEnable === !1 ? (calendar.flipEnable(-1), disabledItems = []) : datesToEnable.map(function(unitToEnable) {
            var matchFound, disabledUnit, index, isExactRange;
            for (index = 0; disabledItemsCount > index; index += 1) {
                if (disabledUnit = disabledItems[index], calendar.isDateExact(disabledUnit, unitToEnable)) {
                    matchFound = disabledItems[index] = null, isExactRange = !0;
                    break;
                }
                if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
                    $.isPlainObject(unitToEnable) ? (unitToEnable.inverted = !0, matchFound = unitToEnable) : $.isArray(unitToEnable) ? (matchFound = unitToEnable, 
                    matchFound[3] || matchFound.push("inverted")) : _.isDate(unitToEnable) && (matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), "inverted" ]);
                    break;
                }
            }
            if (matchFound) for (index = 0; disabledItemsCount > index; index += 1) if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
                disabledItems[index] = null;
                break;
            }
            if (isExactRange) for (index = 0; disabledItemsCount > index; index += 1) if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
                disabledItems[index] = null;
                break;
            }
            matchFound && disabledItems.push(matchFound);
        }), disabledItems.filter(function(val) {
            return null != val;
        });
    }, DatePicker.prototype.nodes = function(isOpen) {
        var calendar = this, settings = calendar.settings, calendarItem = calendar.item, nowObject = calendarItem.now, selectedObject = calendarItem.select, highlightedObject = calendarItem.highlight, viewsetObject = calendarItem.view, disabledCollection = calendarItem.disable, minLimitObject = calendarItem.min, maxLimitObject = calendarItem.max, tableHead = function(collection, fullCollection) {
            return settings.firstDay && (collection.push(collection.shift()), fullCollection.push(fullCollection.shift())), 
            _.node("thead", _.node("tr", _.group({
                min: 0,
                max: DAYS_IN_WEEK - 1,
                i: 1,
                node: "th",
                item: function(counter) {
                    return [ collection[counter], settings.klass.weekdays, 'scope=col title="' + fullCollection[counter] + '"' ];
                }
            })));
        }((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter).slice(0), settings.weekdaysFull.slice(0)), createMonthNav = function(next) {
            return _.node("div", " ", settings.klass["nav" + (next ? "Next" : "Prev")] + (next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month || !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ? " " + settings.klass.navDisabled : ""), "data-nav=" + (next || -1) + " " + _.ariaAttr({
                role: "button",
                controls: calendar.$node[0].id + "_table"
            }) + ' title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"');
        }, createMonthLabel = function(override) {
            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull;
            return "short_months" == override && (monthsCollection = settings.monthsShort), 
            settings.selectMonths && void 0 == override ? _.node("select", _.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(loopedMonth) {
                    return [ monthsCollection[loopedMonth], 0, "value=" + loopedMonth + (viewsetObject.month == loopedMonth ? " selected" : "") + (viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month || viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month ? " disabled" : "") ];
                }
            }), settings.klass.selectMonth + " browser-default", (isOpen ? "" : "disabled") + " " + _.ariaAttr({
                controls: calendar.$node[0].id + "_table"
            }) + ' title="' + settings.labelMonthSelect + '"') : "short_months" == override ? null != selectedObject ? _.node("div", monthsCollection[selectedObject.month]) : _.node("div", monthsCollection[viewsetObject.month]) : _.node("div", monthsCollection[viewsetObject.month], settings.klass.month);
        }, createYearLabel = function(override) {
            var focusedYear = viewsetObject.year, numberYears = settings.selectYears === !0 ? 5 : ~~(settings.selectYears / 2);
            if (numberYears) {
                var minYear = minLimitObject.year, maxYear = maxLimitObject.year, lowestYear = focusedYear - numberYears, highestYear = focusedYear + numberYears;
                if (minYear > lowestYear && (highestYear += minYear - lowestYear, lowestYear = minYear), 
                highestYear > maxYear) {
                    var availableYears = lowestYear - minYear, neededYears = highestYear - maxYear;
                    lowestYear -= availableYears > neededYears ? neededYears : availableYears, highestYear = maxYear;
                }
                if (settings.selectYears && void 0 == override) return _.node("select", _.group({
                    min: lowestYear,
                    max: highestYear,
                    i: 1,
                    node: "option",
                    item: function(loopedYear) {
                        return [ loopedYear, 0, "value=" + loopedYear + (focusedYear == loopedYear ? " selected" : "") ];
                    }
                }), settings.klass.selectYear + " browser-default", (isOpen ? "" : "disabled") + " " + _.ariaAttr({
                    controls: calendar.$node[0].id + "_table"
                }) + ' title="' + settings.labelYearSelect + '"');
            }
            return "raw" == override ? _.node("div", focusedYear) : _.node("div", focusedYear, settings.klass.year);
        };
        return createDayLabel = function() {
            return null != selectedObject ? _.node("div", selectedObject.date) : _.node("div", nowObject.date);
        }, createWeekdayLabel = function() {
            var display_day;
            display_day = null != selectedObject ? selectedObject.day : nowObject.day;
            var weekday = settings.weekdaysFull[display_day];
            return weekday;
        }, _.node("div", _.node("div", createWeekdayLabel(), "picker__weekday-display") + _.node("div", createMonthLabel("short_months"), settings.klass.month_display) + _.node("div", createDayLabel(), settings.klass.day_display) + _.node("div", createYearLabel("raw"), settings.klass.year_display), settings.klass.date_display) + _.node("div", _.node("div", (settings.selectYears ? createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel()) + createMonthNav() + createMonthNav(1), settings.klass.header) + _.node("table", tableHead + _.node("tbody", _.group({
            min: 0,
            max: WEEKS_IN_CALENDAR - 1,
            i: 1,
            node: "tr",
            item: function(rowCounter) {
                var shiftDateBy = settings.firstDay && 0 === calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day ? -7 : 0;
                return [ _.group({
                    min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1,
                    max: function() {
                        return this.min + DAYS_IN_WEEK - 1;
                    },
                    i: 1,
                    node: "td",
                    item: function(targetDate) {
                        targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0) ]);
                        var isSelected = selectedObject && selectedObject.pick == targetDate.pick, isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick, isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick, formattedDate = _.trigger(calendar.formats.toString, calendar, [ settings.format, targetDate ]);
                        return [ _.node("div", targetDate.date, function(klasses) {
                            return klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus), 
                            nowObject.pick == targetDate.pick && klasses.push(settings.klass.now), isSelected && klasses.push(settings.klass.selected), 
                            isHighlighted && klasses.push(settings.klass.highlighted), isDisabled && klasses.push(settings.klass.disabled), 
                            klasses.join(" ");
                        }([ settings.klass.day ]), "data-pick=" + targetDate.pick + " " + _.ariaAttr({
                            role: "gridcell",
                            label: formattedDate,
                            selected: isSelected && calendar.$node.val() === formattedDate ? !0 : null,
                            activedescendant: isHighlighted ? !0 : null,
                            disabled: isDisabled ? !0 : null
                        })), "", _.ariaAttr({
                            role: "presentation"
                        }) ];
                    }
                }) ];
            }
        })), settings.klass.table, 'id="' + calendar.$node[0].id + '_table" ' + _.ariaAttr({
            role: "grid",
            controls: calendar.$node[0].id,
            readonly: !0
        })), settings.klass.calendar_container) + _.node("div", _.node("button", settings.today, "btn-flat picker__today", "type=button data-pick=" + nowObject.pick + (isOpen && !calendar.disabled(nowObject) ? "" : " disabled") + " " + _.ariaAttr({
            controls: calendar.$node[0].id
        })) + _.node("button", settings.clear, "btn-flat picker__clear", "type=button data-clear=1" + (isOpen ? "" : " disabled") + " " + _.ariaAttr({
            controls: calendar.$node[0].id
        })) + _.node("button", settings.close, "btn-flat picker__close", "type=button data-close=true " + (isOpen ? "" : " disabled") + " " + _.ariaAttr({
            controls: calendar.$node[0].id
        })), settings.klass.footer);
    }, DatePicker.defaults = function(prefix) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthsShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            weekdaysFull: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            weekdaysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            weekdaysLetter: [ "S", "M", "T", "W", "T", "F", "S" ],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: prefix + "table",
                header: prefix + "header",
                date_display: prefix + "date-display",
                day_display: prefix + "day-display",
                month_display: prefix + "month-display",
                year_display: prefix + "year-display",
                calendar_container: prefix + "calendar-container",
                navPrev: prefix + "nav--prev",
                navNext: prefix + "nav--next",
                navDisabled: prefix + "nav--disabled",
                month: prefix + "month",
                year: prefix + "year",
                selectMonth: prefix + "select--month",
                selectYear: prefix + "select--year",
                weekdays: prefix + "weekday",
                day: prefix + "day",
                disabled: prefix + "day--disabled",
                selected: prefix + "day--selected",
                highlighted: prefix + "day--highlighted",
                now: prefix + "day--today",
                infocus: prefix + "day--infocus",
                outfocus: prefix + "day--outfocus",
                footer: prefix + "footer",
                buttonClear: prefix + "button--clear",
                buttonToday: prefix + "button--today",
                buttonClose: prefix + "button--close"
            }
        };
    }(Picker.klasses().picker + "__"), Picker.extend("pickadate", DatePicker);
}), function($) {
    function updateCounter() {
        var maxLength = +$(this).attr("length"), actualLength = +$(this).val().length, isValidLength = maxLength >= actualLength;
        $(this).parent().find('span[class="character-counter"]').html(actualLength + "/" + maxLength), 
        addInputStyle(isValidLength, $(this));
    }
    function addCounterElement($input) {
        var $counterElement = $("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
        $input.parent().append($counterElement);
    }
    function removeCounterElement() {
        $(this).parent().find('span[class="character-counter"]').html("");
    }
    function addInputStyle(isValidLength, $input) {
        var inputHasInvalidClass = $input.hasClass("invalid");
        isValidLength && inputHasInvalidClass ? $input.removeClass("invalid") : isValidLength || inputHasInvalidClass || ($input.removeClass("valid"), 
        $input.addClass("invalid"));
    }
    $.fn.characterCounter = function() {
        return this.each(function() {
            var itHasLengthAttribute = void 0 !== $(this).attr("length");
            itHasLengthAttribute && ($(this).on("input", updateCounter), $(this).on("focus", updateCounter), 
            $(this).on("blur", removeCounterElement), addCounterElement($(this)));
        });
    }, $(document).ready(function() {
        $("input, textarea").characterCounter();
    });
}(jQuery);