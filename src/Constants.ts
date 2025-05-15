/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;
export const STATIC_SCENE_URL = new URL("./assets/models/scene_desk_obj.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/1.png", import.meta.url).href,
	new URL("./assets/boards/2.png", import.meta.url).href,
	new URL("./assets/boards/3.jpg", import.meta.url).href,
	new URL("./assets/boards/4.jpg", import.meta.url).href,
	new URL("./assets/boards/5.png", import.meta.url).href,
	new URL("./assets/boards/6.png", import.meta.url).href,
	new URL("./assets/boards/7.png", import.meta.url).href,
	new URL("./assets/boards/8.jpg", import.meta.url).href,
	new URL("./assets/boards/9.jpg", import.meta.url).href,
	new URL("./assets/boards/10.png", import.meta.url).href
];

/*
* Audio Resources
* */
export const AUDIO_URL = new URL("./assets/audio/我记得.m4a", import.meta.url).href;

/*
* Intro
* */
export const BOARDS_INFO: Record<string, {title: string, author: string, describe: string}> = {
	1: {
		title: "《Quét Đi Nỗi Buồn》",
		author: "HnguynbeeIT",
		describe: `
		Gửi em,<br>

        Cuộc sống không phải lúc nào cũng bằng phẳng. Sẽ có những lúc ta vấp ngã, những ngày nỗi buồn ghé qua, và cả những khoảnh khắc tưởng chừng như chẳng thể gượng dậy.
        Nhưng em à, đừng để những điều ấy đè nặng tâm hồn mình. Hãy hình dung như đang cầm một chiếc chổi nhỏ, nhẹ nhàng quét đi từng chút muộn phiền, từng lớp bụi u sầu bám trong tim.
        Mỗi lần quét là một lần em tự nhắc mình: "Mình xứng đáng với những ngày bình yên, những khoảnh khắc hạnh phúc."<br>
        Bởi sau cơn mưa, trời nhất định sẽ lại sáng. Và anh tin, ở cuối con đường em đang đi qua, là những điều tốt đẹp đang đợi em — có thể là một ngày nắng, một nụ cười, hay... là anh.<br>
        Thương em.<br>
        ❤️
		`
	},
	2: {
		title: "《Nguyên Liệu Của Hạnh Phúc》",
		author: "HnguynbeeIT",
		describe: `
		Gửi em,<br>
        Trong chiếc nồi nhỏ kỳ diệu này, anh gom góp những điều đẹp nhất của cuộc sống để nấu thành một món quà dành riêng cho em.<br>
    	Anh thả vào đó một chút thông thái từ cây nấm – để em luôn sáng suốt giữa những lựa chọn.
        Một chút tình yêu từ trái tim – vì em xứng đáng được yêu bằng cả chân thành.
        Một chút chấp nhận từ chiếc lông vũ – để em luôn nhẹ lòng trước những điều không hoàn hảo.
        Thêm vào một nhúm may mắn từ cỏ bốn lá – để em luôn mỉm cười dù ngày có ra sao.	
        Và cuối cùng, là sự ấm áp anh gói gọn trong chiếc túi nhỏ – luôn mang theo bên em, như anh vậy.	
        Khi tất cả hòa quyện lại, anh tin đó là công thức giản dị nhưng trọn vẹn cho hạnh phúc — và anh mong rằng, người đầu tiên được nếm thử… chính là em.	<br>

        Yêu em thật nhiều.	<br>
        💌<br>


		`
	},
	3: {
		title: "《Hướng Dương - Nguồn Năng Lượng》",
		author: "HnguynbeeIT",
		describe: `
		Em như hoa hướng dương, luôn mang trong mình ánh sáng rực rỡ, sưởi ấm tâm hồn anh mỗi ngày. <br>
		Từ những điều giản dị nhất, em gieo vào tim anh niềm tin, hy vọng và tình yêu chân thành.<br>
		Như hoa luôn hướng về mặt trời, anh cũng luôn hướng về em – người mang lại cho anh lý do để mỉm cười mỗi sớm mai.<br>
		Nhờ có em, anh học được cách yêu thương trọn vẹn, sống tích cực và lan tỏa hạnh phúc đến những người xung quanh.
		`
	},
	4: {
		title: "《Hoa Hồng - Vẻ Đẹp Tinh Tế》",
		author: "HnguynbeeIT",
		describe: `
		Em như đóa hồng rực rỡ, không chỉ đẹp bởi vẻ ngoài mà còn bởi sự tinh tế và dịu dàng trong từng điều nhỏ bé. <br>
		Trong em là tình yêu thuần khiết, ấm áp và chân thành mà anh luôn nâng niu mỗi ngày.<br>
		Dù cuộc sống có những lúc gai góc, em vẫn kiên cường giữ lấy vẻ đẹp riêng, khiến anh càng thêm trân trọng. <br>
		Như cách anh yêu em – không chỉ vì những điều hoàn hảo, mà vì cả sự mạnh mẽ và chân thật nơi em.
		`
	},
	5: {
		title: "《Ngôn Ngữ Của Hoa》",
		author: "HnguynbeeIT",
		describe: `
		Mỗi bông hoa em yêu thích đều mang trong mình một thông điệp, một câu chuyện thật dịu dàng và sâu lắng. <br>
		Những cánh hoa rực rỡ trong chiếc bình nơi góc phòng, như những lời yêu thương anh muốn gửi đến em mỗi ngày.<br>
		Dù là hoa gì, với anh, khi gắn liền với em, chúng đều trở nên đặc biệt và đầy ý nghĩa.<br>
		Anh muốn cùng em lắng nghe những câu chuyện ấy, để hiểu thêm về vẻ đẹp của em và cả cuộc sống mà chúng ta đang cùng nhau viết nên.
		`
	},
	6: {
		title: "《Nắng Vàng Ấm Áp》",
		author: "HnguynbeeIT",
		describe: `
		Những tia nắng đầu ngày len lỏi qua ô cửa, như nụ cười của em làm bừng sáng cả thế giới anh. <br>
		Chúng mang theo năng lượng tích cực, nhẹ nhàng xua tan mọi lo toan, mỏi mệt trong anh.<br>
		Anh muốn được cùng em đón lấy những tia nắng ấy, để chúng sưởi ấm trái tim mình và thắp sáng từng khoảnh khắc bên nhau.<br>
		Bởi chỉ cần có em, mỗi ngày đều trở nên rạng rỡ và đầy động lực để anh bước tiếp trên hành trình phía trước.
		`
	},
	7: {
		title: "《Lời Khen Ngợi》",
		author: "HnguynbeeIT",
		describe: `
		Những bông hoa rực rỡ trong bó hoa này như những lời yêu thương anh muốn gửi đến em – người con gái luôn nỗ lực không ngừng nghỉ. <br>
		Mỗi cánh hoa là một lời động viên dịu dàng, thay anh nói rằng anh tự hào về em biết bao. <br>
		Dù em có mệt mỏi hay chênh vênh, hãy nhớ rằng từng bước em đi đều mang ý nghĩa và xứng đáng được trân trọng. <br>
		Với anh, em luôn xứng đáng với những điều đẹp đẽ nhất trên thế gian này.
	`
	},
	8: {
		title: "《Em》 ",
		author: "HnguynbeeIT",
		describe: `
		Chào em ... .<br>
		Hong biết em còn nhớ lần đầu mình nhắn tin, những đêm hai gọi với nhau thật lâu không.
		Hai đứa từng hứa rồi sẽ gặp nhau bên nhau, vậy mà anh là đứa đã thất hứa mất rồi.
		Anh nhớ em... anh nhớ em rất nhiều... ước anh có thể gặp em, ôm em và nói yêu em thêm lần nữa.<br>
		ANH YÊU EM.
		`
	},
	9: {
		title: "《Ôm Ấp Yêu Thương》",
		author: "HnguynbeeIT",
		describe: `
		Một cái ôm ấm áp có thể xua tan đi mọi mệt mỏi, lo âu.<br>
		Như những chú thỏ nhỏ trong bức tranh, luôn dành cho nhau những cử chỉ yêu thương.<br>
		Đôi khi chỉ cần một cái ôm, một lời động viên đơn giản.<br>
		Cũng đủ để làm ấm lòng người và thắp sáng một ngày mới.
		`
	},
	10: {
		title: "《Tình Yêu Vô Điều Kiện》",
		author: "HnguynbeeIT",
		describe: `
		Dù em như nào , đang ở đâu, đang làm gì, anh vẫn luôn yêu em – trọn vẹn và dịu dàng.<br>
		Em như chú thỏ nhỏ đáng yêu, luôn mang trong mình tình yêu để sưởi ấm tim anh mỗi ngày.<br>
		Tình yêu anh dành cho em không cần điều kiện, không cần lý do.<br>
		Chỉ cần em là chính em, thế là đủ để anh yêu thương và trân trọng cả cuộc đời.

		`
	}
};

/*
* Computer Iframe SRC
* */
export const IFRAME_SRC = new URL("/universe/index.html", import.meta.url).href;

/*
* Events
* */
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_ENTER_APP = "on-enter-app";
