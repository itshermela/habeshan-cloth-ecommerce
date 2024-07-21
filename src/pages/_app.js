import '../styles/global.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Provider } from 'react-redux'
import { store, persistor } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

const App = ({ Component, pageProps}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <div className="app">
                        <Toaster />
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </div>
            </PersistGate>
        </Provider>
    )
}

export default App