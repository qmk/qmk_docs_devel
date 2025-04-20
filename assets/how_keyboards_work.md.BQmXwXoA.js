import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"How Keys Are Registered, and Interpreted by Computers","description":"","frontmatter":{},"headers":[],"relativePath":"how_keyboards_work.md","filePath":"how_keyboards_work.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "how_keyboards_work.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="how-keys-are-registered-and-interpreted-by-computers" tabindex="-1">How Keys Are Registered, and Interpreted by Computers <a class="header-anchor" href="#how-keys-are-registered-and-interpreted-by-computers" aria-label="Permalink to &quot;How Keys Are Registered, and Interpreted by Computers&quot;">​</a></h1><p>In this file, you can will learn the concepts of how keyboards work over USB, and you&#39;ll be able to better understand what you can expect from changing your firmware directly.</p><h2 id="schematic-view" tabindex="-1">Schematic View <a class="header-anchor" href="#schematic-view" aria-label="Permalink to &quot;Schematic View&quot;">​</a></h2><p>Whenever you type on 1 particular key, here is the chain of actions taking place:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+------+         +-----+       +----------+      +----------+     +----+</span></span>\n<span class="line"><span>| User |--------&gt;| Key |------&gt;| Firmware |-----&gt;| USB wire |----&gt;| OS |</span></span>\n<span class="line"><span>+------+         +-----+       +----------+      +----------+     +----+</span></span></code></pre></div><p>This scheme is a very simple view of what&#39;s going on, and more details follow in the next sections.</p><h2 id="_1-you-press-a-key" tabindex="-1">1. You Press a Key <a class="header-anchor" href="#_1-you-press-a-key" aria-label="Permalink to &quot;1. You Press a Key&quot;">​</a></h2><p>Whenever you press a key, the firmware of your keyboard can register this event. It can register when the key is pressed, held and released.</p><p>This usually happens with a periodic scan of key presses. This speed often is limited by the mechanical key response time, the protocol to transfer those key presses (here USB HID), and by the software it is used in.</p><h2 id="_2-what-the-firmware-sends" tabindex="-1">2. What the Firmware Sends <a class="header-anchor" href="#_2-what-the-firmware-sends" aria-label="Permalink to &quot;2. What the Firmware Sends&quot;">​</a></h2><p>The <a href="https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf" target="_blank" rel="noreferrer">HID specification</a> tells what a keyboard can actually send through USB to have a chance to be properly recognised. This includes a pre-defined list of scancodes which are simple numbers from <code>0x00</code> to <code>0xE7</code>. The firmware assigns a scancode to each key of the keyboard.</p><p>The firmware does not send actual letters or characters, but only scancodes. Thus, by modifying the firmware, you can only modify what scancode is sent over USB for a given key.</p><h2 id="_3-what-the-event-input-kernel-does" tabindex="-1">3. What the Event Input/Kernel Does <a class="header-anchor" href="#_3-what-the-event-input-kernel-does" aria-label="Permalink to &quot;3. What the Event Input/Kernel Does&quot;">​</a></h2><p>The <em>scancode</em> is mapped to a <em>keycode</em> dependent on the keyboard <a href="https://github.com/systemd/systemd/blob/main/hwdb.d/60-keyboard.hwdb" target="_blank" rel="noreferrer">60-keyboard.hwdb at Main</a>. Without this mapping, the operating system will not receive a valid keycode and will be unable to do anything useful with that key press.</p><h2 id="_4-what-the-operating-system-does" tabindex="-1">4. What the Operating System Does <a class="header-anchor" href="#_4-what-the-operating-system-does" aria-label="Permalink to &quot;4. What the Operating System Does&quot;">​</a></h2><p>Once the keycode reaches the operating system, a piece of software has to have it match an actual character thanks to a keyboard layout. For example, if your layout is set to QWERTY, a sample of the matching table is as follows:</p><table><thead><tr><th>keycode</th><th>character</th></tr></thead><tbody><tr><td>0x04</td><td>a/A</td></tr><tr><td>0x05</td><td>b/B</td></tr><tr><td>0x06</td><td>c/C</td></tr><tr><td>...</td><td>...</td></tr><tr><td>0x1C</td><td>y/Y</td></tr><tr><td>0x1D</td><td>z/Z</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><h2 id="back-to-the-firmware" tabindex="-1">Back to the Firmware <a class="header-anchor" href="#back-to-the-firmware" aria-label="Permalink to &quot;Back to the Firmware&quot;">​</a></h2><p>As the layout is generally fixed (unless you create your own), the firmware can actually call a keycode by its layout name directly to ease things for you. This is exactly what is done here with <code>KC_A</code> actually representing <code>0x04</code> in QWERTY. The full list can be found in <a href="./keycodes">keycodes</a>.</p><h2 id="list-of-characters-you-can-send" tabindex="-1">List of Characters You Can Send <a class="header-anchor" href="#list-of-characters-you-can-send" aria-label="Permalink to &quot;List of Characters You Can Send&quot;">​</a></h2><p>Putting aside shortcuts, having a limited set of keycodes mapped to a limited layout means that <strong>the list of characters you can assign to a given key are only the ones present in the layout</strong>.</p><p>For example, this means that if you have a QWERTY US layout, and you want to assign one key to produce <code>€</code> (euro currency symbol), you are unable to do so, because the QWERTY US layout does not have such mapping. You could fix that by using a QWERTY UK layout, or a QWERTY US International.</p><p>You may wonder why a keyboard layout containing all of Unicode is not devised then? The limited number of keycodes available through USB simply disallows such a thing.</p><h2 id="how-to-maybe-enter-unicode-characters" tabindex="-1">How to (Maybe) Enter Unicode Characters <a class="header-anchor" href="#how-to-maybe-enter-unicode-characters" aria-label="Permalink to &quot;How to (Maybe) Enter Unicode Characters&quot;">​</a></h2><p>You can have the firmware send <em>sequences of keys</em> to use the <a href="https://en.wikipedia.org/wiki/Unicode_input#Hexadecimal_input" target="_blank" rel="noreferrer">software Unicode Input Method</a> of the target operating system, thus effectively entering characters independently of the layout defined in the OS.</p><p>Yet, it does come with multiple disadvantages:</p><ul><li>Tied to a specific OS at a time (need recompilation when changing OS);</li><li>Within a given OS, does not work in all software;</li><li>Limited to a subset of Unicode on some systems.</li></ul>', 27);
const _hoisted_28 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_28);
}
const how_keyboards_work = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  how_keyboards_work as default
};
