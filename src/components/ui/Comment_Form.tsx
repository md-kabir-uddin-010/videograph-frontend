export default function Comment_Form() {
  return (
    <div>
      <form>
        <div className=" flex gap-3 flex-col lg:flex-row">
          <input
            className=" my-2 border border-gray-700 outline-none px-3 py-2 bg-transparent placeholder:capitalize w-full"
            type="text"
            placeholder="name"
            required
          />
          <input
            className=" my-2 border border-gray-700 outline-none px-3 py-2 bg-transparent placeholder:capitalize w-full"
            type="email"
            placeholder="email"
            required
          />
          <input
            className=" my-2 border border-gray-700 outline-none px-3 py-2 bg-transparent placeholder:capitalize w-full"
            type="url"
            placeholder="website"
            required
          />
        </div>
        <textarea
          name="message"
          className="  my-2 border border-gray-700 outline-none px-3 py-2 bg-transparent placeholder:capitalize w-full h-24 resize-none"
          required
          placeholder="message"
        ></textarea>
        <div className="">
          <input
            className="my-2 cursor-pointer font-semibold w-full bg-sky-500 py-2 uppercase tracking-[2px]"
            type="submit"
            value="send message"
          />
        </div>
      </form>
    </div>
  );
}
