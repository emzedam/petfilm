!(function() {
    var x = 4,
        j = {
            pro: 1,
            premium: 2,
            ads: 3,
            invalid: x,
            enterprise: 6,
            trial: 7,
            platinum: 8,
            starter: 9,
            business: 10,
            developer: 11,
        },
        B = { viewable: 2 },
        e = "DATA_EVENT_PLAY",
        a = "DATA_EVENT_META",
        t = "DATA_EVENT_LEVELS",
        n = "DATA_EVENT_FIRST_FRAME",
        y = 128,
        r = ["auto", "initial choice"],
        o = ["playlistItem", "playAttempt", "time", "adBreakEnd"],
        R = 0,
        b = 20;
    var M =
        Object.assign ||
        function(e) {
            for (
                var a = arguments.length, t = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++
            )
                t[n - 1] = arguments[n];
            return t.reduce(function(e, a) {
                return (
                    (t = e),
                    (n = a) &&
                    Object.keys(n).forEach(function(e) {
                        t[e] = n[e];
                    }),
                    t
                );
                var t, n;
            }, e);
        };

    function i() {
        try {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues)
                return e.getRandomValues(new Uint32Array(1))[0].toString(36);
        } catch (e) {}
        return Math.random().toString(36).slice(2, 9);
    }

    function V(e) {
        for (var a = ""; a.length < e;) a += i();
        return a.slice(0, e);
    }

    function L(e) {
        if (e) {
            if (/vast/.test(e)) return 0;
            if (/googima/.test(e)) return 1;
            if (/freewheel/.test(e)) return 2;
            if (/dai/.test(e)) return 3;
        }
        return -1;
    }

    function d(e) {
        return /^[a-zA-Z0-9]{8}$/.test(e);
    }

    function l(e) {
        var a = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        if ("number" != typeof e) return null;
        var t = e / 1e3;
        return a ? Math.round(t) : t;
    }

    function u(e, a) {
        return e + "-" + a;
    }

    function p(e, a) {
        return a.split(".").reduce(function(e, a) {
            return e ? e[a] : void 0;
        }, e);
    }

    function c(e) {
        var a = {};
        for (var t in e)
            if ("object" == typeof e[t]) {
                var n = c(e[t]);
                for (var r in n) n.hasOwnProperty(r) && (a[t + "." + r] = n[r]);
            } else a[t] = e[t];
        return a;
    }

    function s(e) {
        if (e) return e.version;
    }

    function A(e) {
        for (var a = e.length, t = 0; t < e.length; t++) {
            var n = e.charCodeAt(t),
                r = n;
            55296 <= n &&
                n <= 56319 &&
                t < e.length - 1 &&
                ((r = 1024 * (n - 55296) + e.charCodeAt(t + 1) - 56320 + 65536), t++),
                128 <= r && r <= 2047 ?
                (a += 1) :
                2048 <= r && r <= 65535 ?
                (a += 2) :
                65536 <= r && r <= 1114111 && (a += 2);
        }
        return a;
    }
    var f = a;

    function h(e) {
        var a = e.getContainer().querySelector("video");
        return a && a.currentTime ? a.currentTime : e.getPosition();
    }

    function m(a) {
        try {
            return a.getPlaylistItem();
        } catch (e) {
            var t = a.getPlaylistIndex();
            return a.getConfig().playlist[t] || null;
        }
    }

    function g(e) {
        if ("function" != typeof e.getProvider) return "";
        var a = e.getProvider();
        return a ? a.name : "";
    }
    var k = void 0;

    function O(e) {
        var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            t = e.getVisualQuality(),
            n = void 0;
        if (t && t.level) {
            var r = "string" == typeof t.mode ? "auto" === t.mode : null;
            n = {
                width: t.level.width,
                height: t.level.height,
                bitrate: l(t.level.bitrate),
                reason: t.reason,
                adaptiveBitrateMode: r,
            };
        } else
            n = {
                width: null,
                height: null,
                bitrate: null,
                reason: null,
                adaptiveBitrateMode: null,
            };
        return (k && !a) || (k = n), n;
    }

    function D(e) {
        var a = e.external.playerAPI,
            t = e.meta.playbackEvents,
            n = a.getDuration();
        if (n <= 0) {
            var r = t[f];
            r && (n = r.duration);
        }
        return 0 | n;
    }

    function v(e, a) {
        var t = e.playerData.startup;
        null === t.startupTime &&
            null !== t.initialTime &&
            ((t.startupTime = 10 * Math.round((Date.now() - t.initialTime) / 10)),
                (t.dispatchEvent = a));
    }

    function G(e) {
        var a = e.getConfig().setupConfig;
        if (a) {
            var i,
                o,
                d,
                l,
                t = window.jwplayer.defaults,
                n = M({}, t, a);
            return (
                delete n.advertising,
                JSON.stringify(
                    n,
                    ((i = n),
                        (o = []),
                        (d = []),
                        (l = 0),
                        function(e, a) {
                            if ("object" != typeof a)
                                return "function" == typeof a ? "__FUNCTION__" : a;
                            if (null === a || a instanceof Date || a instanceof RegExp)
                                return a;
                            if (Uint8Array && a instanceof Uint8Array) {
                                var t = "" + a;
                                return (
                                    (t = 40 < t.length ? t.substr(0, 40) : t),
                                    "Uint8Array(" + a.length + ") [" + t + "]"
                                );
                            }
                            if (Array.isArray(a) && 100 < a.length)
                                return "Array(" + a.length + ")";
                            if (a === i && 0 < l) return "<parent object>";
                            var n = o.indexOf(a);
                            if (-1 !== n) {
                                var r = d[n];
                                if (r) return r;
                                try {
                                    JSON.stringify(a);
                                } catch (e) {
                                    return (d[n] = "__CIRCULAR__");
                                }
                                d[n] = a;
                            }
                            return 1e4 < l++ ? "<complexity exceeded>" : (o.push(a), a);
                        })
                )
            );
        }
    }
    var w = { UNKNOWN: 999, IAB: 0 },
        S = { noBid: 0, bid: 1, timeout: 2, invalid: 3, abort: 4, error: 5 },
        N = {
            numCompanions: -1,
            podCount: 0,
            podIndex: 0,
            linear: -1,
            vastVersion: -1,
            adSystem: null,
            adCreativeType: null,
            adposition: -1,
            tagdomain: null,
            position: void 0,
            previousQuartile: 0,
            duration: void 0,
            witem: 1,
            wcount: 1,
            preload: void 0,
            adMediaFileURL: void 0,
            description: null,
            creativeAdId: null,
            creativeId: null,
            adTitle: null,
            adVastId: null,
            jwpseg: void 0,
            placement: void 0,
            timeForVPBCache: null,
            advertiser: null,
            advertiserId: null,
        },
        I = {
            consecutiveVisibleSeconds: 0,
            maxConsecutiveVisibleSeconds: 0,
            totalVisibleSeconds: 0,
        },
        T = /^IAB(\d+(?:-\d+)?)$/,
        P = {
            adRequest: "ar",
            adImpression: "i",
            adSkipped: "s",
            adError: "ae",
            adBidResponse: "abr",
            adClick: "c",
            adLoaded: "al",
            adViewableImpression: "vi",
            adBidRequest: "abq",
        },
        E = ["adStarted", "adMeta"],
        C = ["adTime", "adClick"],
        q = [
            "adBreakStart",
            "adMeta",
            "adImpression",
            "adViewableImpression",
            "adPlay",
            "adPause",
            "adTime",
            "adCompanions",
            "adClick",
            "adSkipped",
            "adComplete",
            "adError",
        ],
        F = { dfp: 0, jwp: 1, jwpdfp: 2, jwpspotx: 3 },
        U = [
            "id",
            "type",
            "pubid",
            "result",
            "code",
            "winner",
            "priceInCents",
            "grossPriceInCents",
            "timeForBidResponse",
            "requestId",
            "cacheKey",
            "dealId",
        ],
        _ = /[?&]iu=([^&]+)/,
        Q = "error",
        z = "s",
        K = "ana",
        W = "t",
        H = "prp",
        $ = "vsh",
        J = "paf",
        X = "bs",
        Y = "fs",
        Z = "fc",
        ee = "aa",
        ae = "gab",
        te = "xapi",
        ne = "cpt",
        re = "ph",
        ie = "n",
        oe = "e",
        de = "i",
        le = "as",
        ue = "ar",
        ce = "avp",
        se = "avg",
        pe = "ers",
        fe = "err",
        me = {
            events: {
                "aa-jwplayer6": {
                    code: "aa",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "fct",
                        "fed",
                        "fid",
                        "fin",
                        "fns",
                        "fsid",
                        "fsr",
                        "ft",
                        "mu",
                        "os",
                        "ovta",
                        "psd",
                    ],
                    filters: ["missingFeedID"],
                    pingDestination: "main",
                },
                "abr-clienta": {
                    code: "abr",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["apr", "tfvc"],
                    pingDestination: "main",
                },
                "abq-clienta": {
                    code: "abq",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["apr", "bpv", "ipv", "rtp", "tpi"],
                    pingDestination: "main",
                },
                "ae-clienta": {
                    code: "ae",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: [
                        "ad",
                        "add",
                        "adid",
                        "adt",
                        "adv",
                        "advi",
                        "aec",
                        "aem",
                        "amu",
                        "apr",
                        "apt",
                        "ato",
                        "atu",
                        "caid",
                        "cid",
                        "ct",
                        "did",
                        "du",
                        "ec",
                        "iu",
                        "mfc",
                        "tal",
                        "tpi",
                        "uav",
                    ],
                    pingDestination: "main",
                },
                "al-clienta": {
                    code: "al",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["apr", "tal"],
                    filters: ["missingAdScheduleID"],
                    pingDestination: "main",
                },
                "ana-jwplayer6": {
                    code: "ana",
                    bucket: "jwplayer6",
                    parameterGroups: ["sessionParamsOnly"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "ar-clienta": {
                    code: "ar",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["apr", "apt", "ipv", "rtp", "tpi"],
                    pingDestination: "main",
                },
                "avg-clienta": {
                    code: "avg",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main",
                },
                "avp-clienta": {
                    code: "avp",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main",
                },
                "bi-clienta": {
                    code: "bi",
                    bucket: "clienta",
                    parameterGroups: [],
                    pingSpecificParameters: ["aid"],
                    pingDestination: "main",
                },
                "bs-jwplayer6": {
                    code: "bs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fed", "fid", "ft", "mu", "os"],
                    filters: ["missingFeedID"],
                    pingDestination: "main",
                },
                "c-clienta": {
                    code: "c",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: [
                        "ad",
                        "adc",
                        "al",
                        "ct",
                        "du",
                        "qt",
                        "srf",
                        "tw",
                        "vv",
                        "uav",
                    ],
                    pingDestination: "main",
                },
                "cpe-jwplayer6": {
                    code: "cpe",
                    bucket: "jwplayer6",
                    parameterGroups: [],
                    pingSpecificParameters: ["aid", "id", "fed", "mu", "pss"],
                    pingDestination: "external",
                },
                "cpt-jwplayer6": {
                    code: "cpt",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingDestination: "main",
                },
                "e-jwplayer6": {
                    code: "e",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "ab",
                        "bpv",
                        "cae",
                        "cb",
                        "cdid",
                        "cme",
                        "dd",
                        "dnt",
                        "dpl",
                        "flc",
                        "fv",
                        "ga",
                        "ipv",
                        "lng",
                        "mk",
                        "mu",
                        "opu",
                        "pad",
                        "pbc",
                        "pd",
                        "pdr",
                        "plng",
                        "plt",
                        "pni",
                        "po",
                        "pogt",
                        "ptid",
                        "pvt",
                        "rf",
                        "sn",
                        "sp",
                        "srf",
                        "st",
                        "vrt",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "err-error": {
                    code: "err",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cme", "erc", "mu", "pogt", "strt"],
                    pingDestination: "main",
                },
                "ers-error": {
                    code: "ers",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cme", "erc", "flc", "pogt"],
                    pingDestination: "main",
                },
                "fc-jwplayer6": {
                    code: "fc",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "fct",
                        "fed",
                        "fid",
                        "fin",
                        "fns",
                        "fpg",
                        "fsid",
                        "fsr",
                        "ft",
                        "mu",
                        "oc",
                        "os",
                        "ovta",
                        "psd",
                        "srf",
                        "stid",
                    ],
                    filters: ["missingFeedID"],
                    pingDestination: "main",
                },
                "fs-jwplayer6": {
                    code: "fs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "fed",
                        "fid",
                        "fin",
                        "fis",
                        "fns",
                        "fpc",
                        "fpg",
                        "fsid",
                        "fsr",
                        "ft",
                        "mu",
                        "os",
                        "ovt",
                        "rat",
                        "srf",
                        "tis",
                        "vfi",
                    ],
                    filters: ["missingFeedID"],
                    pingDestination: "main",
                },
                "gab-jwplayer6": {
                    code: "gab",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "abid",
                        "abpr",
                        "apid",
                        "ati",
                        "cst",
                        "erc",
                        "fls",
                        "lae",
                        "ovta",
                        "pbs",
                        "pcp",
                        "pdt",
                        "prs",
                        "prsd",
                        "pvta",
                        "srf",
                        "strt",
                        "ti",
                        "tps",
                        "ubc",
                        "vti",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "i-clienta": {
                    code: "i",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: [
                        "ad",
                        "adc",
                        "add",
                        "adid",
                        "adv",
                        "advi",
                        "apr",
                        "apt",
                        "adt",
                        "al",
                        "amu",
                        "atu",
                        "caid",
                        "cid",
                        "ct",
                        "did",
                        "du",
                        "fed",
                        "fid",
                        "fsm",
                        "iu",
                        "mfc",
                        "psd",
                        "strt",
                        "tal",
                        "vv",
                        "uav",
                    ],
                    pingDestination: "main",
                },
                "pa-jwplayer6": {
                    code: "pa",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "ab",
                        "abid",
                        "abm",
                        "apid",
                        "bwe",
                        "cme",
                        "dnt",
                        "dpl",
                        "fed",
                        "fid",
                        "flc",
                        "lng",
                        "mu",
                        "opu",
                        "pd",
                        "pdr",
                        "plng",
                        "pni",
                        "pogt",
                        "pr",
                        "psd",
                        "pvta",
                        "sbr",
                        "tb",
                        "vd",
                        "vh",
                        "vw",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "paf-error": {
                    code: "paf",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "abm",
                        "bwe",
                        "erc",
                        "fed",
                        "fid",
                        "mu",
                        "pd",
                        "pr",
                        "psd",
                        "sbr",
                        "tb",
                        "vd",
                        "vh",
                        "vw",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "prp-jwplayer6": {
                    code: "prp",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["tc"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "pru-jwplayer6": {
                    code: "pru",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ppr"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "ret-jwplayer6": {
                    code: "ret",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "abm",
                        "ati",
                        "avc",
                        "bwe",
                        "cst",
                        "etw",
                        "fed",
                        "fid",
                        "fls",
                        "fsm",
                        "mu",
                        "pbs",
                        "pdt",
                        "pr",
                        "q",
                        "sbr",
                        "srf",
                        "ubc",
                        "vh",
                        "vr",
                        "vti",
                        "vw",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "s-jwplayer6": {
                    code: "s",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "abid",
                        "abm",
                        "apid",
                        "bpv",
                        "bwe",
                        "cae",
                        "cct",
                        "cst",
                        "cdid",
                        "dnt",
                        "dpl",
                        "drm",
                        "fed",
                        "ff",
                        "fid",
                        "fsm",
                        "l",
                        "lng",
                        "mk",
                        "mu",
                        "opu",
                        "pcp",
                        "pd",
                        "pdr",
                        "pdt",
                        "plng",
                        "pni",
                        "pr",
                        "psd",
                        "q",
                        "qcr",
                        "sbr",
                        "sp",
                        "srf",
                        "strt",
                        "tb",
                        "tt",
                        "vd",
                        "vh",
                        "vs",
                        "vrt",
                        "vr",
                        "vw",
                    ],
                    pingDestination: "main",
                },
                "s-clienta": {
                    code: "s",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: [
                        "ad",
                        "adc",
                        "al",
                        "atps",
                        "ct",
                        "du",
                        "qt",
                        "tw",
                        "vv",
                        "uav",
                    ],
                    pingDestination: "main",
                },
                "t-jwplayer6": {
                    code: "t",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "abm",
                        "ati",
                        "avc",
                        "bwe",
                        "cst",
                        "dle",
                        "fed",
                        "fid",
                        "fls",
                        "fsm",
                        "ltc",
                        "mu",
                        "pbs",
                        "pcp",
                        "pdt",
                        "pw",
                        "q",
                        "sbr",
                        "ti",
                        "ubi",
                        "vh",
                        "vr",
                        "vti",
                        "vw",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "v-clienta": {
                    code: "v",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: [
                        "ad",
                        "adc",
                        "adti",
                        "adati",
                        "advti",
                        "al",
                        "ct",
                        "du",
                        "fsm",
                        "qt",
                        "vv",
                        "uav",
                    ],
                    pingDestination: "main",
                },
                "vcae-clienta": {
                    code: "vcae",
                    bucket: "clienta",
                    parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                    pingSpecificParameters: [
                        "abt",
                        "aml",
                        "ask",
                        "c",
                        "ed",
                        "flpc",
                        "ph",
                        "pu",
                        "sdk",
                        "vcb",
                        "vck",
                        "vpb",
                    ],
                    pingDestination: "main",
                },
                "vci-clienta": {
                    code: "vci",
                    bucket: "clienta",
                    parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                    pingSpecificParameters: [
                        "abt",
                        "aml",
                        "ask",
                        "c",
                        "ed",
                        "flpc",
                        "ph",
                        "pu",
                        "sdk",
                        "vcb",
                        "vck",
                        "vpb",
                    ],
                    pingDestination: "main",
                },
                "vi-clienta": {
                    code: "vi",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main",
                },
                "vqc-jwplayer6": {
                    code: "vqc",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: [
                        "abm",
                        "avc",
                        "bwe",
                        "qcr",
                        "sbr",
                        "tb",
                        "vw",
                        "vh",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "vs-jwplayer6": {
                    code: "vs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cvl", "sdt", "tvl", "vso"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "vsh-jwplayer6": {
                    code: "vsh",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["pcp", "srf", "stg"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main",
                },
                "xapi-jwplayer6": {
                    code: "xapi",
                    bucket: "jwplayer6",
                    parameterGroups: ["sessionParamsOnly"],
                    pingSpecificParameters: [
                        "ed",
                        "prs",
                        "pid",
                        "ph",
                        "sdk",
                        "sv",
                        "xam",
                        "xfmp",
                    ],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "meta",
                },
            },
            paramGroups: {
                global: {
                    members: [
                        "abc",
                        "abt",
                        "aid",
                        "amp",
                        "ask",
                        "at",
                        "bun",
                        "c",
                        "ccp",
                        "cp",
                        "d",
                        "eb",
                        "ed",
                        "emi",
                        "i",
                        "id",
                        "jwac",
                        "lid",
                        "lsa",
                        "mt",
                        "om",
                        "pbd",
                        "pbr",
                        "pgi",
                        "ph",
                        "pid",
                        "pii",
                        "pl",
                        "plc",
                        "pli",
                        "pp",
                        "ppm",
                        "prc",
                        "ps",
                        "pss",
                        "pt",
                        "pu",
                        "pv",
                        "pyc",
                        "s",
                        "sdk",
                        "ss",
                        "stc",
                        "stpe",
                        "sv",
                        "t",
                        "tul",
                        "tv",
                        "vb",
                        "vi",
                        "vl",
                        "wd",
                        "xav",
                        "xid",
                    ],
                    groupName: "global",
                },
                adGlobal: {
                    members: [
                        "ab",
                        "abid",
                        "abo",
                        "adi",
                        "apid",
                        "awi",
                        "awc",
                        "p",
                        "pc",
                        "pi",
                        "pr",
                        "sko",
                        "tmid",
                        "vu",
                    ],
                    groupName: "adGlobal",
                },
                adSessionParamsOnly: {
                    members: ["abid", "apid"],
                    groupName: "adSessionParamsOnly",
                },
                sessionParamsOnly: {
                    members: ["aid", "emi", "id", "pli", "pv", "tv", "xav", "xid"],
                    groupName: "sessionParamsOnly",
                },
                headerBidding: {
                    members: [
                        "afbb",
                        "afbi",
                        "afbp",
                        "afbt",
                        "afbw",
                        "aml",
                        "asxb",
                        "asxi",
                        "asxp",
                        "asxt",
                        "asxw",
                        "flpc",
                        "flpy",
                        "frid",
                        "hbec",
                        "vpb",
                        "vto",
                    ],
                    groupName: "headerBidding",
                },
            },
            parameters: {},
        },
        ge = {
            sgB1CN8sEeW9HgpVuA4vVw: !1,
            "QHh6WglVEeWjwQp+lcGdIw": !0,
            "4lTGrhE9EeWepAp+lcGdIw": !0,
            "98DmWsGzEeSdAQ4AfQhyIQ": !0,
            "xNaEVFs+Eea6EAY3v_uBow": !0,
            KvvTdq_lEeSqTw4AfQhyIQ: !1,
        },
        ve = 1;

    function ye(e, a) {
        var t, n, r, i, o, d, l, u;
        for (
            t = 3 & e.length,
            n = e.length - t,
            r = a,
            o = 3432918353,
            d = 461845907,
            u = 0; u < n;

        )
            (l =
                (255 & e.charCodeAt(u)) |
                ((255 & e.charCodeAt(++u)) << 8) |
                ((255 & e.charCodeAt(++u)) << 16) |
                ((255 & e.charCodeAt(++u)) << 24)),
            ++u,
            (r =
                27492 +
                (65535 &
                    (i =
                        (5 *
                            (65535 &
                                (r =
                                    ((r ^= l =
                                            ((65535 &
                                                    (l =
                                                        ((l =
                                                                ((65535 & l) * o +
                                                                    ((((l >>> 16) * o) & 65535) << 16)) &
                                                                4294967295) <<
                                                            15) |
                                                        (l >>> 17))) *
                                                d +
                                                ((((l >>> 16) * d) & 65535) << 16)) &
                                            4294967295) <<
                                        13) |
                                    (r >>> 19))) +
                            (((5 * (r >>> 16)) & 65535) << 16)) &
                        4294967295)) +
                (((58964 + (i >>> 16)) & 65535) << 16));
        switch (((l = 0), t)) {
            case 3:
                l ^= (255 & e.charCodeAt(u + 2)) << 16;
            case 2:
                l ^= (255 & e.charCodeAt(u + 1)) << 8;
            case 1:
                r ^= l =
                    ((65535 &
                            (l =
                                ((l =
                                        ((65535 & (l ^= 255 & e.charCodeAt(u))) * o +
                                            ((((l >>> 16) * o) & 65535) << 16)) &
                                        4294967295) <<
                                    15) |
                                (l >>> 17))) *
                        d +
                        ((((l >>> 16) * d) & 65535) << 16)) &
                    4294967295;
        }
        return (
            (r ^= e.length),
            (r =
                (2246822507 * (65535 & (r ^= r >>> 16)) +
                    (((2246822507 * (r >>> 16)) & 65535) << 16)) &
                4294967295),
            (r =
                (3266489909 * (65535 & (r ^= r >>> 13)) +
                    (((3266489909 * (r >>> 16)) & 65535) << 16)) &
                4294967295),
            (r ^= r >>> 16) >>> 0
        );
    }

    function be(e) {
        return De(e, "feedid");
    }

    function he(e) {
        return De(e, "feed_instance_id");
    }

    function ke(e) {
        return e ? e.pin_set_id : null;
    }

    function De(e, a) {
        return e ? (e.feedData || {})[a] || e[a] : null;
    }

    function we(e) {
        if (!e) return null;
        var a,
            t,
            n = e.mediaid;
        return d(n) ?
            n :
            ((a = e.file),
                d(
                    (n =
                        (t = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/.exec(a)) &&
                        2 === t.length ?
                        t[1] :
                        null)
                ) ?
                n :
                null);
    }

    function Se(e) {
        return e ? e.title : null;
    }

    function Ie(e) {
        return e ?
            !(!e.images || !e.images.length) &&
            !!e.images.filter(function(e) {
                return e.type && e.type.match(/video/);
            }).length :
            null;
    }

    function Te(e, a) {
        var t = void 0;
        ge[e.accountData.analyticsID] &&
            (t = (function(e, a) {
                var t = Se(a);
                if (t)
                    return (function(e, a) {
                        e.meta.xidAlgorithmVersion = 1;
                        var t = ye(a, ve),
                            n = ye(a + a, ve);
                        return "01_" + t + n;
                    })(e, t);
            })(e, a));
        var n = t || a.externalId;
        (e.playlistItemData.externalId = n) &&
        !e.meta.xidAlgorithmVersion &&
            (e.meta.xidAlgorithmVersion = 0);
    }
    var Pe =
        "hidden" in document ?

        function() {
            return !document.hidden;
        } :
        "webkitHidden" in document ?

        function() {
            return !document.webkitHidden;
        } :
        function() {
            return !0;
        };

    function Ee(e, a) {
        var t = " " + a + " ";
        return (
            1 === e.nodeType &&
            0 <= (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(t)
        );
    }
    var Ce = 1,
        Ae = 2,
        xe = 3,
        je = 4,
        Be = 5,
        Re = 0;
    var Me = [X, ae];

    function Ve(e, a, t) {
        var n = e.external.playerAPI,
            r = n.getConfig();
        e.playerData.playerConfig = {
            visibility: r.visibility,
            bandwidthEstimate: r.bandwidthEstimate,
            floatingState: !!r.isFloating,
        };
        var i,
            o,
            d,
            l = m(n) || {};
        (e.playlistItemData.item = l),
        (e.playlistItemData.mediaId = we(l)),
        (e.playerData.playerSize = (function(e) {
            var a = e.getConfig(),
                t = a.containerWidth || e.getWidth(),
                n = a.containerHeight || e.getHeight();
            if (/\d+%/.test(t)) {
                var r = e.utils.bounds(e.getContainer());
                (t = r.width), (n = r.height);
            }
            return (
                (t = 0 | Math.round(t)),
                (n = 0 | Math.round(n)),
                /\d+%/.test(a.width || t) && a.aspectratio ? { bucket: je, width: t, height: n } :
                Ee(e.getContainer(), "jw-flag-audio-player") ? { bucket: Be, width: t, height: n } :
                0 === t ? { bucket: Re, width: t, height: n } :
                t <= 320 ? { bucket: Ce, width: t, height: n } :
                t <= 640 ? { bucket: Ae, width: t, height: n } : { bucket: xe, width: t, height: n }
            );
        })(n)),
        (e.playlistItemData.duration = D(e)),
        (e.meta.lastEvent = a),
        (e.meta.lastBucket = t),
        (e.playerData.visualQuality = O(n, "s" === a && "jwplayer6" === t)),
        (e.playerData.defaultPlaybackRate = r.defaultPlaybackRate),
        (e.playerData.playbackMode = r.streamType),
        Te(e, l),
            (i = e),
            (o = a),
            (d = t), -1 === Me.indexOf(o) && (i.meta.eventPreAbandonment = u(o, d));
    }
    var Le = {
            prs: function(e) {
                return e.meta.playerState;
            },
            lae: function(e) {
                return e.meta.eventPreAbandonment;
            },
            abpr: function(e) {
                return e.meta.playerRemoved;
            },
            prsd: function(e) {
                var a = Date.now() - e.meta.playerStateDuration;
                return a <= 216e5 ? a : -1;
            },
        },
        Oe = {
            ab: function(e) {
                return e.configData.advertisingBlockType;
            },
            abo: function(e) {
                return e.ads.adEventData.offset;
            },
            adi: function(e) {
                return e.ads.adEventData.adId;
            },
            apid: function(e) {
                return e.ads.adEventData.adPlayId;
            },
            abid: function(e) {
                return e.ads.adEventData.adBreakId;
            },
            awi: function(e) {
                return e.ads.adEventData.witem;
            },
            awc: function(e) {
                return e.ads.adEventData.wcount;
            },
            p: function(e) {
                return e.ads.adEventData.adposition;
            },
            sko: function(e) {
                return e.ads.adEventData.skipoffset;
            },
            vu: function(e) {
                return e.ads.adEventData.tagdomain;
            },
            tmid: function(e) {
                return e.ads.adEventData.targetMediaId;
            },
        },
        Ge = {
            cae: function(e) {
                return !!e.ads.advertisingConfig.companiondiv;
            },
            ad: function(e) {
                return e.ads.adEventData.adSystem;
            },
            adc: function(e) {
                var a = e.ads.adEventData,
                    t = null;
                return (
                    Array.isArray(a.categories) &&
                    (t =
                        a.categories
                        .map(function(e) {
                            var a = e.match(T);
                            return a ? [w.IAB, a[1]].join("-") : w.UNKNOWN;
                        })
                        .filter(function(e, a, t) {
                            return t.indexOf(e) === a;
                        })
                        .slice(0, 10)
                        .join(",") || null),
                    t
                );
            },
            al: function(e) {
                return e.ads.adEventData.linear;
            },
            ct: function(e) {
                return e.ads.adEventData.adCreativeType;
            },
            mfc: function(e) {
                return e.ads.adEventData.mediaFileCompliance;
            },
            pc: function(e) {
                return e.ads.adEventData.podCount;
            },
            pi: function(e) {
                return e.ads.adEventData.podIndex;
            },
            tal: function(e) {
                return e.ads.adEventData.timeAdLoading;
            },
            vv: function(e) {
                return e.ads.adEventData.vastVersion;
            },
            uav: function(e) {
                return e.ads.adEventData.universalAdId;
            },
            advti: function(e) {
                return e.ads.adPlaybackTracking.viewablePlayedSeconds;
            },
            adati: function(e) {
                return e.ads.adPlaybackTracking.audiblePlayedSeconds;
            },
            adti: function(e) {
                return e.ads.adPlaybackTracking.playedSeconds;
            },
            atps: function(e) {
                return e.ads.watchedPastSkipPoint;
            },
            du: function(e) {
                return e.ads.adEventData.duration;
            },
            qt: function(e) {
                var a = e.meta.lastEvent;
                return "s" === a || "c" === a ?
                    e.ads.adEventData.previousQuartile :
                    e.ads.currentQuartile;
            },
            tw: function(e) {
                return e.ads.adEventData.position;
            },
            aec: function(e) {
                return e.ads.jwAdErrorCode;
            },
            aem: function(e) {
                return e.ads.errorMessage;
            },
            ato: function(e) {
                return e.ads.timeout;
            },
            ec: function(e) {
                return e.playerData.lastErrorCode[e.meta.lastEvent];
            },
            atu: function(e) {
                var a = e.ads.adEventData.tagURL;
                return "string" == typeof a ? a.substr(0, 100) : void 0;
            },
            tpi: function(e) {
                var a = e.ads.adEventData.jwpseg;
                return Array.isArray(a) ? a.join(",") : void 0;
            },
            cid: function(e) {
                return e.ads.adEventData.creativeId;
            },
            adt: function(e) {
                return e.ads.adEventData.adTitle;
            },
            apr: function(e) {
                return e.ads.adEventData.preload;
            },
            amu: function(e) {
                return e.ads.adEventData.adMediaFileURL;
            },
            add: function(e) {
                return e.ads.adEventData.description;
            },
            adid: function(e) {
                return e.ads.adEventData.adVastId;
            },
            caid: function(e) {
                return e.ads.adEventData.creativeAdId;
            },
            apt: function(e) {
                return e.ads.adEventData.placement;
            },
            tfvc: function(e) {
                return e.ads.adEventData.timeForVPBCache;
            },
            adv: function(e) {
                return e.ads.adEventData.advertiser;
            },
            advi: function(e) {
                return e.ads.adEventData.advertiserId;
            },
            afbb: function(e) {
                return p(e.ads.headerBiddingData.bidders, "fan.result");
            },
            afbi: function(e) {
                return p(e.ads.headerBiddingData.bidders, "fan.id");
            },
            afbp: function(e) {
                return p(e.ads.headerBiddingData.bidders, "fan.priceInCents");
            },
            afbt: function(e) {
                return p(e.ads.headerBiddingData.bidders, "fan.timeForBidResponse");
            },
            afbw: function(e) {
                return p(e.ads.headerBiddingData.bidders, "fan.winner");
            },
            frid: function(e) {
                return p(e.ads.headerBiddingData.bidders, "fan.requestId");
            },
            asxb: function(e) {
                return p(e.ads.headerBiddingData.bidders, "spotx.result");
            },
            asxi: function(e) {
                return p(e.ads.headerBiddingData.bidders, "spotx.id");
            },
            asxp: function(e) {
                return p(e.ads.headerBiddingData.bidders, "spotx.priceInCents");
            },
            asxt: function(e) {
                return p(e.ads.headerBiddingData.bidders, "spotx.timeForBidResponse");
            },
            asxw: function(e) {
                return p(e.ads.headerBiddingData.bidders, "spotx.winner");
            },
            aml: function(e) {
                return e.ads.headerBiddingData.mediationLayer;
            },
            flpc: function(e) {
                return e.ads.headerBiddingData.floorPriceCents;
            },
            flpy: function(e) {
                return e.ads.headerBiddingData.floorPriceCurrency;
            },
            hbec: function(e) {
                return e.ads.headerBiddingData.errorCode;
            },
            vto: function(e) {
                return e.ads.headerBiddingData.bidTimeout;
            },
            vpb: function(e) {
                if ("object" == typeof e.ads.headerBiddingData.bidders)
                    return c(e.ads.headerBiddingData.bidders);
            },
            vcb: function(e) {
                return e.ads.headerBiddingCacheData.bidder;
            },
            vck: function(e) {
                return e.ads.headerBiddingCacheData.cacheKey;
            },
            rtp: function(n) {
                if ("object" == typeof n.inference.result) {
                    var e = c(
                            ["predictions", "segments"].reduce(function(e, a) {
                                var t = p(n.inference.result, a);
                                return void 0 !== t && (e[a] = t), e;
                            }, {})
                        ),
                        a = p(n.inference.result, "decisionThresholds");
                    return (
                        "object" == typeof a &&
                        (Object.keys(a).forEach(function(e) {
                                var t = a[e] || {};
                                Object.keys(t).forEach(function(a) {
                                        var e = t[a] || {};
                                        Object.keys(e).forEach(function(e) {
                                            t[a][e] = Number(t[a][e].toFixed(2));
                                        });
                                    }),
                                    (a[e] = t);
                            }),
                            (e.decisionThresholds = a)),
                        e
                    );
                }
            },
            did: function(e) {
                return e.ads.adEventData.dealId;
            },
            iu: function(e) {
                var a = e.ads.adEventData.tagURL;
                if (a) {
                    var t = a.match(_);
                    if (t) return t[1];
                }
            },
        },
        Ne = {
            dnt: function(e) {
                return e.browser.storage.doNotTrackProperty;
            },
            fv: function(e) {
                return e.browser.pageData.flashVersion;
            },
            lng: function(e) {
                return e.browser.langAttr;
            },
            pdr: function(e) {
                return e.browser.docReferrer;
            },
        };
    (Ne.plt = function(e) {
        return (function() {
            var e = (window.performance || {}).timing;
            if (e) {
                var a = (e.loadEventEnd || new Date().getTime()) - e.navigationStart;
                if (0 < a) return (50 * Math.round(a / 50)) | 0;
            }
            return null;
        })();
    }),
    (Ne.sp = function(e) {
        return e.browser.isPageStandalone;
    });
    var qe = {
            cb: function(e) {
                return e.configData.castingBlockPresent;
            },
            dd: function(e) {
                return e.configData.displayDescription;
            },
            ga: function(e) {
                return e.configData.gaBlockPresent;
            },
            pad: function(e) {
                return e.configData.abTestConfig;
            },
            pbc: function(e) {
                return e.configData.playbackRateControlsSet;
            },
            po: function(e) {
                return e.configData.posterImagePresent;
            },
            rf: function(e) {
                return e.configData.relatedPluginFeedFile;
            },
            sn: function(e) {
                return e.configData.skinName;
            },
        },
        Fe = [ee, X, Z, Y],
        Ue = {
            fed: function(e) {
                return -1 !== Fe.indexOf(e.meta.lastEvent) ?
                    e.related.feedId :
                    be(e.playlistItemData.item);
            },
            fid: function(e) {
                return -1 !== Fe.indexOf(e.meta.lastEvent) ?
                    e.related.feedInstanceId :
                    he(e.playlistItemData.item);
            },
            ft: function(e) {
                return e.related.feedType;
            },
            os: function(e) {
                return e.related.onClickSetting;
            },
            fin: function(e) {
                return e.related.feedInterface;
            },
            fis: function(e) {
                return e.related.idsShown.join(",");
            },
            fns: function(e) {
                return e.related.idsShown.length;
            },
            fpc: function(e) {
                return e.related.pinnedCount;
            },
            fpg: function(e) {
                return e.related.page;
            },
            fsr: function(e) {
                return e.related.shownReason;
            },
            rat: function(e) {
                return e.related.autotimerLength;
            },
            fct: function(e) {
                return e.related.advanceTarget;
            },
            oc: function(e) {
                return e.related.ordinalClicked;
            },
            stid: function(e) {
                return e.related.targetThumbID;
            },
            tis: function(e) {
                return e.related.thumbnailIdsShown.join(",") || void 0;
            },
            fsid: function(e) {
                return e.related.feedShownId;
            },
            vfi: function(e) {
                return e.related.feedWasViewable;
            },
            ovt: function(e) {
                return e.related.overlayVideoThumbs;
            },
            cme: function(e) {
                return e.playerData.contextualEmbed;
            },
            pogt: function(e) {
                return e.browser.pageData.pageOGTitle;
            },
        },
        _e = {};
    (_e.abc = function(e) {
        var a = e.ads.adBreakTracking;
        if (a) return a.adBreakCount;
    }),
    (_e.abt = function(e) {
        var a = e.external.playerAPI.getConfig(),
            t = a.ab;
        if (t && t.tests)
            return Object.keys(t.tests)
                .map(function(e) {
                    return t.getSelected(e, a).join(",");
                })
                .filter(function(e) {
                    return e;
                })
                .join(",");
    }),
    (_e.aid = function(e) {
        return e.accountData.analyticsID;
    }),
    (_e.ask = function(e) {
        return e.ads.adScheduleId;
    }),
    (_e.at = function(e) {
        return Pe();
    }),
    (_e.c = function(e) {
        return e.ads.adClient;
    }),
    (_e.ccp = function(e) {
        return e.casting;
    }),
    (_e.cp = function(e) {
        return !e.external.playerAPI.getControls();
    }),
    (_e.d = function(e) {
        return e.configData.autostartConfig;
    }),
    (_e.eb = function(e) {
        return (a = e.external.playerAPI).getAdBlock ? a.getAdBlock() : -1;
        var a;
    }),
    (_e.ed = function(e) {
        return e.accountData.edition;
    }),
    (_e.emi = function(e) {
        return e.staticPlayerData.embedID;
    }),
    (_e.i = function(e) {
        return e.browser.pageData.inIframe;
    }),
    (_e.id = function(e) {
        return e.playlistItemData.mediaId;
    }),
    (_e.lid = function(e) {
        return e.meta.doNotPingBackIDs ? void 0 : e.browser.storage.localID;
    }),
    (_e.lsa = function(e) {
        return e.browser.storage.storageAvailable;
    }),
    (_e.mt = function(e) {
        return e.external.playerAPI.getMute();
    }),
    (_e.mu = function(e) {
        return (function(e, a) {
            var t = void 0;
            if (!e) return null;
            var n = e.sources;
            if (n) {
                for (var r = [], i = n.length; i--;) n[i].file && r.push(n[i].file);
                r.sort(), (t = r[0]);
            } else t = e.file;
            return a.getAbsolutePath(t);
        })(e.playlistItemData.item, e.external.utils);
    }),
    (_e.pbd = function(e) {
        return e.playerData.defaultPlaybackRate;
    }),
    (_e.pbr = function(e) {
        return (a = e.external.playerAPI).getPlaybackRate ?
            Math.round(100 * a.getPlaybackRate()) / 100 :
            1;
        var a;
    }),
    (_e.pgi = function(e) {
        return e.browser.pageData.pageViewId;
    }),
    (_e[re] = function(e) {
        return e.configData.playerHosting;
    }),
    (_e.pid = function(e) {
        return e.configData.playerConfigKey;
    }),
    (_e.pii = function(e) {
        return e.playlistItemData.index;
    }),
    (_e.pl = function(e) {
        return e.playerData.playerSize.height;
    }),
    (_e.plc = function(e) {
        return e.external.playerAPI.getPlaylist().length;
    }),
    (_e.pli = function(e) {
        return e.playlistItemData.itemId;
    }),
    (_e.pp = function(e) {
        return g(e.external.playerAPI);
    }),
    (_e.prc = function(e) {
        return (function() {
            var e = window.jwplayer,
                a = 0;
            if ("function" == typeof e)
                for (a = 0; a < 1e3; a++)
                    if (!e(a).uniqueId) return a;
            return a;
        })();
    }),
    (_e.ps = function(e) {
        return e.playerData.playerSize.bucket;
    }),
    (_e.pss = function(e) {
        return e.meta.playbackTracking.playSessionSequence;
    }),
    (_e.pt = function(e) {
        return e.browser.pageData.pageTitle;
    }),
    (_e.pu = function(e) {
        return e.browser.pageData.pageURL;
    }),
    (_e.pv = function(e) {
        return e.staticPlayerData.playerVersion;
    }),
    (_e.pyc = function(e) {
        return e.meta.playbackTracking.playItemCount;
    }),
    (_e.s = function(e) {
        return e.configData.sharingEnabled;
    }),
    (_e.sdk = function(e) {
        return e.staticPlayerData.sdkPlatform;
    }),
    (_e.stc = function(e) {
        return e.meta.setupCount;
    }),
    (_e.sv = function(e) {
        return e.staticPlayerData.sdkVersion;
    }),
    (_e.bun = function(e) {
        return e.staticPlayerData.bundleId;
    }),
    (_e.ifa = function(e) {
        return e.meta.doNotPingBackIDs ?
            void 0 :
            e.staticPlayerData.advertisingId;
    }),
    (_e.om = function(e) {
        return e.staticPlayerData.deviceModel;
    }),
    (_e.t = function(e) {
        return Se(e.playlistItemData.item);
    }),
    (_e.tul = function(e) {
        return e.playlistItemData.item.thumbnailUrl;
    }),
    (_e.tv = function(e) {
        return "3.38.0";
    }),
    (_e.vb = function(e) {
        return e.playerData.viewable;
    }),
    (_e.vi = function(e) {
        var a = e.playerData.playerConfig.visibility;
        return void 0 === a ? a : Math.round(100 * a) / 100;
    }),
    (_e.vl = function(e) {
        return e.external.playerAPI.getVolume();
    }),
    (_e.wd = function(e) {
        return e.playerData.playerSize.width;
    }),
    (_e.xid = function(e) {
        return e.playlistItemData.externalId;
    }),
    (_e.xav = function(e) {
        return e.meta.xidAlgorithmVersion;
    }),
    (_e.stpe = function(e) {
        return !!e.meta.playbackTracking.sendSetTimeEvents;
    }),
    (_e.ppm = function(e) {
        return e.playerData.playbackMode;
    }),
    (_e.strt = function(e) {
        var a = e.playerData.startup;
        return e.meta.lastEvent === a.dispatchEvent ? a.startupTime : void 0;
    }),
    (_e.tstc = function(e) {
        return e.browser.pageData.testCaseId;
    }),
    (_e.fsm = function(e) {
        return e.external.playerAPI.getFullscreen();
    }),
    (_e.dpl = function(e) {}),
    (_e.ss = function(e) {
        return e.meta.sessionSampled || void 0;
    }),
    (_e.amp = function(e) {
        return e.browser.pageData.amp;
    }),
    (_e.jwac = function(e) {
        return e.browser.pageData.jwAmpComponent || void 0;
    }),
    (_e.opu = function(e) {
        return e.browser.pageData.origPageURL;
    });
    var Qe = { aes: 1, widevine: 2, playready: 3, fairplay: 4 };
    var ze = {
        interaction: 1,
        autostart: 2,
        repeat: 3,
        external: 4,
        "related-interaction": 1,
        "related-auto": 5,
        playlist: 6,
        viewable: 7,
    };
    var Ke = { none: 1, metadata: 2, auto: 3 };

    function We(e) {
        return e === 1 / 0 ?
            1 / 0 :
            (e |= 0) <= 0 ?
            0 :
            e < 30 ?
            1 :
            e < 60 ?
            4 :
            e < 180 ?
            8 :
            e < 300 ?
            16 :
            32;
    }

    function He(e) {
        try {
            return e.external.playerAPI.qoe().item.sums.stalled || 0;
        } catch (e) {
            return 0;
        }
    }
    var $e = Math.round,
        Je = {};
    (Je.st = function(e) {
        return e.playerData.setupTime;
    }),
    (Je.bwe = function(e) {
        return l(e.playerData.playerConfig.bandwidthEstimate);
    }),
    (Je.cct = function(e) {
        return (
            (a = e.playlistItemData.item),
            (t = e.external.playerAPI),
            Array.prototype.some.call(a.tracks || 0, function(e) {
                var a = e.kind;
                return "captions" === a || "subtitles" === a;
            }) ?
            1 :
            1 < t.getCaptionsList().length ?
            2 :
            0
        );
        var a, t;
    }),
    (Je.drm = function(e) {
        return (
            ((a = e.playlistItemData.drm) ? Qe[a] || 999 : 0) ||
            e.meta.playbackTracking.segmentsEncrypted
        );
        var a;
    }),
    (Je.ff = function(e) {
        return "function" == typeof(a = e.external.playerAPI).qoe ?
            (10 * Math.round(a.qoe().firstFrame / 10)) | 0 :
            -1;
        var a;
    }),
    (Je.l = function(e) {
        return (
            (a = e.playlistItemData.duration),
            (a |= 0) <= 0 || a === 1 / 0 ?
            0 :
            a < 15 ?
            1 :
            a <= 300 ?
            2 :
            a <= 1200 ?
            3 :
            4
        );
        var a;
    }),
    (Je.vr = function(e) {
        return (function(e) {
            if (e.getPlugin) {
                var a = e.getPlugin("vr");
                if (a)
                    switch (a.getMode()) {
                        case "magic-window":
                            return 0;
                        case "cardboard":
                            return 1;
                        case "gear-vr":
                            return 2;
                        default:
                            return null;
                    }
            }
            return null;
        })(e.external.playerAPI);
    }),
    (Je.etw = function(e) {
        return e.meta.playbackTracking.retTimeWatched;
    }),
    (Je.ubc = function(e) {
        return $e(He(e));
    }),
    (Je.ltc = function(e) {
        return $e(
            (function(e) {
                try {
                    return e.external.playerAPI.qoe().item.sums.loading || 0;
                } catch (e) {
                    return 0;
                }
            })(e)
        );
    }),
    (Je.ubi = function(e) {
        return $e(
            (function(e, a) {
                void 0 === a && (a = e.meta.lastEvent);
                var t = He(e),
                    n = e.meta.previousBufferTimes[a];
                void 0 === e.meta.previousBufferTimes[a] &&
                    (n = e.meta.previousBufferTimes[a] = t);
                var r = Math.round(t - n);
                return (e.meta.previousBufferTimes[a] = t), r;
            })(e)
        );
    }),
    (Je.pw = function(e) {
        return 0 | e.meta.playbackTracking.normalizedTime;
    }),
    (Je.ti = function(e) {
        return e.meta.playbackTracking.elapsedSeconds;
    }),
    (Je.vti = function(e) {
        return e.meta.playbackTracking.viewableElapsedSeconds;
    }),
    (Je.ati = function(e) {
        return e.meta.playbackTracking.audibleElapsedSeconds;
    }),
    (Je.cvl = function(e) {
        return Math.floor(e.meta.seekTracking.videoStartDragTime);
    }),
    (Je.tvl = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime);
    }),
    (Je.sdt = function(e) {
        return 1 === e.meta.seekTracking.numTrackedSeeks ?
            0 :
            Date.now() - e.meta.seekTracking.dragStartTime;
    }),
    (Je.vso = function(e) {
        return (
            Math.floor(e.meta.seekTracking.lastTargetTime) -
            Math.floor(e.meta.seekTracking.videoStartDragTime)
        );
    }),
    (Je.qcr = function(e) {
        return e.playerData.visualQuality.reason;
    }),
    (Je.abm = function(e) {
        return e.playerData.visualQuality.adaptiveBitrateMode;
    }),
    (Je.avc = function(e) {
        return e.playerData.numAutoVisualQualityChange;
    }),
    (Je.ppr = function(e) {
        return e.meta.playbackTracking.prevPlaybackRate;
    }),
    (Je.erc = function(e) {
        return e.playerData.lastErrorCode[e.meta.lastEvent];
    }),
    (Je.pcp = function(e) {
        return $e(e.meta.playbackTracking.currentPosition);
    }),
    (Je.stg = function(e) {
        return e.sharing.shareMethod;
    }),
    (Je.tps = function(e) {
        return $e(e.meta.playbackTracking.playedSecondsTotal);
    }),
    (Je.srf = function(e) {
        return e.sharing.shareReferrer;
    }),
    (Je.plng = function(e) {
        return e.playerData.localization.language;
    }),
    (Je.pni = function(e) {
        return e.playerData.localization.numIntlKeys;
    }),
    (Je.pnl = function(e) {
        return e.playerData.localization.numLocalKeys;
    }),
    (Je.pbs = function(e) {
        try {
            return e.external.playerAPI.qoe().item.counts.stalled || 0;
        } catch (e) {
            return null;
        }
    }),
    (Je.tc = function(e) {
        return e.meta.playbackTracking.thresholdCrossed;
    }),
    (Je.flc = function(e) {
        return e.playerData.floatingConfigured;
    }),
    (Je.fls = function(e) {
        return e.playerData.playerConfig.floatingState;
    }),
    (Je.xam = function(e) {
        return e.playerData.apiTracking.methodCalled;
    }),
    (Je.xfmp = function(e) {
        return e.playerData.apiTracking.firstMeaningfulParam;
    }),
    (Je.dle = function(e) {
        return e.meta.playbackTracking.latency;
    }),
    (Je.cdid = function(e) {
        return e.external.playerAPI.id;
    }),
    (Je.pcfg = function(e) {
        return e.playerData.stringifiedSetupConfig;
    }),
    (Je.pvta = function(e) {
        return e.meta.playbackTracking.posterVideoThumbAnimated;
    }),
    (Je.ovta = function(e) {
        return e.meta.playbackTracking.overlayVideoThumbAnimated;
    }),
    (Je.pvt = function(e) {
        return e.meta.playbackTracking.posterVideoThumbnail || void 0;
    }),
    (Je.ipv = function(e) {
        return e.playerData.inferencePluginVersion;
    }),
    (Je.bpv = function(e) {
        return e.playerData.biddingPluginVersion;
    }),
    (Je.pdt = function(e) {
        var a = e.meta.playbackTracking.programDateTime;
        return (e.meta.playbackTracking.programDateTime = void 0), a;
    }),
    (Je.cst = function(e) {
        var a = e.meta.playbackTracking.cueStartTime;
        return (e.meta.playbackTracking.cueStartTime = void 0), a;
    });
    var Xe = t,
        Ye = a,
        Ze = {
            mk: function(e) {
                return (function(e, a) {
                    if (!e) return null;
                    var t = e.sources[0],
                        n = t.type;
                    if (!n) {
                        var r = t.file;
                        n = a.extension(r);
                    }
                    return n;
                })(e.playlistItemData.item, e.external.utils);
            },
        };
    (Ze.pd = function(e) {
        return (a = e.playlistItemData.item), (t = a.preload), Ke[t] || 0;
        var a, t;
    }),
    (Ze.vrt = function(e) {
        return (function(e) {
            if (!e || !e.stereomode) return null;
            switch (e.stereomode) {
                case "monoscopic":
                    return 0;
                case "stereoscopicTopBottom":
                    return 1;
                case "stereoscopicLeftRight":
                    return 2;
                default:
                    return null;
            }
        })(e.playlistItemData.item);
    }),
    (Ze.pr = function(e) {
        return (a = e.playlistItemData.playReason), ze[a] || 0;
        var a;
    }),
    (Ze.psd = function(e) {
        return -1 !== Fe.indexOf(e.meta.lastEvent) ?
            e.related.pinSetId :
            ke(e.playlistItemData.item);
    }),
    (Ze.vh = function(e) {
        return e.playerData.visualQuality.height;
    }),
    (Ze.vw = function(e) {
        return e.playerData.visualQuality.width;
    }),
    (Ze.sbr = function(e) {
        return e.playerData.visualQuality.bitrate;
    }),
    (Ze.tb = function(e) {
        return (function(e) {
            var a = e.getContainer().querySelector("video"),
                t = 0;
            if (a && ((t = a.duration), a.buffered && a.buffered.length)) {
                var n = a.buffered.end(a.buffered.length - 1) || 0;
                return Math.round(10 * n) / 10;
            }
            return (
                t || (t = Math.abs(e.getDuration())),
                Math.round((t * e.getBuffer()) / 10) / 10
            );
        })(e.external.playerAPI);
    }),
    (Ze.vd = function(e) {
        return e.playlistItemData.duration;
    }),
    (Ze.q = function(e) {
        return We(e.playlistItemData.duration);
    }),
    (Ze.tt = function(e) {
        return (
            (a = e.playlistItemData.item),
            (t = a.tracks),
            Array.prototype.some.call(t || 0, function(e) {
                return "thumbnails" === e.kind;
            })
        );
        var a, t;
    }),
    (Ze.vs = function(e) {
        var a = e.meta.playbackEvents;
        return (function(e, a, t) {
            var n =
                3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            if (!a) return null;
            if (t && t.levels && t.levels.length) {
                var r = t.levels[0];
                if (r && "auto" === ("" + r.label).toLowerCase()) return 5;
            }
            if (Ee(e.getContainer(), "jw-flag-audio-player")) return 6;
            var i = 0 | n.width,
                o = 0 | n.height;
            return 0 !== i || 0 !== o ?
                i <= 320 ?
                1 :
                i <= 640 ?
                2 :
                i <= 1280 ?
                3 :
                4 :
                "rtmp" === a.sources[0].type ?
                6 :
                0;
        })(e.external.playerAPI, e.playlistItemData.item, a[Xe], a[Ye]);
    }),
    (Ze.ptid = function(e) {
        return p(e.playlistItemData.item, "variations.selected.images.id");
    });
    var ea = M({}, _e, qe, Ne, Ze, Je, Ue, Oe, Ge, Le);

    function aa(e, i) {
        var a = me.events[e],
            t = a.parameterGroups
            .reduce(function(e, a) {
                return e.concat(me.paramGroups[a].members);
            }, [])
            .concat(a.pingSpecificParameters ? a.pingSpecificParameters : [])
            .reduce(function(e, a) {
                var t, n, r;
                return (
                    (e[a] =
                        ((n = i),
                            (r = ea[(t = a)] ?
                                ea[t] :
                                function() {
                                    n.meta.debug &&
                                        console.log(
                                            "No parameter generation function for param " + t
                                        );
                                }), { code: t, value: r(n) })),
                    e
                );
            }, {});
        return {
            event: a.code,
            bucket: a.bucket,
            parameters: t,
            pingDestination: a.pingDestination,
        };
    }
    var ta = {
        missingMediaOrExternalID: function(e) {
            return (!e.meta.sessionSampled &&
                !e.playlistItemData.mediaId &&
                !e.playlistItemData.externalId
            );
        },
        missingAdScheduleID: function(e) {
            return !e.meta.sessionSampled && !e.ads.adScheduleId;
        },
        missingFeedID: function(e) {
            return !e.related.feedId;
        },
    };
    var na = function(e, a) {
            if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function");
        },
        ra = (function() {
            function n(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var n = a[t];
                    (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            return function(e, a, t) {
                return a && n(e.prototype, a), t && n(e, t), e;
            };
        })(),
        ia = {
            main: "localhost:3000/js/player/v1",
            main_fallback: "localhost:3000/js/player/v1",
            meta: "localhost:3000/js/player/v1",
        },
        oa = (function() {
            function r(e, a, t, n) {
                na(this, r),
                    (this.event = e),
                    (this.bucket = a),
                    (this.host = n),
                    (this.paramData = M({}, t)),
                    oe in this.paramData || (this.paramData[oe] = { code: oe, value: e }),
                    ie in this.paramData ||
                    (this.paramData[ie] = {
                        code: ie,
                        value: Math.random().toFixed(16).substr(2, 16),
                    });
            }
            return (
                ra(r, [{
                        key: "path",
                        get: function() {
                            return this.host + "/" + this.bucket + "/ping.gif";
                        },
                    },
                    {
                        key: "url",
                        get: function() {
                            return this.protocol + "//" + this.path + "?" + this.queryString;
                        },
                    },
                    {
                        key: "encodedParameters",
                        get: function() {
                            var r = this;
                            return Object.keys(this.paramData).reduce(function(e, a) {
                                var t = r.paramData[a],
                                    n = da(t);
                                return null !== n && (e[t.code] = n), e;
                            }, {});
                        },
                    },
                    {
                        key: "trackingArgs",
                        get: function() {
                            var a = this.encodedParameters,
                                t = Object.keys(a);
                            return (
                                [ie, oe].forEach(function(e) {
                                    var a = t.indexOf(e); -
                                    1 !== a && (t.splice(a, 1), t.unshift(e));
                                }),
                                t.map(function(e) {
                                    return a[e];
                                })
                            );
                        },
                    },
                    {
                        key: "protocol",
                        get: function() {
                            return "file:" === window.location.protocol ? "https:" : "";
                        },
                    },
                    {
                        key: "queryString",
                        get: function() {
                            var e = this.trackingArgs.join("&"),
                                a =
                                "h=" +
                                (function(e) {
                                    var a = 0;
                                    if (!(e = decodeURIComponent(e)).length) return a;
                                    for (var t = 0; t < e.length; t++)
                                        (a = (a << 5) - a + e.charCodeAt(t)), (a &= a);
                                    return a;
                                })(e) +
                                "&" +
                                e,
                                t = void 0;
                            try {
                                t = Date.now();
                            } catch (e) {}
                            return a + "&sa=" + t;
                        },
                    },
                ]),
                r
            );
        })(),
        da = function(e) {
            var a = e.value;
            return (
                (!0 !== a && !1 !== a) || (a = a ? "1" : "0"),
                a && "object" == typeof a && (a = JSON.stringify(a)),
                null != a ? e.code + "=" + encodeURIComponent(a) : null
            );
        },
        la = ["rtp"],
        ua = function(e) {
            return (e.paramData.tp = { code: "tp", value: 1 }), A(e.url);
        },
        ca = function(e, a, t, n) {
            var r = A("&tp=1"),
                i = new oa(e, a, t, ia[n]),
                o = A(i.url);
            if (o <= 8192) return i.url;
            var d = me.parameters,
                l = Object.keys(d)
                .filter(function(e) {
                    var a = d[e].priority;
                    return 0 < a || a < 0;
                })
                .filter(function(e) {
                    return e in i.paramData;
                })
                .filter(function(e) {
                    return "string" == typeof i.paramData[e].value;
                })
                .sort(function(e, a) {
                    return d[a].priority - d[e].priority;
                }),
                u = la,
                c = Array.isArray(u),
                s = 0;
            for (u = c ? u : u[Symbol.iterator]();;) {
                var p;
                if (c) {
                    if (s >= u.length) break;
                    p = u[s++];
                } else {
                    if ((s = u.next()).done) break;
                    p = s.value;
                }
                if (
                    "rtp" === p &&
                    p in i.paramData &&
                    (delete i.paramData.rtp.value.decisionThresholds, (o = ua(i)) <= 8192)
                )
                    return i.url;
            }
            var f = l,
                m = Array.isArray(f),
                g = 0;
            for (f = m ? f : f[Symbol.iterator]();;) {
                var v;
                if (m) {
                    if (g >= f.length) break;
                    v = f[g++];
                } else {
                    if ((g = f.next()).done) break;
                    v = g.value;
                }
                var y = v;
                if (i.paramData[y]) {
                    var b = o - 8192 + ("tp" in i.paramData ? 0 : r),
                        h = i.paramData[y],
                        k = da(h),
                        D = k ? A(k) : 0;
                    if ((delete i.paramData[y], D <= b)) o = ua(i);
                    else {
                        for (
                            var w = { code: y, value: h.value },
                                S = D - b,
                                I = Math.max(20, Math.floor(w.value.length / 10)),
                                T = Math.ceil(w.value.length / I),
                                P = 1; P <= T; P++
                        ) {
                            var E = -I * P;
                            w.value = w.value.slice(0, E);
                            var C = A(da(w));
                            if (0 < w.value.length && C < S) {
                                i.paramData[y] = w;
                                break;
                            }
                        }
                        if ((o = ua(i)) <= 8192) return i.url;
                    }
                }
            }
            return "main" === n && (i.host = ia.main_fallback), i.url;
        },
        sa = function(e) {
            e.trackingState.pageLoaded = !0;
            for (var a = e.trackingState.queue.length; a--;)
                ma(e, e.trackingState.queue.shift());
            window.removeEventListener("load", e.trackingState.boundFlushQueue);
        };

    function pa(e) {
        var a = e.external.playerAPI,
            t =
            "complete" ===
            (a.getContainer().ownerDocument || window.document).readyState;
        (e.trackingState.pageLoaded = t) ||
        ((e.trackingState.boundFlushQueue = sa.bind(null, e)),
            window.addEventListener &&
            window.addEventListener("load", e.trackingState.boundFlushQueue),
            setTimeout(e.trackingState.boundFlushQueue, 5e3));
    }

    function fa(e, a) {
        var t = a.event,
            n = a.bucket,
            r = a.parameters,
            i = a.pingDestination,
            o = ca(t, n, r, i),
            d = !e.trackingState.pageLoaded;
        if (d && (t === de || t === ue || t === le)) sa(e);
        else if (d) return void e.trackingState.queue.push(o);
        ma(e, o);
    }

    function ma(e, a) {
        var t = new Image();
        t.src = a;
        for (
            var n = e.trackingState.images, r = n.length; r-- && (n[r].width || n[r].complete);

        )
            n.length = r;
        if ((n.push(t), e.meta.debug && e.trackingState.onping))
            try {
                e.trackingState.onping.call(null, a);
            } catch (e) {}
    }
    var ga = { delaySend: !1, returnURL: !1 };

    function va(t, e) {
        var a =
            2 < arguments.length && void 0 !== arguments[2] ?
            arguments[2] :
            "jwplayer6",
            n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        (n = M({}, ga, n)), Ve(t, e, a);
        var r = u(e, a),
            i = me.events[r];
        if (
            i &&
            !(i.filters || [])
            .map(function(e) {
                return (a = t), ta[e](a);
                var a;
            })
            .some(function(e) {
                return !!e;
            })
        ) {
            var o = aa(r, t);
            return n.delaySend ?
                fa.bind(null, t, o) :
                n.returnURL ?
                ca(o.event, o.bucket, o.parameters, o.pingDestination) :
                void fa(t, o);
        }
    }

    function ya(e) {
        if (!e.bidders) return {};
        var r = {},
            i = void 0;
        e.bidders.forEach(function(e) {
            var t,
                n,
                a = e.name;
            (r[a.toLowerCase()] =
                ((t = e),
                    (n = {}),
                    U.forEach(function(e) {
                        var a;
                        "result" === e
                            ?
                            (n.result = S[t[e]]) :
                            M(n, void 0 !== t[e] ? (((a = {})[e] = t[e]), a) : void 0),
                            t.code &&
                            -1 !== ["error", "invalid"].indexOf(t.result) &&
                            (n.errorCode = t.code);
                    }),
                    n)),
            e.errorCode && !i && (i = e.errorCode);
        });
        var a = e.floorPriceCurrency;
        return M({
                mediationLayer: F[e.mediationLayerAdServer],
                floorPriceCents: e.floorPriceCents,
                bidders: r,
                bidTimeout: e.bidTimeout,
            },
            void 0 !== i ? { errorCode: i } : void 0,
            a ? { floorPriceCurrency: a } : void 0
        );
    }

    function ba(t, e) {
        var n = t.ads.adEventData; -
        1 === t.ads.adClient && e && (t.ads.adClient = L(e.client)),
            e.sequence !== n.podIndex &&
            (delete n.timeAdLoading, delete n.adCreativeType),
            ha(n, e, "offset"),
            ha(n, e, "witem"),
            ha(n, e, "wcount"),
            ha(n, e, "skipoffset"),
            ha(n, e, "linear", function(e, a) {
                return a === e;
            }),
            ha(n, e, "adposition", function(e, a) {
                return { pre: 0, mid: 1, post: 2, api: 3 }[a];
            }),
            ha(n, e, "creativetype", function(e, a) {
                var t = "";
                switch (a) {
                    case "static":
                        t = "image/unknown";
                        break;
                    case "video":
                        t = "video/unknown";
                        break;
                    case "vpaid":
                    case "vpaid-swf":
                        t = "application/x-shockwave-flash";
                        break;
                    case "vpaid-js":
                        t = "application/javascript";
                        break;
                    default:
                        t = a || t;
                }
                return (n.adCreativeType = t);
            }),
            ha(n, e, "tag", function(e, a) {
                return (
                    (n.tagdomain = (function(e) {
                        if (e) {
                            var a = e.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/));
                            if (a && 1 < a.length) return a[1];
                        }
                        return "";
                    })(t.external.playerAPI.utils.getAbsolutePath(a))),
                    a
                );
            }),
            ha(n, e, "description"),
            ha(n, e, "creativeAdId"),
            ha(n, e, "placement"),
            ha(n, e, "advertiser"),
            ha(n, e, "advertiserId"),
            e.timeLoading && (n.timeAdLoading = 10 * Math.round(e.timeLoading / 10)),
            e.universalAdId ?
            (n.universalAdId = e.universalAdId
                .map(function(e) {
                    if ("unknown" !== e.universalAdIdRegistry)
                        return e.universalAdIdRegistry + "." + e.universalAdIdValue;
                })
                .filter(function(e) {
                    return !!e;
                })
                .join(",")) :
            delete n.universalAdId,
            (n.mediaFileCompliance = e.mediaFileCompliance),
            (n.categories = e.categories),
            (n.adSystem = e.adsystem || n.adSystem),
            (n.vastVersion = e.vastversion || n.vastVersion),
            (n.podIndex = e.sequence || n.podIndex),
            (n.podCount = e.podcount || n.podCount),
            (n.tagURL = e.tag || n.tagURL || e.vmap),
            (n.preload = "boolean" == typeof e.preloadAds ? e.preloadAds : n.preload),
            (n.adPlayId = e.adPlayId || n.adPlayId),
            (n.adBreakId = e.adBreakId || n.adBreakId),
            (n.adVastId = e.adId || n.adVastId),
            (n.duration = e.duration || n.duration),
            (n.adTitle = e.adtitle || n.adTitle),
            (n.jwpseg = e.jwpseg),
            (n.timeForVPBCache = e.timeForVPBCache || n.timeForVPBCache),
            (n.dealId = e.dealId || n.dealId);
        var a = void 0;
        if (
            ((a =
                    "googima" === e.client ?
                    ((n.creativeId = p(e, "ima.ad.g.creativeId")),
                        p(e, "ima.ad.g.mediaUrl")) :
                    ((n.creativeId = p(e, "creativeId")), p(e, "mediafile.file"))),
                (n.adMediaFileURL = "string" == typeof a ? a.substring(0, 2500) : a),
                e.item)
        ) {
            var r = we(e.item);
            n.targetMediaId = r !== t.playlistItemData.mediaId ? r : null;
        }
        t.ads.headerBiddingData = ya(e);
    }

    function ha(e, a, t) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ka;
        if (a.hasOwnProperty(t)) {
            var r = n;
            e[t] = r(t, a[t]);
        }
    }

    function ka(e, a) {
        return a;
    }

    function Da(e, a) {
        e.meta.playerState !== a && (e.meta.playerStateDuration = Date.now()),
            (e.meta.playerState = a);
    }

    function wa(e, a) {
        null === e.previousTime && (e.previousTime = a);
        var t = a - e.previousTime;
        return (
            (e.previousTime = a),
            (t = Math.min(Math.max(0, t), 4)),
            (e.playedSeconds = e.playedSeconds + t),
            t
        );
    }

    function Sa(e, a) {
        var t = e.ads.adEventData,
            n = e.ads.currentQuartile;
        n > t.previousQuartile &&
            (ba(e, a), va(e, "v", "clienta"), (t.previousQuartile = n));
    }
    var Ia = {
        adComplete: function(e, a) {
            (e.ads.currentQuartile = 4), Sa(e, a);
        },
        adError: function(e, a) {
            "object" == typeof a &&
                a &&
                ((e.playerData.lastErrorCode.ae = a.code || 1),
                    (e.ads.jwAdErrorCode = a.adErrorCode),
                    51901 === a.adErrorCode ?
                    (e.ads.errorMessage =
                        "string" == typeof a.message ?
                        a.message.substring(0, 100) :
                        void 0) :
                    (e.ads.errorMessage = void 0),
                    (e.ads.timeout = a.timeout)),
                va(e, "ae", "clienta");
        },
        adTime: function(e, a) {
            var t = e.ads.adEventData,
                n = (t.position = a.position);
            t.duration = t.duration || a.duration;
            var r = e.ads.adPlaybackTracking,
                i = e.ads.pingLimiters;
            !n ||
                t.position > t.duration ||
                (!(function(e, a, t) {
                        var n = wa(a, t),
                            r =
                            e.ads.pingLimiters.visibleEvent.canSendPing(se) ||
                            e.ads.pingLimiters.visibleEvent.canSendPing(ce);
                        e.playerData.viewable &&
                            (r &&
                                (1 === e.external.playerAPI.getConfig().visibility ?
                                    ((a.consecutiveVisibleSeconds += n),
                                        (a.totalVisibleSeconds += n),
                                        (a.maxConsecutiveVisibleSeconds = Math.max(
                                            a.maxConsecutiveVisibleSeconds,
                                            a.consecutiveVisibleSeconds
                                        ))) :
                                    ((a.maxConsecutiveVisibleSeconds = Math.max(
                                            a.maxConsecutiveVisibleSeconds,
                                            a.consecutiveVisibleSeconds
                                        )),
                                        (a.consecutiveVisibleSeconds = 0))),
                                (a.viewablePlayedSeconds = a.viewablePlayedSeconds + n));
                        !e.playerData.muted &&
                            0 < e.playerData.volume &&
                            (a.audiblePlayedSeconds = a.audiblePlayedSeconds + n);
                    })(e, r, n),
                    i.visibleEvent.canSendPing(se) &&
                    r.totalVisibleSeconds >= Math.floor(t.duration / 2) &&
                    (va(e, se, "clienta"), i.visibleEvent.setPingSent(se)),
                    i.visibleEvent.canSendPing(ce) &&
                    2 <= r.maxConsecutiveVisibleSeconds &&
                    (va(e, ce, "clienta"), i.visibleEvent.setPingSent(ce)),
                    (e.ads.currentQuartile = Math.min(
                        3,
                        Math.floor((4 * t.position + 0.05) / t.duration)
                    )),
                    Sa(e, a));
        },
        adSkipped: function(e, a) {
            (e.ads.watchedPastSkipPoint = a.watchedPastSkipPoint),
            va(e, "s", "clienta");
        },
        adImpression: function(e, a) {
            v(e, de);
            var t = e.ads.adPlaybackTracking;
            (t.audiblePlayedSeconds = 0),
            (t.viewablePlayedSeconds = 0),
            (t.playedSeconds = 0),
            (t.previousTime = null),
            va(e, de, "clienta");
        },
        adBreakEnd: function(e, a) {
            e.ads.adEventData = M({}, N);
        },
    };

    function Ta(i) {
        var e = i.external.playerAPI;
        e.on(q.join(" "), function() {
                Da(i, "ad-break"),
                    i.ads.adBreakTracking &&
                    i.ads.adBreakTracking.shouldTrack &&
                    ((i.ads.adBreakTracking.shouldTrack = !1),
                        i.ads.adBreakTracking.adBreakCount++);
            }),
            e.on(
                "adClick adRequest adMeta adImpression adComplete adSkipped adError adTime adBidRequest adBidResponse adStarted adLoaded adViewableImpression adBreakEnd",
                function(e) {
                    var a,
                        t,
                        n,
                        r = i.ads.adEventData;
                    (a = r),
                    "adClick" === (t = e).type ||
                        (a && a.adId === t.id && -1 !== t.id) ||
                        ((i.ads.adEventData = M({ adId: e.id }, N)),
                            i.ads.pingLimiters.visibleEvent.resetAll(),
                            (i.ads.adPlaybackTracking = M({}, I))),
                        (n = e), -1 === C.indexOf(n.type) && ba(i, e),
                        e.type in Ia ?
                        Ia[e.type](i, e) :
                        -1 === E.indexOf(e.type) && va(i, P[e.type], "clienta");
                }
            );
    }

    function Pa(e) {
        var a, t;
        "function" == typeof navigator.sendBeacon &&
            ((a = e),
                (t = function() {
                    v(a, ae);
                    var e = va(a, ae, "jwplayer6", { returnURL: !0 });
                    void 0 !== e && navigator.sendBeacon(e);
                }),
                window.addEventListener("unload", t),
                a.external.playerAPI.on("remove", function() {
                    v(a, ae),
                        window.removeEventListener("unload", t),
                        (a.meta.playerRemoved = !0),
                        va(a, ae, "jwplayer6");
                }));
    }
    var Ea = ["predictions", "segments", "decisionThresholds"];
    var Ca = 1e3;

    function Aa(e) {
        return 0 < e.numTrackedSeeks;
    }
    var xa = a,
        ja = e,
        Ba = n;

    function Ra(e) {
        e.meta.playbackTracking.playItemCount++, va(e, "s");
    }

    function Ma(c, s) {
        return function(e) {
            var a = c.meta.playbackEvents,
                t = c.playlistItemData,
                n = c.meta.playbackTracking,
                r = c.external.playerAPI,
                i = a[s];
            if (s === xa) {
                var o = e.segment;
                o && ((n.segmentReceived = !0), (n.segmentsEncrypted = o.encryption)),
                    (t.drm = e.drm || t.drm || "");
                var d = p(e, "metadata.programDateTime");
                d && (c.meta.playbackTracking.programDateTime = d);
                var l = p(e, "metadata.start");
                l && (c.meta.playbackTracking.cueStartTime = l);
            }
            if (((a[s] = e), s === ja)) {
                i ||
                    ((n.playedSeconds = 0),
                        (n.viewablePlayedSeconds = 0),
                        (n.audiblePlayedSeconds = 0),
                        (n.playedSecondsTotal = 0));
                var u = h(r);
                (n.previousTime = u), (n.currentPosition = u);
            }
            s === Ba &&
                (v(c, z),
                    "flash_adaptive" === g(r) ?
                    !c.meta.playbackSent &&
                    n.segmentReceived &&
                    ((c.meta.playbackSent = !0), (n.segmentReceived = !1), Ra(c)) :
                    c.meta.playbackSent || ((c.meta.playbackSent = !0), Ra(c)));
        };
    }

    function Va(e) {
        var a = e.meta.playbackTracking,
            t = a.playedSeconds,
            n = a.viewablePlayedSeconds,
            r = a.audiblePlayedSeconds;
        (a.playedSeconds = 0), (a.viewablePlayedSeconds = 0);
        var i = (t + 0.5) | (a.audiblePlayedSeconds = 0);
        a.elapsedSeconds = i;
        var o = (n + 0.5) | 0;
        a.viewableElapsedSeconds = o;
        var d = (r + 0.5) | 0;
        (a.audibleElapsedSeconds = d), 0 < i && va(e, W);
    }

    function La(e, a, t, n) {
        a < n &&
            n <= a + t &&
            ((e.meta.playbackTracking.retTimeWatched = n), va(e, "ret"));
    }

    function Oa(e, a, t) {
        var n,
            r,
            i,
            o = H + "-" + t;
        (n = a),
        (r = t),
        (i = o),
        e.meta.pingLimiters.playlistItem.canSendPing(i) &&
            Math.floor(n) === r &&
            ((e.meta.playbackTracking.thresholdCrossed = t),
                va(e, H),
                e.meta.pingLimiters.playlistItem.setPingSent(o));
    }

    function Ga(e, a) {
        var t,
            n,
            r,
            i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            o = arguments[3];
        i
            ?
            (function(e) {
                var a = e.meta.seekTracking;
                if (Aa(a)) {
                    clearTimeout(a.seekDebounceTimeout);
                    var t = va(e, "vs", "jwplayer6", { delaySend: !0 });
                    a.seekDebounceTimeout = setTimeout(function() {
                        var e;
                        t && t(),
                            ((e = a).videoStartDragTime = 0),
                            (e.dragStartTime = 0),
                            (e.seekDebounceTimeout = null),
                            (e.lastTargetTime = 0),
                            (e.numTrackedSeeks = 0);
                    }, Ca);
                }
            })(e) :
            ((t = e.meta.seekTracking),
                (n = a),
                (r = o),
                Aa(t) || ((t.videoStartDragTime = r), (t.dragStartTime = Date.now())),
                t.numTrackedSeeks++,
                (t.lastTargetTime = n.offset));
    }

    function Na(e, a, t) {
        var n, r;
        (e.playerData.lastErrorCode[a] = t.code),
        v(e, fe),
            (e.meta.eventPreAbandonment = u(a, "error")),
            e.errors.numberEventsSent < e.errors.NUM_ERRORS_PER_SESSION &&
            ((r = a),
                "number" == typeof(n = e).playerData.lastErrorCode[r] ||
                Math.random() < n.errors.SAMPLE_RATE) &&
            ((e.errors.numberEventsSent += 1), va(e, a, Q));
    }
    var qa = n,
        Fa = t,
        Ua = a,
        _a = e;

    function Qa(e) {
        var a = e.meta;
        (a.playbackEvents = {}),
        (a.playbackSent = !1),
        (a.playbackTracking.trackingSegment = 0),
        a.pingLimiters.playlistItem.resetAll(),
            (a.playbackTracking.posterVideoThumbAnimated = void 0),
            (a.playbackTracking.overlayVideoThumbAnimated = void 0),
            (e.playerData.numAutoVisualQualityChange = 0);
        var t = e.playerData.startup;
        (t.initialTime = null), (t.startupTime = null), (t.dispatchEvent = null);
    }

    function za(g) {
        var e,
            a,
            v = g.external.playerAPI,
            i = function(e, a) {
                (e.playlistItemData.playReason = a.playReason || ""),
                (e.playerData.startup.initialTime = Date.now()),
                va(e, "pa");
            }.bind(null, g),
            t = function(e, a) {
                var t = e.playlistItemData.mediaId;
                t &&
                    t === we(a.item) &&
                    ((e.playerData.lastErrorCode[J] = a.code), va(e, "paf", "error"));
            }.bind(null, g);
        v.on("idle buffer play pause complete error", function(e) {
                Da(g, e.type);
            }),
            v.on("idle", Qa.bind(null, g)),
            v.on("ready", function(e) {
                var a = g.playlistItemData,
                    t = g.playerData;
                (a.ready = M({}, e)),
                (t.viewable = v.getViewable()),
                (t.muted = v.getMute()),
                (t.volume = v.getVolume()),
                (t.inferencePluginVersion = s(v.getPlugin("inference"))),
                (t.biddingPluginVersion = s(v.getPlugin("bidding")));
            }),
            v.on("playlistItem", function(e) {
                var a = g.playlistItemData;
                (a.drm = ""),
                0 !== g.meta.playbackTracking.playSessionSequence &&
                    (a.itemId = V(12)),
                    g.meta.playbackTracking.playSessionSequence++,
                    (a.index = e.index);
                var t,
                    n,
                    r = e.item || m(v);
                r && ((a.mediaId = we(r)), Te(g, r)),
                    a.ready &&
                    ((g.meta.playbackTracking.posterVideoThumbnail = Ie(e.item)),
                        (t = g),
                        (n = a.ready),
                        (t.playerData.setupTime = -1),
                        n &&
                        n.setupTime &&
                        (t.playerData.setupTime =
                            (10 * Math.round(n.setupTime / 10)) | 0),
                        va(t, "e"),
                        (a.item = null),
                        (a.ready = null)),
                    v.off("beforePlay", i),
                    v.once("beforePlay", i),
                    Qa(g),
                    (g.meta.playbackTracking.segmentReceived =
                        g.meta.playbackTracking.segmentsEncrypted = !1);
            }),
            v.on("playAttemptFailed", t),
            v.on("meta", Ma(g, Ua)),
            v.on("levels", Ma(g, Fa)),
            v.on("play", Ma(g, _a)),
            v.on("firstFrame", Ma(g, qa)),
            v.on("time", function(e) {
                var a = g.meta.playbackEvents,
                    t = g.meta.playbackTracking,
                    n = "number" == typeof e.currentTime ? e.currentTime : h(v);
                t.currentPosition = n;
                var r = e.duration;
                if (n)
                    if (g.meta.seekTracking.dragStartTime) t.previousTime = n;
                    else {
                        1 < n && (a[Fa] || Ma(g, Fa)({}));
                        var i,
                            o,
                            d,
                            l = We(r),
                            u =
                            ((i = n),
                                (d = l),
                                (o = r) === 1 / 0 ? null : (i / (o / d) + 1) | 0);
                        0 === t.trackingSegment && (t.trackingSegment = u);
                        var c,
                            s,
                            p,
                            f =
                            ((c = g),
                                (p = wa((s = t), n)),
                                c.playerData.viewable &&
                                (s.viewablePlayedSeconds = s.viewablePlayedSeconds + p), !c.playerData.muted &&
                                0 < c.playerData.volume &&
                                (s.audiblePlayedSeconds = s.audiblePlayedSeconds + p),
                                p);
                        if (
                            (La(g, t.playedSecondsTotal, f, 10),
                                La(g, t.playedSecondsTotal, f, 30),
                                La(g, t.playedSecondsTotal, f, 60),
                                (t.playedSecondsTotal = t.playedSecondsTotal + f), !0 === t.sendSetTimeEvents &&
                                (Oa(g, n, 3), Oa(g, n, 10), Oa(g, n, 30)),
                                r <= 0 || r === 1 / 0)
                        )
                            t.playedSeconds >= b && ((t.latency = e.latency), Va(g));
                        else if (u === t.trackingSegment + 1) {
                            var m = (y * t.trackingSegment) / l;
                            if (l < u) return;
                            (t.normalizedTime = m), Va(g), (t.trackingSegment = 0);
                        }
                    }
            }),
            v.on("seek", function(e) {
                (g.meta.playbackTracking.previousTime = h(v)),
                (g.meta.playbackTracking.trackingSegment = 0);
                var a = g.meta.playbackTracking.currentPosition;
                Ga(g, e, !1, a);
            }),
            v.on("seeked", function(e) {
                Ga(g, e, !0);
            }),
            v.on("complete", function() {
                var e = g.meta.playbackTracking,
                    a = D(g);
                if (!(a <= 0 || a === 1 / 0)) {
                    We(a);
                    (e.normalizedTime = y), Va(g), (e.playedSecondsTotal = 0);
                }
            }),
            v.on("cast", function(e) {
                g.casting = !!e.active;
            }),
            v.on("playbackRateChanged", function(e) {
                va(g, "pru"),
                    (g.meta.playbackTracking.prevPlaybackRate = e.playbackRate);
            }),
            v.on("visualQuality", function(e) {
                "auto" === e.reason && (g.playerData.numAutoVisualQualityChange += 1);
                var a,
                    t,
                    n = O(v);
                (a = n),
                (t = !1),
                (k.width === a.width && k.height === a.height) || (t = !0),
                (k = a),
                t && -1 === r.indexOf(n.reason) && va(g, "vqc");
            }),
            v.on(o.join(" "), function() {
                g.ads.adBreakTracking && (g.ads.adBreakTracking.shouldTrack = !0);
            }),
            v.on("error", Na.bind(null, g, fe)),
            v.on("setupError", Na.bind(null, g, pe)),
            v.on("autostartNotAllowed", function() {
                va(g, K);
            }),
            v.on("viewable", function(e) {
                g.playerData.viewable = e.viewable;
            }),
            v.on("mute", function(e) {
                g.playerData.muted = e.mute;
            }),
            v.on("volume", function(e) {
                g.playerData.volume = e.volume;
            }),
            v.on("captionsChanged", function(e) {
                0 !== e.track && 0 === g.playerData.captionsIndex && va(g, ne),
                    (g.playerData.captionsIndex = e.track);
            }),
            v.on("videoThumbFirstFrame", function(e) {
                g.meta.playbackTracking.posterVideoThumbAnimated = !0;
            }),
            v.on("inference", function(e) {
                var t;
                (t = e),
                (g.inference.result = Ea.reduce(function(e, a) {
                    return t[a] && (e[a] = t[a]), e;
                }, {}));
            }),
            Qa(g),
            (a = W),
            ((e = g).meta.previousBufferTimes[a] = He(e));
    }

    function Ka(e, a) {
        (e.related.feedId = be(a)),
        (e.related.feedInstanceId = he(a)),
        (e.related.feedType = De(a, "kind")),
        (e.related.feedShownId = a.feedShownId),
        (e.related.onClickSetting =
            "onclick" in a ? ("play" === a.onclick ? 1 : 0) : void 0),
        (e.related.feedInterface = a.ui);
        var t = a.itemsShown || [],
            n = 0,
            r = [],
            i = [],
            o = [],
            d = !0,
            l = !1;
        t.forEach(function(e) {
                ke(e) && n++, r.push(we(e));
                var a = Ie(e) ? "1" : "0";
                l || "1" !== a || (l = !0), o.push(a);
                var t = p(e, "variations.selected.images.id");
                t && (d = !1), i.push(t || "null");
            }),
            (e.related.thumbnailIdsShown = d ? [] : i),
            (e.related.idsShown = r),
            (e.related.pinnedCount = n),
            (e.related.page = a.page),
            (e.related.autotimerLength = a.autoTimer),
            (e.related.pinSetId = ke(a.target)),
            (e.related.advanceTarget = we(a.target)),
            (e.related.targetThumbID = p(a.target, "variations.selected.images.id")),
            (e.related.overlayVideoThumbs = l ? o.join(",") : void 0),
            (e.related.ordinalClicked = "position" in a ? a.position + 1 : a.index);
    }

    function Wa(e, a, t) {
        Ka(e, a), va(e, t);
    }

    function Ha(a) {
        var e = a.external.playerAPI.getPlugin("related");
        e &&
            (e.on("playlist", function(e) {
                    null !== e.playlist && Wa(a, e, X);
                }),
                e.on("feedShown", function(e) {
                    Da(a, "recs-overlay"),
                        (a.related.shownReason = e.reason),
                        (a.related.feedWasViewable = e.viewable),
                        Wa(a, e, Y);
                }),
                e.on("feedClick", function(e) {
                    Wa(a, e, Z);
                }),
                e.on("feedAutoAdvance", function(e) {
                    Wa(a, e, ee);
                }),
                e.on("videoThumbFirstFrame", function(e) {
                    a.meta.playbackTracking.overlayVideoThumbAnimated = !0;
                }),
                (a.related.relatedSetUp = !0));
    }

    function $a(t) {
        t.external.playerAPI.getPlugin &&
            (t.external.playerAPI.on("ready", function() {
                    var a, e;
                    Ha(t),
                        (e = (a = t).external.playerAPI).on("playlistItem", function() {
                            (a.related.sendHoverPing = !0),
                            (a.related.nextShownReason = null),
                            (a.related.shownReason = null);
                        }),
                        e.on("nextShown", function(e) {
                            (a.related.nextShownReason = e.reason),
                            (a.related.shownReason = e.reason),
                            Da(a, "recs-overlay"),
                                ("hover" !== e.reason || a.related.sendHoverPing) &&
                                ((a.related.sendHoverPing = !1), Wa(a, e, Y));
                        }),
                        e.on("nextClick", function(e) {
                            a.related.nextShownReason && Wa(a, e, Z);
                        }),
                        e.on("nextAutoAdvance", function(e) {
                            Wa(a, e, ee);
                        });
                }),
                t.external.playerAPI.on("relatedReady", function() {
                    t.related.relatedSetUp || Ha(t);
                }));
    }
    var Ja = {
        facebook: "fb",
        twitter: "twi",
        email: "em",
        link: "cl",
        embed: "ceb",
        pinterest: "pin",
        tumblr: "tbr",
        googleplus: "gps",
        reddit: "rdt",
        linkedin: "lkn",
        custom: "cus",
    };

    function Xa(e) {
        e.external.playerAPI.on("ready", function() {
            !(function(a) {
                var e = a.external.playerAPI;
                if (e.getPlugin) {
                    var t = e.getPlugin("sharing");
                    t &&
                        t.on("click", function(e) {
                            (a.sharing.shareMethod = Ja[e.method] || Ja.custom), va(a, $);
                        });
                }
            })(e);
        });
    }
    var Ya = 0.01;
    var Za,
        et =
        ((Za = (function() {
                var e = navigator.plugins;
                if (e && "object" == typeof e["Shockwave Flash"]) {
                    var a = e["Shockwave Flash"].description;
                    if (a) return a;
                }
                if (void 0 !== window.ActiveXObject)
                    try {
                        var t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        if (t) {
                            var n = t.GetVariable("$version");
                            if (n) return n;
                        }
                    } catch (e) {}
                return "";
            })().replace(/\D+(\d+\.?\d*).*/, "$1")),
            function() {
                return Za;
            }),
        at = V(12);

    function tt(e) {
        if (e) return { pageViewId: at };
        var a,
            t = window.top !== window.self,
            n = (function(e, a, t) {
                var n = "",
                    r = "",
                    i = "",
                    o = !1;
                if (e) {
                    (n = (function(e) {
                        var a = e.match(
                            /^(https?:\/\/).*\.(?:ampproject\.org|bing-amp\.com)\/(?:.\/)?(?:.\/)?(.*)$/
                        );
                        if (a && 1 < a.length) return "" + a[1] + a[2];
                        var t = e.match(
                            /^(https?:\/\/.*)\.(?:cdn\.ampproject\.org|bing-amp\.com)$/
                        );
                        if (t && 1 < t.length)
                            return ("" + t[1])
                                .replace(/([^-])(\-)([^-])/g, "$1.$3")
                                .replace(/\-\-/g, "-");
                        return e;
                    })((r = a))),
                    (o = n !== a);
                    try {
                        i = t.document.title;
                        var d = t.location.href;
                        (r = r || d), (n = n || d);
                    } catch (e) {}
                }
                return { pageURL: n, origPageURL: r, amp: o, pageTitle: i };
            })(t, document.referrer, window.top),
            r = document.querySelector('meta[property="og:title"]'),
            i = void 0;
        return (
            r && (i = r.getAttribute("content")), {
                pageURL: n.pageURL || window.location.href,
                origPageURL: n.amp ? n.origPageURL : void 0,
                pageTitle: n.pageTitle || document.title,
                inIframe: t,
                flashVersion: et(),
                pageViewId: at,
                pageOGTitle: i,
                testCaseId: void 0,
                amp: n.amp,
                jwAmpComponent: ((a = document.location.search), /isAMP/.test(a)),
            }
        );
    }
    var nt = void 0;
    try {
        nt = window.localStorage;
    } catch (e) {}
    var rt = (function() {
        function e() {
            na(this, e), (this.pingTracker = {});
        }
        return (
            (e.prototype.canSendPing = function(e) {
                return !this.pingTracker[e];
            }),
            (e.prototype.setPingSent = function(e) {
                this.pingTracker[e] = !0;
            }),
            (e.prototype.resetAll = function() {
                this.pingTracker = {};
            }),
            (e.prototype.resetKey = function(e) {
                delete this.pingTracker[e];
            }),
            e
        );
    })();
    var it = ["1", "yes", "true"];

    function ot(e, a) {
        return !0 === e || (!!(t = a) && 0 <= it.indexOf(t.toString()));
        var t;
    }
    var dt = 0;

    function lt(e, a, t) {
        var n = a.sdkplatform ? parseInt(a.sdkplatform, 10) : R,
            r = e.getConfig(),
            i = (r || {}).advertising || {},
            o = (dt += 1),
            d =
            "doNotTrack" in navigator ||
            "doNotTrack" in window ||
            "msDoNotTrack" in navigator ?
            navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack :
            "unsupported",
            l = ot(d, r.doNotSaveCookies),
            u = void 0,
            c = void 0;
        if (l) nt && nt.removeItem("jwplayerLocalId");
        else {
            var s = (function() {
                if (!nt) return { localID: null, storageAvailable: "fail" };
                var e = nt.jwplayerLocalId;
                if (e) return { localID: e, storageAvailable: "read" };
                try {
                    return (
                        (nt.jwplayerLocalId = V(12)), { localID: nt.jwplayerLocalId, storageAvailable: "set" }
                    );
                } catch (e) {
                    return { localID: null, storageAvailable: "fail" };
                }
            })();
            (u = s.localID), (c = s.storageAvailable);
        }
        var p,
            f = (p = document.querySelector("html")) ? p.getAttribute("lang") : null,
            m =
            (window.matchMedia &&
                window.matchMedia("(display-mode: standalone)").matches) ||
            !0 === window.navigator.standalone,
            g = (function() {
                try {
                    if (window.top !== window.self) return window.top.document.referrer;
                } catch (e) {
                    return null;
                }
                return document.referrer;
            })(),
            v = r.defaultPlaybackRate || 1,
            y = L(i.client);
        e.getPlugin && e.getPlugin("related");
        var b,
            h,
            k,
            D,
            w,
            S,
            I,
            T,
            P,
            E,
            C,
            A = Math.random() <= Ya;
        return {
            external: { playerAPI: e, div: t, utils: e.utils },
            playerData: {
                setupTime: -1,
                startup: { initialTime: null, startupTime: null, dispatchEvent: null },
                visualQuality: O(e),
                numAutoVisualQualityChange: 0,
                lastErrorCode: {},
                defaultPlaybackRate: v,
                playerConfig: {
                    visibility: -1,
                    bandwidthEstimate: -1,
                    floatingState: !1,
                },
                floatingConfigured: !(!r.floating || r.floating.disabled),
                playerSize: { width: 0, height: 0, bucket: 0 },
                localization: {
                    language: r.language,
                    numIntlKeys: "object" == typeof r.intl ? Object.keys(r.intl).length : null,
                    numLocalKeys: "object" == typeof r.localization ?
                        Object.keys(r.localization).length : null,
                },
                contextualEmbed: !!r.contextual,
                playbackMode: null,
                stringifiedSetupConfig: G(e),
                captionsIndex: 0,
            },
            staticPlayerData:
                ((I = e),
                    (T = a),
                    (P = n),
                    (C = {
                        playerVersion: ((E = I.version), E.split("+")[0]),
                        sdkPlatform: T.sdkplatform || R,
                        embedID: V(12),
                    }),
                    P &&
                    ((C.sdkVersion = T.iossdkversion),
                        (C.bundleId = T.bundleId),
                        (C.advertisingId = T.advertisingId),
                        (C.deviceModel = T.deviceModel)),
                    C),
            casting: !1,
            accountData: (function(e, a) {
                var t = 0,
                    n = void 0;
                if (e) {
                    var r = new a(e),
                        i = r.edition();
                    (t = j[i] || 0) !== x && (n = r.token());
                }
                return n || (n = "_"), { analyticsID: n, edition: t };
            })(r.key, e.utils.key),
            configData:
                ((h = r),
                    (D = (window.jwplayer && window.jwplayer.defaults) || {}),
                    (w = h.related),
                    (S = {
                        playerHosting: h[re] || D[re] || 0,
                        playerConfigKey: h.pid,
                        abTestConfig: h.pad,
                        skinName: h.skin,
                        advertisingBlockType:
                            ((k = h), k.advertising ? (k.advertising.outstream ? 2 : 1) : 0),
                        sharingEnabled: !!h.sharing,
                        castingBlockPresent: !!h.cast,
                        gaBlockPresent: !!h.ga,
                        autostartConfig: !!h.autostart,
                        displayDescription: !1 !== h.displaydescription,
                        posterImagePresent: !!h.image,
                        playbackRateControlsSet: !!h.playbackRateControls,
                    }),
                    h.autostart in B && (S.autostartConfig = B[h.autostart]),
                    w && (S.relatedPluginFeedFile = w.recommendations || w.file),
                    S),
            browser: {
                langAttr: f,
                isPageStandalone: m,
                docReferrer: g,
                storage: { localID: u, storageAvailable: c, doNotTrackProperty: d },
                pageData: tt(n),
                doNotTrackUser: l,
            },
            meta: {
                debug: !0 === a.debug,
                doNotPingBackIDs: ((b = r), !0 === b.doNotTrackCookies),
                setupCount: dt,
                nthPlayer: o,
                playbackEvents: {},
                playbackSent: void 0,
                playbackTracking: {
                    trackingSegment: void 0,
                    playedSeconds: 0,
                    viewablePlayedSeconds: 0,
                    audiblePlayedSeconds: 0,
                    playedSecondsTotal: 0,
                    previousTime: null,
                    segmentReceived: !1,
                    segmentsEncrypted: !1,
                    playItemCount: 0,
                    playSessionSequence: 0,
                    prevPlaybackRate: v,
                    retTimeWatched: 0,
                    normalizedTime: -1,
                    elapsedSeconds: 0,
                    viewableElapsedSeconds: 0,
                    audibleElapsedSeconds: 0,
                    currentPosition: 0,
                    thresholdCrossed: 0,
                    sendSetTimeEvents: r.setTimeEvents || !1,
                    cueStartTime: void 0,
                    programDateTime: void 0,
                },
                bufferedPings: [],
                seekTracking: {
                    numTrackedSeeks: 0,
                    videoStartDragTime: 0,
                    dragStartTime: 0,
                    seekDebounceTimeout: null,
                    lastTargetTime: 0,
                },
                previousBufferTimes: {},
                lastEvent: "",
                lastBucket: "",
                eventPreAbandonment: void 0,
                playerState: "idle",
                playerStateDuration: 0,
                playerRemoved: !1,
                pingLimiters: { playlistItem: new rt() },
                sessionSampled: A,
            },
            playlistItemData: {
                ready: void 0,
                item: {},
                drm: "",
                index: 0,
                itemId: V(12),
                mediaId: "",
                playReason: "",
                duration: 0,
            },
            related: {
                shownReason: null,
                nextShownReason: null,
                sendHoverPing: null,
                feedId: null,
                feedInstanceId: null,
                feedType: null,
                onClickSetting: -1,
                feedInterface: null,
                idsShown: [],
                thumbnailIdsShown: [],
                pinnedCount: -1,
                page: -1,
                autotimerLength: -1,
                pinSetId: -1,
                advanceTarget: null,
                ordinalClicked: -1,
                relatedSetUp: !1,
            },
            sharing: {
                shareMethod: null,
                shareReferrer: (function(e) {
                    if (!e) return null;
                    var a = e.match(/[?&]jwsource=([^&]+)/);
                    return a ? decodeURIComponent(a[1]) : null;
                })(window.location.search),
            },
            ads: {
                adEventData: M({}, N),
                advertisingConfig: i,
                adClient: y,
                adScheduleId: i.adscheduleid,
                adBreakTracking: -1 !== y ? { shouldTrack: !1, adBreakCount: 0 } : null,
                adPlaybackTracking: {
                    consecutiveVisibleSeconds: 0,
                    maxConsecutiveVisibleSeconds: 0,
                    totalVisibleSeconds: 0,
                },
                headerBiddingData: {},
                headerBiddingCacheData: { bidder: null, cacheKey: null },
                watchedPastSkipPoint: null,
                jwAdErrorCode: null,
                currentQuartile: null,
                pingLimiters: { visibleEvent: new rt() },
            },
            errors: {
                SAMPLE_RATE: 0.02,
                NUM_ERRORS_PER_SESSION: 1,
                numberEventsSent: 0,
            },
            trackingState: {
                pageLoaded: null,
                queue: [],
                onping: "function" == typeof a.onping ? a.onping : null,
                images: [],
                boundFlushQueue: null,
            },
            inference: { result: null },
        };
    }
    var ut = 0;
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)(
        "jwpsrv",
        "7.0",
        function(e, a, t) {
            var n,
                r,
                i = lt(e, a, t);
            Pa((n = i)),
                za(n),
                Ta(n),
                $a(n),
                Xa(n),
                pa(i),
                (this.getTrackingPixelURLs =
                    ((r = i),
                        function(e, a) {
                            (r.ads.headerBiddingCacheData.bidder = e),
                            (r.ads.headerBiddingCacheData.cacheKey = a);
                            var t = va(r, "vci", "clienta", { returnURL: !0 }),
                                n = va(r, "vcae", "clienta", { returnURL: !0 });
                            return (
                                (r.ads.headerBiddingCacheData.bidder = void 0),
                                (r.ads.headerBiddingCacheData.cacheKey = void 0), { impression: t, error: n }
                            );
                        })),
                (this.doNotTrackUser = function(e) {
                    return e.meta.doNotPingBackIDs;
                }.bind(null, i)),
                (this.trackExternalAPIUsage = function(e, a) {
                    var t, n, r;
                    if (!(25 <= ut || 0.005 < Math.random()))
                        return (
                            ut++,
                            (n = e),
                            (r = a),
                            ((t = i).playerData.apiTracking = {
                                methodCalled: n,
                                firstMeaningfulParam: r,
                            }),
                            va(t, te, "jwplayer6"),
                            void delete t.playerData.apiTracking
                        );
                });
        }
    );
})();