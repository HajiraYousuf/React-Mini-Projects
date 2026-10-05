import { useState } from "react";
import {
  Search,
  Plus,
  Trash2,
  User,
  Phone,
  Mail,
  X,
} from "lucide-react";

const ContactList = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Amina Hassan",
      phone: "+252 63 4567890",
      email: "amina@gmail.com",
    },
    {
      id: 2,
      name: "Mohamed Ali",
      phone: "+252 63 1234567",
      email: "mohamed@gmail.com",
    },
    {
      id: 3,
      name: "Axlam Ahmed",
      phone: "+252 65 9876543",
      email: "axlam@gmail.com",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addContact = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      return;
    }

    const newContact = {
      id: Date.now(),
      name: form.name,
      phone: form.phone,
      email: form.email,
    };

    setContacts([...contacts, newContact]);

    setForm({
      name: "",
      phone: "",
      email: "",
    });

    setShowForm(false);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-green-50 p-5">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Contact List
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your contacts easily
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition"
          >
            <Plus size={20} />
            Add Contact
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Contact Count */}
        <p className="text-sm text-gray-500 mb-4">
          {filteredContacts.length} contacts
        </p>

        {/* Contacts */}
        <div className="space-y-3">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                    {getInitials(contact.name)}
                  </div>

                  {/* Info */}
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {contact.name}
                    </h2>

                    <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Phone size={14} />
                        {contact.phone}
                      </span>

                      <span className="flex items-center gap-1">
                        <Mail size={14} />
                        {contact.email}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl py-16 text-center">
              <User
                size={45}
                className="mx-auto text-gray-300 mb-3"
              />

              <h2 className="text-lg font-semibold text-gray-600">
                No contacts found
              </h2>

              <p className="text-gray-400 mt-1">
                Try searching for another contact
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Contact Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl p-6">

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Add Contact
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={addContact} className="space-y-4">

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border border-gray-200 py-3 rounded-xl text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                >
                  Add Contact
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
