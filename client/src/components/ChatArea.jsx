import { IconButton } from "@mui/material";
import Answer from "./Answer";
import Question from "./Question";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";

function ChatArea() {
  const [que, setQue] = useState("");
  const [data, setData] = useState("");

  return (
    <div className="chatArea flex flex-col gap-5 justify-center space-y-10 rounded-lg md:p-10 p-5">
      <div className="message-container flex flex-col flex-1 gap-10 px-24">
        <div className=" flex justify-end">
          <div className=" bg-slate-300 p-3 rounded-xl shadow-xl">
            <Question props={data} />
          </div>
        </div>
        <div className=" bg-slate-300 p-3 rounded-xl shadow-xl">
          <Answer />
        </div>
      </div>
      <div className="text-input-area max-w-full flex bg-[#E4E8EE] justify-around items-center md:mx-40 mx-24 rounded-xl shadow-xl">
        <input
          type="text"
          onChange={(e) => {
            // e.preventDefault();
            setQue(e.target.value);
          }}
          placeholder="Type your questions"
          className=" md:w-full outline-none md:pl-4 h-12 rounded-xl bg-[#E4E8EE]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // e.preventDefault();
              setData(que);
              console.log(data);
            }
          }}
        />

        <IconButton
          className=" pl-5"
          onClick={(e) => {
            e.preventDefault();
            setData(que);
            console.log(data);
          }}
        >
          <SendOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
