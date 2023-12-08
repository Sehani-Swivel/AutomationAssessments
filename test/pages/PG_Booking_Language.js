class PGBookingLanguage{
    get btn_Language () {
        return $("(//button[@type='button'])[2]")
    }

    get btn_English () {
        return $ ("//span[text()='English (UK)']")
    }

    get btn_crossIcon () {
        return $ ("//*[@aria-label='Dismiss sign-in info.']")
    }

}
export default new PGBookingLanguage();