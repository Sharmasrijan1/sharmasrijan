import type { NextPage } from "next";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import { SiGithubsponsors, SiAnilist } from "react-icons/si";
import { HiOutlineKey } from "react-icons/hi2";
import favicon from 'public/favicon.ico';

const Etc: NextPage = () => {
    return (
        <>
            <Head>
                <title>etc - Sharmasrijan</title>
            </Head>
            <div className="min-h-[100vh] bg-gradient-to-br text-[#4c4f69] from-[#eff1f5] to-[#e6e9ef] dark:from-[#12101F] dark:to-[#1E1D2E] dark:text-white">
                <motion.div className="max-w-[64em] ml-auto mr-auto pt-24 lg:pt-[10em] lg:pb-[0em] pb-[10em] px-8" animate={{ opacity: [0, 1], y: [-20, 0] }}>
                    <p className="font-[Rubik] font-normal text-2xl pb-2">Etc</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-2xl pb-2"><span className="font-bold text-[#ECCECE]">Thank you</span> for looking through my site.</p>
                    <p className="font-[Rubik] font-normal text-2xl pt-2 pb-2">Contact</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">Feel free to send me a dm at <a className="text-[#D7B7EE] font-bold hover:underline" href="https://discord.com/users/481243928545329159">sharmasrijan#7005</a> 🙂</p>
                    <p className="font-[Rubik] font-normal text-2xl pt-2 pb-2">Other</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-4">Hope you liked the website if you want to see something to be added into my projects tab let me know what you think I could work on, Hope you like your stay!</p>
                    <div className="font-['Fira_Sans'] flex gap-2 flex-col md:flex-row text-xl">
                        <a className="flex flex-row p-3 hover:bg-[#DEA5AF] hover:text-black rounded-lg transition-all active:scale-[.96]" target="_blank" href="https://anilist.co/user/Sharmasrijan/" rel="noopener noreferrer">
                            <SiAnilist className="text-3xl" />
                            <span className="pl-2 text-lg font-['Fira_Sans'] font-semibold">My Anilist</span>
                        </a>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Etc;