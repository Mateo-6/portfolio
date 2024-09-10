import React from "react";

// Type
import { ICertificate } from "./../type/global";

interface IProps {
  certificate: ICertificate;
}

export function CertificateCard(props: IProps) {
  const { certificate } = props;

  return (
    <div className="flex flex-row rounded-lg">
      <div className="pt-4 flex-shrink-0">
        <img src={certificate.img} alt="" className="w-16" />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal flex-auto w-auto">
        <a href={certificate.url} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-neutral-300">
            {certificate.name}
          </h5>
        </a>
        <p className="mb-3 font-normal dark:text-neutral-300">
          {certificate.company}
        </p>
        <p className="mb-2 font-bold tracking-tight hover:text-neutral-300 display-inline">
          <a href={certificate.url} target="_blank">
            See credential
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              className="ml-2 inline-block"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
}
