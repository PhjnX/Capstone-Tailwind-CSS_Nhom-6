/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        bubblegum: ['"Bubblegum Sans"', "cursive"],
      },
      dropShadow: {
        custom: "0px 4.8px 24.4px rgba(19, 16, 34, 0.10)",
      },
    },
    animation: {
      skw: "skew-animation 2s infinite",
      "up-down": "up-down 2s ease-in-out infinite",
      "left-right-2": "left-right-2 4s ease-in-out infinite",
      "fade-in-up": "fadeInUp 3s ease forwards",
      "left-right": "left-right 3s ease-in-out infinite",
      "fade-in-Up": "fadeInUp 1s ease forwards",
    },
    keyframes: {
      "skew-animation": {
        "0%": { transform: "skewX(0deg)" },
        "50%": { transform: "skewX(-10deg)" },
        "100%": { transform: "skewX(0deg)" },
      },
      "up-down": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" }, // Điều chỉnh giá trị -10px nếu cần
      },
      "left-right-2": {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(20px)" }, // Thay đổi giá trị để điều chỉnh khoảng cách
      },
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(20px)" }, // Bắt đầu từ dưới với độ mờ
        "100%": { opacity: "1", transform: "translateY(0)" }, // Kết thúc tại vị trí ban đầu
      },
      "left-right": {
        "0%, 100%": { transform: "translateX(0)" }, // Bắt đầu và kết thúc tại vị trí ban đầu
        "50%": { transform: "translateX(20px)" }, // Di chuyển sang phải 20px
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      translate: ["group-two-hover"],
    },
  },
};
