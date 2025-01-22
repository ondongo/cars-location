"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex  justify-start" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src="/images/about/car01.png"
              width={580}
              height={540}
              alt=""
            />
          </motion.div>

          <div className="flex-1 flex items-center xl:justify-between">
            <div className="xl:max-w-[580px]">
              <h2 className="h2">A propos</h2>
              <p className="text-lg text-gray-600 mb-[30px]">
                Notre entreprise de location de voitures s'engage à vous offrir
                une expérience de conduite exceptionnelle. Notre équipe dévouée
                est là pour vous accompagner et vous garantir un service
                personnalisé de première classe.
              </p>
              <div className="flex items-center gap-x-6 mb-10">
                {/* Stats here */}

                <div className="flex flex-col w-[100px]">
                  {/* Icons 1 */}
                  <MdOutlineDirectionsCar className="text-5xl text-accent" />
                  <div className="text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="upppercase text-[13px] font-semibold text-secondary">
                    types de <br />
                    voiture
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  {/* Icons 1 */}
                  <MdOutlineMapsHomeWork className="text-5xl text-accent" />
                  <div className="text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="upppercase text-[13px] font-semibold text-secondary">
                    Rental <br /> outlet
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  {/* Icons 1 */}
                  <MdOutlineBuildCircle className="text-5xl text-accent" />
                  <div className="text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="upppercase text-[13px] font-semibold text-secondary">
                    types de <br />
                    voiture
                  </div>
                </div>
              </div>
              <button className="hidden xl:block bg-accent hover:bg-accent rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]">
                Voir les voitures
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
