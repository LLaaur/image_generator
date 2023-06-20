import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {preview} from "../assets";
import { getRandomPrompt } from '../utils';
import {FormField, Loader} from "../components";


function CreatePost() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }

  return (
    <section className="max-2-7xl mx-auto">
      <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px]">
          Create imaginative and visually stunning images through by DALL-E AI and share them
          with the community!
        </p>
      </div>

      <form className="mt-16 max-2-3xl" onSubmit={handleChange}>
        <div className="flex flex-col gap-5">
          <FormField 
            labelName="your name"
            type="text"
            name="name"
            placeholder="laur"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="a fortune-telling shiba inu reading your fate in a giant hamburger, digital art"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost