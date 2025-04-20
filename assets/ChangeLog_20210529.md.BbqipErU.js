import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"QMK Breaking Changes - 2021 May 29 Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20210529.md","filePath":"ChangeLog/20210529.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "ChangeLog/20210529.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-breaking-changes-2021-may-29-changelog" tabindex="-1">QMK Breaking Changes - 2021 May 29 Changelog <a class="header-anchor" href="#qmk-breaking-changes-2021-may-29-changelog" aria-label="Permalink to &quot;QMK Breaking Changes - 2021 May 29 Changelog&quot;">​</a></h1><h2 id="notable-changes" tabindex="-1">Notable Changes <a class="header-anchor" href="#notable-changes" aria-label="Permalink to &quot;Notable Changes {#notable-changes}&quot;">​</a></h2><h3 id="rgb-matrix-split-common" tabindex="-1">RGB Matrix support for split common (<a href="https://github.com/qmk/qmk_firmware/pull/11055" target="_blank" rel="noreferrer">#11055</a>) <a class="header-anchor" href="#rgb-matrix-split-common" aria-label="Permalink to &quot;RGB Matrix support for split common ([#11055](https://github.com/qmk/qmk_firmware/pull/11055)) {#rgb-matrix-split-common}&quot;">​</a></h3><p>Split boards can now use RGB Matrix without defining a custom matrix.</p><h3 id="teensy-3-6-support" tabindex="-1">Teensy 3.6 support (<a href="https://github.com/qmk/qmk_firmware/pull/12258" target="_blank" rel="noreferrer">#12258</a>) <a class="header-anchor" href="#teensy-3-6-support" aria-label="Permalink to &quot;Teensy 3.6 support ([#12258](https://github.com/qmk/qmk_firmware/pull/12258)) {#teensy-3-6-support}&quot;">​</a></h3><p>Added support for MK66F18 (Teensy 3.6) microcontroller.</p><h3 id="new-command-qmk-console" tabindex="-1">New command: qmk console (<a href="https://github.com/qmk/qmk_firmware/pull/12828" target="_blank" rel="noreferrer">#12828</a>) <a class="header-anchor" href="#new-command-qmk-console" aria-label="Permalink to &quot;New command: qmk console ([#12828](https://github.com/qmk/qmk_firmware/pull/12828)) {#new-command-qmk-console}&quot;">​</a></h3><p>A new <code>qmk console</code> command has been added for attaching to your keyboard&#39;s console. It operates similiarly to QMK Toolbox by allowing you to connect to one or more keyboard consoles to display debugging messages.</p><h3 id="improve-command-qmk-config" tabindex="-1">Improved command: qmk config <a class="header-anchor" href="#improve-command-qmk-config" aria-label="Permalink to &quot;Improved command: qmk config {#improve-command-qmk-config}&quot;">​</a></h3><p>We&#39;ve updated the <code>qmk config</code> command to show only the configuration items you have actually set. You can now display (almost) all of the available configuration options, along with their default values, using <code>qmk config -a</code>.</p><h3 id="led-matrix-improvements" tabindex="-1">LED Matrix Improvements (<a href="https://github.com/qmk/qmk_firmware/pull/12509" target="_blank" rel="noreferrer">#12509</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12580" target="_blank" rel="noreferrer">#12580</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12588" target="_blank" rel="noreferrer">#12588</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12633" target="_blank" rel="noreferrer">#12633</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12651" target="_blank" rel="noreferrer">#12651</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12685" target="_blank" rel="noreferrer">#12685</a>) <a class="header-anchor" href="#led-matrix-improvements" aria-label="Permalink to &quot;LED Matrix Improvements ([#12509](https://github.com/qmk/qmk_firmware/pull/12509), [#12580](https://github.com/qmk/qmk_firmware/pull/12580), [#12588](https://github.com/qmk/qmk_firmware/pull/12588), [#12633](https://github.com/qmk/qmk_firmware/pull/12633), [#12651](https://github.com/qmk/qmk_firmware/pull/12651), [#12685](https://github.com/qmk/qmk_firmware/pull/12685)) {#led-matrix-improvements}&quot;">​</a></h3><p>LED Matrix has been improved with effects, CIE1931 curves, and a task system.</p><h2 id="changes-requiring-user-action" tabindex="-1">Changes Requiring User Action <a class="header-anchor" href="#changes-requiring-user-action" aria-label="Permalink to &quot;Changes Requiring User Action {#changes-requiring-user-action}&quot;">​</a></h2><h3 id="updated-keyboard-codebases" tabindex="-1">Updated Keyboard Codebases <a class="header-anchor" href="#updated-keyboard-codebases" aria-label="Permalink to &quot;Updated Keyboard Codebases {#updated-keyboard-codebases}&quot;">​</a></h3><ul><li>Durgod keyboard refactor in preparation for adding additional durgod keyboards (<a href="https://github.com/qmk/qmk_firmware/pull/11978" target="_blank" rel="noreferrer">#11978</a>)</li><li>Updated Function96 with V2 files and removed chconf.h and halconf.h (<a href="https://github.com/qmk/qmk_firmware/pull/12613" target="_blank" rel="noreferrer">#12613</a>)</li><li>[Keyboard] updated a vendor name / fixed minor keymap issues (<a href="https://github.com/qmk/qmk_firmware/pull/12881" target="_blank" rel="noreferrer">#12881</a>)</li><li>[Keyboard] Corne - Remove legacy revision support (<a href="https://github.com/qmk/qmk_firmware/pull/12226" target="_blank" rel="noreferrer">#12226</a>)</li></ul><p>The following keyboards have had their source moved within QMK:</p><table><thead><tr><th style="text-align:left;">Old Keyboard Name</th><th style="text-align:left;">New Keyboard Name</th></tr></thead><tbody><tr><td style="text-align:left;">crkbd/rev1/common</td><td style="text-align:left;">crkbd/rev1</td></tr><tr><td style="text-align:left;">function96</td><td style="text-align:left;">function96/v1</td></tr><tr><td style="text-align:left;">nckiibs/flatbread60</td><td style="text-align:left;">delikeeb/flatbread60</td></tr><tr><td style="text-align:left;">nckiibs/vaguettelite</td><td style="text-align:left;">delikeeb/vaguettelite</td></tr><tr><td style="text-align:left;">nckiibs/vanana/rev1</td><td style="text-align:left;">delikeeb/vanana/rev1</td></tr><tr><td style="text-align:left;">nckiibs/vanana/rev2</td><td style="text-align:left;">delikeeb/vanana/rev2</td></tr><tr><td style="text-align:left;">nckiibs/vaneela</td><td style="text-align:left;">delikeeb/vaneela</td></tr><tr><td style="text-align:left;">nckiibs/vaneelaex</td><td style="text-align:left;">delikeeb/vaneelaex</td></tr><tr><td style="text-align:left;">nckiibs/waaffle/rev3/elite_c</td><td style="text-align:left;">delikeeb/waaffle/rev3/elite_c</td></tr><tr><td style="text-align:left;">nckiibs/waaffle/rev3/pro_micro</td><td style="text-align:left;">delikeeb/waaffle/rev3/pro_micro</td></tr></tbody></table><p>The <a href="https://github.com/qmk/qmk_firmware/tree/0.13.0/keyboards/function96/v2" target="_blank" rel="noreferrer">Function96 V2</a> has also been added as part of these changes.</p><p>The codebase for the <a href="https://github.com/qmk/qmk_firmware/tree/0.13.0/keyboards/durgod/k320" target="_blank" rel="noreferrer">Durgod K320</a> has been reworked in anticipation of additional Durgod keyboards gaining QMK support.</p><p>Additionally, the <code>crkbd/rev1/legacy</code> keyboard has been removed.</p><h3 id="bootmagic-deprecation-and-refactor" tabindex="-1">Bootmagic Deprecation and Refactor (<a href="https://github.com/qmk/qmk_firmware/pull/12172" target="_blank" rel="noreferrer">#12172</a>) <a class="header-anchor" href="#bootmagic-deprecation-and-refactor" aria-label="Permalink to &quot;Bootmagic Deprecation and Refactor ([#12172](https://github.com/qmk/qmk_firmware/pull/12172)) {#bootmagic-deprecation-and-refactor}&quot;">​</a></h3><p>QMK has decided to deprecate the full Bootmagic feature and leave Bootmagic Lite as the only remaining option.</p><p>This pull request changes the behavior of <code>BOOTMAGIC_ENABLE</code> such that specifying <code>BOOTMAGIC_ENABLE = yes</code> enables Bootmagic Lite instead of full Bootmagic.</p><p>If attempts to use Bootmagic functionality result in unexpected behavior, check your <code>rules.mk</code> file and change the <code>BOOTMAGIC_ENABLE</code> setting to specify either <code>lite</code> or <code>full</code>.</p><h4 id="tentative-deprecation-schedule" tabindex="-1">Tentative Deprecation Schedule <a class="header-anchor" href="#tentative-deprecation-schedule" aria-label="Permalink to &quot;Tentative Deprecation Schedule&quot;">​</a></h4><p>This is the current planned roadmap for the behavior of <code>BOOTMAGIC_ENABLE</code>:</p><ul><li>From 2021 May 29, setting <code>BOOTMAGIC_ENABLE = yes</code> will enable Bootmagic Lite instead of full Bootmagic.</li><li>From 2021 Aug 28, <code>BOOTMAGIC_ENABLE</code> must be either <code>yes</code>, <code>lite</code>, or <code>no</code> – setting <code>BOOTMAGIC_ENABLE = full</code> will cause compilation to fail.</li><li>From 2021 Nov 27, <code>BOOTMAGIC_ENABLE</code> must be either <code>yes</code> or <code>no</code> – setting <code>BOOTMAGIC_ENABLE = lite</code> will cause compilation to fail.</li></ul><h3 id="removal-of-layout-kc" tabindex="-1">Removal of LAYOUT_kc (<a href="https://github.com/qmk/qmk_firmware/pull/12160" target="_blank" rel="noreferrer">#12160</a>) <a class="header-anchor" href="#removal-of-layout-kc" aria-label="Permalink to &quot;Removal of LAYOUT_kc ([#12160](https://github.com/qmk/qmk_firmware/pull/12160)) {#removal-of-layout-kc}&quot;">​</a></h3><p>We&#39;ve removed support for <code>LAYOUT_kc</code> macros, if your keymap uses one you will need to update it use a regular <code>LAYOUT</code> macro.</p><h3 id="encoder-callback-boolean" tabindex="-1">Encoder callbacks are now boolean (<a href="https://github.com/qmk/qmk_firmware/pull/12805" target="_blank" rel="noreferrer">#12805</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12985" target="_blank" rel="noreferrer">#12985</a>) <a class="header-anchor" href="#encoder-callback-boolean" aria-label="Permalink to &quot;Encoder callbacks are now boolean ([#12805](https://github.com/qmk/qmk_firmware/pull/12805), [#12985](https://github.com/qmk/qmk_firmware/pull/12985)) {#encoder-callback-boolean}&quot;">​</a></h3><p>To allow for keyboards to override (or not) keymap level code the <code>encoder_update_kb</code> function has been changed from <code>void</code> to <code>bool</code>. You will need to update your function definition to reflect this and ensure that you return a <code>true</code> or <code>false</code> value.</p><p>Example code before change:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoder_update_kb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> clockwise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    encoder_update_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(index, clockwise);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoder_update_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> clockwise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* First encoder */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (clockwise) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_PGDN);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_PGUP);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* Second encoder */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (clockwise) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_DOWN);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_UP);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Example code after change:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoder_update_kb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> clockwise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoder_update_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(index, clockwise);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoder_update_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> clockwise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* First encoder */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (clockwise) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_PGDN);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_PGUP);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* Second encoder */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (clockwise) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_DOWN);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            tap_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_UP);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // If you return true, this will allow the keyboard level code to run, as well. </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //Returning false will override the keyboard level code. Depending on how the keyboard level function is set up.</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="core-changes" tabindex="-1">Core Changes <a class="header-anchor" href="#core-changes" aria-label="Permalink to &quot;Core Changes {#core-changes}&quot;">​</a></h2><h3 id="core-fixes" tabindex="-1">Fixes <a class="header-anchor" href="#core-fixes" aria-label="Permalink to &quot;Fixes {#core-fixes}&quot;">​</a></h3><ul><li>Fix connection issue in split keyboards when slave and OLED display are connected via I2C (fixes #9335) (<a href="https://github.com/qmk/qmk_firmware/pull/11487" target="_blank" rel="noreferrer">#11487</a>)</li><li>Terrazzo: Fix wrong LED Matrix function names (<a href="https://github.com/qmk/qmk_firmware/pull/12561" target="_blank" rel="noreferrer">#12561</a>)</li><li>Apply the &quot;NO_LIMITED_CONTROLLER_CONNECT&quot; fix to atmega16u2 (<a href="https://github.com/qmk/qmk_firmware/pull/12482" target="_blank" rel="noreferrer">#12482</a>)</li><li>Fix comment parsing (<a href="https://github.com/qmk/qmk_firmware/pull/12750" target="_blank" rel="noreferrer">#12750</a>)</li><li>Turn OLED off on suspend in soundmonster Corne keymap (<a href="https://github.com/qmk/qmk_firmware/pull/10419" target="_blank" rel="noreferrer">#10419</a>)</li><li>Fixup build errors on <code>develop</code> branch. (<a href="https://github.com/qmk/qmk_firmware/pull/12723" target="_blank" rel="noreferrer">#12723</a>)</li><li>Fix syntax error when compiling for ARM (<a href="https://github.com/qmk/qmk_firmware/pull/12866" target="_blank" rel="noreferrer">#12866</a>)</li><li>Add missing LED Matrix suspend code to suspend.c (<a href="https://github.com/qmk/qmk_firmware/pull/12878" target="_blank" rel="noreferrer">#12878</a>)</li><li>Fix spelling mistake regarding LED Matrix in split_common. (<a href="https://github.com/qmk/qmk_firmware/pull/12888" target="_blank" rel="noreferrer">#12888</a>)</li><li>[Keymap] Fix QWERTY/DVORAK status output for kzar keymap (<a href="https://github.com/qmk/qmk_firmware/pull/12895" target="_blank" rel="noreferrer">#12895</a>)</li><li>Fixup housekeeping from being invoked twice per loop. (<a href="https://github.com/qmk/qmk_firmware/pull/12933" target="_blank" rel="noreferrer">#12933</a>)</li><li>wait for matrix row signal to go HIGH for every row (<a href="https://github.com/qmk/qmk_firmware/pull/12945" target="_blank" rel="noreferrer">#12945</a>)</li><li>ensure we do not conflict with existing keymap aliases (<a href="https://github.com/qmk/qmk_firmware/pull/12976" target="_blank" rel="noreferrer">#12976</a>)</li><li>[Keyboard] Fix Terrazzo build failure (<a href="https://github.com/qmk/qmk_firmware/pull/12977" target="_blank" rel="noreferrer">#12977</a>)</li><li>Do not hard set config in CPTC files (<a href="https://github.com/qmk/qmk_firmware/pull/11864" target="_blank" rel="noreferrer">#11864</a>)</li></ul><h3 id="core-additions" tabindex="-1">Additions and Enhancements <a class="header-anchor" href="#core-additions" aria-label="Permalink to &quot;Additions and Enhancements {#core-additions}&quot;">​</a></h3><ul><li>ARM - Refactor SLEEP_LED to support more platforms (<a href="https://github.com/qmk/qmk_firmware/pull/8403" target="_blank" rel="noreferrer">#8403</a>)</li><li>Add ability to toggle One Shot functionality (<a href="https://github.com/qmk/qmk_firmware/pull/4198" target="_blank" rel="noreferrer">#4198</a>)</li><li>Add RGB Matrix support to Split Common (<a href="https://github.com/qmk/qmk_firmware/pull/11055" target="_blank" rel="noreferrer">#11055</a>)</li><li>Add support for complementary outputs to the ChibiOS WS2812 PWM driver (<a href="https://github.com/qmk/qmk_firmware/pull/11988" target="_blank" rel="noreferrer">#11988</a>)</li><li>Enable RGB Matrix for Corne (<a href="https://github.com/qmk/qmk_firmware/pull/12091" target="_blank" rel="noreferrer">#12091</a>)</li><li>Set default OLED Update Interval for Split Keyboards to improve matrix scan performance (<a href="https://github.com/qmk/qmk_firmware/pull/12107" target="_blank" rel="noreferrer">#12107</a>)</li><li>Add support for MK66F18 (Teensy 3.6) micro controller (<a href="https://github.com/qmk/qmk_firmware/pull/12258" target="_blank" rel="noreferrer">#12258</a>)</li><li>Split RGB Matrix support for RGBKB Zygomorph (<a href="https://github.com/qmk/qmk_firmware/pull/11083" target="_blank" rel="noreferrer">#11083</a>)</li><li>Add baudrate and circular buffer to ARM WS2812 SPI config (<a href="https://github.com/qmk/qmk_firmware/pull/12216" target="_blank" rel="noreferrer">#12216</a>)</li><li>Add keyboard level weak function for slave matrix scan (<a href="https://github.com/qmk/qmk_firmware/pull/12317" target="_blank" rel="noreferrer">#12317</a>)</li><li>Add link to schematic on EasyEDA for XD60 (<a href="https://github.com/qmk/qmk_firmware/pull/12018" target="_blank" rel="noreferrer">#12018</a>)</li><li>Add Config functions for LED Matrix (<a href="https://github.com/qmk/qmk_firmware/pull/12361" target="_blank" rel="noreferrer">#12361</a>)</li><li>Add pin definitions for MK66F18 (<a href="https://github.com/qmk/qmk_firmware/pull/12419" target="_blank" rel="noreferrer">#12419</a>)</li><li>add kinesis/kint36 keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/10171" target="_blank" rel="noreferrer">#10171</a>)</li><li>Add support for producing UF2-format binaries. (<a href="https://github.com/qmk/qmk_firmware/pull/12435" target="_blank" rel="noreferrer">#12435</a>)</li><li>Implement CIE1931 curve for LED Matrix (<a href="https://github.com/qmk/qmk_firmware/pull/12417" target="_blank" rel="noreferrer">#12417</a>)</li><li>Change <code>BOOTMAGIC_ENABLE=yes</code> to use Bootmagic Lite (<a href="https://github.com/qmk/qmk_firmware/pull/12172" target="_blank" rel="noreferrer">#12172</a>)</li><li>Add kzar keymap for Kinesis Advantage (<a href="https://github.com/qmk/qmk_firmware/pull/12444" target="_blank" rel="noreferrer">#12444</a>)</li><li>LED Matrix: suspend code (<a href="https://github.com/qmk/qmk_firmware/pull/12509" target="_blank" rel="noreferrer">#12509</a>)</li><li>LED Matrix: Task system (<a href="https://github.com/qmk/qmk_firmware/pull/12580" target="_blank" rel="noreferrer">#12580</a>)</li><li>Add missing RGB_MODE_TWINKLE / RGB_M_TW keycodes (<a href="https://github.com/qmk/qmk_firmware/pull/11935" target="_blank" rel="noreferrer">#11935</a>)</li><li>Enhancement of WPM feature (<a href="https://github.com/qmk/qmk_firmware/pull/11727" target="_blank" rel="noreferrer">#11727</a>)</li><li>Add Per Key functionality for AutoShift (<a href="https://github.com/qmk/qmk_firmware/pull/11536" target="_blank" rel="noreferrer">#11536</a>)</li><li>LED Matrix: Reactive effect buffers &amp; advanced indicators (<a href="https://github.com/qmk/qmk_firmware/pull/12588" target="_blank" rel="noreferrer">#12588</a>)</li><li>LED Matrix: support for Split keyboards (<a href="https://github.com/qmk/qmk_firmware/pull/12633" target="_blank" rel="noreferrer">#12633</a>)</li><li>add setting to enable infinite timeout for leader key (<a href="https://github.com/qmk/qmk_firmware/pull/6580" target="_blank" rel="noreferrer">#6580</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12721" title="Fix bad PR merge for #6580" target="_blank" rel="noreferrer">#12721</a>)</li><li>Update ADC driver for STM32F1xx, STM32F3xx, STM32F4xx (<a href="https://github.com/qmk/qmk_firmware/pull/12403" target="_blank" rel="noreferrer">#12403</a>)</li><li>Add initial support for tinyuf2 bootloader (when hosted on F411 blackpill) (<a href="https://github.com/qmk/qmk_firmware/pull/12600" target="_blank" rel="noreferrer">#12600</a>)</li><li>Add support for STM32F446 MCU (<a href="https://github.com/qmk/qmk_firmware/pull/12619" target="_blank" rel="noreferrer">#12619</a>)</li><li>Add STM32L433 and L443 support (<a href="https://github.com/qmk/qmk_firmware/pull/12063" target="_blank" rel="noreferrer">#12063</a>)</li><li>Added OLED fade out support (<a href="https://github.com/qmk/qmk_firmware/pull/12086" target="_blank" rel="noreferrer">#12086</a>)</li><li>New command: <code>qmk console</code> (<a href="https://github.com/qmk/qmk_firmware/pull/12828" target="_blank" rel="noreferrer">#12828</a>)</li><li>LED Matrix: Effects! (<a href="https://github.com/qmk/qmk_firmware/pull/12651" target="_blank" rel="noreferrer">#12651</a>)</li><li>Add setup, clone, and env to the list of commands we allow even with broken modules (<a href="https://github.com/qmk/qmk_firmware/pull/12868" target="_blank" rel="noreferrer">#12868</a>)</li><li>LED Matrix: Documentation (<a href="https://github.com/qmk/qmk_firmware/pull/12685" target="_blank" rel="noreferrer">#12685</a>)</li><li>Add function to allow repeated blinking of one layer (<a href="https://github.com/qmk/qmk_firmware/pull/12237" target="_blank" rel="noreferrer">#12237</a>)</li><li>Add support for up to 4 IS31FL3733 drivers (<a href="https://github.com/qmk/qmk_firmware/pull/12342" target="_blank" rel="noreferrer">#12342</a>)</li><li>Convert Encoder callbacks to be boolean functions (<a href="https://github.com/qmk/qmk_firmware/pull/12805" target="_blank" rel="noreferrer">#12805</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12985" target="_blank" rel="noreferrer">#12985</a>)</li><li>[Keymap] Update to Drashna keymap and user code (based on develop) (<a href="https://github.com/qmk/qmk_firmware/pull/12936" target="_blank" rel="noreferrer">#12936</a>)</li><li>Add Full-duplex serial driver for ARM boards (<a href="https://github.com/qmk/qmk_firmware/pull/9842" target="_blank" rel="noreferrer">#9842</a>)</li><li>Document LED_MATRIX_FRAMEBUFFER_EFFECTS (<a href="https://github.com/qmk/qmk_firmware/pull/12987" target="_blank" rel="noreferrer">#12987</a>)</li><li>Backlight: add defines for default level and breathing state (<a href="https://github.com/qmk/qmk_firmware/pull/12560" target="_blank" rel="noreferrer">#12560</a>, <a href="https://github.com/qmk/qmk_firmware/pull/13024" target="_blank" rel="noreferrer">#13024</a>)</li><li>Add dire message about LUFA mass storage bootloader (<a href="https://github.com/qmk/qmk_firmware/pull/13014" target="_blank" rel="noreferrer">#13014</a>)</li></ul><h3 id="core-optimizations" tabindex="-1">Clean-ups and Optimizations <a class="header-anchor" href="#core-optimizations" aria-label="Permalink to &quot;Clean-ups and Optimizations {#core-optimizations}&quot;">​</a></h3><ul><li>Overhaul bootmagic logic to have single entrypoint (<a href="https://github.com/qmk/qmk_firmware/pull/8532" target="_blank" rel="noreferrer">#8532</a>)</li><li>Refactor of USB code within split_common (<a href="https://github.com/qmk/qmk_firmware/pull/11890" target="_blank" rel="noreferrer">#11890</a>)</li><li>Begin the process of deprecating <code>bin/qmk</code> in favor of the global CLI (<a href="https://github.com/qmk/qmk_firmware/pull/12109" target="_blank" rel="noreferrer">#12109</a>)</li><li>LED Matrix: decouple from Backlight (<a href="https://github.com/qmk/qmk_firmware/pull/12054" target="_blank" rel="noreferrer">#12054</a>)</li><li>Remove <code>FUNC()</code> (<a href="https://github.com/qmk/qmk_firmware/pull/12161" target="_blank" rel="noreferrer">#12161</a>)</li><li>Move gpio wait logic to wait.h (<a href="https://github.com/qmk/qmk_firmware/pull/12067" target="_blank" rel="noreferrer">#12067</a>)</li><li>LED Matrix: Clean up includes (<a href="https://github.com/qmk/qmk_firmware/pull/12197" target="_blank" rel="noreferrer">#12197</a>)</li><li>Consistently use bin/qmk when that script is called (<a href="https://github.com/qmk/qmk_firmware/pull/12286" target="_blank" rel="noreferrer">#12286</a>)</li><li>LED Matrix: Additional common_features.mk tweaks (<a href="https://github.com/qmk/qmk_firmware/pull/12187" target="_blank" rel="noreferrer">#12187</a>)</li><li>LED Matrix: Fix up eeconfig code (<a href="https://github.com/qmk/qmk_firmware/pull/12327" target="_blank" rel="noreferrer">#12327</a>)</li><li>Big quantum_keycodes cleanup (<a href="https://github.com/qmk/qmk_firmware/pull/12249" target="_blank" rel="noreferrer">#12249</a>)</li><li>Fix up builds that are now too big for <code>develop</code> branch. (<a href="https://github.com/qmk/qmk_firmware/pull/12495" target="_blank" rel="noreferrer">#12495</a>)</li><li>[Keyboard] kint36: switch to sym_eager_pk debouncing (<a href="https://github.com/qmk/qmk_firmware/pull/12626" target="_blank" rel="noreferrer">#12626</a>)</li><li>[Keyboard] kint2pp: reduce input latency by ≈10ms (<a href="https://github.com/qmk/qmk_firmware/pull/12625" target="_blank" rel="noreferrer">#12625</a>)</li><li>eeprom driver: Refactor where eeprom driver initialisation (and EEPROM emulation initialisation) occurs to make it non-target-specific. (<a href="https://github.com/qmk/qmk_firmware/pull/12671" target="_blank" rel="noreferrer">#12671</a>)</li><li>Change RGB/LED Matrix to use a simple define for USB suspend (<a href="https://github.com/qmk/qmk_firmware/pull/12697" target="_blank" rel="noreferrer">#12697</a>, <a href="https://github.com/qmk/qmk_firmware/pull/12770" title="Fixing transport&#39;s led/rgb matrix suspend state logic" target="_blank" rel="noreferrer">#12770</a>)</li><li>Remove pointless SERIAL_LINK_ENABLE rules (<a href="https://github.com/qmk/qmk_firmware/pull/12846" target="_blank" rel="noreferrer">#12846</a>)</li><li>Make Swap Hands use PROGMEM (<a href="https://github.com/qmk/qmk_firmware/pull/12284" target="_blank" rel="noreferrer">#12284</a>)</li><li>Remove KEYMAP and LAYOUT_kc (<a href="https://github.com/qmk/qmk_firmware/pull/12160" target="_blank" rel="noreferrer">#12160</a>)</li><li>Rename <code>point_t</code> -&gt; <code>led_point_t</code> (<a href="https://github.com/qmk/qmk_firmware/pull/12864" target="_blank" rel="noreferrer">#12864</a>)</li><li>Deprecate <code>send_unicode_hex_string()</code> (<a href="https://github.com/qmk/qmk_firmware/pull/12602" target="_blank" rel="noreferrer">#12602</a>)</li><li>[Keyboard] Remove redundant legacy and common headers for crkbd (<a href="https://github.com/qmk/qmk_firmware/pull/13023" target="_blank" rel="noreferrer">#13023</a>)</li></ul><h3 id="qmk-internals" tabindex="-1">QMK Infrastructure and Internals <a class="header-anchor" href="#qmk-internals" aria-label="Permalink to &quot;QMK Infrastructure and Internals {#qmk-internals}&quot;">​</a></h3><ul><li>trivial change to trigger api update (<a href="https://github.com/qmk/qmk_firmware/commit/b15288fb87" target="_blank" rel="noreferrer"><code>b15288fb87</code></a>)</li><li>fix some references to bin/qmk that slipped in (<a href="https://github.com/qmk/qmk_firmware/pull/12832" target="_blank" rel="noreferrer">#12832</a>)</li><li>Resolve a number of warnings in <code>qmk generate-api</code> (<a href="https://github.com/qmk/qmk_firmware/pull/12833" target="_blank" rel="noreferrer">#12833</a>)</li><li>Fix another bin/qmk reference (<a href="https://github.com/qmk/qmk_firmware/pull/12856" target="_blank" rel="noreferrer">#12856</a>)</li><li>Use milc.subcommand.config instead of qmk.cli.config (<a href="https://github.com/qmk/qmk_firmware/pull/12915" target="_blank" rel="noreferrer">#12915</a>)</li></ul>', 44);
const _hoisted_45 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_45);
}
const _20210529 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20210529 as default
};
