import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Docker Quick Start","description":"","frontmatter":{},"headers":[],"relativePath":"getting_started_docker.md","filePath":"getting_started_docker.md","lastUpdated":1745100633000}');
const _sfc_main = { name: "getting_started_docker.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="docker-quick-start" tabindex="-1">Docker Quick Start <a class="header-anchor" href="#docker-quick-start" aria-label="Permalink to &quot;Docker Quick Start&quot;">​</a></h1><p>This project includes a Docker workflow that will allow you to build a new firmware for your keyboard very easily without major changes to your primary operating system. This also ensures that when you clone the project and perform a build, you have the exact same environment as anyone else and the QMK build infrastructure. This makes it much easier for people to help you troubleshoot any issues you encounter.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><p>The main prerequisite is a working <code>docker</code> or <code>podman</code> install.</p><ul><li><a href="https://docs.docker.com/install/#supported-platforms" target="_blank" rel="noreferrer">Docker CE</a></li><li><a href="https://podman.io/getting-started/installation" target="_blank" rel="noreferrer">Podman</a></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Acquire a local copy of the QMK&#39;s repository (including submodules):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone --recurse-submodules https://github.com/qmk/qmk_firmware.git</span></span>\n<span class="line"><span>cd qmk_firmware</span></span></code></pre></div><p>Run the following command to build a keymap:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>util/docker_build.sh &lt;keyboard&gt;:&lt;keymap&gt;</span></span>\n<span class="line"><span># For example: util/docker_build.sh planck/rev6:default</span></span></code></pre></div><p>This will compile the desired keyboard/keymap and leave the resulting <code>.hex</code> or <code>.bin</code> file in the QMK directory for you to flash. If <code>:keymap</code> is omitted, all keymaps are used. Note that the parameter format is the same as when building with <code>make</code>.</p><p>There is also support for building <em>and</em> flashing the keyboard straight from Docker by specifying the <code>target</code> as well:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>util/docker_build.sh keyboard:keymap:target</span></span>\n<span class="line"><span># For example: util/docker_build.sh planck/rev6:default:flash</span></span></code></pre></div><p>Note that mass storage bootloaders are not supported by the <code>flash</code> target. In this case you will have to manually copy the firmware file to the keyboard.</p><p>You can also start the script without any parameters, in which case it will ask you to input the build parameters one by one, which you may find easier to use:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>util/docker_build.sh</span></span>\n<span class="line"><span># Reads parameters as input (leave blank for all keyboards/keymaps)</span></span></code></pre></div><p>You can manually set which container runtime you want to use by setting the <code>RUNTIME</code> environment variable to it&#39;s name or path. By default docker or podman are automatically detected and docker is preferred over podman.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>RUNTIME=&quot;podman&quot; util/docker_build.sh keyboard:keymap:target</span></span></code></pre></div><p>If flashing is not required, it&#39;s possible to run the container as unprivileged (on Linux), and without docker-machine (on Windows/macOS):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SKIP_FLASHING_SUPPORT=1 util/docker_build.sh keyboard:keymap:target</span></span></code></pre></div><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="why-can-t-i-flash-on-windows-macos" tabindex="-1">Why can&#39;t I flash on Windows/macOS <a class="header-anchor" href="#why-can-t-i-flash-on-windows-macos" aria-label="Permalink to &quot;Why can&#39;t I flash on Windows/macOS&quot;">​</a></h3><p>On Windows and macOS, it requires <a href="http://gw.tnode.com/docker/docker-machine-with-usb-support-on-windows-macos/" target="_blank" rel="noreferrer">Docker Machine</a> to be running. This is tedious to set up, so it&#39;s not recommended; use <a href="https://github.com/qmk/qmk_toolbox" target="_blank" rel="noreferrer">QMK Toolbox</a> instead.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Docker for Windows requires <a href="https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" target="_blank" rel="noreferrer">Hyper-V</a> to be enabled. This means that it cannot work on versions of Windows which don&#39;t have Hyper-V, such as Windows 7, Windows 8 and <strong>Windows 10 Home</strong>.</p></div>', 24);
const _hoisted_25 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_25);
}
const getting_started_docker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  getting_started_docker as default
};
