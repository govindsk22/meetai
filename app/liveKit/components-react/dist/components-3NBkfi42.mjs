import * as e from "react";
import { useState as B, useRef as L, useEffect as z, useMemo as Le } from "react";
import { u as ze, a as he, b as Ve, c as Fe, d as Ze, e as He, f as ge, g as Be, h as je, i as _e, j as Oe, k as We, l as ve, m as qe, n as $e, o as De, p as Ue, q as Ge, r as Qe, s as Ee, t as Xe, v as Ye } from "./hooks-CWooKGw2.mjs";
import { a as S, c as ee } from "./room-BgiuQa2X.mjs";
import { RoomEvent as Je, Track as y, ConnectionQuality as Q, RemoteTrackPublication as J, RemoteAudioTrack as Ke, ConnectionState as X } from "livekit-client";
import { aa as te, ab as pe, w as et, f as we, c as tt, ac as at, X as nt, Y as rt, a1 as $, l as j, ad as q, ae as ct, i as _, B as lt, af as ke, ag as ae, j as st, ah as it, m as ot, p as Re, ai as ut, aj as dt, ak as mt, al as ft, am as ht } from "./contexts-CPsnPrz2.mjs";
const aa = /* @__PURE__ */ e.forwardRef(
  function(n, a) {
    const { buttonProps: r } = ze(n);
    return /* @__PURE__ */ e.createElement("button", { ref: a, ...r }, n.children);
  }
), na = /* @__PURE__ */ e.forwardRef(
  function({ room: n, ...a }, r) {
    const c = he(n);
    return /* @__PURE__ */ e.createElement("div", { ref: r, ...a }, c);
  }
), ra = /* @__PURE__ */ e.forwardRef(
  function(n, a) {
    const { mergedProps: r } = Ve({ props: n });
    return /* @__PURE__ */ e.createElement("button", { ref: a, ...r }, n.children);
  }
), ca = /* @__PURE__ */ e.forwardRef(
  function(n, a) {
    const { buttonProps: r } = Fe(n);
    return /* @__PURE__ */ e.createElement("button", { ref: a, ...r }, n.children);
  }
), gt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708L11 10.293V4.5A1.5 1.5 0 0 0 9.5 3H3.707zM0 4.5a1.5 1.5 0 0 1 .943-1.393l9.532 9.533c-.262.224-.603.36-.975.36h-8A1.5 1.5 0 0 1 0 11.5z" }), /* @__PURE__ */ e.createElement("path", { d: "m15.2 3.6-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4z" })), vt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 4.5A1.5 1.5 0 0 1 1.5 3h8A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-8A1.5 1.5 0 0 1 0 11.5zM15.2 3.6l-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4z" })), la = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 24 24", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "#FFF",
    d: "M4.99 3.99a1 1 0 0 0-.697 1.717L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 1 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-.727-1.717 1 1 0 0 0-.687.303L12 10.586 5.707 4.293a1 1 0 0 0-.717-.303z"
  }
)), sa = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 18, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v13.594a.75.75 0 0 1-1.234.572l-3.691-3.12a1.25 1.25 0 0 0-.807-.296H2.75A2.75 2.75 0 0 1 0 10.75v-8ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h7.518c.65 0 1.279.23 1.775.65l2.457 2.077V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    clipRule: "evenodd"
  }
)), ie = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M5.293 2.293a1 1 0 0 1 1.414 0l4.823 4.823a1.25 1.25 0 0 1 0 1.768l-4.823 4.823a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707a1 1 0 0 1 0-1.414z",
    clipRule: "evenodd"
  }
)), Et = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ e.createElement("path", { d: "M10 1.75h4.25m0 0V6m0-4.25L9 7M6 14.25H1.75m0 0V10m0 4.25L7 9" }))), ia = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M8.961.894C8.875-.298 7.125-.298 7.04.894c-.066.912-1.246 1.228-1.76.472-.67-.99-2.186-.115-1.664.96.399.824-.465 1.688-1.288 1.289-1.076-.522-1.95.994-.961 1.665.756.513.44 1.693-.472 1.759-1.192.086-1.192 1.836 0 1.922.912.066 1.228 1.246.472 1.76-.99.67-.115 2.186.96 1.664.824-.399 1.688.465 1.289 1.288-.522 1.076.994 1.95 1.665.961.513-.756 1.693-.44 1.759.472.086 1.192 1.836 1.192 1.922 0 .066-.912 1.246-1.228 1.76-.472.67.99 2.186.115 1.664-.96-.399-.824.465-1.688 1.288-1.289 1.076.522 1.95-.994.961-1.665-.756-.513-.44-1.693.472-1.759 1.192-.086 1.192-1.836 0-1.922-.912-.066-1.228-1.246-.472-1.76.99-.67.115-2.186-.96-1.664-.824.399-1.688-.465-1.289-1.288.522-1.076-.994-1.95-1.665-.961-.513.756-1.693.44-1.759-.472ZM8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z",
    clipRule: "evenodd"
  }
)), oa = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 2.75A2.75 2.75 0 0 1 4.75 0h6.5A2.75 2.75 0 0 1 14 2.75v10.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.78 7.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h4.69l-.97-.97a.75.75 0 0 1 1.06-1.06l2.25 2.25Z",
    clipRule: "evenodd"
  }
)), pt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M4 6.104V4a4 4 0 1 1 8 0v2.104c1.154.326 2 1.387 2 2.646v4.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-4.5c0-1.259.846-2.32 2-2.646ZM5.5 4a2.5 2.5 0 0 1 5 0v2h-5V4Z",
    clipRule: "evenodd"
  }
)), wt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M12.227 11.52a5.477 5.477 0 0 0 1.246-2.97.5.5 0 0 0-.995-.1 4.478 4.478 0 0 1-.962 2.359l-1.07-1.07C10.794 9.247 11 8.647 11 8V3a3 3 0 0 0-6 0v1.293L1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708zM8 12.5c.683 0 1.33-.152 1.911-.425l.743.743c-.649.359-1.378.59-2.154.66V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.502 5.502 0 0 1-4.973-4.929.5.5 0 0 1 .995-.098A4.5 4.5 0 0 0 8 12.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M8.743 10.907 5 7.164V8a3 3 0 0 0 3.743 2.907z" })), kt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.975 8.002a.5.5 0 0 1 .547.449 4.5 4.5 0 0 0 8.956 0 .5.5 0 1 1 .995.098A5.502 5.502 0 0 1 8.5 13.478V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.502 5.502 0 0 1-4.973-4.929.5.5 0 0 1 .448-.547z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement("path", { d: "M5 3a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z" })), Rt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })), Mt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ e.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }))), yt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ e.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }))), bt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4Zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9Zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V.5Z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4Zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9Zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V.5Z" }))), Me = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h14.5A2.75 2.75 0 0 1 20 2.75v10.5A2.75 2.75 0 0 1 17.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.47 4.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v4.69a.75.75 0 0 1-1.5 0V6.56l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25Z",
    clipRule: "evenodd"
  }
)), St = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement("g", { fill: "currentColor" }, /* @__PURE__ */ e.createElement("path", { d: "M7.28 4.22a.75.75 0 0 0-1.06 1.06L8.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 6.94z" }), /* @__PURE__ */ e.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.75 0A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h14.5A2.75 2.75 0 0 0 20 13.25V2.75A2.75 2.75 0 0 0 17.25 0zM1.5 2.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25z",
    clipRule: "evenodd"
  }
))), oe = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 12Z",
    clipRule: "evenodd",
    opacity: 0.7
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1.072a.75.75 0 0 1 .274 1.024l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 12 1.072Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 11.464a.75.75 0 0 1 .274 1.025l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 6 11.464Z",
    clipRule: "evenodd",
    opacity: 0.6
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 4a.75.75 0 0 1-.274 1.025l-2.165 1.25a.75.75 0 1 1-.75-1.3l2.165-1.25A.75.75 0 0 1 14.928 4Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 10a.75.75 0 0 1-.275 1.024l-2.165 1.25a.75.75 0 0 1-.75-1.298l2.165-1.25A.75.75 0 0 1 4.536 10Z",
    clipRule: "evenodd",
    opacity: 0.5
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16 8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 16 8Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 8Z",
    clipRule: "evenodd",
    opacity: 0.4
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 12a.75.75 0 0 1-1.024.274l-2.165-1.25a.75.75 0 0 1 .75-1.299l2.165 1.25A.75.75 0 0 1 14.928 12Z",
    clipRule: "evenodd",
    opacity: 0.9
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 6a.75.75 0 0 1-1.025.275l-2.165-1.25a.75.75 0 1 1 .75-1.3l2.165 1.25A.75.75 0 0 1 4.536 6Z",
    clipRule: "evenodd",
    opacity: 0.3
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 14.928a.75.75 0 0 1-1.024-.274l-1.25-2.165a.75.75 0 0 1 1.298-.75l1.25 2.165A.75.75 0 0 1 12 14.928Z",
    clipRule: "evenodd",
    opacity: 0.8
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 4.536a.75.75 0 0 1-1.024-.275l-1.25-2.165a.75.75 0 1 1 1.299-.75l1.25 2.165A.75.75 0 0 1 6 4.536Z",
    clipRule: "evenodd",
    opacity: 0.2
  }
)), Ct = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ e.createElement("path", { d: "M13.25 7H9m0 0V2.75M9 7l5.25-5.25M2.75 9H7m0 0v4.25M7 9l-5.25 5.25" }))), It = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, ...a }, r) {
    const c = te(), { mergedProps: s, inFocus: o } = Ze({
      trackRef: n ?? c,
      props: a
    });
    return /* @__PURE__ */ e.createElement(pe.Consumer, null, (l) => l !== void 0 && /* @__PURE__ */ e.createElement("button", { ref: r, ...s }, a.children ? a.children : o ? /* @__PURE__ */ e.createElement(Ct, null) : /* @__PURE__ */ e.createElement(Et, null)));
  }
), ua = /* @__PURE__ */ e.forwardRef(
  function({
    kind: n,
    initialSelection: a,
    onActiveDeviceChange: r,
    onDeviceListChange: c,
    onDeviceSelectError: s,
    exactMatch: o,
    track: l,
    requestPermissions: i,
    onError: u,
    ...d
  }, g) {
    const f = et(), w = e.useCallback(
      (E) => {
        f && f.emit(Je.MediaDevicesError, E), u == null || u(E);
      },
      [f, u]
    ), { devices: p, activeDeviceId: m, setActiveMediaDevice: v, className: b } = He({
      kind: n,
      room: f,
      track: l,
      requestPermissions: i,
      onError: w
    });
    e.useEffect(() => {
      a !== void 0 && v(a);
    }, [v]), e.useEffect(() => {
      typeof c == "function" && c(p);
    }, [c, p]), e.useEffect(() => {
      m && m !== "" && (r == null || r(m));
    }, [m]);
    const C = async (E) => {
      try {
        await v(E, { exact: o ?? !0 });
      } catch (k) {
        if (k instanceof Error)
          s == null || s(k);
        else
          throw k;
      }
    }, T = e.useMemo(
      () => S(d, { className: b }, { className: "lk-list" }),
      [b, d]
    ), A = !!p.find((E) => E.label.toLowerCase().startsWith("default"));
    function h(E, k, I) {
      return E === k || !A && I === 0 && k === "default";
    }
    return /* @__PURE__ */ e.createElement("ul", { ref: g, ...T }, p.map((E, k) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: E.deviceId,
        id: E.deviceId,
        "data-lk-active": h(E.deviceId, m, k),
        "aria-selected": h(E.deviceId, m, k),
        role: "option"
      },
      /* @__PURE__ */ e.createElement("button", { className: "lk-button", onClick: () => C(E.deviceId) }, E.label)
    )));
  }
), da = /* @__PURE__ */ e.forwardRef(
  function({ label: n = "Allow Audio", ...a }, r) {
    const c = we(), { mergedProps: s } = ge({ room: c, props: a });
    return /* @__PURE__ */ e.createElement("button", { ref: r, ...s }, n);
  }
), ma = /* @__PURE__ */ e.forwardRef(
  function({ label: n, ...a }, r) {
    const c = we(), { mergedProps: s, canPlayAudio: o } = ge({ room: c, props: a }), { mergedProps: l, canPlayVideo: i } = Be({ room: c, props: s }), { style: u, ...d } = l;
    return u.display = o && i ? "none" : "block", /* @__PURE__ */ e.createElement("button", { ref: r, style: u, ...d }, n ?? `Start ${o ? "Video" : "Audio"}`);
  }
);
function ye(t, n) {
  switch (t) {
    case y.Source.Microphone:
      return n ? /* @__PURE__ */ e.createElement(kt, null) : /* @__PURE__ */ e.createElement(wt, null);
    case y.Source.Camera:
      return n ? /* @__PURE__ */ e.createElement(vt, null) : /* @__PURE__ */ e.createElement(gt, null);
    case y.Source.ScreenShare:
      return n ? /* @__PURE__ */ e.createElement(St, null) : /* @__PURE__ */ e.createElement(Me, null);
    default:
      return;
  }
}
function xt(t) {
  switch (t) {
    case Q.Excellent:
      return /* @__PURE__ */ e.createElement(Rt, null);
    case Q.Good:
      return /* @__PURE__ */ e.createElement(Mt, null);
    case Q.Poor:
      return /* @__PURE__ */ e.createElement(yt, null);
    default:
      return /* @__PURE__ */ e.createElement(bt, null);
  }
}
const fa = /* @__PURE__ */ e.forwardRef(function({ showIcon: n, ...a }, r) {
  const { buttonProps: c, enabled: s } = je(a), [o, l] = e.useState(!1);
  return e.useEffect(() => {
    l(!0);
  }, []), o && /* @__PURE__ */ e.createElement("button", { ref: r, ...c }, (n ?? !0) && ye(a.source, s), a.children);
}), be = /* @__PURE__ */ e.forwardRef(function(n, a) {
  const { className: r, quality: c } = _e(n), s = e.useMemo(() => ({ ...S(n, { className: r }), "data-lk-quality": c }), [c, n, r]);
  return /* @__PURE__ */ e.createElement("div", { ref: a, ...s }, n.children ?? xt(c));
}), K = /* @__PURE__ */ e.forwardRef(
  function({ participant: n, ...a }, r) {
    const c = tt(n), { className: s, infoObserver: o } = e.useMemo(() => at(c), [c]), { identity: l, name: i } = Oe(o, {
      name: c.name,
      identity: c.identity,
      metadata: c.metadata
    }), u = e.useMemo(() => S(a, { className: s, "data-lk-participant-name": i }), [a, s, i]);
    return /* @__PURE__ */ e.createElement("span", { ref: r, ...u }, i !== "" ? i : l, a.children);
  }
), Se = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, show: a = "always", ...r }, c) {
    const { className: s, isMuted: o } = We(n), l = a === "always" || a === "muted" && o || a === "unmuted" && !o, i = e.useMemo(
      () => S(r, {
        className: s
      }),
      [s, r]
    );
    return l ? /* @__PURE__ */ e.createElement("div", { ref: c, ...i, "data-lk-muted": o }, r.children ?? ye(n.source, !o)) : null;
  }
), Pt = (t) => /* @__PURE__ */ e.createElement(
  "svg",
  {
    width: 320,
    height: 320,
    viewBox: "0 0 320 320",
    preserveAspectRatio: "xMidYMid meet",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M160 180C204.182 180 240 144.183 240 100C240 55.8172 204.182 20 160 20C115.817 20 79.9997 55.8172 79.9997 100C79.9997 144.183 115.817 180 160 180Z",
      fill: "white",
      fillOpacity: 0.25
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M97.6542 194.614C103.267 191.818 109.841 192.481 115.519 195.141C129.025 201.466 144.1 205 159.999 205C175.899 205 190.973 201.466 204.48 195.141C210.158 192.481 216.732 191.818 222.345 194.614C262.703 214.719 291.985 253.736 298.591 300.062C300.15 310.997 291.045 320 280 320H39.9997C28.954 320 19.8495 310.997 21.4087 300.062C28.014 253.736 57.2966 214.72 97.6542 194.614Z",
      fill: "white",
      fillOpacity: 0.25
    }
  )
);
function Ce(t, n = {}) {
  const [a, r] = e.useState(nt(t)), [c, s] = e.useState(a == null ? void 0 : a.isMuted), [o, l] = e.useState(a == null ? void 0 : a.isSubscribed), [i, u] = e.useState(a == null ? void 0 : a.track), [d, g] = e.useState("landscape"), f = e.useRef(), { className: w, trackObserver: p } = e.useMemo(() => rt(t), [
    t.participant.sid ?? t.participant.identity,
    t.source,
    $(t) && t.publication.trackSid
  ]);
  return e.useEffect(() => {
    const m = p.subscribe((v) => {
      j.debug("update track", v), r(v), s(v == null ? void 0 : v.isMuted), l(v == null ? void 0 : v.isSubscribed), u(v == null ? void 0 : v.track);
    });
    return () => m == null ? void 0 : m.unsubscribe();
  }, [p]), e.useEffect(() => {
    var m, v;
    return i && (f.current && i.detach(f.current), (m = n.element) != null && m.current && !(t.participant.isLocal && (i == null ? void 0 : i.kind) === "audio") && i.attach(n.element.current)), f.current = (v = n.element) == null ? void 0 : v.current, () => {
      f.current && (i == null || i.detach(f.current));
    };
  }, [i, n.element]), e.useEffect(() => {
    var m, v;
    if (typeof ((m = a == null ? void 0 : a.dimensions) == null ? void 0 : m.width) == "number" && typeof ((v = a == null ? void 0 : a.dimensions) == null ? void 0 : v.height) == "number") {
      const b = a.dimensions.width > a.dimensions.height ? "landscape" : "portrait";
      g(b);
    }
  }, [a]), {
    publication: a,
    isMuted: c,
    isSubscribed: o,
    track: i,
    elementProps: S(n.props, {
      className: w,
      "data-lk-local-participant": t.participant.isLocal,
      "data-lk-source": a == null ? void 0 : a.source,
      ...(a == null ? void 0 : a.kind) === "video" && { "data-lk-orientation": d }
    })
  };
}
var Y, ue;
function Tt() {
  if (ue) return Y;
  ue = 1;
  var t = "Expected a function", n = NaN, a = "[object Symbol]", r = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, o = /^0o[0-7]+$/i, l = parseInt, i = typeof q == "object" && q && q.Object === Object && q, u = typeof self == "object" && self && self.Object === Object && self, d = i || u || Function("return this")(), g = Object.prototype, f = g.toString, w = Math.max, p = Math.min, m = function() {
    return d.Date.now();
  };
  function v(h, E, k) {
    var I, V, O, N, M, P, F = 0, re = !1, Z = !1, D = !0;
    if (typeof h != "function")
      throw new TypeError(t);
    E = A(E) || 0, b(k) && (re = !!k.leading, Z = "maxWait" in k, O = Z ? w(A(k.maxWait) || 0, E) : O, D = "trailing" in k ? !!k.trailing : D);
    function U(R) {
      var x = I, H = V;
      return I = V = void 0, F = R, N = h.apply(H, x), N;
    }
    function Pe(R) {
      return F = R, M = setTimeout(W, E), re ? U(R) : N;
    }
    function Te(R) {
      var x = R - P, H = R - F, se = E - x;
      return Z ? p(se, O - H) : se;
    }
    function ce(R) {
      var x = R - P, H = R - F;
      return P === void 0 || x >= E || x < 0 || Z && H >= O;
    }
    function W() {
      var R = m();
      if (ce(R))
        return le(R);
      M = setTimeout(W, Te(R));
    }
    function le(R) {
      return M = void 0, D && I ? U(R) : (I = V = void 0, N);
    }
    function Ae() {
      M !== void 0 && clearTimeout(M), F = 0, I = P = V = M = void 0;
    }
    function Ne() {
      return M === void 0 ? N : le(m());
    }
    function G() {
      var R = m(), x = ce(R);
      if (I = arguments, V = this, P = R, x) {
        if (M === void 0)
          return Pe(P);
        if (Z)
          return M = setTimeout(W, E), U(P);
      }
      return M === void 0 && (M = setTimeout(W, E)), N;
    }
    return G.cancel = Ae, G.flush = Ne, G;
  }
  function b(h) {
    var E = typeof h;
    return !!h && (E == "object" || E == "function");
  }
  function C(h) {
    return !!h && typeof h == "object";
  }
  function T(h) {
    return typeof h == "symbol" || C(h) && f.call(h) == a;
  }
  function A(h) {
    if (typeof h == "number")
      return h;
    if (T(h))
      return n;
    if (b(h)) {
      var E = typeof h.valueOf == "function" ? h.valueOf() : h;
      h = b(E) ? E + "" : E;
    }
    if (typeof h != "string")
      return h === 0 ? h : +h;
    h = h.replace(r, "");
    var k = s.test(h);
    return k || o.test(h) ? l(h.slice(2), k ? 2 : 8) : c.test(h) ? n : +h;
  }
  return Y = v, Y;
}
var At = Tt();
const de = /* @__PURE__ */ ct(At);
function Nt(t) {
  const n = L(t);
  n.current = t, z(
    () => () => {
      n.current();
    },
    []
  );
}
function Lt(t, n = 500, a) {
  const r = L();
  Nt(() => {
    r.current && r.current.cancel();
  });
  const c = Le(() => {
    const s = de(t, n, a), o = (...l) => s(...l);
    return o.cancel = () => {
      s.cancel();
    }, o.isPending = () => !!r.current, o.flush = () => s.flush(), o;
  }, [t, n, a]);
  return z(() => {
    r.current = de(t, n, a);
  }, [t, n, a]), c;
}
function zt(t, n, a) {
  const r = (u, d) => u === d, c = t instanceof Function ? t() : t, [s, o] = B(c), l = L(c), i = Lt(
    o,
    n,
    a
  );
  return r(l.current, c) || (i(c), l.current = c), [s, i];
}
function Vt({
  threshold: t = 0,
  root: n = null,
  rootMargin: a = "0%",
  freezeOnceVisible: r = !1,
  initialIsIntersecting: c = !1,
  onChange: s
} = {}) {
  var o;
  const [l, i] = B(null), [u, d] = B(() => ({
    isIntersecting: c,
    entry: void 0
  })), g = L();
  g.current = s;
  const f = ((o = u.entry) == null ? void 0 : o.isIntersecting) && r;
  z(() => {
    if (!l || !("IntersectionObserver" in window) || f)
      return;
    const m = new IntersectionObserver(
      (v) => {
        const b = Array.isArray(m.thresholds) ? m.thresholds : [m.thresholds];
        v.forEach((C) => {
          const T = C.isIntersecting && b.some((A) => C.intersectionRatio >= A);
          d({ isIntersecting: T, entry: C }), g.current && g.current(T, C);
        });
      },
      { threshold: t, root: n, rootMargin: a }
    );
    return m.observe(l), () => {
      m.disconnect();
    };
  }, [
    l,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(t),
    n,
    a,
    f,
    r
  ]);
  const w = L(null);
  z(() => {
    var m;
    !l && ((m = u.entry) != null && m.target) && !r && !f && w.current !== u.entry.target && (w.current = u.entry.target, d({ isIntersecting: c, entry: void 0 }));
  }, [l, u.entry, r, f, c]);
  const p = [
    i,
    !!u.isIntersecting,
    u.entry
  ];
  return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p;
}
const Ft = /* @__PURE__ */ e.forwardRef(
  function({
    onTrackClick: n,
    onClick: a,
    onSubscriptionStatusChanged: r,
    trackRef: c,
    manageSubscription: s,
    ...o
  }, l) {
    const i = _(c), u = e.useRef(null);
    e.useImperativeHandle(l, () => u.current);
    const d = Vt({ root: u.current }), [g] = zt(d, 3e3);
    e.useEffect(() => {
      s && i.publication instanceof J && (g == null ? void 0 : g.isIntersecting) === !1 && (d == null ? void 0 : d.isIntersecting) === !1 && i.publication.setSubscribed(!1);
    }, [g, i, s]), e.useEffect(() => {
      s && i.publication instanceof J && (d == null ? void 0 : d.isIntersecting) === !0 && i.publication.setSubscribed(!0);
    }, [d, i, s]);
    const {
      elementProps: f,
      publication: w,
      isSubscribed: p
    } = Ce(i, {
      element: u,
      props: o
    });
    e.useEffect(() => {
      r == null || r(!!p);
    }, [p, r]);
    const m = (v) => {
      a == null || a(v), n == null || n({ participant: i == null ? void 0 : i.participant, track: w });
    };
    return /* @__PURE__ */ e.createElement("video", { ref: u, ...f, muted: !0, onClick: m });
  }
), ne = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, onSubscriptionStatusChanged: a, volume: r, ...c }, s) {
    const o = _(n), l = e.useRef(null);
    e.useImperativeHandle(s, () => l.current);
    const {
      elementProps: i,
      isSubscribed: u,
      track: d,
      publication: g
    } = Ce(o, {
      element: l,
      props: c
    });
    return e.useEffect(() => {
      a == null || a(!!u);
    }, [u, a]), e.useEffect(() => {
      d === void 0 || r === void 0 || (d instanceof Ke ? d.setVolume(r) : j.warn("Volume can only be set on remote audio tracks."));
    }, [r, d]), e.useEffect(() => {
      g === void 0 || c.muted === void 0 || (g instanceof J ? g.setEnabled(!c.muted) : j.warn("Can only call setEnabled on remote track publications."));
    }, [c.muted, g, d]), /* @__PURE__ */ e.createElement("audio", { ref: l, ...i });
  }
);
function Zt(t) {
  const n = !!lt();
  return t.participant && !n ? /* @__PURE__ */ e.createElement(ke.Provider, { value: t.participant }, t.children) : /* @__PURE__ */ e.createElement(e.Fragment, null, t.children);
}
function Ht(t) {
  const n = !!te();
  return t.trackRef && !n ? /* @__PURE__ */ e.createElement(ae.Provider, { value: t.trackRef }, t.children) : /* @__PURE__ */ e.createElement(e.Fragment, null, t.children);
}
const Bt = /* @__PURE__ */ e.forwardRef(
  function({
    trackRef: n,
    children: a,
    onParticipantClick: r,
    disableSpeakingIndicator: c,
    ...s
  }, o) {
    var w, p;
    const l = _(n), { elementProps: i } = ve({
      htmlProps: s,
      disableSpeakingIndicator: c,
      onParticipantClick: r,
      trackRef: l
    }), u = qe(l.participant), d = st(), g = (w = it()) == null ? void 0 : w.autoSubscription, f = e.useCallback(
      (m) => {
        l.source && !m && d && d.pin.dispatch && ot(l, d.pin.state) && d.pin.dispatch({ msg: "clear_pin" });
      },
      [l, d]
    );
    return /* @__PURE__ */ e.createElement("div", { ref: o, style: { position: "relative" }, ...i }, /* @__PURE__ */ e.createElement(Ht, { trackRef: l }, /* @__PURE__ */ e.createElement(Zt, { participant: l.participant }, a ?? /* @__PURE__ */ e.createElement(e.Fragment, null, $(l) && (((p = l.publication) == null ? void 0 : p.kind) === "video" || l.source === y.Source.Camera || l.source === y.Source.ScreenShare) ? /* @__PURE__ */ e.createElement(
      Ft,
      {
        trackRef: l,
        onSubscriptionStatusChanged: f,
        manageSubscription: g
      }
    ) : $(l) && /* @__PURE__ */ e.createElement(
      ne,
      {
        trackRef: l,
        onSubscriptionStatusChanged: f
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "lk-participant-placeholder" }, /* @__PURE__ */ e.createElement(Pt, null)), /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata-item" }, l.source === y.Source.Camera ? /* @__PURE__ */ e.createElement(e.Fragment, null, u && /* @__PURE__ */ e.createElement(pt, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ e.createElement(
      Se,
      {
        trackRef: {
          participant: l.participant,
          source: y.Source.Microphone
        },
        show: "muted"
      }
    ), /* @__PURE__ */ e.createElement(K, null)) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Me, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ e.createElement(K, null, "'s screen"))), /* @__PURE__ */ e.createElement(be, { className: "lk-participant-metadata-item" }))), /* @__PURE__ */ e.createElement(It, { trackRef: l }))));
  }
);
function ha(t) {
  const n = S(t, { className: "lk-focus-layout" });
  return /* @__PURE__ */ e.createElement("div", { ...n }, t.children);
}
function ga({ trackRef: t, ...n }) {
  return /* @__PURE__ */ e.createElement(Bt, { trackRef: t, ...n });
}
function Ie({ tracks: t, ...n }) {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.map((a) => /* @__PURE__ */ e.createElement(
    ae.Provider,
    {
      value: a,
      key: Re(a)
    },
    ee(n.children)
  )));
}
function jt({
  totalPageCount: t,
  nextPage: n,
  prevPage: a,
  currentPage: r,
  pagesContainer: c
}) {
  const [s, o] = e.useState(!1);
  return e.useEffect(() => {
    let l;
    return c && (l = ut(c.current, 2e3).subscribe(
      o
    )), () => {
      l && l.unsubscribe();
    };
  }, [c]), /* @__PURE__ */ e.createElement("div", { className: "lk-pagination-control", "data-lk-user-interaction": s }, /* @__PURE__ */ e.createElement("button", { className: "lk-button", onClick: a }, /* @__PURE__ */ e.createElement(ie, null)), /* @__PURE__ */ e.createElement("span", { className: "lk-pagination-count" }, `${r} of ${t}`), /* @__PURE__ */ e.createElement("button", { className: "lk-button", onClick: n }, /* @__PURE__ */ e.createElement(ie, null)));
}
const _t = /* @__PURE__ */ e.forwardRef(
  function({ totalPageCount: n, currentPage: a }, r) {
    const c = new Array(n).fill("").map((s, o) => o + 1 === a ? /* @__PURE__ */ e.createElement("span", { "data-lk-active": !0, key: o }) : /* @__PURE__ */ e.createElement("span", { key: o }));
    return /* @__PURE__ */ e.createElement("div", { ref: r, className: "lk-pagination-indicator" }, c);
  }
);
function va({ tracks: t, ...n }) {
  const a = e.createRef(), r = e.useMemo(
    () => S(n, { className: "lk-grid-layout" }),
    [n]
  ), { layout: c } = $e(a, t.length), s = De(c.maxTiles, t);
  return Ue(a, {
    onLeftSwipe: s.nextPage,
    onRightSwipe: s.prevPage
  }), /* @__PURE__ */ e.createElement("div", { ref: a, "data-lk-pagination": s.totalPageCount > 1, ...r }, /* @__PURE__ */ e.createElement(Ie, { tracks: s.tracks }, n.children), t.length > c.maxTiles && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    _t,
    {
      totalPageCount: s.totalPageCount,
      currentPage: s.currentPage
    }
  ), /* @__PURE__ */ e.createElement(jt, { pagesContainer: a, ...s })));
}
const Ot = 130, Wt = 140, me = 1, xe = 16 / 10, qt = (1 - xe) * -1;
function Ea({ tracks: t, orientation: n, ...a }) {
  const r = e.useRef(null), [c, s] = e.useState(0), { width: o, height: l } = Ge(r), i = n || (l >= o ? "vertical" : "horizontal"), u = i === "vertical" ? Math.max(o * qt, Ot) : Math.max(l * xe, Wt), d = dt(), g = Math.max(i === "vertical" ? (l - d) / u : (o - d) / u, me);
  let f = Math.round(g);
  Math.abs(g - c) < 0.5 ? f = Math.round(c) : c !== g && s(g);
  const w = Qe(t, f);
  return e.useLayoutEffect(() => {
    r.current && (r.current.dataset.lkOrientation = i, r.current.style.setProperty("--lk-max-visible-tiles", f.toString()));
  }, [f, i]), /* @__PURE__ */ e.createElement("aside", { key: i, className: "lk-carousel", ref: r, ...a }, /* @__PURE__ */ e.createElement(Ie, { tracks: w }, a.children));
}
function pa({
  value: t,
  onPinChange: n,
  onWidgetChange: a,
  children: r
}) {
  const c = mt(t);
  return e.useEffect(() => {
    j.debug("PinState Updated", { state: c.pin.state }), n && c.pin.state && n(c.pin.state);
  }, [c.pin.state, n]), e.useEffect(() => {
    j.debug("Widget Updated", { widgetState: c.widget.state }), a && c.widget.state && a(c.widget.state);
  }, [a, c.widget.state]), /* @__PURE__ */ e.createElement(pe.Provider, { value: c }, r);
}
const wa = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, ...a }, r) {
    const d = _(n), g = Ee(d, { bands: 7, loPass: 300 });
    return /* @__PURE__ */ e.createElement(
      "svg",
      {
        ref: r,
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 90",
        ...a,
        className: "lk-audio-visualizer"
      },
      /* @__PURE__ */ e.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%" }),
      /* @__PURE__ */ e.createElement(
        "g",
        {
          style: {
            transform: `translate(${(200 - 7 * 10) / 2}px, 0)`
          }
        },
        g.map((f, w) => /* @__PURE__ */ e.createElement(
          "rect",
          {
            key: w,
            x: w * 10,
            y: 90 / 2 - f * 50 / 2,
            width: 6,
            height: f * 50
          }
        ))
      )
    );
  }
);
function ka({ participants: t, ...n }) {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.map((a) => /* @__PURE__ */ e.createElement(ke.Provider, { value: a, key: a.identity }, ee(n.children))));
}
function Ra({ volume: t, muted: n }) {
  const a = Xe(
    [y.Source.Microphone, y.Source.ScreenShareAudio, y.Source.Unknown],
    {
      updateOnlyOn: [],
      onlySubscribed: !0
    }
  ).filter((r) => !r.participant.isLocal && r.publication.kind === y.Kind.Audio);
  return /* @__PURE__ */ e.createElement("div", { style: { display: "none" } }, a.map((r) => /* @__PURE__ */ e.createElement(
    ne,
    {
      key: Re(r),
      trackRef: r,
      volume: t,
      muted: n
    }
  )));
}
const Ma = /* @__PURE__ */ e.forwardRef(function({ childrenPosition: n = "before", children: a, ...r }, c) {
  const { name: s } = Ye();
  return /* @__PURE__ */ e.createElement("span", { ref: c, ...r }, n === "before" && a, s, n === "after" && a);
});
function $t(t) {
  const n = e.useMemo(() => S(t, { className: "lk-toast" }), [t]);
  return /* @__PURE__ */ e.createElement("div", { ...n }, t.children);
}
const Dt = (t) => {
  const n = [];
  for (let a = 0; a < t; a++)
    n.push([a, t - 1 - a]);
  return n;
}, fe = (t) => [[Math.floor(t / 2)], [-1]], Ut = (t, n, a) => {
  const [r, c] = B(0), [s, o] = B([[]]);
  z(() => {
    if (t === "thinking")
      o(fe(n));
    else if (t === "connecting" || t === "initializing") {
      const i = [...Dt(n)];
      o(i);
    } else o(t === "listening" ? fe(n) : t === void 0 ? [new Array(n).fill(0).map((i, u) => u)] : [[]]);
    c(0);
  }, [t, n]);
  const l = L(null);
  return z(() => {
    let i = performance.now();
    const u = (d) => {
      d - i >= a && (c((f) => f + 1), i = d), l.current = requestAnimationFrame(u);
    };
    return l.current = requestAnimationFrame(u), () => {
      l.current !== null && cancelAnimationFrame(l.current);
    };
  }, [a, n, t, s.length]), s[r % s.length];
}, Gt = /* @__PURE__ */ new Map([
  ["connecting", 2e3],
  ["initializing", 2e3],
  ["listening", 500],
  ["thinking", 150]
]), Qt = (t, n) => {
  if (t === void 0)
    return 1e3;
  let a = Gt.get(t);
  if (a)
    switch (t) {
      case "connecting":
        a /= n;
        break;
    }
  return a;
}, Xt = /* @__PURE__ */ e.forwardRef(
  function({ state: n, options: a, barCount: r = 15, trackRef: c, children: s, ...o }, l) {
    const i = S(o, { className: "lk-audio-bar-visualizer" });
    let u = te();
    c && (u = c);
    const d = Ee(u, {
      bands: r,
      loPass: 100,
      hiPass: 200
    }), g = (a == null ? void 0 : a.minHeight) ?? 20, f = (a == null ? void 0 : a.maxHeight) ?? 100, w = Ut(
      n,
      r,
      Qt(n, r) ?? 100
    );
    return /* @__PURE__ */ e.createElement("div", { ref: l, ...i, "data-lk-va-state": n }, d.map(
      (p, m) => s ? ee(s, {
        "data-lk-highlighted": w.includes(m),
        "data-lk-bar-index": m,
        className: "lk-audio-bar",
        style: { height: `${Math.min(f, Math.max(g, p * 100 + 5))}%` }
      }) : /* @__PURE__ */ e.createElement(
        "span",
        {
          key: m,
          "data-lk-highlighted": w.includes(m),
          "data-lk-bar-index": m,
          className: `lk-audio-bar ${w.includes(m) && "lk-highlighted"}`,
          style: {
            // TODO transform animations would be more performant, however the border-radius gets distorted when using scale transforms. a 9-slice approach (or 3 in this case) could work
            // transform: `scale(1, ${Math.min(maxHeight, Math.max(minHeight, volume))}`,
            height: `${Math.min(f, Math.max(g, p * 100 + 5))}%`
          }
        }
      )
    ));
  }
), ya = /* @__PURE__ */ e.forwardRef(
  function({
    children: n,
    disableSpeakingIndicator: a,
    onParticipantClick: r,
    trackRef: c,
    ...s
  }, o) {
    const l = _(c), { elementProps: i } = ve({
      trackRef: l,
      htmlProps: s,
      disableSpeakingIndicator: a,
      onParticipantClick: r
    });
    return /* @__PURE__ */ e.createElement("div", { ref: o, style: { position: "relative", minHeight: "160px" }, ...i }, /* @__PURE__ */ e.createElement(ae.Provider, { value: l }, n ?? /* @__PURE__ */ e.createElement(e.Fragment, null, $(l) && /* @__PURE__ */ e.createElement(ne, { trackRef: l }), /* @__PURE__ */ e.createElement(Xt, { barCount: 7, options: { minHeight: 8 } }), /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ e.createElement(Se, { trackRef: l }), /* @__PURE__ */ e.createElement(K, null)), /* @__PURE__ */ e.createElement(be, { className: "lk-participant-metadata-item" })))));
  }
);
function ba(t) {
  const [n, a] = e.useState(void 0), r = he(t.room);
  return e.useEffect(() => {
    switch (r) {
      case X.Reconnecting:
        a(
          /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(oe, { className: "lk-spinner" }), " Reconnecting")
        );
        break;
      case X.Connecting:
        a(
          /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(oe, { className: "lk-spinner" }), " Connecting")
        );
        break;
      case X.Disconnected:
        a(/* @__PURE__ */ e.createElement(e.Fragment, null, "Disconnected"));
        break;
      default:
        a(void 0);
        break;
    }
  }, [r]), n ? /* @__PURE__ */ e.createElement($t, { className: "lk-toast-connection-state" }, n) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}
const Sa = /* @__PURE__ */ e.forwardRef(
  function({ entry: n, hideName: a = !1, hideTimestamp: r = !1, messageFormatter: c, ...s }, o) {
    var f, w, p, m;
    const l = e.useMemo(() => c ? c(n.message) : n.message, [n.message, c]), i = !!n.editTimestamp, u = new Date(n.timestamp), d = typeof navigator < "u" ? navigator.language : "en-US", g = ((f = n.from) == null ? void 0 : f.name) ?? ((w = n.from) == null ? void 0 : w.identity);
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        ref: o,
        className: "lk-chat-entry",
        title: u.toLocaleTimeString(d, { timeStyle: "full" }),
        "data-lk-message-origin": (p = n.from) != null && p.isLocal ? "local" : "remote",
        ...s
      },
      (!r || !a || i) && /* @__PURE__ */ e.createElement("span", { className: "lk-meta-data" }, !a && /* @__PURE__ */ e.createElement("strong", { className: "lk-participant-name" }, g), (!r || i) && /* @__PURE__ */ e.createElement("span", { className: "lk-timestamp" }, i && "edited ", u.toLocaleTimeString(d, { timeStyle: "short" }))),
      /* @__PURE__ */ e.createElement("span", { className: "lk-message-body" }, l),
      /* @__PURE__ */ e.createElement("span", { className: "lk-message-attachements" }, (m = n.attachedFiles) == null ? void 0 : m.map(
        (v) => v.type.startsWith("image/") && /* @__PURE__ */ e.createElement(
          "img",
          {
            style: { maxWidth: "300px", maxHeight: "300px" },
            key: v.name,
            src: URL.createObjectURL(v),
            alt: v.name
          }
        )
      ))
    );
  }
);
function Ca(t) {
  return ft(t, ht()).map((n, a) => {
    if (typeof n == "string")
      return n;
    {
      const r = n.content.toString(), c = n.type === "url" ? /^http(s?):\/\//.test(r) ? r : `https://${r}` : `mailto:${r}`;
      return /* @__PURE__ */ e.createElement("a", { className: "lk-chat-link", key: a, href: c, target: "_blank", rel: "noreferrer" }, r);
    }
  });
}
export {
  wa as A,
  Xt as B,
  ra as C,
  ca as D,
  vt as E,
  ha as F,
  va as G,
  ie as H,
  Et as I,
  pt as J,
  wt as K,
  pa as L,
  ua as M,
  kt as N,
  Rt as O,
  Bt as P,
  Mt as Q,
  Ra as R,
  la as S,
  fa as T,
  yt as U,
  Ft as V,
  bt as W,
  Me as X,
  St as Y,
  oe as Z,
  Ct as _,
  Sa as a,
  Pt as b,
  sa as c,
  ia as d,
  oa as e,
  ma as f,
  Ea as g,
  ga as h,
  ba as i,
  Ie as j,
  ya as k,
  $t as l,
  Ca as m,
  aa as n,
  na as o,
  It as p,
  da as q,
  be as r,
  ne as s,
  K as t,
  Se as u,
  ka as v,
  Ma as w,
  Zt as x,
  Ht as y,
  gt as z
};
//# sourceMappingURL=components-3NBkfi42.mjs.map
