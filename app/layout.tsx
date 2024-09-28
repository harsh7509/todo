// pages/layout.tsx
"use client";
import { RecoilRoot } from 'recoil';
import './globals.css'; // Import global styles


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </RecoilRoot>
    );
}
