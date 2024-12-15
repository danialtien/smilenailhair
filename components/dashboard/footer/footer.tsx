import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-around mt-5 px-5 py-2.5 rounded-lg bg-btn-light text-foreground">
      <div className="flex-col">
        <Image
          src="/images/Logo/SmileNailHairLogo.png"
          alt=""
          width={300}
          height={300}
        />
        <p className="text-base mt-2">Chỗ này để ghi chú/slogan cửa hàng/chi nhánh các thứ...</p>
      </div>
      <div className="flex-col">
        <div className="mb-5">
          <a
            href="tel:+84377216836"
            className="text-base font-medium text-blue-800"
          >
            Số điện thoại liên hệ:{" "}
            <p className="inline underline decoration-solid">0377216836</p>
            <p>{"("}Số máy quý khách vừa gọi hiện tại đell cóa, xin quý khách vui lòng chọn số khác {"(●'◡'●))"}</p>
          </a>
        </div>
        <p className="mb-5">Chỗ này dùng để ghi địa chỉ cửa hàng/chi nhánh bla bla bla...</p>
        <div className="font-bold">Zenith Helios</div>
        <div className="text-xs">@ All right reserved.</div>
      </div>
      <div className="flex-col">
        <p className="text-xl font-bold mb-2">
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
        <div className="my-2">
            <p className="pt-2 text-base">2024 - SmileNailHair. All rights reserved ©.</p>
        </div>
      </div>
    </div>
  );
}
