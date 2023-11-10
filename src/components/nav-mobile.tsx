import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Twirl as Hamburger } from 'hamburger-react'
import { routes } from "../routes/routes";

//Create a responsive button to open and close a menu
//NavMobile component will remain hidden on larger screens

    // declared as a functional component
    export const NavMobile = () => {

        // isOpen keeps track of whether the menu is open or closed
        const [isOpen, setOpen] = useState(false);

        // useRef does not run until the component is re-rendered
        // ref is like a label that we attach to an element in the HTML,
        // In this case, it's used to reference the menu container
        const ref = useRef(null);

        // useClickAway (hook) listen for clicks on elements outside the component
        // and it sets the isOpen state to false, closing the menu
        useClickAway(ref, () => setOpen(false));
        
        return (
        
        // starts hidden because ref=null
        <div ref={ref} className="lg:hidden">

            {   /* toggled={useState(true)} , toggle={useState(false)} */   }
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />

            <AnimatePresence>
                {/* If isOpen is true(&&), a <div> is rendered with a list of links and icons */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b- border-b-white/20"
                    >
                        <ul className="grid gap-2">

                            {/* Iterate the routes array with .map */}
                            {routes.map((route, idx) => {
                                const { Icon, title, href } = route;
                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10
                                        }}
                                        key={title}
                                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                                    >
                                        <a
                                            // triggering the onClick event, setOpen change its state to false, and redirects to the indicated route.href
                                            onClick={() => setOpen((preview) => !preview)}
                                            className={
                                                "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                                            }
                                            href={href}
                                        >
                                            <span className="flex gap-1 text-lg">{title}</span>
                                            {/* remember that Icon is a component from a library*/}
                                            <Icon className="text-xl" />
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                        
                    </motion.div>
                )}
            </AnimatePresence>
        </div>


        );
    };