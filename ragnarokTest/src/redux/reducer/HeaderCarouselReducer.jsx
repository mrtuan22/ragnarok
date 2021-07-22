import { GET_CAROUSEL_URL } from "../type/CarouselType"

const initialCarousel = {
    arrCarousel: [
        "https://ro.vtcgame.vn/media/media/images/files/2000x851-Recovered.jpg",
        "https://ro.vtcgame.vn/media/media/images/files/2000x851(1)%20(3).jpg",
        "https://ro.vtcgame.vn/media/media/images/files/2000x851(2)(1).jpg"
    ]
}

export const HeaderCarouselReducer = (state = initialCarousel, action) => {
    switch (action.type) {

        default:
            return {
                ...state
            }
    }
}