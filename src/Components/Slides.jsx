import { React, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "@nextui-org/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ModalPopup from "./Modal";

const Slides = () => {
  const [mode, setMode] = useState(true);
  return (
    <>
      <div className="w-10/12 h-auto bg-white dark:bg-black py-3 ">
        <div className="items-center justify-center text-center bg-white dark:bg-black mb-4  py-2">
          <p className="text-black dark:text-white text-6xl text-center font-bold ">
            Projects
          </p>
        </div>
        <div className="bg-white dark:bg-black w-full h-auto flex items-center justify-center ">
          <div className="md:w-11/12 w-full h-full ">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              //
              grabCursor={true}
              direction="horizontal"
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              pagination={{
                type: "progressbar",
              }}
            >
              <SwiperSlide>
                <div className="bg-white dark:bg-black w-full h-auto border-2 border-black dark:border-white mb-2 dark:mb-2 dark:shadow-[10px_10px_0px_0px_rgba(255,255,255)] shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                  <div className="bg-white border-b-4 border-black dark:bg-black dark:border-white flex ">
                    <div className="w-auto flex">
                      <div className="flex ml-5 md:ml-2 justify-start items-center gap-2">
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <div className="flex justify-start items-center">
                        <p className="text-4xl font-bold py-4 text-black dark:text-white md:pr-2 pr-16">
                          Go-fit
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./public/assets/project/go-fit.png"
                    alt="..."
                    className=" w-40 h-40 object-fill overflow-hidden"
                  />
                  <div className="flex-col m-5">
                    <div className="my-3">
                      <p className="text-black dark:text-white text-start text-3xl font-semibold ">
                        About
                      </p>
                      <p className="text-black dark:text-white text-justify text-2xl mt-4 line-clamp-3 ">
                        GoFit merupakan aplikasi pendukung pusat kebugaran yang
                        dapat diakses dengan mudah melalui website. Website ini
                        dikembangkan menggunakan Laravel 9 untuk back-end, Vue 3
                        untuk front-end, dan menggabungkan library Bootstrap
                        untuk desain responsif.
                      </p>
                    </div>
                    <div className="flex justify-between text-center items-center gap-2 mt-7">
                      <div className="flex justify-center gap-2 items-center">
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "danger" : "primary"}
                        >
                          <span className="text-xl">LARAVEL</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "success" : "primary"}
                        >
                          <span className="text-xl">VUE</span>
                        </Button>
                      </div>
                      <div className="">
                        <ModalPopup
                          title="Go-Fit"
                          projectImage=""
                          description="GoFit merupakan aplikasi pendukung pusat kebugaran yang
                          beroperasi pada platform Android dan dapat diakses
                          dengan mudah melalui website. Sistem ini mengimplementasikan arsitektur client-server
                          dan tersedia di website dan platform mobile. Untuk
                          pengelolaan website digunakan oleh tenaga kerja pusat
                          kebugaran untuk melakukan pengaturan jadwal harian, aktivasi member, dan lain-lain. 
                          Pengelolaan platform mobile digunakan oleh
                          member untuk melakukan transaksi deposit, booking,
                          menjadi member, dan lain-lain. Website ini dikembangkan
                          menggunakan Laravel 9 untuk back-end, Vue 3 untuk
                          front-end, dan menggabungkan perpustakaan Bootstrap
                          untuk desain responsif. Selain itu, aplikasi Android
                          dibuat menggunakan Flutter."
                          contributor1="Tanto"
                          avatar1="./assets/wsp.png"
                          avatar2=""
                          id="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white dark:bg-black w-full h-auto border-2 border-black dark:border-white mb-2 dark:mb-2 dark:shadow-[10px_10px_0px_0px_rgba(255,255,255)] shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                  <div className="bg-white border-b-4 border-black dark:bg-black dark:border-white flex ">
                    <div className="w-auto flex">
                      <div className="flex ml-5 md:ml-2 justify-start items-center gap-2">
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <div className="flex justify-start items-center">
                        <p className="text-4xl font-bold py-4 text-black dark:text-white md:pr-2 pr-16">
                          SIATMA
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./public/assets/project/siatma.png"
                    alt="..."
                    className=" w-40 h-40 object-fill overflow-hidden"
                  />
                  <div className="flex-col m-5">
                    <div className="my-3">
                      <p className="text-black dark:text-white text-start text-3xl font-semibold ">
                        About
                      </p>
                      <p className="text-black dark:text-white text-justify text-2xl mt-4 line-clamp-3 ">
                        SIATMA (Sistem Informasi Atma Jaya Yogyakarta) digunakan
                        oleh tenaga kerja perguruan tinggi seperti Admin Kantor
                        Sistem Informasi, Program Studi, Administrasi
                        Perkuliahan dan Administrasi Ujian. Pengembangan Website
                        ini menggunakan ASP.NET 6 CORE MVCs.
                      </p>
                    </div>
                    <div className="flex justify-between text-center items-center gap-2 mt-7">
                      <div className="flex justify-center gap-2 items-center">
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "secondary" : "primary"}
                        >
                          <span className="text-xl">ASP .NET</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "warning" : "primary"}
                        >
                          <span className="text-xl">MSSQL</span>
                        </Button>
                      </div>
                      <div className="">
                        <ModalPopup
                          title="SIATMA"
                          projectImage=""
                          description="SIATMA (Sistem Informasi Atma Jaya Yogyakarta) digunakan
                          oleh tenaga kerja perguruan tinggi seperti Admin Kantor
                          Sistem Informasi, Program Studi, Administrasi
                          Perkuliahan dan Administrasi Ujian. Beberapa aksi yang
                          dapat dilakukan yaitu pengelolaan mahasiswa, kurikulum,
                          penawaran kelas, mata kuliah, dan lain-lain.
                          Pengembangan Website ini menggunakan ASP.NET 6 CORE MVCs
                          dan MSSQL untuk pengelolaan database.
                          "
                          contributor1="Tanto"
                          avatar1="./assets/wsp.png"
                          avatar2=""
                          id="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white dark:bg-black w-full h-auto border-2 border-black dark:border-white mb-2 dark:mb-2 dark:shadow-[10px_10px_0px_0px_rgba(255,255,255)] shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                  <div className="bg-white border-b-4 border-black dark:bg-black dark:border-white flex ">
                    <div className="w-auto flex">
                      <div className="flex ml-5 md:ml-2 justify-start items-center gap-2">
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <div className="flex justify-start items-center">
                        <p className="text-4xl font-bold py-4 text-black dark:text-white md:pr-2 pr-16">
                          Product Catalog
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./public/assets/project/product.png"
                    alt="..."
                    className=" w-40 h-40 object-fill overflow-hidden"
                  />
                  <div className="flex-col m-5">
                    <div className="my-3">
                      <p className="text-black dark:text-white text-start text-3xl font-semibold ">
                        About
                      </p>
                      <p className="text-black dark:text-white text-justify text-2xl mt-4 line-clamp-3 ">
                        Proyek ini berfokus pada penyediaan produk. Terdapat 2
                        role yaitu admin dan user. Admin dapat melakukan
                        tindakan CRUD pada suatu produk dan pengguna dapat
                        melihat detail produk. Proyek ini ada dengan tujuan
                        untuk mengikuti tes dan menambah portofolio.
                      </p>
                    </div>
                    <div className="flex justify-between text-center items-center gap-2 mt-7">
                      <div className="flex justify-center gap-2 items-center">
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "danger" : "primary"}
                        >
                          <span className="text-xl">LARAVEL</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "primary" : "primary"}
                        >
                          <span className="text-xl">TAILWIND</span>
                        </Button>
                      </div>
                      <div className="">
                        <ModalPopup
                          title="Product Catalog"
                          projectImage=""
                          description="   Proyek ini berfokus pada penyediaan produk. Terbagi atas
                          2 role yaitu Admin dan User. Admin sebagai pengelola
                          produk dapat melakukan tindakan CRUD pada suatu produk.
                          Pengguna sebagai pembeli dapat melihat detail produk
                          seperti ketersediaan barang, harga, dan kategori produk.
                          Proyek ini dibuat dengan tujuan untuk mengikuti tes dan
                          menambah portofolio"
                          contributor1="Tanto"
                          avatar1="./assets/wsp.png"
                          id="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white dark:bg-black w-full h-auto border-2 border-black dark:border-white mb-2 dark:mb-2 dark:shadow-[10px_10px_0px_0px_rgba(255,255,255)] shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                  <div className="bg-white border-b-4 border-black dark:bg-black dark:border-white flex ">
                    <div className="w-auto flex">
                      <div className="flex ml-5 md:ml-2 justify-start items-center gap-2">
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                        <div className="rounded-full px-1 py-1 bg-white dark:bg-black border-2 dark:border-white  border-black"></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <div className="flex justify-start items-center">
                        <p className="text-4xl font-bold py-4 text-black dark:text-white md:pr-2 pr-16">
                          MANGiAme
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./public/assets/project/manganime.png"
                    alt="..."
                    className=" w-40 h-40 object-fill overflow-hidden"
                  />
                  <div className="flex-col m-5">
                    <div className="my-3">
                      <p className="text-black dark:text-white text-start text-3xl font-semibold ">
                        About
                      </p>
                      <p className="text-black dark:text-white text-justify text-2xl mt-4 line-clamp-3 ">
                        MANG(i)A(me) adalah gabungan kata dari Manga dan Anime
                        dimana website ini menampilkan seputar anime favorit dan
                        populer. Fitur seputar Manga sedang dalam pengembangan.
                        Menggunakan Next.js untuk tampilan Front-end dan
                        menggunakan Jikan API dalam fetch data.
                      </p>
                    </div>
                    <div className="flex justify-between text-center items-center gap-2 mt-7">
                      <div className="flex justify-center gap-2 items-center">
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "default" : "primary"}
                        >
                          <span className="text-xl">NEXT</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="bordered"
                          disabled
                          color={mode ? "primary" : "primary"}
                        >
                          <span className="text-xl">TAILWIND</span>
                        </Button>
                      </div>
                      <div className="">
                        <ModalPopup
                          title="MANGiAme"
                          projectImage="./public/assets/project/manganime.png"
                          description="MANG(i)A(me) adalah gabungan kata dari 'Manga' dan 'Anime'
                          dimana website ini menampilkan seputar anime favorit, terbaru, dan
                          populer. Menggunakan Next.js untuk tampilan Front-end
                          dan menggunakan 'Jikan API' dalam fetch data. Tampilan telah mengimplementasikan 
                          dengan prinsip responsif untuk mobile."
                          contributor1="Tanto"
                          avatar1="./assets/wsp.png"
                          avatar2=""
                          id="4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slides;
