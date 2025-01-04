import LoginForm from "@/components/login/loginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="box-border flex items-center justify-center min-h-screen bg-brown-100">
      <section className="absolute w-screen h-screen bg-[#d7c1a7] flex flex-wrap items-center justify-center gap-0.5 overflow-hidden signInSection">
        {[...Array(259)].map((_, index) => (
          <span key={index} className="signInSpan"></span>
        ))}
        <Image
          alt=""
          className="absolute top-0 right-0 -mr-[68px] w-auto h-screen z-40 object-cover mix-blend-multiply"
          src="/assets/Banner/aaker-kDA6tGn2Q6E-unsplash.jpg"
          width={2608}
          height={3590}
        ></Image>
        <div className="absolute w-[500px] h-[400px] z-50 bg-orange-50 p-12 rounded-lg shadow-2xl">
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
