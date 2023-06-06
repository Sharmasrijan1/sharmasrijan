import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
