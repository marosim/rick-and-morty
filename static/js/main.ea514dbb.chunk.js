(this["webpackJsonpreact-and-morty"] =
  this["webpackJsonpreact-and-morty"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = a.p + "../media/rick-and-morty.d88b4ae4.png";
    },
    function (e, t, a) {
      e.exports = a(12);
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(3),
        o = a.n(c),
        i = (a(10), a(1)),
        l = (a(11), a(4)),
        s = a.n(l),
        u = function (e) {
          var t = Object(n.useState)(e),
            a = Object(i.a)(t, 2),
            r = a[0],
            c = a[1],
            o = Object(n.useState)(void 0),
            l = Object(i.a)(o, 2),
            s = l[0],
            u = l[1];
          return (
            Object(n.useEffect)(
              function () {
                fetch(r)
                  .then(function (e) {
                    return 200 !== e.status
                      ? "There must be a problem"
                      : e.json();
                  })
                  .then(function (e) {
                    return u(e);
                  });
              },
              [r]
            ),
            [s, c]
          );
        },
        m = "https://rickandmortyapi.com/api/character/?page=",
        g = "https://rickandmortyapi.com/api/location/?page=";
      function d(e) {
        return r.a.createElement(
          "div",
          { className: "charContainer" },
          r.a.createElement("img", {
            className: "characterImg",
            src: e.image,
            alt: e.name,
            onClick: function (e) {
              e.target.parentElement
                .querySelector("div")
                .classList.toggle("details");
            },
          }),
          r.a.createElement("h3", null, e.name),
          r.a.createElement("h4", null, e.species),
          r.a.createElement(
            "div",
            { className: "details" },
            r.a.createElement("h5", null, e.gender),
            r.a.createElement("h5", null, "Status: ", e.status),
            r.a.createElement("h5", null, e.type),
            r.a.createElement("h5", null, "Location: ", e.location),
            r.a.createElement("h5", null, "Origin: ", e.origin),
            r.a.createElement("h5", null, "Number of episodes: ", e.episodes)
          )
        );
      }
      function p(e) {
        var t = [],
          a = e.currentPage - 4;
        a < 1 && (a = 1);
        var n = a + 8;
        n > e.pages && ((n = e.pages), (a = e.pages - 8) < 1 && (a = 1));
        var c = e.currentPage - 1;
        c < 1 && (c = 1);
        var o = e.currentPage + 1;
        o > e.pages && (o = e.pages);
        for (
          var i = function (a) {
              var n = "";
              a === e.currentPage && (n = "currentPage"),
                t.push(
                  r.a.createElement(
                    "li",
                    {
                      key: a,
                      className: n,
                      onClick: function () {
                        e.setCurrentPage(a);
                      },
                    },
                    a
                  )
                );
            },
            l = a;
          l <= n;
          l++
        )
          i(l);
        return (
          t.unshift(
            r.a.createElement(
              "li",
              {
                key: "prev",
                onClick: function () {
                  e.setCurrentPage(c);
                },
              },
              "Prev"
            )
          ),
          t.push(
            r.a.createElement(
              "li",
              {
                key: "next",
                onClick: function () {
                  e.setCurrentPage(o);
                },
              },
              "Next"
            )
          ),
          r.a.createElement("div", null, t)
        );
      }
      function h() {
        var e = Object(n.useState)(1),
          t = Object(i.a)(e, 2),
          a = t[0],
          c = t[1],
          o = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = u(m + e),
              a = Object(i.a)(t, 2),
              r = a[0],
              c = a[1];
            return (
              Object(n.useEffect)(
                function () {
                  c(m + e);
                },
                [e]
              ),
              void 0 === r ? "Loading..." : r
            );
          })(a),
          l = 1,
          s = "";
        return (
          "Loading..." !== o &&
            ((s = o.results.map(function (e) {
              return r.a.createElement(d, {
                key: e.id,
                image: e.image,
                name: e.name,
                species: e.species,
                gender: e.gender,
                status: e.status,
                type: e.type,
                location: e.location.name,
                origin: e.origin.name,
                episodes: e.episode.length,
              });
            })),
            (l = o.info.pages)),
          r.a.createElement(
            "div",
            null,
            r.a.createElement(p, {
              pages: l,
              currentPage: a,
              setCurrentPage: c,
            }),
            s,
            r.a.createElement(p, {
              pages: l,
              currentPage: a,
              setCurrentPage: c,
            })
          )
        );
      }
      function f(e) {
        function t(e) {
          e.target.parentElement
            .querySelector("div")
            .classList.toggle("details");
        }
        return r.a.createElement(
          "div",
          { className: "locContainer" },
          r.a.createElement(
            "h3",
            { className: "locationName", onClick: t },
            e.name
          ),
          r.a.createElement(
            "h4",
            { className: "locationName", onClick: t },
            e.type
          ),
          r.a.createElement(
            "div",
            { className: "details" },
            r.a.createElement("h5", null, "Dimension: ", e.dimension),
            r.a.createElement("h5", null, "Number of residents: ", e.residents)
          )
        );
      }
      function E() {
        var e = Object(n.useState)(""),
          t = Object(i.a)(e, 2),
          a = t[0],
          c = t[1],
          o = Object(n.useState)(1),
          l = Object(i.a)(o, 2),
          s = l[0],
          m = l[1],
          d = Object(n.useState)(1),
          h = Object(i.a)(d, 2),
          E = h[0],
          v = h[1],
          b = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = u(g + e),
              a = Object(i.a)(t, 2),
              r = a[0],
              c = a[1];
            return (
              Object(n.useEffect)(
                function () {
                  c(g + e);
                },
                [e]
              ),
              void 0 === r ? "Loading..." : r
            );
          })(s);
        return (
          Object(n.useEffect)(
            function () {
              "Loading..." !== b &&
                (c(
                  b.results.map(function (e) {
                    return r.a.createElement(f, {
                      key: e.id,
                      name: e.name,
                      type: e.type,
                      dimension: e.dimension,
                      residents: e.residents.length,
                    });
                  })
                ),
                v(b.info.pages));
            },
            [b]
          ),
          r.a.createElement(
            "div",
            null,
            r.a.createElement(p, {
              pages: E,
              currentPage: s,
              setCurrentPage: m,
            }),
            a,
            r.a.createElement(p, {
              pages: E,
              currentPage: s,
              setCurrentPage: m,
            })
          )
        );
      }
      var v = function () {
        var e = Object(n.useState)(!1),
          t = Object(i.a)(e, 2),
          a = t[0],
          c = t[1],
          o = Object(n.useState)(!1),
          l = Object(i.a)(o, 2),
          u = l[0],
          m = l[1];
        return r.a.createElement(
          "div",
          { className: "App" },
          r.a.createElement("img", { src: s.a, alt: "logo", width: "400" }),
          r.a.createElement("br", null),
          r.a.createElement(
            "button",
            {
              className: "charactersButton",
              onClick: function () {
                c(!0), m(!1);
              },
            },
            "Characters"
          ),
          r.a.createElement(
            "button",
            {
              className: "locationsButton",
              onClick: function () {
                m(!0), c(!1);
              },
            },
            "Locations"
          ),
          u || a
            ? ""
            : r.a.createElement(
                "h3",
                null,
                " ",
                "Click the buttons to see the list of characters and locations.",
                " ",
                r.a.createElement("br", null),
                " For more information on each character and location, click on the character image or the location's name."
              ),
          a ? r.a.createElement(h, null) : "",
          u ? r.a.createElement(E, null) : ""
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(v, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[5, 1, 2]],
]);
//# sourceMappingURL=main.ea514dbb.chunk.js.map
