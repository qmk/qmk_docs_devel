import { _ as _export_sfc, c as createElementBlock, o as openBlock, l as createBaseVNode, a as createTextVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Mitigate VIA keylogger security issues #25414","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20250831/PR25414.md","filePath":"ChangeLog/20250831/PR25414.md","lastUpdated":1751160573000}');
const _sfc_main = { name: "ChangeLog/20250831/PR25414.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "mitigate-via-keylogger-security-issues-25414",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Mitigate VIA keylogger security issues "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/qmk/qmk_firmware/pull/25414",
    target: "_blank",
    rel: "noreferrer"
  }, "#25414"),
  /* @__PURE__ */ createTextVNode(),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#mitigate-via-keylogger-security-issues-25414",
    "aria-label": 'Permalink to "Mitigate VIA keylogger security issues [#25414](https://github.com/qmk/qmk_firmware/pull/25414)"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "VIA's keyboard matrix testing functionality, which allows users to identify active key presses, has been identified as a potential security concern by community members and security researchers. This feature has been demonstrated to enable unauthorized keystroke capture, with documented examples showing how malicious scripts could exploit this capability to create keyloggers. A recent security assessment revealed that user credentials could be compromised by exploiting the matrix testing function combined with VIA's keycode assignment queries. In this attack scenario, a script could remain active during a locked session and capture password input when users authenticate upon return.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "The QMK team notified the VIA team of this security vulnerability on May 17, 2022, and made multiple subsequent attempts to coordinate a mitigation strategy. Despite repeated outreach, the VIA team has provided no acknowledgment or response to these security concerns. Given the severity of the potential security implications and the lack of engagement from the VIA team, the QMK team has unilaterally implemented a security enhancement that modifies the keyboard matrix testing functionality to prevent the reporting of key press events. This change prioritizes user security and data protection over potential feature compatibility concerns within VIA.", -1);
const _hoisted_4 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_4);
}
const PR25414 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  PR25414 as default
};
