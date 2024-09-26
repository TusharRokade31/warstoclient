"use client";
import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import logo from '../../src/images/logo.png'
import Warsto from '../../src/images/warsto.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IoMdHeart } from "react-icons/io";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CiUser } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import { CiMenuFries } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  Tooltip,
} from "@material-tailwind/react";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { getCart } from "@/store/cartSlice";
import SearchBar from "./SearchBar";
import CartSidebar from "../cart/CartSidebar";
import { getwishlist } from "@/store/wishlistSlice";
import { getCategories } from "@/store/categoriesSlice";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
// import { Link, useLocation } from "react-router-dom";

const Appbar = () => {
  //   const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useRouter();
  const location = usePathname();

  const { openCart, openCartDrawer, closeCartDrawer } = useAuth();

  // const [openCart, setCartOpen] = useState(false);
  // const openCartDrawer = () => {
  //   if (location !== "/cart") {
  //     setCartOpen(true);
  //   }
  // };
  // const closeCartDrawer = () => setCartOpen(false);

  const [activeLink, setActiveLink] = useState("");
  // const [value, setvalue] = useState("flex");
  // const [showNavbar, setShowNavbar] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  const {showNavbar,setvalue,Reqvalue} = useAuth()
  const [currentUser, setCurrentUser] = useState(null);

  // const scrollThreshold = 30;

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      dispatch(getCart());
      dispatch(getwishlist());
      dispatch(getCategories());
      setCurrentUser(user);
    }
  }, [dispatch]);

  useEffect(() => {
    if (location == "/cart") {
      setActiveLink("/cart");
      closeCartDrawer();
    } else if (location == "/wishlist") {
      setActiveLink("/wishlist");
    } else if (location == "/contact-us") {
      setActiveLink("/about");
    } else if (location == "/about") {
      setActiveLink("/about");
    } else if (location == "/") {
      setActiveLink("");
    } else if (location == "/collection") {
      setActiveLink("/collection");
    } else if (location == "/collection/products") {
      closeCartDrawer();
    }
  }, [location]);

  const data = useSelector((state) => state.cartss?.cartitems?.items);
  const collectionMenu = useSelector((state) => state.categoriess?.Collections);
  const Wishlistdata = useSelector(
    (state) => state.wishlist?.products?.products
  );

  function logout() {
    localStorage.clear();
    setCurrentUser(null);
    navigate.push("/");
  }

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
  //       if (currentScrollY > lastScrollY) {
  //         setShowNavbar(false);
  //       } else {
  //         setShowNavbar(true);
  //       }
  //       setLastScrollY(currentScrollY);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    <>
      <div
        className={`drop-shadow-md fixed top-0 w-full bg-white z-20 transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className={`${Reqvalue} lg:text-sm text-xs items-center justify-center bg-black text-white py-3`}>
          Request Your Free Appointment With Our Design Experts
          <RxCross2 className="ms-10" onClick={()=>setvalue('hidden')} />
        </div>
        <div className="flex flex-row justify-around lg:justify-center items-center">
          <Link href={"/"}>
            <div className="p-4 text-lg lg:w-40 w-32 lg:me-5 sm:me-0">
            <Image src={Warsto} alt="warSto" />
            </div>
            
          </Link>
          <SearchBar />
          <div className="hidden lg:flex justify-center">
            <ul className="xl:flex mx-14 justify-center font-medium text-sm">
              <Link
                href={"/"}
                className={`nav-link-ltr nav-link ${
                  activeLink === "/" ? "active" : ""
                }`}
              >
                <li>Home</li>
              </Link>
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                allowHover
              >
                <MenuHandler>
                  <Link
                    href={"/collection"}
                    className={`nav-link-ltr nav-link ${
                      activeLink === "/collection" ? "active" : ""
                    }`}
                  >
                    <li>Collection</li>
                  </Link>
                </MenuHandler>
                <MenuList className="mb-5">
                  
                  {collectionMenu?.map((collection) => {
                    return (
                      <Link
                        key={collection?.name}
                        href={`/collection/${collection?.name}`}
                      >
                        <MenuItem className="hover:border-none">
                          {collection?.name}
                        </MenuItem>
                      </Link>
                    );
                  })}
                </MenuList>
              </Menu>
              <Link
                href={"/imde"}
                className={`nav-link-ltr nav-link ${
                  activeLink === "/imde" ? "active" : ""
                }`}
              >
                <li>IMDE</li>
              </Link>
            </ul>
          </div>

          <div className="p-4 me-0 flex items-center">
            <Tooltip
              content={Wishlistdata?.length}
              className="w-4 h-4 font-bold bg-[#ef4665] inline-flex mt-4 ms-3 p-0 justify-center text-xs items-center rounded-full"
              placement="top-start"
            >
              <Link href={"/wishlist"}>
                {Wishlistdata?.length == 0 ? (
                  <FavoriteBorderIcon  className="text-2xl  xxs:me-2" />
                ) : (
                  <FavoriteIcon sx={{ color: '#ef4666' }}  className="text-2xl  xxs:me-2" />
                )}
              </Link>
            </Tooltip>

            <Menu allowHover={true}>
              <MenuHandler>
                <div>
                  <AccountCircleIcon sx={{color:"#ef4665"}}  className="text-2xl mx-0 lg:mx-2" />
                </div>
                {/* <Avatar
                  variant="circular"
                  alt="tania andrew"
                  className="cursor-pointer"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                /> */}
              </MenuHandler>
              <MenuList className="mt-2">
                <Link href={"/user-profile/user-info"} className="border-none	">
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                        fill="#90A4AE"
                      />
                    </svg>

                    <Typography variant="small" className="font-medium">
                      Account
                    </Typography>
                  </MenuItem>
                </Link>

                {currentUser ? (
                  <>
                    <hr className="my-2 border-blue-gray-50" />
                    <MenuItem
                      onClick={logout}
                      className="flex items-center gap-2 "
                    >
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                          fill="#90A4AE"
                        />
                      </svg>
                      <Typography variant="small" className="font-medium">
                        Sign Out
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  ""
                )}
              </MenuList>
            </Menu>
            {!currentUser ? (
              <Link href={"/signin"}>
                <p className="flex items-center ms-4 xxs:ms-2">Login</p>
              </Link>
            ) : (
              ""
            )}
            {/* <Link href={"/cart"}> */}
            <div onClick={openCartDrawer} className="relative  cursor-auto">
              <ShoppingCartOutlinedIcon className="text-2xl me-5 xxs:ms-2" />

              {currentUser ? (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#ef4665] border-2 border-white rounded-full bottom-3 left-5 dark:border-gray-900">
                  {data?.length}
                </div>
              ) : (
                ""
              )}
            </div>
            {/* </Link> */}
            <CiMenuFries
              onClick={openDrawer}
              className="text-xl block lg:hidden  xxs:ms-2"
            />
          </div>
        </div>
      </div>

      <Drawer
        open={openCart}
        size={350}
        overlay={false}
        placement="right"
        onClose={closeCartDrawer}
      >
        <div className="mb-2 p-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Your Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeCartDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <hr />

        <CartSidebar data={data} />
      </Drawer>

      <Drawer
        placement="right"
        open={open}
        overlay={false}
        onClose={closeDrawer}
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            LOGO
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <ListItem
            onClick={() => {
              navigate.push("/");
              setOpen(false);
            }}
          >
            Home
          </ListItem>

          <ListItem
            onClick={() => {
              navigate.push("/collection");
              setOpen(false);
            }}
          >
            Collection
          </ListItem>

          <ListItem
            onClick={() => {
              navigate.push("/imde");
              setOpen(false);
            }}
          >
            IMDE
          </ListItem>
          <ListItem
            onClick={() => {
              navigate.push("/about");
              setOpen(false);
            }}
          >
            About
          </ListItem>
          <ListItem
            onClick={() => {
              navigate.push("contact-us");
              setOpen(false);
            }}
          >
            Contact
          </ListItem>
          <ListItem
            onClick={() => {
              navigate.push("/careers");
              setOpen(false);
            }}
          >
            Careers
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Appbar;
