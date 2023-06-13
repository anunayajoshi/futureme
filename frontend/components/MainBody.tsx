import Options from "./Options";
import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import { set } from "react-hook-form";


const MainBody = () => {

    const [emailText, setEmailText] = useState<string>('');
   const [email, setEmail] = useState<string>(''); 
   const [duration, setDuration] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = () => {

        if (!emailText || !email || !duration) {
            setAlert(true);
          return;
        }
        setAlert(false);
    
         const requestData = {
           email_text: emailText,
           email: email,
           date: duration,
         };
         setSuccess(true);  
         // Make a POST request to the API
        axios
        .post("http://127.0.0.1:8000/api/create_email", requestData)
        .then((res: any) => {
            // Handle the API response if needed
            console.log(res.data);
        })
        .catch((error: any) => {
            // Handle errors if the request fails
            console.error(error);
        });
    }

  return (
    <div className="p-10 space-y-4">
      <h2 className="text-3xl">Write a letter to your future self</h2>
      <h3 className="text-xl">
        Set a date to send it to yourself, and look forward to hearing from
        yourself!
      </h3>

      <div className="flex flex-col space-y-4 lg:flex-row w-full">
        <div className="w-full lg:w-3/5">
          <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
            name="textarea-name"
            rows={15}
            placeholder="Dear Future Me,"
            className="focus:shadow-soft-primary-outline min-h-unset text-md leading-5.6 ease-soft block w-full h-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-emerald-300 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-center w-full lg:w-2/5 ">
          <div className="flex flex-col space-y-6">
            <Options setDuration={setDuration} />

            <div className="space-y-2">
              <p className="opacity-60 font-lg ">
                Where you would like to receive your letter
              </p>
              <input
              value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="focus:shadow-soft-primary-outline min-h-unset text-md leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-emerald-300 focus:outline-none"
              ></input>
            </div>

            <button onClick={() => handleSubmit()} className="hover:transition-all ease-in-out text-black text-xl font-medium w-full p-4 rounded-lg bg-gradient-to-br from-rose-400 via-blue-300 to-emerald-300 hover:from-emerald-400">
              Send your letter
            </button>
          </div>
        </div>
      </div>
      {alert ? <Alert success={false}/> : ""}
        {success ? <Alert success={true}/> : ""}
      
    </div>
  );
}

export default MainBody