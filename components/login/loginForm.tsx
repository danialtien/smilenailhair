export default function LoginForm() {
  return (
    <form className="bg-btn-light p-12 rounded-lg w-[500px] h-[500px] flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold uppercase">Login</h1>
      <input type="text" placeholder="username" name="username" className="w-full p-5 rounded border-2 border-solid border-yellow-600 bg-background text-foreground" />
      <input type="password" placeholder="password" name="password" className="w-full p-5 rounded border-2 border-solid border-yellow-600 bg-background text-foreground" />
      <button className="w-full p-5 bg-teal-100 text-foreground border-none cursor-pointer rounded hover:bg-teal-300">Login</button>
    </form>
  );
};