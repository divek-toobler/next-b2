import Header from '../components/header'
import Footer from '../components/footer'


const Layout = ({ children}) => {
    return (
        <div className="content">
            <Header/>
            <section className="mainWrap">
                { children}
            </section>
            <Footer/>
        </div>
    )
}

export default Layout