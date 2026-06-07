export default function Subscribe() {
  return (
    <form className="wrapper flex justify-center h-100 items-center my-20 ">
      <input
        type="email"
        className="h-20 w-[70%] p-4 border border-gray-700/30 rounded-l-xl focus:outline-0 focus:border-black"
        placeholder="example@mail.com"
        required
      />
      <button
        type="submit"
        className="button-primary rounded-l-none! rounded-r-xl! h-20! text-[18px]"
      >
        Subscribe
      </button>
    </form>
  );
}
