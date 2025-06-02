function Footer() {
    const footerList = [
        {
            title: "shop and learn",
            prag: ["store", "Watch", "Airpods", "iPhone", "Tv and Home", "AirTag", "Accessories", "GiftCard"]
        },
        {
            title: "Account",
            prag: ["Manage your apple account", "Store Your Account", "iCloud.com"]
        },
        {
            title: "Apple Store",
            prag: ["Find a Store", "genius Bar"]
        }
    ]


    return (
        <footer className="mt-10 pl-4 bg-gray-100">
            <div className="flex gap-4">
                {footerList.map((list, idx) => (
                    <div key={idx} className="mt-4">
                        <h1 className="text-xl bold">{list.title}</h1>

                        {list.prag.map((idx) => (
                            <div className="mt-4">
                                <ul>{idx}</ul>
                            </div>

                        ))}

                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer;
