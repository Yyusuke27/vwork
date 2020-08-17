(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    217: function (e, t, a) {},
    270: function (e, t, a) {
      e.exports = a(303);
    },
    275: function (e, t, a) {},
    300: function (e, t, a) {},
    303: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        r = a(0),
        c = a.n(r),
        o = a(25),
        i = a.n(o),
        l = (a(275), a(3)),
        s = a(21),
        m = a(24),
        u = a(250);
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
        E = a(57),
        b = a(96),
        g = a(92),
        h = a(210),
        v = a(354),
        j = a(61),
        k = a.n(j),
        O = a(355),
        w = a(76),
        y = a(2),
        x = a(305),
        C = a(356),
        N = a(380),
        S = a(352),
        A = Object(g.a)(function (e) {
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
        T = function (e) {
          var t = e.handleDrawerOpen,
            a = e.open,
            n = A();
          return c.a.createElement(
            "div",
            { className: n.root },
            c.a.createElement(
              S.a,
              null,
              c.a.createElement(
                v.a,
                {
                  style: { backgroundColor: p.VWORK_WHITE },
                  position: "fixed",
                  className: Object(y.a)(
                    n.appBar,
                    Object(b.a)({}, n.appBarShift, a)
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
        W = a(41),
        R = a(375),
        I = a(358),
        _ = a(307),
        B = a(359),
        K = a(360),
        z = a(98),
        V = a.n(z),
        D = a(128),
        F = a.n(D),
        M = a(230),
        L = a.n(M),
        H = a(357),
        P =
          (a(217),
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
              drawerHeader: Object(W.a)(
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
            n = P();
          return c.a.createElement(
            "div",
            { className: n.root },
            c.a.createElement(
              S.a,
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
                      R.a,
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
                  I.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: n.icon },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(K.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: n.icon },
                      c.a.createElement(F.a, null)
                    ),
                    c.a.createElement(K.a, {
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
                      B.a,
                      { className: n.icon },
                      c.a.createElement(L.a, null)
                    ),
                    c.a.createElement(K.a, { primary: "Users" })
                  )
                )
              )
            )
          );
        },
        q = function () {
          var e = c.a.useState(!0),
            t = Object(E.a)(e, 2),
            a = t[0],
            n = t[1];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(T, {
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
        G = a(129),
        X = a.n(G),
        J = a(130),
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
            drawerHeader: Object(W.a)(
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
              S.a,
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
                  I.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: e.iconStyle },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(K.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: e.iconStyle },
                      c.a.createElement(X.a, null)
                    ),
                    c.a.createElement(K.a, {
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
                      B.a,
                      { className: e.iconStyle },
                      c.a.createElement(Q.a, null)
                    ),
                    c.a.createElement(K.a, {
                      primary: "\u52e4\u6020\u7ba1\u7406",
                    })
                  )
                ),
                c.a.createElement(
                  R.a,
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
        ee = a(316),
        te = a(5),
        ae = a.n(te),
        ne = a(9),
        re = a(193),
        ce = a(309),
        oe = a(308),
        ie = a(362),
        le = a(361),
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
                R.a,
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
                R.a,
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
        de = a(13),
        pe = a(12),
        fe = a(15),
        Ee = a(23),
        be = a.n(Ee),
        ge = "https://v-work.herokuapp.com/",
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
                          be.a.post("".concat(ge, "api/v1/registration"), t, {
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
                          be.a.get(
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
                          be.a.post(
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
        Se = (ye.editInviteToken, ye.editInviteUser),
        Ae = function (e) {
          return e.regist.regist;
        },
        Te = function (e) {
          return e.regist.invite.user;
        },
        We = function (e) {
          return e.regist.invite.user.email;
        },
        Re = function (e) {
          return e.regist.invite.user.name;
        },
        Ie = we.reducer,
        _e = a(381),
        Be = a(364),
        Ke = a(378),
        ze = Object(g.a)(function (e) {
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
          var e = ze(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(l.b)(),
            n = Object(m.f)();
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
                    Be.a,
                    { key: e },
                    c.a.createElement(Ke.a, null, e)
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
            n = Object(m.f)();
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
                    Be.a,
                    { key: e },
                    c.a.createElement(Ke.a, null, e)
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
        Me = a(184),
        Le = a.n(Me),
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
      var Pe = function () {
          var e = He(),
            t = [
              "\u57fa\u672c\u8a2d\u5b9a",
              "\u500b\u4eba\u8a2d\u5b9a",
              "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85",
              "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a",
            ],
            a = Object(l.b)(),
            n = Object(m.f)();
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
                    Be.a,
                    { key: e },
                    c.a.createElement(Ke.a, null, e)
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
                                  R.a,
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
                                    c.a.createElement(Le.a, null)
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
        Et = function (e) {
          return e.app.addMemberButton;
        },
        bt = function (e) {
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
            n = Object(l.c)(Ae);
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
                    Be.a,
                    { key: e },
                    c.a.createElement(Ke.a, null, e)
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
                                ((r = Object(W.a)({}, n)).project = t),
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
            a = Object(m.f)();
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
                    Be.a,
                    { key: e },
                    c.a.createElement(Ke.a, null, e)
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
              m.c,
              null,
              c.a.createElement(
                m.a,
                { path: "/regist/step/1", exact: !0 },
                c.a.createElement(Ve, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/step/2", exact: !0 },
                c.a.createElement(Fe, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/step/3", exact: !0 },
                c.a.createElement(Pe, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/step/4", exact: !0 },
                c.a.createElement(vt, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/step/5", exact: !0 },
                c.a.createElement(kt, null)
              )
            )
          );
        },
        wt = "https://v-work.herokuapp.com/",
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
                          be.a.post("".concat(wt, "api/v1/auth/login"), t, {
                            headers: { "Content-Type": "application/json" },
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
                          be.a.post("".concat(wt, "api/v1/auth/signup"), t, {
                            headers: { "Content-Type": "application/json" },
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
                        be.a.get("".concat(wt, "api/v1/auth/current"), {
                          headers: { Authorization: "Bearer ".concat(yt) },
                        })
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
        St = Object(fe.b)(
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
                        be.a.get("".concat(wt, "api/v1/auth/logout"))
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
                          be.a.put(
                            "".concat(wt, "api/v1/users/").concat(t.userId),
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
        Tt = Object(fe.c)({
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
            workspace: { id: "", name: "" },
            errorMessage: "",
            errorOpen: !1,
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
                  (e.workspace = t.payload.workspace),
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
              e.addCase(St.fulfilled, function (e, t) {
                localStorage.clear(), (window.location.href = "/auth/login");
              }),
              e.addCase(At.fulfilled, function (e, t) {});
          },
        }),
        Wt = function (e) {
          return e.auth.user;
        },
        Rt = function (e) {
          return e.auth.user.lastAccessWorkspace;
        },
        It = function (e) {
          return e.auth.workspace;
        },
        _t = function (e) {
          return e.auth.errorMessage;
        },
        Bt = function (e) {
          return e.auth.errorOpen;
        },
        Kt = Tt.actions,
        zt = Kt.setErrorOpen,
        Vt = (Kt.setUser, Tt.reducer),
        Dt = function () {
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
                m.c,
                null,
                c.a.createElement(
                  m.a,
                  { path: "/regist/welcome" },
                  c.a.createElement(me, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/regist/step" },
                  c.a.createElement(Ot, null)
                )
              )
            )
          );
        },
        Ft = Object(g.a)(function (e) {
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
        Mt = function () {
          var e = Ft(),
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
                  R.a,
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
                  R.a,
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
        Lt = Object(g.a)(function (e) {
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
        Ht = function () {
          var e = Lt(),
            t = Object(l.b)(),
            a = Object(m.f)(),
            n = Object(l.c)(Te),
            r = Object(l.c)(We);
          return (
            n.registration && a.push("/regist/invitee/step2"),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                le.a,
                { id: "alert-dialog-slide-title" },
                c.a.createElement(
                  R.a,
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
                    var r = Object(W.a)({}, n, {}, e);
                    t(Se(r)), a.push("/regist/invitee/step2");
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
        Pt = Object(g.a)(function (e) {
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
        Yt = function () {
          var e = Pt(),
            t = Object(l.b)(),
            a = Object(l.c)(Te),
            n = Object(l.c)(Re),
            r = localStorage.Itoken;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              le.a,
              { id: "alert-dialog-slide-title" },
              c.a.createElement(
                R.a,
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
                                (c = Object(W.a)({}, a, {}, n)),
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
        qt = Object(g.a)(function (e) {
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
        Ut = function () {
          var e = qt(),
            t = Object(m.f)();
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              le.a,
              { id: "alert-dialog-slide-title" },
              c.a.createElement(
                R.a,
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
        Gt = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              m.c,
              null,
              c.a.createElement(
                m.a,
                { path: "/regist/invitee/welcome" },
                c.a.createElement(Mt, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/invitee/step1", exact: !0 },
                c.a.createElement(Ht, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/invitee/step2", exact: !0 },
                c.a.createElement(Yt, null)
              ),
              c.a.createElement(
                m.a,
                { path: "/regist/invitee/step3", exact: !0 },
                c.a.createElement(Ut, null)
              )
            )
          );
        },
        Xt =
          (a(300),
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
                  S.a,
                  { maxWidth: "md" },
                  c.a.createElement(
                    s.a,
                    null,
                    c.a.createElement(
                      m.c,
                      null,
                      c.a.createElement(
                        m.a,
                        { path: "/regist/invitee" },
                        c.a.createElement(Gt, null)
                      ),
                      c.a.createElement(
                        m.a,
                        { path: "/regist" },
                        c.a.createElement(Dt, null)
                      )
                    )
                  )
                )
              )
            );
          }),
        Jt = Object(g.a)(function (e) {
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
            drawerHeader: Object(W.a)(
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
        Qt = function () {
          var e = Jt();
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(
              S.a,
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
                  I.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: e.iconStyle },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(K.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: e.iconStyle },
                      c.a.createElement(X.a, null)
                    ),
                    c.a.createElement(K.a, {
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
                      B.a,
                      { className: e.iconStyle },
                      c.a.createElement(Q.a, null)
                    ),
                    c.a.createElement(K.a, {
                      primary: "\u52e4\u6020\u7ba1\u7406",
                    })
                  )
                ),
                c.a.createElement(
                  R.a,
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
        $t = a(365),
        Zt = a(366),
        ea = Object(g.a)(function (e) {
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
        ta = function (e) {
          var t = e.id,
            a = e.name,
            n = ea(),
            r = Object(l.c)(Wt),
            o = Object(l.b)();
          return c.a.createElement(
            C.a,
            { item: !0, xs: 12, style: { marginBottom: 10 } },
            c.a.createElement(
              $t.a,
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
                                At({
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
                Zt.a,
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
        aa = localStorage.token,
        na = Object(fe.b)(
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
                        be.a.get(
                          "".concat(
                            "https://v-work.herokuapp.com/",
                            "api/v1/workspaces/"
                          ),
                          { headers: { Authorization: "Bearer ".concat(aa) } }
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
        ra = Object(fe.c)({
          name: "workspaces",
          initialState: { workspaces: [] },
          reducers: {},
          extraReducers: function (e) {
            e.addCase(na.fulfilled, function (e, t) {
              e.workspaces = t.payload.data;
            });
          },
        }),
        ca = function (e) {
          return e.workspace.workspaces;
        },
        oa = ra.reducer,
        ia = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 20, paddingLeft: 10 },
            workspacesArea: {
              height: "42vh",
              overflowY: "scroll",
              overflowX: "hidden",
            },
          });
        }),
        la = function () {
          var e = ia(),
            t = Object(l.b)(),
            a = Object(r.useCallback)(
              Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(na());
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
          var n = Object(l.c)(ca);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
              { borderBottom: 1, className: e.title, my: 5 },
              "WORKSPACE\u4e00\u89a7"
            ),
            c.a.createElement(
              C.a,
              { container: !0, className: e.workspacesArea },
              n.map(function (e, t) {
                return c.a.createElement(ta, {
                  name: e.name,
                  id: e._id,
                  key: t,
                });
              })
            )
          );
        },
        sa = function () {
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
              c.a.createElement(Qt, null),
              c.a.createElement(
                ee.a,
                {
                  open: !0,
                  keepMounted: !0,
                  maxWidth: "xl",
                  className: "registDialog",
                },
                c.a.createElement(
                  S.a,
                  { maxWidth: "md" },
                  c.a.createElement(la, null)
                )
              )
            )
          );
        },
        ma = a(31),
        ua = a.n(ma),
        da = a(43),
        pa = "https://v-work.herokuapp.com/",
        fa = localStorage.token,
        Ea = Object(fe.b)(
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
                          be.a.post(
                            ""
                              .concat(pa, "api/v1/workspaces/")
                              .concat(t.workspace, "/tasks"),
                            t.task,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(fa),
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
        ba = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(pa, "api/v1/workspaces/")
                              .concat(t.workspace, "/tasks")
                              .concat(t.query ? "?state=".concat(t.query) : ""),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(fa),
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
        ga = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(pa, "api/v1/projects/")
                              .concat(t, "/tasks"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(fa),
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
        ha = Object(fe.b)(
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
                          be.a.get("".concat(pa, "api/v1/tasks/").concat(t), {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer ".concat(fa),
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
        va = Object(fe.b)(
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
                          be.a.put(
                            "".concat(pa, "api/v1/tasks/").concat(t.id),
                            t.task,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(fa),
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
        ja = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(pa, "api/v1/workspaces/")
                              .concat(t, "/tasks/recent"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(fa),
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
        ka = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(pa, "api/v1/workspaces/")
                              .concat(t, "/tasks/near_deadline"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(fa),
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
        Oa = Object(fe.c)({
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
          },
          reducers: {
            setTask: function (e, t) {
              e.task = t.payload;
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
            e.addCase(Ea.fulfilled, function (e, t) {
              da.b.info(
                "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
                { position: da.b.POSITION.TOP_CENTER }
              );
            }),
              e.addCase(va.fulfilled, function (e, t) {
                da.b.info(
                  "\u30bf\u30b9\u30af\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002",
                  { position: da.b.POSITION.TOP_CENTER }
                );
              }),
              e.addCase(ba.fulfilled, function (e, t) {
                e.tasks = t.payload;
              }),
              e.addCase(ga.fulfilled, function (e, t) {
                e.tasks = t.payload;
              }),
              e.addCase(ha.fulfilled, function (e, t) {
                e.task = t.payload.data;
              }),
              e.addCase(ja.fulfilled, function (e, t) {
                e.recentTasks = t.payload.data;
              }),
              e.addCase(ka.fulfilled, function (e, t) {
                e.nearDeadlineTasks = t.payload.data;
              });
          },
        }),
        wa = function (e) {
          return e.task.tasks;
        },
        ya = function (e) {
          return e.task.task;
        },
        xa = function (e) {
          return e.task.selectedTask;
        },
        Ca = function (e) {
          return e.task.recentTasks;
        },
        Na = function (e) {
          return e.task.nearDeadlineTasks;
        },
        Sa = function (e) {
          return e.task.todaysDoneTasks;
        },
        Aa = function (e) {
          return e.task.query;
        },
        Ta = Oa.actions,
        Wa = Ta.setSelectedTask,
        Ra = Ta.setTodaysDoneTasks,
        Ia = Ta.setTask,
        _a = Ta.setQuery,
        Ba = Oa.reducer,
        Ka = a(234),
        za = a.n(Ka),
        Va = a(235),
        Da = a.n(Va),
        Fa = a(140),
        Ma = a.n(Fa),
        La = a(382),
        Ha = Object(g.a)(function (e) {
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
        Pa = function (e) {
          var t = e.iconType,
            a = void 0 === t ? "" : t,
            n = e.data,
            r = Ha(),
            o = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              Zt.a,
              { className: r.root },
              c.a.createElement(
                $t.a,
                {
                  className: r.cardActionArea,
                  onClick: function () {
                    o(Wa(n._id)), o($e(!0));
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
                          ? c.a.createElement(za.a, { color: "primary" })
                          : c.a.createElement(Ma.a, { color: "secondary" })
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
                        ? c.a.createElement(La.a, {
                            label: n.project.name,
                            variant: "outlined",
                            color: "secondary",
                          })
                        : c.a.createElement(La.a, {
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
                      c.a.createElement(Da.a, { color: "disabled" })
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(
                        w.a,
                        null,
                        n.endDateAt
                          ? ua()(n.endDateAt).format("YYYY/MM/DD")
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
                          { className: r.avatar },
                          n.user.name.slice(0, 1)
                        )
                      : c.a.createElement(N.a, null, "V")
                  )
                )
              )
            )
          );
        },
        Ya = a(6),
        qa = a(312),
        Ua = a(318),
        Ga = a(256),
        Xa = a(367),
        Ja = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 23 },
            margin: { margin: e.spacing(1) },
          });
        }),
        Qa = Object(Ya.a)(function (e) {
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
        })(Ga.a),
        $a = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = e.iconType,
            r = void 0 === n ? "" : n,
            o = e.taskData,
            i = Ja(),
            l = c.a.useState(""),
            s = Object(E.a)(l, 2),
            m = s[0],
            u = s[1],
            d = o || [
              {
                name: "\u30bf\u30b9\u30af",
                project: {
                  name: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
                  _id: "12345",
                },
                endDateAt: "2020-10-10",
                _id: "12345",
                user: { name: "\u592a\u90ce", _id: "12345" },
              },
            ];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
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
                        R.a,
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
                        qa.a,
                        { className: i.margin },
                        c.a.createElement(
                          Ua.a,
                          {
                            value: m,
                            onChange: function (e) {
                              u(e.target.value);
                            },
                            input: c.a.createElement(Qa, null),
                            style: { width: 200 },
                          },
                          c.a.createElement(
                            Xa.a,
                            { value: "" },
                            "\u672a\u9078\u629e"
                          ),
                          c.a.createElement(Xa.a, { value: "0" }, "TODO"),
                          c.a.createElement(
                            Xa.a,
                            { value: "1" },
                            "\u9032\u884c\u4e2d"
                          ),
                          c.a.createElement(
                            Xa.a,
                            { value: "2" },
                            "\u5b8c\u4e86"
                          )
                        )
                      )
                    : ""
                )
              ),
              c.a.createElement(
                R.a,
                { mt: 2 },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column", justify: "flex-start" },
                  d.map(function (e, t) {
                    return c.a.createElement(Pa, {
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
        Za = a(254),
        en = Object(g.a)(function (e) {
          return Object(h.a)({
            backdrop: { zIndex: e.zIndex.drawer, color: "#fff" },
            drawer: { width: "50%", flexShrink: 0 },
            drawerPaper: { width: "50%" },
            workSpaceIcon: { marginTop: 10 },
          });
        }),
        tn = function (e) {
          var t = en();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Za.a, {
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
          );
        },
        an = a(154),
        nn = a.n(an),
        rn = a(155),
        cn = a.n(rn),
        on = Object(g.a)(function (e) {
          return Object(h.a)({
            button: { position: "absolute", top: 25, right: 50 },
          });
        }),
        ln = function () {
          var e = on(),
            t = Object(l.b)(),
            a = Object(l.c)(pt),
            n = Object(l.c)(wa),
            o = Object(l.c)(Rt),
            i = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t(ba({ workspace: a }));
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
              tn,
              {
                open: a,
                click: function () {
                  return t(tt(!1));
                },
              },
              c.a.createElement(
                S.a,
                { maxWidth: "md" },
                c.a.createElement(
                  R.a,
                  { py: 4 },
                  c.a.createElement(
                    ue.d,
                    {
                      initialValues: { tasks: [] },
                      validationSchema: pe.b().shape({}),
                      onSubmit: function (e, a) {
                        a.setSubmitting(!1), t(Ra(e.tasks));
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
                                R.a,
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
                                      icon: c.a.createElement(nn.a, null),
                                      checkedIcon: c.a.createElement(
                                        cn.a,
                                        null
                                      ),
                                    })
                                  );
                                }),
                              c.a.createElement("br", null),
                              c.a.createElement(
                                R.a,
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
                                      icon: c.a.createElement(nn.a, null),
                                      checkedIcon: c.a.createElement(
                                        cn.a,
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
        sn = Object(g.a)(function (e) {
          return Object(h.a)({ title: { fontSize: 23 } });
        }),
        mn = function () {
          var e = sn(),
            t = Object(l.b)(),
            a = Object(l.c)(ft);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              tn,
              {
                open: a,
                click: function () {
                  return t(at(!1));
                },
              },
              c.a.createElement(
                S.a,
                { maxWidth: "md" },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column" },
                  c.a.createElement(
                    R.a,
                    { mt: 5 },
                    c.a.createElement(
                      C.a,
                      { item: !0, style: { width: "35%" } },
                      c.a.createElement(
                        R.a,
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
        un = localStorage.token,
        dn = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(
                                "https://v-work.herokuapp.com/",
                                "api/v1/workspaces/"
                              )
                              .concat(t, "/attendances/today"),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(un),
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
        pn = Object(fe.b)(
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
                          be.a.put(
                            ""
                              .concat(
                                "https://v-work.herokuapp.com/",
                                "api/v1/attendances/"
                              )
                              .concat(t.id),
                            t.attendance,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(un),
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
        fn = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(
                                "https://v-work.herokuapp.com/",
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
                                Authorization: "Bearer ".concat(un),
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
        En = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(
                                "https://v-work.herokuapp.com/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/attendances/")
                              .concat(t.id),
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(un),
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
        bn = Object(fe.c)({
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
          },
          extraReducers: function (e) {
            e.addCase(dn.fulfilled, function (e, t) {
              e.today = t.payload.data;
            }),
              e.addCase(pn.fulfilled, function (e, t) {
                da.b.info(
                  "\u52e4\u6020\u60c5\u5831\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002",
                  { position: da.b.POSITION.TOP_CENTER }
                ),
                  (e.today = t.payload.data);
              }),
              e.addCase(fn.fulfilled, function (e, t) {
                e.attendances = t.payload.data;
              }),
              e.addCase(En.fulfilled, function (e, t) {
                (e.attendance.data = t.payload.data),
                  (e.attendance.tasks = t.payload.tasks);
              });
          },
        }),
        gn = function (e) {
          return e.attendance.today;
        },
        hn = function (e) {
          return e.attendance.attendances;
        },
        vn = function (e) {
          return e.attendance.selectedAttendance;
        },
        jn = function (e) {
          return e.attendance.attendance;
        },
        kn = bn.actions,
        On = kn.setSelectedAttendance,
        wn = kn.setAttendance,
        yn = bn.reducer,
        xn = a(369),
        Cn = a(368),
        Nn = a(306),
        Sn = a(236),
        An = a.n(Sn),
        Tn = Object(g.a)(function (e) {
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
        Wn = c.a.forwardRef(function (e, t) {
          return c.a.createElement(
            Nn.a,
            Object.assign({ direction: "up", ref: t }, e)
          );
        }),
        Rn = function () {
          var e = Tn(),
            t = a(31),
            n = c.a.useState(!1),
            r = Object(E.a)(n, 2),
            o = r[0],
            i = r[1],
            s = Object(l.c)(gn),
            m = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            p(pn({ id: s._id, attendance: { startedAt: t() } }))
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
                              pn({
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
                              pn({
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
            b = Object(l.c)(ft),
            g = Object(l.c)(Sa);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
              { borderBottom: 1, className: e.mainTitle },
              "\u52e4\u6020\u7ba1\u7406"
            ),
            s._id
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(
                    Zt.a,
                    { className: e.root },
                    c.a.createElement(
                      Cn.a,
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
                      xn.a,
                      null,
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "row",
                          justify: "flex-end",
                        },
                        c.a.createElement(
                          R.a,
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
                          R.a,
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
                          R.a,
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
                    { fullScreen: !0, open: o, TransitionComponent: Wn },
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
                          c.a.createElement(An.a, null)
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
                      R.a,
                      { mt: 10 },
                      c.a.createElement(
                        C.a,
                        {
                          container: !0,
                          direction: "column",
                          className: e.dialogText,
                        },
                        c.a.createElement(
                          S.a,
                          { maxWidth: "lg" },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            "\u52e4\u52d9\u304a\u75b2\u308c\u3055\u307e\u3067\u3057\u305f"
                          ),
                          c.a.createElement(
                            R.a,
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
                                  R.a,
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
                              R.a,
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
                                                    pn({
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
                                      qa.a,
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
                                      R.a,
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
                    f ? c.a.createElement(ln, null) : "",
                    b ? c.a.createElement(mn, null) : ""
                  )
                )
              : ""
          );
        },
        In = a(237),
        _n = a.n(In),
        Bn = a(238),
        Kn = a.n(Bn),
        zn = a(239),
        Vn = a.n(zn),
        Dn = a(240),
        Fn = a.n(Dn),
        Mn = a(241),
        Ln = a.n(Mn),
        Hn = a(242),
        Pn = a.n(Hn),
        Yn = Object(g.a)({
          icon: { fontSize: 55 },
          iconArea: { color: "white", height: 150, borderRadius: 8 },
          contentWidth: { width: 150 },
        }),
        qn = function (e) {
          var t = e.id,
            a = e.name,
            n = e.bgColor,
            r = e.iconNum,
            o = Yn(),
            i = [
              c.a.createElement(_n.a, { className: o.icon }),
              c.a.createElement(Kn.a, { className: o.icon }),
              c.a.createElement(F.a, { className: o.icon }),
              c.a.createElement(Vn.a, { className: o.icon }),
              c.a.createElement(Fn.a, { className: o.icon }),
              c.a.createElement(Ln.a, { className: o.icon }),
              c.a.createElement(Pn.a, { className: o.icon }),
            ];
          return c.a.createElement(
            s.b,
            { to: "/project/".concat(t) },
            c.a.createElement(
              R.a,
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
                    R.a,
                    { textAlign: "center" },
                    c.a.createElement(w.a, null, a)
                  )
                )
              )
            )
          );
        },
        Un = a(102),
        Gn = a.n(Un),
        Xn = "https://v-work.herokuapp.com/",
        Jn = localStorage.token,
        Qn = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(Xn, "api/v1/workspaces/")
                              .concat(t, "/projects"),
                            { headers: { Authorization: "Bearer ".concat(Jn) } }
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
        $n = Object(fe.b)(
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
                          be.a.get(
                            "".concat(Xn, "api/v1/projects/").concat(t),
                            { headers: { Authorization: "Bearer ".concat(Jn) } }
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
        Zn = Object(fe.b)(
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
                          be.a.post(
                            ""
                              .concat(Xn, "api/v1/workspaces/")
                              .concat(t.workspace, "/projects"),
                            t.projectData,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Jn),
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
        er = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(Xn, "api/v1/workspaces/")
                              .concat(t.workspaces, "/projects/")
                              .concat(t.projectId, "/members/new"),
                            { headers: { Authorization: "Bearer ".concat(Jn) } }
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
        tr = Object(fe.b)(
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
                          be.a.get(
                            ""
                              .concat(Xn, "api/v1/workspaces/")
                              .concat(t.workspaces, "/projects/")
                              .concat(t.projectId, "/users/")
                              .concat(t.userId),
                            { headers: { Authorization: "Bearer ".concat(Jn) } }
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
        ar = Object(fe.b)(
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
                          be.a.put(
                            ""
                              .concat(Xn, "api/v1/projects/")
                              .concat(t.projectId, "/members"),
                            { members: t.members },
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(Jn),
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
        nr = Object(fe.c)({
          name: "project",
          initialState: {
            projects: [],
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
          },
          extraReducers: function (e) {
            e.addCase(Qn.fulfilled, function (e, t) {
              e.projects = t.payload.data;
            }),
              e.addCase(Qn.rejected, function (e, t) {}),
              e.addCase($n.fulfilled, function (e, t) {
                e.project = t.payload.data;
              }),
              e.addCase(Zn.fulfilled, function (e, t) {
                (e.projects = t.payload.data),
                  da.b.info(
                    "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
                    { position: da.b.POSITION.TOP_CENTER }
                  );
              }),
              e.addCase(er.fulfilled, function (e, t) {
                e.newMembers = t.payload.data;
              }),
              e.addCase(tr.fulfilled, function (e, t) {
                (e.member.user = t.payload.user),
                  (e.member.profile = t.payload.profile),
                  (e.member.tasks = t.payload.tasks);
              }),
              e.addCase(ar.fulfilled, function (e, t) {
                da.b.info(
                  "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f",
                  { position: da.b.POSITION.TOP_CENTER }
                );
              });
          },
        }),
        rr = function (e) {
          return e.project.projects;
        },
        cr = function (e) {
          return e.project.project;
        },
        or = function (e) {
          return e.project.selectedMember;
        },
        ir = function (e) {
          return e.project.member;
        },
        lr = function (e) {
          return e.project.newMembers;
        },
        sr = nr.actions,
        mr = sr.setSelectedMember,
        ur = sr.setProjectMember,
        dr = nr.reducer,
        pr = Object(g.a)({
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
        fr = function () {
          var e = pr(),
            t = Object(l.b)(),
            a = Object(l.c)(rr);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
              { borderBottom: 1, mt: 7, mb: 4, className: e.title },
              "\u53c2\u52a0\u3057\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
            ),
            c.a.createElement(
              C.a,
              { container: !0, justify: "flex-start" },
              c.a.createElement(
                R.a,
                {
                  className: Object(y.a)(e.contentWidth, e.iconStyle),
                  mr: 3,
                  mb: 3,
                  onClick: function () {
                    return t(Xe(!0));
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
                      className: Object(y.a)(e.iconArea, e.contentWidth),
                    },
                    c.a.createElement(Gn.a, { style: { fontSize: 100 } })
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0, className: e.contentWidth },
                    c.a.createElement(
                      R.a,
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
              a.map(function (e, t) {
                return c.a.createElement(qn, {
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
        Er = a(185),
        br = a.n(Er),
        gr = a(251),
        hr = Object(g.a)(function (e) {
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
        vr = Object(Ya.a)({ paper: { border: "1px solid #d3d4d5" } })(function (
          e
        ) {
          return c.a.createElement(
            gr.a,
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
        jr = Object(Ya.a)(function (e) {
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
        })(Xa.a),
        kr = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = hr(),
            r = Object(l.b)(),
            o = Object(l.c)(Wt),
            i = (function () {
              var e = Object(ne.a)(
                ae.a.mark(function e() {
                  return ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r(St());
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
            u = Object(E.a)(m, 2),
            d = u[0],
            f = u[1],
            g = c.a.useState(null),
            h = Object(E.a)(g, 2),
            j = h[0],
            A = h[1],
            T = Object(l.c)(ot);
          return c.a.createElement(
            "div",
            { className: n.root },
            c.a.createElement(
              S.a,
              null,
              c.a.createElement(
                v.a,
                {
                  style: { backgroundColor: "#fafafa" },
                  position: "fixed",
                  className: Object(y.a)(
                    n.appBar,
                    Object(b.a)({}, n.appBarShift, T)
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
                      className: Object(y.a)(T && n.hide),
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
                            c.a.createElement(br.a, { className: n.addIcon })
                          )
                        ),
                        c.a.createElement(
                          C.a,
                          { item: !0 },
                          c.a.createElement(
                            x.a,
                            {
                              onClick: function (e) {
                                A(e.currentTarget);
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
              vr,
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
                jr,
                {
                  onClick: function () {
                    return r(Ze(!0));
                  },
                },
                "\u30bf\u30b9\u30af\u8ffd\u52a0"
              ),
              c.a.createElement(
                jr,
                {
                  onClick: function () {
                    return r(Xe(!0));
                  },
                },
                "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8ffd\u52a0"
              ),
              c.a.createElement(
                jr,
                {
                  onClick: function () {
                    return r(Je(!0));
                  },
                },
                "\u30e1\u30f3\u30d0\u30fc\u62db\u5f85"
              )
            ),
            c.a.createElement(
              vr,
              {
                id: "customized-menu",
                anchorEl: j,
                keepMounted: !0,
                open: Boolean(j),
                onClick: function () {
                  A(null);
                },
              },
              c.a.createElement(
                jr,
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
                c.a.createElement(jr, null, "\u4ed6\u306eworkspace ")
              ),
              c.a.createElement(
                jr,
                { onClick: i },
                "\u30ed\u30b0\u30a2\u30a6\u30c8"
              )
            )
          );
        },
        Or = localStorage.token,
        wr = Object(fe.b)(
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
                          be.a.post(
                            ""
                              .concat(
                                "https://v-work.herokuapp.com/",
                                "api/v1/workspaces/"
                              )
                              .concat(t.workspace, "/members"),
                            { invitations: t.invitations },
                            { headers: { Authorization: "Bearer ".concat(Or) } }
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
        yr =
          (Object(fe.b)(
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
                            be.a.post(
                              ""
                                .concat(
                                  "https://v-work.herokuapp.com/",
                                  "api/v1/workspaces/"
                                )
                                .concat(t.workspace, "/users/")
                                .concat(t.userId, "/profile"),
                              t.bodyData,
                              {
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: "Bearer ".concat(Or),
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
          Object(fe.c)({
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
              e.addCase(wr.fulfilled, function (e, t) {
                da.b.info(
                  "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002",
                  { position: da.b.POSITION.TOP_CENTER }
                );
              }),
                e.addCase(wr.rejected, function (e, t) {
                  da.b.error(
                    "\u62db\u5f85\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002",
                    { position: da.b.POSITION.TOP_CENTER }
                  );
                });
            },
          })),
        xr = yr.actions,
        Cr = (xr.setWorkspace, xr.setSelectedMembers),
        Nr = function (e) {
          return e.dashboard.selectedMembers;
        },
        Sr = yr.reducer,
        Ar = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(Wt),
            a = Object(l.c)(wa),
            n = Object(l.c)(Na),
            o = Object(l.c)(Ca),
            i = Object(l.c)(Rt),
            s = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(dn(a));
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
                e(Cr([t]));
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
                S.a,
                null,
                c.a.createElement(kr, { title: "\u30db\u30fc\u30e0" }),
                c.a.createElement(Rn, null),
                n && n.length > 0
                  ? c.a.createElement($a, {
                      title: "\u671f\u9650\u304c\u8fd1\u3044\u30bf\u30b9\u30af",
                      iconType: "alert",
                      taskData: n,
                    })
                  : "",
                o && o.length > 0
                  ? c.a.createElement($a, {
                      title:
                        "\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30bf\u30b9\u30af",
                      taskData: o,
                    })
                  : "",
                c.a.createElement(fr, null)
              )
            )
          );
        },
        Tr = a(320),
        Wr = Object(g.a)(function (e) {
          return Object(h.a)({
            button: {
              backgroundColor: p.VWORK_DARK_BLUE,
              width: 150,
              fontSize: 15,
            },
            margin: { margin: e.spacing(1) },
          });
        }),
        Rr = function () {
          var e = Wr(),
            t = Object(l.b)(),
            a = Object(l.c)(Rt),
            n = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), t(ba({ workspace: a, query: n }))
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
            o = Object(l.c)(Aa);
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
                    startIcon: c.a.createElement(Gn.a, null),
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
                  qa.a,
                  { className: e.margin },
                  c.a.createElement(
                    Tr.a,
                    { id: "task-state" },
                    "\u7d5e\u308a\u8fbc\u307f"
                  ),
                  c.a.createElement(
                    Ua.a,
                    {
                      id: "task-state",
                      onChange: function (e) {
                        t(_a(e.target.value)), n(a, e.target.value);
                      },
                      style: { width: 200 },
                      value: o,
                    },
                    c.a.createElement(
                      Xa.a,
                      { value: "" },
                      "\u672a\u9078\u629e"
                    ),
                    c.a.createElement(Xa.a, { value: "0" }, "TODO"),
                    c.a.createElement(
                      Xa.a,
                      { value: "1" },
                      "\u9032\u884c\u4e2d"
                    ),
                    c.a.createElement(Xa.a, { value: "2" }, "\u5b8c\u4e86")
                  )
                )
              )
            )
          );
        },
        Ir = ["TODO", "\u9032\u884c\u4e2d", "\u5b8c\u4e86"],
        _r = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(Rt),
            a = Object(l.c)(wa),
            n = Object(l.c)(Wt),
            o = Object(l.c)(wa),
            i = Object(l.c)(Aa),
            s = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(ba({ workspace: a }));
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
                e(_a(""));
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
                e(Cr([n]));
              },
              [e, n, o]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                S.a,
                null,
                c.a.createElement(kr, {
                  title: "\u30de\u30a4\u30bf\u30b9\u30af",
                }),
                c.a.createElement(Rr, null),
                a.todaysTasks && a.todaysTasks.length > 0
                  ? c.a.createElement($a, {
                      title: "\u4eca\u65e5\u3084\u308b",
                      taskData: a.todaysTasks,
                    })
                  : "",
                a.count
                  ? c.a.createElement($a, {
                      title: i
                        ? "\u3010".concat(
                            Ir[Number(i)],
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
        Br = a(188),
        Kr = a(377),
        zr = a(370),
        Vr = a(35),
        Dr = function () {
          var e = Object(r.useState)(new Date()),
            t = Object(E.a)(e, 2),
            a = t[0],
            n = t[1],
            o = Object(r.useState)(ua()().format("M")),
            i = Object(E.a)(o, 2),
            s = i[0],
            m = i[1],
            u = Object(l.c)(Rt),
            d = Object(l.b)(),
            p = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(t, a, n) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d(
                                fn({
                                  workspace: t,
                                  query: { year: a, month: n },
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
                return function (t, a, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [d]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
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
                    Vr.a,
                    { utils: Br.a, locale: Kr.a },
                    c.a.createElement(zr.a, {
                      openTo: "month",
                      views: ["year", "month"],
                      label: "\u7d5e\u308a\u8fbc\u3080",
                      value: a,
                      onChange: function (e) {
                        var t = ua()(e).format("YYYY"),
                          a = ua()(e).format("MM");
                        m(a);
                        var r = ua()(
                          "".concat(t, "-").concat(a, "-01")
                        ).toDate();
                        n(r), p(u, t, a);
                      },
                      format: "yyyy\u5e74MM\u6708",
                    })
                  )
                )
              ),
              c.a.createElement(
                R.a,
                { borderBottom: 1 },
                c.a.createElement(
                  w.a,
                  { variant: "h5" },
                  s,
                  "\u6708\u306e\u52e4\u6020\u60c5\u5831"
                )
              )
            )
          );
        },
        Fr = a(187),
        Mr = a.n(Fr),
        Lr = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { minWidth: 275, borderRadius: 10, marginTop: 25 },
            title: { fontSize: 18 },
            time: { marginRight: 30 },
            space: { marginTop: 20 },
            task: { fontSize: 20 },
          });
        }),
        Hr = function (e) {
          var t = e.attendance,
            a = Lr(),
            n = Object(l.b)(),
            r = ua()(t.startedAt).utcOffset("+09:00"),
            o = ua()(t.endedAt).utcOffset("+09:00"),
            i = Math.round(o.diff(r, "minute", !0)),
            s = ua()(t.restStartedAt).utcOffset("+09:00"),
            m = ua()(t.restEndedAt).utcOffset("+09:00"),
            u = i - Math.round(m.diff(s, "minute", !0)),
            d = Math.round(u / 60),
            p = u % 60;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              Zt.a,
              { className: a.root },
              c.a.createElement(
                $t.a,
                {
                  onClick: function () {
                    n(On(t._id)), n(et(!0));
                  },
                },
                c.a.createElement(
                  S.a,
                  null,
                  c.a.createElement(
                    R.a,
                    { pt: 2, pb: 3 },
                    c.a.createElement(
                      C.a,
                      { container: !0, direction: "column" },
                      c.a.createElement(
                        C.a,
                        { item: !0, className: a.space },
                        c.a.createElement(
                          R.a,
                          { borderBottom: 1 },
                          c.a.createElement(
                            w.a,
                            { variant: "h5" },
                            ua()(t.createdAt)
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
                                  ? ua()(t.startedAt)
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
                                  ? ua()(t.restStartedAt)
                                      .utcOffset("+09:00")
                                      .format("HH:mm")
                                  : "",
                                "~",
                                t.restEndedAt
                                  ? ua()(t.restEndedAt)
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
                                  ? ua()(t.endedAt)
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
                            R.a,
                            { mr: 3 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(Ma.a, { color: "secondary" })
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
                          R.a,
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
                                R.a,
                                { mr: 3 },
                                c.a.createElement(Mr.a, { color: "secondary" })
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
        Pr = function (e) {
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
                    return c.a.createElement(Hr, { key: t, attendance: e });
                  })
              )
            )
          );
        },
        Yr = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(Rt),
            a = Object(l.c)(hn),
            n = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(dn(a));
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
                            return (t.next = 2), e(fn({ workspace: a }));
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
                S.a,
                null,
                c.a.createElement(kr, { title: "\u52e4\u6020\u7ba1\u7406" }),
                c.a.createElement(Rn, null),
                c.a.createElement(Dr, null),
                c.a.createElement(Pr, { attendances: a })
              )
            )
          );
        },
        qr = Object(g.a)(function (e) {
          return Object(h.a)({
            button: {
              backgroundColor: p.VWORK_DARK_BLUE,
              width: 150,
              fontSize: 15,
            },
          });
        }),
        Ur = function () {
          var e = qr(),
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
                    startIcon: c.a.createElement(Gn.a, null),
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
        Gr = Object(g.a)(function (e) {
          return Object(h.a)({ icon: { fontSize: 30 } });
        }),
        Xr = function (e) {
          var t = e.name,
            a = e.memberId,
            n = Gr(),
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
                  r(mr(a)), r(rt(!0));
                },
                "data-testid": "test",
              },
              c.a.createElement(
                B.a,
                null,
                c.a.createElement(N.a, { className: n.icon }, t.slice(0, 1))
              ),
              c.a.createElement(K.a, { primary: t })
            )
          );
        },
        Jr = Object(g.a)(function (e) {
          return Object(h.a)({ button: { width: "50%" } });
        }),
        Qr = function () {
          var e = Jr(),
            t = Object(l.c)(lr),
            a = Object(l.c)(cr),
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
                                n(ar({ projectId: a._id, members: t.members }))
                              );
                            case 4:
                              return (e.next = 6), n($n(a._id));
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
                                icon: c.a.createElement(nn.a, null),
                                checkedIcon: c.a.createElement(cn.a, null),
                              })
                            );
                          }),
                        c.a.createElement(
                          ce.a,
                          null,
                          c.a.createElement(
                            R.a,
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
        $r = Object(g.a)(function (e) {
          return Object(h.a)({
            closeIcon: { padding: 0 },
            drawerTitle: { fontSize: 25, width: "85%" },
            button: { width: 300 },
          });
        }),
        Zr = function () {
          var e = $r(),
            t = Object(l.b)(),
            a = Object(l.c)(Et),
            n = Object(l.c)(Rt),
            o = Object(l.c)(cr)._id,
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
                              t(er({ workspaces: a, projectId: n }))
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
                tn,
                {
                  open: a,
                  click: function () {
                    return t(nt(!1));
                  },
                },
                c.a.createElement(
                  S.a,
                  { maxWidth: "md" },
                  c.a.createElement(
                    R.a,
                    {
                      borderBottom: 1,
                      mt: 10,
                      mb: 5,
                      className: e.drawerTitle,
                    },
                    "\u8ffd\u52a0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u3092\u9078\u629e"
                  ),
                  c.a.createElement(Qr, null)
                )
              )
            )
          );
        },
        ec = Object(g.a)(function (e) {
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
        tc = function (e) {
          var t = e.members,
            a = ec(),
            n = Object(l.b)(),
            r = Object(l.c)(Et);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
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
                    "data-testid": "testId",
                  },
                  c.a.createElement(
                    B.a,
                    null,
                    c.a.createElement(br.a, { className: a.icon })
                  ),
                  c.a.createElement(K.a, {
                    primary: "\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0",
                  })
                )
              ),
              c.a.createElement(
                C.a,
                { item: !0 },
                t &&
                  t.map(function (e, t) {
                    return c.a.createElement(Xr, {
                      name: e.name,
                      key: t,
                      memberId: e._id,
                    });
                  })
              )
            ),
            r ? c.a.createElement(Zr, null) : ""
          );
        },
        ac = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(cr),
            a = Object(l.c)(wa),
            n = Object(m.g)().projectId,
            o = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e($n(a));
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
                            return (t.next = 2), e(ga(a));
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
                e(Cr(t));
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
                S.a,
                null,
                c.a.createElement(kr, { title: t.name }),
                c.a.createElement(
                  R.a,
                  { mb: 5, pb: 1, borderBottom: 1, width: "69%" },
                  c.a.createElement(w.a, { variant: "body1" }, t.description)
                ),
                c.a.createElement(Ur, null),
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "row", justify: "space-between" },
                  c.a.createElement(
                    C.a,
                    { item: !0, style: { width: "70%" } },
                    c.a.createElement($a, {
                      title: "\u30bf\u30b9\u30af\u4e00\u89a7",
                      taskData: a.data,
                    })
                  ),
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(tc, { members: t.members })
                  )
                )
              )
            )
          );
        },
        nc = a(243),
        rc = a.n(nc),
        cc = function (e) {
          var t = e.title,
            a = void 0 === t ? "" : t,
            n = e.bgColor,
            r = e.projectId;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              I.a,
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
                  B.a,
                  null,
                  c.a.createElement(rc.a, { style: { color: n } })
                ),
                c.a.createElement(K.a, { primary: a })
              )
            )
          );
        },
        oc = function () {
          var e = Object(l.c)(rr);
          return c.a.createElement(
            c.a.Fragment,
            null,
            e.map(function (e, t) {
              return c.a.createElement(cc, {
                title: e.name,
                bgColor: d[e.color],
                projectId: e._id,
                key: e._id,
              });
            })
          );
        },
        ic = Object(g.a)(function (e) {
          return Object(h.a)({
            title: { fontSize: 15 },
            backdrop: { zIndex: e.zIndex.drawer + 1, color: "#fff" },
            drawer: { width: "50%", flexShrink: 0 },
            drawerPaper: { width: "50%" },
            iconStyle: { color: p.VWORK_WHITE, padding: 0 },
            icon: { borderRadius: 10 },
          });
        }),
        lc = function () {
          var e = ic(),
            t = Object(l.b)();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              R.a,
              { borderBottom: 1, mt: 10, mx: 2, mb: 2, className: e.title },
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
                    c.a.createElement(Gn.a, { className: e.icon })
                  )
                )
              )
            ),
            c.a.createElement(oc, null)
          );
        },
        sc = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { display: "flex" },
            drawer: { width: 240, flexShrink: 0, color: p.VWORK_BLACK },
            drawerPaper: {
              width: 240,
              backgroundColor: p.VWORK_BLACK,
              color: p.VWORK_WHITE,
            },
            title: { fontWeight: 900, cursor: "pointer" },
            mainTitle: { fontSize: 30, paddingLeft: 2 },
            drawerHeader: Object(W.a)(
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
        mc = function () {
          var e = sc(),
            t = Object(m.f)(),
            a = Object(l.b)(),
            n = Object(l.c)(ot),
            r = Object(l.c)(It);
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(
              S.a,
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
                      R.a,
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
                          c.a.createElement("img", {
                            src: "".concat("", "/images/logo192.png"),
                            style: { height: 25 },
                            className: "imgstyle",
                            alt: "icon",
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
                  R.a,
                  {
                    m: 2,
                    mb: 0,
                    borderBottom: 1,
                    fontWeight: "fontWeightBold",
                  },
                  c.a.createElement(w.a, null, r.name)
                ),
                c.a.createElement(
                  I.a,
                  null,
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: e.icon },
                      c.a.createElement(V.a, null)
                    ),
                    c.a.createElement(K.a, { primary: "\u30db\u30fc\u30e0" })
                  ),
                  c.a.createElement(
                    _.a,
                    { button: !0, component: s.c, to: "/mytask", exact: !0 },
                    c.a.createElement(
                      B.a,
                      { className: e.icon },
                      c.a.createElement(X.a, null)
                    ),
                    c.a.createElement(K.a, {
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
                      B.a,
                      { className: e.icon },
                      c.a.createElement(Q.a, null)
                    ),
                    c.a.createElement(K.a, {
                      primary: "\u52e4\u6020\u7ba1\u7406",
                    })
                  )
                ),
                c.a.createElement(lc, null)
              )
            )
          );
        },
        uc = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(mc, null)
          );
        },
        dc = a(372),
        pc = Object(g.a)(function (e) {
          return {
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        }),
        fc = function () {
          var e = pc(),
            t = Object(l.b)(),
            a = Object(l.c)(it),
            n = Object(l.c)(Rt);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              tn,
              {
                open: a,
                click: function () {
                  return t(Xe(!1));
                },
              },
              c.a.createElement(
                S.a,
                { maxWidth: "md" },
                c.a.createElement(
                  R.a,
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
                                      Zn({
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
        Ec = Object(g.a)(function (e) {
          return Object(h.a)({
            root: { width: "100%" },
            formArea: {
              overflowY: "scroll",
              overflowX: "hidden",
              height: "33vh",
            },
          });
        }),
        bc = function () {
          var e = Ec(),
            t = Object(l.b)(),
            a = Object(l.c)(lt),
            n = Object(l.c)(Rt);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              tn,
              {
                open: a,
                click: function () {
                  return t(Je(!1));
                },
              },
              c.a.createElement(
                S.a,
                null,
                c.a.createElement(
                  R.a,
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
                                      wr({
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
                                      R.a,
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
                                        c.a.createElement(Le.a, null)
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
                              R.a,
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
        gc = Object(g.a)(function (e) {
          return {
            formArea: {
              backgroundColor: p.VWORK_BLACK,
              paddingTop: e.spacing(8),
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        }),
        hc = function () {
          var e = gc(),
            t = Object(l.b)(),
            a = Object(l.c)(st);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              tn,
              {
                open: a,
                click: function () {
                  return t(Qe(!1));
                },
              },
              c.a.createElement(
                S.a,
                { maxWidth: "md" },
                c.a.createElement(
                  R.a,
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
                    initialValues: { name: "", description: "" },
                    validationSchema: pe
                      .b()
                      .shape({
                        name: pe
                          .c()
                          .required(
                            "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                          ),
                      }),
                    onSubmit: function (e, t) {
                      console.log(e);
                    },
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
        vc = a(383),
        jc = a(208),
        kc = a(244),
        Oc = a.n(kc),
        wc = a(247),
        yc = a.n(wc),
        xc = a(245),
        Cc = a.n(xc),
        Nc = a(246),
        Sc = a.n(Nc),
        Ac = a(248),
        Tc = a.n(Ac),
        Wc = Object(g.a)(function (e) {
          return Object(h.a)({
            formControl: { margin: e.spacing(1), minWidth: "100%" },
            selectEmpty: { marginTop: e.spacing(2) },
            labelIcon: { marginRight: e.spacing(1) },
            formContent: { marginBottom: e.spacing(1) },
          });
        }),
        Rc = ["TODO", "\u9032\u884c\u4e2d", "\u5b8c\u4e86"],
        Ic = ["\u4f4e", "\u4e2d", "\u9ad8"],
        _c = function (e) {
          var t = e.projects,
            a = e.submitFunction,
            n = e.taskData,
            r = Wc(),
            o = Object(l.c)(Rt),
            i = Object(l.c)(cr),
            s = Object(l.c)(Nr);
          n.startDateAt || (n.startDateAt = ua()().toString()),
            n.endDateAt || (n.endDateAt = ua()().add(1, "days").toString()),
            n.todaysTask || (n.todaysTask = !1),
            n.project || (i._id ? (n.project = i._id) : (n.project = ""));
          var m = {
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
                initialValues: m,
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
                      var r;
                      return ae.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.setSubmitting(!1),
                                (r = Object(W.a)({}, t)).project ||
                                  (r.project = null),
                                (e.next = 5),
                                a(r, o)
                              );
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
                    { container: !0, className: r.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        R.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Oc.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u62c5\u5f53\u8005"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
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
                            Xa.a,
                            { value: "" },
                            c.a.createElement("em", null, "\u672a\u9078\u629e")
                          ),
                          s &&
                            s.map(function (e, t) {
                              return c.a.createElement(
                                Xa.a,
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
                    { container: !0, className: r.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        R.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Cc.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u671f\u65e5"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
                        c.a.createElement(
                          Vr.a,
                          { utils: Br.a, locale: Kr.a },
                          c.a.createElement(
                            C.a,
                            { container: !0, spacing: 2 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              c.a.createElement(ue.a, {
                                component: jc.a,
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
                                component: jc.a,
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
                    { container: !0, className: r.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        R.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(F.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
                        c.a.createElement(
                          Tr.a,
                          { htmlFor: "project" },
                          "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                        ),
                        c.a.createElement(
                          ue.a,
                          {
                            component: de.b,
                            name: "project",
                            id: "project",
                            as: "select",
                            defaultValue: e.values.project,
                            inputProps: { id: "project" },
                          },
                          c.a.createElement(
                            Xa.a,
                            { value: "" },
                            "\u672a\u9078\u629e"
                          ),
                          t.map(function (e, t) {
                            return c.a.createElement(
                              Xa.a,
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
                    { container: !0, className: r.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        R.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Ma.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u30bf\u30b9\u30af\u72b6\u6cc1"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
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
                          c.a.createElement(Xa.a, { value: 0 }, Rc[0]),
                          c.a.createElement(Xa.a, { value: 1 }, Rc[1]),
                          c.a.createElement(Xa.a, { value: 2 }, Rc[2])
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: r.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        R.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(Sc.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u512a\u5148\u5ea6"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
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
                          c.a.createElement(Xa.a, { value: 0 }, Ic[0]),
                          c.a.createElement(Xa.a, { value: 1 }, Ic[1]),
                          c.a.createElement(Xa.a, { value: 2 }, Ic[2])
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    C.a,
                    { container: !0, className: r.formContent },
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 2 },
                      c.a.createElement(
                        R.a,
                        {
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                        },
                        c.a.createElement(yc.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u9032\u6357"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
                        c.a.createElement(vc.a, {
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
                        R.a,
                        { display: "flex", alignItems: "center" },
                        c.a.createElement(Tc.a, {
                          color: "disabled",
                          className: r.labelIcon,
                        }),
                        "\u8a73\u7d30"
                      )
                    ),
                    c.a.createElement(
                      C.a,
                      { item: !0, xs: 8 },
                      c.a.createElement(
                        qa.a,
                        { className: r.formControl },
                        c.a.createElement(ue.a, {
                          component: de.c,
                          name: "description",
                          label: "\u8a73\u7d30",
                          variant: "filled",
                          margin: "none",
                          fullWidth: !0,
                          multiline: !0,
                          id: "description",
                          value: e.values.description,
                          rows: 4,
                        })
                      )
                    )
                  )
                );
              }
            )
          );
        },
        Bc = a(249),
        Kc = a.n(Bc),
        zc = function () {
          var e = Object(l.c)(cr),
            t = Object(l.b)(),
            a = Object(l.c)(mt),
            n = Object(l.c)(Aa),
            o = Object(l.c)(xa),
            i = Object(l.c)(ya),
            s = Object(r.useCallback)(
              (function () {
                var e = Object(ne.a)(
                  ae.a.mark(function e(a) {
                    return ae.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t(ha(a));
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
              s(o);
            },
            [s, o]
          );
          var m = Object(l.c)(rr).map(function (e) {
              return { id: e._id, name: e.name };
            }),
            u = c.a.useState(null),
            d = Object(E.a)(u, 2),
            p = d[0],
            f = d[1],
            b = Object(W.a)({}, i),
            g = window.location.pathname,
            h = (function () {
              var a = Object(ne.a)(
                ae.a.mark(function a(r, c) {
                  return ae.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), t(va({ id: o, task: r }));
                        case 2:
                          if (!g.includes("project")) {
                            a.next = 7;
                            break;
                          }
                          return (a.next = 5), t(ga(e._id));
                        case 5:
                          a.next = 16;
                          break;
                        case 7:
                          if (!g.includes("mytask")) {
                            a.next = 12;
                            break;
                          }
                          return (
                            (a.next = 10), t(ba({ workspace: c, query: n }))
                          );
                        case 10:
                          a.next = 16;
                          break;
                        case 12:
                          return (a.next = 14), t(ja(c));
                        case 14:
                          return (a.next = 16), t(ka(c));
                        case 16:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              );
              return function (e, t) {
                return a.apply(this, arguments);
              };
            })();
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              tn,
              {
                open: a,
                click: function () {
                  t($e(!1)),
                    t(
                      Ia({
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
                S.a,
                { maxWidth: "md" },
                c.a.createElement(
                  R.a,
                  { textAlign: "right", mt: 2 },
                  c.a.createElement(
                    x.a,
                    {
                      "aria-controls": "simple-menu",
                      "aria-haspopup": "true",
                      "aria-label": "more",
                      onClick: function (e) {
                        f(e.currentTarget);
                      },
                    },
                    c.a.createElement(Kc.a, null)
                  ),
                  c.a.createElement(
                    gr.a,
                    {
                      id: "simple-menu",
                      anchorEl: p,
                      keepMounted: !0,
                      open: Boolean(p),
                      onClose: function () {
                        f(null);
                      },
                    },
                    c.a.createElement(
                      Xa.a,
                      {
                        onClick: function () {
                          window.confirm(
                            "\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"
                          ) && console.log("\u524a\u9664\u3057\u305f");
                        },
                      },
                      "\u524a\u9664"
                    )
                  )
                ),
                c.a.createElement(_c, {
                  projects: m,
                  submitFunction: h,
                  taskData: b,
                })
              )
            )
          );
        },
        Vc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(ut),
            a = Object(l.c)(cr),
            n = Object(l.c)(rr).map(function (e) {
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
                          return (t.next = 2), e(Ea({ task: n, workspace: c }));
                        case 2:
                          if (!r.includes("project")) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 5), e(ga(a._id));
                        case 5:
                          t.next = 16;
                          break;
                        case 7:
                          if (!r.includes("mytask")) {
                            t.next = 12;
                            break;
                          }
                          return (t.next = 10), e(ba({ workspace: c }));
                        case 10:
                          t.next = 16;
                          break;
                        case 12:
                          return (t.next = 14), e(ja(c));
                        case 14:
                          return (t.next = 16), e(ka(c));
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
                  tn,
                  {
                    open: t,
                    click: function () {
                      return e(Ze(!1));
                    },
                  },
                  c.a.createElement(
                    S.a,
                    { maxWidth: "md" },
                    c.a.createElement(
                      R.a,
                      { mt: 5 },
                      c.a.createElement(_c, {
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
        Dc = Object(g.a)(function (e) {
          return Object(h.a)({
            root: {
              borderRadius: 10,
              backgroundColor: p.VWORK_LIGHT_BLUE,
              height: 185,
              marginTop: 25,
              width: "60%",
            },
            title: { fontSize: 20 },
          });
        }),
        Fc = function () {
          var e = Dc(),
            t = Object(l.b)(),
            a = Object(l.c)(jn);
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              S.a,
              { maxWidth: "md" },
              c.a.createElement(
                R.a,
                { mt: 6 },
                c.a.createElement(
                  C.a,
                  { container: !0, direction: "column" },
                  c.a.createElement(
                    C.a,
                    { item: !0 },
                    c.a.createElement(
                      R.a,
                      { borderBottom: 1 },
                      c.a.createElement(
                        w.a,
                        { variant: "h5" },
                        a.data && a.data.createdAt
                          ? ua()(a.data.createdAt)
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
                      R.a,
                      { mb: 3 },
                      c.a.createElement(
                        Zt.a,
                        { className: e.root },
                        c.a.createElement(
                          C.a,
                          {
                            container: !0,
                            direction: "column",
                            justify: "space-between",
                            className: e.title,
                          },
                          c.a.createElement(
                            R.a,
                            { mt: 3, ml: 3 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              "\u51fa\u793e:",
                              a.data && a.data.startedAt
                                ? ua()(a.data.startedAt)
                                    .utcOffset("+09:00")
                                    .format("HH:mm")
                                : ""
                            )
                          ),
                          c.a.createElement(
                            R.a,
                            { mt: 3, ml: 3 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              "\u4f11\u61a9:",
                              a.data && a.data.restStartedAt
                                ? ua()(a.data.restStartedAt)
                                    .utcOffset("+09:00")
                                    .format("HH:mm")
                                : "",
                              "~",
                              a.data && a.data.restEndedAt
                                ? ua()(a.data.restEndedAt)
                                    .utcOffset("+09:00")
                                    .format("HH:mm")
                                : ""
                            )
                          ),
                          c.a.createElement(
                            R.a,
                            { mt: 3, ml: 3 },
                            c.a.createElement(
                              C.a,
                              { item: !0 },
                              "\u9000\u793e:",
                              a.data && a.data.endedAt
                                ? ua()(a.data.endedAt)
                                    .utcOffset("+09:00")
                                    .format("HH:mm")
                                : ""
                            )
                          )
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    R.a,
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
                              R.a,
                              { mr: 2 },
                              c.a.createElement(
                                C.a,
                                { item: !0 },
                                c.a.createElement(Mr.a, null)
                              )
                            ),
                            c.a.createElement(
                              C.a,
                              { item: !0, className: e.title },
                              "\u632f\u308a\u8fd4\u308a"
                            )
                          )
                        ),
                        c.a.createElement(
                          R.a,
                          { mt: 1 },
                          c.a.createElement(
                            C.a,
                            { item: !0 },
                            c.a.createElement(
                              w.a,
                              { variant: "body1" },
                              a.data && a.data.comment
                            )
                          )
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    R.a,
                    null,
                    c.a.createElement(
                      C.a,
                      {
                        item: !0,
                        onClick: function () {
                          return t(et(!1));
                        },
                      },
                      c.a.createElement($a, {
                        title: "\u5bfe\u5fdc\u30bf\u30b9\u30af",
                        taskData: a.tasks,
                      })
                    )
                  )
                )
              )
            )
          );
        },
        Mc = function () {
          var e = Object(l.b)(),
            t = Object(l.c)(dt),
            a = Object(l.c)(vn),
            n = Object(l.c)(Rt),
            o = Object(r.useCallback)(
              (function () {
                var t = Object(ne.a)(
                  ae.a.mark(function t(a, n) {
                    return ae.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e(En({ workspace: a, id: n }));
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
                tn,
                {
                  open: t,
                  click: function () {
                    e(et(!1)),
                      e(
                        wn({
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
                    S.a,
                    { maxWidth: "md" },
                    c.a.createElement(
                      C.a,
                      { item: !0 },
                      c.a.createElement(Fc, null)
                    )
                  )
                )
              )
            )
          );
        },
        Lc = Object(g.a)(function (e) {
          return Object(h.a)({
            closeIcon: { padding: 0 },
            profile: { fontSize: 20 },
            profileTitle: { color: "#9e9e9e" },
            profileItem: { margin: 0 },
          });
        }),
        Hc = function () {
          var e = Lc(),
            t = Object(l.b)(),
            a = Object(l.c)(Rt),
            n = Object(l.c)(bt),
            o = Object(l.c)(cr),
            i = Object(l.c)(or),
            s = Object(l.c)(ir),
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
                              t(tr({ workspaces: a, projectId: n, userId: r }))
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
                tn,
                {
                  open: n,
                  click: function () {
                    t(
                      ur({
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
                  R.a,
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
                      S.a,
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
                        c.a.createElement($a, {
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
        Pc =
          (a(302),
          Object(g.a)(function (e) {
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
              drawerHeader: Object(W.a)(
                {
                  display: "flex",
                  alignItems: "center",
                  padding: e.spacing(0, 1),
                },
                e.mixins.toolbar,
                { justifyContent: "flex-end" }
              ),
            });
          })),
        Yc = function () {
          var e = Pc(),
            t = Object(l.b)(),
            a = Object(l.c)(Rt),
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
                          return (e.next = 2), t(Qn(a));
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
                          return (e.next = 2), t(ka(a));
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
                          return (e.next = 2), t(ja(a));
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
            E = Object(l.c)(st),
            g = Object(l.c)(mt),
            h = Object(l.c)(ut),
            v = Object(l.c)(bt),
            j = Object(l.c)(dt);
          return c.a.createElement(
            "div",
            { className: e.root },
            c.a.createElement(uc, null),
            c.a.createElement(da.a, { hideProgressBar: !0, autoClose: 2e3 }),
            c.a.createElement(dc.a, null),
            c.a.createElement(
              "main",
              {
                className: Object(y.a)(
                  e.content,
                  Object(b.a)({}, e.contentShift, d)
                ),
              },
              c.a.createElement("div", { className: e.drawerHeader }),
              p ? c.a.createElement(fc, null) : "",
              f ? c.a.createElement(bc, null) : "",
              E ? c.a.createElement(hc, null) : "",
              g ? c.a.createElement(zc, null) : "",
              h ? c.a.createElement(Vc, null) : "",
              v ? c.a.createElement(Hc, null) : "",
              j ? c.a.createElement(Mc, null) : "",
              c.a.createElement(
                m.c,
                null,
                c.a.createElement(
                  m.a,
                  { path: "/", exact: !0 },
                  c.a.createElement(Ar, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/mytask", exact: !0 },
                  c.a.createElement(_r, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/work_manage", exact: !0 },
                  c.a.createElement(Yr, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/project/:projectId", exact: !0 },
                  c.a.createElement(ac, null)
                )
              )
            )
          );
        },
        qc = a(157),
        Uc = Object(g.a)(function (e) {
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
        Gc = function (e) {
          var t = e.children,
            a = e.buttonText,
            n = e.buttonPath,
            r = Uc();
          return c.a.createElement(
            S.a,
            { maxWidth: "sm" },
            c.a.createElement(
              R.a,
              {
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              },
              c.a.createElement(
                R.a,
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
        Xc = Object(g.a)(function (e) {
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
        Jc = function () {
          var e = Xc(),
            t = Object(l.b)();
          return c.a.createElement(
            C.a,
            { container: !0, component: "main", className: e.root },
            c.a.createElement(dc.a, null),
            c.a.createElement(
              C.a,
              {
                item: !0,
                container: !0,
                xs: 12,
                sm: 8,
                md: 6,
                component: qc.a,
                elevation: 6,
                direction: "column",
                alignItems: "center",
                square: !0,
                className: e.formArea,
              },
              c.a.createElement(
                Gc,
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
        Qc = a(373),
        $c = Object(g.a)(function (e) {
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
        Zc = function () {
          var e = $c(),
            t = Object(l.b)();
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              C.a,
              { container: !0, component: "main", className: e.root },
              c.a.createElement(dc.a, null),
              c.a.createElement(
                C.a,
                {
                  item: !0,
                  container: !0,
                  xs: 12,
                  sm: 8,
                  md: 6,
                  component: qc.a,
                  elevation: 6,
                  direction: "column",
                  alignItems: "center",
                  square: !0,
                  className: e.formArea,
                },
                c.a.createElement(
                  Gc,
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
                        Qc.a,
                        { href: "#", variant: "body2" },
                        "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u304a\u5fd8\u308c\u306e\u65b9\u306f\u3053\u3061\u3089"
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
        eo = a(379),
        to = a(376),
        ao = function () {
          var e = Object(l.b)();
          Object(r.useEffect)(
            function () {
              e(Ue(!0)), e(Nt()), e(Ue(!1));
            },
            [e]
          );
          var t = Object(l.c)(_t),
            a = Object(l.c)(Bt),
            n = function () {
              e(zt(!1));
            };
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              eo.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: a,
                onClose: n,
              },
              c.a.createElement(to.a, { onClose: n, severity: "error" }, t)
            ),
            c.a.createElement(
              m.c,
              null,
              c.a.createElement(
                m.a,
                { exact: !0, path: "/auth/signup" },
                c.a.createElement(Jc, null)
              ),
              c.a.createElement(
                m.a,
                { exact: !0, path: "/auth/login" },
                c.a.createElement(Zc, null)
              )
            )
          );
        },
        no = a(374),
        ro = a(371),
        co = Object(g.a)(function (e) {
          return Object(h.a)({
            backdrop: { zIndex: e.zIndex.drawer + 1500, color: "#fff" },
          });
        }),
        oo = function () {
          var e = co(),
            t = Object(l.c)(ct);
          return c.a.createElement(
            no.a,
            { theme: f },
            t
              ? c.a.createElement(
                  Za.a,
                  { className: e.backdrop, open: !0 },
                  c.a.createElement(ro.a, { color: "primary" })
                )
              : "",
            c.a.createElement(
              s.a,
              null,
              c.a.createElement(
                m.c,
                null,
                c.a.createElement(
                  m.a,
                  { path: "/auth" },
                  c.a.createElement(ao, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/regist" },
                  c.a.createElement(Xt, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/admin" },
                  c.a.createElement(U, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/workspaces" },
                  c.a.createElement(sa, null)
                ),
                c.a.createElement(
                  m.a,
                  { path: "/" },
                  c.a.createElement(Yc, null)
                )
              )
            )
          );
        },
        io = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function lo(e, t) {
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
      var so = Object(fe.a)({
        reducer: {
          auth: Vt,
          app: gt,
          dashboard: Sr,
          regist: Ie,
          project: dr,
          task: Ba,
          workspace: oa,
          attendance: yn,
        },
      });
      i.a.render(
        c.a.createElement(l.a, { store: so }, c.a.createElement(oo, null)),
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
              io
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
                          : lo(e, t);
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
                : lo(t, e);
            });
          }
        })();
    },
  },
  [[270, 1, 2]],
]);
//# sourceMappingURL=main.c92a6ac7.chunk.js.map
