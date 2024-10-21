import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { File, Mail, Pen, Phone } from "lucide-react";
import React from "react";
import AppliedJobs from "@/components/AppliedJobs";

function Profile() {
  const skills=["React" , "Node", "Express"]
  const resume=true
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-8 flex flex-col sm:flex-row gap-10 p-7 border-gray-300 rounded-lg shadow-md mb-16">
        <div className="m-auto w-full sm:w-[20%] flex justify-center">
          <Avatar className="sm:w-32 sm:h-32 h-16 w-16">
            <AvatarImage src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" />
          </Avatar>
        </div>
        <div className="w-full px-4 ">
          <div className="p-4">
            <div className="flex gap-3 ">
              <h1 className="text-2xl font-semibold flex gap-3 items-center">
                Kanak
              </h1>
              <button className="text-gray-500 hover:scale-110 cursor-pointer">
                <Pen width={16} />{" "}
              </button>
            </div>

            <p className="text-base mb-4">Experienceed software developer</p>
            <hr />
          </div>
          <div className="w-full mt-6 flex items-start flex-col sm:flex-row p-4">
            <div className=" flex flex-col gap-2 sm:w-[50%] w-full sm:border-r-2 border-r-0">
              <div className="flex gap-2">
                <Phone className="text-gray-400" width={16} />{" "}
                <p className="text-base text-gray-600 font-medium">
                  7976206480
                </p>
              </div>

              <div className="flex gap-2">
                <Mail className="text-gray-400" width={16} />{" "}
                <p className="text-base text-gray-600 font-medium">
                  kanakkumarmahala000@gmail.com
                </p>
              </div>
              <div className="flex gap-2">
                <File className="text-gray-400" width={16}/>
                <p className="text-base text-gray-600 font-medium">Resume:</p>
                {resume ? <a className="text-blue-700 hover:underline" href="youtube.com">you resume</a> : null}
              </div>
            </div>

            <div className="text-left items-start  sm:w-[50%] w-full px-4 flex flex-col gap-3">
              <h1>Skills :</h1>
              <div className="flex gap-2 flex-wrap">
                {skills.length !==0 ? skills.map((skill,index)=>(<Badge key={index}>{skill}</Badge>)) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-lg font-semibold mb-3">Applied Job</h1>
        <AppliedJobs/>
      </div>
    </div>
  );
}

export default Profile;
