const galleryImages = [
  {
    id: 1,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715067/IMG_20230305_061834602_vsxn6q.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715038/IMG_20230213_173831356_1_epdldy.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715068/IMG_20230213_170244815_ltfphh.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715182/IMG_20240316_090012300_j8qzmr.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715065/IMG_20230105_163224781_HDR_2_ebokzn.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715049/IMG_20230218_184009193_uvql3x.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715069/IMG_20230213_171933001_HDR_j2vbhq.jpg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715072/IMG_20230422_132600476_sjphte.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715111/IMG_5339_nlqwon.jpg",
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715075/IMG_20231028_135552920.MP_1_to9erh.jpg",
    alt: "Gallery Image 10",
  },
  {
    id: 11,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715077/IMG_20230918_174630005_2_be3doi.jpg",
    alt: "Gallery Image 11",
  },
  {
    id: 12,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715086/IMG_20230617_132651757_2_e2jj4w.jpg",
    alt: "Gallery Image 12",
  },
  {
    id: 13,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715030/20231028_134227_1_qtndja.jpg",
    alt: "Gallery Image 13",
  },
  {
    id: 14,
    url: "https://res.cloudinary.com/sameerposwal/image/upload/v1774715060/IMG_20230218_191338963_ocuqcn.jpg",
    alt: "Gallery Image 14",
  },
]

const getOptimizedUrl = (url: string) => {
  // If we are dealing with a Cloudinary URL, use modern image optimizations:
  // f_auto: Automatically deliver in WebP/AVIF format based on browser support
  // q_auto: Automatically optimize compression quality
  // c_fill: Crop the image if proportions don't match, filling the area
  // w_800,h_600: Scale down high res images precisely for our 4/3 aspect ratio tiles
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,c_fill,w_800,h_600/")
  }
  return url
}

export default function Gallery() {
  return (
    <div className="w-full flex flex-col gap-y-8">
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <img
              src={getOptimizedUrl(image.url)}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover cursor-pointer transition-all duration-500 ease-in-out  group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}