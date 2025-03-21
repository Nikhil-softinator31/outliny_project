import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #121314 20%, rgba(0, 0, 0, 50) 50.94%)',
        'custom-gradient':
          'linear-gradient(150.47deg, rgba(255, 255, 255, 0.05) 55.03%, rgba(255, 255, 255, 0) 86.03%)',
        'custom-gradient1':
          'linear-gradient(150.47deg, rgba(255, 255, 255, 0.05) 55.03%, rgba(255, 255, 255, 0) 86.03%)',
        'custom-gradient2':
          'linear-gradient(360.47deg, rgba(255, 255, 255, 0.05) 55.03%, rgba(255, 255, 255, 0) 10.03%)',
        'custom-gradient3': 'linear-gradient(182deg, rgb(15 16 16) 0%, rgb(0 0 0) 100%)',
        'custom-gradient4':
          'linear-gradient(172.47deg, rgba(255, 255, 255, 0.1) -35%, rgba(255, 255, 255, 0) 89.03%);',
        'custom-gradient5':
          'linear-gradient(125deg, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0) 89.03%);',
        'bt-gradient':
          'linear-gradient(#0000 0%, #00000005 7.2%, #00000009 10.29%, #00000013 14.7%, #00000026 21%, #0000004d 30%, #000 60%)',
        'custom-gradient10':
          'linear-gradient(0deg, rgba(4, 1, 2, 0) 0%, rgba(255, 255, 255, 0.06) 100%)',
        'custom-gradient11':
          ' radial-gradient(circle, rgba(15,16,17,1) 0%, rgba(49,49,52,1) 0%, rgba(0,0,0,1) 100%)',
        'custom-gradient12':
          'linear-gradient(180deg, rgba(19, 20, 21, 0) 5%, #131415 50%, rgba(19, 20, 21, 0) 95%)',
        'custom-gradient13':
          'linear-gradient(180deg, #EEEEEE 19.36%, rgba(227, 227, 227, 0) 75.98%)',
        'custom-gradient14':
          'linear-gradient(168.44deg, #B84CCB 8.49%, #245BE9 62.67%, #1C54E4 93.15%)',
          'custom-gradient15': 'linear-gradient(0deg, rgba(6,25,60,1) 0%, rgba(37,23,55,1) 99%);',
      },
      animation: {},
      borderRadius: {},
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
        poppins: ['Poppins', 'sans-serif'],
        aldrich: ['Aldrich', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'border-flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
