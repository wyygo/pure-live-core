// extract from egame.com, modified by iyear
"use strict";
var o = 18
    , r = 4
    , a = 2 + r
    , i = 2 + a
    , s = 2 + i
    , u = 4 + s
    , c = 2 + u
    , l = 2 + c
    , p = 1
    , d = 7
    , g = 13
    , f = 15
    , h = 4
    , _ = {
    event_id: 0,
    msg_type: 1,
    bin_data: 2,
    params: 3,
    start_tm: 4,
    end_tm: 5,
    data_list: 6,
    message_seq: 7
}
    , m = {
    uid: 0,
    msgid: 1,
    nick: 2,
    content: 3,
    tm: 4,
    type: 5,
    scenes_flag: 6,
    ext: 7,
    send_scenes: 8
}
    , v = {
    event_id: 0,
    event_name: 1,
    info: 2,
    params: 3,
    bin_data: 4
}
    , y = {
    livePlatId: 0,
    type: 1,
    barrageInfo: 2,
    anchorId: 3,
    pid: 4,
    gameId: 5,
    msgId: 6,
    nickName: 7,
    timestamp: 8,
    userId: 9,
    userOpenId: 10,
    userIdentity: 11,
    ip: 12,
    chs: 13,
    ext: 14
}
    , M = null;
function I(e) {
    return utf8Decode(e)
}

var T, S = 2, E = 6, A = 7, C = 8, D = 9, k = 10, N = 11, O = 12, L = {
    1: "getUint8",
    2: "getUint16",
    4: "getUint32",
    f4: "getFloat32",
    f8: "getFloat64"
}, R = {
    1: "setUint8",
    2: "setUint16",
    4: "setUint32",
    f4: "setFloat32",
    f8: "setFloat64"
}
var w = (function (e, t) {
    !function (e) {
        var t, o = "undefined", r = o !== typeof n && n,
            a = o !== typeof Uint8Array && Uint8Array,
            i = o !== typeof ArrayBuffer && ArrayBuffer, s = [0, 0, 0, 0, 0, 0, 0, 0],
            u = Array.isArray || function (e) {
                return !!e && "[object Array]" == Object.prototype.toString.call(e)
            }
            , c = 4294967296, l = 16777216;

        function p(n, u, p) {
            var T = u ? 0 : 4
                , S = u ? 4 : 0
                , E = u ? 0 : 3
                , A = u ? 1 : 2
                , C = u ? 2 : 1
                , D = u ? 3 : 0
                , k = u ? v : M
                , N = u ? y : I
                , O = b.prototype
                , L = "is" + n
                , R = "_" + L;
            return O.buffer = void 0,
                O.offset = 0,
                O[R] = !0,
                O.toNumber = w,
                O.toString = function (e) {
                    var t = this.buffer
                        , n = this.offset
                        , o = G(t, n + T)
                        , r = G(t, n + S)
                        , a = ""
                        , i = !p && 2147483648 & o;
                    i && (o = ~o,
                        r = c - r);
                    e = e || 10;
                    for (; ;) {
                        var s = o % e * c + r;
                        if (o = Math.floor(o / e),
                            r = Math.floor(s / e),
                            a = (s % e).toString(e) + a,
                        !o && !r)
                            break
                    }
                    i && (a = "-" + a);
                    return a
                }
                ,
                O.toJSON = w,
                O.toArray = d,
            r && (O.toBuffer = g),
            a && (O.toArrayBuffer = f),
                b[L] = function (e) {
                    return !(!e || !e[R])
                }
                ,
                e[n] = b,
                b;

            function b(e, n, r, u) {
                return this instanceof b ? function (e, n, r, u, l) {
                    a && i && (n instanceof i && (n = new a(n)),
                    u instanceof i && (u = new a(u)));
                    if (!(n || r || u || t))
                        return void (e.buffer = m(s, 0));
                    if (!h(n, r)) {
                        var p = t || Array;
                        l = r,
                            u = n,
                            r = 0,
                            n = new p(8)
                    }
                    if (e.buffer = n,
                        e.offset = r |= 0,
                    o === typeof u)
                        return;
                    "string" == typeof u ? function (e, t, n, o) {
                        var r = 0
                            , a = n.length
                            , i = 0
                            , s = 0;
                        "-" === n[0] && r++;
                        var u = r;
                        for (; r < a;) {
                            var l = parseInt(n[r++], o);
                            if (!(l >= 0))
                                break;
                            s = s * o + l,
                                i = i * o + Math.floor(s / c),
                                s %= c
                        }
                        u && (i = ~i,
                            s ? s = c - s : i++);
                        P(e, t + T, i),
                            P(e, t + S, s)
                    }(n, r, u, l || 10) : h(u, l) ? _(n, r, u, l) : "number" == typeof l ? (P(n, r + T, u),
                        P(n, r + S, l)) : u > 0 ? k(n, r, u) : u < 0 ? N(n, r, u) : _(n, r, s, 0)
                }(this, e, n, r, u) : new b(e, n, r, u)
            }

            function w() {
                var e = this.buffer
                    , t = this.offset
                    , n = G(e, t + T)
                    , o = G(e, t + S);
                return p || (n |= 0),
                    n ? n * c + o : o
            }

            function P(e, t, n) {
                e[t + D] = 255 & n,
                    n >>= 8,
                    e[t + C] = 255 & n,
                    n >>= 8,
                    e[t + A] = 255 & n,
                    n >>= 8,
                    e[t + E] = 255 & n
            }

            function G(e, t) {
                return e[t + E] * l + (e[t + A] << 16) + (e[t + C] << 8) + e[t + D]
            }
        }

        function d(e) {
            var n = this.buffer
                , o = this.offset;
            return t = null,
                !1 !== e && u(n) ? 8 === n.length ? n : n.slice(o, o + 8) : m(n, o)
        }

        function g(e) {
            var n = this.buffer
                , o = this.offset;
            return t = r,
                !1 !== e && r.isBuffer(n) ? 8 === n.length ? n : n.slice(o, o + 8) : r.from(f.call(this, e))
        }

        function f(e) {
            var n = this.buffer
                , o = this.offset
                , r = n.buffer;
            if (t = a,
            !1 !== e && !n.offset && r instanceof i)
                return 8 === r.byteLength ? r : r.slice(o, o + 8);
            var s = new a(8);
            return _(s, 0, n, o),
                s.buffer
        }

        function h(e, t) {
            var n = e && e.length;
            return t |= 0,
            n && t + 8 <= n && "string" != typeof e[t]
        }

        function _(e, t, n, o) {
            t |= 0,
                o |= 0;
            for (var r = 0; r < 8; r++)
                e[t++] = 255 & n[o++]
        }

        function m(e, t) {
            return Array.prototype.slice.call(e, t, t + 8)
        }

        function v(e, t, n) {
            for (var o = t + 8; o > t;)
                e[--o] = 255 & n,
                    n /= 256
        }

        function y(e, t, n) {
            var o = t + 8;
            for (n++; o > t;)
                e[--o] = 255 & -n ^ 255,
                    n /= 256
        }

        function M(e, t, n) {
            for (var o = t + 8; t < o;)
                e[t++] = 255 & n,
                    n /= 256
        }

        function I(e, t, n) {
            var o = t + 8;
            for (n++; t < o;)
                e[t++] = 255 & -n ^ 255,
                    n /= 256
        }

        p("Uint64BE", !0, !0),
            p("Int64BE", !0, !1),
            p("Uint64LE", !1, !0),
            p("Int64LE", !1, !1)
    }("string" != typeof t.nodeName ? t : b || {})
}(T = {
    exports: {}
}, T.exports),
    T.exports);

function P(e, t, n) {
    return ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function (e, t) {
            if (void 0 === e && (e = 0),
            void 0 === t && (t = this.byteLength),
                e = Math.floor(e),
                t = Math.floor(t),
            e < 0 && (e += this.byteLength),
            t < 0 && (t += this.byteLength),
                e = Math.min(Math.max(0, e), this.byteLength),
            (t = Math.min(Math.max(0, t), this.byteLength)) - e <= 0)
                return new ArrayBuffer(0);
            var n = new ArrayBuffer(t - e)
                , o = new Uint8Array(n)
                , r = new Uint8Array(this, e, t - e);
            return o.set(r),
                n
        }
    ),
        e.slice(t, n)
}

function G(e, t) {
    for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
        o[r - 2] = arguments[r];
    return e[t] && e[t].apply(this, o)
}

function U(e) {
    return function (t, n) {
        var o = void 0
            , r = ("" + e).slice(-1) - 0;
        try {
            o = t[L[e]](n)
        } catch (e) {
            o = null
        }
        return {
            value: o,
            position: n + r
        }
    }
}

function F(e) {
    return function (t, n) {
        var o = t[L[e]] && t[L[e]](n)
            , r = n + e
            , a = r + o;
        return {
            value: I(P(t.buffer, r, a)),
            ext: r,
            position: a
        }
    }
}

var q = [U(1), U(2), U(4), function (e, t) {
    return {
        value: new w.Int64BE(P(e.buffer, t, t + 8)).toNumber(),
        position: t + 8
    }
}
    , U("f4"), U("f8"), F(1), F(4), function (e, t) {
        for (var n = {}, o = x(e, t), r = o.value, a = o.position; r > 0;) {
            var i = x(e, a)
                , s = x(e, i.position);
            0 === i.tag && 1 === s.tag && (n[i.value] = s.value),
                a = s.position,
                r--
        }
        return {
            value: n,
            position: a
        }
    }
    , function (e, t) {
        for (var n = x(e, t), o = n.value, r = n.position, a = []; o > 0;) {
            o--;
            var i = x(e, r);
            a.push(i),
                r = i.position
        }
        return {
            value: a,
            position: r
        }
    }
    , function (e, t) {
        for (var n = []; ;) {
            var o = x(e, t);
            if (t = o.position,
            o.type === N)
                return {
                    value: n,
                    position: t
                };
            n.push(o.value)
        }
    }
    , function (e, t) {
        return {
            value: "",
            position: t
        }
    }
    , function (e, t) {
        return {
            value: 0,
            position: t
        }
    }
    , function (e, t) {
        var n = x(e, t);
        return {
            value: P(e.buffer, t + n.position, n.value),
            position: t + n.position + n.value
        }
    }
];

function x(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        , n = void 0;
    if (function (e) {
        return "[object ArrayBuffer]" === Object.prototype.toString.call(e)
    }(e)) {
        if (!e || e.byteLength < 1)
            return {};
        n = new DataView(e)
    } else
        n = e;
    var o = function (e, t) {
        var n = function (e, t) {
            var n = e.getUint8(t);
            return {
                tag: (240 & n) >> 4,
                type: 15 & n
            }
        }(e, t)
            , o = n.tag
            , r = n.type;
        t++,
        o >= 15 && (o = e.getUint8(t),
            t++);
        return {
            tag: o,
            type: r,
            position: t
        }
    }(n, t)
        , r = o.tag
        , a = o.type
        , i = function (e, t, n) {
        return G(q, e, t, n) || {}
    }(a, n, o.position);
    return n = null,
        {
            tag: r,
            type: a,
            value: i.value,
            position: i.position,
            ext: i.ext
        }
}

var B = function (e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
};

function V(e) {
    var t = new DataView(e, 0)
        , n = t.getInt32(0);
    if (n !== t.byteLength)
        throw new RangeError("The received packet length is abnormal");
    var o = t.getInt16(i);
    return {
        seq: t.getInt32(s),
        operation: o,
        body: {
            startPosition: l,
            endPosition: n,
            packView: t
        }
    }
}

function K(e) {
    return x(e.packView, e.startPosition).value
}

function j(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = [], o = e.byteLength; t < o;) {
        var r = x(e, t)
            , a = r.value
            , i = r.position
            , s = r.ext
            , u = r.tag;
        n.push({
            value: a,
            lastPosition: i,
            ext: s,
            tag: u
        }),
            t = i
    }
    return {
        result: n,
        buffer: e
    }
}

function H(e) {
    var t = x(e.packView, e.startPosition)
        , n = x(e.packView, t.position);
    return {
        ret: t.value,
        err_msg: n.value
    }
}

function Y(e) {
    return x(e.packView, e.startPosition).value
}

function $(e) {
    var t = this
        , n = e.resultObj
        , o = e.template
        , r = e.beforeChange
        , a = e.afterChange
        , i = {};
    r && r(n.buffer);
    var s = function (e) {
        if (o.hasOwnProperty(e)) {
            var r = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                    , t = arguments[1];
                if (Array.prototype.find)
                    return e.find(t);
                var n = null;
                return e.map(function (e) {
                    t(e) && (n = e)
                }),
                    n
            }(n.result, function (t) {
                return t.tag === o[e]
            }) || {}
                , s = r.value
                , u = r.ext;
            i[e] = a ? a.apply(t, [e, u, s, i]) : s
        }
    };
    for (var u in o)
        s(u);
    return i
}

var W, z = function () {
    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return B(e = {}, 8, K),
        B(e, 3, function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
            return function (n) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                    , r = n.packView.getInt32(n.startPosition)
                    , a = P(n.packView.buffer, n.startPosition, n.endPosition);
                if (a.byteLength >= h + r) {
                    var i = P(a, h, h + r);
                    o.push(t(j(i)));
                    var s = P(a, h + r);
                    s.byteLength > 0 && (o = o.concat(e({
                        packView: new DataView(s),
                        startPosition: 0,
                        endPosition: n.endPosition
                    })))
                }
                return o
            }
        }(function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return $({
                    resultObj: t,
                    template: _,
                    afterChange: function (n, o, r) {
                        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return "bin_data" === n ? r.map(function (n) {
                            return G(e, a.msg_type, j(t.buffer, n.ext))
                        }) : r
                    }
                })
            }
        }(t))),
        B(e, 14, H),
        B(e, 16, Y),
        e
}, J = (B(W = {}, 1, function (e) {
    return $({
        resultObj: e,
        template: m
    })
}),
    B(W, 2, function (e) {
        return $({
            resultObj: e,
            template: v
        })
    }),
    W), X = B({}, 1, function (e) {
    return $({
        resultObj: e,
        template: y
    })
}), Q = null;


function decode(e) {
    var t = V(e) || {}
        , n = t.seq
        , o = t.operation
        , r = t.body;
    return JSON.stringify({
        seq: n,
        operation: o,
        body: G(z(J), o, r)
    });
}