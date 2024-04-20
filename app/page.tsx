import axios from "axios";
import client from "@/db"



async function getUserDetails() {

  let response =await client.user.findFirst()
	return response;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                   Welcome {userData?.username}
                </div>
               
            </div>
        </div>
    </div>
  );
}
