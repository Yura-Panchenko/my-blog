const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="copyright">
            <p>&copy; {currentYear} Treloo LLC - All right reserved.</p>
        </div>
    )
}

export default Copyright;