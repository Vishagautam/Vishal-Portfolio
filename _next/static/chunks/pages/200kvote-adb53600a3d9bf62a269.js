_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    "93az": function (e, t, r) {
      "use strict";
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var o = r("q1tI"),
        a = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
        s = function () {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 21,
              t = "",
              r = e;
            r--;

          )
            t += a[(64 * Math.random()) | 0];
          return t;
        },
        c = [],
        u = !1,
        l = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var r = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
              n = e.id,
              i = void 0 === n ? null : n;
            (r.renderCaptcha = r.renderCaptcha.bind(r)),
              (r.resetCaptcha = r.resetCaptcha.bind(r)),
              (r.removeCaptcha = r.removeCaptcha.bind(r)),
              (r.handleOnLoad = r.handleOnLoad.bind(r)),
              (r.handleSubmit = r.handleSubmit.bind(r)),
              (r.handleExpire = r.handleExpire.bind(r)),
              (r.handleError = r.handleError.bind(r));
            var o = "undefined" !== typeof hcaptcha;
            return (
              o || (u = !1),
              (r.state = {
                isApiReady: o,
                isRemoved: !1,
                elementId: i || "hcaptcha-" + s(),
                captchaId: "",
              }),
              r
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.languageOverride,
                    r = e.reCaptchaCompat,
                    n = this.state,
                    i = n.isApiReady;
                  n.elementId;
                  i
                    ? this.renderCaptcha()
                    : (u ||
                        ((u = !0),
                        (function (e, t) {
                          window.hcaptchaOnLoad = function () {
                            c = c.filter(function (e) {
                              return e(), !1;
                            });
                          };
                          var r = document.createElement("script");
                          (r.src =
                            "https://hcaptcha.com/1/api.js?render=explicit&onload=hcaptchaOnLoad"),
                            (r.async = !0),
                            e && (r.src += "&hl=" + e),
                            !1 === t && (r.src += "&recaptchacompat=off"),
                            document.head.appendChild(r);
                        })(t, r)),
                      c.push(this.handleOnLoad));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.state,
                    t = e.isApiReady,
                    r = e.isRemoved,
                    n = e.captchaId;
                  t && !r && (hcaptcha.reset(n), hcaptcha.remove(n));
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    this.state.isApiReady === t.isApiReady &&
                    this.state.isRemoved === t.isRemoved
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this;
                  this.props.endpoint;
                  [
                    "sitekey",
                    "size",
                    "theme",
                    "tabindex",
                    "languageOverride",
                    "endpoint",
                  ].every(function (r) {
                    return e[r] === t.props[r];
                  }) || (this.removeCaptcha(), this.renderCaptcha());
                },
              },
              {
                key: "renderCaptcha",
                value: function () {
                  var e = this.state,
                    t = e.isApiReady,
                    r = e.elementId;
                  if (t) {
                    var i = hcaptcha.render(
                      document.getElementById(r),
                      n({}, this.props, {
                        "error-callback": this.handleError,
                        "expired-callback": this.handleExpire,
                        callback: this.handleSubmit,
                      })
                    );
                    this.setState({ isRemoved: !1, captchaId: i });
                  }
                },
              },
              {
                key: "resetCaptcha",
                value: function () {
                  var e = this.state,
                    t = e.isApiReady,
                    r = e.isRemoved,
                    n = e.captchaId;
                  t && !r && hcaptcha.reset(n);
                },
              },
              {
                key: "removeCaptcha",
                value: function () {
                  var e = this.state,
                    t = e.isApiReady,
                    r = e.isRemoved,
                    n = e.captchaId;
                  t &&
                    !r &&
                    this.setState({ isRemoved: !0 }, function () {
                      hcaptcha.remove(n);
                    });
                },
              },
              {
                key: "handleOnLoad",
                value: function () {
                  var e = this;
                  this.setState({ isApiReady: !0 }, function () {
                    e.renderCaptcha();
                  });
                },
              },
              {
                key: "handleSubmit",
                value: function (e) {
                  var t = this.props.onVerify,
                    r = this.state,
                    n = r.isRemoved,
                    i = r.captchaId;
                  "undefined" === typeof hcaptcha ||
                    n ||
                    t(hcaptcha.getResponse(i), hcaptcha.getRespKey(i));
                },
              },
              {
                key: "handleExpire",
                value: function () {
                  var e = this.props.onExpire,
                    t = this.state,
                    r = t.isApiReady,
                    n = t.isRemoved,
                    i = t.captchaId;
                  r && !n && (hcaptcha.reset(i), e && e());
                },
              },
              {
                key: "handleError",
                value: function (e) {
                  var t = this.props.onError,
                    r = this.state,
                    n = r.isApiReady,
                    i = r.isRemoved,
                    o = r.captchaId;
                  n && !i && (hcaptcha.reset(o), t && t(e));
                },
              },
              {
                key: "execute",
                value: function () {
                  var e = this.state,
                    t = e.isApiReady,
                    r = e.isRemoved,
                    n = e.captchaId;
                  t && !r && hcaptcha.execute(n);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.elementId;
                  return o.createElement("div", { id: e });
                },
              },
            ]),
            t
          );
        })(o.Component);
      e.exports = l;
    },
    KbXP: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/200kvote",
        function () {
          return r("smf4");
        },
      ]);
    },
    NyWP: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.destroyCookie = t.setCookie = t.parseCookies = void 0);
      var i = r("iVi/"),
        o = r("U0US"),
        a = function () {
          return "undefined" !== typeof window;
        };
      function s(e, t) {
        var r = e.sameSite === t.sameSite;
        return (
          "string" === typeof e.sameSite &&
            "string" === typeof t.sameSite &&
            (r = e.sameSite.toLowerCase() === t.sameSite.toLowerCase()),
          (function (e, t) {
            var r = Object.getOwnPropertyNames(e),
              n = Object.getOwnPropertyNames(t);
            if (r.length !== n.length) return !1;
            for (var i = 0; i < r.length; i++) {
              var o = r[i];
              if (e[o] !== t[o]) return !1;
            }
            return !0;
          })(
            n(n({}, e), { sameSite: void 0 }),
            n(n({}, t), { sameSite: void 0 })
          ) && r
        );
      }
      function c(e, t) {
        return e && e.req && e.req.headers && e.req.headers.cookie
          ? i.parse(e.req.headers.cookie, t)
          : a()
          ? i.parse(document.cookie, t)
          : {};
      }
      function u(e, t, r, c) {
        if (e && e.res && e.res.getHeader && e.res.setHeader) {
          var u = e.res.getHeader("Set-Cookie") || [];
          "string" === typeof u && (u = [u]), "number" === typeof u && (u = []);
          var l = o.parse(u),
            p = [];
          l.forEach(function (e) {
            s(
              e,
              (function (e, t, r) {
                var i = r.sameSite;
                !0 === i && (i = "strict"),
                  (void 0 !== i && !1 !== i) || (i = "lax");
                var o = n(n({}, r), { sameSite: i });
                return delete o.encode, n({ name: e, value: t }, o);
              })(t, r, c)
            ) ||
              p.push(
                i.serialize(
                  e.name,
                  e.value,
                  n(
                    {
                      encode: function (e) {
                        return e;
                      },
                    },
                    e
                  )
                )
              );
          }),
            p.push(i.serialize(t, r, c)),
            e.res.finished || e.res.setHeader("Set-Cookie", p);
        }
        if (a()) {
          if (c && c.httpOnly)
            throw new Error("Can not set a httpOnly cookie in the browser.");
          document.cookie = i.serialize(t, r, c);
        }
        return {};
      }
      function l(e, t, r) {
        var o = n(n({}, r || {}), { maxAge: -1 });
        if (e && e.res && e.res.setHeader && e.res.getHeader) {
          var s = e.res.getHeader("Set-Cookie") || [];
          "string" === typeof s && (s = [s]),
            "number" === typeof s && (s = []),
            s.push(i.serialize(t, "", o)),
            e.res.setHeader("Set-Cookie", s);
        }
        return a() && (document.cookie = i.serialize(t, "", o)), {};
      }
      (t.parseCookies = c),
        (t.setCookie = u),
        (t.destroyCookie = l),
        (t.default = { set: u, get: c, destroy: l });
    },
    Rp7o: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("nKUr"),
        i = r("93az"),
        o = r.n(i),
        a = r("q1tI");
      function s(e) {
        var t = e.visible,
          r = e.onFinish,
          i = Object(a.useRef)(null),
          s = Object(a.useState)(!1),
          c = s[0],
          u = s[1];
        Object(a.useEffect)(function () {
          u(!0);
        }, []);
        var l = Object(a.useState)(!1),
          p = l[0],
          d = l[1];
        return (
          Object(a.useEffect)(
            function () {
              if (!t) {
                var e = setTimeout(function () {
                  return d(!0);
                }, 500);
                return function () {
                  return clearTimeout(e);
                };
              }
              i.current.resetCaptcha(), d(!1);
            },
            [t]
          ),
          Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)("div", {
                className:
                  (p ? "hidden " : "") +
                  (t ? "opacity-50" : "opacity-0") +
                  " fixed bg-black w-full h-full top-0 left-0 transition duration-500",
                onClick: function () {
                  return r(null);
                },
              }),
              Object(n.jsx)("div", {
                className:
                  (t ? "top-0" : "top-full") +
                  " fixed left-0 w-full text-center duration-500 ease-out transition-all pointer-events-none",
                style: { lineHeight: t ? "100vh" : "0vh" },
                children: Object(n.jsx)("div", {
                  className: "inline-block pointer-events-auto",
                  children:
                    c &&
                    Object(n.jsx)(o.a, {
                      sitekey: "da245811-4a81-48fd-923c-8d4a527b6c74",
                      onVerify: function (e) {
                        r(e);
                      },
                      onError: function () {
                        r(null);
                      },
                      onExpire: function () {
                        r(null);
                      },
                      ref: i,
                    }),
                }),
              }),
            ],
          })
        );
      }
    },
    U0US: function (e, t, r) {
      "use strict";
      var n = { decodeValues: !0, map: !1, silent: !1 };
      function i(e) {
        return "string" === typeof e && !!e.trim();
      }
      function o(e, t) {
        var r = e.split(";").filter(i),
          o = r.shift().split("="),
          a = o.shift(),
          s = o.join("="),
          c = {
            name: a,
            value: (t = t ? Object.assign({}, n, t) : n).decodeValues
              ? decodeURIComponent(s)
              : s,
          };
        return (
          r.forEach(function (e) {
            var t = e.split("="),
              r = t.shift().trimLeft().toLowerCase(),
              n = t.join("=");
            "expires" === r
              ? (c.expires = new Date(n))
              : "max-age" === r
              ? (c.maxAge = parseInt(n, 10))
              : "secure" === r
              ? (c.secure = !0)
              : "httponly" === r
              ? (c.httpOnly = !0)
              : "samesite" === r
              ? (c.sameSite = n)
              : (c[r] = n);
          }),
          c
        );
      }
      function a(e, t) {
        if (((t = t ? Object.assign({}, n, t) : n), !e)) return t.map ? {} : [];
        if (e.headers && e.headers["set-cookie"]) e = e.headers["set-cookie"];
        else if (e.headers) {
          var r =
            e.headers[
              Object.keys(e.headers).find(function (e) {
                return "set-cookie" === e.toLowerCase();
              })
            ];
          r ||
            !e.headers.cookie ||
            t.silent ||
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            ),
            (e = r);
        }
        if (
          (Array.isArray(e) || (e = [e]),
          (t = t ? Object.assign({}, n, t) : n).map)
        ) {
          return e.filter(i).reduce(function (e, r) {
            var n = o(r, t);
            return (e[n.name] = n), e;
          }, {});
        }
        return e.filter(i).map(function (e) {
          return o(e, t);
        });
      }
      (e.exports = a),
        (e.exports.parse = a),
        (e.exports.parseString = o),
        (e.exports.splitCookiesString = function (e) {
          if (Array.isArray(e)) return e;
          if ("string" !== typeof e) return [];
          var t,
            r,
            n,
            i,
            o,
            a = [],
            s = 0;
          function c() {
            for (; s < e.length && /\s/.test(e.charAt(s)); ) s += 1;
            return s < e.length;
          }
          for (; s < e.length; ) {
            for (t = s, o = !1; c(); )
              if ("," === (r = e.charAt(s))) {
                for (
                  n = s, s += 1, c(), i = s;
                  s < e.length &&
                  "=" !== (r = e.charAt(s)) &&
                  ";" !== r &&
                  "," !== r;

                )
                  s += 1;
                s < e.length && "=" === e.charAt(s)
                  ? ((o = !0), (s = i), a.push(e.substring(t, n)), (t = s))
                  : (s = n + 1);
              } else s += 1;
            (!o || s >= e.length) && a.push(e.substring(t, e.length));
          }
          return a;
        });
    },
    cpVT: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    "iVi/": function (e, t, r) {
      "use strict";
      (t.parse = function (e, t) {
        if ("string" !== typeof e)
          throw new TypeError("argument str must be a string");
        for (
          var r = {}, i = t || {}, a = e.split(o), c = i.decode || n, u = 0;
          u < a.length;
          u++
        ) {
          var l = a[u],
            p = l.indexOf("=");
          if (!(p < 0)) {
            var d = l.substr(0, p).trim(),
              f = l.substr(++p, l.length).trim();
            '"' == f[0] && (f = f.slice(1, -1)),
              void 0 == r[d] && (r[d] = s(f, c));
          }
        }
        return r;
      }),
        (t.serialize = function (e, t, r) {
          var n = r || {},
            o = n.encode || i;
          if ("function" !== typeof o)
            throw new TypeError("option encode is invalid");
          if (!a.test(e)) throw new TypeError("argument name is invalid");
          var s = o(t);
          if (s && !a.test(s)) throw new TypeError("argument val is invalid");
          var c = e + "=" + s;
          if (null != n.maxAge) {
            var u = n.maxAge - 0;
            if (isNaN(u) || !isFinite(u))
              throw new TypeError("option maxAge is invalid");
            c += "; Max-Age=" + Math.floor(u);
          }
          if (n.domain) {
            if (!a.test(n.domain))
              throw new TypeError("option domain is invalid");
            c += "; Domain=" + n.domain;
          }
          if (n.path) {
            if (!a.test(n.path)) throw new TypeError("option path is invalid");
            c += "; Path=" + n.path;
          }
          if (n.expires) {
            if ("function" !== typeof n.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            c += "; Expires=" + n.expires.toUTCString();
          }
          n.httpOnly && (c += "; HttpOnly");
          n.secure && (c += "; Secure");
          if (n.sameSite) {
            switch (
              "string" === typeof n.sameSite
                ? n.sameSite.toLowerCase()
                : n.sameSite
            ) {
              case !0:
                c += "; SameSite=Strict";
                break;
              case "lax":
                c += "; SameSite=Lax";
                break;
              case "strict":
                c += "; SameSite=Strict";
                break;
              case "none":
                c += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return c;
        });
      var n = decodeURIComponent,
        i = encodeURIComponent,
        o = /; */,
        a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function s(e, t) {
        try {
          return t(e);
        } catch (r) {
          return e;
        }
      }
    },
    rg98: function (e, t, r) {
      "use strict";
      function n(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (u) {
          return void r(u);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function i(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = e.apply(t, r);
            function s(e) {
              n(a, i, o, s, c, "next", e);
            }
            function c(e) {
              n(a, i, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      r.d(t, "a", function () {
        return i;
      });
    },
    smf4: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return j;
        });
      var n = r("nKUr"),
        i = r("z7pX"),
        o = r("cpVT"),
        a = r("vJKn"),
        s = r.n(a),
        c = r("rg98"),
        u = r("g4pe"),
        l = r.n(u),
        p = r("NyWP"),
        d = r.n(p),
        f = r("q1tI"),
        h = r("Rp7o"),
        b = r("hLHZ");
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var x = function (e) {
          var t = e.option,
            r = e.voted,
            i = e.processVote;
          return Object(n.jsxs)("div", {
            className:
              "w-3/4 mx-auto text-white text-lg sm:text-xl md:text-2xl my-2 flex space-x-2",
            style: { animation: "appear 0.5s" },
            children: [
              Object(n.jsxs)("button", {
                className:
                  "rounded-md bg-blue-500 w-24 md:w-28 focus:ring ring-opacity-50 border border-blue-500 hover:bg-blue-600 hover:border-blue-700 ring-blue-500 transition",
                onClick: function () {
                  r || i();
                },
                children: [
                  Object(n.jsxs)("div", {
                    className: "inline-block relative",
                    style: {
                      width: "1em",
                      height: "1em",
                      verticalAlign: "-0.14em",
                    },
                    children: [
                      Object(n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        viewBox: "0 0 16 16",
                        className: "absolute",
                        style: { width: "1em", height: "1em" },
                        children: Object(n.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z",
                        }),
                      }),
                      Object(n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        viewBox: "0 0 16 16",
                        className:
                          (r ? "opacity-100" : "opacity-0") +
                          " absolute transition",
                        style: { width: "1em", height: "1em" },
                        children: Object(n.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z",
                        }),
                      }),
                    ],
                  }),
                  " ",
                  Object(n.jsx)("span", { children: t.votes }),
                ],
              }),
              Object(n.jsx)("div", {
                className:
                  "rounded-md bg-blue-500 flex-1 break-words min-w-0 px-1",
                children: t.text,
              }),
            ],
          });
        },
        y = function (e) {
          var t = e.text,
            r = e.color,
            i = e.hidden,
            o = Object(f.useState)(!1),
            a = o[0],
            s = o[1];
          return (
            Object(f.useEffect)(
              function () {
                if (i) {
                  var e = setTimeout(function () {
                    return s(!0);
                  }, 150);
                  return function () {
                    return clearTimeout(e);
                  };
                }
                s(!1);
              },
              [i]
            ),
            Object(n.jsx)("div", {
              className:
                (a ? "hidden " : "") +
                (i ? "opacity-0" : "opacity-100") +
                " " +
                r +
                " fixed bottom-6 right-6 transition-opacity text-white text-lg sm:text-xl md:text-2xl rounded-md duration-500 p-2 sm:p-4 shadow-md",
              children: t,
            })
          );
        };
      function j() {
        var e = Object(f.useState)(!0),
          t = e[0],
          r = e[1],
          o = Object(f.useState)(null),
          a = o[0],
          u = o[1],
          p = a ? JSON.parse(a) : {},
          v = Object(f.useState)([]),
          j = v[0],
          g = v[1],
          O = Object(f.useState)(!1),
          w = O[0],
          k = O[1],
          S = Object(f.useState)(!1),
          C = S[0],
          E = S[1],
          N = Object(f.useState)(""),
          A = N[0],
          R = N[1],
          P = Object(f.useState)(""),
          T = P[0],
          I = P[1],
          _ = Object(f.useState)(8),
          L = _[0],
          V = _[1],
          z = Object(f.useState)(8),
          U = z[0],
          H = z[1],
          q = function (e, t) {
            R(e),
              I(t),
              E(!0),
              setTimeout(function () {
                E(!1);
              }, 3e3);
          };
        Object(f.useEffect)(
          function () {
            var e = !0;
            return (
              (function () {
                var r = Object(c.a)(
                  s.a.mark(function r() {
                    var n, i;
                    return s.a.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                k(!0),
                                (r.prev = 1),
                                (r.next = 4),
                                fetch(
                                  "api/200kvote/options?type="
                                    .concat(t ? "top" : "latest", "&num=")
                                    .concat(t ? L : U)
                                )
                              );
                            case 4:
                              if (!(n = r.sent).ok) {
                                r.next = 12;
                                break;
                              }
                              return (r.next = 8), n.json();
                            case 8:
                              (i = r.sent), e && g(i.options), (r.next = 13);
                              break;
                            case 12:
                              throw new Error();
                            case 13:
                              r.next = 18;
                              break;
                            case 15:
                              (r.prev = 15),
                                (r.t0 = r.catch(1)),
                                e && q("Error Loading", "bg-red-500");
                            case 18:
                              k(!1);
                            case 19:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[1, 15]]
                    );
                  })
                );
                return function () {
                  return r.apply(this, arguments);
                };
              })()(),
              function () {
                e = !1;
              }
            );
          },
          [t, L, U]
        ),
          Object(f.useEffect)(
            function () {
              a
                ? d.a.set(null, "votes", a, {})
                : d.a.get(null).votes
                ? u(d.a.get(null).votes)
                : u("{}");
            },
            [a]
          );
        var J = Object(f.useState)(""),
          M = J[0],
          D = J[1],
          W = Object(f.useState)(!1),
          F = W[0],
          K = W[1],
          X = function (e) {
            var r = m({}, p);
            (r[e.id] = 1), u(JSON.stringify(r));
            var n = Object(i.a)(j),
              o = !1;
            n.forEach(function (t) {
              t.id == e.id && (++e.votes, (o = !0));
            }),
              o || (t ? n.push(e) : n.unshift(e)),
              g(n);
          },
          B = function (e) {
            var t = m({}, p);
            delete t[e.id], u(JSON.stringify(t));
            var r = Object(i.a)(j);
            r.forEach(function (t) {
              t.id == e.id && --e.votes;
            }),
              g(r);
          },
          Q = Object(f.useState)(!1),
          Z = Q[0],
          G = Q[1],
          Y = Object(f.useState)(null),
          $ = Y[0],
          ee = Y[1],
          te = (function () {
            var e = Object(c.a)(
              s.a.mark(function e(t) {
                var r, n;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((G(!1), !$)) {
                            e.next = 23;
                            break;
                          }
                          if (((e.prev = 2), t)) {
                            e.next = 5;
                            break;
                          }
                          throw new Error();
                        case 5:
                          return (
                            (e.next = 7),
                            fetch("/api/200kvote/verifyCaptcha", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ token: t }),
                            })
                          );
                        case 7:
                          if ((r = e.sent).ok) {
                            e.next = 10;
                            break;
                          }
                          throw new Error();
                        case 10:
                          return (e.next = 12), r.json();
                        case 12:
                          (n = e.sent),
                            d.a.set(null, "vsession", n.session, {}),
                            d.a.set(null, "vsessionN", "0", {}),
                            $(!0),
                            (e.next = 22);
                          break;
                        case 18:
                          (e.prev = 18),
                            (e.t0 = e.catch(2)),
                            q("CAPTCHA Error", "bg-red-500"),
                            $(!1);
                        case 22:
                          ee(null);
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 18]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          re = function () {
            return !d.a.get(null).vsession || +d.a.get(null).vsessionN >= 8
              ? new Promise(function (e) {
                  ee(function () {
                    return e;
                  }),
                    G(!0);
                })
              : new Promise(function (e) {
                  return e(!0);
                });
          };
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsxs)(l.a, {
              children: [
                Object(n.jsx)("title", { children: "200k Vote - William Lin" }),
                Object(n.jsx)("meta", {
                  name: "twitter:title",
                  content: "200k Vote - William Lin",
                }),
                Object(n.jsx)("meta", {
                  property: "og:title",
                  content: "200k Vote - William Lin",
                }),
                Object(n.jsx)("meta", {
                  property: "og:url",
                  content: "https://williamlin.io/200kvote",
                }),
                Object(n.jsx)("meta", {
                  name: "description",
                  property: "og:description",
                  content: "Vote for my 200k subscriber special",
                }),
                Object(n.jsx)("meta", {
                  name: "twitter:description",
                  content: "Vote for my 200k subscriber special",
                }),
              ],
            }),
            Object(n.jsxs)("div", {
              className: "text-center",
              children: [
                Object(n.jsx)("h1", {
                  className: "text-4xl sm:text-5xl m-4",
                  children: "200k Subscriber Vote",
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsxs)("div", {
                  className:
                    "text-white text-2xl md:text-3xl inline-block bg-blue-500 rounded-full py-2",
                  children: [
                    Object(n.jsx)("span", {
                      className: "px-3 mx-1",
                      children: "Sort by",
                    }),
                    Object(n.jsx)("button", {
                      className:
                        (t
                          ? "bg-opacity-100 text-blue-500"
                          : "bg-opacity-0 hover:bg-opacity-20") +
                        " bg-white rounded-full px-3 py-0.5 mx-1 transition",
                      onClick: function () {
                        return r(!0);
                      },
                      children: "Top",
                    }),
                    Object(n.jsx)("button", {
                      className:
                        (t
                          ? "bg-opacity-0 hover:bg-opacity-20"
                          : "bg-opacity-100 text-blue-500") +
                        " bg-white rounded-full px-3 py-0.5 mx-1 transition",
                      onClick: function () {
                        return r(!1);
                      },
                      children: "Latest",
                    }),
                  ],
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)("br", {}),
                j.map(function (e) {
                  return Object(n.jsx)(
                    x,
                    {
                      option: e,
                      voted: p[e.id],
                      processVote: Object(c.a)(
                        s.a.mark(function t() {
                          var r;
                          return s.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), re();
                                  case 2:
                                    if (t.sent) {
                                      t.next = 4;
                                      break;
                                    }
                                    return t.abrupt("return");
                                  case 4:
                                    return (
                                      X(e),
                                      (t.prev = 5),
                                      (t.next = 8),
                                      fetch("/api/200kvote/options/vote", {
                                        method: "POST",
                                        headers: {
                                          Accept: "application/json",
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          id: e.id,
                                          session: d.a.get(null).vsession,
                                        }),
                                      })
                                    );
                                  case 8:
                                    if ((r = t.sent).ok) {
                                      t.next = 11;
                                      break;
                                    }
                                    throw new Error();
                                  case 11:
                                    return (t.next = 13), r.json();
                                  case 13:
                                    if (!t.sent.resetSession) {
                                      t.next = 17;
                                      break;
                                    }
                                    throw (
                                      (d.a.destroy(null, "vsession", {}),
                                      new Error())
                                    );
                                  case 17:
                                    d.a.set(
                                      null,
                                      "vsessionN",
                                      +d.a.get(null).vsessionN + 1 + "",
                                      {}
                                    ),
                                      (t.next = 24);
                                    break;
                                  case 20:
                                    (t.prev = 20),
                                      (t.t0 = t.catch(5)),
                                      B(e),
                                      q("Error Voting", "bg-red-500");
                                  case 24:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[5, 20]]
                          );
                        })
                      ),
                    },
                    e.id
                  );
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)("button", {
                  className:
                    (w
                      ? "cursor-default opacity-75"
                      : "hover:bg-blue-600 hover:border-blue-700") +
                    " bg-blue-500 text-2xl md:text-3xl text-white rounded-md px-3 py-2 transition border border-blue-500 w-36 md:w-44",
                  disabled: w,
                  onClick: function () {
                    t
                      ? V(function (e) {
                          return e + 8;
                        })
                      : H(function (e) {
                          return e + 8;
                        });
                  },
                  children: w ? "Loading" : "Load More",
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)("br", {}),
                Object(n.jsxs)("div", {
                  className:
                    "flex space-x-2 w-3/4 mx-auto text-lg sm:text-xl md:text-2xl",
                  children: [
                    Object(n.jsx)("input", {
                      type: "text",
                      size: 1,
                      maxLength: 96,
                      placeholder: "Any idea...",
                      value: M,
                      onChange: function (e) {
                        return D(e.target.value);
                      },
                      className:
                        "flex-1 rounded-md border border-blue-500 outline-none focus:ring ring-blue-500 ring-opacity-50 focus:border-blue-700 px-2 transition",
                      disabled: F,
                    }),
                    Object(n.jsx)("button", {
                      className:
                        (F || M.length < 1
                          ? "cursor-default opacity-75"
                          : "hover:bg-blue-600 hover:border-blue-700") +
                        " bg-blue-500 text-white rounded-md px-3 py-2 transition border border-blue-500",
                      disabled: F || M.length < 1,
                      onClick: Object(c.a)(
                        s.a.mark(function e() {
                          var t, r;
                          return s.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), re();
                                  case 2:
                                    if (e.sent) {
                                      e.next = 4;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 4:
                                    return (
                                      K(!0),
                                      (e.prev = 5),
                                      (e.next = 8),
                                      fetch("/api/200kvote/options/add", {
                                        method: "POST",
                                        headers: {
                                          Accept: "application/json",
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          text: M,
                                          session: d.a.get(null).vsession,
                                        }),
                                      })
                                    );
                                  case 8:
                                    if ((t = e.sent).ok) {
                                      e.next = 11;
                                      break;
                                    }
                                    throw new Error();
                                  case 11:
                                    return (e.next = 13), t.json();
                                  case 13:
                                    if (!(r = e.sent).resetSession) {
                                      e.next = 17;
                                      break;
                                    }
                                    throw (
                                      (d.a.destroy(null, "vsession", {}),
                                      new Error())
                                    );
                                  case 17:
                                    if (!t.ok) {
                                      e.next = 24;
                                      break;
                                    }
                                    q("Added Successfully", "bg-green-500"),
                                      D(""),
                                      X(r),
                                      d.a.set(
                                        null,
                                        "vsessionN",
                                        +d.a.get(null).vsessionN + 1 + "",
                                        {}
                                      ),
                                      (e.next = 25);
                                    break;
                                  case 24:
                                    throw new Error();
                                  case 25:
                                    e.next = 30;
                                    break;
                                  case 27:
                                    (e.prev = 27),
                                      (e.t0 = e.catch(5)),
                                      q("Error Adding", "bg-red-500");
                                  case 30:
                                    K(!1);
                                  case 31:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[5, 27]]
                          );
                        })
                      ),
                      children: "Add",
                    }),
                  ],
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)(b.a, { href: "/", children: "Return to home" }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)("br", {}),
              ],
            }),
            Object(n.jsx)(y, { text: A, color: T, hidden: !C }),
            Object(n.jsx)(h.a, { visible: Z, onFinish: te }),
          ],
        });
      }
    },
    z7pX: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("6FTQ");
      var i = r("8rE2");
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(n.a)(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Object(i.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
  [["KbXP", 0, 1, 2, 3]],
]);
