import FooterLinks from "../molecules/FooterLinks";
import FooterText from "../atoms/FooterText";

export default function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "2rem" }}>
            <div className="container mx-auto flex justify-between items-center">
                <FooterLinks />
                <FooterText />
            </div>
        </footer>
    );
}