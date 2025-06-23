import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api";
import { LoaderIcon } from "lucide-react";
import UpdateProfilePhoto from "../components/UpdateProfilePhoto";

const OnboardingPage = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile upload successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };

  return (
    <div className="min-h-screen bg-[#0e0c0c] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#131111] p-8 rounded-2xl shadow-md border border-green-900">
        {/* Logo/Header */}
        <div className="text-green-400 text-2xl font-bold mb-4 text-center">
          Complete Your Profile
        </div>

        {/* Profile Photo */}
        <UpdateProfilePhoto />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formState.fullName}
              onChange={(e) =>
                setFormState({ ...formState, fullName: e.target.value })
              }
              className="input w-full rounded-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Bio</label>
            <textarea
              value={formState.bio}
              onChange={(e) =>
                setFormState({ ...formState, bio: e.target.value })
              }
              className="textarea w-full px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tell others about yourself"
              rows={4}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-green-500 text-black py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            {isPending ? (
              <>
                <LoaderIcon className="animate-spin size-4 mr-2 inline" />
                Saving...
              </>
            ) : (
              "Complete Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
