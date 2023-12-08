class PGBookingStays{

    get btn_Stays () {
        return $("//a[@id='accommodations']")
    }

    get tf_Location () {
        return $("//input[@id = ':re:']")
    }

    get btn_Search() {
        return $("//button[@type='submit']")
    }

    get dtp_ClickDate() {
        return $("//div[@class='f73e6603bf']")
    }

    dtp_checkin(idf_checkIndate){
        return $(`//span[@data-date="${idf_checkIndate}"]`)  
    }

    get dd_Occupancy(){
        return $("//button[@data-testid='occupancy-config']")
    }

    get dd_selectAdult() {
        return $("(//button[@tabindex='-1'])[1]")
    }

    get chk_SelectPropertyRating() {
        return $("//input[@id=':r15:']")
    }

    get dd_SortBy() {
        return $("//button[@data-testid='sorters-dropdown-trigger']")
    }

    get btn_SortBy(){
        return $("//button[@data-id='price']']")
    }

    get lnk_LowestFirst() {
        return $("//span[text()='Price (lowest first)']")
    }

    get lnk_SecondItemFromSearchList() {
        return $("(//a[@class='a78ca197d0'])[2]")
    }

    get chk_SelectRooms() {
        return $("//select[@id='hprt_nos_select_841799201_355808806_1_2_0']")
    }

    get btn_Reserve() {
        return $("//button[@id='b_tt_holder_1']")
    }
    
}

export default new PGBookingStays();