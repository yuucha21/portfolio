import FooterLinks from "../molecules/FooterLinks";
import FooterText from "../atoms/FooterText";
import WaveFooterBackground from "../atoms/WaveFooterBackground.jsx";

export default function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "2rem" }}>
            <div className="flex justify-between items-center gap-4 flex-wrap">
                <FooterLinks />
                <FooterText />
            </div>
        </footer>
    );
}