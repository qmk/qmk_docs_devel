import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Mouse keys","description":"","frontmatter":{},"headers":[],"relativePath":"features/mouse_keys.md","filePath":"features/mouse_keys.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "features/mouse_keys.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mouse-keys" tabindex="-1">Mouse keys <a class="header-anchor" href="#mouse-keys" aria-label="Permalink to &quot;Mouse keys&quot;">​</a></h1><p>Mouse keys is a feature that allows you to emulate a mouse using your keyboard. You can move the pointer at different speeds, press 5 buttons and scroll in 8 directions.</p><h2 id="adding-mouse-keys-to-your-keyboard" tabindex="-1">Adding mouse keys to your keyboard <a class="header-anchor" href="#adding-mouse-keys-to-your-keyboard" aria-label="Permalink to &quot;Adding mouse keys to your keyboard&quot;">​</a></h2><p>To use mouse keys, you must at least enable mouse keys support and map mouse actions to keys on your keyboard.</p><h3 id="enabling-mouse-keys" tabindex="-1">Enabling mouse keys <a class="header-anchor" href="#enabling-mouse-keys" aria-label="Permalink to &quot;Enabling mouse keys&quot;">​</a></h3><p>To enable mouse keys, add the following line to your keymap’s <code>rules.mk</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MOUSEKEY_ENABLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yes</span></span></code></pre></div><h3 id="mapping-mouse-actions" tabindex="-1">Mapping mouse actions <a class="header-anchor" href="#mapping-mouse-actions" aria-label="Permalink to &quot;Mapping mouse actions&quot;">​</a></h3><p>In your keymap you can use the following keycodes to map key presses to mouse actions:</p><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>QK_MOUSE_CURSOR_UP</code></td><td><code>MS_UP</code></td><td>Mouse cursor up</td></tr><tr><td><code>QK_MOUSE_CURSOR_DOWN</code></td><td><code>MS_DOWN</code></td><td>Mouse cursor down</td></tr><tr><td><code>QK_MOUSE_CURSOR_LEFT</code></td><td><code>MS_LEFT</code></td><td>Mouse cursor left</td></tr><tr><td><code>QK_MOUSE_CURSOR_RIGHT</code></td><td><code>MS_RGHT</code></td><td>Mouse cursor right</td></tr><tr><td><code>QK_MOUSE_BUTTON_1</code></td><td><code>MS_BTN1</code></td><td>Mouse button 1</td></tr><tr><td><code>QK_MOUSE_BUTTON_2</code></td><td><code>MS_BTN2</code></td><td>Mouse button 2</td></tr><tr><td><code>QK_MOUSE_BUTTON_3</code></td><td><code>MS_BTN3</code></td><td>Mouse button 3</td></tr><tr><td><code>QK_MOUSE_BUTTON_4</code></td><td><code>MS_BTN4</code></td><td>Mouse button 4</td></tr><tr><td><code>QK_MOUSE_BUTTON_5</code></td><td><code>MS_BTN5</code></td><td>Mouse button 5</td></tr><tr><td><code>QK_MOUSE_BUTTON_6</code></td><td><code>MS_BTN6</code></td><td>Mouse button 6</td></tr><tr><td><code>QK_MOUSE_BUTTON_7</code></td><td><code>MS_BTN7</code></td><td>Mouse button 7</td></tr><tr><td><code>QK_MOUSE_BUTTON_8</code></td><td><code>MS_BTN8</code></td><td>Mouse button 8</td></tr><tr><td><code>QK_MOUSE_WHEEL_UP</code></td><td><code>MS_WHLU</code></td><td>Mouse wheel up</td></tr><tr><td><code>QK_MOUSE_WHEEL_DOWN</code></td><td><code>MS_WHLD</code></td><td>Mouse wheel down</td></tr><tr><td><code>QK_MOUSE_WHEEL_LEFT</code></td><td><code>MS_WHLL</code></td><td>Mouse wheel left</td></tr><tr><td><code>QK_MOUSE_WHEEL_RIGHT</code></td><td><code>MS_WHLR</code></td><td>Mouse wheel right</td></tr><tr><td><code>QK_MOUSE_ACCELERATION_0</code></td><td><code>MS_ACL0</code></td><td>Set mouse acceleration to 0</td></tr><tr><td><code>QK_MOUSE_ACCELERATION_1</code></td><td><code>MS_ACL1</code></td><td>Set mouse acceleration to 1</td></tr><tr><td><code>QK_MOUSE_ACCELERATION_2</code></td><td><code>MS_ACL2</code></td><td>Set mouse acceleration to 2</td></tr></tbody></table><h2 id="configuring-mouse-keys" tabindex="-1">Configuring mouse keys <a class="header-anchor" href="#configuring-mouse-keys" aria-label="Permalink to &quot;Configuring mouse keys&quot;">​</a></h2><p>Mouse keys supports three different modes to move the cursor:</p><ul><li><strong>Accelerated (default):</strong> Holding movement keys accelerates the cursor until it reaches its maximum speed.</li><li><strong>Kinetic:</strong> Holding movement keys accelerates the cursor with its speed following a quadratic curve until it reaches its maximum speed.</li><li><strong>Constant:</strong> Holding movement keys moves the cursor at constant speeds.</li><li><strong>Combined:</strong> Holding movement keys accelerates the cursor until it reaches its maximum speed, but holding acceleration and movement keys simultaneously moves the cursor at constant speeds.</li><li><strong>Inertia:</strong> Cursor accelerates when key held, and decelerates after key release. Tracks X and Y velocity separately for more nuanced movements. Applies to cursor only, not scrolling.</li></ul><p>The same principle applies to scrolling, in most modes.</p><p>Configuration options that are times, intervals or delays are given in milliseconds. Scroll speed is given as multiples of the default scroll step. For example, a scroll speed of 8 means that each scroll action covers 8 times the length of the default scroll step as defined by your operating system or application.</p><h3 id="accelerated-mode" tabindex="-1">Accelerated mode <a class="header-anchor" href="#accelerated-mode" aria-label="Permalink to &quot;Accelerated mode&quot;">​</a></h3><p>This is the default mode. You can adjust the cursor and scrolling acceleration using the following settings in your keymap’s <code>config.h</code> file:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MOUSEKEY_DELAY</code></td><td>10</td><td>Delay between pressing a movement key and cursor movement</td></tr><tr><td><code>MOUSEKEY_INTERVAL</code></td><td>20</td><td>Time between cursor movements in milliseconds</td></tr><tr><td><code>MOUSEKEY_MOVE_DELTA</code></td><td>8</td><td>Step size</td></tr><tr><td><code>MOUSEKEY_MAX_SPEED</code></td><td>10</td><td>Maximum cursor speed at which acceleration stops</td></tr><tr><td><code>MOUSEKEY_TIME_TO_MAX</code></td><td>30</td><td>Time until maximum cursor speed is reached</td></tr><tr><td><code>MOUSEKEY_WHEEL_DELAY</code></td><td>10</td><td>Delay between pressing a wheel key and wheel movement</td></tr><tr><td><code>MOUSEKEY_WHEEL_INTERVAL</code></td><td>80</td><td>Time between wheel movements</td></tr><tr><td><code>MOUSEKEY_WHEEL_DELTA</code></td><td>1</td><td>Wheel movement step size</td></tr><tr><td><code>MOUSEKEY_WHEEL_MAX_SPEED</code></td><td>8</td><td>Maximum number of scroll steps per scroll action</td></tr><tr><td><code>MOUSEKEY_WHEEL_TIME_TO_MAX</code></td><td>40</td><td>Time until maximum scroll speed is reached</td></tr></tbody></table><p>Tips:</p><ul><li>Setting <code>MOUSEKEY_DELAY</code> too low makes the cursor unresponsive. Setting it too high makes small movements difficult.</li><li>For smoother cursor movements, lower the value of <code>MOUSEKEY_INTERVAL</code>. If the refresh rate of your display is 60Hz, you could set it to <code>16</code> (1/60). As this raises the cursor speed significantly, you may want to lower <code>MOUSEKEY_MAX_SPEED</code>.</li><li>Setting <code>MOUSEKEY_TIME_TO_MAX</code> or <code>MOUSEKEY_WHEEL_TIME_TO_MAX</code> to <code>0</code> will disable acceleration for the cursor or scrolling respectively. This way you can make one of them constant while keeping the other accelerated, which is not possible in constant speed mode.</li><li>Setting <code>MOUSEKEY_WHEEL_INTERVAL</code> too low will make scrolling too fast. Setting it too high will make scrolling too slow when the wheel key is held down.</li></ul><p>Cursor acceleration uses the same algorithm as the X Window System MouseKeysAccel feature. You can read more about it <a href="https://en.wikipedia.org/wiki/Mouse_keys" target="_blank" rel="noreferrer">on Wikipedia</a>.</p><h3 id="kinetic-mode" tabindex="-1">Kinetic Mode <a class="header-anchor" href="#kinetic-mode" aria-label="Permalink to &quot;Kinetic Mode&quot;">​</a></h3><p>This is an extension of the accelerated mode. The kinetic mode uses a quadratic curve on the cursor speed which allows precise movements at the beginning and allows to cover large distances by increasing cursor speed quickly thereafter. You can adjust the cursor and scrolling acceleration using the following settings in your keymap’s <code>config.h</code> file:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MK_KINETIC_SPEED</code></td><td>undefined</td><td>Enable kinetic mode</td></tr><tr><td><code>MOUSEKEY_DELAY</code></td><td>5</td><td>Delay between pressing a movement key and cursor movement</td></tr><tr><td><code>MOUSEKEY_INTERVAL</code></td><td>10</td><td>Time between cursor movements in milliseconds</td></tr><tr><td><code>MOUSEKEY_MOVE_DELTA</code></td><td>16</td><td>Step size for accelerating from initial to base speed</td></tr><tr><td><code>MOUSEKEY_INITIAL_SPEED</code></td><td>100</td><td>Initial speed of the cursor in pixel per second</td></tr><tr><td><code>MOUSEKEY_BASE_SPEED</code></td><td>5000</td><td>Maximum cursor speed at which acceleration stops</td></tr><tr><td><code>MOUSEKEY_DECELERATED_SPEED</code></td><td>400</td><td>Decelerated cursor speed</td></tr><tr><td><code>MOUSEKEY_ACCELERATED_SPEED</code></td><td>3000</td><td>Accelerated cursor speed</td></tr><tr><td><code>MOUSEKEY_WHEEL_INITIAL_MOVEMENTS</code></td><td>16</td><td>Initial number of movements of the mouse wheel</td></tr><tr><td><code>MOUSEKEY_WHEEL_BASE_MOVEMENTS</code></td><td>32</td><td>Maximum number of movements at which acceleration stops</td></tr><tr><td><code>MOUSEKEY_WHEEL_ACCELERATED_MOVEMENTS</code></td><td>48</td><td>Accelerated wheel movements</td></tr><tr><td><code>MOUSEKEY_WHEEL_DECELERATED_MOVEMENTS</code></td><td>8</td><td>Decelerated wheel movements</td></tr></tbody></table><p>Tips:</p><ul><li>The smoothness of the cursor movement depends on the <code>MOUSEKEY_INTERVAL</code> setting. The shorter the interval is set the smoother the movement will be. Setting the value too low makes the cursor unresponsive. Lower settings are possible if the micro processor is fast enough. For example: At an interval of <code>8</code> milliseconds, <code>125</code> movements per second will be initiated. With a base speed of <code>1000</code> each movement will move the cursor by <code>8</code> pixels.</li><li>Mouse wheel movements are implemented differently from cursor movements. While it&#39;s okay for the cursor to move multiple pixels at once for the mouse wheel this would lead to jerky movements. Instead, the mouse wheel operates at step size <code>1</code>. Setting mouse wheel speed is done by adjusting the number of wheel movements per second.</li></ul><h3 id="constant-mode" tabindex="-1">Constant mode <a class="header-anchor" href="#constant-mode" aria-label="Permalink to &quot;Constant mode&quot;">​</a></h3><p>In this mode you can define multiple different speeds for both the cursor and the mouse wheel. There is no acceleration. <code>MS_ACL0</code>, <code>MS_ACL1</code> and <code>MS_ACL2</code> change the cursor and scroll speed to their respective setting.</p><p>You can choose whether speed selection is momentary or tap-to-select:</p><ul><li><strong>Momentary:</strong> The chosen speed is only active while you hold the respective key. When the key is raised, mouse keys returns to the unmodified speed.</li><li><strong>Tap-to-select:</strong> The chosen speed is activated when you press the respective key and remains active even after the key has been raised. The default speed is that of <code>MS_ACL1</code>. There is no unmodified speed.</li></ul><p>The default speeds from slowest to fastest are as follows:</p><ul><li><strong>Momentary:</strong> <code>MS_ACL0</code> &lt; <code>MS_ACL1</code> &lt; <em>unmodified</em> &lt; <code>MS_ACL2</code></li><li><strong>Tap-to-select:</strong> <code>MS_ACL0</code> &lt; <code>MS_ACL1</code> &lt; <code>MS_ACL2</code></li></ul><p>To use constant speed mode, you must at least define <code>MK_3_SPEED</code> in your keymap’s <code>config.h</code> file:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MK_3_SPEED</span></span></code></pre></div><p>To enable momentary mode, also define <code>MK_MOMENTARY_ACCEL</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MK_MOMENTARY_ACCEL</span></span></code></pre></div><p>Use the following settings if you want to adjust cursor movement or scrolling:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MK_3_SPEED</code></td><td><em>Not defined</em></td><td>Enable constant cursor speeds</td></tr><tr><td><code>MK_MOMENTARY_ACCEL</code></td><td><em>Not defined</em></td><td>Enable momentary speed selection</td></tr><tr><td><code>MK_C_OFFSET_UNMOD</code></td><td>16</td><td>Cursor offset per movement (unmodified)</td></tr><tr><td><code>MK_C_INTERVAL_UNMOD</code></td><td>16</td><td>Time between cursor movements (unmodified)</td></tr><tr><td><code>MK_C_OFFSET_0</code></td><td>1</td><td>Cursor offset per movement (<code>MS_ACL0</code>)</td></tr><tr><td><code>MK_C_INTERVAL_0</code></td><td>32</td><td>Time between cursor movements (<code>MS_ACL0</code>)</td></tr><tr><td><code>MK_C_OFFSET_1</code></td><td>4</td><td>Cursor offset per movement (<code>MS_ACL1</code>)</td></tr><tr><td><code>MK_C_INTERVAL_1</code></td><td>16</td><td>Time between cursor movements (<code>MS_ACL1</code>)</td></tr><tr><td><code>MK_C_OFFSET_2</code></td><td>32</td><td>Cursor offset per movement (<code>MS_ACL2</code>)</td></tr><tr><td><code>MK_C_INTERVAL_2</code></td><td>16</td><td>Time between cursor movements (<code>MS_ACL2</code>)</td></tr><tr><td><code>MK_W_OFFSET_UNMOD</code></td><td>1</td><td>Scroll steps per scroll action (unmodified)</td></tr><tr><td><code>MK_W_INTERVAL_UNMOD</code></td><td>40</td><td>Time between scroll steps (unmodified)</td></tr><tr><td><code>MK_W_OFFSET_0</code></td><td>1</td><td>Scroll steps per scroll action (<code>MS_ACL0</code>)</td></tr><tr><td><code>MK_W_INTERVAL_0</code></td><td>360</td><td>Time between scroll steps (<code>MS_ACL0</code>)</td></tr><tr><td><code>MK_W_OFFSET_1</code></td><td>1</td><td>Scroll steps per scroll action (<code>MS_ACL1</code>)</td></tr><tr><td><code>MK_W_INTERVAL_1</code></td><td>120</td><td>Time between scroll steps (<code>MS_ACL1</code>)</td></tr><tr><td><code>MK_W_OFFSET_2</code></td><td>1</td><td>Scroll steps per scroll action (<code>MS_ACL2</code>)</td></tr><tr><td><code>MK_W_INTERVAL_2</code></td><td>20</td><td>Time between scroll steps (<code>MS_ACL2</code>)</td></tr></tbody></table><h3 id="combined-mode" tabindex="-1">Combined mode <a class="header-anchor" href="#combined-mode" aria-label="Permalink to &quot;Combined mode&quot;">​</a></h3><p>This mode functions like <strong>Accelerated</strong> mode, however, you can hold <code>MS_ACL0</code>, <code>MS_ACL1</code> and <code>MS_ACL2</code> to momentarily (while held) set the cursor and scroll speeds to constant speeds. When no acceleration keys are held, this mode is identical to <strong>Accelerated</strong> mode, and can be modified using all of the relevant settings.</p><ul><li><strong>MS_ACL0:</strong> This acceleration sets your cursor to the slowest possible speed. This is useful for very small and detailed movements of the cursor.</li><li><strong>MS_ACL1:</strong> This acceleration sets your cursor to half the maximum (user defined) speed.</li><li><strong>MS_ACL2:</strong> This acceleration sets your cursor to the maximum (computer defined) speed. This is useful for moving the cursor large distances without much accuracy.</li></ul><p>To use combined speed mode, you must at least define <code>MK_COMBINED</code> in your keymap’s <code>config.h</code> file:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MK_COMBINED</span></span></code></pre></div><h3 id="inertia-mode" tabindex="-1">Inertia mode <a class="header-anchor" href="#inertia-mode" aria-label="Permalink to &quot;Inertia mode&quot;">​</a></h3><p>This mode provides smooth motion, like sliding on ice. The cursor accelerates along a quadratic curve while a key is held, then glides to a stop after the key is released. Vertical and horizontal movements are tracked independently, so the cursor can move in many directions and make curves.</p><p>Cannot be used at the same time as Kinetic mode, Constant mode, or Combined mode.</p><p>Recommended settings in your keymap’s <code>config.h</code> file:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MOUSEKEY_INERTIA</code></td><td>undefined</td><td>Enable Inertia mode</td></tr><tr><td><code>MOUSEKEY_DELAY</code></td><td>150</td><td>Delay between pressing a movement key and cursor movement</td></tr><tr><td><code>MOUSEKEY_INTERVAL</code></td><td>16</td><td>Time between cursor movements in milliseconds (16 = 60fps)</td></tr><tr><td><code>MOUSEKEY_MAX_SPEED</code></td><td>32</td><td>Maximum cursor speed at which acceleration stops</td></tr><tr><td><code>MOUSEKEY_TIME_TO_MAX</code></td><td>32</td><td>Number of frames until maximum cursor speed is reached</td></tr><tr><td><code>MOUSEKEY_FRICTION</code></td><td>24</td><td>How quickly the cursor stops after releasing a key</td></tr><tr><td><code>MOUSEKEY_MOVE_DELTA</code></td><td>1</td><td>How much to move on first frame (1 strongly recommended)</td></tr></tbody></table><p>Tips:</p><ul><li>Set <code>MOUSEKEY_DELAY</code> to roughly the same value as your host computer&#39;s key repeat delay, in ms. Recommended values are 100 to 300.</li><li>Set <code>MOUSEKEY_INTERVAL</code> to a value of 1000 / your monitor&#39;s FPS. For 60 FPS, 1000/60 = 16.</li><li>Set <code>MOUSEKEY_MAX_SPEED</code> based on your screen resolution and refresh rate, like Width / FPS. For example, 1920 pixels / 60 FPS = 32 pixels per frame.</li><li>Set <code>MOUSEKEY_TIME_TO_MAX</code> to a value of approximately FPS / 2, to make it reach full speed in half a second (or so).</li><li>Set <code>MOUSEKEY_FRICTION</code> to something between 1 and 255. Lower makes the cursor glide longer. Values from 8 to 40 are the most effective.</li><li>Keep <code>MOUSEKEY_MOVE_DELTA</code> at 1. This allows precise movements before the gliding effect starts.</li><li>Mouse wheel options are the same as the default accelerated mode, and do not use inertia.</li></ul><h3 id="overlapping-mouse-key-control" tabindex="-1">Overlapping mouse key control <a class="header-anchor" href="#overlapping-mouse-key-control" aria-label="Permalink to &quot;Overlapping mouse key control&quot;">​</a></h3><p>When additional overlapping mouse key is pressed, the mouse cursor will continue in a new direction with the same acceleration. The following settings can be used to reset the acceleration with new overlapping keys for more precise control if desired:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MOUSEKEY_OVERLAP_RESET</code></td><td>undefined</td><td>Enables overlapping mouse key control</td></tr><tr><td><code>MOUSEKEY_OVERLAP_MOVE_DELTA</code></td><td><code>MOUSEKEY_MOVE_DELTA</code></td><td>Step size of reset movement acceleration</td></tr><tr><td><code>MOUSEKEY_OVERLAP_WHEEL_DELTA</code></td><td><code>MOUSEKEY_WHEEL_DELTA</code></td><td>Step size of reset mouse wheel acceleration</td></tr><tr><td><code>MOUSEKEY_OVERLAP_INTERVAL</code></td><td><code>MOUSEKEY_INTERVAL</code></td><td>Reset time between cursor movements in milliseconds (Kinetic mode only)</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This feature will not be applied on Inertial mode</p></div><h2 id="use-with-ps-2-mouse-and-pointing-device" tabindex="-1">Use with PS/2 Mouse and Pointing Device <a class="header-anchor" href="#use-with-ps-2-mouse-and-pointing-device" aria-label="Permalink to &quot;Use with PS/2 Mouse and Pointing Device&quot;">​</a></h2><p>Mouse keys button state is shared with <a href="./ps2_mouse">PS/2 mouse</a> and <a href="./pointing_device">pointing device</a> so mouse keys button presses can be used for clicks and drags.</p>', 56);
const _hoisted_57 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_57);
}
const mouse_keys = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  mouse_keys as default
};
