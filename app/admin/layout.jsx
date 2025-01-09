import Sidebar from "@/Components/AdminComponent/Sidebar";


export default function layout({children}){
    return (
        <>
        <div className="container mx-auto flex gap-5">
            <div className="bg-neutral-100 hidden md:block md:w-[20%]">
                <Sidebar />
            </div>
            <div className=" w-full md:w-[80%]">{children}</div>
        </div>
        
        </>
    )
}