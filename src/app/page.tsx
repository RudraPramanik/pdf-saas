import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() { 
  // const [userId] = await auth()

  const { userId } = auth()
  const isAuth = !!userId;
  return (
    <main className=" w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " >
      <div className="flex flex-col items-center text-center" >
        <div className="flex items-center" >
          <h1 className=" mr-3 text-5xl font-semibold  " >Chat with any pdf</h1>
          <UserButton afterSignOutUrl="/"/>
        </div>
        <div className="flex mt-2">
          {isAuth && <Button>GO to chats</Button>}
        </div>
        <p className="max-w-xl mt-2 text-lg text-slate-600 " >
          Join millions of students , researchers and professionals to instantly questions and understand reaseach with AI
        </p>
        <div className="w-full mt-4">
          {
            isAuth ? ( <FileUpload/> ) : (
              <Link href="/sign-in">
                <Button>Login to get started
                <LogIn className="w-4 h-4 ml-2" />
                </Button>
              
              </Link>
            )
          }
        </div>
      </div>
     </div>
    </main>
  );
}
