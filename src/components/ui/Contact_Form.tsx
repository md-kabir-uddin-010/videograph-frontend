export default function Contact_Form() {
  return (
    <div>
      <form className=" py-8">
        <div className="">
          <input
            className=" mb-4 bg-transparent outline-none border border-gray-700 px-2 py-2 placeholder:capitalize w-full"
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
        </div>
        <div className="">
          <input
            className=" mb-4 bg-transparent outline-none border border-gray-700 px-2 py-2 placeholder:capitalize w-full"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>
        <div className="">
          <input
            className=" mb-4 bg-transparent outline-none border border-gray-700 px-2 py-2 placeholder:capitalize w-full"
            type="text"
            name="website"
            id="website"
            placeholder="website"
            required
          />
        </div>
        <div className="">
          <textarea
            className=" mb-4 bg-transparent outline-none border border-gray-700 px-2 py-2 placeholder:capitalize w-full h-[100px] resize-none"
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="message"
            required
          ></textarea>
        </div>
        <div className="">
          <input
            className=" cursor-pointer hover:bg-sky-600 transition-all duration-200 w-full px-6 py-3 bg-sky-500 text-white font-bold uppercase tracking-widest"
            type="submit"
            value="send message"
          />
        </div>
      </form>
    </div>
  );
}
