import Link from 'next/link'
import { Instagram } from 'lucide-react'

function BeniFitLogo() {
    return (
        <svg
            width="140"
            height="140"
            viewBox="0 0 200 200"
            className="text-black"
            aria-label="BeniFit logo"
        >
            <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="black"
                strokeWidth="6"
            />
            <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="64"
                fill="black"
                style={{
                    fontFamily: `'Brush Script MT', 'Pacifico', cursive`,
                    letterSpacing: '-2px',
                }}
            >
                BeniFit
            </text>
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="bg-zinc-400 pt-24 pb-12 text-black">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 md:grid-cols-4 items-start">
                    <div className="flex justify-center md:justify-start">
                        <BeniFitLogo />
                    </div>

                    <div>
                        <h4 className="mb-6 font-bold uppercase text-black tracking-wide">
                            About Me
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#about" className="hover:text-black">Get to know me</Link></li>
                            <li><Link href="#contacts" className="hover:text-black">Contacts</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 font-bold uppercase text-black tracking-wide">
                            Contact
                        </h4>
                        <p className="text-sm break-all">
                            benifit.coach@gmail.com
                        </p>
                        <p className="mt-3 text-sm">
                            Tel: +34 614 02 63 51
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-6 font-bold uppercase text-black tracking-wide">
                            Follow Us
                        </h4>
                        <div className="flex gap-4 text-slate-50">
                            <Link href="https://www.instagram.com/benifitcastellon/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="my-16 h-px bg-black/10" />
                
                <div className="text-center text-sm space-y-4">
                    <div className="space-x-6">
                        <Link href="/cookies" className="hover:text-black">
                            Cookies Policy
                        </Link>
                        <Link href="/privacy" className="hover:text-black">
                            Privacy Policy
                        </Link>
                    </div>

                    <p>
                        © {new Date().getFullYear()} BeniFit. All Rights Reserved.
                    </p>

                    <p className="italic">
                        Website designed by{' '}
                        <span className="text-slate-50 font-medium">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://vosquerylab.vercel.app/"
                            >
                                <span className="text-sm">Vo$Query Lab</span>
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
