

const Footer = () => {
    return (
        <div className="bg-custom-green h-28">
            <footer className="footer footer-center text-align-center text-white p-4 font-bold">
                <aside className="mt-8">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Fiesta Flavors</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;