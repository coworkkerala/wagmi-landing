import Script from 'next/script';

/**
 * Plausible Analytics Component
 *
 * Integrates Plausible analytics tracking with outbound link tracking
 * for wagmiworkspace.com
 */
export default function PlausibleAnalytics() {
    return (
        <>
            <Script
                defer
                data-domain="wagmiworkspace.com"
                src="https://plausible.m.mastrovia.com/js/script.outbound-links.js"
                strategy="afterInteractive"
            />
            <Script
                id="plausible-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.plausible = window.plausible || function() {
                            (window.plausible.q = window.plausible.q || []).push(arguments)
                        }
                    `,
                }}
            />
        </>
    );
}
