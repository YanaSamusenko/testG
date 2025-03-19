import Slider from 'react-slick';




export function SimpleCarousel ({children}) {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    }

   return (
    <Slider {...settings}>
       {children}
    </Slider>
   )
}