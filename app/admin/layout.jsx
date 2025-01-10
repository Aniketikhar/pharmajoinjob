import Sidebar from "@/Components/AdminComponent/Sidebar";
import { ToastContainer, toast } from 'react-toastify';


export default function layout({children}){
    return (
        <>
        <ToastContainer />
        <div className="container mx-auto flex gap-5">
            <div className="bg-neutral-100 hidden md:block md:w-[20%]">
                <Sidebar />
            </div>
            <div className=" w-full md:w-[80%]">{children}</div>
        </div>
        
        </>
    )
}