import Logo_Full_Light from "../../assets/Logo/Logo-Full-Light.png";
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsYoutube,
  BsHeart,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full mb-10">
      <div className="w-11/12 mx-auto mt-10 flex flex-col">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <div>
              <img src={Logo_Full_Light} alt="" />
            </div>
            <div className="font-bold text-white">Company</div>
            <div>About</div>
            <div>Careers</div>
            <div>Affiliates</div>
            <div className="flex gap-2">
              <BsFacebook />
              <BsTwitter />
              <BsGoogle />
              <BsYoutube />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white">Resources</div>
            <div>Articles</div>
            <div>Blog</div>
            <div>Chart Sheet</div>
            <div>Code challenges</div>
            <div>Docs</div>
            <div>Projects</div>
            <div>Videos</div>
            <div>Workspaces</div>
            <div className="text-white font-bold">Support</div>
            <div>Help Center</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold">Plans</div>
            <div>Paid memberships</div>
            <div>For students</div>
            <div>Business solutions</div>
            <div className="text-white font-bold">Community</div>
            <div>Forums</div>
            <div>Chapters</div>
            <div>Events</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold">Subjects</div>
            <div>Al</div>
            <div>Cloud Computing</div>
            <div>Code Foundations</div>
            <div>Computer Science</div>
            <div>Cybersecurity</div>
            <div>Data Analytics</div>
            <div>Data Science</div>
            <div>Data Visualization</div>
            <div>Developer Tools</div>
            <div>DevOps</div>
            <div>Game Development</div>
            <div>IT</div>
            <div>Machine Learning</div>
            <div>Math</div>
            <div>Mobile Development</div>
            <div>Web Design</div>
            <div>Web Development</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold">Languages</div>
            <div>Bash</div>
            <div>C++</div>
            <div>C#</div>
            <div>Go</div>
            <div>HTML & CSS</div>
            <div>Java</div>
            <div>JavaScript</div>
            <div>Kotlin</div>
            <div>PHP</div>
            <div>Python</div>
            <div>R</div>
            <div>Ruby</div>
            <div>SQL</div>
            <div>Swift</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold">Career building</div>
            <div>Career paths</div>
            <div>Career services</div>
            <div>Interview prep</div>
            <div>Professional certification</div>
            <div>-</div>
            <div>Full Catalog</div>
            <div>Beta Content</div>
          </div>
        </div>
        <hr />
        <div className="flex mt-10 justify-between items-center">
          <div className="flex gap-6">
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
            <div>Terms</div>
          </div>
          <div className="flex gap-2">
            Made <BsHeart /> with Love from Codehelp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
