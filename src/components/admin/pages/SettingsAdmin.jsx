import { useState } from "react";
import ls from "../../../utils/secureLS";

function SettingsAdmin() {
  const defaultSettings = {
    name: "Kevin",
    email: "kevin@gmail.com",
    phone: "+91 9876543210",
    location: "India",

    github: "https://github.com/kevinlomesome",
    linkedin: "https://linkedin.com/in/kevinnn7x",
    instagram: "https://instagram.com/kevinnn7.x",

    profileImage: "",
    resume: "",

    password: "",
  };

  if (!ls.get("settings")) {
    ls.set("settings", defaultSettings);
  }

  const [formData, setFormData] = useState(
    ls.get("settings") || defaultSettings
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        profileImage: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        resume: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ls.set("settings", formData);

    alert("Settings Saved Successfully!");
  };

  return (
    <div className="bg-slate-900 min-h-screen p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="text-gray-400 mt-2 mb-8">
          Update your admin profile information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >

          <h2 className="text-2xl font-bold text-white mb-8">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>
                        {/* GitHub */}

            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">
                GitHub URL
              </label>

              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* LinkedIn */}

            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">
                LinkedIn URL
              </label>

              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* Instagram */}

            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">
                Instagram URL
              </label>

              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

          </div>

          {/* Upload Section */}

          <div className="border-t border-slate-700 mt-10 pt-10">

            <h2 className="text-2xl font-bold text-white mb-8">
              Upload Files
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Profile Image */}

              <div>

                <label className="block text-gray-300 mb-3">
                  Profile Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white"
                />

                {formData.profileImage && (
                  <img
                    src={formData.profileImage}
                    alt="Preview"
                    className="mt-5 w-40 h-40 rounded-full object-cover border-4 border-cyan-500"
                  />
                )}

              </div>

              {/* Resume */}

              <div>

                <label className="block text-gray-300 mb-3">
                  Resume (PDF)
                </label>

                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white"
                />

                {formData.resume && (
                  <p className="mt-4 text-green-400">
                    ✅ Resume Uploaded Successfully
                  </p>
                )}

              </div>

            </div>

          </div>
                    {/* Security */}

          <div className="border-t border-slate-700 mt-10 pt-10">

            <h2 className="text-2xl font-bold text-white mb-8">
              Security
            </h2>

            <div>

              <label className="block text-gray-300 mb-2">
                Change Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter New Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

          </div>

          {/* Save Button */}

          <div className="mt-10 flex justify-end">

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-lg text-white font-semibold"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default SettingsAdmin;