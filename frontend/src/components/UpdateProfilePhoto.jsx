import { Camera } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";
import { useUploadProfilePhoto } from "../hooks/useUploadProfilePhoto";

export default function UpdateProfilePhoto() {
  const { authUser } = useAuthUser();
  const { mutate: uploadPhoto, isPending } = useUploadProfilePhoto();

  const handleProfile = (e) => {
    const file = e.target.files[0];
    if (file) uploadPhoto(file);
  };

  return (
    <div className="flex justify-center m-4">
      <div className="rounded-xl flex flex-col items-center font-medium text-stone-400">
        <div className="relative">
          <label htmlFor="fileInput" className="cursor-pointer">
            <img
              src={
                authUser?.profilePic ||
                "https://avatar.iran.liara.run/public/1.png"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-3 border-blue-500"
            />
            <div className="absolute bottom-1 right-1 bg-gray-800 p-1 rounded-full">
              <Camera className="w-5 h-5 text-gray-300" />
            </div>
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfile}
            disabled={isPending}
          />
        </div>
      </div>
    </div>
  );
}
