import { _ as _imports_0$1 } from "./chunks/color-wheel.DIUCmfNZ.js";
import { _ as _export_sfc, c as createElementBlock, I as createVNode, w as withCtx, a8 as createStaticVNode, D as resolveComponent, o as openBlock, l as createBaseVNode } from "./chunks/framework.Cauyuiy8.js";
const _imports_0 = "/assets/badge-community-light.Cciv47hr.svg";
const _imports_1 = "/assets/badge-community-dark.CirSPMz9.svg";
const __pageData = JSON.parse('{"title":"Documentation Capabilities","description":"","frontmatter":{},"headers":[],"relativePath":"__capabilities.md","filePath":"__capabilities.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "__capabilities.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="documentation-capabilities" tabindex="-1">Documentation Capabilities <a class="header-anchor" href="#documentation-capabilities" aria-label="Permalink to &quot;Documentation Capabilities&quot;">​</a></h1><p>This page lays out the capabilities used by the QMK Firmware documentation, in order to aid future transitions to other page generators. Focuses mainly on things other than normal Markdown, as it&#39;s assumed that markdown generators should still function accordingly.</p><h2 id="overall-capabilities" tabindex="-1">Overall capabilities <a class="header-anchor" href="#overall-capabilities" aria-label="Permalink to &quot;Overall capabilities&quot;">​</a></h2><p>Unrelated to styling, high-level tech.</p><ul><li>Title anchors -- <code>:id=some-anchor-name</code>, used for direct linking to sections <ul><li>Links to anchors: <ul><li>Style 1: <a href="./platformdev_chibios_earlyinit?id=board-init">early initialization</a></li><li>Style 2: <a href="./platformdev_chibios_earlyinit#board-init">early initialization</a></li><li>Links to anchors on the same page, i.e. <a href="#emoji">Emoji</a></li></ul></li></ul></li><li>Specifying CNAME for root domain -- <code>docs.qmk.fm</code></li><li>Moved pages, see <code>index.html</code></li><li>Text search</li><li>Footnotes <a href="https://en.wikipedia.org/wiki/Eclipse_(software)" target="_blank" rel="noreferrer">like this</a></li></ul><h3 id="dividing-lines" tabindex="-1">Dividing lines <a class="header-anchor" href="#dividing-lines" aria-label="Permalink to &quot;Dividing lines&quot;">​</a></h3><hr><hr><hr><h3 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h3><p><img src="https://i.imgur.com/vkYVo66.jpg" alt="QMK Color Wheel with HSV Values"></p><p><img src="' + _imports_0 + '" alt="QMK Light"><img src="' + _imports_1 + '" alt="QMK Dark"></p><img src="' + _imports_0$1 + '" alt="HSV Color Wheel" width="250"><h3 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to &quot;Lists&quot;">​</a></h3><p>Newlines with <code>&lt;br&gt;</code>:</p><p>Line one<br> Line two<br> Line three</p><p>Nested dotted:</p><ul><li>The PR is complete and ready to merge</li><li>GitHub checks for the PR are green whenever possible <ul><li>A &quot;red&quot; check may be disregarded by maintainers if the items flagged are unrelated to the change proposed in the PR <ul><li>Modifications to existing files should not need to add license headers to pass lint, for instance.</li><li>If it&#39;s not directly related to your PR&#39;s functionality, prefer avoiding making a change.</li></ul></li></ul></li></ul><p>Nested dashed:</p><ul><li>The PR is complete and ready to merge</li><li>GitHub checks for the PR are green whenever possible <ul><li>A &quot;red&quot; check may be disregarded by maintainers if the items flagged are unrelated to the change proposed in the PR <ul><li>Modifications to existing files should not need to add license headers to pass lint, for instance.</li><li>If it&#39;s not directly related to your PR&#39;s functionality, prefer avoiding making a change.</li></ul></li></ul></li></ul><p>Nested numbered:</p><ol><li>The PR is complete and ready to merge</li><li>GitHub checks for the PR are green whenever possible <ol><li>A &quot;red&quot; check may be disregarded by maintainers if the items flagged are unrelated to the change proposed in the PR <ol><li>Modifications to existing files should not need to add license headers to pass lint, for instance.</li><li>If it&#39;s not directly related to your PR&#39;s functionality, prefer avoiding making a change.</li></ol></li></ol></li></ol><p>Nested mixed:</p><ol><li>Add it to the schema in <code>data/schemas/keyboards.jsonschema</code></li><li>Add a mapping in <code>data/maps</code></li><li>(optional and discouraged) Add code to extract/generate it to:</li></ol><ul><li><code>lib/python/qmk/info.py</code></li><li><code>lib/python/qmk/cli/generate/config_h.py</code></li><li><code>lib/python/qmk/cli/generate/rules_mk.py</code></li></ul><h3 id="emoji" tabindex="-1">Emoji <a class="header-anchor" href="#emoji" aria-label="Permalink to &quot;Emoji {#emoji}&quot;">​</a></h3><h4 id="direct" tabindex="-1">Direct: <a class="header-anchor" href="#direct" aria-label="Permalink to &quot;Direct:&quot;">​</a></h4><p>👍🎉 First off, thanks for taking the time to read this and contribute! 🎉👍</p><h4 id="as-colon-name-colon" tabindex="-1">As colon-name-colon: <a class="header-anchor" href="#as-colon-name-colon" aria-label="Permalink to &quot;As colon-name-colon:&quot;">​</a></h4><p>✔️ : works and was tested</p><p>⭕ : does not apply</p><p>❌ : not supported by MCU</p><h3 id="xml-entities" tabindex="-1">XML Entities <a class="header-anchor" href="#xml-entities" aria-label="Permalink to &quot;XML Entities&quot;">​</a></h3><p><a href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/clueboard" target="_blank" rel="noreferrer"><code>clueboard</code></a> ← This is the organization folder, there&#39;s no <code>rules.mk</code> file</p><p>1–4</p><p>Command+<code>`</code></p><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;Styling&quot;">​</a></h2><h3 id="css-ish" tabindex="-1">CSS-ish <a class="header-anchor" href="#css-ish" aria-label="Permalink to &quot;CSS-ish&quot;">​</a></h3><p><b style="font-size:150%;">This is 150% of normal sizing, and bold!</b></p><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h3><table><thead><tr><th>Column A</th><th>Column B</th></tr></thead><tbody><tr><td>Left</td><td>Right</td></tr></tbody></table><h3 id="indented-sections" tabindex="-1">Indented sections <a class="header-anchor" href="#indented-sections" aria-label="Permalink to &quot;Indented sections&quot;">​</a></h3><blockquote><p>Indent without any sort of marker</p></blockquote><p>?&gt; Query, this?</p><p>!&gt; Notification, damnit!</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h3 id="keyboard-keys" tabindex="-1">Keyboard keys <a class="header-anchor" href="#keyboard-keys" aria-label="Permalink to &quot;Keyboard keys&quot;">​</a></h3><p><kbd>,</kbd></p><p><kbd>Right Alt</kbd>+<kbd>Right Shift</kbd></p><ol><li><p>Click <kbd>File</kbd> &gt; <kbd>New</kbd> &gt; <kbd>Makefile Project with Existing Code</kbd></p></li><li><p>Click <kbd><kbd>File</kbd> &gt; <kbd>Preferences &gt;</kbd> &gt; <kbd>Settings</kbd></kbd></p></li><li><p>Hit Ctrl-<code>`</code> (Grave) to bring up the terminal or go to <kbd><kbd>View</kbd> &gt; <kbd>Terminal</kbd></kbd> (command <code>workbench.action.terminal.toggleTerminal</code>). A new terminal will be opened if there isn‘t one already.</p><p>This should start the terminal in the workspace&#39;s folder (so the <code>qmk_firmware</code> folder), and then you can compile your keyboard.</p></li></ol><h3 id="code-blocks" tabindex="-1">Code Blocks <a class="header-anchor" href="#code-blocks" aria-label="Permalink to &quot;Code Blocks&quot;">​</a></h3><p>Inline code with tag: <code>test</code></p><p>Inline code with backticks: <code>test</code></p><pre><code>This is preformatted\nIndented by 4 spaces\nThe letters lined up\n</code></pre><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> c_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ifeq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BUILD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     CHUNDER_REQUIRED = yes</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pathlib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Path</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Path(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/path/to/qmk_firmware&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;e&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #undef RGBLIGHT_LED_COUNT</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#undef RGBLIGHT_EFFECT_STATIC_GRADIENT</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#undef RGBLIGHT_EFFECT_RAINBOW_SWIRL</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #define RGBLIGHT_LED_COUNT 12</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #define RGBLIGHT_HUE_STEP 8</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #define RGBLIGHT_SAT_STEP 8</span></span></code></pre></div><p>Indented code as part of a list:</p><ul><li><a href="https://github.com/qmk/qmk_toolbox/releases" target="_blank" rel="noreferrer">QMK Toolbox</a> (recommended GUI)</li><li><a href="https://www.pjrc.com/teensy/loader.html" target="_blank" rel="noreferrer">Teensy Loader</a></li><li><a href="https://www.pjrc.com/teensy/loader_cli.html" target="_blank" rel="noreferrer">Teensy Loader Command Line</a> / <code>:teensy</code> target in QMK (recommended command line)<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>teensy_loader_cli -v -mmcu=&lt;mcu&gt; &lt;filename&gt;</span></span></code></pre></div></li></ul><h3 id="sub-superscript" tabindex="-1">Sub/Superscript <a class="header-anchor" href="#sub-superscript" aria-label="Permalink to &quot;Sub/Superscript&quot;">​</a></h3><p><sub>This is subscripted, apparently.</sub></p><p><sup>This is superscripted, apparently.</sup></p><p>I<sup>2</sup>C</p><p>T<sub>0H</sub>, T<sub>0L</sub></p><h3 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;Tabs&quot;">​</a></h3><p>Tabs are based on section headers, with <code>**</code> enclosing the tab title.</p><h4 id="tab-one" tabindex="-1">** Tab one ** <a class="header-anchor" href="#tab-one" aria-label="Permalink to &quot;** Tab one **&quot;">​</a></h4><p>Content one</p><h5 id="nested-one" tabindex="-1">** Nested one ** <a class="header-anchor" href="#nested-one" aria-label="Permalink to &quot;** Nested one **&quot;">​</a></h5><p>Nested content one</p><h5 id="nested-two" tabindex="-1">** Nested two ** <a class="header-anchor" href="#nested-two" aria-label="Permalink to &quot;** Nested two **&quot;">​</a></h5><p>Nested content two</p><h4 id="tab-two" tabindex="-1">** Tab two ** <a class="header-anchor" href="#tab-two" aria-label="Permalink to &quot;** Tab two **&quot;">​</a></h4><p>Content two</p><h4 id="tab-three" tabindex="-1">** Tab three ** <a class="header-anchor" href="#tab-three" aria-label="Permalink to &quot;** Tab three **&quot;">​</a></h4><p>Content three</p>', 82);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("p", null, "a content 2", -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("p", null, "b content 2", -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, "nested a content 2", -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("p", null, "nested b content 2", -1);
const _hoisted_87 = /* @__PURE__ */ createStaticVNode('<h2 id="details-sections" tabindex="-1">Details sections <a class="header-anchor" href="#details-sections" aria-label="Permalink to &quot;Details sections&quot;">​</a></h2><p>Expandable:</p><details><summary>Some summary text that shows up before expanding</summary><p>!&gt; Embedded notification!</p><p>This is some inner content.</p></details><h2 id="embed" tabindex="-1">Embed <a class="header-anchor" href="#embed" aria-label="Permalink to &quot;Embed&quot;">​</a></h2><p><a href="./__capabilities_inc" title=":include">example embed</a></p><p>Lorem ipsum dolor sit amet.</p>', 6);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PluginTabsTab = resolveComponent("PluginTabsTab");
  const _component_PluginTabs = resolveComponent("PluginTabs");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "tab a" }, {
          default: withCtx(() => [
            _hoisted_83
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "tab b" }, {
          default: withCtx(() => [
            _hoisted_84
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "tab c" }, {
          default: withCtx(() => [
            createVNode(_component_PluginTabs, null, {
              default: withCtx(() => [
                createVNode(_component_PluginTabsTab, { label: "nested tab a" }, {
                  default: withCtx(() => [
                    _hoisted_85
                  ]),
                  _: 1
                }),
                createVNode(_component_PluginTabsTab, { label: "nested tab b" }, {
                  default: withCtx(() => [
                    _hoisted_86
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _hoisted_87
  ]);
}
const __capabilities = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __capabilities as default
};
