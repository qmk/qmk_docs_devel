import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Glossary of QMK Terms","description":"","frontmatter":{},"headers":[],"relativePath":"reference_glossary.md","filePath":"reference_glossary.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "reference_glossary.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="glossary-of-qmk-terms" tabindex="-1">Glossary of QMK Terms <a class="header-anchor" href="#glossary-of-qmk-terms" aria-label="Permalink to &quot;Glossary of QMK Terms&quot;">​</a></h1><h2 id="arm" tabindex="-1">ARM <a class="header-anchor" href="#arm" aria-label="Permalink to &quot;ARM&quot;">​</a></h2><p>A line of 32-bit MCUs produced by a number of companies, such as Atmel, Cypress, Kinetis, NXP, ST, and TI.</p><h2 id="avr" tabindex="-1">AVR <a class="header-anchor" href="#avr" aria-label="Permalink to &quot;AVR&quot;">​</a></h2><p>A line of 8-bit MCUs produced by <a href="https://www.microchip.com/" target="_blank" rel="noreferrer">Atmel</a>. AVR was the original platform that TMK supported.</p><h2 id="azerty" tabindex="-1">AZERTY <a class="header-anchor" href="#azerty" aria-label="Permalink to &quot;AZERTY&quot;">​</a></h2><p>The standard Français (French) keyboard layout. Named for the first 6 keys on the keyboard.</p><h2 id="backlight" tabindex="-1">Backlight <a class="header-anchor" href="#backlight" aria-label="Permalink to &quot;Backlight&quot;">​</a></h2><p>A generic term for lighting on a keyboard. The backlight is typically, but not always, an array of LEDs that shine through keycaps and/or switches.</p><h2 id="bluetooth" tabindex="-1">Bluetooth <a class="header-anchor" href="#bluetooth" aria-label="Permalink to &quot;Bluetooth&quot;">​</a></h2><p>A short range peer to peer wireless protocol. Most common wireless protocol for a keyboard.</p><h2 id="bootloader" tabindex="-1">Bootloader <a class="header-anchor" href="#bootloader" aria-label="Permalink to &quot;Bootloader&quot;">​</a></h2><p>A special program that is written to a protected area of your MCU that allows the MCU to upgrade its own firmware, typically over USB.</p><h2 id="bootmagic" tabindex="-1">Bootmagic <a class="header-anchor" href="#bootmagic" aria-label="Permalink to &quot;Bootmagic&quot;">​</a></h2><p>A feature that allows for various keyboard behavior changes to happen on the fly, such as swapping or disabling common keys.</p><h2 id="c" tabindex="-1">C <a class="header-anchor" href="#c" aria-label="Permalink to &quot;C&quot;">​</a></h2><p>A low-level programming language suitable for system code. Most QMK code is written in C.</p><h2 id="colemak" tabindex="-1">Colemak <a class="header-anchor" href="#colemak" aria-label="Permalink to &quot;Colemak&quot;">​</a></h2><p>An alternative keyboard layout that is gaining in popularity.</p><h2 id="compile" tabindex="-1">Compile <a class="header-anchor" href="#compile" aria-label="Permalink to &quot;Compile&quot;">​</a></h2><p>The process of turning human readable code into machine code your MCU can run.</p><h2 id="dvorak" tabindex="-1">Dvorak <a class="header-anchor" href="#dvorak" aria-label="Permalink to &quot;Dvorak&quot;">​</a></h2><p>An alternative keyboard layout developed by Dr. August Dvorak in the 1930&#39;s. A shortened form of the Dvorak Simplified Keyboard.</p><h2 id="dynamic-macro" tabindex="-1">Dynamic Macro <a class="header-anchor" href="#dynamic-macro" aria-label="Permalink to &quot;Dynamic Macro&quot;">​</a></h2><p>A macro which has been recorded on the keyboard and which will be lost when the keyboard is unplugged or the computer rebooted.</p><ul><li><a href="./features/dynamic_macros">Dynamic Macro Documentation</a></li></ul><h2 id="eclipse" tabindex="-1">Eclipse <a class="header-anchor" href="#eclipse" aria-label="Permalink to &quot;Eclipse&quot;">​</a></h2><p>An IDE that is popular with many C developers.</p><ul><li><a href="./other_eclipse">Eclipse Setup Instructions</a></li></ul><h2 id="firmware" tabindex="-1">Firmware <a class="header-anchor" href="#firmware" aria-label="Permalink to &quot;Firmware&quot;">​</a></h2><p>The software that controls your MCU.</p><h2 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h2><p>Versioning software used at the command line</p><h2 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-label="Permalink to &quot;GitHub&quot;">​</a></h2><p>The website that hosts most of the QMK project. It provides integration with git, issue tracking, and other features that help us run QMK.</p><h2 id="isp" tabindex="-1">ISP <a class="header-anchor" href="#isp" aria-label="Permalink to &quot;ISP&quot;">​</a></h2><p>In-system programming, a method of programming an AVR chip using external hardware and the JTAG pins.</p><h2 id="hid-listen" tabindex="-1">hid_listen <a class="header-anchor" href="#hid-listen" aria-label="Permalink to &quot;hid_listen&quot;">​</a></h2><p>An interface for receiving debugging messages from your keyboard. You can view these messages using <a href="https://github.com/qmk/qmk_flasher" target="_blank" rel="noreferrer">QMK Flasher</a> or <a href="https://www.pjrc.com/teensy/hid_listen.html" target="_blank" rel="noreferrer">PJRC&#39;s hid_listen</a></p><h2 id="keycode" tabindex="-1">Keycode <a class="header-anchor" href="#keycode" aria-label="Permalink to &quot;Keycode&quot;">​</a></h2><p>A 2-byte number that represents a particular key. <code>0x00</code>-<code>0xFF</code> are used for <a href="./keycodes_basic">Basic Keycodes</a> while <code>0x100</code>-<code>0xFFFF</code> are used for <a href="./quantum_keycodes">Quantum Keycodes</a>.</p><h2 id="key-down" tabindex="-1">Key Down <a class="header-anchor" href="#key-down" aria-label="Permalink to &quot;Key Down&quot;">​</a></h2><p>An event that happens when a key is pressed down, but is completed before a key is released.</p><h2 id="key-up" tabindex="-1">Key Up <a class="header-anchor" href="#key-up" aria-label="Permalink to &quot;Key Up&quot;">​</a></h2><p>An event that happens when a key is released.</p><h2 id="keymap" tabindex="-1">Keymap <a class="header-anchor" href="#keymap" aria-label="Permalink to &quot;Keymap&quot;">​</a></h2><p>An array of keycodes mapped to a physical keyboard layout, which are processed on key presses and releases</p><h2 id="layer" tabindex="-1">Layer <a class="header-anchor" href="#layer" aria-label="Permalink to &quot;Layer&quot;">​</a></h2><p>An abstraction used to allow a key to serve multiple purposes. The highest active layer takes precedence.</p><h2 id="leader-key" tabindex="-1">Leader Key <a class="header-anchor" href="#leader-key" aria-label="Permalink to &quot;Leader Key&quot;">​</a></h2><p>A feature that allows you to tap the leader key followed by a sequence of 1, 2, or 3 keys to activate key presses or other quantum features.</p><ul><li><a href="./features/leader_key">Leader Key Documentation</a></li></ul><h2 id="led" tabindex="-1">LED <a class="header-anchor" href="#led" aria-label="Permalink to &quot;LED&quot;">​</a></h2><p>Light Emitting Diode, the most common device used for indicators on a keyboard.</p><h2 id="make" tabindex="-1">Make <a class="header-anchor" href="#make" aria-label="Permalink to &quot;Make&quot;">​</a></h2><p>Software package that is used to compile all the source files. You run <code>make</code> with various options to compile your keyboard firmware.</p><h2 id="matrix" tabindex="-1">Matrix <a class="header-anchor" href="#matrix" aria-label="Permalink to &quot;Matrix&quot;">​</a></h2><p>A wiring pattern of columns and rows that enables the MCU to detect keypresses with a fewer number of pins. The matrix often incorporates diodes to allow for NKRO.</p><h2 id="macro" tabindex="-1">Macro <a class="header-anchor" href="#macro" aria-label="Permalink to &quot;Macro&quot;">​</a></h2><p>A feature that lets you send multiple keypress events (hid reports) after having pressed only a single key.</p><ul><li><a href="./feature_macros">Macro Documentation</a></li></ul><h2 id="mcu" tabindex="-1">MCU <a class="header-anchor" href="#mcu" aria-label="Permalink to &quot;MCU&quot;">​</a></h2><p>Microcontrol Unit, the processor that powers your keyboard.</p><h2 id="modifier" tabindex="-1">Modifier <a class="header-anchor" href="#modifier" aria-label="Permalink to &quot;Modifier&quot;">​</a></h2><p>A key that is held down while typing another key to modify the action of that key. Examples include Ctrl, Alt, and Shift.</p><h2 id="mousekeys" tabindex="-1">Mousekeys <a class="header-anchor" href="#mousekeys" aria-label="Permalink to &quot;Mousekeys&quot;">​</a></h2><p>A feature that lets you control your mouse cursor and click from your keyboard.</p><ul><li><a href="./features/mouse_keys">Mousekeys Documentation</a></li></ul><h2 id="n-key-rollover-nkro" tabindex="-1">N-Key Rollover (NKRO) <a class="header-anchor" href="#n-key-rollover-nkro" aria-label="Permalink to &quot;N-Key Rollover (NKRO)&quot;">​</a></h2><p>A term that applies to keyboards that are capable of reporting any number of key-presses at once.</p><h2 id="oneshot-modifier" tabindex="-1">Oneshot Modifier <a class="header-anchor" href="#oneshot-modifier" aria-label="Permalink to &quot;Oneshot Modifier&quot;">​</a></h2><p>A modifier that acts as if it is held down until another key is released, so you can press the mod and then press the key, rather than holding the mod while pressing the key. Also known as a Sticky key or a Dead key.</p><h2 id="promicro" tabindex="-1">ProMicro <a class="header-anchor" href="#promicro" aria-label="Permalink to &quot;ProMicro&quot;">​</a></h2><p>A low cost AVR development board. Clones of this device are often found on ebay very inexpensively (under $5) but people often struggle with flashing their pro micros.</p><h2 id="pull-request" tabindex="-1">Pull Request <a class="header-anchor" href="#pull-request" aria-label="Permalink to &quot;Pull Request&quot;">​</a></h2><p>A request to submit code to QMK. We encourage all users to submit Pull Requests for bugfixes and new features.</p><h2 id="qwerty" tabindex="-1">QWERTY <a class="header-anchor" href="#qwerty" aria-label="Permalink to &quot;QWERTY&quot;">​</a></h2><p>The standard English keyboard layout, and often a shortcut for other language&#39;s standard layouts. Named for the first 6 letters on the keyboard.</p><h2 id="qwertz" tabindex="-1">QWERTZ <a class="header-anchor" href="#qwertz" aria-label="Permalink to &quot;QWERTZ&quot;">​</a></h2><p>The standard Deutsche (German) keyboard layout. Named for the first 6 letters on the keyboard.</p><h2 id="rollover" tabindex="-1">Rollover <a class="header-anchor" href="#rollover" aria-label="Permalink to &quot;Rollover&quot;">​</a></h2><p>The term for pressing a key while a key is already held down. Variants include 2KRO, 6KRO, and NKRO.</p><h2 id="scancode" tabindex="-1">Scancode <a class="header-anchor" href="#scancode" aria-label="Permalink to &quot;Scancode&quot;">​</a></h2><p>A 1 byte number that is sent as part of a HID report over USB that represents a single key. These numbers are documented in the <a href="https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf" target="_blank" rel="noreferrer">HID Usage Tables</a> published by the <a href="https://www.usb.org/" target="_blank" rel="noreferrer">USB-IF</a>.</p><h2 id="space-cadet-shift" tabindex="-1">Space Cadet Shift <a class="header-anchor" href="#space-cadet-shift" aria-label="Permalink to &quot;Space Cadet Shift&quot;">​</a></h2><p>A special set of shift keys which allow you to type various types of braces by tapping the left or right shift one or more times.</p><ul><li><a href="./features/space_cadet">Space Cadet Shift Documentation</a></li></ul><h2 id="tap" tabindex="-1">Tap <a class="header-anchor" href="#tap" aria-label="Permalink to &quot;Tap&quot;">​</a></h2><p>Pressing and releasing a key. In some situations you will need to distinguish between a key down and a key up event, and Tap always refers to both at once.</p><h2 id="tap-dance" tabindex="-1">Tap Dance <a class="header-anchor" href="#tap-dance" aria-label="Permalink to &quot;Tap Dance&quot;">​</a></h2><p>A feature that lets you assign multiple keycodes to the same key based on how many times you press it.</p><ul><li><a href="./features/tap_dance">Tap Dance Documentation</a></li></ul><h2 id="teensy" tabindex="-1">Teensy <a class="header-anchor" href="#teensy" aria-label="Permalink to &quot;Teensy&quot;">​</a></h2><p>A low-cost AVR development board that is commonly used for hand-wired builds. A teensy is often chosen despite costing a few dollars more due to its halfkay bootloader, which makes flashing very simple.</p><h2 id="underlight" tabindex="-1">Underlight <a class="header-anchor" href="#underlight" aria-label="Permalink to &quot;Underlight&quot;">​</a></h2><p>A generic term for LEDs that light the underside of the board. These LEDs typically shine away from the bottom of the PCB and towards the surface the keyboard rests on.</p><h2 id="unicode" tabindex="-1">Unicode <a class="header-anchor" href="#unicode" aria-label="Permalink to &quot;Unicode&quot;">​</a></h2><p>In the larger computer world Unicode is a set of encoding schemes for representing characters in any language. As it relates to QMK it means using various OS schemes to send unicode codepoints instead of scancodes.</p><ul><li><a href="./features/unicode">Unicode Documentation</a></li></ul><h2 id="unit-testing" tabindex="-1">Unit Testing <a class="header-anchor" href="#unit-testing" aria-label="Permalink to &quot;Unit Testing&quot;">​</a></h2><p>A framework for running automated tests against QMK. Unit testing helps us be confident that our changes do not break anything.</p><ul><li><a href="./unit_testing">Unit Testing Documentation</a></li></ul><h2 id="usb" tabindex="-1">USB <a class="header-anchor" href="#usb" aria-label="Permalink to &quot;USB&quot;">​</a></h2><p>Universal Serial Bus, the most common wired interface for a keyboard.</p><h2 id="usb-host-or-simply-host" tabindex="-1">USB Host (or simply Host) <a class="header-anchor" href="#usb-host-or-simply-host" aria-label="Permalink to &quot;USB Host (or simply Host)&quot;">​</a></h2><p>The USB Host is your computer, or whatever device your keyboard is plugged into.</p><h1 id="couldn-t-find-the-term-you-re-looking-for" tabindex="-1">Couldn&#39;t Find the Term You&#39;re Looking For? <a class="header-anchor" href="#couldn-t-find-the-term-you-re-looking-for" aria-label="Permalink to &quot;Couldn&#39;t Find the Term You&#39;re Looking For?&quot;">​</a></h1><p><a href="https://github.com/qmk/qmk_firmware/issues" target="_blank" rel="noreferrer">Open an issue</a> with your question and the term in question could be added here. Better still, open a pull request with the definition. 😃</p>', 108);
const _hoisted_109 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_109);
}
const reference_glossary = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  reference_glossary as default
};
