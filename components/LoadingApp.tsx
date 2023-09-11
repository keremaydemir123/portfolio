"use client";
import { useState } from "react";
import Typing from "@/components/Typing";
import { AnimatePresence, motion } from "framer-motion";

import { useAppContext } from "@/contexts/AppProvider";
import Avatar from "@/components/Sidebar/Avatar";
import { container, item } from "@/constants/motion";

const TYPING_TEXT = ["Home", "About", "Skills", "Projects", "Contact"];

function LoadingApp() {
  const { isIntroLoaded, isReady, setIsIntroLoaded } = useAppContext();
  const [nextAnimation, setNextAnimation] = useState(0);

  if (isReady) return null;
  return (
    <div className="absolute inset-0 flex md:flex-row flex-col gap-4 items-center justify-center">
      <AnimatePresence>
        {!isIntroLoaded && (
          <motion.div
            key="avatar"
            exit={{
              opacity: 0,
              y: -1000,
            }}
          >
            <Avatar />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isIntroLoaded && (
          <motion.div
            exit={{
              opacity: 0,
              y: 1000,
            }}
          >
            <div
              key={"code-mockup"}
              className="mockup-code bg-base-200 text-base-content overflow-hidden"
            >
              <pre data-prefix="$">
                <code>npm i keremaydemir.com</code>
              </pre>
              <pre data-prefix=">" className="text-warning font-bold">
                <code>installing...</code>
              </pre>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                data-prefix="$"
                className="text-info-content flex flex-col gap-2"
              >
                {TYPING_TEXT.map((text, index) => {
                  let cb = () => {
                    setNextAnimation(index + 1);
                  };
                  if (index === TYPING_TEXT.length - 1) {
                    cb = () => setIsIntroLoaded(true);
                    text = "Done!";
                  }

                  if (index === nextAnimation)
                    return (
                      <motion.pre
                        variants={item}
                        data-prefix=">"
                        key={index}
                        className="text-secondary font-bold"
                      >
                        <code>
                          <Typing text={[text, 200]} cb={cb} />
                        </code>
                      </motion.pre>
                    );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoadingApp;
