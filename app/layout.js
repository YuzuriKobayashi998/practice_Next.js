import "./globals.css"
import Header from "./conponents/header"
import Footer from "./conponents/footer"

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}

export default RootLayout