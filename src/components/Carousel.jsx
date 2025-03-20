import Slider from 'react-slick';

export function SimpleCarousel ({children}) {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 500,
            settings: {
                    slidesToShow: 1
                    
                }
            }
        ]
        }

   return (
    <Slider {...settings}>
       {children}
    </Slider>
   )
}