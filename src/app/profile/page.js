import PersonalInformation, { AccountSettings } from "./profileForm";

export default function Profile(){
    return(
        <>
        <div className="mt-[72px] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
           <div className="mb-8">
            <h1 className="text-3xl text-neutral-900">Profile Settings</h1>
            <p className="text-neutral-600 mt-2">Update your personal information and preferences</p>
           </div>
           <div>
             <PersonalInformation/>
           </div>
           <div className="mt-10 mb-10">
              <AccountSettings/>
           </div>
           
        </div>
        <div className=" mx-auto px-4 sm:px-6 border-t-1 border-t-neutral-300 lg:px-8 py-8 sticked w-full bottom-0  ">
             <p className="text-center text-xs sm:text-sm text-neutral-600 ">© 2025 Profile Manager. All rights reserved.</p>
           </div>
        </>
    )
}