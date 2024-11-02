var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
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
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
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
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
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
var cssBundleHref = "/build/css-bundle-57BKMHVZ.css";

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
var tailwind_default = "/build/_assets/tailwind-GRT3BC4T.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
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
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-50", children: [
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

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
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

// app/components/Card.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Card({ to, title, description }) {
  return /* @__PURE__ */ jsxDEV4(Link2, { to, className: "block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition", children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-semibold mb-2", children: title }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600", children: description }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Card.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Zoney Hotkeys - Learn keyboard shortcuts like a pro" },
  { name: "description", content: "Master hotkeys for VSCode, Vim, macOS Mail, and more" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV5(Layout, { children: /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
    /* @__PURE__ */ jsxDEV5(
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
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
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
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
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
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
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
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/vim.tsx
var vim_exports = {};
__export(vim_exports, {
  default: () => VimRoute,
  meta: () => meta2
});

// app/components/Terminal.tsx
import { useEffect, useRef } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Terminal({ options, onInit, className = "h-96" }) {
  let terminalRef = useRef(null);
  return useEffect(() => {
    if (!terminalRef.current)
      return;
    let terminal = new XTerm({
      cursorBlink: !0,
      theme: {
        background: "#1e1e1e"
      },
      ...options
    }), fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon), terminal.open(terminalRef.current), fitAddon.fit(), onInit?.(terminal);
    let handleResize = () => fitAddon.fit();
    return window.addEventListener("resize", handleResize), () => {
      window.removeEventListener("resize", handleResize), terminal.dispose();
    };
  }, [options, onInit]), /* @__PURE__ */ jsxDEV6("div", { ref: terminalRef, className: `rounded border border-gray-200 ${className}` }, void 0, !1, {
    fileName: "app/components/Terminal.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/vim.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Learn Vim - Zoney Hotkeys" },
  { name: "description", content: "Interactive Vim tutorial with hands-on practice" }
];
function initializeVimTerminal(terminal) {
  terminal.writeln("Welcome to Vim Tutorial!"), terminal.writeln("Press i for insert mode"), terminal.writeln("Press Esc to exit insert mode"), terminal.writeln("Type :q to quit");
}
function VimRoute() {
  return /* @__PURE__ */ jsxDEV7(Layout, { children: [
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-3xl font-bold mb-6", children: "Learn Vim" }, void 0, !1, {
      fileName: "app/routes/vim.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "bg-white p-6 rounded-lg shadow", children: [
        /* @__PURE__ */ jsxDEV7("h2", { className: "text-xl font-semibold mb-4", children: "Interactive Terminal" }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7(Terminal, { onInit: initializeVimTerminal }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/vim.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "bg-white p-6 rounded-lg shadow", children: [
        /* @__PURE__ */ jsxDEV7("h2", { className: "text-xl font-semibold mb-4", children: "Quick Reference" }, void 0, !1, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV7("div", { children: [
            /* @__PURE__ */ jsxDEV7("h3", { className: "font-medium", children: "Basic Navigation" }, void 0, !1, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 35,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV7("ul", { className: "ml-4 list-disc", children: [
              /* @__PURE__ */ jsxDEV7("li", { children: "h - move left" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 37,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: "j - move down" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: "k - move up" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 39,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: "l - move right" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 40,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 36,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/vim.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { children: [
            /* @__PURE__ */ jsxDEV7("h3", { className: "font-medium", children: "Modes" }, void 0, !1, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV7("ul", { className: "ml-4 list-disc", children: [
              /* @__PURE__ */ jsxDEV7("li", { children: "i - enter insert mode" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 47,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: "Esc - return to normal mode" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: "v - enter visual mode" }, void 0, !1, {
                fileName: "app/routes/vim.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/vim.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/vim.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/vim.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/vim.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/vim.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/vim.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-W5NVAZZH.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-AWWRXQQ5.js", "/build/_shared/chunk-HROVJQA4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-D4J6EOUO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-EECL5JTD.js", imports: ["/build/_shared/chunk-5E27HRAM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/vim": { id: "routes/vim", parentId: "root", path: "vim", index: void 0, caseSensitive: void 0, module: "/build/routes/vim-NJYKJ6QG.js", imports: ["/build/_shared/chunk-5E27HRAM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "554d3ede", hmr: { runtime: "/build/_shared/chunk-HROVJQA4.js", timestamp: 1730548932120 }, url: "/build/manifest-554D3EDE.js" };

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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
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
