import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} Dev Kinariwala. All rights reserved.</p>
      <div className="socials">
        <a
          href="https://github.com/devkinariwala"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dev-kinariwala-6297b5280/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/dev_kinari_2005"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  position: absolute;
  bottom: 0;
  left: 0;
  position: fixed;

  .socials a {
    color: white;
    margin-left: 1rem;
    font-size: 1.3rem;
    transition: color 0.3s ease;
  }

  .socials a:hover {
    color: #bca7ff;
  }
`;

export default Footer;
