import Head from "next/head";
import type { NextPage } from "next";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { SiTailwindcss, SiNginx, SiDocker, SiReact, SiNextdotjs, SiWindows, SiUbuntu, SiDebian, SiSpotify, SiLua, SiApplemusic, SiRazer, SiDiscord, SiRoblox, SiSnapchat} from "react-icons/si";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About - Friends</title>
            </Head>
            <div className="min-h-[100vh] bg-gradient-to-br text-[#4c4f69] from-[#eff1f5] to-[#e6e9ef] dark:from-[#12101F] dark:to-[#1E1D2E] dark:text-white">
                <motion.div className="max-w-[64em] ml-auto mr-auto pt-24 pb-48 lg:pt-[10em] px-8" animate={{ opacity: [0, 1], y: [-20, 0] }}>
                    <p className="font-[Rubik] font-normal text-2xl pb-2">About - Friends</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2"><span className="font-bold text-[#FFC0CB]">Frankie:</span> Proffesional Fortniter</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2"><span className="font-bold text-[#FF0000]">Nick:</span> "Brian Is A Faggot"</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2"><span className="font-bold text-[#570861]">BIG A:</span> I'm Diamond</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2"><span className="font-bold text-[#0000FF]">Brian:</span> Cool Person</p>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default About;