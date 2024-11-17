"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [showMenu, setShowMenu] = useState<boolean>(false);


  return(
    <>

      <div className="flex w-full bg-[rgb(4,78,131)] justify-around items-center h-20 fixed ">

      {/* <img className="w-20 mt-16" src="picture/logo.9ff76f62.png" alt="" /> */}
      <Image src={"/picture/logo.9ff76f62.png"} alt="gover sindh logo" width={398} height={38} className="w-20 mt-16"/>

      <h3 className="text-[rgb(185,216,243)] text-xl font-bold mt-3 [@media(max-width:450px)]:hidden">Tuition Free Education Program on Latest Technologies</h3>
      <h3 className="text-[rgb(185,216,243)] text-xl font-bold mt-3 hidden [@media(max-width:450px)]:block ">Tuition Free  Program </h3>

      <ul className={`flex block justify-between w-96  [@media(max-width:450px)]:flex-col [@media(max-width:450px)]:relative [@media(max-width:450px)]:top-44  [@media(max-width:450px)]:bg-white [@media(max-width:450px)]:left-8 [@media(max-width:450px)]:h-72   ${showMenu  ? "[@media(max-width:450px)]:block" : " [@media(max-width:450px)]:hidden"}`}>
        <li className="text-white text-base cursor-pointer [@media(max-width:450px)]:text-black [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:font-bold">Home</li>
        <li className="text-white text-base [@media(max-width:450px)]:text-black [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:font-bold"> <a href="https://www.governorsindh.com/apply">Apply</a></li>
        <li className="text-white text-base [@media(max-width:450px)]:text-black [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:font-bold"><a href="https://www.governorsindh.com/jobs">Jobs</a></li>
        <li className="text-white text-base [@media(max-width:450px)]:text-black [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:font-bold"> <a href="https://www.governorsindh.com/result">Result</a></li>
        <li className="text-white text-base cursor-pointer [@media(max-width:450px)]:text-black [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:font-bold">Courses</li>
      </ul>

      <Image src={"/picture/moroption.PNG"} alt="more" width={35} height={35} className="hidden cursor-pointer [@media(max-width:450px)]:block " onClick={() =>         setShowMenu(!showMenu)   }/>


      </div>

      <div className=" flex pt-20 [@media(max-width:450px)]:h-[82.8rem] [@media(max-width:450px)]:flex-col"style={{
      backgroundImage: " url('/picture/2222.jfif')",
      backgroundRepeat: "no-repeat",
      backgroundSize: " 100% 100%",
      }}>

        <div className="w-6/12 h-[40rem]  [@media(max-width:450px)]:w-full [@media(max-width:450px)]:h-[38.5rem] [@media(max-width:450px)]:text-center">
                <h1 className="text-[rgb(4,78,131)] ml-16  text-6xl pt-20 font-bold [@media(max-width:450px)]:pt-12 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:text-4xl">Governor Sindh</h1>
                <p className="text-[rgb(4,78,131)] ml-16  text-4xl pt-1 font-sans [@media(max-width:450px)]:text-3xl [@media(max-width:450px)]:ml-0">Kamran Khan Tessori</p>
                <h2 className="text-[rgb(46,182,232)] ml-16  text-5xl pt-10 font-bold [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:text-3xl">Certified Cloud <br/> Applied Generative AI <br />  Engineer (GenEng)</h2>
                <h3 className="text-[rgb(4,78,131)] text-2xl  mt-5 font-bold ml-16 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:text-xl">Earn up to $5,000 / month <br /></h3>
                <h3 className="text-[rgb(4,78,131)] text-2xl font-bold ml-16 mt-4 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:text-xl">Now admissions are open in <br /> Hyderabad</h3>

                
            <div className="c3 flex h-16 [@media(max-width:450px)]:flex-col ">
                <div className="apply"> <a href="https://www.governorsindh.com/apply"><button className="border-2 border-[rgb(4,78,131)] rounded-md bg-[rgb(4,78,131)] w-48 h-14 ml-16 mt-8 hover:translate-x-[10px] hover:transition-transform duration-200 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:ml-0"><h4 className="text-white text-center font-medium text-xl"> Applt Now </h4></button></a></div>
                <div className="num ml-20 mt-6 [@media(max-width:450px)]:ml-0"> <h2 className="text-center text-[rgb(4,78,131)] text-3xl font-bold">562,143</h2>  <h5 className="text-xs text-[rgb(4,78,131)] font-semibold">Accepted Applications</h5> </div>

            </div>
        </div>

        <div className=" w-6/12 h-[40rem]  [@media(max-width:450px)]:w-full">
        <Image src={"/picture/goverenor.png"} alt="" width={400} height={400} className="w-[41.7rem] h-[39.5rem]"></Image>

        </div>
  
      </div>



      <div className="w-full  text-center place-items-center ">

        <div className="w-11/12 ">
            <h1 className="handing2 text-center text-3xl font-bold text-[rgb(4,78,131)] mt-16 [@media(max-width:450px)]:text-2xl">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur</h1>
            <h1 className="handing3 text-center text-3xl font-bold text-[rgb(4,78,131)] mb-12 [@media(max-width:450px)]:text-2xl">Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        </div>

        <div className="w-11/12 ">
        <p className=" text-xl text-justify [@media(max-width:450px)]:text-base">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing 
          infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs 
          trained in this program will win by automating work typically  outsourced to employees, by directly connecting to customers by 
          eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur 
          businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the 
           ultra-lean business model and work independently and will not need to hire employees or other team members
          </p>

        </div>

        <div className="w-11/12 flex justify-between mt-12 [@media(max-width:450px)]:flex-col ">
        <Image src={"/picture/s4437.jpg"} alt={""} width={350} height={300} className="  w-[32%] h-72 rounded-xl shadow-xl shadow-black [@media(max-width:450px)]:w-[98%]  [@media(max-width:450px)]:mb-8"></Image>
        <Image src={"/picture/imageWebsite2.a102c7b5.jpg"} alt={""} width={350} height={300} className=" w-[32%] h-72 rounded-xl shadow-xl shadow-black [@media(max-width:450px)]:w-[98%]  [@media(max-width:450px)]:mb-8"></Image>
        <Image src={"/picture/imageWebsite3.b845fe78.jpg"} alt={""} width={350} height={300} className=" w-[32%] h-72 rounded-xl shadow-xl shadow-black [@media(max-width:450px)]:w-[98%]"></Image>
        </div >

        <div className="w-11/12 flex mt-16  [@media(max-width:450px)]:flex-col  ">
          <div id="img1" className="w-6/12 h-[30rem]  [@media(max-width:450px)]:w-[98%]  [@media(max-width:450px)]:h-80 [@media(max-width:450px)]:mb-8">

          </div>

          <div id="img2" className="w-6/12 h-[30rem]  [@media(max-width:450px)]:w-[98%]  [@media(max-width:450px)]:h-80">

          </div>
        </div>

        <div className="w-11/12 mt-14">
             <h1 className=" text-[rgb(4,78,131)]  text-5xl font-bold text-left [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:text-center" >Core Courses Sequence</h1>
          <div className="w-10/12 flex  mt-7 justify-between [@media(max-width:450px)]:w-full [@media(max-width:450px)]:flex-col">   
            <div className="c5-1 w-[30%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:h-[18rem]"> <Link href={"https://www.governorsindh.com/compulsory/1 "} > <Image src={"/picture/programming_fundamentals.49cca4e9.jpg"} alt="" width={400} height={400} className="rounded-lg"></Image> <h4 className="text-xl font-semibold mt-3">Programming Fundamentals</h4></Link> </div>
            <div className="c5-1 w-[30%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-8 [@media(max-width:450px)]:h-[18rem]"> <Link href={"https://www.governorsindh.com/compulsory/2"} > <Image src={"/picture/nextjs.3dff0f70.jpg"} alt="" width={400} height={400} className="rounded-lg"></Image> <h4 className="text-xl font-semibold mt-3">Web2 Using NextJS</h4>  </Link> </div>
            <div className="c5-1 w-[30%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-8 [@media(max-width:450px)]:h-[16.3rem]"> <Link href={"https://www.governorsindh.com/compulsory/3"} > <Image src={"/picture/s4437.jpg"} alt="" width={400} height={400} className="rounded-lg h-52"></Image> </Link> <h4 className="text-xl font-semibold mt-3">Earn as You Learn</h4>  </div>
          </div>
        </div>


        <div className="w-11/12 mt-14 ">
             <h1 className=" text-[rgb(4,78,131)]  text-5xl font-bold text-left [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:text-center" >Advanced Courses</h1>
          <div className="w-full flex   mt-7 justify-between [@media(max-width:450px)]:flex-col">   
            <div className="c5-2 w-[22%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:h-[19.9rem]"> <Link href={"https://www.governorsindh.com/tracks/ai/4"} > <Image src={"/picture/AI.39397d24.jpg"} alt="" width={400} height={400} className="rounded-lg"></Image> <h4 className="text-xl font-semibold mt-3">Artificial Intelligence (AI) and Deep Learning</h4></Link> </div>
            <div className="c5-2 w-[22%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-8 [@media(max-width:450px)]:h-[19rem]"> <Link href={"https://www.governorsindh.com/tracks/wmd/4"} > <Image src={"/picture/iot.16f7b003.jpg"} alt="" width={400} height={400} className="rounded-lg"></Image> <h4 className="text-xl font-semibold mt-3">Web 3 and Metaverse</h4>  </Link> </div>
            <div className="c5-2 w-[22%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-8 [@media(max-width:450px)]:h-[18.5rem]"> <Link href={"https://www.governorsindh.com/tracks/cnc/4"} > <Image src={"/picture/cloudComputing.7260492c.jpg"} alt="" width={400} height={400} className="rounded-lg "></Image> </Link> <h4 className="text-xl font-semibold mt-3">Cloud-Native Computing</h4>  </div>
            <div className="c5-2 w-[22%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-8 [@media(max-width:450px)]:h-[15rem]"> <Link href={"https://www.governorsindh.com/tracks/iot/4"} > <Image src={"/picture/imageWebsite3.b845fe78.jpg"} alt="" width={400} height={400} className="rounded-lg h-44"></Image> </Link> <h4 className="text-xl font-semibold mt-3">Ambient Computing and IoT</h4>  </div>
          </div>
          <div className="w-6/12 flex  mt-7 justify-between [@media(max-width:450px)]:flex-col [@media(max-width:450px)]:w-full">   
            <div className="c5-3 w-[45%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-0 [@media(max-width:450px)]:h-[18rem]"> <Link href={"https://www.governorsindh.com/tracks/gbs/4"} > <Image src={"/picture/genomics.b87789f1.jpg"} alt="" width={400} height={400} className="rounded-lg"></Image> <h4 className="text-xl font-semibold mt-3">Genomics and Bioinformatics</h4></Link> </div>
            <div className="c5-3 w-[45%] h-[16.5rem] shadow-lg shadow-[rgb(208,210,212)] rounded-xl border-2 border-yellow-50 [@media(max-width:450px)]:w-[98%] [@media(max-width:450px)]:mt-8 [@media(max-width:450px)]:h-[19.7rem]"> <Link href={"https://www.governorsindh.com/tracks/npa/4"} > <Image src={"/picture/automation.a77dbbe8.jpg"} alt="" width={400} height={400} className="rounded-lg"></Image> <h4 className="text-xl font-semibold mt-3">Network Programmability and Automation</h4>  </Link> </div>
          </div>
        </div>



      <div className=" w-full flex mt-16 h-96 pt-20 bg-gray-100 [@media(max-width:450px)]:h-[43rem] [@media(max-width:450px)]:flex-col">

        <div className="w-2/6 text-left pl-14 [@media(max-width:450px)]:w-full [@media(max-width:450px)]:pl-3">
          <h1 className="text-xl font-bold ">Core Courses</h1>
          <Link href={"https://www.governorsindh.com/compulsory/1"} ><h5 className="mt-5">Programming Fundamentals</h5></Link>
          <Link href={"https://www.governorsindh.com/compulsory/2"} ><h5 className="mt-2">Web2 Using NextJS</h5></Link>
          <Link href={"https://www.governorsindh.com/compulsory/3"} ><h5 className="mt-2">Earn as You Learn</h5></Link>
        </div>

        <div className=" w-2/6 text-left [@media(max-width:450px)]:w-full [@media(max-width:450px)]:mt-10 [@media(max-width:450px)]:pl-3">
          <h1 className="text-xl font-bold ">Advanced Courses</h1>
          <Link href={"https://www.governorsindh.com/tracks/wmd/4"} ><h5 className="mt-5">Web 3 and Metaverse</h5></Link>
          <Link href={"https://www.governorsindh.com/tracks/cnc/4"} ><h5 className="mt-2">Cloud-Native Computing</h5></Link>
          <Link href={"https://www.governorsindh.com/tracks/ai/4"} ><h5 className="mt-2">Artificial Intelligence (AI) and Deep Learning</h5></Link>
          <Link href={"https://www.governorsindh.com/tracks/iot/4"} ><h5 className="mt-2">Ambient Computing and IoT</h5></Link>
          <Link href={"https://www.governorsindh.com/tracks/gbs/4"} ><h5 className="mt-2">Genomics and Bioinformatics</h5></Link>
          <Link href={"https://www.governorsindh.com/tracks/npa/4"} ><h5 className="mt-2">Network Programmability and Automation</h5></Link>

        </div>

        <div className=" w-2/6 text-left [@media(max-width:450px)]:pl-3 [@media(max-width:450px)]:w-full [@media(max-width:450px)]:mt-10">
          <h1 className="text-xl font-bold ">Social Links</h1>
          <div className="flex mt-8 items-center w-2/4 justify-around [@media(max-width:450px)]:w-2/3">
            <Link href={"https://www.facebook.com/TeamKTessori" }target="_blank" ><h5 className=""><Image src={"/picture/facebook-removebg-preview.png"} alt="facebook" width={32} height={32}/></h5></Link>
            <Link href={"https://www.youtube.com/@KamranTessorikk"}target="_blank" ><h5 className=""><Image src={"/picture/youtube.png"} alt="youtube" width={35} height={35}/></h5></Link>
            <Link href={"https://x.com/KamranTessoriPk"}target="_blank" ><h5 className=""><Image src={"/picture/twitter.png"} alt="" width={35} height={35}/></h5></Link>
            <Link href={"https://www.instagram.com/KamranTessoriPk/"}target="_blank" ><h5 className=""><Image src={"/picture/instagram-removebg-preview.png"} alt="instagram" height={35} width={35}/></h5></Link>
            <Link href={"https://www.tiktok.com/@KamranTessoriPk"}target="_blank" ><h5 className=""><Image src={"/picture/tiktok.png"} alt="tiktok" width={35} height={35}/></h5></Link>
            <Link href={"mailto:your-education@governorsindh.com"}target="_blank" ><h5 className=""></h5></Link>
          </div>
        </div>

      </div>



        </div>

       
    
     </>
  );
}
