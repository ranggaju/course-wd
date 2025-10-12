const Contact = () => {
  return (
    <div id="contact" className="container mx-auto h-[100vh] pt-24">
      {/* title */}
      <h2 className="text-4xl font-semibold">
        Contact<span className="text-lime-500">.</span>
      </h2>

      {/* contact */}
      <div className="mt-8">
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
