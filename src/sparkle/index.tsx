//import the components needed for the page to redirect to a new page
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
//make it so when you go to this page it will redirect into the home page
const Index: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    }, []);
    return (
        <>
            <Head>
                <title>Redirecting...</title>
            </Head>
        </>
    );
}
