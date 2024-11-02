var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:~/components/Terminal.client
var require_Terminal = __commonJS({
  "empty-module:~/components/Terminal.client"(exports, module) {
    module.exports = {};
  }
});

// node_modules/.pnpm/@remix-run+dev@2.13.1_@remix-run+react@2.13.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_ssfqnlaixxxpjnlomddfboertq/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@2.13.1_@remix-run+react@2.13.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_ssfqnlaixxxpjnlomddfboertq/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@2.13.1_@remix-run+react@2.13.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_ssfqnlaixxxpjnlomddfboertq/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-VMAWIM7A.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-D5CVOTLW.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "bg-zinc-900", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-zinc-900 text-zinc-100", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/macos-mail.tsx
var macos_mail_exports = {};
__export(macos_mail_exports, {
  default: () => MacOSMail,
  meta: () => meta
});

// app/components/Layout.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxDEV3("header", { className: "bg-indigo-600 text-white py-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "text-3xl font-bold hover:text-indigo-100", children: "Zoney Hotkeys" }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "mt-2", children: "Master keyboard shortcuts for popular applications" }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { className: "container mx-auto px-4 py-8", children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/KeyboardShortcut.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function KeyboardShortcut({ children, className = "" }) {
  return /* @__PURE__ */ jsxDEV4("kbd", { className: `px-2 py-1 text-sm font-mono bg-zinc-700 text-zinc-100 rounded border border-zinc-600 ${className}`, children }, void 0, !1, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function Cmd() {
  return /* @__PURE__ */ jsxDEV4(KeyboardShortcut, { children: "\u2318" }, void 0, !1, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}
function Shift() {
  return /* @__PURE__ */ jsxDEV4(KeyboardShortcut, { children: "\u21E7" }, void 0, !1, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}
function Opt() {
  return /* @__PURE__ */ jsxDEV4(KeyboardShortcut, { children: "\u2325" }, void 0, !1, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
function Ctrl() {
  return /* @__PURE__ */ jsxDEV4(KeyboardShortcut, { children: "\u2303" }, void 0, !1, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/routes/macos-mail.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Learn macOS Mail - Zoney Hotkeys" },
  { name: "description", content: "Master macOS Mail keyboard shortcuts" }
];
function MacOSMail() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: /* @__PURE__ */ jsxDEV5(Layout, { children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-bold mb-6", children: "macOS Mail Shortcuts" }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("main", { className: "p-6 space-y-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxDEV5(ShortcutSection, { title: "Essential Actions", children: [
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 22,
          columnNumber: 38
        }, this), "N"], children: "New Message" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 23,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 23,
          columnNumber: 47
        }, this), "D"], children: "Send Message" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 24,
          columnNumber: 38
        }, this), "R"], children: "Reply" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 25,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 25,
          columnNumber: 47
        }, this), "R"], children: "Reply All" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 26,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 26,
          columnNumber: 47
        }, this), "F"], children: "Forward" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5(ShortcutSection, { title: "Message Management", children: [
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 30,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 30,
          columnNumber: 47
        }, this), "U"], children: "Toggle Read/Unread" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 31,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 31,
          columnNumber: 47
        }, this), "J"], children: "Toggle Junk" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 32,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 32,
          columnNumber: 47
        }, this), "L"], children: "Toggle Flag" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 33,
          columnNumber: 38
        }, this), "\u2193"], children: "Archive" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 34,
          columnNumber: 38
        }, this), "S"], children: "Save Draft" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5(ShortcutSection, { title: "Navigation", children: [
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 38,
          columnNumber: 38
        }, this), "1"], children: "Go to Inbox" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: ["\u2191"], children: "Previous Message" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: ["\u2193"], children: "Next Message" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: ["\u2190"], children: "Collapse Thread" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: ["\u2192"], children: "Expand Thread" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5(ShortcutSection, { title: "Window Management", children: [
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Opt, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 46,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 46,
          columnNumber: 47
        }, this), "N"], children: "New Viewer Window" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Opt, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 47,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 47,
          columnNumber: 47
        }, this), /* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 47,
          columnNumber: 58
        }, this), "N"], children: "New Tab" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Ctrl, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 48,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 48,
          columnNumber: 48
        }, this), "S"], children: "Toggle Sidebar" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Opt, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 49,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 49,
          columnNumber: 47
        }, this), "W"], children: "Close All Windows" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5(ShortcutSection, { title: "Text Formatting", children: [
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 53,
          columnNumber: 38
        }, this), "B"], children: "Bold" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 54,
          columnNumber: 38
        }, this), "I"], children: "Italic" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 55,
          columnNumber: 38
        }, this), "U"], children: "Underline" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 56,
          columnNumber: 38
        }, this), "+"], children: "Increase Font" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 57,
          columnNumber: 38
        }, this), "-"], children: "Decrease Font" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5(ShortcutSection, { title: "Advanced", children: [
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 61,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 61,
          columnNumber: 47
        }, this), "A"], children: "Attach File" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Opt, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 62,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 62,
          columnNumber: 47
        }, this), "B"], children: "Show BCC Field" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Opt, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 63,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 63,
          columnNumber: 47
        }, this), "R"], children: "Show Reply-To" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 64,
          columnNumber: 38
        }, this), "Z"], children: "Undo" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5(ShortcutItem, { keys: [/* @__PURE__ */ jsxDEV5(Cmd, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 38
        }, this), /* @__PURE__ */ jsxDEV5(Shift, {}, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 47
        }, this), "Z"], children: "Redo" }, void 0, !1, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function ShortcutSection({ title, children }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "bg-zinc-800 p-4 rounded-lg shadow", children: [
    /* @__PURE__ */ jsxDEV5("h2", { className: "text-lg font-semibold mb-3 text-zinc-100", children: title }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "space-y-2", children }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function ShortcutItem({ keys, children }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV5("span", { className: "text-zinc-300", children }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center gap-1", children: keys.map((key, index) => /* @__PURE__ */ jsxDEV5("span", { children: key }, index, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});

// app/components/Card.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Card({ to, title, description }) {
  return /* @__PURE__ */ jsxDEV6(
    Link2,
    {
      to,
      className: "block bg-zinc-800 hover:bg-zinc-700 rounded-lg p-6 shadow-lg transition-colors",
      children: [
        /* @__PURE__ */ jsxDEV6("h2", { className: "text-xl font-semibold text-zinc-100 mb-2", children: title }, void 0, !1, {
          fileName: "app/components/Card.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { className: "text-zinc-300", children: description }, void 0, !1, {
          fileName: "app/components/Card.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Card.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Zoney Hotkeys - Learn keyboard shortcuts like a pro" },
  { name: "description", content: "Master hotkeys for VSCode, Vim, macOS Mail, and more" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: /* @__PURE__ */ jsxDEV7(Layout, { children: /* @__PURE__ */ jsxDEV7("main", { className: "p-6 space-y-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
    /* @__PURE__ */ jsxDEV7(
      Card,
      {
        to: "/vim",
        title: "Vim",
        description: "Master the art of modal text editing"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Card,
      {
        to: "/vscode",
        title: "VSCode",
        description: "Boost your coding productivity"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Card,
      {
        to: "/cursor",
        title: "Cursor",
        description: "AI-powered coding with keyboard efficiency"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Card,
      {
        to: "/macos-mail",
        title: "macOS Mail",
        description: "Email management shortcuts"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 15
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/cursor.tsx
var cursor_exports = {};
__export(cursor_exports, {
  default: () => CursorRoute,
  meta: () => meta3
});
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Learn Cursor - Zoney Hotkeys" },
  { name: "description", content: "Master Cursor AI keyboard shortcuts" }
];
function CursorRoute() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: /* @__PURE__ */ jsxDEV8(Layout, { children: [
    /* @__PURE__ */ jsxDEV8("h1", { className: "text-3xl font-bold mb-6", children: "Learn Cursor" }, void 0, !1, {
      fileName: "app/routes/cursor.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("main", { className: "p-6 space-y-8", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV8("h2", { className: "text-xl font-semibold mb-4", children: "Coming Soon" }, void 0, !1, {
          fileName: "app/routes/cursor.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "text-zinc-300", children: "We're working on an interactive Cursor tutorial. Check back soon!" }, void 0, !1, {
          fileName: "app/routes/cursor.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cursor.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV8("h2", { className: "text-xl font-semibold mb-4", children: "Quick Reference" }, void 0, !1, {
          fileName: "app/routes/cursor.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "space-y-4", children: /* @__PURE__ */ jsxDEV8("div", { children: [
          /* @__PURE__ */ jsxDEV8("h3", { className: "font-medium", children: "AI Commands" }, void 0, !1, {
            fileName: "app/routes/cursor.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("ul", { className: "ml-4 list-disc text-zinc-300", children: [
            /* @__PURE__ */ jsxDEV8("li", { children: "Cmd/Ctrl + K - Open AI Command" }, void 0, !1, {
              fileName: "app/routes/cursor.tsx",
              lineNumber: 31,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8("li", { children: "Cmd/Ctrl + L - Explain Code" }, void 0, !1, {
              fileName: "app/routes/cursor.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8("li", { children: "Cmd/Ctrl + I - Inline Chat" }, void 0, !1, {
              fileName: "app/routes/cursor.tsx",
              lineNumber: 33,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cursor.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cursor.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/cursor.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cursor.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cursor.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cursor.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cursor.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/vscode.tsx
var vscode_exports = {};
__export(vscode_exports, {
  default: () => VSCodeRoute,
  meta: () => meta4
});
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Learn VSCode - Zoney Hotkeys" },
  { name: "description", content: "Master VSCode keyboard shortcuts" }
];
function VSCodeRoute() {
  return /* @__PURE__ */ jsxDEV9("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: /* @__PURE__ */ jsxDEV9(Layout, { children: [
    /* @__PURE__ */ jsxDEV9("h1", { className: "text-3xl font-bold mb-6", children: "Learn VSCode" }, void 0, !1, {
      fileName: "app/routes/vscode.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("main", { className: "p-6 space-y-8", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV9("h2", { className: "text-xl font-semibold mb-4", children: "Coming Soon" }, void 0, !1, {
          fileName: "app/routes/vscode.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("p", { className: "text-zinc-300", children: "We're working on an interactive VSCode tutorial. Check back soon!" }, void 0, !1, {
          fileName: "app/routes/vscode.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/vscode.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV9("h2", { className: "text-xl font-semibold mb-4", children: "Quick Reference" }, void 0, !1, {
          fileName: "app/routes/vscode.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "space-y-4", children: /* @__PURE__ */ jsxDEV9("div", { children: [
          /* @__PURE__ */ jsxDEV9("h3", { className: "font-medium", children: "File Operations" }, void 0, !1, {
            fileName: "app/routes/vscode.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("ul", { className: "ml-4 list-disc text-zinc-300", children: [
            /* @__PURE__ */ jsxDEV9("li", { children: "Cmd/Ctrl + S - Save" }, void 0, !1, {
              fileName: "app/routes/vscode.tsx",
              lineNumber: 31,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("li", { children: "Cmd/Ctrl + P - Quick Open" }, void 0, !1, {
              fileName: "app/routes/vscode.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("li", { children: "Cmd/Ctrl + W - Close File" }, void 0, !1, {
              fileName: "app/routes/vscode.tsx",
              lineNumber: 33,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/vscode.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/vscode.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/vscode.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/vscode.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/vscode.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/vscode.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/vscode.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/vim.tsx
var vim_exports = {};
__export(vim_exports, {
  default: () => VimRoute,
  meta: () => meta5
});
var import_Terminal = __toESM(require_Terminal(), 1);
import { ClientOnly } from "remix-utils/client-only";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Learn Vim - Zoney Hotkeys" },
  { name: "description", content: "Interactive Vim tutorial with hands-on practice" }
];
function initializeVimTerminal(terminal) {
  terminal.write(`Welcome to Vim Tutorial!\r
`), terminal.write(`Press i for insert mode\r
`), terminal.write(`Press Esc to exit insert mode\r
`), terminal.write(`Type :q to quit\r
`), terminal.write("\x1B[H");
}
function VimRoute() {
  return /* @__PURE__ */ jsxDEV10("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: /* @__PURE__ */ jsxDEV10(Layout, { children: [
    /* @__PURE__ */ jsxDEV10("h1", { className: "text-3xl font-bold mb-6", children: "Learn Vim" }, void 0, !1, {
      fileName: "app/routes/vim.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("main", { className: "p-6 space-y-8", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-xl font-semibold mb-4", children: "Interactive Terminal" }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10(ClientOnly, { fallback: /* @__PURE__ */ jsxDEV10("div", { children: "Loading terminal..." }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 31,
          columnNumber: 35
        }, this), children: () => /* @__PURE__ */ jsxDEV10(import_Terminal.Terminal, { onInit: initializeVimTerminal }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 32,
          columnNumber: 22
        }, this) }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/vim.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-xl font-semibold mb-4", children: "Quick Reference" }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV10("div", { children: [
            /* @__PURE__ */ jsxDEV10("h3", { className: "font-medium", children: "Basic Navigation" }, void 0, !1, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 40,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("ul", { className: "ml-4 list-disc", children: [
              /* @__PURE__ */ jsxDEV10("li", { children: "h - move left" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 42,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: "j - move down" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 43,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: "k - move up" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 44,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: "l - move right" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/vim.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { children: [
            /* @__PURE__ */ jsxDEV10("h3", { className: "font-medium", children: "Modes" }, void 0, !1, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 50,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("ul", { className: "ml-4 list-disc", children: [
              /* @__PURE__ */ jsxDEV10("li", { children: "i - enter insert mode" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 52,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: "Esc - return to normal mode" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 53,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: "v - enter visual mode" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 54,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/vim.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/vim.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/vim.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/vim.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/vim.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-L6757KOM.js", imports: ["/build/_shared/chunk-XC6BC2BP.js", "/build/_shared/chunk-E2KKKIWD.js", "/build/_shared/chunk-6XITS45A.js", "/build/_shared/chunk-4JLKO6E3.js", "/build/_shared/chunk-56LDNGDG.js", "/build/_shared/chunk-PMI65YMG.js", "/build/_shared/chunk-2Q7FBYOG.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RZQW6KGG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UTANJE6I.js", imports: ["/build/_shared/chunk-JUJQ6BEM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cursor": { id: "routes/cursor", parentId: "root", path: "cursor", index: void 0, caseSensitive: void 0, module: "/build/routes/cursor-GHPOPTNJ.js", imports: ["/build/_shared/chunk-JUJQ6BEM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/macos-mail": { id: "routes/macos-mail", parentId: "root", path: "macos-mail", index: void 0, caseSensitive: void 0, module: "/build/routes/macos-mail-STKVJDEW.js", imports: ["/build/_shared/chunk-JUJQ6BEM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/vim": { id: "routes/vim", parentId: "root", path: "vim", index: void 0, caseSensitive: void 0, module: "/build/routes/vim-MOLUKDHW.js", imports: ["/build/_shared/chunk-JUJQ6BEM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/vscode": { id: "routes/vscode", parentId: "root", path: "vscode", index: void 0, caseSensitive: void 0, module: "/build/routes/vscode-2K37IXXB.js", imports: ["/build/_shared/chunk-JUJQ6BEM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "75a7368d", hmr: { runtime: "/build/_shared/chunk-6XITS45A.js", timestamp: 1730554441064 }, url: "/build/manifest-75A7368D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/macos-mail": {
    id: "routes/macos-mail",
    parentId: "root",
    path: "macos-mail",
    index: void 0,
    caseSensitive: void 0,
    module: macos_mail_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/cursor": {
    id: "routes/cursor",
    parentId: "root",
    path: "cursor",
    index: void 0,
    caseSensitive: void 0,
    module: cursor_exports
  },
  "routes/vscode": {
    id: "routes/vscode",
    parentId: "root",
    path: "vscode",
    index: void 0,
    caseSensitive: void 0,
    module: vscode_exports
  },
  "routes/vim": {
    id: "routes/vim",
    parentId: "root",
    path: "vim",
    index: void 0,
    caseSensitive: void 0,
    module: vim_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
