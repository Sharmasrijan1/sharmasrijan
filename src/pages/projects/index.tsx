import Head from "next/head";
import type { NextPage } from "next";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare, HiOutlineFire } from "react-icons/hi2"
import { Card } from "../../components/Cards";
import { FC } from "react";

const ExternalButton: FC<{href: string}> = ({href}) => {
    return (
        <motion.a rel="noopener noreferrer" target="_blank" href={href} className="transition-all text-[#6c6f85] dark:text-gray-300 dark:hover:text-white m-4 rounded-xl flex z-20">
            <HiArrowTopRightOnSquare className="text-2xl mt-[2px] mr-2"/>
            <p className="font-[Rubik] font-normal text-lg">My Projects</p>
        </motion.a>
    );
  }

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Projects - Sharmasrijan</title>
            </Head>
            <div className="min-h-[100vh] bg-gradient-to-br text-[#4c4f69] from-[#eff1f5] to-[#e6e9ef] dark:from-[#12101F] dark:to-[#1E1D2E] dark:text-white">
                <motion.div className="max-w-[64em] ml-auto mr-auto pt-24 lg:pt-[10em] pb-[10em] px-8" animate={{ opacity: [0, 1], y: [-20, 0] }}>
                    <p className="font-[Rubik] font-normal text-2xl pb-2">Projects</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">Welcome!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card title="Coming Soon ...">
                            <p className="font-['Fira_Sans'] text-lg font-semibold px-4 text-gray-400">Language: Something</p>
                            <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl px-4">I will be adding more of these cards to this page once I feel like making my projects public!</p>
                            <div className="text-amber-300 flex items-center mx-4 mb-4 pt-2">
                                <HiOutlineFire className="text-2xl mr-2"/>
                                <p className="font-['Fira_Sans'] text-xl text-semibold ">Hope You Look Forward To See What I Put Here!</p>
                            </div>
                            <ExternalButton href="https://github.com/SrijanSharma21"/>
                        </Card>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;