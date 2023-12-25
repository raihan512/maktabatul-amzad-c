import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddWriter = () => {
  const navigate = useNavigate("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnwriter, enwriter, arwriter, desc } = data;
    const newWriter = {
      name: [bnwriter, enwriter, arwriter],
      desc: desc,
      writerId: `writer${Math.ceil(Math.random() * 1000)}`,
    };

    if (data.image.length > 0) {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      fetch(
        "https://api.imgbb.com/1/upload?key=e1f8cb2a3ec0064d89280dcbe819c1b7",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((imgRes) => {
          if (imgRes.success) {
            const imageUrl = imgRes.data.display_url;
            newWriter.image = imageUrl;

            // addbook
            fetch(
              "https://maktabatul-amzad-server.onrender.com/api/addwriter",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newWriter),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  toast.success("লেখক সফলভাবে যুক্ত করা হয়েছে");
                  navigate("/admin/writerlist");
                } else {
                  toast.fail("লেখক যুক্ত করা সম্ভব হয়নি");
                }
              });
          }
        });
    } else {
      // addbook
      fetch("https://maktabatul-amzad-server.onrender.com/api/addwriter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newWriter),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("লেখক সফলভাবে যুক্ত করা হয়েছে");
            navigate("/admin/writerlist");
          } else {
            toast.fail("লেখক যুক্ত করা সম্ভব হয়নি");
          }
        });
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3">
            <div className="mb-5">
              <input
                className="border w-full border-primary p-2"
                placeholder="লেখকের নাম বাংলায়"
                {...register("bnwriter", { required: true })}
              />
              {errors.bnwriter && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
            </div>
            <div className="mb-5">
              <input
                className="border w-full border-primary p-2"
                placeholder="লেখকের নাম ইংরেজীতে"
                {...register("enwriter", { required: true })}
              />
              {errors.enwriter && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
            </div>
            <div className="mb-5">
              <input
                className="border w-full border-primary p-2"
                placeholder="লেখকের নাম আরবীতে"
                {...register("arwriter", { required: true })}
              />
              {errors.arwriter && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
            </div>
          </div>
          <div className="col-span-2">
            <div className="border py-12 border-primary">
              <input
                type="file"
                src=""
                {...register("image")}
                className="mt-12 ml-12"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-5">
            <div className="mb-10">
              <textarea
                {...register("desc")}
                className="w-full border-primary border h-60 p-2"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="লেখক অ্যাড করুন"
            className="text-white bg-primary py-2 px-5 cursor-pointer"
          />
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default AddWriter;
