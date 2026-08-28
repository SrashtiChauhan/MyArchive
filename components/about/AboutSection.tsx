"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutIDCard from "./AboutIDCard";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {

  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });


      timeline
        .from(".about-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        })

        .from(".about-heading-line", {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
        }, "-=0.3")

        .from(".about-card", {
          opacity: 0,
          x: -100,
          rotate: -8,
          duration: 1.1,
          ease: "power4.out",
        }, "-=0.3")

        .from(".about-copy", {
          opacity: 0,
          x: 80,
          duration: 1,
          ease: "power4.out",
        }, "-=0.7")

        .from(".about-stat", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        }, "-=0.4");

    }, sectionRef);

    return () => ctx.revert();

  }, []);


  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >

      <div className="about-inner">

        {/* Section heading */}

        <div className="about-heading">

          <p className="about-eyebrow">
            01 — ABOUT ME
          </p>

          <h2>

            <span className="about-heading-line">
              THE PERSON
            </span>

            <span className="about-heading-line about-heading-script">
              BEHIND THE CODE.
            </span>

          </h2>

        </div>


        {/* Main content */}

        <div className="about-grid">

          {/* LEFT — ID CARD */}

          <div className="about-card">

            <AboutIDCard />

          </div>


          {/* RIGHT — CONTENT */}

          <div className="about-copy">

            <p className="about-intro">
              I&apos;m Srashti Chauhan ~
              a Full Stack Developer and
              3rd-year B.Tech CSE student
              at COER University, Roorkee.
            </p>


            <p className="about-description">
              I love turning ideas into
              interactive, useful web
              experiences. From crafting
              interfaces and UI designs to
              building APIs, databases and
              application logic, I enjoy
              working across the stack.
            </p>


            <p className="about-description">
              My current stack revolves around
              React, TypeScript, Tailwind CSS,
              Node.js and MongoDB, while I&apos;m
              currently diving deeper into
              Next.js.
            </p>


            {/* Information */}

            <div className="about-details">

              <div className="about-detail">

                <span>
                  CURRENTLY
                </span>

                <strong>
                  3rd Year · B.Tech CSE
                </strong>

                <small>
                  COER University, Roorkee
                </small>

              </div>


              <div className="about-detail">

                <span>
                  BUILDING WITH
                </span>

                <strong>
                  React · TypeScript · Next.js
                </strong>

                <small>
                  Node.js · MongoDB · Tailwind CSS
                </small>

              </div>


              <div className="about-detail">

                <span>
                  EXPLORING
                </span>

                <strong>
                  DSA · Open Source · AI/ML
                </strong>

              </div>


              <div className="about-detail">

                <span>
                  I ENJOY
                </span>

                <strong>
                  UI Design · Web Applications
                </strong>

              </div>

            </div>


            {/* Stats */}

            <div className="about-stats">

              <div className="about-stat">

                <strong>
                  39
                </strong>

                <span>
                  NSOC &apos;26
                  <br />
                  RANK
                </span>

              </div>


              <div className="about-stat">

                <strong>
                  3rd
                </strong>

                <span>
                  YEAR
                  <br />
                  B.TECH CSE
                </span>

              </div>


              <div className="about-stat">

                <strong>
                  ∞
                </strong>

                <span>
                  THINGS
                  <br />
                  TO BUILD
                </span>

              </div>

            </div>


            {/* Closing statement */}

            <div className="about-closing">

              <span>
                currently building,
              </span>

              <strong>
                learning & contributing.
              </strong>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}