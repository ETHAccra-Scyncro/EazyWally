import Head from "next/head";

const page = () => {
  return (
    <>
      <div>
        <Head>
          <title>EazyWally</title>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>
        <div className="w-screen h-screen flex justify-center items-center">
          <h1>This is your usual web3 transaction</h1>
        </div>
      </div>
    </>
  );
};

export default page;
