import { _ as _export_sfc, c as createElementBlock, o as openBlock, l as createBaseVNode, a as createTextVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Deprecation of qmk generate-compilation-database","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20250525/pr25237.md","filePath":"ChangeLog/20250525/pr25237.md","lastUpdated":1748118016000}');
const _sfc_main = { name: "ChangeLog/20250525/pr25237.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "deprecation-of-qmk-generate-compilation-database",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Deprecation of "),
  /* @__PURE__ */ createBaseVNode("code", null, "qmk generate-compilation-database"),
  /* @__PURE__ */ createTextVNode(),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#deprecation-of-qmk-generate-compilation-database",
    "aria-label": 'Permalink to "Deprecation of `qmk generate-compilation-database`"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("This command has been deprecated as it cannot take into account configurables such as "),
  /* @__PURE__ */ createBaseVNode("a", { href: "/feature_converters" }, "converters"),
  /* @__PURE__ */ createTextVNode(" or environment variables normally specified on the command line; please use the "),
  /* @__PURE__ */ createBaseVNode("code", null, "--compiledb"),
  /* @__PURE__ */ createTextVNode(" flag with "),
  /* @__PURE__ */ createBaseVNode("code", null, "qmk compile"),
  /* @__PURE__ */ createTextVNode(" instead.")
], -1);
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const pr25237 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pr25237 as default
};
