/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            /* ── Font Family ─────────────────────────────────── */
            fontFamily: {
                sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            /* ── Color Palette ───────────────────────────────── */
            colors: {
                // Surface
                surface: 'var(--color-surface)',
                'surface-dim': 'var(--color-surface-dim)',
                'surface-bright': 'var(--color-surface-bright)',
                'surface-container-lowest': 'var(--color-surface-container-lowest)',
                'surface-container-low': 'var(--color-surface-container-low)',
                'surface-container': 'var(--color-surface-container)',
                'surface-container-high': 'var(--color-surface-container-high)',
                'surface-container-highest': 'var(--color-surface-container-highest)',
                'on-surface': 'var(--color-on-surface)',
                'on-surface-variant': 'var(--color-on-surface-variant)',
                'inverse-surface': 'var(--color-inverse-surface)',
                'inverse-on-surface': 'var(--color-inverse-on-surface)',
                outline: 'var(--color-outline)',
                'outline-variant': 'var(--color-outline-variant)',
                'surface-tint': 'var(--color-surface-tint)',
                'surface-variant': 'var(--color-surface-variant)',
                background: 'var(--color-background)',
                'on-background': 'var(--color-on-background)',

                // Primary
                primary: 'var(--color-primary)',
                'on-primary': 'var(--color-on-primary)',
                'primary-container': 'var(--color-primary-container)',
                'on-primary-container': 'var(--color-on-primary-container)',
                'inverse-primary': 'var(--color-inverse-primary)',
                'primary-fixed': 'var(--color-primary-fixed)',
                'primary-fixed-dim': 'var(--color-primary-fixed-dim)',
                'on-primary-fixed': 'var(--color-on-primary-fixed)',
                'on-primary-fixed-variant': 'var(--color-on-primary-fixed-variant)',

                // Secondary (Intelligent Emerald — AI features only)
                secondary: 'var(--color-secondary)',
                'on-secondary': 'var(--color-on-secondary)',
                'secondary-container': 'var(--color-secondary-container)',
                'on-secondary-container': 'var(--color-on-secondary-container)',
                'secondary-fixed': 'var(--color-secondary-fixed)',
                'secondary-fixed-dim': 'var(--color-secondary-fixed-dim)',
                'on-secondary-fixed': 'var(--color-on-secondary-fixed)',
                'on-secondary-fixed-variant': 'var(--color-on-secondary-fixed-variant)',

                // Tertiary
                tertiary: 'var(--color-tertiary)',
                'on-tertiary': 'var(--color-on-tertiary)',
                'tertiary-container': 'var(--color-tertiary-container)',
                'on-tertiary-container': 'var(--color-on-tertiary-container)',
                'tertiary-fixed': 'var(--color-tertiary-fixed)',
                'tertiary-fixed-dim': 'var(--color-tertiary-fixed-dim)',
                'on-tertiary-fixed': 'var(--color-on-tertiary-fixed)',
                'on-tertiary-fixed-variant': 'var(--color-on-tertiary-fixed-variant)',

                // Error
                error: 'var(--color-error)',
                'on-error': 'var(--color-on-error)',
                'error-container': 'var(--color-error-container)',
                'on-error-container': 'var(--color-on-error-container)',

                // AI badge tint (not in standard palette — special semantic use)
                'ai-badge': 'rgba(16, 185, 129, 0.1)',
                'ai-badge-text': 'var(--color-secondary)',
            },
            /* ── Border Radius ───────────────────────────────── */
            borderRadius: {
                sm: 'var(--radius-sm)',      // 2px
                DEFAULT: 'var(--radius-default)', // 4px  — buttons, inputs
                md: 'var(--radius-md)',      // 6px
                lg: 'var(--radius-lg)',      // 8px  — cards
                xl: 'var(--radius-xl)',      // 12px — AI badges
                full: 'var(--radius-full)',
            },

            /* ── Spacing ─────────────────────────────────────── */
            spacing: {
                1: 'var(--space-1)',  // 8px
                2: 'var(--space-2)', // 16px
                3: 'var(--space-3)', // 24px
                4: 'var(--space-4)', // 32px
                5: 'var(--space-5)', // 40px
                6: 'var(--space-6)', // 48px
            },

            /* ── Max Width (container) ───────────────────────── */
            maxWidth: {
                container: 'var(--layout-container-max)', // 1280px
            },

            /* ── Font Size / Type Scale ──────────────────────── */
            fontSize: {
                'display-lg': ['var(--text-display-lg-size)', { lineHeight: 'var(--text-display-lg-lh)', letterSpacing: 'var(--text-display-lg-ls)', fontWeight: 'var(--text-display-lg-weight)' }],
                'headline-md': ['var(--text-headline-md-size)', { lineHeight: 'var(--text-headline-md-lh)', letterSpacing: 'var(--text-headline-md-ls)', fontWeight: 'var(--text-headline-md-weight)' }],
                'body-lg': ['var(--text-body-lg-size)', { lineHeight: 'var(--text-body-lg-lh)', fontWeight: 'var(--text-body-lg-weight)' }],
                'body-md': ['var(--text-body-md-size)', { lineHeight: 'var(--text-body-md-lh)', fontWeight: 'var(--text-body-md-weight)' }],
                'label-sm': ['var(--text-label-sm-size)', { lineHeight: 'var(--text-label-sm-lh)', letterSpacing: 'var(--text-label-sm-ls)', fontWeight: 'var(--text-label-sm-weight)' }],
                caption: ['var(--text-caption-size)', { lineHeight: 'var(--text-caption-lh)', fontWeight: 'var(--text-caption-weight)' }],
            },

            /* ── Box Shadows ─────────────────────────────────── */
            boxShadow: {
                'level-1': 'var(--shadow-level-1)',  // 1px border-like
                'level-2': 'var(--shadow-level-2)',  // hover / floating
                'ai-glow': 'var(--shadow-ai-glow)',  // AI-powered elements
            },
        },
    },
    plugins: [],
}