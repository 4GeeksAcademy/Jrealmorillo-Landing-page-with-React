import React from "react";

// include images into your bundle
import cardImage from "../../img/card-image.png";


import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron 
				headerText={"A Warm Welcome"}
				mainText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				buttonText={"Call to action!"}
			/>
			<div className="container">
				<div className="card-container row mb-5 justify-content-between">
					<Cards 
						cardImage={cardImage}
						cardTitle={"Card Title"}
						cardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lorem in ipsum vehicula hendrerit mattis ac metus. In sit amet leo orci. Mauris malesuada, dolor eget suscipit tincidunt, tellus magna interdum erat, imperdiet varius enim lectus et enim."}
						buttonText={"Find out more!"} />
					<Cards 
						cardImage={cardImage}
						cardTitle={"Card Title"}
						cardText={"Lorem ipsum dolor sit amet,  Curabitur non sodales ipsum. Quisque commodo odio vel eleifend vestibulum. Nunc consectetur consequat ultricies."}
						buttonText={"Find out more!"} />
					<Cards 
						cardImage={cardImage}
						cardTitle={"Card Title"}
						cardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lorem in ipsum vehicula hendrerit mattis ac metus. In sit amet leo orci. Mauris malesuada, dolor eget suscipit tincidunt, tellus magna interdum erat, imperdiet varius enim lectus et enim."}
						buttonText={"Find out more!"} />				
					<Cards 
						cardImage={cardImage}
						cardTitle={"Card Title"}
						cardText={"Lorem ipsum dolor sit amet,  Curabitur non sodales ipsum. Quisque commodo odio vel eleifend vestibulum. Nunc consectetur consequat ultricies."}
						buttonText={"Find out more!"} />
				</div>
			</div>
			
			<Footer />
		</>
	);
};

export default Home;

