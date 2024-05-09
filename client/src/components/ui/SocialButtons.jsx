import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialButtons = ({ socials }) => {
  const renderSocialButton = (social) => {
    const { name, url, icon } = social;
    const iconMapping = {
      github: faGithub,
      twitter: faTwitter,
      linkedin: faLinkedin,
      instagram: faInstagram,
    };

    return (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center mr-2"
      >
        <FontAwesomeIcon icon={iconMapping[icon]} className="mr-2" />
        {name}
      </a>
    );
  };

  return (
    <div className="flex">
      {socials.map((social) => renderSocialButton(social))}
    </div>
  );
};

export default SocialButtons;