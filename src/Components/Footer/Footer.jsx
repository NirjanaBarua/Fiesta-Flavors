

const Footer = () => {
    return (
        <div className="bg-custom-green h-20">
            <footer className="footer footer-center text-align-center text-white p-4 font-bold ">
                <aside className="mt-4">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Fiesta Flavors</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;