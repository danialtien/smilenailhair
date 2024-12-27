export default function LoginForm() {
  return (
    <form className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-2xl font-bold uppercase">Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="w-full p-5 rounded border-2 border-solid border-[#d7c1a7] bg-background text-foreground"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-full p-5 rounded border-2 border-solid border-[#d7c1a7] bg-background text-foreground"
      />
      <button className="w-full p-5 bg-brown-200 text-foreground font-medium border-none cursor-pointer rounded hover:bg-orange-200 hover:text-orange-700">
        Login
      </button>
    </form>
  );
}

