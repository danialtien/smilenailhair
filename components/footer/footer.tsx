import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 px-5 bg-base">
      <div className="flex items-center justify-around py-2.5 rounded-lg text-foreground">
        <div className="flex-col mx-5">
          <Image
            src="/images/Logo/SmileNailHairLogo.png"
            alt=""
            width={300}
            height={300}
          />
          <p className="text-base mt-2">
            Chỗ này để ghi chú/slogan cửa hàng/chi nhánh các thứ...
          </p>
        </div>
        <div className="flex-col ml-5">
          <div className="mb-5">
            <a
              href="tel:+84377216836"
              className="text-base font-medium text-blue-800"
            >
              Số điện thoại liên hệ:{" "}
              <p className="inline underline decoration-solid">0377216836</p>
              <p>
                {"("}Số máy quý khách vừa gọi hiện đell cóa, xin quý khách vui
                lòng chọn số khác {"(●'◡'●))"}
              </p>
            </a>
          </div>
          <p className="mb-5">
            Chỗ này dùng để ghi địa chỉ cửa hàng/chi nhánh bla bla bla...
          </p>
          <div className="font-bold">Zenith Helios</div>
          <div className="text-xs">@ All right reserved.</div>
        </div>
        <div className="flex-col">
          <p className="text-xl font-semibold my-2">
            Nhớ vô like fanpage nha mấy bẹn ❤️🤩🌟
          </p>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=400&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="300"
            className="border-none overflow-hidden"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="p-5 md:flex items-center justify-between border-t border-orange-100">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          @2024 - Smile Nail & Hair. All Rights Reserved by{" "}
          <Link href="" target="_blank">
            Must Finish Team
          </Link>
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/" target="_blank">
              Privacy policy
            </Link>
          </h4>
          <div className="h-5 bg-orange-100 w-0.5"></div>
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/" target="_blank">
              Terms & conditions
            </Link>
          </h4>
        </div>
      </div>
    </footer>
  );
}
