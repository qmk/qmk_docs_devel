import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Data Driven Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"data_driven_config.md","filePath":"data_driven_config.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "data_driven_config.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="data-driven-configuration" tabindex="-1">Data Driven Configuration <a class="header-anchor" href="#data-driven-configuration" aria-label="Permalink to &quot;Data Driven Configuration&quot;">​</a></h1><p>This page describes how QMK&#39;s data driven JSON configuration system works. It is aimed at developers who want to work on QMK itself.</p><h2 id="history" tabindex="-1">History <a class="header-anchor" href="#history" aria-label="Permalink to &quot;History&quot;">​</a></h2><p>Historically QMK has been configured through a combination of two mechanisms- <code>rules.mk</code> and <code>config.h</code>. While this worked well when QMK was only a handful of keyboards we&#39;ve grown to encompass nearly 4000 supported keyboards. That extrapolates out to 6000 configuration files under <code>keyboards/</code> alone! The freeform nature of these files and the unique patterns people have used to avoid duplication have made ongoing maintenance a challenge, and a large number of our keyboards follow patterns that are outdated and sometimes harder to understand.</p><p>We have also been working on bringing the power of QMK to people who aren&#39;t comformable with a CLI, and other projects such as VIA are working to make using QMK as easy as installing a program. These tools need information about how a keyboard is laid out or what pins and features are available so that users can take full advantage of QMK. We introduced <code>info.json</code> as a first step towards this. The QMK API is an effort to combine these 3 sources of information- <code>config.h</code>, <code>rules.mk</code>, and <code>info.json</code>- into a single source of truth that end-user tools can use.</p><p>Now we have support for generating <code>rules.mk</code> and <code>config.h</code> values from <code>info.json</code>, allowing us to have a single source of truth. This will allow us to use automated tooling to maintain keyboards saving a lot of time and maintenance work.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>On the C side of things nothing changes. When you need to create a new rule or define you follow the same process:</p><ol><li>Add it to <code>docs/config_options.md</code></li><li>Set a default in the appropriate core file</li><li>Add your ifdef statements as needed</li></ol><p>You will then need to add support for your new configuration to <code>info.json</code>. The basic process is:</p><ol><li>Add it to the schema in <code>data/schemas/keyboards.jsonschema</code></li><li>Add a mapping in <code>data/maps</code></li><li>(optional and discouraged) Add code to extract/generate it to:</li></ol><ul><li><code>lib/python/qmk/info.py</code></li><li><code>lib/python/qmk/cli/generate/config_h.py</code></li><li><code>lib/python/qmk/cli/generate/rules_mk.py</code></li></ul><h2 id="adding-an-option-to-info-json" tabindex="-1">Adding an option to info.json <a class="header-anchor" href="#adding-an-option-to-info-json" aria-label="Permalink to &quot;Adding an option to info.json&quot;">​</a></h2><p>This section describes adding support for a <code>config.h</code>/<code>rules.mk</code> value to info.json.</p><h3 id="add-it-to-the-schema" tabindex="-1">Add it to the schema <a class="header-anchor" href="#add-it-to-the-schema" aria-label="Permalink to &quot;Add it to the schema&quot;">​</a></h3><p>QMK maintains <a href="https://json-schema.org/" target="_blank" rel="noreferrer">jsonschema</a> files in <code>data/schemas</code>. The values that go into keyboard-specific <code>info.json</code> files are kept in <code>keyboard.jsonschema</code>. Any value you want to make available to end users to edit must go in here.</p><p>In some cases you can simply add a new top-level key. Some examples to follow are <code>keyboard_name</code>, <code>maintainer</code>, <code>processor</code>, and <code>url</code>. This is appropriate when your option is self-contained and not directly related to other options.</p><p>In other cases you should group like options together in an <code>object</code>. This is particularly true when adding support for a feature. Some examples to follow for this are <code>indicators</code>, <code>matrix_pins</code>, and <code>rgblight</code>. If you are not sure how to integrate your new option(s) <a href="https://github.com/qmk/qmk_firmware/issues/new?assignees=&amp;labels=cli%2C+python&amp;template=other_issues.md&amp;title=" target="_blank" rel="noreferrer">open an issue</a> or <a href="https://discord.gg/heQPAgy" target="_blank" rel="noreferrer">join #cli on Discord</a> and start a conversation there.</p><h3 id="add-a-mapping" tabindex="-1">Add a mapping <a class="header-anchor" href="#add-a-mapping" aria-label="Permalink to &quot;Add a mapping&quot;">​</a></h3><p>In most cases you can add a simple mapping. These are maintained as JSON files in <code>data/mappings/info_config.hjson</code> and <code>data/mappings/info_rules.hjson</code>, and control mapping for <code>config.h</code> and <code>rules.mk</code>, respectively. Each mapping is keyed by the <code>config.h</code> or <code>rules.mk</code> variable, and the value is a hash with the following keys:</p><ul><li><code>info_key</code>: (required) The location within <code>info.json</code> for this value. See below.</li><li><code>value_type</code>: (optional) Default <code>raw</code>. The format for this variable&#39;s value. See below.</li><li><code>to_json</code>: (optional) Default <code>true</code>. Set to <code>false</code> to exclude this mapping from info.json</li><li><code>to_c</code>: (optional) Default <code>true</code>. Set to <code>false</code> to exclude this mapping from config.h</li><li><code>warn_duplicate</code>: (optional) Default <code>true</code>. Set to <code>false</code> to turn off warning when a value exists in both places</li></ul><h4 id="info-key" tabindex="-1">Info Key <a class="header-anchor" href="#info-key" aria-label="Permalink to &quot;Info Key&quot;">​</a></h4><p>We use JSON dot notation to address variables within info.json. For example, to access <code>info_json[&quot;rgblight&quot;][&quot;split_count&quot;]</code> I would specify <code>rgblight.split_count</code>. This allows you to address deeply nested keys with a simple string.</p><p>Under the hood we use <a href="https://dotty-dict.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">Dotty Dict</a>, you can refer to that documentation for how these strings are converted to object access.</p><h4 id="value-types" tabindex="-1">Value Types <a class="header-anchor" href="#value-types" aria-label="Permalink to &quot;Value Types&quot;">​</a></h4><p>By default we treat all values as unquoted &quot;raw&quot; data. If your value is more complex you can use one of these types to intelligently parse the data:</p><ul><li><code>array</code>: A comma separated array of strings</li><li><code>array.int</code>: A comma separated array of integers</li><li><code>int</code>: An integer</li><li><code>hex</code>: A number formatted as hex</li><li><code>list</code>: A space separate array of strings</li><li><code>mapping</code>: A hash of key/value pairs</li><li><code>str</code>: A quoted string literal</li></ul><h3 id="add-code-to-extract-it" tabindex="-1">Add code to extract it <a class="header-anchor" href="#add-code-to-extract-it" aria-label="Permalink to &quot;Add code to extract it&quot;">​</a></h3><p>Most use cases can be solved by the mapping files described above. If yours can&#39;t you can instead write code to extract your config values.</p><p>Whenever QMK generates a complete <code>info.json</code> it extracts information from <code>config.h</code> and <code>rules.mk</code>. You will need to add code for your new config value to <code>lib/python/qmk/info.py</code>. Typically this means adding a new <code>_extract_&lt;feature&gt;()</code> function and then calling your function in either <code>_extract_config_h()</code> or <code>_extract_rules_mk()</code>.</p><p>If you are not sure how to edit this file or are not comfortable with Python <a href="https://github.com/qmk/qmk_firmware/issues/new?assignees=&amp;labels=cli%2C+python&amp;template=other_issues.md&amp;title=" target="_blank" rel="noreferrer">open an issue</a> or <a href="https://discord.gg/heQPAgy" target="_blank" rel="noreferrer">join #cli on Discord</a> and someone can help you with this part.</p><h3 id="add-code-to-generate-it" tabindex="-1">Add code to generate it <a class="header-anchor" href="#add-code-to-generate-it" aria-label="Permalink to &quot;Add code to generate it {#add-code-to-generate-it}&quot;">​</a></h3><p>The final piece of the puzzle is providing your new option to the build system. This is done by generating two files:</p><ul><li><code>.build/obj_&lt;keyboard&gt;_&lt;keymap&gt;/src/info_config.h</code></li><li><code>.build/obj_&lt;keyboard&gt;_&lt;keymap&gt;/src/rules.mk</code></li></ul><p>These two files are generated by the code here:</p><ul><li><code>lib/python/qmk/cli/generate/config_h.py</code></li><li><code>lib/python/qmk/cli/generate/rules_mk.py</code></li></ul><p>For <code>config.h</code> values you&#39;ll need to write a function for your rule(s) and call that function in <code>generate_config_h()</code>.</p><p>If you have a new top-level <code>info.json</code> key for <code>rules.mk</code> you can simply add your keys to <code>info_to_rules</code> at the top of <code>lib/python/qmk/cli/generate/rules_mk.py</code>. Otherwise you&#39;ll need to create a new if block for your feature in <code>generate_rules_mk()</code>.</p>', 38);
const _hoisted_39 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_39);
}
const data_driven_config = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  data_driven_config as default
};
