class PGBookingCurrency{
    get btn_Currency () {
        return $("(//button[@type='button'])[1]/..//span")
    }

    get btn_AUD () {
        return $ ("(//div[text()='AUD'])[1]")
    }

}
export default new PGBookingCurrency();