import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './context/ModalContext';
import PlausibleAnalytics from './components/PlausibleAnalytics';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Wagmi Workspace | Premium Coworking Space in Kochi, Kerala',
    description:
        'Wagmi Workspace offers premium coworking spaces, private cabins, meeting rooms, and virtual office solutions in Kochi, Kerala. Flexible plans for startups, freelancers, and remote teams.',
    keywords: [
        'coworking space Kochi',
        'coworking space Kerala',
        'shared office space Kochi',
        'private cabin Kochi',
        'meeting room Kochi',
        'virtual office Kerala',
        'flexible workspace Ernakulam',
        'startup office Kochi',
        'freelancer workspace Kerala',
        'remote work space Kochi',
        'hot desk Kochi',
        'dedicated desk Kerala',
        'Wagmi Workspace',
        'office space Edappally',
        'coworking Kalamassery',
    ],
    authors: [{ name: 'Wagmi Workspace' }],
    creator: 'Wagmi Workspace',
    publisher: 'Wagmi Workspace',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://wagmiworkspace.com',
        siteName: 'Wagmi Workspace',
        title: 'Wagmi Workspace | Premium Coworking Space in Kochi, Kerala',
        description:
            'Discover premium coworking spaces, private cabins, and flexible office solutions at Wagmi Workspace in Kochi, Kerala. Perfect for startups, freelancers, and teams.',
        images: [
            {
                url: '/img/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Wagmi Workspace - Premium Coworking Space',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@Wagmiworkspace',
        creator: '@Wagmiworkspace',
        title: 'Wagmi Workspace | Premium Coworking Space in Kochi',
        description:
            'Premium coworking spaces, private cabins, and flexible office solutions in Kochi, Kerala.',
        images: ['/img/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://wagmiworkspace.com',
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/site.webmanifest',
    category: 'business',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <PlausibleAnalytics />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            name: 'Wagmi Workspace',
                            description:
                                'Premium coworking space offering flexible office solutions in Kochi, Kerala',
                            url: 'https://wagmiworkspace.com',
                            telephone: '+91-8129988389',
                            email: 'admin@wagmiworkspace.com',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'AN Square, Unichira Thoppil Rd, Marottichuvadu',
                                addressLocality: 'Edappally, Kochi',
                                addressRegion: 'Kerala',
                                postalCode: '682021',
                                addressCountry: 'IN',
                            },
                            geo: {
                                '@type': 'GeoCoordinates',
                                latitude: 10.02991,
                                longitude: 76.31988,
                            },
                            openingHours: 'Mo-Sa 09:00-18:00',
                            priceRange: '$$',
                            image: 'https://wagmiworkspace.com/img/og-image.jpg',
                            sameAs: [
                                'https://x.com/Wagmiworkspace',
                                'https://www.instagram.com/wagmiworkspace',
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${spaceGrotesk.variable} antialiased`}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
