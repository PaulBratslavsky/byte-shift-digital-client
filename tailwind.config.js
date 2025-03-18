/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "479px",
      md: "767px",
      lg: "991px",
      xl: "1025px",
      dxl: "1400px",
    },
    backgroundPosition: {
      0: "0%",
      "0-0": "0px",
      50: "50%",
    },
    backgroundSize: {
      7: "7px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        fraunces: ["Fraunces, sans-serif"],
      },
      flexBasis: {
        "0%": "0%",
      },
      fontSize: {
        "22xl": "1.375rem",
        "26xl": "1.625rem",
        "28xl": "1.75rem",
        "32xl": "2rem",
        "34xl": "2.125rem",
        "40xl": "2.5rem",
        "44xl": "2.75rem",
        "46xl": "2.875rem",
        "50xl": "3.125rem",
        "52xl": "3.25rem",
        "54xl": "3.375rem",
        "56xl": "3.5rem",
        "64xl": "4rem",
        "68xl": "4.25rem",
      },
      lineHeight: {
        1.4: "1.42857",
        18: "18px",
        22: "22px",
        30: "30px",
        34: "34px",
        38: "38px",
        42: "42px",
        44: "44px",
        48: "48px",
        52: "52px",
        54: "54px",
        56: "56px",
        58: "58px",
        60: "60px",
        62: "62px",
        64: "64px",
        68: "68px",
        72: "72px",
        76: "76px",
      },
      translate: {
        "0%": "0%",
      },
      inset: {
        "0%": "0%",
        "05": "5%",
        "08": "8%",
        "6.8%": "6.8%",
        "10%": "10%",
        "12%": "12%",
        "20%": "20%",
        30: "30px",
        47: "47px",
        50: "50px",
        "060": "60px",
        98: "98px",
        100: "100px",
        131: "131px",
        185: "185px",
      },

      colors: {
        "raisin-black": "#222222",
        "r-black": "#202020",
        "dark-charcoal": "#333333",
        "black-strom": "#141414",
        "c-black": "#141414b3",
        "white-strom": "#e1e1e1b3",
        "spanish-gray": "#9D9D9D",
        lumber: "#ffdfd2",
        "pink-lace": "#fcddff",
        "papaya-whip": "#fff6d5",
        lavender: "#e0ddff",
        nyanza: "#dcffcf",
        water: "#cfffff",
        waters: "#d2eff3",
        "light-red": "#ffcbcb",
        "quick-silver": "#a3a3a3",
        "bright-gray": "#e9e9e9",
        "charleston-green": "#292929",
        "dark-liver": "#515151",
        "gold-metallic": "#dab143",
        purple: "#d19cf8",
        blue: "#79c9dc",
        yellow: "#ccf9b7",
        gold: "#ebb934",
        "ch-black": "#101010",
        "dark-silver": "#6f6f72",
        "chi-black": "#141414e6",
        "ch-white": "#e1e1e1d9",
        gainsboro: "#dddddd",
        "chi-white": "#ffffffd9",
        "bright-gray": "#eeeeee",
      },
      maxWidth: {
        "container-3xl": "1400px",
        "container-3.5xl": "1380px",
        1376: "1376px",
        "container-2xl": "1344px",
        "container-1xl": "1230px",
        "container-05xl": "1202px",
        "container-xl": "1200px",
        "container-l": "1160px",
        1084: "1084px",
        1000: "1000px",
        935: "935px",
        900: "900px",
        840: "840px",
        820: "820px",
        800: "800px",
        732: "732px",
        700: "700px",
        640: "640px",
        625: "625px",
        585: "585px",
        530: "530px",
        520: "520px",
        500: "500px",
        490: "490px",
        488: "488px",
        460: "460px",
        440: "440px",
        402: "402px",
        383: "383px",
        280: "280px",
        260: "260px",
        228: "228px",
        "95%": "95%",
      },
      maxHeight: {
        580: "580px",
      },
      margin: {
        "02": "2px",
        "05": "5px",
        "06": "6px",
        "09": "9px",
        "010": "10px",
        "014": "14px",
        18: "18px",
        25: "25px",
        26: "26px",
        27: "27px",
        30: "30px",
        38: "38px",
        50: "50px",
        "052": "52px",
        "060": "60px",
        "072": "72px",
        76: "76px",
        100: "100px",
        120: "120px",
        124: "124px",
        131: "131px",
        140: "140px",
        160: "160px",
        186: "186px",
        187: "187px",
        260: "260px",
        calc: "calc(-52vw + 50%)",
      },
      padding: {
        "05": "5px",
        "06": "6px",
        "07": "14px",
        "010": "10px",
        13: "52px",
        15: "60px",
        22: "22px",
        25: "25px",
        26: "26px",
        30: "30px",
        "060": "60px",
        100: "100px",
        120: "120px",
        140: "140px",
        154: "154px",
        170: "170px",
      },
      width: {
        800: "800px",
        636: "636px",
        610: "610px",
        580: "580px",
        564: "564px",
        560: "560px",
        540: "540px",
        532: "532px",
        520: "520px",
        500: "500px",
        494: "494px",
        488: "488px",
        465: "465px",
        440: "440px",
        420: "420px",
        408: "408px",
        388: "388px",
        365: "365px",
        340: "340px",
        324: "324px",
        222: "222px",
        150: "150px",
        140: "140px",
        120: "120px",
        "060": "60px",
        "95%": "95%",
        "90%": "90%",
        "40%": "40%",
        "32%": "32%",
        "30%": "30%",
        "20%": "20%",
        45: "45px",
      },
      height: {
        38: "38px",
        45: "45px",
        120: "120px",
        136: "136px",
        148: "148px",
        150: "150px",
        180: "180px",
        200: "200px",
        250: "250px",
        300: "300px",
        312: "312.31px",
        333: "333px",
        400: "400px",
        450: "450px",
        500: "500px",
        502: "502px",
        560: "560px",
        580: "580px",
        596: "596px",
        600: "600px",
        676: "676px",
      },
      zIndex: {
        1: "1",
        3: "3",
        5: "5",
        99: "99",
      },
      minHeight: {
        150: "150px",
        200: "200px",
      },
      gap: {
        "07": "14px",
        "010": "10px",
        30: "30px",
        60: "60px",
        70: "70px",
        120: "120px",
      },
      letterSpacing: {
        tightl: ".25px",
        tighlm: ".08em",
        tighthl: "-.03em",
        tightg: "-.02em",
        tighth: "-.01em",
        tightxl: ".04px",
        tight2xl: "0.06px",
      },
      borderRadius: {
        sm1: "10px",
        sm3: "6px",
        sm8: "18px",
        sm5: "50px",
      },
      rotate: {
        20: "20deg",
      },
      minHeight: {
        "052": "52px",
        170: "170px",
      },
      translate: {
        100: "100px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("autoprefixer")],
};
