import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Choosing an Arm MCU","description":"","frontmatter":{},"headers":[],"relativePath":"platformdev_selecting_arm_mcu.md","filePath":"platformdev_selecting_arm_mcu.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "platformdev_selecting_arm_mcu.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="choose-arm-mcu" tabindex="-1">Choosing an Arm MCU <a class="header-anchor" href="#choose-arm-mcu" aria-label="Permalink to &quot;Choosing an Arm MCU {#choose-arm-mcu}&quot;">​</a></h1><p>This page outlines the selection criteria to ensure compatibility with Arm/ChibiOS.</p><p>QMK uses the Hardware Abstraction Layer of ChibiOS in order to run on Arm devices. ChibiOS in general is best supported on STM32 devices, both in the perspective of base MCU support, as well as on-MCU peripheral support. As an extension to the core ChibiOS MCU support, QMK also utilises ChibiOS-Contrib (which includes the Kinetis MCU support layer, as an example), but it does not provide as great a level of peripheral support or general testing for supported devices.</p><p>Adding support for new MCU families must go through ChibiOS or ChibiOS-Contrib -- QMK does not have the bandwidth, resources, nor the inclination to maintain long-term MCU support for your board of choice.</p><p>To be clear: this also includes commercial boards -- unless agreed upon by all parties, QMK will not take over maintenance of a bespoke MCU support package. Even if MCU support is upstreamed into ChibiOS/ChibiOS-Contrib, QMK reserves the right to deprecate and/or remove keyboards utilising support packages that aren&#39;t kept up to date with upstream ChibiOS itself.</p><h2 id="selecting-already-supported-mcu" tabindex="-1">Selecting an already-supported MCU <a class="header-anchor" href="#selecting-already-supported-mcu" aria-label="Permalink to &quot;Selecting an already-supported MCU {#selecting-already-supported-mcu}&quot;">​</a></h2><h3 id="stm32-families" tabindex="-1">STM32 families <a class="header-anchor" href="#stm32-families" aria-label="Permalink to &quot;STM32 families&quot;">​</a></h3><p>As outlined earlier, STM32 is the preferred option to ensure greatest compatibility with the subsystems already implemented in QMK. Not all subsystems are compatible yet, but for the most widely-used support is already present.</p><p>The simplest solution to determine if an STM32 MCU is compatible is to navigate to the list of supported STM32 ports in QMK&#39;s <a href="https://github.com/qmk/ChibiOS/tree/master/os/hal/ports/STM32" target="_blank" rel="noreferrer">ChibiOS fork</a>. Inside this directory, each of the supported STM32 families will be listed, and inside each family a file called <code>stm32_registry.h</code> will be present. Scanning through these files will show <code>#define</code>s such as the following, which can be used to determine if ChibiOS supports a particular MCU:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> defined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">STM32F303xC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> defined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__DOXYGEN__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The example shows that STM32F303xC devices are supported by ChibiOS.</p><p>The next step is to ensure that USB is supported on those devices by ChibiOS -- you can confirm this by checking inside the same section guarded by the <code>#define</code> above, specifically for the following to be <code>TRUE</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_HAS_USB</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                       TRUE</span></span></code></pre></div><p>or one of the following being <code>TRUE</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_HAS_OTG1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                      TRUE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> STM32_HAS_OTG2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                      TRUE</span></span></code></pre></div><p>For the most part, this is the bare minimum to be able to have a high confidence that QMK will be able to run on your MCU. After that, it&#39;s all up to configuration.</p><h3 id="non-stm32-families" tabindex="-1">Non-STM32 families <a class="header-anchor" href="#non-stm32-families" aria-label="Permalink to &quot;Non-STM32 families&quot;">​</a></h3><p>ChibiOS does have support for a handful of non-STM32 devices, and the list can be found in QMK&#39;s <a href="https://github.com/qmk/ChibiOS/tree/master/os/hal/ports" target="_blank" rel="noreferrer">ChibiOS fork</a> and <a href="https://github.com/qmk/ChibiOS-Contrib/tree/master/os/hal/ports" target="_blank" rel="noreferrer">ChibiOS-Contrib fork</a>. Non-STM32 support is likely out of date, and only supports ancient MCUs -- whilst it might be possible to use these, it&#39;s not recommended.</p><p>Do note that there are sometimes licensing restrictions with respect to redistribution. As an example, binaries built for nRF5 are not able to be redistributed via QMK Configurator, due to the licensing of their board support package.</p><h2 id="add-new-stm32-mcu" tabindex="-1">Adding support for a new STM32 MCU (for an existing family) <a class="header-anchor" href="#add-new-stm32-mcu" aria-label="Permalink to &quot;Adding support for a new STM32 MCU (for an existing family) {#add-new-stm32-mcu}&quot;">​</a></h2><p>Usually, one can &quot;masquerade&quot; as an existing MCU of the same family, especially if the only difference is RAM or Flash size. As an example, some MCUs within the same family are virtually identical, with the exception of adding a cryptographic peripheral -- STM32L072 vs. STM32L082 for instance. Given the unlikely use of the cryptographic peripheral, L082 chips can actually run as if they&#39;re an L072, and can be targeted accordingly.</p><p>Adding proper support for new MCUs within an existing STM32 family should ideally be upstreamed to ChibiOS. In general, this will require modifications of the <code>stm32_registry.h</code> file, providing correct responses for the same <code>#define</code>s provided for the other MCUs in that family.</p><h2 id="add-new-stm32-family" tabindex="-1">Adding support for a new STM32 Family <a class="header-anchor" href="#add-new-stm32-family" aria-label="Permalink to &quot;Adding support for a new STM32 Family {#add-new-stm32-family}&quot;">​</a></h2><p>If this is a requirement, this needs to go through upstream ChibiOS before QMK would consider accepting boards targeting the new family. More information for porting should be sought by approaching ChibiOS directly, rather than through QMK.</p><h2 id="add-new-mcu-family" tabindex="-1">Adding support for a new MCU Family <a class="header-anchor" href="#add-new-mcu-family" aria-label="Permalink to &quot;Adding support for a new MCU Family {#add-new-mcu-family}&quot;">​</a></h2><p>As stated earlier, in order for a new MCU family to be supported by QMK, it needs to be upstreamed into ChibiOS-Contrib before QMK will consider accepting boards using it. The same principle applies for development -- you&#39;re best approaching the ChibiOS-Contrib maintainers to get a bit more of an idea on what&#39;s involved with upstreaming your contribution.</p>', 26);
const _hoisted_27 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_27);
}
const platformdev_selecting_arm_mcu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  platformdev_selecting_arm_mcu as default
};
