import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

import { useRouter } from "next/router";
import React, { Dispatch } from "react";
import { Button, Dropdown, SearchBox } from "..";
import { ChevronRightIcon } from "../Icons";
import { useSearchDebounce } from "../../hooks";

const languageList = [
  {
    id: "sa",
    label: "Arabian",
  },
  {
    id: "al",
    label: "Albanian",
  },
  {
    id: "az",
    label: "Azerbaijani",
  },
  {
    id: "ba",
    label: "Baluchi",
  },
  {
    id: "ph",
    label: "Filipino",
  },
  {
    id: "fr",
    label: "French",
  },
  {
    id: "gr",
    label: "German",
  },
  {
    id: "gk",
    label: "Greek",
  },
  {
    id: "id",
    label: "Indonesia",
  },
  {
    id: "li",
    label: "Lithuanian",
  },
  {
    id: "my",
    label: "Malay",
  },
  {
    id: "se",
    label: "Serbian",
  },
  {
    id: "sp",
    label: "Spanish",
  },
  {
    id: "sh",
    label: "Swahili",
  },
];

interface NavMenuMobileProps {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onClickLogo: () => void;
  onClickLanguage: () => void;
  pathname: string;
  isChangeLanguageMode: boolean;
  onSearchLanguage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  onClickToDemo: () => void;
  visible: boolean;
}

function NavMenuMobile({
  isOpen,
  setOpen,
  onClickLogo,
  pathname,
  onClickLanguage,
  isChangeLanguageMode,
  onSearchLanguage,
  searchTerm,
  onClickToDemo,
  visible,
}: NavMenuMobileProps) {
  return (
    <div
      className={`transition-all sticky ${
        isOpen ? "top-0" : visible ? "top-0" : "-top-[6rem]"
      } w-full bg-white z-50 lg:hidden`}
    >
      <header className="lg:hidden w-full bg-white shadow-md  justify-between border-neutral-300 py-4 flex items-center mx-auto max-w-[100%] px-4">
        {/* Logo */}
        <div id="logo">
          <Image
            src="/assets/logo/logo-notes.png"
            width={216}
            height={56}
            alt="logo-notes"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
        </div>

        {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
      </header>
    </div>
  );
}

interface NavMenuDesktopProps {
  pathname: string;
  isHome: boolean;
  onClickLogo: () => void;
  visible: boolean;
  onClickToDemo: () => void;
}

function NavMenuDesktop({
  onClickLogo,
  visible,
  onClickToDemo,
}: NavMenuDesktopProps) {
  return (
    <div
      className={`transition-all sticky z-50 ${
        visible ? "top-0" : "-top-[6rem]"
      }`}
    >
      <header className="hidden lg:flex w-full bg-white shadow-md  justify-between border-neutral-300 py-4 items-center mx-auto max-w-[100%] px-8">
        {/* Logo */}
        <div id="logo">
          <Image
            src="/assets/logo/logo-notes.png"
            width={216}
            height={56}
            alt="logo-notes"
            onClick={onClickLogo}
            className="cursor-pointer"
          />
        </div>

        {/* Right section */}
        <div id="right" className="hidden lg:flex gap-3">
          <Dropdown title="ID" />
          <Button title="Coba Demo Gratis" isPrimary onClick={onClickToDemo} />
        </div>
      </header>
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const { asPath, pathname } = router;
  const isHome = asPath === "/";
  const [isOpen, setOpen] = React.useState(false);
  const [isChangeLanguageMode, setIsChangeLanguageMode] = React.useState(false);
  const [searchTerm, setSearchTerm] = useSearchDebounce();

  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const onClickLogo = () => {
    router.push("/");
  };

  const onClickToDemo = () => {
    router.push("/demo");
  };

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onClickLanguage = () => {
    setIsChangeLanguageMode(true);
  };

  const onSearchLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos, "currentScrollPos");
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <NavMenuDesktop
        pathname={pathname}
        isHome={isHome}
        onClickLogo={onClickLogo}
        visible={visible}
        onClickToDemo={onClickToDemo}
      />
      <NavMenuMobile
        visible={visible}
        isOpen={isOpen}
        setOpen={setOpen}
        onClickLogo={onClickLogo}
        pathname={pathname}
        onClickLanguage={onClickLanguage}
        isChangeLanguageMode={isChangeLanguageMode}
        onSearchLanguage={onSearchLanguage}
        searchTerm={searchTerm as string}
        onClickToDemo={onClickToDemo}
      />
    </>
  );
}
