function Footer() 
{
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer bg-[#0b0f1a]/97 py-4 border-t border-white/9 text-gray-400 text-center text-xs md:text-sm">
            <p>&copy; {currentYear} Rajan Shrestha. Crafting digital experiences.</p>
        </div>
    );
}

export default Footer;