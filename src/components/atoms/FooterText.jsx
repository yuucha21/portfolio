import '../../styles/footer.css'; // Import your custom CSS for the footer

export default function FooterText() {
    return (
        <footer className="footer-bg text-white">
            <div className="footer-container">
                <div className="footer-container">
                    <a href="#" className="footer-link">About</a>
                    <a href="#" className="footer-link">Works</a>
                    <a href="#" className="footer-link">Contact</a>
                </div>
                <p className="text-sm">© 2025 Minami's portfolio</p>
            </div>
        </footer>
    )
}