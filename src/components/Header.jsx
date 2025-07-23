import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Logo + Nav */}
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.6,
              duration: 2.5,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-2 flex items-center justify-center text-black font-extrabold text-xl mr-3">
              KR
            </div>
            <span className="text-xl font-extrabold bg-gradient-2 bg-clip-text text-transparent">
              Kawshal Ram
            </span>
          </motion.div>

          {/* Navigation */}
          <div className="lg:flex hidden space-x-8">
            {["Home", "About Me", "Projects", "Experience", "Services", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    delay: 0.7 + index * 0.2,
                  }}
                  className="relative font-medium transition-colors duration-300 group"
                  href="#"
                >
                  <span className="bg-gradient-2 bg-clip-text text-transparent">
                    {item}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-2 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Divider Line Across Full Width */}
        <motion.div
          className="h-0.5 bg-gradient-2 mt-0 origin-center w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1.5 }}
          transition={{ duration: 1.9, ease: "easeInOut", delay: 1, bounceDamping:40,stiffness:100, }}
          style={{ transformOrigin: "center" }}
        />
      </div>
    </header>
  );
};

export default Header;
