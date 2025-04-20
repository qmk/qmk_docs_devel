import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"QMK Breaking Changes - 2025 February 23 Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20250223.md","filePath":"ChangeLog/20250223.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "ChangeLog/20250223.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-breaking-changes-2025-february-23-changelog" tabindex="-1">QMK Breaking Changes - 2025 February 23 Changelog <a class="header-anchor" href="#qmk-breaking-changes-2025-february-23-changelog" aria-label="Permalink to &quot;QMK Breaking Changes - 2025 February 23 Changelog&quot;">​</a></h1><h2 id="notable-features" tabindex="-1">Notable Features <a class="header-anchor" href="#notable-features" aria-label="Permalink to &quot;Notable Features&quot;">​</a></h2><h3 id="community-modules-24848" tabindex="-1">Community Modules (<a href="https://github.com/qmk/qmk_firmware/pull/24848" target="_blank" rel="noreferrer">#24848</a>) <a class="header-anchor" href="#community-modules-24848" aria-label="Permalink to &quot;Community Modules ([#24848](https://github.com/qmk/qmk_firmware/pull/24848))&quot;">​</a></h3><p>Community Modules are a feature within QMK which allows code to be implemented by third parties, making it available for other people to import into their own builds.</p><p>These modules can provide implementations which override or enhance normal QMK processing; initialization, key processing, suspend, and shutdown are some of the provided hooks which modules may currently implement.</p><p>See the <a href="./../features/community_modules">Community Modules documentation</a> for more information, including the full list of available hooks.</p><p>First-class support for <a href="./../newbs_external_userspace">External Userspace</a> is included out of the box, so there&#39;s even more reason to take the plunge and convert your keymap builds to a userspace repository!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>An example with a new keycode and some debugging information in the QMK repository <a href="https://github.com/qmk/qmk_firmware/tree/master/modules/qmk/hello_world" target="_blank" rel="noreferrer">lives here</a>, and a community module port of <a href="https://getreuer.info/posts/keyboards/socd-cleaner/" target="_blank" rel="noreferrer">getreuer&#39;s SOCD Cleaner</a> can be found in <a href="https://github.com/tzarc/qmk_modules" target="_blank" rel="noreferrer">tzarc&#39;s modules repo</a>.</p></div><h3 id="chordal-hold-24560" tabindex="-1">Chordal Hold (<a href="https://github.com/qmk/qmk_firmware/pull/24560" target="_blank" rel="noreferrer">#24560</a>) <a class="header-anchor" href="#chordal-hold-24560" aria-label="Permalink to &quot;Chordal Hold ([#24560](https://github.com/qmk/qmk_firmware/pull/24560))&quot;">​</a></h3><p>Chordal Hold implements, by default, an &quot;opposite hands&quot; rule. Suppose a tap-hold key is pressed and then, before the tapping term, another key is pressed. With Chordal Hold, the tap-hold key is settled as tapped if the two keys are on the same hand.</p><p>Chordal Hold may be useful to avoid accidental modifier activation with mod-taps, particularly in rolled keypresses when using home row mods.</p><p>See the <a href="./../tap_hold#chordal-hold">Chordal Hold documentation</a> for more information.</p><h2 id="changes-requiring-user-action" tabindex="-1">Changes Requiring User Action <a class="header-anchor" href="#changes-requiring-user-action" aria-label="Permalink to &quot;Changes Requiring User Action&quot;">​</a></h2><h3 id="updated-keyboard-codebases" tabindex="-1">Updated Keyboard Codebases <a class="header-anchor" href="#updated-keyboard-codebases" aria-label="Permalink to &quot;Updated Keyboard Codebases&quot;">​</a></h3><table><thead><tr><th>Old Keyboard Name</th><th>New Keyboard Name</th></tr></thead><tbody><tr><td>cxt_studio</td><td>cxt_studio/12e4</td></tr><tr><td>ergodox_stm32</td><td>handwired/ergodox_stm32</td></tr><tr><td>ploopyco/mouse</td><td>ploopyco/mouse/rev1_002</td></tr><tr><td>ploopyco/trackball/rev1</td><td>ploopyco/trackball/rev1_004</td></tr><tr><td>ymdk/id75</td><td>ymdk/id75/f103</td></tr></tbody></table><h2 id="deprecation-notices" tabindex="-1">Deprecation Notices <a class="header-anchor" href="#deprecation-notices" aria-label="Permalink to &quot;Deprecation Notices&quot;">​</a></h2><p>In line with the <a href="./../support_deprecation_policy#how-much-advance-notice-will-be-given">notice period</a>, deprecation notices for larger items are listed here.</p><h3 id="default-folder-removal-24836" tabindex="-1">DEFAULT_FOLDER removal (<a href="https://github.com/qmk/qmk_firmware/pull/24836" target="_blank" rel="noreferrer">#24836</a>) <a class="header-anchor" href="#default-folder-removal-24836" aria-label="Permalink to &quot;DEFAULT_FOLDER removal ([#24836](https://github.com/qmk/qmk_firmware/pull/24836))&quot;">​</a></h3><p><code>DEFAULT_FOLDER</code> was originally introduced to work around limitations within the build system. Parent folders containing common configuration would create invalid build targets.</p><p>With the introduction of <a href="./20240526#keyboard-json"><code>keyboard.json</code></a> as a configuration file, the build system now has a consistent method to detect build targets. The <code>DEFAULT_FOLDER</code> functionality is now redundant and the intent is for <code>rules.mk</code> to become pure configuration.</p><p>Backwards compatibility of build targets has been maintained where possible.</p><h2 id="full-changelist" tabindex="-1">Full changelist <a class="header-anchor" href="#full-changelist" aria-label="Permalink to &quot;Full changelist&quot;">​</a></h2><p>Core:</p><ul><li>Chaining OSL and MO (<a href="https://github.com/qmk/qmk_firmware/pull/23065" target="_blank" rel="noreferrer">#23065</a>)</li><li>Add extra keymap for EurKEY layout (<a href="https://github.com/qmk/qmk_firmware/pull/24241" target="_blank" rel="noreferrer">#24241</a>)</li><li>Add leader_add_user callback (<a href="https://github.com/qmk/qmk_firmware/pull/24266" target="_blank" rel="noreferrer">#24266</a>)</li><li>always return audio pin to 0 on ARM (<a href="https://github.com/qmk/qmk_firmware/pull/24503" target="_blank" rel="noreferrer">#24503</a>)</li><li>Update Starlight matrix effects (<a href="https://github.com/qmk/qmk_firmware/pull/24521" target="_blank" rel="noreferrer">#24521</a>)</li><li>Refactor Hue Breathing matrix effect with runner (<a href="https://github.com/qmk/qmk_firmware/pull/24525" target="_blank" rel="noreferrer">#24525</a>)</li><li>Ensure timer_read() is safe to call from interrupt handlers on ARM (<a href="https://github.com/qmk/qmk_firmware/pull/24529" target="_blank" rel="noreferrer">#24529</a>)</li><li>Update Raindrops effect to respect LED range limits (<a href="https://github.com/qmk/qmk_firmware/pull/24531" target="_blank" rel="noreferrer">#24531</a>)</li><li>Add Chordal Hold, an &quot;opposite hands rule&quot; tap-hold option similar to Achordion, Bilateral Combinations. (<a href="https://github.com/qmk/qmk_firmware/pull/24560" target="_blank" rel="noreferrer">#24560</a>)</li><li>Azoteq - improve I2C behaviour while polling. (<a href="https://github.com/qmk/qmk_firmware/pull/24611" target="_blank" rel="noreferrer">#24611</a>)</li><li>macOS install: remove bad ARM toolchains (<a href="https://github.com/qmk/qmk_firmware/pull/24637" target="_blank" rel="noreferrer">#24637</a>)</li><li>small refactoring of TIMER_DIFF (<a href="https://github.com/qmk/qmk_firmware/pull/24678" target="_blank" rel="noreferrer">#24678</a>)</li><li>Subscript alef correction (<a href="https://github.com/qmk/qmk_firmware/pull/24707" target="_blank" rel="noreferrer">#24707</a>)</li><li>Created SH1107 driver for quantum painter (<a href="https://github.com/qmk/qmk_firmware/pull/24724" target="_blank" rel="noreferrer">#24724</a>)</li><li>[CI] Regenerate Files (<a href="https://github.com/qmk/qmk_firmware/pull/24772" target="_blank" rel="noreferrer">#24772</a>)</li><li>Patch up issue for inverted complementary output on Backlight (<a href="https://github.com/qmk/qmk_firmware/pull/24794" target="_blank" rel="noreferrer">#24794</a>)</li><li>Patch up issue when compile with APA102 driver (<a href="https://github.com/qmk/qmk_firmware/pull/24800" target="_blank" rel="noreferrer">#24800</a>)</li><li>Consolidate send_string implementations. (<a href="https://github.com/qmk/qmk_firmware/pull/24817" target="_blank" rel="noreferrer">#24817</a>)</li><li>Consolidate timer_elapsed implementations (<a href="https://github.com/qmk/qmk_firmware/pull/24830" target="_blank" rel="noreferrer">#24830</a>)</li><li><code>i2c_master</code>: remove deprecated functions (<a href="https://github.com/qmk/qmk_firmware/pull/24832" target="_blank" rel="noreferrer">#24832</a>)</li><li>Resolve keyboard_aliases when processing keyboard make targets (<a href="https://github.com/qmk/qmk_firmware/pull/24834" target="_blank" rel="noreferrer">#24834</a>)</li><li>LED drivers: remove deprecated defines (<a href="https://github.com/qmk/qmk_firmware/pull/24837" target="_blank" rel="noreferrer">#24837</a>)</li><li><code>ferris/0_1</code>: update I2C API usage (<a href="https://github.com/qmk/qmk_firmware/pull/24839" target="_blank" rel="noreferrer">#24839</a>)</li><li>Unify i2c_master headers (<a href="https://github.com/qmk/qmk_firmware/pull/24846" target="_blank" rel="noreferrer">#24846</a>)</li><li>Community modules (<a href="https://github.com/qmk/qmk_firmware/pull/24848" target="_blank" rel="noreferrer">#24848</a>)</li><li>Relocate base WS2812 code (<a href="https://github.com/qmk/qmk_firmware/pull/24850" target="_blank" rel="noreferrer">#24850</a>)</li><li>Unify UART headers (<a href="https://github.com/qmk/qmk_firmware/pull/24855" target="_blank" rel="noreferrer">#24855</a>)</li><li>Unify spi_master headers (<a href="https://github.com/qmk/qmk_firmware/pull/24857" target="_blank" rel="noreferrer">#24857</a>)</li><li>Invoke <code>process_record_via</code> after <code>_user</code>/<code>_kb</code> have a chance to handle it. (<a href="https://github.com/qmk/qmk_firmware/pull/24879" target="_blank" rel="noreferrer">#24879</a>)</li></ul><p>CLI:</p><ul><li>Extend lint to reject &#39;blank&#39; files (<a href="https://github.com/qmk/qmk_firmware/pull/23994" target="_blank" rel="noreferrer">#23994</a>)</li><li><code>qmk docs</code>: restore <code>--port</code> and <code>--browser</code> arguments (<a href="https://github.com/qmk/qmk_firmware/pull/24623" target="_blank" rel="noreferrer">#24623</a>)</li><li>Update via2json layout macro searching (<a href="https://github.com/qmk/qmk_firmware/pull/24640" target="_blank" rel="noreferrer">#24640</a>)</li><li>Change <code>new-keymap</code> keymap name prompt (<a href="https://github.com/qmk/qmk_firmware/pull/24701" target="_blank" rel="noreferrer">#24701</a>)</li><li>default_keyboard.h generation tweaks (<a href="https://github.com/qmk/qmk_firmware/pull/24715" target="_blank" rel="noreferrer">#24715</a>)</li><li>Ensure <code>qmk flash</code> rejects invalid files for uf2 compatible bootloaders (<a href="https://github.com/qmk/qmk_firmware/pull/24802" target="_blank" rel="noreferrer">#24802</a>)</li><li>Reject readme dummy content (<a href="https://github.com/qmk/qmk_firmware/pull/24913" target="_blank" rel="noreferrer">#24913</a>)</li></ul><p>Submodule updates:</p><ul><li>chibios: usb_main: remove OTG sof workaround (<a href="https://github.com/qmk/qmk_firmware/pull/24259" target="_blank" rel="noreferrer">#24259</a>)</li><li>Update ChibiOS to latest stable branch. (<a href="https://github.com/qmk/qmk_firmware/pull/24651" target="_blank" rel="noreferrer">#24651</a>)</li><li>Update ChibiOS <code>stable_21.11.x</code>. (<a href="https://github.com/qmk/qmk_firmware/pull/24714" target="_blank" rel="noreferrer">#24714</a>)</li><li>Update ChibiOS-Contrib. (<a href="https://github.com/qmk/qmk_firmware/pull/24803" target="_blank" rel="noreferrer">#24803</a>)</li></ul><p>Keyboards:</p><ul><li>refactor: move ymdk/id75 to revision (<a href="https://github.com/qmk/qmk_firmware/pull/24590" target="_blank" rel="noreferrer">#24590</a>)</li><li>skyloong/gk61: Remove overriding of core keycode behaviour (<a href="https://github.com/qmk/qmk_firmware/pull/24655" target="_blank" rel="noreferrer">#24655</a>)</li><li>moky/moky88: Remove use of deprecated defines (<a href="https://github.com/qmk/qmk_firmware/pull/24656" target="_blank" rel="noreferrer">#24656</a>)</li><li>Updating Promenade keyboard (Missing keys in matrix, other minor changes to keymap) (<a href="https://github.com/qmk/qmk_firmware/pull/24705" target="_blank" rel="noreferrer">#24705</a>)</li><li>Moving cxt_studio keyboard to own folder (<a href="https://github.com/qmk/qmk_firmware/pull/24748" target="_blank" rel="noreferrer">#24748</a>)</li><li>Add CXT Studio 12E3 keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/24749" target="_blank" rel="noreferrer">#24749</a>)</li><li>Add Silakka54 keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/24757" target="_blank" rel="noreferrer">#24757</a>)</li><li>Add more layout for skiller_sgk50_s4 (<a href="https://github.com/qmk/qmk_firmware/pull/24784" target="_blank" rel="noreferrer">#24784</a>)</li><li>Add watchdog service to RGBKB Sol 3 (<a href="https://github.com/qmk/qmk_firmware/pull/24786" target="_blank" rel="noreferrer">#24786</a>)</li><li>Migrate some DEFAULT_FOLDER to keyboard_aliases.hjson (<a href="https://github.com/qmk/qmk_firmware/pull/24835" target="_blank" rel="noreferrer">#24835</a>)</li><li>Remove DEFAULT_FOLDER where keyboard aliases already exists (<a href="https://github.com/qmk/qmk_firmware/pull/24838" target="_blank" rel="noreferrer">#24838</a>)</li><li>Migrate some DEFAULT_FOLDER to keyboard_aliases.hjson (<a href="https://github.com/qmk/qmk_firmware/pull/24845" target="_blank" rel="noreferrer">#24845</a>)</li><li>Update for &#39;A-JAZZ AKC084&#39; (&#39;A-JAZZ AKP846&#39;) (<a href="https://github.com/qmk/qmk_firmware/pull/24868" target="_blank" rel="noreferrer">#24868</a>)</li><li>handwired/xealous - Remove DEFAULT_FOLDER (<a href="https://github.com/qmk/qmk_firmware/pull/24877" target="_blank" rel="noreferrer">#24877</a>)</li><li>Updates to Ploopy Classic, Mouse, and Thumb for RP2040 hardware upgrade (<a href="https://github.com/qmk/qmk_firmware/pull/24880" target="_blank" rel="noreferrer">#24880</a>)</li><li>Move Ergodox STM32 to handwired folder (<a href="https://github.com/qmk/qmk_firmware/pull/24903" target="_blank" rel="noreferrer">#24903</a>)</li><li>Remove readme dummy content (<a href="https://github.com/qmk/qmk_firmware/pull/24912" target="_blank" rel="noreferrer">#24912</a>)</li><li>Migrate some DEFAULT_FOLDER to keyboard_aliases.hjson (<a href="https://github.com/qmk/qmk_firmware/pull/24915" target="_blank" rel="noreferrer">#24915</a>)</li><li>Migrate some DEFAULT_FOLDER to keyboard_aliases.hjson (<a href="https://github.com/qmk/qmk_firmware/pull/24938" target="_blank" rel="noreferrer">#24938</a>)</li></ul><p>Keyboard fixes:</p><ul><li>Fix up CI with <code>DEFAULT_FOLDER</code>. (<a href="https://github.com/qmk/qmk_firmware/pull/24842" target="_blank" rel="noreferrer">#24842</a>)</li><li>rgbkb/pan - Remove invalid build target (<a href="https://github.com/qmk/qmk_firmware/pull/24844" target="_blank" rel="noreferrer">#24844</a>)</li></ul><p>Others:</p><ul><li>Formally deprecate DEFAULT_FOLDER (<a href="https://github.com/qmk/qmk_firmware/pull/24836" target="_blank" rel="noreferrer">#24836</a>)</li><li>Correct I2C API reference (<a href="https://github.com/qmk/qmk_firmware/pull/24840" target="_blank" rel="noreferrer">#24840</a>)</li></ul><p>Bugs:</p><ul><li>Retro Tapping Re-Write; Key Roll Fix (<a href="https://github.com/qmk/qmk_firmware/pull/23641" target="_blank" rel="noreferrer">#23641</a>)</li><li>Fix Quantum Painter compiliation issues with heavy optimization (<a href="https://github.com/qmk/qmk_firmware/pull/24667" target="_blank" rel="noreferrer">#24667</a>)</li><li>Bugfix and update for AT32F415 (<a href="https://github.com/qmk/qmk_firmware/pull/24807" target="_blank" rel="noreferrer">#24807</a>)</li><li>Fix for Chordal Hold: stuck mods when mod-taps are pressed in a stuttered sequence. (<a href="https://github.com/qmk/qmk_firmware/pull/24878" target="_blank" rel="noreferrer">#24878</a>)</li><li>fix EEPROM driver for STM32L0/1 cat.1 devices (<a href="https://github.com/qmk/qmk_firmware/pull/24928" target="_blank" rel="noreferrer">#24928</a>)</li></ul>', 36);
const _hoisted_37 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_37);
}
const _20250223 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20250223 as default
};
