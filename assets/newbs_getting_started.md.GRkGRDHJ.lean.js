import { _ as _export_sfc, c as createElementBlock, I as createVNode, w as withCtx, a8 as createStaticVNode, l as createBaseVNode, a as createTextVNode, D as resolveComponent, o as openBlock } from "./chunks/framework.Cauyuiy8.js";
const __pageData = JSON.parse('{"title":"Setting Up Your QMK Environment","description":"","frontmatter":{},"headers":[],"relativePath":"newbs_getting_started.md","filePath":"newbs_getting_started.md","lastUpdated":1751656200000}');
const _sfc_main = { name: "newbs_getting_started.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 8);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("QMK maintains a Bundle of MSYS2, the CLI and all necessary dependencies. It also provides a handy "),
  /* @__PURE__ */ createBaseVNode("code", null, "QMK MSYS"),
  /* @__PURE__ */ createTextVNode(" terminal shortcut to boot you directly into the correct environment.")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "prerequisites",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Prerequisites "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#prerequisites",
    "aria-label": 'Permalink to "Prerequisites"'
  }, "​")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("You will need to install "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://msys.qmk.fm/",
    target: "_blank",
    rel: "noreferrer"
  }, "QMK MSYS"),
  /* @__PURE__ */ createTextVNode(". The latest release is available "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/qmk/qmk_distro_msys/releases/latest",
    target: "_blank",
    rel: "noreferrer"
  }, "here"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("details", { class: "details custom-block" }, [
  /* @__PURE__ */ createBaseVNode("summary", null, "Advanced Users"),
  /* @__PURE__ */ createBaseVNode("div", { class: "danger custom-block" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "DANGER"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("b", { style: { "font-size": "150%" } }, "This process is not recommended for new users.")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, "If you'd like to manually install MSYS2, the following sections will walk you through the process."),
  /* @__PURE__ */ createBaseVNode("h4", {
    id: "prerequisites-1",
    tabindex: "-1"
  }, [
    /* @__PURE__ */ createTextVNode("Prerequisites "),
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#prerequisites-1",
      "aria-label": 'Permalink to "Prerequisites"'
    }, "​")
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("You will need to install "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://www.msys2.org",
      target: "_blank",
      rel: "noreferrer"
    }, "MSYS2"),
    /* @__PURE__ */ createTextVNode(". Once installed, close any open MSYS terminals (purple icon) and open a new MinGW 64-bit terminal (blue icon) from the Start Menu.")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "warning custom-block" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "WARNING"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "NOTE:"),
      /* @__PURE__ */ createTextVNode(" The MinGW 64-bit terminal is "),
      /* @__PURE__ */ createBaseVNode("em", null, "not"),
      /* @__PURE__ */ createTextVNode(' the same as the MSYS terminal that opens when installation is completed. Your prompt should say "MINGW64" in purple text, rather than "MSYS". See '),
      /* @__PURE__ */ createBaseVNode("a", {
        href: "https://www.msys2.org/wiki/MSYS2-introduction/#subsystems",
        target: "_blank",
        rel: "noreferrer"
      }, "this page"),
      /* @__PURE__ */ createTextVNode(" for more information on the differences.")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("h4", {
    id: "installation",
    tabindex: "-1"
  }, [
    /* @__PURE__ */ createTextVNode("Installation "),
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#installation",
      "aria-label": 'Permalink to "Installation"'
    }, "​")
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, "Install the QMK CLI by running:"),
  /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
    /* @__PURE__ */ createBaseVNode("button", {
      title: "Copy Code",
      class: "copy"
    }),
    /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
    /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "pacman"),
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " --needed"),
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " --noconfirm"),
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " --disable-download-timeout"),
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " -S"),
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " git"),
          /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " mingw-w64-x86_64-python-qmk")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "QMK maintains a Homebrew tap and formula which will automatically install the CLI and all necessary dependencies.", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "prerequisites-2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Prerequisites "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#prerequisites-2",
    "aria-label": 'Permalink to "Prerequisites"'
  }, "​")
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("You will need to install Homebrew. Follow the instructions on "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://brew.sh",
    target: "_blank",
    rel: "noreferrer"
  }, "https://brew.sh"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "tip custom-block" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "TIP"),
  /* @__PURE__ */ createBaseVNode("p", null, "If you are using an Apple Silicon machine, the installation process will take significantly longer because GitHub actions do not have native runners to build binary packages for the ARM and AVR toolchains.")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "installation-1",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Installation "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#installation-1",
    "aria-label": 'Permalink to "Installation"'
  }, "​")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", null, "Install the QMK CLI by running:", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "brew"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " install"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " qmk/qmk/qmk")
      ])
    ])
  ])
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "tip custom-block" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "TIP"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note for WSL users"),
    /* @__PURE__ */ createTextVNode(": By default, the installation process will clone the QMK repository into your WSL home directory, but if you have cloned manually, ensure that it is located inside the WSL instance instead of the Windows filesystem (ie. not in "),
    /* @__PURE__ */ createBaseVNode("code", null, "/mnt"),
    /* @__PURE__ */ createTextVNode("), as accessing it is currently "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://github.com/microsoft/WSL/issues/4197",
      target: "_blank",
      rel: "noreferrer"
    }, "extremely slow"),
    /* @__PURE__ */ createTextVNode(".")
  ])
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "prerequisites-3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Prerequisites "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#prerequisites-3",
    "aria-label": 'Permalink to "Prerequisites"'
  }, "​")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, "You will need to install Git and Python. It's very likely that you already have both, but if not, one of the following commands should install them:", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Debian / Ubuntu / Devuan: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo apt install -y git python3-pip")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Fedora / Red Hat / CentOS: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo yum -y install git python3-pip")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Arch / Manjaro: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo pacman --needed --noconfirm -S git python-pip libffi")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Void: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo xbps-install -y git python3-pip")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Solus: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo eopkg -y install git python3")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Sabayon: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo equo install dev-vcs/git dev-python/pip")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Gentoo: "),
    /* @__PURE__ */ createBaseVNode("code", null, "sudo emerge dev-vcs/git dev-python/pip")
  ])
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "installation-2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Installation "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#installation-2",
    "aria-label": 'Permalink to "Installation"'
  }, "​")
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "Install the QMK CLI by running:", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "python3"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " -m"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " pip"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " install"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " --user"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " qmk")
      ])
    ])
  ])
], -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Alternatively, install the QMK CLI as a "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://docs.astral.sh/uv/",
    target: "_blank",
    rel: "noreferrer"
  }, "uv"),
  /* @__PURE__ */ createTextVNode(" managed tool, kept isolated in a virtual environment (requires uv to be installed):")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "uv"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " tool"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " install"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " qmk")
      ])
    ])
  ])
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "community-packages",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Community Packages "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#community-packages",
    "aria-label": 'Permalink to "Community Packages"'
  }, "​")
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("p", null, "These packages are maintained by community members, so may not be up to date or completely functional. If you encounter problems, please report them to their respective maintainers.", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, "On Arch-based distros you can install the CLI from the official repositories (NOTE: at the time of writing this package marks some dependencies as optional that should not be):", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "sudo"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " pacman"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " -S"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " qmk")
      ])
    ])
  ])
], -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("You can also try the "),
  /* @__PURE__ */ createBaseVNode("code", null, "qmk-git"),
  /* @__PURE__ */ createTextVNode(" package from AUR:")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "yay"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " -S"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " qmk-git")
      ])
    ])
  ])
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "installation-3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Installation "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#installation-3",
    "aria-label": 'Permalink to "Installation"'
  }, "​")
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("p", null, "Install the FreeBSD package for QMK CLI by running:", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "pkg"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " install"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" } }, " -g"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, ' "py*-qmk"')
      ])
    ])
  ])
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("NOTE: remember to follow the instructions printed at the end of installation (use "),
  /* @__PURE__ */ createBaseVNode("code", null, 'pkg info -Dg "py*-qmk"'),
  /* @__PURE__ */ createTextVNode(" to show them again).")
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "set-up-qmk",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("3. Run QMK Setup "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#set-up-qmk",
    "aria-label": 'Permalink to "3. Run QMK Setup {#set-up-qmk}"'
  }, "​")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "Open QMK MSYS and run the following command:", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "qmk"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " setup")
      ])
    ])
  ])
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("In most situations you will want to answer "),
  /* @__PURE__ */ createBaseVNode("code", null, "y"),
  /* @__PURE__ */ createTextVNode(" to all of the prompts.")
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "Open Terminal and run the following command:", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "qmk"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " setup")
      ])
    ])
  ])
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("In most situations you will want to answer "),
  /* @__PURE__ */ createBaseVNode("code", null, "y"),
  /* @__PURE__ */ createTextVNode(" to all of the prompts.")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, "Open your preferred terminal app and run the following command:", -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "qmk"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " setup")
      ])
    ])
  ])
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("In most situations you will want to answer "),
  /* @__PURE__ */ createBaseVNode("code", null, "y"),
  /* @__PURE__ */ createTextVNode(" to all of the prompts.")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "info custom-block" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "Note on Debian, Ubuntu and their derivatives:"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("It's possible, that you will get an error saying something like: "),
    /* @__PURE__ */ createBaseVNode("code", null, "bash: qmk: command not found"),
    /* @__PURE__ */ createTextVNode(". This is due to a "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=839155",
      target: "_blank",
      rel: "noreferrer"
    }, "bug"),
    /* @__PURE__ */ createTextVNode(" Debian introduced with their Bash 4.4 release, which removed "),
    /* @__PURE__ */ createBaseVNode("code", null, "$HOME/.local/bin"),
    /* @__PURE__ */ createTextVNode(" from the PATH. This bug was later fixed on Debian and Ubuntu. Sadly, Ubuntu reintroduced this bug and is "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://bugs.launchpad.net/ubuntu/+source/bash/+bug/1588562",
      target: "_blank",
      rel: "noreferrer"
    }, "yet to fix it"),
    /* @__PURE__ */ createTextVNode(". Luckily, the fix is easy. Run this as your user: "),
    /* @__PURE__ */ createBaseVNode("code", null, `echo 'PATH="$HOME/.local/bin:$PATH"' >> $HOME/.bashrc && source $HOME/.bashrc`)
  ])
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", null, "Open your preferred terminal app and run the following command:", -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "language-sh vp-adaptive-theme" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    title: "Copy Code",
    class: "copy"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "lang" }, "sh"),
  /* @__PURE__ */ createBaseVNode("pre", { class: "shiki shiki-themes github-light github-dark vp-code" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "line" }, [
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" } }, "qmk"),
        /* @__PURE__ */ createBaseVNode("span", { style: { "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" } }, " setup")
      ])
    ])
  ])
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("In most situations you will want to answer "),
  /* @__PURE__ */ createBaseVNode("code", null, "y"),
  /* @__PURE__ */ createTextVNode(" to all of the prompts.")
], -1);
const _hoisted_53 = /* @__PURE__ */ createStaticVNode("", 12);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PluginTabsTab = resolveComponent("PluginTabsTab");
  const _component_PluginTabs = resolveComponent("PluginTabs");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "Windows" }, {
          default: withCtx(() => [
            _hoisted_9,
            _hoisted_10,
            _hoisted_11,
            _hoisted_12
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "macOS" }, {
          default: withCtx(() => [
            _hoisted_13,
            _hoisted_14,
            _hoisted_15,
            _hoisted_16,
            _hoisted_17,
            _hoisted_18,
            _hoisted_19
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "Linux/WSL" }, {
          default: withCtx(() => [
            _hoisted_20,
            _hoisted_21,
            _hoisted_22,
            _hoisted_23,
            _hoisted_24,
            _hoisted_25,
            _hoisted_26,
            _hoisted_27,
            _hoisted_28,
            _hoisted_29,
            _hoisted_30,
            _hoisted_31,
            _hoisted_32,
            _hoisted_33,
            _hoisted_34
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "FreeBSD" }, {
          default: withCtx(() => [
            _hoisted_35,
            _hoisted_36,
            _hoisted_37,
            _hoisted_38
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _hoisted_39,
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "Windows" }, {
          default: withCtx(() => [
            _hoisted_40,
            _hoisted_41,
            _hoisted_42
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "macOS" }, {
          default: withCtx(() => [
            _hoisted_43,
            _hoisted_44,
            _hoisted_45
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "Linux/WSL" }, {
          default: withCtx(() => [
            _hoisted_46,
            _hoisted_47,
            _hoisted_48,
            _hoisted_49
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "FreeBSD" }, {
          default: withCtx(() => [
            _hoisted_50,
            _hoisted_51,
            _hoisted_52
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _hoisted_53
  ]);
}
const newbs_getting_started = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  newbs_getting_started as default
};
