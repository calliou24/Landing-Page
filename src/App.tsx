import Nav from './components/Nav/nav';
import Section from './components/Section/section';
import Slider from './components/Slider/slider';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<div className="first-cont">
				<Nav />
				<Section />
			</div>
			<Slider />
			<Footer />
		</div>
	);
}

export default App;
