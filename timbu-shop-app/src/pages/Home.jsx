import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import Product from '../components/Product'
import Featproducts from '../components/Featproducts'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Collection />
            <Product />
            <Featproducts />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home