import { Button } from "@mui/material";
import logo from "/logo.svg";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function Navbar() {
  return (
    <div className="flex justify-between w-full h-16 items-center bg-slate-100 shadow-2xl p-12 rounded-xl">
      <div className=" pl-10">
        <img src={logo} alt="Logo" />
      </div>
      <div className=" pr-10">
        <Button variant="outlined" className=" flex gap-3 w-15 h-12">
          <AddCircleOutlineOutlinedIcon />
          Upload PDF
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
