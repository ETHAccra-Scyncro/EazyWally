/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useRef, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CustomConnect, RainbowKitCustomConnectButton } from "./scaffold-eth";
import LinkNumberConnect from "./scaffold-eth/LinkNumberConnect";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
// import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary py-1.5 px-3 text-2xl rounded-full gap-2 font-semibold`}
    >
      {children}
    </Link>
  );
};

const TinyNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary py-1.5 px-3 text-base rounded-full gap-2 font-semibold`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('')

  const handleSubmit = async(e : any) => {
    e.preventDefault()
    try{
      setShowModal(false)
    }catch(err){
      console.log(err)
    }
  }

  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const navLinks = (
    <>
      <li>
        <NavLink href="/">EazyWally</NavLink>
      </li>
      {/* <li>
        <NavLink href="/debug">
          <BugAntIcon className="h-4 w-4" />
          Debug Contracts
        </NavLink>
      </li>
      <li>
        <NavLink href="/example-ui">
          <SparklesIcon className="h-4 w-4" />
          Example UI
        </NavLink>
      </li>
      <li>
        <NavLink href="/blockexplorer">
          <MagnifyingGlassIcon className="h-4 w-4" />
          Block Explorer
        </NavLink>
      </li> */}
    </>
  );

  const actionLinks = (
    <>
      <li>
        <TinyNavLink href="/about">
          <BugAntIcon className="h-4 w-4" />
          About Project
        </TinyNavLink>
      </li>
      <li>
        <TinyNavLink href="/about">
          <BugAntIcon className="h-4 w-4" />
          Request Demo
        </TinyNavLink>
      </li>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-transparent min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6">
          <div className="flex relative w-10 h-10">
            <img alt="SE2 logo" className="cursor-pointer object-cover h-32 w-40 -mt-10" src="/assets/logo.png" />
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end flex-grow mr-4"></div>

      <div className="navbar-end flex-grow mr-4">
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{actionLinks}</ul>

        <LinkNumberConnect />

        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" onClick={() => setShowModal(true)}>Get Started</button>

      </div>

      {showModal && (
      <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Enter your Phone Number
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col g-3">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your Phone Number" className="p-2 rounded border" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )}

    </div>
  );
};
