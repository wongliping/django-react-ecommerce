import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} exact />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
