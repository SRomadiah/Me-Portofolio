import type { NextComponentType } from "next";

import {
  MdEmail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/SRomadiah" />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/s-romadiah"
        />

        <Icon icon={<MdEmail />} url="mailto:diyah1888@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
