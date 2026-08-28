"use client";

import Image from "next/image";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function AboutIDCard() {
  return (
    <div className="id-card-wrapper">

      {/* Lanyard */}
      <div className="lanyard">
        <div className="lanyard-strap" />

        <div className="lanyard-ring">
          <div className="lanyard-hook" />
        </div>
      </div>

      {/* ID Card */}
      <div className="id-card">

        {/* Top decorative purple block */}
        <div className="id-purple-tab">
          ✦
        </div>

        {/* Header */}
        <div className="id-header">
          <div>
            <p className="id-university">
              COER UNIVERSITY
            </p>

            <p className="id-location">
              ROORKEE
            </p>
          </div>

          <div className="id-year">
            &apos;26
          </div>
        </div>

        {/* Small decorative line */}
        <div className="id-line" />

        {/* Profile */}
        <div className="id-profile">
          <div className="id-photo-ring">
            <div className="id-photo">
              <Image
                src="/assets/id-card/srashti.png"
                alt="Srashti Chauhan"
                fill
                priority
                sizes="180px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="id-name-container">
          <h3>
            SRASHTI CHAUHAN
          </h3>

          <div className="id-role">
            FULL STACK DEVELOPER
          </div>
        </div>

        {/* Information grid */}
        <div className="id-info-grid">

          <div className="id-info-item">
            <span className="id-info-label">
              UNIVERSITY
            </span>

            <span className="id-info-value">
              COER University
            </span>
          </div>

          <div className="id-info-item">
            <span className="id-info-label">
              LOCATION
            </span>

            <span className="id-info-value">
              Roorkee, India
            </span>
          </div>

          <div className="id-info-item">
            <span className="id-info-label">
              DEGREE
            </span>

            <span className="id-info-value">
              B.Tech CSE
            </span>

            <span className="id-info-small">
              2024 — 2028
            </span>
          </div>

          <div className="id-info-item">
            <span className="id-info-label">
              FOCUS
            </span>

            <span className="id-info-value">
              Full Stack
            </span>

            <span className="id-info-small">
              DSA · Open Source
            </span>
          </div>

        </div>

        {/* Achievement */}
        <div className="id-achievement">

          <div className="id-achievement-stamp">
            <span>
              NSOC&apos;26
            </span>

            <strong>
              RANK 39
            </strong>
          </div>

          <div className="id-achievement-text">
            Open Source
            <br />
            Contributor
          </div>

        </div>

        {/* Social Icons */}
        <div className="id-socials">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/srashtichauhan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="id-social linkedin"
          >
            <span>in</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SrashtiChauhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="id-social github"
          >
            <MarkGithubIcon size={21} />
          </a>

        </div>

        {/* Bottom message */}
        {/* <div className="id-footer">
          Let&apos;s build something amazing.
        </div> */}

        {/* Decorative bottom shapes */}
        <div className="id-bottom-shape id-bottom-shape-one" />
        <div className="id-bottom-shape id-bottom-shape-two" />

      </div>
    </div>
  );
}