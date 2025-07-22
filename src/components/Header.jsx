import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="absolute w-full z-30 transition-all duration-300">
      <div
        className="container mx-auto px-2 sm:px-6 lg:px-4 
        flex place-items-center justify-between h-16 md:h-20"
      >
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div
            className="h-10 w-10 rounded-xl
            bg-gradient-to-tr from-[#87F5F5] via-[#F042FF] to-[#7226FF]
            flex items-center justify-center 
            text-black font-bold text-xl mr-3"
          >
            KR
          </div>

          <span
            className="text-xl font-semibold 
            bg-gradient-to-tr from-[#F042FF]  to-[#7226FF] 
            bg-clip-text text-transparent"
          >
            Kawshal Ram
          </span>
        </motion.div>

        {/* Navigation Bar */}
        <nav className="lg:flex hidden space-x-8">
          {[
            "Home",
            "About Me",
            "Projects",
            "Services",
            "Experience",
            "Contact",
          ].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 100,
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative font-medium transition-colors duration-300 group 
              bg-gradient-to-tr from-[#F042FF]  to-[#7226FF] 
              bg-clip-text text-transparent"
              href="#"
            >
              {item}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5
                bg-gradient-to-r from-[#FFE5F1] via-[#E8C6FF] to-[#C9F6FF]
                group-hover:w-full transition-all duration-300"
              ></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Icons -Desktop*/}
        <div className="ms:flex hidden items-center space-x-4">
          <a href="#">
            
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
