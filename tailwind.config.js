/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        backgroundImage: {
            tandc: "url('./src/assets/images/bg_tandc.png')",
            homeBg: "url('./src/assets/images/HomePage/bg.svg')"
        },
        fontFamily: {
            hanikenSerif: ["hanikenSerif", "sans-serif"],
            natosansmm: ["natosansmm"],
            w14art: ["w14art", "sans-serif"],
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        textShadow: {
            DEFAULT: '-2px 3px 0px #000000'
        },
        extend: {
            lineClamp: {
                7: "7",
            },
            colors: {
                green: "#01EC48",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                loopText: {
                    from: { transform: " translateX(0)" },
                    to: { transform: " translateX(-100%)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
            {
                'text-shadow': (value) => ({
                    textShadow: value,
                }),
            },
            { values: theme('textShadow') }
        )
    }), import("tailwindcss-animate")],
};
