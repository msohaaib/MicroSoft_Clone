import React from 'react'

export default function Main() {
  return (
    <div>
      <div className="navabar flex justify-between items-center p-4">
        <div className="flex justify-center items-center md:order-2">
          <div className="hamburger inline-block cursor-pointer p-4 md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          <div className="search md:hidden">
            <img className='w-5' src="https://img.icons8.com/?size=100&id=132&format=png" alt="" />
          </div>
        </div>
        <div className="logo text-center md:order-1 flex">
          <div className="microsoft flex justify-center items-center">
            <img className='w-24 cursor-pointer h-auto' src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" />
          </div>
          <div className="features cursor-pointer md:py-2 absolute w-fit md:w-auto bg-gray-200 md:bg-white md:static inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:-translate-x-0">
            <div className="fitems">Microsoft 365</div>
            <div className="fitems">Office</div>
            <div className="fitems">Copilot</div>
            <div className="fitems">Windows</div>
            <div className="fitems">Support</div>
          </div>
        </div>
        <div className="cart text-center md:order-3 flex flex-row cursor-pointer">
          <div className="search hidden md:block mx-5 hover:underline">All Micosoft</div>
          <div className='flex flex-row space-x-5 justify-center items-center cursor-pointer'>
            <img className='w-auto h-5 hidden md:block' src="https://img.icons8.com/?size=100&id=132&format=png" alt="" />
            <img className='w-auto h-5' src="https://img.icons8.com/?size=100&id=9671&format=png" alt="" />
            <img className='w-auto h-5' src="https://www.nicepng.com/png/detail/515-5156153_png-file-svg-add-contact-icon-android-circle.png" alt="" />
          </div>
        </div>
      </div>

      <div className="slider flex flex-col">
        <div className="left">
          <img className='2xl:w-full' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-MultiCanvas-Microsoft-Copilot-App-3screens:VP4-1399x600" alt="" />
          <div className='hidden lg:block lg:relative lg:-top-96 lg:w-1/3 lg:left-14'>
            <h1 className="text-3xl font-semibold my-3 justify-start">Unlock your potential with Microsoft Copilot</h1>
            <p className='justify-start my-3'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
            <button className='font-semibold my-3 bg-[#0067b8] text-white py-2 px-3 '>Download the copilot App</button>
          </div>
        </div>
        <div className="right m-auto px-3 w-full py-1 border-none shadow-sm shadow-slate-400 md:-mt-14 md:w-[90%] md:bg-white md:mx-8 lg:hidden">
          <h1 className="text-3xl font-semibold my-3 justify-start">Unlock your potential with Microsoft Copilot</h1>
          <p className='justify-start my-3'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
          <button className='font-semibold my-3 bg-[#0067b8] text-white py-2 px-3 '>Download the copilot App</button>
        </div>
      </div>

      <div className="second flex flex-col flex-wrap md:flex-row my-9 md:justify-center md:items-center md:space-x-14 lg:relative -top-48">
        <div className="micreosoft365 flex flex-col self-center my-1">
          <img className='w-10 lg:w-16 h-auto self-center my-1' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" />
          <p className='underline text-[#0067b8] my-1 self-center font-semibold'>Choose your Microsoft 365</p>
        </div>
        <div className="xbox flex flex-col self-center my-1 md:mt-2">
          <img className='w-10 lg:w-16 h-auto self-center my-1' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" alt="" />
          <p className='underline text-[#0067b8] my-1 self-center font-semibold'>Shop Xbox</p>
        </div>
        <div className="window11 flex flex-col self-center my-2">
          <img className='w-10 lg:w-16 h-auto self-center my-1' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" />
          <p className='underline text-[#0067b8] self-center my-1 font-semibold'>Get Window 11</p>
        </div>
        <div className="surface flex flex-col self-center my-1 md:mt-2">
          <img className='w-10 lg:w-16 h-auto self-center my-1' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40" alt="" />
          <p className='underline text-[#0067b8] my-1 self-center font-semibold'>Explore Surface Devices</p>
        </div>
      </div>

      <div className="card flex flex-col flex-wrap md:flex-row md:justify-center md:items-center lg:flex-nowrap lg:relative -top-48 m-10">
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4' >Surface Laptop 5</h3>
          <p className='justify-start items-start py-2 text-lg mx-4' >Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-[5.5rem]'>Learn More</button>
        </div>
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4' >Surface Laptop Studio</h3>
          <p className='justify-start items-start py-2 text-lg mx-4' >Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-[5.5rem]'>Learn More</button>
        </div>
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4' >Maximise the everyday with Microsofr 365</h3>
          <p className='justify-start items-start py-2 text-lg mx-4' >Get online protection, secure cloud storage and innovative apps designed to fit your needs.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-10'>For one person</button>
        </div>
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow ">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4'>X box Series X</h3>
          <p className='justify-start items-start py-2 text-lg mx-4 block' >The fastest, most powerful Xbox ever.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-36'>Shop X box Series X</button>
        </div>
      </div>



      <div className="Xbox flex flex-col lg:relative -top-48 m-10">
        <div className="left">
          <img className='2xl:w-full' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP4-1260x600" alt="" />
          <div className='hidden lg:block lg:relative lg:-top-96 lg:w-1/3 lg:left-14'>
            <h1 className="text-3xl font-semibold my-3 justify-start">Xbox Series X</h1>
            <p className='justify-start my-3'>Next-gen performance in the smallest Xbox ever</p>
            <button className='font-semibold my-3 bg-[#0067b8] text-white py-2 px-3 '>Shop Xbox Series X</button>
          </div>
        </div>
        <div className="right m-auto px-3 w-full py-1 border-none shadow-sm shadow-slate-400 md:-mt-14 md:w-[90%] md:bg-white md:mx-8 lg:hidden">
          <h1 className="text-3xl font-semibold my-3 justify-start">Xbox Series X</h1>
          <p className='justify-start my-3'>Next-gen performance in the smallest Xbox ever</p>
          <button className='font-semibold my-3 bg-[#0067b8] text-white py-2 px-3 '>Shop Xbox Series X</button>
        </div>
      </div>


      <div className='text-left ml-12 lg:relative -top-48 text-2xl font-semibold'><h1>For Business</h1></div>
      <div className="card flex flex-col flex-wrap md:flex-row md:justify-center md:items-center lg:flex-nowrap lg:relative -top-48 mr-10 ml-10 mb-10">
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4' >Surface For Business</h3>
          <p className='justify-start items-start py-2 text-lg mx-4' >No matter what you do, there’s a Surface to help you do it.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-[5.5rem]'>Shop Now</button>
        </div>
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4' >Get Microsoft Team for free</h3>
          <p className='justify-start items-start py-2 text-lg mx-4' >Online meetings, chat and shared cloud storage – all in one place.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-[5.5rem]'>Sign up for free</button>
        </div>
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4' >Copiolot for Microsofr 365</h3>
          <p className='justify-start items-start py-2 text-lg mx-4' >Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4 md:mt-10'>Learn More</button>
        </div>
        <div className="car1 flex flex-col m-3 pb-5 md:shadow-sm md:shadow-slate-600 md:border-none md:w-[47%] lg:auto-auto flex-grow ">
          <img className='justify-center items-center pb-2' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=297&hei=167&fit=crop" alt="" />
          <h3 className='justify-start items-start py-2 text-xl font-semibold mx-4'>Window 11 For Business</h3>
          <p className='justify-start items-start py-2 text-lg mx-4 block' >Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.</p>
          <button className='justify-start items-start w-fit px-3 bg-[#0067B8] text-white font-semibold py-2 mx-4'>Learn More</button>
        </div>
      </div>


      <div className="follow flex items-center lg:relative -top-32 ml-12 space-x-7">
        <h3 className='text-xl'>Follow Microsoft</h3>
        <img className='w-8 h-auto cursor-pointer' title='facebook' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="" />
        <img className='w-8 h-auto cursor-pointer' title='X' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-MSCOM-X-64x64?scl=1" alt="" />
        <img className='w-8 h-auto cursor-pointer' title='Youtube' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1" alt="" />
      </div>


<div className='bg-[#f2f2f2]'>
<div className="footer flex flex-col space-x-10 mt-10 lg:mr-10 lg:ml-10 justify-center lg:flex-row bg-[#f2f2f2] pt-10">
  <div className="ml-10 mb-5 lane01 min-w-40">
    <h3 className='text-xl mb-5'>What's New</h3>
    <ul className = 'cursor-pointer font-thin text-sm space-y-2'>
      <li></li>
      <li className='hover:underline'>Games</li>
      <li className='hover:underline'>Surface Pro 9</li>
      <li className='hover:underline'>Surface Laptop 5</li>
      <li className='hover:underline'>Surface Laptop Go 2</li>
      <li className='hover:underline'>Microsoft Copilot</li>
      <li className='hover:underline'>Microsoft 365</li>
      <li className='hover:underline'>Window 11 Apps</li>
    </ul>
  </div>
  <div className="lane02 mb-5 min-w-40">
  <h3 className='text-xl mb-5'>Microsoft Store</h3>
    <ul className = 'cursor-pointer font-thin text-sm space-y-2'>
      <li></li>
      <li className='hover:underline'>Account Profile</li>
      <li className='hover:underline'>Download Center</li>
      <li className='hover:underline'>Microsoft Store support</li>
      <li className='hover:underline'>Returns</li>
      <li className='hover:underline'>Order Tracking</li>
    </ul>
  </div>
  <div className="lane03 mb-5 min-w-40">
  <h3 className='text-xl mb-5'>Education</h3>
    <ul className = 'cursor-pointer font-thin text-sm space-y-2'>
    <li></li>
      <li className='hover:underline'>Microsoft in Education</li>
      <li className='hover:underline'>Devices for Education</li>
      <li className='hover:underline'>Microsoft team for Education</li>
      <li className='hover:underline'>Microsoft 365 Education</li>
      <li className='hover:underline'>Office Education</li>
      <li className='hover:underline'>Educator training and development</li>
      <li className='hover:underline'>Deals for strudent and parents</li>
      <li className='hover:underline'>Azure for student</li>
    </ul>
  </div>
  <div className="lane04 mb-5 min-w-40">
  <h3 className='text-xl mb-5'>Business</h3>
    <ul className = 'cursor-pointer  font-thin text-sm space-y-2'>
    <li></li>
      <li className='hover:underline'>Microsoft cloud</li>
      <li className='hover:underline'>Microsoft Security</li>
      <li className='hover:underline'>Azure</li>
      <li className='hover:underline'>Dynamic 365</li>
      <li className='hover:underline'>Microsoft 365</li>
      <li className='hover:underline'>Microsoft Advertising</li>
      <li className='hover:underline'>Copilot for Microsoft 365</li>
      <li className='hover:underline'>Microsoft Teams</li>
    </ul>
  </div>
  <div className="lane05 mb-5 min-w-40">
  <h3 className='text-xl mb-5'>Development & IT</h3>
    <ul className = 'cursor-pointer font-thin text-sm space-y-2'>
    <li></li>
      <li className='hover:underline'>Development Center</li>
      <li className='hover:underline'>Documentation</li>
      <li className='hover:underline'>Microsoft Learn</li>
      <li className='hover:underline'>Microsoft Tech Community</li>
      <li className='hover:underline'>Azure Marketplace</li>
      <li className='hover:underline'>AppSource</li>
      <li className='hover:underline'>Microsoft Power platform</li>
      <li className='hover:underline'>Visual Studio</li>
    </ul>
  </div>
  <div className="lane06 mb-5 min-w-40">
  <h3 className='text-xl mb-5'>Company</h3>
    <ul className = 'cursor-pointer font-thin text-sm space-y-2'>
    <li></li>
      <li className='hover:underline'>Careers</li>
      <li className='hover:underline'>About Microsoft</li>
      <li className='hover:underline'>Company news</li>
      <li className='hover:underline'>Privacy at Microsoft</li>
      <li className='hover:underline'>Investors</li>
      <li className='hover:underline'>Security</li>
      <li className='hover:underline'>Sustainability</li>
    </ul>
  </div>
</div>
</div>


<div className="mainfooter">
  <div></div>
  <div></div>
</div>



    </div>
  )
}
