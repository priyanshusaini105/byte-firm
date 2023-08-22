'use client'
import React, { ChangeEvent, FC } from "react";

interface Props{
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void
  className:string;
  isAsideOpen:boolean;
}

export const Hamburgur:FC<Props> = ({isAsideOpen,className,onChange}) => {

  return (
    <>
      <style jsx>
        {`
          label {
            cursor: pointer;
            -moz-transform: scale(-.6, .6);
            -webkit-transform: scale(-.6, .6);
            -o-transform: scale(-.6, .6);
            -ms-transform: scale(-.6, .6);
            transform: scale(-.6, .6);
          }
          label span {
            height: 7px;
            margin: 7px 0;
          }
          span:nth-of-type(1) {
            width: 50%;
          }
          span:nth-of-type(2) {
            width: 100%;
          }
          span:nth-of-type(3) {
            width: 75%;
          }
          input[type="checkbox"] {
            display: none;
          }
          input[type="checkbox"]:checked ~ span:nth-of-type(1) {
            transform-origin: bottom;
            transform: rotatez(45deg) translate(8px, 0px);
          }
          input[type="checkbox"]:checked ~ span:nth-of-type(2) {
            transform-origin: top;
            transform: rotatez(-45deg);
          }
          input[type="checkbox"]:checked ~ span:nth-of-type(3) {
            transform-origin: bottom;
            width: 50%;
            transform: translate(30px, -11px) rotatez(45deg);
          }
        `}
      </style>
      <label htmlFor="check" className={"flex fixed flex-col z-100 w-16 right-0 top-4 "+className} >
        <input type="checkbox" id="check"  checked={isAsideOpen} onChange={onChange} />
        <span className='hamburgur-span'/>
        <span  className='hamburgur-span'/>
        <span  className='hamburgur-span'/>
      </label>
    </>
  );
};
