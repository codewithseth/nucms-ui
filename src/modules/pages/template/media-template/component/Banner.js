"use client";

import { Banner } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";

export function BannerComponent({ bgImg, context, link, linkContext }) {
  return (
    <Banner>
      <div className="flex w-full justify-between bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <section
          class="ad-banner rounded-md bg-center bg-no-repeat bg-gray-300 bg-blend-multiply bg-fill"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="mx-auto flex items-center justify-start h-full">
            <p className="flex items-center text-sm font-bold text-gray-900 dark:text-gray-400 px-8">
              {/* <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
                <MdPercent className="h-4 w-4" />
              </span> */}
              <span className="[&_p]:inline">
                {context}&nbsp;
                <a
                  href={link}
                  className="ml-0 flex items-center text-sm font-medium text-blue-200 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
                >
                  {linkContext}
                  <HiArrowRight className="ml-2" />
                </a>
              </span>
            </p>
          </div>
        </section>
        {/* <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton> */}
      </div>
    </Banner>
  );
}
