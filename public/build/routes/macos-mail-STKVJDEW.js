import {
  Layout
} from "/build/_shared/chunk-JUJQ6BEM.js";
import "/build/_shared/chunk-E2KKKIWD.js";
import {
  createHotContext
} from "/build/_shared/chunk-6XITS45A.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import "/build/_shared/chunk-2Q7FBYOG.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/KeyboardShortcut.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/KeyboardShortcut.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/KeyboardShortcut.tsx"
  );
  import.meta.hot.lastModified = "1730554440289.1545";
}
function KeyboardShortcut({
  children,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: `px-2 py-1 text-sm font-mono bg-zinc-700 text-zinc-100 rounded border border-zinc-600 ${className}`, children }, void 0, false, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = KeyboardShortcut;
function Cmd() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcut, { children: "\u2318" }, void 0, false, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = Cmd;
function Shift() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcut, { children: "\u21E7" }, void 0, false, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c3 = Shift;
function Opt() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcut, { children: "\u2325" }, void 0, false, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c4 = Opt;
function Ctrl() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcut, { children: "\u2303" }, void 0, false, {
    fileName: "app/components/KeyboardShortcut.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c5 = Ctrl;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "KeyboardShortcut");
$RefreshReg$(_c2, "Cmd");
$RefreshReg$(_c3, "Shift");
$RefreshReg$(_c4, "Opt");
$RefreshReg$(_c5, "Ctrl");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/macos-mail.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/macos-mail.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/macos-mail.tsx"
  );
  import.meta.hot.lastModified = "1730554277194.544";
}
var meta = () => {
  return [{
    title: "Learn macOS Mail - Zoney Hotkeys"
  }, {
    name: "description",
    content: "Master macOS Mail keyboard shortcuts"
  }];
};
function MacOSMail() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "macOS Mail Shortcuts" }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "p-6 space-y-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-zinc-800 rounded-lg p-6 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutSection, { title: "Essential Actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 40,
          columnNumber: 38
        }, this), "N"], children: "New Message" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 41,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 41,
          columnNumber: 47
        }, this), "D"], children: "Send Message" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 42,
          columnNumber: 38
        }, this), "R"], children: "Reply" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 43,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 43,
          columnNumber: 47
        }, this), "R"], children: "Reply All" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 44,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 44,
          columnNumber: 47
        }, this), "F"], children: "Forward" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutSection, { title: "Message Management", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 48,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 48,
          columnNumber: 47
        }, this), "U"], children: "Toggle Read/Unread" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 49,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 49,
          columnNumber: 47
        }, this), "J"], children: "Toggle Junk" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 50,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 50,
          columnNumber: 47
        }, this), "L"], children: "Toggle Flag" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 51,
          columnNumber: 38
        }, this), "\u2193"], children: "Archive" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 52,
          columnNumber: 38
        }, this), "S"], children: "Save Draft" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutSection, { title: "Navigation", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 56,
          columnNumber: 38
        }, this), "1"], children: "Go to Inbox" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: ["\u2191"], children: "Previous Message" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: ["\u2193"], children: "Next Message" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: ["\u2190"], children: "Collapse Thread" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: ["\u2192"], children: "Expand Thread" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutSection, { title: "Window Management", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Opt, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 64,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 64,
          columnNumber: 47
        }, this), "N"], children: "New Viewer Window" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Opt, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 47
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 58
        }, this), "N"], children: "New Tab" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ctrl, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 66,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 66,
          columnNumber: 48
        }, this), "S"], children: "Toggle Sidebar" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Opt, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 67,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 67,
          columnNumber: 47
        }, this), "W"], children: "Close All Windows" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutSection, { title: "Text Formatting", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 71,
          columnNumber: 38
        }, this), "B"], children: "Bold" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 72,
          columnNumber: 38
        }, this), "I"], children: "Italic" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 73,
          columnNumber: 38
        }, this), "U"], children: "Underline" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 74,
          columnNumber: 38
        }, this), "+"], children: "Increase Font" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 75,
          columnNumber: 38
        }, this), "-"], children: "Decrease Font" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutSection, { title: "Advanced", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 79,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 79,
          columnNumber: 47
        }, this), "A"], children: "Attach File" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Opt, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 80,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 80,
          columnNumber: 47
        }, this), "B"], children: "Show BCC Field" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Opt, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 81,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 81,
          columnNumber: 47
        }, this), "R"], children: "Show Reply-To" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 82,
          columnNumber: 38
        }, this), "Z"], children: "Undo" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShortcutItem, { keys: [/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cmd, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 83,
          columnNumber: 38
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Shift, {}, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 83,
          columnNumber: 47
        }, this), "Z"], children: "Redo" }, void 0, false, {
          fileName: "app/routes/macos-mail.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/macos-mail.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c6 = MacOSMail;
function ShortcutSection({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-zinc-800 p-4 rounded-lg shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mb-3 text-zinc-100", children: title }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_c22 = ShortcutSection;
function ShortcutItem({
  keys,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-zinc-300", children }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-1", children: keys.map((key, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: key }, index, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 111,
      columnNumber: 35
    }, this)) }, void 0, false, {
      fileName: "app/routes/macos-mail.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/macos-mail.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_c32 = ShortcutItem;
var _c6;
var _c22;
var _c32;
$RefreshReg$(_c6, "MacOSMail");
$RefreshReg$(_c22, "ShortcutSection");
$RefreshReg$(_c32, "ShortcutItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MacOSMail as default,
  meta
};
//# sourceMappingURL=/build/routes/macos-mail-STKVJDEW.js.map
