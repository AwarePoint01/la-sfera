import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AddIcon from '@mui/icons-material/Add';

import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
} from "@mui/material";

const ImageSwiper = ({
	content = [],
	slidesPerView = { xs: 1.3, sm: 2, md: 3 },
	breakpoints = {
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	},
	button = false,
	onClick,
}) => {
	return (
		<Swiper
			slidesPerView={slidesPerView}
			breakpoints={breakpoints}
			centeredSlides={true}
			spaceBetween={20}
			grabCursor={false}
		>
			{content.map((item, index) => (
				<SwiperSlide key={index}>
					<Card sx={{ height: "unset" }}>
						<CardHeader title={item.title} />
						<CardMedia
							component="img"
							image={item.image}
							alt={item.title}
						/>
						<CardContent variant="body1">
							{item.subtitle}
						</CardContent>

						{button && (
							<CardContent sx={{ textAlign: "center" }} onClick={() => onClick?.(item.route)}>
								<AddIcon />
							</CardContent>
						)}
					</Card>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ImageSwiper;