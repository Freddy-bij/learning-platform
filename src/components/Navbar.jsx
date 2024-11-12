const Navbar = ()=>{
    return (
   <nav className="flex justify-between bg-[#130f40] text-white py-4 px-2">
        <h1 className="font-extrabold text-3xl">Smart<span className="text-[#079992] bg-[#eb2f06] px-1 rounded-r-full">Learn</span></h1>
    <div className="flex gap-3  text-2xl hover:underline hover:text-[#eb2f06]">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Add course</a>
    </div>
    </nav>
    )
}
export default Navbar;