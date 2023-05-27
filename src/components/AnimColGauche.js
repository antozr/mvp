import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import Hirondelle from "../assets/img/svg/hirondelle.svg";


gsap.registerPlugin(ScrollTrigger, Timeline);

function AnimColGauche() {
   
    const boxRef = useRef();
    //const partNoir = useRef()

    useEffect(() => {
        // console.log(boxRef);
        
        if (window.innerWidth > 900){
            // let tl = gsap.timeline({

            //     scrollTrigger: {
            //         trigger: "#thirdCircle",
            //         markers: true,
            //         start: "top center",
            //         end: "+=1000",
            //         scrub: true,
            //         toggleActions: 'play none reverse none',
            //     }
            // });
            let tl = gsap.timeline({
                repeat: -1
            });
            tl.to("#Calque_2", {
                duration:2,
                x: 400,
                y: 150
    
            })
                .to('.blackPart ', {
                    fill: '#000',
    
                }, ">")
                .to("#Calque_2", {
                    rotateY: 180,
                    
                }, ">")
                .to("#Calque_2", {
                    duration:2,
                    x: 200,
                    y: 350,
                    rotate:29
                    
                }, ">")
                .to("#ombreAile",{
                    fill:"#F5D850",
                    stroke: "none"
                },"<")
    
                .to(".borsAile", {
                    duration:1,
                    fill:"#EF8C22"
                    
                }, ">")
                .to(".plume", {
                    duration:0.5,
                    fill:"#F5D850"
                    
                }, ">")
                .to(".ventre", {
                    duration:0.5,
                    fill:"#E41D29",
                    
                }, "<")
                .to("#Calque_2", {
                    duration:2,
                    rotateY:0,
                    x: 450,
                    y: 650,
                    rotate:-29
                    
                }, ">")
                .to("#ombreAile",{
                    fill:"linear-gradient(218.7deg, rgba(0, 0, 0, 0.8) 14.94%, rgba(0, 0, 0, 0) 109.02%)"
                },"<")
        }


       
    }, [])



    return (
        <div ref={boxRef} id="thirdCircle">

            { window.innerWidth <= 900 ? <><img src={Hirondelle} alt="Une illustration d'hirondelle dans un style old-school." className="sect__imgDecor " /></> : <><svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.178 279.574" className="sect__imgHirondelle">
                <g id="hirondelle">
                    <path id="becbas" className="blackPart" d="m234.288,245.628l24.096-.447c-4.512-4.383-10.395-7.719-14.553-8.745-4.021.766-11.848,6.547-9.543,9.191Z" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                    <path id="becHaut" className="blackPart" d="m236.403,253.805c5.314-.248,11.398-2.04,15.246-2.656-4.128-1.511-9.636-3.907-11.912-5.617l-5.449.096c-1.58,2.358-.497,6.536,2.115,8.177Z" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                    <path id="ventre" className='ventre' d="m100.362,171.181c22.188,6.142,53.037,32.822,82.128,67.745h5.362c22.365-18.795,40.244-21.168,51.83-.511-5.865,5.992-6.777,10.469-3.064,13.532-9.958,9.548-21.535,17.38-34.979,23.234-27.286,7.876-47.621-4.215-63.686-28.569-3.037-4.605-5.168-9.758-6.318-15.153-4.705-22.064-17.848-42.867-31.273-60.278Z" fill="#e41d29" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                    <path className="" d="m227.807,240.677l-9.933-1.157c.209-5.325,3.769-9.469,11.169-10.722,2.31,1.872,4.028,3.619,5.573,5.496l-6.809,6.383Z" fill="#fff" />
                    <path id="ombreVentre" className='ventre' d="m168.399,272.309c-6.438-6.848-14.974-20.084-13.818-23.667.058-.179-.004-.381-.135-.486l-21.849-17.476c-.288-.231-.635.144-.502.532,10.564,30.884,36.54,41.348,36.303,41.097Z" />
                    <ellipse className="blackPart" cx="229.368" cy="236.276" rx="3.689" ry="4.843" transform="translate(-28.11 441.558) rotate(-84.414)" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
                    <path className="blackPart" d="m229.327,229.115c-6.885,1.573-8.426,4.147-10.816,10.472,0,0-1-.014-1-.014-1.982-5.053,1.282-11.595,6.924-12.18,1.766-.216,3.474.034,4.984.726l-.091.996h0Z" fill="#1d1d1c" />
                    <g id="ailesBas">
                        <path id="plume" className='plume'  d="m268.339,137.103c2.339-47.582,18.319-81.331,47.804-106.342.081-.069.008-.195-.09-.155-24.977,10.451-53.831,22.842-55.629,95.007l.766,32.681,7.149-21.191Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="plume-2" className='plume' data-name="plume" d="m247.658,172.082l-5.106-25.277c-1.338-37.406,6.75-57.435,19.404-57.574-3.755,21.517-3.754,45.391-1.377,70.756l-12.921,12.095Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="plume-3" className='plume' data-name="plume" d="m237.446,180.124l-5.362-19.532c-2.517-36.857,4.471-48.016,11.234-49.404-3.055,17.998-.516,40.494,5.106,62.809l-10.979,6.128Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="plume-4" className='plume' data-name="plume" d="m223.914,197.231l-4.468-18.638c-2.957-33.356,2.69-41.793,10.34-44.426-2.05,17.383,1.304,34.397,6,51.319l-11.872,11.745Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="plume-5" className='plume' data-name="plume" d="m213.275,209.869l-6.213-13.404c-5.456-35.471,1.283-41.434,9.83-43.021-1.308,14.768,1.976,28.327,5.064,46.213l-8.681,10.213Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="plume-6" className='plume' data-name="plume" d="m197.105,215.486l-3.319-22.723c-1.819-13.683,2.734-22.01,10.723-27.447l6.128,44.936-13.532,5.234Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="borsAile" className="borsAile" d="m228.063,211.975l30.235-28.442c1.412-1.328,2.633-2.853,3.601-4.532,12.987-22.535,9.082-33.203,6.526-48.323-1.889,9.522-4.04,20.439-7.845,29.309-2.172,5.063-5.675,9.425-10.002,12.834-15.096,11.895-26.885,25.602-34.451,38.069l11.936,1.085Z" fill="#ef8c22" stroke="#000" stroke-miterlimit="10" stroke-width="3" />
                        <path id="noirAiles" className="blackPart" d="m268.935,132.422c-3.361,15.826-7.966,30.304-16.511,40.511-13.916,10.682-26.113,24.332-38.128,38.298l-3.915,2.383c12.933-41.209,36.851-74.511,64.851-116.085l-6.298,34.894Z" stroke="#000" stroke-miterlimit="10" />
                        <path id="ombreAile" d="m210.491,212.593l63.826-111.695c.063-.11-.088-.218-.173-.123-34.898,38.689-66.105,77.069-71.061,113.242-.01.073.056.134.128.119l7.209-1.491c.03-.006.055-.025.071-.051Z" stroke="#000" stroke-miterlimit="10" />
                    </g>
                    <path id="dos" className="blackPart" d="m246.349,236.893c1.802-29.4-28.238-40.795-57.646-18.818-32.41-22.793-49.957-48.936-67.83-71.915-22.295-25.707-35.942-61.844-45.447-102.979,5.996,38.304,16.615,75.677,33.657,111.767.885,1.874-.1,4.141-2.109,4.651-20.134,5.108-65.054-14.161-106.782-30.29l101.957,42.383c24.589,6.751,52.031,35.224,80.34,67.234h5.362c21.615-16.774,38.383-22.723,51.66-.936,2.569-.964,3.896-2.343,6.435-.888.171.098.39-.012.402-.208Z" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                    <g id="aile">
                        <path id="plume-7" className='plume' data-name="plume" d="m132.634,4.165c-2.339,37.442,23.825,72.917,50.408,103.271l8.383,26.553C153.508,113.36,113.04,25.636,128.913,2.89c1.186-1.7,3.85-.793,3.721,1.275Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m137.894,70.585c-4.537-9.742-6.716-8.324-7.149,1.362-2.723,21.617,35.96,52.027,66.213,80.17-.795-7.909.502-3.383-5.532-18.128-11.439,2.739-29.077-17.762-53.532-63.404Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m139.979,108.075c10.995,31.875,33.832,43.667,55.617,56.468l1.191-12c-21.308-16.963-43.199-34.067-52.681-48.17-5.447-3.362-5.702-.213-4.128,3.702Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m194.149,166.075c-18.203-13.764-37.174-27.866-43.915-36.596-.256,11.663,5.512,24.493,22.894,39.574l15.149,9.702,5.872-12.681Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m181.639,189.479c-9.232-2.086-19.624-10.207-32.085-29.106-3.234-7.957-.756-10.839,2.894-12.681,8.615,12.7,20.939,22.863,34.638,32.085l-5.447,9.702Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m149.894,161.99c-7.374-2.903-8.59.703-6.553,7.745,6.093,10.123,19.346,21.969,33.191,33.957l5.106-12.596c-13.675-8.936-26.696-18.034-31.745-29.106Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m175.937,206.245c-15.314-3.665-29.776-8.141-38.723-17.872-3.42-9.437-3.407-15.71,3.745-15.404,14.019,18.238,25.384,25.18,36,28.936l-1.021,4.34Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m159,201.734c-7.787-1.458-14.938-5.803-21.532-12.681-5.893-1.272-9.354.393-5.702,10.638,5.589,11.331,18.764,14.484,29.532,10.894l12.851-.34,1.532-4.851-16.681-3.66Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m160.362,210.075c-11.129,2.971-20.275,1.951-26.213-5.532-24.837,5.909.311,22.318,23.234,16.766l7.83-4.17-.34-6.809-4.511-.255Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume'd="m165.894,227.351c-6.378,7.346-14.445,10.52-24.681,8.34-15.149-2.825-20.522-17.949-10.043-16,17.299,7.515,25.493,3.481,33.787-.426l.936,8.085Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path className='plume' d="m176.022,241.734c-4.847,9.457-13.191,9.032-25.351,7.755-10.376-.923-14.232-4.772-11.696-10.5.402-.909,1.281-1.508,2.275-1.541,18.731-.612,29.829-9.766,29.58-10.097-.255-.34,10.298,10.043,10.298,10.043l-5.106,4.34Z" fill="#f5d850" stroke="#000" stroke-miterlimit="10" stroke-width="4" />
                        <path id="noirAiles" className="blackPart" d="m185.979,111.521c2.809,18.128,17.872,35.234,11.574,54.213-25.532,46.043-25.535,59.571-19.383,66.021l-5.723,4.872c-18.171-12.26-12.466-43.452-2.043-78.383,2.981-25.831.215-51.622-9.957-77.362l25.532,30.638Z" stroke="#000" stroke-miterlimit="10" />
                        <path className="borsAile" d="m169.213,88.862c20.219,19.737,40.596,38.809,43.149,66.192-2.364,16.538-20.211,31.799-34.638,60.106-1.617-17.915,10.391-32.201,17.202-46.033,3.936-7.993,4.868-17.165,2.419-25.731-3.588-12.549-9.924-25.855-13.579-30.789l-14.553-23.745Z" fill="#ef8c22" stroke="#000" stroke-miterlimit="10" stroke-width="3" />
                        <path id="ombreAile" data-name="ombreAile" d="m160.423,82.37c.005-.274.39-.325.471-.063,9.462,30.243,16.4,60.727,5.402,92.924-8.53,23.585,2.017,42.613,13.021,61.532l-7.915,10.213c-23.896-18.207-12.161-96.785-10.98-164.606Z" stroke="#000" stroke-miterlimit="10" />
                    </g>
                </g>
            </svg></>}
        </div>
    )
}

export default AnimColGauche