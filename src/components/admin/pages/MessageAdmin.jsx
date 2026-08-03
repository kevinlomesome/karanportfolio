import { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import ls from "../../../utils/secureLS";

function MessageAdmin() {
  // Load Messages
  let storedMessages = [];

  try {
    storedMessages = ls.get("messages");

    if (!Array.isArray(storedMessages) || storedMessages.length === 0) {
      storedMessages = [];
    } else {
      // Convert IDs to 1,2,3...
      storedMessages = storedMessages.map((message, index) => ({
        ...message,
        id: index + 1,
      }));
    }

    ls.set("messages", storedMessages);
  } catch (error) {
    storedMessages = [];
    ls.set("messages", []);
  }

  const [messages, setMessages] = useState(storedMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Delete Message
  const deleteMessage = (id) => {
    const updated = messages
      .filter((message) => message.id !== id)
      .map((message, index) => ({
        ...message,
        id: index + 1,
      }));

    ls.set("messages", updated);
    setMessages(updated);

    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  // View Message
  const viewMessage = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="flex-1 bg-slate-900 min-h-screen p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Messages
          </h1>

          <p className="text-gray-400 mt-2">
            Contact form messages
          </p>
        </div>

      </div>

      {/* Table */}

      <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-700">

            <tr>

              <th className="px-6 py-4 text-left text-gray-300">
                ID
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Name
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Email
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Subject
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Date
              </th>

              <th className="px-6 py-4 text-center text-gray-300">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {messages.length > 0 ? (

              messages.map((message) => (

                <tr
                  key={message.id}
                  className="border-b border-slate-700 hover:bg-slate-700"
                >

                  <td className="px-6 py-5 text-white">
                    {message.id}
                  </td>

                  <td className="px-6 py-5 text-white">
                    {message.name}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {message.email}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {message.subject}
                  </td>

                  <td className="px-6 py-5 text-cyan-400">
                    {message.date}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => viewMessage(message)}
                        className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg text-white"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="bg-red-500 hover:bg-red-600 p-3 rounded-lg text-white"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))
                          ) : (

              <tr>

                <td
                  colSpan="6"
                  className="text-center text-gray-400 py-10"
                >
                  No Messages Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* View Message Modal */}

      {selectedMessage && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-slate-800 rounded-xl p-8 w-[500px]">

            <h2 className="text-2xl font-bold text-white mb-6">
              Message Details
            </h2>

            <div className="space-y-4 text-gray-300">

              <p>
                <strong>Name:</strong> {selectedMessage.name}
              </p>

              <p>
                <strong>Email:</strong> {selectedMessage.email}
              </p>

              <p>
                <strong>Subject:</strong> {selectedMessage.subject}
              </p>

              <p>
                <strong>Date:</strong> {selectedMessage.date}
              </p>

              <div>

                <strong>Message:</strong>

                <p className="mt-2 bg-slate-700 p-4 rounded-lg whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>

              </div>

            </div>

            <button
              onClick={() => setSelectedMessage(null)}
              className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg text-white font-semibold"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default MessageAdmin;