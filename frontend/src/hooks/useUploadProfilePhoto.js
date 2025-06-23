import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useUploadProfilePhoto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append("profilePic", file);
      const res = await axiosInstance.post("/auth/uploadprofile", formData);

      return res.data;
    },
    onSuccess: () => {
      toast.success("Profile photo updated successfully!");

      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: () => {
      toast.error("Failed to upload profile photo");
    },
  });
};
