/*!
   JW Player version 8.24.4
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.24.4/notice.txt
*/
! function() {
    var t, e, n = {
            696: function(t, e) {
                "use strict";
                e.Z = {
                    advertising: {
                        admessage: "این آگهی در xx به پایان می رسد",
                        cuetext: "تبلیغات",
                        displayHeading: "تبلیغات",
                        loadingAd: "در حال بارگیری آگهی",
                        podmessage: "اگهی __AD_POD_CURRENT__ از __AD_POD_LENGTH__.",
                        skipmessage: "رد شدن از تبلیغات در xx",
                        skiptext: "رد شدن"
                    },
                    airplay: "ایرپلی",
                    audioTracks: "آهنگ های صوتی",
                    auto: "خودکار",
                    buffer: "بارگذاری",
                    cast: "کروم کست",
                    cc: "زیرنویس ها",
                    close: "بستن",
                    errors: {
                        // badConnection: "This video cannot be played because of a problem with your internet connection.",
                        // cantLoadPlayer: "Sorry, the video player failed to load.",
                        // cantPlayInBrowser: "The video cannot be played in this browser.",
                        // cantPlayVideo: "This video file cannot be played.",
                        // errorCode: "Error Code",
                        // liveStreamDown: "The live stream is either down or has ended.",
                        // protectedContent: "There was a problem providing access to protected content.",
                        // technicalError: "This video cannot be played because of a technical error."
						badConnection: "این ویدئو به دلیل مشکل در اتصال اینترنت شما قابل پخش نیست.",
                         cantLoadPlayer: "با عرض پوزش، پخش کننده ویدئو بارگیری نشد.",
                         cantPlayInBrowser: "ویدیو را نمی توان در این مرورگر پخش کرد.",
                         cantPlayVideo: "این فایل ویدئویی قابل پخش نیست.",
                         errorCode: "کد خطا",
                         liveStreamDown: "جریان زنده یا قطع شده است یا به پایان رسیده است.",
                         protectedContent: "مشکلی در ارائه دسترسی به محتوای محافظت شده وجود داشت.",
                         technicalError: "این ویدئو به دلیل یک خطای فنی قابل پخش نیست."
                    },
                    exitFullscreen: "خروج از حالت تمام صفحه",
                    fullscreen: "تمام صفحه",
                    hd: "کیفیت",
                    liveBroadcast: "زنده",
                    logo: "لوگو",
                    mute: "بی صدا",
                    next: "بعدی",
                    nextUp: "بعدی",
                    notLive: "زنده نیست",
                    off: "خاموش",
                    pause: "مکث",
                    pipIcon: "تصویر در تصویر (PiP)",
                    play: "پخش",
                    playback: "پخش",
                    playbackRates: "سرعت پخش",
                    player: "پخش کننده ویدیو",
                    poweredBy: "پشتیبانی شده توسط",
                    prev: "قبلی",
                    related: {
                        autoplaymessage: "بعدی در xx",
                        heading: "ویدیوهای بیشتر"
                    },
                    replay: "بازپخش",
                    rewind: "10 ثانیه به عقب برگردید",
                    settings: "تنظیمات",
                    sharing: {
                        copied: "کپی شد",
                        email: "ایمیل",
                        embed: "جاسازی در وبلاگ یا سایت شما",
                        heading: "اشتراک",
                        link: "لینک"
                    },
                    slider: "نوار",
                    stop: "متوقف کردن",
                    unmute: "با صدا",
                    videoInfo: "درباره این ویدیو",
                    volume: "صدا",
                    volumeSlider: "صدا",
                    shortcuts: {
                        playPause: "پخش/مکث",
                        volumeToggle: "با صدا/بی صدا",
                        fullscreenToggle: "تمام صفحه/ خروج از تمام صفحه",
                        seekPercent: "نوار %",
                        keyboardShortcuts: "کلید های میانبر صفحه کلید",
                        increaseVolume: "افزایش صدا",
                        decreaseVolume: "کاهش صدا",
                        seekForward: "کشیدن نوار به جلو",
                        seekBackward: "کشیدن نوار به غقب",
                        spacebar: "فاصله",
                        captionsToggle: "زیرنویس‌ها روشن/خاموش"
                    },
                    captionsStyles: {
                        subtitleSettings: "تنظیمات زیرنویس",
                        color: "رنگ قلم",
                        fontOpacity: "تیرگی قلم",
                        userFontScale: "سایز قلم",
                        fontFamily: "خانواده قلم",
                        edgeStyle: "لبه کاراکتر",
                        backgroundColor: "رنگ پس زمینه",
                        backgroundOpacity: "شفافیت پس زمینه",
                        windowColor: "رنگ پنجره",
                        windowOpacity: "تیرگی پنجره",
                        white: "سفید",
                        black: "مشکی",
                        red: "قرمز",
                        green: "سبز",
                        blue: "آبی",
                        yellow: "زرد",
                        magenta: "ارغوانی",
                        cyan: "فیروزه ای",
                        none: "بدون رنگ",
                        raised: "Raised",
                        depressed: "افسرده",
                        uniform: "Uniform",
                        dropShadow: "سایه"
                    },
                    disabled: "غیرفعال",
                    enabled: "فعال",
                    reset: "بازیابی"
                }
            },
            9128: function(t, e, n) {
                "use strict";

                function r(t, e, n) {
                    var r = [],
                        i = {};

                    function o() {
                        for (; r.length > 0;) {
                            var e = r.shift(),
                                n = e.command,
                                o = e.args;
                            (i[n] || t[n]).apply(t, o)
                        }
                    }
                    e.forEach((function(e) {
                        var u = t[e];
                        i[e] = u, t[e] = function() {
                            for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                            n() ? r.push({
                                command: e,
                                args: i
                            }) : (o(), u && u.apply(this, i))
                        }
                    })), Object.defineProperty(this, "queue", {
                        enumerable: !0,
                        get: function() {
                            return r
                        }
                    }), this.flush = o, this.empty = function() {
                        r.length = 0
                    }, this.off = function() {
                        e.forEach((function(e) {
                            var n = i[e];
                            n && (t[e] = n, delete i[e])
                        }))
                    }, this.destroy = function() {
                        this.off(), this.empty()
                    }
                }
                n.d(e, {
                    Z: function() {
                        return r
                    }
                })
            },
            4742: function(t, e) {
                "use strict";
                e.Z = {
                    debug: !1
                }
            },
            5191: function(t, e, n) {
                "use strict";

                function r(t) {
                    return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)), t
                }

                function i(t, e) {
                    if (-1 === e.toString().indexOf("%")) return 0;
                    if ("string" != typeof t || !t) return 0;
                    if (/^\d*\.?\d+%$/.test(t)) return t;
                    var n = t.indexOf(":");
                    if (-1 === n) return 0;
                    var r = parseFloat(t.substr(0, n)),
                        i = parseFloat(t.substr(n + 1));
                    return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
                }
                n.d(e, {
                    a: function() {
                        return r
                    },
                    R: function() {
                        return i
                    }
                })
            },
            5083: function(t, e, n) {
                "use strict";
                n.d(e, {
                    ke: function() {
                        return l
                    },
                    G0: function() {
                        return f
                    }
                });
                var r = n(6042),
                    i = n(5191),
                    o = n(1569),
                    u = n(9888),
                    a = n(8348),
                    c = n(696),
                    s = n(8518),
                    l = {
                        autoPause: {
                            viewability: !1,
                            pauseAds: !1
                        },
                        autostart: !1,
                        allowFullscreen: !0,
                        bandwidthEstimate: null,
                        bitrateSelection: null,
                        castAvailable: !1,
                        controls: !0,
                        cues: [],
                        defaultPlaybackRate: 1,
                        displaydescription: !0,
                        displaytitle: !0,
                        displayPlaybackLabel: !1,
                        enableShortcuts: !0,
                        height: 360,
                        intl: {},
                        item: 0,
                        language: "fa",
                        liveTimeout: null,
                        localization: c.Z,
                        mute: !1,
                        nextUpDisplay: !0,
                        playbackRateControls: !1,
                        playbackRates: [.5, 1, 1.25, 1.5, 2],
                        renderCaptionsNatively: !1,
                        repeat: !1,
                        stretching: "uniform",
                        volume: 90,
                        width: 640
                    };

                function f(t) {
                    return t < 5 ? 5 : t
                }
                e.ZP = function(t, e) {
                    var d = (0, r.l7)({}, (window.jwplayer || {}).defaults, e, t);
                    ! function(t) {
                        Object.keys(t).forEach((function(e) {
                            "id" !== e && (t[e] = (0, u.serialize)(t[e]))
                        }))
                    }(d);
                    var p = d.forceLocalizationDefaults ? l.language : (0, s.G3)(),
                        h = (0, s.tK)(d.intl);
                    d.localization = (0, s.Mh)(c.Z, (0, s.Pm)(d, h, p));
                    var v = (0, r.l7)({}, l, d);
                    "." === v.base && (v.base = (0, o.getScriptPath)("jwplayer.js")), v.base = (v.base || (0, o.loadFrom)()).replace(/\/?$/, "/"), n.p = v.base, v.width = (0, i.a)(v.width), v.height = (0, i.a)(v.height), v.aspectratio = (0, i.R)(v.aspectratio, v.width), v.volume = (0, r.qh)(v.volume) ? Math.min(Math.max(0, v.volume), 100) : l.volume, v.mute = !!v.mute, v.language = p, v.intl = h;
                    var g = v.playlistIndex;
                    g && (v.item = g), (0, r.hj)(v.item) || (v.item = 0);
                    var m = d.autoPause;
                    m && (v.autoPause.viewability = !("viewability" in m) || !!m.viewability);
                    var y = v.playbackRateControls;
                    if (y) {
                        var w = v.playbackRates;
                        Array.isArray(y) && (w = y), (w = w.filter((function(t) {
                            return (0, r.hj)(t) && t >= .25 && t <= 4
                        })).map((function(t) {
                            return Math.round(100 * t) / 100
                        }))).indexOf(1) < 0 && w.push(1), w.sort(), v.playbackRateControls = !0, v.playbackRates = w
                    }(!v.playbackRateControls || v.playbackRates.indexOf(v.defaultPlaybackRate) < 0) && (v.defaultPlaybackRate = 1), v.playbackRate = v.defaultPlaybackRate, v.aspectratio || delete v.aspectratio;
                    var b = v.playlist;
                    if (b) Array.isArray(b.playlist) && (v.feedData = b, v.playlist = b.playlist);
                    else {
                        var k = (0, r.ei)(v, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration"]);
                        v.playlist = [k]
                    }
                    v.qualityLabels = v.qualityLabels || v.hlslabels, delete v.duration;
                    var C = v.liveTimeout;
                    null !== C && ((0, r.qh)(C) ? 0 !== C && (C = Math.max(30, C)) : C = null, v.liveTimeout = C);
                    var P, j, x = parseFloat(v.bandwidthEstimate),
                        S = parseFloat(v.bitrateSelection);
                    return v.bandwidthEstimate = (0, r.qh)(x) ? x : (P = v.defaultBandwidthEstimate, j = parseFloat(P), (0, r.qh)(j) ? Math.max(j, 1) : l.bandwidthEstimate), v.bitrateSelection = (0, r.qh)(S) ? S : l.bitrateSelection, v.liveSyncDuration = f(v.liveSyncDuration), v.backgroundLoading = (0, r.jn)(v.backgroundLoading) ? v.backgroundLoading : a.Features.backgroundLoading, v
                }
            },
            2894: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Tr: function() {
                        return i
                    },
                    Ep: function() {
                        return o
                    },
                    Jt: function() {
                        return u
                    },
                    Zq: function() {
                        return a
                    }
                });
                var r = n(4446),
                    i = {};

                function o(t, e) {
                    return function() {
                        throw new r.rG(r.pJ, t, e)
                    }
                }

                function u(t, e) {
                    return function() {
                        throw new r.rG(null, t, e)
                    }
                }

                function a() {
                    return n.e(681).then(function(t) {
                        return n(7573).default
                    }.bind(null, n)).catch(o(r.fU + 101))
                }
            },
            623: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return tt
                    },
                    c: function() {
                        return Y
                    }
                });
                var r = n(6042),
                    i = n(9128),
                    o = n(2445),
                    u = n(2894),
                    a = n(393),
                    c = n(8320),
                    s = n(2963),
                    l = n(670),
                    f = n(4601),
                    d = n(4446),
                    p = n(8348),
                    h = null;

                function v(t) {
                    return h || (h = function(t) {
                        var e = t.get("controls"),
                            r = g(),
                            i = function(t, e) {
                                var n = t.get("playlist");
                                if (Array.isArray(n) && n.length)
                                    for (var r = (0, c.bx)(t.get("item"), n.length), i = (0, c.T5)((0, a.Z)(n[r]), t), o = 0; o < i.length; o++)
                                        for (var u = i[o], l = t.getProviders(), f = 0; f < s.B.length; f++) {
                                            var d = s.B[f];
                                            if (l.providerSupports(d, u)) return d.name === e
                                        }
                                return !1
                            }(t, "html5");
                        if (p.OS.tizen) return m();
                        if (e && r && i) return o = n.e(605).then(function(t) {
                            n(6337);
                            var e = n(7573).default;
                            return f.v.controls = n(6867).default, (0, l.Z)(n(9181).default), e
                        }.bind(null, n)).catch((0, u.Ep)(d.fU + 105)), u.Tr.html5 = o, o;
                        var o;
                        if (e && i) return function() {
                            var t = n.e(207).then(function(t) {
                                var e = n(7573).default;
                                return f.v.controls = n(6867).default, (0, l.Z)(n(9181).default), e
                            }.bind(null, n)).catch((0, u.Ep)(d.fU + 104));
                            return u.Tr.html5 = t, t
                        }();
                        if (e && r) return n.e(493).then(function(t) {
                            n(6337);
                            var e = n(7573).default;
                            return f.v.controls = n(6867).default, e
                        }.bind(null, n)).catch((0, u.Ep)(d.fU + 103));
                        if (e) return n.e(581).then(function(t) {
                            var e = n(7573).default;
                            return f.v.controls = n(6867).default, e
                        }.bind(null, n)).catch((0, u.Ep)(d.fU + 102));
                        return m()
                    }(t)), h
                }

                function g() {
                    var t = window.IntersectionObserverEntry;
                    return !t || !("IntersectionObserver" in window) || !("intersectionRatio" in t.prototype)
                }

                function m() {
                    return function() {
                        if (g()) return n.e(943).then(function(t) {
                            return n(6337)
                        }.bind(null, n)).catch((0, u.Ep)(d.fU + 120));
                        return Promise.resolve()
                    }().then(u.Zq)
                }
                var y = n(1643),
                    w = n(7263),
                    b = n(676),
                    k = n(8518),
                    C = n(1241);

                function P(t) {
                    var e = t.get("playlist");
                    return new Promise((function(n, r) {
                        if ("string" != typeof e) {
                            var i = t.get("feedData") || {};
                            return j(t, e, i), n()
                        }
                        var o = new w.Z;
                        o.on(y.Ow, (function(e) {
                            var r = e.playlist;
                            delete e.playlist, j(t, r, e), n()
                        })), o.on(y.pn, (function(e) {
                            j(t, [], {}), r((0, d.l9)(e, d.xk))
                        })), o.load(e)
                    }))
                }

                function j(t, e, n) {
                    var r = t.attributes;
                    r.playlist = (0, c.ZP)(e), r.feedData = n
                }

                function x(t) {
                    return t.attributes._destroyed
                }
                var S = n(1918),
                    T = n(6599);

                function E(t) {
                    return _(t) ? Promise.resolve() : P(t).then((function() {
                        if (t.get("drm") || (0, S.w0)(t.get("playlist"))) return (0, S.lD)(t.get("edition"))
                    })).then((function() {
                        return P(e = t).then((function() {
                            if (!x(e)) {
                                var t = (0, c.s7)(e.get("playlist"), e);
                                e.attributes.playlist = t;
                                try {
                                    (0, c._)(t)
                                } catch (t) {
                                    throw t.code += d.xk, t
                                }
                                var n = e.getProviders(),
                                    r = (0, c.bx)(e.get("item"), t.length),
                                    i = n.choose(t[r].sources[0]),
                                    o = i.provider,
                                    a = i.name;
                                return "function" == typeof o ? o : u.Tr.html5 && "html5" === a ? u.Tr.html5 : n.load(a).catch((function(t) {
                                    throw (0, d.l9)(t, d.y4)
                                }))
                            }
                        }));
                        var e
                    }))
                }

                function O(t, e) {
                    var n = [Z(t)];
                    return _(t) || n.push(Promise.resolve()), Promise.all(n)
                }

                function A(t, e) {
                    var r = function() {
                        return function(t, e) {
                            return (0, C.Z)(t, e)
                        }(t, e)
                    };
                    return window.location !== window.parent.location && /isAMP/.test(document.location.search) ? function(t, e) {
                        return function(t, e) {
                            return n.e(168).then(function(r) {
                                return new(0, n(5545).default)(e).setup(t)
                            }.bind(null, n)).catch((0, u.Ep)(d.fU + 130))
                        }(t, e).then((function() {
                            return M(t)
                        }))
                    }(t, e).then(r).catch(r) : r()
                }

                function Z(t) {
                    var e = t.attributes,
                        n = e.error;
                    if (n && n.code === T.u) {
                        var r = e.pid,
                            i = e.ph,
                            o = new T.Z(e.key);
                        if (i > 0 && i < 4 && r && o.duration() > -7776e6) return new b.ZP("//localhost:3000/js/" + r + ".js").load().then((function() {
                            var t = window.jwplayer.defaults.key,
                                n = new T.Z(t);
                            n.error() || n.token() !== o.token() || (e.key = t, e.edition = n.edition(), e.error = n.error())
                        })).catch((function() {}))
                    }
                    return Promise.resolve()
                }

                function _(t) {
                    var e = t.get("advertising");
                    return !(!e || !e.outstream)
                }
                var M = function(t) {
                        var e = t.get("skin") ? t.get("skin").url : void 0;
                        if ("string" == typeof e && ! function(t) {
                                for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
                                    if (e[n].href === t) return !0;
                                return !1
                            }(e)) {
                            return new b.ZP(e, !0).load().catch((function(t) {
                                return t
                            }))
                        }
                        return Promise.resolve()
                    },
                    F = function(t) {
                        var e = t.attributes,
                            n = e.language,
                            r = e.base,
                            i = e.setupConfig,
                            o = e.intl,
                            u = (0, k.Pm)(i, o, n);
                        return !(0, k.q2)(n) || (0, k.dl)(u) ? Promise.resolve() : new Promise((function(i) {
                            return (0, k.Dq)(r, n).then((function(n) {
                                var r = n.response;
                                if (!x(t)) {
                                    if (!r) throw new d.rG(null, d.wH);
                                    e.localization = (0, k.Mh)(r, u), i()
                                }
                            })).catch((function(t) {
                                i(t.code === d.wH ? t : (0, d.l9)(t, d.A6))
                            }))
                        }))
                    },
                    I = function(t) {
                        return new Promise((function(e) {
                            return t.attributes.liveSyncDuration > 45 ? e((0, d.l9)(new Error, d.wM)) : e()
                        }))
                    };
                var L = function(t) {
                        var e;
                        this.start = function(n) {
                            var r = A(t, n),
                                i = Promise.all([v(t), I(t), r, E(t), O(t), M(t), F(t)]),
                                o = new Promise((function(t, n) {
                                    e = setTimeout((function() {
                                        n(new d.rG(d.pJ, d.T6))
                                    }), 6e4);
                                    var r = function() {
                                        clearTimeout(e), setTimeout(t, 6e4)
                                    };
                                    i.then(r).catch(r)
                                }));
                            return Promise.race([i, o]).catch((function(t) {
                                var e = function() {
                                    throw t
                                };
                                return r.then(e).catch(e)
                            })).then((function(t) {
                                return function(t) {
                                    if (!t || !t.length) return {
                                        core: null,
                                        warnings: []
                                    };
                                    var e = t.reduce((function(t, e) {
                                        return t.concat(e)
                                    }), []).filter((function(t) {
                                        return t && t.code
                                    }));
                                    return {
                                        core: t[0],
                                        warnings: e
                                    }
                                }(t)
                            }))
                        }, this.destroy = function() {
                            clearTimeout(e), t.set("_destroyed", !0), t = null
                        }
                    },
                    N = n(2303),
                    B = n(7411),
                    D = n(9888),
                    R = n(4742),
                    q = {
                        removeItem: function(t) {}
                    };
                try {
                    q = window.localStorage || q
                } catch (t) {}
                var z = function() {
                        function t(t, e) {
                            this.namespace = t, this.items = e
                        }
                        var e = t.prototype;
                        return e.getAllItems = function() {
                            var t = this;
                            return this.items.reduce((function(e, n) {
                                var r = q[t.namespace + "." + n];
                                return r && (e[n] = "captions" !== n ? (0, D.serialize)(r) : JSON.parse(r)), e
                            }), {})
                        }, e.track = function(t) {
                            var e = this;
                            this.items.forEach((function(n) {
                                t.on("change:" + n, (function(t, r) {
                                    try {
                                        "captions" === n && (r = JSON.stringify(r)), q[e.namespace + "." + n] = r
                                    } catch (t) {
                                        R.Z.debug && console.error(t)
                                    }
                                }))
                            }))
                        }, e.clear = function() {
                            var t = this;
                            this.items.forEach((function(e) {
                                q.removeItem(t.namespace + "." + e)
                            }))
                        }, t
                    }(),
                    U = n(7753),
                    H = n(9918),
                    V = n(328),
                    G = n(4225),
                    W = n(7683),
                    K = n(4609),
                    Q = n(5882),
                    X = (n(4671), n(9926), function(t) {
                        this._events = {}, this.modelShim = new U.Z, this.modelShim._qoeItem = new B.Z, this.mediaShim = {}, this.setup = new L(this.modelShim), this.currentContainer = this.originalContainer = t, this.apiQueue = new i.Z(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "setPlaylistItem", "stopCasting", "resize", "setCaptions", "setControls"], (function() {
                            return !0
                        }))
                    });

                function J(t, e) {
                    e && e.code && (e.sourceError && console.error(e.sourceError), console.error(d.rG.logMessage(e.code)))
                }

                function $(t) {
                    t && t.code && console.warn(d.rG.logMessage(t.code))
                }

                function Y(t, e) {
                    if (!document.body.contains(t.currentContainer)) {
                        var n = document.getElementById(t.get("id"));
                        n && (t.currentContainer = n)
                    }
                    t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer), t.currentContainer = e
                }(0, r.l7)(X.prototype, {
                    on: V.ZP.on,
                    once: V.ZP.once,
                    off: V.ZP.off,
                    trigger: V.ZP.trigger,
                    init: function(t, e) {
                        var n = this,
                            i = this.modelShim,
                            u = new z("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]),
                            a = u && u.getAllItems();
                        i.attributes = i.attributes || {}, (0, r.l7)(this.mediaShim, H.L4);
                        var c = t,
                            s = (0, o.ZP)((0, r.l7)({}, t), a);
                        s.id = e.id, s.setupConfig = c, (0, r.l7)(i.attributes, s, H.bv), i.getProviders = function() {
                            return new N.Z(s)
                        }, i.setProvider = function() {};
                        var l = (0, W.Z)();
                        i.get("backgroundLoading") || (l = (0, K.Z)(l.getPrimedElement(), l));
                        var f = this.primeUi = new Q.ZP((0, Q.GU)(this.originalContainer)).once("gesture", (function() {
                            l.prime(), n.preload(), f.destroy()
                        }));
                        return i.on("change:errorEvent", J), this.setup.start(e).then((function(t) {
                            var o = t.core;
                            if (!o) throw (0, d.l9)(null, d.y7);
                            if (n.setup) {
                                n.on(y.cM, $), t.warnings.forEach((function(t) {
                                    n.trigger(y.cM, t)
                                }));
                                var a = n.modelShim.clone();
                                if (a.error) throw a.error;
                                var c = n.apiQueue.queue.slice(0);
                                n.apiQueue.destroy(), (0, r.l7)(n, o.prototype), n.playerSetup(a, e, n.originalContainer, n._events, c, l);
                                var s = n._model;
                                return i.off("change:errorEvent", J), s.on("change:errorEvent", J), u.track(s), n.updatePlaylist(s.get("playlist"), s.get("feedData")).catch((function(t) {
                                    var e = t.code === d._M ? d.IB : d.xk;
                                    throw (0, d.l9)(t, e)
                                }))
                            }
                        })).then((function() {
                            n.setup && n.playerReady()
                        })).catch((function(t) {
                            n.setup && function(t, e, n) {
                                Promise.resolve().then((function() {
                                    var r = (0, d.Mm)(d.ud, d.nk, n),
                                        i = t._model || t.modelShim;
                                    r.message = r.message || i.get("localization").errors[r.key], delete r.key;
                                    var o = i.get("contextual");
                                    if (!o) {
                                        var u = (0, G.Z)(t, r);
                                        G.Z.cloneIcon && u.querySelector(".jw-icon").appendChild(G.Z.cloneIcon("error")), Y(t, u)
                                    }
                                    i.set("errorEvent", r), i.set("state", y.Vy), t.trigger(y.HH, r), o && e.remove()
                                }))
                            }(n, e, t)
                        }))
                    },
                    playerDestroy: function() {
                        this.destroy && this.destroy(), this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.primeUi && this.primeUi.destroy(), this.currentContainer !== this.originalContainer && Y(this, this.originalContainer), this.off(), this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null
                    },
                    getContainer: function() {
                        return this.currentContainer
                    },
                    get: function(t) {
                        if (this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t)
                    },
                    getItemQoe: function() {
                        return this.modelShim._qoeItem
                    },
                    getItemPromise: function() {
                        return null
                    },
                    setItemCallback: function(t) {
                        this.modelShim && (this.modelShim.attributes.playlistItemCallback = t)
                    },
                    getConfig: function() {
                        return (0, r.l7)({}, this.modelShim.attributes, this.mediaShim)
                    },
                    getCurrentCaptions: function() {
                        return this.get("captionsIndex")
                    },
                    getWidth: function() {
                        return this.get("containerWidth")
                    },
                    getHeight: function() {
                        return this.get("containerHeight")
                    },
                    getMute: function() {
                        return this.get("mute")
                    },
                    getProvider: function() {
                        return this.get("provider")
                    },
                    getState: function() {
                        return this.get("state")
                    },
                    getAudioTracks: function() {
                        return null
                    },
                    getCaptionsList: function() {
                        return null
                    },
                    getQualityLevels: function() {
                        return null
                    },
                    getVisualQuality: function() {
                        return null
                    },
                    getCurrentQuality: function() {
                        return -1
                    },
                    getCurrentAudioTrack: function() {
                        return -1
                    },
                    getSafeRegion: function() {
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    isBeforeComplete: function() {
                        return !1
                    },
                    isBeforePlay: function() {
                        return !1
                    },
                    createInstream: function() {
                        return null
                    },
                    skipAd: function() {},
                    attachMedia: function() {},
                    detachMedia: function() {}
                });
                var tt = X
            },
            4446: function(t, e, n) {
                "use strict";
                n.d(e, {
                    nk: function() {
                        return i
                    },
                    T6: function() {
                        return o
                    },
                    y7: function() {
                        return u
                    },
                    fU: function() {
                        return a
                    },
                    xk: function() {
                        return c
                    },
                    IB: function() {
                        return s
                    },
                    YQ: function() {
                        return l
                    },
                    DD: function() {
                        return f
                    },
                    y4: function() {
                        return d
                    },
                    tJ: function() {
                        return p
                    },
                    o2: function() {
                        return h
                    },
                    _M: function() {
                        return v
                    },
                    EY: function() {
                        return g
                    },
                    wM: function() {
                        return m
                    },
                    Y7: function() {
                        return y
                    },
                    A6: function() {
                        return w
                    },
                    wH: function() {
                        return b
                    },
                    ul: function() {
                        return k
                    },
                    MD: function() {
                        return C
                    },
                    pJ: function() {
                        return P
                    },
                    zO: function() {
                        return j
                    },
                    Sp: function() {
                        return x
                    },
                    H4: function() {
                        return S
                    },
                    ud: function() {
                        return T
                    },
                    rG: function() {
                        return E
                    },
                    Mm: function() {
                        return O
                    },
                    l9: function() {
                        return A
                    },
                    nm: function() {
                        return Z
                    }
                });
                var r = n(6042),
                    i = 1e5,
                    o = 100001,
                    u = 100002,
                    a = 101e3,
                    c = 102e3,
                    s = 102700,
                    l = 200001,
                    f = 202e3,
                    d = 104e3,
                    p = 203e3,
                    h = 203640,
                    v = 203700,
                    g = 204e3,
                    m = 300100,
                    y = 306e3,
                    w = 308e3,
                    b = 308640,
                    k = "cantPlayVideo",
                    C = "badConnection",
                    P = "cantLoadPlayer",
                    j = "cantPlayInBrowser",
                    x = "liveStreamDown",
                    S = "protectedContent",
                    T = "technicalError",
                    E = function() {
                        function t(t, e, n) {
                            this.code = (0, r.qh)(e) ? e : 0, this.sourceError = n || null, t && (this.key = t)
                        }
                        return t.logMessage = function(t) {
                            var e = t % 1e3,
                                n = Math.floor((t - e) / 1e3),
                                r = t.toString();
                            return e >= 400 && e < 600 && (r = n + "400-" + n + "599"), "JW Player " + (t > 299999 && t < 4e5 ? "Warning" : "Error") + " " + t + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
                        }, t
                    }();

                function O(t, e, n) {
                    return n instanceof E && n.code ? n : new E(t, e, n)
                }

                function A(t, e) {
                    var n = O(T, e, t);
                    return n.code = (t && t instanceof E && t.code || 0) + e, n
                }

                function Z(t) {
                    var e = t.name,
                        n = t.message;
                    switch (e) {
                        case "AbortError":
                            return /pause/.test(n) ? 303213 : /load/.test(n) ? 303212 : 303210;
                        case "NotAllowedError":
                            return 303220;
                        case "NotSupportedError":
                            return 303230;
                        default:
                            return 303200
                    }
                }
            },
            6391: function(t, e) {
                "use strict";
                e.Z = []
            },
            7411: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return c
                    }
                });
                var r = n(6042),
                    i = n(5004),
                    o = window.performance || {
                        timing: {}
                    },
                    u = o.timing.navigationStart || (0, i.z)();

                function a() {
                    return u + o.now()
                }
                "now" in o || (o.now = function() {
                    return (0, i.z)() - u
                });
                var c = function() {
                    function t() {
                        this.startTimes = {}, this.sum = {}, this.counts = {}, this.ticks = {}
                    }
                    var e = t.prototype;
                    return e.start = function(t) {
                        this.startTimes[t] = a(), this.counts[t] = this.counts[t] + 1 || 1
                    }, e.end = function(t) {
                        if (this.startTimes[t]) {
                            var e = a() - this.startTimes[t];
                            delete this.startTimes[t], this.sum[t] = this.sum[t] + e || e
                        }
                    }, e.dump = function() {
                        var t = (0, r.l7)({}, this.sum);
                        for (var e in this.startTimes)
                            if (Object.prototype.hasOwnProperty.call(this.startTimes, e)) {
                                var n = a() - this.startTimes[e];
                                t[e] = t[e] + n || n
                            }
                        return {
                            counts: (0, r.l7)({}, this.counts),
                            sums: t,
                            events: (0, r.l7)({}, this.ticks)
                        }
                    }, e.tick = function(t) {
                        this.ticks[t] = a()
                    }, e.clear = function(t) {
                        delete this.ticks[t]
                    }, e.between = function(t, e) {
                        return this.ticks[e] && this.ticks[t] ? this.ticks[e] - this.ticks[t] : null
                    }, t
                }()
            },
            4601: function(t, e, n) {
                "use strict";
                n.d(e, {
                    v: function() {
                        return u
                    },
                    z: function() {
                        return a
                    }
                });
                var r = n(2894),
                    i = n(8348),
                    o = null,
                    u = {};

                function a() {
                    return o || (o = i.OS.tizenApp ? n.e(74).then(function(t) {
                        var e = n(3112).default;
                        return u.controls = e, e
                    }.bind(null, n)).catch((function() {
                        o = null, (0, r.Jt)(301133)()
                    })) : n.e(716).then(function(t) {
                        var e = n(6867).default;
                        return u.controls = e, e
                    }.bind(null, n)).catch((function() {
                        o = null, (0, r.Jt)(301130)()
                    }))), o
                }
            },
            8348: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    Browser: function() {
                        return a
                    },
                    Features: function() {
                        return s
                    },
                    OS: function() {
                        return c
                    }
                });
                var r = n(2268);

                function i(t, e) {
                    var n = t.exec(e);
                    if (n && n.length > 1) return n[1]
                }
                var o = navigator.userAgent,
                    u = function() {};
                var a = {
                        get androidNative() {
                            return (0, r.O7)()
                        },
                        get chrome() {
                            return (0, r.i7)()
                        },
                        get edge() {
                            return (0, r.un)()
                        },
                        get facebook() {
                            return (0, r.DF)()
                        },
                        get firefox() {
                            return (0, r.pZ)()
                        },
                        get ie() {
                            return (0, r.w1)()
                        },
                        get msie() {
                            return (0, r.A)()
                        },
                        get safari() {
                            return (0, r.G6)()
                        },
                        get version() {
                            return function(t, e) {
                                var n, r, i, o;
                                if (t.chrome) n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6);
                                else if (t.safari) n = e.substring(e.indexOf("Version") + 8);
                                else if (t.firefox) n = e.substring(e.indexOf("Firefox") + 8);
                                else if (t.edge) {
                                    var u = e.indexOf("Edge"); - 1 === u ? u = e.indexOf("Edg") + 4 : u += 5, n = e.substring(u)
                                } else t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5)));
                                return n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
                                    version: n,
                                    major: r,
                                    minor: i
                                }
                            }(this, o)
                        }
                    },
                    c = {
                        get android() {
                            return (0, r.Dt)()
                        },
                        get iOS() {
                            return (0, r.gn)()
                        },
                        get mobile() {
                            return (0, r.tq)()
                        },
                        get mac() {
                            return (0, r.id)()
                        },
                        get iPad() {
                            return (0, r.zc)()
                        },
                        get iPhone() {
                            return (0, r.xb)()
                        },
                        get windows() {
                            return o.indexOf("Windows") > -1
                        },
                        get tizen() {
                            return (0, r.yS)()
                        },
                        get tizenApp() {
                            return (0, r.Q6)()
                        },
                        get version() {
                            return function(t, e) {
                                var n, r, o;
                                if (t.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/, e)) {
                                    case "6.1":
                                        n = "7.0";
                                        break;
                                    case "6.2":
                                        n = "8.0";
                                        break;
                                    case "6.3":
                                        n = "8.1"
                                } else t.android ? n = i(/Android ([._\d]+)/, e) : t.iOS ? n = i(/OS ([._\d]+)/, e) : t.mac ? n = i(/Mac OS X ([._\d]+)/, e) : t.tizen && (n = i(/Tizen ([._\d]+)/, e));
                                if (n) {
                                    r = parseInt(n, 10);
                                    var u = n.split(/[._]/);
                                    u && (o = parseInt(u[1], 10))
                                }
                                return {
                                    version: n,
                                    major: r,
                                    minor: o
                                }
                            }(this, o)
                        }
                    },
                    s = {
                        get flash() {
                            return (0, r.NO)()
                        },
                        get flashVersion() {
                            return (0, r.dI)()
                        },
                        get iframe() {
                            return (0, r.cL)()
                        },
                        get passiveEvents() {
                            return function() {
                                var t = !1;
                                try {
                                    var e = Object.defineProperty({}, "passive", {
                                        get: function() {
                                            return t = !0
                                        }
                                    });
                                    window.addEventListener("testPassive", u, e), window.removeEventListener("testPassive", u, e)
                                } catch (t) {}
                                return t
                            }()
                        },
                        get backgroundLoading() {
                            return !(c.iOS || a.safari || c.tizen)
                        }
                    }
            },
            1643: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Kb: function() {
                        return r
                    },
                    bc: function() {
                        return i
                    },
                    xQ: function() {
                        return o
                    },
                    _5: function() {
                        return u
                    },
                    r0: function() {
                        return a
                    },
                    Vy: function() {
                        return c
                    },
                    ik: function() {
                        return s
                    },
                    nQ: function() {
                        return l
                    },
                    Wp: function() {
                        return f
                    },
                    nv: function() {
                        return d
                    },
                    Sv: function() {
                        return p
                    },
                    ot: function() {
                        return h
                    },
                    P: function() {
                        return v
                    },
                    B1: function() {
                        return g
                    },
                    tP: function() {
                        return m
                    },
                    K5: function() {
                        return y
                    },
                    U3: function() {
                        return w
                    },
                    pn: function() {
                        return b
                    },
                    cM: function() {
                        return k
                    },
                    Rt: function() {
                        return C
                    },
                    $_: function() {
                        return P
                    },
                    Ax: function() {
                        return j
                    },
                    WE: function() {
                        return x
                    },
                    k3: function() {
                        return S
                    },
                    uL: function() {
                        return T
                    },
                    wh: function() {
                        return E
                    },
                    Ms: function() {
                        return O
                    },
                    Rc: function() {
                        return A
                    },
                    NZ: function() {
                        return Z
                    },
                    $j: function() {
                        return _
                    },
                    s$: function() {
                        return M
                    },
                    Jl: function() {
                        return F
                    },
                    cy: function() {
                        return I
                    },
                    V$: function() {
                        return L
                    },
                    pi: function() {
                        return N
                    },
                    Ew: function() {
                        return B
                    },
                    FU: function() {
                        return D
                    },
                    cq: function() {
                        return R
                    },
                    Je: function() {
                        return q
                    },
                    aQ: function() {
                        return z
                    },
                    HH: function() {
                        return U
                    },
                    uc: function() {
                        return H
                    },
                    uT: function() {
                        return V
                    },
                    R2: function() {
                        return G
                    },
                    TJ: function() {
                        return W
                    },
                    oZ: function() {
                        return K
                    },
                    yH: function() {
                        return Q
                    },
                    gy: function() {
                        return X
                    },
                    O1: function() {
                        return J
                    },
                    rx: function() {
                        return $
                    },
                    UZ: function() {
                        return Y
                    },
                    aM: function() {
                        return tt
                    },
                    ug: function() {
                        return et
                    },
                    Hy: function() {
                        return nt
                    },
                    UW: function() {
                        return rt
                    },
                    sF: function() {
                        return it
                    },
                    gO: function() {
                        return ot
                    },
                    Ow: function() {
                        return ut
                    },
                    j0: function() {
                        return at
                    },
                    _B: function() {
                        return ct
                    },
                    jt: function() {
                        return st
                    },
                    UF: function() {
                        return lt
                    },
                    QF: function() {
                        return ft
                    },
                    Ib: function() {
                        return dt
                    },
                    SL: function() {
                        return pt
                    },
                    Z_: function() {
                        return ht
                    },
                    Gj: function() {
                        return vt
                    },
                    xf: function() {
                        return gt
                    },
                    l5: function() {
                        return mt
                    },
                    Bs: function() {
                        return yt
                    },
                    h7: function() {
                        return wt
                    },
                    qG: function() {
                        return bt
                    },
                    RF: function() {
                        return kt
                    }
                });
                var r = "buffering",
                    i = "idle",
                    o = "complete",
                    u = "paused",
                    a = "playing",
                    c = "error",
                    s = "loading",
                    l = "stalled",
                    f = "drag",
                    d = "dragStart",
                    p = "dragEnd",
                    h = "click",
                    v = "doubleClick",
                    g = "over",
                    m = "move",
                    y = "enter",
                    w = "out",
                    b = c,
                    k = "warning",
                    C = "adClick",
                    P = "mediaLoaded",
                    j = "adPause",
                    x = "adPlay",
                    S = "adSkipped",
                    T = "adTime",
                    E = "autostartNotAllowed",
                    O = o,
                    A = "ready",
                    Z = "seek",
                    _ = "beforePlay",
                    M = "beforeComplete",
                    F = "bufferFull",
                    I = "displayClick",
                    L = "playlistComplete",
                    N = "cast",
                    B = "mediaError",
                    D = "firstFrame",
                    R = "playAttempt",
                    q = "playAttemptFailed",
                    z = "seeked",
                    U = "setupError",
                    H = "state",
                    V = "bufferChange",
                    G = "time",
                    W = "ratechange",
                    K = "mediaType",
                    Q = "volume",
                    X = "mute",
                    J = "metadataCueParsed",
                    $ = "meta",
                    Y = "levels",
                    tt = "levelsChanged",
                    et = "visualQuality",
                    nt = "controls",
                    rt = "fullscreen",
                    it = "resize",
                    ot = "playlistItem",
                    ut = "playlist",
                    at = "audioTracks",
                    ct = "audioTrackChanged",
                    st = "subtitlesTracks",
                    lt = "subtitlesTrackChanged",
                    ft = "playbackRateChanged",
                    dt = "logoClick",
                    pt = "captionsList",
                    ht = "captionsChanged",
                    vt = "providerFirstFrame",
                    gt = "userAction",
                    mt = "instreamClick",
                    yt = "breakpoint",
                    wt = "fullscreenchange",
                    bt = "bandwidthEstimate",
                    kt = "float"
            },
            9918: function(t, e, n) {
                "use strict";
                n.d(e, {
                    bv: function() {
                        return r
                    },
                    L4: function() {
                        return i
                    },
                    ni: function() {
                        return o
                    },
                    OG: function() {
                        return u
                    }
                });
                var r = {
                        audioMode: !1,
                        itemMeta: {},
                        playbackRate: 1,
                        playRejected: !1,
                        state: n(1643).bc,
                        itemReady: !1,
                        controlsEnabled: !1
                    },
                    i = {
                        position: 0,
                        duration: 0,
                        buffer: 0,
                        currentTime: 0
                    },
                    o = 120,
                    u = 25
            },
            7753: function(t, e, n) {
                "use strict";

                function r(t, e) {
                    return r = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    }, r(t, e)
                }
                n.d(e, {
                    Z: function() {
                        return i
                    }
                });
                var i = function(t) {
                    var e, n;

                    function i() {
                        var e;
                        return (e = t.call(this) || this).attributes = Object.create(null), e
                    }
                    n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, r(e, n);
                    var o = i.prototype;
                    return o.addAttributes = function(t) {
                        var e = this;
                        Object.keys(t).forEach((function(n) {
                            e.add(n, t[n])
                        }))
                    }, o.add = function(t, e) {
                        var n = this;
                        Object.defineProperty(this, t, {
                            get: function() {
                                return n.attributes[t]
                            },
                            set: function(e) {
                                n.set(t, e)
                            },
                            enumerable: !1
                        }), this.attributes[t] = e
                    }, o.get = function(t) {
                        return this.attributes[t]
                    }, o.set = function(t, e) {
                        if (this.attributes[t] !== e) {
                            var n = this.attributes[t];
                            this.attributes[t] = e, this.trigger("change:" + t, this, e, n)
                        }
                    }, o.clone = function() {
                        var t = {},
                            e = this.attributes;
                        if (e)
                            for (var n in e) t[n] = e[n];
                        return t
                    }, o.change = function(t, e, n) {
                        this.on("change:" + t, e, n);
                        var r = this.get(t);
                        return e.call(n, this, r, r), this
                    }, i
                }(n(328).ZP)
            },
            7941: function(t, e, n) {
                "use strict";
                n.d(e, {
                    r1: function() {
                        return i
                    },
                    dZ: function() {
                        return o
                    },
                    qk: function() {
                        return u
                    },
                    my: function() {
                        return a
                    }
                });
                var r = n(2957);

                function i(t) {
                    var e = "";
                    return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)), e
                }

                function o(t) {
                    var e = "";
                    return t && (t.textContent ? e = (0, r.fy)(t.textContent) : t.text && (e = (0, r.fy)(t.text))), e
                }

                function u(t, e) {
                    return t.childNodes[e]
                }

                function a(t) {
                    return t.childNodes ? t.childNodes.length : 0
                }
            },
            6769: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return f
                    }
                });
                var r = n(7941),
                    i = n(2957);

                function o(t) {
                    var e = {
                        zh: "Chinese",
                        nl: "Dutch",
                        en: "English",
                        fr: "French",
                        de: "German",
                        it: "Italian",
                        ja: "Japanese",
                        pt: "Portuguese",
                        ru: "Russian",
                        es: "Spanish"
                    };
                    return e[t] ? e[t] : t
                }

                function u(t) {
                    for (var e = [], n = 0; n < (0, r.my)(t); n++) {
                        var i = t.childNodes[n];
                        "jwplayer" === i.prefix && "mediatypes" === (0, r.r1)(i).toLowerCase() && e.push((0, r.dZ)(i))
                    }
                    return e
                }
                var a = function t(e, n) {
                        for (var a = [], c = 0; c < (0, r.my)(e); c++) {
                            var s = e.childNodes[c];
                            if ("media" === s.prefix) {
                                if (!(0, r.r1)(s)) continue;
                                switch ((0, r.r1)(s).toLowerCase()) {
                                    case "content":
                                        if ((0, i.Dc)(s, "duration") && (n.duration = (0, i.m9)((0, i.Dc)(s, "duration"))), (0, i.Dc)(s, "url")) {
                                            n.sources || (n.sources = []);
                                            var l = {
                                                    file: (0, i.Dc)(s, "url"),
                                                    type: (0, i.Dc)(s, "type"),
                                                    width: (0, i.Dc)(s, "width"),
                                                    label: (0, i.Dc)(s, "label")
                                                },
                                                f = u(s);
                                            f.length && (l.mediaTypes = f), n.sources.push(l)
                                        }(0, r.my)(s) > 0 && (n = t(s, n));
                                        break;
                                    case "title":
                                        n.title = (0, r.dZ)(s);
                                        break;
                                    case "description":
                                        n.description = (0, r.dZ)(s);
                                        break;
                                    case "guid":
                                        n.mediaid = (0, r.dZ)(s);
                                        break;
                                    case "thumbnail":
                                        n.image || (n.image = (0, i.Dc)(s, "url"));
                                        break;
                                    case "group":
                                        t(s, n);
                                        break;
                                    case "subtitle":
                                        var d = {
                                            file: (0, i.Dc)(s, "url"),
                                            kind: "captions"
                                        };
                                        (0, i.Dc)(s, "lang").length > 0 && (d.label = o((0, i.Dc)(s, "lang"))), a.push(d)
                                }
                            }
                        }
                        n.tracks || (n.tracks = []);
                        for (var p = 0; p < a.length; p++) n.tracks.push(a[p]);
                        return n
                    },
                    c = n(9888),
                    s = function(t, e) {
                        for (var n = "default", o = "label", u = "file", a = [], s = [], l = e, f = 0; f < t.childNodes.length; f++) {
                            var d = t.childNodes[f];
                            if ("jwplayer" === d.prefix) {
                                var p = (0, r.r1)(d);
                                "source" === p ? (delete e.sources, a.push({
                                    file: (0, i.Dc)(d, u),
                                    default: (0, i.Dc)(d, n),
                                    label: (0, i.Dc)(d, o),
                                    type: (0, i.Dc)(d, "type")
                                })) : "track" === p ? (delete e.tracks, s.push({
                                    file: (0, i.Dc)(d, u),
                                    default: (0, i.Dc)(d, n),
                                    kind: (0, i.Dc)(d, "kind"),
                                    label: (0, i.Dc)(d, o)
                                })) : (e[p] = (0, c.serialize)((0, r.dZ)(d)), "file" === p && e.sources && delete e.sources)
                            }
                            e.file || (e.file = e.link)
                        }
                        if (a.length) {
                            e.sources = [];
                            for (var h = 0; h < a.length; h++) {
                                var v = a[h];
                                v.file.length > 0 && (v[n] = "true" === a[h][n], v.label || delete v.label, l.sources.push(v))
                            }
                        }
                        if (s.length) {
                            e.tracks = [];
                            for (var g = 0; g < s.length; g++) {
                                var m = s[g];
                                m.file && m.file.length > 0 && (m[n] = "true" === s[g][n], m.kind = s[g].kind.length ? s[g].kind : "captions", m.label || delete m.label, l.tracks.push(m))
                            }
                        }
                        return l
                    },
                    l = n(393);

                function f(t) {
                    var e = [];
                    e.feedData = {};
                    for (var n = 0; n < (0, r.my)(t); n++) {
                        var i = (0, r.qk)(t, n);
                        if ("channel" === (0, r.r1)(i).toLowerCase())
                            for (var o = 0; o < (0, r.my)(i); o++) {
                                var u = (0, r.qk)(i, o),
                                    a = (0, r.r1)(u).toLowerCase();
                                "item" === a ? e.push(d(u)) : a && (e.feedData[a] = (0, r.dZ)(u))
                            }
                    }
                    return e
                }

                function d(t) {
                    for (var e = {}, n = 0; n < t.childNodes.length; n++) {
                        var o = t.childNodes[n],
                            u = (0, r.r1)(o);
                        if (u) switch (u.toLowerCase()) {
                            case "enclosure":
                                e.file = (0, i.Dc)(o, "url");
                                break;
                            case "title":
                                e.title = (0, r.dZ)(o);
                                break;
                            case "guid":
                                e.mediaid = (0, r.dZ)(o);
                                break;
                            case "pubdate":
                                e.date = (0, r.dZ)(o);
                                break;
                            case "description":
                                e.description = (0, r.dZ)(o);
                                break;
                            case "link":
                                e.link = (0, r.dZ)(o);
                                break;
                            case "category":
                                e.tags ? e.tags += (0, r.dZ)(o) : e.tags = (0, r.dZ)(o)
                        }
                    }
                    return new l.Z(s(t, a(t, e)))
                }
            },
            393: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return s
                    }
                });
                var r = n(6042),
                    i = n(6053),
                    o = ["captions", "metadata", "thumbnails", "chapters"];
                var u = function(t) {
                        if (t && t.file) {
                            var e, n = (0, r.l7)({}, {
                                kind: "captions",
                                default: !1
                            }, t);
                            return n.kind = (e = n.kind, -1 !== o.indexOf(e) ? n.kind : "captions"), n.default = !!n.default, n
                        }
                    },
                    a = n(9918),
                    c = Array.isArray,
                    s = function(t) {
                        c((t = t || {}).tracks) || delete t.tracks;
                        var e = (0, r.l7)({}, {
                            sources: [],
                            tracks: [],
                            minDvrWindow: a.ni
                        }, t);
                        e.sources !== Object(e.sources) || c(e.sources) || (e.sources = [(0, i.Z)(e.sources)]), c(e.sources) && 0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [(0, i.Z)(t)]);
                        for (var n = 0; n < e.sources.length; n++) {
                            var o = e.sources[n];
                            if (o) {
                                var s = o.default;
                                o.default = !!s && "true" === s.toString(), e.sources[n].label || (e.sources[n].label = n.toString()), e.sources[n] = (0, i.Z)(e.sources[n])
                            }
                        }
                        return e.sources = e.sources.filter((function(t) {
                            return !!t
                        })), c(e.tracks) || (e.tracks = []), c(e.captions) && (e.tracks = e.tracks.concat(e.captions), delete e.captions), e.tracks = e.tracks.map(u).filter((function(t) {
                            return !!t
                        })), e
                    }
            },
            7263: function(t, e, n) {
                "use strict";
                var r = n(6042),
                    i = n(1643),
                    o = n(7941),
                    u = n(6769),
                    a = n(6886),
                    c = n(328),
                    s = n(4446);
                e.Z = function() {
                    var t = (0, r.l7)(this, c.ZP);

                    function e(e) {
                        try {
                            var a, c = e.responseXML ? e.responseXML.childNodes : null,
                                l = null;
                            if (c) {
                                for (var f = 0; f < c.length && 8 === (l = c[f]).nodeType; f++);
                                if (l && "xml" === (0, o.r1)(l) && (l = l.nextSibling), l && "rss" === (0, o.r1)(l)) {
                                    var d = (0, u.Z)(l);
                                    a = (0, r.l7)({
                                        playlist: d
                                    }, d.feedData)
                                }
                            }
                            if (!a) try {
                                var p = JSON.parse(e.responseText);
                                if (Array.isArray(p)) a = {
                                    playlist: p
                                };
                                else {
                                    if (!Array.isArray(p.playlist)) throw Error("Playlist is not an array");
                                    a = p
                                }
                            } catch (t) {
                                throw new s.rG(s.ul, 621, t)
                            }
                            t.trigger(i.Ow, a)
                        } catch (t) {
                            n(t)
                        }
                    }

                    function n(e) {
                        e instanceof s.rG && !e.code && (e = new s.rG(s.ul, 0)), t.trigger(i.pn, e)
                    }
                    this.load = function(t) {
                        (0, a.h)(t, e, (function(t, e, r, i) {
                            n(i)
                        }))
                    }, this.destroy = function() {
                        this.off()
                    }
                }
            },
            8320: function(t, e, n) {
                "use strict";
                n.d(e, {
                    ZP: function() {
                        return w
                    },
                    s7: function() {
                        return l
                    },
                    T5: function() {
                        return h
                    },
                    YF: function() {
                        return d
                    },
                    _: function() {
                        return f
                    },
                    bx: function() {
                        return p
                    }
                });
                var r = n(6042),
                    i = {
                        none: !0,
                        metadata: !0,
                        auto: !0
                    };

                function o(t, e) {
                    return i[t] ? t : i[e] ? e : "metadata"
                }
                var u = n(393),
                    a = n(6053),
                    c = n(2303),
                    s = n(4446);

                function l(t, e, n) {
                    var i = (0, r.l7)({}, n);
                    return delete i.playlist, t.map((function(t) {
                        return d(e, t, i)
                    })).filter((function(t) {
                        return !!t
                    }))
                }

                function f(t) {
                    if (!Array.isArray(t) || 0 === t.length) throw new s.rG(s.ul, 630)
                }

                function d(t, e, n) {
                    var i = t.getProviders(),
                        u = t.get("preload"),
                        a = (0, r.l7)({}, e);
                    if (a.preload = o(e.preload, u), a.allSources = v(a, t), a.sources = g(a.allSources, i), a.sources.length) return a.file = a.sources[0].file, a.feedData = n,
                        function(t) {
                            var e = t.sources[0].liveSyncDuration;
                            e && (t.liveSyncDuration = t.dvrSeekLimit = e);
                            return t
                        }(a)
                }

                function p(t, e) {
                    var n = (parseInt(t, 10) || 0) % e;
                    return n < 0 && (n += e), n
                }
                var h = function(t, e) {
                    return g(v(t, e), e.getProviders())
                };

                function v(t, e) {
                    var n = e.attributes,
                        r = t.sources,
                        i = t.allSources,
                        u = t.preload,
                        c = t.drm,
                        s = m(t.withCredentials, n.withCredentials);
                    return (i || r).map((function(e) {
                        if (e !== Object(e)) return null;
                        y(e, n, "androidhls"), y(e, n, "hlsjsdefault"), y(e, n, "safarihlsjs"),
                            function(t, e, n) {
                                if (t.liveSyncDuration) return;
                                var r = e.liveSyncDuration ? e : n;
                                y(t, r, "liveSyncDuration")
                            }(e, t, n), y(e, n, "_hlsjsProgressive"), e.preload = o(e.preload, u);
                        var r = e.drm || c || n.drm;
                        r && (e.drm = r);
                        var i = m(e.withCredentials, s);
                        return void 0 !== i && (e.withCredentials = i), (0, a.Z)(e)
                    })).filter((function(t) {
                        return !!t
                    }))
                }

                function g(t, e) {
                    e && e.choose || (e = new c.Z);
                    var n = function(t, e) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n],
                                i = e.choose(r).providerToCheck;
                            if (i) return {
                                type: r.type,
                                provider: i
                            }
                        }
                        return null
                    }(t, e);
                    if (!n) return [];
                    var r = n.provider,
                        i = n.type;
                    return t.filter((function(t) {
                        return t.type === i && e.providerSupports(r, t)
                    }))
                }

                function m(t, e) {
                    return void 0 === t ? e : t
                }

                function y(t, e, n) {
                    n in e && (t[n] = e[n])
                }
                var w = function(t) {
                    return (Array.isArray(t) ? t : [t]).map(u.Z)
                }
            },
            6053: function(t, e, n) {
                "use strict";
                var r = n(6042),
                    i = n(7034),
                    o = n(2957);
                e.Z = function(t) {
                    if (t && t.file) {
                        var e = (0, r.l7)({}, {
                            default: !1,
                            type: ""
                        }, t);
                        e.file = (0, o.fy)("" + e.file);
                        var n = /^[^/]+\/(?:x-)?([^/]+)$/,
                            u = e.type;
                        if (n.test(u) && (e.mimeType = u, e.type = u.replace(n, "$1")), (0, i.isYouTube)(e.file) ? e.type = "youtube" : (0, i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type = (0, o.AO)(e.file)), e.type) {
                            switch (e.type) {
                                case "m3u8":
                                case "vnd.apple.mpegurl":
                                    e.type = "hls";
                                    break;
                                case "dash+xml":
                                    e.type = "dash";
                                    break;
                                case "m4a":
                                    e.type = "aac";
                                    break;
                                case "smil":
                                    e.type = "rtmp"
                            }
                            return Object.keys(e).forEach((function(t) {
                                "" === e[t] && delete e[t]
                            })), e
                        }
                    }
                }
            },
            4101: function(t, e, n) {
                "use strict";
                var r = n(6042),
                    i = n(676),
                    o = n(9888),
                    u = n(2957),
                    a = n(4446),
                    c = n(3487),
                    s = function(t) {
                        if ("string" == typeof t) {
                            var e = (t = t.split("?")[0]).indexOf("://");
                            if (e > 0) return 0;
                            var n = t.indexOf("/"),
                                r = (0, u.AO)(t);
                            return !(e < 0 && n < 0) || r && isNaN(r) ? 1 : 2
                        }
                    };
                var l = function(t) {
                    this.url = t, this.promise_ = null
                };
                Object.defineProperties(l.prototype, {
                    promise: {
                        get: function() {
                            return this.load()
                        },
                        set: function() {}
                    }
                }), (0, r.l7)(l.prototype, {
                    load: function() {
                        var t = this,
                            e = this.promise_;
                        if (!e) {
                            if (2 === s(this.url)) return Promise.resolve(this);
                            var n = new i.ZP(function(t) {
                                switch (s(t)) {
                                    case 0:
                                        return t;
                                    case 1:
                                        return (0, o.getAbsolutePath)(t, window.location.href)
                                }
                            }(this.url));
                            this.loader = n, e = n.load().then((function() {
                                return t
                            })), this.promise_ = e
                        }
                        return e
                    },
                    registerPlugin: function(t, e, n) {
                        this.name = t, this.target = e, this.js = n
                    },
                    getNewInstance: function(t, e, n) {
                        var r = this.js;
                        if ("function" != typeof r) throw new a.rG(null, (0, c.bX)(this.url) + 100);
                        var i = new r(t, e, n);
                        return i.addToPlayer = function() {
                            var t = this.getContainer().querySelector(".jw-overlays");
                            t && (n.left = t.style.left, n.top = t.style.top, t.appendChild(n))
                        }, i.resizeHandler = function() {
                            var t = this.getContainer().querySelector(".jw-overlays");
                            t && i.resize(t.clientWidth, t.clientHeight)
                        }, i
                    }
                }), e.Z = l
            },
            1241: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return f
                    },
                    f: function() {
                        return l
                    }
                });
                var r = n(4446),
                    i = n(3487),
                    o = function() {
                        this.load = function(t, e, n, o) {
                            return n && "object" == typeof n ? Promise.all(Object.keys(n).filter((function(t) {
                                return t
                            })).map((function(u) {
                                var a = n[u];
                                return e.setupPlugin(u).then((function(e) {
                                    if (!o.attributes._destroyed) return (0, i.MK)(e, a, t)
                                })).catch((function(t) {
                                    return e.removePlugin(u), t.code ? t : new r.rG(null, (0, i.bX)(u), t)
                                }))
                            }))) : Promise.resolve()
                        }
                    },
                    u = n(4101),
                    a = n(5499),
                    c = {},
                    s = new(function() {
                        function t() {}
                        var e = t.prototype;
                        return e.setupPlugin = function(t) {
                            var e = this.getPlugin(t);
                            return e ? (e.url !== t && (0, a.c)('JW Plugin "' + (0, i.Nq)(t) + '" already loaded from "' + e.url + '". Ignoring "' + t + '."'), e.promise) : this.addPlugin(t).load()
                        }, e.addPlugin = function(t) {
                            var e = (0, i.Nq)(t),
                                n = c[e];
                            return n || (n = new u.Z(t), c[e] = n), n
                        }, e.getPlugin = function(t) {
                            return c[(0, i.Nq)(t)]
                        }, e.removePlugin = function(t) {
                            delete c[(0, i.Nq)(t)]
                        }, e.getPlugins = function() {
                            return c
                        }, t
                    }()),
                    l = function(t, e, n) {
                        var r = s.addPlugin(t);
                        r.js || r.registerPlugin(t, e, n)
                    };

                function f(t, e) {
                    var n = t.get("plugins");
                    return window.jwplayerPluginJsonp = l, (t.pluginLoader = t.pluginLoader || new o).load(e, s, n, t).then((function(e) {
                        if (!t.attributes._destroyed) return delete window.jwplayerPluginJsonp, e
                    }))
                }
            },
            7164: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Nq: function() {
                        return i
                    },
                    bX: function() {
                        return o
                    },
                    MK: function() {
                        return u
                    }
                });
                var r = n(6042),
                    i = function(t) {
                        return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
                    };

                function o(t) {
                    return 305e3
                }

                function u(t, e, n) {
                    var i = t.name,
                        o = (0, r.l7)({}, e),
                        u = document.createElement("div");
                    u.id = n.id + "_" + i, u.className = "jw-plugin jw-reset";
                    var a = t.getNewInstance(n, o, u);
                    return n.addPlugin(i, a), a
                }
            },
            7683: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return i
                    },
                    V: function() {
                        return u
                    }
                });
                var r = n(658);

                function i() {
                    for (var t = r.Jx, e = [], n = [], i = 0; i < t; i++) {
                        var a = u();
                        e.push(a), n.push(a), o(a)
                    }
                    var c = n.shift(),
                        s = n.shift(),
                        l = !1;
                    return {
                        primed: function() {
                            return l
                        },
                        prime: function() {
                            e.forEach(o), l = !0
                        },
                        played: function() {
                            l = !0
                        },
                        getPrimedElement: function() {
                            return n.shift() || null
                        },
                        getAdElement: function() {
                            return c
                        },
                        getTestElement: function() {
                            return s
                        },
                        clean: function(t) {
                            if (t.src) {
                                t.removeAttribute("src");
                                try {
                                    t.load()
                                } catch (t) {}
                            }
                        },
                        recycle: function(t) {
                            t && !n.some((function(e) {
                                return e === t
                            })) && (this.clean(t), n.push(t))
                        },
                        syncVolume: function(t) {
                            var n = Math.min(Math.max(0, t / 100), 1);
                            e.forEach((function(t) {
                                t.volume = n
                            }))
                        },
                        syncMute: function(t) {
                            e.forEach((function(e) {
                                e.muted = t
                            }))
                        }
                    }
                }

                function o(t) {
                    t.src || t.load()
                }

                function u(t) {
                    var e = document.createElement("video");
                    return e.className = "jw-video jw-reset", e.setAttribute("tabindex", "-1"), e.setAttribute("disableRemotePlayback", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("playsinline", ""), t && Object.keys(t).forEach((function(n) {
                        e.setAttribute(n, t[n])
                    })), e
                }
            },
            658: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Jx: function() {
                        return r
                    },
                    l_: function() {
                        return i
                    },
                    HB: function() {
                        return o
                    }
                });
                var r = 4,
                    i = 5,
                    o = 1
            },
            4609: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return i
                    }
                });
                var r = n(6042);

                function i(t, e) {
                    return (0, r.l7)({}, e, {
                        prime: function() {
                            t.src || t.load()
                        },
                        getPrimedElement: function() {
                            return t
                        },
                        clean: function() {
                            e.clean(t)
                        },
                        recycle: function() {
                            e.clean(t)
                        }
                    })
                }
            },
            6528: function(t, e, n) {
                "use strict";
                var r = n(1643),
                    i = function() {},
                    o = function() {
                        return !1
                    },
                    u = {
                        name: "default"
                    },
                    a = {
                        supports: o,
                        play: i,
                        pause: i,
                        preload: i,
                        load: i,
                        stop: i,
                        volume: i,
                        mute: i,
                        seek: i,
                        resize: i,
                        remove: i,
                        destroy: i,
                        setVisibility: i,
                        setFullscreen: i,
                        getFullscreen: o,
                        supportsFullscreen: o,
                        getContainer: i,
                        setContainer: i,
                        getName: function() {
                            return u
                        },
                        getQualityLevels: i,
                        getCurrentQuality: i,
                        setCurrentQuality: i,
                        getAudioTracks: i,
                        getCurrentAudioTrack: i,
                        setCurrentAudioTrack: i,
                        getSeekRange: function() {
                            return {
                                start: 0,
                                end: this.getDuration()
                            }
                        },
                        setPlaybackRate: i,
                        getPlaybackRate: function() {
                            return 1
                        },
                        getBandwidthEstimate: function() {
                            return null
                        },
                        getLiveLatency: function() {
                            return null
                        },
                        attachMedia: i,
                        detachMedia: i,
                        init: i,
                        setState: function(t) {
                            this.state = t, this.trigger(r.uc, {
                                newstate: t
                            })
                        },
                        sendMediaType: function(t) {
                            var e = t[0],
                                n = e.type,
                                i = e.mimeType,
                                o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
                            this.trigger(r.oZ, {
                                mediaType: o ? "audio" : "video"
                            })
                        },
                        getDuration: function() {
                            return 0
                        },
                        trigger: i
                    };
                e.Z = a
            },
            1628: function(t, e, n) {
                "use strict";
                n.d(e, {
                    V: function() {
                        return i
                    }
                });
                var r = n(8348);

                function i(t) {
                    return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version || "0") >= 4.4) : null
                }
            },
            12: function(t, e, n) {
                "use strict";
                n.d(e, {
                    U: function() {
                        return r
                    }
                });
                var r = {}
            },
            670: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return a
                    }
                });
                var r = n(12),
                    i = n(2963),
                    o = n(6528),
                    u = n(6042);
                n(328);

                function a(t) {
                    var e = t.getName().name;
                    if (!r.U[e]) {
                        if (!(0, u.sE)(i.B, (0, u.wB)({
                                name: e
                            }))) {
                            if (!(0, u.mf)(t.supports)) throw new Error("Tried to register a provider with an invalid object");
                            i.B.unshift({
                                name: e,
                                supports: t.supports
                            })
                        }
                        0, (0, u.ce)(t.prototype, o.Z), r.U[e] = t
                    }
                }
            },
            6593: function(t, e, n) {
                "use strict";
                n.d(e, {
                    B: function() {
                        return a
                    },
                    H: function() {
                        return c
                    }
                });
                var r = n(1628),
                    i = n(7034),
                    o = n(9025),
                    u = {
                        aac: "audio/mp4",
                        mp4: "video/mp4",
                        f4v: "video/mp4",
                        m4v: "video/mp4",
                        mov: "video/mp4",
                        mp3: "audio/mpeg",
                        mpeg: "audio/mpeg",
                        ogv: "video/ogg",
                        ogg: "video/ogg",
                        oga: "video/ogg",
                        vorbis: "video/ogg",
                        webm: "video/webm",
                        f4a: "video/aac",
                        m3u8: "application/vnd.apple.mpegurl",
                        m3u: "application/vnd.apple.mpegurl",
                        hls: "application/vnd.apple.mpegurl"
                    },
                    a = [{
                        name: "html5",
                        supports: c
                    }];

                function c(t) {
                    if (!o.Z || !o.Z.canPlayType) return !1;
                    if (!1 === (0, r.V)(t)) return !1;
                    var e = t.file,
                        n = t.type;
                    if ((0, i.isRtmp)(e, n)) return !1;
                    var a = t.mimeType || u[n];
                    if (!a) return !1;
                    var c = t.mediaTypes;
                    return c && c.length && (a = [a].concat(c.slice()).join("; ")), !!o.Z.canPlayType(a)
                }
            },
            6875: function(t, e) {
                "use strict";
                e.Z = "hidden" in document ? function() {
                    return !document.hidden
                } : "webkitHidden" in document ? function() {
                    return !document.webkitHidden
                } : function() {
                    return !0
                }
            },
            6886: function(t, e, n) {
                "use strict";
                n.d(e, {
                    h: function() {
                        return c
                    },
                    E: function() {
                        return s
                    }
                });
                var r = n(6042),
                    i = n(9888),
                    o = n(7034),
                    u = n(4446),
                    a = function() {};

                function c(t, e, n, d) {
                    var p;
                    t === Object(t) && (t = (d = t).url);
                    var h = (0, r.l7)({
                            xhr: null,
                            url: t,
                            withCredentials: !1,
                            retryWithoutCredentials: !1,
                            timeout: 6e4,
                            timeoutId: -1,
                            oncomplete: e || a,
                            onerror: n || a,
                            mimeType: d && !d.responseType ? "text/xml" : "",
                            requireValidXML: !1,
                            responseType: d && d.plainText ? "text" : "",
                            useDomParser: !1,
                            requestFilter: null
                        }, d),
                        v = function(t, e) {
                            return function(t, n) {
                                var i = t.currentTarget || e.xhr;
                                if (clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials) return s(i), void c((0, r.l7)({}, e, {
                                    xhr: null,
                                    withCredentials: !1,
                                    retryWithoutCredentials: !1
                                }));
                                !n && i.status >= 400 && i.status < 600 && (n = i.status), l(e, n ? u.ul : u.ud, n || 6, t)
                            }
                        }(0, h);
                    if ("XMLHttpRequest" in window) {
                        if (p = h.xhr = h.xhr || new window.XMLHttpRequest, "function" == typeof h.requestFilter) {
                            var g;
                            try {
                                g = h.requestFilter({
                                    url: t,
                                    xhr: p
                                })
                            } catch (t) {
                                return v(t, 5), p
                            }
                            g && "open" in g && "send" in g && (p = h.xhr = g)
                        }
                        p.onreadystatechange = function(t) {
                            return function(e) {
                                var n = e.currentTarget || t.xhr;
                                if (4 === n.readyState) {
                                    clearTimeout(t.timeoutId);
                                    var a = n.status;
                                    if (a >= 400) return void l(t, u.ul, a < 600 ? a : 6);
                                    if (200 === a) return function(t) {
                                        return function(e) {
                                            var n = e.currentTarget || t.xhr;
                                            if (clearTimeout(t.timeoutId), t.responseType) {
                                                if ("json" === t.responseType) return function(t, e) {
                                                    if (!t.response || "string" == typeof t.response && '"' !== t.responseText.substr(1)) try {
                                                        t = (0, r.l7)({}, t, {
                                                            response: JSON.parse(t.responseText)
                                                        })
                                                    } catch (t) {
                                                        return void l(e, u.ul, 611, t)
                                                    }
                                                    return e.oncomplete(t)
                                                }(n, t)
                                            } else {
                                                var o, a = n.responseXML;
                                                if (a) try {
                                                    o = a.firstChild
                                                } catch (t) {}
                                                if (a && o) return f(n, a, t);
                                                if (t.useDomParser && n.responseText && !a && (a = (0, i.parseXML)(n.responseText)) && a.firstChild) return f(n, a, t);
                                                if (t.requireValidXML) return void l(t, u.ul, 602)
                                            }
                                            t.oncomplete(n)
                                        }
                                    }(t)(e);
                                    0 === a && (0, o.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(t.url) && l(t, u.ul, 7)
                                }
                            }
                        }(h), p.onerror = v, "overrideMimeType" in p ? h.mimeType && p.overrideMimeType(h.mimeType) : h.useDomParser = !0;
                        try {
                            t = t.replace(/#.*$/, ""), p.open("GET", t, !0)
                        } catch (t) {
                            return v(t, 3), p
                        }
                        if (h.responseType) try {
                            p.responseType = h.responseType
                        } catch (t) {}
                        h.timeout && (h.timeoutId = setTimeout((function() {
                            s(p), l(h, u.ud, 1)
                        }), h.timeout), p.onabort = function() {
                            clearTimeout(h.timeoutId)
                        });
                        try {
                            h.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
                        } catch (t) {
                            v(t, 4)
                        }
                        return p
                    }
                    l(h, u.ud, 2)
                }

                function s(t) {
                    t.onload = null, t.onprogress = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()
                }

                function l(t, e, n, r) {
                    t.onerror(e, t.url, t.xhr, new u.rG(e, n, r))
                }

                function f(t, e, n) {
                    var i = e.documentElement;
                    if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return t.responseXML || (t = (0, r.l7)({}, t, {
                        responseXML: e
                    })), n.oncomplete(t);
                    l(n, u.ul, 601)
                }
            },
            328: function(t, e, n) {
                "use strict";
                n.d(e, {
                    ZP: function() {
                        return r
                    },
                    on: function() {
                        return i
                    },
                    IH: function() {
                        return o
                    },
                    S1: function() {
                        return u
                    },
                    X$: function() {
                        return a
                    },
                    wj: function() {
                        return c
                    }
                });
                var r = function() {
                        function t() {}
                        var e = t.prototype;
                        return e.on = function(t, e, n) {
                            if (!l(this, "on", t, [e, n]) || !e) return this;
                            var r = this._events || (this._events = {});
                            return (r[t] || (r[t] = [])).push({
                                callback: e,
                                context: n
                            }), this
                        }, e.once = function(t, e, n) {
                            if (!l(this, "once", t, [e, n]) || !e) return this;
                            var r = 0,
                                i = this,
                                o = function n() {
                                    r++ || (i.off(t, n), e.apply(this, arguments))
                                };
                            return o._callback = e, this.on(t, o, n)
                        }, e.off = function(t, e, n) {
                            if (!this._events || !l(this, "off", t, [e, n])) return this;
                            if (!t && !e && !n) return delete this._events, this;
                            for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
                                t = r[i];
                                var u = this._events[t];
                                if (u) {
                                    var a = this._events[t] = [];
                                    if (e || n)
                                        for (var c = 0, s = u.length; c < s; c++) {
                                            var f = u[c];
                                            (e && e !== f.callback && e !== f.callback._callback || n && n !== f.context) && a.push(f)
                                        }
                                    a.length || delete this._events[t]
                                }
                            }
                            return this
                        }, e.trigger = function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            if (!this._events) return this;
                            if (!l(this, "trigger", t, n)) return this;
                            var i = this._events[t],
                                o = this._events.all;
                            return i && f(i, n, this), o && f(o, arguments, this), this
                        }, e.triggerSafe = function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            if (!this._events) return this;
                            if (!l(this, "trigger", t, n)) return this;
                            var i = this._events[t],
                                o = this._events.all;
                            return i && f(i, n, this, t), o && f(o, arguments, this, t), this
                        }, t
                    }(),
                    i = r.prototype.on,
                    o = r.prototype.once,
                    u = r.prototype.off,
                    a = r.prototype.trigger,
                    c = r.prototype.triggerSafe;
                r.on = i, r.once = o, r.off = u, r.trigger = a;
                var s = /\s+/;

                function l(t, e, n, r) {
                    if (!n) return !0;
                    if ("object" == typeof n) {
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t[e].apply(t, [i, n[i]].concat(r));
                        return !1
                    }
                    if (s.test(n)) {
                        for (var o = n.split(s), u = 0, a = o.length; u < a; u++) t[e].apply(t, [o[u]].concat(r));
                        return !1
                    }
                    return !0
                }

                function f(t, e, n, r) {
                    for (var i = -1, o = t.length; ++i < o;) {
                        var u = t[i];
                        if (r) try {
                            u.callback.apply(u.context || n, e)
                        } catch (t) {
                            console.log('Error in "' + r + '" event handler:', t)
                        } else u.callback.apply(u.context || n, e)
                    }
                }
            },
            2268: function(t, e, n) {
                "use strict";

                function r(t) {
                    return null !== navigator.userAgent.match(t)
                }
                n.d(e, {
                    pZ: function() {
                        return o
                    },
                    xb: function() {
                        return u
                    },
                    zc: function() {
                        return a
                    },
                    id: function() {
                        return c
                    },
                    DF: function() {
                        return s
                    },
                    un: function() {
                        return l
                    },
                    A: function() {
                        return f
                    },
                    yS: function() {
                        return d
                    },
                    Q6: function() {
                        return p
                    },
                    i7: function() {
                        return h
                    },
                    w1: function() {
                        return v
                    },
                    G6: function() {
                        return g
                    },
                    gn: function() {
                        return m
                    },
                    O7: function() {
                        return y
                    },
                    Dt: function() {
                        return w
                    },
                    tq: function() {
                        return b
                    },
                    cL: function() {
                        return k
                    },
                    NO: function() {
                        return C
                    },
                    dI: function() {
                        return P
                    }
                });
                var i = function() {
                        return "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
                    },
                    o = function() {
                        return r(/firefox\//i)
                    },
                    u = function() {
                        return r(/iP(hone|od)/i)
                    },
                    a = function() {
                        return r(/iPad/i) || i()
                    },
                    c = function() {
                        return r(/Macintosh/i) && !i()
                    },
                    s = function() {
                        return r(/FBAV/i)
                    },
                    l = function() {
                        return r(/\sEdge?\/\d+/i)
                    },
                    f = function() {
                        return r(/msie/i)
                    },
                    d = function() {
                        return r(/SMART-TV/)
                    },
                    p = function() {
                        return d() && !r(/SamsungBrowser/)
                    },
                    h = function() {
                        return r(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !l() && !r(/UCBrowser/i)
                    },
                    v = function() {
                        return !r(/\sEdg\/\d+/i) && (l() || r(/trident\/.+rv:\s*11/i) || f())
                    },
                    g = function() {
                        return r(/safari/i) && !r(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !d()
                    },
                    m = function() {
                        return r(/iP(hone|ad|od)/i) || i()
                    };

                function y() {
                    return !(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !o()) && w()
                }
                var w = function t() {
                    return "boolean" == typeof t.mock_ ? t.mock_ : r(/Android/i) && !r(/Windows Phone/i)
                };
                w.mock_ = null;
                var b = function() {
                        return m() || w() || r(/Windows Phone/i)
                    },
                    k = function t() {
                        if ("boolean" == typeof t.mock_) return t.mock_;
                        try {
                            return window.self !== window.top
                        } catch (t) {
                            return !0
                        }
                    };
                k.mock_ = null;
                var C = function() {
                        return !1
                    },
                    P = function() {
                        return 0
                    }
            },
            974: function(t, e, n) {
                "use strict";
                n.d(e, {
                    oI: function() {
                        return a
                    },
                    iv: function() {
                        return c
                    },
                    oB: function() {
                        return s
                    },
                    vs: function() {
                        return d
                    },
                    HY: function() {
                        return p
                    }
                });
                var r, i = n(2957),
                    o = n(9563),
                    u = n.n(o),
                    a = u().clear;

                function c(t, e, n, r) {
                    n = n || "all-players";
                    var i = "";
                    if ("object" == typeof e) {
                        var o = document.createElement("div");
                        s(o, e);
                        var a = o.style.cssText;
                        Object.prototype.hasOwnProperty.call(e, "content") && a && (a = a + ' content: "' + e.content + '";'), r && a && (a = a.replace(/;/g, " !important;")), i = "{" + a + "}"
                    } else "string" == typeof e && (i = e);
                    "" !== i && "{}" !== i ? u().style([
                        [t, t + i]
                    ], n) : u().clear(n, t)
                }

                function s(t, e) {
                    if (null != t) {
                        var n;
                        void 0 === t.length && (t = [t]);
                        var r = {};
                        for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = f(n, e[n]));
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i],
                                u = void 0;
                            if (null != o)
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
                        }
                    }
                }

                function l(t) {
                    t = t.split("-");
                    for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
                    return t.join("")
                }

                function f(t, e) {
                    return "" === e || null == e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) && e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ? "" + e : /color/i.test(t) ? "#" + (0, i.vk)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(e) + "px"
                }

                function d(t, e) {
                    s(t, {
                        transform: e
                    })
                }

                function p(t, e) {
                    var n = "rgb",
                        i = void 0 !== e && 100 !== e;
                    if (i && (n += "a"), !r) {
                        var o = document.createElement("canvas");
                        o.height = 1, o.width = 1, r = o.getContext("2d")
                    }
                    t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000", r.clearRect(0, 0, 1, 1), r.fillStyle = t, r.fillRect(0, 0, 1, 1);
                    var u = r.getImageData(0, 0, 1, 1).data;
                    return n += "(" + u[0] + ", " + u[1] + ", " + u[2], i && (n += ", " + e / 100), n + ")"
                }
            },
            5004: function(t, e, n) {
                "use strict";
                n.d(e, {
                    z: function() {
                        return r
                    }
                });
                var r = Date.now || function() {
                    return (new Date).getTime()
                }
            },
            2799: function(t, e, n) {
                "use strict";
                n.d(e, {
                    pv: function() {
                        return s
                    },
                    az: function() {
                        return l
                    },
                    nh: function() {
                        return f
                    },
                    bJ: function() {
                        return d
                    },
                    oH: function() {
                        return p
                    },
                    gB: function() {
                        return v
                    },
                    FK: function() {
                        return g
                    },
                    s1: function() {
                        return w
                    },
                    cn: function() {
                        return b
                    },
                    IV: function() {
                        return k
                    },
                    L_: function() {
                        return C
                    },
                    og: function() {
                        return P
                    },
                    P$: function() {
                        return j
                    },
                    EU: function() {
                        return x
                    },
                    kq: function() {
                        return S
                    },
                    cS: function() {
                        return T
                    },
                    A8: function() {
                        return E
                    },
                    SH: function() {
                        return O
                    },
                    AH: function() {
                        return A
                    },
                    i3: function() {
                        return Z
                    },
                    nG: function() {
                        return _
                    },
                    UM: function() {
                        return M
                    },
                    Ww: function() {
                        return F
                    }
                });
                var r, i = n(6042),
                    o = n(2957),
                    u = n(8348),
                    a = window.DOMParser,
                    c = !0;

                function s(t, e) {
                    return t.classList.contains(e)
                }

                function l(t) {
                    return d(t).firstChild
                }

                function f(t, e) {
                    x(t),
                        function(t, e) {
                            if (!e) return;
                            for (var n = document.createDocumentFragment(), r = d(e).childNodes, i = 0; i < r.length; i++) n.appendChild(r[i].cloneNode(!0));
                            t.appendChild(n)
                        }(t, e)
                }

                function d(t) {
                    var e = function(t) {
                        r || (r = new a, c = function() {
                            try {
                                if (r.parseFromString("", "text/html")) return !0
                            } catch (t) {}
                            return !1
                        }());
                        if (c) return r.parseFromString(t, "text/html").body;
                        var e = document.implementation.createHTMLDocument("");
                        t.toLowerCase().indexOf("<!doctype") > -1 ? e.documentElement.innerHTML = t : e.body.innerHTML = t;
                        return e.body
                    }(t);
                    p(e);
                    for (var n = e.querySelectorAll("*"), i = n.length; i--;) {
                        v(n[i])
                    }
                    return e
                }

                function p(t) {
                    for (var e = t.querySelectorAll("script,object,iframe,meta"), n = e.length; n--;) {
                        var r = e[n];
                        r.parentNode.removeChild(r)
                    }
                    return t
                }
                var h = new RegExp(/^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/);

                function v(t) {
                    for (var e = t.attributes, n = e.length; n--;) {
                        var r = e[n].name;
                        if (/^on/.test(r) && t.removeAttribute(r), /href/.test(r)) {
                            var i = e[n].value;
                            /javascript:|javascript&colon;/.test(i) || !h.test(i) ? t.removeAttribute(r) : console.warn("Invalid or unsafe URL")
                        }
                    }
                    return t
                }

                function g(t) {
                    return t + (t.toString().indexOf("%") > 0 ? "" : "px")
                }

                function m(t) {
                    return (0, i.HD)(t.className) ? t.className.split(" ") : []
                }

                function y(t, e) {
                    e = (0, o.fy)(e), t.className !== e && (t.className = e)
                }

                function w(t) {
                    return t.classList ? t.classList : m(t)
                }

                function b(t, e) {
                    var n = m(t);
                    (Array.isArray(e) ? e : e.split(" ")).forEach((function(t) {
                        (0, i.r3)(n, t) || n.push(t)
                    })), y(t, n.join(" "))
                }

                function k(t, e) {
                    var n = m(t),
                        r = Array.isArray(e) ? e : e.split(" ");
                    y(t, (0, i.e5)(n, r).join(" "))
                }

                function C(t, e, n) {
                    var r = t.className || "";
                    e.test(r) ? r = r.replace(e, n) : n && (r += " " + n), y(t, r)
                }

                function P(t, e, n) {
                    var r = s(t, e);
                    (n = (0, i.jn)(n) ? n : !r) !== r && (n ? b(t, e) : k(t, e))
                }

                function j(t, e, n) {
                    t.setAttribute(e, n)
                }

                function x(t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                }

                function S(t) {
                    var e = document.createElement("link");
                    e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
                }

                function T(t) {
                    t && x(t)
                }

                function E(t) {
                    var e = {
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0,
                        top: 0,
                        bottom: 0
                    };
                    if (!t || !document.body.contains(t)) return e;
                    var n = t.getBoundingClientRect(),
                        r = window.pageYOffset,
                        i = window.pageXOffset;
                    return n.width || n.height || n.left || n.top ? (e.left = n.left + i, e.right = n.right + i, e.top = n.top + r, e.bottom = n.bottom + r, e.width = n.right - n.left, e.height = n.bottom - n.top, e) : e
                }

                function O(t, e) {
                    t.insertBefore(e, t.firstChild)
                }

                function A(t) {
                    return t.nextElementSibling
                }

                function Z(t) {
                    return t.previousElementSibling
                }

                function _(t, e, n, r) {
                    if (void 0 === n && (n = {}), void 0 === r && (r = document), h.test(t)) {
                        var o = r.createElement("a");
                        o.href = t, o.target = e, o = v((0, i.l7)(o, n)), u.Browser.firefox ? o.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window
                        })) : o.click()
                    }
                }

                function M() {
                    var t = window.screen.orientation;
                    return !!t && ("landscape-primary" === t.type || "landscape-secondary" === t.type) || 90 === window.orientation || -90 === window.orientation
                }

                function F(t) {
                    return function(t) {
                        var e = document.createElement("textarea");
                        return e.innerHTML = t, e.value
                    }(t).replace(/&|<|>|"|''/gm, (function(t) {
                        return "&#" + t.charCodeAt(0) + ";"
                    })).replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>")
                }
            },
            4429: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return y
                    }
                });
                var r = n(6042),
                    i = n(1569),
                    o = n(7034),
                    u = n(9888),
                    a = n(2957),
                    c = n(7411),
                    s = n(4742);

                function l(t, e) {
                    this.name = t, this.message = e.message || e.toString(), this.error = e
                }
                var f = n(2268),
                    d = n(2799),
                    p = n(974),
                    h = n(6886),
                    v = n(1261),
                    g = n(5499),
                    m = n(6234);
                var y = (0, r.l7)({}, u, o, i, {
                    addClass: d.cn,
                    hasClass: d.pv,
                    removeClass: d.IV,
                    replaceClass: d.L_,
                    toggleClass: d.og,
                    classList: d.s1,
                    styleDimension: d.FK,
                    createElement: d.az,
                    emptyElement: d.EU,
                    addStyleSheet: d.kq,
                    bounds: d.A8,
                    openLink: d.nG,
                    replaceInnerHtml: d.nh,
                    css: p.iv,
                    clearCss: p.oI,
                    style: p.oB,
                    transform: p.vs,
                    getRgba: p.HY,
                    ajax: h.h,
                    crossdomain: function(t) {
                        var e = window.URL;
                        try {
                            var n = new e(t, location.origin);
                            return location.protocol + "//" + location.host != n.protocol + "//" + n.host
                        } catch (t) {}
                        return !0
                    },
                    tryCatch: function(t, e, n) {
                        if (void 0 === n && (n = []), s.Z.debug) return t.apply(e || this, n);
                        try {
                            return t.apply(e || this, n)
                        } catch (e) {
                            return new l(t.name, e)
                        }
                    },
                    Error: l,
                    Timer: c.Z,
                    log: g.c,
                    genId: m.B,
                    between: v.v,
                    foreach: function(t, e) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
                    },
                    flashVersion: f.dI,
                    isIframe: f.cL,
                    indexOf: r.cq,
                    trim: a.fy,
                    pad: a.vk,
                    extension: a.AO,
                    hms: a.WZ,
                    seconds: a.m9,
                    prefix: a.O4,
                    suffix: a.uA,
                    noop: function() {}
                })
            },
            7543: function(t, e, n) {
                "use strict";

                function r(t) {
                    return !!(t = t || window.event) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(t.type)
                }
                n.d(e, {
                    C: function() {
                        return r
                    }
                })
            },
            8518: function(t, e, n) {
                "use strict";
                n.d(e, {
                    tK: function() {
                        return p
                    },
                    id: function() {
                        return h
                    },
                    Cq: function() {
                        return v
                    },
                    G3: function() {
                        return m
                    },
                    t6: function() {
                        return w
                    },
                    q2: function() {
                        return b
                    },
                    Pm: function() {
                        return k
                    },
                    dl: function() {
                        return P
                    },
                    Dq: function() {
                        return j
                    },
                    Mh: function() {
                        return x
                    }
                });
                var r = n(6042),
                    i = n(2268),
                    o = n(6886),
                    u = n(7034),
                    a = n(696),
                    c = {},
                    s = {
                        aa: "Afar",
                        ab: "Abkhazian",
                        ae: "Avestan",
                        af: "Afrikaans",
                        ak: "Akan",
                        am: "Amharic",
                        ar: "Arabic",
                        an: "Aragonese",
                        as: "Assamese",
                        av: "Avaric",
                        ay: "Aymara",
                        az: "Azerbaijani",
                        ba: "Bashkir",
                        be: "Belarusian",
                        bg: "Bulgarian",
                        bh: "Bihari languages",
                        bi: "Bislama",
                        bm: "Bambara",
                        bn: "Bengali",
                        bo: "Tibetan",
                        br: "Breton",
                        bs: "Bosnian",
                        ca: "Catalan",
                        ce: "Chechen",
                        ch: "Chamorro",
                        co: "Corsican",
                        cr: "Cree",
                        cs: "Czech",
                        cu: "Church Slavic",
                        cv: "Chuvash",
                        cy: "Welsh",
                        da: "Danish",
                        de: "German",
                        dv: "Divehi",
                        dz: "Dzongkha",
                        ee: "Ewe",
                        el: "Greek",
                        en: "English",
                        eo: "Esperanto",
                        es: "Spanish",
                        et: "Estonian",
                        eu: "Basque",
                        fa: "Persian",
                        ff: "Fulah",
                        fi: "Finnish",
                        fj: "Fijian",
                        fo: "Faroese",
                        fr: "French",
                        fy: "Western Frisian",
                        ga: "Irish",
                        gd: "Gaelic",
                        gl: "Galician",
                        gn: "Guarani",
                        gu: "Gujarati",
                        gv: "Manx",
                        ha: "Hausa",
                        he: "Hebrew",
                        hi: "Hindi",
                        ho: "Hiri Motu",
                        hr: "Croatian",
                        ht: "Haitian",
                        hu: "Hungarian",
                        hy: "Armenian",
                        hz: "Herero",
                        ia: "Interlingua",
                        id: "Indonesian",
                        ie: "Interlingue",
                        ig: "Igbo",
                        ii: "Sichuan Yi",
                        ik: "Inupiaq",
                        io: "Ido",
                        is: "Icelandic",
                        it: "Italian",
                        iu: "Inuktitut",
                        ja: "Japanese",
                        jv: "Javanese",
                        ka: "Georgian",
                        kg: "Kongo",
                        ki: "Kikuyu",
                        kj: "Kuanyama",
                        kk: "Kazakh",
                        kl: "Kalaallisut",
                        km: "Central Khmer",
                        kn: "Kannada",
                        ko: "Korean",
                        kr: "Kanuri",
                        ks: "Kashmiri",
                        ku: "Kurdish",
                        kv: "Komi",
                        kw: "Cornish",
                        ky: "Kirghiz",
                        la: "Latin",
                        lb: "Luxembourgish",
                        lg: "Ganda",
                        li: "Limburgan",
                        lo: "Lao",
                        ln: "Lingala",
                        lt: "Lithuanian",
                        lu: "Luba-Katanga",
                        lv: "Latvian",
                        mg: "Malagasy",
                        mh: "Marshallese",
                        mi: "Maori",
                        mk: "Macedonian",
                        ml: "Malayalam",
                        mn: "Mongolian",
                        mr: "Marathi",
                        ms: "Malay",
                        mt: "Maltese",
                        my: "Burmese",
                        na: "Nauru",
                        nb: "Bokmål",
                        nd: "Ndebele",
                        ne: "Nepali",
                        ng: "Ndonga",
                        nl: "Dutch",
                        nn: "Norwegian Nynorsk",
                        no: "Norwegian",
                        nr: "Ndebele",
                        nv: "Navajo",
                        ny: "Chichewa",
                        oc: "Occitan",
                        oj: "Ojibwa",
                        om: "Oromo",
                        or: "Oriya",
                        os: "Ossetian",
                        pa: "Panjabi",
                        pi: "Pali",
                        pl: "Polish",
                        pt: "Portuguese",
                        ps: "Pushto",
                        qu: "Quechua",
                        rm: "Romansh",
                        rn: "Rundi",
                        ro: "Romanian",
                        ru: "Russian",
                        rw: "Kinyarwanda",
                        sa: "Sanskrit",
                        sc: "Sardinian",
                        sd: "Sindhi",
                        se: "Northern Sami",
                        sg: "Sango",
                        si: "Sinhala",
                        sk: "Slovak",
                        sl: "Slovenian",
                        sm: "Samoan",
                        sn: "Shona",
                        so: "Somali",
                        sq: "Albanian",
                        sr: "Serbian",
                        ss: "Swati",
                        st: "Sotho",
                        su: "Sundanese",
                        sw: "Swahili",
                        sv: "Swedish",
                        ta: "Tamil",
                        te: "Telugu",
                        tg: "Tajik",
                        th: "Thai",
                        ti: "Tigrinya",
                        tk: "Turkmen",
                        tl: "Tagalog",
                        tn: "Tswana",
                        to: "Tonga",
                        tr: "Turkish",
                        ts: "Tsonga",
                        tt: "Tatar",
                        tw: "Twi",
                        ty: "Tahitian",
                        ug: "Uighur",
                        uk: "Ukrainian",
                        ur: "Urdu",
                        uz: "Uzbek",
                        ve: "Venda",
                        vi: "Vietnamese",
                        vo: "Volapük",
                        wa: "Walloon",
                        wo: "Wolof",
                        xh: "Xhosa",
                        yi: "Yiddish",
                        yo: "Yoruba",
                        za: "Zhuang",
                        zh: "Chinese",
                        zu: "Zulu"
                    },
                    l = (0, r.U_)(s);

                function f(t) {
                    var e = d(t),
                        n = e.indexOf("_");
                    return -1 === n ? e : e.substring(0, n)
                }

                function d(t) {
                    return t.toLowerCase().replace("-", "_")
                }

                function p(t) {
                    return t ? Object.keys(t).reduce((function(e, n) {
                        return e[d(n)] = t[n], e
                    }), {}) : {}
                }

                function h(t) {
                    if (t) return 3 === t.length ? t : s[f(t)] || t
                }

                function v(t) {
                    return l[t] || ""
                }

                function g(t) {
                    var e = t.querySelector("html");
                    return e ? e.getAttribute("lang") : null
                }
                var m = function t() {
                    if ("string" == typeof t.mock_) return t.mock_;
                    var e = g(document);
                    if (!e && (0, i.cL)()) try {
                        e = g(window.top.document)
                    } catch (t) {}
                    return e || navigator.language || "en"
                };
                m.mock_ = null;
                var y = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];

                function w(t) {
                    return 8207 === t.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(t)
                }
                var b = function t(e) {
                    return "boolean" == typeof t.mock_ ? t.mock_ : y.indexOf(f(e)) >= 0
                };

                function k(t, e, n) {
                    return (0, r.l7)({}, function(t) {
                        var e = t.advertising,
                            n = t.related,
                            i = t.sharing,
                            o = t.abouttext,
                            u = (0, r.l7)({}, t.localization);
                        e && (u.advertising = u.advertising || {}, C(u.advertising, e, "admessage"), C(u.advertising, e, "cuetext"), C(u.advertising, e, "loadingAd"), C(u.advertising, e, "podmessage"), C(u.advertising, e, "skipmessage"), C(u.advertising, e, "skiptext"));
                        "string" == typeof u.related ? u.related = {
                            heading: u.related
                        } : u.related = u.related || {};
                        n && C(u.related, n, "autoplaymessage");
                        i && (u.sharing = u.sharing || {}, C(u.sharing, i, "heading"), C(u.sharing, i, "copied"));
                        o && C(u, t, "abouttext");
                        var a = u.close || u.nextUpClose;
                        a && (u.close = a);
                        return u
                    }(t), e[f(n)], e[d(n)])
                }

                function C(t, e, n) {
                    var r = t[n] || e[n];
                    r && (t[n] = r)
                }
                b.mock_ = null;
                var P = function t(e) {
                    return "boolean" == typeof t.mock_ ? t.mock_ : (0, u.isDeepKeyCompliant)(a.Z, e, (function(t, e) {
                        return "string" == typeof e[t]
                    }))
                };
                P.mock_ = null;
                var j = function t(e, n) {
                    if ("function" == typeof t.mock_) return t.mock_;
                    var r, i = c[n];
                    if (!i) {
                        var u = e + "translations/" + (r = f(n), (/^n[bn]$/.test(r) ? "no" : r) + ".json");
                        c[n] = i = new Promise((function(t, e) {
                            (0, o.h)({
                                url: u,
                                oncomplete: t,
                                onerror: function(t, r, i, o) {
                                    c[n] = null, e(o)
                                },
                                responseType: "json"
                            })
                        }))
                    }
                    return i
                };

                function x(t, e) {
                    var n = (0, r.l7)({}, t, e);
                    return S(n, "errors", t, e), S(n, "related", t, e), S(n, "sharing", t, e), S(n, "advertising", t, e), S(n, "shortcuts", t, e), S(n, "captionsStyles", t, e), n
                }

                function S(t, e, n, i) {
                    t[e] = (0, r.l7)({}, n[e], i[e])
                }
                j.mock_ = null
            },
            5499: function(t, e, n) {
                "use strict";
                n.d(e, {
                    c: function() {
                        return r
                    }
                });
                var r = "function" == typeof console.log ? console.log.bind(console) : function() {}
            },
            1261: function(t, e, n) {
                "use strict";
                n.d(e, {
                    v: function() {
                        return r
                    }
                });
                var r = function(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
            },
            9888: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    getAbsolutePath: function() {
                        return o
                    },
                    isAbsolutePath: function() {
                        return u
                    },
                    parseXML: function() {
                        return a
                    },
                    serialize: function() {
                        return c
                    },
                    parseDimension: function() {
                        return s
                    },
                    timeFormat: function() {
                        return l
                    },
                    timeFormatAria: function() {
                        return f
                    }
                });
                var r = n(7034),
                    i = n(6042);

                function o(t, e) {
                    if (e && (0, r.exists)(e) || (e = document.location.href), !(0, r.exists)(t)) return "";
                    if (u(t)) return t;
                    var n, i = e.substring(0, e.indexOf("://") + 3),
                        o = e.substring(i.length, e.indexOf("/", i.length + 1));
                    if (0 === t.indexOf("/")) n = t.split("/");
                    else {
                        var a = e.split("?")[0];
                        n = (a = a.substring(i.length + o.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split("/"))
                    }
                    for (var c = [], s = 0; s < n.length; s++) n[s] && (0, r.exists)(n[s]) && "." !== n[s] && (".." === n[s] ? c.pop() : c.push(n[s]));
                    return i + o + "/" + c.join("/")
                }

                function u(t) {
                    return /^(?:(?:https?|file):)?\/\//.test(t)
                }

                function a(t) {
                    var e = null;
                    try {
                        (e = (new window.DOMParser).parseFromString(t, "text/xml")).querySelector("parsererror") && (e = null)
                    } catch (t) {}
                    return e
                }

                function c(t) {
                    if (void 0 === t) return null;
                    if ("string" == typeof t && t.length < 6) {
                        var e = t.toLowerCase();
                        if ("true" === e) return !0;
                        if ("false" === e) return !1;
                        if (!(0, i.i2)(Number(t)) && !(0, i.i2)(parseFloat(t))) return Number(t)
                    }
                    return t
                }

                function s(t) {
                    return (0, i.qh)(t) ? t : "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px", ""), 10)
                }

                function l(t, e) {
                    if ((0, i.i2)(t) && (t = parseInt(t.toString())), (0, i.i2)(t) || !isFinite(t) || t <= 0 && !e) return "00:00";
                    var n = t < 0 ? "-" : "";
                    t = Math.abs(t);
                    var r = Math.floor(t / 3600),
                        o = Math.floor((t - 3600 * r) / 60),
                        u = Math.floor(t % 60);
                    return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
                }

                function f(t) {
                    if ((0, i.i2)(t) && (t = parseInt(t.toString())), (0, i.i2)(t) || !isFinite(t) || t <= 0) return "0 seconds";
                    var e = Math.floor(t / 3600),
                        n = Math.floor((t - 3600 * e) / 60),
                        r = Math.floor(t % 60);
                    return (e ? e + (e > 1 ? " hours, " : 1 === e ? " hour, " : "") : "") + (n ? n + (n > 1 ? " minutes, " : 1 === n ? " minute, " : "") : "") + r + (1 !== r ? " seconds" : 1 === r ? " second" : "")
                }
            },
            1569: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    getScriptPath: function() {
                        return o
                    },
                    repo: function() {
                        return u
                    },
                    versionCheck: function() {
                        return a
                    },
                    loadFrom: function() {
                        return c
                    }
                });
                var r = n(6601),
                    i = n(7034),
                    o = function(t) {
                        for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
                            var r = e[n].src;
                            if (r) {
                                var i = r.lastIndexOf("/" + t);
                                if (i >= 0) return r.substr(0, i + 1)
                            }
                        }
                        return ""
                    },
                    u = function() {
                        var t = "//localhost:3000/js/player/v/8.24.4/";
                        return "" + ((0, i.isFileProtocol)() ? "https:" : "") + t
                    },
                    a = function(t) {
                        var e = ("0" + t).split(/\W/),
                            n = r.i.split(/\W/),
                            i = parseFloat(e[0]),
                            o = parseFloat(n[0]);
                        return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
                    },
                    c = function() {
                        return u()
                    }
            },
            6234: function(t, e, n) {
                "use strict";
                n.d(e, {
                    F: function() {
                        return r
                    },
                    B: function() {
                        return o
                    }
                });
                var r = 12;

                function i() {
                    try {
                        var t = window.crypto || window.msCrypto;
                        if (t && t.getRandomValues) return t.getRandomValues(new Uint32Array(1))[0].toString(36)
                    } catch (t) {}
                    return Math.random().toString(36).slice(2, 9)
                }

                function o(t) {
                    for (var e = ""; e.length < t;) e += i();
                    return e.slice(0, t)
                }
            },
            1776: function(t, e, n) {
                "use strict";
                n.d(e, {
                    U: function() {
                        return r
                    },
                    W: function() {
                        return i
                    }
                });
                var r = window.requestAnimationFrame || function(t) {
                        return setTimeout(t, 17)
                    },
                    i = window.cancelAnimationFrame || clearTimeout
            },
            676: function(t, e, n) {
                "use strict";
                var r = n(6042),
                    i = n(328),
                    o = n(1643),
                    u = {};

                function a(t) {
                    var e = document.createElement("link");
                    return e.type = "text/css", e.rel = "stylesheet", e.href = t, e
                }

                function c(t, e) {
                    var n = document.createElement("script");
                    return n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.timeout = e || 45e3, n.src = t, n
                }
                var s = function(t, e, n) {
                    var r = this,
                        i = 0;

                    function s(t) {
                        i = 2, r.trigger(o.pn, t).off()
                    }

                    function l(t) {
                        i = 3, r.trigger(o.xQ, t).off()
                    }
                    this.getStatus = function() {
                        return i
                    }, this.load = function() {
                        var r = u[t];
                        return 0 !== i || (r && r.then(l).catch(s), i = 1, r = new Promise((function(r, i) {
                            var o = (e ? a : c)(t, n),
                                u = function() {
                                    o.onerror = o.onload = null, clearTimeout(d)
                                },
                                f = function(t) {
                                    u(), s(t), i(t)
                                },
                                d = setTimeout((function() {
                                    f(new Error("Network timeout " + t))
                                }), 45e3);
                            o.onerror = function() {
                                f(new Error("Failed to load " + t))
                            }, o.onload = function(t) {
                                u(), l(t), r(t)
                            };
                            var p = document.getElementsByTagName("head")[0] || document.documentElement;
                            p.insertBefore(o, p.firstChild)
                        })), u[t] = r), r
                    }
                };
                (0, r.l7)(s.prototype, i.ZP), e.ZP = s
            },
            2957: function(t, e, n) {
                "use strict";
                n.d(e, {
                    fy: function() {
                        return o
                    },
                    vk: function() {
                        return u
                    },
                    Dc: function() {
                        return a
                    },
                    AO: function() {
                        return c
                    },
                    WZ: function() {
                        return s
                    },
                    m9: function() {
                        return l
                    },
                    U5: function() {
                        return f
                    },
                    O4: function() {
                        return d
                    },
                    uA: function() {
                        return p
                    },
                    zz: function() {
                        return h
                    }
                });
                var r = n(6042),
                    i = window.parseFloat;

                function o(t) {
                    return t.replace(/^\s+|\s+$/g, "")
                }

                function u(t, e, n) {
                    for (t = "" + t, n = n || "0"; t.length < e;) t = n + t;
                    return t
                }

                function a(t, e) {
                    for (var n = t.attributes, r = 0; r < n.length; r++)
                        if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
                    return ""
                }

                function c(t) {
                    if (!t || "rtmp" === t.substr(0, 4)) return "";
                    var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
                    if (e) return e[1];
                    var n = t.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1");
                    return n !== t ? n.toLowerCase() : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : ""
                }

                function s(t) {
                    var e = (t / 60 | 0) % 60,
                        n = t % 60;
                    return u((t / 3600 | 0).toString(), 2) + ":" + u(e.toString(), 2) + ":" + u(n.toFixed(3), 6)
                }

                function l(t, e) {
                    if (!t) return 0;
                    if ((0, r.qh)(t)) return t;
                    var n = t.replace(",", "."),
                        o = n.slice(-1),
                        u = n.split(":"),
                        a = u.length,
                        c = 0;
                    if ("s" === o) c = i(n);
                    else if ("m" === o) c = 60 * i(n);
                    else if ("h" === o) c = 3600 * i(n);
                    else if (a > 1) {
                        var s = a - 1;
                        4 === a && (e && (c = i(u[s]) / e), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
                    } else c = i(n);
                    return (0, r.qh)(c) ? c : 0
                }

                function f(t, e, n) {
                    if ((0, r.HD)(t) && "%" === t.slice(-1)) {
                        var o = i(t);
                        return e && (0, r.qh)(e) && (0, r.qh)(o) ? e * o / 100 : null
                    }
                    return l(t, n)
                }

                function d(t, e) {
                    return t.map((function(t) {
                        return e + t
                    }))
                }

                function p(t, e) {
                    return t.map((function(t) {
                        return t + e
                    }))
                }

                function h(t) {
                    return !!t && (0, r.HD)(t) && "%" === t.slice(-1)
                }
            },
            5882: function(t, e, n) {
                "use strict";
                n.d(e, {
                    ZP: function() {
                        return b
                    },
                    GU: function() {
                        return T
                    },
                    dO: function() {
                        return F
                    }
                });
                var r = n(8348),
                    i = n(1643),
                    o = n(328),
                    u = n(5004),
                    a = n(2799);

                function c(t, e) {
                    return c = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    }, c(t, e)
                }
                var s, l, f = "ontouchstart" in window,
                    d = "PointerEvent" in window && !r.OS.android,
                    p = !(d || f && r.OS.mobile),
                    h = "window",
                    v = "init",
                    g = "select",
                    m = "keydown",
                    y = r.Features.passiveEvents,
                    w = !!y && {
                        passive: !0
                    },
                    b = function(t) {
                        var e, n;

                        function r(e, n) {
                            var r;
                            r = t.call(this) || this;
                            var i = !(n = n || {}).preventScrolling;
                            return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleClick = !1, r.el = e, r.handlers = {}, r.options = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId = null, r.startX = 0, r.startY = 0, r.event = null, r.clicking = !1, r
                        }
                        n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, c(e, n);
                        var i = r.prototype;
                        return i.on = function(e, n, r) {
                            return C(e) && (this.handlers[e] || S[e](this)), t.prototype.on.call(this, e, n, r)
                        }, i.off = function(e, n, r) {
                            var i = this;
                            if (C(e)) O(this, e);
                            else if (!e) {
                                var o = this.handlers;
                                Object.keys(o).forEach((function(t) {
                                    O(i, t)
                                }))
                            }
                            return t.prototype.off.call(this, e, n, r)
                        }, i.destroy = function() {
                            this.el && (this.off(), d && A(this), this.el = null)
                        }, r
                    }(o.ZP),
                    k = /\s+/;

                function C(t) {
                    return t && !(k.test(t) || "object" == typeof t)
                }

                function P(t) {
                    if (!t.handlers.init) {
                        var e = t.el,
                            n = t.passive,
                            r = !!y && {
                                passive: n
                            },
                            o = function(e) {
                                if (t.dragged) _(t, i.Wp, e);
                                else {
                                    var r = M(e),
                                        o = r.pageX,
                                        u = r.pageY,
                                        a = o - t.startX,
                                        c = u - t.startY;
                                    a * a + c * c > 36 && (_(t, i.nv, e), t.dragged = !0, _(t, i.Wp, e))
                                }
                                var s;
                                n || "touchmove" !== e.type || (s = e).preventDefault && s.preventDefault()
                            },
                            u = function(e) {
                                clearTimeout(s), t.el && (A(t), O(t, h), t.dragged && (t.dragged = !1, _(t, i.Sv, e)))
                            };
                        x(t, v), I(t, v, (function(i) {
                            if ((0, a.IV)(e, "jw-tab-focus"), !F(i)) {
                                var c = i.target,
                                    s = i.type;
                                if (!t.directSelect || c === e) {
                                    var l = M(i),
                                        f = l.pageX,
                                        d = l.pageY;
                                    if (t.dragged = !1, t.startX = f, t.startY = d, O(t, h), "pointerdown" === s && i.isPrimary) {
                                        if (!n) {
                                            var p = i.pointerId;
                                            t.pointerId = p, e.setPointerCapture(p)
                                        }
                                        E(t, h, "pointermove", o, r), E(t, h, "pointercancel", u), E(t, h, "pointerup", u)
                                    } else "mousedown" === s ? (E(t, h, "mousemove", o, r), E(t, h, "mouseup", u)) : "touchstart" === s && (E(t, h, "touchmove", o, r), E(t, h, "touchcancel", u), E(t, h, "touchend", u))
                                }
                            }
                        }), r)
                    }
                }

                function j(t) {
                    if (!t.handlers.select) {
                        var e = t.el;
                        x(t, g), I(t, g, (function(n) {
                            var r = n.target;
                            F(n) || t.directSelect && r !== e || (n.isPrimary && "BUTTON" === r.tageName && r.focus(), t.lastStart = (0, u.z)(), t.clicking = !0)
                        })), E(t, g, "click", (function(n) {
                            F(n) || t.directSelect && n.target !== e || ((0, u.z)() - t.lastStart > 500 && !0 === t.clicking || (function(t, e) {
                                t.enableDoubleClick && ((0, u.z)() - t.lastClick < 300 ? (_(t, i.P, e), t.lastClick = 0) : t.lastClick = (0, u.z)())
                            }(t, n), _(t, i.ot, n)), t.clicking = !1)
                        }))
                    }
                }

                function x(t, e) {
                    if (l || (l = new b(document).on("interaction")), !t.handlers.init && !t.handlers.select) {
                        var n = t.el;
                        E(t, e, "blur", (function() {
                            (0, a.IV)(n, "jw-tab-focus"), t.clicking = !1
                        })), E(t, e, "focus", (function() {
                            l.event && l.event.type === m && (0, a.cn)(n, "jw-tab-focus")
                        }))
                    }
                }
                var S = {
                    drag: function(t) {
                        P(t)
                    },
                    dragStart: function(t) {
                        P(t)
                    },
                    dragEnd: function(t) {
                        P(t)
                    },
                    click: function(t) {
                        j(t)
                    },
                    doubleClick: function(t) {
                        t.enableDoubleClick = !0, j(t)
                    },
                    longPress: function(t) {
                        var e = "longPress";
                        if (r.OS.iOS) {
                            var n = function() {
                                clearTimeout(s)
                            };
                            E(t, e, "touchstart", (function(r) {
                                n(), s = setTimeout((function() {
                                    _(t, e, r)
                                }), 500)
                            })), E(t, e, "touchmove", n), E(t, e, "touchcancel", n), E(t, e, "touchend", n)
                        } else t.el.oncontextmenu = function(n) {
                            return _(t, e, n), !1
                        }
                    },
                    focus: function(t) {
                        var e = "focus";
                        E(t, e, e, (function(n) {
                            Z(t, e, n)
                        }))
                    },
                    blur: function(t) {
                        var e = "blur";
                        E(t, e, e, (function(n) {
                            Z(t, e, n)
                        }))
                    },
                    over: function(t) {
                        (d || p) && E(t, i.B1, d ? "pointerover" : "mouseover", (function(e) {
                            "touch" !== e.pointerType && _(t, i.B1, e)
                        }))
                    },
                    out: function(t) {
                        if (d) {
                            var e = t.el;
                            E(t, i.U3, "pointerout", (function(n) {
                                if ("touch" !== n.pointerType && "clientX" in n) {
                                    var r = document.elementFromPoint(n.clientX, n.clientY);
                                    e.contains(r) || _(t, i.U3, n)
                                }
                            }))
                        } else p && E(t, i.U3, "mouseout", (function(e) {
                            _(t, i.U3, e)
                        }))
                    },
                    move: function(t) {
                        (d || p) && E(t, i.tP, d ? "pointermove" : "mousemove", (function(e) {
                            "touch" !== e.pointerType && _(t, i.tP, e)
                        }))
                    },
                    enter: function(t) {
                        E(t, i.K5, m, (function(e) {
                            "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(), Z(t, i.K5, e))
                        }))
                    },
                    keydown: function(t) {
                        E(t, m, m, (function(e) {
                            Z(t, m, e)
                        }), !1)
                    },
                    gesture: function(t) {
                        var e = "gesture",
                            n = function(n) {
                                return _(t, e, n)
                            };
                        E(t, e, "click", n), E(t, e, m, n)
                    },
                    interaction: function(t) {
                        var e = "interaction",
                            n = function(e) {
                                t.event = e
                            };
                        E(t, e, "mousedown", n, !0), E(t, e, m, n, !0)
                    },
                    tap: function() {},
                    doubleTap: function() {}
                };

                function T(t) {
                    var e = t.ownerDocument || t;
                    return e.defaultView || e.parentWindow || window
                }

                function E(t, e, n, r, i) {
                    void 0 === i && (i = w);
                    var o = t.handlers[e],
                        u = t.options[e];
                    if (o || (o = t.handlers[e] = {}, u = t.options[e] = {}), o[n]) throw new Error(e + " " + n + " already registered");
                    o[n] = r, u[n] = i;
                    var a = t.el;
                    (e === h ? T(a) : a).addEventListener(n, r, i)
                }

                function O(t, e) {
                    var n = t.el,
                        r = t.handlers,
                        i = t.options,
                        o = e === h ? T(n) : n,
                        u = r[e],
                        a = i[e];
                    u && (Object.keys(u).forEach((function(t) {
                        var e = a[t];
                        "boolean" == typeof e ? o.removeEventListener(t, u[t], e) : o.removeEventListener(t, u[t])
                    })), r[e] = null, i[e] = null)
                }

                function A(t) {
                    var e = t.el;
                    null !== t.pointerId && (e.releasePointerCapture(t.pointerId), t.pointerId = null)
                }

                function Z(t, e, n) {
                    var r = t.el,
                        i = n.target;
                    t.trigger(e, {
                        type: e,
                        sourceEvent: n,
                        currentTarget: r,
                        target: i
                    })
                }

                function _(t, e, n) {
                    var r = function(t, e, n) {
                        var r, i = e.target,
                            o = e.touches,
                            u = e.changedTouches,
                            a = e.pointerType;
                        o || u ? (r = o && o.length ? o[0] : u[0], a = a || "touch") : (r = e, a = a || "mouse");
                        var c = r,
                            s = c.pageX,
                            l = c.pageY;
                        return {
                            type: t,
                            pointerType: a,
                            pageX: s,
                            pageY: l,
                            sourceEvent: e,
                            currentTarget: n,
                            target: i
                        }
                    }(e, n, t.el);
                    t.trigger(e, r)
                }

                function M(t) {
                    return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t
                }

                function F(t) {
                    return !(!t.ctrlKey || "click" !== t.type) || ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
                }

                function I(t, e, n, r) {
                    d ? E(t, e, "pointerdown", n, r) : (p && E(t, e, "mousedown", n, r), E(t, e, "touchstart", n, r))
                }
            },
            6042: function(t, e, n) {
                "use strict";
                n.d(e, {
                    S6: function() {
                        return P
                    },
                    UI: function() {
                        return x
                    },
                    u4: function() {
                        return E
                    },
                    sE: function() {
                        return Z
                    },
                    hX: function() {
                        return M
                    },
                    $6: function() {
                        return I
                    },
                    Yj: function() {
                        return N
                    },
                    dp: function() {
                        return D
                    },
                    vM: function() {
                        return U
                    },
                    e1: function() {
                        return V
                    },
                    r3: function() {
                        return G
                    },
                    ar: function() {
                        return K
                    },
                    _e: function() {
                        return Q
                    },
                    e5: function() {
                        return X
                    },
                    cq: function() {
                        return J
                    },
                    ak: function() {
                        return Y
                    },
                    P2: function() {
                        return it
                    },
                    U_: function() {
                        return at
                    },
                    ce: function() {
                        return ct
                    },
                    l7: function() {
                        return st
                    },
                    ei: function() {
                        return lt
                    },
                    Kn: function() {
                        return dt
                    },
                    mf: function() {
                        return gt
                    },
                    hj: function() {
                        return mt
                    },
                    HD: function() {
                        return yt
                    },
                    xV: function() {
                        return wt
                    },
                    i2: function() {
                        return bt
                    },
                    jn: function() {
                        return kt
                    },
                    o8: function() {
                        return Ct
                    },
                    yR: function() {
                        return jt
                    },
                    a9: function() {
                        return xt
                    },
                    Cb: function() {
                        return St
                    },
                    wB: function() {
                        return Tt
                    },
                    qh: function() {
                        return Ot
                    }
                });
                var r = n(5004),
                    i = {},
                    o = Array.prototype,
                    u = Object.prototype,
                    a = Function.prototype,
                    c = o.slice,
                    s = o.concat,
                    l = u.toString,
                    f = u.hasOwnProperty,
                    d = o.map,
                    p = o.reduce,
                    h = o.forEach,
                    v = o.filter,
                    g = o.every,
                    m = o.some,
                    y = o.indexOf,
                    w = Array.isArray,
                    b = Object.keys,
                    k = a.bind,
                    C = window.isFinite,
                    P = function(t, e, n) {
                        var r, o;
                        if (null == t) return t;
                        if (h && t.forEach === h) t.forEach(e, n);
                        else if (t.length === +t.length) {
                            for (r = 0, o = t.length; r < o; r++)
                                if (e.call(n, t[r], r, t) === i) return
                        } else {
                            var u = ot(t);
                            for (r = 0, o = u.length; r < o; r++)
                                if (e.call(n, t[u[r]], u[r], t) === i) return
                        }
                        return t
                    },
                    j = P,
                    x = function(t, e, n) {
                        var r = [];
                        return null == t ? r : d && t.map === d ? t.map(e, n) : (P(t, (function(t, i, o) {
                            r.push(e.call(n, t, i, o))
                        })), r)
                    },
                    S = x,
                    T = "Reduce of empty array with no initial value",
                    E = function(t, e, n, r) {
                        var i = arguments.length > 2;
                        if (null == t && (t = []), p && t.reduce === p) return r && (e = Y(e, r)), i ? t.reduce(e, n) : t.reduce(e);
                        if (P(t, (function(t, o, u) {
                                i ? n = e.call(r, n, t, o, u) : (n = t, i = !0)
                            })), !i) throw new TypeError(T);
                        return n
                    },
                    O = E,
                    A = E,
                    Z = function(t, e, n) {
                        var r;
                        return N(t, (function(t, i, o) {
                            if (e.call(n, t, i, o)) return r = t, !0
                        })), r
                    },
                    _ = Z,
                    M = function(t, e, n) {
                        var r = [];
                        return null == t ? r : v && t.filter === v ? t.filter(e, n) : (P(t, (function(t, i, o) {
                            e.call(n, t, i, o) && r.push(t)
                        })), r)
                    },
                    F = M,
                    I = function(t, e, n) {
                        e || (e = jt);
                        var r = !0;
                        return null == t ? r : g && t.every === g ? t.every(e, n) : (P(t, (function(t, o, u) {
                            if (!(r = r && e.call(n, t, o, u))) return i
                        })), !!r)
                    },
                    L = I,
                    N = function(t, e, n) {
                        e || (e = jt);
                        var r = !1;
                        return null == t ? r : m && t.some === m ? t.some(e, n) : (P(t, (function(t, o, u) {
                            if (r || (r = e.call(n, t, o, u))) return i
                        })), !!r)
                    },
                    B = N,
                    D = function(t) {
                        return null == t ? 0 : t.length === +t.length ? t.length : ot(t).length
                    },
                    R = function(t, e) {
                        var n;
                        return function() {
                            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
                        }
                    },
                    q = function(t) {
                        return null == t ? jt : gt(t) ? t : St(t)
                    },
                    z = function(t) {
                        return function(e, n, r) {
                            var i = {};
                            return n = q(n), P(e, (function(o, u) {
                                var a = n.call(r, o, u, e);
                                t(i, a, o)
                            })), i
                        }
                    },
                    U = z((function(t, e, n) {
                        Pt(t, e) ? t[e].push(n) : t[e] = [n]
                    })),
                    H = z((function(t, e, n) {
                        t[e] = n
                    })),
                    V = function(t, e, n, r) {
                        for (var i = (n = q(n)).call(r, e), o = 0, u = t.length; o < u;) {
                            var a = o + u >>> 1;
                            n.call(r, t[a]) < i ? o = a + 1 : u = a
                        }
                        return o
                    },
                    G = function(t, e) {
                        return null != t && (t.length !== +t.length && (t = ut(t)), J(t, e) >= 0)
                    },
                    W = G,
                    K = function(t, e) {
                        return M(t, Tt(e))
                    },
                    Q = function(t, e) {
                        return Z(t, Tt(e))
                    },
                    X = function(t) {
                        var e = s.apply(o, c.call(arguments, 1));
                        return M(t, (function(t) {
                            return !G(e, t)
                        }))
                    },
                    J = function(t, e, n) {
                        if (null == t) return -1;
                        var r = 0,
                            i = t.length;
                        if (n) {
                            if ("number" != typeof n) return t[r = V(t, e)] === e ? r : -1;
                            r = n < 0 ? Math.max(0, i + n) : n
                        }
                        if (y && t.indexOf === y) return t.indexOf(e, n);
                        for (; r < i; r++)
                            if (t[r] === e) return r;
                        return -1
                    },
                    $ = function() {},
                    Y = function(t, e) {
                        var n, r;
                        if (k && t.bind === k) return k.apply(t, c.call(arguments, 1));
                        if (!gt(t)) throw new TypeError;
                        return n = c.call(arguments, 2), r = function() {
                            if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
                            $.prototype = t.prototype;
                            var i = new $;
                            $.prototype = null;
                            var o = t.apply(i, n.concat(c.call(arguments)));
                            return Object(o) === o ? o : i
                        }, r
                    },
                    tt = function(t) {
                        var e = c.call(arguments, 1);
                        return function() {
                            for (var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++) Pt(r[i], "partial") && (r[i] = arguments[n++]);
                            for (; n < arguments.length;) r.push(arguments[n++]);
                            return t.apply(this, r)
                        }
                    },
                    et = tt(R, 2),
                    nt = function(t, e) {
                        var n = c.call(arguments, 2);
                        return setTimeout((function() {
                            return t.apply(null, n)
                        }), e)
                    },
                    rt = tt(nt, {
                        partial: tt
                    }, 1),
                    it = function(t, e, n) {
                        var r, i, o, u = null,
                            a = 0;
                        n || (n = {});
                        var c = function() {
                            a = !1 === n.leading ? 0 : Et(), u = null, o = t.apply(r, i), r = i = null
                        };
                        return function() {
                            var s = Et();
                            a || !1 !== n.leading || (a = s);
                            var l = e - (s - a);
                            return r = this, i = arguments, l <= 0 ? (clearTimeout(u), u = null, a = s, o = t.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, l)), o
                        }
                    },
                    ot = function(t) {
                        if (!dt(t)) return [];
                        if (b) return b(t);
                        var e = [];
                        for (var n in t) Pt(t, n) && e.push(n);
                        return e
                    },
                    ut = function(t) {
                        for (var e = ot(t), n = ot.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
                        return r
                    },
                    at = function(t) {
                        for (var e = {}, n = ot(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
                        return e
                    },
                    ct = function(t) {
                        return P(c.call(arguments, 1), (function(e) {
                            if (e)
                                for (var n in e) void 0 === t[n] && (t[n] = e[n])
                        })), t
                    },
                    st = Object.assign || function(t) {
                        return P(c.call(arguments, 1), (function(e) {
                            if (e)
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        })), t
                    },
                    lt = function(t) {
                        var e = {},
                            n = s.apply(o, c.call(arguments, 1));
                        return P(n, (function(n) {
                            n in t && (e[n] = t[n])
                        })), e
                    },
                    ft = w || function(t) {
                        return "[object Array]" == l.call(t)
                    },
                    dt = function(t) {
                        return t === Object(t)
                    },
                    pt = [];
                P(["Function", "String", "Number", "Date", "RegExp"], (function(t) {
                    pt[t] = function(e) {
                        return l.call(e) == "[object " + t + "]"
                    }
                })), pt.Function = function(t) {
                    return "function" == typeof t
                };
                var ht = pt.Date,
                    vt = pt.RegExp,
                    gt = pt.Function,
                    mt = pt.Number,
                    yt = pt.String,
                    wt = function(t) {
                        return C(t) && !bt(parseFloat(t))
                    },
                    bt = function(t) {
                        return mt(t) && t != +t
                    },
                    kt = function(t) {
                        return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
                    },
                    Ct = function(t) {
                        return void 0 === t
                    },
                    Pt = function(t, e) {
                        return f.call(t, e)
                    },
                    jt = function(t) {
                        return t
                    },
                    xt = function(t) {
                        return function() {
                            return t
                        }
                    },
                    St = function(t) {
                        return function(e) {
                            return e[t]
                        }
                    },
                    Tt = function(t) {
                        return function(e) {
                            if (e === t) return !0;
                            for (var n in t)
                                if (t[n] !== e[n]) return !1;
                            return !0
                        }
                    },
                    Et = r.z,
                    Ot = function(t) {
                        return mt(t) && !bt(t)
                    };
                e.ZP = {
                    after: function(t, e) {
                        return function() {
                            if (--t < 1) return e.apply(this, arguments)
                        }
                    },
                    all: I,
                    any: N,
                    before: R,
                    bind: Y,
                    clone: function(t) {
                        return dt(t) ? ft(t) ? t.slice() : st({}, t) : t
                    },
                    collect: S,
                    compact: function(t) {
                        return M(t, jt)
                    },
                    constant: xt,
                    contains: G,
                    debounce: function(t, e) {
                        var n;
                        return void 0 === e && (e = 100),
                            function() {
                                for (var r = this, i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
                                clearTimeout(n), n = setTimeout((function() {
                                    t.apply(r, o)
                                }), e)
                            }
                    },
                    defaults: ct,
                    defer: rt,
                    delay: nt,
                    detect: _,
                    difference: X,
                    each: P,
                    every: L,
                    extend: st,
                    filter: M,
                    find: Z,
                    findWhere: Q,
                    foldl: O,
                    forEach: j,
                    groupBy: U,
                    has: Pt,
                    identity: jt,
                    include: W,
                    indexBy: H,
                    indexOf: J,
                    inject: A,
                    invert: at,
                    isArray: ft,
                    isBoolean: kt,
                    isDate: ht,
                    isFinite: wt,
                    isFunction: gt,
                    isNaN: bt,
                    isNull: function(t) {
                        return null === t
                    },
                    isNumber: mt,
                    isObject: dt,
                    isRegExp: vt,
                    isString: yt,
                    isUndefined: Ct,
                    isValidNumber: Ot,
                    keys: ot,
                    last: function(t, e, n) {
                        if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0))
                    },
                    map: x,
                    matches: Tt,
                    max: function(t, e, n) {
                        if (!e && ft(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
                        var r = -1 / 0,
                            i = -1 / 0;
                        return P(t, (function(t, o, u) {
                            var a = e ? e.call(n, t, o, u) : t;
                            a > i && (r = t, i = a)
                        })), r
                    },
                    memoize: function(t, e) {
                        var n = {};
                        return e || (e = jt),
                            function() {
                                var r = e.apply(this, arguments);
                                return Pt(n, r) ? n[r] : n[r] = t.apply(this, arguments)
                            }
                    },
                    now: Et,
                    omit: function(t) {
                        var e = {},
                            n = s.apply(o, c.call(arguments, 1));
                        for (var r in t) G(n, r) || (e[r] = t[r]);
                        return e
                    },
                    once: et,
                    partial: tt,
                    pick: lt,
                    pluck: function(t, e) {
                        return x(t, St(e))
                    },
                    property: St,
                    propertyOf: function(t) {
                        return null == t ? function() {} : function(e) {
                            return t[e]
                        }
                    },
                    reduce: E,
                    reject: function(t, e, n) {
                        return M(t, (function(t, r, i) {
                            return !e.call(n, t, r, i)
                        }), n)
                    },
                    result: function(t, e) {
                        if (null != t) {
                            var n = t[e];
                            return gt(n) ? n.call(t) : n
                        }
                    },
                    select: F,
                    size: D,
                    some: B,
                    sortedIndex: V,
                    throttle: it,
                    where: K,
                    without: function(t) {
                        return X(t, c.call(arguments, 1))
                    }
                }
            },
            7034: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    exists: function() {
                        return i
                    },
                    isHTTPS: function() {
                        return o
                    },
                    isFileProtocol: function() {
                        return u
                    },
                    isRtmp: function() {
                        return a
                    },
                    isYouTube: function() {
                        return c
                    },
                    typeOf: function() {
                        return s
                    },
                    isDeepKeyCompliant: function() {
                        return l
                    }
                });
                var r = window.location.protocol;

                function i(t) {
                    switch (typeof t) {
                        case "string":
                            return t.length > 0;
                        case "object":
                            return null !== t;
                        case "undefined":
                            return !1;
                        default:
                            return !0
                    }
                }

                function o() {
                    return "https:" === r
                }

                function u() {
                    return "file:" === r
                }

                function a(t, e) {
                    return 0 === t.indexOf("rtmp:") || "rtmp" === e
                }

                function c(t, e) {
                    return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
                }

                function s(t) {
                    if (null === t) return "null";
                    var e = typeof t;
                    return "object" === e && Array.isArray(t) ? "array" : e
                }

                function l(t, e, n) {
                    var r = Object.keys(t);
                    return Object.keys(e).length >= r.length && r.every((function(r) {
                        var i = t[r],
                            o = e[r];
                        return i && "object" == typeof i ? !(!o || "object" != typeof o) && l(i, o, n) : n(r, t)
                    }))
                }
            },
            9025: function(t, e) {
                "use strict";
                var n = document.createElement("video");
                e.Z = n
            },
            6601: function(t, e, n) {
                "use strict";
                n.d(e, {
                    i: function() {
                        return r
                    }
                });
                var r = "8.24.4+commercial_v8-24-4.492.commercial.e676779.hlsjs..jwplayer..dai..freewheel..googima..headerbidding.14ad352.vast..analytics.9fd4899.analyticskraken.6491d81.gapro."
            },
            4225: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return o
                    }
                });
                var r = n(2799),
                    i = n(974);

                function o(t, e) {
                    var n = e.message,
                        o = e.code,
                        u = function(t, e, n, r) {
                            return '<div id="' + t + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + t + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + t + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + t + '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 ofilm,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' + (e || "") + '<span class="jw-break jw-reset"></span>' + (r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : "") + "</div></div></div></div>"
                        }(t.get("id"), n, t.get("localization").errors.errorCode, o.toString()),
                        a = t.get("width"),
                        c = t.get("height"),
                        s = (0, r.az)(u);
                    return (0, i.oB)(s, {
                        width: a.toString().indexOf("%") > 0 ? a : a + "px",
                        height: c.toString().indexOf("%") > 0 ? c : c + "px"
                    }), s
                }
            },
            9926: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return l
                    }
                });
                var r = n(6042),
                    i = n(1776),
                    o = n(2799),
                    u = n(974),
                    a = [],
                    c = -1;

                function s() {
                    (0, i.W)(c), c = (0, i.U)((function() {
                        a.forEach((function(t) {
                            t.view.updateBounds();
                            var e = t.view.model.get("containerWidth");
                            t.resized = t.width !== e, t.width = e
                        })), a.forEach((function(t) {
                            t.contractElement.scrollLeft = 2 * t.width
                        })), a.forEach((function(t) {
                            (0, u.oB)(t.expandChild, {
                                width: t.width + 1
                            }), t.resized && t.view.model.get("visibility") && t.view.updateStyles()
                        })), a.forEach((function(t) {
                            t.expandElement.scrollLeft = t.width + 1
                        })), a.forEach((function(t) {
                            t.resized && t.view.checkResized()
                        }))
                    }))
                }
                var l = function() {
                    function t(t, e, n) {
                        var i = {
                                display: "block",
                                position: "absolute",
                                top: 0,
                                left: 0
                            },
                            c = {
                                width: "100%",
                                height: "100%"
                            },
                            l = (0, o.az)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'),
                            f = l.firstChild,
                            d = f.firstChild,
                            p = f.nextSibling;
                        (0, u.oB)([f, p], (0, r.l7)({
                            overflow: "auto"
                        }, i, c)), (0, u.oB)(l, (0, r.l7)({}, i, c)), this.expandElement = f, this.expandChild = d, this.contractElement = p, this.hiddenElement = l, this.element = t, this.view = e, this.model = n, this.width = 0, this.resized = !1, t.firstChild ? t.insertBefore(l, t.firstChild) : t.appendChild(l), t.addEventListener("scroll", s, !0), a.push(this), s()
                    }
                    return t.prototype.destroy = function() {
                        if (this.view) {
                            var t = a.indexOf(this); - 1 !== t && a.splice(t, 1), this.element.removeEventListener("scroll", s, !0), this.element.removeChild(this.hiddenElement), this.view = this.model = null
                        }
                    }, t
                }()
            },
            4671: function(t, e, n) {
                "use strict";
                var r, i = n(6875),
                    o = n(8348),
                    u = n(2799),
                    a = [],
                    c = [],
                    s = [],
                    l = {},
                    f = "screen" in window && "orientation" in window.screen,
                    d = o.OS.android && o.Browser.chrome,
                    p = !1;

                function h(t, e) {
                    for (var n = e.length; n--;) {
                        var r = e[n];
                        if (t.target === r.getContainer()) {
                            r.setIntersection(t);
                            break
                        }
                    }
                }

                function v() {
                    a.forEach((function(t) {
                        var e = t.model;
                        if (!(e.get("audioMode") || e.get("isFloating") || !e.get("controls") || e.get("visibility") < .75)) {
                            var n = e.get("state"),
                                r = (0, u.UM)();
                            !r && "paused" === n && t.api.getFullscreen() ? t.api.setFullscreen(!1) : "playing" === n && t.api.setFullscreen(r)
                        }
                    }))
                }

                function g() {
                    a.forEach((function(t) {
                        t.model.set("activeTab", (0, i.Z)())
                    }))
                }

                function m(t, e) {
                    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                }

                function y(t) {
                    s.forEach((function(e) {
                        e(t)
                    }))
                }
                document.addEventListener("visibilitychange", g), document.addEventListener("webkitvisibilitychange", g), d && f && window.screen.orientation.addEventListener("change", v), window.addEventListener("beforeunload", (function() {
                    document.removeEventListener("visibilitychange", g), document.removeEventListener("webkitvisibilitychange", g), window.removeEventListener("scroll", y), d && f && window.screen.orientation.removeEventListener("change", v)
                })), e.Z = {
                    add: function(t) {
                        a.push(t)
                    },
                    remove: function(t) {
                        m(t, a)
                    },
                    addScrollHandler: function(t) {
                        p || (p = !0, window.addEventListener("scroll", y)), s.push(t)
                    },
                    removeScrollHandler: function(t) {
                        var e = s.indexOf(t); - 1 !== e && s.splice(e, 1)
                    },
                    addWidget: function(t) {
                        c.push(t)
                    },
                    removeWidget: function(t) {
                        m(t, c)
                    },
                    size: function() {
                        return a.length
                    },
                    observe: function(t) {
                        var e;
                        e = window.IntersectionObserver, r || (r = new e((function(t) {
                            if (t && t.length)
                                for (var e = t.length; e--;) {
                                    var n = t[e];
                                    h(n, a), h(n, c)
                                }
                        }), {
                            threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                        })), l[t.id] || (l[t.id] = !0, r.observe(t))
                    },
                    unobserve: function(t) {
                        r && l[t.id] && (delete l[t.id], r.unobserve(t))
                    }
                }
            },
            2445: function(t, e, n) {
                "use strict";
                n.d(e, {
                    ZP: function() {
                        return k
                    },
                    qG: function() {
                        return w
                    }
                });
                var r = n(6042),
                    i = n(5083),
                    o = n(1569),
                    u = n(7034),
                    a = n(817),
                    c = n(6599),
                    s = n(386),
                    l = "__CONTEXTUAL__";

                function f(t, e) {
                    var n = t.querySelector(e);
                    if (n) return n.getAttribute("content")
                }
                var d = n(4737),
                    p = n.n(d),
                    h = n(67);

                // function v(t) {
                //     return "string" == typeof t && /^\/\/(?:content\.api.ofilm|cdn\.localhost:3000)\.ir\//.test(t)
                // }

                function g(t) {
                    return "https:" + t
                }

                function m(t) {
                    var e = "file:" === window.location.protocol ? "https:" : "",
                        n = {
                            bidding: "//localhost:3000/js/player/v/8.24.4/bidding.js",
                            jwpsrv: "//localhost:3000/js/player/v/8.24.4/jwpsrv.js",
                            dai: "//localhost:3000/js/player/v/8.24.4/dai.js",
                            vast: "//localhost:3000/js/player/v/8.24.4/vast.js",
                            googima: "//localhost:3000/js/player/v/8.24.4/googima.js",
                            freewheel: "//localhost:3000/js/player/v/8.24.4/freewheel.js",
                            gapro: "//localhost:3000/js/player/v/8.24.4/gapro.js"
                        }[t];
                    return n ? e + n : ""
                }

                function y(t, e, n) {
                    e && (t[e.client || m(n)] = e, delete e.client)
                }

                function w(t) {
                    var e = (0, r.l7)({}, t.plugins),
                        n = (0, s.Z)(t.edition);
                    if (n("ads")) {
                        var i = (0, r.l7)({}, t.advertising),
                            o = i.client;
                        if (o) e[m(o) || o] = i, delete i.client;
                        i.bids && y(e, i.bids, "bidding")
                    }
                    if (n("jwpsrv")) {
                        var u = t.analytics;
                        u !== Object(u) && (u = {}), y(e, u, "jwpsrv")
                    }
                    return y(e, t.ga, "gapro"), e
                }

                function b(t) {
                    var e = (0, s.Z)(t.edition),
                        n = t.related,
                        i = !e("discovery") || n !== Object(n),
                        o = !n || "none" !== n.displayMode,
                        u = n || {},
                        a = void 0 === u.oncomplete ? "none" : u.oncomplete,
                        c = u.autoplaytimer;
                    !1 === a || t.repeat ? a = "hide" : "none" === a && (c = 0);
                    var l = "autoplay" === a && c <= 0 || "none" === a;
                    return (0, r.l7)({}, n, {
                        disableRelated: i,
                        showButton: o,
                        oncomplete: a,
                        autoplaytimer: c,
                        shouldAutoAdvance: l
                    })
                }
                var k = function(t, e) {
                    var s, d, m, y = (0, i.ZP)(t, e),
                        k = y.key || a.default.key,
                        C = new c.Z(k),
                        P = C.edition();
                    if ("free" === C.edition() && (y = (0, r.l7)({
                            skin: {
                                active: "#ff0046",
                                timeslider: {
                                    progress: "none"
                                }
                            },
                            logo: {
                                position: "control-bar",
                                file: p()
                            }
                        }, i.ke, (0, r.ei)(y, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "width"]))), y.key = k, y.edition = P, y.error = C.error(), y.generateSEOMetadata = y.generateSEOMetadata || !1, "unlimited" === P) {
                        var j = (0, o.getScriptPath)("jwplayer.js");
                        if (!j) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                        n.p = j
                    }
                    if (y.related = b(y), y.ab && (y.ab = function(t) {
                            var e = t.ab;
                            e.clone && (e = e.clone());
                            return Object.keys(e.tests).forEach((function(n) {
                                e.tests[n].forEach((function(e) {
                                    e.addConfig && e.addConfig(t, e.selection)
                                }))
                            })), e
                        }(y)), y.plugins = w(y), s = y.playlist, (0, r.HD)(s) && s.indexOf(l) > -1 && (y.playlist = function(t, e) {
                            var n = (t.querySelector("title") || {}).textContent,
                                r = f(t, 'meta[property="og:title"]'),
                                i = encodeURIComponent(r || n || ""),
                                o = f(t, 'meta[property="og:description"]') || f(t, 'meta[name="description"]');
                            return o && (i += "&page_description=" + encodeURIComponent(o)), e.replace(l, i)
                        }(document, y.playlist), y.contextual = !0), (0, u.isFileProtocol)()) {
                        var x = y,
                            S = x.playlist,
                            T = x.related;
                        v(S) && (y.playlist = g(S)), T && v(T.file) && (T.file = g(T.file))
                    }
                    return y.__abSendDomainToFeeds && (m = y.playlist, /\.jwplatform.com|\.jwplayer.com/.test(m)) && (y.playlist = (d = y.playlist, d += (-1 !== d.indexOf("?") ? "&" : "?") + "page_domain=" + encodeURIComponent((0, h.X)()))), y
                }
            },
            817: function(t, e, n) {
                "use strict";
                n.d(e, {
                    default: function() {
                        return ot
                    }
                });
                var r = n(6042),
                    i = setTimeout;

                function o() {}

                function u(t) {
                    if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
                }

                function a(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    0 !== t._state ? (t._handled = !0, u._immediateFn((function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(t._value)
                            } catch (t) {
                                return void s(e.promise, t)
                            }
                            c(e.promise, r)
                        } else(1 === t._state ? c : s)(e.promise, t._value)
                    }))) : t._deferreds.push(e)
                }

                function c(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof u) return t._state = 3, t._value = e, void l(t);
                            if ("function" == typeof n) return void d((r = n, i = e, function() {
                                r.apply(i, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, l(t)
                    } catch (e) {
                        s(t, e)
                    }
                    var r, i
                }

                function s(t, e) {
                    t._state = 2, t._value = e, l(t)
                }

                function l(t) {
                    2 === t._state && 0 === t._deferreds.length && u._immediateFn((function() {
                        t._handled || u._unhandledRejectionFn(t._value)
                    }));
                    for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function f(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function d(t, e) {
                    var n = !1;
                    try {
                        t((function(t) {
                            n || (n = !0, c(e, t))
                        }), (function(t) {
                            n || (n = !0, s(e, t))
                        }))
                    } catch (t) {
                        if (n) return;
                        n = !0, s(e, t)
                    }
                }
                u.prototype.catch = function(t) {
                    return this.then(null, t)
                }, u.prototype.then = function(t, e) {
                    var n = new this.constructor(o);
                    return a(this, new f(t, e, n)), n
                }, u.prototype.finally = function(t) {
                    var e = this.constructor;
                    return this.then((function(n) {
                        return e.resolve(t()).then((function() {
                            return n
                        }))
                    }), (function(n) {
                        return e.resolve(t()).then((function() {
                            return e.reject(n)
                        }))
                    }))
                }, u.all = function(t) {
                    return new u((function(e, n) {
                        if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                        var r = Array.prototype.slice.call(t);
                        if (0 === r.length) return e([]);
                        var i = r.length;

                        function o(t, u) {
                            try {
                                if (u && ("object" == typeof u || "function" == typeof u)) {
                                    var a = u.then;
                                    if ("function" == typeof a) return void a.call(u, (function(e) {
                                        o(t, e)
                                    }), n)
                                }
                                r[t] = u, 0 == --i && e(r)
                            } catch (t) {
                                n(t)
                            }
                        }
                        for (var u = 0; u < r.length; u++) o(u, r[u])
                    }))
                }, u.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === u ? t : new u((function(e) {
                        e(t)
                    }))
                }, u.reject = function(t) {
                    return new u((function(e, n) {
                        n(t)
                    }))
                }, u.race = function(t) {
                    return new u((function(e, n) {
                        for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
                    }))
                }, u._immediateFn = "function" == typeof setImmediate && function(t) {
                    setImmediate(t)
                } || function(t) {
                    i(t, 0)
                }, u._unhandledRejectionFn = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                };
                var p = u;
                window.Promise || (window.Promise = p);
                var h = n(1569),
                    v = n(6391),
                    g = n(2963),
                    m = n(670),
                    y = {
                        availableProviders: g.B,
                        registerProvider: m.Z
                    },
                    w = n(1241);
                y.registerPlugin = function(t, e, n) {
                    "jwpsrv" !== t && (0, w.f)(t, e, n)
                };
                var b = y,
                    k = n(6601),
                    C = n(4742),
                    P = n(8348),
                    j = n(623),
                    x = n(1643),
                    S = n(7411),
                    T = n(328),
                    E = n(4429),
                    O = 0;

                function A(t, e) {
                    var n = new j.Z(e);
                    return n.on(x.Rc, (function(e) {
                        t._qoe.tick("ready"), e.setupTime = t._qoe.between("setup", "ready")
                    })), n.on("all", (function(e, n) {
                        t.trigger(e, n)
                    })), n
                }

                function Z(t, e) {
                    var n = t.plugins,
                        r = Object.keys(n).map((function(t) {
                            var e = n[t];
                            return delete n[t], e
                        }));
                    e.get("setupConfig") && t.trigger("remove"), t.off(), e.playerDestroy(), r.forEach((function(t) {
                        if (t.destroy) try {
                            t.destroy()
                        } catch (t) {}
                    })), e.getContainer().removeAttribute("data-jwplayer-id")
                }

                function _(t) {
                    var e = ++O,
                        n = t.id || "player-" + e,
                        i = new S.Z,
                        o = {},
                        u = A(this, t);
                    i.tick("init"), t.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
                        id: {
                            enumerable: !0,
                            get: function() {
                                return n
                            }
                        },
                        uniqueId: {
                            enumerable: !0,
                            get: function() {
                                return e
                            }
                        },
                        plugins: {
                            enumerable: !0,
                            get: function() {
                                return o
                            }
                        },
                        _qoe: {
                            enumerable: !0,
                            get: function() {
                                return i
                            }
                        },
                        version: {
                            enumerable: !0,
                            get: function() {
                                return k.i
                            }
                        },
                        Events: {
                            enumerable: !0,
                            get: function() {
                                return T.ZP
                            }
                        },
                        utils: {
                            enumerable: !0,
                            get: function() {
                                return E.Z
                            }
                        },
                        _: {
                            enumerable: !0,
                            get: function() {
                                return r.ZP
                            }
                        }
                    }), (0, r.l7)(this, {
                        _events: {},
                        setup: function(e) {
                            return i.clear("ready"), i.tick("setup"), u && Z(this, u), (u = A(this, t)).init(e, this), this.on(e.events, null, this)
                        },
                        remove: function() {
                            return this.getPip() && this.setPip(!1),
                                function(t) {
                                    for (var e = v.Z.length; e--;)
                                        if (v.Z[e].uniqueId === t.uniqueId) {
                                            v.Z.splice(e, 1);
                                            break
                                        }
                                }(this), u && Z(this, u), Object.keys(o).forEach((function(t) {
                                    delete o[t]
                                })), this
                        },
                        qoe: function() {
                            var t = u.getItemQoe();
                            return {
                                setupTime: this._qoe.between("setup", "ready"),
                                firstFrame: t.getFirstFrame ? t.getFirstFrame() : null,
                                player: this._qoe.dump(),
                                item: t.dump()
                            }
                        },
                        addCues: function(t) {
                            return Array.isArray(t) && u.addCues(t), this
                        },
                        getAudioTracks: function() {
                            return u.getAudioTracks()
                        },
                        getBuffer: function() {
                            return u.get("buffer")
                        },
                        getCaptions: function() {
                            return u.get("captions")
                        },
                        getCaptionsList: function() {
                            return u.getCaptionsList()
                        },
                        getConfig: function() {
                            return u.getConfig()
                        },
                        getContainer: function() {
                            return u.getContainer()
                        },
                        getControls: function() {
                            return u.get("controls")
                        },
                        getCues: function() {
                            return u.get("cues")
                        },
                        getCurrentAudioTrack: function() {
                            return u.getCurrentAudioTrack()
                        },
                        getCurrentCaptions: function() {
                            return u.getCurrentCaptions()
                        },
                        getCurrentQuality: function() {
                            return u.getCurrentQuality()
                        },
                        getCurrentTime: function() {
                            return u.get("currentTime")
                        },
                        getDuration: function() {
                            return u.get("duration")
                        },
                        getEnvironment: function() {
                            return P
                        },
                        getFullscreen: function() {
                            return u.get("fullscreen")
                        },
                        getHeight: function() {
                            return u.getHeight()
                        },
                        getItemMeta: function() {
                            return u.get("itemMeta") || {}
                        },
                        getMute: function() {
                            return u.getMute()
                        },
                        getPercentViewable: function() {
                            return u.get("visibility")
                        },
                        getPip: function() {
                            return u.get("pip")
                        },
                        getPlaybackRate: function() {
                            return u.get("playbackRate")
                        },
                        getPlaylist: function() {
                            return u.get("playlist")
                        },
                        getPlaylistIndex: function() {
                            return u.get("item")
                        },
                        getPlaylistItem: function(t) {
                            if (!E.Z.exists(t)) return u.get("playlistItem");
                            var e = this.getPlaylist();
                            return e ? e[t] : null
                        },
                        getPosition: function() {
                            return u.get("position")
                        },
                        getProvider: function() {
                            return u.getProvider()
                        },
                        getQualityLevels: function() {
                            return u.getQualityLevels()
                        },
                        getSafeRegion: function(t) {
                            return void 0 === t && (t = !0), u.getSafeRegion(t)
                        },
                        getState: function() {
                            return u.getState()
                        },
                        getStretching: function() {
                            return u.get("stretching")
                        },
                        getViewable: function() {
                            return u.get("viewable")
                        },
                        getVisualQuality: function() {
                            return u.getVisualQuality()
                        },
                        getVolume: function() {
                            return u.get("volume")
                        },
                        getWidth: function() {
                            return u.getWidth()
                        },
                        setCaptions: function(t) {
                            return u.setCaptions(t), this
                        },
                        setConfig: function(t) {
                            return u.setConfig(t), this
                        },
                        setControls: function(t) {
                            return u.setControls(t), this
                        },
                        setCurrentAudioTrack: function(t) {
                            u.setCurrentAudioTrack(t)
                        },
                        setCurrentCaptions: function(t) {
                            u.setCurrentCaptions(t)
                        },
                        setCurrentQuality: function(t) {
                            u.setCurrentQuality(t)
                        },
                        setFullscreen: function(t) {
                            return u.setFullscreen(t), this
                        },
                        setAllowFullscreen: function(t) {
                            return u.setAllowFullscreen(t), this
                        },
                        setMute: function(t) {
                            return u.setMute(t), this
                        },
                        setPip: function(t) {
                            return u.setPip(t), this
                        },
                        setPlaybackRate: function(t) {
                            return u.setPlaybackRate(t), this
                        },
                        setPlaylistItem: function(t, e) {
                            return u.setPlaylistItem(t, e), this
                        },
                        setCues: function(t) {
                            return Array.isArray(t) && u.setCues(t), this
                        },
                        setVolume: function(t) {
                            return u.setVolume(t), this
                        },
                        load: function(t, e) {
                            return u.load(t, e), this
                        },
                        play: function(t) {
                            return u.play(t), this
                        },
                        pause: function(t) {
                            return u.pause(t), this
                        },
                        playToggle: function(t) {
                            switch (this.getState()) {
                                case x.r0:
                                case x.Kb:
                                    return this.pause(t);
                                default:
                                    return this.play(t)
                            }
                        },
                        seek: function(t, e) {
                            return u.seek(t, e), this
                        },
                        playlistItem: function(t, e) {
                            return u.playlistItem(t, e), this
                        },
                        playlistNext: function(t) {
                            return u.playlistNext(t), this
                        },
                        playlistPrev: function(t) {
                            return u.playlistPrev(t), this
                        },
                        next: function(t) {
                            return u.next(t), this
                        },
                        requestPip: function(t) {
                            return u.requestPip(t), this
                        },
                        castToggle: function() {
                            return u.castToggle(), this
                        },
                        stopCasting: function() {
                            return u.stopCasting(), this
                        },
                        createInstream: function() {
                            return u.createInstream()
                        },
                        stop: function() {
                            return u.stop(), this
                        },
                        resize: function(t, e) {
                            return u.resize(t, e), this
                        },
                        addButton: function(t, e, n, r, i) {
                            return u.addButton(t, e, n, r, i), this
                        },
                        removeButton: function(t) {
                            return u.removeButton(t), this
                        },
                        attachMedia: function() {
                            return u.attachMedia(), this
                        },
                        detachMedia: function() {
                            return u.detachMedia(), this
                        },
                        isBeforeComplete: function() {
                            return u.isBeforeComplete()
                        },
                        isBeforePlay: function() {
                            return u.isBeforePlay()
                        },
                        setPlaylistItemCallback: function(t, e) {
                            u.setItemCallback(t, e)
                        },
                        removePlaylistItemCallback: function() {
                            u.setItemCallback(null)
                        },
                        getPlaylistItemPromise: function(t) {
                            return u.getItemPromise(t)
                        },
                        getFloating: function() {
                            return !!u.get("isFloating")
                        },
                        setFloating: function(t) {
                            u.setConfig({
                                floating: {
                                    mode: t ? "always" : "never"
                                }
                            })
                        }
                    })
                }(0, r.l7)(_.prototype, {
                    on: function(t, e, n) {
                        return T.on.call(this, t, e, n)
                    },
                    once: function(t, e, n) {
                        return T.IH.call(this, t, e, n)
                    },
                    off: function(t, e, n) {
                        return T.S1.call(this, t, e, n)
                    },
                    trigger: function(t, e) {
                        return (e = r.ZP.isObject(e) ? (0, r.l7)({}, e) : {}).type = t, C.Z.debug ? T.X$.call(this, t, e) : T.wj.call(this, t, e)
                    },
                    getPlugin: function(t) {
                        return this.plugins[t]
                    },
                    addPlugin: function(t, e) {
                        this.plugins[t] = e, this.on("ready", e.addToPlayer), e.resize && this.on("resize", e.resizeHandler)
                    },
                    registerPlugin: function(t, e, n) {
                        (0, w.f)(t, e, n)
                    },
                    getAdBlock: function() {
                        return !1
                    },
                    playAd: function(t) {},
                    pauseAd: function(t) {},
                    skipAd: function() {}
                }), n.p = (0, h.loadFrom)();
                var M = function(t) {
                    var e, n;
                    if (t ? "string" == typeof t ? (e = F(t)) || (n = document.getElementById(t)) : "number" == typeof t ? e = v.Z[t] : t.nodeType && (e = F((n = t).id || n.getAttribute("data-jwplayer-id"))) : e = v.Z[0], e) return e;
                    if (n) {
                        var r = new _(n);
                        return v.Z.push(r), r
                    }
                    return {
                        registerPlugin: w.f
                    }
                };

                function F(t) {
                    for (var e = 0; e < v.Z.length; e++)
                        if (v.Z[e].id === t) return v.Z[e];
                    return null
                }

                function I(t) {
                    Object.defineProperties(t, {
                        api: {
                            get: function() {
                                return b
                            },
                            set: function() {}
                        },
                        version: {
                            get: function() {
                                return k.i
                            },
                            set: function() {}
                        },
                        debug: {
                            get: function() {
                                return C.Z.debug
                            },
                            set: function(t) {
                                C.Z.debug = !!t
                            }
                        }
                    })
                }
                I(M);
                var L = M,
                    N = n(5882),
                    B = n(6599),
                    D = n(676),
                    R = n(5592),
                    q = n(6769),
                    z = n(9025),
                    U = r.ZP.extend,
                    H = {};
                H._ = r.ZP, H.utils = (0, r.l7)(E.Z, {
                    key: B.Z,
                    extend: U,
                    scriptloader: D.ZP,
                    rssparser: {
                        parse: q.Z
                    },
                    tea: R.Z,
                    UI: N.ZP
                }), H.utils.css.style = H.utils.style, H.vid = z.Z;
                var V = H,
                    G = n(7543),
                    W = /^(?:on(?:ce)?|off|trigger)$/;

                function K(t) {
                    var e = {};
                    Q(this, t, t, e), Q(this, t, _.prototype, e)
                }

                function Q(t, e, n, r) {
                    var i = Object.keys(n);
                    i.forEach((function(o) {
                        "function" == typeof n[o] && "Events" !== o ? t[o] = X(t, e, o, i, r) : "_events" === o ? t._events = {} : Object.defineProperty(t, o, {
                            enumerable: !0,
                            get: function() {
                                return n[o]
                            }
                        })
                    }))
                }

                function X(t, e, n, r, i) {
                    return function() {
                        var o = Array.prototype.slice.call(arguments),
                            u = o[0],
                            a = e._trackCallQueue || (e._trackCallQueue = []),
                            c = W.test(n),
                            s = c && o[1] && o[1]._callback,
                            l = i.edition || J(e, i, "edition"),
                            f = "free" === l;
                        if (f) {
                            var d = ["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"];
                            if (d.indexOf(n) > -1) return $(n), t;
                            var p = ["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"];
                            if (p.indexOf(n) > -1) return $(n), null
                        }
                        if (s || a.push([n, u]), c) return et(e, a), e[n].apply(t, o);
                        Y(n, o);
                        var h = e[n].apply(e, o);
                        return "remove" === n ? e.off.call(t) : "setup" === n && (e.off.call(t), e.off(u.events, null, e), e.on.call(t, u.events, null, t), e.on("all", (function(n, o) {
                            if ("ready" === n) {
                                var u = Object.keys(e).filter((function(t) {
                                        return "_" !== t[0] && -1 === r.indexOf(t) && "function" == typeof e[t]
                                    })),
                                    c = r.concat(u);
                                u.forEach((function(n) {
                                    t[n] = X(t, e, n, c, i)
                                }))
                            }
                            e.trigger.call(t, n, o), et(e, a)
                        }))), et(e, a), h === e ? t : h
                    }
                }

                function J(t, e, n) {
                    var r = t.getConfig()[n];
                    return e[n] = r, r
                }

                function $(t) {
                    console.warn("The API method jwplayer()." + t + "() is disabled in the free edition of JW Player.")
                }

                function Y(t, e) {
                    var n = {
                        reason: !("play" === t || "seek" === t || "pause" === t) && (0, G.C)() ? "interaction" : "external"
                    };
                    switch (t) {
                        case "play":
                        case "pause":
                        case "playToggle":
                        case "playlistNext":
                        case "playlistPrev":
                        case "next":
                            e[0] = n;
                            break;
                        case "seek":
                        case "playlistItem":
                            e[1] = n
                    }
                }

                function tt(t, e, n) {
                    try {
                        var r = function(t, e) {
                            switch (t) {
                                case "setup":
                                    return !!e;
                                case "getSafeRegion":
                                case "pauseAd":
                                case "setControls":
                                case "setFullscreen":
                                case "setMute":
                                    return !!e === e ? e : void 0;
                                case "setPlaylistItem":
                                case "getPlaylistItem":
                                    return (0 | e) === e ? e : void 0;
                                case "setPlaybackRate":
                                case "setVolume":
                                    return Number(e);
                                case "setConfig":
                                    return Object.keys(Object(e)).join(",");
                                case "on":
                                case "once":
                                case "off":
                                case "trigger":
                                case "getPlugin":
                                case "addPlugin":
                                case "registerPlugin":
                                    return "" + e
                            }
                            return null
                        }(e, n);
                        t.trackExternalAPIUsage(e, r)
                    } catch (t) {
                        C.Z.debug && console.warn(t)
                    }
                }

                function et(t, e) {
                    if (e.length) {
                        var n = t.getPlugin("jwpsrv");
                        n && n.trackExternalAPIUsage && (e.forEach((function(t) {
                            tt(n, t[0], t[1])
                        })), e.length = 0)
                    }
                }
                var nt = window;
                (0, r.l7)(L, V);
                var rt = function(t) {
                    var e = L(t);
                    return e.uniqueId ? e._publicApi || (e._publicApi = new K(e)) : e
                };
                (0, r.l7)(rt, V), I(rt), "function" == typeof nt.define && nt.define.amd && nt.define([], (function() {
                    return rt
                }));
                var it = rt;
                nt.jwplayer && (it = nt.jwplayer);
                var ot = it
            },
            3487: function(t, e, n) {
                "use strict";
                n.d(e, {
                    MK: function() {
                        return i
                    },
                    Nq: function() {
                        return o
                    },
                    bX: function() {
                        return u
                    }
                });
                var r = n(7164),
                    i = r.MK,
                    o = r.Nq;

                function u(t) {
                    var e = (0, r.bX)(t);
                    if (!t) return e;
                    switch ((0, r.Nq)(t)) {
                        case "jwpsrv":
                            e = 305001;
                            break;
                        case "googima":
                            e = 305002;
                            break;
                        case "vast":
                            e = 305003;
                            break;
                        case "freewheel":
                            e = 305004;
                            break;
                        case "dai":
                            e = 305005;
                            break;
                        case "gapro":
                            e = 305006;
                            break;
                        case "bidding":
                            e = 305007
                    }
                    return e
                }
            },
            1918: function(t, e, n) {
                "use strict";
                n.d(e, {
                    w0: function() {
                        return c
                    },
                    lD: function() {
                        return s
                    },
                    Gb: function() {
                        return l
                    },
                    d3: function() {
                        return f
                    }
                });
                var r, i = n(386),
                    o = [{
                        configName: "clearkey",
                        keyName: "org.w3.clearkey"
                    }, {
                        configName: "widevine",
                        keyName: "com.widevine.alpha"
                    }, {
                        configName: "playready",
                        keyName: "com.microsoft.playready"
                    }],
                    u = [],
                    a = {};

                function c(t) {
                    return t.some((function(t) {
                        return !!t.drm || t.sources.some((function(t) {
                            return !!t.drm
                        }))
                    }))
                }

                function s(t) {
                    return r || ((navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && (0, i.Z)(t)("drm") ? (o.forEach((function(t) {
                        var e, n, r = (e = t.keyName, n = [{
                            initDataTypes: ["cenc"],
                            videoCapabilities: [{
                                contentType: 'video/mp4;codecs="avc1.4d401e"'
                            }],
                            audioCapabilities: [{
                                contentType: 'audio/mp4;codecs="mp4a.40.2"'
                            }]
                        }], navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(e, n) : new Promise((function(t, n) {
                            var r;
                            try {
                                r = new window.MSMediaKeys(e)
                            } catch (t) {
                                return void n(t)
                            }
                            t(r)
                        }))).then((function() {
                            a[t.configName] = !0
                        })).catch((function() {
                            a[t.configName] = !1
                        }));
                        u.push(r)
                    })), r = Promise.all(u)) : Promise.resolve())
                }

                function l(t) {
                    return a[t]
                }

                function f(t) {
                    if (r) return Object.keys(t).some((function(t) {
                        return l(t)
                    }))
                }
            },
            2963: function(t, e, n) {
                "use strict";
                n.d(e, {
                    B: function() {
                        return d
                    }
                });
                var r = n(6593),
                    i = n(8348),
                    o = n(386),
                    u = n(6042),
                    a = n(1918),
                    c = n(9025),
                    s = (0, u.sE)(r.B, (0, u.wB)({
                        name: "html5"
                    })),
                    l = s.supports;

                function f(t) {
                    var e = window.MediaSource;
                    return (0, u.$6)(t, (function(t) {
                        return !!e && !!e.isTypeSupported && e.isTypeSupported(t)
                    }))
                }
                s.supports = function(t, e) {
                    var n = l.apply(this, arguments);
                    if (n && t.drm && "hls" === t.type) {
                        var r = (0, o.Z)(e),
                            i = r("drm");
                        if (i && t.drm.fairplay) {
                            var u = window.WebKitMediaKeys;
                            return u && u.isTypeSupported && u.isTypeSupported("com.apple.fps.1_0", "video/mp4")
                        }
                        return i
                    }
                    return n
                }, r.B.push({
                    name: "shaka",
                    supports: function(t) {
                        return !(t.drm && !(0, a.d3)(t.drm)) && (!(!window.HTMLVideoElement || !window.MediaSource) && (f(t.mediaTypes) && ("dash" === t.type || "mpd" === t.type || (t.file || "").indexOf("mpd-time-csf") > -1)))
                    }
                }), r.B.unshift({
                    name: "hlsjs",
                    supports: function(t) {
                        return function(t) {
                            if (t.drm) return !1;
                            var e = t.file.indexOf(".m3u8") > -1,
                                n = "hls" === t.type || "m3u8" === t.type;
                            if (!e && !n) return !1;
                            var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major || i.OS.tizen,
                                o = i.Browser.safari && (!c.Z.canPlayType || !c.Z.canPlayType("application/vnd.apple.mpegURL")),
                                u = i.OS.android && !1 === t.hlsjsdefault,
                                a = i.Browser.safari && !!t.safarihlsjs;
                            return f(t.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']) && (r || a || o) && !u
                        }(t)
                    }
                });
                var d = r.B
            },
            2303: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return d
                    }
                });
                var r = n(6042),
                    i = n(2963),
                    o = n(12),
                    u = n(670),
                    a = n(2894),
                    c = {
                        html5: function() {
                            return n.e(250).then(function(t) {
                                var e = n(9181).default;
                                return (0, u.Z)(e), e
                            }.bind(null, n)).catch((0, a.Ep)(152))
                        }
                    };
                (0, r.l7)(c, {
                    shaka: function() {
                        return n.e(371).then(function(t) {
                            var e = n(2287).default;
                            return (0, u.Z)(e), e
                        }.bind(null, n)).catch((0, a.Ep)(154))
                    },
                    hlsjs: function() {
                        return n.e(98).then(function(t) {
                            var e = n(9054).default;
                            return (0, u.Z)(e), e
                        }.bind(null, n)).catch((0, a.Ep)(153))
                    }
                });
                var s = c;

                function l(t) {
                    this.config = t || {}
                }(0, r.l7)(l.prototype, {
                    load: function(t) {
                        var e = s[t],
                            n = function() {
                                return Promise.reject(new Error("Failed to load media"))
                            };
                        return e ? e().then((function() {
                            var e = o.U[t];
                            return e || n()
                        })) : n()
                    },
                    providerSupports: function(t, e) {
                        return t.supports(e)
                    },
                    choose: function(t) {
                        if (t === Object(t))
                            for (var e = i.B.length, n = 0; n < e; n++) {
                                var r = i.B[n];
                                if (this.providerSupports(r, t)) return {
                                    priority: e - n - 1,
                                    name: r.name,
                                    type: t.type,
                                    providerToCheck: r,
                                    provider: o.U[r.name]
                                }
                            }
                        return {}
                    }
                });
                var f = l;
                f.prototype.providerSupports = function(t, e) {
                    return t.supports(e, this.config.edition)
                };
                var d = f
            },
            5140: function(t, e, n) {
                "use strict";
                n.d(e, {
                    t: function() {
                        return r
                    }
                });
                var r = window.atob
            },
            386: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return p
                    }
                });
                var r = "free",
                    i = "starter",
                    o = "business",
                    u = "premium",
                    a = "enterprise",
                    c = "developer",
                    s = "platinum",
                    l = "ads",
                    f = "unlimited",
                    d = "trial";

                function p(t) {
                    var e = {
                        setup: [r, i, o, u, a, c, l, f, d, s],
                        drm: [a, c, l, f, d],
                        ads: [l, f, d, s, a, c, o],
                        jwpsrv: [r, i, o, u, a, c, l, d, s, "invalid"],
                        discovery: [l, a, c, d, f]
                    };
                    return function(n) {
                        return e[n] && e[n].indexOf(t) > -1
                    }
                }
            },
            560: function(t, e) {
                "use strict";
                var n = function t() {
                    return t._iframe
                };
                n.mock = function(t) {
                    n._iframe = t
                }, n.unmock = function() {
                    n._iframe = n._original
                }, n._iframe = window.top !== window.self, n._original = n._iframe, e.Z = n
            },
            6599: function(t, e, n) {
                "use strict";
                n.d(e, {
                    u: function() {
                        return a
                    }
                });
                var r = n(5592),
                    i = n(386),
                    o = n(5140),
                    u = n(4446),
                    a = 100013,
                    c = "invalid";
                e.Z = function(t) {
                    var e, n, s;
                    try {
                        var l = (0, r.Z)(t || "", (0, o.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
                        if ("pro" === (e = l[0]) && (e = "premium"), (0, i.Z)(e)("setup") || (e = c), l.length > 2) {
                            n = l[1];
                            var f = parseInt(l[2]);
                            f > 0 && (s = new Date).setTime(f)
                        }
                    } catch (t) {
                        e = c
                    }
                    this.edition = function() {
                        return e
                    }, this.token = function() {
                        return n
                    }, this.expiration = function() {
                        return s
                    }, this.duration = function() {
                        return s ? s.getTime() - (new Date).getTime() : 0
                    }, this.error = function() {
                        var r;
                        return void 0 === t ? r = 100011 : e !== c && n ? this.duration() < 0 && (r = a) : r = 100012, r ? new u.rG(u.pJ, r) : null
                    }
                }
            },
            67: function(t, e, n) {
                "use strict";
                n.d(e, {
                    X: function() {
                        return i
                    }
                });
                var r = n(560);

                function i() {
                    var t, e, n = window.location.host;
                    if ((0, r.Z)()) {
                        n = (document.referrer ? (t = document.referrer, (e = document.createElement("a")).href = t, e) : {}).host;
                        try {
                            n = n || window.top.location.host
                        } catch (t) {}
                    }
                    return n
                }
            },
            5592: function(t, e, n) {
                "use strict";
                n.d(e, {
                    Z: function() {
                        return o
                    }
                });
                var r = n(5140);

                function i(t) {
                    for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
                    return e
                }

                function o(t, e) {
                    if (t = String(t), e = String(e), 0 === t.length) return "";
                    for (var n, o, u, a = i((0, r.t)(t)), c = i((n = e, unescape(encodeURIComponent(n))).slice(0, 16)), s = a.length, l = 2654435769, f = a[s - 1], d = a[0], p = Math.floor(6 + 52 / s) * l; p;) {
                        u = p >>> 2 & 3;
                        for (var h = s - 1; h >= 0; h--) o = ((f = a[h > 0 ? h - 1 : s - 1]) >>> 5 ^ d << 2) + (d >>> 3 ^ f << 4) ^ (p ^ d) + (c[3 & h ^ u] ^ f), d = a[h] -= o;
                        p -= l
                    }
                    return function(t) {
                        try {
                            return decodeURIComponent(escape(t))
                        } catch (e) {
                            return t
                        }
                    }(function(t) {
                        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
                        return e.join("")
                    }(a).replace(/\0+$/, ""))
                }
            },
            9563: function(t) {
                var e, n, r = {},
                    i = {},
                    o = (e = function() {
                        return document.head || document.getElementsByTagName("head")[0]
                    }, function() {
                        return void 0 === n && (n = e.apply(this, arguments)), n
                    });

                function u(t) {
                    var e = document.createElement("style");
                    return e.type = "text/css", e.setAttribute("data-jwplayer-id", t),
                        function(t) {
                            o().appendChild(t)
                        }(e), e
                }

                function a(t, e) {
                    var n, r, o, a = i[t];
                    a || (a = i[t] = {
                        element: u(t),
                        counter: 0
                    });
                    var c = a.counter++;
                    return n = a.element, o = function() {
                            l(n, c, "")
                        }, (r = function(t) {
                            l(n, c, t)
                        })(e.css),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media) return;
                                r((e = t).css)
                            } else o()
                        }
                }
                t.exports = {
                    style: function(t, e) {
                        ! function(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n],
                                    o = (r[t] || {})[i.id];
                                if (o) {
                                    for (var u = 0; u < o.parts.length; u++) o.parts[u](i.parts[u]);
                                    for (; u < i.parts.length; u++) o.parts.push(a(t, i.parts[u]))
                                } else {
                                    var c = [];
                                    for (u = 0; u < i.parts.length; u++) c.push(a(t, i.parts[u]));
                                    r[t] = r[t] || {}, r[t][i.id] = {
                                        id: i.id,
                                        parts: c
                                    }
                                }
                            }
                        }(e, function(t) {
                            for (var e = [], n = {}, r = 0; r < t.length; r++) {
                                var i = t[r],
                                    o = i[0],
                                    u = {
                                        css: i[1],
                                        media: i[2]
                                    };
                                n[o] ? n[o].parts.push(u) : e.push(n[o] = {
                                    id: o,
                                    parts: [u]
                                })
                            }
                            return e
                        }(t))
                    },
                    clear: function(t, e) {
                        var n = r[t];
                        if (!n) return;
                        if (e) {
                            var i = n[e];
                            if (i)
                                for (var o = 0; o < i.parts.length; o += 1) i.parts[o]();
                            return
                        }
                        for (var u = Object.keys(n), a = 0; a < u.length; a += 1)
                            for (var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
                        delete r[t]
                    }
                };
                var c, s = (c = [], function(t, e) {
                    return c[t] = e, c.filter(Boolean).join("\n")
                });

                function l(t, e, n) {
                    if (t.styleSheet) t.styleSheet.cssText = s(e, n);
                    else {
                        var r = document.createTextNode(n),
                            i = t.childNodes[e];
                        i ? t.replaceChild(r, i) : t.appendChild(r)
                    }
                }
            },
            4737: function(t) {
                t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>'
            }
        },
        r = {};

    function i(t) {
        var e = r[t];
        if (void 0 !== e) return e.exports;
        var o = r[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return n[t].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
    }
    i.m = n, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, {
                a: e
            }), e
        }, i.d = function(t, e) {
            for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }, i.f = {}, i.e = function(t) {
            return Promise.all(Object.keys(i.f).reduce((function(e, n) {
                return i.f[n](t, e), e
            }), []))
        }, i.u = function(t) {
            return {
                63: "polyfills.webvtt",
                74: "jwplayer.controls.tizen",
                98: "provider.hlsjs",
                168: "jwplayer.amp",
                207: "jwplayer.core.controls.html5",
                250: "provider.html5",
                347: "vttparser",
                365: "related",
                371: "provider.shaka",
                493: "jwplayer.core.controls.polyfills",
                520: "provider.airplay",
                581: "jwplayer.core.controls",
                605: "jwplayer.core.controls.polyfills.html5",
                681: "jwplayer.core",
                716: "jwplayer.controls",
                926: "jwplayer.stats",
                943: "polyfills.intersection-observer",
                977: "provider.cast"
            }[t] + ".js"
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, t = {}, e = "jwplayer:", i.l = function(n, r, o, u) {
            if (t[n]) t[n].push(r);
            else {
                var a, c;
                if (void 0 !== o)
                    for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                        var f = s[l];
                        if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == e + o) {
                            a = f;
                            break
                        }
                    }
                a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 55, i.nc && a.setAttribute("nonce", i.nc), a.setAttribute("data-webpack", e + o), a.src = n), t[n] = [r];
                var d = function(e, r) {
                        a.onerror = a.onload = null, clearTimeout(p);
                        var i = t[n];
                        if (delete t[n], a.parentNode && a.parentNode.removeChild(a), i && i.forEach((function(t) {
                                return t(r)
                            })), e) return e(r)
                    },
                    p = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 55e3);
                a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), c && document.head.appendChild(a)
            }
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.nmd = function(t) {
            return t.paths = [], t.children || (t.children = []), t
        }, i.p = "",
        function() {
            var t = {
                313: 0
            };
            i.f.j = function(e, n) {
                var r = i.o(t, e) ? t[e] : void 0;
                if (0 !== r)
                    if (r) n.push(r[2]);
                    else {
                        var o = new Promise((function(n, i) {
                            r = t[e] = [n, i]
                        }));
                        n.push(r[2] = o);
                        var u = i.p + i.u(e),
                            a = new Error;
                        i.l(u, (function(n) {
                            if (i.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                                var o = n && ("load" === n.type ? "missing" : n.type),
                                    u = n && n.target && n.target.src;
                                a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + u + ")", a.name = "ChunkLoadError", a.type = o, a.request = u, r[1](a)
                            }
                        }), "chunk-" + e, e)
                    }
            };
            var e = function(e, n) {
                    var r, o, u = n[0],
                        a = n[1],
                        c = n[2],
                        s = 0;
                    if (u.some((function(e) {
                            return 0 !== t[e]
                        }))) {
                        for (r in a) i.o(a, r) && (i.m[r] = a[r]);
                        if (c) c(i)
                    }
                    for (e && e(n); s < u.length; s++) o = u[s], i.o(t, o) && t[o] && t[o][0](), t[u[s]] = 0
                },
                n = self.webpackChunkjwplayer = self.webpackChunkjwplayer || [];
            n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
        }();
    var o = i(817);
    window.jwplayer = o.default
}();