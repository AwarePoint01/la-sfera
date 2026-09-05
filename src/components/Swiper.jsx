import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";

import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
} from "@mui/material";

const ImageSwiper = ({
	content = [],
	slidesPerView = 1.3,
	breakpoints = {
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	},
	button = false,
	buttonLabel = "Discover more",
	onClick,
}) => {
	return (
		<Swiper
			slidesPerView={slidesPerView}
			breakpoints={breakpoints}
			centeredSlides={true}
			spaceBetween={20}
			grabCursor={false}
			style={{
				paddingTop: "16px",
				paddingBottom: "20px",
			}}
		>
			{content.map((item, index) => (
				<SwiperSlide key={index}>
					<Card
						sx={{
							height: "100%",
							minHeight: "400px",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<CardHeader title={item.title} />

						<CardMedia
							component="img"
							image={item.image}
							alt={item.title}
						/>

						<CardContent>
							{item.subtitle}
						</CardContent>

						{button && (
							<CardContent
								sx={{
									textAlign: "center",
									marginTop: "auto",
								}}
								onClick={() => onClick?.(item.route)}
							>
								<Button
									variant="contained"
									color="primary"
									sx={{
										width: "100%",
										borderRadius: 5,
									}}
								>
									{buttonLabel}
								</Button>
							</CardContent>
						)}
					</Card>
				</SwiperSlide>
			))
			}
		</Swiper >
	);
};

export default ImageSwiper;