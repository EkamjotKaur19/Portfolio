import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import yly from '../../assets/yly.webp'
import dic from '../../assets/dic.jpg'

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Internships"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={yly}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Ylytic Tech Pvt Ltd</div>
							<div className="work-subtitle">
								Data Science Intern
							</div>
							<div className="work-duration">May 2023 - Present</div>
						</div>
						<p className="work-desc" >
							Collaborated with the cofounder to understand project requirements & ensure alignment with objectives.
Developed age gender detection model using image preprocessing, thorough research, DeepFace for creators demographic insights reducing company’s cost by 90%
							</p>
							<hr/>
							<br />

						<div className="work">
							<img
								src={dic}
								alt="dic"
								className="work-image"
							/>
							<div className="work-title">MDart, DIC</div>
							
							<div className="work-subtitle">
								Web Developer
							</div>
							
							<div className="work-duration">Jun 2022 - Aug 2022</div>
						</div>
						<p className="work-desc" >
								Designed an e-commerce site using ReactJs17.0 for frontend and dark-mode functionality.
NodeJs for backend functionality and MongoDb4.2 for storing products and user information
							</p>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
