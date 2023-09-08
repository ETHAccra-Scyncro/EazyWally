import Head from "next/head";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Head>
        <title>EazyWally</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <div>
        <div className="w-screen h-full grid md:grid-cols-12 md:pt-20 px-20 ">
          <div className="md:col-span-8 mt-52">
            <h1 className="text-5xl font-bold uppercase tracking-wide bg-gradient-to-r from-[#3B3BC4] to-[#7AEBEB] bg-clip-text text-transparent">
              Making transactions easy <br /> with just a click
            </h1>
            <div className=" md:w-3/5 mt-10">
              <h3 className="tracking-wide leading-snug text-3xl">
                Register with{" "}
                <span className="bg-gradient-to-r from-[#3B3BC4] to-[#7AEBEB] bg-clip-text text-transparent">
                  EasyWally
                </span>{" "}
                and get your wallet address linked with your mobile number. Life can be easier than you think
              </h3>
            </div>
            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mt-6">Try it now</button>
          </div>

          <div className="md:col-span-4 flex flex-col">
            <Image src={"/assets/diamond.png"} width={200} height={200} alt="diamond" className="w-[600px]  z-10" />
            <Image
              src={"/assets/diamond.png"}
              width={200}
              height={200}
              alt="diamond"
              className="w-[600px]  -mt-60 -z-0 opacity-25"
            />
          </div>
        </div>

        {/* <div className="w-screen h-screen bg-white grid md:grid-cols-12 md:pt-20 px-20">
          <div className="col-span-"></div>
          {/* <div className="col-span-5">
            <form>
              <h1>let's get you connected</h1>
              <div className="form-control w-full max-w-xs ">
                <label className="label ">
                  <span className="label-text text-slate-600">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-gray-100 text-slate-600 "
                />
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label ">
                  <span className="label-text text-slate-600">Add a phone number</span>
                </label>
                <input
                  type="text"
                  placeholder="(233) 020 123 4567 "
                  className="input input-bordered w-full max-w-xs bg-gray-100 text-slate-600 "
                />
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label ">
                  <span className="label-text text-slate-600">We've sent you a verification code, Enter it below</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-gray-100 text-slate-600 "
                />
              </div>
            </form>
          </div> 
        </div> */}
      </div>
    </>
  );
};

export default page;
