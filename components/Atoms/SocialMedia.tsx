import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

interface SocialMediaItem {
  _id: string;
  label: string;
  url: string;
}

const SocialMedia: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<SocialMediaItem[]>([]);

  useEffect(() => {
    fetchSocialMedia();
  }, []);

  const fetchSocialMedia = async () => {
    try {
      const response = await axios.get<SocialMediaItem[]>("/api/socialmedia");
      setSocialMedia(response.data);
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };

  const renderSocialMediaIcon = (label: string, url: string) => {
    const socialMediaIcons: { [key: string]: JSX.Element } = {
      facebook: (
        <FaFacebook className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
      ),
      twitter: (
        <FaTwitter className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
      ),
      instagram: (
        <FaInstagram className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
      ),
      youtube: (
        <FaYoutube className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
      ),
    };

    const lowercaseLabel = label.toLowerCase(); // Convert label to lowercase

    if (socialMediaIcons[lowercaseLabel]) {
      return (
        <div className="p-2 flex items-center justify-center bg-primary rounded-full">
          <Link href={url} target="_blank">
            {socialMediaIcons[lowercaseLabel]}
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex h-full w-1/5 gap-4 justify-evenly mb-4 items-center sm:w-full">
        {socialMedia.map((item) => (
          <React.Fragment key={item._id}>
            {renderSocialMediaIcon(item.label, item.url)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
