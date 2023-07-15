import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

import "./styles/project.css";
import logod from '../../assets/diary.png'
import logor from '../../assets/recipe.png'
import logoe from '../../assets/entice.png'
import logoc from '../../assets/ecomm.png'
import logog from '../../assets/gad.jpg'
import logocm from '../../assets/comment.png'

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<Container fluid className="project-section">
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							{title == "Dear Diary" && <img src={logod} alt="logo" />}
							{title == "Let's Cook" && <img src={logor} alt="logo" />}
							{title == "EkasByEkam" && <img src={logoe} alt="logo" />}
							{title == "Ecomm" && <img src={logoc} alt="logo" />}
							{title == "Age Gender Detection" && <img src={logog} alt="logo" />}
							{title == "Comments Analysis" && <img src={logocm} alt="logo" />}
							
							
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>

			

			
		</Container>
	);
};

export default Project;
