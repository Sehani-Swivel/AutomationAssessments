class PGBookingReserve{
    
    get tf_firstName () {
        return $ ("//input[@id='firstname']")
    }

    get tf_lastName () {
        return $ ("//input[@id='lastname']")
    }

    get tf_email () {
        return $ ("//input[@id='email']")
    }

    get tf_phone () {
        return $ ("//input[@id='phone']")
    }

    get btn_nextFinalDetails () {
        return $ ("(//div[@class='bui-group__item']/..//button)[6]")
    }

    get btn_bookingLogo () {
        return $ ("//div[@class='bui-header__logo js-header-logo']")
    }

}

export default new PGBookingReserve();