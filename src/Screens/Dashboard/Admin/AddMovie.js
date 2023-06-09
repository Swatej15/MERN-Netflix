import React, { useEffect, useState } from "react";
import SideBar from "../../Dashboard/SideBar";
import { Input, Message, Select } from "../../../Components/UsedInputs.js";
import Uploder from "../../../Components/Uploder";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "../../../Data/MoviesData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";

function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);
  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game of thrones"
            type="text"
            bg={true}
          />
        </div>

        <Input label="Hours" placeholder="2hr" type="text" bg={true} />

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            label="Year of Release"
            placeholder="2022"
            type="number"
            bg={true}
          />
        </div>
        {/* IMAGES */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* image without title  */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without Title
            </p>

            <Uploder />
            <div className="w-32 h-32 p-2  bg-main border border-border rounded ">
              <img
                src="/images/movies/11.jpeg "
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* image with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With Title
            </p>

            <Uploder />
            <div className="w-32 h-32 p-2  bg-main border border-border rounded ">
              <img
                src="/images/movies/10.jpeg "
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        {/* DESCRIPTION */}
        <Message
          label="Movie  Description"
          placeholder="Make it short and sweet"
        />

        {/* Category */}
        <div className="text-sm w-full">
          <Select label="Movie Category" options={CategoriesData} />
        </div>

        {/* Movie video */}

        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie Video
          </label>
          <Uploder />
        </div>
        {/* Casts */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
  <button
    onClick={() => setModalOpen(true)}
    className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
  >
    Add Cast
  </button>
  <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
    {UsersData.map((user, i) => (
      <div
        key={i}
        className="p-2 italic text-xs text-text rounded flex-col bg-main border border-border"
      >
        <img
          src={`/images/${user.image ? user.image : "user.png"}`}
          alt={user.fullName}
          className="w-full h-24 object-cover rounded mb-2"
        />
        <div className="text-center">{user.fullName}</div>
        <div className="flex items-center justify-center mt-2 w-full gap-2">
          <button
            onClick={() => {
              setCast(user);
              setModalOpen(true);
            }}
            className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded"
          >
            <span className="flex items-center justify-center">
              <MdDelete />
            </span>
          </button>
          <button className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded">
            <span className="flex items-center justify-center">
              <FaEdit />
            </span>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Submit */}
        <button className="bg-subMain flex items-center justify-center w-full gap-2 font-medium text-white py-4 rounded">
          <ImUpload className="ml-2" />
          <span>Publish Movie</span>
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
