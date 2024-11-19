
function HomeCards() {
  return (
    <div className="bg-gray-200">
          <div className="grid grid-cols-2 bg-gray-200 mx-auto w-4/5 py-32 gap-20">
      <div className="bg-blue-400 px-4 py-3 rounded-xl shadow-md flex flex-col text-center ">
        <h1 className="uppercase text-gray-900 text-lg pb-3">For students</h1>
        <p>checkout some courses to perfect your ceaft</p>
        <a href="#" className="bg-gray-900 text-white  py-2 px-3 mt-4 mx-auto ">views courses</a>
        </div>
      <div className="bg-gray-900 px-4 py-3 rounded-md shadow-md text-white flex flex-col text-center">
        <h2 className="uppercase">For Teacher</h2>
        <p>Showcase your best courses to attract world-class learners</p>
        <a href="#"className=" mx-auto py-2 px-3 mt-4 text-black capitalize border border-2 h">publish courses</a>
      </div>
  
    </div>
    
     

    </div>
   
  
  )
}

export default HomeCards
