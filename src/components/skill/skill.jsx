import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiGithub,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import { TbBrandGolang, TbBrandJavascript, TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <>
    <div className="skills">
    <div className="title skill-title" >Skills</div>
    <div className="container skill">
        <div className="tech-icons">
            <CgCPlusPlus />
        </div>
        <div className="tech-icons">
            <TbBrandJavascript />
        </div>
        <div className="tech-icons">
            <DiPython />
        </div>
        <div className="tech-icons">
            <DiReact />
        </div>
    </div>

    <div className="container skill">
        <div className="tech-icons">
            <DiNodejs />
        </div>
        <div className="tech-icons">
            <SiExpress />
        </div>
        <div className="tech-icons">
            <DiMongodb />
        </div>
        <div className="tech-icons">
            <TbSql />
        </div>
    </div>

    <div className="container skill">
        <div className="tech-icons">
            <SiFirebase />
        </div>
        <div className="tech-icons">
            <DiHtml5 />
        </div>
        <div className="tech-icons">
            <DiCss3 />
        </div>
        <div className="tech-icons">
            <DiGithub />
        </div>
    </div>
    </div>

    </>

    

    
  );
}

export default Techstack;
