(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    218: function (e, t, a) {},
    279: function (e, t, a) {
      e.exports = a(312);
    },
    284: function (e, t, a) {},
    309: function (e, t, a) {},
    311: function (e, t, a) {},
    312: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        r = a(0),
        c = a.n(r),
        o = a(30),
        i = a.n(o),
        l = (a(284), a(3)),
        s = a(15),
        m = a(26),
        u = a(257);
      !(function (e) {
        (e.VWORK_WHITE = "#FFFFFF"),
          (e.VWORK_RED = "#F50357"),
          (e.VWORK_DARK_RED = "#A81347"),
          (e.VWORK_BLUE = "#1BC9F5"),
          (e.VWORK_DARK_BLUE = "#0A88A8"),
          (e.VWORK_LIGHT_BLUE = "#F0F7F8"),
          (e.VWORK_YELLOW = "#F5E21B"),
          (e.VWORK_GRAY = "#A7A7A7"),
          (e.VWORK_BLACK = "#424242"),
          (e.VWORK_ORANGE = "#E8AA14"),
          (e.VWORK_GREEN = "#6EEB83");
      })(n || (n = {}));
      var d = [
          n.VWORK_BLUE,
          n.VWORK_RED,
          n.VWORK_ORANGE,
          n.VWORK_GREEN,
          n.VWORK_DARK_BLUE,
          n.VWORK_DARK_RED,
          n.VWORK_YELLOW,
        ],
        p = n,
        f = Object(u.a)({
          palette: {
            primary: { main: p.VWORK_RED },
            secondary: { main: p.VWORK_DARK_BLUE },
          },
        }),
        b = a(69),
        E = a(97),
        g = a(92),
        h = a(213),
        v = a(361),
        j = a(61),
        k = a.n(j),
        O = a(362),
        w = a(81),
        y = a(4),
        x = a(314),
        C = a(363),
        N = a(389),
        A = a(359),
        T = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            appBar: {
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              boxShadow: "none",
            },
            appBarShift: {
              width: "calc(100% - ".concat(240, "px)"),
              marginLeft: 240,
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            hide: { display: "none" },
            menuIcon: { fontSize: 40, color: p.VWORK_GRAY },
            title: { color: p.VWORK_GRAY },
          });
        }),
        S = function (e) {
          var t = e.handleDrawerOpen,
            a = e.open,
            n = T();
          return c.a.createElement(
            "div",
            { className: n.root },
            c.a.createElement(
              A.a,
              null,
              c.a.createElement(
                v.a,
                {
                  style: { backgroundColor: p.VWORK_WHITE },
                  position: "fixed",
                  className: Object(y.a)(
                    n.appBar,
                    Object(E.a)({}, n.appBarShift, a)
                  ),
                },
                c.a.createElement(
                  O.a,
                  null,
                  c.a.createElement(
                    x.a,
                    {
                      color: "inherit",
                      "aria-label": "open drawer",
                      onClick: t,
                      edge: "start",
                      className: Object(y.a)(a && n.hide),
                    },
                    c.a.createElement(k.a, { className: n.menuIcon })
                  ),
                  c.a.createElement(
                    C.a,
                    {
                      container: !0,
                      direction: "row",
                      justify: "space-between",
                      alignItems: "center",
                    },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        w.a,
                        { variant: "h6", className: n.title, noWrap: !0 },
                        "\u30db\u30fc\u30e0"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          x.a,
                          null,
                          c.a.createElement(N.a, {
                            alt: "Shogo Yunoki",
                            src: "/static/images/avatar/1.jpg",
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        I = a(43),
        W = a(383),
        R = a(365),
        _ = a(316),
        z = a(366),
        B = a(367),
        K = a(99),
        V = a.n(K),
        D = a(130),
        F = a.n(D),
        P = a(232),
        M = a.n(P),
        H = a(364),
        L =
          (a(218),
          Object(g.a)(function (e) {
            return Object(h.a)({
              root: { display: "flex" },
              drawer: { width: 240, flexShrink: 0, color: p.VWORK_BLACK },
              drawerPaper: {
                width: 240,
                backgroundColor: p.VWORK_DARK_BLUE,
                color: p.VWORK_WHITE,
              },
              title: { fontWeight: 900 },
              mainTitle: { paddingLeft: 3, fontSize: 30 },
              drawerHeader: Object(I.a)(
                {
                  display: "flex",
                  alignItems: "center",
                  padding: e.spacing(0, 1),
                },
                e.mixins.toolbar,
                { justifyContent: "flex-end" }
              ),
              menuIcon: { fontSize: 40, color: p.VWORK_WHITE },
              icon: { color: p.VWORK_WHITE },
            });
          })),
        Y = function (e) {
          var t = e.handleDrawerClose,
            a = e.open,
            n = L();
          return c.a.createElement(
            "div",
            { className: n.root },
            c.a.createElement(
              A.a,
              { maxWidth: "md" },
              c.a.createElement(
                H.a,
                {
                  className: n.drawer,
                  variant: "persistent",
                  anchor: "left",
                  open: a,
                  classes: { paper: n.drawerPaper },
                },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    direction: "row",
                    justify: "space-between",
                    alignItems: "center",
                  },
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      W.a,
                      { ml: 2 },
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "row",
                          justify: "center",
                          alignItems: "center",
                          className: n.title,
                        },
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement("img", {
                            src: "".concat("", "/images/logo192.png"),
                            style: { height: 25 },
                            className: "imgstyle",
                            alt: "\u30a2\u30a4\u30b3\u30f3",
                          })
                        ),
                        c.a.createElement(
                          C.a,
                          {
                            item: !0,
                            className: Object(y.a)(n.mainTitle, "logo"),
                          },
                          "VWORK"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      "div",
                      { className: n.drawerHeader },
                      c.a.createElement(
                        x.a,
                        {
                          onClick: t,
                          style: { paddingLeft: 0, paddingRight: 10 },
                        },
                        c.a.createElement(k.a, { className: n.menuIcon })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  R.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: n.icon },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(B.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: n.icon },
                      c.a.createElement(F.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9",
                    })
                  ),
                  c.a.createElement(
                    _.a,
                    {
                      button: !0,
                      component: s.c,
                      to: "/work_manage",
                      exact: !0,
                    },
                    c.a.createElement(
                      z.a,
                      { className: n.icon },
                      c.a.createElement(M.a, null)
                    ),
                    c.a.createElement(B.a, { primary: "Users" })
                  )
                )
              )
            )
          );
        },
        q = function () {
          var e = c.a.useState(!0),
            t = Object(b.a)(e, 2),
            a = t[0],
            n = t[1];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(S, {
              handleDrawerOpen: function () {
                n(!0);
              },
              open: a,
            }),
            c.a.createElement(Y, {
              handleDrawerClose: function () {
                n(!1);
              },
              open: a,
            })
          );
        },
        U = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(q, null)
          );
        },
        G = a(100),
        X = a.n(G),
        J = a(101),
        Q = a.n(J),
        $ = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            hide: { display: "none" },
            drawer: { width: 240, flexShrink: 0, color: p.VWORK_BLACK },
            drawerPaper: {
              width: 240,
              backgroundColor: p.VWORK_BLACK,
              color: p.VWORK_WHITE,
            },
            drawerHeader: Object(I.a)(
              {
                display: "flex",
                alignItems: "center",
                padding: e.spacing(0, 1),
              },
              e.mixins.toolbar,
              { justifyContent: "flex-end" }
            ),
            iconStyle: { color: p.VWORK_WHITE },
            title: { fontWeight: 900 },
            projectTitle: {
              fontSize: 15,
              marginTop: "40%",
              marginLeft: "5%",
              marginBottom: "5%",
              width: 190,
            },
          });
        }),
        Z = function () {
          var e = $();
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(
              A.a,
              null,
              c.a.createElement(
                H.a,
                {
                  open: !0,
                  className: e.drawer,
                  variant: "persistent",
                  anchor: "left",
                  classes: { paper: e.drawerPaper },
                },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    direction: "row",
                    justify: "space-between",
                    alignItems: "center",
                  },
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      C.a,
                      {
                        container: !0,
                        direction: "row",
                        justify: "center",
                        alignItems: "center",
                        className: e.title,
                        style: { marginLeft: "10%" },
                      },
                      c.a.createElement(
                        C.a,
                        { item: !0, style: { fontSize: 30 } },
                        c.a.createElement("img", {
                          src: "".concat("", "/images/logo192.png"),
                          style: { height: 25 },
                          alt: "",
                        })
                      ),
                      c.a.createElement(
                        C.a,
                        { item: !0, style: { fontSize: 30 } },
                        "VWORK"
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      "div",
                      { className: e.drawerHeader },
                      c.a.createElement(
                        x.a,
                        null,
                        c.a.createElement(k.a, {
                          style: { fontSize: 40, color: p.VWORK_GRAY },
                        })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  R.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: e.iconStyle },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(B.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: e.iconStyle },
                      c.a.createElement(X.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u30de\u30a4\u30bf\u30b9\u30af",
                    })
                  ),
                  c.a.createElement(
                    _.a,
                    {
                      button: !0,
                      component: s.c,
                      to: "/kintai_manage",
                      exact: !0,
                    },
                    c.a.createElement(
                      z.a,
                      { className: e.iconStyle },
                      c.a.createElement(Q.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u52e4\u6020\u7ba1\u7406",
                    })
                  )
                ),
                c.a.createElement(
                  W.a,
                  { borderBottom: 1, className: e.projectTitle },
                  c.a.createElement(
                    w.a,
                    null,
                    "\u30de\u30a4\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                  )
                )
              )
            )
          );
        },
        ee = a(325),
        te = a(2),
        ae = a.n(te),
        ne = a(6),
        re = a(197),
        ce = a(318),
        oe = a(317),
        ie = a(369),
        le = a(368),
        se = Object(g.a)(function (e) {
          return Object(h.a)({
            span: { color: p.VWORK_RED },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        }),
        me = function () {
          var e = se();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              le.a,
              { id: "alert-dialog-slide-title" },
              c.a.createElement(
                W.a,
                { mt: 5 },
                c.a.createElement(
                  w.a,
                  { variant: "h2", component: "h2" },
                  c.a.createElement("span", { className: e.span }, "VWORK"),
                  "\u3078\u3088\u3046\u3053\u305d"
                )
              )
            ),
            c.a.createElement(
              oe.a,
              null,
              c.a.createElement(
                W.a,
                { mt: 2 },
                c.a.createElement(
                  ie.a,
                  { id: "alert-dialog-slide-description" },
                  "\u3053\u308c\u304b\u3089VWORK\u3092\u6d3b\u7528\u3059\u308b\u305f\u3081\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u9802\u304d\u307e\u3059\u3002",
                  c.a.createElement("br", null),
                  "\u300cNEXT\u300d\u3092\u62bc\u3057\u3066\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3078\u9032\u3093\u3067\u4e0b\u3055\u3044\u3002"
                )
              )
            ),
            c.a.createElement(
              ce.a,
              null,
              c.a.createElement(
                s.b,
                { to: "/regist/step/1" },
                c.a.createElement(
                  re.a,
                  {
                    variant: "contained",
                    className: e.button,
                    color: "primary",
                  },
                  "NEXT"
                )
              )
            )
          );
        },
        ue = a(8),
        de = a(14),
        pe = a(12),
        fe = a(13),
        be = a(16),
        Ee = a.n(be),
        ge = "https://v-work.xyz/",
        he = localStorage.token,
        ve = localStorage.Itoken,
        je = Object(fe.b)(
          "regist/user",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post("".concat(ge, "api/v1/registration"), t, {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer ".concat(he),
                            },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        ke = Object(fe.b)(
          "regist/invitation",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log(t),
                          t || (t = ve),
                          (e.next = 4),
                          Ee.a.get(
                            ""
                              .concat(ge, "api/v1/registration/invitee/")
                              .concat(t)
                          )
                        );
                      case 4:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Oe = Object(fe.b)(
          "regist/invitee",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            "".concat(ge, "api/v1/registration/invitee/"),
                            t,
                            { headers: { "Content-Type": "application/json" } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        we = Object(fe.c)({
          name: "regist",
          initialState: {
            regist: {
              workspace: { name: "" },
              user: { name: "", position: "" },
              project: { name: "", description: "" },
              invitations: [],
            },
            invite: {
              token: "",
              workspace: "",
              user: {
                name: "",
                email: "",
                position: "",
                password: "",
                registration: !1,
              },
            },
          },
          reducers: {
            editWorkspace: function (e, t) {
              e.regist.workspace.name = t.payload;
            },
            editUser: function (e, t) {
              e.regist.user = t.payload;
            },
            editProject: function (e, t) {
              e.regist.project = t.payload;
            },
            editInvitations: function (e, t) {
              e.regist.invitations = t.payload;
            },
            editInviteToken: function (e, t) {
              e.invite.token = t.payload;
            },
            editInviteUser: function (e, t) {
              e.invite.user = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(je.fulfilled, function (e, t) {
              window.location.href = "/";
            }),
              e.addCase(je.rejected, function (e, t) {
                window.location.href = "/regist/step/1";
              }),
              e.addCase(ke.fulfilled, function (e, t) {
                (e.invite.workspace = t.payload.workspace),
                  (e.invite.user = t.payload.data);
              }),
              e.addCase(ke.rejected, function (e, t) {
                window.location.href = "/auth/signup";
              }),
              e.addCase(Oe.fulfilled, function (e, t) {
                localStorage.setItem("token", t.payload.token),
                  (window.location.href = "/");
              }),
              e.addCase(Oe.rejected, function (e, t) {
                window.location.href = "/regist/invitee/step1";
              });
          },
        }),
        ye = we.actions,
        xe = ye.editWorkspace,
        Ce = ye.editInvitations,
        Ne = (ye.editProject, ye.editUser),
        Ae = (ye.editInviteToken, ye.editInviteUser),
        Te = function (e) {
          return e.regist.regist;
        },
        Se = function (e) {
          return e.regist.invite.user;
        },
        Ie = function (e) {
          return e.regist.invite.user.email;
        },
        We = function (e) {
          return e.regist.invite.user.name;
        },
        Re = we.reducer,
        _e = a(390),
        ze = a(371),
        Be = a(387),
        Ke = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        });
      var Ve = function () {
          var e = Ke(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(l.b)(),
            n = Object(m.g)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              "div",
              { className: e.root },
              c.a.createElement(
                _e.a,
                {
                  activeStep: Number(window.location.pathname.slice(-1)) - 1,
                  alternativeLabel: !0,
                },
                t.map(function (e) {
                  return c.a.createElement(
                    ze.a,
                    { key: e },
                    c.a.createElement(Be.a, null, e)
                  );
                })
              )
            ),
            c.a.createElement(
              ue.d,
              {
                initialValues: { workspace: "" },
                validationSchema: pe
                  .b()
                  .shape({
                    workspace: pe
                      .c()
                      .required(
                        "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                  }),
                onSubmit: function (e) {
                  a(xe(e.workspace)), n.push("/regist/step/2");
                },
              },
              c.a.createElement(
                ue.c,
                null,
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "workspace",
                  label: "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u540d*",
                  placeholder:
                    "\u4f1a\u793e\u540d\u30fb\u30c1\u30fc\u30e0\u540d",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  id: "workspace",
                }),
                c.a.createElement(
                  ce.a,
                  null,
                  c.a.createElement(
                    re.a,
                    {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      className: e.button,
                      color: "primary",
                    },
                    "NEXT"
                  )
                )
              )
            )
          );
        },
        De = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        });
      var Fe = function () {
          var e = De(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(l.b)(),
            n = Object(m.g)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              "div",
              { className: e.root },
              c.a.createElement(
                _e.a,
                {
                  activeStep: Number(window.location.pathname.slice(-1)) - 1,
                  alternativeLabel: !0,
                },
                t.map(function (e) {
                  return c.a.createElement(
                    ze.a,
                    { key: e },
                    c.a.createElement(Be.a, null, e)
                  );
                })
              )
            ),
            c.a.createElement(
              ue.d,
              {
                initialValues: { name: "", position: "" },
                validationSchema: pe
                  .b()
                  .shape({
                    name: pe
                      .c()
                      .required(
                        "\u6c0f\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                    position: pe
                      .c()
                      .required(
                        "\u5f79\u8077\u30fb\u62c5\u5f53\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                  }),
                onSubmit: function (e) {
                  a(Ne(e)), n.push("/regist/step/3");
                },
              },
              c.a.createElement(
                ue.c,
                null,
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "name",
                  label: "\u6c0f\u540d*",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  id: "name",
                }),
                c.a.createElement("br", null),
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "position",
                  label: "\u5f79\u8077\u30fb\u62c5\u5f53",
                  placeholder: "\u7d4c\u55b6\u4f01\u753b",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  id: "position",
                }),
                c.a.createElement(
                  ce.a,
                  null,
                  c.a.createElement(
                    re.a,
                    {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      className: e.button,
                      color: "primary",
                    },
                    "NEXT"
                  )
                )
              )
            )
          );
        },
        Pe = a(187),
        Me = a.n(Pe),
        He = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
            formArea: {
              overflowY: "scroll",
              overflowX: "hidden",
              height: "33vh",
            },
          });
        });
      var Le = function () {
          var e = He(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(l.b)(),
            n = Object(m.g)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              "div",
              { className: e.root },
              c.a.createElement(
                _e.a,
                {
                  activeStep: Number(window.location.pathname.slice(-1)) - 1,
                  alternativeLabel: !0,
                },
                t.map(function (e) {
                  return c.a.createElement(
                    ze.a,
                    { key: e },
                    c.a.createElement(Be.a, null, e)
                  );
                })
              )
            ),
            c.a.createElement(
              ue.d,
              {
                initialValues: { invitations: [{ name: "", email: "" }] },
                validationSchema: pe
                  .b()
                  .shape({
                    invitations: pe
                      .a()
                      .of(
                        pe
                          .b()
                          .shape({
                            email: pe
                              .c()
                              .email(
                                "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                              )
                              .required(
                                "email\u306f\u5fc5\u9808\u3067\u3059\u3002"
                              ),
                            name: pe
                              .c()
                              .required(
                                "\u6c0f\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                              ),
                          })
                      ),
                  }),
                onSubmit: function (e) {
                  a(Ce(e.invitations)), n.push("/regist/step/4");
                },
              },
              function (t) {
                var a = t.values;
                return c.a.createElement(
                  ue.c,
                  { className: e.formArea },
                  c.a.createElement(ue.b, {
                    name: "invitations",
                    render: function (t) {
                      return c.a.createElement(
                        "div",
                        null,
                        a.invitations.map(function (e, a) {
                          return c.a.createElement(
                            "div",
                            { key: a },
                            c.a.createElement(
                              C.a,
                              { container: !0, spacing: 3 },
                              c.a.createElement(
                                C.a,
                                { item: !0, xs: 5 },
                                c.a.createElement(ue.a, {
                                  component: de.c,
                                  label: "\u6c0f\u540d*",
                                  variant: "outlined",
                                  margin: "normal",
                                  fullWidth: !0,
                                  id: "name.".concat(a),
                                  name: "invitations[".concat(a, "].name"),
                                })
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0, xs: 5 },
                                c.a.createElement(ue.a, {
                                  component: de.c,
                                  type: "email",
                                  label:
                                    "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9*",
                                  variant: "outlined",
                                  margin: "normal",
                                  fullWidth: !0,
                                  id: "email.".concat(a),
                                  name: "invitations[".concat(a, "].email"),
                                })
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0, xs: 1 },
                                c.a.createElement(
                                  W.a,
                                  {
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                  },
                                  c.a.createElement(
                                    x.a,
                                    {
                                      "aria-label": "delete",
                                      onClick: function () {
                                        return t.remove(a);
                                      },
                                    },
                                    c.a.createElement(Me.a, null)
                                  )
                                )
                              )
                            )
                          );
                        }),
                        c.a.createElement("br", null),
                        c.a.createElement(
                          re.a,
                          {
                            color: "primary",
                            onClick: function () {
                              return t.push({ name: "", email: "" });
                            },
                          },
                          "\u3055\u3089\u306b\u8ffd\u52a0"
                        ),
                        c.a.createElement(
                          ce.a,
                          null,
                          c.a.createElement(
                            re.a,
                            {
                              type: "submit",
                              fullWidth: !0,
                              variant: "contained",
                              className: e.button,
                              color: "primary",
                            },
                            "NEXT"
                          )
                        )
                      );
                    },
                  })
                );
              }
            )
          );
        },
        Ye = Object(fe.c)({
          name: "app",
          initialState: {
            loading: !1,
            openMenu: !0,
            addProjectButton: !1,
            inviteMemberClicked: !1,
            setProfileClicked: !1,
            taskCardClicked: !1,
            addTaskButton: !1,
            kintaiCardClicked: !1,
            addButtonAfterTask: !1,
            addedTaskText: !1,
            addMemberButton: !1,
            memberIconClicked: !1,
          },
          reducers: {
            toggleLoading: function (e, t) {
              e.loading = t.payload;
            },
            toggleOpenMenu: function (e, t) {
              e.openMenu = t.payload;
            },
            toggleAddProjectButton: function (e, t) {
              e.addProjectButton = t.payload;
            },
            toggleInviteMemberClicked: function (e, t) {
              e.inviteMemberClicked = t.payload;
            },
            toggleSetProfileClicked: function (e, t) {
              e.setProfileClicked = t.payload;
            },
            toggleTaskCardClicked: function (e, t) {
              e.taskCardClicked = t.payload;
            },
            toggleAddTaskButton: function (e, t) {
              e.addTaskButton = t.payload;
            },
            toggleKintaiCardClicked: function (e, t) {
              e.kintaiCardClicked = t.payload;
            },
            toggleAddButtonAfterTask: function (e, t) {
              e.addButtonAfterTask = t.payload;
            },
            toggleAddedTaskText: function (e, t) {
              e.addedTaskText = t.payload;
            },
            toggleAddMemberButton: function (e, t) {
              e.addMemberButton = t.payload;
            },
            toggleMemberIconClicked: function (e, t) {
              e.memberIconClicked = t.payload;
            },
          },
        }),
        qe = Ye.actions,
        Ue = qe.toggleLoading,
        Ge = qe.toggleOpenMenu,
        Xe = qe.toggleAddProjectButton,
        Je = qe.toggleInviteMemberClicked,
        Qe = qe.toggleSetProfileClicked,
        $e = qe.toggleTaskCardClicked,
        Ze = qe.toggleAddTaskButton,
        et = qe.toggleKintaiCardClicked,
        tt = qe.toggleAddButtonAfterTask,
        at = qe.toggleAddedTaskText,
        nt = qe.toggleAddMemberButton,
        rt = qe.toggleMemberIconClicked,
        ct = function (e) {
          return e.app.loading;
        },
        ot = function (e) {
          return e.app.openMenu;
        },
        it = function (e) {
          return e.app.addProjectButton;
        },
        lt = function (e) {
          return e.app.inviteMemberClicked;
        },
        st = function (e) {
          return e.app.setProfileClicked;
        },
        mt = function (e) {
          return e.app.taskCardClicked;
        },
        ut = function (e) {
          return e.app.addTaskButton;
        },
        dt = function (e) {
          return e.app.kintaiCardClicked;
        },
        pt = function (e) {
          return e.app.addButtonAfterTask;
        },
        ft = function (e) {
          return e.app.addedTaskText;
        },
        bt = function (e) {
          return e.app.addMemberButton;
        },
        Et = function (e) {
          return e.app.memberIconClicked;
        },
        gt = Ye.reducer,
        ht = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
            formArea: {
              overflowY: "scroll",
              overflowX: "hidden",
              height: "33vh",
            },
          });
        });
      var vt = function () {
          var e = ht(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(l.b)(),
            n = Object(l.c)(Te);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              "div",
              { className: e.root },
              c.a.createElement(
                _e.a,
                {
                  activeStep: Number(window.location.pathname.slice(-1)) - 1,
                  alternativeLabel: !0,
                },
                t.map(function (e) {
                  return c.a.createElement(
                    ze.a,
                    { key: e },
                    c.a.createElement(Be.a, null, e)
                  );
                })
              )
            ),
            c.a.createElement(
              ue.d,
              {
                initialValues: { name: "", description: "" },
                validationSchema: pe
                  .b()
                  .shape({
                    name: pe
                      .c()
                      .required(
                        "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                    description: pe
                      .c()
                      .required(
                        "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a73\u7d30\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                  }),
                onSubmit: (function () {
                  var e = Object(ne.a)(
                    ae.a.mark(function e(t) {
                      var r;
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                ((r = Object(I.a)({}, n)).project = t),
                                a(Ue(!0)),
                                (e.next = 5),
                                a(je(r))
                              );
                            case 5:
                              a(Ue(!1));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              c.a.createElement(
                ue.c,
                { className: e.formArea },
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "name",
                  label: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d*",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  id: "name",
                }),
                c.a.createElement("br", null),
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "description",
                  label: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a73\u7d30",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  multiline: !0,
                  id: "description",
                }),
                c.a.createElement(
                  ce.a,
                  null,
                  c.a.createElement(
                    re.a,
                    {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      className: e.button,
                      color: "primary",
                    },
                    "\u767b\u9332"
                  )
                )
              )
            )
          );
        },
        jt = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        });
      var kt = function () {
          var e = jt(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(m.g)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              "div",
              { className: e.root },
              c.a.createElement(
                _e.a,
                {
                  activeStep: Number(window.location.pathname.slice(-1)) - 1,
                  alternativeLabel: !0,
                },
                t.map(function (e) {
                  return c.a.createElement(
                    ze.a,
                    { key: e },
                    c.a.createElement(Be.a, null, e)
                  );
                })
              )
            ),
            c.a.createElement(
              w.a,
              { variant: "h3" },
              c.a.createElement(
                "span",
                { style: { color: p.VWORK_RED } },
                "VWORK"
              ),
              "\u306e\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002"
            ),
            c.a.createElement(
              ce.a,
              null,
              c.a.createElement(
                re.a,
                {
                  variant: "contained",
                  className: e.button,
                  color: "primary",
                  onClick: function () {
                    a.push("/"), a.go(0);
                  },
                },
                "NEXT"
              )
            )
          );
        },
        Ot = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              m.d,
              null,
              c.a.createElement(
                m.b,
                { path: "/regist/step/1", exact: !0 },
                c.a.createElement(Ve, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/step/2", exact: !0 },
                c.a.createElement(Fe, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/step/3", exact: !0 },
                c.a.createElement(Le, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/step/4", exact: !0 },
                c.a.createElement(vt, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/step/5", exact: !0 },
                c.a.createElement(kt, null)
              )
            )
          );
        },
        wt = a(25),
        yt = localStorage.token,
        xt = Object(fe.b)(
          "auth/login",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            "".concat(
                              "https://v-work.xyz/",
                              "api/v1/auth/login"
                            ),
                            t,
                            { headers: { "Content-Type": "application/json" } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Ct = Object(fe.b)(
          "auth/signup",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            "".concat(
                              "https://v-work.xyz/",
                              "api/v1/auth/signup"
                            ),
                            t,
                            { headers: { "Content-Type": "application/json" } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Nt = Object(fe.b)(
          "auth/current",
          Object(ne.a)(
            ae.a.mark(function e() {
              var t;
              return ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Ee.a.get(
                          "".concat(
                            "https://v-work.xyz/",
                            "api/v1/auth/current"
                          ),
                          { headers: { Authorization: "Bearer ".concat(yt) } }
                        )
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", t.data);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
        At = Object(fe.b)(
          "auth/logout",
          Object(ne.a)(
            ae.a.mark(function e() {
              var t;
              return ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Ee.a.get(
                          "".concat("https://v-work.xyz/", "api/v1/auth/logout")
                        )
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", t.data);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
        Tt = Object(fe.b)(
          "auth/updateUser",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat("https://v-work.xyz/", "api/v1/users/")
                              .concat(t.userId),
                            t.postData,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(yt),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        St = Object(fe.b)(
          "auth/forgotPassword",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            "".concat(
                              "https://v-work.xyz/",
                              "api/v1/auth/forgotpassword"
                            ),
                            { email: t },
                            { headers: { "Content-Type": "application/json" } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        It = Object(fe.b)(
          "auth/resetPassword",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/auth/resetpassword/"
                              )
                              .concat(t.resetToken),
                            { password: t.password },
                            { headers: { "Content-Type": "application/json" } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Wt = Object(fe.c)({
          name: "auth",
          initialState: {
            token: "",
            user: {
              _id: "",
              name: "",
              email: "",
              registration: !1,
              role: "",
              lastAccessWorkspace: "",
            },
            workspaceCount: 0,
            workspace: { id: "", name: "", owners: [] },
            owner: !1,
            errorMessage: "",
            errorOpen: !1,
            profile: { _id: "", position: "" },
            unread: 0,
          },
          reducers: {
            setErrorOpen: function (e, t) {
              e.errorOpen = t.payload;
            },
            setUser: function (e, t) {
              e.user = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(xt.fulfilled, function (e, t) {
              (e.errorMessage = ""),
                localStorage.setItem("token", t.payload.token),
                t.payload.token &&
                  (console.log("login success"),
                  t.payload.workspaceCount > 1
                    ? (window.location.href = "/workspaces")
                    : (window.location.href = "/"));
            }),
              e.addCase(xt.rejected, function (e, t) {
                (e.errorMessage =
                  "\u8a8d\u8a3c\u60c5\u5831\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002"),
                  (e.errorOpen = !0);
              }),
              e.addCase(Nt.fulfilled, function (e, t) {
                (e.errorMessage = ""),
                  (e.token = localStorage.token),
                  (e.user = t.payload.data),
                  (e.unread = t.payload.unread),
                  (e.profile = t.payload.profile),
                  (e.workspace = t.payload.workspace),
                  (e.owner = t.payload.owner),
                  (e.workspaceCount = localStorage.wc),
                  localStorage.setItem(
                    "workspace",
                    t.payload.data.lastAccessWorkspace
                  );
                var a = window.location.pathname;
                e.user.registration || a.includes("/regist")
                  ? (("/auth/login" !== a && "/auth/signup" !== a) ||
                      (window.location.href = "/"),
                    e.user.registration &&
                      a.includes("/regist") &&
                      !a.includes("/invitee") &&
                      (window.location.href = "/"))
                  : (window.location.href = "/regist/welcome");
              }),
              e.addCase(Nt.rejected, function (e, t) {
                var a = window.location.pathname;
                "/auth/login" !== a &&
                  "/auth/signup" !== a &&
                  (window.location.href = "/auth/login");
              }),
              e.addCase(Ct.fulfilled, function (e, t) {
                (e.errorMessage = ""),
                  localStorage.setItem("token", t.payload.token),
                  t.payload.token &&
                    (console.log("welcom"),
                    (window.location.href = "/regist/welcome"));
              }),
              e.addCase(Ct.rejected, function (e, t) {
                (e.errorMessage =
                  "\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"),
                  (e.errorOpen = !0);
              }),
              e.addCase(At.fulfilled, function (e, t) {
                localStorage.clear(), (window.location.href = "/auth/login");
              }),
              e.addCase(Tt.fulfilled, function (e, t) {}),
              e.addCase(St.fulfilled, function (e, t) {
                window.location.href = "/auth/forgot/complete";
              }),
              e.addCase(St.rejected, function (e, t) {
                wt.b.error(
                  "\u518d\u8a2d\u5b9a\u306e\u7533\u8acb\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(It.fulfilled, function (e, t) {
                localStorage.setItem("token", t.payload.token),
                  t.payload.token &&
                    (console.log("login success"),
                    t.payload.workspaceCount > 1
                      ? (window.location.href = "/workspaces")
                      : (window.location.href = "/"));
              });
          },
        }),
        Rt = function (e) {
          return e.auth.user;
        },
        _t = function (e) {
          return e.auth.profile;
        },
        zt = function (e) {
          return e.auth.user.lastAccessWorkspace;
        },
        Bt = function (e) {
          return e.auth.workspace;
        },
        Kt = function (e) {
          return e.auth.errorMessage;
        },
        Vt = function (e) {
          return e.auth.errorOpen;
        },
        Dt = function (e) {
          return e.auth.owner;
        },
        Ft = function (e) {
          return e.auth.unread;
        },
        Pt = function (e) {
          return e.auth.workspace.owners;
        },
        Mt = Wt.actions,
        Ht = Mt.setErrorOpen,
        Lt = (Mt.setUser, Wt.reducer),
        Yt = function () {
          var e = Object(l.b)(),
            t = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function t() {
                  return ae.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e(Nt());
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [e]
            ),
            a = Object(r.useRef)(!1);
          return (
            Object(r.useEffect)(
              function () {
                a.current || (t(), (a.current = !0));
              },
              [t]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                m.d,
                null,
                c.a.createElement(
                  m.b,
                  { path: "/regist/welcome" },
                  c.a.createElement(me, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/regist/step" },
                  c.a.createElement(Ot, null)
                )
              )
            )
          );
        },
        qt = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 100 },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
            style: { marginTop: "40%", marginRight: "10%" },
            dialog: { position: "relative" },
          });
        }),
        Ut = function () {
          var e = qt(),
            t = Object(l.b)(),
            a = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t(ke(a));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [t]
            );
          return (
            Object(r.useEffect)(
              function () {
                localStorage.clear();
                var e = window.location.search.slice(1);
                localStorage.setItem("Itoken", e), t(Ue(!0)), a(e), t(Ue(!1));
              },
              [t, a]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                le.a,
                { id: "alert-dialog-slide-title" },
                c.a.createElement(
                  W.a,
                  { mt: 5 },
                  c.a.createElement(
                    w.a,
                    { variant: "h2" },
                    c.a.createElement(
                      "span",
                      { style: { color: p.VWORK_RED } },
                      "VWORK"
                    ),
                    "\u3078\u3088\u3046\u3053\u305d"
                  )
                )
              ),
              c.a.createElement(
                oe.a,
                null,
                c.a.createElement(
                  W.a,
                  { mt: 2 },
                  c.a.createElement(
                    ie.a,
                    { id: "alert-dialog-slide-description" },
                    "\u3053\u308c\u304b\u3089VWORK\u3092\u6d3b\u7528\u3059\u308b\u305f\u3081\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u9802\u304d\u307e\u3059\u3002",
                    c.a.createElement("br", null),
                    "\u300cNEXT\u300d\u3092\u62bc\u3057\u3066\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3078\u9032\u3093\u3067\u4e0b\u3055\u3044\u3002"
                  )
                )
              ),
              c.a.createElement(
                ce.a,
                null,
                c.a.createElement(
                  s.b,
                  {
                    to: "/regist/invitee/step1",
                    style: { textDecoration: "none" },
                  },
                  c.a.createElement(
                    re.a,
                    {
                      variant: "contained",
                      className: e.button,
                      color: "primary",
                    },
                    "NEXT"
                  )
                )
              )
            )
          );
        },
        Gt = Object(g.a)(function (e) {
          return Object(h.a)({
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        }),
        Xt = function () {
          var e = Gt(),
            t = Object(l.b)(),
            a = Object(m.g)(),
            n = Object(l.c)(Se),
            r = Object(l.c)(Ie);
          return (
            n.registration && a.push("/regist/invitee/step2"),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                le.a,
                { id: "alert-dialog-slide-title" },
                c.a.createElement(
                  W.a,
                  { mt: 5 },
                  c.a.createElement(
                    w.a,
                    { variant: "h4" },
                    "\u57fa\u672c\u8a2d\u5b9a"
                  )
                )
              ),
              c.a.createElement(
                oe.a,
                null,
                c.a.createElement(ie.a, {
                  id: "alert-dialog-slide-description",
                })
              ),
              c.a.createElement(
                ue.d,
                {
                  initialValues: { email: r, password: "" },
                  validationSchema: pe
                    .b()
                    .shape({
                      email: pe
                        .c()
                        .email(
                          "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                        )
                        .required("email\u306f\u5fc5\u9808\u3067\u3059\u3002"),
                      password: pe
                        .c()
                        .min(
                          6,
                          "6\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"
                        )
                        .required(
                          "\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u3059\u3002"
                        ),
                    }),
                  onSubmit: function (e) {
                    var r = Object(I.a)({}, n, {}, e);
                    t(Ae(r)), a.push("/regist/invitee/step2");
                  },
                },
                c.a.createElement(
                  ue.c,
                  null,
                  c.a.createElement(ue.a, {
                    component: de.c,
                    name: "email",
                    type: "email",
                    label: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9*",
                    variant: "outlined",
                    margin: "normal",
                    fullWidth: !0,
                    id: "email",
                    value: r,
                  }),
                  c.a.createElement("br", null),
                  c.a.createElement(ue.a, {
                    component: de.c,
                    type: "password",
                    label: "\u30d1\u30b9\u30ef\u30fc\u30c9*",
                    fullWidth: !0,
                    variant: "outlined",
                    margin: "normal",
                    name: "password",
                    id: "password",
                  }),
                  c.a.createElement(
                    ce.a,
                    null,
                    c.a.createElement(
                      re.a,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        className: e.button,
                        color: "primary",
                      },
                      "NEXT"
                    )
                  )
                )
              )
            )
          );
        },
        Jt = Object(g.a)(function (e) {
          return Object(h.a)({
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        }),
        Qt = function () {
          var e = Jt(),
            t = Object(l.b)(),
            a = Object(l.c)(Se),
            n = Object(l.c)(We),
            r = localStorage.Itoken;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              le.a,
              { id: "alert-dialog-slide-title" },
              c.a.createElement(
                W.a,
                { mt: 5 },
                c.a.createElement(
                  w.a,
                  { variant: "h4" },
                  "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u8a2d\u5b9a"
                )
              )
            ),
            c.a.createElement(
              oe.a,
              null,
              c.a.createElement(ie.a, { id: "alert-dialog-slide-description" })
            ),
            c.a.createElement(
              ue.d,
              {
                initialValues: { name: n, position: "" },
                validationSchema: pe
                  .b()
                  .shape({
                    name: pe
                      .c()
                      .required(
                        "\u6c0f\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                  }),
                onSubmit: (function () {
                  var e = Object(ne.a)(
                    ae.a.mark(function e(n) {
                      var c, o;
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (c = Object(I.a)({}, a, {}, n)),
                                (o = { token: r, user: c }),
                                t(Ue(!0)),
                                (e.next = 5),
                                t(Oe(o))
                              );
                            case 5:
                              t(Ue(!1));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              c.a.createElement(
                ue.c,
                null,
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "name",
                  label: "\u6c0f\u540d*",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  id: "name",
                  value: n,
                }),
                c.a.createElement("br", null),
                c.a.createElement(ue.a, {
                  component: de.c,
                  name: "position",
                  label: "\u5f79\u8077\u30fb\u62c5\u5f53",
                  placeholder: "\u7d4c\u55b6\u4f01\u753b",
                  variant: "outlined",
                  margin: "normal",
                  fullWidth: !0,
                  id: "position",
                }),
                c.a.createElement(
                  ce.a,
                  null,
                  c.a.createElement(
                    re.a,
                    {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      className: e.button,
                      color: "primary",
                    },
                    "\u767b\u9332"
                  )
                )
              )
            )
          );
        },
        $t = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { position: "absolute" },
            button: {
              position: "absolute",
              fontSize: 30,
              width: 200,
              borderRadius: 15,
              right: "0%",
              bottom: "0%",
              marginBottom: 40,
              marginRight: 80,
            },
          });
        }),
        Zt = function () {
          var e = $t(),
            t = Object(m.g)();
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              le.a,
              { id: "alert-dialog-slide-title" },
              c.a.createElement(
                W.a,
                { mt: 25, ml: 10 },
                c.a.createElement(
                  w.a,
                  { variant: "h3", className: e.title },
                  c.a.createElement(
                    "span",
                    { style: { color: p.VWORK_RED } },
                    "VWORK"
                  ),
                  "\u306e\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002"
                )
              )
            ),
            c.a.createElement(
              ce.a,
              null,
              c.a.createElement(
                re.a,
                {
                  variant: "contained",
                  className: e.button,
                  color: "primary",
                  onClick: function () {
                    t.push("/"), t.go(0);
                  },
                },
                "NEXT"
              )
            )
          );
        },
        ea = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              m.d,
              null,
              c.a.createElement(
                m.b,
                { path: "/regist/invitee/welcome" },
                c.a.createElement(Ut, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/invitee/step1", exact: !0 },
                c.a.createElement(Xt, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/invitee/step2", exact: !0 },
                c.a.createElement(Qt, null)
              ),
              c.a.createElement(
                m.b,
                { path: "/regist/invitee/step3", exact: !0 },
                c.a.createElement(Zt, null)
              )
            )
          );
        },
        ta =
          (a(309),
          function () {
            return c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Z, null),
              c.a.createElement(
                ee.a,
                {
                  open: !0,
                  keepMounted: !0,
                  maxWidth: "xl",
                  className: "registDialog",
                },
                c.a.createElement(
                  A.a,
                  { maxWidth: "md" },
                  c.a.createElement(
                    s.a,
                    null,
                    c.a.createElement(
                      m.d,
                      null,
                      c.a.createElement(
                        m.b,
                        { path: "/regist/invitee" },
                        c.a.createElement(ea, null)
                      ),
                      c.a.createElement(
                        m.b,
                        { path: "/regist" },
                        c.a.createElement(Yt, null)
                      )
                    )
                  )
                )
              )
            );
          }),
        aa = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            hide: { display: "none" },
            drawer: { width: 240, flexShrink: 0, color: p.VWORK_BLACK },
            mainTitle: { paddingLeft: 3, fontSize: 30 },
            drawerPaper: {
              width: 240,
              backgroundColor: p.VWORK_BLACK,
              color: p.VWORK_WHITE,
            },
            drawerHeader: Object(I.a)(
              {
                display: "flex",
                alignItems: "center",
                padding: e.spacing(0, 1),
              },
              e.mixins.toolbar,
              { justifyContent: "flex-end" }
            ),
            iconStyle: { color: p.VWORK_WHITE },
            title: { fontWeight: 900 },
            projectTitle: {
              fontSize: 15,
              marginTop: "40%",
              marginLeft: "5%",
              marginBottom: "5%",
              width: 190,
            },
          });
        }),
        na = function () {
          var e = aa();
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(
              A.a,
              null,
              c.a.createElement(
                H.a,
                {
                  open: !0,
                  className: e.drawer,
                  variant: "persistent",
                  anchor: "left",
                  classes: { paper: e.drawerPaper },
                },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    direction: "row",
                    justify: "space-between",
                    alignItems: "center",
                  },
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      C.a,
                      {
                        container: !0,
                        direction: "row",
                        justify: "center",
                        alignItems: "center",
                        className: e.title,
                        style: { marginLeft: "10%" },
                      },
                      c.a.createElement(
                        C.a,
                        { item: !0, style: { fontSize: 30 } },
                        c.a.createElement("img", {
                          src: "".concat("", "/images/logo192.png"),
                          style: { height: 25 },
                          alt: "",
                        })
                      ),
                      c.a.createElement(
                        C.a,
                        {
                          item: !0,
                          className: Object(y.a)(e.mainTitle, "logo"),
                        },
                        "VWORK"
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      "div",
                      { className: e.drawerHeader },
                      c.a.createElement(
                        x.a,
                        null,
                        c.a.createElement(k.a, {
                          style: { fontSize: 40, color: p.VWORK_GRAY },
                        })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  R.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: e.iconStyle },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(B.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: e.iconStyle },
                      c.a.createElement(X.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u30de\u30a4\u30bf\u30b9\u30af",
                    })
                  ),
                  c.a.createElement(
                    _.a,
                    {
                      button: !0,
                      component: s.c,
                      to: "/kintai_manage",
                      exact: !0,
                    },
                    c.a.createElement(
                      z.a,
                      { className: e.iconStyle },
                      c.a.createElement(Q.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u52e4\u6020\u7ba1\u7406",
                    })
                  )
                ),
                c.a.createElement(
                  W.a,
                  { borderBottom: 1, className: e.projectTitle },
                  c.a.createElement(
                    w.a,
                    null,
                    "\u30de\u30a4\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                  )
                )
              )
            )
          );
        },
        ra = a(372),
        ca = a(373),
        oa = Object(g.a)(function (e) {
          return Object(h.a)({
            root: {
              width: "100%",
              borderRadius: 10,
              height: 80,
              marginBottom: 15,
              cursor: "pointer",
            },
            title: { fontSize: 20, paddingLeft: 10 },
            cardActionArea: { height: 80 },
          });
        }),
        ia = function (e) {
          var t = e.id,
            a = e.name,
            n = oa(),
            r = Object(l.c)(Rt),
            o = Object(l.b)();
          return c.a.createElement(
            W.a,
            { width: "100%", mb: 3 },
            c.a.createElement(
              ra.a,
              {
                className: n.cardActionArea,
                onClick: Object(ne.a)(
                  ae.a.mark(function e() {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              o(
                                Tt({
                                  userId: r._id,
                                  postData: { lastAccessWorkspace: t },
                                })
                              )
                            );
                          case 2:
                            window.location.href = "/";
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
              },
              c.a.createElement(
                ca.a,
                { className: n.root },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    direction: "row",
                    justify: "space-between",
                    alignItems: "center",
                    style: { height: 80, margin: "auto" },
                  },
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(w.a, { className: n.title }, a)
                  )
                )
              )
            )
          );
        },
        la = localStorage.token,
        sa = Object(fe.b)(
          "workspace/all",
          Object(ne.a)(
            ae.a.mark(function e() {
              var t;
              return ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Ee.a.get(
                          "".concat(
                            "https://v-work.xyz/",
                            "api/v1/workspaces/"
                          ),
                          { headers: { Authorization: "Bearer ".concat(la) } }
                        )
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", t.data);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
        ma = Object(fe.b)(
          "workspace/update",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace),
                            t.bodyData,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(la),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        ua = Object(fe.c)({
          name: "workspaces",
          initialState: { workspaces: [] },
          reducers: {},
          extraReducers: function (e) {
            e.addCase(sa.fulfilled, function (e, t) {
              e.workspaces = t.payload.data;
            }),
              e.addCase(ma.fulfilled, function (e, t) {
                wt.b.info(
                  "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u60c5\u5831\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(ma.rejected, function (e, t) {
                wt.b.error(
                  "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u60c5\u5831\u3092\u66f4\u65b0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              });
          },
        }),
        da = function (e) {
          return e.workspace.workspaces;
        },
        pa = ua.reducer,
        fa = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 20, paddingLeft: 10 },
            workspacesArea: {
              height: "42vh",
              overflowY: "scroll",
              overflowX: "hidden",
            },
          });
        }),
        ba = function () {
          var e = fa(),
            t = Object(l.b)(),
            a = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(sa());
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t]
            );
          Object(r.useEffect)(
            function () {
              a();
            },
            [a]
          );
          var n = Object(l.c)(da);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, className: e.title, my: 5 },
              "WORKSPACE\u4e00\u89a7"
            ),
            c.a.createElement(
              W.a,
              { flexDirection: "column", className: e.workspacesArea },
              n.map(function (e, t) {
                return c.a.createElement(ia, {
                  name: e.name,
                  id: e._id,
                  key: t,
                });
              })
            )
          );
        },
        Ea = function () {
          var e = Object(l.b)(),
            t = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function t() {
                  return ae.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e(Nt());
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                t();
              },
              [t]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(na, null),
              c.a.createElement(
                ee.a,
                {
                  open: !0,
                  keepMounted: !0,
                  maxWidth: "xl",
                  className: "registDialog",
                },
                c.a.createElement(
                  A.a,
                  { maxWidth: "md" },
                  c.a.createElement(ba, null)
                )
              )
            )
          );
        },
        ga = (a(310), a(27)),
        ha = a.n(ga),
        va = "https://v-work.xyz/",
        ja = localStorage.token,
        ka = Object(fe.b)(
          "task/add",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            ""
                              .concat(va, "api/v1/workspaces/")
                              .concat(t.workspace, "/tasks"),
                            t.task,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Oa = Object(fe.b)(
          "task/getAll",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(va, "api/v1/workspaces/")
                              .concat(t.workspace, "/tasks")
                              .concat(t.query ? "?state=".concat(t.query) : ""),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        wa = Object(fe.b)(
          "task/getProjectTask",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(va, "api/v1/projects/")
                              .concat(t, "/tasks"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        ya = Object(fe.b)(
          "task/get",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get("".concat(va, "api/v1/tasks/").concat(t), {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer ".concat(ja),
                            },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        xa = Object(fe.b)(
          "task/update",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            "".concat(va, "api/v1/tasks/").concat(t.id),
                            { task: t.task, log: t.log },
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Ca = Object(fe.b)(
          "task/getRecent",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(va, "api/v1/workspaces/")
                              .concat(t, "/tasks/recent"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Na = Object(fe.b)(
          "task/getNearDeadline",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(va, "api/v1/workspaces/")
                              .concat(t, "/tasks/near_deadline"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Aa = Object(fe.b)(
          "task/member",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(va, "api/v1/workspaces/")
                              .concat(t.workspace, "/users/")
                              .concat(t.userId, "/tasks"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Ta = Object(fe.b)(
          "task/addComment",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            ""
                              .concat(va, "api/v1/tasks/")
                              .concat(t.taskId, "/comments"),
                            { comment: t.comment },
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(ja),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Sa = Object(fe.b)(
          "task/showHistory",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(va, "api/v1/tasks/")
                              .concat(t, "/histories"),
                            { headers: { Authorization: "Bearer ".concat(ja) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Ia = Object(fe.c)({
          name: "task",
          initialState: {
            tasks: {
              _id: "",
              count: 0,
              countTodaysTask: 0,
              data: [],
              todaysTasks: [],
            },
            task: {
              user: "",
              name: "",
              description: "",
              startDateAt: "",
              endDateAt: "",
              state: 0,
              progress: 0,
              priority: 0,
              project: "",
              todaysTask: !1,
            },
            selectedTask: "",
            recentTasks: [],
            nearDeadlineTasks: [],
            todaysDoneTasks: [],
            query: "",
            taskHistories: [],
          },
          reducers: {
            setTask: function (e, t) {
              e.task = t.payload;
            },
            setTasks: function (e, t) {
              e.tasks = t.payload;
            },
            setSelectedTask: function (e, t) {
              e.selectedTask = t.payload;
            },
            setTodaysDoneTasks: function (e, t) {
              e.todaysDoneTasks = t.payload;
            },
            setQuery: function (e, t) {
              e.query = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(ka.fulfilled, function (e, t) {
              wt.b.info(
                "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
                { position: wt.b.POSITION.TOP_CENTER }
              );
            }),
              e.addCase(xa.fulfilled, function (e, t) {
                wt.b.info(
                  "\u30bf\u30b9\u30af\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(xa.rejected, function (e, t) {
                wt.b.error(
                  "\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(Oa.fulfilled, function (e, t) {
                e.tasks = t.payload;
              }),
              e.addCase(wa.fulfilled, function (e, t) {
                e.tasks = t.payload;
              }),
              e.addCase(ya.fulfilled, function (e, t) {
                e.task = t.payload.data;
              }),
              e.addCase(Ca.fulfilled, function (e, t) {
                e.recentTasks = t.payload.data;
              }),
              e.addCase(Na.fulfilled, function (e, t) {
                e.nearDeadlineTasks = t.payload.data;
              }),
              e.addCase(Aa.fulfilled, function (e, t) {
                e.tasks.data = t.payload.data;
              }),
              e.addCase(Ta.fulfilled, function (e, t) {
                wt.b.info(
                  "\u30b3\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(Ta.rejected, function (e, t) {
                wt.b.error(
                  "\u30b3\u30e1\u30f3\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(Sa.fulfilled, function (e, t) {
                e.taskHistories = t.payload.data;
              });
          },
        }),
        Wa = function (e) {
          return e.task.tasks;
        },
        Ra = function (e) {
          return e.task.task;
        },
        _a = function (e) {
          return e.task.selectedTask;
        },
        za = function (e) {
          return e.task.recentTasks;
        },
        Ba = function (e) {
          return e.task.nearDeadlineTasks;
        },
        Ka = function (e) {
          return e.task.todaysDoneTasks;
        },
        Va = function (e) {
          return e.task.query;
        },
        Da = function (e) {
          return e.task.taskHistories;
        },
        Fa = Ia.actions,
        Pa = Fa.setSelectedTask,
        Ma = Fa.setTodaysDoneTasks,
        Ha = Fa.setTasks,
        La = Fa.setTask,
        Ya = Fa.setQuery,
        qa = Ia.reducer,
        Ua = a(236),
        Ga = a.n(Ua),
        Xa = a(237),
        Ja = a.n(Xa),
        Qa = a(105),
        $a = a.n(Qa),
        Za = a(391),
        en = localStorage.token,
        tn = Object(fe.b)(
          "project/allMyProjects",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t, "/projects/me"),
                            { headers: { Authorization: "Bearer ".concat(en) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        an = Object(fe.b)(
          "project/allProjects",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t, "/projects"),
                            { headers: { Authorization: "Bearer ".concat(en) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        nn = Object(fe.b)(
          "project/project",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat("https://v-work.xyz/", "api/v1/projects/")
                              .concat(t),
                            { headers: { Authorization: "Bearer ".concat(en) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        rn = Object(fe.b)(
          "project/create",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/projects"),
                            t.projectData,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(en),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        cn = Object(fe.b)(
          "project/newMembers",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspaces, "/projects/")
                              .concat(t.projectId, "/members/new"),
                            { headers: { Authorization: "Bearer ".concat(en) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        on = Object(fe.b)(
          "project/member",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspaces, "/projects/")
                              .concat(t.projectId, "/users/")
                              .concat(t.userId),
                            { headers: { Authorization: "Bearer ".concat(en) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        ln = Object(fe.b)(
          "project/addMember",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat("https://v-work.xyz/", "api/v1/projects/")
                              .concat(t.projectId, "/members"),
                            { members: t.members },
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(en),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        sn = Object(fe.b)(
          "project/memberProjects",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/users/")
                              .concat(t.userId, "/projects"),
                            { headers: { Authorization: "Bearer ".concat(en) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        mn = Object(fe.c)({
          name: "project",
          initialState: {
            projects: [],
            selectedProjects: [],
            project: {
              _id: "",
              name: "",
              color: 0,
              icon: 0,
              description: "",
              members: [],
              tasks: [],
            },
            newMembers: [],
            member: {
              user: {
                _id: "",
                name: "",
                email: "",
                registration: !1,
                role: "",
                lastAccessWorkspace: "",
              },
              tasks: [],
              profile: { position: "" },
            },
            selectedMember: "",
          },
          reducers: {
            setSelectedMember: function (e, t) {
              e.selectedMember = t.payload;
            },
            setProjectMember: function (e, t) {
              e.member = t.payload;
            },
            setProject: function (e, t) {
              e.project = t.payload;
            },
            setSelectedProject: function (e, t) {
              e.selectedProjects = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(tn.fulfilled, function (e, t) {
              e.projects = t.payload.data;
            }),
              e.addCase(an.fulfilled, function (e, t) {
                e.selectedProjects = t.payload.data;
              }),
              e.addCase(an.rejected, function (e, t) {
                window.location.href = "/";
              }),
              e.addCase(tn.rejected, function (e, t) {}),
              e.addCase(nn.fulfilled, function (e, t) {
                e.project = t.payload.data;
              }),
              e.addCase(rn.fulfilled, function (e, t) {
                (e.projects = t.payload.data),
                  wt.b.info(
                    "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
                    { position: wt.b.POSITION.TOP_CENTER }
                  );
              }),
              e.addCase(cn.fulfilled, function (e, t) {
                e.newMembers = t.payload.data;
              }),
              e.addCase(on.fulfilled, function (e, t) {
                (e.member.user = t.payload.user),
                  (e.member.profile = t.payload.profile),
                  (e.member.tasks = t.payload.tasks);
              }),
              e.addCase(ln.fulfilled, function (e, t) {
                wt.b.info(
                  "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(sn.fulfilled, function (e, t) {
                e.selectedProjects = t.payload.data;
              }),
              e.addCase(sn.rejected, function (e, t) {
                window.location.href = "/";
              });
          },
        }),
        un = function (e) {
          return e.project.projects;
        },
        dn = function (e) {
          return e.project.selectedProjects;
        },
        pn = function (e) {
          return e.project.project;
        },
        fn = function (e) {
          return e.project.selectedMember;
        },
        bn = function (e) {
          return e.project.member;
        },
        En = function (e) {
          return e.project.newMembers;
        },
        gn = mn.actions,
        hn = gn.setSelectedMember,
        vn = gn.setProjectMember,
        jn = gn.setProject,
        kn = gn.setSelectedProject,
        On = mn.reducer,
        wn = Object(g.a)(function (e) {
          return Object(h.a)({
            root: {
              width: "100%",
              borderRadius: 10,
              height: 80,
              marginBottom: 15,
              cursor: "pointer",
            },
            cardActionArea: { height: 80 },
            avatar: { backgroundColor: p.VWORK_RED },
          });
        }),
        yn = function (e) {
          var t = e.iconType,
            a = void 0 === t ? "" : t,
            n = e.data,
            o = wn(),
            i = Object(l.b)(),
            s = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(t) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), i(nn(t));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [i]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              ca.a,
              { className: o.root },
              c.a.createElement(
                ra.a,
                {
                  className: o.cardActionArea,
                  onClick: function () {
                    i(Pa(n._id)),
                      n.project && n.project._id
                        ? s(n.project._id)
                        : i(
                            jn({
                              _id: "",
                              name: "",
                              color: 0,
                              icon: 0,
                              description: "",
                              members: [],
                              tasks: [],
                            })
                          ),
                      i($e(!0));
                  },
                  "data-testid": "test",
                },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    alignItems: "center",
                    style: {
                      height: 80,
                      padding: "10px",
                      boxSizing: "border-box",
                    },
                    spacing: 2,
                  },
                  c.a.createElement(
                    C.a,
                    { item: !0, xs: 6 },
                    c.a.createElement(
                      C.a,
                      {
                        container: !0,
                        wrap: "nowrap",
                        direction: "row",
                        alignItems: "center",
                        spacing: 1,
                      },
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        "alert" === a
                          ? c.a.createElement(Ga.a, { color: "primary" })
                          : c.a.createElement($a.a, { color: "secondary" })
                      ),
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(w.a, { variant: "body1" }, n.name)
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0, container: !0, xs: !0, alignItems: "center" },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      n.project && n.project.name
                        ? c.a.createElement(Za.a, {
                            label: n.project.name,
                            variant: "outlined",
                            color: "secondary",
                          })
                        : c.a.createElement(Za.a, {
                            label:
                              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u672a\u9078\u629e",
                            variant: "outlined",
                          })
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    {
                      item: !0,
                      container: !0,
                      xs: !0,
                      alignItems: "center",
                      spacing: 1,
                    },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(Ja.a, { color: "disabled" })
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        w.a,
                        null,
                        n.endDateAt
                          ? ha()(n.endDateAt).format("YYYY/MM/DD")
                          : ""
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0, xs: 1 },
                    n.user.name
                      ? c.a.createElement(
                          N.a,
                          { className: o.avatar },
                          n.user.name.slice(0, 1)
                        )
                      : c.a.createElement(N.a, null, "V")
                  )
                )
              )
            )
          );
        },
        xn = a(7),
        Cn = a(321),
        Nn = a(327),
        An = a(263),
        Tn = a(374),
        Sn = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 23 },
            margin: { margin: e.spacing(1) },
          });
        }),
        In = Object(xn.a)(function (e) {
          return Object(h.a)({
            root: { "label + &": { marginTop: e.spacing(3) } },
            input: {
              borderRadius: 4,
              position: "relative",
              backgroundColor: e.palette.background.paper,
              border: "1px solid #ced4da",
              fontSize: 16,
              padding: "10px 26px 10px 12px",
              transition: e.transitions.create(["border-color", "box-shadow"]),
              fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(","),
              "&:focus": {
                borderRadius: 4,
                borderColor: "#80bdff",
                boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
              },
            },
          });
        })(An.a),
        Wn = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = e.iconType,
            r = void 0 === n ? "" : n,
            o = e.taskData,
            i = Sn(),
            l = c.a.useState(""),
            s = Object(b.a)(l, 2),
            m = s[0],
            u = s[1],
            d = o || [
              {
                name: "",
                project: { name: "", _id: "" },
                endDateAt: "",
                _id: "",
                user: { name: "", _id: "" },
              },
            ];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { mt: 7 },
              c.a.createElement(
                C.a,
                {
                  container: !0,
                  direction: "row",
                  justify: "space-between",
                  alignItems: "center",
                },
                c.a.createElement(
                  C.a,
                  { item: !0, xs: 5 },
                  a
                    ? c.a.createElement(
                        W.a,
                        { borderBottom: 1, className: i.title },
                        a
                      )
                    : ""
                ),
                c.a.createElement(
                  C.a,
                  { item: !0 },
                  "\u30bf\u30b9\u30af" === a
                    ? c.a.createElement(
                        Cn.a,
                        { className: i.margin },
                        c.a.createElement(
                          Nn.a,
                          {
                            value: m,
                            onChange: function (e) {
                              u(e.target.value);
                            },
                            input: c.a.createElement(In, null),
                            style: { width: 200 },
                          },
                          c.a.createElement(
                            Tn.a,
                            { value: "" },
                            "\u672a\u9078\u629e"
                          ),
                          c.a.createElement(Tn.a, { value: "0" }, "TODO"),
                          c.a.createElement(
                            Tn.a,
                            { value: "1" },
                            "\u9032\u884c\u4e2d"
                          ),
                          c.a.createElement(
                            Tn.a,
                            { value: "2" },
                            "\u5b8c\u4e86"
                          )
                        )
                      )
                    : ""
                )
              ),
              c.a.createElement(
                W.a,
                { mt: 2 },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column", justify: "flex-start" },
                  d.map(function (e, t) {
                    return c.a.createElement(yn, {
                      data: e,
                      iconType: r,
                      key: t,
                    });
                  })
                )
              )
            )
          );
        },
        Rn = a(261),
        _n = Object(g.a)(function (e) {
          return Object(h.a)({
            backdrop: { zIndex: e.zIndex.drawer, color: "#fff" },
            drawer: { width: "50%", flexShrink: 0 },
            drawerPaper: { width: "50%" },
            workSpaceIcon: { marginTop: 10 },
          });
        }),
        zn = function (e) {
          var t = _n();
          return (
            Object(r.useEffect)(function () {
              return (
                document.body.classList.add("drawer-active"),
                function () {
                  document.body.classList.remove("drawer-active");
                }
              );
            }),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Rn.a, {
                className: t.backdrop,
                open: e.open,
                onClick: e.click,
              }),
              c.a.createElement(
                H.a,
                {
                  className: t.drawer,
                  variant: "persistent",
                  anchor: "right",
                  open: e.open,
                  classes: { paper: t.drawerPaper },
                },
                e.children
              )
            )
          );
        },
        Bn = a(156),
        Kn = a.n(Bn),
        Vn = a(157),
        Dn = a.n(Vn),
        Fn = Object(g.a)(function (e) {
          return Object(h.a)({
            button: { position: "absolute", top: 25, right: 50 },
          });
        }),
        Pn = function () {
          var e = Fn(),
            t = Object(l.b)(),
            a = Object(l.c)(pt),
            n = Object(l.c)(Wa),
            o = Object(l.c)(zt),
            i = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t(Oa({ workspace: a }));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [t]
            );
          Object(r.useEffect)(
            function () {
              i(o);
            },
            [i, o]
          );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              zn,
              {
                open: a,
                click: function () {
                  return t(tt(!1));
                },
              },
              c.a.createElement(
                A.a,
                { maxWidth: "md" },
                c.a.createElement(
                  W.a,
                  { py: 4 },
                  c.a.createElement(
                    ue.d,
                    {
                      initialValues: { tasks: [] },
                      validationSchema: pe.b().shape({}),
                      onSubmit: function (e, a) {
                        a.setSubmitting(!1), t(Ma(e.tasks));
                      },
                    },
                    function (t) {
                      var a = t.values;
                      return c.a.createElement(
                        ue.c,
                        null,
                        c.a.createElement(ue.b, {
                          name: "tasks",
                          render: function (t) {
                            return c.a.createElement(
                              "div",
                              null,
                              c.a.createElement(
                                W.a,
                                {
                                  borderBottom: 1,
                                  width: "80%",
                                  paddingBottom: 1,
                                  marginBottom: 2,
                                },
                                c.a.createElement(
                                  w.a,
                                  { variant: "h5", component: "h5" },
                                  "\u4eca\u65e5\u306e\u30bf\u30b9\u30af"
                                )
                              ),
                              n.todaysTasks &&
                                n.todaysTasks.map(function (e, n) {
                                  return c.a.createElement(
                                    "div",
                                    { key: "todaysTask-".concat(n) },
                                    c.a.createElement(ue.a, {
                                      component: de.a,
                                      Label: { label: e.name },
                                      name: "tasks",
                                      type: "checkbox",
                                      value: e._id,
                                      checked: a.tasks.includes(e._id),
                                      onChange: function (n) {
                                        if (n.target.checked) t.push(e._id);
                                        else {
                                          var r = a.tasks.indexOf(e._id);
                                          t.remove(r);
                                        }
                                      },
                                      icon: c.a.createElement(Kn.a, null),
                                      checkedIcon: c.a.createElement(
                                        Dn.a,
                                        null
                                      ),
                                    })
                                  );
                                }),
                              c.a.createElement("br", null),
                              c.a.createElement(
                                W.a,
                                {
                                  borderBottom: 1,
                                  width: "80%",
                                  paddingBottom: 1,
                                  marginBottom: 2,
                                },
                                c.a.createElement(
                                  w.a,
                                  { variant: "h5", component: "h5" },
                                  "\u30bf\u30b9\u30af\u4e00\u89a7"
                                )
                              ),
                              n.data &&
                                n.data.map(function (e, n) {
                                  return c.a.createElement(
                                    "div",
                                    { key: "task-".concat(n) },
                                    c.a.createElement(ue.a, {
                                      component: de.a,
                                      Label: { label: e.name },
                                      name: "tasks",
                                      type: "checkbox",
                                      value: e._id,
                                      checked: a.tasks.includes(e._id),
                                      onChange: function (n) {
                                        if (n.target.checked) t.push(e._id);
                                        else {
                                          var r = a.tasks.indexOf(e._id);
                                          t.remove(r);
                                        }
                                      },
                                      icon: c.a.createElement(Kn.a, null),
                                      checkedIcon: c.a.createElement(
                                        Dn.a,
                                        null
                                      ),
                                    })
                                  );
                                }),
                              c.a.createElement("br", null),
                              c.a.createElement(
                                ce.a,
                                null,
                                c.a.createElement(
                                  re.a,
                                  {
                                    type: "submit",
                                    className: e.button,
                                    size: "large",
                                    variant: "contained",
                                    color: "primary",
                                  },
                                  "\u8ffd\u52a0"
                                )
                              )
                            );
                          },
                        })
                      );
                    }
                  )
                )
              )
            )
          );
        },
        Mn = Object(g.a)(function (e) {
          return Object(h.a)({ title: { fontSize: 23 } });
        }),
        Hn = function () {
          var e = Mn(),
            t = Object(l.b)(),
            a = Object(l.c)(ft);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              zn,
              {
                open: a,
                click: function () {
                  return t(at(!1));
                },
              },
              c.a.createElement(
                A.a,
                { maxWidth: "md" },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column" },
                  c.a.createElement(
                    W.a,
                    { mt: 5 },
                    c.a.createElement(
                      C.a,
                      { item: !0, style: { width: "35%" } },
                      c.a.createElement(
                        W.a,
                        { borderBottom: 1, className: e.title },
                        "\u4eca\u65e5\u884c\u3063\u305f\u30bf\u30b9\u30af"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ln = localStorage.token,
        Yn = Object(fe.b)(
          "attendance/today",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t, "/attendances/today"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Ln),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        qn = Object(fe.b)(
          "attendance/update",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/attendances/"
                              )
                              .concat(t.id),
                            t.attendance,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Ln),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Un = Object(fe.b)(
          "attendance/myAttendances",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/attendances")
                              .concat(
                                t.query
                                  ? "?year="
                                      .concat(t.query.year, "&month=")
                                      .concat(t.query.month)
                                  : ""
                              ),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Ln),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Gn = Object(fe.b)(
          "attendance/attendance",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/attendances/")
                              .concat(t.id),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Ln),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Xn = Object(fe.b)(
          "attendance/memberAttendance",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/users/")
                              .concat(t.userId, "/attendances")
                              .concat(
                                t.query
                                  ? "?year="
                                      .concat(t.query.year, "&month=")
                                      .concat(t.query.month)
                                  : ""
                              ),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Ln),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Jn = Object(fe.c)({
          name: "attendance",
          initialState: {
            today: {
              _id: "",
              startedAt: "",
              endedAt: "",
              restStartedAt: "",
              restEndedAt: "",
            },
            attendances: [],
            attendance: {
              data: {
                tasks: [],
                _id: "",
                user: "",
                workspace: "",
                createdAt: "",
                startedAt: "",
                endedAt: "",
                restStartedAt: "",
                restEndedAt: "",
                comment: "",
              },
              tasks: [],
            },
            selectedAttendance: "",
          },
          reducers: {
            setSelectedAttendance: function (e, t) {
              e.selectedAttendance = t.payload;
            },
            setAttendance: function (e, t) {
              e.attendance = t.payload;
            },
            setAttendances: function (e, t) {
              e.attendances = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(Yn.fulfilled, function (e, t) {
              e.today = t.payload.data;
            }),
              e.addCase(qn.fulfilled, function (e, t) {
                wt.b.info(
                  "\u52e4\u6020\u60c5\u5831\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                ),
                  (e.today = t.payload.data);
              }),
              e.addCase(Un.fulfilled, function (e, t) {
                e.attendances = t.payload.data;
              }),
              e.addCase(Gn.fulfilled, function (e, t) {
                (e.attendance.data = t.payload.data),
                  (e.attendance.tasks = t.payload.tasks);
              }),
              e.addCase(Xn.fulfilled, function (e, t) {
                e.attendances = t.payload.data;
              });
          },
        }),
        Qn = function (e) {
          return e.attendance.today;
        },
        $n = function (e) {
          return e.attendance.attendances;
        },
        Zn = function (e) {
          return e.attendance.selectedAttendance;
        },
        er = function (e) {
          return e.attendance.attendance;
        },
        tr = Jn.actions,
        ar = tr.setSelectedAttendance,
        nr = tr.setAttendance,
        rr = tr.setAttendances,
        cr = Jn.reducer,
        or = a(376),
        ir = a(375),
        lr = a(315),
        sr = a(238),
        mr = a.n(sr),
        ur = Object(g.a)(function (e) {
          return Object(h.a)({
            mainTitle: { width: "30%", fontSize: 23 },
            root: {
              borderRadius: 10,
              backgroundColor: p.VWORK_LIGHT_BLUE,
              marginTop: 25,
            },
            title: { fontSize: 18 },
            timeArea: { width: "100%", fontSize: 18 },
            appBar: {
              position: "relative",
              backgroundColor: p.VWORK_BLACK,
              boxShadow: "none",
            },
            dialogTitle: { fontSize: 30, paddingLeft: 2 },
            dialogText: { fontSize: 20 },
            additionalButton: { borderRadius: 10, width: "10%", fontSize: 20 },
            todayUpdate: { marginBottom: 10 },
            textField: { width: "85%" },
            out: { borderRadius: 10, width: 150, fontSize: 20 },
          });
        }),
        dr = c.a.forwardRef(function (e, t) {
          return c.a.createElement(
            lr.a,
            Object.assign({ direction: "up", ref: t }, e)
          );
        }),
        pr = function () {
          var e = ur(),
            t = a(27),
            n = c.a.useState(!1),
            r = Object(b.a)(n, 2),
            o = r[0],
            i = r[1],
            s = Object(l.c)(Qn),
            m = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            p(qn({ id: s._id, attendance: { startedAt: t() } }))
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            p(
                              qn({
                                id: s._id,
                                attendance: { restStartedAt: t() },
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            d = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !window.confirm(
                              "\u4f11\u61a9\u3092\u7d42\u4e86\u3057\u307e\u3059\u304b\uff1f"
                            )
                          ) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            p(
                              qn({
                                id: s._id,
                                attendance: { restEndedAt: t() },
                              })
                            )
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            p = Object(l.b)(),
            f = Object(l.c)(pt),
            E = Object(l.c)(ft),
            g = Object(l.c)(Ka);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, className: e.mainTitle },
              "\u52e4\u6020\u7ba1\u7406"
            ),
            s._id
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(
                    ca.a,
                    { className: e.root },
                    c.a.createElement(
                      ir.a,
                      null,
                      c.a.createElement(
                        w.a,
                        {
                          className: e.title,
                          color: "textSecondary",
                          gutterBottom: !0,
                        },
                        t().format("YYYY\u5e74MM\u6708DD\u65e5")
                      ),
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          spacing: 5,
                          direction: "row",
                          className: e.timeArea,
                        },
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            "span",
                            { style: { fontWeight: 600 } },
                            "\u51fa\u793e"
                          ),
                          "\uff1a",
                          s.startedAt
                            ? t(s.startedAt).utcOffset("+09:00").format("HH:mm")
                            : ""
                        ),
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              "span",
                              { style: { fontWeight: 600 } },
                              "\u4f11\u61a9"
                            ),
                            "\uff1a",
                            s.restStartedAt
                              ? t(s.restStartedAt)
                                  .utcOffset("+09:00")
                                  .format("HH:mm") + " ~ "
                              : "",
                            s.restEndedAt
                              ? t(s.restEndedAt)
                                  .utcOffset("+09:00")
                                  .format("HH:mm")
                              : ""
                          )
                        ),
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            "span",
                            { style: { fontWeight: 600 } },
                            "\u9000\u793e"
                          ),
                          "\uff1a",
                          s.endedAt
                            ? t(s.endedAt).utcOffset("+09:00").format("HH:mm")
                            : ""
                        )
                      )
                    ),
                    c.a.createElement(
                      or.a,
                      null,
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "row",
                          justify: "flex-end",
                        },
                        c.a.createElement(
                          W.a,
                          { mr: 1 },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              re.a,
                              {
                                size: "small",
                                variant: "contained",
                                color: "primary",
                                disabled: !!s.startedAt,
                                onClick: m,
                              },
                              "\u51fa\u793e"
                            )
                          )
                        ),
                        c.a.createElement(
                          W.a,
                          { mr: 1 },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            s.restStartedAt
                              ? ""
                              : c.a.createElement(
                                  re.a,
                                  {
                                    size: "small",
                                    variant: "contained",
                                    disabled:
                                      !s.startedAt ||
                                      !!s.restStartedAt ||
                                      !!s.endedAt,
                                    color: "primary",
                                    onClick: u,
                                  },
                                  "\u4f11\u61a9"
                                ),
                            s.restStartedAt
                              ? c.a.createElement(
                                  re.a,
                                  {
                                    size: "small",
                                    variant: "contained",
                                    disabled:
                                      !s.startedAt ||
                                      !!s.restEndedAt ||
                                      !!s.endedAt,
                                    color: "secondary",
                                    onClick: d,
                                  },
                                  "\u4f11\u61a9\u7d42\u4e86"
                                )
                              : ""
                          )
                        ),
                        c.a.createElement(
                          W.a,
                          { mr: 1 },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              re.a,
                              {
                                size: "small",
                                variant: "contained",
                                color: "primary",
                                onClick: function () {
                                  i(!0);
                                },
                                disabled:
                                  !s.startedAt ||
                                  !!s.endedAt ||
                                  (!!s.restStartedAt && !s.restEndedAt),
                              },
                              "\u9000\u793e"
                            )
                          )
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    ee.a,
                    { fullScreen: !0, open: o, TransitionComponent: dr },
                    c.a.createElement(
                      v.a,
                      { className: e.appBar },
                      c.a.createElement(
                        O.a,
                        null,
                        c.a.createElement(
                          x.a,
                          {
                            edge: "start",
                            color: "inherit",
                            onClick: function () {
                              i(!1);
                            },
                            "aria-label": "close",
                          },
                          c.a.createElement(mr.a, null)
                        ),
                        c.a.createElement("img", {
                          src: "".concat("", "/images/logo192.png"),
                          style: { height: 25 },
                          className: "imgstyle",
                          alt: "icon",
                        }),
                        c.a.createElement(
                          w.a,
                          { variant: "h6", className: e.dialogTitle },
                          "VWORK"
                        )
                      )
                    ),
                    c.a.createElement(
                      W.a,
                      { mt: 10 },
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "column",
                          className: e.dialogText,
                        },
                        c.a.createElement(
                          A.a,
                          { maxWidth: "lg" },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            "\u52e4\u52d9\u304a\u75b2\u308c\u3055\u307e\u3067\u3057\u305f"
                          ),
                          c.a.createElement(
                            W.a,
                            { mt: 7 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(
                                C.a,
                                { container: !0, direction: "column" },
                                c.a.createElement(
                                  C.a,
                                  { item: !0 },
                                  "\u4eca\u65e5\u884c\u3063\u305f\u30bf\u30b9\u30af\u306e\u78ba\u8a8d\u3092\u3057\u3066\u4e0b\u3055\u3044\u3002"
                                ),
                                c.a.createElement(
                                  W.a,
                                  { mt: 3 },
                                  c.a.createElement(
                                    C.a,
                                    { item: !0 },
                                    c.a.createElement(
                                      re.a,
                                      {
                                        className: e.additionalButton,
                                        onClick: function () {
                                          return p(tt(!0));
                                        },
                                        variant: "contained",
                                        color: "secondary",
                                      },
                                      "\u8ffd\u52a0"
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              w.a,
                              { variant: "h5" },
                              c.a.createElement(
                                "span",
                                { className: "vwork-red" },
                                g && g.length > 0 ? g.length : "0",
                                "\u4ef6"
                              ),
                              "\u306e\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u6e08"
                            )
                          ),
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              W.a,
                              { mt: 3 },
                              c.a.createElement(
                                ue.d,
                                {
                                  initialValues: { comment: "" },
                                  validationSchema: pe.b().shape({}),
                                  onSubmit: (function () {
                                    var e = Object(ne.a)(
                                      ae.a.mark(function e(a, n) {
                                        return ae.a.wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  n.setSubmitting(!1),
                                                  (e.next = 3),
                                                  p(
                                                    qn({
                                                      id: s._id,
                                                      attendance: {
                                                        endedAt: t(),
                                                        comment: a.comment,
                                                        tasks: g,
                                                      },
                                                    })
                                                  )
                                                );
                                              case 3:
                                                i(!1);
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t, a) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                },
                                function (t) {
                                  return c.a.createElement(
                                    ue.c,
                                    null,
                                    c.a.createElement(
                                      Cn.a,
                                      { className: e.textField },
                                      c.a.createElement(ue.a, {
                                        component: de.c,
                                        name: "comment",
                                        variant: "outlined",
                                        label:
                                          "\u4eca\u65e5\u306e\u632f\u308a\u8fd4\u308a",
                                        margin: "normal",
                                        fullWidth: !0,
                                        multiline: !0,
                                        id: "comment",
                                        value: t.values.comment,
                                        rows: 4,
                                      })
                                    ),
                                    c.a.createElement(
                                      W.a,
                                      { mt: 10, mr: 4 },
                                      c.a.createElement(
                                        C.a,
                                        {
                                          container: !0,
                                          direction: "row",
                                          justify: "flex-end",
                                        },
                                        c.a.createElement(
                                          re.a,
                                          {
                                            type: "submit",
                                            variant: "contained",
                                            color: "primary",
                                            className: e.out,
                                          },
                                          "\u9000\u52e4\u3059\u308b"
                                        )
                                      )
                                    )
                                  );
                                }
                              )
                            )
                          )
                        )
                      )
                    ),
                    f ? c.a.createElement(Pn, null) : "",
                    E ? c.a.createElement(Hn, null) : ""
                  )
                )
              : ""
          );
        },
        fr = a(239),
        br = a.n(fr),
        Er = a(240),
        gr = a.n(Er),
        hr = a(241),
        vr = a.n(hr),
        jr = a(242),
        kr = a.n(jr),
        Or = a(243),
        wr = a.n(Or),
        yr = a(244),
        xr = a.n(yr),
        Cr = Object(g.a)({
          icon: { fontSize: 55 },
          iconArea: { color: "white", height: 150, borderRadius: 8 },
          contentWidth: { width: 150 },
        }),
        Nr = function (e) {
          var t = e.id,
            a = e.name,
            n = e.bgColor,
            r = e.iconNum,
            o = Cr(),
            i = [
              c.a.createElement(br.a, { className: o.icon }),
              c.a.createElement(gr.a, { className: o.icon }),
              c.a.createElement(F.a, { className: o.icon }),
              c.a.createElement(vr.a, { className: o.icon }),
              c.a.createElement(kr.a, { className: o.icon }),
              c.a.createElement(wr.a, { className: o.icon }),
              c.a.createElement(xr.a, { className: o.icon }),
            ];
          return c.a.createElement(
            s.b,
            { to: "/project/".concat(t) },
            c.a.createElement(
              W.a,
              { className: o.contentWidth, mr: 3, mb: 3 },
              c.a.createElement(
                C.a,
                { container: !0, direction: "column" },
                c.a.createElement(
                  C.a,
                  {
                    item: !0,
                    container: !0,
                    justify: "center",
                    alignItems: "center",
                    className: Object(y.a)(o.iconArea, o.contentWidth),
                    style: { backgroundColor: n },
                  },
                  i[r]
                ),
                c.a.createElement(
                  C.a,
                  { item: !0, className: o.contentWidth },
                  c.a.createElement(
                    W.a,
                    { textAlign: "center" },
                    c.a.createElement(w.a, null, a)
                  )
                )
              )
            )
          );
        },
        Ar = a(106),
        Tr = a.n(Ar),
        Sr = Object(g.a)({
          title: { fontSize: 23, width: "30%" },
          contentWidth: { width: 150 },
          icon: { fontSize: 55 },
          iconStyle: {
            borderStyle: "dotted",
            borderRadius: 8,
            height: 150,
            cursor: "pointer",
          },
          iconArea: { height: 150, borderRadius: 8 },
        }),
        Ir = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = e.selected,
            r = Sr(),
            o = Object(l.b)(),
            i = Object(l.c)(dn),
            s = Object(l.c)(un),
            m = n ? i : s;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, mt: 7, mb: 4, className: r.title },
              a
            ),
            c.a.createElement(
              C.a,
              { container: !0, justify: "flex-start" },
              c.a.createElement(
                W.a,
                {
                  className: Object(y.a)(r.contentWidth, r.iconStyle),
                  mr: 3,
                  mb: 3,
                  onClick: function () {
                    return o(Xe(!0));
                  },
                },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column" },
                  c.a.createElement(
                    C.a,
                    {
                      item: !0,
                      container: !0,
                      justify: "center",
                      alignItems: "center",
                      className: Object(y.a)(r.iconArea, r.contentWidth),
                    },
                    c.a.createElement(Tr.a, { style: { fontSize: 100 } })
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0, className: r.contentWidth },
                    c.a.createElement(
                      W.a,
                      { textAlign: "center" },
                      c.a.createElement(
                        w.a,
                        null,
                        "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210"
                      )
                    )
                  )
                )
              ),
              m.map(function (e) {
                return c.a.createElement(Nr, {
                  id: e._id,
                  name: e.name,
                  bgColor: d[e.color],
                  iconNum: e.icon,
                  key: e._id,
                });
              })
            )
          );
        },
        Wr = a(188),
        Rr = a.n(Wr),
        _r = a(258),
        zr = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            appBar: {
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              boxShadow: "none",
            },
            appBarShift: {
              width: "calc(100% - ".concat(240, "px)"),
              marginLeft: 240,
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            hide: { display: "none" },
            menuIcon: { fontSize: 40, color: p.VWORK_GRAY },
            title: { color: p.VWORK_GRAY },
            addIcon: { fontSize: 45 },
            icon: { paddingLeft: 0 },
          });
        }),
        Br = Object(xn.a)({ paper: { border: "1px solid #d3d4d5" } })(function (
          e
        ) {
          return c.a.createElement(
            _r.a,
            Object.assign(
              {
                elevation: 0,
                getContentAnchorEl: null,
                anchorOrigin: { vertical: "bottom", horizontal: "left" },
                transformOrigin: { vertical: "top", horizontal: "center" },
              },
              e
            )
          );
        }),
        Kr = Object(xn.a)(function (e) {
          return {
            root: {
              "&:focus": {
                backgroundColor: p.VWORK_WHITE,
                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                  color: p.VWORK_WHITE,
                },
              },
            },
          };
        })(Tn.a),
        Vr = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = zr(),
            r = Object(l.b)(),
            o = Object(l.c)(Rt),
            i = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r(At());
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            m = c.a.useState(null),
            u = Object(b.a)(m, 2),
            d = u[0],
            f = u[1],
            g = c.a.useState(null),
            h = Object(b.a)(g, 2),
            j = h[0],
            T = h[1],
            S = Object(l.c)(ot);
          return c.a.createElement(
            "div",
            { className: n.root },
            c.a.createElement(
              A.a,
              null,
              c.a.createElement(
                v.a,
                {
                  style: { backgroundColor: "#fafafa" },
                  position: "fixed",
                  className: Object(y.a)(
                    n.appBar,
                    Object(E.a)({}, n.appBarShift, S)
                  ),
                },
                c.a.createElement(
                  O.a,
                  null,
                  c.a.createElement(
                    x.a,
                    {
                      color: "inherit",
                      "aria-label": "open drawer",
                      onClick: function () {
                        return r(Ge(!0));
                      },
                      edge: "start",
                      className: Object(y.a)(S && n.hide),
                    },
                    c.a.createElement(k.a, { className: n.menuIcon })
                  ),
                  c.a.createElement(
                    C.a,
                    {
                      container: !0,
                      direction: "row",
                      justify: "space-between",
                      alignItems: "center",
                    },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        w.a,
                        { variant: "h6", className: n.title, noWrap: !0 },
                        a
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "row",
                          justify: "flex-end",
                          alignItems: "center",
                        },
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            x.a,
                            {
                              "aria-label": "add",
                              onClick: function (e) {
                                f(e.currentTarget);
                              },
                              style: { padding: 0, paddingRight: 10 },
                            },
                            c.a.createElement(Rr.a, { className: n.addIcon })
                          )
                        ),
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            x.a,
                            {
                              onClick: function (e) {
                                T(e.currentTarget);
                              },
                              style: { padding: 0, paddingRight: 10 },
                            },
                            c.a.createElement(
                              N.a,
                              null,
                              o ? o.name.slice(0, 1) : ""
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            c.a.createElement(
              Br,
              {
                id: "customized-menu",
                anchorEl: d,
                keepMounted: !0,
                open: Boolean(d),
                onClick: function () {
                  f(null);
                },
              },
              c.a.createElement(
                Kr,
                {
                  onClick: function () {
                    return r(Ze(!0));
                  },
                },
                "\u30bf\u30b9\u30af\u8ffd\u52a0"
              ),
              c.a.createElement(
                Kr,
                {
                  onClick: function () {
                    return r(Xe(!0));
                  },
                },
                "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8ffd\u52a0"
              ),
              c.a.createElement(
                Kr,
                {
                  onClick: function () {
                    return r(Je(!0));
                  },
                },
                "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85"
              )
            ),
            c.a.createElement(
              Br,
              {
                id: "customized-menu",
                anchorEl: j,
                keepMounted: !0,
                open: Boolean(j),
                onClick: function () {
                  T(null);
                },
              },
              c.a.createElement(
                Kr,
                {
                  onClick: function () {
                    return r(Qe(!0));
                  },
                },
                "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u8a2d\u5b9a"
              ),
              c.a.createElement(
                s.b,
                {
                  to: "/workspaces",
                  style: { textDecoration: "none", color: p.VWORK_BLACK },
                },
                c.a.createElement(Kr, null, "\u4ed6\u306eworkspace ")
              ),
              c.a.createElement(
                Kr,
                { onClick: i },
                "\u30ed\u30b0\u30a2\u30a6\u30c8"
              )
            )
          );
        },
        Dr = localStorage.token,
        Fr = Object(fe.b)(
          "dashboard/invite",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.post(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/members"),
                            { invitations: t.invitations },
                            { headers: { Authorization: "Bearer ".concat(Dr) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Pr = Object(fe.b)(
          "dashboard/updateProfile",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/users/")
                              .concat(t.userId, "/profile"),
                            t.bodyData,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Dr),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Mr = Object(fe.c)({
          name: "dashboard",
          initialState: { owner: !1, workspace: "", selectedMembers: [] },
          reducers: {
            setWorkspace: function (e, t) {
              e.workspace = t.payload;
            },
            setSelectedMembers: function (e, t) {
              e.selectedMembers = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(Fr.fulfilled, function (e, t) {
              wt.b.info(
                "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002",
                { position: wt.b.POSITION.TOP_CENTER }
              );
            }),
              e.addCase(Fr.rejected, function (e, t) {
                wt.b.error(
                  "\u62db\u5f85\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(Pr.fulfilled, function (e, t) {
                wt.b.info(
                  "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(Pr.rejected, function (e, t) {
                wt.b.error(
                  "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
                  { position: wt.b.POSITION.TOP_CENTER }
                );
              });
          },
        }),
        Hr = Mr.actions,
        Lr = (Hr.setWorkspace, Hr.setSelectedMembers),
        Yr = function (e) {
          return e.dashboard.selectedMembers;
        },
        qr = Mr.reducer,
        Ur = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(Rt),
            a = Object(l.c)(Wa),
            n = Object(l.c)(Ba),
            o = Object(l.c)(za),
            i = Object(l.c)(zt),
            s = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Yn(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                e(Lr([t]));
              },
              [e, t, a]
            ),
            Object(r.useEffect)(
              function () {
                i && s(i);
              },
              [i, s]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(Vr, { title: "\u30db\u30fc\u30e0" }),
                c.a.createElement(pr, null),
                n && n.length > 0
                  ? c.a.createElement(Wn, {
                      title: "\u671f\u9650\u304c\u8fd1\u3044\u30bf\u30b9\u30af",
                      iconType: "alert",
                      taskData: n,
                    })
                  : "",
                o && o.length > 0
                  ? c.a.createElement(Wn, {
                      title:
                        "\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30bf\u30b9\u30af",
                      taskData: o,
                    })
                  : "",
                c.a.createElement(Ir, {
                  title:
                    "\u53c2\u52a0\u3057\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
                })
              )
            )
          );
        },
        Gr = a(384),
        Xr = a(379),
        Jr = a(191),
        Qr = a.n(Jr),
        $r = a(245),
        Zr = a.n($r),
        ec = a(192),
        tc = a(386),
        ac = a(377),
        nc = a(38),
        rc = function (e) {
          var t = e.userId,
            a = Object(r.useState)(new Date()),
            n = Object(b.a)(a, 2),
            o = n[0],
            i = n[1],
            s = Object(r.useState)(ha()().format("M")),
            m = Object(b.a)(s, 2),
            u = m[0],
            d = m[1],
            p = Object(l.c)(zt),
            f = Object(l.b)(),
            E = window.location.pathname,
            g = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a, n, r) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!E.includes("members")) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3),
                              f(
                                Xn({
                                  userId: t || "",
                                  workspace: a,
                                  query: { year: n, month: r },
                                })
                              )
                            );
                          case 3:
                            e.next = 7;
                            break;
                          case 5:
                            return (
                              (e.next = 7),
                              f(
                                Un({
                                  workspace: a,
                                  query: { year: n, month: r },
                                })
                              )
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [f, t, E]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { mt: 10 },
              c.a.createElement(
                C.a,
                {
                  container: !0,
                  direction: "row",
                  justify: "flex-end",
                  alignItems: "center",
                },
                c.a.createElement(
                  C.a,
                  { item: !0 },
                  c.a.createElement(
                    nc.a,
                    { utils: ec.a, locale: tc.a },
                    c.a.createElement(ac.a, {
                      openTo: "month",
                      views: ["year", "month"],
                      label: "\u7d5e\u308a\u8fbc\u3080",
                      value: o,
                      onChange: function (e) {
                        var t = ha()(e).format("YYYY"),
                          a = ha()(e).format("MM");
                        d(a);
                        var n = ha()(
                          "".concat(t, "-").concat(a, "-01")
                        ).toDate();
                        i(n), g(p, t, a);
                      },
                      format: "yyyy\u5e74MM\u6708",
                    })
                  )
                )
              ),
              c.a.createElement(
                W.a,
                { borderBottom: 1 },
                c.a.createElement(
                  w.a,
                  { variant: "h5" },
                  Number(u),
                  "\u6708\u306e\u52e4\u6020\u60c5\u5831"
                )
              )
            )
          );
        },
        cc = a(190),
        oc = a.n(cc),
        ic = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { minWidth: 275, borderRadius: 10, marginTop: 25 },
            title: { fontSize: 18 },
            time: { marginRight: 30 },
            space: { marginTop: 20 },
            task: { fontSize: 20 },
          });
        }),
        lc = function (e) {
          var t = e.attendance,
            a = ic(),
            n = Object(l.b)(),
            r = ha()(t.startedAt).utcOffset("+09:00"),
            o = ha()(t.endedAt).utcOffset("+09:00"),
            i = Math.round(o.diff(r, "minute", !0)),
            s = ha()(t.restStartedAt).utcOffset("+09:00"),
            m = ha()(t.restEndedAt).utcOffset("+09:00"),
            u = i - Math.round(m.diff(s, "minute", !0)),
            d = Math.round(u / 60),
            p = u % 60;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              ca.a,
              { className: a.root },
              c.a.createElement(
                ra.a,
                {
                  onClick: function () {
                    n(ar(t._id)), n(et(!0));
                  },
                },
                c.a.createElement(
                  A.a,
                  null,
                  c.a.createElement(
                    W.a,
                    { pt: 2, pb: 3 },
                    c.a.createElement(
                      C.a,
                      { container: !0, direction: "column" },
                      c.a.createElement(
                        C.a,
                        { item: !0, className: a.space },
                        c.a.createElement(
                          W.a,
                          { borderBottom: 1 },
                          c.a.createElement(
                            w.a,
                            { variant: "h5" },
                            ha()(t.createdAt)
                              .utcOffset("+09:00")
                              .format("YYYY\u5e74MM\u6708DD\u65e5")
                          )
                        )
                      ),
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          C.a,
                          {
                            container: !0,
                            direction: "row",
                            justify: "space-between",
                            alignItems: "center",
                          },
                          c.a.createElement(
                            C.a,
                            { item: !0, style: { width: "90%" } },
                            c.a.createElement(
                              C.a,
                              {
                                container: !0,
                                direction: "row",
                                alignItems: "center",
                                className: Object(y.a)(a.title, a.space),
                              },
                              c.a.createElement(
                                C.a,
                                { item: !0, className: a.time },
                                c.a.createElement(
                                  "span",
                                  { style: { fontWeight: 600 } },
                                  "\u51fa\u793e"
                                ),
                                ":",
                                t.startedAt
                                  ? ha()(t.startedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : ""
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0, className: a.time },
                                c.a.createElement(
                                  "span",
                                  { style: { fontWeight: 600 } },
                                  "\u4f11\u61a9"
                                ),
                                ":",
                                t.restStartedAt
                                  ? ha()(t.restStartedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : "",
                                "~",
                                t.restEndedAt
                                  ? ha()(t.restEndedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : ""
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0, className: a.time },
                                c.a.createElement(
                                  "span",
                                  { style: { fontWeight: 600 } },
                                  "\u9000\u793e"
                                ),
                                ":",
                                t.endedAt
                                  ? ha()(t.endedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : ""
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0, className: a.time },
                                c.a.createElement(
                                  "span",
                                  { style: { fontWeight: 600 } },
                                  "\u3010\u52e4\u52d9\u6642\u9593"
                                ),
                                ":",
                                ""
                                  .concat(d, "\u6642\u9593")
                                  .concat(p, "\u5206"),
                                "\u3011"
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          C.a,
                          {
                            container: !0,
                            direction: "row",
                            justify: "flex-start",
                            alignItems: "center",
                          },
                          c.a.createElement(
                            W.a,
                            { mr: 3 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement($a.a, { color: "secondary" })
                            )
                          ),
                          c.a.createElement(
                            C.a,
                            { item: !0, className: a.task },
                            c.a.createElement(
                              w.a,
                              { variant: "body1" },
                              t.tasks && t.tasks.length,
                              "\u4ef6\u306e\u30bf\u30b9\u30af\u306b\u5bfe\u5fdc"
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          W.a,
                          { mt: 3 },
                          c.a.createElement(
                            C.a,
                            {
                              container: !0,
                              direction: "row",
                              justify: "flex-start",
                            },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(
                                W.a,
                                { mr: 3 },
                                c.a.createElement(oc.a, { color: "secondary" })
                              )
                            ),
                            c.a.createElement(
                              C.a,
                              { item: !0, style: { width: "90%" } },
                              c.a.createElement(
                                w.a,
                                { variant: "body1" },
                                t.comment
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        sc = function (e) {
          var t = e.attendances;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              C.a,
              { container: !0, direction: "column", justify: "flex-start" },
              c.a.createElement(
                C.a,
                { item: !0 },
                t &&
                  t.map(function (e, t) {
                    return c.a.createElement(lc, { key: t, attendance: e });
                  })
              )
            )
          );
        },
        mc = function () {
          var e = Object(m.h)().memberId,
            t = Object(l.c)(zt),
            a = Object(l.b)(),
            n = Object(l.c)($n),
            o = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(t, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), a(Xn({ userId: n, workspace: t }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [a]
            );
          return (
            Object(r.useEffect)(
              function () {
                t && o(t, e);
              },
              [o, t, e]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(rc, { userId: e }),
              c.a.createElement(sc, { attendances: n })
            )
          );
        },
        uc = function () {
          var e = Object(m.h)().memberId,
            t = Object(l.c)(zt),
            a = Object(l.b)(),
            n = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(t, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), a(sn({ workspace: t, userId: n }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [a]
            );
          return (
            Object(r.useEffect)(
              function () {
                t && n(t, e);
              },
              [n, t, e]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Ir, {
                title:
                  "\u53c2\u52a0\u3057\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
                selected: !0,
              })
            )
          );
        },
        dc = function () {
          var e = Object(m.h)().memberId,
            t = Object(l.b)(),
            a = Object(l.c)(zt),
            n = Object(l.c)(Wa),
            o = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), t(Aa({ workspace: a, userId: n }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [t]
            );
          return (
            Object(r.useEffect)(
              function () {
                a && o(a, e);
              },
              [o, a, e]
            ),
            Object(r.useEffect)(
              function () {
                return function () {
                  t(
                    Ha({
                      tasks: {
                        _id: "",
                        count: 0,
                        countTodaysTask: 0,
                        data: [],
                        todaysTasks: [],
                      },
                    })
                  );
                };
              },
              [t]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Wn, {
                title: "\u30bf\u30b9\u30af\u4e00\u89a7",
                taskData: n.data,
              })
            )
          );
        },
        pc = localStorage.token,
        fc = Object(fe.b)(
          "member/all",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t, "/users"),
                            { headers: { Authorization: "Bearer ".concat(pc) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        bc = Object(fe.b)(
          "member/single",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspaceId, "/users/")
                              .concat(t.id),
                            { headers: { Authorization: "Bearer ".concat(pc) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Ec = Object(fe.c)({
          name: "member",
          initialState: {
            members: [],
            member: {
              user: { name: "", email: "" },
              profile: { position: "" },
            },
          },
          reducers: {
            setMembers: function (e, t) {
              e.members = t.payload;
            },
            setMember: function (e, t) {
              e.member = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(fc.fulfilled, function (e, t) {
              e.members = t.payload.users;
            }),
              e.addCase(fc.rejected, function (e, t) {
                window.location.href = "/";
              }),
              e.addCase(bc.fulfilled, function (e, t) {
                (e.member.user = t.payload.user),
                  (e.member.profile = t.payload.profile);
              }),
              e.addCase(bc.rejected, function (e, t) {
                window.location.href = "/";
              });
          },
        }),
        gc = function (e) {
          return e.member.members;
        },
        hc = function (e) {
          return e.member.member;
        },
        vc = (Ec.actions.setMembers, Ec.actions.setMember, Ec.reducer),
        jc = Object(g.a)(function (e) {
          return Object(h.a)({
            profile: { fontSize: 20 },
            profileTitle: { color: "#9e9e9e" },
            profileItem: { margin: 0 },
          });
        }),
        kc = function () {
          var e = jc(),
            t = Object(l.b)(),
            a = Object(l.c)(hc),
            n = Object(m.h)().memberId,
            o = Object(l.c)(zt),
            i = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), t(bc({ workspaceId: a, id: n }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [t, n]
            );
          return (
            Object(r.useEffect)(
              function () {
                o && i(o);
              },
              [i, o]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                C.a,
                { item: !0 },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "row", spacing: 5 },
                  c.a.createElement(
                    C.a,
                    { item: !0, className: e.profile },
                    c.a.createElement(
                      "dl",
                      null,
                      c.a.createElement(
                        "dt",
                        { className: e.profileTitle },
                        "\u6c0f\u540d"
                      ),
                      c.a.createElement(
                        "dd",
                        { className: e.profileItem },
                        a.user.name
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0, className: e.profile },
                    c.a.createElement(
                      "dl",
                      null,
                      c.a.createElement(
                        "dt",
                        { className: e.profileTitle },
                        "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"
                      ),
                      c.a.createElement(
                        "dd",
                        { className: e.profileItem },
                        a.user.email
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0, className: e.profile },
                    c.a.createElement(
                      "dl",
                      null,
                      c.a.createElement(
                        "dt",
                        { className: e.profileTitle },
                        "\u5f79\u8077\u30fb\u62c5\u5f53"
                      ),
                      c.a.createElement(
                        "dd",
                        { className: e.profileItem },
                        a.profile && a.profile.position
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Oc = Object(g.a)(function (e) {
          return Object(h.a)({
            tabs: { backgroundColor: "#fafafa", width: "60%" },
          });
        }),
        wc = function () {
          var e = Oc(),
            t = Object(l.b)(),
            a = Object(m.h)().memberId,
            n = Object(m.g)();
          Object(r.useEffect)(function () {
            return function () {
              t(rr([]));
            };
          });
          var o;
          Object(r.useEffect)(
            function () {
              return function () {
                t(kn([]));
              };
            },
            [t]
          );
          var i = window.location.pathname;
          return (
            (o = i.includes("project") ? 1 : i.includes("task") ? 2 : 0),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Vr, {
                title: "\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406",
              }),
              c.a.createElement(
                x.a,
                {
                  onClick: function () {
                    n.push("/members");
                  },
                },
                c.a.createElement(Zr.a, null)
              ),
              c.a.createElement(
                C.a,
                { container: !0, direction: "column" },
                c.a.createElement(
                  A.a,
                  null,
                  c.a.createElement(kc, null),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      W.a,
                      { mt: 5 },
                      c.a.createElement(
                        Gr.a,
                        {
                          value: o,
                          onChange: function (e, t) {
                            return {};
                          },
                          variant: "fullWidth",
                          indicatorColor: "secondary",
                          textColor: "secondary",
                          "aria-label": "icon label tabs example",
                          className: e.tabs,
                        },
                        c.a.createElement(Xr.a, {
                          icon: c.a.createElement(Q.a, null),
                          label: "\u52e4\u6020\u60c5\u5831",
                          onClick: function () {
                            n.push("/members/".concat(a));
                          },
                        }),
                        c.a.createElement(Xr.a, {
                          icon: c.a.createElement(Qr.a, null),
                          label: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
                          onClick: function () {
                            n.push("/members/".concat(a, "/project"));
                          },
                        }),
                        c.a.createElement(Xr.a, {
                          icon: c.a.createElement(X.a, null),
                          label: "\u30bf\u30b9\u30af",
                          onClick: function () {
                            n.push("/members/".concat(a, "/task"));
                          },
                        })
                      )
                    ),
                    c.a.createElement(
                      m.d,
                      null,
                      c.a.createElement(
                        m.b,
                        { path: "/members/:memberId", exact: !0 },
                        c.a.createElement(mc, null)
                      ),
                      c.a.createElement(
                        m.b,
                        { path: "/members/:memberId/project", exact: !0 },
                        c.a.createElement(uc, null)
                      ),
                      c.a.createElement(
                        m.b,
                        { path: "/members/:memberId/task", exact: !0 },
                        c.a.createElement(dc, null)
                      )
                    )
                  )
                )
              )
            )
          );
        },
        yc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(zt),
            a = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function a() {
                  return ae.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), e(an(t));
                        case 2:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              ),
              [e, t]
            );
          return (
            Object(r.useEffect)(
              function () {
                t && a();
              },
              [a, t]
            ),
            Object(r.useEffect)(
              function () {
                return function () {
                  e(kn([]));
                };
              },
              [e]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Vr, {
                title: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7ba1\u7406",
              }),
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(Ir, {
                  title:
                    "\u5168\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
                  selected: !0,
                })
              )
            )
          );
        },
        xc = Object(g.a)(function (e) {
          return {
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { marginTop: "16px", marginBottom: "8px", height: "56px" },
          };
        }),
        Cc = function () {
          var e = xc(),
            t = Object(l.b)(),
            a = Object(l.c)(zt);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, width: "90%" },
              c.a.createElement(
                w.a,
                { variant: "h5", component: "h2" },
                "\u57fa\u672c\u60c5\u5831\u7de8\u96c6"
              )
            ),
            c.a.createElement(
              ue.d,
              {
                initialValues: { name: "" },
                validationSchema: pe
                  .b()
                  .shape({
                    name: pe
                      .c()
                      .required(
                        "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                  }),
                onSubmit: (function () {
                  var e = Object(ne.a)(
                    ae.a.mark(function e(n, r) {
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t(ma({ workspace: a, bodyData: n }))
                              );
                            case 2:
                              return (e.next = 4), t(Nt());
                            case 4:
                              r.resetForm({});
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              c.a.createElement(
                ue.c,
                { className: e.form },
                c.a.createElement(
                  C.a,
                  { container: !0, spacing: 3 },
                  c.a.createElement(
                    C.a,
                    { item: !0, xs: 6 },
                    c.a.createElement(ue.a, {
                      component: de.c,
                      name: "name",
                      label:
                        "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u540d*",
                      variant: "outlined",
                      margin: "normal",
                      fullWidth: !0,
                      id: "name",
                    })
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      re.a,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: e.submit,
                      },
                      "\u66f4\u65b0\u3059\u308b"
                    )
                  )
                )
              )
            )
          );
        },
        Nc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(gc),
            a = Object(l.c)(zt),
            n = Object(l.c)(Pt),
            o = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(fc(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          Object(r.useEffect)(
            function () {
              a && o(a);
            },
            [o, a]
          );
          var i = (function () {
              var t = Object(ne.a)(
                ae.a.mark(function t(n) {
                  return ae.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e(ma({ workspace: a, bodyData: { toOwner: n } }))
                          );
                        case 2:
                          return (t.next = 4), e(Nt());
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            s = (function () {
              var t = Object(ne.a)(
                ae.a.mark(function t(n) {
                  return ae.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e(ma({ workspace: a, bodyData: { toMember: n } }))
                          );
                        case 2:
                          return (t.next = 4), e(Nt());
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, width: "90%", mb: 2 },
              c.a.createElement(
                w.a,
                { variant: "h5", component: "h2" },
                "\u30e1\u30f3\u30d0\u30fc\u8a2d\u5b9a"
              )
            ),
            t.length > 0 &&
              t.map(function (e, t) {
                return c.a.createElement(
                  W.a,
                  { mb: 2, key: t },
                  c.a.createElement(
                    C.a,
                    { container: !0, alignItems: "center" },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(w.a, { variant: "h6" }, e.name)
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      "\uff08",
                      n.includes(e._id)
                        ? "\u7ba1\u7406\u8005"
                        : "\u30e1\u30f3\u30d0\u30fc",
                      "\uff09"
                    ),
                    n.includes(e._id)
                      ? c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            re.a,
                            {
                              variant: "outlined",
                              color: "secondary",
                              onClick: function () {
                                return s(e._id);
                              },
                            },
                            "\u30e1\u30f3\u30d0\u30fc\u306b\u5909\u66f4\u3059\u308b"
                          )
                        )
                      : c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            re.a,
                            {
                              variant: "outlined",
                              color: "primary",
                              onClick: function () {
                                return i(e._id);
                              },
                            },
                            "\u7ba1\u7406\u8005\u306b\u5909\u66f4\u3059\u308b"
                          )
                        )
                  )
                );
              })
          );
        },
        Ac = function () {
          return c.a.createElement(
            A.a,
            null,
            c.a.createElement(Vr, {
              title: "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u7ba1\u7406",
            }),
            c.a.createElement(W.a, null, c.a.createElement(Cc, null)),
            c.a.createElement(W.a, { mt: 5 }, c.a.createElement(Nc, null))
          );
        },
        Tc = a(246),
        Sc = a.n(Tc),
        Ic = localStorage.token,
        Wc = Object(fe.b)(
          "notification/getAll",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.get(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t, "/notifications"),
                            { headers: { Authorization: "Bearer ".concat(Ic) } }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        Rc = Object(fe.b)(
          "notification/updateNotification",
          (function () {
            var e = Object(ne.a)(
              ae.a.mark(function e(t) {
                var a;
                return ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ee.a.put(
                            ""
                              .concat(
                                "https://v-work.xyz/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspaceId, "/notifications/")
                              .concat(t.notificationId),
                            t.bodyData,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Ic),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        ),
        _c = Object(fe.c)({
          name: "notification",
          initialState: { notifications: [] },
          reducers: {},
          extraReducers: function (e) {
            e.addCase(Wc.fulfilled, function (e, t) {
              e.notifications = t.payload.data;
            }),
              e.addCase(Rc.fulfilled, function (e, t) {});
          },
        }),
        zc = function (e) {
          return e.notification.notifications;
        },
        Bc = _c.reducer,
        Kc = Object(g.a)(function (e) {
          return Object(h.a)({
            root: {
              width: "80%",
              borderRadius: 10,
              height: 80,
              marginBottom: 15,
              cursor: "pointer",
            },
            cardActionArea: { height: 80 },
            avatar: { backgroundColor: p.VWORK_RED },
          });
        }),
        Vc = function (e) {
          var t = e.data,
            a = Kc(),
            n = Object(l.b)(),
            o = Object(l.c)(zt),
            i = Object(l.c)(Rt),
            s = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n(
                              Rc({
                                workspaceId: o,
                                notificationId: t._id,
                                bodyData: { unread: !1 },
                              })
                            )
                          );
                        case 2:
                          return (e.next = 4), n(Wc(o));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [n, o, t]
            ),
            m = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n(Nt());
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [n]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              ca.a,
              { className: a.root },
              c.a.createElement(
                ra.a,
                {
                  className: a.cardActionArea,
                  onClick: function () {
                    s(), n(Lr([i])), n(Pa(t.task._id)), n($e(!0)), m();
                  },
                  "data-testid": "test",
                },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    alignItems: "center",
                    style: {
                      height: 80,
                      padding: "10px",
                      boxSizing: "border-box",
                    },
                    spacing: 2,
                  },
                  c.a.createElement(
                    C.a,
                    { item: !0, xs: 7 },
                    c.a.createElement(
                      C.a,
                      {
                        container: !0,
                        wrap: "nowrap",
                        direction: "row",
                        alignItems: "center",
                        spacing: 1,
                      },
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        t.unread
                          ? c.a.createElement(Sc.a, {
                              color: "primary",
                              fontSize: "large",
                            })
                          : c.a.createElement($a.a, {
                              color: "disabled",
                              fontSize: "large",
                            })
                      ),
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          w.a,
                          { variant: "body1" },
                          t.task.name
                        ),
                        1 === t.type
                          ? c.a.createElement(
                              w.a,
                              { variant: "body1" },
                              "\u65b0\u7740\u306e\u30b3\u30e1\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"
                            )
                          : c.a.createElement(
                              w.a,
                              { variant: "body1" },
                              "\u30bf\u30b9\u30af\u60c5\u5831\u304c\u66f4\u65b0\u3055\u308c\u307e\u3057\u305f\u3002"
                            )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    {
                      item: !0,
                      container: !0,
                      xs: !0,
                      alignItems: "center",
                      justify: "center",
                    },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      t.task.project && t.task.project.name
                        ? c.a.createElement(Za.a, {
                            label: t.task.project.name,
                            variant: "outlined",
                            color: "secondary",
                          })
                        : c.a.createElement(Za.a, {
                            label:
                              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u672a\u9078\u629e",
                            variant: "outlined",
                          })
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    {
                      item: !0,
                      container: !0,
                      xs: !0,
                      alignItems: "center",
                      spacing: 1,
                    },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        w.a,
                        null,
                        t.createdAt
                          ? ha()(t.createdAt).format("YYYY/MM/DD HH:mm")
                          : ""
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Dc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(zt),
            a = Object(l.c)(zc),
            n = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Wc(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                t && n(t);
              },
              [t, n]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                W.a,
                { my: 3 },
                a &&
                  a.map(function (e, t) {
                    return c.a.createElement(Vc, { key: t, data: e });
                  })
              )
            )
          );
        },
        Fc = function () {
          return c.a.createElement(
            A.a,
            null,
            c.a.createElement(Vr, {
              title: "\u53d7\u4fe1\u30dc\u30c3\u30af\u30b9",
            }),
            c.a.createElement(
              W.a,
              { borderBottom: 1, width: "90%" },
              c.a.createElement(
                w.a,
                { variant: "h5", component: "h2" },
                "\u53d7\u4fe1\u30ea\u30b9\u30c8"
              )
            ),
            c.a.createElement(Dc, null)
          );
        },
        Pc = a(329),
        Mc = Object(g.a)(function (e) {
          return Object(h.a)({
            button: {
              backgroundColor: p.VWORK_DARK_BLUE,
              width: 150,
              fontSize: 15,
            },
            margin: { margin: e.spacing(1) },
          });
        }),
        Hc = function () {
          var e = Mc(),
            t = Object(l.b)(),
            a = Object(l.c)(zt),
            n = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), t(Oa({ workspace: a, query: n }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [t]
            ),
            o = Object(l.c)(Va);
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              C.a,
              {
                container: !0,
                direction: "row",
                justify: "space-between",
                alignItems: "center",
                style: { paddingBottom: 0 },
              },
              c.a.createElement(
                C.a,
                { item: !0 },
                c.a.createElement(
                  re.a,
                  {
                    variant: "contained",
                    color: "secondary",
                    className: e.button,
                    startIcon: c.a.createElement(Tr.a, null),
                    onClick: function () {
                      return t(Ze(!0));
                    },
                    "data-testid": "test",
                  },
                  "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0"
                )
              ),
              c.a.createElement(
                C.a,
                { item: !0 },
                c.a.createElement(
                  Cn.a,
                  { className: e.margin },
                  c.a.createElement(
                    Pc.a,
                    { id: "task-state" },
                    "\u7d5e\u308a\u8fbc\u307f"
                  ),
                  c.a.createElement(
                    Nn.a,
                    {
                      id: "task-state",
                      onChange: function (e) {
                        t(Ya(e.target.value)), n(a, e.target.value);
                      },
                      style: { width: 200 },
                      value: o,
                    },
                    c.a.createElement(
                      Tn.a,
                      { value: "" },
                      "\u672a\u9078\u629e"
                    ),
                    c.a.createElement(Tn.a, { value: "0" }, "TODO"),
                    c.a.createElement(
                      Tn.a,
                      { value: "1" },
                      "\u9032\u884c\u4e2d"
                    ),
                    c.a.createElement(Tn.a, { value: "2" }, "\u5b8c\u4e86")
                  )
                )
              )
            )
          );
        },
        Lc = ["TODO", "\u9032\u884c\u4e2d", "\u5b8c\u4e86"],
        Yc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(zt),
            a = Object(l.c)(Wa),
            n = Object(l.c)(Rt),
            o = Object(l.c)(Wa),
            i = Object(l.c)(Va),
            s = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Oa({ workspace: a }));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            ),
            m = Object(r.useCallback)(
              function () {
                e(Ya(""));
              },
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                t && s(t), m();
              },
              [s, t, m]
            ),
            Object(r.useEffect)(
              function () {
                e(Lr([n]));
              },
              [e, n, o]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(Vr, {
                  title: "\u30de\u30a4\u30bf\u30b9\u30af",
                }),
                c.a.createElement(Hc, null),
                a.todaysTasks && a.todaysTasks.length > 0
                  ? c.a.createElement(Wn, {
                      title: "\u4eca\u65e5\u3084\u308b",
                      taskData: a.todaysTasks,
                    })
                  : "",
                a.count
                  ? c.a.createElement(Wn, {
                      title: i
                        ? "\u3010".concat(
                            Lc[Number(i)],
                            "\u3011\u30bf\u30b9\u30af\u4e00\u89a7"
                          )
                        : "\u4e00\u89a7",
                      taskData: a.data,
                    })
                  : ""
              )
            )
          );
        },
        qc = Object(g.a)(function (e) {
          return Object(h.a)({ icon: { fontSize: 30 } });
        }),
        Uc = function (e) {
          var t = e.name,
            a = void 0 === t ? "" : t,
            n = e._id,
            r = qc();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              _.a,
              {
                button: !0,
                style: { paddingLeft: 0 },
                component: s.c,
                to: "/members/".concat(n),
                exact: !0,
              },
              c.a.createElement(
                z.a,
                null,
                c.a.createElement(N.a, { className: r.icon }, a.slice(0, 1))
              ),
              c.a.createElement(B.a, { primary: a })
            )
          );
        },
        Gc = Object(g.a)(function (e) {
          return Object(h.a)({ title: { fontSize: 23, width: 900 } });
        }),
        Xc = function (e) {
          var t = e.members,
            a = Gc();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, mt: 7, mb: 2, className: a.title },
              "\u30e1\u30f3\u30d0\u30fc"
            ),
            c.a.createElement(
              C.a,
              { container: !0, direction: "column", justify: "flex-start" },
              c.a.createElement(
                C.a,
                { item: !0 },
                t.map(function (e, t) {
                  return c.a.createElement(Uc, {
                    name: e.name,
                    _id: e._id,
                    key: t,
                  });
                })
              )
            )
          );
        },
        Jc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(gc),
            a = Object(l.c)(zt),
            n = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(fc(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                a && n(a);
              },
              [n, a]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Vr, {
                title: "\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406",
              }),
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(Xc, { members: t })
              )
            )
          );
        },
        Qc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(zt),
            a = Object(l.c)($n),
            n = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Yn(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            ),
            o = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Un({ workspace: a }));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                t && (n(t), o(t));
              },
              [t, n, o]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(Vr, { title: "\u52e4\u6020\u7ba1\u7406" }),
                c.a.createElement(pr, null),
                c.a.createElement(rc, null),
                c.a.createElement(sc, { attendances: a })
              )
            )
          );
        },
        $c = Object(g.a)(function (e) {
          return Object(h.a)({
            button: {
              backgroundColor: p.VWORK_DARK_BLUE,
              width: 150,
              fontSize: 15,
            },
          });
        }),
        Zc = function () {
          var e = $c(),
            t = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              C.a,
              {
                container: !0,
                direction: "row",
                justify: "space-between",
                alignItems: "center",
              },
              c.a.createElement(
                C.a,
                { item: !0 },
                c.a.createElement(
                  re.a,
                  {
                    variant: "contained",
                    color: "secondary",
                    className: e.button,
                    startIcon: c.a.createElement(Tr.a, null),
                    onClick: function () {
                      return t(Ze(!0));
                    },
                    "data-testid": "test",
                  },
                  "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0"
                )
              )
            )
          );
        },
        eo = Object(g.a)(function (e) {
          return Object(h.a)({ icon: { fontSize: 30 } });
        }),
        to = function (e) {
          var t = e.name,
            a = e.memberId,
            n = eo(),
            r = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              _.a,
              {
                button: !0,
                style: { paddingLeft: 0 },
                onClick: function () {
                  r(hn(a)), r(rt(!0));
                },
              },
              c.a.createElement(
                z.a,
                null,
                c.a.createElement(N.a, { className: n.icon }, t.slice(0, 1))
              ),
              c.a.createElement(B.a, { primary: t })
            )
          );
        },
        ao = Object(g.a)(function (e) {
          return Object(h.a)({ button: { width: "50%" } });
        }),
        no = function () {
          var e = ao(),
            t = Object(l.c)(En),
            a = Object(l.c)(pn),
            n = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              ue.d,
              {
                initialValues: { members: [] },
                validationSchema: pe.b().shape({}),
                onSubmit: (function () {
                  var e = Object(ne.a)(
                    ae.a.mark(function e(t, r) {
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                r.setSubmitting(!1),
                                n(Ue(!0)),
                                (e.next = 4),
                                n(ln({ projectId: a._id, members: t.members }))
                              );
                            case 4:
                              return (e.next = 6), n(nn(a._id));
                            case 6:
                              n(Ue(!1)), n(nt(!1));
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              function (a) {
                var n = a.values;
                return c.a.createElement(
                  ue.c,
                  null,
                  c.a.createElement(ue.b, {
                    name: "members",
                    render: function (a) {
                      return c.a.createElement(
                        "div",
                        null,
                        t &&
                          t.map(function (e, t) {
                            return c.a.createElement(
                              "div",
                              { key: "newMember-".concat(t) },
                              c.a.createElement(ue.a, {
                                component: de.a,
                                Label: { label: e.name },
                                name: "tasks",
                                type: "checkbox",
                                value: e._id,
                                checked: n.members.includes(e._id),
                                onChange: function (t) {
                                  if (t.target.checked) a.push(e._id);
                                  else {
                                    var r = n.members.indexOf(e._id);
                                    a.remove(r);
                                  }
                                },
                                icon: c.a.createElement(Kn.a, null),
                                checkedIcon: c.a.createElement(Dn.a, null),
                              })
                            );
                          }),
                        c.a.createElement(
                          ce.a,
                          null,
                          c.a.createElement(
                            W.a,
                            {
                              mt: 5,
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            },
                            c.a.createElement(
                              re.a,
                              {
                                type: "submit",
                                className: e.button,
                                variant: "contained",
                                color: "primary",
                              },
                              "\u8ffd\u52a0"
                            )
                          )
                        )
                      );
                    },
                  })
                );
              }
            )
          );
        },
        ro = Object(g.a)(function (e) {
          return Object(h.a)({
            closeIcon: { padding: 0 },
            drawerTitle: { fontSize: 25, width: "85%" },
            button: { width: 300 },
          });
        }),
        co = function () {
          var e = ro(),
            t = Object(l.b)(),
            a = Object(l.c)(bt),
            n = Object(l.c)(zt),
            o = Object(l.c)(pn)._id,
            i = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t(cn({ workspaces: a, projectId: n }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [t]
            );
          return (
            Object(r.useEffect)(
              function () {
                i(n, o);
              },
              [i, o, n]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                zn,
                {
                  open: a,
                  click: function () {
                    return t(nt(!1));
                  },
                },
                c.a.createElement(
                  A.a,
                  { maxWidth: "md" },
                  c.a.createElement(
                    W.a,
                    {
                      borderBottom: 1,
                      mt: 10,
                      mb: 5,
                      className: e.drawerTitle,
                    },
                    "\u8ffd\u52a0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u3092\u9078\u629e"
                  ),
                  c.a.createElement(no, null)
                )
              )
            )
          );
        },
        oo = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 23, width: 300 },
            icon: { fontSize: 45 },
            backdrop: { zIndex: e.zIndex.drawer + 1, color: "#fff" },
            drawer: { width: "50%", flexShrink: 0 },
            drawerPaper: { width: "50%" },
            closeIcon: { padding: 0 },
            drawerTitle: { fontSize: 25, width: "85%" },
            button: { width: 300 },
          });
        }),
        io = function (e) {
          var t = e.members,
            a = oo(),
            n = Object(l.b)(),
            r = Object(l.c)(bt);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, mt: 7, mb: 2, className: a.title },
              "\u30e1\u30f3\u30d0\u30fc"
            ),
            c.a.createElement(
              C.a,
              { container: !0, direction: "column", justify: "flex-start" },
              c.a.createElement(
                C.a,
                { item: !0 },
                c.a.createElement(
                  _.a,
                  {
                    button: !0,
                    onClick: function () {
                      return n(nt(!0));
                    },
                    style: { paddingLeft: 0 },
                  },
                  c.a.createElement(
                    z.a,
                    null,
                    c.a.createElement(Rr.a, { className: a.icon })
                  ),
                  c.a.createElement(B.a, {
                    primary: "\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0",
                  })
                )
              ),
              c.a.createElement(
                C.a,
                { item: !0 },
                t &&
                  t.map(function (e, t) {
                    return c.a.createElement(to, {
                      name: e.name,
                      key: t,
                      memberId: e._id,
                    });
                  })
              )
            ),
            r ? c.a.createElement(co, null) : ""
          );
        },
        lo = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(pn),
            a = Object(l.c)(Wa),
            n = Object(m.h)().projectId,
            o = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(nn(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            ),
            i = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(wa(a));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            ),
            s = Object(r.useCallback)(
              function (t) {
                e(Lr(t));
              },
              [e]
            ),
            u = Object(r.useRef)(!1);
          return (
            Object(r.useEffect)(
              function () {
                u.current ? s(t.members) : (u.current = !0);
              },
              [s, t]
            ),
            Object(r.useEffect)(
              function () {
                o(n), i(n);
              },
              [o, i, n]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(Vr, { title: t.name }),
                c.a.createElement(
                  W.a,
                  { mb: 5, pb: 1, borderBottom: 1, width: "69%" },
                  c.a.createElement(w.a, { variant: "body1" }, t.description)
                ),
                c.a.createElement(Zc, null),
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "row", justify: "space-between" },
                  c.a.createElement(
                    C.a,
                    { item: !0, style: { width: "70%" } },
                    c.a.createElement(Wn, {
                      title: "\u30bf\u30b9\u30af\u4e00\u89a7",
                      taskData: a.data,
                    })
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(io, { members: t.members })
                  )
                )
              )
            )
          );
        },
        so = a(249),
        mo = a.n(so),
        uo = a(248),
        po = a.n(uo),
        fo = a(250),
        bo = a.n(fo),
        Eo = a(380),
        go = a(247),
        ho = a.n(go),
        vo = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = e.bgColor,
            r = e.projectId;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
              { style: { padding: 0 } },
              c.a.createElement(
                _.a,
                {
                  button: !0,
                  style: { paddingTop: 0, paddingBottom: 0 },
                  component: s.c,
                  to: "/project/".concat(r),
                  exact: !0,
                },
                c.a.createElement(
                  z.a,
                  null,
                  c.a.createElement(ho.a, { style: { color: n } })
                ),
                c.a.createElement(B.a, { primary: a })
              )
            )
          );
        },
        jo = function () {
          var e = Object(l.c)(un);
          return c.a.createElement(
            c.a.Fragment,
            null,
            e.map(function (e, t) {
              return c.a.createElement(vo, {
                title: e.name,
                bgColor: d[e.color],
                projectId: e._id,
                key: e._id,
              });
            })
          );
        },
        ko = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 15 },
            backdrop: { zIndex: e.zIndex.drawer + 1, color: "#fff" },
            drawer: { width: "50%", flexShrink: 0 },
            drawerPaper: { width: "50%" },
            iconStyle: { color: p.VWORK_WHITE, padding: 0 },
            icon: { borderRadius: 10 },
          });
        }),
        Oo = function () {
          var e = ko(),
            t = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              W.a,
              { borderBottom: 1, mt: 3, mx: 2, mb: 2, className: e.title },
              c.a.createElement(
                C.a,
                {
                  container: !0,
                  direction: "row",
                  justify: "space-between",
                  alignItems: "center",
                },
                c.a.createElement(
                  C.a,
                  { item: !0 },
                  c.a.createElement(
                    w.a,
                    null,
                    "\u30de\u30a4\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                  )
                ),
                c.a.createElement(
                  C.a,
                  { item: !0 },
                  c.a.createElement(
                    x.a,
                    {
                      className: e.iconStyle,
                      onClick: function () {
                        return t(Xe(!0));
                      },
                      "data-testid": "test",
                    },
                    c.a.createElement(Tr.a, { className: e.icon })
                  )
                )
              )
            ),
            c.a.createElement(W.a, { mb: 5 }, c.a.createElement(jo, null))
          );
        },
        wo = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            drawer: { width: 240, flexShrink: 0, color: p.VWORK_BLACK },
            drawerPaper: {
              width: 240,
              backgroundColor: p.VWORK_BLACK,
              color: p.VWORK_WHITE,
            },
            title: { fontWeight: 900, cursor: "pointer" },
            mainTitle: { fontSize: 30, paddingLeft: "5px" },
            drawerHeader: Object(I.a)(
              {
                display: "flex",
                alignItems: "center",
                padding: e.spacing(0, 1),
              },
              e.mixins.toolbar,
              { justifyContent: "flex-end" }
            ),
            menuIcon: { fontSize: 40, color: p.VWORK_GRAY },
            icon: { color: p.VWORK_WHITE },
          });
        }),
        yo = function () {
          var e = wo(),
            t = Object(m.g)(),
            a = Object(l.b)(),
            n = Object(l.c)(ot),
            r = Object(l.c)(Ft),
            o = Object(l.c)(Bt),
            i = Object(l.c)(Dt);
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(
              A.a,
              null,
              c.a.createElement(
                H.a,
                {
                  className: e.drawer,
                  variant: "persistent",
                  anchor: "left",
                  open: n,
                  classes: { paper: e.drawerPaper },
                },
                c.a.createElement(
                  C.a,
                  {
                    container: !0,
                    direction: "row",
                    justify: "space-between",
                    alignItems: "center",
                  },
                  c.a.createElement(
                    C.a,
                    {
                      item: !0,
                      onClick: function () {
                        t.push("/");
                      },
                    },
                    c.a.createElement(
                      W.a,
                      { ml: 2 },
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "row",
                          justify: "center",
                          alignItems: "center",
                          className: e.title,
                        },
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            W.a,
                            { display: "flex" },
                            c.a.createElement("img", {
                              src: "".concat("", "/images/logo192.png"),
                              style: { height: 25 },
                              className: "imgstyle",
                              alt: "icon",
                            })
                          )
                        ),
                        c.a.createElement(
                          C.a,
                          {
                            item: !0,
                            className: Object(y.a)(e.mainTitle, "logo"),
                          },
                          "VWORK"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      "div",
                      { className: e.drawerHeader },
                      c.a.createElement(
                        x.a,
                        {
                          onClick: function () {
                            return a(Ge(!1));
                          },
                        },
                        c.a.createElement(k.a, { className: e.menuIcon })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  W.a,
                  {
                    m: 2,
                    mb: 0,
                    borderBottom: 1,
                    fontWeight: "fontWeightBold",
                  },
                  c.a.createElement(w.a, null, o.name)
                ),
                c.a.createElement(
                  R.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: e.icon },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(B.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      z.a,
                      { className: e.icon },
                      c.a.createElement(X.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u30de\u30a4\u30bf\u30b9\u30af",
                    })
                  ),
                  c.a.createElement(
                    _.a,
                    {
                      button: !0,
                      component: s.c,
                      to: "/work_manage",
                      exact: !0,
                    },
                    c.a.createElement(
                      z.a,
                      { className: e.icon },
                      c.a.createElement(Q.a, null)
                    ),
                    c.a.createElement(B.a, {
                      primary: "\u52e4\u6020\u7ba1\u7406",
                    })
                  ),
                  i
                    ? c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          _.a,
                          {
                            button: !0,
                            component: s.c,
                            to: "/notification",
                            exact: !0,
                          },
                          c.a.createElement(
                            z.a,
                            { className: e.icon },
                            c.a.createElement(po.a, null)
                          ),
                          c.a.createElement(
                            Eo.a,
                            { badgeContent: r, color: "primary" },
                            c.a.createElement(B.a, {
                              primary: "\u53d7\u4fe1\u30dc\u30c3\u30af\u30b9",
                            })
                          )
                        ),
                        c.a.createElement(
                          _.a,
                          {
                            button: !0,
                            component: s.c,
                            to: "/members",
                            exact: !0,
                          },
                          c.a.createElement(
                            z.a,
                            { className: e.icon },
                            c.a.createElement(mo.a, null)
                          ),
                          c.a.createElement(B.a, {
                            primary: "\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406",
                          })
                        ),
                        c.a.createElement(
                          _.a,
                          {
                            button: !0,
                            component: s.c,
                            to: "/project_manage",
                            exact: !0,
                          },
                          c.a.createElement(
                            z.a,
                            { className: e.icon },
                            c.a.createElement(Qr.a, null)
                          ),
                          c.a.createElement(B.a, {
                            primary:
                              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7ba1\u7406",
                          })
                        ),
                        c.a.createElement(
                          _.a,
                          {
                            button: !0,
                            component: s.c,
                            to: "/workspace_manage",
                            exact: !0,
                          },
                          c.a.createElement(
                            z.a,
                            { className: e.icon },
                            c.a.createElement(bo.a, null)
                          ),
                          c.a.createElement(B.a, {
                            primary:
                              "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u7ba1\u7406",
                          })
                        )
                      )
                    : ""
                ),
                c.a.createElement(Oo, null)
              )
            )
          );
        },
        xo = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(yo, null)
          );
        },
        Co = a(381),
        No = Object(g.a)(function (e) {
          return {
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        }),
        Ao = function () {
          var e = No(),
            t = Object(l.b)(),
            a = Object(l.c)(it),
            n = Object(l.c)(zt);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              zn,
              {
                open: a,
                click: function () {
                  return t(Xe(!1));
                },
              },
              c.a.createElement(
                A.a,
                { maxWidth: "md" },
                c.a.createElement(
                  W.a,
                  { mt: 5, mb: 2, borderBottom: 1 },
                  c.a.createElement(
                    w.a,
                    { variant: "h5" },
                    "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8ffd\u52a0"
                  )
                ),
                c.a.createElement(
                  ue.d,
                  {
                    initialValues: { name: "", description: "" },
                    validationSchema: pe
                      .b()
                      .shape({
                        name: pe
                          .c()
                          .required(
                            "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                          ),
                        description: pe
                          .c()
                          .required(
                            "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                          ),
                      }),
                    onSubmit: (function () {
                      var e = Object(ne.a)(
                        ae.a.mark(function e(a, r) {
                          return ae.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    t(
                                      rn({
                                        workspace: n,
                                        projectData: {
                                          name: a.name,
                                          description: a.description,
                                        },
                                      })
                                    )
                                  );
                                case 2:
                                  t(Xe(!1));
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t, a) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  c.a.createElement(
                    ue.c,
                    { className: e.form },
                    c.a.createElement(ue.a, {
                      component: de.c,
                      name: "name",
                      label: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d",
                      variant: "outlined",
                      margin: "normal",
                      fullWidth: !0,
                      id: "name",
                    }),
                    c.a.createElement("br", null),
                    c.a.createElement(ue.a, {
                      component: de.c,
                      label: "\u8a73\u7d30",
                      fullWidth: !0,
                      multiline: !0,
                      variant: "outlined",
                      margin: "normal",
                      name: "description",
                      id: "description",
                      rows: 4,
                    }),
                    c.a.createElement("br", null),
                    c.a.createElement(
                      re.a,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: e.submit,
                      },
                      "\u4f5c\u6210"
                    )
                  )
                )
              )
            )
          );
        },
        To = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            formArea: {
              overflowY: "scroll",
              overflowX: "hidden",
              height: "33vh",
            },
          });
        }),
        So = function () {
          var e = To(),
            t = Object(l.b)(),
            a = Object(l.c)(lt),
            n = Object(l.c)(zt);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              zn,
              {
                open: a,
                click: function () {
                  return t(Je(!1));
                },
              },
              c.a.createElement(
                A.a,
                null,
                c.a.createElement(
                  W.a,
                  { mt: 5, mb: 2, borderBottom: 1 },
                  c.a.createElement(
                    w.a,
                    { variant: "h5" },
                    "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85"
                  )
                ),
                c.a.createElement(
                  ue.d,
                  {
                    initialValues: { invitations: [{ name: "", email: "" }] },
                    validationSchema: pe
                      .b()
                      .shape({
                        invitations: pe
                          .a()
                          .of(
                            pe
                              .b()
                              .shape({
                                email: pe
                                  .c()
                                  .email(
                                    "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                                  )
                                  .required(
                                    "email\u306f\u5fc5\u9808\u3067\u3059\u3002"
                                  ),
                                name: pe
                                  .c()
                                  .required(
                                    "\u6c0f\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                                  ),
                              })
                          ),
                      }),
                    onSubmit: (function () {
                      var e = Object(ne.a)(
                        ae.a.mark(function e(a) {
                          return ae.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t(Ue(!0)),
                                    (e.next = 3),
                                    t(
                                      Fr({
                                        workspace: n,
                                        invitations: a.invitations,
                                      })
                                    )
                                  );
                                case 3:
                                  t(Ue(!1)), t(Je(!1));
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  function (t) {
                    var a = t.values;
                    return c.a.createElement(
                      ue.c,
                      { className: e.formArea },
                      c.a.createElement(ue.b, {
                        name: "invitations",
                        render: function (e) {
                          return c.a.createElement(
                            "div",
                            null,
                            a.invitations.map(function (t, a) {
                              return c.a.createElement(
                                "div",
                                { key: a },
                                c.a.createElement(
                                  C.a,
                                  { container: !0, spacing: 3 },
                                  c.a.createElement(
                                    C.a,
                                    { item: !0, xs: 5 },
                                    c.a.createElement(ue.a, {
                                      component: de.c,
                                      label: "\u6c0f\u540d*",
                                      variant: "outlined",
                                      margin: "normal",
                                      fullWidth: !0,
                                      id: "name.".concat(a),
                                      name: "invitations[".concat(a, "].name"),
                                    })
                                  ),
                                  c.a.createElement(
                                    C.a,
                                    { item: !0, xs: 5 },
                                    c.a.createElement(ue.a, {
                                      component: de.c,
                                      type: "email",
                                      label:
                                        "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9*",
                                      variant: "outlined",
                                      margin: "normal",
                                      fullWidth: !0,
                                      id: "email.".concat(a),
                                      name: "invitations[".concat(a, "].email"),
                                    })
                                  ),
                                  c.a.createElement(
                                    C.a,
                                    { item: !0, xs: 1 },
                                    c.a.createElement(
                                      W.a,
                                      {
                                        display: "flex",
                                        alignItems: "center",
                                        height: "100%",
                                      },
                                      c.a.createElement(
                                        x.a,
                                        {
                                          "aria-label": "delete",
                                          onClick: function () {
                                            return e.remove(a);
                                          },
                                        },
                                        c.a.createElement(Me.a, null)
                                      )
                                    )
                                  )
                                )
                              );
                            }),
                            c.a.createElement("br", null),
                            c.a.createElement(
                              re.a,
                              {
                                color: "primary",
                                onClick: function () {
                                  return e.push({ name: "", email: "" });
                                },
                              },
                              "\u3055\u3089\u306b\u8ffd\u52a0"
                            ),
                            c.a.createElement(
                              W.a,
                              { mt: 3 },
                              c.a.createElement(
                                ce.a,
                                null,
                                c.a.createElement(
                                  re.a,
                                  {
                                    type: "submit",
                                    fullWidth: !0,
                                    variant: "contained",
                                    color: "primary",
                                  },
                                  "\u62db\u5f85\u3059\u308b"
                                )
                              )
                            )
                          );
                        },
                      })
                    );
                  }
                )
              )
            )
          );
        },
        Io = Object(g.a)(function (e) {
          return Object(h.a)({
            closeIcon: { padding: 0 },
            profile: { fontSize: 20 },
            profileTitle: { color: "#9e9e9e" },
            profileItem: { margin: 0 },
          });
        }),
        Wo = function () {
          var e = Io(),
            t = Object(l.b)(),
            a = Object(l.c)(zt),
            n = Object(l.c)(Et),
            o = Object(l.c)(pn),
            i = Object(l.c)(fn),
            s = Object(l.c)(bn),
            m = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a, n, r) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t(on({ workspaces: a, projectId: n, userId: r }))
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [t]
            );
          return (
            Object(r.useEffect)(
              function () {
                m(a, o._id, i);
              },
              [m, a, o, i]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                zn,
                {
                  open: n,
                  click: function () {
                    t(
                      vn({
                        user: {
                          _id: "",
                          name: "",
                          email: "",
                          registration: !1,
                          role: "",
                          lastAccessWorkspace: "",
                        },
                        tasks: [],
                        profile: { position: "" },
                      })
                    ),
                      t(rt(!1));
                  },
                },
                c.a.createElement(
                  W.a,
                  { mt: 13 },
                  c.a.createElement(
                    C.a,
                    {
                      container: !0,
                      direction: "column",
                      justify: "center",
                      alignItems: "center",
                    },
                    c.a.createElement(
                      A.a,
                      { maxWidth: "md" },
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          C.a,
                          { container: !0, direction: "row", spacing: 5 },
                          c.a.createElement(
                            C.a,
                            { item: !0, className: e.profile },
                            c.a.createElement(
                              "dl",
                              null,
                              c.a.createElement(
                                "dt",
                                { className: e.profileTitle },
                                "\u6c0f\u540d"
                              ),
                              c.a.createElement(
                                "dd",
                                { className: e.profileItem },
                                s.user.name
                              )
                            )
                          ),
                          c.a.createElement(
                            C.a,
                            { item: !0, className: e.profile },
                            c.a.createElement(
                              "dl",
                              null,
                              c.a.createElement(
                                "dt",
                                { className: e.profileTitle },
                                "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"
                              ),
                              c.a.createElement(
                                "dd",
                                { className: e.profileItem },
                                s.user.email
                              )
                            )
                          ),
                          c.a.createElement(
                            C.a,
                            { item: !0, className: e.profile },
                            c.a.createElement(
                              "dl",
                              null,
                              c.a.createElement(
                                "dt",
                                { className: e.profileTitle },
                                "\u5f79\u8077\u30fb\u62c5\u5f53"
                              ),
                              c.a.createElement(
                                "dd",
                                { className: e.profileItem },
                                s.profile && s.profile.position
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        C.a,
                        {
                          item: !0,
                          onClick: function () {
                            return t(rt(!1));
                          },
                          "data-testid": "testID",
                        },
                        c.a.createElement(Wn, {
                          title:
                            "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u62c5\u5f53\u30bf\u30b9\u30af",
                          taskData: s.tasks,
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ro = Object(g.a)(function (e) {
          return {
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        }),
        _o = function () {
          var e = Ro(),
            t = Object(l.b)(),
            a = Object(l.c)(st),
            n = Object(l.c)(zt),
            r = Object(l.c)(Rt),
            o = Object(l.c)(_t),
            i = { name: r.name, email: r.email, position: o ? o.position : "" };
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              zn,
              {
                open: a,
                click: function () {
                  return t(Qe(!1));
                },
              },
              c.a.createElement(
                A.a,
                { maxWidth: "md" },
                c.a.createElement(
                  W.a,
                  { mt: 5, mb: 2, borderBottom: 1 },
                  c.a.createElement(
                    w.a,
                    { variant: "h5" },
                    "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u8a2d\u5b9a"
                  )
                ),
                c.a.createElement(
                  ue.d,
                  {
                    initialValues: i,
                    validationSchema: pe
                      .b()
                      .shape({
                        name: pe
                          .c()
                          .required(
                            "\u6c0f\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                          ),
                      }),
                    onSubmit: (function () {
                      var e = Object(ne.a)(
                        ae.a.mark(function e(a, c) {
                          return ae.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    c.setSubmitting(!1),
                                    t(Ue(!0)),
                                    (e.next = 4),
                                    t(
                                      Pr({
                                        workspace: n,
                                        userId: r._id,
                                        bodyData: a,
                                      })
                                    )
                                  );
                                case 4:
                                  t(Ue(!1)), t(Qe(!1));
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t, a) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  function (t) {
                    return c.a.createElement(
                      ue.c,
                      { className: e.form },
                      c.a.createElement(
                        ue.a,
                        {
                          component: de.c,
                          name: "name",
                          label: "\u6c0f\u540d*",
                          variant: "outlined",
                          margin: "normal",
                          fullWidth: !0,
                          id: "name",
                          value: t.values.name,
                        },
                        t.values.name
                      ),
                      c.a.createElement("br", null),
                      c.a.createElement(
                        ue.a,
                        {
                          component: de.c,
                          label: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
                          fullWidth: !0,
                          variant: "outlined",
                          margin: "normal",
                          name: "email",
                          id: "email",
                          value: t.values.email,
                        },
                        t.values.email
                      ),
                      c.a.createElement(
                        ue.a,
                        {
                          component: de.c,
                          label: "\u5f79\u8077\u30fb\u62c5\u5f53",
                          fullWidth: !0,
                          variant: "outlined",
                          margin: "normal",
                          name: "position",
                          id: "position",
                          value: t.values.position,
                        },
                        t.values.position
                      ),
                      c.a.createElement("br", null),
                      c.a.createElement(
                        re.a,
                        {
                          type: "submit",
                          fullWidth: !0,
                          variant: "contained",
                          color: "primary",
                          className: e.submit,
                        },
                        "\u66f4\u65b0"
                      )
                    );
                  }
                )
              )
            )
          );
        },
        zo = a(251),
        Bo = a.n(zo),
        Ko = a(392),
        Vo = a(211),
        Do = a(252),
        Fo = a.n(Do),
        Po = a(255),
        Mo = a.n(Po),
        Ho = a(253),
        Lo = a.n(Ho),
        Yo = a(254),
        qo = a.n(Yo),
        Uo = a(256),
        Go = a.n(Uo),
        Xo = Object(g.a)(function (e) {
          return Object(h.a)({
            formControl: { margin: e.spacing(1), minWidth: "100%" },
            selectEmpty: { marginTop: e.spacing(2) },
            labelIcon: { marginRight: e.spacing(1) },
            formContent: { marginBottom: e.spacing(1) },
          });
        }),
        Jo = ["TODO", "\u9032\u884c\u4e2d", "\u5b8c\u4e86"],
        Qo = ["\u4f4e", "\u4e2d", "\u9ad8"],
        $o = function (e) {
          var t = e.projects,
            a = e.submitFunction,
            n = e.taskData,
            r = e.update,
            o = e.members,
            i = Xo(),
            s = Object(l.c)(zt),
            m = Object(l.c)(pn),
            u = Object(l.c)(Yr),
            d = o && o.length > 0 ? o : u;
          n.startDateAt || (n.startDateAt = ha()().toString()),
            n.endDateAt || (n.endDateAt = ha()().add(1, "days").toString()),
            n.todaysTask || (n.todaysTask = !1),
            n.project || (m._id ? (n.project = m._id) : (n.project = ""));
          var p = Object(l.b)(),
            f = {
              user: n.user,
              name: n.name,
              description: n.description,
              startDateAt: n.startDateAt,
              endDateAt: n.endDateAt,
              state: n.state,
              progress: n.progress,
              priority: n.priority,
              project: n.project || "",
              todaysTask: n.todaysTask,
            };
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              ue.d,
              {
                enableReinitialize: !0,
                initialValues: f,
                validationSchema: pe
                  .b()
                  .shape({
                    user: pe
                      .c()
                      .required(
                        "\u62c5\u5f53\u8005\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"
                      ),
                    name: pe
                      .c()
                      .max(
                        24,
                        "24\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"
                      )
                      .required(
                        "\u30bf\u30b9\u30af\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"
                      ),
                  }),
                onSubmit: (function () {
                  var e = Object(ne.a)(
                    ae.a.mark(function e(t, n) {
                      var r, c;
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.setSubmitting(!1),
                                p(Ue(!0)),
                                (r = Bo.a.omitBy(t, function (e, t) {
                                  return f[t] === e;
                                })),
                                (c = { task: Object(I.a)({}, t), log: r }).task
                                  .project || (c.task.project = null),
                                (e.next = 7),
                                a(c, s)
                              );
                            case 7:
                              p(Ue(!1));
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              function (e) {
                return c.a.createElement(
                  ue.c,
                  null,
                  c.a.createElement(
                    C.a,
                    { container: !0, spacing: 4 },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 10 },
                      c.a.createElement(ue.a, {
                        component: de.c,
                        name: "name",
                        label: "\u30bf\u30b9\u30af\u540d",
                        fullWidth: !0,
                        id: "name",
                        value: e.values.name,
                      })
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        ce.a,
                        null,
                        c.a.createElement(
                          re.a,
                          {
                            type: "submit",
                            fullWidth: !0,
                            variant: "contained",
                            color: "primary",
                          },
                          "\u4fdd\u5b58"
                        )
                      )
                    )
                  ),
                  c.a.createElement(ue.a, {
                    component: de.a,
                    type: "checkbox",
                    name: "todaysTask",
                    Label: { label: "\u4eca\u65e5\u3084\u308b" },
                    checked: e.values.todaysTask,
                  }),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: i.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Fo.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u62c5\u5f53\u8005"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(
                          ue.a,
                          {
                            component: de.c,
                            name: "user",
                            id: "user",
                            defaultValue: e.values.user,
                            select: !0,
                            onChange: e.handleChange("user"),
                            inputProps: { id: "user" },
                          },
                          c.a.createElement(
                            Tn.a,
                            { value: "" },
                            c.a.createElement("em", null, "\u672a\u9078\u629e")
                          ),
                          d &&
                            d.map(function (e, t) {
                              return c.a.createElement(
                                Tn.a,
                                { value: e._id.toString(), key: t },
                                e.name.toString()
                              );
                            })
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: i.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Lo.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u671f\u65e5"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(
                          nc.a,
                          { utils: ec.a, locale: tc.a },
                          c.a.createElement(
                            C.a,
                            { container: !0, spacing: 2 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(ue.a, {
                                component: Vo.a,
                                name: "startDateAt",
                                label: "\u958b\u59cb",
                                id: "startDateAt",
                                value: e.values.startDateAt,
                              })
                            ),
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(ue.a, {
                                component: Vo.a,
                                name: "endDateAt",
                                label: "\u7d42\u4e86",
                                id: "endDateAt",
                                value: e.values.endDateAt,
                              })
                            )
                          )
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: i.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(F.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(
                          Pc.a,
                          { htmlFor: "project" },
                          "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                        ),
                        c.a.createElement(
                          ue.a,
                          {
                            component: de.b,
                            disabled: r,
                            name: "project",
                            id: "project",
                            as: "select",
                            defaultValue: e.values.project,
                            inputProps: { id: "project" },
                          },
                          c.a.createElement(
                            Tn.a,
                            { value: "" },
                            "\u672a\u9078\u629e"
                          ),
                          t.map(function (e, t) {
                            return c.a.createElement(
                              Tn.a,
                              { value: e.id, key: t },
                              e.name
                            );
                          })
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: i.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement($a.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u30bf\u30b9\u30af\u72b6\u6cc1"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(
                          ue.a,
                          {
                            component: de.b,
                            name: "state",
                            id: "state",
                            as: "select",
                            defaultValue: e.values.state,
                            inputProps: { id: "state" },
                          },
                          c.a.createElement(Tn.a, { value: 0 }, Jo[0]),
                          c.a.createElement(Tn.a, { value: 1 }, Jo[1]),
                          c.a.createElement(Tn.a, { value: 2 }, Jo[2])
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: i.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(qo.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u512a\u5148\u5ea6"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(
                          ue.a,
                          {
                            component: de.b,
                            name: "priority",
                            id: "priority",
                            defaultValue: e.values.priority,
                            as: "select",
                            inputProps: { id: "priority" },
                          },
                          c.a.createElement(Tn.a, { value: 0 }, Qo[0]),
                          c.a.createElement(Tn.a, { value: 1 }, Qo[1]),
                          c.a.createElement(Tn.a, { value: 2 }, Qo[2])
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: i.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Mo.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u9032\u6357"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(Ko.a, {
                          color: "secondary",
                          name: "progress",
                          id: "progress",
                          value: e.values.progress,
                          min: 0,
                          max: 100,
                          step: 10,
                          valueLabelDisplay: "auto",
                          onChange: function (t, a) {
                            return e.setFieldValue("progress", a);
                          },
                        })
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0 },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        W.a,
                        { display: "flex", alignItems: "center" },
                        c.a.createElement(Go.a, {
                          color: "disabled",
                          className: i.labelIcon,
                        }),
                        "\u8a73\u7d30"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        Cn.a,
                        { className: i.formControl },
                        c.a.createElement(ue.a, {
                          component: de.c,
                          name: "description",
                          label: "\u8a73\u7d30",
                          variant: "outlined",
                          margin: "none",
                          fullWidth: !0,
                          multiline: !0,
                          id: "description",
                          value: e.values.description,
                          rows: 3,
                        })
                      )
                    )
                  )
                );
              }
            )
          );
        },
        Zo =
          (a(311),
          Object(g.a)(function (e) {
            return {
              button: {
                marginTop: "16px",
                marginBottom: "8px",
                height: "56px",
              },
            };
          })),
        ei = function (e) {
          var t = e.taskId,
            a = Zo(),
            n = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              ue.d,
              {
                initialValues: { comment: "" },
                validationSchema: pe.b().shape({}),
                onSubmit: (function () {
                  var e = Object(ne.a)(
                    ae.a.mark(function e(a, r) {
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                r.resetForm({}),
                                n(Ue(!0)),
                                (e.next = 4),
                                n(Ta({ taskId: t, comment: a.comment }))
                              );
                            case 4:
                              return (e.next = 6), n(Sa(t));
                            case 6:
                              n(Ue(!1));
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              c.a.createElement(
                ue.c,
                null,
                c.a.createElement(
                  A.a,
                  { className: "commentForm" },
                  c.a.createElement(
                    C.a,
                    { container: !0, justify: "flex-start", spacing: 1 },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 11 },
                      c.a.createElement(ue.a, {
                        component: de.c,
                        name: "comment",
                        label: "\u30b3\u30e1\u30f3\u30c8",
                        variant: "outlined",
                        margin: "normal",
                        fullWidth: !0,
                        multiline: !0,
                        id: "comment",
                        required: !0,
                      })
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 1 },
                      c.a.createElement(
                        re.a,
                        {
                          type: "submit",
                          variant: "contained",
                          color: "primary",
                          fullWidth: !0,
                          className: a.button,
                        },
                        "\u9001\u4fe1"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ti = ["TODO", "\u9032\u884c\u4e2d", "\u5b8c\u4e86"],
        ai = ["\u4f4e", "\u4e2d", "\u9ad8"],
        ni = Object(g.a)(function (e) {
          return Object(h.a)({
            commentArea: {
              backgroundColor: p.VWORK_WHITE,
              borderRadius: "5px",
              padding: "5px 3px",
              marginLeft: e.spacing(3),
            },
            logArea: {
              marginTop: e.spacing(1),
              marginBottom: e.spacing(2),
              marginLeft: e.spacing(3),
            },
            icon: {
              fontSize: "18px",
              width: e.spacing(3),
              height: e.spacing(3),
            },
          });
        }),
        ri = function (e) {
          var t = e.taskId,
            a = ni(),
            n = Object(l.b)(),
            o = Object(l.c)(Da),
            i = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(t) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n(Sa(t));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [n]
            ),
            s = Object(r.useRef)(null),
            m = s.current ? s.current.scrollHeight : 0;
          return (
            Object(r.useEffect)(
              function () {
                m && s.current && s.current.scrollIntoView({ block: "end" });
              },
              [m]
            ),
            Object(r.useEffect)(
              function () {
                i(t);
              },
              [i, t]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                A.a,
                { ref: s },
                c.a.createElement(
                  W.a,
                  { pt: 3 },
                  o.length > 0 &&
                    o.map(function (e, t) {
                      var n;
                      return (
                        0 === e.type &&
                          (n = c.a.createElement(
                            "div",
                            null,
                            c.a.createElement(
                              C.a,
                              {
                                container: !0,
                                alignItems: "center",
                                spacing: 1,
                                justify: "flex-start",
                              },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                c.a.createElement(
                                  N.a,
                                  { className: a.icon },
                                  e.log && e.log.user.name.slice(0, 1)
                                )
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                e.log && e.log.user.name
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                ha()(e.createdAt)
                                  .utcOffset("+09:00")
                                  .format("YYYY/MM/DD HH:mm")
                              )
                            ),
                            c.a.createElement(
                              "p",
                              { className: a.logArea },
                              e.log &&
                                (function (e, t, a) {
                                  switch (e) {
                                    case "create":
                                      return "[\u65b0\u898f]".concat(a);
                                    case "name":
                                      return "[\u30bf\u30b9\u30af\u540d]"
                                        .concat(
                                          t
                                            ? "\u300c".concat(t, "\u300d\u3092")
                                            : "",
                                          "\u300c"
                                        )
                                        .concat(
                                          a,
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "description":
                                      return "[\u8a73\u7d30]"
                                        .concat(
                                          t
                                            ? "\u300c".concat(t, "\u300d\u3092")
                                            : "",
                                          "\u300c"
                                        )
                                        .concat(
                                          a,
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "user":
                                      return "\u62c5\u5f53\u8005\u304c\u5909\u66f4\u3055\u308c\u307e\u3057\u305f\u3002";
                                    case "startDateAt":
                                      return "[\u958b\u59cb\u65e5]"
                                        .concat(
                                          t
                                            ? "\u300c".concat(t, "\u300d\u3092")
                                            : "",
                                          "\u300c"
                                        )
                                        .concat(
                                          a,
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "endDateAt":
                                      return "[\u7d42\u4e86\u65e5]"
                                        .concat(
                                          t
                                            ? "\u300c".concat(t, "\u300d\u3092")
                                            : "",
                                          "\u300c"
                                        )
                                        .concat(
                                          a,
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "state":
                                      return "[\u30bf\u30b9\u30af\u72b6\u6cc1]\u300c"
                                        .concat(
                                          ti[Number(t)],
                                          "\u300d\u3092\u300c"
                                        )
                                        .concat(
                                          ti[Number(a)],
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "progress":
                                      return "[\u9032\u6357]"
                                        .concat(
                                          t
                                            ? "\u300c".concat(t, "\u300d\u3092")
                                            : "",
                                          "\u300c"
                                        )
                                        .concat(
                                          a,
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "priority":
                                      return "[\u512a\u5148\u5ea6]\u300c"
                                        .concat(
                                          ai[Number(t)],
                                          "\u300d\u3092\u300c"
                                        )
                                        .concat(
                                          ai[Number(a)],
                                          "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f"
                                        );
                                    case "todaysTask":
                                      return "[\u4eca\u65e5\u306e\u30bf\u30b9\u30af]".concat(
                                        "true" === a
                                          ? "\u4eca\u65e5\u306e\u30bf\u30b9\u30af\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f"
                                          : "\u4eca\u65e5\u306e\u30bf\u30b9\u30af\u304b\u3089\u5916\u3057\u307e\u3057\u305f"
                                      );
                                    case "project":
                                      return "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u5909\u66f4\u3055\u308c\u307e\u3057\u305f";
                                  }
                                })(
                                  e.log.type,
                                  e.log.oldState || "",
                                  e.log.newState
                                )
                            )
                          )),
                        1 === e.type &&
                          (n = c.a.createElement(
                            "div",
                            null,
                            c.a.createElement(
                              C.a,
                              {
                                container: !0,
                                alignItems: "center",
                                spacing: 1,
                                justify: "flex-start",
                              },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                c.a.createElement(
                                  N.a,
                                  { className: a.icon },
                                  e.comment && e.comment.user.name.slice(0, 1)
                                )
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                e.comment && e.comment.user.name
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                ha()(e.createdAt)
                                  .utcOffset("+09:00")
                                  .format("YYYY/MM/DD HH:mm")
                              )
                            ),
                            c.a.createElement(
                              "p",
                              { className: a.commentArea },
                              e.comment && e.comment.comment
                            )
                          )),
                        c.a.createElement("div", { key: t }, n)
                      );
                    })
                )
              )
            )
          );
        },
        ci = Object(g.a)(function (e) {
          return Object(h.a)({
            historyArea: {
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "calc(100vh - 640px) !important",
              backgroundColor: "#F0F7F8",
            },
            historyOutputArea: {
              height: "calc(100% - 90px)",
              overflowY: "scroll",
              overflowX: "hidden",
            },
            commentArea: { position: "absolute", bottom: 0, width: "100%" },
          });
        }),
        oi = function () {
          var e = ci(),
            t = Object(l.c)(pn),
            a = Object(l.b)(),
            n = Object(l.c)(mt),
            o = Object(l.c)(Va),
            i = Object(l.c)(_a),
            s = Object(l.c)(Ra),
            m = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(t) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a(ya(t));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [a]
            );
          Object(r.useEffect)(
            function () {
              m(i);
            },
            [m, i]
          ),
            Object(r.useEffect)(
              function () {
                return function () {
                  a(
                    jn({
                      _id: "",
                      name: "",
                      color: 0,
                      icon: 0,
                      description: "",
                      members: [],
                      tasks: [],
                    })
                  );
                };
              },
              [a]
            );
          var u = Object(l.c)(un).map(function (e) {
              return { id: e._id, name: e.name };
            }),
            d = Object(I.a)({}, s),
            p = !!d.project,
            f = window.location.pathname,
            b = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e(n, r) {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            a(xa({ id: i, task: n.task, log: n.log }))
                          );
                        case 2:
                          if (!f.includes("project")) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 5), a(wa(t._id));
                        case 5:
                          e.next = 16;
                          break;
                        case 7:
                          if (!f.includes("mytask")) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 10), a(Oa({ workspace: r, query: o }))
                          );
                        case 10:
                          e.next = 16;
                          break;
                        case 12:
                          return (e.next = 14), a(Ca(r));
                        case 14:
                          return (e.next = 16), a(Na(r));
                        case 16:
                          return (e.next = 18), a(ya(i));
                        case 18:
                          return (e.next = 20), a(Sa(i));
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              zn,
              {
                open: n,
                click: function () {
                  a($e(!1)),
                    a(
                      La({
                        user: "",
                        name: "",
                        description: "",
                        startDateAt: "",
                        endDateAt: "",
                        state: 0,
                        progress: 0,
                        priority: 0,
                        project: "",
                        todaysTask: !1,
                      })
                    );
                },
              },
              c.a.createElement(
                A.a,
                { maxWidth: "md" },
                c.a.createElement(
                  W.a,
                  { mt: 5 },
                  c.a.createElement($o, {
                    projects: u,
                    submitFunction: b,
                    taskData: d,
                    update: p,
                    members: t.members,
                  })
                )
              ),
              c.a.createElement(
                "div",
                { className: e.historyArea },
                c.a.createElement(
                  "div",
                  { className: e.historyOutputArea },
                  c.a.createElement(ri, { taskId: i })
                ),
                c.a.createElement(
                  "div",
                  { className: e.commentArea },
                  c.a.createElement(ei, { taskId: i })
                )
              )
            )
          );
        },
        ii = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(ut),
            a = Object(l.c)(pn),
            n = Object(l.c)(un).map(function (e) {
              return { id: e._id, name: e.name };
            }),
            r = window.location.pathname,
            o = (function () {
              var t = Object(ne.a)(
                ae.a.mark(function t(n, c) {
                  return ae.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), e(ka({ task: n.task, workspace: c }))
                          );
                        case 2:
                          if (!r.includes("project")) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 5), e(wa(a._id));
                        case 5:
                          t.next = 16;
                          break;
                        case 7:
                          if (!r.includes("mytask")) {
                            t.next = 12;
                            break;
                          }
                          return (t.next = 10), e(Oa({ workspace: c }));
                        case 10:
                          t.next = 16;
                          break;
                        case 12:
                          return (t.next = 14), e(Ca(c));
                        case 14:
                          return (t.next = 16), e(Na(c));
                        case 16:
                          e(Ze(!1));
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, a) {
                return t.apply(this, arguments);
              };
            })();
          return c.a.createElement(
            c.a.Fragment,
            null,
            t
              ? c.a.createElement(
                  zn,
                  {
                    open: t,
                    click: function () {
                      return e(Ze(!1));
                    },
                  },
                  c.a.createElement(
                    A.a,
                    { maxWidth: "md" },
                    c.a.createElement(
                      W.a,
                      { mt: 5 },
                      c.a.createElement($o, {
                        projects: n,
                        submitFunction: o,
                        taskData: {
                          user: "",
                          name: "",
                          description: "",
                          startDateAt: "",
                          endDateAt: "",
                          state: 0,
                          progress: 0,
                          priority: 0,
                          project: "",
                          todaysTask: !1,
                        },
                      })
                    )
                  )
                )
              : ""
          );
        },
        li = Object(g.a)(function (e) {
          return Object(h.a)({
            root: {
              borderRadius: 10,
              backgroundColor: p.VWORK_LIGHT_BLUE,
              height: 235,
              marginTop: 25,
              width: "60%",
            },
            title: { fontSize: 20 },
            comment: { fontSize: 14 },
          });
        }),
        si = function () {
          var e,
            t,
            a = li(),
            n = Object(l.b)(),
            o = Object(l.c)(er);
          if (o.data) {
            var i = ha()(o.data.startedAt).utcOffset("+09:00"),
              s = ha()(o.data.endedAt).utcOffset("+09:00"),
              m = Math.round(s.diff(i, "minute", !0)),
              u = ha()(o.data.restStartedAt).utcOffset("+09:00"),
              d = ha()(o.data.restEndedAt).utcOffset("+09:00"),
              p = m - Math.round(d.diff(u, "minute", !0));
            (e = Math.round(p / 60)), (t = p % 60);
          }
          return (
            Object(r.useEffect)(
              function () {
                return function () {
                  n(
                    nr({
                      data: {
                        tasks: [],
                        _id: "",
                        user: "",
                        workspace: "",
                        createdAt: "",
                        startedAt: "",
                        endedAt: "",
                        restStartedAt: "",
                        restEndedAt: "",
                        comment: "",
                      },
                      tasks: [],
                    })
                  );
                };
              },
              [n]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                A.a,
                { maxWidth: "md" },
                c.a.createElement(
                  W.a,
                  { mt: 6 },
                  c.a.createElement(
                    C.a,
                    { container: !0, direction: "column" },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        W.a,
                        { borderBottom: 1 },
                        c.a.createElement(
                          w.a,
                          { variant: "h5" },
                          o.data && o.data.createdAt
                            ? ha()(o.data.createdAt)
                                .utcOffset("+09:00")
                                .format("YYYY\u5e74MM\u6708DD\u65e5")
                            : ""
                        )
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        W.a,
                        { mb: 3 },
                        c.a.createElement(
                          ca.a,
                          { className: a.root },
                          c.a.createElement(
                            C.a,
                            {
                              container: !0,
                              direction: "column",
                              justify: "space-between",
                              className: a.title,
                            },
                            c.a.createElement(
                              W.a,
                              { mt: 3, ml: 3 },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                "\u51fa\u793e:",
                                o.data && o.data.startedAt
                                  ? ha()(o.data.startedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : ""
                              )
                            ),
                            c.a.createElement(
                              W.a,
                              { mt: 3, ml: 3 },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                "\u4f11\u61a9:",
                                o.data && o.data.restStartedAt
                                  ? ha()(o.data.restStartedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : "",
                                "~",
                                o.data && o.data.restEndedAt
                                  ? ha()(o.data.restEndedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : ""
                              )
                            ),
                            c.a.createElement(
                              W.a,
                              { mt: 3, ml: 3 },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                "\u9000\u793e:",
                                o.data && o.data.endedAt
                                  ? ha()(o.data.endedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : ""
                              )
                            ),
                            c.a.createElement(
                              W.a,
                              { mt: 3, ml: 2 },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                c.a.createElement(
                                  "span",
                                  { style: { fontWeight: 600 } },
                                  "\u3010\u52e4\u52d9\u6642\u9593"
                                ),
                                ":",
                                e || t
                                  ? ""
                                      .concat(e, "\u6642\u9593")
                                      .concat(t, "\u5206")
                                  : "0\u6642\u95930\u5206",
                                "\u3011"
                              )
                            )
                          )
                        )
                      )
                    ),
                    c.a.createElement(
                      W.a,
                      { mt: 5 },
                      c.a.createElement(
                        C.a,
                        { item: !0 },
                        c.a.createElement(
                          C.a,
                          {
                            container: !0,
                            direction: "column",
                            justify: "flex-start",
                          },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              C.a,
                              { container: !0, direction: "row" },
                              c.a.createElement(
                                W.a,
                                { mr: 2 },
                                c.a.createElement(
                                  C.a,
                                  { item: !0 },
                                  c.a.createElement(oc.a, null)
                                )
                              ),
                              c.a.createElement(
                                C.a,
                                { item: !0, className: a.title },
                                "\u632f\u308a\u8fd4\u308a"
                              )
                            )
                          ),
                          c.a.createElement(
                            W.a,
                            { mt: 1 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(
                                "pre",
                                { className: a.comment },
                                o.data && o.data.comment
                              )
                            )
                          )
                        )
                      )
                    ),
                    c.a.createElement(
                      W.a,
                      null,
                      c.a.createElement(
                        C.a,
                        {
                          item: !0,
                          onClick: function () {
                            return n(et(!1));
                          },
                        },
                        c.a.createElement(Wn, {
                          title: "\u5bfe\u5fdc\u30bf\u30b9\u30af",
                          taskData: o.tasks,
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        mi = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(dt),
            a = Object(l.c)(Zn),
            n = Object(l.c)(zt),
            o = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a, n) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(Gn({ workspace: a, id: n }));
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, a) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          return (
            Object(r.useEffect)(
              function () {
                n && a && o(n, a);
              },
              [o, n, a]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                zn,
                {
                  open: t,
                  click: function () {
                    e(et(!1)),
                      e(
                        nr({
                          tasks: [],
                          _id: "",
                          user: "",
                          workspace: "",
                          createdAt: "",
                          startedAt: "",
                          endedAt: "",
                          restStartedAt: "",
                          restEndedAt: "",
                          comment: "",
                        })
                      );
                  },
                },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column" },
                  c.a.createElement(
                    A.a,
                    { maxWidth: "md" },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(si, null)
                    )
                  )
                )
              )
            )
          );
        },
        ui = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            content: {
              flexGrow: 1,
              padding: e.spacing(3),
              transition: e.transitions.create("margin", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              marginLeft: -240,
            },
            contentShift: {
              transition: e.transitions.create("margin", {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
              marginLeft: 0,
            },
            drawerHeader: Object(I.a)(
              {
                display: "flex",
                alignItems: "center",
                padding: e.spacing(0, 1),
              },
              e.mixins.toolbar,
              { justifyContent: "flex-end" }
            ),
          });
        }),
        di = function () {
          var e = ui(),
            t = Object(l.b)(),
            a = Object(l.c)(zt),
            n = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(Nt());
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t]
            ),
            o = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(tn(a));
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t, a]
            ),
            i = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(Na(a));
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t, a]
            ),
            s = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(Ca(a));
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t, a]
            ),
            u = Object(r.useRef)(!1);
          Object(r.useEffect)(
            function () {
              u.current ? (o(), i(), s()) : (n(), (u.current = !0));
            },
            [n, o, i, s, a]
          );
          var d = Object(l.c)(ot),
            p = Object(l.c)(it),
            f = Object(l.c)(lt),
            b = Object(l.c)(st),
            g = Object(l.c)(mt),
            h = Object(l.c)(ut),
            v = Object(l.c)(Et),
            j = Object(l.c)(dt);
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(xo, null),
            c.a.createElement(wt.a, { hideProgressBar: !0, autoClose: 2e3 }),
            c.a.createElement(Co.a, null),
            c.a.createElement(
              "main",
              {
                className: Object(y.a)(
                  e.content,
                  Object(E.a)({}, e.contentShift, d)
                ),
              },
              c.a.createElement("div", { className: e.drawerHeader }),
              p ? c.a.createElement(Ao, null) : "",
              f ? c.a.createElement(So, null) : "",
              b ? c.a.createElement(_o, null) : "",
              g ? c.a.createElement(oi, null) : "",
              h ? c.a.createElement(ii, null) : "",
              v ? c.a.createElement(Wo, null) : "",
              j ? c.a.createElement(mi, null) : "",
              c.a.createElement(
                m.d,
                null,
                c.a.createElement(
                  m.b,
                  { path: "/", exact: !0 },
                  c.a.createElement(Ur, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/mytask", exact: !0 },
                  c.a.createElement(Yc, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/work_manage", exact: !0 },
                  c.a.createElement(Qc, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/members", exact: !0 },
                  c.a.createElement(Jc, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/members/:memberId" },
                  c.a.createElement(wc, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/project_manage", exact: !0 },
                  c.a.createElement(yc, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/project/:projectId", exact: !0 },
                  c.a.createElement(lo, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/workspace_manage", exact: !0 },
                  c.a.createElement(Ac, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/notification", exact: !0 },
                  c.a.createElement(Fc, null)
                )
              )
            )
          );
        },
        pi = a(159),
        fi = Object(g.a)(function (e) {
          return {
            paper: {
              height: "70vh",
              padding: e.spacing(10, 4),
              marginTop: e.spacing(3),
              display: "flex",
              flexDirection: "column",
              backgroundColor: p.VWORK_WHITE,
              borderRadius: 20,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            logoIcon: {
              display: "inline-block",
              height: 32,
              width: 32,
              backgroundImage: "url(".concat("", "/images/logo192.png)"),
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: e.spacing(1),
            },
          };
        }),
        bi = function (e) {
          var t = e.children,
            a = e.buttonText,
            n = e.buttonPath,
            r = fi();
          return c.a.createElement(
            A.a,
            { maxWidth: "sm" },
            c.a.createElement(
              W.a,
              {
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              },
              c.a.createElement(
                W.a,
                { display: "flex", alignItems: "center" },
                c.a.createElement("div", { className: r.logoIcon }),
                c.a.createElement(
                  w.a,
                  {
                    display: "inline",
                    component: "h2",
                    variant: "h4",
                    className: "logo",
                  },
                  "VWORK"
                )
              ),
              c.a.createElement(
                s.b,
                { to: n },
                c.a.createElement(
                  re.a,
                  { color: "primary", variant: "outlined" },
                  a
                )
              )
            ),
            c.a.createElement("div", { className: r.paper }, t)
          );
        },
        Ei = Object(g.a)(function (e) {
          return {
            root: { height: "100vh" },
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            image: {
              backgroundImage: "url(".concat("", "/images/auth/sign_up.svg)"),
              backgroundRepeat: "no-repeat",
              backgroundColor: p.VWORK_WHITE,
              backgroundSize: "60%",
              backgroundPosition: "center",
            },
            paper: {
              height: "70vh",
              padding: e.spacing(10, 4),
              marginTop: e.spacing(3),
              display: "flex",
              flexDirection: "column",
              backgroundColor: p.VWORK_WHITE,
              borderRadius: 20,
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            logoIcon: {
              display: "inline-block",
              height: 32,
              width: 32,
              backgroundImage: "url(".concat("", "/images/logo192.png)"),
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: e.spacing(1),
            },
          };
        }),
        gi = function () {
          var e = Ei(),
            t = Object(l.b)();
          return c.a.createElement(
            C.a,
            { container: !0, component: "main", className: e.root },
            c.a.createElement(Co.a, null),
            c.a.createElement(
              C.a,
              {
                item: !0,
                container: !0,
                xs: 12,
                sm: 8,
                md: 6,
                component: pi.a,
                elevation: 6,
                direction: "column",
                alignItems: "center",
                square: !0,
                className: e.formArea,
              },
              c.a.createElement(
                bi,
                {
                  buttonPath: "/auth/login",
                  buttonText: "\u30ed\u30b0\u30a4\u30f3",
                },
                c.a.createElement(
                  w.a,
                  { component: "h1", variant: "h5" },
                  "\u4f1a\u54e1\u767b\u9332"
                ),
                c.a.createElement(
                  ue.d,
                  {
                    initialValues: { email: "", password: "" },
                    validationSchema: pe
                      .b()
                      .shape({
                        email: pe
                          .c()
                          .email(
                            "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                          )
                          .required(
                            "email\u306f\u5fc5\u9808\u3067\u3059\u3002"
                          ),
                        password: pe
                          .c()
                          .min(
                            6,
                            "6\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"
                          )
                          .required(
                            "\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u3059\u3002"
                          ),
                      }),
                    onSubmit: (function () {
                      var e = Object(ne.a)(
                        ae.a.mark(function e(a) {
                          return ae.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return t(Ue(!0)), (e.next = 3), t(Ct(a));
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  c.a.createElement(
                    ue.c,
                    { className: e.form },
                    c.a.createElement(ue.a, {
                      component: de.c,
                      name: "email",
                      type: "email",
                      label: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9*",
                      variant: "outlined",
                      margin: "normal",
                      fullWidth: !0,
                      id: "email",
                    }),
                    c.a.createElement("br", null),
                    c.a.createElement(ue.a, {
                      component: de.c,
                      type: "password",
                      label: "\u30d1\u30b9\u30ef\u30fc\u30c9*",
                      fullWidth: !0,
                      variant: "outlined",
                      margin: "normal",
                      name: "password",
                      id: "password",
                    }),
                    c.a.createElement("br", null),
                    c.a.createElement(
                      re.a,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: e.submit,
                      },
                      "\u4f1a\u54e1\u767b\u9332"
                    )
                  )
                )
              )
            ),
            c.a.createElement(C.a, {
              item: !0,
              xs: !1,
              sm: 4,
              md: 6,
              className: e.image,
            })
          );
        },
        hi = Object(g.a)(function (e) {
          return {
            root: { height: "100vh" },
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            image: {
              backgroundImage: "url(".concat("", "/images/auth/login.svg)"),
              backgroundRepeat: "no-repeat",
              backgroundColor: p.VWORK_WHITE,
              backgroundSize: "60%",
              backgroundPosition: "center",
            },
            paper: {
              height: "70vh",
              padding: e.spacing(10, 4),
              marginTop: e.spacing(3),
              display: "flex",
              flexDirection: "column",
              backgroundColor: p.VWORK_WHITE,
              borderRadius: 20,
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            logoIcon: {
              display: "inline-block",
              height: 32,
              width: 32,
              backgroundImage: "url(".concat("", "/images/logo192.png)"),
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: e.spacing(1),
            },
          };
        }),
        vi = function () {
          var e = hi(),
            t = Object(l.b)();
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              C.a,
              { container: !0, component: "main", className: e.root },
              c.a.createElement(Co.a, null),
              c.a.createElement(
                C.a,
                {
                  item: !0,
                  container: !0,
                  xs: 12,
                  sm: 8,
                  md: 6,
                  component: pi.a,
                  elevation: 6,
                  direction: "column",
                  alignItems: "center",
                  square: !0,
                  className: e.formArea,
                },
                c.a.createElement(
                  bi,
                  {
                    buttonPath: "/auth/signup",
                    buttonText: "\u4f1a\u54e1\u767b\u9332",
                  },
                  c.a.createElement(
                    w.a,
                    { component: "h1", variant: "h5" },
                    "\u30ed\u30b0\u30a4\u30f3"
                  ),
                  c.a.createElement(
                    ue.d,
                    {
                      initialValues: { email: "", password: "" },
                      validationSchema: pe
                        .b()
                        .shape({
                          email: pe
                            .c()
                            .email(
                              "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                            )
                            .required(
                              "email\u306f\u5fc5\u9808\u3067\u3059\u3002"
                            ),
                          password: pe
                            .c()
                            .min(
                              6,
                              "6\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"
                            )
                            .required(
                              "\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u3059\u3002"
                            ),
                        }),
                      onSubmit: (function () {
                        var e = Object(ne.a)(
                          ae.a.mark(function e(a) {
                            return ae.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return t(Ue(!0)), (e.next = 3), t(xt(a));
                                  case 3:
                                    t(Ue(!1));
                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    c.a.createElement(
                      ue.c,
                      { className: e.form },
                      c.a.createElement(ue.a, {
                        component: de.c,
                        name: "email",
                        type: "email",
                        label: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9*",
                        variant: "outlined",
                        margin: "normal",
                        fullWidth: !0,
                        id: "email",
                      }),
                      c.a.createElement("br", null),
                      c.a.createElement(ue.a, {
                        component: de.c,
                        type: "password",
                        label: "\u30d1\u30b9\u30ef\u30fc\u30c9*",
                        fullWidth: !0,
                        variant: "outlined",
                        margin: "normal",
                        name: "password",
                        id: "password",
                      }),
                      c.a.createElement("br", null),
                      c.a.createElement(
                        re.a,
                        {
                          type: "submit",
                          fullWidth: !0,
                          variant: "contained",
                          color: "primary",
                          className: e.submit,
                        },
                        "\u30ed\u30b0\u30a4\u30f3"
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0 },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: !0 },
                      c.a.createElement(
                        s.b,
                        { to: "/auth/forgot" },
                        c.a.createElement(
                          w.a,
                          { variant: "body2", className: "vwork-red" },
                          "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u304a\u5fd8\u308c\u306e\u65b9\u306f\u3053\u3061\u3089"
                        )
                      )
                    )
                  )
                )
              ),
              c.a.createElement(C.a, {
                item: !0,
                xs: !1,
                sm: 4,
                md: 6,
                className: e.image,
              })
            )
          );
        },
        ji = a(388),
        ki = a(385),
        Oi = Object(g.a)(function (e) {
          return {
            root: { height: "100vh" },
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            image: {
              backgroundImage: "url(".concat(
                "",
                "/images/auth/forgot_password.svg)"
              ),
              backgroundRepeat: "no-repeat",
              backgroundColor: p.VWORK_WHITE,
              backgroundSize: "60%",
              backgroundPosition: "center",
            },
            paper: {
              height: "70vh",
              padding: e.spacing(10, 4),
              marginTop: e.spacing(3),
              display: "flex",
              flexDirection: "column",
              backgroundColor: p.VWORK_WHITE,
              borderRadius: 20,
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            logoIcon: {
              display: "inline-block",
              height: 32,
              width: 32,
              backgroundImage: "url(".concat("", "/images/logo192.png)"),
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: e.spacing(1),
            },
          };
        }),
        wi = function () {
          var e = Oi(),
            t = Object(l.b)();
          return c.a.createElement(
            C.a,
            { container: !0, component: "main", className: e.root },
            c.a.createElement(Co.a, null),
            c.a.createElement(
              C.a,
              {
                item: !0,
                container: !0,
                xs: 12,
                sm: 8,
                md: 6,
                component: pi.a,
                elevation: 6,
                direction: "column",
                alignItems: "center",
                square: !0,
                className: e.formArea,
              },
              c.a.createElement(
                bi,
                {
                  buttonPath: "/auth/login",
                  buttonText: "\u30ed\u30b0\u30a4\u30f3",
                },
                c.a.createElement(
                  w.a,
                  { component: "h1", variant: "h5" },
                  "\u30d1\u30b9\u30ef\u30fc\u30c9\u518d\u8a2d\u5b9a"
                ),
                c.a.createElement(
                  ue.d,
                  {
                    initialValues: { email: "" },
                    validationSchema: pe
                      .b()
                      .shape({
                        email: pe
                          .c()
                          .email(
                            "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                          )
                          .required(
                            "email\u306f\u5fc5\u9808\u3067\u3059\u3002"
                          ),
                      }),
                    onSubmit: (function () {
                      var e = Object(ne.a)(
                        ae.a.mark(function e(a) {
                          return ae.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t(Ue(!0)), (e.next = 3), t(St(a.email))
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  c.a.createElement(
                    ue.c,
                    { className: e.form },
                    c.a.createElement(ue.a, {
                      component: de.c,
                      name: "email",
                      type: "email",
                      label: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9*",
                      variant: "outlined",
                      margin: "normal",
                      fullWidth: !0,
                      id: "email",
                    }),
                    c.a.createElement("br", null),
                    c.a.createElement(
                      re.a,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: e.submit,
                      },
                      "\u7533\u8acb\u3059\u308b"
                    )
                  )
                )
              )
            ),
            c.a.createElement(C.a, {
              item: !0,
              xs: !1,
              sm: 4,
              md: 6,
              className: e.image,
            })
          );
        },
        yi = Object(g.a)(function (e) {
          return {
            root: { height: "100vh" },
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            image: {
              backgroundImage: "url(".concat(
                "",
                "/images/auth/reset_password.svg)"
              ),
              backgroundRepeat: "no-repeat",
              backgroundColor: p.VWORK_WHITE,
              backgroundSize: "60%",
              backgroundPosition: "center",
            },
            paper: {
              height: "70vh",
              padding: e.spacing(10, 4),
              marginTop: e.spacing(3),
              display: "flex",
              flexDirection: "column",
              backgroundColor: p.VWORK_WHITE,
              borderRadius: 20,
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            logoIcon: {
              display: "inline-block",
              height: 32,
              width: 32,
              backgroundImage: "url(".concat("", "/images/logo192.png)"),
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: e.spacing(1),
            },
          };
        }),
        xi = function () {
          var e = yi(),
            t = Object(l.b)(),
            a = window.location.search.slice(1);
          return c.a.createElement(
            C.a,
            { container: !0, component: "main", className: e.root },
            c.a.createElement(Co.a, null),
            c.a.createElement(
              C.a,
              {
                item: !0,
                container: !0,
                xs: 12,
                sm: 8,
                md: 6,
                component: pi.a,
                elevation: 6,
                direction: "column",
                alignItems: "center",
                square: !0,
                className: e.formArea,
              },
              c.a.createElement(
                bi,
                {
                  buttonPath: "/auth/login",
                  buttonText: "\u30ed\u30b0\u30a4\u30f3",
                },
                c.a.createElement(
                  w.a,
                  { component: "h1", variant: "h5" },
                  "\u30d1\u30b9\u30ef\u30fc\u30c9\u518d\u8a2d\u5b9a"
                ),
                c.a.createElement(
                  ue.d,
                  {
                    initialValues: { password: "" },
                    validationSchema: pe
                      .b()
                      .shape({
                        password: pe
                          .c()
                          .min(
                            6,
                            "6\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"
                          )
                          .required(
                            "\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u3059\u3002"
                          ),
                      }),
                    onSubmit: (function () {
                      var e = Object(ne.a)(
                        ae.a.mark(function e(n) {
                          return ae.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t(Ue(!0)),
                                    (e.next = 3),
                                    t(
                                      It({
                                        resetToken: a,
                                        password: n.password,
                                      })
                                    )
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  c.a.createElement(
                    ue.c,
                    { className: e.form },
                    c.a.createElement(ue.a, {
                      component: de.c,
                      name: "password",
                      type: "password",
                      label: "\u65b0\u898f\u30d1\u30b9\u30ef\u30fc\u30c9*",
                      variant: "outlined",
                      margin: "normal",
                      fullWidth: !0,
                      id: "password",
                    }),
                    c.a.createElement("br", null),
                    c.a.createElement(
                      re.a,
                      {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: e.submit,
                      },
                      "\u8a2d\u5b9a\u3059\u308b"
                    )
                  )
                )
              )
            ),
            c.a.createElement(C.a, {
              item: !0,
              xs: !1,
              sm: 4,
              md: 6,
              className: e.image,
            })
          );
        },
        Ci = Object(g.a)(function (e) {
          return {
            root: { height: "100vh" },
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            image: {
              backgroundImage: "url(".concat("", "/images/auth/send_mail.svg)"),
              backgroundRepeat: "no-repeat",
              backgroundColor: p.VWORK_WHITE,
              backgroundSize: "60%",
              backgroundPosition: "center",
            },
            paper: {
              height: "70vh",
              padding: e.spacing(10, 4),
              marginTop: e.spacing(3),
              display: "flex",
              flexDirection: "column",
              backgroundColor: p.VWORK_WHITE,
              borderRadius: 20,
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            logoIcon: {
              display: "inline-block",
              height: 32,
              width: 32,
              backgroundImage: "url(".concat("", "/images/logo192.png)"),
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: e.spacing(1),
            },
          };
        }),
        Ni = function () {
          var e = Ci();
          return c.a.createElement(
            C.a,
            { container: !0, component: "main", className: e.root },
            c.a.createElement(Co.a, null),
            c.a.createElement(
              C.a,
              {
                item: !0,
                container: !0,
                xs: 12,
                sm: 8,
                md: 6,
                component: pi.a,
                elevation: 6,
                direction: "column",
                alignItems: "center",
                square: !0,
                className: e.formArea,
              },
              c.a.createElement(
                bi,
                {
                  buttonPath: "/auth/login",
                  buttonText: "\u30ed\u30b0\u30a4\u30f3",
                },
                c.a.createElement(
                  w.a,
                  { component: "h1", variant: "h5" },
                  "\u30d1\u30b9\u30ef\u30fc\u30c9\u518d\u8a2d\u5b9a\u306e\u7533\u8acb\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3057\u305f\u3002"
                ),
                c.a.createElement(
                  W.a,
                  { my: 5 },
                  c.a.createElement(
                    w.a,
                    { variant: "body1" },
                    "\u5165\u529b\u3044\u305f\u3060\u3044\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5b9b\u306b",
                    c.a.createElement(
                      "span",
                      { className: "vwork-red" },
                      "\u30d1\u30b9\u30ef\u30fc\u30c9\u518d\u8a2d\u5b9a\u7528\u306eURL"
                    ),
                    "\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002"
                  )
                )
              )
            ),
            c.a.createElement(C.a, {
              item: !0,
              xs: !1,
              sm: 4,
              md: 6,
              className: e.image,
            })
          );
        },
        Ai = function () {
          var e = Object(l.b)(),
            t = localStorage.token;
          Object(r.useEffect)(
            function () {
              t && (e(Ue(!0)), e(Nt()), e(Ue(!1)));
            },
            [e, t]
          );
          var a = Object(l.c)(Kt),
            n = Object(l.c)(Vt),
            o = function () {
              e(Ht(!1));
            };
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              ji.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: n,
                onClose: o,
              },
              c.a.createElement(ki.a, { onClose: o, severity: "error" }, a)
            ),
            c.a.createElement(
              m.d,
              null,
              c.a.createElement(
                m.b,
                { exact: !0, path: "/auth/signup" },
                c.a.createElement(gi, null)
              ),
              c.a.createElement(
                m.b,
                { exact: !0, path: "/auth/login" },
                c.a.createElement(vi, null)
              ),
              c.a.createElement(
                m.b,
                { exact: !0, path: "/auth/forgot/complete" },
                c.a.createElement(Ni, null)
              ),
              c.a.createElement(
                m.b,
                { exact: !0, path: "/auth/forgot" },
                c.a.createElement(wi, null)
              ),
              c.a.createElement(
                m.b,
                { exact: !0, path: "/auth/reset" },
                c.a.createElement(xi, null)
              )
            )
          );
        },
        Ti = a(382),
        Si = a(378),
        Ii = Object(g.a)(function (e) {
          return Object(h.a)({
            backdrop: { zIndex: e.zIndex.drawer + 1500, color: "#fff" },
          });
        }),
        Wi = function () {
          var e = Ii(),
            t = Object(l.c)(ct),
            a = localStorage.token;
          return c.a.createElement(
            Ti.a,
            { theme: f },
            t
              ? c.a.createElement(
                  Rn.a,
                  { className: e.backdrop, open: !0 },
                  c.a.createElement(Si.a, { color: "primary" })
                )
              : "",
            c.a.createElement(
              s.a,
              null,
              c.a.createElement(
                m.d,
                null,
                c.a.createElement(
                  m.b,
                  { path: "/auth" },
                  c.a.createElement(Ai, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/regist" },
                  c.a.createElement(ta, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/admin" },
                  a
                    ? c.a.createElement(U, null)
                    : c.a.createElement(m.a, { to: "/auth/login" }),
                  c.a.createElement(U, null)
                ),
                c.a.createElement(
                  m.b,
                  { path: "/workspaces" },
                  a
                    ? c.a.createElement(Ea, null)
                    : c.a.createElement(m.a, { to: "/auth/login" })
                ),
                c.a.createElement(
                  m.b,
                  { path: "/" },
                  a
                    ? c.a.createElement(di, null)
                    : c.a.createElement(m.a, { to: "/auth/login" })
                )
              )
            )
          );
        },
        Ri = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function _i(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function () {
                  "installed" === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var zi = Object(fe.a)({
        reducer: {
          auth: Lt,
          app: gt,
          dashboard: qr,
          regist: Re,
          project: On,
          task: qa,
          workspace: pa,
          attendance: cr,
          member: vc,
          notification: Bc,
        },
      });
      i.a.render(
        c.a.createElement(l.a, { store: zi }, c.a.createElement(Wi, null)),
        document.getElementById("root")
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("", "/service-worker.js");
              Ri
                ? (!(function (e, t) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (a) {
                        var n = a.headers.get("content-type");
                        404 === a.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : _i(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : _i(t, e);
            });
          }
        })();
    },
  },
  [[279, 1, 2]],
]);
//# sourceMappingURL=main.a959539a.chunk.js.map
