import Link from "next/link";

export default function FooterLinks() {
    return (
        <ul>
            <li>
                <Link href="/home">HOME</Link>
            </li>
            <li>
                <Link href="/profile">PROFILE</Link>
            </li>
            <li>
                <Link href="/work">WORK</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}