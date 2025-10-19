const HomePage: number = 1;
const GiftPage: number = 2;
const MusicPage: number = 3;

class CurrentPageManager {
	currentPage: number;

	constructor() {
		this.currentPage = HomePage;
	}

	setHomePage() {
		this.currentPage = HomePage;
	}

	setGiftPage() {
		this.currentPage = GiftPage;
	}

	setMusicPage() {
		this.currentPage = MusicPage;
	}
}

const AppPages = {
	HomePage: HomePage,
	GiftPage: GiftPage,
	MusicPage: MusicPage
};
const PageManager = new CurrentPageManager();

export { PageManager, AppPages };
