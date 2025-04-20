import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Arm/ChibiOS Early Initialization","description":"","frontmatter":{},"headers":[],"relativePath":"platformdev_chibios_earlyinit.md","filePath":"platformdev_chibios_earlyinit.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "platformdev_chibios_earlyinit.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="chibios-early-init" tabindex="-1">Arm/ChibiOS Early Initialization <a class="header-anchor" href="#chibios-early-init" aria-label="Permalink to &quot;Arm/ChibiOS Early Initialization {#chibios-early-init}&quot;">​</a></h1><p>This page describes a part of QMK that is a somewhat advanced concept, and is only relevant to keyboard designers.</p><p>QMK uses ChibiOS as the underlying layer to support a multitude of Arm-based devices. Each ChibiOS-supported keyboard has a low-level board definition which is responsible for initializing hardware peripherals such as the clocks, and GPIOs.</p><p>Older QMK revisions required duplication of these board definitions inside your keyboard&#39;s directory in order to override such early initialization points; this is now abstracted into the following APIs, and allows usage of the board definitions supplied with ChibiOS itself. Check <code>&lt;qmk_firmware&gt;/lib/chibios/os/hal/boards</code> for the list of official definitions. If your keyboard needs extra initialization at a very early stage, consider providing keyboard-level overrides of the following APIs instead of duplicating the board definitions:</p><h2 id="early-hardware-init-pre" tabindex="-1"><code>early_hardware_init_pre()</code> <a class="header-anchor" href="#early-hardware-init-pre" aria-label="Permalink to &quot;`early_hardware_init_pre()` {#early-hardware-init-pre}&quot;">​</a></h2><p>The function <code>early_hardware_init_pre</code> is the earliest possible code that can be executed by a keyboard firmware. This is intended as a replacement for the ChibiOS board definition&#39;s <code>__early_init</code> function, and is the equivalent of executing at the start of the function.</p><p>This is executed before RAM gets cleared, and before clocks or GPIOs are configured; for example, ChibiOS delays are not likely to work at this point. After executing this function, RAM on the MCU may be zero&#39;ed. Assigning values to variables during execution of this function may be overwritten.</p><p>As such, if you wish to override this API consider limiting use to writing to low-level registers. The default implementation of this function can be configured to jump to bootloader if a <code>QK_BOOT</code> key was pressed:</p><table><thead><tr><th><code>config.h</code> override</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>#define EARLY_INIT_PERFORM_BOOTLOADER_JUMP</code></td><td>Whether or not bootloader is to be executed during the early initialisation code of QMK.</td><td><code>FALSE</code></td></tr><tr><td><code>#define STM32_BOOTLOADER_DUAL_BANK</code></td><td>Relevant for dual-bank STM32 MCUs, signifies that a GPIO is to be toggled in order to enter bootloader mode.</td><td><code>FALSE</code></td></tr><tr><td><code>#define STM32_BOOTLOADER_DUAL_BANK_GPIO</code></td><td>Relevant for dual-bank STM32 MCUs, the pin to toggle when attempting to enter bootloader mode, e.g. <code>B8</code></td><td><code>&lt;none&gt;</code></td></tr><tr><td><code>#define STM32_BOOTLOADER_DUAL_BANK_POLARITY</code></td><td>Relevant for dual-bank STM32 MCUs, the value to set the pin to in order to trigger charging of the RC circuit. e.g. <code>0</code> or <code>1</code>.</td><td><code>0</code></td></tr><tr><td><code>#define STM32_BOOTLOADER_DUAL_BANK_DELAY</code></td><td>Relevant for dual-bank STM32 MCUs, an arbitrary measurement of time to delay before resetting the MCU. Increasing number increases the delay.</td><td><code>100</code></td></tr></tbody></table><p>Kinetis MCUs have no configurable options.</p><p>Alternatively, to implement your own version of this function, in your keyboard&#39;s source files:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> early_hardware_init_pre</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // do things with registers</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="early-hardware-init-post" tabindex="-1"><code>early_hardware_init_post()</code> <a class="header-anchor" href="#early-hardware-init-post" aria-label="Permalink to &quot;`early_hardware_init_post()` {#early-hardware-init-post}&quot;">​</a></h2><p>The function <code>early_hardware_init_post</code> is the next earliest possible code that can be executed by a keyboard firmware. This is executed after RAM has been cleared, and clocks and GPIOs are configured. This is intended as a replacement for the ChibiOS board definition&#39;s <code>__early_init</code> function, and is the equivalent of executing at the end of the function.</p><p>Much like <code>early_hardware_init_pre</code>, ChibiOS has not yet been initialized either, so the same restrictions on delays and timing apply.</p><p>If you wish to override this API, consider limiting functionality to register writes, variable initialization, and GPIO toggling. The default implementation of this function is to do nothing.</p><p>To implement your own version of this function, in your keyboard&#39;s source files:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> early_hardware_init_post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // toggle GPIO pins and write to variables</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="board-init" tabindex="-1"><code>board_init()</code> <a class="header-anchor" href="#board-init" aria-label="Permalink to &quot;`board_init()` {#board-init}&quot;">​</a></h2><p>The function <code>board_init</code> is executed directly after the ChibiOS initialization routines have completed. At this stage, all normal low-level functionality should be available for use (including timers and delays), with the restriction that USB is not yet connected. This is intended as a replacement for the ChibiOS board definition&#39;s <code>boardInit</code> function.</p><p>The default implementation of this function is to do nothing.</p><p>To implement your own version of this function, in your keyboard&#39;s source files:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> board_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // initialize anything that requires ChibiOS</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>', 23);
const _hoisted_24 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_24);
}
const platformdev_chibios_earlyinit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  platformdev_chibios_earlyinit as default
};
