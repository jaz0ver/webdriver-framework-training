class WebControl {
    public async goToUrl(url: string) {
        await browser.url(url);
    }
}
export default new WebControl();