import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/common/card";
import yly from '../../assets/yly.webp'
import dic from '../../assets/dic.jpg'

import "../intern/intern.css"

const Intern = () => {
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
					</div>
				}
			/>
		</div>
	);
};

export default Intern;
