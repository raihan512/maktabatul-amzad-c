import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { useNavigate } from "react-router-dom";
const AddPublisher = () => {
  const navigate = useNavigate("");
  const { language } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [publishers, setPublishers] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/publishers")
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);

  const onSubmit = (data) => {
    const { bnpublisher, enpublisher, arpublisher } = data;

    const newPublisher = {
      name: [bnpublisher, enpublisher, arpublisher],
      publisherId: `publisher${Math.ceil(Math.random() * 1000)}`,
    };

    // addSubpublisher
    fetch("https://maktabatul-amzad-server.onrender.com/api/addpublisher", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPublisher),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("পাবলিশার সফলভাবে যুক্ত করা হয়েছে");
          navigate("/admin/publisherlist");
        } else {
          toast.fail("পাবলিশার যুক্ত করা সম্ভব হয়নি");
        }
      });
  };
  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <input
            className="border w-full border-primary p-2"
            placeholder="পাবলিশারের নাম বাংলায়"
            {...register("bnpublisher", { required: true })}
          />
          {errors.bnpublisher && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
        </div>
        <div className="mb-5">
          <input
            className="border w-full border-primary p-2"
            placeholder="পাবলিশারের নাম ইংরেজীতে"
            {...register("enpublisher", { required: true })}
          />
          {errors.enpublisher && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
        </div>
        <div className="mb-5">
          <input
            className="border w-full border-primary p-2"
            placeholder="পাবলিশারের নাম আরবীতে"
            {...register("arpublisher", { required: true })}
          />
          {errors.arpublisher && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
        </div>
        <div>
          <input
            type="submit"
            value="পাবলিশার অ্যাড করুন"
            className="text-white bg-primary py-2 px-5 cursor-pointer"
          />
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default AddPublisher;
